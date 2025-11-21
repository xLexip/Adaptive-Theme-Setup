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
  onRateApp(): void
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
  onRateApp,
  expanded = true,
  completed = false,
}: GrantPermissionStepProps) => {
  const canGrant = canExecute && !isGranting && isAppInstalled === true
  const showPermissionChip = isAppInstalled === true
  const permissionGranted = permissionStatus.status === CommandExecutionStatus.SUCCESS

  const handleOpenAbout = () => {
    window.open('https://github.com/xLexip/Hecate/blob/main/README.md', '_blank', 'noreferrer')
  }

  const actions =
    permissionGranted
      ? (
          <div className="grant-permission__more-actions">
            <md-filled-button onClick={() => window.close()}>Close tab</md-filled-button>
            <md-text-button onClick={handleOpenAbout}>About Adaptive Theme</md-text-button>
            <md-text-button onClick={onRateApp}>Rate app</md-text-button>
          </div>
        )
      : undefined

  const actionsRight =
    permissionGranted
      ? undefined
      : (
          <div className="grant-permission__actions">
            {isAppInstalled === false && (
              <md-outlined-button onClick={onInstallApp}>Install app</md-outlined-button>
            )}
            <md-filled-button onClick={onGrant} disabled={!canGrant}>
              {isGranting ? 'Executing…' : 'Grant permission'}
            </md-filled-button>
          </div>
        )

  return (
    <StepCard
      number={3}
      headline="Grant permission"
      actions={actions}
      actionsRight={actionsRight}
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
      <CommandDetails />
      {grantState.output && <p className="command-output">{grantState.output}</p>}
      {permissionGranted && (
        <p className="all-done">All done! You can now use Adaptive Theme on your mobile device.</p>
      )}
    </StepCard>
  )
}
