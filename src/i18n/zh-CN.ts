const appName = 'Adaptive Theme';

export const zhCN = {
	app: {
		name: appName,
		title: `${appName}：设置`,
		snackbar: {
			playStoreOpened: 'Play 商店已在您的设备上打开。',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: '语言',
	},
	steps: {
		preparation: {
			headline: '准备工作',
			intro: {
				general:
					`请在您的 Android 设备上安装 ${appName}，并在另一台设备上打开此网站。`,
				explanation:
					"Android 限制应用自动切换深色模式等系统设置。要解锁此功能，您需要授予一次性权限。此操作安全、可逆，且不会授权访问您的数据。",
				howToGrantLine1: `在 ${appName} 应用中开始设置。`,
				whyLabel: '为什么需要此步骤？',
			},
			list: {},
			actions: {
				playStoreLabel: '打开 Play 商店',
				continue: '开始设置',
			},
		},
		connection: {
			headline: '连接设备',
			button: {
				default: '选择设备',
				connecting: '正在连接…',
			},
			status: {
				connecting: '正在连接…',
				connected: '已连接到 {{deviceName}}',
				error: '连接失败。请检查您的数据线。',
				noDevice: '未选择设备',
			},
			body: {
				line1:
					'通过 USB 将手机连接到此设备，然后在下方选择它。',
				line2:
					'选择设备后，您的 Android 设备上会出现弹窗，请确认连接。',
			},
			cantFind: {
				title: "找不到设备？",
				body:
					'请确保您的数据线支持数据传输（有些仅支持充电）。' +
					'在手机通知栏中，将 USB 模式从“充电”切换为“文件传输”或“数据传输”。' +
					`如果仍然失败，请尝试更换浏览器，或使用 ${appName} 中的替代设置方法。`,
			},
		},
		grantPermission: {
			headline: '完成设置',
			permissionStatus: {
				granted: '权限已授予',
				missing: '权限缺失',
				checking: '正在检查状态…',
			},
			appInstalledStatus: {
				checking: '正在查找应用…',
				installed: '找到应用',
				notInstalled: '未安装应用',
			},
			actions: {
				installApp: `安装 ${appName}`,
				executing: '正在应用…',
				grantPermission: '授予权限',
				rateApp: '觉得不错？给我们个好评吧！:]',
			},
			chips: {
				connectedTo: '已连接到 {{deviceName}}',
			},
			allDone: `大功告成！您现在可以断开手机连接并配置 ${appName} 了。`,
		},
	},
	layout: {
		stepCard: {
			back: '返回',
			completed: '完成',
		},
	},
	unsupportedBrowser: {
		title: '浏览器不支持',
		description:
			'此工具需要 WebUSB 支持。请使用基于 Chromium 的浏览器，如 Google Chrome、Microsoft Edge、Brave 或 Opera。',
	},
	commandDetails: {
		intro: '将执行以下命令，以允许应用自动切换深色模式等设备设置。',
		outro: '此操作安全且完全可逆。不会读取任何数据，也不会对设备进行永久性更改。卸载应用将撤销此过程并收回权限。',
	},
} as const;

