const CACHE_VERSION = 'okoshite-masuda-v2'
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './src/style.css',
  './src/app.js',
  './assets/avatars/no1.png',
  './assets/avatars/no2.png',
  './assets/avatars/no3.png',
  './assets/avatars/no4.png',
  './assets/avatars/no5.png',
  './assets/faces/no1-angry.png',
  './assets/faces/no1-awake.png',
  './assets/faces/no1-reacting.png',
  './assets/faces/no1-sleeping.png',
  './assets/faces/no2-angry.png',
  './assets/faces/no2-awake.png',
  './assets/faces/no2-reacting.png',
  './assets/faces/no2-sleeping.png',
  './assets/faces/no3-angry.png',
  './assets/faces/no3-awake.png',
  './assets/faces/no3-reacting.png',
  './assets/faces/no3-sleeping.png',
  './assets/faces/no4-angry.png',
  './assets/faces/no4-awake.png',
  './assets/faces/no4-reacting.png',
  './assets/faces/no4-sleeping.png',
  './assets/faces/no5-angry.png',
  './assets/faces/no5-awake.png',
  './assets/faces/no5-reacting.png',
  './assets/faces/no5-sleeping.png',
  './assets/items/no1.png',
  './assets/items/no2.png',
  './assets/items/no3.png',
  './assets/items/no4.png',
  './assets/items/no5.png',
  './assets/items/no6.png',
  './assets/items/no7.png',
  './assets/items/no8.png',
  './assets/items/no9.png',
  './assets/items/no10.png',
  './assets/items/no11.png',
  './assets/items/no12.png',
  './assets/items/no13.png',
  './assets/items/no14.png',
  './assets/items/no15.png',
  './assets/items/no16.png',
  './assets/items/no17.png',
  './assets/items/no18.png',
  './assets/items/no19.png',
  './assets/items/no20.png',
  './assets/items/no21.png',
  './assets/items/no22.png',
  './assets/items/no23.png',
  './assets/items/no24.png',
  './assets/items/no25.png',
  './assets/items/no26.png',
  './assets/items/no27.png',
  './assets/items/no28.png',
  './assets/items/no29.png',
  './assets/items/no30.png',
  './assets/items/special-A.png',
  './assets/items/special-B.png',
  './assets/items/special-C.png',
  './assets/items/special-D.png',
  './assets/items/special-E.png',
  './assets/items/special-F.png',
  './assets/items/special-G.png',
  './assets/title/family-cheer.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(CORE_ASSETS)
    })
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_VERSION)
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse
      }

      return fetch(event.request)
        .then((networkResponse) => {
          const requestUrl = new URL(event.request.url)
          if (requestUrl.origin === self.location.origin) {
            const responseToCache = networkResponse.clone()
            caches.open(CACHE_VERSION).then((cache) => {
              cache.put(event.request, responseToCache)
            })
          }
          return networkResponse
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html')
          }
          return undefined
        })
    })
  )
})
