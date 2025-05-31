// Snap Hammer UI Component
(function() {
  // Check for valid license before executing
  chrome.storage.local.get('license', ({license}) => {
    if (!license || license.invalid) return; // Exit if no valid license

    // Create main container
    const container = document.createElement('div');
    container.id = 'snap-hammer';
    container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      width: 320px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 999999;
      font-family: 'Amazon Ember', -apple-system, BlinkMacSystemFont, sans-serif;
    `;

    // Header with title and close button
    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid #eee;
    `;

    const title = document.createElement('div');
    title.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 600;
      color: #1c1c1e;
    `;

    const icon = document.createElement('img');
    icon.src = chrome.runtime.getURL('Icon.png');
    icon.style.cssText = `
      width: 24px;
      height: 24px;
      border-radius: 6px;
    `;

    const titleText = document.createElement('span');
    titleText.textContent = 'Snap Hammer';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      color: #666;
      line-height: 1;
    `;
    closeBtn.onclick = () => container.remove();

    // Navigation buttons
    const nav = document.createElement('div');
    nav.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      padding: 16px;
    `;

    const reportBtn = document.createElement('button');
    reportBtn.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      background: #f5f5f7;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      color: #1c1c1e;
      cursor: pointer;
      transition: background 0.2s;
    `;
    reportBtn.innerHTML = `
      <img src="${chrome.runtime.getURL('assets/ham-checkbox.svg')}" style="width:16px;height:16px;">
      <span>Listings to Report</span>
    `;
    reportBtn.onclick = () => {
      reportBtn.style.background = '#ededef';
      historyBtn.style.background = '#f5f5f7';
      showReportView();
    };

    const historyBtn = document.createElement('button');
    historyBtn.style.cssText = reportBtn.style.cssText;
    historyBtn.innerHTML = `
      <img src="${chrome.runtime.getURL('assets/history-ic.svg')}" style="width:16px;height:16px;">
      <span>Report History</span>
    `;
    historyBtn.onclick = () => {
      historyBtn.style.background = '#ededef';
      reportBtn.style.background = '#f5f5f7';
      showHistoryView();
    };

    // Content area
    const content = document.createElement('div');
    content.id = 'snap-hammer-content';
    content.style.cssText = `
      padding: 16px;
      min-height: 200px;
    `;

    // Drop zone for reports
    content.addEventListener('dragover', e => {
      e.preventDefault();
      content.style.backgroundColor = '#f5f0ff';
    });

    content.addEventListener('dragleave', () => {
      content.style.backgroundColor = 'transparent';
    });

    content.addEventListener('drop', e => {
      e.preventDefault();
      content.style.backgroundColor = 'transparent';
      
      // Extract ASIN from URL
      const url = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain');
      const asin = url.match(/\/dp\/([A-Z0-9]{10})/)?.[1];
      
      if (asin) {
        window.open(`https://${window.location.hostname}/report/infringement?Snap&asin=${asin}`, '_blank');
      }
    });

    // Important notice
    const notice = document.createElement('div');
    notice.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px;
      margin: 16px;
      background: #f5f0ff;
      border-radius: 8px;
      font-size: 13px;
      color: #470CED;
    `;
    notice.innerHTML = `
      <img src="${chrome.runtime.getURL('assets/tip-ic.svg')}" style="width:16px;height:16px;">
      <span>IMPORTANT* Sign in to amazon.com first, then switch the website language to English (EN) before you start the reporting process.</span>
    `;

    // Assemble the UI
    title.appendChild(icon);
    title.appendChild(titleText);
    header.appendChild(title);
    header.appendChild(closeBtn);
    nav.appendChild(reportBtn);
    nav.appendChild(historyBtn);

    container.appendChild(header);
    container.appendChild(nav);
    container.appendChild(content);
    container.appendChild(notice);

    document.body.appendChild(container);

    // Show initial report view
    showReportView();
  });

  function showReportView() {
    const content = document.getElementById('snap-hammer-content');
    if (!content) return;

    content.innerHTML = `
      <div style="text-align: center; color: #666;">
        Drag listings here to report
      </div>
    `;
  }

  function showHistoryView() {
    window.reportHistory.showHistory();
  }
})();