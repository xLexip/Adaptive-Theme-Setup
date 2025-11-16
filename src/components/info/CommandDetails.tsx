import { GRANT_PERMISSION_COMMAND } from '../../constants/commands'

export const CommandDetails = () => (
  <div className="command-details">
    <p>Adaptive Theme needs a special permission to be able to change the device theme. The permission allows the app to modify system settings, in this case the device theme. The permission is only used to switch the device theme to light/dark mode. To grant it, the following command will be executed:</p>
    <code>{GRANT_PERMISSION_COMMAND}</code>
    <p>There are no permanent changes made on your device. You can revoke the permission at any time by uninstalling the app. This would completely revert the process.</p>
  </div>
)