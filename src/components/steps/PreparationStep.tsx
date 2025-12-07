import {useI18n} from '../../i18n/i18n'
import {LanguagePicker} from '../i18n/LanguagePicker'

export const PreparationStep = () => {
	const {t} = useI18n()

	// The detailed step-by-step list was removed per request; keep the section concise.

	return (
		<div className="preparation-content">
			<div className="preparation-language-picker-row">
				<LanguagePicker/>
			</div>
			<p>
				{t('steps.preparation.intro.general')}
				<br/>
				<br/>
				{t('steps.preparation.intro.explanation')}
				<br/>
				<br/>
				<b>{t('steps.preparation.intro.howToGrantLine1')}</b>{' '}
				<br/>
				<br/>
				<b>{t('steps.preparation.intro.howToGrantLine2')}</b>
			</p>
			<ul className="preparation-list">{/* items were removed */}</ul>
			<p>
				<b>{t('steps.preparation.intro.expertsLabel')}</b>
				<br/> {t('steps.preparation.intro.expertsDescription')}
				<br/>{' '}
				<i>adb shell pm grant dev.lexip.hecate android.permission.WRITE_SECURE_SETTINGS</i>
			</p>
		</div>
	)
}
