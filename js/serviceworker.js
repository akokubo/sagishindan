var cacheName = "sagishindan";

var filesToCache = [
    "/sagishindan/",
    "/sagishindan/about.html",
    "/sagishindan/defense.html",
    "/sagishindan/detailed_result.html",
    "/sagishindan/index.html",
    "/sagishindan/inquery.html",
    "/sagishindan/judgement.html",
    "/sagishindan/judgement_question.html",
    "/sagishindan/memory.html",
    "/sagishindan/memory_question.html",
    "/sagishindan/result.html",
    "/sagishindan/css/bootstrap.css",
    "/sagishindan/fonts/circle.svg",
    "/sagishindan/fonts/glyphicons-halflings-regular.eot",
    "/sagishindan/fonts/glyphicons-halflings-regular.svg",
    "/sagishindan/fonts/glyphicons-halflings-regular.ttf",
    "/sagishindan/fonts/glyphicons-halflings-regular.woff",
    "/sagishindan/fonts/glyphicons-halflings-regular.woff2",
    "/sagishindan/fonts/triangle.svg",
    "/sagishindan/images/akutoku_shouhou_denwa_kanyu.png",
    "/sagishindan/images/akutoku_shouhou_furikome_sagi.png",
    "/sagishindan/images/akutoku_shouhou_houmon.png",
    "/sagishindan/images/denwa_kanyu_obaasan.png",
    "/sagishindan/images/sagishi.png",
    "/sagishindan/images/syoubou_seibishi_syoukaki.png",
    "/sagishindan/js/bootstrap.js",
    "/sagishindan/js/bootstrap.min.js",
    "/sagishindan/js/sagishindan_defense.js",
    "/sagishindan/js/sagishindan_detailed_result.js",
    "/sagishindan/js/sagishindan_index.js",
    "/sagishindan/js/sagishindan_judgement.js",
    "/sagishindan/js/sagishindan_memory.js",
    "/sagishindan/js/sagishindan_result.js"
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
