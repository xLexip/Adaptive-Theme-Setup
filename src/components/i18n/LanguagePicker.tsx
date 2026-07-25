import {useEffect, useRef, useState} from 'react'
import {SUPPORTED_LOCALES, useI18n} from '../../i18n/i18n'
import './LanguagePicker.css'

export const LanguagePicker = () => {
	const {locale, setLocale, t} = useI18n() as ReturnType<typeof useI18n> & { t: (key: string) => string }
	const [open, setOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement | null>(null)

	const currentLabel = SUPPORTED_LOCALES[locale as keyof typeof SUPPORTED_LOCALES]?.label ?? 'Unknown'
	const labelText = t('app.languageLabel')

	useEffect(() => {
		if (!open) return

		function onKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape') setOpen(false)
		}

		function onMouseDown(e: MouseEvent) {
			if (!containerRef.current) return
			if (!containerRef.current.contains(e.target as Node)) {
				setOpen(false)
			}
		}

		document.addEventListener('keydown', onKeyDown)
		document.addEventListener('mousedown', onMouseDown)
		return () => {
			document.removeEventListener('keydown', onKeyDown)
			document.removeEventListener('mousedown', onMouseDown)
		}
	}, [open])

	return (
		<div className="language-picker" ref={containerRef}>
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
				<div className="language-picker__menu" role="menu" aria-label={labelText}>
					{Object.entries(SUPPORTED_LOCALES).map(([code, meta]) => (
						<div key={code} className="language-picker__menu-row">
							<button
								type="button"
								role="menuitem"
								className={`language-picker__menu-item${code === locale ? ' language-picker__menu-item--active' : ''}`}
								onClick={() => {
									setLocale(code)
									setOpen(false)
								}}
							>
								{meta.label}
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
