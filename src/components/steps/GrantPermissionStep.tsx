import type {ReactNode} from 'react'
import {StepCard} from '../layout/StepCard'
import {StatusChip} from '../feedback/StatusChip'
import {CommandDetails} from '../info/CommandDetails'
import {CommandExecutionStatus} from '../../types/adb'
import {useI18n} from '../../i18n/i18n'

export interface GrantPermissionStepProps {
	canExecute: boolean
	isGranting: boolean
	deviceName?: string
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
	const {t} = useI18n()

	switch (status) {
		case CommandExecutionStatus.SUCCESS:
			return <StatusChip tone="success">{t('steps.grantPermission.permissionStatus.granted')}</StatusChip>
		case CommandExecutionStatus.ERROR:
			return (
				<StatusChip tone="error">
					{message ?? t('steps.grantPermission.permissionStatus.missing')}
				</StatusChip>
			)
		case CommandExecutionStatus.RUNNING:
			return <StatusChip tone="info">{t('steps.grantPermission.permissionStatus.checking')}</StatusChip>
		default:
			return <StatusChip tone="error">{t('steps.grantPermission.permissionStatus.missing')}</StatusChip>
	}
}

const AppInstalledChip = ({installed}: { installed: boolean | null }): ReactNode => {
	const {t} = useI18n()

	if (installed === null) {
		return <StatusChip tone="info">{t('steps.grantPermission.appInstalledStatus.checking')}</StatusChip>
	}
	if (installed) {
		return <StatusChip tone="success">{t('steps.grantPermission.appInstalledStatus.installed')}</StatusChip>
	}
	return <StatusChip tone="error">{t('steps.grantPermission.appInstalledStatus.notInstalled')}</StatusChip>
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
}) => {
	const {t} = useI18n()

	return (
		<div className="grant-permission__actions">
			{isAppInstalled === false && (
				<md-outlined-button onClick={onInstallApp}>{t('steps.grantPermission.actions.installApp')}</md-outlined-button>
			)}
			<md-filled-button onClick={onGrant} disabled={!canGrant}>
				{isGranting
					? t('steps.grantPermission.actions.executing')
					: t('steps.grantPermission.actions.grantPermission')}
			</md-filled-button>
		</div>
	)
}

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
	const {t} = useI18n()

	const canGrant = canExecute && !isGranting && isAppInstalled === true
	const permissionGranted = permissionStatus.status === CommandExecutionStatus.SUCCESS
	const showPermissionChip = isAppInstalled === true

	const statusChips: ReactNode[] = []

	if (deviceName) {
		statusChips.push(
			<StatusChip key="device" tone="success">
				{t('steps.grantPermission.chips.connectedTo', {deviceName})}
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

	// For reliable centering we'll render the post-grant action buttons in the body
	const actions = undefined

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
			headline={t('steps.grantPermission.headline')}
			actions={actions}
			actionsRight={actionsRight}
			statusChip={permissionGranted ? undefined : <div className="grant-permission__chips">{statusChips}</div>}
			expanded={expanded}
			completed={completed}
		>
			{!permissionGranted && <CommandDetails/>}

			{permissionGranted && (
				<div className="all-done" aria-live="polite">
					<div style={{height: 100}} aria-hidden="true"/>
					<p className="all-done__text">{t('steps.grantPermission.allDone')}</p>
					<div style={{height: 100}} aria-hidden="true"/>
				</div>
			)}

			{permissionGranted && (
				<div className="step-card__actions-center">
					<div className="grant-permission__buttons" style={{textAlign: 'center'}}>
						<md-outlined-button style={{display: 'inline-block', width: 'auto', margin: '0 12px'}}
											onClick={() => window.open('https://github.com/xLexip/Adaptive-Theme', '_blank', 'noreferrer')}>
							GitHub Repo
						</md-outlined-button>
						<md-outlined-button style={{display: 'inline-block', width: 'auto', margin: '0 12px'}} onClick={onRateApp}>
							{t('steps.grantPermission.actions.rateApp')}
						</md-outlined-button>
					</div>
				</div>
			)}

		</StepCard>
	)
}
