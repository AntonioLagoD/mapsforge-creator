"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-6932d4"],{56334:(e,t,n)=>{function i(e){let t=e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(t){if(1===t.length){let e=o(t[0]);if(!e)return;return Object.freeze({start:e,end:e})}if(2!==t.length)return;{let e=o(t[0]),n=o(t[1]);if(!e||!n)return;return d(Object.freeze({start:e,end:n}))}}}function l(e){let{start:t,end:n}=d(e);return null!=t.column&&null!=n.column?`L${t.line}C${t.column}-L${n.line}C${n.column}`:null!=t.column?`L${t.line}C${t.column}-L${n.line}`:null!=n.column?`L${t.line}-L${n.line}C${n.column}`:t.line===n.line?`L${t.line}`:`L${t.line}-L${n.line}`}function s(e){let t=i(e),n=function(e){let t=e.length<5e3&&e.match(/(file-.+?-)L\d+?/i);return t?t[1]:""}(e);return{blobRange:t,anchorPrefix:n}}function r({anchorPrefix:e,blobRange:t}){return t?`#${e}${l(t)}`:"#"}function o(e){let t=e.match(/L(\d+)/),n=e.match(/C(\d+)/);return t?Object.freeze({line:parseInt(t[1]),column:n?parseInt(n[1]):null}):null}function c(e,t){let[n,i]=a(e.start,!0,t),[l,s]=a(e.end,!1,t);if(!n||!l)return;let r=i,o=s;if(-1===r&&(r=0),-1===o&&(o=l.childNodes.length),!n.ownerDocument)throw Error("DOMRange needs to be inside document");let c=n.ownerDocument.createRange();return c.setStart(n,r),c.setEnd(l,o),c}function a(e,t,n){let i=[null,0],l=n(e.line);if(!l)return i;if(null==e.column)return[l,-1];let s=e.column-1,r=function e(t){if(t.nodeType===Node.TEXT_NODE)return[t];if(!t.childNodes||!t.childNodes.length)return[];let n=[];for(let i of t.childNodes)n=n.concat(e(i));return n}(l);for(let e=0;e<r.length;e++){let n=r[e],i=s-(n.textContent||"").length;if(0===i){let i=r[e+1];if(t&&i)return[i,0];return[n,s]}if(i<0)return[n,s];s=i}return i}function d(e){let t=[e.start,e.end];return(t.sort(u),t[0]===e.start&&t[1]===e.end)?e:Object.freeze({start:t[0],end:t[1]})}function u(e,t){return e.line===t.line&&e.column===t.column?0:e.line===t.line&&"number"==typeof e.column&&"number"==typeof t.column?e.column-t.column:e.line-t.line}n.d(t,{Dw:()=>r,G5:()=>i,M9:()=>c,g1:()=>l,n6:()=>s})},57088:(e,t,n)=>{var i=n(56334),l=n(76745),s=n(69567),r=n(81574),o=n(36071),c=n(59753),a=n(95253),d=n(11445);let u=!1;function f(e,t){return document.querySelector(`#${e}LC${t}`)}function h(){let e=(0,i.n6)(window.location.hash);!function({blobRange:e,anchorPrefix:t}){let n=document.querySelectorAll(".js-file-line");if(0!==n.length&&(function(){for(let e of document.querySelectorAll(".js-file-line.highlighted"))e.classList.remove("highlighted");for(let e of document.querySelectorAll(".js-file-line .highlighted")){let t=e.closest(".js-file-line");e.replaceWith(...e.childNodes),t.normalize()}}(),e)){if(null===e.start.column||null===e.end.column)for(let n=e.start.line;n<=e.end.line;n+=1){let e=f(t,n);e&&e.classList.add("highlighted")}else if(e.start.line===e.end.line&&null!=e.start.column&&null!=e.end.column){let n=(0,i.M9)(e,e=>f(t,e));if(n){let e=document.createElement("span");e.classList.add("highlighted"),(0,d.v)(n,e)}}}}(e),function(){let e=document.querySelector(".js-file-line-actions");if(!e)return;let t=document.querySelectorAll(".js-file-line.highlighted"),n=t[0];if(n){(function(e){let t=[];for(let n of e)t.push(n.textContent);let n=document.getElementById("js-copy-lines");if(n instanceof l.Z){n.textContent=`Copy ${1===e.length?"line":"lines"}`,n.value=t.join("\n");let i=`Blob, copyLines, numLines:${e.length.toString()}`;n.setAttribute("data-ga-click",i)}})(t),function(e){let t=document.getElementById("js-view-git-blame");t&&t.setAttribute("data-ga-click",`Blob, viewGitBlame, numLines:${e.toString()}`)}(t.length);let i=function(e){let t=document.querySelector(".js-permalink-shortcut");if(t instanceof HTMLAnchorElement){let n=`${t.href}${window.location.hash}`,i=document.getElementById("js-copy-permalink");if(i instanceof l.Z){i.value=n;let t=`Blob, copyPermalink, numLines:${e.toString()}`;i.setAttribute("data-ga-click",t)}return n}}(t.length);i&&function(e,t){let n=document.getElementById("js-new-issue");if(n instanceof HTMLAnchorElement){if(!n.href)return;let i=new URL(n.href,window.location.origin),l=new URLSearchParams(i.search);l.set("permalink",e),i.search=l.toString(),n.href=i.toString(),n.setAttribute("data-ga-click",`Blob, newIssue, numLines:${t.toString()}`)}}(i,t.length),i&&function(e,t){let n=document.getElementById("js-new-discussion");if(!(n instanceof HTMLAnchorElement)||!n?.href)return;let i=new URL(n.href,window.location.origin),l=new URLSearchParams(i.search);l.set("permalink",e),i.search=l.toString(),n.href=i.toString(),n.setAttribute("data-ga-click",`Blob, newDiscussion, numLines:${t.toString()}`)}(i,t.length),e.style.top=`${n.offsetTop-2}px`,e.classList.remove("d-none")}else e.classList.add("d-none")}();let{blobRange:t,anchorPrefix:n}=e,s=t&&f(n,t.start.line);if(!u&&s){s.scrollIntoView();let e=s.closest(".blob-wrapper, .js-blob-wrapper");e.scrollLeft=0}u=!1}(0,r.Z)(function(){if(document.querySelector(".js-file-line-container")){setTimeout(h,0);let e=window.location.hash;for(let t of document.querySelectorAll(".js-update-url-with-hash"))if(t instanceof HTMLAnchorElement)t.hash=e;else if(t instanceof HTMLFormElement){let n=new URL(t.action,window.location.origin);n.hash=e,t.action=n.toString()}}}),(0,c.on)("click",".js-line-number",function(e){let t=(0,i.n6)(e.currentTarget.id),{blobRange:n}=t,l=(0,i.G5)(window.location.hash);l&&e.shiftKey&&(t.blobRange={start:l.start,end:n.end}),function(e){let t=window.scrollY;u=!0,e(),window.scrollTo(0,t)}(()=>{window.location.hash=(0,i.Dw)(t)})}),(0,c.on)("submit",".js-jump-to-line-form",function(e){let t=e.currentTarget.querySelector(".js-jump-to-line-field"),n=t.value.replace(/[^\d-]/g,""),i=n.split("-").map(e=>parseInt(e,10)).filter(e=>e>0).sort((e,t)=>e-t);i.length&&(window.location.hash=`L${i.join("-L")}`),e.preventDefault()}),(0,o.N7)(".js-check-bidi",function(e){let t=!1,n=performance.now(),i=e.textContent||"";if(m.test(i)){let n=e.querySelectorAll(".diff-table .blob-code-inner, .js-file-line-container .js-file-line, .js-suggested-changes-blob .blob-code-inner"),i=document.querySelector(".js-line-alert-template"),l=document.querySelector(".js-revealed-character-template");for(let r of n)if(function e(t,n){if(t.nodeType===Node.TEXT_NODE)return function(e,t){let n=!1;if(e.nodeValue)for(let i=e.nodeValue.length-1;i>=0;i--){let l=e.nodeValue.charAt(i);if(b[l]){if(n=!0,!t)break;let r=new s.R(t,{revealedCharacter:b[l]}),o=new Range;o.setStart(e,i),o.setEnd(e,i+1),o.deleteContents(),o.insertNode(r)}}return n}(t,n);if(!t.childNodes||!t.childNodes.length)return!1;let i=!1;for(let l of t.childNodes)if(i||(i=e(l,n)),i&&!n)break;return i}(r,l)&&(t=!0,i)){let t=new s.R(i,{});"before"===e.getAttribute("data-line-alert")?r.before(t):r.after(t)}}let l=performance.now()-n,r={durationMs:l.toString(),result:t.toString()};if((0,a.qP)("blob_js_check_bidi_character",r),t){let t=document.querySelector(".js-file-alert-template");if(t){let n=new URL(window.location.href,window.location.origin);"1"===n.searchParams.get("h")?n.searchParams.delete("h"):n.searchParams.set("h","1");let i=new s.R(t,{revealButtonHref:n.href});e.prepend(i)}}e.classList.remove("js-check-bidi")});let m=/[\u202A-\u202E]|[\u2066-\u2069]/,b={"\u202A":"U+202A","\u202B":"U+202B","\u202C":"U+202C","\u202D":"U+202D","\u202E":"U+202E","\u2066":"U+2066","\u2067":"U+2067","\u2068":"U+2068","\u2069":"U+2069"},g=class CodeListingLine{range(e,t){e=isNaN(e)?0:e,t=isNaN(t)?0:t;let n=null,i=0,l=0;for(let[s,r]of this.lineElement.childNodes.entries()){let o=(r.textContent||"").length;if(o>e&&!n&&(n=r,i=s),o>=t){l=s;break}e-=o,t-=o}let s=document.createRange();if(i===l){for(;n&&"#text"!==n.nodeName;)n=n.childNodes[0];if(!n)return null;s.setStart(n,e),s.setEnd(n,t)}else s.setStart(this.lineElement,i),s.setEnd(this.lineElement,l+1);return s}constructor(e,t){this.lineElement=e,this.numberElement=t}},p=class CodeListing{findLine(e){if(!e)return null;let t=this.container.querySelector(`.js-blob-rnum[data-line-number='${e}']`);if(!t)return null;let n=t.nextElementSibling;return n&&n.classList.contains("js-file-line")?new g(n=n.querySelector(".js-code-nav-pass")||n,t):null}constructor(e){this.container=e}},L=new WeakMap;function w(e){if(!e)return;let t=e.closest(".js-blob-code-container, .js-file-content"),n=e.querySelector(".js-codeowners-error-tooltip-template"),i=e.querySelector(".js-codeowners-error-line-alert-template");if(!t||!n||!i)return;let l=t.querySelector("deferred-diff-lines");if(l?.isAwaitingHighlight())return;let r=e.querySelectorAll(".js-codeowners-error"),o=new p(t);for(let e of r){if(L.get(e))continue;let t=e.getAttribute("data-line"),l=e.getAttribute("data-kind"),r=e.getAttribute("data-suggestion"),c=parseInt(e.getAttribute("data-start-offset")||"",10),a=parseInt(e.getAttribute("data-end-offset")||"",10),d=o.findLine(t),u=d?.range(c,a);if(!d||!u)continue;let f=l;r&&(f+=`: ${r}`);let h=document.createElement("SPAN");h.className="error-highlight",u.surroundContents(h);let m=new s.R(n,{message:f}).firstElementChild;u.surroundContents(m);let b=new s.R(i,{});d.numberElement.appendChild(b),L.set(e,!0)}}(0,o.N7)(".js-codeowners-errors",w),(0,c.on)("expander:expanded",".js-file",function(e){if(!e.target||!(e.target instanceof HTMLElement))return;let t=e.target.querySelector(".js-codeowners-errors");w(t)}),(0,c.on)("deferred-highlight:applied","deferred-diff-lines",function(e){if(!e.target||!(e.target instanceof HTMLElement))return;let t=e.target.closest(".js-file"),n=t?.querySelector(".js-codeowners-errors");w(n)})},37574:(e,t,n)=>{n.d(t,{s:()=>i});function i(e){let t=e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);if(null!=t&&6===t.length)return t;let n=e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);return null!=n&&6===n.length?n:null}},47851:(e,t,n)=>{n.d(t,{MO:()=>w,vu:()=>b,Oz:()=>p});var i=n(87098);let l=class DiffPosition{sideForCommenting(){return this.element&&this.element.classList.contains("blob-num-context")?"right":({R:"right",L:"left"})[this.side]}isContext(){return!!this.element&&this.element.classList.contains("blob-num-context")}anchor(){return`${this.diffId}${this.anchorSuffix()}`}anchorSuffix(){return`${this.side}${this.lineNumber}`}is(e){return this.diffId===e.diffId&&this.side===e.side&&this.lineNumber===e.lineNumber}constructor(e,t,n){this.diffId=e,this.side=t,this.lineNumber=n,this.element=(0,i.Q)(document,this.anchor())}};let DiffRange=class DiffRange{anchor(){let e=[];return e.push(this.start.anchor()),this.start.is(this.end)||e.push(this.end.anchorSuffix()),e.join("-")}parse(){if(!this.diffTable)return;let e=this.unify(this.diffTable.querySelectorAll(".js-linkable-line-number"));e=this.filterInRange(e),this.lineCount=e.length,this.elements=this.expandRelatedElements(e),this._commentOutsideTheDiff=this.diffTable.classList.contains("js-comment-outside-the-diff"),this.isParsed=!0}unify(e){if(!this.isSplit)return Array.from(e);let t=[],n=[],i=[];for(let l of e)l.classList.contains("blob-num-addition")?n.push(l):l.classList.contains("blob-num-deletion")?i.push(l):(t.push(...i,...n,l),n=[],i=[]);return t.push(...i,...n),t}filterInRange(e){if(!this.start.element||!this.end.element)return[];let t=e.indexOf(this.start.element),n=e.indexOf(this.end.element);if(t>n){[t,n]=[n,t];let[e,i]=[this.end,this.start];this.start=e,this.end=i}return e.slice(t,n+1)}isContextOnly(){return this.isParsed||this.parse(),this._isContextOnly}isAcrossHunks(){return this.isParsed||this.parse(),this._isAcrossHunks}includesExpandedLine(){return this.isParsed||this.parse(),this._includesExpandedLine}commentOutsideTheDiffEnabled(){return this.isParsed||this.parse(),this._commentOutsideTheDiff}rows(){return this.isParsed||this.parse(),this._rows}expandRelatedElements(e){let t=this.isSplit,n=e[0],i=e[e.length-1];if(n&&i){let e=n.closest("[data-hunk]"),t=i.closest("[data-hunk]");if(e&&t){let n=e.getAttribute("data-hunk"),i=t.getAttribute("data-hunk");n!==i&&(this._isAcrossHunks=!0)}}return e.reduce((e,n)=>{!this._includesExpandedLine&&n.closest(".blob-expanded")&&(this._includesExpandedLine=!0);let i=n.parentElement;i instanceof HTMLElement&&this._rows.add(i);let l=n.classList.contains("blob-num-deletion")||n.classList.contains("blob-num-addition");if(l&&(this._isContextOnly=!1),!i)return e;if(t&&l){let t=Array.from(i.children).indexOf(n);return t<2?e.add(i.children[0]).add(i.children[1]):e.add(i.children[2]).add(i.children[3])}for(let t of Array.from(i.children))e.add(t);return e},new Set)}constructor(e,t,n,i,s){this.elements=new Set,this.isParsed=!1,this.isSplit=!1,this._rows=new Set,this._isAcrossHunks=!1,this._isContextOnly=!0,this._includesExpandedLine=!1,this._commentOutsideTheDiff=!1,this.diffId=e,this.diffTable=document.querySelector(`.js-diff-table[data-diff-anchor="${e}"]`),this.diffTable&&(this.isSplit=this.diffTable.classList.contains("js-file-diff-split")),this.start=new l(e,t,n),this.end=new l(e,i,s),this.lineCount=0,this.parse()}};var s=n(81574),r=n(37574),o=n(36071),c=n(59753),a=n(29764),d=n(28008);let u=null,f=null,h=!1,m=null;function b(){return u}function g(e){return!!e.closest(".js-multi-line-comments-enabled")}function p(e,t){if(!g(e))return!1;let{start:{lineNumber:n},end:{lineNumber:i}}=t;return!(n===i&&t.isContextOnly()||!t.commentOutsideTheDiffEnabled()&&(t.isAcrossHunks()||t.includesExpandedLine()))}function L(e){return e.closest(".js-diff-table").classList.contains("is-selecting")}function w(){window.history.replaceState(null,"","#"),A(),(0,d.OP)(void 0)}function E(e,t){let n=e.id;if(t){let t=(0,r.s)(n);if(!t)return;let i=t[1],l=t[2],s=t[3];if(u&&u.diffId===i){if(l===u.start.side&&s<u.start.lineNumber)return;let t=new DiffRange(i,u.start.side,u.start.lineNumber,l,+s);n=t.anchor();let r=e.closest(".js-file-content[data-hydro-view]");if(r instanceof HTMLElement&&function(e,t){let n={starting_diff_position:t.start.side+t.start.lineNumber,ending_diff_position:t.end.side+t.end.lineNumber,line_count:t.lineCount};e.setAttribute("data-hydro-client-context",JSON.stringify(n)),(0,a.Fk)(e)}(r,t),h&&L(e)){let n=e.closest(".js-diff-table");n.classList.toggle("is-commenting",p(e,t))}f=function(){if(p(e,t)){let n=t.end.sideForCommenting(),i=`.js-add-line-comment[data-side="${n}"]`,l=e.closest("tr").querySelector(i);l&&t&&l.click()}}}}if(window.history.replaceState(null,"",`#${n}`),A(),u){let e=u.start.anchorSuffix(),t=u.end.anchorSuffix();(0,d.OP)({diffId:u.diffId,start:e,end:e!==t?t:void 0})}}function v(e){if(!(e instanceof HTMLElement))return null;if(e.classList.contains("js-linkable-line-number"))return e;let t=e.previousElementSibling;return t?v(t):null}function j(e){!u||e.target.closest(".js-diff-table")||w()}function y(e){let t=e.target;if(!(t instanceof Element))return;m&&function(){if(!m)return;E(m,!1);let e=m.closest(".js-diff-table");m=null,e.classList.add("is-selecting"),e.classList.add("is-commenting"),document.addEventListener("mouseup",function(t){e.classList.remove("is-selecting"),e.classList.remove("is-selecting","is-commenting"),f&&f(),f=null,k(e),t.preventDefault()},{once:!0})}();let n=t.closest(".blob-code, .js-linkable-line-number");if(n){if(n.classList.contains("blob-code"))return function(e){let t=v(e);t&&L(t)&&E(t,!0)}(n);n.classList.contains("js-linkable-line-number")&&L(n)&&E(n,!0)}}function S(e){e.addEventListener("mouseenter",y,{capture:!0})}function k(e){h=!1,e.removeEventListener("mouseenter",y,{capture:!0}),setTimeout(()=>{document.addEventListener("click",j,{once:!0})},0)}function A(){if(u){for(let e of u.elements)e.classList.remove("selected-line","selected-line-top","selected-line-bottom","selected-line-left","selected-line-right");u=null}let e=(0,r.s)(window.location.hash);if(!e)return;let t=e[1],n=e[2],i=e[3],l=e[4]||n,s=e[5]||i;u=new DiffRange(t,n,+i,l,+s);let o=Array.from(u.elements),c=o[0];c&&(c.closest(".js-diff-table").classList.contains("file-diff-split")?function(){if(!u)return;for(let e of u.elements)e.classList.add("selected-line");let e=[],t=[],n=[],i=[];for(let l of u.rows()){let[s,r,o,c]=l.children;e.push(s),t.push(r),n.push(o),i.push(c)}function l(e){for(let[t,n]of e.entries()){if(n.classList.contains("empty-cell"))continue;let i=e[t-1];i&&i.classList.contains("selected-line")||n.classList.add("selected-line-top");let l=e[t+1];l&&l.classList.contains("selected-line")||n.classList.add("selected-line-bottom")}}for(let[s,r]of(l(e),l(t),l(n),l(i),t.entries()))i[s].classList.contains("selected-line")||r.classList.add("selected-line-right");for(let[e,i]of n.entries())t[e].classList.contains("selected-line")||i.classList.add("selected-line-left")}():function(){if(!u)return;for(let e of u.elements)e.classList.add("selected-line");let e=Array.from(u.rows()),t=e[0];for(let e of t.children)e.classList.add("selected-line-top");let n=e[e.length-1];for(let e of n.children)e.classList.add("selected-line-bottom")}())}(0,c.on)("mousedown",".js-add-line-comment",function(e){if(!(e instanceof MouseEvent)||0!==e.button)return;let t=e.target.parentElement;if(!t||!g(e.target))return;let n=v(t);if(!n)return;let i=e.target.closest(".js-diff-table");S(i),m=n,h=!0,e.target.addEventListener("mouseup",function(){k(i),m=null,h=!1},{once:!0}),u&&u.lineCount>1&&e.preventDefault()}),(0,c.on)("mousedown",".js-linkable-line-number",function(e){if(!(e instanceof MouseEvent)||0!==e.button)return;let t=e.target;if(!(t instanceof Element))return;let n=t.closest(".js-diff-table");n.classList.add("is-selecting"),S(n),document.addEventListener("mouseup",function(){t.closest(".js-diff-table").classList.remove("is-selecting"),k(n)},{once:!0}),E(t,e instanceof MouseEvent&&e.shiftKey),e.preventDefault()}),(0,s.Z)(A),(0,o.N7)(".blob-expanded",A),(0,o.N7)(".js-diff-progressive-loader",function(e){e.addEventListener("load",A)}),(0,o.N7)(".js-diff-entry-loader",function(e){e.addEventListener("load",A)})},99874:(e,t,n)=>{var i=n(59753);(0,i.on)("click",".js-rich-diff.collapsed .js-expandable",function(e){if(!(e.target instanceof Element))return;e.preventDefault();let t=e.target.closest(".js-rich-diff");t.classList.remove("collapsed")}),(0,i.on)("click",".js-show-rich-diff",function(e){let t=e.currentTarget.closest(".js-warn-no-visible-changes");if(!t)return;t.classList.add("d-none");let n=t.parentElement,i=n.querySelector(".js-no-rich-changes");i&&i.classList.remove("d-none")})},29764:(e,t,n)=>{n.d(t,{$S:()=>l,Fk:()=>s,sz:()=>r});var i=n(71643);function l(e,t,n){let l={hydroEventPayload:e,hydroEventHmac:t,visitorPayload:"",visitorHmac:"",hydroClientContext:n},s=document.querySelector("meta[name=visitor-payload]");s instanceof HTMLMetaElement&&(l.visitorPayload=s.content);let r=document.querySelector("meta[name=visitor-hmac]")||"";r instanceof HTMLMetaElement&&(l.visitorHmac=r.content),(0,i.b)(l,!0)}function s(e){let t=e.getAttribute("data-hydro-view")||"",n=e.getAttribute("data-hydro-view-hmac")||"",i=e.getAttribute("data-hydro-client-context")||"";l(t,n,i)}function r(e){let t=e.getAttribute("data-hydro-click-payload")||"",n=e.getAttribute("data-hydro-click-hmac")||"",i=e.getAttribute("data-hydro-client-context")||"";l(t,n,i)}},254:(e,t,n)=>{n.d(t,{ZG:()=>o,q6:()=>a,w4:()=>c});var i=n(8439);let l=!1,s=new i.Z;function r(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of s.matches(t))e.data.call(null,t)}function o(e,t){l||(l=!0,document.addEventListener("focus",r,!0)),s.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function c(e,t,n){function i(t){let l=t.currentTarget;l&&(l.removeEventListener(e,n),l.removeEventListener("blur",i))}o(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",i)})}function a(e,t){function n(e){let{currentTarget:i}=e;i&&(i.removeEventListener("input",t),i.removeEventListener("blur",n))}o(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},11445:(e,t,n)=>{n.d(t,{v:()=>i});function i(e,t){t.appendChild(e.extractContents()),e.insertNode(t)}},97629:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){return!(e.offsetWidth<=0&&e.offsetHeight<=0)}},28008:(e,t,n)=>{n.d(t,{OP:()=>i,kc:()=>l});let DiffSelectionEvent=class DiffSelectionEvent extends Event{constructor(e){super("diff-line-selection",{bubbles:!1,cancelable:!0}),this.payload=e}};function i(e){window.dispatchEvent(new DiffSelectionEvent(e))}function l(e){return window.addEventListener("diff-line-selection",e),()=>window.removeEventListener("diff-line-selection",e)}},67044:(e,t,n)=>{n.d(t,{D_:()=>i.D_,EL:()=>i.EL,N9:()=>i.N9,Tz:()=>i.Tz,k0:()=>i.k0});var i=n(11793)},56959:(e,t,n)=>{n.d(t,{RB:()=>i,qC:()=>l,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function i(e,t,n,i={capture:!1}){return e.addEventListener(t,n,i),new Subscription(()=>{e.removeEventListener(t,n,i)})}function l(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}}}]);
//# sourceMappingURL=app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-6932d4-346ff065eb0c.js.map