# Adaptive Theme Permission Helper – Projektdokumentation

## Projektzusammenfassung

Eine moderne Single-Page-Web-App, die Nutzer:innen ermöglicht, der Android-App "Adaptive Theme" (dev.lexip.hecate) die Berechtigung `android.permission.WRITE_SECURE_SETTINGS` zu erteilen – komplett über WebUSB, ohne lokale ADB-Installation.

## Technische Umsetzung

### Tech Stack
- **React 19** mit TypeScript (strikte Typisierung)
- **Vite** als Build-Tool
- **Material Web (@material/web)** für Material 3 UI-Komponenten
- **Tango ADB (@yume-chan/adb)** für ADB-Protokoll-Implementierung
- **WebUSB** über @yume-chan/adb-daemon-webusb

### Architektur

#### Projektstruktur
```
src/
├── components/
│   ├── layout/
│   │   ├── StepCard.tsx          # Wiederverwendbare nummerierte Card
│   │   └── StepCard.css
│   ├── steps/
│   │   ├── PreparationStep.tsx   # Schritt 1: Anleitung
│   │   ├── ConnectionStep.tsx    # Schritt 2: Gerät verbinden
│   │   └── GrantPermissionStep.tsx # Schritt 3: Berechtigung erteilen
│   ├── feedback/
│   │   ├── StatusChip.tsx        # Status-Badges (success/error/warning)
│   │   └── StatusChip.css
│   └── info/
│       ├── CommandDetails.tsx    # Zeigt ADB-Befehl an
│       └── UnsupportedBrowserCard.tsx # Guard für nicht unterstützte Browser
├── hooks/
│   ├── useAdbConnection.ts       # Connection State Management
│   └── usePermissionGrant.ts     # Shell Command Execution
├── services/adb/
│   ├── adbClient.ts              # WebUSB/ADB-Client
│   ├── credentialStore.ts        # RSA-Key-Verwaltung (localStorage)
│   └── errors.ts                 # Fehlerbehandlung
├── types/adb.ts                  # TypeScript-Typen
├── constants/commands.ts         # ADB-Befehle
├── utils/base64.ts               # Base64-Encoder/Decoder
├── styles/theme.css              # Material 3 Design Tokens
└── material-web.d.ts             # TypeScript-Deklarationen für Material Web
```

#### Kernkomponenten

**1. ADB-Service-Layer (`src/services/adb/`)**
- `AdbClient`: Wrapper für Tango ADB
  - `requestDevice()`: WebUSB-Device-Picker
  - `runShellCommand()`: Shell-Befehle ausführen
  - `grantWriteSecureSettings()`: Spezifischer Grant-Befehl
- `BrowserCredentialStore`: RSA-Key-Management
  - Generiert 2048-bit RSA-Keys
  - Speichert in localStorage als Base64
  - Implementiert AdbCredentialStore-Interface

**2. React Hooks (`src/hooks/`)**
- `useAdbConnection`: Connection State Machine
  - States: DISCONNECTED → CONNECTING → CONNECTED / ERROR
  - Device-Info-Tracking
  - WebUSB-Support-Detection
- `usePermissionGrant`: Command Execution
  - Grant/Check-Status-Befehle
  - Loading/Success/Error-States
  - Output-Tracking

**3. UI-Komponenten**
- `StepCard`: Nummerierte Cards mit Header, Body, Actions, StatusChip
- `ConnectionStep`: Verbindungslogik + Status-Anzeige
- `GrantPermissionStep`: Command-Execution + Feedback
- `StatusChip`: Farbcodierte Status-Badges
- `UnsupportedBrowserCard`: Browser-Guard

### Material 3 Integration

- Web Components via `@material/web`
- Buttons: `<md-filled-button>`, `<md-outlined-button>`
- Cards: `<md-elevated-card>`, `<md-filled-card>`
- Progress: `<md-linear-progress>`, `<md-circular-progress>`
- TypeScript-Deklarationen in `material-web.d.ts`

### UX-Flow

1. **Vorbereitung (Step 1)**
   - Statische Anleitung für Developer Options + USB-Debugging
   
2. **Gerät verbinden (Step 2)**
   - Button triggert WebUSB-Picker
   - ADB-Authentifizierung (RSA-Key-Exchange)
   - Status-Chip zeigt Verbindungsstatus
   
3. **Berechtigung erteilen (Step 3)**
   - "Berechtigung gewähren"-Button führt `pm grant`-Befehl aus
   - "Status prüfen"-Button via `dumpsys package`
   - Output wird in readonly Code-Blocks angezeigt
   
4. **Info & Sicherheit (Step 4)**
   - Erklärt Datenschutz und lokale Ausführung

### Fehlerbehandlung

- **WebUSB nicht verfügbar**: Zeigt UnsupportedBrowserCard
- **Kein Gerät ausgewählt**: User-friendly Error in ConnectionStep
- **ADB-Auth fehlgeschlagen**: Zeigt Hinweis zur erneuten Autorisierung
- **Command-Fehler**: Output wird angezeigt, User kann reagieren

### Styling

- Material 3 Design Language
- CSS Custom Properties für Farben/Tokens
- Responsive Layout (Mobile-First)
- Fade-in Animationen für Cards
- Clamp-basierte Typografie (responsive)

## Sicherheit & Datenschutz

✅ **Komplett lokal** – keine Server-Kommunikation  
✅ **Open Source** – Code ist prüfbar  
✅ **Keine Tracking/Analytics**  
✅ **RSA-Keys nur in localStorage** – nicht geteilt  
✅ **User hat volle Kontrolle** – ADB-Auth widerrufbar  

## Build & Deployment

### Entwicklung
```bash
npm install
npm run dev
```

### Produktion
```bash
npm run build
# Output in dist/
```

### Deployment-Optionen
- Statisches Hosting (Netlify, Vercel, GitHub Pages)
- Keine Server-Logik nötig
- HTTPS erforderlich (WebUSB-Requirement)

## Browser-Anforderungen

**Unterstützt:**
- Chrome 89+ (Desktop)
- Edge 89+ (Desktop)
- Brave (Desktop)

**Nicht unterstützt:**
- Firefox (kein WebUSB-Support)
- Safari (kein WebUSB-Support)
- Alle mobilen Browser

## Zukünftige Erweiterungen

- [ ] Mehrsprachigkeit (i18n)
- [ ] Dark Mode
- [ ] Erweiterte Fehlerdiagnostik
- [ ] Automatische ADB-Reconnect
- [ ] Command-History
- [ ] Export von Debug-Logs

## Git-Commits (Conventional Commits)

Alle Commits folgen dem Conventional Commits Standard:

1. `feat(ui): implement Material 3 UI with ADB connection flow`
2. `docs: add comprehensive README with usage instructions`
3. `chore: update HTML metadata and lang attribute`

## Testing

Empfohlene Testfälle:
- [ ] WebUSB-Picker erscheint bei "Gerät verbinden"
- [ ] ADB-Auth-Dialog wird auf Gerät angezeigt
- [ ] Grant-Befehl wird erfolgreich ausgeführt
- [ ] Status-Prüfung zeigt korrekte Ausgabe
- [ ] Browser-Guard blockiert nicht unterstützte Browser
- [ ] Responsive Layout funktioniert auf verschiedenen Bildschirmgrößen

## Lizenz

Open Source (Lizenz folgt)

---

**Entwickelt mit ❤️ für die Android-Community**

