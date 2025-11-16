# Adaptive Theme – Permission Helper

Eine Web-App, die Nutzer:innen hilft, der Android-App **Adaptive Theme** (`dev.lexip.hecate`) die Berechtigung `android.permission.WRITE_SECURE_SETTINGS` zu erteilen – ohne lokale ADB-Installation.

## ✨ Features

- **WebUSB-basierte ADB-Verbindung** – keine Desktop-Software nötig
- **Material 3 Design** – moderne, barrierefreie Benutzeroberfläche
- **Schritt-für-Schritt-Anleitung** – vom Developer Mode bis zur Permission
- **Komplett lokal** – keine Server-Kommunikation, alles im Browser
- **TypeScript + React** – typsicher und wartbar

## 🚀 Voraussetzungen

### Browser
- **Chrome**, **Edge** oder **Brave** (Desktop-Version)
- WebUSB-Unterstützung erforderlich (nicht auf mobilen Geräten)

### Android-Gerät
- **Developer Options** aktiviert
- **USB-Debugging** eingeschaltet
- USB-Kabel zur Verbindung mit dem Computer

## 📖 Verwendung

1. **Developer Options aktivieren**
   - Gehe zu Einstellungen → Über das Telefon
   - Tippe 7× auf die Build-Nummer

2. **USB-Debugging aktivieren**
   - Gehe zu Einstellungen → System → Entwickleroptionen
   - Aktiviere „USB-Debugging"

3. **Gerät anschließen**
   - Verbinde dein Android-Gerät per USB
   - Klicke auf „Gerät verbinden" in der Web-App
   - Wähle dein Gerät im Browser-Dialog aus
   - Bestätige die ADB-Autorisierung auf dem Gerät

4. **Berechtigung erteilen**
   - Klicke auf „Berechtigung gewähren"
   - Die App führt folgenden Befehl aus:
     ```bash
     pm grant dev.lexip.hecate android.permission.WRITE_SECURE_SETTINGS
     ```

## 🛠️ Entwicklung

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Die App läuft unter `http://localhost:5173`

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 🏗️ Architektur

```
src/
├── components/
│   ├── layout/        # StepCard, Layout-Komponenten
│   ├── steps/         # PreparationStep, ConnectionStep, GrantPermissionStep
│   ├── feedback/      # StatusChip, ProgressIndicator
│   └── info/          # CommandDetails, UnsupportedBrowserCard
├── hooks/
│   ├── useAdbConnection.ts      # Device-Verbindung und State
│   └── usePermissionGrant.ts    # Shell-Befehle ausführen
├── services/
│   └── adb/
│       ├── adbClient.ts         # WebUSB/ADB-Integration
│       ├── credentialStore.ts   # RSA-Key-Management
│       └── errors.ts            # Fehlerbehandlung
├── types/              # TypeScript-Definitionen
├── constants/          # ADB-Befehle
└── utils/              # Base64-Encoder etc.
```

## 📦 Tech Stack

- **React 19** – UI-Framework
- **TypeScript** – Typsicherheit
- **Vite** – Build-Tool
- **Material Web** – Material 3 Web Components
- **@yume-chan/adb** – ADB-Protokoll-Implementierung
- **@yume-chan/adb-daemon-webusb** – WebUSB-Transport

## 🔒 Sicherheit & Datenschutz

- **Keine Server-Kommunikation** – alles läuft lokal im Browser
- **Kein Tracking** – keine Analytics, keine Cookies
- **Open Source** – Code ist einsehbar und prüfbar
- **RSA-Keys im LocalStorage** – persistiert für wiederholte Verbindungen
- **ADB-Autorisierung widerrufbar** – jederzeit am Gerät deaktivierbar

## 🤝 Beitragen

Pull Requests und Issues sind willkommen! Bitte beachte:

- Nutze **Conventional Commits** für Commit-Messages
- Teste deine Änderungen lokal
- Halte den Code TypeScript-konform

## 📄 Lizenz

Dieses Projekt ist Open Source. Lizenzdetails folgen.

## 🙏 Danksagungen

- [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) – ADB-Implementierung
- [Material Web](https://github.com/material-components/material-web) – UI-Komponenten

