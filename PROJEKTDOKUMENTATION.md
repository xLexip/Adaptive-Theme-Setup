# Adaptive Theme Permission Helper – Project Documentation

## Project Summary

A modern single-page web app that lets users grant the Android app “Adaptive Theme” (`dev.lexip.hecate`) the `android.permission.WRITE_SECURE_SETTINGS` permission entirely via
WebUSB—no local ADB installation required.

## Technical Implementation

### Tech Stack

- **React 19** with TypeScript (strict typing)
- **Vite** for bundling
- **Material Web (@material/web)** for Material 3 components
- **Tango ADB (@yume-chan/adb)** for the ADB protocol implementation
- **WebUSB** via @yume-chan/adb-daemon-webusb

### Architecture

#### Project Structure

```
src/
├── components/
│   ├── layout/        # StepCard layout wrapper
│   ├── steps/         # Preparation, Connection, Grant steps
│   ├── feedback/      # StatusChip and helpers
│   └── info/          # CommandDetails, UnsupportedBrowserCard
├── hooks/             # useAdbConnection, usePermissionGrant
├── services/adb/      # ADB client, credential store, errors
├── types/             # TypeScript enums/interfaces
├── constants/         # ADB commands
├── utils/             # Shared helpers (e.g., base64)
├── styles/            # Material 3 theme tokens (light/dark)
└── material-web.d.ts  # Custom JSX declarations for @material/web
```

#### Core Modules

**1. ADB Service Layer (`src/services/adb/`)**

- `AdbClient`: wraps Tango ADB
    - `requestDevice()` – WebUSB device picker
    - `runShellCommand()` – executes shell commands
    - `grantWriteSecureSettings()` – encapsulates the pm grant command
- `BrowserCredentialStore`: manages 2048-bit RSA keys in localStorage and implements `AdbCredentialStore`

**2. Hooks (`src/hooks/`)**

- `useAdbConnection`: connection state machine with support detection, device metadata, and friendly errors
- `usePermissionGrant`: handles command execution (grant/check) with loading/success/error states

**3. UI Components**

- `StepCard`: numbered cards with header, body, actions, status chip
- `ConnectionStep`: device connection UX + status feedback
- `GrantPermissionStep`: grant command + status check flow
- `StatusChip`: tone-based badges (neutral/success/warning/error)
- `UnsupportedBrowserCard`: guard rail for incompatible browsers

### Material 3 Integration

- Imports Material Web components (buttons, cards, progress)
- Light/dark token sets defined in `styles/light.css` and `styles/dark.css`
- Theme glue in `styles/theme.css` reuses Material token names for backgrounds, containers, and typography
- Components reference tokens via CSS custom properties (e.g., `--md-sys-color-surface`)

### UX Flow

1. **Prepare** – enable developer options and USB debugging
2. **Connect device** – WebUSB picker + ADB authorization
3. **Grant permission** – executes `pm grant dev.lexip.hecate android.permission.WRITE_SECURE_SETTINGS` and optional status check
4. **Privacy & safety** – explains the local-only nature and revocation options

### Error Handling

- Unsupported browser → dedicated card with guidance
- No device selected → friendly message
- ADB authorization missing → surfaced via status chips
- Shell command failures → messages plus console output for advanced users

### Styling

- Material 3 design tokens for light/dark mode driven by `prefers-color-scheme`
- Surface containers replace custom shadows for elevation
- Responsive layout with clamp-based typography
- Reusable fade-in animation for cards

## Security & Privacy

✅ 100% local execution – no backend communication  
✅ Open-source code for transparency  
✅ No tracking/analytics  
✅ RSA keys persist only in localStorage  
✅ Users can revoke ADB authorization on-device at any time

## Build & Deployment

### Development

```bash
npm install
npm run dev
```

### Production

```bash
npm run build
# artifacts in dist/
```

### Deployment Options

- Static hosting (Netlify, Vercel, GitHub Pages)
- HTTPS required for WebUSB
- No server-side logic needed

## Browser Support

**Supported**

- Chrome 89+ (desktop)
- Edge 89+ (desktop)
- Brave (desktop)

**Not supported**

- Firefox (no WebUSB)
- Safari (no WebUSB)
- Mobile browsers (WebUSB unavailable)

## Future Enhancements

- [ ] Localization (i18n)
- [ ] Advanced diagnostics/log export
- [ ] Auto reconnect for ADB
- [ ] Command history and retries
- [ ] UI accessibility refinements

## Conventional Commits

1. `feat(ui): implement Material 3 UI with ADB connection flow`
2. `docs: add comprehensive README with usage instructions`
3. `chore: update HTML metadata and lang attribute`

## Testing Checklist

- Device picker opens when clicking “Connect device”
- ADB authorization dialog appears on the mobile device
- Grant command succeeds and reports success
- Status check reflects permission state
- Unsupported browsers show guidance
- Layout remains responsive on mobile/desktop breakpoints

## License

Open source (license to be added).

---

Built with care for the Android theming community.
