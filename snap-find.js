// Snap Find Copycats Button (Blue)
// Injects on Amazon product pages. Provides drag-and-drop to StyleSnap.

// Check for valid license before executing
chrome.storage.local.get('license', ({license}) => {
  if (!license || license.invalid) return; // Exit if no valid license

(function() {
  // Check if we're on StyleSnap page
  const isStyleSnap = window.location.pathname.includes('/stylesnap');
  const PRODUCT_REGEX = /(\/dp\/|\/gp\/product\/|\/product\/)\w?/;
  
  if (!PRODUCT_REGEX.test(window.location.pathname) && !isStyleSnap) {
    // Not a product or StyleSnap page — ensure any stray buttons are removed and exit
    const oldBlue = document.getElementById('snap-find-btn');
    const oldBlack = document.getElementById('snap-report-btn'); 
    oldBlue && oldBlue.remove();
    oldBlack && oldBlack.remove();
    return;
  }

  // Remove / hide black "report" hammer button if present on product page.
  const hideHammer = () => {
    const hammer = document.querySelector('[data-tooltip="Drag listings here to report"]');
    if (hammer) hammer.style.display = 'none';
  };
  hideHammer();
  // Run again in a tick to catch late-loaded script.
  setTimeout(hideHammer, 1500);

  // Don't add buttons if already present
  if (document.getElementById('snap-find-btn') || document.getElementById('snap-report-btn')) return;

  if (isStyleSnap) {
    // Add black report button on StyleSnap page
    const reportBtn = document.createElement('div');
    reportBtn.id = 'snap-report-btn';
    reportBtn.setAttribute('data-tooltip', 'Report this listing');
    reportBtn.style.cssText = [
      'position:fixed',
      'bottom:80px',
      'right:80px',
      'z-index:999997',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'width:100px',
      'height:100px',
      'border-radius:50%',
      'background:#1c1c1e',
      'color:#fff',
      'font-family:\'Amazon Ember\',sans-serif',
      'font-weight:700',
      'font-size:14px',
      'box-shadow:0 2px 10px rgba(0,0,0,0.2)',
      'cursor:pointer',
      'transition:transform 0.2s ease-out'
    ].join(';');
    reportBtn.textContent = 'Report\nListing';
    reportBtn.style.textAlign = 'center';
    reportBtn.style.whiteSpace = 'pre-line';

    reportBtn.addEventListener('click', () => {
      const asin = new URLSearchParams(window.location.search).get('asin');
      if (asin) {
        window.open(`https://${window.location.hostname}/report/infringement?Snap&asin=${asin}`, '_blank');
      }
    });

    document.body.appendChild(reportBtn);
    return;
  }

  // Build the blue circular button for product pages
  const btn = document.createElement('div');
  btn.id = 'snap-find-btn';
  btn.setAttribute('data-tooltip', 'Drag an image here to find copycats');
  btn.style.cssText = [
    'position:fixed',
    'bottom:80px',
    'right:80px',
    'z-index:999997',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'width:100px',
    'height:100px',
    'border-radius:50%',
    'background:#0d6efd',
    'color:#fff',
    'font-family:\'Amazon Ember\',sans-serif',
    'font-weight:700',
    'font-size:14px',
    'box-shadow:0 2px 10px rgba(0,0,0,0.2)',
    'cursor:pointer',
    'transition:transform 0.2s ease-out'
  ].join(';');
  btn.textContent = 'Find\nCopycats';
  btn.style.textAlign = 'center';
  btn.style.whiteSpace = 'pre-line';

  // Drag interactions
  btn.addEventListener('dragover', e => {
    e.preventDefault();
    btn.style.transform = 'scale(1.1)';
  });

  btn.addEventListener('dragleave', () => {
    btn.style.transform = 'scale(1)';
  });

  btn.addEventListener('drop', e => {
    e.preventDefault();
    btn.style.transform = 'scale(1)';
    const dataUri = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain');
    if (dataUri) {
      openStyleSnap(dataUri.trim());
    } else if (e.dataTransfer.items && e.dataTransfer.items.length) {
      // Some browsers may store as string asynchronously.
      const item = e.dataTransfer.items[0];
      if (item.kind === 'string') {
        item.getAsString(str => openStyleSnap(str.trim()));
      }
    }
  });

  document.body.appendChild(btn);

  function openStyleSnap(imgUrl) {
    if (!imgUrl || !/^https?:\/\//i.test(imgUrl)) return;
    // Derive marketplace root like amazon.com or amazon.co.uk
    const hostParts = window.location.hostname.split('.');
    const tld = hostParts.slice(-2).join('.');
    const base = `https://www.${tld}/stylesnap?q=`;
    window.open(base + encodeURIComponent(imgUrl), '_blank');
  }
})();

});