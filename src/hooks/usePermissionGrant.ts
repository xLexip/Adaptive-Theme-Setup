import { useCallback, useState } from 'react'
import { CommandExecutionStatus, type CommandExecutionState } from '../types/adb'
import { GRANT_PERMISSION_COMMAND, CHECK_PERMISSION_COMMAND, ADAPTIVE_THEME_PACKAGE } from '../constants/commands'
import type { Adb } from '@yume-chan/adb'

const defaultState: CommandExecutionState = {
  status: CommandExecutionStatus.IDLE,
}

const runCommand = async (adb: Adb, command: string): Promise<string> =>
  adb.subprocess.noneProtocol.spawnWaitText(command).then((output) => output.trim())

export const usePermissionGrant = (adb?: Adb) => {
  const [grantState, setGrantState] = useState<CommandExecutionState>(defaultState)
  const [statusState, setStatusState] = useState<CommandExecutionState>(defaultState)
  const [isAppInstalled, setIsAppInstalled] = useState<boolean | null>(null)

  const execute = useCallback(async (command: string, setter: typeof setGrantState) => {
    if (!adb) {
      setter({
        status: CommandExecutionStatus.ERROR,
        message: 'No device connected.',
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
        message: error instanceof Error ? error.message : 'Command failed.',
      })
    }
  }, [adb])

  const grantWriteSecureSettings = useCallback(() => execute(GRANT_PERMISSION_COMMAND, setGrantState), [execute])

  const checkPermissionStatus = useCallback(async () => {
    if (!adb) {
      setStatusState({
        status: CommandExecutionStatus.ERROR,
        message: 'No device connected.',
      })
      return
    }

    setStatusState({ status: CommandExecutionStatus.RUNNING })
    try {
      const output = await runCommand(adb, CHECK_PERMISSION_COMMAND)
      const granted = /WRITE_SECURE_SETTINGS\s*:\s*granted=true/.test(output) || /grantedPermissions:.*WRITE_SECURE_SETTINGS/s.test(output)
      setStatusState({
        status: granted ? CommandExecutionStatus.SUCCESS : CommandExecutionStatus.ERROR,
        output,
        message: granted ? undefined : 'Permission not granted.',
      })
    } catch (error) {
      setStatusState({
        status: CommandExecutionStatus.ERROR,
        message: error instanceof Error ? error.message : 'Command failed.',
      })
    }
  }, [adb])

  const resetGrantState = useCallback(() => setGrantState(defaultState), [])
  const resetStatusState = useCallback(() => setStatusState(defaultState), [])

  const permissionStatus = {
    status: statusState.status,
    message: statusState.message,
  }

  const checkAppInstalled = useCallback(async () => {
    if (!adb) {
      setIsAppInstalled(null)
      return
    }
    try {
      const output = await runCommand(adb, `pm list packages ${ADAPTIVE_THEME_PACKAGE}`)
      setIsAppInstalled(output.includes(ADAPTIVE_THEME_PACKAGE))
    } catch {
      setIsAppInstalled(false)
    }
  }, [adb])

  const openPlayStoreOnDevice = useCallback(async () => {
    if (!adb) return
    const url = `https://play.google.com/store/apps/details?id=${ADAPTIVE_THEME_PACKAGE}`
    try {
      await runCommand(adb, `am start -a android.intent.action.VIEW -d "${url}"`)
    } catch {
      // non-critical
    }
  }, [adb])

  const launchAdaptiveTheme = useCallback(async () => {
    if (!adb) return
    try {
      await runCommand(adb, `monkey -p ${ADAPTIVE_THEME_PACKAGE} 1`)
    } catch {
      // ignore launch errors, they are non-critical
    }
  }, [adb])

  return {
    grantState,
    statusState,
    permissionStatus,
    isAppInstalled,
    grantWriteSecureSettings,
    checkPermissionStatus,
    checkAppInstalled,
    openPlayStoreOnDevice,
    resetGrantState,
    resetStatusState,
    launchAdaptiveTheme,
  }
}
