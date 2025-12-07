import {useState} from 'react'
import {SUPPORTED_LOCALES, useI18n} from '../../i18n/i18n'

export const LanguagePicker = () => {
	const {locale, setLocale, t} = useI18n() as ReturnType<typeof useI18n> & { t: (key: string) => string }
	const [open, setOpen] = useState(false)

	const currentLabel = SUPPORTED_LOCALES[locale as keyof typeof SUPPORTED_LOCALES]?.label ?? 'Unknown'
	const labelText = t('app.languageLabel')

	return (
		<div className="language-picker">
			<strong className="language-picker__title">{labelText}:</strong>
			<button
				type="button"
				className="language-picker__button"
				onClick={() => setOpen((prev) => !prev)}
				aria-expanded={open}
				aria-label={labelText}
			>
				<span className="language-picker__icon" aria-hidden>
					🌐
				</span>
				<span className="language-picker__current">{currentLabel}</span>
			</button>
			{open && (
				<ul className="language-picker__menu">
					{Object.entries(SUPPORTED_LOCALES).map(([code, meta]) => (
						<li key={code}>
							<button
								type="button"
								className={`language-picker__menu-item${code === locale ? ' language-picker__menu-item--active' : ''}`}
								onClick={() => {
									setLocale(code)
									setOpen(false)
								}}
							>
								{meta.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
