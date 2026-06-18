// Defer non-critical CSS loading to improve LCP
if (typeof window !== 'undefined') {
  // Create and append a style to defer CSS loading
  const deferStylesheet = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => {
      link.onload = null;
    };
    document.head.appendChild(link);
  };

  // Defer animations and non-critical styles
  window.addEventListener('load', () => {
    // Allow browser to render before loading heavy animations
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
  });

  // Prefetch critical images
  const prefetchImage = (src: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  };

  // Prefetch critical images on idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      prefetchImage('/images/itl-logo.webp');
      prefetchImage('/images/termoizolare-hero.webp');
      prefetchImage('/images/hidroizolare-hero.webp');
    });
  }
}
