const staticCarSelect = "car-selector-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/mclaren-765lt.jpg",
    "/images/mercedes-300sl.jpg",
    "/images/porsche-singer.jpg",
    "/images/porsche-taycan.jpg",
    "/images/alfa-giulia.jpg",
    "/images/alfa-gta.jpg",
    "/images/bmw-e30.jpg",
    "/images/ferrari-380gtb.jpg",
    "/images/mclaren-600lt.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCarSelect).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});