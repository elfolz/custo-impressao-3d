if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const t=e=>s(e,o),c={module:{uri:o},exports:l,require:t};i[o]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BoUoe0Ig.js",revision:null},{url:"assets/index-Dtt7Br1v.css",revision:null},{url:"assets/monitoring-COFN6wCf.css",revision:null},{url:"assets/monitoring-DSGkFxxL.js",revision:null},{url:"assets/privacy-policy-5ZKmtIAU.css",revision:null},{url:"assets/privacy-policy-DyZe1gly.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"922b491f7cf43118a90e10cb874de948"},{url:"img/icons/android-chrome-192x192.png",revision:"79ab6872cddf5b926eb4f82240dffbd8"},{url:"img/icons/android-chrome-512x512.png",revision:"2d8a73deea6ac6c6ad41395d8571c1ee"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"c926e2a85d510bd45a1687939e9c7143"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"1e5eeff979c463bf9fdc4f10346e201a"},{url:"manifest.webmanifest",revision:"39e75b9e9a953caaef10f42f074c4629"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
