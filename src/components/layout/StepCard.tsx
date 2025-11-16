import type { PropsWithChildren, ReactNode } from 'react'
import './StepCard.css'

interface StepCardProps extends PropsWithChildren {
  headline: string
  number: number
  description?: ReactNode
  actions?: ReactNode
  statusChip?: ReactNode
}

export const StepCard = ({
  children,
  headline,
  number,
  description,
  actions,
  statusChip,
}: StepCardProps) => (
  <md-elevated-card className="step-card fade-in">
    <div className="step-card__inner">
      <header className="step-card__header">
        <span className="step-card__number">{number}</span>
        <div className="step-card__heading">
          <h2>{headline}</h2>
          {description}
        </div>
        {statusChip}
      </header>
      <div className="step-card__body">{children}</div>
      {actions ? <div className="step-card__actions">{actions}</div> : null}
    </div>
  </md-elevated-card>
)
