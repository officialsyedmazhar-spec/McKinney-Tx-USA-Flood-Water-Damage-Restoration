import React, { useState, useEffect } from 'react';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  sizes?: string;
  onLoad?: () => void;
}

/**
 * Formats an image URL to modern lightweight WebP web image format
 */
function optimizeWebImageUrl(url: string): string {
  if (!url) return '';
  if (url.includes('images.unsplash.com')) {
    let cleanUrl = url;
    if (!cleanUrl.includes('fm=')) {
      cleanUrl += '&fm=webp';
    }
    if (!cleanUrl.includes('q=')) {
      cleanUrl += '&q=75';
    }
    return cleanUrl;
  }
  return url;
}

/**
 * Generates a lightweight, low-quality image placeholder (LQIP) URL.
 * For Unsplash images, creates a micro-resolution 30px blurred thumbnail (~500 bytes).
 */
function getLqipUrl(url: string): string {
  if (!url) return '';
  if (url.includes('images.unsplash.com')) {
    // Replace width with tiny dimension and lower quality for instant pre-render
    let lqip = url;
    if (lqip.includes('w=')) {
      lqip = lqip.replace(/([?&])w=\d+/, '$1w=40');
    } else {
      lqip += '&w=40';
    }
    if (lqip.includes('q=')) {
      lqip = lqip.replace(/([?&])q=\d+/, '$1q=20');
    } else {
      lqip += '&q=20';
    }
    if (!lqip.includes('blur=')) {
      lqip += '&blur=15';
    }
    if (!lqip.includes('fm=webp')) {
      lqip += '&fm=webp';
    }
    return lqip;
  }
  return url;
}

export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  referrerPolicy = 'no-referrer',
  sizes,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset loading status if src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const lqipUrl = getLqipUrl(src);

  return (
    <div className={`relative overflow-hidden bg-slate-200/80 ${containerClassName}`}>
      {/* Low-Quality Image Placeholder (LQIP) / Blur-Up Backdrop */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={lqipUrl}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover filter blur-xl scale-110 opacity-70 transform"
            referrerPolicy={referrerPolicy}
          />
          {/* Subtle warm shimmer pulse to eliminate perceived delay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      )}

      {/* Main Full-Resolution Image (WebP Optimized) */}
      {!hasError ? (
        <img
          src={optimizeWebImageUrl(src)}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          onLoad={() => {
            setIsLoaded(true);
            if (onLoad) onLoad();
          }}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded
              ? 'opacity-100 filter-none scale-100'
              : 'opacity-0 filter blur-md scale-105'
          } ${className}`}
        />
      ) : (
        /* Graceful Fallback if image network fails */
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-400 p-4 text-center">
          <div className="text-xs font-semibold">{alt || 'Restoration Preview'}</div>
        </div>
      )}
    </div>
  );
};
