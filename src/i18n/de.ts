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
					'Bitte öffne diese Webseite auf einem Computer, Tablet oder einem zweiten Smartphone. Benutze nicht das Gerät, auf dem Adaptive Theme installiert ist.',
				explanation:
					"Standardmäßig blockiert Android Apps daran, das Systemdesign zu ändern. Um diese Funktion freizuschalten, müssen wir eine sichere Berechtigung erteilen. Dies ist sicher und vollständig rückgängig zu machen.",
				howToGrantLine1: 'Folge den Schritten in der Adaptive Theme App auf deinem Zielgerät.',
				howToGrantLine2:
					'Nachdem du USB-Debugging in den Entwickleroptionen aktiviert hast, verbinde beide Geräte per USB und fahre hier fort.',
				expertsLabel: 'Für Experten:',
				expertsDescription:
					'Hast du bereits ADB? Du kannst dies überspringen und diesen Befehl manuell ausführen:',
			},
			list: {
				// list items intentionally removed
			},
			actions: {
				playStoreLabel: 'Play Store öffnen',
				continue: 'Ich bin bereit',
			},
		},
		connection: {
			headline: 'USB-Gerät verbinden',
			button: {
				default: 'Gerät verbinden',
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
				aboutApp: 'Über Adaptive Theme',
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
		expertsLabel: 'Für Experten:',
		expertsDescription:
			'Falls du den Browser nicht wechseln kannst, führe diesen ADB-Befehl manuell im Terminal aus:',
	},
	commandDetails: {
		intro:
			"Der folgende Befehl erteilt Adaptive Theme die Berechtigung „WRITE_SECURE_SETTINGS“. Dies erlaubt der App, den Nachtmodus automatisch umzuschalten.",
		outro:
			'Es werden keine Daten gelesen und keine dauerhaften Änderungen vorgenommen. Das Deinstallieren der App widerruft diese Berechtigung sofort.',
	},
} as const;

