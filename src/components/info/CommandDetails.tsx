import { GRANT_PERMISSION_COMMAND } from '../../constants/commands'

export const CommandDetails = () => (
  <div className="command-details">
    <p>Die App führt folgenden Befehl aus:</p>
    <code>{GRANT_PERMISSION_COMMAND}</code>
    <p>Du kannst ihn jederzeit selbst via `adb shell` ausführen. Die Verbindung kann am Gerät unter "USB-Debugging Autorizierungen" widerrufen werden.</p>
  </div>
)

