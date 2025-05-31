// Report History Implementation
const HISTORY_STORAGE_KEY = 'reportHistory';

class ReportHistory {
  constructor() {
    this.initializeUI();
    this.loadHistory();
  }

  async initializeUI() {
    // Add history view to existing Snap Hammer UI
    const content = document.getElementById('snap-hammer-content');
    if (!content) return;

    content.innerHTML = `
      <div class="report-history">
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <thead>
            <tr>
              <th style="text-align:left; padding:12px; border-bottom:1px solid #eee;">Date</th>
              <th style="text-align:left; padding:12px; border-bottom:1px solid #eee;">Marketplace</th>
              <th style="text-align:left; padding:12px; border-bottom:1px solid #eee;">Issue Type</th>
              <th style="text-align:left; padding:12px; border-bottom:1px solid #eee;">ASINs</th>
              <th style="text-align:left; padding:12px; border-bottom:1px solid #eee;">Status</th>
            </tr>
          </thead>
          <tbody id="history-tbody"></tbody>
        </table>
      </div>
    `;
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
    const tbody = document.getElementById('history-tbody');
    if (!tbody) return;

    if (history.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding:40px; color:#666;">
            No reports found in history
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = history.map(entry => `
      <tr>
        <td style="padding:12px; border-bottom:1px solid #eee;">
          ${new Date(entry.timestamp).toLocaleString()}
        </td>
        <td style="padding:12px; border-bottom:1px solid #eee;">
          ${entry.marketplace}
        </td>
        <td style="padding:12px; border-bottom:1px solid #eee;">
          ${entry.issueType}
        </td>
        <td style="padding:12px; border-bottom:1px solid #eee;">
          ${entry.reportedAsins.join(', ')}
        </td>
        <td style="padding:12px; border-bottom:1px solid #eee;">
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
    `).join('');
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
      this.renderHistory(history);
    } catch (err) {
      console.error('Error saving report history:', err);
    }
  }
}

// Initialize and expose the history manager
const reportHistory = new ReportHistory();
window.reportHistory = reportHistory;