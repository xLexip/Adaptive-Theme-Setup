import type { ReactNode } from 'react'
import { StepCard } from '../layout/StepCard'
import { StatusChip } from '../feedback/StatusChip'
import { CommandDetails } from '../info/CommandDetails'
import { CommandExecutionStatus } from '../../types/adb'

export interface GrantPermissionStepProps {
  canExecute: boolean
  isGranting: boolean
  deviceName?: string
  grantState: {
    status: CommandExecutionStatus
    message?: string
    output?: string
  }
  permissionStatus: {
    status: CommandExecutionStatus
    message?: string
  }
  isAppInstalled: boolean | null
  onGrant(): void
  onInstallApp(): void
  expanded?: boolean
  completed?: boolean
}

const renderPermissionChip = (status: { status: CommandExecutionStatus; message?: string }): ReactNode => {
  if (status.status === CommandExecutionStatus.SUCCESS) {
    return <StatusChip tone="success">Permission granted</StatusChip>
  }
  if (status.status === CommandExecutionStatus.ERROR) {
    return <StatusChip tone="error">{status.message ?? 'Permission missing'}</StatusChip>
  }
  if (status.status === CommandExecutionStatus.RUNNING) {
    return <StatusChip tone="info">Checking permission…</StatusChip>
  }
  return <StatusChip tone="error">Permission missing</StatusChip>
}

const renderAppInstalledChip = (installed: boolean | null): ReactNode => {
  if (installed === null) {
    return <StatusChip tone="info">Checking app installation…</StatusChip>
  }
  if (installed) {
    return <StatusChip tone="success">App installed</StatusChip>
  }
  return <StatusChip tone="error">App not installed</StatusChip>
}

export const GrantPermissionStep = ({
  canExecute,
  isGranting,
  deviceName,
  grantState,
  permissionStatus,
  isAppInstalled,
  onGrant,
  onInstallApp,
  expanded = true,
  completed = false,
}: GrantPermissionStepProps) => {
  const canGrant = canExecute && !isGranting && isAppInstalled === true
  const showPermissionChip = isAppInstalled === true

  return (
    <StepCard
      number={3}
      headline="Grant permission"
      description={<p>Run the grant command once your device is connected.</p>}
      actions={
        permissionStatus.status === CommandExecutionStatus.SUCCESS ? (
          undefined
        ) : (
          <div className="grant-permission__actions">
            <md-filled-button onClick={onGrant} disabled={!canGrant}>
              {isGranting ? 'Executing…' : 'Grant permission'}
            </md-filled-button>
            {isAppInstalled === false && (
              <md-outlined-button onClick={onInstallApp}>Install app</md-outlined-button>
            )}
          </div>
        )
      }
      statusChip={
        deviceName ? (
          <div className="grant-permission__chips">
            <StatusChip tone="success">Connected to {deviceName}</StatusChip>
            {renderAppInstalledChip(isAppInstalled)}
            {showPermissionChip && renderPermissionChip(permissionStatus)}
          </div>
        ) : (
          <div className="grant-permission__chips">
            {renderAppInstalledChip(isAppInstalled)}
            {showPermissionChip && renderPermissionChip(permissionStatus)}
          </div>
        )
      }
      expanded={expanded}
      completed={completed}
    >
      <p>This command runs on your device:</p>
      <CommandDetails />
      {grantState.output && <p className="command-output">{grantState.output}</p>}
      {permissionStatus.status === CommandExecutionStatus.SUCCESS && (
        <p className="all-done">All done! You can now use Adaptive Theme on your device.</p>
      )}
    </StepCard>
  )
}
