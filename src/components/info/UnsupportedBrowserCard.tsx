import {useI18n} from '../../i18n/i18n'

export const UnsupportedBrowserCard = () => {
	const {t} = useI18n()

	return (
		<md-filled-card className="unsupported-browser-card">
			<h2>{t('unsupportedBrowser.title')}</h2>
			<p>{t('unsupportedBrowser.description')}</p>
			<p>
				<b>{t('unsupportedBrowser.expertsLabel')}</b>
				<br/>
				{t('unsupportedBrowser.expertsDescription')}
				<br/> adb shell pm grant dev.lexip.hecate android.permission.WRITE_SECURE_SETTINGS
			</p>
		</md-filled-card>
	)
}

