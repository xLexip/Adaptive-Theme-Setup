import './App.css'
import { StepCard } from './components/layout/StepCard'
import { PreparationStep } from './components/steps/PreparationStep'
import { ConnectionStep } from './components/steps/ConnectionStep'
import { GrantPermissionStep } from './components/steps/GrantPermissionStep'
import { useAdbConnection } from './hooks/useAdbConnection'
import { usePermissionGrant } from './hooks/usePermissionGrant'
import { AdbConnectionState, CommandExecutionStatus } from './types/adb'
import { UnsupportedBrowserCard } from './components/info/UnsupportedBrowserCard'

function App() {
  const { context, connect, getAdb } = useAdbConnection()
  const adb = getAdb()
  const permission = usePermissionGrant(adb)

  const webUsbUnsupported =
    context.state === AdbConnectionState.ERROR && context.error?.includes('WebUSB')

  if (webUsbUnsupported) {
    return (
      <div className="app-shell">
        <header className="app-header">
          <h1>Adaptive Theme Permission Helper</h1>
          <p>Grant WRITE_SECURE_SETTINGS to Adaptive Theme without setting up local ADB.</p>
        </header>
        <main className="app-content">
          <UnsupportedBrowserCard />
        </main>
      </div>
    )
  }

  const isGranting = permission.grantState.status === CommandExecutionStatus.RUNNING
  const isChecking = permission.statusState.status === CommandExecutionStatus.RUNNING

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Adaptive Theme Permission Helper</h1>
        <p>Grant WRITE_SECURE_SETTINGS to Adaptive Theme without setting up local ADB.</p>
      </header>
      <main className="app-content">
        <StepCard number={1} headline="Prepare" description={<p>You only need to perform these steps once.</p>}>
          <PreparationStep />
        </StepCard>

        <ConnectionStep
          state={context.state}
          error={context.error}
          deviceName={context.device?.name || context.device?.serial}
          onConnect={connect}
        />

        <GrantPermissionStep
          canExecute={Boolean(adb)}
          isGranting={isGranting}
          isChecking={isChecking}
          grantState={permission.grantState}
          statusState={permission.statusState}
          onGrant={permission.grantWriteSecureSettings}
          onCheck={permission.checkPermissionStatus}
        />

        <StepCard number={4} headline="Privacy & Safety">
          <p>This tool runs entirely in your browser, talks to your device only via WebUSB, and executes the visible ADB command. You can revoke the ADB authorization on your device at any time.</p>
        </StepCard>
      </main>
    </div>
  )
}

export default App
