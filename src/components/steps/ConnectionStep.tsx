import type { ReactNode } from 'react'
import { StepCard } from '../layout/StepCard'
import { AdbConnectionState } from '../../types/adb'
import { StatusChip } from '../feedback/StatusChip'

interface ConnectionStepProps {
  state: AdbConnectionState
  error?: string
  deviceName?: string
  onConnect(): void
  onBack(): void
  expanded?: boolean
  completed?: boolean
}

const statusChip = (state: AdbConnectionState, error?: string, deviceName?: string): ReactNode => {
  switch (state) {
    case AdbConnectionState.CONNECTING:
      return <StatusChip tone="info">Connecting…</StatusChip>
    case AdbConnectionState.CONNECTED:
      return <StatusChip tone="success">Connected to {deviceName}</StatusChip>
    case AdbConnectionState.ERROR:
      return <StatusChip tone="error">{error ?? 'Connection failed'}</StatusChip>
    default:
      return <StatusChip tone="error">No device selected</StatusChip>
  }
}

export const ConnectionStep = ({ state, error, deviceName, onConnect, onBack, expanded = true, completed = false }: ConnectionStepProps) => (
  <StepCard
    number={2}
    headline="Select device"
    description={<p>Plug in your device and authorize the browser connection.</p>}
    expanded={expanded}
    completed={completed}
    onBack={onBack}
    actions={
      <md-filled-button onClick={onConnect} disabled={state === AdbConnectionState.CONNECTING}>
        {state === AdbConnectionState.CONNECTING ? 'Connecting…' : 'Select device'}
      </md-filled-button>
    }
    statusChip={statusChip(state, error, deviceName)}
  >
    <p>
      The browser opens a device picker dialog. Select your device and confirm the ADB authorization on the device.
    </p>
  </StepCard>
)
