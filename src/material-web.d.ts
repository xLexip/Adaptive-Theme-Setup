import 'react'

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'md-filled-button': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
				disabled?: boolean
				type?: 'submit' | 'reset' | 'button'
			},
				HTMLElement
			>
			'md-outlined-button': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
				disabled?: boolean
				type?: 'submit' | 'reset' | 'button'
			},
				HTMLElement
			>
			'md-text-button': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
				disabled?: boolean
				type?: 'submit' | 'reset' | 'button'
			},
				HTMLElement
			>
			'md-elevated-card': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>
			'md-filled-card': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>
			'md-linear-progress': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
				indeterminate?: boolean
				value?: number
				max?: number
			},
				HTMLElement
			>
			'md-circular-progress': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
				indeterminate?: boolean
				value?: number
				max?: number
			},
				HTMLElement
			>
			'md-snackbar': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
				open?: boolean
				onClosed?: () => void
			},
				HTMLElement
			>
		}
	}
}
