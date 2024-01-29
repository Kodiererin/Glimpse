import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';

// Load environment variables
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
