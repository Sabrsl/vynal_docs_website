/**
 * Optimisations centralisées pour toutes les pages
 * Importez ce fichier dans vos pages pour appliquer les optimisations
 */

export const pageMetadata = {
  cacheTTL: 3600, // Revalidation toutes les heures
  cacheControl: 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400',
};

// Images à précharger pour toutes les pages  
export const criticalImages = [
  'logo.svg',
  'hero-image.webp',
  'grid.svg',
  'grid-pattern.svg',
  'mesh-grid.png',
  'noise.png',
];

// Pages à précharger pour une navigation plus rapide
export const criticalPages = [
  '/ressources',
  '/documentation', 
  '/contact',
  '/tarifs',
  '/a-propos',
  '/fonctionnalites'
];

// Précharge les images critiques au chargement de la page
export function preloadCriticalAssets() {
  if (typeof window === 'undefined') return;
  
  // Précharge des pages
  criticalPages.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
  
  // Précharge des images
  criticalImages.forEach(img => {
    const imgLink = document.createElement('link');
    imgLink.rel = 'preload';
    imgLink.as = 'image';
    imgLink.href = `/images/${img}`;
    document.head.appendChild(imgLink);
  });
}

// Optimisations générales pour les performances
export function optimizePerformance() {
  if (typeof window === 'undefined') return;

  // Désactive les animations sur les appareils qui préfèrent les animations réduites
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reduce-motion');
  }
  
  // Utilise requestIdleCallback pour les tâches non critiques
  if ('requestIdleCallback' in window) {
    // @ts-ignore - requestIdleCallback is not in the TypeScript types
    window.requestIdleCallback(() => {
      preloadCriticalAssets();
    });
  } else {
    setTimeout(() => {
      preloadCriticalAssets();
    }, 2000);
  }
} 