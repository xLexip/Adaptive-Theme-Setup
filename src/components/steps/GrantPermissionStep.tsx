import type {ReactNode} from 'react'
import {StepCard} from '../layout/StepCard'
import {StatusChip} from '../feedback/StatusChip'
import {CommandDetails} from '../info/CommandDetails'
import {CommandExecutionStatus} from '../../types/adb'

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
	expanded?: boolean
	completed?: boolean

	onGrant(): void

	onInstallApp(): void

	onRateApp(): void
}

const PermissionStatusChip = ({
								  status,
								  message,
							  }: {
	status: CommandExecutionStatus
	message?: string
}): ReactNode => {
	switch (status) {
		case CommandExecutionStatus.SUCCESS:
			return <StatusChip tone="success">Permission granted</StatusChip>
		case CommandExecutionStatus.ERROR:
			return <StatusChip tone="error">{message ?? 'Permission missing'}</StatusChip>
		case CommandExecutionStatus.RUNNING:
			return <StatusChip tone="info">Checking permission…</StatusChip>
		default:
			return <StatusChip tone="error">Permission missing</StatusChip>
	}
}

const AppInstalledChip = ({installed}: { installed: boolean | null }): ReactNode => {
	if (installed === null) {
		return <StatusChip tone="info">Checking app installation…</StatusChip>
	}
	if (installed) {
		return <StatusChip tone="success">App installed</StatusChip>
	}
	return <StatusChip tone="error">App not installed</StatusChip>
}

const GrantedActions = ({onRateApp}: { onRateApp: () => void }) => {
	const handleOpenAbout = () => {
		window.open('https://github.com/xLexip/Hecate', '_blank', 'noreferrer')
	}

	return (
		<div className="grant-permission__more-actions">
			<md-text-button onClick={handleOpenAbout}>About Adaptive Theme</md-text-button>
			<md-text-button onClick={onRateApp}>Rate app</md-text-button>
		</div>
	)
}

const PendingActions = ({
							canGrant,
							isAppInstalled,
							isGranting,
							onInstallApp,
							onGrant,
						}: {
	canGrant: boolean
	isAppInstalled: boolean | null
	isGranting: boolean
	onInstallApp: () => void
	onGrant: () => void
}) => (
	<div className="grant-permission__actions">
		{isAppInstalled === false && (
			<md-outlined-button onClick={onInstallApp}>Install app</md-outlined-button>
		)}
		<md-filled-button onClick={onGrant} disabled={!canGrant}>
			{isGranting ? 'Executing…' : 'Grant permission'}
		</md-filled-button>
	</div>
)

export const GrantPermissionStep = ({
										canExecute,
										isGranting,
										deviceName,
										permissionStatus,
										isAppInstalled,
										onGrant,
										onInstallApp,
										onRateApp,
										expanded = true,
										completed = false,
									}: GrantPermissionStepProps) => {
	const canGrant = canExecute && !isGranting && isAppInstalled === true
	const permissionGranted = permissionStatus.status === CommandExecutionStatus.SUCCESS
	const showPermissionChip = isAppInstalled === true

	const statusChips: ReactNode[] = []

	if (deviceName) {
		statusChips.push(
			<StatusChip key="device" tone="success">
				Connected to {deviceName}
			</StatusChip>,
		)
	}

	statusChips.push(<AppInstalledChip key="app" installed={isAppInstalled}/>)

	if (showPermissionChip) {
		statusChips.push(
			<PermissionStatusChip
				key="permission"
				status={permissionStatus.status}
				message={permissionStatus.message}
			/>,
		)
	}

	const actions = permissionGranted ? <GrantedActions onRateApp={onRateApp}/> : undefined

	const actionsRight =
		permissionGranted
			? undefined
			: (
				<PendingActions
					canGrant={canGrant}
					isAppInstalled={isAppInstalled}
					isGranting={isGranting}
					onInstallApp={onInstallApp}
					onGrant={onGrant}
				/>
			)

	return (
		<StepCard
			number={3}
			headline="Grant permission"
			actions={actions}
			actionsRight={actionsRight}
			statusChip={<div className="grant-permission__chips">{statusChips}</div>}
			expanded={expanded}
			completed={completed}
		>
			<CommandDetails/>

			{permissionGranted && (
				<p className="all-done">All done! You can now use Adaptive Theme on your mobile device.</p>
			)}
		</StepCard>
	)
}
