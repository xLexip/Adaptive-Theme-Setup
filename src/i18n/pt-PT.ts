const appName = 'Adaptive Theme';

export const ptPT = {
	app: {
		name: appName,
		title: `${appName}: Configuração`,
		snackbar: {
			playStoreOpened: 'A Play Store foi aberta no seu dispositivo.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Idioma',
	},
	steps: {
		preparation: {
			headline: 'Preparação',
			intro: {
				general:
					`Instale a ${appName} no seu dispositivo Android e abra este site noutro dispositivo.`,
				explanation:
					"O Android impede que as aplicações alterem definições de sistema, como o Modo Escuro, automaticamente. Para desbloquear esta funcionalidade, precisa de conceder uma permissão única. Isto é seguro, reversível e não concede acesso aos seus dados.",
				howToGrantLine1: `Inicie a configuração na aplicação ${appName}.`,
				whyLabel: 'Porque é que isto é necessário?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Abrir Play Store',
				continue: 'Iniciar Configuração',
			},
		},
		connection: {
			headline: 'Ligar Dispositivo',
			button: {
				default: 'Selecionar Dispositivo',
				connecting: 'A conectar…',
			},
			status: {
				connecting: 'A conectar…',
				connected: 'Ligado a {{deviceName}}',
				error: 'A ligação falhou. Por favor, verifique o seu cabo.',
				noDevice: 'Nenhum dispositivo selecionado',
			},
			body: {
				line1:
					'Ligue o seu telemóvel a este dispositivo via USB e selecione-o abaixo.',
				line2:
					'Após selecionar o seu dispositivo, aparecerá um pop-up no seu Android para confirmar a ligação. O pop-up só poderá estar visível se o dispositivo estiver desbloqueado.',
			},
			cantFind: {
				title: "Não encontra o dispositivo?",
				body:
					'Certifique-se de que o cabo suporta transferência de dados (alguns servem apenas para carregar). ' +
					'Nas notificações do telemóvel, altere o modo USB de "Carregamento" para "Transferência de Ficheiros" ou "Transferência de Dados". ' +
					`Se continuar a falhar, tente um navegador diferente ou o método de configuração alternativo na ${appName}.`,
			},
			alreadyInUse: {
				title: "Dispositivo já em utilização?",
				body:
					'Certifique-se de que nenhum outro programa em execução está a interagir com o dispositivo ou a ligar-se a ele automaticamente. ' +
					'Se tiver o ADB instalado, pode executar o seguinte comando no computador para encerrar qualquer ligação ADB existente:',
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: 'Terminar Configuração',
			permissionStatus: {
				granted: 'Permissão Concedida',
				missing: 'Permissão em Falta',
				checking: 'A verificar estado…',
			},
			appInstalledStatus: {
				checking: 'A procurar aplicação…',
				installed: 'Aplicação encontrada',
				notInstalled: 'Aplicação não instalada',
			},
			actions: {
				installApp: `Instalar ${appName}`,
				executing: 'A aplicar…',
				grantPermission: 'Conceder Permissão',
				rateApp: 'Gostou? Ajude-nos com uma classificação! :]',
			},
			chips: {
				connectedTo: 'Ligado a {{deviceName}}',
			},
			allDone: `Está feito! Agora pode desligar o telemóvel e configurar a ${appName}.`,
		},
	},
	layout: {
		stepCard: {
			back: 'Voltar',
			completed: 'Concluído',
		},
	},
	unsupportedBrowser: {
		title: 'Navegador não suportado',
		description:
			'Esta ferramenta requer suporte WebUSB. Por favor, utilize um navegador baseado em Chromium como Google Chrome, Microsoft Edge, Brave ou Opera.',
	},
	commandDetails: {
		intro: 'O comando seguinte será executado para permitir que a aplicação alterne definições do dispositivo, como o modo escuro, automaticamente.',
		outro: 'Isto é seguro e totalmente reversível. Nenhuns dados são lidos e nenhuma alteração permanente é feita ao dispositivo. Desinstalar a aplicação reverte o processo e revoga a permissão.',
	},
} as const;

