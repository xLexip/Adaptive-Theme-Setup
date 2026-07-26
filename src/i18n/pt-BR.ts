const appName = 'Adaptive Theme';

export const ptBR = {
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
			headline: 'Prepare-se',
			intro: {
				general:
					`Instale o ${appName} no seu dispositivo Android e abra este site em outro dispositivo.`,
				explanation:
					`O Android restringe que aplicativos alterem configurações do sistema, como o Modo Escuro, automaticamente. Para permitir isso, você precisa conceder a permissão única WRITE_SECURE_SETTINGS ao aplicativo, por exemplo, por meio deste site. Isso é totalmente seguro e apenas permite que o aplicativo altere configurações do sistema, como o modo escuro, nada mais. Desinstalar o aplicativo reverte totalmente o processo. Além disso, tanto o ${appName} quanto este site de configuração são de código aberto no github.com/xLexip.`,
				howToGrantLine1: `Inicie a configuração no aplicativo ${appName}.`,
				whyLabel: 'Por que isso é necessário?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Abrir Play Store',
				continue: 'Iniciar Configuração',
			},
		},
		connection: {
			headline: 'Conectar Dispositivo',
			button: {
				default: 'Selecionar Dispositivo',
				connecting: 'Conectando…',
			},
			status: {
				connecting: 'Conectando…',
				connected: 'Conectado a {{deviceName}}',
				error: 'Falha na conexão. Por favor, verifique seu cabo.',
				noDevice: 'Nenhum dispositivo selecionado',
			},
			body: {
				line1:
					'Conecte seu celular a este dispositivo via USB e selecione-o abaixo.',
				line2:
					'Após selecionar seu dispositivo, um pop-up aparecerá no seu Android para confirmar a conexão. O pop-up só poderá ser visível se o dispositivo estiver desbloqueado.',
			},
			cantFind: {
				title: "Dispositivo não encontrado?",
				body:
					'Certifique-se de que seu cabo suporta transferência de dados (alguns servem apenas para carregar). ' +
					'Nas notificações do seu celular, mude o modo USB de "Carregamento" para "Transferência de Arquivos" ou "Transferência de Dados". ' +
					`Se ainda falhar, tente um navegador diferente ou o método de configuração alternativo no ${appName}.`,
			},
			alreadyInUse: {
				title: "Dispositivo já em uso?",
				body:
					'Certifique-se de que nenhum outro programa em execução esteja interagindo com o dispositivo ou conectando-se a ele automaticamente. ' +
					'Se você tiver o ADB instalado, pode executar o seguinte comando no computador para encerrar qualquer conexão ADB existente:',
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: 'Finalizar Configuração',
			permissionStatus: {
				granted: 'Permissão Concedida',
				missing: 'Permissão Ausente',
				checking: 'Verificando status…',
			},
			appInstalledStatus: {
				checking: 'Procurando aplicativo…',
				installed: 'Aplicativo encontrado',
				notInstalled: 'Aplicativo não instalado',
			},
			actions: {
				installApp: `Instalar ${appName}`,
				executing: 'Aplicando…',
				grantPermission: 'Conceder Permissão',
				rateApp: 'Gostou? Ajude-nos com uma avaliação! :]',
			},
			chips: {
				connectedTo: 'Conectado a {{deviceName}}',
			},
			allDone: `É isso! Agora você pode desconectar seu celular e configurar o ${appName}.`,
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
			'Esta ferramenta requer suporte a WebUSB. Por favor, use um navegador baseado em Chromium como Google Chrome, Microsoft Edge, Brave ou Opera.',
	},
	commandDetails: {
		intro: 'O comando a seguir será executado para permitir que o aplicativo alterne configurações do dispositivo, como o modo escuro, automaticamente.',
		outro: 'Isso é seguro e totalmente reversível. Nenhum dado é lido e nenhuma alteração permanente é feita no dispositivo. Desinstalar o aplicativo reverte o processo e revoga a permissão.',
	},
} as const;

