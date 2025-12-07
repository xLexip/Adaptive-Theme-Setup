import type {ReactNode} from 'react'

const items: ReactNode[] = [
	<li key="dev-options">
		<strong>Enable the developer options on your mobile device:</strong> Go to <i>Settings</i> → <i>About device</i> → tap the <i>Build number</i> eight times.
	</li>,
	<li key="usb-debugging">
		<strong>Turn on USB debugging:</strong> Go to <i>Settings</i> → <i>System</i> → <i>Developer options</i> → enable <i>USB debugging</i>.
	</li>,
	<li key="trust">
		<strong>Connection:</strong> Connect your mobile device to this device via USB.
	</li>,
]

export const PreparationStep = () => (
	<ul className="preparation-list">
		{items}
	</ul>
)
