import type {ReactNode} from 'react'
import {useI18n} from '../../i18n/i18n'

export const PreparationStep = () => {
	const {t} = useI18n()

	const items: ReactNode[] = [
		<li key="dev-options">
			<strong>{t('steps.preparation.list.devOptions').split(':')[0]}:</strong>{' '}
			{t('steps.preparation.list.devOptions').split(':').slice(1).join(':')}
		</li>,
		<li key="usb-debugging">
			<strong>{t('steps.preparation.list.usbDebugging').split(':')[0]}:</strong>{' '}
			{t('steps.preparation.list.usbDebugging').split(':').slice(1).join(':')}
		</li>,
		<li key="trust">
			<strong>{t('steps.preparation.list.connection').split(':')[0]}</strong>{' '}
			{t('steps.preparation.list.connection').split(':').slice(1).join(':')}
		</li>,
	]

	return <ul className="preparation-list">{items}</ul>
}
