'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

// Types of scripts
type ScriptType = 'analytics' | 'marketing' | 'performance' | 'essential';

// Script definition
interface ScriptDefinition {
  id: string;
  src: string;
  strategy: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' | 'worker';
  type?: ScriptType;
  onLoad?: () => void;
}

// Default scripts to load (customize as needed)
const scripts: ScriptDefinition[] = [
  // Performance monitoring (e.g. Web Vitals)
  {
    id: 'web-vitals',
    src: '/scripts/web-vitals.js',
    strategy: 'afterInteractive',
    type: 'performance',
  },
  
  // Chunk optimization (loads remaining chunks after main interaction)
  {
    id: 'chunk-loader',
    src: '/scripts/chunk-loader.js',
    strategy: 'lazyOnload',
    type: 'performance',
  },
];

// Script loading priorities
const loadPriorities: Record<ScriptType, number> = {
  essential: 0,
  performance: 1,
  analytics: 2,
  marketing: 3,
};

export function ScriptManager() {
  const initialized = useRef(false);
  
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    // Optimization: Prefetch critical resources after main content loads
    if (window && 'requestIdleCallback' in window) {
      // @ts-ignore - requestIdleCallback is not in the TypeScript types
      window.requestIdleCallback(() => {
        prefetchCriticalResources();
      });
    } else {
      setTimeout(() => {
        prefetchCriticalResources();
      }, 2000);
    }
    
    // Register performance observer
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Log LCP, FID, CLS, etc.
            console.debug(`[Performance] ${entry.name}: ${entry.startTime.toFixed(0)}ms`);
          });
        });
        
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        observer.observe({ type: 'first-input', buffered: true });
        observer.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.error('Performance observer error:', e);
      }
    }
  }, []);
  
  // Prefetch critical resources when browser is idle
  const prefetchCriticalResources = () => {
    // Prefetch key pages for faster navigation
    ['/ressources', '/documentation', '/contact', '/tarifs'].forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
    
    // Preload key images that may be needed soon
    ['logo.svg', 'hero-image.webp'].forEach(img => {
      const imgLink = document.createElement('link');
      imgLink.rel = 'preload';
      imgLink.as = 'image';
      imgLink.href = `/images/${img}`;
      document.head.appendChild(imgLink);
    });
  };
  
  // Sort scripts by load priority
  const sortedScripts = [...scripts].sort((a, b) => {
    const priorityA = loadPriorities[a.type || 'marketing'];
    const priorityB = loadPriorities[b.type || 'marketing'];
    return priorityA - priorityB;
  });
  
  return (
    <>
      {sortedScripts.map((script) => (
        <Script
          key={script.id}
          id={script.id}
          src={script.src}
          strategy={script.strategy}
          onLoad={script.onLoad}
        />
      ))}
    </>
  );
} 