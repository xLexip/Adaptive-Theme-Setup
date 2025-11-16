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
          <h1>Adaptive Theme – Permission Helper</h1>
          <p>Grant WRITE_SECURE_SETTINGS zu Adaptive Theme ohne lokale ADB-Installation.</p>
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
        <h1>Adaptive Theme – Permission Helper</h1>
        <p>Grant WRITE_SECURE_SETTINGS zu Adaptive Theme ohne lokale ADB-Installation.</p>
      </header>
      <main className="app-content">
        <StepCard number={1} headline="Vorbereitung" description={<p>Diese Schritte erledigst du nur einmal.</p>}>
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

        <StepCard number={4} headline="Info & Sicherheit">
          <p>Dieses Tool arbeitet komplett lokal im Browser. Es kommuniziert ausschließlich mit deinem Gerät über WebUSB und führt den sichtbaren ADB-Befehl aus. Du kannst die ADB-Autorisierung jederzeit auf deinem Gerät widerrufen.</p>
        </StepCard>
      </main>
    </div>
  )
}

export default App
