parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EDcV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearInput=exports.messageFormatter=void 0;var e=function(e){return e.replaceAll(" ","%20")};exports.messageFormatter=e;var r=function(e){e.value=""};exports.clearInput=r;
},{}],"L4bL":[function(require,module,exports) {
"use strict";var t=require("./helpers.js"),e=document.querySelector(".showcase__message"),n=document.querySelector(".tab__button-container"),a=document.querySelectorAll(".tab__button"),c=document.querySelector(".tab__content"),r=document.querySelector(".chat"),o=function(){e.value&&(e.style.height="200px"),e.value||(e.style.height="")},u=function(t){var e=t.target.closest(".tab__button");e&&(a.forEach(function(t){return t.classList.remove("tab__button--active")}),Array.from(c.children).forEach(function(t){return t.classList.add("hidden")}),e.classList.add("tab__button--active"),document.querySelector(".tab__content--".concat(e.dataset.target)).classList.remove("hidden"))},s=function(n){if(n.preventDefault(),e.value){var a=e.value,c=(0,t.messageFormatter)(a);(0,t.clearInput)(e),window.open("https://wa.me/905422990181?text=".concat(c),"_blank")}};e.addEventListener("focusout",o),n.addEventListener("click",u),r.addEventListener("click",s);
},{"./helpers.js":"EDcV"}]},{},["L4bL"], null)
//# sourceMappingURL=/script.2ea37bcd.js.map