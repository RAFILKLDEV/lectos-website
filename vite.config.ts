import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/lectos-website/', // Nome do seu repositório no GitHub
  plugins: [react()], // Adicione o plugin do React
});
