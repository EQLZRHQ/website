import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    global: 'window',
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['swiper', 'lucide-react'],
          'font-vendor': [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/react-fontawesome'
          ]
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/react-fontawesome',
      'framer-motion'
    ],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      overlay: false,
    },
    allowedHosts: [
      '.eqlzr.xyz',
      '.up.railway.app'
    ],
  },
});