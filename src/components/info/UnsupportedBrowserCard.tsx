export const UnsupportedBrowserCard = () => (
	<md-filled-card className="unsupported-browser-card">
		<h2>Whoops - Browser not supported</h2>
		<p>
			Unfortunately, this only works in modern Chromium-based desktop browsers such as Chrome, Edge, Brave, etc.
		</p>
		<p>
			<b>For Experts:</b><br/> Alternatively, you can run the following ADB command yourself:
			<br/> adb shell pm grant dev.lexip.hecate android.permission.WRITE_SECURE_SETTINGS
		</p>
	</md-filled-card>
)