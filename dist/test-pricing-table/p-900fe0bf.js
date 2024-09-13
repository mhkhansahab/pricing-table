const e="test-pricing-table";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:false,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:false,cmpShouldUpdate:false,cmpWillLoad:false,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:false,element:false,event:false,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:false,hostListenerTarget:false,hostListenerTargetBody:false,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,hydratedSelectorName:"hydrated",initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:false,lifecycleDOMEvents:false,member:false,method:false,mode:false,observeAttribute:false,profile:false,prop:false,propBoolean:false,propMutable:false,propNumber:false,propString:false,reflect:false,scoped:false,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:false,slotChildNodesFix:false,slotRelocation:false,state:false,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:false,vdomAttribute:true,vdomClass:true,vdomFunctional:false,vdomKey:true,vdomListener:false,vdomPropOrAttr:true,vdomRef:false,vdomRender:true,vdomStyle:false,vdomText:true,vdomXlink:false,watchCallback:false};var s=Object.defineProperty;var n=(e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:true})};var l=new WeakMap;var r=e=>l.get(e);var a=(e,t)=>l.set(t.t=e,t);var o=(e,t)=>{const s={l:0,$hostElement$:e,o:t,i:new Map};{s.u=new Promise((e=>s.v=e));e["s-p"]=[];e["s-rc"]=[]}return l.set(e,s)};var i=(e,t)=>t in e;var f=(e,t)=>(0,console.error)(e,t);var c=new Map;var u=(e,t,s)=>{const n=e.p.replace(/-/g,"_");const l=e.m;if(!l){return void 0}const r=c.get(l);if(r){return r[n]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{c.set(l,e)}return e[n]}),f)};var v=new Map;var d="{visibility:hidden}.hydrated{visibility:inherit}";var p="slot-fb{display:contents}slot-fb[hidden]{display:none}";var m=typeof window!=="undefined"?window:{};var h=m.document||{head:{}};var y={l:0,h:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n),ce:(e,t)=>new CustomEvent(e,t)};var w=e=>Promise.resolve(e);var b=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var $=false;var S=[];var g=[];var C=(e,t)=>s=>{e.push(s);if(!$){$=true;if(t&&y.l&4){T(x)}else{y.raf(x)}}};var k=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){f(e)}}e.length=0};var x=()=>{k(S);{k(g);if($=S.length>0){y.raf(x)}}};var T=e=>w().then(e);var D=C(g,true);var E={};var L=e=>e!=null;var M=e=>{e=typeof e;return e==="object"||e==="function"};function F(e){var t,s,n;return(n=(s=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:s.getAttribute("content"))!=null?n:void 0}var O={};n(O,{err:()=>j,map:()=>A,ok:()=>R,unwrap:()=>P,unwrapErr:()=>U});var R=e=>({isOk:true,isErr:false,value:e});var j=e=>({isOk:false,isErr:true,value:e});function A(e,t){if(e.isOk){const s=t(e.value);if(s instanceof Promise){return s.then((e=>R(e)))}else{return R(s)}}if(e.isErr){const t=e.value;return j(t)}throw"should never get here"}var P=e=>{if(e.isOk){return e.value}else{throw e.value}};var U=e=>{if(e.isErr){return e.value}else{throw e.value}};var N=(e,t="")=>{{return()=>{}}};var W=(e,t)=>{{return()=>{}}};var H=(e,t,...s)=>{let n=null;let l=null;let r=false;let a=false;const o=[];const i=t=>{for(let s=0;s<t.length;s++){n=t[s];if(Array.isArray(n)){i(n)}else if(n!=null&&typeof n!=="boolean"){if(r=typeof e!=="function"&&!M(n)){n=String(n)}if(r&&a){o[o.length-1].$+=n}else{o.push(r?z(null,n):n)}a=r}}};i(s);if(t){if(t.key){l=t.key}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}const f=z(e,null);f.S=t;if(o.length>0){f.C=o}{f.k=l}return f};var z=(e,t)=>{const s={l:0,T:e,$:t,D:null,C:null};{s.S=null}{s.k=null}return s};var B={};var Q=e=>e&&e.T===B;var q=(e,t,s)=>{const n=y.ce(t,s);e.dispatchEvent(n);return n};var I=new WeakMap;var K=(e,t,s)=>{let n=v.get(e);if(b&&s){n=n||new CSSStyleSheet;if(typeof n==="string"){n=t}else{n.replaceSync(t)}}else{n=t}v.set(e,n)};var V=(e,t,s)=>{var n;const l=_(t);const r=v.get(l);e=e.nodeType===11?e:h;if(r){if(typeof r==="string"){e=e.head||e;let s=I.get(e);let a;if(!s){I.set(e,s=new Set)}if(!s.has(l)){{a=h.createElement("style");a.innerHTML=r;const s=(n=y.L)!=null?n:F(h);if(s!=null){a.setAttribute("nonce",s)}if(!(t.l&1)){if(e.nodeName==="HEAD"){const t=e.querySelectorAll("link[rel=preconnect]");const s=t.length>0?t[t.length-1].nextSibling:document.querySelector("style");e.insertBefore(a,s)}else if("host"in e){e.prepend(a)}else{e.append(a)}}if(t.l&1&&e.nodeName!=="HEAD"){e.insertBefore(a,null)}}if(t.l&4){a.innerHTML+=p}if(s){s.add(l)}}}else if(!e.adoptedStyleSheets.includes(r)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]}}return l};var X=e=>{const t=e.o;const s=e.$hostElement$;const n=t.l;const l=N("attachStyles",t.p);const r=V(s.shadowRoot?s.shadowRoot:s.getRootNode(),t);if(n&10&&n&2){s["s-sc"]=r;s.classList.add(r+"-h")}l()};var _=(e,t)=>"sc-"+e.p;var G=(e,t,s,n,l,r)=>{if(s!==n){let a=i(e,t);t.toLowerCase();if(t==="class"){const t=e.classList;const l=Y(s);const r=Y(n);t.remove(...l.filter((e=>e&&!r.includes(e))));t.add(...r.filter((e=>e&&!l.includes(e))))}else if(t==="key");else{const o=M(n);if((a||o&&n!==null)&&!l){try{if(!e.tagName.includes("-")){const l=n==null?"":n;if(t==="list"){a=false}else if(s==null||e[t]!=l){if(typeof e.__lookupSetter__(t)==="function"){e[t]=l}else{e.setAttribute(t,l)}}}else{e[t]=n}}catch(e){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!a||r&4||l)&&!o){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var J=/\s/;var Y=e=>!e?[]:e.split(J);var Z=(e,t,s)=>{const n=t.D.nodeType===11&&t.D.host?t.D.host:t.D;const l=e&&e.S||E;const r=t.S||E;for(const e of ee(Object.keys(r))){G(n,e,l[e],r[e],s,t.l)}};function ee(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var te;var se;var ne=false;var le=false;var re=(e,s,n,l)=>{const r=s.C[n];let a=0;let o;let i;if(r.$!==null){o=r.D=h.createTextNode(r.$)}else{o=r.D=h.createElement(!ne&&t.slotRelocation&&r.l&2?"slot-fb":r.T);{Z(null,r,le)}const s=o.getRootNode();const n=!s.querySelector("body");if(!n&&t.scoped&&L(te)&&o["s-si"]!==te){o.classList.add(o["s-si"]=te)}if(r.C){for(a=0;a<r.C.length;++a){i=re(e,r,a);if(i){o.appendChild(i)}}}}o["s-hn"]=se;return o};var ae=(e,t,s,n,l,r)=>{let a=e;let o;if(a.shadowRoot&&a.tagName===se){a=a.shadowRoot}for(;l<=r;++l){if(n[l]){o=re(null,s,l);if(o){n[l].D=o;fe(a,o,t)}}}};var oe=(e,t,s)=>{for(let n=t;n<=s;++n){const t=e[n];if(t){const e=t.D;if(e){e.remove()}}}};var ie=(e,s,n=false)=>{const l=s.D=e.D;const r=e.C;const a=s.C;const o=s.$;if(o===null){{{Z(e,s,le)}}if(a!==null){ae(l,null,s,a,0,a.length-1)}else if(!n&&t.updatable&&r!==null){oe(r,0,r.length-1)}}else if(e.$!==o){l.data=o}};var fe=(e,t,s)=>{const n=e==null?void 0:e.insertBefore(t,s);return n};var ce=(e,t,s=false)=>{const n=e.$hostElement$;const l=e.o;const r=e.M||z(null,null);const a=Q(t)?t:H(null,null,t);se=n.tagName;if(s&&a.S){for(const e of Object.keys(a.S)){if(n.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){a.S[e]=n[e]}}}a.T=null;a.l|=4;e.M=a;a.D=r.D=n.shadowRoot||n;{te=n["s-sc"]}ne=(l.l&1)!==0;ie(r,a,s)};var ue=(e,t)=>{if(t&&!e.F&&t["s-p"]){t["s-p"].push(new Promise((t=>e.F=t)))}};var ve=(e,t)=>{if(e.l&4){e.l|=512;return}ue(e,e.O);const s=()=>de(e,t);return D(s)};var de=(e,t)=>{const s=e.$hostElement$;const n=N("scheduleUpdate",e.o.p);const l=e.t;if(!l){throw new Error(`Can't render component <${s.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`)}let r;n();return pe(r,(()=>he(e,l,t)))};var pe=(e,t)=>me(e)?e.then(t).catch((e=>{console.error(e);t()})):t();var me=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var he=async(e,t,s)=>{var n;const l=e.$hostElement$;const r=N("update",e.o.p);const a=l["s-rc"];if(s){X(e)}const o=N("render",e.o.p);{ye(e,t,l,s)}if(a){a.map((e=>e()));l["s-rc"]=void 0}o();r();{const t=(n=l["s-p"])!=null?n:[];const s=()=>we(e);if(t.length===0){s()}else{Promise.all(t).then(s);e.l|=4;t.length=0}}};var ye=(e,t,s,n)=>{try{t=t.render();{e.l|=2}{{{ce(e,t,n)}}}}catch(t){f(t,e.$hostElement$)}return null};var we=e=>{const t=e.o.p;const s=e.$hostElement$;const n=N("postUpdate",t);const l=e.O;if(!(e.l&64)){e.l|=64;{$e(s)}n();{e.v(s);if(!l){be()}}}else{n()}{if(e.F){e.F();e.F=void 0}if(e.l&512){T((()=>ve(e,false)))}e.l&=~(4|512)}};var be=t=>{{$e(h.documentElement)}T((()=>q(m,"appload",{detail:{namespace:e}})))};var $e=e=>{var s;return e.classList.add((s=t.hydratedSelectorName)!=null?s:"hydrated")};var Se=(e,t,s)=>e;var ge=async(e,t,s,n)=>{let l;if((t.l&32)===0){t.l|=32;const n=s.m;if(n){const e=u(s);if(e&&"then"in e){const t=W();l=await e;t()}else{l=e}if(!l){throw new Error(`Constructor for "${s.p}#${t.R}" was not found`)}const n=N("createInstance",s.p);try{new l(t)}catch(e){f(e)}n()}else{l=e.constructor;const s=e.localName;customElements.whenDefined(s).then((()=>t.l|=128))}if(l&&l.style){let e;if(typeof l.style==="string"){e=l.style}const t=_(s);if(!v.has(t)){const n=N("registerStyles",s.p);K(t,e,!!(s.l&1));n()}}}const r=t.O;const a=()=>ve(t,true);if(r&&r["s-rc"]){r["s-rc"].push(a)}else{a()}};var Ce=e=>{};var ke=e=>{if((y.l&1)===0){const t=r(e);const s=t.o;const n=N("connectedCallback",s.p);if(!(t.l&1)){t.l|=1;{let s=e;while(s=s.parentNode||s.host){if(s["s-p"]){ue(t,t.O=s);break}}}{ge(e,t,s)}}else{if(t==null?void 0:t.t);else if(t==null?void 0:t.u){t.u.then((()=>Ce()))}}n()}};var xe=e=>{};var Te=async e=>{if((y.l&1)===0){const t=r(e);if(t==null?void 0:t.t);else if(t==null?void 0:t.u){t.u.then((()=>xe()))}}};var De=(e,t={})=>{var s;const n=N();const l=[];const a=t.exclude||[];const i=m.customElements;const f=h.head;const c=f.querySelector("meta[charset]");const u=h.createElement("style");const v=[];let w;let b=true;Object.assign(y,t);y.h=new URL(t.resourcesUrl||"./",h.baseURI).href;let $=false;e.map((e=>{e[1].map((t=>{const s={l:t[0],p:t[1],j:t[2],A:t[3]};if(s.l&4){$=true}const n=s.p;const f=class extends HTMLElement{constructor(e){super(e);this.hasRegisteredEventListeners=false;e=this;o(e,s);if(s.l&1){{if(!e.shadowRoot){{e.attachShadow({mode:"open"})}}else{if(e.shadowRoot.mode!=="open"){throw new Error(`Unable to re-use existing shadow root for ${s.p}! Mode is set to ${e.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}}}}connectedCallback(){r(this);if(!this.hasRegisteredEventListeners){this.hasRegisteredEventListeners=true}if(w){clearTimeout(w);w=null}if(b){v.push(this)}else{y.jmp((()=>ke(this)))}}disconnectedCallback(){y.jmp((()=>Te(this)))}componentOnReady(){return r(this).u}};s.m=e[0];if(!a.includes(n)&&!i.get(n)){l.push(n);i.define(n,Se(f))}}))}));if(l.length>0){if($){u.textContent+=p}{u.textContent+=l.sort()+d}if(u.innerHTML.length){u.setAttribute("data-styles","");const e=(s=y.L)!=null?s:F(h);if(e!=null){u.setAttribute("nonce",e)}f.insertBefore(u,c?c.nextSibling:f.firstChild)}}b=false;if(v.length){v.map((e=>e.connectedCallback()))}else{{y.jmp((()=>w=setTimeout(be,30)))}}n()};var Ee=e=>y.L=e;export{De as b,H as h,w as p,a as r,Ee as s};
//# sourceMappingURL=p-900fe0bf.js.map