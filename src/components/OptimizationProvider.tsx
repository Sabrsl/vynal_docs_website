'use client';

import { useEffect } from 'react';
import { optimizePerformance } from '@/lib/optimizations';

/**
 * Composant qui applique toutes les optimisations côté client
 * à inclure dans n'importe quelle page ou sous-page
 */
export function OptimizationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Applique les optimisations de performance
    optimizePerformance();

    // Démarre les optimisations dès que possible
    if (document.readyState === 'complete') {
      optimizePerformance();
    } else {
      window.addEventListener('load', optimizePerformance);
      return () => window.removeEventListener('load', optimizePerformance);
    }
  }, []);

  return <>{children}</>;
} 