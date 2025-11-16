import { useCallback, useState } from 'react'
import { CommandExecutionStatus, type CommandExecutionState } from '../types/adb'
import { GRANT_PERMISSION_COMMAND, CHECK_PERMISSION_COMMAND } from '../constants/commands'
import type { Adb } from '@yume-chan/adb'

const defaultState: CommandExecutionState = {
  status: CommandExecutionStatus.IDLE,
}

const runCommand = async (adb: Adb, command: string): Promise<string> =>
  adb.subprocess.noneProtocol.spawnWaitText(command).then((output) => output.trim())

export const usePermissionGrant = (adb?: Adb) => {
  const [grantState, setGrantState] = useState<CommandExecutionState>(defaultState)
  const [statusState, setStatusState] = useState<CommandExecutionState>(defaultState)

  const execute = useCallback(async (command: string, setter: typeof setGrantState) => {
    if (!adb) {
      setter({
        status: CommandExecutionStatus.ERROR,
        message: 'Kein Gerät verbunden.',
      })
      return
    }

    setter({ status: CommandExecutionStatus.RUNNING })
    try {
      const output = await runCommand(adb, command)
      setter({ status: CommandExecutionStatus.SUCCESS, output })
    } catch (error) {
      setter({
        status: CommandExecutionStatus.ERROR,
        message: error instanceof Error ? error.message : 'Befehl fehlgeschlagen.',
      })
    }
  }, [adb])

  const grantWriteSecureSettings = useCallback(() => execute(GRANT_PERMISSION_COMMAND, setGrantState), [execute])
  const checkPermissionStatus = useCallback(() => execute(CHECK_PERMISSION_COMMAND, setStatusState), [execute])

  const resetGrantState = useCallback(() => setGrantState(defaultState), [])
  const resetStatusState = useCallback(() => setStatusState(defaultState), [])

  return {
    grantState,
    statusState,
    grantWriteSecureSettings,
    checkPermissionStatus,
    resetGrantState,
    resetStatusState,
  }
}

