!function(){var e={741:function(){const e=document.querySelector(".nav-menu__burger"),t=document.getElementById("opacity-js");e.onclick=function(){const e=document.querySelector(".container");let t=screen.width,n=window.getComputedStyle(e);console.log(n.display),document.querySelector(".left"),"none"==n.display&&t<1120&&(console.log("зашлел"),document.getElementById("leftt").style.display="block",document.getElementById("js").style.display="flex",document.getElementById("js").style.justifyContent="space-around",document.getElementById("js").style.flexDirection="column",document.getElementById("js").style.marginTop="-110px",document.getElementById("js").style.width="320px",document.getElementById("js").style.position="absolute",document.getElementById("hidden-js").style.overflowY="hidden",document.getElementById("opacity-js").style.opacity="0.2",document.getElementById("opacity-jss").style.opacity="0.2",document.getElementById("js").style.zIndex="1")},t.addEventListener("click",(function(e){const t=document.querySelector(".container");let n=screen.width,o=window.getComputedStyle(t);console.log(o.display),document.querySelector(".left"),"flex"==o.display&&n<1120&&(document.getElementById("opacity-js").addEventListener("click",(function(e){console.log("Произошло событие",e.type),document.getElementById("leftt").style.display="none",document.getElementById("js").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("js").style.zIndex="0",console.log("4"),location.reload()})),document.getElementById("opacity-jss").addEventListener("click",(function(e){console.log("Произошло событие",e.type),console.log("Произошло событие",e.type),document.getElementById("leftt").style.display="none",document.getElementById("js").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("js").style.zIndex="0",console.log("3"),location.reload()})))})),document.getElementById("opacity-jss").addEventListener("click",(function(e){const t=document.querySelector(".container");let n=screen.width;"flex"==window.getComputedStyle(t).display&&n<1120&&(document.getElementById("opacity-js").addEventListener("click",(function(e){console.log("Произошло событие",e.type),document.getElementById("leftt").style.display="none",document.getElementById("js").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("js").style.zIndex="0",console.log("1"),location.reload()})),document.getElementById("opacity-jss").addEventListener("click",(function(e){console.log("Произошло событие",e.type),console.log("Произошло событие",e.type),document.getElementById("leftt").style.display="none",document.getElementById("js").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("js").style.zIndex="0",console.log("2"),location.reload()})))})),document.querySelector(".burger-menu__btn-left").addEventListener("click",(function(e){console.log("Произошло событие",e.type),document.getElementById("leftt").style.display="none",document.getElementById("js").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("js").style.zIndex="0",console.log("1"),location.reload()})),document.getElementById("call-btn").addEventListener("click",(function(e){const t=document.querySelector(".feedback-side-container-call");let n=screen.width;"none"==window.getComputedStyle(t).display&&(n>1440&&(document.getElementById("btn-1440-call").style.display="flex"),document.getElementById("container-call").style.display="flex",document.getElementById("container-call").style.zIndex="11",document.getElementById("hidden-js").style.overflowY="hidden",document.getElementById("hidden-js").style.overflowY="hidden !important",document.getElementById("hidden-js").style.overflowX="hidden !important",document.getElementById("opacity-js").style.opacity="0.2",document.getElementById("opacity-jss").style.opacity="0.2",document.getElementById("caption").style.opacity="0.2",document.getElementById("js").style.opacity="0.2")}));const n=document.querySelector(".burger-menu-feedback__close"),o=document.getElementById("btn-1440-call");n.addEventListener("click",(function(e){document.getElementById("container-call").style.display="none",document.getElementById("container-call").style.zIndex="0",document.getElementById("zaplatka").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("hidden-js").style.overflowX="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("caption").style.opacity="1",document.getElementById("js").style.opacity="1"})),o.addEventListener("click",(function(e){document.getElementById("container-call").style.display="none",document.getElementById("container-call").style.zIndex="0",document.getElementById("btn-1440-call").style.display="none",document.getElementById("zaplatka").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("hidden-js").style.overflowX="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("caption").style.opacity="1",document.getElementById("js").style.opacity="1"})),document.getElementById("feedback-btn").addEventListener("click",(function(e){const t=document.querySelector(".feedback-side-container");let n=screen.width;"none"==window.getComputedStyle(t).display&&(n>1440&&(document.getElementById("btn-1440-feedback").style.display="flex"),document.getElementById("container-feedback").style.display="flex",document.getElementById("container-feedback").style.zIndex="11",document.getElementById("hidden-js").style.overflowY="hidden",document.getElementById("opacity-js").style.opacity="0.2",document.getElementById("opacity-jss").style.opacity="0.2",document.getElementById("hidden-js").style.overflowY="hidden !important",document.getElementById("hidden-js").style.overflowX="hidden !important",document.getElementById("caption").style.opacity="0.2",document.getElementById("js").style.opacity="0.2")})),document.getElementById("btn-1440-feedback").addEventListener("click",(function(e){document.getElementById("container-feedback").style.display="none",document.getElementById("zaplatka").style.display="none",document.getElementById("container-feedback").style.zIndex="0",document.getElementById("btn-1440-feedback").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("hidden-js").style.overflowX="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("caption").style.opacity="1",document.getElementById("js").style.opacity="1"})),document.querySelector(".burger-menu-call__close").addEventListener("click",(function(e){document.getElementById("zaplatka").style.display="none",document.getElementById("container-feedback").style.display="none",document.getElementById("container-feedback").style.zIndex="0",document.getElementById("btn-1440-feedback").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("hidden-js").style.overflowX="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("caption").style.opacity="1",document.getElementById("js").style.opacity="1"})),document.querySelector(".nav-menu").addEventListener("click",(function(e){const t=document.querySelector(".feedback-side-container");screen.width,"flex"==window.getComputedStyle(t).display&&(document.getElementById("opacity-js").addEventListener("click",(function(e){document.getElementById("zaplatka").style.display="none",document.getElementById("container-feedback").style.display="none",document.getElementById("container-feedback").style.zIndex="0",document.getElementById("btn-1440-feedback").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("hidden-js").style.overflowX="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("caption").style.opacity="1",document.getElementById("js").style.opacity="1",console.log("1"),location.reload()})),document.querySelector(".ob").addEventListener("click",(function(e){document.getElementById("container-feedback").style.display="none",document.getElementById("zaplatka").style.display="none",document.getElementById("container-feedback").style.zIndex="0",document.getElementById("btn-1440-feedback").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("hidden-js").style.overflowX="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("caption").style.opacity="1",document.getElementById("js").style.opacity="1",console.log("2"),location.reload()})))})),document.querySelector(".nav-menu").addEventListener("click",(function(e){const t=document.querySelector(".feedback-side-container-call");screen.width,"flex"==window.getComputedStyle(t).display&&(document.getElementById("opacity-js").addEventListener("click",(function(e){document.getElementById("zaplatka").style.display="none",document.getElementById("container-call").style.display="none",document.getElementById("container-call").style.zIndex="0",document.getElementById("btn-1440-feedback").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("hidden-js").style.overflowX="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("caption").style.opacity="1",document.getElementById("js").style.opacity="1",console.log("1"),location.reload()})),document.querySelector(".ob").addEventListener("click",(function(e){document.getElementById("container-call").style.display="none",document.getElementById("zaplatka").style.display="none",document.getElementById("container-call").style.zIndex="0",document.getElementById("btn-1440-feedback").style.display="none",document.getElementById("hidden-js").style.overflowY="visible",document.getElementById("hidden-js").style.overflowX="visible",document.getElementById("opacity-js").style.opacity="1",document.getElementById("opacity-jss").style.opacity="1",document.getElementById("caption").style.opacity="1",document.getElementById("js").style.opacity="1",console.log("2"),location.reload()})))}))},187:function(){new Swiper(".mySwiper",{spaceBetween:-28,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},mousewheel:!0,keyboard:!0})},264:function(){const e=document.querySelector(".show-more__btn"),t=document.querySelector(".show-more__btn-repaire"),n=document.querySelector(".read-more");e.onclick=function(){const e=document.querySelectorAll(".none"),t=document.querySelectorAll(".none-1120");document.querySelector(".show-more__btn-txt");let n=screen.width,o=window.getComputedStyle(e[0]),l=window.getComputedStyle(t[0]);"none"==o.display&&"none"==l.display||"none"==o.display?(document.getElementById("myDIV3").style.display="grid",document.getElementById("myDIV4").style.display="grid",document.getElementById("myDIV5").style.display="grid",document.getElementById("myDIV1").style.display="grid",document.getElementById("myDIV2").style.display="grid",document.getElementsByClassName("show-more__btn-txt")[0].textContent="Скрыть"):"none"==l.display?(document.getElementById("myDIV1").style.display="grid",document.getElementById("myDIV2").style.display="grid",document.getElementsByClassName("show-more__btn-txt")[0].textContent="Скрыть"):"grid"==o.display&&n>1119?(document.getElementById("myDIV3").style.display="none",document.getElementById("myDIV4").style.display="none",document.getElementById("myDIV5").style.display="none",document.getElementsByClassName("show-more__btn-txt")[0].textContent="Показать все",location.reload()):"grid"==o.display&&n<1119&&(document.getElementById("myDIV3").style.display="none",document.getElementById("myDIV4").style.display="none",document.getElementById("myDIV5").style.display="none",document.getElementById("myDIV1").style.display="none",document.getElementById("myDIV2").style.display="none",document.getElementsByClassName("show-more__btn-txt")[0].textContent="Показать все",location.reload())},t.onclick=function(){document.getElementsByClassName("show-more__btn-repaire")[0].textContent;let e=screen.width;const t=document.getElementById("hidden-1120-3"),n=window.getComputedStyle(t);if(e>767&&"none"==n.display)document.getElementById("hidden-1120").style.display="flex",document.getElementById("hidden-1120-2").style.display="flex",document.getElementById("hidden-1120-3").style.display="flex",document.getElementById("js-wrap").style.flexWrap="wrap",document.getElementsByClassName("show-more__btn-repaire")[0].textContent="Скрыть",document.getElementsByClassName("show-more__btn-repaire")[0].textContent,console.log(n.display),console.log(t);else if("flex"==n.display){let e=screen.width;console.log("зашел"),e<1120&&e>767?(document.getElementById("hidden-1120").style.display="none",document.getElementById("hidden-1120-2").style.display="none",document.getElementById("hidden-1120-3").style.display="none",location.reload()):e>1120&&(document.getElementById("hidden-1120-2").style.display="none",document.getElementById("hidden-1120-3").style.display="none",location.reload())}},n.onclick=function(){let e=screen.width,t=(document.getElementById("height-txt").style.height,document.getElementsByClassName("read-more__txt")[0].textContent);"Читать далее"==t?(document.getElementById("height-txt").style.height="auto",document.getElementsByClassName("read-more__txt")[0].textContent="Скрыть"):"Скрыть"==t&&e>768?(document.getElementById("height-txt").style.height="160px",document.getElementsByClassName("read-more__txt")[0].textContent="Читать далее"):"Скрыть"==t&&e<768&&(document.getElementById("height-txt").style.height="81px",document.getElementsByClassName("read-more__txt")[0].textContent="Читать далее")},console.log("Я РАБОТАЮ")},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var d={},c=[],s=0;s<e.length;s++){var y=e[s],i=o.base?y[0]+o.base:y[0],a=d[i]||0,m="".concat(i," ").concat(a);d[i]=a+1;var u=n(m),r={css:y[1],media:y[2],sourceMap:y[3],supports:y[4],layer:y[5]};if(-1!==u)t[u].references++,t[u].updater(r);else{var p=l(r,o);o.byIndex=s,t.splice(s,0,{identifier:m,updater:p,references:1})}c.push(m)}return c}function l(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,l){var d=o(e=e||[],l=l||{});return function(e){e=e||[];for(var c=0;c<d.length;c++){var s=n(d[c]);t[s].references--}for(var y=o(e,l),i=0;i<d.length;i++){var a=n(d[i]);0===t[a].references&&(t[a].updater(),t.splice(a,1))}d=y}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var l=void 0!==n.layer;l&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,l&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,function(){"use strict";var e={};n.r(e);var t={};n.r(t);var o={};n.r(o);var l={};n.r(l);var d={};n.r(d);var c={};n.r(c),n(187),n(264),n(741);var s=n(379),y=n.n(s),i=n(795),a=n.n(i),m=n(569),u=n.n(m),r=n(565),p=n.n(r),g=n(216),E=n.n(g),I=n(589),f=n.n(I),B={};B.styleTagTransform=f(),B.setAttributes=p(),B.insert=u().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=E(),y()(e.default,B),e.default&&e.default.locals&&e.default.locals;var v={};v.styleTagTransform=f(),v.setAttributes=p(),v.insert=u().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=E(),y()(t.default,v),t.default&&t.default.locals&&t.default.locals;var b={};b.styleTagTransform=f(),b.setAttributes=p(),b.insert=u().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=E(),y()(o.default,b),o.default&&o.default.locals&&o.default.locals;var h={};h.styleTagTransform=f(),h.setAttributes=p(),h.insert=u().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=E(),y()(l.default,h),l.default&&l.default.locals&&l.default.locals;var j={};j.styleTagTransform=f(),j.setAttributes=p(),j.insert=u().bind(null,"head"),j.domAPI=a(),j.insertStyleElement=E(),y()(d.default,j),d.default&&d.default.locals&&d.default.locals;var w={};w.styleTagTransform=f(),w.setAttributes=p(),w.insert=u().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=E(),y()(c.default,w),c.default&&c.default.locals&&c.default.locals}()}();