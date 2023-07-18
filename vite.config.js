import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@": Path2D.resolve(_dirname,"./src/"),
  //     component: `${path.}`
  //   }
  // }
})
