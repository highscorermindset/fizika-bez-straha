/* Rad bez interneta: kad ima interneta, uvek se učitava najnovija verzija;
   kad nema, kurs se otvara iz memorije telefona. Pri novoj verziji kursa promeni broj ispod. */
const CACHE = 'fizika-bez-straha-0.9';
const CORE = ['./', 'index.html', 'config.js', 'sims.js', 'g1.js', 'g2.js', 'g3.js', 'g4.js', 'veze.js',
  'fonts/fonts.css', 'manifest.webmanifest', 'icon.svg', 'icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(m => m || caches.match('index.html')))
  );
});
