// Service Worker para Arcos Remodeling
// Proporciona offline support y cacheo de recursos

const CACHE_VERSION = 'v1';
const CACHE_NAME = `arcos-remodeling-${CACHE_VERSION}`;

// URLs que siempre se cachean
const URLS_TO_CACHE = [
  '/',
  '/en/',
  '/es/',
  '/favicon.svg',
  '/favicon.ico',
];

// Archivos que NO se cachean (dinámicos)
const EXCLUDE_FROM_CACHE = [
  '/api/',
  '/admin/',
  '.json',
];

// Instalar el Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache abierto');
      return cache.addAll(URLS_TO_CACHE).catch((error) => {
        console.warn('No se pudieron cachear algunas URLs:', error);
      });
    })
  );
  self.skipWaiting();
});

// Activar el Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker activado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache anterior:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de caché: Network first, fallback to cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // No cachear ciertos tipos de requests
  if (
    request.method !== 'GET' ||
    EXCLUDE_FROM_CACHE.some((exclude) => url.pathname.includes(exclude))
  ) {
    return;
  }

  // Para navegación (HTML), usar network first
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cachear la respuesta exitosa
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Si la red falla, usar el cache
          return caches.match(request).then((response) => {
            if (response) {
              return response;
            }
            // Si no está en cache, retornar una página offline
            return caches.match('/') || new Response('Offline', { status: 503 });
          });
        })
    );
    return;
  }

  // Para otros recursos (CSS, JS, imágenes), usar cache first
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(request)
        .then((response) => {
          // Cachear respuestas válidas
          if (response && response.status === 200 && response.type !== 'error') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch((error) => {
          console.warn('Fetch fallido para:', request.url, error);
          // Retornar un placeholder si no está disponible
          if (request.destination === 'image') {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="#f0f0f0" width="100" height="100"/></svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }
        });
    })
  );
});

// Manejo de mensajes desde el cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
