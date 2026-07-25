import './styles/App.css'
import type {StepCardProps} from './components/layout/StepCard'
import {StepCard} from './components/layout/StepCard'
import {PreparationStep} from './components/steps/PreparationStep'
import {ConnectionStep} from './components/steps/ConnectionStep'
import type {GrantPermissionStepProps} from './components/steps/GrantPermissionStep'
import {GrantPermissionStep} from './components/steps/GrantPermissionStep'
import {UnsupportedBrowserCard} from './components/info/UnsupportedBrowserCard'
import githubMark from './assets/github-mark.svg'
import {useAppLogic} from './hooks/useAppLogic'
import {CommandExecutionStatus} from './types/adb'

function App() {
	const {
		context,
		connect,
		adb,
		currentStep,
		snackbarMessage,
		firstContinueDisabled,
		webUsbUnsupported,
		isGranting,
		permissionStatus,
		isAppInstalled,
		t,
		goToStep,
		handleInstallApp,
		handleOpenRepo,
		handleRateApp,
		handleGrant,
	} = useAppLogic()

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
						<PreparationStep/>
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
							permissionStatus,
							isAppInstalled,
							onGrant: handleGrant,
							onInstallApp: handleInstallApp,
							onRateApp: handleRateApp,
							onOpenRepo: handleOpenRepo,
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
				>
					<img src={githubMark} alt={t('app.footer.githubAlt')} className="app-github-button__icon"/>
				</a>
			</footer>
			{snackbarMessage && <div className="snackbar">{snackbarMessage}</div>}
		</div>
	)
}

export default App
