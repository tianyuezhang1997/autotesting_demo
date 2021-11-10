// sw.js - This file needs to be in the root of the directory to work,
//         so do not move it next to the other scripts

const CACHE_NAME = 'lab-7-starter';

const urlsToCache = [
  
  './',
  'assets/components/RecipeCard.js',
  'assets/components/RecipeExpand.js',
  'assets/images\\icons/0-star.svg',
  'assets/images\\icons/1-star.svg',
  'assets/images\\icons/2-star.svg',
  'assets/images\\icons/3-star.svg',
  'assets/images\\icons/4-star.svg',
  'assets/images\\icons/5-star.svg',
  'assets/images\\icons/arrow-down.png',
  'assets/scripts/main.js',
  'assets/scripts/Router.js',
  'assets/styles/main.css',
  'index.html',
  'favicon.ico',
  'sw.js',
  
  'https://introweb.tech/assets/json/ghostCookies.json',
  'https://introweb.tech/assets/json/birthdayCake.json',
  'https://introweb.tech/assets/json/chocolateChip.json',
  'https://introweb.tech/assets/json/stuffing.json',
  'https://introweb.tech/assets/json/turkey.json',
  'https://introweb.tech/assets/json/pumpkinPie.json'
];

// Once the service worker has been installed, feed it some initial URLs to cache
self.addEventListener('install', function (event) {
  /**
   * TODO - Part 2 Step 2
   * Create a function as outlined above
   */
  // Reference to https://developers.google.com/web/fundamentals/primers/service-workers
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

/**
 * Once the service worker 'activates', this makes it so clients loaded
 * in the same scope do not need to be reloaded before their fetches will
 * go through this service worker
 */
self.addEventListener('activate', function (event) {
  /**
   * TODO - Part 2 Step 3
   * Create a function as outlined above, it should be one line
   */
  // Reference to https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
  event.waitUntil(clients.claim());
});

// Intercept fetch requests and store them in the cache
self.addEventListener('fetch', function (event) {
  /**
   * TODO - Part 2 Step 4
   * Create a function as outlined above
   */
  // Reference to https://developers.google.com/web/fundamentals/primers/service-workers#cache_and_return_requests
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
});