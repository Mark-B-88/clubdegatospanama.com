import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv-esm';

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:9999',
        ws: true,
      },
    },
  },
  define: {
    'process.env.GOOGLE_RECAPTCHA_SITE_KEY': JSON.stringify(process.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY),
  }
});