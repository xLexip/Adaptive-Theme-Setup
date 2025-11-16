export const UnsupportedBrowserCard = () => (
  <md-filled-card className="unsupported-browser-card">
    <h2>Browser wird nicht unterstützt</h2>
    <p>
      WebUSB funktioniert nur in aktuellen Chromium-basierten Desktop-Browsern wie Chrome, Edge oder Brave.
      Bitte öffne die Seite dort und versuche es erneut.
    </p>
    <p>
      Tipp: Auf Android-Geräten funktioniert WebUSB leider nicht. Verwende einen Computer, um die Berechtigung zu erteilen.
    </p>
  </md-filled-card>
)
