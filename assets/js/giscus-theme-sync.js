/**
 * Giscus Theme Synchronization
 * Synchronisiert PaperMod Theme mit Giscus Comments
 */

(function() {
  'use strict';
  
  // Hole aktuelles Theme
  function getCurrentTheme() {
    // PaperMod speichert Theme in localStorage und data-theme Attribut
    const storedTheme = localStorage.getItem('pref-theme');
    if (storedTheme) return storedTheme;
    
    // Fallback: data-theme Attribut
    const dataTheme = document.documentElement.getAttribute('data-theme');
    if (dataTheme) return dataTheme;
    
    // Fallback: System Preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  // Sende Theme an Giscus
  function syncGiscusTheme() {
    const currentTheme = getCurrentTheme();
    const giscusTheme = currentTheme === 'dark' ? 'dark' : 'light';
    
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) {
      // Giscus noch nicht geladen, später erneut versuchen
      setTimeout(syncGiscusTheme, 500);
      return;
    }
    
    // Sende Theme-Update via postMessage
    iframe.contentWindow.postMessage(
      {
        giscus: {
          setConfig: {
            theme: giscusTheme
          }
        }
      },
      'https://giscus.app'
    );
    
    console.log('Giscus theme synced:', giscusTheme);
  }
  
  // Beobachte Theme-Änderungen
  function observeThemeChanges() {
    // 1. MutationObserver für data-theme Attribut
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTimeout(syncGiscusTheme, 100);
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    // 2. Event Listener für Theme-Toggle Button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        setTimeout(syncGiscusTheme, 150);
      });
    }
    
    // 3. Storage Event (für andere Tabs/Fenster)
    window.addEventListener('storage', (e) => {
      if (e.key === 'pref-theme') {
        setTimeout(syncGiscusTheme, 100);
      }
    });
  }
  
  // Initialisierung
  function init() {
    // Warte bis Giscus geladen ist
    const checkGiscus = setInterval(() => {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (iframe) {
        clearInterval(checkGiscus);
        syncGiscusTheme();
        observeThemeChanges();
      }
    }, 500);
    
    // Timeout nach 10 Sekunden
    setTimeout(() => clearInterval(checkGiscus), 10000);
  }
  
  // Start nach DOM-Load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
