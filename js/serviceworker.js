var cacheName = "sagishindan";

var filesToCache = [
    "/",
    "/about.html",
    "/defense.html",
    "/detailed_result.html",
    "/index.html",
    "/inquery.html",
    "/judgement.html",
    "/judgement_question.html",
    "/memory.html",
    "/memory_question.html",
    "/result.html",
    "/css/bootstrap.css",
    "/fonts/circle.svg",
    "/fonts/glyphicons-halflings-regular.eot",
    "/fonts/glyphicons-halflings-regular.svg",
    "/fonts/glyphicons-halflings-regular.ttf",
    "/fonts/glyphicons-halflings-regular.woff",
    "/fonts/glyphicons-halflings-regular.woff2",
    "/fonts/triangle.svg",
    "/images/akutoku_shouhou_denwa_kanyu.png",
    "/images/akutoku_shouhou_furikome_sagi.png",
    "/images/akutoku_shouhou_houmon.png",
    "/images/denwa_kanyu_obaasan.png",
    "/images/sagishi.png",
    "/images/syoubou_seibishi_syoukaki.png",
    "/js/bootstrap.js",
    "/js/bootstrap.min.js",
    "/js/sagishindan_defense.js",
    "/js/sagishindan_detailed_result.js",
    "/js/sagishindan_index.js",
    "/js/sagishindan_judgement.js",
    "/js/sagishindan_memory.js",
    "/js/sagishindan_result.js"
];

self.addEventListener("install", function(event) {
  console.log("ServiceWorker installing");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("Service Worker caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("Service Worker activating");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log("Service Worker removing old cache", key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  console.log("Service Worker fetching ", event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
