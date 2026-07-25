const appName = 'Adaptive Theme';

export const pl = {
	app: {
		name: appName,
		title: `${appName}: Konfiguracja`,
		snackbar: {
			playStoreOpened: 'Sklep Play został otwarty na Twoim urządzeniu.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Język',
	},
	steps: {
		preparation: {
			headline: 'Przygotowanie',
			intro: {
				general:
					`Zainstaluj ${appName} na swoim urządzeniu z Androidem i otwórz tę stronę na innym urządzeniu.`,
				explanation:
					"Android ogranicza aplikacjom możliwość automatycznego przełączania ustawień systemowych, takich jak tryb ciemny. Aby odblokować tę funkcję, musisz jednorazowo przyznać uprawnienie. Jest to bezpieczne, odwracalne i nie daje dostępu do Twoich danych.",
				howToGrantLine1: `Rozpocznij konfigurację w aplikacji ${appName}.`,
				whyLabel: 'Dlaczego jest to wymagane?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Otwórz Sklep Play',
				continue: 'Rozpocznij konfigurację',
			},
		},
		connection: {
			headline: 'Podłącz urządzenie',
			button: {
				default: 'Wybierz urządzenie',
				connecting: 'Łączenie…',
			},
			status: {
				connecting: 'Łączenie…',
				connected: 'Połączono z {{deviceName}}',
				error: 'Połączenie nieudane. Sprawdź kabel.',
				noDevice: 'Nie wybrano urządzenia',
			},
			body: {
				line1:
					'Podłącz telefon do tego urządzenia przez USB i wybierz go poniżej.',
				line2:
					'Po wybraniu urządzenia na Twoim Androidzie pojawi się okienko z prośbą o potwierdzenie połączenia.',
			},
			cantFind: {
				title: "Nie znaleziono urządzenia?",
				body:
					'Upewnij się, że kabel obsługuje przesyłanie danych (niektóre służą tylko do ładowania). ' +
					'W powiadomieniach telefonu zmień tryb USB z „Ładowanie” na „Przesyłanie plików” lub „Transmisja danych”. ' +
					`Jeśli to nie pomoże, wypróbuj inną przeglądarkę lub alternatywną metodę konfiguracji w ${appName}.`,
			},
			alreadyInUse: {
				title: "Urządzenie jest już używane?",
				body:
					'Upewnij się, że żaden inny uruchomiony program nie korzysta z urządzenia ani nie łączy się z nim automatycznie. ' +
					'Jeśli masz zainstalowane ADB, możesz uruchomić na komputerze następujące polecenie, aby zamknąć istniejące połączenie ADB:',
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: 'Zakończ konfigurację',
			permissionStatus: {
				granted: 'Uprawnienie przyznane',
				missing: 'Brak uprawnienia',
				checking: 'Sprawdzanie statusu…',
			},
			appInstalledStatus: {
				checking: 'Szukanie aplikacji…',
				installed: 'Znaleziono aplikację',
				notInstalled: 'Aplikacja nie jest zainstalowana',
			},
			actions: {
				installApp: `Zainstaluj ${appName}`,
				executing: 'Zastosowywanie…',
				grantPermission: 'Przyznaj uprawnienie',
				rateApp: 'Podoba Ci się? Pomóż nam i wystaw ocenę! :]',
			},
			chips: {
				connectedTo: 'Połączono z {{deviceName}}',
			},
			allDone: `To wszystko! Możesz teraz odłączyć telefon i skonfigurować ${appName}.`,
		},
	},
	layout: {
		stepCard: {
			back: 'Wstecz',
			completed: 'Gotowe',
		},
	},
	unsupportedBrowser: {
		title: 'Przeglądarka nieobsługiwana',
		description:
			'To narzędzie wymaga obsługi WebUSB. Użyj przeglądarki opartej na Chromium, takiej jak Google Chrome, Microsoft Edge, Brave lub Opera.',
	},
	commandDetails: {
		intro: 'Zostanie wykonane następujące polecenie, aby zezwolić aplikacji na automatyczne przełączanie ustawień urządzenia, takich jak tryb ciemny.',
		outro: 'Jest to bezpieczne i całkowicie odwracalne. Żadne dane nie są odczytywane, a w urządzeniu nie są wprowadzane żadne trwałe zmiany. Odinstalowanie aplikacji cofa ten proces i unieważnia uprawnienie.',
	},
} as const;

