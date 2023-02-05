(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(335),t.b),u=new URL(t(893),t.b),f=i()(r()),d=s()(l),p=s()(u);f.push([e.id,"@font-face {\n    font-family: niceFontRegular;\n    src: url("+d+");\n}\n\n@font-face {\n    font-family: niceFontBold;\n    src: url("+p+");\n}\n\nheader {\n\n    font-family: niceFontBold;\n    font-size: 2rem;\n}\n\n.navigationMenu ul{\n\n    list-style: none;\n    font-family: niceFontRegular;\n}",""]);const h=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],u=a[l]||0,f="".concat(l," ").concat(u);a[l]=u+1;var d=t(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var h=r(p,o);o.byIndex=c,n.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},893:(e,n,t)=>{e.exports=t.p+"3f44c6fcb7bb3df66f85.ttf"},335:(e,n,t)=>{e.exports=t.p+"282d57161b4539b7f9fc.ttf"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),f=t(589),d=t.n(f),p=t(426),h={};function m(e,n,t){const o={nameOfTodo:n,projectDescription:t};return e.todo.push(o),{project:e,nameOfTodo:n,descriptionOfTodo:t}}function v(e,n){const t=e.todo.findIndex((e=>e[n]));console.log(t),e.todo.splice(-1,1)}h.styleTagTransform=d(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,window.addEventListener("load",(e=>{!function(){const e=document.querySelector("#content");e.replaceChildren(),e.insertAdjacentHTML("afterbegin","\n\n        <header class = 'headerTitle'>\n            \n            <h1> Goal Setter Goal Getter </h1>\n\n        </header>\n\n            <nav class = 'navigationMenu'>\n\n                <ul>\n\n                <li> View Projects </li>\n\n                </ul>\n\n            </nav>\n\n        <aside class = 'addProject'>\n\n            <button class = 'addProjectButton'>NEW</button>\n        \n        </aside>\n\n        <main class = 'ProjectTodoContainer'>\n\n            <h2> Projects </h2>\n\n        </main>\n\n        ")}()}));const g=((e,n,t=[])=>({projectName:"First Project",projectDescription:"First of a series of projects",todo:t}))();[].push(g),m(g,"todoOne","todo stuff is the name of the game"),m(g,"Farting","Farting will be done asap"),g.projectName="fartingNAME",g.todo.forEach((e=>{"todoOne"==e.nameOfTodo&&(e.nameOfTodo="hello")})),function(e,n,t){e.todo.forEach((e=>{"Farting will be done asap"==e.projectDescription&&(e.nameOfTodo="Fart forever more")}))}(g),v(g,"hello"),v(g,"Farting"),console.log(g)})()})();