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
    // Enable code splitting with better chunking strategy
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React and React DOM
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          // Animation libraries
          if (id.includes('framer-motion')) {
            return 'animation-vendor';
          }
          // UI components
          if (id.includes('swiper') || id.includes('lucide-react')) {
            return 'ui-vendor';
          }
          // Font Awesome
          if (id.includes('@fortawesome')) {
            return 'font-vendor';
          }
          // Supabase
          if (id.includes('@supabase')) {
            return 'supabase-vendor';
          }
          // Vendor chunk for other dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize asset naming for better caching
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset';
          const info = name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `fonts/[name]-[hash][extname]`;
          }
          return `[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
      onwarn(warning, warn) {
        // Ignore certain warnings
        if (warning.code === 'CIRCULAR_DEPENDENCY') return;
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification with better options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // Disable source maps for smaller bundle
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'esnext',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize CSS
    cssMinify: true,
    // Report bundle size
    reportCompressedSize: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/react-fontawesome',
      'framer-motion',
      '@supabase/supabase-js'
    ],
    esbuildOptions: {
      target: 'esnext',
      // Enable tree shaking
      treeShaking: true,
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
  // Enable experimental features for better performance
  experimental: {
    renderBuiltUrl(filename: string, { hostType }: { hostType: string }) {
      if (hostType === 'js') {
        return { js: `/${filename}` };
      } else {
        return { relative: true };
      }
    },
  },
  // Cloudflare CDN optimizations
  base: '/',
  assetsInclude: ['**/*.webp', '**/*.avif'],
});