const appName = 'Adaptive Theme';

export const fr = {
	app: {
		name: appName,
		title: `${appName} : Configuration`,
		snackbar: {
			playStoreOpened: 'Le Play Store a été ouvert sur votre appareil.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Langue',
	},
	steps: {
		preparation: {
			headline: 'Préparation',
			intro: {
				general:
					`Installez ${appName} sur votre appareil Android et ouvrez ce site web sur un autre appareil.`,
				explanation:
					"Android empêche les applications de modifier automatiquement les paramètres système comme le mode sombre. Pour débloquer cette fonctionnalité, vous devez accorder une autorisation unique. C'est sûr, réversible et ne donne pas accès à vos données.",
				howToGrantLine1: `Commencez la configuration dans l'application ${appName}.`,
				whyLabel: 'Pourquoi est-ce nécessaire ?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Ouvrir le Play Store',
				continue: 'Lancer la configuration',
			},
		},
		connection: {
			headline: 'Connecter l\'appareil',
			button: {
				default: 'Sélectionner un appareil',
				connecting: 'Connexion…',
			},
			status: {
				connecting: 'Connexion…',
				connected: 'Connecté à {{deviceName}}',
				error: 'Échec de la connexion. Veuillez vérifier votre câble.',
				noDevice: 'Aucun appareil sélectionné',
			},
			body: {
				line1:
					'Connectez votre téléphone à cet appareil via USB et sélectionnez-le ci-dessous.',
				line2:
					'Après avoir sélectionné votre appareil, une fenêtre contextuelle apparaîtra sur votre Android pour confirmer la connexion. La fenêtre contextuelle n\'est visible que si l\'appareil est déverrouillé.',
			},
			cantFind: {
				title: "Appareil introuvable ?",
				body:
					"Assurez-vous que votre câble prend en charge le transfert de données (certains ne servent qu'à la charge). " +
					"Dans les notifications de votre téléphone, passez le mode USB de « Recharge » à « Transfert de fichiers » ou « Transfert de données ». " +
					`Si cela échoue toujours, essayez un autre navigateur ou la méthode de configuration alternative dans ${appName}.`,
			},
			alreadyInUse: {
				title: "L'appareil est déjà utilisé ?",
				body:
					"Assurez-vous qu'aucun autre programme en cours d'exécution n'interagit avec votre appareil ou ne s'y connecte automatiquement. " +
					"Si vous avez ADB installé, vous pouvez exécuter la commande suivante sur votre ordinateur pour fermer toute connexion ADB existante :",
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: 'Terminer la configuration',
			permissionStatus: {
				granted: 'Permission accordée',
				missing: 'Permission manquante',
				checking: 'Vérification du statut…',
			},
			appInstalledStatus: {
				checking: 'Recherche de l\'application…',
				installed: 'Application trouvée',
				notInstalled: 'Application non installée',
			},
			actions: {
				installApp: `Installer ${appName}`,
				executing: 'Application en cours…',
				grantPermission: 'Accorder la permission',
				rateApp: 'Vous aimez ? Aidez-nous avec une note ! :]',
			},
			chips: {
				connectedTo: 'Connecté à {{deviceName}}',
			},
			allDone: `C'est tout ! Vous pouvez maintenant déconnecter votre téléphone et configurer ${appName}.`,
		},
	},
	layout: {
		stepCard: {
			back: 'Retour',
			completed: 'Terminé',
		},
	},
	unsupportedBrowser: {
		title: 'Navigateur non supporté',
		description:
			"Cet outil nécessite la prise en charge de WebUSB. Veuillez utiliser un navigateur basé sur Chromium comme Google Chrome, Microsoft Edge, Brave ou Opera.",
	},
	commandDetails: {
		intro: 'La commande suivante sera exécutée pour permettre à l\'application de modifier automatiquement les paramètres de l\'appareil, comme le mode sombre.',
		outro: 'Ceci est sûr et totalement réversible. Aucune donnée n\'est lue et aucune modification permanente n\'est apportée à l\'appareil. La désinstallation de l\'application annule le processus et révoque la permission.',
	},
} as const;
