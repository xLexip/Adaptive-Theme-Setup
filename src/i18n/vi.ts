const appName = 'Adaptive Theme';

export const vi = {
	app: {
		name: appName,
		title: `${appName}: Thiết lập`,
		snackbar: {
			playStoreOpened: 'Play Store đã được mở trên thiết bị của bạn.',
		},
		footer: {
			githubAlt: 'GitHub',
		},
		languageLabel: 'Ngôn ngữ',
	},
	steps: {
		preparation: {
			headline: 'Chuẩn bị',
			intro: {
				general:
					`Cài đặt ${appName} trên thiết bị Android của bạn và mở trang web này trên một thiết bị khác.`,
				explanation:
					`Android hạn chế các ứng dụng tự động thay đổi cài đặt hệ thống như Chế độ tối. Để cho phép điều này, bạn cần cấp quyền một lần WRITE_SECURE_SETTINGS cho ứng dụng, ví dụ bằng trang web này. Việc này hoàn toàn an toàn và chỉ cho phép ứng dụng thay đổi các cài đặt hệ thống như chế độ tối, không có gì khác. Việc gỡ cài đặt ứng dụng sẽ hoàn tất hoàn tác quá trình. Ngoài ra, cả ${appName} và trang web thiết lập này đều là mã nguồn mở tại github.com/xLexip.`,
				howToGrantLine1: `Bắt đầu thiết lập trong ứng dụng ${appName}.`,
				whyLabel: 'Tại sao điều này lại cần thiết?',
			},
			list: {},
			actions: {
				playStoreLabel: 'Mở Play Store',
				continue: 'Bắt đầu thiết lập',
			},
		},
		connection: {
			headline: 'Kết nối thiết bị',
			button: {
				default: 'Chọn thiết bị',
				connecting: 'Đang kết nối…',
			},
			status: {
				connecting: 'Đang kết nối…',
				connected: 'Đã kết nối với {{deviceName}}',
				error: 'Kết nối thất bại. Vui lòng kiểm tra cáp của bạn.',
				noDevice: 'Chưa chọn thiết bị nào',
			},
			body: {
				line1:
					'Kết nối điện thoại của bạn với thiết bị này qua USB và chọn nó bên dưới.',
				line2:
					'Sau khi chọn thiết bị, một cửa sổ bật lên sẽ xuất hiện trên thiết bị Android của bạn để xác nhận kết nối. Cửa sổ bật lên chỉ có thể hiển thị nếu thiết bị đã được mở khóa.',
			},
			cantFind: {
				title: "Không tìm thấy thiết bị?",
				body:
					'Đảm bảo cáp của bạn hỗ trợ truyền dữ liệu (một số cáp chỉ để sạc). ' +
					'Trên thông báo điện thoại, hãy chuyển chế độ USB từ "Sạc" sang "Truyền tệp" hoặc "Truyền dữ liệu". ' +
					`Nếu vẫn thất bại, hãy thử trình duyệt khác hoặc phương pháp thiết lập thay thế trong ${appName}.`,
			},
			alreadyInUse: {
				title: "Thiết bị đã được sử dụng?",
				body:
					'Đảm bảo không có chương trình nào đang chạy tương tác hoặc tự động kết nối với thiết bị của bạn. ' +
					'Nếu bạn đã cài ADB, hãy chạy lệnh sau trên máy tính để đóng kết nối ADB hiện có:',
				adbCommand: 'adb kill-server',
			},
		},
		grantPermission: {
			headline: 'Hoàn tất thiết lập',
			permissionStatus: {
				granted: 'Đã cấp quyền',
				missing: 'Thiếu quyền',
				checking: 'Đang kiểm tra trạng thái…',
			},
			appInstalledStatus: {
				checking: 'Đang tìm ứng dụng…',
				installed: 'Đã tìm thấy ứng dụng',
				notInstalled: 'Ứng dụng chưa được cài đặt',
			},
			actions: {
				installApp: `Cài đặt ${appName}`,
				executing: 'Đang áp dụng…',
				grantPermission: 'Cấp quyền',
				rateApp: 'Bạn thích ứng dụng này? Hãy giúp chúng tôi bằng cách đánh giá nhé! :]',
			},
			chips: {
				connectedTo: 'Đã kết nối với {{deviceName}}',
			},
			allDone: `Vậy là xong! Bây giờ bạn có thể ngắt kết nối điện thoại và định cấu hình ${appName}.`,
		},
	},
	layout: {
		stepCard: {
			back: 'Quay lại',
			completed: 'Hoàn tất',
		},
	},
	unsupportedBrowser: {
		title: 'Trình duyệt không được hỗ trợ',
		description:
			'Công cụ này yêu cầu hỗ trợ WebUSB. Vui lòng sử dụng trình duyệt dựa trên Chromium như Google Chrome, Microsoft Edge, Brave hoặc Opera.',
	},
	commandDetails: {
		intro: 'Lệnh sau sẽ được thực thi để cho phép ứng dụng tự động chuyển đổi cài đặt thiết bị như chế độ tối.',
		outro: 'Việc này an toàn và hoàn toàn có thể hoàn tác. Không có dữ liệu nào bị đọc và không có thay đổi vĩnh viễn nào được thực hiện trên thiết bị. Gỡ cài đặt ứng dụng sẽ đảo ngược quá trình này và thu hồi quyền.',
	},
} as const;

