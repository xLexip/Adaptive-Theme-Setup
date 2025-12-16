import {useI18n} from '../../i18n/i18n'

export const UnsupportedBrowserCard = () => {
	const {t} = useI18n()

	return (
		<md-filled-card className="unsupported-browser-card">
			<h2>{t('unsupportedBrowser.title')}</h2>
			<p>{t('unsupportedBrowser.description')}</p>
		</md-filled-card>
	)
}
