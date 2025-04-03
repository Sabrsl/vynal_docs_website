import React, { Suspense, ComponentType, lazy } from 'react';

type LazyProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

// Composant de chargement simple
export function LoadingSkeleton() {
  return (
    <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md"></div>
  );
}

// Wrapper Suspense avec fallback par défaut
export function LazyLoad({ children, fallback = <LoadingSkeleton /> }: LazyProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

// Fonction pour lazy-load n'importe quel composant
export function lazyImport<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback = <LoadingSkeleton />
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapped(props: React.ComponentProps<T>) {
    return (
      <LazyLoad fallback={fallback}>
        <LazyComponent {...props} />
      </LazyLoad>
    );
  };
}

// Préchargement des composants critiques
export function preloadComponent(importFunc: () => Promise<any>) {
  if (typeof window !== 'undefined') {
    void importFunc();
  }
}

// Préchargement d'image
export function preloadImage(src: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  }
}

// Exemple d'utilisation:
// const HeavyComponent = lazyImport(() => import('@/components/HeavyComponent')); 