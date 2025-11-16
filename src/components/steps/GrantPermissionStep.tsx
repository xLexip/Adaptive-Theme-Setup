import type { ReactNode } from 'react'
import { StepCard } from '../layout/StepCard'
import { StatusChip } from '../feedback/StatusChip'
import { CommandDetails } from '../info/CommandDetails'
import { CommandExecutionStatus } from '../../types/adb'

interface GrantPermissionStepProps {
  canExecute: boolean
  isGranting: boolean
  isChecking: boolean
  grantState: {
    status: CommandExecutionStatus
    message?: string
    output?: string
  }
  statusState: {
    status: CommandExecutionStatus
    message?: string
    output?: string
  }
  onGrant(): void
  onCheck(): void
}

const renderStatusChip = (state: { status: CommandExecutionStatus; message?: string }): ReactNode => {
  if (state.status === CommandExecutionStatus.SUCCESS) {
    return <StatusChip tone="success">Berechtigung gesetzt</StatusChip>
  }
  if (state.status === CommandExecutionStatus.ERROR) {
    return <StatusChip tone="error">{state.message ?? 'Fehler beim Ausführen'}</StatusChip>
  }
  return undefined
}

export const GrantPermissionStep = ({
  canExecute,
  isGranting,
  isChecking,
  grantState,
  statusState,
  onGrant,
  onCheck,
}: GrantPermissionStepProps) => (
  <StepCard
    number={3}
    headline="Berechtigung erteilen"
    description={<p>Führe den Grant-Befehl aus, sobald dein Gerät verbunden ist.</p>}
    actions={
      <>
        <md-filled-button onClick={onGrant} disabled={!canExecute || isGranting}>
          {isGranting ? 'Befehl läuft…' : 'Berechtigung gewähren'}
        </md-filled-button>
        <md-outlined-button onClick={onCheck} disabled={!canExecute || isChecking}>
          {isChecking ? 'Prüfe…' : 'Status prüfen'}
        </md-outlined-button>
      </>
    }
    statusChip={renderStatusChip(grantState)}
  >
    <p>Es wird folgender Befehl auf deinem Gerät ausgeführt:</p>
    <CommandDetails />
    {grantState.output && <p className="command-output">{grantState.output}</p>}
    {statusState.output && <p className="command-output">Status: {statusState.output}</p>}
    {statusState.status === CommandExecutionStatus.ERROR && (
      <StatusChip tone="error">{statusState.message}</StatusChip>
    )}
  </StepCard>
)

