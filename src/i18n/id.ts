const appName = 'Adaptive Theme';

export const id = {
	app: {
		name: appName,
		title: `${appName}: Penyiapan`,
		snackbar: {
			playStoreOpened: 'Play Store telah dibuka di perangkat Anda.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Bahasa',
	},
	steps: {
		preparation: {
			headline: 'Persiapan',
			intro: {
				general:
					`Instal ${appName} di perangkat Android Anda dan buka situs web ini di perangkat lain.`,
				explanation:
					`Android membatasi aplikasi untuk mengubah pengaturan sistem seperti Mode Gelap secara otomatis. Untuk mengizinkannya, Anda perlu memberikan izin satu kali WRITE_SECURE_SETTINGS ke aplikasi, misalnya melalui situs web ini. Ini sepenuhnya aman dan hanya mengizinkan aplikasi untuk mengubah pengaturan sistem seperti mode gelap, tidak ada yang lain. Meng-uninstal aplikasi akan sepenuhnya mengembalikan proses ini. Selain itu, ${appName} dan situs web penyiapan ini bersifat sumber terbuka di github.com/xLexip.`,
				howToGrantLine1: `Mulai penyiapan di aplikasi ${appName}.`,
				whyLabel: 'Mengapa ini diperlukan?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Buka Play Store',
				continue: 'Mulai Penyiapan',
			},
		},
		connection: {
			headline: 'Hubungkan Perangkat',
			button: {
				default: 'Pilih Perangkat',
				connecting: 'Menghubungkan…',
			},
			status: {
				connecting: 'Menghubungkan…',
				connected: 'Terhubung ke {{deviceName}}',
				error: 'Koneksi gagal. Silakan periksa kabel Anda.',
				noDevice: 'Tidak ada perangkat yang dipilih',
			},
			body: {
				line1:
					'Hubungkan ponsel Anda ke perangkat ini melalui USB dan pilih di bawah ini.',
				line2:
					'Setelah memilih perangkat Anda, popup akan muncul di perangkat Android Anda untuk mengonfirmasi koneksi. Popup mungkin hanya terlihat jika perangkat tidak terkunci.',
			},
			cantFind: {
				title: "Perangkat tidak ditemukan?",
				body:
					'Pastikan kabel Anda mendukung transfer data (beberapa hanya untuk pengisian daya). ' +
					'Di notifikasi ponsel Anda, ubah mode USB dari "Pengisian Daya" ke "Transfer File" atau "Transfer Data". ' +
					`Jika masih gagal, coba browser lain atau metode penyiapan alternatif di ${appName}.`,
			},
			alreadyInUse: {
				title: "Perangkat sudah digunakan?",
				body:
					'Pastikan tidak ada program lain yang sedang berjalan yang berinteraksi atau terhubung secara otomatis ke perangkat Anda. ' +
					'Jika Anda memiliki ADB yang terinstal, Anda dapat menjalankan perintah berikut di komputer Anda untuk menutup koneksi ADB yang ada:',
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: 'Selesaikan Penyiapan',
			permissionStatus: {
				granted: 'Izin Diberikan',
				missing: 'Izin Belum Diberikan',
				checking: 'Memeriksa status…',
			},
			appInstalledStatus: {
				checking: 'Mencari aplikasi…',
				installed: 'Aplikasi ditemukan',
				notInstalled: 'Aplikasi tidak terinstal',
			},
			actions: {
				installApp: `Instal ${appName}`,
				executing: 'Menerapkan…',
				grantPermission: 'Berikan Izin',
				rateApp: 'Suka aplikasinya? Bantu kami dengan memberi rating! :]',
			},
			chips: {
				connectedTo: 'Terhubung ke {{deviceName}}',
			},
			allDone: `Selesai! Anda sekarang dapat memutuskan sambungan ponsel dan mengonfigurasi ${appName}.`,
		},
	},
	layout: {
		stepCard: {
			back: 'Kembali',
			completed: 'Selesai',
		},
	},
	unsupportedBrowser: {
		title: 'Browser tidak didukung',
		description:
			'Alat ini memerlukan dukungan WebUSB. Silakan gunakan browser berbasis Chromium seperti Google Chrome, Microsoft Edge, Brave, atau Opera.',
	},
	commandDetails: {
		intro: 'Perintah berikut akan dijalankan untuk mengizinkan aplikasi mengubah pengaturan perangkat seperti mode gelap secara otomatis.',
		outro: 'Ini aman dan sepenuhnya dapat dibatalkan. Tidak ada data yang dibaca, dan tidak ada perubahan permanen yang dibuat pada perangkat. Menghapus instalasi aplikasi akan mengembalikan proses dan mencabut izin.',
	},
} as const;

