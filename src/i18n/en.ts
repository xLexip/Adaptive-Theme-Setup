export const en = {
	app: {
		title: 'Adaptive Theme: One-time setup',
		snackbar: {
			playStoreOpened: 'Play Store opened on your device.',
		},
		footer: {
			// FIXED: Changed "Hecate" to "Adaptive Theme"
			githubAriaLabel: 'Open the Adaptive Theme README on GitHub',
			githubAlt: 'GitHub',
		},
		languageLabel: 'Language',
	},
	steps: {
		preparation: {
			headline: 'Get Ready',
			intro: {
				general:
					'Please open this website on another computer, tablet or phone. Do not use the device that has Adaptive Theme installed.',
				explanation:
					"By default, Android blocks apps from changing the system theme. To unlock this feature, we need to grant a secure permission. This is safe and completely" +
					" reversible.",
				howToGrantLine1: 'Follow the steps in the Adaptive Theme app on your target device.',
				howToGrantLine2:
					'After you have enabled USB debugging in the developer options, connect both devices via USB and continue here.',
				expertsLabel: 'For experts:',
				expertsDescription:
					'Already have ADB? You can skip this and run this command manually:',
			},
			list: {
				// list items intentionally removed
			},
			actions: {
				playStoreLabel: 'Open Play Store',
				continue: 'I am ready',
			},
		},
		connection: {
			headline: 'Connect USB-Device',
			button: {
				default: 'Connect Device',
				connecting: 'Connecting…',
			},
			status: {
				connecting: 'Connecting…',
				connected: 'Connected to {{deviceName}}',
				error: 'Connection failed. Please check your cable.',
				noDevice: 'No device selected',
			},
			body: {
				// Simplified this to focus on the critical failure point (The popup)
				line1:
					'Click the button below and select your phone from the list.',
				line2:
					'⚠️ Look at your phone screen! A popup will apperar to confirm the connection.',
			},
		},
		grantPermission: {
			headline: 'Finish Setup',
			permissionStatus: {
				granted: 'Permission Active',
				missing: 'Permission Missing',
				checking: 'Checking status…',
			},
			appInstalledStatus: {
				checking: 'Looking for app…',
				installed: 'App found',
				notInstalled: 'App not installed',
			},
			actions: {
				installApp: 'Install Adaptive Theme',
				executing: 'Applying…',
				grantPermission: 'Grant Permission',
				aboutApp: 'About Adaptive Theme',
				// FIXED: "5-start" typo
				rateApp: 'Enjoying it? Rate us 5 stars! :]',
			},
			chips: {
				connectedTo: 'Connected to {{deviceName}}',
			},
			allDone: 'Success! You can now disconnect your phone and configure Adaptive Theme.',
		},
	},
	layout: {
		stepCard: {
			back: 'Back',
			completed: 'Done',
		},
	},
	unsupportedBrowser: {
		title: 'Browser not supported',
		description:
			'This tool requires a browser with WebUSB support. Please use Google Chrome, Microsoft Edge, Brave, or Opera on a Desktop/Laptop.',
		expertsLabel: 'For experts:',
		expertsDescription:
			'If you cannot change browsers, run this ADB command manually via terminal:',
	},
	commandDetails: {
		intro:
			"The following command will grant the 'WRITE_SECURE_SETTINGS' permission to Adaptive Theme. This allows the app to toggle Night Mode automatically.",
		outro:
			'No data is read, and no permanent changes are made. Uninstalling the app instantly revokes this permission.',
	},
} as const;