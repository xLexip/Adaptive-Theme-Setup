const appName = 'Adaptive Theme';

export const es = {
	app: {
		name: appName,
		title: `${appName}: Configuración`,
		snackbar: {
			playStoreOpened: 'Play Store se ha abierto en tu dispositivo.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Idioma',
	},
	steps: {
		preparation: {
			headline: 'Preparación',
			intro: {
				general:
					`Instala ${appName} en tu dispositivo Android y abre este sitio web en otro dispositivo.`,
				explanation:
					"Android impide que las aplicaciones cambien ajustes del sistema, como el Modo oscuro, automáticamente. Para desbloquear esta función, necesitas conceder un permiso especial una sola vez. Esto es seguro, reversible y no otorga acceso a tus datos.",
				howToGrantLine1: `Inicia la configuración en la aplicación ${appName}.`,
				whyLabel: '¿Por qué es necesario?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Abrir Play Store',
				continue: 'Iniciar configuración',
			},
		},
		connection: {
			headline: 'Conectar dispositivo',
			button: {
				default: 'Seleccionar dispositivo',
				connecting: 'Conectando…',
			},
			status: {
				connecting: 'Conectando…',
				connected: 'Conectado a {{deviceName}}',
				error: 'Conexión fallida. Por favor, comprueba tu cable.',
				noDevice: 'Ningún dispositivo seleccionado',
			},
			body: {
				line1:
					'Conecta tu teléfono a este equipo vía USB y selecciónalo abajo.',
				line2:
					'Después de seleccionar tu dispositivo, aparecerá una ventana emergente en tu Android para confirmar la conexión.',
			},
			cantFind: {
				title: "¿No encuentras el dispositivo?",
				body:
					'Asegúrate de que tu cable admita transferencia de datos (algunos son solo de carga). ' +
					'En las notificaciones de tu teléfono, cambia el modo USB de "Carga" a "Transferencia de archivos" o "Transferencia de datos". ' +
					`Si sigue fallando, prueba con otro navegador o usa el método de configuración alternativo en ${appName}.`,
			},
		},
		grantPermission: {
			headline: 'Finalizar configuración',
			permissionStatus: {
				granted: 'Permiso concedido',
				missing: 'Falta permiso',
				checking: 'Comprobando estado…',
			},
			appInstalledStatus: {
				checking: 'Buscando aplicación…',
				installed: 'Aplicación encontrada',
				notInstalled: 'Aplicación no instalada',
			},
			actions: {
				installApp: `Instalar ${appName}`,
				executing: 'Aplicando…',
				grantPermission: 'Conceder permiso',
				rateApp: '¿Te gusta? ¡Ayúdanos con una calificación! :]',
			},
			chips: {
				connectedTo: 'Conectado a {{deviceName}}',
			},
			allDone: `¡Listo! Ya puedes desconectar tu teléfono y configurar ${appName}.`,
		},
	},
	layout: {
		stepCard: {
			back: 'Atrás',
			completed: 'Hecho',
		},
	},
	unsupportedBrowser: {
		title: 'Navegador no compatible',
		description:
			'Esta herramienta requiere soporte para WebUSB. Por favor, utiliza un navegador basado en Chromium como Google Chrome, Microsoft Edge, Brave u Opera.',
	},
	commandDetails: {
		intro: 'Se ejecutará el siguiente comando para permitir que la aplicación cambie ajustes del dispositivo, como el modo oscuro, automáticamente.',
		outro: 'Esto es seguro y completamente reversible. No se leen datos ni se realizan cambios permanentes en el dispositivo. Desinstalar la aplicación revierte el proceso y revoca el permiso.',
	},
} as const;

