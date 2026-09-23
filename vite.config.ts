import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  server: {
    watch: {
      ignored: ['**/.claude/**', '**/untracked/**', '**/var/**'],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    reportCompressedSize: false,
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: (id: string) => {
              if (id.includes('node_modules/')) {
                return 'vendor';
              }
            },
            chunkFileNames: 'assets/[name]-[hash].js',
          },
    },
  },
}));
