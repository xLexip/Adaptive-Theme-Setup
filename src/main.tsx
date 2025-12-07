import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/labs/card/elevated-card.js'
import '@material/web/labs/card/filled-card.js'
import '@material/web/progress/circular-progress.js'
import '@material/web/progress/linear-progress.js'
import './index.css'
import './styles/theme.css'
import App from './App.tsx'
import {I18nProvider} from './i18n/i18n'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nProvider>
			<App/>
		</I18nProvider>
	</StrictMode>,
)
