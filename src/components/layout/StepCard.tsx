import type {PropsWithChildren, ReactNode} from 'react'
import './StepCard.css'
import {useI18n} from '../../i18n/i18n'

export interface StepCardProps extends PropsWithChildren {
	headline: string
	number: number
	actions?: ReactNode
	actionsRight?: ReactNode
	statusChip?: ReactNode
	expanded?: boolean
	completed?: boolean
	onBack?: () => void
	backLabel?: string
}

export const StepCard = ({
							 children,
							 headline,
							 number,
							 actions,
							 actionsRight,
							 statusChip,
							 expanded = true,
							 completed = false,
							 onBack,
							 backLabel,
						 }: StepCardProps) => {
	const {t} = useI18n()

	const classNames = ['step-card', 'fade-in']
	if (!expanded) {
		classNames.push('step-card--collapsed')
	}
	if (completed) {
		classNames.push('step-card--completed')
	}

	const chipContent =
		statusChip ??
		(completed ? (
			<span className="step-card__default-chip">{t('')}</span>
		) : null)

	const effectiveBackLabel = backLabel ?? t('layout.stepCard.back')

	// If there is only `actions` and no onBack or actionsRight, center the actions
	const onlyActionsCentered = !!actions && !onBack && !actionsRight

	return (
		<div className={classNames.join(' ')} aria-expanded={expanded}>
			<div className="step-card__inner">
				<header className="step-card__header">
					<span className="step-card__number">{number}</span>
					<div className="step-card__heading">
						<h2>{headline}</h2>
					</div>
					{chipContent}
				</header>
				{expanded && (
					<>
						<div className="step-card__body">{children}</div>
						{(onBack || actions || actionsRight) && (
							<div className={`step-card__actions${onlyActionsCentered ? ' step-card__actions--centered' : ''}`}>
								{onlyActionsCentered ? (
									<div className="step-card__actions-center">{actions}</div>
								) : (
									<>
										{(onBack || actions) && (
											<div className="step-card__actions-left">
												{onBack && (
													<md-text-button onClick={onBack}>{effectiveBackLabel}</md-text-button>
												)}
												{actions}
											</div>
										)}
										{actionsRight && (
											<div className="step-card__actions-right">{actionsRight}</div>
										)}
									</>
								)}
							</div>
						)}
					</>
				)}
			</div>
		</div>
	)
}
