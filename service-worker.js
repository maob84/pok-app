if(!self.define){let n,i={};const e=(e,s)=>(e=new URL(e+".js",s).href,i[e]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=i,document.head.appendChild(n)}else n=e,importScripts(e),i()})).then((()=>{let n=i[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(s,c)=>{const l=n||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let r={};const o=n=>e(n,l),f={module:{uri:l},exports:r,require:o};i[l]=Promise.all(s.map((n=>f[n]||o(n)))).then((n=>(c(...n),r)))}}define(["./workbox-49d4ab5b"],(function(n){"use strict";n.setCacheNameDetails({prefix:"pok"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/169.5cd9a385.css",revision:null},{url:"css/17.16ed98bb.css",revision:null},{url:"css/666.c5aa48e0.css",revision:null},{url:"css/695.7d819f8c.css",revision:null},{url:"css/74.ec2e23a4.css",revision:null},{url:"css/app.e35624c4.css",revision:null},{url:"css/vendor.0362c7ea.css",revision:null},{url:"favicon.ico",revision:"7594897533c3642fea581d3ceab1f074"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/fa-brands-400.455ea818.woff2",revision:null},{url:"fonts/fa-brands-400.60127e35.ttf",revision:null},{url:"fonts/fa-regular-400.21cb8f55.woff2",revision:null},{url:"fonts/fa-regular-400.eb91f7b9.ttf",revision:null},{url:"fonts/fa-solid-900.4d986b00.woff2",revision:null},{url:"fonts/fa-solid-900.bacd5de6.ttf",revision:null},{url:"fonts/fa-v4compatibility.c8e090db.ttf",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"b25e7345941a265682a4a1aaf4259306"},{url:"icons/apple-icon-152x152.png",revision:"fb29f259c452591911d9c8097d4474e0"},{url:"icons/apple-icon-167x167.png",revision:"5c17c127cc6a532f8ae204fa6fcc0943"},{url:"icons/apple-icon-180x180.png",revision:"5937ca81df2e0907730558f2728e0087"},{url:"icons/apple-launch-1080x2340.png",revision:"edcf69a17f7a03ca717ffbb2887ccbb3"},{url:"icons/apple-launch-1125x2436.png",revision:"4a5b0ae4f02015040cacbf02f15927e8"},{url:"icons/apple-launch-1170x2532.png",revision:"0ffba515ff0413697720ddf99181a72a"},{url:"icons/apple-launch-1179x2556.png",revision:"2196c81a5333ede911316930c88fc3f5"},{url:"icons/apple-launch-1242x2208.png",revision:"1a333c0df8446d86065a5d74b44c5a23"},{url:"icons/apple-launch-1242x2688.png",revision:"d3ba6e69f62cada9624df7e55c22ae6c"},{url:"icons/apple-launch-1284x2778.png",revision:"f1d4e77c46fabafa3c0507cc22da4a5e"},{url:"icons/apple-launch-1290x2796.png",revision:"87a7c09b86f9a1f1676f726f7e2c10cf"},{url:"icons/apple-launch-1536x2048.png",revision:"3ad4e580146f16746e28270cce177dfc"},{url:"icons/apple-launch-1620x2160.png",revision:"f60472f1c2eac40c831f6728d146163b"},{url:"icons/apple-launch-1668x2224.png",revision:"56f6834136878ed339a967a5aa71437c"},{url:"icons/apple-launch-1668x2388.png",revision:"db2f055b1b1ae81c6812254fc84300a3"},{url:"icons/apple-launch-2048x2732.png",revision:"af661a61d14971363a59c7ad407da4e7"},{url:"icons/apple-launch-750x1334.png",revision:"7007e3086c10e51430c9a2ea795c952c"},{url:"icons/apple-launch-828x1792.png",revision:"8d63294ec1a85cd78f9df3453a7dcb08"},{url:"icons/favicon-128x128.png",revision:"4394f42f557dbb4aa326c475741fabd4"},{url:"icons/favicon-16x16.png",revision:"06f6937b1326555bc870c4bfaee7c1f6"},{url:"icons/favicon-32x32.png",revision:"7a17b0310a787b4a5e200b483386821f"},{url:"icons/favicon-96x96.png",revision:"e32fc25f34cb7431521122a3140ddfbe"},{url:"icons/icon-128x128.png",revision:"c340dded4d9ad8cffe3fad9d03a6f766"},{url:"icons/icon-192x192.png",revision:"9c27ef3fd75062b48e8dd32cabfc7605"},{url:"icons/icon-256x256.png",revision:"550e4db2f8c7a5b7d5323bf904cb0fce"},{url:"icons/icon-384x384.png",revision:"067ef6f8f56e0a8fa4405f9431199c59"},{url:"icons/icon-512x512.png",revision:"e4c1067c0d863f88b7fc9badeaacffb5"},{url:"icons/ms-icon-144x144.png",revision:"6c84a2c3b0c2fece5126571699b51ae9"},{url:"icons/safari-pinned-tab.svg",revision:"4df36a61330d7f12f59ceafc4a6983ba"},{url:"index.html",revision:"f7237922c487de59dc78a3ba1a58bdd9"},{url:"js/169.5cba4fc4.js",revision:null},{url:"js/17.51f97904.js",revision:null},{url:"js/487.8dbf8a6a.js",revision:null},{url:"js/526.c232761e.js",revision:null},{url:"js/664.dfcf0708.js",revision:null},{url:"js/666.271e3c24.js",revision:null},{url:"js/695.c546a4d8.js",revision:null},{url:"js/74.72112bcc.js",revision:null},{url:"js/841.250c71e7.js",revision:null},{url:"js/app.ae108b50.js",revision:null},{url:"js/chunk-common.d5a50f46.js",revision:null},{url:"js/vendor.5b42ef9d.js",revision:null},{url:"manifest.json",revision:"4c2734157370bdcee1fa5b4be5ed6877"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
