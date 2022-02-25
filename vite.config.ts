import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react"

const reactDetails = {
  babel: {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          displayName: true,
          fileName: false,
        },
      ],
    ],
  },
}

export default defineConfig({
  plugins: [react(reactDetails), tsconfigPaths()],
})
