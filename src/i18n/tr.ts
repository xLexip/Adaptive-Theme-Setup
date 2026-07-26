const appName = 'Adaptive Theme';

export const tr = {
	app: {
		name: appName,
		title: `${appName}: Kurulum`,
		snackbar: {
			playStoreOpened: 'Play Store cihazınızda açıldı.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Dil',
	},
	steps: {
		preparation: {
			headline: 'Hazırlık',
			intro: {
				general:
					`Android cihazınıza ${appName} uygulamasını yükleyin ve bu web sitesini başka bir cihazda açın.`,
				explanation:
					`Android, uygulamaların Karanlık Mod gibi sistem ayarlarını otomatik olarak değiştirmesini kısıtlar. Buna izin vermek için, örneğin bu web sitesi aracılığıyla uygulamaya tek seferlik WRITE_SECURE_SETTINGS izni vermeniz gerekir. Bu tamamen güvenlidir ve uygulamanın yalnızca karanlık mod gibi sistem ayarlarını değiştirmesine izin verir, başka hiçbir şeye izin vermez. Uygulamayı kaldırmak işlemi tamamen geri alır. Ayrıca, hem ${appName} hem de bu kurulum web sitesi github.com/xLexip adresinde açık kaynaklıdır.`,
				howToGrantLine1: `Kurulumu ${appName} uygulamasında başlatın.`,
				whyLabel: 'Bu neden gerekli?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Play Store\'u Aç',
				continue: 'Kuruluma Başla',
			},
		},
		connection: {
			headline: 'Cihazı Bağla',
			button: {
				default: 'Cihaz Seç',
				connecting: 'Bağlanıyor…',
			},
			status: {
				connecting: 'Bağlanıyor…',
				connected: '{{deviceName}} cihazına bağlandı',
				error: 'Bağlantı başarısız. Lütfen kablonuzu kontrol edin.',
				noDevice: 'Cihaz seçilmedi',
			},
			body: {
				line1:
					'Telefonunuzu USB üzerinden bu cihaza bağlayın ve aşağıdan seçin.',
				line2:
					'Cihazınızı seçtikten sonra, bağlantıyı onaylamanız için Android cihazınızda bir açılır pencere belirecektir. Açılır pencere yalnızca cihazın kilidi açık olduğunda görünebilir.',
			},
			cantFind: {
				title: "Cihaz bulunamadı mı?",
				body:
					'Kablonuzun veri aktarımını desteklediğinden emin olun (bazıları sadece şarj içindir). ' +
					'Telefonunuzun bildirimlerinde, USB modunu "Şarj" modundan "Dosya Aktarımı" veya "Veri Aktarımı" moduna getirin. ' +
					`Hala başarısız olursa, farklı bir tarayıcı deneyin veya ${appName} içindeki alternatif kurulum yöntemini kullanın.`,
			},
			alreadyInUse: {
				title: "Cihaz zaten kullanımda mı?",
				body:
					'Başka hiçbir programın cihazınızla etkileşime girmediğinden veya otomatik olarak bağlanmadığından emin olun. ' +
					'ADB yüklüyse mevcut ADB bağlantısını kapatmak için bilgisayarınızda şu komutu çalıştırabilirsiniz:',
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: 'Kurulumu Tamamla',
			permissionStatus: {
				granted: 'İzin Verildi',
				missing: 'İzin Eksik',
				checking: 'Durum kontrol ediliyor…',
			},
			appInstalledStatus: {
				checking: 'Uygulama aranıyor…',
				installed: 'Uygulama bulundu',
				notInstalled: 'Uygulama yüklü değil',
			},
			actions: {
				installApp: `${appName} Yükle`,
				executing: 'Uygulanıyor…',
				grantPermission: 'İzin Ver',
				rateApp: 'Beğendiniz mi? Puan vererek bize yardımcı olun! :]',
			},
			chips: {
				connectedTo: '{{deviceName}} cihazına bağlı',
			},
			allDone: `İşte bu kadar! Artık telefonunuzun bağlantısını kesebilir ve ${appName} yapılandırmasını yapabilirsiniz.`,
		},
	},
	layout: {
		stepCard: {
			back: 'Geri',
			completed: 'Bitti',
		},
	},
	unsupportedBrowser: {
		title: 'Tarayıcı desteklenmiyor',
		description:
			'Bu araç WebUSB desteği gerektirir. Lütfen Google Chrome, Microsoft Edge, Brave veya Opera gibi Chromium tabanlı bir tarayıcı kullanın.',
	},
	commandDetails: {
		intro: 'Uygulamanın karanlık mod gibi cihaz ayarlarını otomatik olarak değiştirmesine izin vermek için aşağıdaki komut çalıştırılacaktır.',
		outro: 'Bu işlem güvenlidir ve tamamen geri alınabilir. Hiçbir veri okunmaz ve cihazda kalıcı değişiklik yapılmaz. Uygulamayı kaldırmak işlemi geri alır ve izni iptal eder.',
	},
} as const;

