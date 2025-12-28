import {useI18n} from '../../i18n/i18n'
import {LanguagePicker} from '../i18n/LanguagePicker'

export const PreparationStep = () => {
	const {t} = useI18n()

	return (
		<div className="preparation-content">
			<div className="preparation-language-picker-row">
				<LanguagePicker/>
			</div>
			<p>
				{t('steps.preparation.intro.general')}
				<br/>
				<br/>
				<b>{t('steps.preparation.intro.howToGrantLine1')}</b>
			</p>

			{}
			<div style={{height: 8}} aria-hidden="true"/>

			<details className="preparation-why" aria-labelledby="preparation-why-summary">
				<summary id="preparation-why-summary">{t('steps.preparation.intro.whyLabel')}</summary>
				<p>{t('steps.preparation.intro.explanation')}</p>
			</details>

			<ul className="preparation-list">{}</ul>
		</div>
	)
}
