import { GRANT_PERMISSION_COMMAND } from '../../constants/commands'

export const CommandDetails = () => (
  <div className="command-details">
    <p>The app executes this command:</p>
    <code>{GRANT_PERMISSION_COMMAND}</code>
    <p>You can also run it yourself via `adb shell`. Revoke WebUSB authorization on the device under “USB debugging authorizations” whenever needed.</p>
  </div>
)
