# Adaptive Theme Permission Helper

A focused single-page web application that grants the Android app **Adaptive Theme** (`dev.lexip.hecate`) the permission `android.permission.WRITE_SECURE_SETTINGS` directly over
WebUSB—no local ADB installation required.

## ✨ Features

- **WebUSB ADB bridge** – leverage Tango ADB entirely in the browser
- **Material 3 UI** – system-aware light/dark color schemes, typography, density
- **Guided workflow** – preparation, connection, permission, and info steps
- **Completely local** – nothing leaves your browser, no analytics, no backend
- **TypeScript-first** – strict types, modular hooks/services, clean architecture

## 🚀 Requirements

### Browser

- Chromium-based desktop browser with WebUSB: Chrome, Edge, Brave
- Secure context (HTTPS) for WebUSB

### Android device

- Developer options enabled
- USB debugging enabled
- USB cable to connect to the computer

## 📖 Usage

1. **Enable developer options**
    - Settings → About mobile device → tap Build number 7 times
2. **Enable USB debugging**
    - Settings → System → Developer options → toggle USB debugging
3. **Connect device**
    - Plug the device in via USB
    - Click “Connect device” in the web app and select the device in the WebUSB picker
    - Approve the ADB authorization dialog on the Android device
4. **Grant the permission**
    - Click “Grant WRITE_SECURE_SETTINGS”
    - The following command is executed on the device:
      ```bash
      pm grant dev.lexip.hecate android.permission.WRITE_SECURE_SETTINGS
      ```
5. **Check status (optional)**
    - Click “Check status” to confirm via `dumpsys package dev.lexip.hecate`

## 🧱 Project Layout

```
src/
├── components/
│   ├── layout/      # StepCard layout wrapper
│   ├── steps/       # Preparation, Connection, Permission steps
│   ├── info/        # CommandDetails, UnsupportedBrowserCard
│   └── feedback/    # StatusChip and helpers
├── hooks/           # useAdbConnection, usePermissionGrant
├── services/adb/    # adbClient, credentialStore, error helpers
├── styles/          # Material tokens, global theme
├── constants/       # ADB command strings
├── types/           # Typed enums/interfaces
└── utils/           # Base64 helpers and shared utilities
```

## 🛠 Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 🔒 Security & Privacy

- Runs entirely in the browser, no servers involved
- ADB credentials stored locally in `localStorage`
- ADB authorization can be revoked on the device at any time
- Open-source code for full transparency

## 🌗 Accessibility & Theming

- Auto-detects `prefers-color-scheme` for light/dark mode via Material 3 tokens
- Uses `styles/light.css` and `styles/dark.css` to translate Material variables into CSS custom properties
- Surface containers provide elevation cues instead of drop shadows

## 🤝 Contributing

- Conventional Commits for commit messages
- Ensure TypeScript and build steps pass: `npm run build`
- Pull requests welcome for new features, improvements, or documentation

## 📄 License

Open-source license forthcoming (see repository for updates).
