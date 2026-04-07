'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "109576f3b7555f1cbf09a624efc732c5",
"assets/AssetManifest.bin.json": "c0db9ec132f3e44e74a42f418dd17633",
"assets/AssetManifest.json": "d6eb3ac252a57c6356f19bac0c175764",
"assets/assets/applogo3.png": "d40ce82d5f5d7efd6c300a8c3ea25f5e",
"assets/assets/applogo4.png": "829e02715da000f53d1c6872de64d5f2",
"assets/assets/aqeel.png": "6dbfe8548e58a7da7b0c1d7a742fe369",
"assets/assets/background.mp4": "14fdfdbe124106b5228c4aa711d4b182",
"assets/assets/level1.jpeg": "896af196dab7087142b5ee96c726c265",
"assets/assets/level10.jpeg": "33dffc37b8e919214250f2135aefde89",
"assets/assets/level11.jpeg": "6eb3d6b568bb2e3fc2aa27e3fc058d19",
"assets/assets/level12.jpeg": "fdbcaca2320ee168e4716c7f5a5e7a93",
"assets/assets/level13.jpeg": "668896362c2a0ce5cf9dfd95074d9048",
"assets/assets/level14.jpeg": "b35e417cf7017a62efa8c125b46a589f",
"assets/assets/level15.jpeg": "0e323aeb75ca97feaef0e749db129fd2",
"assets/assets/level16.jpeg": "fc4e7a5155c36cc949a6bfaf19cb2be1",
"assets/assets/level17.jpeg": "aeafe054f082cc8ed7093ba13be14376",
"assets/assets/level18.jpeg": "4e7f040747284441be436defb2e03591",
"assets/assets/level19.jpeg": "6b69ae06752e34974e58c486f1f1abeb",
"assets/assets/level2.jpeg": "b80e643cd6cc761f20fdfa1095df1e1c",
"assets/assets/level20.jpeg": "50ffca097bde1ae36f2c26dfc268c4a6",
"assets/assets/level21.jpeg": "30a6b9b0d71d9df97898a829a2d34ee8",
"assets/assets/level22.jpeg": "66f4c751d19450064d9e8b8115a93d6c",
"assets/assets/level23.jpeg": "61ed82433163b93f7f73825cfe5c943a",
"assets/assets/level24.jpeg": "68195d8d04ca152a6f37d888bd9f0b12",
"assets/assets/level25.jpeg": "cf34d88fd8a7f10f66c42ec32e06f792",
"assets/assets/level26.jpeg": "677ce827397011f972a1e8a06631e067",
"assets/assets/level27.jpeg": "7a82bd8ea7f493b5b36fbec91aec6d68",
"assets/assets/level28.jpeg": "9b56b680827a59ded5431832c02f503e",
"assets/assets/level29.jpeg": "ec994d823f78535f072034fe5f91f645",
"assets/assets/level3.jpeg": "33438100d3053e6f21404ea3d4822269",
"assets/assets/level30.jpeg": "d720dc0ef66272a3fb8dd3720a5637d1",
"assets/assets/level31.jpeg": "e392f9db38a5d2385fbd618ad33745b7",
"assets/assets/level32.jpeg": "505bc6a83c263e01b420bd4fdfb62848",
"assets/assets/level33.jpeg": "2e20cf018583dec8039dea8da58f3210",
"assets/assets/level34.jpeg": "cbbf4858b0adc5417504c2f9a3dd13f6",
"assets/assets/level35.jpeg": "5407b094af6c07c8f94d4591d4e06a7b",
"assets/assets/level36.jpeg": "75e330e2ca06edb8478c58ddb7010d5f",
"assets/assets/level37.jpeg": "01e6043899bfc9f6855361b166895873",
"assets/assets/level38.jpeg": "920063c688e7f6ca3609212746c5548e",
"assets/assets/level39.jpeg": "0418c3f5eb09bcd972928d78fc79131b",
"assets/assets/level4.jpeg": "2a833930f1b7ad873b13408defae95da",
"assets/assets/level40.jpeg": "3f9044c7ee35ed7302cdc1b5fd28d25d",
"assets/assets/level41.jpeg": "e9332a4bf2a362f5a593bbf1948109d7",
"assets/assets/level42.jpeg": "533ec6e21172ee3b9b6548a8ca952171",
"assets/assets/level43.jpeg": "00b66cb67af7a17bddb514a7c1aea78f",
"assets/assets/level5.jpeg": "d03edd8b6cd92ffde9f7192731816c1e",
"assets/assets/level6.jpeg": "0270a24c97b4d648b229c5c60d41db1d",
"assets/assets/level7.jpeg": "2c9919c6fada4ce394941eec7dc3e3e2",
"assets/assets/level8.jpeg": "cf2fa31b721eba06558802e679924729",
"assets/assets/level9.jpeg": "d366134e416652d7efaebab639c24805",
"assets/assets/mountain.png": "ebb9a61845822738241be0961a6c4d57",
"assets/assets/sad.mp4": "d04744219454ad421ae1219d905629dd",
"assets/assets/smily.mp4": "5fa1b6a2172d8d68bfb4e23f5dee06c6",
"assets/assets/Thinking.mp4": "e2cbbdbf6e34538a61dd8cc0fc96c310",
"assets/assets/wrong.mp3": "564461d8389ba93968d911098022f863",
"assets/assets/yay.mp3": "17291d434818dbfd24d6d1f290c96532",
"assets/FontManifest.json": "f9097450010bd82cf16bb016ba2219d8",
"assets/fonts/MaterialIcons-Regular.otf": "5b4786d7abc0186a189ca5b5b9d1c017",
"assets/NOTICES": "d926f11e03a5e0e6db8a920d684aa709",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_tex/core/flutter_tex.css": "062a3279da48d0913eeeeb0d2266e26f",
"assets/packages/flutter_tex/core/flutter_tex.html": "b81cac5261651ce858b042f29e1dab82",
"assets/packages/flutter_tex/core/flutter_tex.js": "ef7d2eb428e17c123a71674439b9d892",
"assets/packages/flutter_tex/core/mathjax_core.js": "bdcf952800b9ddf46fa37fe538998af0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "dfcd9feb413210da6d0cced4a9baebde",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "dbf46b34b4fe983b8e82b753aff020bd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ea48a2529b6b6820af046400906b072c",
"/": "ea48a2529b6b6820af046400906b072c",
"main.dart.js": "c823508be7ee28fde7b79faf82735fda",
"manifest.json": "228ebc7243586156d891ccf94739369d",
"version.json": "c9674da93d14ea01f84c2b4dbb000715"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
