export const UnsupportedBrowserCard = () => (
  <md-filled-card className="unsupported-browser-card">
    <h2>Browser not supported</h2>
    <p>
      WebUSB only works in modern Chromium-based desktop browsers such as Chrome, Edge, or Brave.
      Please open this page there and try again.
    </p>
    <p>
      Tip: WebUSB is not available on Android browsers. Use a computer to grant the permission.
    </p>
  </md-filled-card>
)
