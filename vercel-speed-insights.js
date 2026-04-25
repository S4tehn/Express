// Vercel Speed Insights
// This script initializes Speed Insights when the page loads
(function() {
  // Initialize the queue
  window.siq = window.siq || [];
  window.si = window.si || function() {
    window.siq.push(arguments);
  };

  // Load the Speed Insights script
  var script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  script.dataset.sdkn = '@vercel/speed-insights';
  script.dataset.sdkv = '2.0.0';
  
  script.onerror = function() {
    console.log('[Vercel Speed Insights] Failed to load script. This is normal in local development. Speed Insights will work when deployed to Vercel.');
  };
  
  document.head.appendChild(script);
})();
