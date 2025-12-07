import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set this to the path where the app will be served on GitHub Pages.
  // If you copy the contents of `dist/` into the root of your Pages repo
  // (for example the `gh-pages` branch or a repo that is only this site),
  // you can change this to '/'.
  //
  // If you serve from a project site like
  //   https://<user>.github.io/<repo-name>/
  // then set base to '/<repo-name>/' instead.
  //
  // For now, we default to root-based hosting, which works if
  // you copy `dist/*` into the Pages root or a `docs/` folder
  // that GitHub Pages is configured to serve from.
  base: '/hecate/setup/',
  plugins: [react()],
})
