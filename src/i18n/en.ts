const appName = 'Adaptive Theme';

export const en = {
	app: {
		name: appName,
		title: `${appName}: Setup`,
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
					`Install ${appName} on your Android device and open this website on another device.`,
				explanation:
					"Android restricts apps from toggling system settings like Dark Mode automatically. To unlock this feature, you need to grant a one-time permission. This is safe, reversible, and does not grant access to your data.",
				howToGrantLine1: `Start the setup in the ${appName} app.`,
				whyLabel: 'Why is this required?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Open Play Store',
				continue: 'Start Setup',
			},
		},
		connection: {
			headline: 'Connect Device',
			button: {
				default: 'Select Device',
				connecting: 'Connecting…',
			},
			status: {
				connecting: 'Connecting…',
				connected: 'Connected to {{deviceName}}',
				error: 'Connection failed. Please check your cable.',
				noDevice: 'No device selected',
			},
			body: {
				line1:
					'Connect your phone to this device via USB and select it below.',
				line2:
					'After selecting your device, a popup will appear on your Android device to confirm the connection.',
			},
			cantFind: {
				title: "Device not found?",
				body:
					'1. Ensure your cable supports data transfer (some are charge-only).\n' +
					'2. On your phone\'s notifications, switch USB mode from "Charging" to "Data Transfer"\n' +
					`3. If it still fails, try a different browser or the an alternative setup method in ${appName}.`,
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
			'This tool requires WebUSB support. Please use a Chromium-based browser like Google Chrome, Microsoft Edge, Brave, or Opera.',
	},
	commandDetails: {
		intro: 'The following command will be executed to allow the app to toggle device settings like the dark mode automatically.',
		outro: 'This is safe and completely reversible. No data is read, and no permanent changes are made to the device. Uninstalling the app reverts the process and revokes the permission.',
	},
} as const;