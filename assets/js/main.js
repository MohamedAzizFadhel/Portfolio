/**
 * Reads CONFIG from config.js and renders the page.
 * You should never need to touch this file.
 */

(function () {
  const c = CONFIG;

  // ── accent colour ──────────────────────────────
  document.documentElement.style.setProperty('--accent', c.accent);

  // ── page title ─────────────────────────────────
  document.getElementById('page-title').textContent = c.name;

  // ── sidebar ────────────────────────────────────
  document.getElementById('handle-tag').textContent = c.handle;
  document.getElementById('name').textContent       = c.name;
  document.getElementById('role').textContent       = c.role;

  // ── links ──────────────────────────────────────
  const nav = document.getElementById('links');
  c.links.forEach(({ label, url }) => {
    const a = document.createElement('a');
    a.className  = 'link-item';
    a.href       = url;
    a.textContent = label;
    if (!url.startsWith('mailto')) {
      a.target   = '_blank';
      a.rel      = 'noopener noreferrer';
    }
    nav.appendChild(a);
  });

  // ── bio ────────────────────────────────────────
  document.getElementById('bio').textContent = c.bio.trim();

})();
