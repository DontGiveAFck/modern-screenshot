var I=Object.defineProperty;var b=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var g=(r,t,e)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,F=(r,t)=>{for(var e in t||(t={}))A.call(t,e)&&g(r,e,t[e]);if(b)for(var e of b(t))U.call(t,e)&&g(r,e,t[e]);return r};var x=(r,t)=>{var e={};for(var o in r)A.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&b)for(var o of b(r))t.indexOf(o)<0&&U.call(r,o)&&(e[o]=r[o]);return e};var y=(r,t,e)=>new Promise((o,f)=>{var h=n=>{try{d(e.next(n))}catch(u){f(u)}},R=n=>{try{d(e.throw(n))}catch(u){f(u)}},d=n=>n.done?o(n.value):Promise.resolve(n.value).then(h,R);d((e=e.apply(r,t)).next())});(function(){var u;"use strict";const r="[modern-screenshot]",e=typeof window!="undefined"?(u=window.navigator)==null?void 0:u.userAgent:"",o=e.includes("Chrome");e.includes("AppleWebKit"),e.includes("Firefox");const f=(...s)=>console.warn(r,...s);function h(s,a){return new Promise((i,l)=>{const c=new FileReader;c.onload=()=>i(c.result),c.onerror=()=>l(c.error),c.onabort=()=>l(new Error(`Failed read blob to ${a}`)),a==="dataUrl"?c.readAsDataURL(s):a==="arrayBuffer"&&c.readAsArrayBuffer(s)})}const R=s=>h(s,"dataUrl");function d(s){const E=s,{url:a,timeout:i,responseType:l}=E,c=x(E,["url","timeout","responseType"]),m=new AbortController,B=i?setTimeout(()=>m.abort(),i):void 0;return fetch(a,F({signal:m.signal},c)).then(w=>{if(!w.ok)throw new Error("Failed fetch, not 2xx response",{cause:w});switch(l){case"dataUrl":return w.blob().then(R);case"text":default:return w.text()}}).finally(()=>clearTimeout(B))}const n=self;n.onmessage=s=>y(this,null,function*(){const a=s.data,i=a.rawUrl||a.url;try{const l=yield d(a);n.postMessage({url:i,result:l})}catch(l){f(l),n.postMessage({url:i})}})})();
