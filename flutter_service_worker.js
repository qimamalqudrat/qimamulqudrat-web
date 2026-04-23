'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1e5585e175fabdd5f01788d8a772a49f",
"assets/AssetManifest.bin.json": "32848526f9be6f757196e86ae9e9da5f",
"assets/AssetManifest.json": "dd15ebf133df467fa492abd45cec93ce",
"assets/assets/achievements/level1.jpeg": "316c57c62b8e0dda8b1242d5140b6141",
"assets/assets/achievements/level10.jpeg": "c36aaf1e8f5f26a67380aa82f0fa9aef",
"assets/assets/achievements/level11.jpeg": "6217630ece963788ac76cb4fd8ae827c",
"assets/assets/achievements/level12.jpeg": "401b4c2b754857adef18d33728c2bccb",
"assets/assets/achievements/level13.jpeg": "c84c857b4423518730b011638c4f7a21",
"assets/assets/achievements/level14.jpeg": "4b3193eb1a8620a868d3917e5f494b53",
"assets/assets/achievements/level15.jpeg": "d4b123be0e5a2195d3c2a5d640b39caf",
"assets/assets/achievements/level16.jpeg": "65d5ca06490b258ca00ba0c6ca407b83",
"assets/assets/achievements/level17.jpeg": "5c339c7f5d031c36bbab1963c59a8d09",
"assets/assets/achievements/level18.jpeg": "9a8b2378eeddf63d2e205a146deb8aeb",
"assets/assets/achievements/level19.jpeg": "9d94c9f1423db609711b47a0abea04a1",
"assets/assets/achievements/level2.jpeg": "b86a65ab479b8ca78d07cbab088f025a",
"assets/assets/achievements/level20.jpeg": "2c75b4b9cf5cfb9d25e704bb5f526d59",
"assets/assets/achievements/level21.jpeg": "e92071383d87286ba6de6bd9a2fc97c3",
"assets/assets/achievements/level22.jpeg": "7d4ac0c90ba2318b13a5d8f3a2e990a7",
"assets/assets/achievements/level23.jpeg": "156d9e1c1837818565d75ef92ae7878b",
"assets/assets/achievements/level24.jpeg": "8088cf5f771505e8bde16b6a604504c1",
"assets/assets/achievements/level25.jpeg": "f3aba0d5a4a73bb03d174a2757dc30d2",
"assets/assets/achievements/level26.jpeg": "f756afcdd30e70da841fa7c496039197",
"assets/assets/achievements/level27.jpeg": "1f97b61c322c281b60e1d08dfeee9426",
"assets/assets/achievements/level28.jpeg": "2da5b4ecbf2082efceb515be85ff7dc9",
"assets/assets/achievements/level29.jpeg": "c69b441b9acfbe5347cdf0f7d0b45a65",
"assets/assets/achievements/level3.jpeg": "77169be2085d80ff57457e56b518f4e7",
"assets/assets/achievements/level30.jpeg": "9dc57c1e6e30064ac22f804d8cf695ba",
"assets/assets/achievements/level31.jpeg": "9ce9f0ce7d47a1e15eab19422dfa2bb5",
"assets/assets/achievements/level32.jpeg": "9948ab7f49a22816b2b6a26a1b971d1f",
"assets/assets/achievements/level33.jpeg": "43b7eae0cf59bf0ccdc41d187187410f",
"assets/assets/achievements/level34.jpeg": "6b491489a08bb460a67461b096106666",
"assets/assets/achievements/level35.jpeg": "a10252ee7a5298b7fbb1a7cff2386f77",
"assets/assets/achievements/level36.jpeg": "b567cd287b4519bc3052b6d5fc516061",
"assets/assets/achievements/level37.jpeg": "28abf2339b3d5f670b75e769140a1883",
"assets/assets/achievements/level38.jpeg": "c21e398aa28a9bc0afacef87cfcc85fc",
"assets/assets/achievements/level39.jpeg": "1c4d8245c608715c4638696d4a352fde",
"assets/assets/achievements/level4.jpeg": "e1d994b129b46fb0ddb383485afca3f0",
"assets/assets/achievements/level40.jpeg": "e325cb7bfb2d0487c3d8c457d516e602",
"assets/assets/achievements/level41.jpeg": "238eacb619e3bb30051766124a205722",
"assets/assets/achievements/level42.jpeg": "bd09983452956530000d2df144b113a2",
"assets/assets/achievements/level43.jpeg": "e1db752b762810428a3e57f7d4089399",
"assets/assets/achievements/level44.jpeg": "8d227b059f341ce7ea4112813b15cc5a",
"assets/assets/achievements/level45.jpeg": "b299d6c0b472f0cdd6b05924b568eb96",
"assets/assets/achievements/level46.jpeg": "4eb6d791c3ddc273818a70b2dc9fa9bc",
"assets/assets/achievements/level47.jpeg": "55805ef1ea77585428facb373c9c169d",
"assets/assets/achievements/level48.jpeg": "a4a522e7ed1459e868a1dfef21c74b9a",
"assets/assets/achievements/level49.jpeg": "379994edccdc4ab66ceec5251066b73f",
"assets/assets/achievements/level5.jpeg": "efe04dcb8f5ce45707a2ee40cf3e5b0e",
"assets/assets/achievements/level50.jpeg": "4dc7efb747f717b915c5b62018c1b98b",
"assets/assets/achievements/level51.jpeg": "8bd6ad5395b3952315439c1e160d75f4",
"assets/assets/achievements/level52.jpeg": "6219d2c9ea23ae7c07eda68b0e355b55",
"assets/assets/achievements/level53.jpeg": "d6c4cabba623b365a671244c5291c68c",
"assets/assets/achievements/level54.jpeg": "aa8a08638b6f3706bd4f75f323f027a5",
"assets/assets/achievements/level55.jpeg": "febeb2532c9890f151169c3454a4b6e1",
"assets/assets/achievements/level56.jpeg": "fbdcf172507aa909c8e4e8dfb163d569",
"assets/assets/achievements/level57.jpeg": "3a4d44c2d533715545086e5b91e20c00",
"assets/assets/achievements/level58.jpeg": "a26a21c79c0265ce0a7f17d1d1d3f4fb",
"assets/assets/achievements/level59.jpeg": "21785aaccef371b2400f28a31c8995ee",
"assets/assets/achievements/level6.jpeg": "3c8a35f679030f7b157e199aab620124",
"assets/assets/achievements/level60.jpeg": "13a3bb502a48f943fa13f89b22a24831",
"assets/assets/achievements/level61.jpeg": "5e86269e29f9b46df46391862e27ede7",
"assets/assets/achievements/level62.jpeg": "1fbd3ea1f8a059902ffdc5d19ff22f84",
"assets/assets/achievements/level63.jpeg": "bfdaba3ddd3f0b77b2f9f21e979cdbae",
"assets/assets/achievements/level64.jpeg": "5a95b001844406c09ef7c81c9a012834",
"assets/assets/achievements/level65.jpeg": "c280e8859b085278a64630193813a947",
"assets/assets/achievements/level66.jpeg": "64da1a5480171cba8595bc9ff0ca84cc",
"assets/assets/achievements/level67.jpeg": "85fd7aad52bbc5f4a0e2041c2f91b8b4",
"assets/assets/achievements/level68.jpeg": "87303cd2c8bdd8c1c2c76c7920b19a0f",
"assets/assets/achievements/level69.jpeg": "0cf007931812c0b8ca2f2f92aafa8578",
"assets/assets/achievements/level7.jpeg": "036591de1f2df21dd9969f8e8498d449",
"assets/assets/achievements/level70.jpeg": "b96acf31124d6e6f694fbf2e5c1f8477",
"assets/assets/achievements/level71.jpeg": "1516ad5fd1c6a7adfade4004d56b0dca",
"assets/assets/achievements/level72.jpeg": "000b9d7383a164655db0e6901049252e",
"assets/assets/achievements/level73.jpeg": "73c39c9bd08bb110efd8cf4f8a0dc4b1",
"assets/assets/achievements/level74.jpeg": "595a881630c8d287a21e6e4145e910be",
"assets/assets/achievements/level75.jpeg": "a1b8eadf93895a18138cb67808b0f745",
"assets/assets/achievements/level8.jpeg": "f63e9c54311db55b9e38543cec31ce5c",
"assets/assets/achievements/level9.jpeg": "fe3b766a08c84f43d58660538431801f",
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
"assets/fonts/MaterialIcons-Regular.otf": "1b9049640ad8cabb1c4e583b0adb706b",
"assets/NOTICES": "282cf8998b55b17bb8a9b6d560ce165a",
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
"flutter_bootstrap.js": "378067abbd884bb8f66aed0128c1fe47",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ea48a2529b6b6820af046400906b072c",
"/": "ea48a2529b6b6820af046400906b072c",
"main.dart.js": "8ffe38ac80054f43b1c831c352e77802",
"manifest.json": "228ebc7243586156d891ccf94739369d",
"version.json": "fec768758b5cdac31b01d9415e88a2b9"};
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
