export const en = {
	app: {
		title: 'Adaptive Theme: One-time setup',
		snackbar: {
			playStoreOpened: 'Play Store has been opened on your device.',
		},
		footer: {
			githubAriaLabel: 'Open the Hecate README on GitHub',
			githubAlt: 'GitHub',
		},
	},
	steps: {
		preparation: {
			headline: 'Prepare',
			intro: {
				general:
					'Open this website on a device other than your Android device that has the app installed.',
				explanation:
					"Adaptive Theme needs a special permission to change your Android device's theme. This permission allows the app to modify the device theme and is only used to switch between light and dark mode. No permanent changes are made to your device, and you can revert this at any time by uninstalling the app.",
				howToGrant: 'To grant the permission:',
				expertsLabel: 'For experts:',
				expertsDescription:
					'Alternatively, you can run the following ADB command yourself:',
			},
			list: {
				devOptions:
					"Enable developer options on your Android device: Go to Settings → About device → tap 'Build number' seven times.",
				usbDebugging:
					'Enable USB debugging: Go to Settings → System → Developer options → turn on USB debugging.',
				connection:
					'Connect your Android device to this device using a USB cable.',
			},
			actions: {
				playStoreLabel: 'Play Store',
				continue: 'Continue',
			},
		},
		connection: {
			headline: 'Select device',
			button: {
				default: 'Select device',
				connecting: 'Connecting…',
			},
			status: {
				connecting: 'Connecting…',
				connected: 'Connected to {{deviceName}}',
				error: 'Connection failed',
				noDevice: 'No device selected',
			},
			body: {
				line1:
					'Open this website on a device other than your Android device that has Adaptive Theme installed.',
				line2:
					'Select your target device and confirm the ADB authorization on your Android device. After that, you can grant the permission in the final step. No device found? Make sure you have completed the previous steps and selected data transfer mode on your Android device.',
			},
		},
		grantPermission: {
			headline: 'Grant permission',
			permissionStatus: {
				granted: 'Permission granted',
				missing: 'Permission missing',
				checking: 'Checking permission…',
			},
			appInstalledStatus: {
				checking: 'Checking app installation…',
				installed: 'App installed',
				notInstalled: 'App not installed',
			},
			actions: {
				installApp: 'Install app',
				executing: 'Executing…',
				grantPermission: 'Grant permission',
				aboutApp: 'About Adaptive Theme',
				rateApp: 'Rate app',
			},
			chips: {
				connectedTo: 'Connected to {{deviceName}}',
			},
			allDone: 'All done! You can now use Adaptive Theme on your Android device.',
		},
	},
	layout: {
		stepCard: {
			back: 'Back',
			completed: 'Completed',
		},
	},
	unsupportedBrowser: {
		title: 'Whoops — browser not supported',
		description:
			'This tool only works in modern Chromium-based desktop browsers such as Chrome, Edge, Brave, and similar.',
		expertsLabel: 'For experts:',
		expertsDescription:
			'Alternatively, you can run the following ADB command yourself:',
	},
	commandDetails: {
		intro:
			"Adaptive Theme needs a special permission to change your Android device's theme. This permission allows the app to modify system settings related to the device theme and is only used to switch between light and dark mode. To grant it, the following command will be executed:",
		outro:
			'No permanent changes are made to your device. You can revoke this permission at any time by uninstalling the app, which fully reverts the process.',
	},
} as const;

export type TranslationResources = typeof en;
