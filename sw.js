if(!self.define){let e,d={};const i=(i,r)=>(i=new URL(i+".js",r).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(d[c])return;let a={};const n=e=>i(e,c),o={module:{uri:c},exports:a,require:n};d[c]=Promise.all(r.map((e=>o[e]||n(e)))).then((e=>(s(...e),a)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-0axYQE46.css",revision:null},{url:"assets/index-CHiGwpEp.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/product1.png",revision:"39e9925f167d7403340b280c2712566e"},{url:"images/product10.png",revision:"6eb7fee0f3a26a01e72faba0eef6fdef"},{url:"images/product11.png",revision:"dda13398c056b3ed2741dfcd5b5617eb"},{url:"images/product12.png",revision:"a616dab9f6d67550827d9a32d404d394"},{url:"images/product2.png",revision:"d55fc80cbf38dabbbb2e89153535df3d"},{url:"images/product3.png",revision:"d4cb69539c7272aee2b3bba3e5aeb35d"},{url:"images/product4.png",revision:"7e538d998bd419763e61e16bee2e803d"},{url:"images/product5.png",revision:"09dd685b0c8571bea57f53c5a314c551"},{url:"images/product6.png",revision:"614dd132c1d65739705668d2773ef20a"},{url:"images/product7.png",revision:"23bfef82447024292806af1c24bc84e0"},{url:"images/product8.png",revision:"d7c77eae704bcaac9c30da116cb0dadb"},{url:"images/product9.png",revision:"1fe600483d29454e32f52da2af39c49c"},{url:"index.html",revision:"175b6f0e34de4425ba3b385966066b0e"},{url:"manifest.webmanifest",revision:"ffd529b3dd84d3b220bf63fda95c5c92"},{url:"registerSW.js",revision:"58a305b6d29d6ff8444c3f173a29671f"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/product1.png",revision:"39e9925f167d7403340b280c2712566e"},{url:"images/product10.png",revision:"6eb7fee0f3a26a01e72faba0eef6fdef"},{url:"images/product11.png",revision:"dda13398c056b3ed2741dfcd5b5617eb"},{url:"images/product12.png",revision:"a616dab9f6d67550827d9a32d404d394"},{url:"images/product2.png",revision:"d55fc80cbf38dabbbb2e89153535df3d"},{url:"images/product3.png",revision:"d4cb69539c7272aee2b3bba3e5aeb35d"},{url:"images/product4.png",revision:"7e538d998bd419763e61e16bee2e803d"},{url:"images/product5.png",revision:"09dd685b0c8571bea57f53c5a314c551"},{url:"images/product6.png",revision:"614dd132c1d65739705668d2773ef20a"},{url:"images/product7.png",revision:"23bfef82447024292806af1c24bc84e0"},{url:"images/product8.png",revision:"d7c77eae704bcaac9c30da116cb0dadb"},{url:"images/product9.png",revision:"1fe600483d29454e32f52da2af39c49c"},{url:"manifest.webmanifest",revision:"ffd529b3dd84d3b220bf63fda95c5c92"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
