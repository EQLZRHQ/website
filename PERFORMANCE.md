# Performance Optimization Guide

This document outlines all the performance optimizations implemented for the EQLZR website to ensure fast loading times in production.

## 🚀 Build Optimizations

### 1. Multi-Stage Docker Build
- **Builder Stage**: Compiles the React application with all optimizations
- **Production Stage**: Uses lightweight nginx to serve static files
- **Result**: Smaller final image size (~50MB vs ~500MB)

### 2. Vite Configuration Optimizations
- **Code Splitting**: Intelligent chunking strategy separates vendor libraries
- **Tree Shaking**: Removes unused code from dependencies
- **Minification**: Advanced Terser configuration with multiple passes
- **Asset Optimization**: Organized file structure for better caching

### 3. Bundle Analysis
```bash
# Analyze bundle size
npm run build
# Check the dist/ directory for optimized files
```

## 🌐 Server Optimizations

### 1. Nginx Configuration
- **Gzip Compression**: Reduces file sizes by 60-80%
- **Static Asset Caching**: 1-year cache for images, fonts, JS, CSS
- **Security Headers**: XSS protection, content type options
- **HTTP/2 Ready**: Optimized for modern protocols
- **Cloudflare Integration**: Optimized headers and caching for CDN

### 2. Caching Strategy
```
Static Assets (JS/CSS/Images): 1 year
HTML Files: 1 hour
API Responses: Configurable
```

## 📱 Client-Side Optimizations

### 1. Resource Preloading
- **DNS Prefetch**: Pre-resolves external domains
- **Preconnect**: Establishes early connections
- **Preload**: Loads critical resources first

### 2. Service Worker
- **Offline Caching**: Caches essential resources
- **Background Updates**: Updates cache in background
- **Network Fallback**: Serves cached content when offline

### 3. Code Splitting
```
react-vendor.js     - React & React DOM
animation-vendor.js - Framer Motion
ui-vendor.js        - Swiper, Lucide React
font-vendor.js      - Font Awesome
supabase-vendor.js  - Supabase client
vendor.js           - Other dependencies
```

## 🛠️ Development Commands

### Build Commands
```bash
# Standard build
npm run build

# Production build with optimizations
npm run build:prod

# Run optimization script separately
npm run optimize
```

### Docker Commands
```bash
# Build production image
./build.sh build-prod

# Run production container
./build.sh run-prod

# Run development container
./build.sh run-dev

# Stop all containers
./build.sh stop
```

### Docker Compose
```bash
# Production
docker-compose up website-prod

# Development
docker-compose up website-dev

# Custom port
docker-compose up website-prod-custom
```

## 📊 Performance Metrics

### Target Metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Monitoring
- **Health Check**: `http://localhost/health`
- **Performance Report**: Generated in `dist/performance-report.json`

## 🔧 Additional Optimizations

### 1. Image Optimization
- Use WebP format when possible
- Implement lazy loading for images
- Optimize image dimensions

### 2. Font Optimization
- Use `font-display: swap`
- Preload critical fonts
- Consider using system fonts

### 3. Third-Party Scripts
- Load Google Analytics asynchronously
- Use `rel="preconnect"` for external domains
- Consider self-hosting critical third-party resources

## 🚨 Performance Checklist

Before deploying to production:

- [ ] Run `npm run build:prod`
- [ ] Test with Docker container
- [ ] Verify gzip compression is working
- [ ] Check caching headers
- [ ] Test service worker functionality
- [ ] Monitor Core Web Vitals
- [ ] Verify security headers

## 🔍 Troubleshooting

### Common Issues

1. **Large Bundle Size**
   - Check for unused dependencies
   - Review code splitting configuration
   - Analyze bundle with `npm run build`

2. **Slow Loading**
   - Verify nginx configuration
   - Check gzip compression
   - Monitor network requests

3. **Caching Issues**
   - Clear browser cache
   - Check cache headers
   - Verify service worker

### Performance Tools
- **Lighthouse**: Chrome DevTools
- **WebPageTest**: Online testing
- **GTmetrix**: Performance analysis
- **PageSpeed Insights**: Google's tool

## 🌩️ Cloudflare CDN Optimizations

### 1. Recommended Cloudflare Settings
- **Auto Minify**: Enable for CSS, HTML, and JS
- **Brotli Compression**: Enable for better compression
- **HTTP/3**: Enable QUIC protocol
- **Early Hints**: Enable for faster resource loading
- **Rocket Loader**: Enable for JavaScript optimization
- **Image Optimization**: Enable WebP/AVIF auto-conversion

### 2. Page Rules Configuration
```json
{
  "Static Assets": "*.eqlzr.xyz/*.js → Cache Everything, 1 year",
  "CSS Files": "*.eqlzr.xyz/*.css → Cache Everything, 1 year",
  "Images": "*.eqlzr.xyz/images/* → Cache Everything, Image Resizing",
  "Fonts": "*.eqlzr.xyz/fonts/* → Cache Everything, 1 year"
}
```

### 3. Cloudflare Workers
- **Security Headers**: Automatically add security headers
- **Cache Optimization**: Enhanced caching strategies
- **Performance Monitoring**: Real-time performance tracking

## 📈 Future Improvements

1. **Cloudflare Workers**: Implement custom edge logic
2. **Image Resizing**: Use Cloudflare's image optimization
3. **Critical CSS**: Inline above-the-fold styles
4. **Resource Hints**: Implement more preload strategies
5. **Real User Monitoring**: Implement RUM with Cloudflare
6. **Bot Management**: Enhanced bot protection

## 📞 Support

For performance-related issues:
1. Check the performance report in `dist/`
2. Review nginx logs
3. Monitor browser DevTools
4. Test with different network conditions 