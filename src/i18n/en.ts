const appName = 'Adaptive Theme';

export const en = {
	app: {
		name: appName,
		title: `${appName}: One-time setup`,
		snackbar: {
			playStoreOpened: 'Play Store opened on your device.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Language',
	},
	steps: {
		preparation: {
			headline: 'Get Ready',
			intro: {
				general:
					`Install "${appName}" on your Android device and open this website on another device.`,
				explanation:
					"By default, Android prevents apps from changing device settings like the dark mode. To unlock this feature, we need to grant a special permission. This is safe and completely reversible, it just allows the app to toggle settings like the dark mode.",
				howToGrantLine1: `Start the setup in the "${appName}" app on your Android device.`,
				whyLabel: 'Why is this required?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Open Play Store',
				continue: 'Continue',
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
					'After selecting your device, a popup will apperar your the Android device to confirm the connection.',
			},
			cantFind: {
				title: "Can't find your device?",
				body:
					'Try to select "data transfer" instead of "charging" on the other device. Also make sure that the cable supports data transfer. If you still can\'t find' +
					` your device, try using another computer, or use an alternative setup method in the ${appName} app.`,
			},
		},
		grantPermission: {
			headline: 'Finish Setup',
			permissionStatus: {
				granted: 'Permission Granted',
				missing: 'Permission Missing',
				checking: 'Checking status…',
			},
			appInstalledStatus: {
				checking: 'Looking for app…',
				installed: 'App found',
				notInstalled: 'App not installed',
			},
			actions: {
				installApp: `Install ${appName}`,
				executing: 'Applying…',
				grantPermission: 'Grant Permission',
				starOnGithub: 'Star on GitHub',
				rateApp: 'Enjoying it? Rate us 5 stars! :]',
			},
			chips: {
				connectedTo: 'Connected to {{deviceName}}',
			},
			allDone: `That's it! You can now disconnect your phone and configure ${appName}.`,
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
			'This tool requires a browser with WebUSB support. Please use a chromium-based browser like Chrome, Edge, Brave, etc.',
	},
	commandDetails: {
		intro: 'The following command will be executed to allow the app to toggle device settings like the dark mode automatically.',
		outro: 'This is safe and completely reversible. No data is read, and no permanent changes are made to the device. Uninstalling the app reverts the process and revokes the permission.',
	},
} as const;