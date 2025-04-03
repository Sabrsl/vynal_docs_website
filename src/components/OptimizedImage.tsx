import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Observer for lazy loading
    if (!priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px' } // Load when within 200px of viewport
      );
      
      const currentRef = document.getElementById(`image-${src.replace(/\//g, '-')}`);
      if (currentRef) observer.observe(currentRef);
      
      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
    } else {
      setIsVisible(true);
    }
  }, [src, priority]);

  return (
    <div 
      id={`image-${src.replace(/\//g, '-')}`}
      className={cn(
        'overflow-hidden relative',
        isLoaded ? 'animate-fade-in' : 'animate-pulse bg-gray-200 dark:bg-gray-800',
        className
      )}
      style={{ width, height }}
    >
      {(isVisible || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            'object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}
    </div>
  );
} 