import type { PropsWithChildren, ReactNode } from 'react'
import './StepCard.css'

interface StepCardProps extends PropsWithChildren {
  headline: string
  number: number
  description?: ReactNode
  actions?: ReactNode
  statusChip?: ReactNode
  expanded?: boolean
  completed?: boolean
}

export const StepCard = ({
  children,
  headline,
  number,
  description,
  actions,
  statusChip,
  expanded = true,
  completed = false,
}: StepCardProps) => {
  const classNames = ['step-card', 'fade-in']
  if (!expanded) {
    classNames.push('step-card--collapsed')
  }
  if (completed) {
    classNames.push('step-card--completed')
  }

  const chipContent = statusChip ?? (completed ? <span className="step-card__default-chip">Completed</span> : null)

  return (
    <md-elevated-card className={classNames.join(' ')} aria-expanded={expanded}
>
      <div className="step-card__inner">
        <header className="step-card__header">
          <span className="step-card__number">{number}</span>
          <div className="step-card__heading">
            <h2>{headline}</h2>
            {description}
          </div>
          {chipContent}
        </header>
        {expanded && (
          <>
            <div className="step-card__body">{children}</div>
            {actions ? <div className="step-card__actions">{actions}</div> : null}
          </>
        )}
      </div>
    </md-elevated-card>
  )
}
