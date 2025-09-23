const CACHE_NAME = 'pizzaria-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/imagens/icon-192.png',
  '/imagens/icon-512.png',
  '/imagens/cozinha.jpg',
  '/imagens/frango.png',
  '/imagens/calabresa.png',
  '/imagens/portuguesa.png',
  '/imagens/strogonoff.png',
  '/imagens/sensacao.png',
  '/imagens/prestigio.png',
  '/imagens/ilustracao.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});