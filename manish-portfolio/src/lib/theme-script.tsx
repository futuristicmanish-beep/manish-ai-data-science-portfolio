/**
 * THEME INITIALIZATION SCRIPT
 * Prevents flash of incorrect theme on page load
 * 
 * This script runs BEFORE React hydrates to apply the correct theme immediately
 */

export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const STORAGE_KEY = 'manish-portfolio-theme';
        const stored = localStorage.getItem(STORAGE_KEY);
        
        function getSystemTheme() {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        let resolvedTheme = 'dark'; // default
        
        if (stored === 'light') {
          resolvedTheme = 'light';
        } else if (stored === 'dark') {
          resolvedTheme = 'dark';
        } else {
          // system or not set
          resolvedTheme = getSystemTheme();
        }
        
        document.documentElement.setAttribute('data-theme', resolvedTheme);
      } catch (e) {
        console.warn('Theme initialization failed:', e);
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
