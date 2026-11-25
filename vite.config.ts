import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const { default: tailwindcss } = await import('@tailwindcss/vite');
  const { default: react } = await import('@vitejs/plugin-react');

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
