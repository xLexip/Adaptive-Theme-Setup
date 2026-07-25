import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	// For Firebase Hosting at the site root, use '/' so built assets are served correctly.
	base: '/',
	plugins: [react()],
})
