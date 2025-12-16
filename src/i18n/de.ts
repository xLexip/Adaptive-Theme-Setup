export const de = {
	app: {
		title: 'Adaptive Theme: Einmalige Einrichtung',
		snackbar: {
			playStoreOpened: 'Play Store wurde auf deinem Gerät geöffnet.',
		},
		footer: {
			githubAriaLabel: 'Öffne die Adaptive Theme README auf GitHub',
			githubAlt: 'GitHub',
		},
		languageLabel: 'Sprache',
	},
	steps: {
		preparation: {
			headline: 'Vorbereitung',
			intro: {
				general:
					'Installiere Adaptive Theme auf deinem Android-Gerätund öffne diese Webseite auf einem anderen Gerät.',
				explanation:
					"Standardmäßig verhindert Android, dass Apps Geräteeinstellungen wie den Dark Mode ändern. Um diese Funktion freizuschalten, müssen wir eine spezielle" +
					" Berechtigung erteilen. Dies ist sicher und vollständig rückgängig zu machen, es erlaubt der App nur, Einstellungen wie den Dark Mode umzuschalten.",
				howToGrantLine1: 'Starte die Einrichtung in der Adaptive Theme App auf deinem Zielgerät.',
				whyLabel: 'Warum ist das erforderlich?',
			},
			list: {
				// list items intentionally removed
			},
			actions: {
				playStoreLabel: 'Play Store öffnen',
				continue: 'Weiter',
			},
		},
		connection: {
			headline: 'USB-Gerät verbinden',
			button: {
				default: 'Gerät auswählen',
				connecting: 'Verbinde…',
			},
			status: {
				connecting: 'Verbinde…',
				connected: 'Verbunden mit {{deviceName}}',
				error: 'Verbindung fehlgeschlagen. Bitte prüfe das Kabel.',
				noDevice: 'Kein Gerät ausgewählt',
			},
			body: {
				line1:
					'Klicke auf den Button unten und wähle dein Smartphone aus der Liste.',
				line2:
					'⚠️ Schau auf dein Smartphone-Display! Ein Popup wird erscheinen, um die Verbindung zu bestätigen.',
			},
			cantFind: {
				title: 'Gerät nicht gefunden?',
				body:
					'Wähle bei deinem Smartphone im USB-Modus „Dateiübertragung“ statt „Nur Laden“. Stelle außerdem sicher, dass das Kabel Datenübertragung unterstützt. Falls das Gerät immer noch nicht angezeigt wird, versuche einen anderen Computer oder eine alternative Einrichtungs-Methode in der Adaptive Theme App.',
			},
		},
		grantPermission: {
			headline: 'Einrichtung abschließen',
			permissionStatus: {
				granted: 'Berechtigung aktiv',
				missing: 'Berechtigung fehlt',
				checking: 'Prüfe Status…',
			},
			appInstalledStatus: {
				checking: 'Suche App…',
				installed: 'App gefunden',
				notInstalled: 'App nicht installiert',
			},
			actions: {
				installApp: 'Adaptive Theme installieren',
				executing: 'Wende an…',
				grantPermission: 'Berechtigung erteilen',
				starOnGithub: 'Über Adaptive Theme',
				rateApp: 'Gefällt es dir? Bewerte uns mit 5 Sternen! :]',
			},
			chips: {
				connectedTo: 'Verbunden mit {{deviceName}}',
			},
			allDone: 'Erfolg! Du kannst dein Smartphone nun trennen und Adaptive Theme konfigurieren.',
		},
	},
	layout: {
		stepCard: {
			back: 'Zurück',
			completed: 'Fertig',
		},
	},
	unsupportedBrowser: {
		title: 'Browser nicht unterstützt',
		description:
			'Dieses Tool benötigt einen Browser mit WebUSB-Unterstützung. Bitte nutze Google Chrome, Microsoft Edge, Brave oder Opera auf einem PC/Laptop.',
	},
	commandDetails: {
		intro: 'Der folgende Befehl wird ausgeführt, damit die App Geräteeinstellungen wie den Dark Mode automatisch umschalten kann.',
		outro: 'Dies ist sicher und vollständig rückgängig zu machen. Es werden keine Daten gelesen und keine dauerhaften Änderungen am Gerät vorgenommen. Das Deinstallieren der App hebt die Änderung auf und entzieht die Berechtigung.',
	},
} as const;
