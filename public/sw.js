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
})