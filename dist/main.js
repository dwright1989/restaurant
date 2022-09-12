(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),d=t.n(c),l=new URL(t(88),t.b),u=new URL(t(633),t.b),s=new URL(t(628),t.b),m=i()(a()),p=d()(l),h=d()(u),g=d()(s);m.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n    \n    \n\n/* ------------- BANNER ------------*/\n\n#banner{\n    height: 5rem;\n    background-color: black;\n    color: white;\n    padding: 5rem 0rem 5rem 0rem;\n}\n\nh1{\n    border: 5px double white;\n    padding: 2rem 0rem 2rem 0rem;\n    width: 25rem;\n    margin: auto;\n    text-align: center;\n}\n\n/* ------------- NAVIGATION ------------*/\n\n#navigation-buttons{\n    background-color: black;\n    margin: auto;\n    text-align: center;\n}\n\n.tab{\n    padding: 0rem 2rem 0rem 2rem;\n    text-decoration: none;\n    color: white;\n    cursor: pointer;\n}\n\n.active-tab{\n    background-color: white;\n    color: black;\n}\n\n/* ------------- MAIN ------------*/\n\n#content{\n\n    background: url("+p+");\n    background-size: 100%;\n    \n}\n\n/* ------------- HOME ------------*/\n\n.tab-content{\n    background-color: white;\n    width: 50%;\n    height: 90vh;\n    margin: auto;\n    opacity: 0.8;\n    border: 10px  black;\n    border-style: none solid solid solid;\n}\n\n#about-heading{\n    text-decoration: underline;\n}\n\n#about-para{\n    padding: 0rem 5rem 0rem 5rem;\n}\n\n#opening-hours{\n    margin: auto;\n    padding-top: 5rem;\n    text-align: center;\n    font-size: 1.5rem;\n}\n\nh2{\n    padding: 2rem 0rem 2rem 0rem;\n    margin: auto;\n    text-align: center;\n}\n\n/* ------------- MENU ------------*/\n\n#menu-items{\n    display: flex;\n    margin: auto;\n    height: 15rem;\n    justify-content: space-evenly;\n}\n\n#food-menu{\n    background: url("+h+");\n    background-size: 127%;\n    background-repeat: no-repeat;\n    width: 15rem;\n    cursor: pointer;\n}\n\n#drinks-menu{\n   background: url("+g+");\n   background-size: 100%;\n   background-repeat: no-repeat;\n   width: 15rem;\n   cursor: pointer;\n}\n\n#menu-para{\n    text-align: center;\n    padding-top: 5rem;\n}\n\n.menu-label{\n    text-align: center;\n    color: white;\n    background-color: black;\n}\n\n/* ------------- MENU ------------*/\n\n#contact-content{\n    margin: auto;\n    text-align: center;\n}\n\nh3{\n    padding: 0.5rem;\n}",""]);const f=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],u=o[l]||0,s="".concat(l," ").concat(u);o[l]=u+1;var m=t(s),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=a(p,r);r.byIndex=c,n.splice(c,0,{identifier:s,updater:h,references:1})}i.push(s)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),l=0;l<o.length;l++){var u=t(o[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},88:(e,n,t)=>{e.exports=t.p+"4c68428f33d37af98d25.jpg"},633:(e,n,t)=>{e.exports=t.p+"d847f62640b03c7362d9.jpg"},628:(e,n,t)=>{e.exports=t.p+"5785386b5f1e9312cb22.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),l=t(216),u=t.n(l),s=t(589),m=t.n(s),p=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,t(88),t(628),t(633);const g=function(){let e=document.getElementById("content"),n=document.getElementById("tab");n.innerHTML="";let t=function(){let e=document.createElement("div");return e.id="home-content",e.classList.add("tab-content"),e}(),r=function(){let e=document.createElement("div");e.id="about";let n=document.createElement("h1");n.id="about-heading",n.innerHTML="About";let t=document.createElement("p");return t.id="about-para",t.innerHTML="Billy's Bar and Burgers was established in 1992 by Billy Hanson and his son Kevin. Since then, their business has gone on to win several awards including BURGER OF THE YEAR in 2021. Billy's Bar and Burgers sells a variety of drinks including coffee, cocktails, craft beer and alcohol free beveridges. Come along and try the best burgers in town!",e.appendChild(n),e.appendChild(t),e}(),a=function(){let e=document.createElement("div");e.id="opening-hours";let n=document.createElement("h2");n.innerHTML="Opening Hours";let t=document.createElement("div");t.id="times";let r=document.createElement("p");r.innerHTML="Sunday-Wednesday: 10am - 11pm";let a=document.createElement("p");a.innerHTML="Thursday: 10am - 12pm";let o=document.createElement("p");o.innerHTML="Friday: 10am - 2am";let i=document.createElement("p");return i.innerHTML="Saturday: 10am - 2am",t.appendChild(r),t.appendChild(a),t.appendChild(o),t.appendChild(i),e.appendChild(n),e.appendChild(t),e}();t.appendChild(r),t.appendChild(a),n.appendChild(t),document.getElementById("homeLink").classList.add("active-tab"),document.getElementById("menuLink").classList.remove("active-tab"),document.getElementById("contactLink").classList.remove("active-tab"),e.appendChild(n)},f=function(){let e=document.getElementById("content"),n=document.getElementById("tab");n.innerHTML="";let t=function(){let e=document.createElement("div");return e.id="menu-content",e.classList.add("tab-content"),e}(),r=function(){let e=document.createElement("h2");return e.innerHTML="Menu",e}(),a=function(){let e=document.createElement("div");e.id="menu-items";let n=document.createElement("div");n.id="food-menu";let t=document.createElement("h3");t.classList.add("menu-label"),t.innerHTML="Food Menu";let r=document.createElement("div");r.id="drinks-menu";let a=document.createElement("h3");return a.classList.add("menu-label"),a.innerHTML="Drinks Menu",n.appendChild(t),r.appendChild(a),e.append(n),e.append(r),e}(),o=function(){let e=document.createElement("p");return e.id="menu-para",e.innerHTML="Vegetarian, Vegan and Gluten Free Menus also available.",e}();t.appendChild(r),t.appendChild(a),t.appendChild(o),n.appendChild(t),document.getElementById("menuLink").classList.add("active-tab"),document.getElementById("homeLink").classList.remove("active-tab"),document.getElementById("contactLink").classList.remove("active-tab"),e.appendChild(n)};(function(){let e=document.getElementById("content"),n=function(){let e=document.createElement("div");e.id="common-content";let n=document.createElement("div");n.id="banner";let t=document.createElement("h1");t.innerHTML="Billy's Bar and Burgers",n.appendChild(t),e.appendChild(n);let r=function(){let e=document.createElement("div");e.id="navigation-buttons";let n=document.createElement("a");n.classList.add("tab"),n.classList.add("active-tab"),n.id="homeLink",n.innerHTML="Home";let t=document.createElement("a");t.classList.add("tab"),t.id="menuLink",t.innerHTML="Menu";let r=document.createElement("a");return r.classList.add("tab"),r.id="contactLink",r.innerHTML="Contact",e.appendChild(n),e.appendChild(t),e.appendChild(r),e}();return e.appendChild(r),e}();e.appendChild(n);let t=function(){let e=document.createElement("div");return e.id="tab",e}();e.appendChild(t)})(),g(),function(){const e=document.getElementById("homeLink"),n=document.getElementById("menuLink");document.getElementById("contactLink"),e.addEventListener("click",g),n.addEventListener("click",f)}()})()})();