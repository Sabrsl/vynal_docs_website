// Web Vitals monitoring script
(function() {
  // Performance metrics to track
  const metrics = {
    lcp: { value: 0, name: 'LCP' }, // Largest Contentful Paint
    fid: { value: 0, name: 'FID' }, // First Input Delay
    cls: { value: 0, name: 'CLS' }, // Cumulative Layout Shift
    fcp: { value: 0, name: 'FCP' }, // First Contentful Paint
    ttfb: { value: 0, name: 'TTFB' } // Time to First Byte
  };

  // Check if the browser supports the Performance API
  if (!('PerformanceObserver' in window)) return;

  try {
    // Function to send metrics to analytics (replace with your own)
    function sendToAnalytics(metric) {
      // Log to console in development
      console.debug(`[WebVitals] ${metric.name}: ${metric.value}ms`);
      
      // Détection de l'environnement de production sans utiliser process.env
      const isProduction = window.location.hostname !== 'localhost' && 
                           window.location.hostname !== '127.0.0.1';
      
      // Optional: Send to analytics service if in production
      if (isProduction) {
        const body = JSON.stringify({ name: metric.name, value: metric.value, page: window.location.pathname });
        
        // Use Beacon API if supported, otherwise fall back to fetch
        if (navigator.sendBeacon) {
          navigator.sendBeacon('/api/vitals', body);
        } else {
          fetch('/api/vitals', {
            method: 'POST',
            body,
            keepalive: true,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
    }

    // Create observers for each metric
    
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp.value = Math.round(lastEntry.startTime);
      sendToAnalytics(metrics.lcp);
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    
    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstEntry = entries[0];
      metrics.fid.value = Math.round(firstEntry.processingStart - firstEntry.startTime);
      sendToAnalytics(metrics.fid);
    }).observe({ type: 'first-input', buffered: true });
    
    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      metrics.cls.value = clsValue;
      sendToAnalytics(metrics.cls);
    }).observe({ type: 'layout-shift', buffered: true });
    
    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstEntry = entries[0];
      metrics.fcp.value = Math.round(firstEntry.startTime);
      sendToAnalytics(metrics.fcp);
    }).observe({ type: 'paint', buffered: true });
    
    // Time to First Byte (from Navigation Timing API)
    window.addEventListener('load', () => {
      const navEntry = performance.getEntriesByType('navigation')[0];
      if (navEntry) {
        metrics.ttfb.value = Math.round(navEntry.responseStart);
        sendToAnalytics(metrics.ttfb);
      }
    });
  } catch (e) {
    console.error('[WebVitals] Error:', e);
  }
})(); 