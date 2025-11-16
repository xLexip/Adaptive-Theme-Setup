import type { ReactNode } from 'react'

const items: ReactNode[] = [
  <li key="dev-options">
    <strong>Entwickleroptionen aktivieren:</strong> Öffne Einstellungen → Über das Telefon → tippe 7× auf die Build-Nummer.
  </li>,
  <li key="usb-debugging">
    <strong>USB-Debugging einschalten:</strong> Einstellungen → System → Entwickleroptionen → USB-Debugging aktivieren.
  </li>,
  <li key="trust">
    Bestätige später den ADB-Freigabe-Dialog auf dem Gerät. Das Gerät merkt sich die Freigabe dauerhaft.
  </li>,
]

export const PreparationStep = () => (
  <ul className="preparation-list">
    {items}
  </ul>
)

