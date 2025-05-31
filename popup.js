const PRODUCT_ID = "PQmFs39D1zx4wnYcc-aazQ==";
const $ = sel => document.querySelector(sel);
const ui = {
  input: $("#license"),
  save: $("#save"),
  msg: $("#msg"),
  activated: $("#activated"),
  details: $("#details"),
  container: $("#activation-container"),
  title: $("h2")
};

// Generate a simplified device ID using available browser information
async function generateDeviceId() {
  // Use basic browser information that doesn't change frequently
  const platform = navigator.platform || 'unknown';
  const userAgent = navigator.userAgent || 'unknown';
  const language = navigator.language || 'unknown';
  const colorDepth = window.screen.colorDepth || 'unknown';
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown';
  
  // Create a string with all the device and browser information
  const deviceInfoString = `${platform}_${userAgent}_${language}_${colorDepth}_${timeZone}`;
  
  // Create a hash from the device information
  let hash = 0;
  for (let i = 0; i < deviceInfoString.length; i++) {
    const char = deviceInfoString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Return a unique fingerprint for this device
  return Math.abs(hash).toString(16);
}

(async function init() {
  try {
    const { license } = await chrome.storage.local.get("license");
    if (license?.key && !license.invalid) {
      
      // Basic validation check once per day
      const oneDayMs = 24 * 60 * 60 * 1000;
      if (Date.now() - (license.lastCheck || 0) > oneDayMs) {
        try {
          // Verify license is still valid
          const res = await fetch("https://api.gumroad.com/v2/licenses/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              product_id: PRODUCT_ID,
              license_key: license.key
            })
          });
          const json = await res.json();
          
          // Only check if license is invalid (refunded, expired, etc)
          const isValidLicense = json.success && !json.purchase.refunded 
            && !json.purchase.chargebacked 
            && (!json.purchase.ended && !json.purchase.subscription_cancelled_at);
            
          if (!isValidLicense) {
            await chrome.storage.local.set({
              license: { ...license, invalid: true, invalidReason: 'invalid_license' }
            });
            ui.msg.textContent = "License has expired or been refunded.";
            ui.msg.className = "status bad";
            return;
          }
          
          // Update the last check timestamp
          await chrome.storage.local.set({ 
            license: { ...license, lastCheck: Date.now() } 
          });
        } catch (e) {
          // If we can't verify due to network issues, continue with local data
          console.error("License verification error:", e);
        }
      }
      
      // License is valid on this device
      ui.input.value = license.key;
      ui.activated.style.display = "block";
      fillDetails(license);
      ui.container.classList.add("hidden"); // Hide activation form when already activated
      ui.title.textContent = "DupliGone"; // Change title to extension name
    }
  } catch (error) {
    console.error("License init error:", error);
  }
})();

function fillDetails(lic) {
  const p = lic.purchase;
  if (!p) return;
  
  ui.details.innerHTML = '';
  
  // Create plan type line
  const planElement = document.createElement('div');
  planElement.style.marginBottom = '4px';
  
  if (p.recurrence === 'yearly') {
    planElement.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center">
        <span>Plan Type</span>
        <strong>Yearly</strong>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px">
        <span>Status</span>
        <strong style="color:var(--snap-green)">Active</strong>
      </div>
    `;
  } 
  else if (p.recurrence === 'monthly') {
    planElement.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center">
        <span>Plan Type</span>
        <strong>Monthly</strong>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px">
        <span>Status</span>
        <strong style="color:var(--snap-green)">Active</strong>
      </div>
    `;
  }
  else {
    planElement.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center">
        <span>Plan Type</span>
        <strong>Lifetime</strong>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px">
        <span>Status</span>
        <strong style="color:var(--snap-green)">Active</strong>
      </div>
    `;
  }
  
  ui.details.appendChild(planElement);
  ui.details.style.display = "block";
}

ui.save.onclick = async () => {
  const key = ui.input.value.trim();
  ui.save.disabled = true;
  ui.msg.textContent = "Verifying…";
  ui.msg.className = "status";
  try {
    // Generate a device ID for this machine
    const deviceId = await generateDeviceId();
    
    // First verify without incrementing to check if license is valid
    const verifyRes = await fetch("https://api.gumroad.com/v2/licenses/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        product_id: PRODUCT_ID, 
        license_key: key,
        increment_uses_count: false
      })
    });
    
    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) throw new Error("Invalid license key");
    
    // Store purchase data in a variable that can be updated
    let purchaseData = verifyJson.purchase;
    if (purchaseData.refunded || purchaseData.chargebacked) throw new Error("Payment refunded");
    if (purchaseData.ended || purchaseData.subscription_cancelled_at) throw new Error("Subscription inactive");
    
    // Check if we already have a license stored with this device ID
    const { license: existingLicense } = await chrome.storage.local.get('license');
    const isReactivation = existingLicense?.key === key && existingLicense?.deviceId === deviceId;
    
    // If this is a new activation (not a reactivation on same device)
    if (!isReactivation) {
      // If uses count is already > 0, this license has been used on another device
      if (verifyJson.uses > 0) {
        throw new Error("License already in use on another device. One license = one device.");
      }
      
      // Increment the uses count to mark this device as using the license
      const incrementRes = await fetch("https://api.gumroad.com/v2/licenses/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          product_id: PRODUCT_ID, 
          license_key: key,
          increment_uses_count: true
        })
      });
      
      const incrementJson = await incrementRes.json();
      if (!incrementJson.success) throw new Error("Could not activate license");
      purchaseData = incrementJson.purchase; // Update purchase data with incremented uses
    }
    
    // Store the license with device ID 
    await chrome.storage.local.set({ 
      license: { 
        key, 
        deviceId, // Store the device ID with the license
        purchase: purchaseData, 
        lastCheck: Date.now(), 
        invalid: false
      } 
    });
    ui.msg.textContent = "Activated ✓";
    ui.msg.className = "status ok";
    ui.activated.style.display = "block";
    fillDetails({ purchase: purchaseData });
    ui.title.textContent = "DupliGone"; // Change title to extension name
    
    // Hide the activation form after successful activation
    setTimeout(() => {
      ui.container.classList.add("hidden");
    }, 1000);
  } catch (err) {
    ui.msg.textContent = err.message;
    ui.msg.className = "status bad";
  } finally {
    ui.save.disabled = false;
  }
};