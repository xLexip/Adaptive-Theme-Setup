import type { ReactNode } from 'react'
import './StatusChip.css'

interface StatusChipProps {
  tone?: 'neutral' | 'success' | 'warning' | 'error' | 'info'
  children: ReactNode
}

export const StatusChip = ({ tone = 'neutral', children }: StatusChipProps) => (
  <span className={`status-chip status-chip--${tone}`}>{children}</span>
)
