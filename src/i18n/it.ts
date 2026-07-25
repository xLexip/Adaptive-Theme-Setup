const appName = 'Adaptive Theme';

export const it = {
	app: {
		name: appName,
		title: `${appName}: Configurazione`,
		snackbar: {
			playStoreOpened: 'Il Play Store è stato aperto sul tuo dispositivo.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Lingua',
	},
	steps: {
		preparation: {
			headline: 'Preparazione',
			intro: {
				general:
					`Installa ${appName} sul tuo dispositivo Android e apri questo sito web su un altro dispositivo.`,
				explanation:
					"Android impedisce alle app di modificare automaticamente le impostazioni di sistema come il Tema scuro. Per sbloccare questa funzione, devi concedere un'autorizzazione una tantum. È un'operazione sicura, reversibile e non concede l'accesso ai tuoi dati.",
				howToGrantLine1: `Inizia la configurazione nell'app ${appName}.`,
				whyLabel: 'Perché è necessario?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Apri Play Store',
				continue: 'Avvia Configurazione',
			},
		},
		connection: {
			headline: 'Collega dispositivo',
			button: {
				default: 'Seleziona dispositivo',
				connecting: 'Connessione…',
			},
			status: {
				connecting: 'Connessione…',
				connected: 'Connesso a {{deviceName}}',
				error: 'Connessione fallita. Controlla il cavo.',
				noDevice: 'Nessun dispositivo selezionato',
			},
			body: {
				line1:
					'Collega il telefono a questo dispositivo via USB e selezionalo qui sotto.',
				line2:
					'Dopo aver selezionato il dispositivo, apparirà un popup sul tuo Android per confermare la connessione.',
			},
			cantFind: {
				title: "Dispositivo non trovato?",
				body:
					'Assicurati che il cavo supporti il trasferimento dati (alcuni sono solo per la ricarica). ' +
					'Dalle notifiche del telefono, cambia la modalità USB da "Ricarica" a "Trasferimento file" o "Trasferimento dati". ' +
					`Se non funziona, prova un altro browser o il metodo di configurazione alternativo in ${appName}.`,
			},
			alreadyInUse: {
				title: "Dispositivo già in uso?",
				body:
					'Assicurati che nessun altro programma in esecuzione stia interagendo con il dispositivo o connettendosi automaticamente ad esso. ' +
					'Se hai ADB installato, puoi eseguire il seguente comando sul tuo computer per chiudere qualsiasi connessione ADB esistente:',
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: 'Completa configurazione',
			permissionStatus: {
				granted: 'Autorizzazione concessa',
				missing: 'Autorizzazione mancante',
				checking: 'Verifica stato…',
			},
			appInstalledStatus: {
				checking: 'Ricerca app…',
				installed: 'App trovata',
				notInstalled: 'App non installata',
			},
			actions: {
				installApp: `Installa ${appName}`,
				executing: 'Applicazione in corso…',
				grantPermission: 'Concedi autorizzazione',
				rateApp: 'Ti piace? Aiutaci con una valutazione! :]',
			},
			chips: {
				connectedTo: 'Connesso a {{deviceName}}',
			},
			allDone: `Fatto! Ora puoi scollegare il telefono e configurare ${appName}.`,
		},
	},
	layout: {
		stepCard: {
			back: 'Indietro',
			completed: 'Fatto',
		},
	},
	unsupportedBrowser: {
		title: 'Browser non supportato',
		description:
			'This tool requires WebUSB support. Use a Chromium-based browser like Google Chrome, Microsoft Edge, Brave, or Opera.',
	},
	commandDetails: {
		intro: 'Verrà eseguito il seguente comando per consentire all\'app di modificare automaticamente le impostazioni del dispositivo come il tema scuro.',
		outro: 'Questa operazione è sicura e completamente reversibile. Nessun dato viene letto e non vengono apportate modifiche permanenti al dispositivo. Disinstallando l\'app si annulla il processo e si revoca l\'autorizzazione.',
	},
} as const;

