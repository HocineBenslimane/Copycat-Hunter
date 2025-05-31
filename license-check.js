// Inject premium scripts only for licensed users
(function () {
  const SCRIPTS = ['snap-ham.js', 'snap-find.js', 'snap-rep.js'];

  chrome.storage.local.get('license', ({ license }) => {
    if (!license || license.invalid) return; // not activated

    for (const name of SCRIPTS) {
      const s = document.createElement('script');
      s.src = chrome.runtime.getURL(name);
      s.onload = () => s.remove();
      (document.head || document.documentElement).appendChild(s);
    }
  });
})();
