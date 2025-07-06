import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite"
import cleanPlugin from 'vite-plugin-clean';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss(), cleanPlugin()],
  base: "/themichalbr",
})