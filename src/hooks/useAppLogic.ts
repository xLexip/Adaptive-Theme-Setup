import {useEffect, useRef, useState} from 'react'
import {useAdbConnection} from './useAdbConnection'
import {usePermissionGrant} from './usePermissionGrant'
import {useAnalytics} from './useAnalytics'
import {useI18n} from '../i18n/i18n'
import {AdbConnectionState, CommandExecutionStatus} from '../types/adb'

export const useAppLogic = () => {
	const {context, connect, getAdb} = useAdbConnection()
	const adb = getAdb()
	const permission = usePermissionGrant(adb)
	const {
		grantState,
		permissionStatus,
		isAppInstalled,
		grantWriteSecureSettings,
		checkPermissionStatus,
		checkAppInstalled,
		openPlayStoreOnDevice,
		launchAdaptiveTheme,
	} = permission

	const {t} = useI18n()
	const {logEvent} = useAnalytics()

	const [currentStep, setCurrentStep] = useState(1)
	const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null)
	const [firstContinueDelayElapsed, setFirstContinueDelayElapsed] = useState(false)
	const launchedRef = useRef(false)
	const effectiveCurrentStep =
		context.state === AdbConnectionState.CONNECTED ? Math.max(currentStep, 3) : currentStep
	const firstContinueDisabled = effectiveCurrentStep === 1 && !firstContinueDelayElapsed

	const webUsbUnsupported =
		context.state === AdbConnectionState.ERROR && context.error?.includes('WebUSB')

	useEffect(() => {
		const timer = window.setTimeout(() => setFirstContinueDelayElapsed(true), 3000)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (context.state === AdbConnectionState.CONNECTED) {
			logEvent('web_device_connected', {
				device_name: context.device?.name || context.device?.serial,
			})
		}
	}, [context.state, context.device, logEvent])

	useEffect(() => {
		if (grantState.status !== CommandExecutionStatus.SUCCESS) return

		logEvent('web_permission_granted')
		checkPermissionStatus()

		if (!launchedRef.current) {
			launchAdaptiveTheme()
			launchedRef.current = true
		}
	}, [grantState.status, checkPermissionStatus, launchAdaptiveTheme, logEvent])

	useEffect(() => {
		if (permissionStatus.status !== CommandExecutionStatus.SUCCESS) return

		if (!launchedRef.current) {
			launchAdaptiveTheme()
			launchedRef.current = true
		}
	}, [permissionStatus.status, launchAdaptiveTheme, logEvent])

	useEffect(() => {
		if (effectiveCurrentStep === 3) {
			checkPermissionStatus()
			checkAppInstalled()
		}
	}, [effectiveCurrentStep, checkPermissionStatus, checkAppInstalled])

	useEffect(() => {
		if (effectiveCurrentStep !== 3) return

		const intervalId = globalThis.setInterval(() => {
			checkAppInstalled()
		}, 3000)

		return () => globalThis.clearInterval(intervalId)
	}, [effectiveCurrentStep, checkAppInstalled])

	const goToStep = (step: number) => setCurrentStep(step)

	const isGranting = grantState.status === CommandExecutionStatus.RUNNING

	const handleOpenPlayStore = async () => {
		await openPlayStoreOnDevice()
		setSnackbarMessage(t('app.snackbar.playStoreOpened'))
		setTimeout(() => setSnackbarMessage(null), 4000)
	}

	const handleInstallApp = async () => {
		logEvent('web_install_app')
		await handleOpenPlayStore()
	}

	const handleOpenRepo = () => {
		logEvent('web_open_github_repo')
		if (typeof globalThis.window !== 'undefined') {
			globalThis.window.open('https://github.com/xLexip/Adaptive-Theme', '_blank', 'noopener,noreferrer')
		}
	}

	const handleRateApp = () => {
		logEvent('web_rate_app')
		void handleOpenPlayStore()
	}

	const handleGrant = () => {
		void grantWriteSecureSettings()
	}

	return {
		context,
		connect,
		adb,
		currentStep: effectiveCurrentStep,
		snackbarMessage,
		firstContinueDisabled,
		webUsbUnsupported,
		isGranting,
		permissionStatus,
		isAppInstalled,
		t,
		goToStep,
		handleInstallApp,
		handleOpenRepo,
		handleRateApp,
		handleGrant,
	}
}

