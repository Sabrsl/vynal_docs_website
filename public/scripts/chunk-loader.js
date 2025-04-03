// Chunk loader optimisé pour Next.js
(function() {
  // Configuration
  const config = {
    prefetchTimeout: 2000,      // Délai avant de précharger les chunks (ms)
    prefetchThreshold: 0.1,     // Probabilité de préchargement (0-1)
    maxConcurrentRequests: 3,   // Nombre max de préchargements simultanés
    prefetchOnMouseEnter: true, // Préchargement au survol des liens
    debug: false                // Mode debug
  };
  
  // Files to prefetch (automatically detected from Next.js)
  let chunks = [];
  let prefetchQueue = [];
  let activePrefetches = 0;
  
  // Detect Next.js runtime chunks
  function detectNextChunks() {
    try {
      // Find script elements with _next in the source
      const scripts = document.querySelectorAll('script[src*="_next"]');
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && !chunks.includes(src)) {
          chunks.push(src);
          if (config.debug) console.debug('[ChunkLoader] Detected chunk:', src);
        }
      });
      
      // Find potential dynamic chunks from webpack manifest
      if (window.__NEXT_DATA__) {
        const buildId = window.__NEXT_DATA__.buildId;
        if (buildId) {
          // Pages that might be navigated to
          const potentialPages = [
            'ressources',
            'documentation',
            'tarifs',
            'contact',
            'a-propos',
            'fonctionnalites'
          ];
          
          // Add potential chunk patterns
          potentialPages.forEach(page => {
            const pageChunk = `/_next/static/${buildId}/pages/${page}.js`;
            if (!chunks.includes(pageChunk)) {
              chunks.push(pageChunk);
              if (config.debug) console.debug('[ChunkLoader] Added potential chunk:', pageChunk);
            }
          });
        }
      }
    } catch (e) {
      console.error('[ChunkLoader] Error detecting chunks:', e);
    }
  }
  
  // Prefetch a chunk
  function prefetchChunk(chunk) {
    if (activePrefetches >= config.maxConcurrentRequests) {
      // Add to queue if we're at max concurrent requests
      if (!prefetchQueue.includes(chunk)) {
        prefetchQueue.push(chunk);
        if (config.debug) console.debug('[ChunkLoader] Queued chunk for prefetch:', chunk);
      }
      return;
    }
    
    // Check if already prefetched or in progress
    const existingLink = document.querySelector(`link[rel="prefetch"][href="${chunk}"]`);
    if (existingLink) return;
    
    activePrefetches++;
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = chunk;
    link.crossOrigin = 'anonymous';
    
    link.onload = () => {
      activePrefetches--;
      if (config.debug) console.debug('[ChunkLoader] Prefetched chunk:', chunk);
      processQueue();
    };
    
    link.onerror = () => {
      activePrefetches--;
      if (config.debug) console.debug('[ChunkLoader] Failed to prefetch chunk:', chunk);
      processQueue();
    };
    
    document.head.appendChild(link);
    if (config.debug) console.debug('[ChunkLoader] Prefetching chunk:', chunk);
  }
  
  // Process prefetch queue
  function processQueue() {
    if (prefetchQueue.length > 0 && activePrefetches < config.maxConcurrentRequests) {
      const nextChunk = prefetchQueue.shift();
      prefetchChunk(nextChunk);
    }
  }
  
  // Randomly prefetch chunks with probability threshold
  function randomPrefetch() {
    if (chunks.length === 0) return;
    
    for (const chunk of chunks) {
      if (Math.random() < config.prefetchThreshold) {
        prefetchChunk(chunk);
      }
    }
  }
  
  // Setup link prefetching for navigation
  function setupLinkPrefetching() {
    if (!config.prefetchOnMouseEnter) return;
    
    document.addEventListener('mouseover', e => {
      let target = e.target;
      while (target && target.tagName !== 'A') {
        target = target.parentNode;
        if (!target || target === document) return;
      }
      
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      
      // Find potential chunks for this page
      const potentialPage = href.replace(/^\/+/, '').replace(/\/+$/, '') || 'index';
      chunks.forEach(chunk => {
        if (chunk.includes(`/pages/${potentialPage}`)) {
          prefetchChunk(chunk);
        }
      });
    });
  }
  
  // Initialize after page has loaded
  window.addEventListener('load', () => {
    // Run with slight delay to avoid competing with critical resources
    setTimeout(() => {
      detectNextChunks();
      randomPrefetch();
      setupLinkPrefetching();
    }, config.prefetchTimeout);
  });
})(); 