const appName = 'Adaptive Theme';

export const ja = {
	app: {
		name: appName,
		title: `${appName}: セットアップ`,
		snackbar: {
			playStoreOpened: 'デバイスでPlayストアが開かれました。',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: '言語',
	},
	steps: {
		preparation: {
			headline: '準備',
			intro: {
				general:
					`Androidデバイスに${appName}をインストールし、別のデバイスでこのWebサイトを開いてください。`,
				explanation:
					"Androidでは、アプリがダークモードなどのシステム設定を自動的に切り替えることが制限されています。この機能を使用するには、一度だけ権限を付与する必要があります。これは安全かつ可逆的であり、データへのアクセス権を与えるものではありません。",
				howToGrantLine1: `${appName}アプリでセットアップを開始してください。`,
				whyLabel: 'なぜこれが必要なのですか？',
			},
			list: {},
			actions: {
				playStoreLabel: 'Playストアを開く',
				continue: 'セットアップを開始',
			},
		},
		connection: {
			headline: 'デバイスを接続',
			button: {
				default: 'デバイスを選択',
				connecting: '接続中…',
			},
			status: {
				connecting: '接続中…',
				connected: '{{deviceName}} に接続済み',
				error: '接続に失敗しました。ケーブルを確認してください。',
				noDevice: 'デバイスが選択されていません',
			},
			body: {
				line1:
					'USB経由でスマートフォンをこのデバイスに接続し、以下で選択してください。',
				line2:
					'デバイスを選択すると、接続を確認するためのポップアップがAndroidデバイスに表示されます。',
			},
			cantFind: {
				title: "デバイスが見つかりませんか？",
				body:
					'ケーブルがデータ転送に対応していることを確認してください（充電専用のものもあります）。' +
					'スマートフォンの通知から、USBモードを「充電」から「ファイル転送」または「データ転送」に切り替えてください。' +
					`それでもうまくいかない場合は、別のブラウザを試すか、${appName}内の別のセットアップ方法をお試しください。`,
			},
		},
		grantPermission: {
			headline: 'セットアップの完了',
			permissionStatus: {
				granted: '権限が付与されました',
				missing: '権限がありません',
				checking: 'ステータスを確認中…',
			},
			appInstalledStatus: {
				checking: 'アプリを検索中…',
				installed: 'アプリが見つかりました',
				notInstalled: 'アプリがインストールされていません',
			},
			actions: {
				installApp: `${appName}をインストール`,
				executing: '適用中…',
				grantPermission: '権限を付与',
				rateApp: '気に入っていただけましたか？ぜひ評価してください！ :]',
			},
			chips: {
				connectedTo: '{{deviceName}} に接続中',
			},
			allDone: `これで完了です！スマートフォンを取り外し、${appName}を設定できます。`,
		},
	},
	layout: {
		stepCard: {
			back: '戻る',
			completed: '完了',
		},
	},
	unsupportedBrowser: {
		title: 'サポートされていないブラウザです',
		description:
			'このツールにはWebUSBサポートが必要です。Google Chrome、Microsoft Edge、Brave、OperaなどのChromiumベースのブラウザを使用してください。',
	},
	commandDetails: {
		intro: 'アプリがダークモードなどのデバイス設定を自動的に切り替えることを許可するために、以下のコマンドが実行されます。',
		outro: 'これは安全で、完全に元に戻すことができます。データの読み取りやデバイスへの恒久的な変更は行われません。アプリをアンインストールすると、プロセスが元に戻り、権限が取り消されます。',
	},
} as const;

