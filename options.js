const PRODUCT_ID = "PQmFs39D1zx4wnYcc-aazQ==";
const $ = sel => document.querySelector(sel);

(async () => {
  const { license } = await chrome.storage.local.get("license");
  if (license?.key) $("#license").value = license.key;
})();

$("#save").onclick = async () => {
  const key = $("#license").value.trim();
  $("#msg").textContent = "Verifying…";
  $("#msg").className = "";
  try {
    const res = await fetch("https://api.gumroad.com/v2/licenses/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product_id: PRODUCT_ID, license_key: key })
    });
    const json = await res.json();
    if (!json.success) throw new Error("Invalid key");
    const p = json.purchase;
    if (p.refunded || p.chargebacked) throw new Error("Payment refunded");
    if (p.ended || p.subscription_cancelled_at) throw new Error("Subscription inactive");

    await chrome.storage.local.set({ license: { key, purchase: p, lastCheck: Date.now() } });
    $("#msg").textContent = "✓ License activated";
    $("#msg").className = "ok";
  } catch (err) {
    $("#msg").textContent = err.message;
    $("#msg").className = "bad";
  }
};
