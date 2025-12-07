import './App.css'
import type {StepCardProps} from './components/layout/StepCard'
import {StepCard} from './components/layout/StepCard'
import {PreparationStep} from './components/steps/PreparationStep'
import {ConnectionStep} from './components/steps/ConnectionStep'
import type {GrantPermissionStepProps} from './components/steps/GrantPermissionStep'
import {GrantPermissionStep} from './components/steps/GrantPermissionStep'
import {useAdbConnection} from './hooks/useAdbConnection'
import {usePermissionGrant} from './hooks/usePermissionGrant'
import {AdbConnectionState, CommandExecutionStatus} from './types/adb'
import {UnsupportedBrowserCard} from './components/info/UnsupportedBrowserCard'
import {useEffect, useRef, useState} from 'react'
import githubMark from '/github-mark.svg'
import {useI18n} from './i18n/i18n'

function App() {
	const {context, connect, getAdb} = useAdbConnection()
	const adb = getAdb()
	const permission = usePermissionGrant(adb)
	const {
		grantState,
		permissionStatus,
		isAppInstalled,
		grantWriteSecureSettings,
		checkPermissionStatus,
		checkAppInstalled,
		openPlayStoreOnDevice,
		launchAdaptiveTheme,
	} = permission

	const {t} = useI18n()

	const [currentStep, setCurrentStep] = useState(1)
	const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null)
	// Disable the Continue button on the first card for the first 3 seconds
	const [firstContinueDisabled, setFirstContinueDisabled] = useState(true)
	const launchedRef = useRef(false)

	const webUsbUnsupported =
		context.state === AdbConnectionState.ERROR && context.error?.includes('WebUSB')

	useEffect(() => {
		let timer: number | undefined
		if (currentStep === 1) {
			// start disabled and enable after 3 seconds
			setFirstContinueDisabled(true)
			timer = window.setTimeout(() => setFirstContinueDisabled(false), 3000)
		} else {
			// ensure enabled on other steps
			setFirstContinueDisabled(false)
		}

		return () => {
			if (timer) clearTimeout(timer)
		}
	}, [currentStep])

	useEffect(() => {
		if (context.state === AdbConnectionState.CONNECTED) {
			setCurrentStep((prev) => (prev < 3 ? 3 : prev))
		}
	}, [context.state])

	useEffect(() => {
		if (grantState.status !== CommandExecutionStatus.SUCCESS) return

		checkPermissionStatus()

		if (!launchedRef.current) {
			launchAdaptiveTheme()
			launchedRef.current = true
		}
	}, [grantState.status, checkPermissionStatus, launchAdaptiveTheme])

	useEffect(() => {
		if (permissionStatus.status !== CommandExecutionStatus.SUCCESS) return

		if (!launchedRef.current) {
			launchAdaptiveTheme()
			launchedRef.current = true
		}
	}, [permissionStatus.status, launchAdaptiveTheme])

	useEffect(() => {
		if (currentStep === 3) {
			checkPermissionStatus()
			checkAppInstalled()
		}
	}, [currentStep, checkPermissionStatus, checkAppInstalled])

	useEffect(() => {
		if (currentStep !== 3) return

		const intervalId = globalThis.setInterval(() => {
			checkAppInstalled()
		}, 3000)

		return () => globalThis.clearInterval(intervalId)
	}, [currentStep, checkAppInstalled])

	const goToStep = (step: number) => setCurrentStep(step)

	const isGranting = grantState.status === CommandExecutionStatus.RUNNING

	const handleOpenPlayStore = async () => {
		await openPlayStoreOnDevice()
		setSnackbarMessage(t('app.snackbar.playStoreOpened'))
		setTimeout(() => setSnackbarMessage(null), 4000)
	}

	const handleInstallApp = async () => {
		await handleOpenPlayStore()
	}

	if (webUsbUnsupported) {
		return (
			<div className="app-shell">
				{/* Removed top anchors; footer will render them at the bottom */}
				<header className="app-header">
					<h3>{t('app.title')}</h3>
				</header>
				<main className="app-content">
					<UnsupportedBrowserCard/>
				</main>
				<footer className="app-footer">
					<a
						href="https://github.com/xLexip/Adaptive-Theme"
						className="app-github-button"
						target="_blank"
						rel="noreferrer noopener"
						aria-label={t('app.footer.githubAriaLabel')}
					>
						<img src={githubMark} alt={t('app.footer.githubAlt')} className="app-github-button__icon"/>
					</a>
				</footer>
			</div>
		)
	}

	return (
		<div className="app-shell">
			{/* Removed top anchors; footer will render them at the bottom */}
			<main className="app-content">
				{currentStep === 1 && (
					<StepCard
						{...({
							number: 1,
							headline: t('steps.preparation.headline'),
							expanded: true,
							completed: false,
							actionsRight: (
								<>
									<a
										href="https://play.google.com/store/apps/details?id=dev.lexip.hecate"
										className="app-playstore-inline"
										target="_blank"
										rel="noreferrer noopener"
									>
										<span className="app-playstore-inline__text">{t('steps.preparation.actions.playStoreLabel')}</span>
										<span aria-hidden className="app-playstore-inline__arrow">↗</span>
									</a>
									<md-filled-button onClick={() => goToStep(2)} disabled={firstContinueDisabled}>
										{t('steps.preparation.actions.continue')}
									</md-filled-button>
								</>
							),
						} satisfies StepCardProps)}
					>
						<p>
							{t('steps.preparation.intro.general')}
							<br/>
							<br/>
							{t('steps.preparation.intro.explanation')}
							<br/>
							<br/>
							<b>{t('steps.preparation.intro.howToGrant')}</b>
						</p>
						<PreparationStep/>
						<p>
							<b>{t('steps.preparation.intro.expertsLabel')}</b>
							<br/> {t('steps.preparation.intro.expertsDescription')}
							<br/> <i>adb shell pm grant dev.lexip.hecate android.permission.WRITE_SECURE_SETTINGS</i>
						</p>
					</StepCard>
				)}

				{currentStep === 2 && (
					<ConnectionStep
						state={context.state}
						error={context.error}
						deviceName={context.device?.name || context.device?.serial}
						onConnect={connect}
						onBack={() => goToStep(1)}
						expanded
						completed={false}
					/>
				)}

				{currentStep >= 3 && (
					<GrantPermissionStep
						{...({
							canExecute: Boolean(adb),
							isGranting,
							deviceName: context.device?.name || context.device?.serial,
							grantState,
							permissionStatus,
							isAppInstalled,
							onGrant: () => {
								void grantWriteSecureSettings()
							},
							onInstallApp: () => {
								void handleInstallApp()
							},
							onRateApp: () => {
								void handleOpenPlayStore()
							},
							expanded: true,
							completed: permissionStatus.status === CommandExecutionStatus.SUCCESS,
						} satisfies GrantPermissionStepProps)}
					/>
				)}
			</main>
			<footer className="app-footer">
				<a
					href="https://github.com/xLexip/Adaptive-Theme"
					className="app-github-button"
					target="_blank"
					rel="noreferrer noopener"
					aria-label={t('app.footer.githubAriaLabel')}
				>
					<img src={githubMark} alt={t('app.footer.githubAlt')} className="app-github-button__icon"/>
				</a>
			</footer>
			{snackbarMessage && <div className="snackbar">{snackbarMessage}</div>}
		</div>
	)
}

export default App
