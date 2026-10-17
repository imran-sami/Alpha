const C='alpha-v14',F=['./','index.html','manifest.webmanifest','apple-touch-180.png','icon-v8-192.png','icon-v8-512.png','icon-v8-1024.png','icon-v8-maskable-192.png','icon-v8-maskable-512.png','icon-v8-maskable-1024.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET')return;const u=new URL(r.url);
if(u.origin!=location.origin&&!/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname))return;
e.respondWith(fetch(r).then(res=>{if(res.ok||res.type=='opaque'){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(m=>m||(r.mode=='navigate'?caches.match('index.html'):Response.error()))))});
