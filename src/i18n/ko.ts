const appName = 'Adaptive Theme';

export const ko = {
	app: {
		name: appName,
		title: `${appName}: 설정`,
		snackbar: {
			playStoreOpened: '기기에서 Play 스토어가 열렸습니다.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: '언어',
	},
	steps: {
		preparation: {
			headline: '준비',
			intro: {
				general:
					`Android 기기에 ${appName}을(를) 설치하고 다른 기기에서 이 웹사이트를 열어주세요.`,
				explanation:
					`Android는 앱이 다크 모드와 같은 시스템 설정을 자동으로 변경하는 것을 제한합니다. 이를 허용하려면 이 웹사이트 등을 통해 앱에 일회성 권한 WRITE_SECURE_SETTINGS를 부여해야 합니다. 이는 완전히 안전하며 앱이 다크 모드와 같은 시스템 설정을 변경하는 것만 허용하고 다른 작업은 하지 않습니다. 앱을 삭제하면 이 프로세스가 완전히 되돌려집니다. 또한 ${appName}과 이 설정 웹사이트는 모두 github.com/xLexip에서 오픈 소스로 제공됩니다.`,
				howToGrantLine1: `${appName} 앱에서 설정을 시작하세요.`,
				whyLabel: '이 작업이 필요한 이유는 무엇인가요?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Play 스토어 열기',
				continue: '설정 시작',
			},
		},
		connection: {
			headline: '기기 연결',
			button: {
				default: '기기 선택',
				connecting: '연결 중…',
			},
			status: {
				connecting: '연결 중…',
				connected: '{{deviceName}}에 연결됨',
				error: '연결 실패. 케이블을 확인해 주세요.',
				noDevice: '선택된 기기 없음',
			},
			body: {
				line1:
					'USB를 통해 휴대전화를 이 기기에 연결하고 아래에서 선택하세요.',
				line2:
					'기기를 선택하면 연결을 확인하는 팝업이 Android 기기에 나타납니다. 팝업은 기기 잠금이 해제된 경우에만 표시될 수 있습니다.',
			},
			cantFind: {
				title: "기기를 찾을 수 없나요?",
				body:
					'케이블이 데이터 전송을 지원하는지 확인하세요 (일부 케이블은 충전 전용입니다). ' +
					'휴대전화 알림에서 USB 모드를 "충전"에서 "파일 전송" 또는 "데이터 전송"으로 전환하세요. ' +
					`여전히 실패하면 다른 브라우저를 시도하거나 ${appName}의 대체 설정 방법을 사용해 보세요.`,
			},
			alreadyInUse: {
				title: "기기가 이미 사용 중인가요?",
				body:
					'다른 실행 중인 프로그램이 기기와 상호작용하거나 자동으로 연결되지 않는지 확인하세요. ' +
					'ADB가 설치되어 있다면, 컴퓨터에서 다음 명령어를 실행하여 기존 ADB 연결을 종료할 수 있습니다:',
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: '설정 완료',
			permissionStatus: {
				granted: '권한 부여됨',
				missing: '권한 없음',
				checking: '상태 확인 중…',
			},
			appInstalledStatus: {
				checking: '앱 찾는 중…',
				installed: '앱 찾음',
				notInstalled: '앱이 설치되지 않음',
			},
			actions: {
				installApp: `${appName} 설치`,
				executing: '적용 중…',
				grantPermission: '권한 부여',
				rateApp: '마음에 드시나요? 평점을 남겨 응원해 주세요! :]',
			},
			chips: {
				connectedTo: '{{deviceName}}에 연결됨',
			},
			allDone: `완료되었습니다! 이제 휴대전화 연결을 해제하고 ${appName}을(를) 구성할 수 있습니다.`,
		},
	},
	layout: {
		stepCard: {
			back: '뒤로',
			completed: '완료',
		},
	},
	unsupportedBrowser: {
		title: '지원되지 않는 브라우저',
		description:
			'이 도구는 WebUSB 지원이 필요합니다. Google Chrome, Microsoft Edge, Brave 또는 Opera와 같은 Chromium 기반 브라우저를 사용해 주세요.',
	},
	commandDetails: {
		intro: '앱이 다크 모드와 같은 기기 설정을 자동으로 전환할 수 있도록 다음 명령이 실행됩니다.',
		outro: '이 작업은 안전하며 완전히 되돌릴 수 있습니다. 데이터를 읽지 않으며 기기에 영구적인 변경을 가하지 않습니다. 앱을 제거하면 프로세스가 되돌려지고 권한이 취소됩니다.',
	},
} as const;

