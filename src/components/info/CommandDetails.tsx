import {GRANT_PERMISSION_COMMAND} from '../../constants/commands'
import {useI18n} from '../../i18n/i18n'

export const CommandDetails = () => {
	const {t} = useI18n()

	return (
		<div className="command-details">
			<p>{t('commandDetails.intro')}</p>
			<code>{GRANT_PERMISSION_COMMAND}</code>
			<p>{t('commandDetails.outro')}</p>
		</div>
	)
}
