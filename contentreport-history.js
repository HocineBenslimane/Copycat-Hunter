// Report History Implementation
const HISTORY_STORAGE_KEY = 'reportHistory';

class ReportHistory {
  constructor() {
    this.initializeUI();
    this.loadHistory();
  }

  async initializeUI() {
    const container = document.createElement('div');
    container.id = 'report-history-container';
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 999999;
      font-family: 'Amazon Ember', -apple-system, BlinkMacSystemFont, sans-serif;
    `;

    const panel = document.createElement('div');
    panel.style.cssText = `
      width: 800px;
      max-height: 80vh;
      background: white;
      border-radius: 12px;
      padding: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
    `;

    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Report History';
    title.style.cssText = `
      font-size: 20px;
      font-weight: 600;
      color: #1c1c1e;
      margin: 0;
    `;

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
    closeBtn.onclick = () => this.hideHistory();

    const content = document.createElement('div');
    content.id = 'report-history-content';
    content.style.cssText = `
      flex: 1;
      overflow-y: auto;
      min-height: 200px;
    `;

    header.appendChild(title);
    header.appendChild(closeBtn);
    panel.appendChild(header);
    panel.appendChild(content);
    container.appendChild(panel);
    document.body.appendChild(container);

    // Close on background click
    container.addEventListener('click', (e) => {
      if (e.target === container) this.hideHistory();
    });
  }

  async loadHistory() {
    try {
      const result = await chrome.storage.local.get(HISTORY_STORAGE_KEY);
      const history = result[HISTORY_STORAGE_KEY] || [];
      this.renderHistory(history);
    } catch (err) {
      console.error('Error loading report history:', err);
    }
  }

  renderHistory(history) {
    const content = document.getElementById('report-history-content');
    if (!content) return;

    if (history.length === 0) {
      content.innerHTML = `
        <div style="text-align: center; color: #666; padding: 40px;">
          No reports found in history
        </div>
      `;
      return;
    }

    const table = document.createElement('table');
    table.style.cssText = `
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    `;

    table.innerHTML = `
      <thead>
        <tr>
          <th style="text-align: left; padding: 12px; border-bottom: 1px solid #eee;">Date</th>
          <th style="text-align: left; padding: 12px; border-bottom: 1px solid #eee;">Marketplace</th>
          <th style="text-align: left; padding: 12px; border-bottom: 1px solid #eee;">Issue Type</th>
          <th style="text-align: left; padding: 12px; border-bottom: 1px solid #eee;">ASINs</th>
          <th style="text-align: left; padding: 12px; border-bottom: 1px solid #eee;">Status</th>
        </tr>
      </thead>
      <tbody>
        ${history.map(entry => `
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #eee;">${new Date(entry.timestamp).toLocaleString()}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;">${entry.marketplace}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;">${entry.issueType}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;">${entry.reportedAsins.join(', ')}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;">
              <span style="
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 500;
                ${this.getStatusStyle(entry.status)}
              ">
                ${entry.status}
              </span>
            </td>
          </tr>
        `).join('')}
      </tbody>
    `;

    content.innerHTML = '';
    content.appendChild(table);
  }

  getStatusStyle(status) {
    switch (status.toLowerCase()) {
      case 'completed':
        return `
          background: #e8f5e9;
          color: #2e7d32;
        `;
      case 'pending':
        return `
          background: #fff3e0;
          color: #ef6c00;
        `;
      case 'failed':
        return `
          background: #ffebee;
          color: #c62828;
        `;
      default:
        return `
          background: #f5f5f5;
          color: #666;
        `;
    }
  }

  showHistory() {
    const container = document.getElementById('report-history-container');
    if (container) {
      container.style.display = 'flex';
      this.loadHistory(); // Refresh data when showing
    }
  }

  hideHistory() {
    const container = document.getElementById('report-history-container');
    if (container) {
      container.style.display = 'none';
    }
  }

  async addHistoryEntry(entry) {
    try {
      const result = await chrome.storage.local.get(HISTORY_STORAGE_KEY);
      const history = result[HISTORY_STORAGE_KEY] || [];
      
      // Add new entry at the beginning
      history.unshift({
        id: Date.now().toString(),
        timestamp: Date.now(),
        ...entry
      });

      // Keep only last 100 entries
      if (history.length > 100) {
        history.pop();
      }

      await chrome.storage.local.set({ [HISTORY_STORAGE_KEY]: history });
      this.renderHistory(history); // Update UI if visible
    } catch (err) {
      console.error('Error saving report history:', err);
    }
  }
}

// Initialize and expose the history manager
const reportHistory = new ReportHistory();
window.reportHistory = reportHistory;