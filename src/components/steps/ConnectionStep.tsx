import type { ReactNode } from 'react'
import { StepCard } from '../layout/StepCard'
import { AdbConnectionState } from '../../types/adb'
import { StatusChip } from '../feedback/StatusChip'

interface ConnectionStepProps {
  state: AdbConnectionState
  error?: string
  deviceName?: string
  onConnect(): void
}

const statusChip = (state: AdbConnectionState, error?: string, deviceName?: string): ReactNode => {
  switch (state) {
    case AdbConnectionState.CONNECTING:
      return <StatusChip tone="warning">Verbindung wird aufgebaut …</StatusChip>
    case AdbConnectionState.CONNECTED:
      return <StatusChip tone="success">Verbunden mit {deviceName}</StatusChip>
    case AdbConnectionState.ERROR:
      return <StatusChip tone="error">{error ?? 'Verbindung fehlgeschlagen'}</StatusChip>
    default:
      return <StatusChip tone="neutral">Kein Gerät verbunden</StatusChip>
  }
}

export const ConnectionStep = ({ state, error, deviceName, onConnect }: ConnectionStepProps) => (
  <StepCard
    number={2}
    headline="Gerät verbinden"
    description={<p>Schließe dein Gerät an und erlaube dem Browser die Verbindung.</p>}
    actions={
      <md-filled-button onClick={onConnect} disabled={state === AdbConnectionState.CONNECTING}>
        {state === AdbConnectionState.CONNECTING ? 'Verbinde…' : 'Gerät verbinden'}
      </md-filled-button>
    }
    statusChip={statusChip(state, error, deviceName)}
  >
    <p>
      Der Browser zeigt dir ein Dialogfenster. Wähle dein Gerät aus und bestätige anschließend die ADB-Autorisierung am Gerät.
    </p>
  </StepCard>
)

