/**
 * google-analytics.js
 * Google Analytics integration module
 * Tracks page views and user interactions
 */

const GoogleAnalytics = (() => {
  const GA_MEASUREMENT_ID = 'G-MCDYZG9RGF'; // Replace with your GA4 measurement ID

  /**
   * Initialize Google Analytics
   * @param {string} measurementId - Google Analytics 4 measurement ID
   */
  function init(measurementId = GA_MEASUREMENT_ID) {
    if (!measurementId) {
      console.warn(
        '[GoogleAnalytics] Measurement ID not configured.'
      );
      return false;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    });

    console.log('[GoogleAnalytics] Initialized with ID:', measurementId);
    return true;
  }

  /**
   * Track a custom event
   * @param {string} eventName - Event name
   * @param {object} eventParams - Event parameters
   */
  function trackEvent(eventName, eventParams = {}) {
    if (typeof window.gtag !== 'function') {
      console.warn('[GoogleAnalytics] gtag not initialized');
      return;
    }
    window.gtag('event', eventName, eventParams);
  }

  /**
   * Track page view
   * @param {string} pageTitle - Page title
   * @param {string} pagePath - Page path
   */
  function trackPageView(pageTitle, pagePath) {
    if (typeof window.gtag !== 'function') {
      console.warn('[GoogleAnalytics] gtag not initialized');
      return;
    }
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  }

  return {
    init,
    trackEvent,
    trackPageView,
  };
})();
