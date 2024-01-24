self.addEventListener("install", e => {

    e.waitUntil(
        caches.open("static").then(Cache => {
            return Cache.addAll(['./', './Group 164.png', './Group 1512.png'])

        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})