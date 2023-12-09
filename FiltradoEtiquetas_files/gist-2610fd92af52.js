"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["gist"],{91367:(e,t,n)=>{n(57088),n(99874),n(47851);var o=n(68423),i=n(54697),r=n(36071),a=n(59753),l=n(254);function s(e){let t=e.querySelector(".js-gist-files"),n=document.getElementById("js-gist-file-template"),o=n.content.cloneNode(!0);t.appendChild(o);let i=t.lastElementChild;for(let e of i.querySelectorAll("[id]"))"blob-dragged-file-input"!==e.id&&e.removeAttribute("id");let r=i.querySelector(".js-code-textarea");return null!==r&&r.setAttribute("id",`blob_contents_${Date.now()}`),i}function c(e){return(0,i.g)(e.closest(".js-code-editor"))}async function u(e){let t=e.getAttribute("data-language-detection-url");if(!t)return;let n=new URL(t,window.location.origin),o=new URLSearchParams(n.search.slice(1));o.append("filename",e.value),n.search=o.toString();let i=await fetch(n.toString(),{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}});if(!i.ok){let e=Error(),t=i.statusText?` ${i.statusText}`:"";throw e.message=`HTTP ${i.status}${t}`,e}let r=await i.json(),a=await c(e);a.setMode(r.language)}function f(e){let t=e.querySelectorAll(".js-remove-gist-file");for(let e of t)e.classList.toggle("d-none",t.length<2)}(0,l.ZG)(".js-gist-filename",async e=>{let t=e.closest(".js-code-editor");await c(t),(0,o.oq)(e,u),e.addEventListener("blur",()=>(0,o.iU)(e,u),{once:!0})}),(0,a.on)("click",".js-add-gist-file",function(e){e.preventDefault();let t=e.currentTarget.closest(".js-blob-form");s(t).scrollIntoView()}),(0,a.on)("gist:filedrop",".js-blob-form",async function(e){let{file:t,data:n}=e.detail,o=function(e){for(let t of e.querySelectorAll(".js-gist-file")){let e=t.querySelector(".js-gist-filename"),n=t.querySelector(".js-blob-contents");if(!e.value&&!n.value)return t}return s(e)}(e.currentTarget),i=o.querySelector(".js-gist-filename");i.value=t.name,u(i);let r=await c(i);r.setCode(n),o.scrollIntoView()}),(0,a.on)("click",".js-remove-gist-file",function(e){e.preventDefault();let t=e.currentTarget.closest(".js-gist-file");if(!t)return;for(let e of t.querySelectorAll(".js-gist-deleted input"))e.disabled=!1;let n=t.querySelector(".js-code-editor");n||(n=t.querySelector(".js-file")),n.remove()}),(0,r.N7)(".js-remove-gist-file",function(e){let t=e.closest(".js-gist-files");return{add(){f(t)},remove(){f(t)}}});var d=n(4738),m=n(58700),g=n(22490),p=n(7180);let y="gist-no-op",h=g.ZO.createPolicy(y,{createHTML:e=>p.O.apply({policy:()=>e,policyName:y,fallback:e,sanitize:!0})});(0,l.ZG)(".js-quicksearch-field",function(e){(0,d.VF)(e.form.querySelector(".js-quicksearch-results"))}),(0,l.q6)(".js-quicksearch-field",w),(0,a.on)("navigation:keydown",".js-quicksearch-results",function(e){let t=e.target,n=t.closest("form");if("Escape"===e.detail.hotkey){let e=n.querySelector(".js-quicksearch-results");e.classList.remove("active"),(0,d.ZH)(e)}else"Enter"!==e.detail.hotkey||t.classList.contains("js-navigation-item")||((0,m.Bt)(n),e.preventDefault())}),(0,a.on)("submit",".js-quicksearch-form",function(e){let t=e.currentTarget.querySelector(".js-quicksearch-results");t&&(t.classList.remove("active"),(0,d.Sw)(t))}),(0,a.on)("focusout:delay",".js-quicksearch-field",function(e){let t=e.currentTarget.closest("form"),n=t.querySelector(".js-quicksearch-results");n&&(n.classList.remove("active"),(0,d.Sw)(n))});let v=null;async function w(e){let t=e.target,n=t.value.replace(/^\s+|\s+$/g,""),o=t.closest("form"),i=o.querySelector(".js-quicksearch-results"),r=i.getAttribute("data-quicksearch-url"),a="";v?.abort();let{signal:l}=v=new AbortController;if(n.length){let e=new URL(r,window.location.origin),t=new URLSearchParams(e.search.slice(1));t.append("q",n),e.search=t.toString(),o.classList.add("is-sending");try{let t=await fetch(e.toString(),{signal:l,headers:{"X-Requested-With":"XMLHttpRequest"}});t.ok&&(a=await t.text())}catch{}}l.aborted||(a&&(i.innerHTML=h.createHTML(a)),i.classList.toggle("active",""!==n),o.classList.remove("is-sending"))}(0,n(65935).AC)(".js-gist-file-update-container .js-comment-update",async function(e,t){let n;try{n=await t.json()}catch(e){return}if(e.action=n.json.url,n.json.authenticity_token){let t=e.querySelector("input[name=authenticity_token]");t.value=n.json.authenticity_token}}),(0,r.N7)(".js-gist-comment-permalink",function(e){let t=e.getAttribute("data-href");e.textContent=`${window.location.origin}${t}`}),(0,r.N7)(".js-gist-dropzone",()=>{n.e("app_assets_modules_github_gist_drag-drop_ts").then(n.bind(n,36928))})},81574:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(4412),i=n(68202);let r=[],a=0;function l(e){!async function(){r.push(e),await o.x,function(){let e=a;a=r.length,s(r.slice(e),null,window.location.href)}()}()}function s(e,t,n){let o=window.location.hash.slice(1),i=o?document.getElementById(o):null,r={oldURL:t,newURL:n,target:i};for(let t of e)t.call(null,r)}l.clear=()=>{r.length=a=0};let c=window.location.href;window.addEventListener("popstate",function(){c=window.location.href}),window.addEventListener("hashchange",function(e){let t=window.location.href;try{s(r,e.oldURL||c,t)}finally{c=t}});let u=null;document.addEventListener(i.QE.START,function(){u=window.location.href}),document.addEventListener(i.QE.SUCCESS,function(){s(r,u,window.location.href)})},54697:(e,t,n)=>{n.d(t,{P:()=>r,g:()=>a});var o=n(59753);let i=new WeakMap;function r(e){return i.get(e)}async function a(e){return i.get(e)||l(await new Promise(t=>{e.addEventListener("codeEditor:ready",t,{once:!0})}))}function l(e){if(!(e instanceof CustomEvent))throw Error("assert: event is not a CustomEvent");let t=e.detail.editor;if(!e.target)throw Error("assert: event.target is null");return i.set(e.target,t),t}(0,o.on)("codeEditor:ready",".js-code-editor",l)},87098:(e,t,n)=>{function o(e,t=location.hash){return i(e,r(t))}function i(e,t){return""===t?null:e.getElementById(t)||e.getElementsByName(t)[0]}function r(e){try{return decodeURIComponent(e.slice(1))}catch{return""}}n.d(t,{$z:()=>r,Kt:()=>o,Q:()=>i})},4738:(e,t,n)=>{n.d(t,{QZ:()=>b,ZH:()=>k,jK:()=>T,T_:()=>S,Sw:()=>j,VF:()=>_,VH:()=>q});var o=n(56959),i=n(59753),r=n(98105),a=n(67044),l=n(76134),s=n(36071);function c(e,t){let n=e,o=e.ownerDocument;(n===o||n===o.defaultView||n===o.documentElement||n===o.body)&&(n=o);let i=o.defaultView.Document;if(n instanceof i){let e=null!=t.top?t.top:o.defaultView.pageYOffset,n=null!=t.left?t.left:o.defaultView.pageXOffset;o.defaultView.scrollTo(n,e);return}let r=o.defaultView.HTMLElement;if(!(n instanceof r))throw Error("invariant");n.scrollTop=t.top,null!=t.left&&(n.scrollLeft=t.left)}var u=n(97629);let f=navigator.userAgent.match(/Macintosh/),d=f?"metaKey":"ctrlKey",m=f?"Meta":"Control",g=!1,p={x:0,y:0};function y(e){e instanceof MouseEvent&&((p.x!==e.clientX||p.y!==e.clientY)&&(g=!1),p={x:e.clientX,y:e.clientY})}function h(e){if(g)return;let t=e.currentTarget,{target:n}=e;if(!(n instanceof Element)||!(t instanceof HTMLElement)||!t.closest(".js-active-navigation-container"))return;let o=n.closest(".js-navigation-item");o&&O(o,t)}(0,s.N7)(".js-navigation-container:not(.js-navigation-container-no-mouse)",{subscribe:e=>(0,o.qC)((0,o.RB)(e,"mouseover",y),(0,o.RB)(e,"mouseover",h))});let v=0;function w(e){if(e.target!==document.body&&e.target instanceof HTMLElement&&!e.target.classList.contains("js-navigation-enable"))return;g=!0;let t=R(),n=!1;if(t){let o=t.querySelector(".js-navigation-item.navigation-focus")||t;n=(0,i.f)(o,"navigation:keydown",{hotkey:(0,a.EL)(e),originalEvent:e,originalTarget:e.target})}n||e.preventDefault()}function E(e){let t=e.modifierKey||e.altKey||e.ctrlKey||e.metaKey,n=(0,i.f)(e.currentTarget,"navigation:open",{modifierKey:t,shiftKey:e.shiftKey});n||e.preventDefault()}function b(e){let t=R();e!==t&&(null!==t&&T(t),e?.classList.add("js-active-navigation-container"))}function T(e){e.classList.remove("js-active-navigation-container")}(0,s.N7)(".js-active-navigation-container",{add(){1==++v&&document.addEventListener("keydown",w)},remove(){0==--v&&document.removeEventListener("keydown",w)}}),(0,i.on)("navigation:keydown",".js-active-navigation-container",function(e){let t=e.currentTarget,n=e.detail.originalTarget.matches("input, textarea"),o=e.target;if((0,l.Zf)(e.detail.originalEvent)){if(o.classList.contains("js-navigation-item")){if(n){if(f)switch((0,a.EL)(e.detail.originalEvent)){case"Control+n":A(o,t);break;case"Control+p":C(o,t)}switch((0,a.EL)(e.detail.originalEvent)){case"ArrowUp":C(o,t);break;case"ArrowDown":A(o,t);break;case"Enter":case`${m}+Enter`:M(o,e.detail.originalEvent[d])}}else{if(f)switch((0,a.EL)(e.detail.originalEvent)){case"Control+n":A(o,t);break;case"Control+p":C(o,t);break;case"Alt+v":(function(e,t){let n,o;let i=H(t),a=i.indexOf(e),l=(0,r.VZ)(e);if(null!=l){for(;(n=i[a-1])&&(o=(0,r._C)(n,l))&&o.top>=0;)a--;if(n){let e=O(n,t);if(e)return;x(l,n)}}})(o,t);break;case"Control+v":(function(e,t){let n,o;let i=H(t),a=i.indexOf(e),l=(0,r.VZ)(e);if(null!=l){for(;(n=i[a+1])&&(o=(0,r._C)(n,l))&&o.bottom>=0;)a++;if(n){let e=O(n,t);if(e)return;x(l,n)}}})(o,t)}switch((0,a.EL)(e.detail.originalEvent)){case"j":case"J":A(o,t);break;case"k":case"K":C(o,t);break;case"o":case"Enter":case`${m}+Enter`:M(o,e.detail[d])}}}else{let o=H(t)[0];if(o){if(n)f&&"Control+n"===(0,a.EL)(e.detail.originalEvent)&&O(o,t),"ArrowDown"===(0,a.EL)(e.detail.originalEvent)&&O(o,t);else{if(f)switch((0,a.EL)(e.detail.originalEvent)){case"Control+n":case"Control+v":O(o,t)}"j"===(0,a.EL)(e.detail.originalEvent)&&O(o,t)}}}if(n){if(f)switch((0,a.EL)(e.detail.originalEvent)){case"Control+n":case"Control+p":e.preventDefault()}switch((0,a.EL)(e.detail.originalEvent)){case"ArrowUp":case"ArrowDown":case"Enter":e.preventDefault()}}else{if(f)switch((0,a.EL)(e.detail.originalEvent)){case"Control+n":case"Control+p":case"Control+v":case"Alt+v":e.preventDefault()}switch((0,a.EL)(e.detail.originalEvent)){case"j":case"k":case"o":case"Enter":case`${d}+Enter`:e.preventDefault()}}}}),(0,i.on)("click",".js-active-navigation-container .js-navigation-item",function(e){E(e)}),(0,i.on)("navigation:keyopen",".js-active-navigation-container .js-navigation-item",function(e){let t=e.currentTarget.classList.contains("js-navigation-open")?e.currentTarget:e.currentTarget.querySelector(".js-navigation-open");if(t instanceof HTMLAnchorElement){if(e.detail.modifierKey)window.open(t.href,"_blank"),window.focus();else{let e=t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0}));e&&t.click()}e.preventDefault()}else E(e)});let L=[];function _(e){let t=R();t&&L.push(t),b(e)}function j(e){T(e),k(e);let t=L.pop();t&&b(t)}function S(e,t){let n=t||e,o=H(e)[0],i=n.closest(".js-navigation-item")||o;if(b(e),i instanceof HTMLElement){let t=O(i,e);if(t)return;let n=(0,r.VZ)(i);D(n,i)}}function k(e){let t=e.querySelectorAll(".js-navigation-item.navigation-focus");for(let e of t)e.classList.remove("navigation-focus")}function q(e,t){k(e),S(e,t)}function C(e,t){let n=H(t),o=n.indexOf(e),i=n[o-1];if(i){let e=O(i,t);if(e)return;let n=(0,r.VZ)(i);"page"===P(t)?x(n,i):D(n,i)}}function A(e,t){let n=H(t),o=n.indexOf(e),i=n[o+1];if(i){let e=O(i,t);if(e)return;let n=(0,r.VZ)(i);"page"===P(t)?x(n,i):D(n,i)}}function M(e,t=!1){(0,i.f)(e,"navigation:keyopen",{modifierKey:t})}function O(e,t){return!(0,i.f)(e,"navigation:focus")||(k(t),e.classList.add("navigation-focus"),!1)}function R(){return document.querySelector(".js-active-navigation-container")}function H(e){let t=[];for(let n of e.querySelectorAll(".js-navigation-item"))n instanceof HTMLElement&&(0,u.Z)(n)&&t.push(n);return t}function P(e){return e.getAttribute("data-navigation-scroll")||"item"}function x(e,t,n="smooth"){let o=(0,r._C)(t,e);o&&(o.bottom<=0?t.scrollIntoView({behavior:n,block:"start"}):o.top<=0&&t.scrollIntoView({behavior:n,block:"end"}))}function D(e,t){let n=(0,r.oE)(t,e),o=(0,r._C)(t,e);if(null!=n&&null!=o){if(o.bottom<=0&&document.body){let t=null!=e.offsetParent?e.scrollHeight:document.body.scrollHeight,i=t-(n.bottom+o.height);c(e,{top:i})}else o.top<=0&&c(e,{top:n.top})}}},68423:(e,t,n)=>{n.d(t,{dY:()=>u,iU:()=>c,oq:()=>s});let o=new WeakMap;function i(e){let t=o.get(e);t&&(null!=t.timer&&clearTimeout(t.timer),t.timer=window.setTimeout(()=>{null!=t.timer&&(t.timer=null),t.inputed=!1,t.listener.call(null,e)},t.wait))}function r(e){let t=e.currentTarget,n=o.get(t);n&&(n.keypressed=!0,null!=n.timer&&clearTimeout(n.timer))}function a(e){let t=e.currentTarget,n=o.get(t);n&&(n.keypressed=!1,n.inputed&&i(t))}function l(e){let t=e.currentTarget,n=o.get(t);n&&(n.inputed=!0,n.keypressed||i(t))}function s(e,t,n={wait:null}){o.set(e,{keypressed:!1,inputed:!1,timer:void 0,listener:t,wait:null!=n.wait?n.wait:100}),e.addEventListener("keydown",r),e.addEventListener("keyup",a),e.addEventListener("input",l)}function c(e,t){e.removeEventListener("keydown",r),e.removeEventListener("keyup",a),e.removeEventListener("input",l);let n=o.get(e);n&&(null!=n.timer&&n.listener===t&&clearTimeout(n.timer),o.delete(e))}function u(e){let t=o.get(e);t&&t.listener.call(null,e)}},89359:(e,t,n)=>{function o(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function i(){return`${window.location.protocol}//${window.location.host}${function(){let e=o("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=o("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=o("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`}n.d(t,{S:()=>i})},24601:(e,t,n)=>{n.d(t,{aJ:()=>T,cI:()=>E,eK:()=>y});var o=n(82918),i=n(49237),r=n(28382),a=n(89359),l=n(68202),s=n(53729),c=n(86283),u=n(46426);let f=!1,d=0,m=Date.now(),g=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function p(e){return!!("AbortError"===e.name||"TypeError"===e.name&&g.has(e.message)||e.name.startsWith("ApiError")&&g.has(e.message))}function y(e,t={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(_.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),o=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e),i={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${o}`,stacktrace:E(n)};h(w(i,t));return}p(e)||h(w(v(e),t))}else p(e)||h(w(v(e),t))}async function h(e){if(!(!L&&!f&&d<10&&(0,i.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>b.test(e.filename)||b.test(e.function))){f=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function v(e){return{type:e.name,value:e.message,stacktrace:E(e)}}function w(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.S)()||window.location.href,readyState:document.readyState,referrer:(0,l.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:T()||void 0,bundler:s.A7,ui:!!document.querySelector('meta[name="ui"]')},t)}function E(e){return(0,r.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let b=/(chrome|moz|safari)-extension:\/\//;function T(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,o.b)();return`anonymous-${t}`}let L=!1;if(c.iG?.addEventListener("pageshow",()=>L=!1),c.iG?.addEventListener("pagehide",()=>L=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{y(e.data.error)})}let _=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},58700:(e,t,n)=>{n.d(t,{Bt:()=>r,DN:()=>l,KL:()=>u,Se:()=>a,qC:()=>f,sw:()=>s});var o=n(5582);function i(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function r(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,o.j)(t)),i(e,"submit",!0)&&e.submit()}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}i(e,"change",!1)}function l(e,t){for(let n in t){let o=t[n],i=e.elements.namedItem(n);i instanceof HTMLInputElement?i.value=o:i instanceof HTMLTextAreaElement&&(i.value=o)}}function s(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function c(e){return new URLSearchParams(e)}function u(e,t){let n=new URLSearchParams(e.search),o=c(t);for(let[e,t]of o)n.append(e,t);return n.toString()}function f(e){return c(new FormData(e)).toString()}},5582:(e,t,n)=>{function o(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=i(t);if(e.name){let o=e.matches("input[type=submit]")?"Submit":"",i=e.value||o;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=i}else n&&n.remove()}function i(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>o,u:()=>i})},76134:(e,t,n)=>{n.d(t,{Ty:()=>r,YE:()=>a,Zf:()=>s});var o=n(46426),i=n(67044);let r=()=>{let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},a=e=>/Enter|Arrow|Escape|Meta|Control|Esc/.test(e)||e.includes("Alt")&&e.includes("Shift"),l=new Set(["button","checkbox","color","file","hidden","image","radio","range","reset","submit"]),s=e=>{let t=(0,i.EL)(e),n=function(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=e.getAttribute("type")?.toLowerCase()??"text",o="true"===e.ariaReadOnly||"true"===e.getAttribute("aria-readonly")||null!==e.getAttribute("readonly");return("select"===t||"textarea"===t||"input"===t&&!l.has(n)||e.isContentEditable)&&!o}(e.target)&&(0,o.c)("no_character_key_shortcuts_in_inputs"),s=r()&&!n;return a(t)||s}},95253:(e,t,n)=>{let o;n.d(t,{YT:()=>d,qP:()=>m,yM:()=>g});var i=n(88149),r=n(86058),a=n(44544),l=n(71643);let{getItem:s}=(0,a.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,i.n)("octolytics");delete e.baseContext,o=new r.R(e)}catch(e){}function f(e){let t=(0,i.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");if(n){let e=JSON.parse(atob(n.content));Object.assign(t,e)}let o=new URLSearchParams(window.location.search);for(let[e,n]of o)u.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,l.B)().toString(),Object.assign(t,e)}function d(e){o?.sendPageView(f(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,i=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(i[e]=`${n}`);if(o){let t=e||"unknown";f(i),o.sendEvent(t,f(i))}}function g(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},7180:(e,t,n)=>{n.d(t,{O:()=>c,d:()=>TrustedTypesPolicyError});var o=n(46426),i=n(71643),r=n(24601),a=n(27856),l=n.n(a),s=n(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:a=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,o.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let r=e();return c&&new Promise(e=>{let n=window.performance.now(),o=l().sanitize(r,{FORBID_ATTR:[]}),i=window.performance.now();if(r.length!==o.length){let a=Error("Trusted Types policy output sanitized"),l=a.stack?.slice(0,1e3),c=r.slice(0,250);(0,s.qP)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:l,outputLength:r.length,sanitizedLength:o.length,executionTime:i-n}),e(r)}}),r}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,r.eK)(e),(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return n}}},22490:(e,t,n)=>{n.d(t,{ZO:()=>c});var o=n(86283),i=n(71643);function r(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let a={createHTML:r("createHTML"),createScript:r("createScript"),createScriptURL:r("createScriptURL")},l=new Map,s=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...a,...t})},c={createPolicy:(e,t)=>{if(l.has(e))return(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let n=s.createPolicy(e,t);return l.set(e,n),n}}},u=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||u||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),u=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_github_remo-956327","ui_packages_soft-nav_soft-nav_ts","app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-6932d4"],()=>t(91367)),e.O()}]);
//# sourceMappingURL=gist-dbb088cdcad1.js.map