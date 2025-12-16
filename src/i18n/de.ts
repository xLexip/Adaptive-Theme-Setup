const appName = 'Adaptive Theme';

export const de = {
	app: {
		name: appName,
		title: `${appName}: Einrichtung`,
		snackbar: {
			playStoreOpened: 'Play Store wurde auf deinem Gerät geöffnet.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Sprache',
	},
	steps: {
		preparation: {
			headline: 'Vorbereitung',
			intro: {
				general:
					`Installiere ${appName} auf deinem Android-Gerät und öffne diese Webseite auf einem anderen Gerät.`,
				explanation:
					"Android hindert Apps daran, Systemeinstellungen wie den Dark Mode automatisch umzuschalten. Um diese Funktion freizuschalten, musst du eine einmalige Berechtigung erteilen. Dies ist sicher, umkehrbar und gewährt keinen Zugriff auf deine Daten.",
				howToGrantLine1: `Starte die Einrichtung in der ${appName} App.`,
				whyLabel: 'Warum ist das erforderlich?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Play Store öffnen',
				continue: 'Einrichtung starten',
			},
		},
		connection: {
			headline: 'Gerät verbinden',
			button: {
				default: 'Gerät auswählen',
				connecting: 'Verbinde…',
			},
			status: {
				connecting: 'Verbinde…',
				connected: 'Verbunden mit {{deviceName}}',
				error: 'Verbindung fehlgeschlagen. Bitte Kabel prüfen.',
				noDevice: 'Kein Gerät ausgewählt',
			},
			body: {
				line1:
					'Verbinde dein Smartphone per USB mit diesem Gerät und wähle es unten aus.',
				line2:
					'Nach der Auswahl erscheint ein Popup auf deinem Android-Gerät, um die Verbindung zu bestätigen.',
			},
			cantFind: {
				title: "Gerät nicht gefunden?",
				body:
					'Stelle sicher, dass dein Kabel Datenübertragung unterstützt (manche sind nur Ladekabel). ' +
					'Wechsle in den Benachrichtigungen deines Telefons den USB-Modus von "Laden" zu "Datenübertragung". ' +
					`Wenn es immer noch fehlschlägt, versuche einen anderen Browser oder die alternative Einrichtungsmethode in ${appName}.`,
			},
		},
		grantPermission: {
			headline: 'Einrichtung abschließen',
			permissionStatus: {
				granted: 'Berechtigung erteilt',
				missing: 'Berechtigung fehlt',
				checking: 'Prüfe Status…',
			},
			appInstalledStatus: {
				checking: 'Suche nach App…',
				installed: 'App gefunden',
				notInstalled: 'App nicht installiert',
			},
			actions: {
				installApp: `${appName} installieren`,
				executing: 'Wende an…',
				grantPermission: 'Berechtigung erteilen',
				rateApp: 'Hilf uns mit einer Bewertung! :]',
			},
			chips: {
				connectedTo: 'Verbunden mit {{deviceName}}',
			},
			allDone: `Das war's! Du kannst dein Telefon jetzt trennen und ${appName} konfigurieren.`,
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
			'Dieses Tool erfordert WebUSB-Unterstützung. Bitte verwende einen Chromium-basierten Browser wie Google Chrome, Microsoft Edge, Brave oder Opera.',
	},
	commandDetails: {
		intro: 'Der folgende Befehl wird ausgeführt, um der App zu erlauben, Systemeinstellungen wie den Dark Mode automatisch umzuschalten.',
		outro: 'Dies ist sicher und vollständig umkehrbar. Es werden keine Daten gelesen und keine dauerhaften Änderungen am Gerät vorgenommen. Die Deinstallation der App macht den Vorgang rückgängig und widerruft die Berechtigung.',
	},
} as const;