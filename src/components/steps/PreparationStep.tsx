import type { ReactNode } from 'react'

const items: ReactNode[] = [
  <li key="dev-options">
    <strong>Enable developer options:</strong> Open Settings → About phone → tap Build number seven times.
  </li>,
  <li key="usb-debugging">
    <strong>Turn on USB debugging:</strong> Settings → System → Developer options → enable USB debugging.
  </li>,
  <li key="trust">
    Confirm the ADB authorization dialog when it appears on your device. The device remembers the approval.
  </li>,
]

export const PreparationStep = () => (
  <ul className="preparation-list">
    {items}
  </ul>
)
