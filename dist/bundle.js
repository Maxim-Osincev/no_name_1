(()=>{"use strict";var e,t,r,o,i,n,a,s,p,c,l,d,u,x,h={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,i,n){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&a[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},738:e=>{e.exports=function(e){return e[1]}},800:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(738),i=r.n(o),n=r(705),a=r.n(n)()(i());a.push([e.id,"@media (max-width: 1280px){.container{padding:0 10px}}@font-face{font-family:'Jost', sans-serif;src:url(\"https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&display=swap\")}*{margin:0;padding:0;box-sizing:border-box;list-style:none;text-decoration:none;font-family:'Jost', sans-serif;color:#0E0C20}* h1,* h2,* h3,* h4,* h5,* h6{font-size:16px;font-weight:400}a{color:#0E0C20}html,body{width:100%;height:100%}.container{max-width:1280px;margin:0 auto}@media (min-width: 767.98px){.container{padding:0 65px;max-width:1330px}}@media (min-width: 1441px){.container{max-width:75%}}.header__wrapper{padding:28px 0 0 0;display:flex;justify-content:space-between;align-items:center;font-weight:600}.header__logo{font-size:36px;text-transform:uppercase;color:#7338F6;letter-spacing:0.2px;line-height:52px;cursor:pointer}.header__button{position:relative;padding:19px 61px;border:1px solid #7338F6;font-size:12px;text-transform:uppercase;background:linear-gradient(268.81deg, #55AEEF -3.14%, #7C46F8 99.49%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;border-image-slice:1;border-radius:8px;cursor:pointer;transition:all 0.3s ease}.header__button:hover{transform:translate(0, -2px);transition:all 0.3s ease;box-shadow:0 2px 5px #7338F6}@media (max-width: 479.98px){.header__logo{font-size:18px}.header__button{position:relative;padding:15px 57px}}@media (max-width: 767.98px){.header__wrapper{padding:27px 15px 0 16px}}.intro__wrapper{display:flex;align-items:center;gap:116px}.intro__left{flex:1 1 50%}.intro__left img{height:100%;width:100%;object-fit:cover}.intro__right{flex:1 1 50%;padding:167px 0}.intro__right-titles{line-height:56px;margin-bottom:40px}.intro__right-title{font-weight:600;font-size:48px}.intro__right-mail{padding:8px 0;max-width:320px;width:100%;border:none;outline:none;border-bottom:1px solid #E7E7E7;margin-bottom:24px;transition:all 0.3s ease;font-size:14px}.intro__right-mail:focus{border-bottom:1px solid #7338F6;transition:all 0.3s ease}.intro__right-mail._err{border-bottom:1px solid red}.intro__right-agreement_wrapper{display:flex;margin-bottom:32px}.intro__right-agreement_input{display:none}.intro__right-agreement_label{position:relative;font-size:14px;line-height:19px;padding-left:30px;cursor:pointer}.intro__right-agreement_label::before{content:'';position:absolute;top:-2px;left:0;height:20px;width:20px;border:1px solid #E7E7E7;border-radius:4px;cursor:pointer}.intro__right-agreement_label::after{content:'';position:absolute;top:2px;left:4px;height:14px;width:14px;background:linear-gradient(180deg, #7C45F8 0%, #746FFA 79.33%, #6D90FB 100%);border-radius:4px;cursor:pointer;transform:scale(0);transition:all 0.3s ease}.intro__right-agreement_input:checked+.intro__right-agreement_label:after{transform:scale(1);transition:all 0.3s ease}.intro__privacy{font-size:14px;line-height:19px;color:#6542F3;text-decoration:underline;font-weight:500;cursor:pointer;margin-left:4px}.intro__right-button{padding:19.5px 55.5px;color:#fff;border:none;font-size:12px;font-weight:600;text-transform:uppercase;background:linear-gradient(180deg, #7C45F8 0%, #746FFA 79.33%, #6D90FB 100%);border-radius:8px;cursor:pointer}.intro__right-button span{opacity:0.5;letter-spacing:0.2px;line-height:17px;color:#fff;transition:all 0.3s ease}.intro__right-button.active{transition:all 0.3s ease}.intro__right-button.active:hover{transform:translate(0, -2px);transition:all 0.3s ease;box-shadow:0 2px 5px #6d90fb}.intro__right-button.active span{opacity:1;transition:all 0.3s ease}@media (max-width: 1024px){.intro__left{display:none}.intro__rihgt{flex:1 1 100%}}@media (max-width: 767.98px){.intro__right-title{font-size:42px}}@media (max-width: 479.98px){.intro__right-title{text-align:center;font-size:36px;line-height:44px}}.cookie{position:fixed;bottom:50px;width:100%;transition:all 0.3s ease;transform:translate(0, 200px)}.cookie.show{transform:translate(0, 0);transition:all 0.3s ease}.cookie__wrapper{max-width:1280px;padding:32px;width:100%;margin:0 auto;display:flex;justify-content:space-between;box-shadow:0px 10px 40px rgba(0,0,0,0.2);border-radius:12px;background:#fff;gap:30px}.cookie__title{font-weight:600;font-size:18px;line-height:24px;margin-bottom:12px}.cookie__text{font-size:14px;line-height:19px}.cookie__text span{color:#7338F6;text-decoration:underline;cursor:pointer}.cookie__right{display:flex;align-items:center;gap:16px}.cookie__reject,.cookie__accept{padding:16px 31.5px;border-radius:8px;cursor:pointer}.cookie__reject{background:#F8F8F9}.cookie__accept{background:linear-gradient(180deg, #7C45F8 0%, #746FFA 79.33%, #6D90FB 100%);color:#fff}@media (max-width: 767.98px){.cookie{bottom:20px}.cookie__wrapper{flex-direction:column;align-items:center;text-align:center;padding:15px;max-width:90%;gap:10px}}\n",""]);const s=a},379:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var n={},a=[],s=0;s<e.length;s++){var p=e[s],c=o.base?p[0]+o.base:p[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=r(d),x={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)t[u].references++,t[u].updater(x);else{var h=i(x,o);o.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var n=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<n.length;a++){var s=r(n[a]);t[s].references--}for(var p=o(e,i),c=0;c<n.length;c++){var l=r(n[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}n=p}}},569:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,i&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var n=r.sourceMap;n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},g={};function f(e){var t=g[e];if(void 0!==t)return t.exports;var r=g[e]={id:e,exports:{}};return h[e](r,r.exports,f),r.exports}f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=f(379),t=f.n(e),r=f(795),o=f.n(r),i=f(569),n=f.n(i),a=f(565),s=f.n(a),p=f(216),c=f.n(p),l=f(589),d=f.n(l),u=f(800),(x={}).styleTagTransform=d(),x.setAttributes=s(),x.insert=n().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=c(),t()(u.Z,x),u.Z&&u.Z.locals&&u.Z.locals,document.addEventListener("click",(e=>{(e.target.closest(".cookie__reject")||e.target.closest(".cookie__accept"))&&document.querySelector(".cookie").classList.remove("show")})),document.addEventListener("DOMContentLoaded",(()=>{setTimeout((async()=>{document.querySelector(".cookie").classList.add("show")}),2e3)})),document.addEventListener("click",(e=>{e.target.closest(".intro__right-agreement_label")&&document.querySelector(".intro__right-button").classList.toggle("active")})),document.addEventListener("click",(e=>{e.target.closest(".intro__right-button")&&(e.preventDefault(),e.target.closest(".intro__right-button.active"))&&(/^[\d\w\.\-]+@[\w\.\-]+\.\w{2,3}$/.test(document.querySelector(".intro__right-mail").value)?(alert("You agree with Privacy Policy!"),document.querySelector(".intro__right-mail").classList.remove("_err"),document.querySelector(".intro__right-mail").value="",document.querySelector(".intro__right-agreement_input").checked=!1):document.querySelector(".intro__right-mail").classList.add("_err"))}))})();