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
  expanded?: boolean
  completed?: boolean
}

const renderStatusChip = (state: { status: CommandExecutionStatus; message?: string }): ReactNode => {
  if (state.status === CommandExecutionStatus.SUCCESS) {
    return <StatusChip tone="success">Permission granted</StatusChip>
  }
  if (state.status === CommandExecutionStatus.ERROR) {
    return <StatusChip tone="error">{state.message ?? 'Command failed'}</StatusChip>
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
  expanded = true,
  completed = false,
}: GrantPermissionStepProps) => (
  <StepCard
    number={3}
    headline="Grant permission"
    description={<p>Run the grant command once your device is connected.</p>}
    actions={
      <>
        <md-filled-button onClick={onGrant} disabled={!canExecute || isGranting}>
          {isGranting ? 'Executing…' : 'Grant WRITE_SECURE_SETTINGS'}
        </md-filled-button>
        <md-outlined-button onClick={onCheck} disabled={!canExecute || isChecking}>
          {isChecking ? 'Checking…' : 'Check status'}
        </md-outlined-button>
      </>
    }
    statusChip={renderStatusChip(grantState)}
    expanded={expanded}
    completed={completed}
  >
    <p>This command runs on your device:</p>
    <CommandDetails />
    {grantState.output && <p className="command-output">{grantState.output}</p>}
    {statusState.output && <p className="command-output">Status: {statusState.output}</p>}
    {statusState.status === CommandExecutionStatus.ERROR && (
      <StatusChip tone="error">{statusState.message}</StatusChip>
    )}
  </StepCard>
)
