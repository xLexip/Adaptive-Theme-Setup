import type {ReactNode} from 'react'
import {StepCard} from '../layout/StepCard'
import {AdbConnectionState} from '../../types/adb'
import {StatusChip} from '../feedback/StatusChip'
import {useI18n} from '../../i18n/i18n'

interface ConnectionStepProps {
	state: AdbConnectionState
	error?: string
	deviceName?: string
	expanded?: boolean
	completed?: boolean

	onConnect(): void

	onBack(): void
}

const StatusChipContent = ({
							   state,
							   error,
							   deviceName,
						   }: {
	state: AdbConnectionState
	deviceName?: string
	// eslint-disable-next-line react/boolean-prop-naming
	error?: string
}): ReactNode => {
	const {t} = useI18n()

	switch (state) {
		case AdbConnectionState.CONNECTING:
			return <StatusChip tone="info">{t('steps.connection.status.connecting')}</StatusChip>
		case AdbConnectionState.CONNECTED:
			return (
				<StatusChip tone="success">
					{t('steps.connection.status.connected', {deviceName: deviceName ?? ''})}
				</StatusChip>
			)
		case AdbConnectionState.ERROR:
			return (
				<StatusChip tone="error">
					{error ?? t('steps.connection.status.error')}
				</StatusChip>
			)
		default:
			return <StatusChip tone="error">{t('steps.connection.status.noDevice')}</StatusChip>
	}
}

export const ConnectionStep = ({state, error, deviceName, onConnect, onBack, expanded = true, completed = false}: ConnectionStepProps) => {
	const {t} = useI18n()

	return (
		<StepCard
			number={2}
			headline={t('steps.connection.headline')}
			expanded={expanded}
			completed={completed}
			onBack={onBack}
			actionsRight={
				<md-filled-button onClick={onConnect} disabled={state === AdbConnectionState.CONNECTING}>
					{state === AdbConnectionState.CONNECTING
						? t('steps.connection.button.connecting')
						: t('steps.connection.button.default')}
				</md-filled-button>
			}
			statusChip={<StatusChipContent state={state} error={error} deviceName={deviceName}/>}>
			<p>
				{t('steps.connection.body.line1')}
				<br/><br/>
				{t('steps.connection.body.line2')}
			</p>

			{}
			<div style={{height: 8}} aria-hidden="true"/>

			<details className="connection-cant-find" aria-labelledby="connection-cant-find-summary">
				<summary id="connection-cant-find-summary">{t('steps.connection.cantFind.title')}</summary>
				<p>{t('steps.connection.cantFind.body')}</p>
			</details>
		</StepCard>
	)
}
