if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>n(e,o),a={module:{uri:o},exports:d,require:c};i[o]=Promise.all(s.map((e=>a[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"73bdede683624324ea25bc1c72941f8f"},{url:"assets/index.b65e0752.css",revision:null},{url:"assets/index.ca2d44d1.js",revision:null},{url:"console.css",revision:"7d99be1a67bb89f7a8529b77595e547e"},{url:"console.js",revision:"ffa78bc28e55541972fe1103807e1371"},{url:"favicon.ico",revision:"833aa000444d6319b3b081a537dbd187"},{url:"index.html",revision:"3282e83946e43b418f0aa22dfcb6608f"},{url:"mask-icon.svg",revision:"8611469a3070e6abf9e2260d99642019"},{url:"pwa-192x192.png",revision:"7e750b18358a4731ddfa828c0339f90a"},{url:"pwa-512x512.png",revision:"bed838d258cdf379b2ed648dea458169"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"833aa000444d6319b3b081a537dbd187"},{url:"apple-touch-icon.png",revision:"73bdede683624324ea25bc1c72941f8f"},{url:"pwa-192x192.png",revision:"7e750b18358a4731ddfa828c0339f90a"},{url:"pwa-512x512.png",revision:"bed838d258cdf379b2ed648dea458169"},{url:"manifest.webmanifest",revision:"d7c22f69955f372bed99bd67eff8b006"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));