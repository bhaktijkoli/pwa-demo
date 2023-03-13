const cacheName = 'cache1'
// install event
self.addEventListener('install', (e) => {
  console.log('Server worker installed!')
})

// activate event
self.addEventListener('activate', (e) => {
  console.log('Server worker activated!')
})

// fetch event
self.addEventListener('fetch', (e) => {
  console.log('fetch', e.request.url)
  e.respondWith(
    (async () => {
      const cachedResponse = await caches.match(e.request);
      if (cachedResponse) return cachedResponse;
      const cache = await caches.open(cacheName);
      cache.add(e.request.url);
      return fetch(e.request);
    })()
  )
})