import './App.css'
import { StepCard } from './components/layout/StepCard'
import { PreparationStep } from './components/steps/PreparationStep'
import { ConnectionStep } from './components/steps/ConnectionStep'
import { GrantPermissionStep } from './components/steps/GrantPermissionStep'
import { useAdbConnection } from './hooks/useAdbConnection'
import { usePermissionGrant } from './hooks/usePermissionGrant'
import { AdbConnectionState, CommandExecutionStatus } from './types/adb'
import { UnsupportedBrowserCard } from './components/info/UnsupportedBrowserCard'
import { useEffect, useState } from 'react'
import type { StepCardProps } from './components/layout/StepCard'
import type { GrantPermissionStepProps } from './components/steps/GrantPermissionStep'
import githubMark from '/github-mark.svg'

function App() {
  const { context, connect, getAdb } = useAdbConnection()
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

  const [currentStep, setCurrentStep] = useState(1)
  const [hasLaunched, setHasLaunched] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null)

  const webUsbUnsupported =
    context.state === AdbConnectionState.ERROR && context.error?.includes('WebUSB')

  useEffect(() => {
    if (context.state === AdbConnectionState.CONNECTED) {
      setCurrentStep(3)
    }
  }, [context.state])

  // After a successful grant, re-check permission and (if not yet launched) launch the app
  useEffect(() => {
    if (grantState.status === CommandExecutionStatus.SUCCESS) {
      checkPermissionStatus()
      if (!hasLaunched) {
        launchAdaptiveTheme()
        setHasLaunched(true)
      }
    }
  }, [grantState.status, checkPermissionStatus, launchAdaptiveTheme, hasLaunched])

  useEffect(() => {
    if (permissionStatus.status === CommandExecutionStatus.SUCCESS && !hasLaunched) {
      launchAdaptiveTheme()
      setHasLaunched(true)
    }
  }, [permissionStatus.status, launchAdaptiveTheme, hasLaunched])

  // Initial checks when entering step 3
  useEffect(() => {
    if (currentStep === 3) {
      checkPermissionStatus()
      checkAppInstalled()
    }
  }, [currentStep, checkPermissionStatus, checkAppInstalled])

  // Background polling to see if the app gets installed while on step 3
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
    setSnackbarMessage('Play Store opened on your device.')
    setTimeout(() => setSnackbarMessage(null), 4000)
  }

  const handleInstallApp = async () => {
    await handleOpenPlayStore()
  }

  if (webUsbUnsupported) {
    return (
      <div className="app-shell">
        <a
          href="https://github.com/xLexip/Hecate/blob/main/README.md"
          className="app-github-button"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Open Hecate GitHub README"
        >
          <img src={githubMark} alt="GitHub" className="app-github-button__icon" />
        </a>
        <header className="app-header">
          <h2>Adaptive Theme: One-time setup</h2>
          <p>Easily setup Adaptive Theme without setting up local ADB.</p>
        </header>
        <main className="app-content">
          <UnsupportedBrowserCard />
        </main>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <a
        href="https://github.com/xLexip/Hecate/blob/main/README.md"
        className="app-github-button"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Open Hecate GitHub README"
      >
        <img src={githubMark} alt="GitHub" className="app-github-button__icon" />
      </a>
      <header className="app-header">
        <h2>Adaptive Theme: One-time setup</h2>
        <p>Easily setup Adaptive Theme without setting up local ADB.</p>
      </header>
      <main className="app-content">
        {/* Step 1: only while currentStep === 1 */}
        {currentStep === 1 && (
          <StepCard
            {...({
              number: 1,
              headline: 'Prepare',
              expanded: true,
              completed: false,
              actionsRight: (
                <md-filled-button onClick={() => goToStep(2)}>Continue</md-filled-button>
              ),
            } satisfies StepCardProps)}
          >
			  <p>Adaptive Theme needs a special permission to be able to change the device theme. The permission allows the app to modify system settings, in this case the device theme. The permission is only used to switch the device theme to light/dark mode. <br/><br/> There are <b>no permanent changes</b> made on your device. You can revoke the permission at any time by uninstalling the app. This would completely revert the process.
				  <br/><br/> <b>To grant the permission:</b></p>
            <PreparationStep />
          </StepCard>
        )}

        {/* Step 2: show while we are on step 2 (currentStep === 2) so it's hidden once we advance */}
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

        {/* Step 3: final step; shows connected device chip and permission status chips */}
        {currentStep >= 3 && (
          <GrantPermissionStep
            {...({
              canExecute: Boolean(adb),
              isGranting,
              deviceName: context.device?.name || context.device?.serial,
              grantState,
              permissionStatus,
              isAppInstalled,
              onGrant: () => { void grantWriteSecureSettings() },
              onInstallApp: () => { void handleInstallApp() },
              onRateApp: () => { void handleOpenPlayStore() },
              expanded: true,
              // Mark the step as completed once permission has actually been granted
              completed: permissionStatus.status === CommandExecutionStatus.SUCCESS,
            } satisfies GrantPermissionStepProps)}
          />
        )}
      </main>
      {snackbarMessage && (
        <div className="snackbar">{snackbarMessage}</div>
      )}
    </div>
  )
}

export default App
