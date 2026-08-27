(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const bt={},cr=[],ui=()=>{},Rh=()=>!1,zo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Vo=n=>n.startsWith("onUpdate:"),Xt=Object.assign,yu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$m=Object.prototype.hasOwnProperty,pt=(n,e)=>$m.call(n,e),qe=Array.isArray,ur=n=>ma(n)==="[object Map]",Ph=n=>ma(n)==="[object Set]",Tf=n=>ma(n)==="[object Date]",et=n=>typeof n=="function",Ct=n=>typeof n=="string",pi=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",Lh=n=>(mt(n)||et(n))&&et(n.then)&&et(n.catch),Dh=Object.prototype.toString,ma=n=>Dh.call(n),Km=n=>ma(n).slice(8,-1),Ih=n=>ma(n)==="[object Object]",Eu=n=>Ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$r=bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ym=/-\w/g,Xn=Go(n=>n.replace(Ym,e=>e.slice(1).toUpperCase())),jm=/\B([A-Z])/g,zs=Go(n=>n.replace(jm,"-$1").toLowerCase()),Nh=Go(n=>n.charAt(0).toUpperCase()+n.slice(1)),al=Go(n=>n?`on${Nh(n)}`:""),ai=(n,e)=>!Object.is(n,e),so=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Uh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Tu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Zm=n=>{const e=Ct(n)?Number(n):NaN;return isNaN(e)?n:e};let Af;const Ho=()=>Af||(Af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function us(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ct(i)?t0(i):us(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ct(n)||mt(n))return n}const Jm=/;(?![^(]*\))/g,Qm=/:([^]+)/,e0=/\/\*[^]*?\*\//g;function t0(n){const e={};return n.replace(e0,"").split(Jm).forEach(t=>{if(t){const i=t.split(Qm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Bt(n){let e="";if(Ct(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=Bt(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const n0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i0=bu(n0);function Fh(n){return!!n||n===""}function s0(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Au(n[i],e[i]);return t}function Au(n,e){if(n===e)return!0;let t=Tf(n),i=Tf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=pi(n),i=pi(e),t||i)return n===e;if(t=qe(n),i=qe(e),t||i)return t&&i?s0(n,e):!1;if(t=mt(n),i=mt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Au(n[a],e[a]))return!1}}return String(n)===String(e)}const Oh=n=>!!(n&&n.__v_isRef===!0),it=n=>Ct(n)?n:n==null?"":qe(n)||mt(n)&&(n.toString===Dh||!et(n.toString))?Oh(n)?it(n.value):JSON.stringify(n,Bh,2):String(n),Bh=(n,e)=>Oh(e)?Bh(n,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ol(i,r)+" =>"]=s,t),{})}:Ph(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ol(t))}:pi(e)?ol(e):mt(e)&&!qe(e)&&!Ih(e)?String(e):e,ol=(n,e="")=>{var t;return pi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class r0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&qt&&(qt.active?(this.parent=qt,this.index=(qt.scopes||(qt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){++this._on===1&&(this.prevScope=qt,qt=this)}off(){if(this._on>0&&--this._on===0){if(qt===this)qt=this.prevScope;else{let e=qt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function a0(){return qt}let Et;const ll=new WeakSet;class kh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qt&&(qt.active?qt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ll.has(this)&&(ll.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wf(this),Gh(this);const e=Et,t=qn;Et=this,qn=!0;try{return this.fn()}finally{Hh(this),Et=e,qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ru(e);this.deps=this.depsTail=void 0,wf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ll.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uc(this)&&this.run()}get dirty(){return uc(this)}}let zh=0,Kr,Yr;function Vh(n,e=!1){if(n.flags|=8,e){n.next=Yr,Yr=n;return}n.next=Kr,Kr=n}function wu(){zh++}function Cu(){if(--zh>0)return;if(Yr){let e=Yr;for(Yr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Kr;){let e=Kr;for(Kr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Gh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hh(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ru(i),o0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function uc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Wh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===na)||(n.globalVersion=na,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!uc(n))))return;n.flags|=2;const e=n.dep,t=Et,i=qn;Et=n,qn=!0;try{Gh(n);const s=n.fn(n._value);(e.version===0||ai(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,qn=i,Hh(n),n.flags&=-3}}function Ru(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ru(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function o0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let qn=!0;const Xh=[];function Fi(){Xh.push(qn),qn=!1}function Oi(){const n=Xh.pop();qn=n===void 0?!0:n}function wf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let na=0;class l0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!qn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new l0(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,qh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,na++,this.notify(e)}notify(e){wu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cu()}}}function qh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const fc=new WeakMap,Is=Symbol(""),dc=Symbol(""),ia=Symbol("");function en(n,e,t){if(qn&&Et){let i=fc.get(n);i||fc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Pu),s.map=i,s.key=t),s.track()}}function Ci(n,e,t,i,s,r){const a=fc.get(n);if(!a){na++;return}const o=l=>{l&&l.trigger()};if(wu(),e==="clear")a.forEach(o);else{const l=qe(n),c=l&&Eu(t);if(l&&t==="length"){const u=Number(i);a.forEach((d,f)=>{(f==="length"||f===ia||!pi(f)&&f>=u)&&o(d)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ia)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Is)),ur(n)&&o(a.get(dc)));break;case"delete":l||(o(a.get(Is)),ur(n)&&o(a.get(dc)));break;case"set":ur(n)&&o(a.get(Is));break}}Cu()}function Hs(n){const e=ht(n);return e===n?e:(en(e,"iterate",ia),Un(n)?e:e.map(Kn))}function Wo(n){return en(n=ht(n),"iterate",ia),n}function ii(n,e){return Bi(n)?_r(Ns(n)?Kn(e):e):Kn(e)}const c0={__proto__:null,[Symbol.iterator](){return cl(this,Symbol.iterator,n=>ii(this,n))},concat(...n){return Hs(this).concat(...n.map(e=>qe(e)?Hs(e):e))},entries(){return cl(this,"entries",n=>(n[1]=ii(this,n[1]),n))},every(n,e){return _i(this,"every",n,e,void 0,arguments)},filter(n,e){return _i(this,"filter",n,e,t=>t.map(i=>ii(this,i)),arguments)},find(n,e){return _i(this,"find",n,e,t=>ii(this,t),arguments)},findIndex(n,e){return _i(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _i(this,"findLast",n,e,t=>ii(this,t),arguments)},findLastIndex(n,e){return _i(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _i(this,"forEach",n,e,void 0,arguments)},includes(...n){return ul(this,"includes",n)},indexOf(...n){return ul(this,"indexOf",n)},join(n){return Hs(this).join(n)},lastIndexOf(...n){return ul(this,"lastIndexOf",n)},map(n,e){return _i(this,"map",n,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...n){return Cr(this,"push",n)},reduce(n,...e){return Cf(this,"reduce",n,e)},reduceRight(n,...e){return Cf(this,"reduceRight",n,e)},shift(){return Cr(this,"shift")},some(n,e){return _i(this,"some",n,e,void 0,arguments)},splice(...n){return Cr(this,"splice",n)},toReversed(){return Hs(this).toReversed()},toSorted(n){return Hs(this).toSorted(n)},toSpliced(...n){return Hs(this).toSpliced(...n)},unshift(...n){return Cr(this,"unshift",n)},values(){return cl(this,"values",n=>ii(this,n))}};function cl(n,e,t){const i=Wo(n),s=i[e]();return i!==n&&!Un(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const u0=Array.prototype;function _i(n,e,t,i,s,r){const a=Wo(n),o=a!==n&&!Un(n),l=a[e];if(l!==u0[e]){const d=l.apply(n,r);return o?Kn(d):d}let c=t;a!==n&&(o?c=function(d,f){return t.call(this,ii(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Cf(n,e,t,i){const s=Wo(n),r=s!==n&&!Un(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,d){return o&&(o=!1,c=ii(n,c)),t.call(this,c,ii(n,u),d,n)}):t.length>3&&(a=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](a,...i);return o?ii(n,l):l}function ul(n,e,t){const i=ht(n);en(i,"iterate",ia);const s=i[e](...t);return(s===-1||s===!1)&&Iu(t[0])?(t[0]=ht(t[0]),i[e](...t)):s}function Cr(n,e,t=[]){Fi(),wu();const i=ht(n)[e].apply(n,t);return Cu(),Oi(),i}const f0=bu("__proto__,__v_isRef,__isVue"),$h=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(pi));function d0(n){pi(n)||(n=String(n));const e=ht(this);return en(e,"has",n),e.hasOwnProperty(n)}class Kh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?b0:Jh:r?Zh:jh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=qe(e);if(!s){let l;if(a&&(l=c0[t]))return l;if(t==="hasOwnProperty")return d0}const o=Reflect.get(e,t,nn(e)?e:i);if((pi(t)?$h.has(t):f0(t))||(s||en(e,"get",t),r))return o;if(nn(o)){const l=a&&Eu(t)?o:o.value;return s&&mt(l)?pc(l):l}return mt(o)?s?pc(o):Xo(o):o}}class Yh extends Kh{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=qe(e)&&Eu(t);if(!this._isShallow){const c=Bi(r);if(!Un(i)&&!Bi(i)&&(r=ht(r),i=ht(i)),!a&&nn(r)&&!nn(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,nn(e)?e:s);return e===ht(s)&&(o?ai(i,r)&&Ci(e,"set",t,i):Ci(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!pi(t)||!$h.has(t))&&en(e,"has",t),i}ownKeys(e){return en(e,"iterate",qe(e)?"length":Is),Reflect.ownKeys(e)}}class h0 extends Kh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const p0=new Yh,m0=new h0,g0=new Yh(!0);const hc=n=>n,ya=n=>Reflect.getPrototypeOf(n);function _0(n,e,t){return function(...i){const s=this.__v_raw,r=ht(s),a=ur(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?hc:e?_r:Kn;return!e&&en(r,"iterate",l?dc:Is),Xt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Ea(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function v0(n,e){const t={get(s){const r=this.__v_raw,a=ht(r),o=ht(s);n||(ai(s,o)&&en(a,"get",s),en(a,"get",o));const{has:l}=ya(a),c=e?hc:n?_r:Kn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&en(ht(s),"iterate",Is),s.size},has(s){const r=this.__v_raw,a=ht(r),o=ht(s);return n||(ai(s,o)&&en(a,"has",s),en(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=ht(o),c=e?hc:n?_r:Kn;return!n&&en(l,"iterate",Is),o.forEach((u,d)=>s.call(r,c(u),c(d),a))}};return Xt(t,n?{add:Ea("add"),set:Ea("set"),delete:Ea("delete"),clear:Ea("clear")}:{add(s){const r=ht(this),a=ya(r),o=ht(s),l=!e&&!Un(s)&&!Bi(s)?o:s;return a.has.call(r,l)||ai(s,l)&&a.has.call(r,s)||ai(o,l)&&a.has.call(r,o)||(r.add(l),Ci(r,"add",l,l)),this},set(s,r){!e&&!Un(r)&&!Bi(r)&&(r=ht(r));const a=ht(this),{has:o,get:l}=ya(a);let c=o.call(a,s);c||(s=ht(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?ai(r,u)&&Ci(a,"set",s,r):Ci(a,"add",s,r),this},delete(s){const r=ht(this),{has:a,get:o}=ya(r);let l=a.call(r,s);l||(s=ht(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Ci(r,"delete",s,void 0),c},clear(){const s=ht(this),r=s.size!==0,a=s.clear();return r&&Ci(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=_0(s,n,e)}),t}function Lu(n,e){const t=v0(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const x0={get:Lu(!1,!1)},S0={get:Lu(!1,!0)},M0={get:Lu(!0,!1)};const jh=new WeakMap,Zh=new WeakMap,Jh=new WeakMap,b0=new WeakMap;function y0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xo(n){return Bi(n)?n:Du(n,!1,p0,x0,jh)}function E0(n){return Du(n,!1,g0,S0,Zh)}function pc(n){return Du(n,!0,m0,M0,Jh)}function Du(n,e,t,i,s){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=y0(Km(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Ns(n){return Bi(n)?Ns(n.__v_raw):!!(n&&n.__v_isReactive)}function Bi(n){return!!(n&&n.__v_isReadonly)}function Un(n){return!!(n&&n.__v_isShallow)}function Iu(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function T0(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&Uh(n,"__v_skip",!0),n}const Kn=n=>mt(n)?Xo(n):n,_r=n=>mt(n)?pc(n):n;function nn(n){return n?n.__v_isRef===!0:!1}function dt(n){return A0(n,!1)}function A0(n,e){return nn(n)?n:new w0(n,e)}class w0{constructor(e,t){this.dep=new Pu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:Kn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Un(e)||Bi(e);e=i?e:ht(e),ai(e,t)&&(this._rawValue=e,this._value=i?e:Kn(e),this.dep.trigger())}}function Ye(n){return nn(n)?n.value:n}const C0={get:(n,e,t)=>e==="__v_raw"?n:Ye(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return nn(s)&&!nn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Qh(n){return Ns(n)?n:new Proxy(n,C0)}class R0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Vh(this,!0),!0}get value(){const e=this.dep.track();return Wh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function P0(n,e,t=!1){let i,s;return et(n)?i=n:(i=n.get,s=n.set),new R0(i,s,t)}const Ta={},Mo=new WeakMap;let As;function L0(n,e=!1,t=As){if(t){let i=Mo.get(t);i||Mo.set(t,i=[]),i.push(n)}}function D0(n,e,t=bt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=T=>s?T:Un(T)||s===!1||s===0?Ri(T,1):Ri(T);let u,d,f,h,_=!1,S=!1;if(nn(n)?(d=()=>n.value,_=Un(n)):Ns(n)?(d=()=>c(n),_=!0):qe(n)?(S=!0,_=n.some(T=>Ns(T)||Un(T)),d=()=>n.map(T=>{if(nn(T))return T.value;if(Ns(T))return c(T);if(et(T))return l?l(T,2):T()})):et(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Fi();try{f()}finally{Oi()}}const T=As;As=u;try{return l?l(n,3,[h]):n(h)}finally{As=T}}:d=ui,e&&s){const T=d,N=s===!0?1/0:s;d=()=>Ri(T(),N)}const m=a0(),p=()=>{u.stop(),m&&m.active&&yu(m.effects,u)};if(r&&e){const T=e;e=(...N)=>{T(...N),p()}}let b=S?new Array(n.length).fill(Ta):Ta;const A=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const N=u.run();if(s||_||(S?N.some((D,I)=>ai(D,b[I])):ai(N,b))){f&&f();const D=As;As=u;try{const I=[N,b===Ta?void 0:S&&b[0]===Ta?[]:b,h];b=N,l?l(e,3,I):e(...I)}finally{As=D}}}else u.run()};return o&&o(A),u=new kh(d),u.scheduler=a?()=>a(A,!1):A,h=T=>L0(T,!1,u),f=u.onStop=()=>{const T=Mo.get(u);if(T){if(l)l(T,4);else for(const N of T)N();Mo.delete(u)}},e?i?A(!0):b=u.run():a?a(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ri(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,nn(n))Ri(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)Ri(n[i],e,t);else if(Ph(n)||ur(n))n.forEach(i=>{Ri(i,e,t)});else if(Ih(n)){for(const i in n)Ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ri(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ga(n,e,t,i){try{return i?n(...i):n()}catch(s){qo(s,e,t)}}function On(n,e,t,i){if(et(n)){const s=ga(n,e,t,i);return s&&Lh(s)&&s.catch(r=>{qo(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(On(n[r],e,t,i));return s}}function qo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||bt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}o=o.parent}if(r){Fi(),ga(r,null,10,[n,l,c]),Oi();return}}I0(n,t,s,i,a)}function I0(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const on=[];let ti=-1;const fr=[];let ns=null,sr=0;const ep=Promise.resolve();let bo=null;function Nu(n){const e=bo||ep;return n?e.then(this?n.bind(this):n):e}function N0(n){let e=ti+1,t=on.length;for(;e<t;){const i=e+t>>>1,s=on[i],r=sa(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Uu(n){if(!(n.flags&1)){const e=sa(n),t=on[on.length-1];!t||!(n.flags&2)&&e>=sa(t)?on.push(n):on.splice(N0(e),0,n),n.flags|=1,tp()}}function tp(){bo||(bo=ep.then(ip))}function U0(n){qe(n)?fr.push(...n):ns&&n.id===-1?ns.splice(sr+1,0,n):n.flags&1||(fr.push(n),n.flags|=1),tp()}function Rf(n,e,t=ti+1){for(;t<on.length;t++){const i=on[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;on.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function np(n){if(fr.length){const e=[...new Set(fr)].sort((t,i)=>sa(t)-sa(i));if(fr.length=0,ns){ns.push(...e);return}for(ns=e,sr=0;sr<ns.length;sr++){const t=ns[sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ns=null,sr=0}}const sa=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ip(n){try{for(ti=0;ti<on.length;ti++){const e=on[ti];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ga(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ti<on.length;ti++){const e=on[ti];e&&(e.flags&=-2)}ti=-1,on.length=0,np(),bo=null,(on.length||fr.length)&&ip()}}let Dn=null,sp=null;function yo(n){const e=Dn;return Dn=n,sp=n&&n.type.__scopeId||null,e}function Us(n,e=Dn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ao(-1);const r=yo(e);let a;try{a=n(...s)}finally{yo(r),i._d&&Ao(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function F0(n,e){if(Dn===null)return n;const t=Zo(Dn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=bt]=e[s];r&&(et(r)&&(r={mounted:r,updated:r}),r.deep&&Ri(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function gs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Fi(),On(l,t,8,[n.el,o,n,e]),Oi())}}function O0(n,e){if(un){let t=un.provides;const i=un.parent&&un.parent.provides;i===t&&(t=un.provides=Object.create(i)),t[n]=e}}function ro(n,e,t=!1){const i=Up();if(i||dr){let s=dr?dr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&et(e)?e.call(i&&i.proxy):e}}const B0=Symbol.for("v-scx"),k0=()=>ro(B0);function fi(n,e,t){return rp(n,e,t)}function rp(n,e,t=bt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Xt({},t),l=e&&i||!e&&r!=="post";let c;if(oa){if(r==="sync"){const h=k0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ui,h.resume=ui,h.pause=ui,h}}const u=un;o.call=(h,_,S)=>On(h,u,_,S);let d=!1;r==="post"?o.scheduler=h=>{mn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(h,_)=>{_?h():Uu(h)}),o.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=D0(n,e,o);return oa&&(c?c.push(f):l&&f()),f}function z0(n,e,t){const i=this.proxy,s=Ct(n)?n.includes(".")?ap(i,n):()=>i[n]:n.bind(i,i);let r;et(e)?r=e:(r=e.handler,t=e);const a=_a(this),o=rp(s,r.bind(i),t);return a(),o}function ap(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const V0=Symbol("_vte"),op=n=>n.__isTeleport,Pn=Symbol("_leaveCb"),Rr=Symbol("_enterCb");function G0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _n(()=>{n.isMounted=!0}),mp(()=>{n.isUnmounting=!0}),n}const An=[Function,Array],lp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},cp=n=>{const e=n.subTree;return e.component?cp(e.component):e},H0={name:"BaseTransition",props:lp,setup(n,{slots:e}){const t=Up(),i=G0();return()=>{const s=e.default&&dp(e.default(),!0),r=s&&s.length?up(s):t.subTree?fn():void 0;if(!r)return;const a=ht(n),{mode:o}=a;if(i.isLeaving)return fl(r);const l=Pf(r);if(!l)return fl(r);let c=mc(l,a,i,t,d=>c=d);l.type!==cn&&ra(l,c);let u=t.subTree&&Pf(t.subTree);if(u&&u.type!==cn&&!ws(u,l)&&cp(t).type!==cn){let d=mc(u,a,i,t);if(ra(u,d),o==="out-in"&&l.type!==cn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},fl(r);o==="in-out"&&l.type!==cn?d.delayLeave=(f,h,_)=>{const S=fp(i,u);S[String(u.key)]=u,f[Pn]=()=>{h(),f[Pn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function up(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==cn){e=t;break}}return e}const W0=H0;function fp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function mc(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:_,onLeaveCancelled:S,onBeforeAppear:m,onAppear:p,onAfterAppear:b,onAppearCancelled:A}=e,T=String(n.key),N=fp(t,n),D=(w,k)=>{w&&On(w,i,9,k)},I=(w,k)=>{const F=k[1];D(w,k),qe(w)?w.every(B=>B.length<=1)&&F():w.length<=1&&F()},x={mode:a,persisted:o,beforeEnter(w){let k=l;if(!t.isMounted)if(r)k=m||l;else return;w[Pn]&&w[Pn](!0);const F=N[T];F&&ws(n,F)&&F.el[Pn]&&F.el[Pn](),D(k,[w])},enter(w){if(N[T]===n)return;let k=c,F=u,B=d;if(!t.isMounted)if(r)k=p||c,F=b||u,B=A||d;else return;let J=!1;w[Rr]=X=>{J||(J=!0,X?D(B,[w]):D(F,[w]),x.delayedLeave&&x.delayedLeave(),w[Rr]=void 0)};const re=w[Rr].bind(null,!1);k?I(k,[w,re]):re()},leave(w,k){const F=String(n.key);if(w[Rr]&&w[Rr](!0),t.isUnmounting)return k();D(f,[w]);let B=!1;w[Pn]=re=>{B||(B=!0,k(),re?D(S,[w]):D(_,[w]),w[Pn]=void 0,N[F]===n&&delete N[F])};const J=w[Pn].bind(null,!1);N[F]=n,h?I(h,[w,J]):J()},clone(w){const k=mc(w,e,t,i,s);return s&&s(k),k}};return x}function fl(n){if($o(n))return n=fs(n),n.children=null,n}function Pf(n){if(!$o(n))return op(n.type)&&n.children?up(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&et(t.default))return t.default()}}function ra(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ra(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function dp(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===kt?(a.patchFlag&128&&s++,i=i.concat(dp(a.children,e,o))):(e||a.type!==cn)&&i.push(o!=null?fs(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function hp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Lf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Eo=new WeakMap;function jr(n,e,t,i,s=!1){if(qe(n)){n.forEach((S,m)=>jr(S,e&&(qe(e)?e[m]:e),t,i,s));return}if(Zr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&jr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Zo(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===bt?o.refs={}:o.refs,d=o.setupState,f=ht(d),h=d===bt?Rh:S=>Lf(u,S)?!1:pt(f,S),_=(S,m)=>!(m&&Lf(u,m));if(c!=null&&c!==l){if(Df(e),Ct(c))u[c]=null,h(c)&&(d[c]=null);else if(nn(c)){const S=e;_(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(et(l))ga(l,o,12,[a,u]);else{const S=Ct(l),m=nn(l);if(S||m){const p=()=>{if(n.f){const b=S?h(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)qe(b)&&yu(b,r);else if(qe(b))b.includes(r)||b.push(r);else if(S)u[l]=[r],h(l)&&(d[l]=u[l]);else{const A=[r];_(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else S?(u[l]=a,h(l)&&(d[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const b=()=>{p(),Eo.delete(n)};b.id=-1,Eo.set(n,b),mn(b,t)}else Df(n),p()}}}function Df(n){const e=Eo.get(n);e&&(e.flags|=8,Eo.delete(n))}Ho().requestIdleCallback;Ho().cancelIdleCallback;const Zr=n=>!!n.type.__asyncLoader,$o=n=>n.type.__isKeepAlive;function X0(n,e){pp(n,"a",e)}function q0(n,e){pp(n,"da",e)}function pp(n,e,t=un){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ko(e,i,t),t){let s=t.parent;for(;s&&s.parent;)$o(s.parent.vnode)&&$0(i,e,t,s),s=s.parent}}function $0(n,e,t,i){const s=Ko(e,n,i,!0);En(()=>{yu(i[e],s)},t)}function Ko(n,e,t=un,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Fi();const o=_a(t),l=On(e,t,n,a);return o(),Oi(),l});return i?s.unshift(r):s.push(r),r}}const Gi=n=>(e,t=un)=>{(!oa||n==="sp")&&Ko(n,(...i)=>e(...i),t)},K0=Gi("bm"),_n=Gi("m"),Y0=Gi("bu"),j0=Gi("u"),mp=Gi("bum"),En=Gi("um"),Z0=Gi("sp"),J0=Gi("rtg"),Q0=Gi("rtc");function eg(n,e=un){Ko("ec",n,e)}const tg=Symbol.for("v-ndc");function di(n,e,t,i){let s;const r=t,a=qe(n);if(a||Ct(n)){const o=a&&Ns(n);let l=!1,c=!1;o&&(l=!Un(n),c=Bi(n),n=Wo(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?_r(Kn(n[u])):Kn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(mt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const gc=n=>n?Fp(n)?Zo(n):gc(n.parent):null,Jr=Xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>gc(n.parent),$root:n=>gc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_p(n),$forceUpdate:n=>n.f||(n.f=()=>{Uu(n.update)}),$nextTick:n=>n.n||(n.n=Nu.bind(n.proxy)),$watch:n=>z0.bind(n)}),dl=(n,e)=>n!==bt&&!n.__isScriptSetup&&pt(n,e),ng={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(dl(i,e))return a[e]=1,i[e];if(s!==bt&&pt(s,e))return a[e]=2,s[e];if(pt(r,e))return a[e]=3,r[e];if(t!==bt&&pt(t,e))return a[e]=4,t[e];_c&&(a[e]=0)}}const c=Jr[e];let u,d;if(c)return e==="$attrs"&&en(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==bt&&pt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,pt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return dl(s,e)?(s[e]=t,!0):i!==bt&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==bt&&o[0]!=="$"&&pt(n,o)||dl(e,o)||pt(r,o)||pt(i,o)||pt(Jr,o)||pt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function If(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _c=!0;function ig(n){const e=_p(n),t=n.proxy,i=n.ctx;_c=!1,e.beforeCreate&&Nf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:S,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:A,unmounted:T,render:N,renderTracked:D,renderTriggered:I,errorCaptured:x,serverPrefetch:w,expose:k,inheritAttrs:F,components:B,directives:J,filters:re}=e;if(c&&sg(c,i,null),a)for(const $ in a){const oe=a[$];et(oe)&&(i[$]=oe.bind(t))}if(s){const $=s.call(t,t);mt($)&&(n.data=Xo($))}if(_c=!0,r)for(const $ in r){const oe=r[$],ve=et(oe)?oe.bind(t,t):et(oe.get)?oe.get.bind(t,t):ui,Ae=!et(oe)&&et(oe.set)?oe.set.bind(t):ui,De=wt({get:ve,set:Ae});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>De.value,set:Ie=>De.value=Ie})}if(o)for(const $ in o)gp(o[$],i,t,$);if(l){const $=et(l)?l.call(t):l;Reflect.ownKeys($).forEach(oe=>{O0(oe,$[oe])})}u&&Nf(u,n,"c");function Z($,oe){qe(oe)?oe.forEach(ve=>$(ve.bind(t))):oe&&$(oe.bind(t))}if(Z(K0,d),Z(_n,f),Z(Y0,h),Z(j0,_),Z(X0,S),Z(q0,m),Z(eg,x),Z(Q0,D),Z(J0,I),Z(mp,b),Z(En,T),Z(Z0,w),qe(k))if(k.length){const $=n.exposed||(n.exposed={});k.forEach(oe=>{Object.defineProperty($,oe,{get:()=>t[oe],set:ve=>t[oe]=ve,enumerable:!0})})}else n.exposed||(n.exposed={});N&&n.render===ui&&(n.render=N),F!=null&&(n.inheritAttrs=F),B&&(n.components=B),J&&(n.directives=J),w&&hp(n)}function sg(n,e,t=ui){qe(n)&&(n=vc(n));for(const i in n){const s=n[i];let r;mt(s)?"default"in s?r=ro(s.from||i,s.default,!0):r=ro(s.from||i):r=ro(s),nn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Nf(n,e,t){On(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function gp(n,e,t,i){let s=i.includes(".")?ap(t,i):()=>t[i];if(Ct(n)){const r=e[n];et(r)&&fi(s,r)}else if(et(n))fi(s,n.bind(t));else if(mt(n))if(qe(n))n.forEach(r=>gp(r,e,t,i));else{const r=et(n.handler)?n.handler.bind(t):e[n.handler];et(r)&&fi(s,r,n)}}function _p(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>To(l,c,a,!0)),To(l,e,a)),mt(e)&&r.set(e,l),l}function To(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&To(n,r,t,!0),s&&s.forEach(a=>To(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=rg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const rg={data:Uf,props:Ff,emits:Ff,methods:Gr,computed:Gr,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Gr,directives:Gr,watch:og,provide:Uf,inject:ag};function Uf(n,e){return e?n?function(){return Xt(et(n)?n.call(this,this):n,et(e)?e.call(this,this):e)}:e:n}function ag(n,e){return Gr(vc(n),vc(e))}function vc(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function rn(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?Xt(Object.create(null),n,e):e}function Ff(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Xt(Object.create(null),If(n),If(e??{})):e}function og(n,e){if(!n)return e;if(!e)return n;const t=Xt(Object.create(null),n);for(const i in e)t[i]=rn(n[i],e[i]);return t}function vp(){return{app:null,config:{isNativeTag:Rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lg=0;function cg(n,e){return function(i,s=null){et(i)||(i=Xt({},i)),s!=null&&!mt(s)&&(s=null);const r=vp(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:lg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Vg,get config(){return r.config},set config(u){},use(u,...d){return a.has(u)||(u&&et(u.install)?(a.add(u),u.install(c,...d)):et(u)&&(a.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||At(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Zo(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(On(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=dr;dr=c;try{return u()}finally{dr=d}}};return c}}let dr=null;const ug=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Xn(e)}Modifiers`]||n[`${zs(e)}Modifiers`];function fg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||bt;let s=t;const r=e.startsWith("update:"),a=r&&ug(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Ct(u)?u.trim():u)),a.number&&(s=t.map(Tu)));let o,l=i[o=al(e)]||i[o=al(Xn(e))];!l&&r&&(l=i[o=al(zs(e))]),l&&On(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,On(c,n,6,s)}}const dg=new WeakMap;function xp(n,e,t=!1){const i=t?dg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!et(n)){const l=c=>{const u=xp(c,e,!0);u&&(o=!0,Xt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(mt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>a[l]=null):Xt(a,r),mt(n)&&i.set(n,a),a)}function Yo(n,e){return!n||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,zs(e))||pt(n,e))}function Of(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:_,inheritAttrs:S}=n,m=yo(n);let p,b;try{if(t.shapeFlag&4){const T=s||i,N=T;p=si(c.call(N,T,u,d,h,f,_)),b=o}else{const T=e;p=si(T.length>1?T(d,{attrs:o,slots:a,emit:l}):T(d,null)),b=e.props?o:hg(o)}}catch(T){Qr.length=0,qo(T,n,1),p=At(cn)}let A=p;if(b&&S!==!1){const T=Object.keys(b),{shapeFlag:N}=A;T.length&&N&7&&(r&&T.some(Vo)&&(b=pg(b,r)),A=fs(A,b,!1,!0))}return t.dirs&&(A=fs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&ra(A,t.transition),p=A,yo(m),p}const hg=n=>{let e;for(const t in n)(t==="class"||t==="style"||zo(t))&&((e||(e={}))[t]=n[t]);return e},pg=(n,e)=>{const t={};for(const i in n)(!Vo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function mg(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Sp(a,i,f)&&!Yo(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Bf(i,a,c):!0:!!a;return!1}function Bf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Sp(e,n,r)&&!Yo(t,r))return!0}return!1}function Sp(n,e,t){const i=n[t],s=e[t];return t==="style"&&mt(i)&&mt(s)?!Au(i,s):i!==s}function gg({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Mp={},bp=()=>Object.create(Mp),yp=n=>Object.getPrototypeOf(n)===Mp;function _g(n,e,t,i=!1){const s={},r=bp();n.propsDefaults=Object.create(null),Ep(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:E0(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function vg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=ht(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Yo(n.emitsOptions,f))continue;const h=e[f];if(l)if(pt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const _=Xn(f);s[_]=xc(l,o,_,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Ep(n,e,s,r)&&(c=!0);let u;for(const d in o)(!e||!pt(e,d)&&((u=zs(d))===d||!pt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=xc(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!e||!pt(e,d))&&(delete r[d],c=!0)}c&&Ci(n.attrs,"set","")}function Ep(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if($r(l))continue;const c=e[l];let u;s&&pt(s,u=Xn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Yo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=ht(t),c=o||bt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=xc(s,l,d,c[d],n,!pt(c,d))}}return a}function xc(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=pt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&et(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=_a(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===zs(t))&&(i=!0))}return i}const xg=new WeakMap;function Tp(n,e,t=!1){const i=t?xg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!et(n)){const u=d=>{l=!0;const[f,h]=Tp(d,e,!0);Xt(a,f),h&&o.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return mt(n)&&i.set(n,cr),cr;if(qe(r))for(let u=0;u<r.length;u++){const d=Xn(r[u]);kf(d)&&(a[d]=bt)}else if(r)for(const u in r){const d=Xn(u);if(kf(d)){const f=r[u],h=a[d]=qe(f)||et(f)?{type:f}:Xt({},f),_=h.type;let S=!1,m=!0;if(qe(_))for(let p=0;p<_.length;++p){const b=_[p],A=et(b)&&b.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(m=!1)}else S=et(_)&&_.name==="Boolean";h[0]=S,h[1]=m,(S||pt(h,"default"))&&o.push(d)}}const c=[a,o];return mt(n)&&i.set(n,c),c}function kf(n){return n[0]!=="$"&&!$r(n)}const Fu=n=>n==="_"||n==="_ctx"||n==="$stable",Ou=n=>qe(n)?n.map(si):[si(n)],Sg=(n,e,t)=>{if(e._n)return e;const i=Us((...s)=>Ou(e(...s)),t);return i._c=!1,i},Ap=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Fu(s))continue;const r=n[s];if(et(r))e[s]=Sg(s,r,i);else if(r!=null){const a=Ou(r);e[s]=()=>a}}},wp=(n,e)=>{const t=Ou(e);n.slots.default=()=>t},Cp=(n,e,t)=>{for(const i in e)(t||!Fu(i))&&(n[i]=e[i])},Mg=(n,e,t)=>{const i=n.slots=bp();if(n.vnode.shapeFlag&32){const s=e._;s?(Cp(i,e,t),t&&Uh(i,"_",s,!0)):Ap(e,i)}else e&&wp(n,e)},bg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=bt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Cp(s,e,t):(r=!e.$stable,Ap(e,s)),a=e}else e&&(wp(n,e),a={default:1});if(r)for(const o in s)!Fu(o)&&a[o]==null&&delete s[o]},mn=wg;function yg(n){return Eg(n)}function Eg(n,e){const t=Ho();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ui,insertStaticContent:_}=n,S=(R,U,Y,ne=null,g=null,C=null,P=void 0,z=null,M=!!U.dynamicChildren)=>{if(R===U)return;R&&!ws(R,U)&&(ne=Ce(R),Ie(R,g,C,!0),R=null),U.patchFlag===-2&&(M=!1,U.dynamicChildren=null);const{type:O,ref:j,shapeFlag:Q}=U;switch(O){case jo:m(R,U,Y,ne);break;case cn:p(R,U,Y,ne);break;case ao:R==null&&b(U,Y,ne,P);break;case kt:B(R,U,Y,ne,g,C,P,z,M);break;default:Q&1?N(R,U,Y,ne,g,C,P,z,M):Q&6?J(R,U,Y,ne,g,C,P,z,M):(Q&64||Q&128)&&O.process(R,U,Y,ne,g,C,P,z,M,pe)}j!=null&&g?jr(j,R&&R.ref,C,U||R,!U):j==null&&R&&R.ref!=null&&jr(R.ref,null,C,R,!0)},m=(R,U,Y,ne)=>{if(R==null)i(U.el=o(U.children),Y,ne);else{const g=U.el=R.el;U.children!==R.children&&c(g,U.children)}},p=(R,U,Y,ne)=>{R==null?i(U.el=l(U.children||""),Y,ne):U.el=R.el},b=(R,U,Y,ne)=>{[R.el,R.anchor]=_(R.children,U,Y,ne,R.el,R.anchor)},A=({el:R,anchor:U},Y,ne)=>{let g;for(;R&&R!==U;)g=f(R),i(R,Y,ne),R=g;i(U,Y,ne)},T=({el:R,anchor:U})=>{let Y;for(;R&&R!==U;)Y=f(R),s(R),R=Y;s(U)},N=(R,U,Y,ne,g,C,P,z,M)=>{if(U.type==="svg"?P="svg":U.type==="math"&&(P="mathml"),R==null)D(U,Y,ne,g,C,P,z,M);else{const O=R.el&&R.el._isVueCE?R.el:null;try{O&&O._beginPatch(),w(R,U,g,C,P,z,M)}finally{O&&O._endPatch()}}},D=(R,U,Y,ne,g,C,P,z)=>{let M,O;const{props:j,shapeFlag:Q,transition:q,dirs:ce}=R;if(M=R.el=a(R.type,C,j&&j.is,j),Q&8?u(M,R.children):Q&16&&x(R.children,M,null,ne,g,hl(R,C),P,z),ce&&gs(R,null,ne,"created"),I(M,R,R.scopeId,P,ne),j){for(const v in j)v!=="value"&&!$r(v)&&r(M,v,null,j[v],C,ne);"value"in j&&r(M,"value",null,j.value,C),(O=j.onVnodeBeforeMount)&&Jn(O,ne,R)}ce&&gs(R,null,ne,"beforeMount");const y=Tg(g,q);y&&q.beforeEnter(M),i(M,U,Y),((O=j&&j.onVnodeMounted)||y||ce)&&mn(()=>{try{O&&Jn(O,ne,R),y&&q.enter(M),ce&&gs(R,null,ne,"mounted")}finally{}},g)},I=(R,U,Y,ne,g)=>{if(Y&&h(R,Y),ne)for(let C=0;C<ne.length;C++)h(R,ne[C]);if(g){let C=g.subTree;if(U===C||Dp(C.type)&&(C.ssContent===U||C.ssFallback===U)){const P=g.vnode;I(R,P,P.scopeId,P.slotScopeIds,g.parent)}}},x=(R,U,Y,ne,g,C,P,z,M=0)=>{for(let O=M;O<R.length;O++){const j=R[O]=z?Ti(R[O]):si(R[O]);S(null,j,U,Y,ne,g,C,P,z)}},w=(R,U,Y,ne,g,C,P)=>{const z=U.el=R.el;let{patchFlag:M,dynamicChildren:O,dirs:j}=U;M|=R.patchFlag&16;const Q=R.props||bt,q=U.props||bt;let ce;if(Y&&_s(Y,!1),(ce=q.onVnodeBeforeUpdate)&&Jn(ce,Y,U,R),j&&gs(U,R,Y,"beforeUpdate"),Y&&_s(Y,!0),(Q.innerHTML&&q.innerHTML==null||Q.textContent&&q.textContent==null)&&u(z,""),O?k(R.dynamicChildren,O,z,Y,ne,hl(U,g),C):P||oe(R,U,z,null,Y,ne,hl(U,g),C,!1),M>0){if(M&16)F(z,Q,q,Y,g);else if(M&2&&Q.class!==q.class&&r(z,"class",null,q.class,g),M&4&&r(z,"style",Q.style,q.style,g),M&8){const y=U.dynamicProps;for(let v=0;v<y.length;v++){const W=y[v],ie=Q[W],ue=q[W];(ue!==ie||W==="value")&&r(z,W,ie,ue,g,Y)}}M&1&&R.children!==U.children&&u(z,U.children)}else!P&&O==null&&F(z,Q,q,Y,g);((ce=q.onVnodeUpdated)||j)&&mn(()=>{ce&&Jn(ce,Y,U,R),j&&gs(U,R,Y,"updated")},ne)},k=(R,U,Y,ne,g,C,P)=>{for(let z=0;z<U.length;z++){const M=R[z],O=U[z],j=M.el&&(M.type===kt||!ws(M,O)||M.shapeFlag&198)?d(M.el):Y;S(M,O,j,null,ne,g,C,P,!0)}},F=(R,U,Y,ne,g)=>{if(U!==Y){if(U!==bt)for(const C in U)!$r(C)&&!(C in Y)&&r(R,C,U[C],null,g,ne);for(const C in Y){if($r(C))continue;const P=Y[C],z=U[C];P!==z&&C!=="value"&&r(R,C,z,P,g,ne)}"value"in Y&&r(R,"value",U.value,Y.value,g)}},B=(R,U,Y,ne,g,C,P,z,M)=>{const O=U.el=R?R.el:o(""),j=U.anchor=R?R.anchor:o("");let{patchFlag:Q,dynamicChildren:q,slotScopeIds:ce}=U;ce&&(z=z?z.concat(ce):ce),R==null?(i(O,Y,ne),i(j,Y,ne),x(U.children||[],Y,j,g,C,P,z,M)):Q>0&&Q&64&&q&&R.dynamicChildren&&R.dynamicChildren.length===q.length?(k(R.dynamicChildren,q,Y,g,C,P,z),(U.key!=null||g&&U===g.subTree)&&Rp(R,U,!0)):oe(R,U,Y,j,g,C,P,z,M)},J=(R,U,Y,ne,g,C,P,z,M)=>{U.slotScopeIds=z,R==null?U.shapeFlag&512?g.ctx.activate(U,Y,ne,P,M):re(U,Y,ne,g,C,P,M):X(R,U,M)},re=(R,U,Y,ne,g,C,P)=>{const z=R.component=Ng(R,ne,g);if($o(R)&&(z.ctx.renderer=pe),Ug(z,!1,P),z.asyncDep){if(g&&g.registerDep(z,Z,P),!R.el){const M=z.subTree=At(cn);p(null,M,U,Y),R.placeholder=M.el}}else Z(z,R,U,Y,g,C,P)},X=(R,U,Y)=>{const ne=U.component=R.component;if(mg(R,U,Y))if(ne.asyncDep&&!ne.asyncResolved){$(ne,U,Y);return}else ne.next=U,ne.update();else U.el=R.el,ne.vnode=U},Z=(R,U,Y,ne,g,C,P)=>{const z=()=>{if(R.isMounted){let{next:Q,bu:q,u:ce,parent:y,vnode:v}=R;{const xe=Pp(R);if(xe){Q&&(Q.el=v.el,$(R,Q,P)),xe.asyncDep.then(()=>{mn(()=>{R.isUnmounted||O()},g)});return}}let W=Q,ie;_s(R,!1),Q?(Q.el=v.el,$(R,Q,P)):Q=v,q&&so(q),(ie=Q.props&&Q.props.onVnodeBeforeUpdate)&&Jn(ie,y,Q,v),_s(R,!0);const ue=Of(R),ge=R.subTree;R.subTree=ue,S(ge,ue,d(ge.el),Ce(ge),R,g,C),Q.el=ue.el,W===null&&gg(R,ue.el),ce&&mn(ce,g),(ie=Q.props&&Q.props.onVnodeUpdated)&&mn(()=>Jn(ie,y,Q,v),g)}else{let Q;const{el:q,props:ce}=U,{bm:y,m:v,parent:W,root:ie,type:ue}=R,ge=Zr(U);_s(R,!1),y&&so(y),!ge&&(Q=ce&&ce.onVnodeBeforeMount)&&Jn(Q,W,U),_s(R,!0);{ie.ce&&ie.ce._hasShadowRoot()&&ie.ce._injectChildStyle(ue,R.parent?R.parent.type:void 0);const xe=R.subTree=Of(R);S(null,xe,Y,ne,R,g,C),U.el=xe.el}if(v&&mn(v,g),!ge&&(Q=ce&&ce.onVnodeMounted)){const xe=U;mn(()=>Jn(Q,W,xe),g)}(U.shapeFlag&256||W&&Zr(W.vnode)&&W.vnode.shapeFlag&256)&&R.a&&mn(R.a,g),R.isMounted=!0,U=Y=ne=null}};R.scope.on();const M=R.effect=new kh(z);R.scope.off();const O=R.update=M.run.bind(M),j=R.job=M.runIfDirty.bind(M);j.i=R,j.id=R.uid,M.scheduler=()=>Uu(j),_s(R,!0),O()},$=(R,U,Y)=>{U.component=R;const ne=R.vnode.props;R.vnode=U,R.next=null,vg(R,U.props,ne,Y),bg(R,U.children,Y),Fi(),Rf(R),Oi()},oe=(R,U,Y,ne,g,C,P,z,M=!1)=>{const O=R&&R.children,j=R?R.shapeFlag:0,Q=U.children,{patchFlag:q,shapeFlag:ce}=U;if(q>0){if(q&128){Ae(O,Q,Y,ne,g,C,P,z,M);return}else if(q&256){ve(O,Q,Y,ne,g,C,P,z,M);return}}ce&8?(j&16&&fe(O,g,C),Q!==O&&u(Y,Q)):j&16?ce&16?Ae(O,Q,Y,ne,g,C,P,z,M):fe(O,g,C,!0):(j&8&&u(Y,""),ce&16&&x(Q,Y,ne,g,C,P,z,M))},ve=(R,U,Y,ne,g,C,P,z,M)=>{R=R||cr,U=U||cr;const O=R.length,j=U.length,Q=Math.min(O,j);let q;for(q=0;q<Q;q++){const ce=U[q]=M?Ti(U[q]):si(U[q]);S(R[q],ce,Y,null,g,C,P,z,M)}O>j?fe(R,g,C,!0,!1,Q):x(U,Y,ne,g,C,P,z,M,Q)},Ae=(R,U,Y,ne,g,C,P,z,M)=>{let O=0;const j=U.length;let Q=R.length-1,q=j-1;for(;O<=Q&&O<=q;){const ce=R[O],y=U[O]=M?Ti(U[O]):si(U[O]);if(ws(ce,y))S(ce,y,Y,null,g,C,P,z,M);else break;O++}for(;O<=Q&&O<=q;){const ce=R[Q],y=U[q]=M?Ti(U[q]):si(U[q]);if(ws(ce,y))S(ce,y,Y,null,g,C,P,z,M);else break;Q--,q--}if(O>Q){if(O<=q){const ce=q+1,y=ce<j?U[ce].el:ne;for(;O<=q;)S(null,U[O]=M?Ti(U[O]):si(U[O]),Y,y,g,C,P,z,M),O++}}else if(O>q)for(;O<=Q;)Ie(R[O],g,C,!0),O++;else{const ce=O,y=O,v=new Map;for(O=y;O<=q;O++){const be=U[O]=M?Ti(U[O]):si(U[O]);be.key!=null&&v.set(be.key,O)}let W,ie=0;const ue=q-y+1;let ge=!1,xe=0;const ae=new Array(ue);for(O=0;O<ue;O++)ae[O]=0;for(O=ce;O<=Q;O++){const be=R[O];if(ie>=ue){Ie(be,g,C,!0);continue}let we;if(be.key!=null)we=v.get(be.key);else for(W=y;W<=q;W++)if(ae[W-y]===0&&ws(be,U[W])){we=W;break}we===void 0?Ie(be,g,C,!0):(ae[we-y]=O+1,we>=xe?xe=we:ge=!0,S(be,U[we],Y,null,g,C,P,z,M),ie++)}const de=ge?Ag(ae):cr;for(W=de.length-1,O=ue-1;O>=0;O--){const be=y+O,we=U[be],ye=U[be+1],Ee=be+1<j?ye.el||Lp(ye):ne;ae[O]===0?S(null,we,Y,Ee,g,C,P,z,M):ge&&(W<0||O!==de[W]?De(we,Y,Ee,2):W--)}}},De=(R,U,Y,ne,g=null)=>{const{el:C,type:P,transition:z,children:M,shapeFlag:O}=R;if(O&6){De(R.component.subTree,U,Y,ne);return}if(O&128){R.suspense.move(U,Y,ne);return}if(O&64){P.move(R,U,Y,pe);return}if(P===kt){i(C,U,Y);for(let Q=0;Q<M.length;Q++)De(M[Q],U,Y,ne);i(R.anchor,U,Y);return}if(P===ao){A(R,U,Y);return}if(ne!==2&&O&1&&z)if(ne===0)z.persisted&&!C[Pn]?i(C,U,Y):(z.beforeEnter(C),i(C,U,Y),mn(()=>z.enter(C),g));else{const{leave:Q,delayLeave:q,afterLeave:ce}=z,y=()=>{R.ctx.isUnmounted?s(C):i(C,U,Y)},v=()=>{const W=C._isLeaving||!!C[Pn];C._isLeaving&&C[Pn](!0),z.persisted&&!W?y():Q(C,()=>{y(),ce&&ce()})};q?q(C,y,v):v()}else i(C,U,Y)},Ie=(R,U,Y,ne=!1,g=!1)=>{const{type:C,props:P,ref:z,children:M,dynamicChildren:O,shapeFlag:j,patchFlag:Q,dirs:q,cacheIndex:ce,memo:y}=R;if(Q===-2&&(g=!1),z!=null&&(Fi(),jr(z,null,Y,R,!0),Oi()),ce!=null&&(U.renderCache[ce]=void 0),j&256){U.ctx.deactivate(R);return}const v=j&1&&q,W=!Zr(R);let ie;if(W&&(ie=P&&P.onVnodeBeforeUnmount)&&Jn(ie,U,R),j&6)We(R.component,Y,ne);else{if(j&128){R.suspense.unmount(Y,ne);return}v&&gs(R,null,U,"beforeUnmount"),j&64?R.type.remove(R,U,Y,pe,ne):O&&!O.hasOnce&&(C!==kt||Q>0&&Q&64)?fe(O,U,Y,!1,!0):(C===kt&&Q&384||!g&&j&16)&&fe(M,U,Y),ne&&tt(R)}const ue=y!=null&&ce==null;(W&&(ie=P&&P.onVnodeUnmounted)||v||ue)&&mn(()=>{ie&&Jn(ie,U,R),v&&gs(R,null,U,"unmounted"),ue&&(R.el=null)},Y)},tt=R=>{const{type:U,el:Y,anchor:ne,transition:g}=R;if(U===kt){ot(Y,ne);return}if(U===ao){T(R);return}const C=()=>{s(Y),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(R.shapeFlag&1&&g&&!g.persisted){const{leave:P,delayLeave:z}=g,M=()=>P(Y,C);z?z(R.el,C,M):M()}else C()},ot=(R,U)=>{let Y;for(;R!==U;)Y=f(R),s(R),R=Y;s(U)},We=(R,U,Y)=>{const{bum:ne,scope:g,job:C,subTree:P,um:z,m:M,a:O}=R;zf(M),zf(O),ne&&so(ne),g.stop(),C&&(C.flags|=8,Ie(P,R,U,Y)),z&&mn(z,U),mn(()=>{R.isUnmounted=!0},U)},fe=(R,U,Y,ne=!1,g=!1,C=0)=>{for(let P=C;P<R.length;P++)Ie(R[P],U,Y,ne,g)},Ce=R=>{if(R.shapeFlag&6)return Ce(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const U=f(R.anchor||R.el),Y=U&&U[V0];return Y?f(Y):U};let Me=!1;const Ve=(R,U,Y)=>{let ne;R==null?U._vnode&&(Ie(U._vnode,null,null,!0),ne=U._vnode.component):S(U._vnode||null,R,U,null,null,null,Y),U._vnode=R,Me||(Me=!0,Rf(ne),np(),Me=!1)},pe={p:S,um:Ie,m:De,r:tt,mt:re,mc:x,pc:oe,pbc:k,n:Ce,o:n};return{render:Ve,hydrate:void 0,createApp:cg(Ve)}}function hl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _s({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Tg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Rp(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Ti(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Rp(a,o)),o.type===jo&&(o.patchFlag===-1&&(o=s[r]=Ti(o)),o.el=a.el),o.type===cn&&!o.el&&(o.el=a.el)}}function Ag(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Pp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pp(e)}function zf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Lp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Lp(e.subTree):null}const Dp=n=>n.__isSuspense;function wg(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):U0(n)}const kt=Symbol.for("v-fgt"),jo=Symbol.for("v-txt"),cn=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),Qr=[];let yn=null;function Oe(n=!1){Qr.push(yn=n?null:[])}function Cg(){Qr.pop(),yn=Qr[Qr.length-1]||null}let aa=1;function Ao(n,e=!1){aa+=n,n<0&&yn&&e&&(yn.hasOnce=!0)}function Ip(n){return n.dynamicChildren=aa>0?yn||cr:null,Cg(),aa>0&&yn&&yn.push(n),n}function He(n,e,t,i,s,r){return Ip(G(n,e,t,i,s,r,!0))}function ni(n,e,t,i,s){return Ip(At(n,e,t,i,s,!0))}function wo(n){return n?n.__v_isVNode===!0:!1}function ws(n,e){return n.type===e.type&&n.key===e.key}const Np=({key:n})=>n??null,oo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ct(n)||nn(n)||et(n)?{i:Dn,r:n,k:e,f:!!t}:n:null);function G(n,e=null,t=null,i=0,s=null,r=n===kt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Np(e),ref:e&&oo(e),scopeId:sp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dn};return o?(ku(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),aa>0&&!a&&yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yn.push(l),l}const At=Rg;function Rg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===tg)&&(n=cn),wo(n)){const o=fs(n,e,!0);return t&&ku(o,t),aa>0&&!r&&yn&&(o.shapeFlag&6?yn[yn.indexOf(n)]=o:yn.push(o)),o.patchFlag=-2,o}if(kg(n)&&(n=n.__vccOpts),e){e=Pg(e);let{class:o,style:l}=e;o&&!Ct(o)&&(e.class=Bt(o)),mt(l)&&(Iu(l)&&!qe(l)&&(l=Xt({},l)),e.style=us(l))}const a=Ct(n)?1:Dp(n)?128:op(n)?64:mt(n)?4:et(n)?2:0;return G(n,e,t,i,s,a,r,!0)}function Pg(n){return n?Iu(n)||yp(n)?Xt({},n):n:null}function fs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Lg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Np(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(oo(e)):[r,oo(e)]:oo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==kt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fs(n.ssContent),ssFallback:n.ssFallback&&fs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ra(u,l.clone(u)),u}function Fs(n=" ",e=0){return At(jo,null,n,e)}function Bu(n,e){const t=At(ao,null,n);return t.staticCount=e,t}function fn(n="",e=!1){return e?(Oe(),ni(cn,null,n)):At(cn,null,n)}function si(n){return n==null||typeof n=="boolean"?At(cn):qe(n)?At(kt,null,n.slice()):wo(n)?Ti(n):At(jo,null,String(n))}function Ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fs(n)}function ku(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ku(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!yp(e)?e._ctx=Dn:s===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else et(e)?(e={default:e,_ctx:Dn},t=32):(e=String(e),i&64?(t=16,e=[Fs(e)]):t=8);n.children=e,n.shapeFlag|=t}function Lg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Bt([e.class,i.class]));else if(s==="style")e.style=us([e.style,i.style]);else if(zo(s)){const r=e[s],a=i[s];a&&r!==a&&!(qe(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Vo(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Jn(n,e,t,i=null){On(n,e,7,[t,i])}const Dg=vp();let Ig=0;function Ng(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Dg,r={uid:Ig++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tp(i,s),emitsOptions:xp(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fg.bind(null,r),n.ce&&n.ce(r),r}let un=null;const Up=()=>un||Dn;let Co,Sc;{const n=Ho(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Co=e("__VUE_INSTANCE_SETTERS__",t=>un=t),Sc=e("__VUE_SSR_SETTERS__",t=>oa=t)}const _a=n=>{const e=un;return Co(n),n.scope.on(),()=>{n.scope.off(),Co(e)}},Vf=()=>{un&&un.scope.off(),Co(null)};function Fp(n){return n.vnode.shapeFlag&4}let oa=!1;function Ug(n,e=!1,t=!1){e&&Sc(e);const{props:i,children:s}=n.vnode,r=Fp(n);_g(n,i,r,e),Mg(n,s,t||e);const a=r?Fg(n,e):void 0;return e&&Sc(!1),a}function Fg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ng);const{setup:i}=t;if(i){Fi();const s=n.setupContext=i.length>1?Bg(n):null,r=_a(n),a=ga(i,n,0,[n.props,s]),o=Lh(a);if(Oi(),r(),(o||n.sp)&&!Zr(n)&&hp(n),o){if(a.then(Vf,Vf),e)return a.then(l=>{Gf(n,l)}).catch(l=>{qo(l,n,0)});n.asyncDep=a}else Gf(n,a)}else Op(n)}function Gf(n,e,t){et(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=Qh(e)),Op(n)}function Op(n,e,t){const i=n.type;n.render||(n.render=i.render||ui);{const s=_a(n);Fi();try{ig(n)}finally{Oi(),s()}}}const Og={get(n,e){return en(n,"get",""),n[e]}};function Bg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Og),slots:n.slots,emit:n.emit,expose:e}}function Zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qh(T0(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Jr)return Jr[t](n)},has(e,t){return t in e||t in Jr}})):n.proxy}function kg(n){return et(n)&&"__vccOpts"in n}const wt=(n,e)=>P0(n,e,oa);function zg(n,e,t){try{Ao(-1);const i=arguments.length;return i===2?mt(e)&&!qe(e)?wo(e)?At(n,null,[e]):At(n,e):At(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&wo(t)&&(t=[t]),At(n,e,t))}finally{Ao(1)}}const Vg="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mc;const Hf=typeof window<"u"&&window.trustedTypes;if(Hf)try{Mc=Hf.createPolicy("vue",{createHTML:n=>n})}catch{}const Bp=Mc?n=>Mc.createHTML(n):n=>n,Gg="http://www.w3.org/2000/svg",Hg="http://www.w3.org/1998/Math/MathML",Ei=typeof document<"u"?document:null,Wf=Ei&&Ei.createElement("template"),Wg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ei.createElementNS(Gg,n):e==="mathml"?Ei.createElementNS(Hg,n):t?Ei.createElement(n,{is:t}):Ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ei.createTextNode(n),createComment:n=>Ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Wf.innerHTML=Bp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Wf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qi="transition",Pr="animation",la=Symbol("_vtc"),kp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xg=Xt({},lp,kp),qg=n=>(n.displayName="Transition",n.props=Xg,n),vr=qg((n,{slots:e})=>zg(W0,$g(n),e)),vs=(n,e=[])=>{qe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Xf=n=>n?qe(n)?n.some(e=>e.length>1):n.length>1:!1;function $g(n){const e={};for(const B in n)B in kp||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,_=Kg(s),S=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:b,onEnterCancelled:A,onLeave:T,onLeaveCancelled:N,onBeforeAppear:D=p,onAppear:I=b,onAppearCancelled:x=A}=e,w=(B,J,re,X)=>{B._enterCancelled=X,xs(B,J?u:o),xs(B,J?c:a),re&&re()},k=(B,J)=>{B._isLeaving=!1,xs(B,d),xs(B,h),xs(B,f),J&&J()},F=B=>(J,re)=>{const X=B?I:b,Z=()=>w(J,B,re);vs(X,[J,Z]),qf(()=>{xs(J,B?l:r),vi(J,B?u:o),Xf(X)||$f(J,i,S,Z)})};return Xt(e,{onBeforeEnter(B){vs(p,[B]),vi(B,r),vi(B,a)},onBeforeAppear(B){vs(D,[B]),vi(B,l),vi(B,c)},onEnter:F(!1),onAppear:F(!0),onLeave(B,J){B._isLeaving=!0;const re=()=>k(B,J);vi(B,d),B._enterCancelled?(vi(B,f),jf(B)):(jf(B),vi(B,f)),qf(()=>{B._isLeaving&&(xs(B,d),vi(B,h),Xf(T)||$f(B,i,m,re))}),vs(T,[B,re])},onEnterCancelled(B){w(B,!1,void 0,!0),vs(A,[B])},onAppearCancelled(B){w(B,!0,void 0,!0),vs(x,[B])},onLeaveCancelled(B){k(B),vs(N,[B])}})}function Kg(n){if(n==null)return null;if(mt(n))return[pl(n.enter),pl(n.leave)];{const e=pl(n);return[e,e]}}function pl(n){return Zm(n)}function vi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[la]||(n[la]=new Set)).add(e)}function xs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[la];t&&(t.delete(e),t.size||(n[la]=void 0))}function qf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Yg=0;function $f(n,e,t,i){const s=n._endId=++Yg,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=jg(n,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,f),r()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,f)}function jg(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${qi}Delay`),r=i(`${qi}Duration`),a=Kf(s,r),o=i(`${Pr}Delay`),l=i(`${Pr}Duration`),c=Kf(o,l);let u=null,d=0,f=0;e===qi?a>0&&(u=qi,d=a,f=r.length):e===Pr?c>0&&(u=Pr,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?qi:Pr:null,f=u?u===qi?r.length:l.length:0);const h=u===qi&&/\b(?:transform|all)(?:,|$)/.test(i(`${qi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Kf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Yf(t)+Yf(n[i])))}function Yf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function jf(n){return(n?n.ownerDocument:document).body.offsetHeight}function Zg(n,e,t){const i=n[la];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Zf=Symbol("_vod"),Jg=Symbol("_vsh"),Qg=Symbol(""),e_=/(?:^|;)\s*display\s*:/;function t_(n,e,t){const i=n.style,s=Ct(t);let r=!1;if(t&&!s){if(e)if(Ct(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Hr(i,o,"")}else for(const a in e)t[a]==null&&Hr(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?i_(n,a,!Ct(e)&&e?e[a]:void 0,o)||Hr(i,a,o):Hr(i,a,"")}}else if(s){if(e!==t){const a=i[Qg];a&&(t+=";"+a),i.cssText=t,r=e_.test(t)}}else e&&n.removeAttribute("style");Zf in n&&(n[Zf]=r?i.display:"",n[Jg]&&(i.display="none"))}const Jf=/\s*!important$/;function Hr(n,e,t){if(qe(t))t.forEach(i=>Hr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=n_(n,e);Jf.test(t)?n.setProperty(zs(i),t.replace(Jf,""),"important"):n[i]=t}}const Qf=["Webkit","Moz","ms"],ml={};function n_(n,e){const t=ml[e];if(t)return t;let i=Xn(e);if(i!=="filter"&&i in n)return ml[e]=i;i=Nh(i);for(let s=0;s<Qf.length;s++){const r=Qf[s]+i;if(r in n)return ml[e]=r}return e}function i_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ct(i)&&t===i}const ed="http://www.w3.org/1999/xlink";function td(n,e,t,i,s,r=i0(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ed,e.slice(6,e.length)):n.setAttributeNS(ed,e,t):t==null||r&&!Fh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":pi(t)?String(t):t)}function nd(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Bp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Fh(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function rr(n,e,t,i){n.addEventListener(e,t,i)}function s_(n,e,t,i){n.removeEventListener(e,t,i)}const id=Symbol("_vei");function r_(n,e,t,i,s=null){const r=n[id]||(n[id]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=a_(e);if(i){const c=r[e]=c_(i,s);rr(n,o,c,l)}else a&&(s_(n,o,a,l),r[e]=void 0)}}const sd=/(?:Once|Passive|Capture)$/;function a_(n){let e;if(sd.test(n)){e={};let i;for(;i=n.match(sd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zs(n.slice(2)),e]}let gl=0;const o_=Promise.resolve(),l_=()=>gl||(o_.then(()=>gl=0),gl=Date.now());function c_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(qe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&On(c,e,5,o)}}else On(s,e,5,[i])};return t.value=n,t.attached=l_(),t}const rd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,u_=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Zg(n,i,a):e==="style"?t_(n,t,i):zo(e)?Vo(e)||r_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f_(n,e,i,a))?(nd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&td(n,e,i,a,r,e!=="value")):n._isVueCE&&(d_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ct(i)))?nd(n,Xn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),td(n,e,i,a))};function f_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&rd(e)&&et(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rd(e)&&Ct(t)?!1:e in n}function d_(n,e){const t=n._def.props;if(!t)return!1;const i=Xn(e);return Array.isArray(t)?t.some(s=>Xn(s)===i):Object.keys(t).some(s=>Xn(s)===i)}const ad=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>so(e,t):e};function h_(n){n.target.composing=!0}function od(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _l=Symbol("_assign");function ld(n,e,t){return e&&(n=n.trim()),t&&(n=Tu(n)),n}const p_={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[_l]=ad(s);const r=i||s.props&&s.props.type==="number";rr(n,e?"change":"input",a=>{a.target.composing||n[_l](ld(n.value,t,r))}),(t||r)&&rr(n,"change",()=>{n.value=ld(n.value,t,r)}),e||(rr(n,"compositionstart",h_),rr(n,"compositionend",od),rr(n,"change",od))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[_l]=ad(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Tu(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},m_=["ctrl","shift","alt","meta"],g_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>m_.some(t=>n[`${t}Key`]&&!e.includes(t))},ca=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=g_[e[a]];if(o&&o(s,e))return}return n(s,...r)})},__=Xt({patchProp:u_},Wg);let cd;function v_(){return cd||(cd=yg(__))}const x_=(...n)=>{const e=v_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=M_(i);if(!s)return;const r=e._component;!et(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,S_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function S_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function M_(n){return Ct(n)?document.querySelector(n):n}const L=Xo({gameState:"LOADING",isPaused:!1,currentNight:1,inGameTime:0,battery:100,floodlightAlpha:0,floodlightCamera:null,floodlightFoxVisible:!1,floodlightCatVisible:!1,floodlightCooldown:0,activeCamera:1,cameraActive:!0,cameraLensDirt:[0,0,0,0],cameraDirtBlocked:[!1,!1,!1,!1],cameraOffline:[!1,!1,!1,!1],faultyCamera:null,calibratingCamera:null,calibrationProgress:0,gameOverReason:"fox",foxPosition:0,foxConfirmedPosition:null,ghostFoxPosition:null,nightsCleared:[],bestBattery:{},totalNightsCleared:0,menuSoundMuted:!1,reducedMotion:!1});function Kt(n){L.gameState=n}const zp="fnhh_settings";function va(){try{return JSON.parse(localStorage.getItem(zp)??"{}")}catch{return{}}}function ls(n){try{const e=va();localStorage.setItem(zp,JSON.stringify({...e,...n}))}catch{}}function Tt(n){return"./"+String(n).replace(/^\/+/,"")}let he=null;const ea=[];let Ai=null,hr=null,bc=null,yc=.15,Ec=0,Dt=null,$i=null,Aa=null,Ro=1;const Vp=4,b_=1.7;let Gn=null,Cs=null,ln=null,ss=null,In=null,ts=null,rs=null,lo=null,Wn=.5,Gp=0,wi=null,ar=null;function Hp(){if(he)return;he=new(window.AudioContext||window.webkitAudioContext),Dt=he.createGain(),Dt.gain.value=Ro*Vp,$i=he.createDynamicsCompressor(),$i.threshold.value=-6,$i.knee.value=6,$i.ratio.value=12,$i.attack.value=.003,$i.release.value=.25,Aa=he.createGain(),Aa.gain.value=b_,Dt.connect($i),$i.connect(Aa),Aa.connect(he.destination);const n=()=>{he&&he.state==="suspended"&&he.resume().then(()=>{Po()})};window.addEventListener("click",n,{once:!0}),window.addEventListener("keydown",n,{once:!0})}function Tr(n){const e=Math.floor(he.sampleRate*n),t=he.createBuffer(1,e,he.sampleRate),i=t.getChannelData(0);for(let s=0;s<e;s++)i[s]=Math.random()*2-1;return t}function zu(n,e){if(e){const t=he.createBiquadFilter();t.type="lowpass",t.frequency.value=400,n.connect(t),t.connect(Dt)}else n.connect(Dt)}function y_(n,e,t){const i=he.currentTime,s=he.createBufferSource();s.buffer=Tr(.28);const r=he.createGain();r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(e*.22,i+.025),r.gain.exponentialRampToValueAtTime(1e-4,i+.28);const a=he.createBiquadFilter();a.type="bandpass",a.frequency.value=700,a.Q.value=1.8;const o=he.createStereoPanner();o.pan.value=n,s.connect(r),r.connect(a),a.connect(o),zu(o,t),s.start(i)}function E_(n,e,t){const i=he.currentTime,s=he.createOscillator();s.type="sine",s.frequency.setValueAtTime(160,i),s.frequency.exponentialRampToValueAtTime(45,i+.18);const r=he.createGain();r.gain.setValueAtTime(e*.55,i),r.gain.exponentialRampToValueAtTime(1e-4,i+.22);const a=he.createBufferSource();a.buffer=Tr(.14);const o=he.createGain();o.gain.setValueAtTime(e*.18,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.14);const l=he.createBiquadFilter();l.type="lowpass",l.frequency.value=320;const c=he.createStereoPanner();c.pan.value=n,s.connect(r),r.connect(c),a.connect(o),o.connect(l),l.connect(c),zu(c,t),s.start(i),s.stop(i+.22),a.start(i)}function T_(n){const e=he.currentTime,t=he.createOscillator();t.type="square",t.frequency.setValueAtTime(2400,e),t.frequency.exponentialRampToValueAtTime(350,e+.14);const i=he.createGain();i.gain.setValueAtTime(.32,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.14);const s=he.createBiquadFilter();s.type="bandpass",s.frequency.value=1600,s.Q.value=1.2;const r=he.createStereoPanner();r.pan.value=n,t.connect(s),s.connect(i),i.connect(r),zu(r,!1),t.start(e),t.stop(e+.14)}function A_(){const n=he.currentTime,e=he.createOscillator();e.type="sine",e.frequency.setValueAtTime(130,n),e.frequency.exponentialRampToValueAtTime(28,n+2.6);const t=he.createGain();t.gain.setValueAtTime(.55,n),t.gain.setValueAtTime(.55,n+1.8),t.gain.linearRampToValueAtTime(0,n+2.6),e.connect(t),t.connect(Dt),e.start(n),e.stop(n+2.6)}function Tc(n,e,t){const i=he.currentTime,s=t?12:3,r=t?.12:.22,a=t?.08:.4,o=he.createStereoPanner();o.pan.value=n,o.connect(Dt);for(let l=0;l<s;l++){const c=i+l*a,u=he.createOscillator();u.type="triangle";const d=t?800+Math.random()*400:450+Math.random()*150,f=d*.6;u.frequency.setValueAtTime(d,c),u.frequency.exponentialRampToValueAtTime(f,c+r);const h=he.createBiquadFilter();h.type="bandpass",h.frequency.value=t?1800:1200,h.Q.value=3;const _=he.createGain();_.gain.setValueAtTime(0,c),_.gain.linearRampToValueAtTime(e*.4,c+.02),_.gain.exponentialRampToValueAtTime(1e-4,c+r);const S=he.createBufferSource();S.buffer=Tr(r),u.connect(h),h.connect(_),_.connect(o),S.connect(_),u.start(c),u.stop(c+r),S.start(c)}}function w_(){if(!he)return;const n=he.currentTime,e=.8+Math.random()*.4,t=he.createOscillator();t.type="sawtooth";const i=1800+Math.random()*400,s=i*.4;t.frequency.setValueAtTime(i,n),t.frequency.exponentialRampToValueAtTime(s,n+e);const r=he.createOscillator();r.type="sine",r.frequency.value=35;const a=he.createGain();a.gain.value=180,r.connect(a),a.connect(t.frequency);const o=he.createBiquadFilter();o.type="bandpass",o.frequency.value=1400,o.Q.value=2;const l=he.createGain();l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(.015,n+.05),l.gain.exponentialRampToValueAtTime(1e-4,n+e);const c=he.createStereoPanner();c.pan.value=(Math.random()-.5)*1.6,r.start(n),t.connect(o),o.connect(l),l.connect(c),c.connect(Dt),t.start(n),t.stop(n+e),r.stop(n+e)}function C_(){const n=he.currentTime,e=he.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(120,n),e.frequency.linearRampToValueAtTime(30,n+.15);const t=he.createGain();t.gain.setValueAtTime(.08,n),t.gain.exponentialRampToValueAtTime(1e-4,n+.18);const i=he.createBufferSource();i.buffer=Tr(.18);const s=he.createGain();s.gain.setValueAtTime(.12,n),s.gain.exponentialRampToValueAtTime(1e-4,n+.18),e.connect(t),t.connect(Dt),i.connect(s),s.connect(Dt),e.start(n),e.stop(n+.18),i.start(n)}function R_(){const n=he.currentTime;for(const e of[0,.08]){const t=he.createOscillator();t.type="sine",t.frequency.setValueAtTime(880,n+e),t.frequency.exponentialRampToValueAtTime(1200,n+e+.06);const i=he.createGain();i.gain.setValueAtTime(0,n+e),i.gain.linearRampToValueAtTime(.04,n+e+.01),i.gain.exponentialRampToValueAtTime(1e-4,n+e+.06),t.connect(i),i.connect(Dt),t.start(n+e),t.stop(n+e+.06)}}function P_(){const n=he.currentTime,e=[523.25,659.25,783.99,1046.5];e.forEach((r,a)=>{const o=n+a*.11,l=he.createOscillator();l.type="triangle",l.frequency.setValueAtTime(r,o);const c=he.createOscillator();c.type="sine",c.frequency.setValueAtTime(r*2,o);const u=he.createGain();u.gain.setValueAtTime(0,o),u.gain.linearRampToValueAtTime(.18,o+.02),u.gain.exponentialRampToValueAtTime(1e-4,o+.7);const d=he.createGain();d.gain.setValueAtTime(0,o),d.gain.linearRampToValueAtTime(.05,o+.02),d.gain.exponentialRampToValueAtTime(1e-4,o+.45),l.connect(u),u.connect(Dt),c.connect(d),d.connect(Dt),l.start(o),l.stop(o+.7),c.start(o),c.stop(o+.45)});const t=n+e.length*.11,i=he.createOscillator();i.type="sine",i.frequency.setValueAtTime(1568,t),i.frequency.exponentialRampToValueAtTime(2093,t+.5);const s=he.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.06,t+.05),s.gain.exponentialRampToValueAtTime(1e-4,t+.9),i.connect(s),s.connect(Dt),i.start(t),i.stop(t+.9)}function L_(){if(!he)return;const n=he.currentTime;ss=he.createBufferSource(),ss.buffer=Tr(5),ss.loop=!0,ts=he.createBiquadFilter(),ts.type="lowpass",ts.frequency.value=250,ts.Q.value=1,In=he.createGain(),In.gain.value=Wn*.13,rs=he.createOscillator(),rs.type="sine",rs.frequency.value=.15;const e=he.createGain();e.gain.value=120,rs.connect(e),e.connect(ts.frequency),ss.connect(ts),ts.connect(In),In.connect(Dt),rs.start(n),ss.start(n)}function D_(){if(ss){try{ss.stop()}catch{}ss=null}if(rs){try{rs.stop()}catch{}rs=null}In=null,ts=null}function Wp(){if(!he||!Gn)return;const n=12e3+Math.random()*16e3;lo=setTimeout(()=>{!he||!Gn||(he.state==="running"&&(Math.random()<.35?w_():Tc(.7,.04,!1)),Wp())},n)}function cs(n,{pan:e=0,volume:t=1,throughWall:i=!1}={}){if(he)switch(n){case"fox-rustle":y_(e,t,i);break;case"fox-step":E_(e,t,i);break;case"floodlight":T_(e);break;case"game-over":A_();break;case"chicken-panic":Tc(0,t*1.5,!0);break;case"chicken-idle":Tc(e,t,!1);break;case"camera-glitch":C_();break;case"camera-restore":R_();break;case"trophy-unlock":P_();break}}function I_(){if(!he||Gn)return;ln=he.createGain(),ln.gain.value=0,ln.connect(Dt),Gn=he.createOscillator(),Gn.type="sine",Gn.frequency.value=55,Gn.connect(ln),Gn.start(),Cs=he.createOscillator(),Cs.type="sine",Cs.frequency.value=58;const n=he.createGain();n.gain.value=.5,Cs.connect(n),n.connect(ln),Cs.start(),ln.gain.linearRampToValueAtTime(Wn*.26,he.currentTime+3),L_(),Wp()}const Ki={};let wa=null;function N_(){if(wa)return wa;const n=document.createElement("audio"),e=!!n.canPlayType&&n.canPlayType("audio/mpeg")!=="",t=!!n.canPlayType&&n.canPlayType('audio/ogg; codecs="vorbis"')!=="";return wa=e?"mp3":t?"ogg":"mp3",wa}function U_(n){const e=n.match(/^(.*)\.(mp3|ogg)$/i);if(!e)return[n];const t=e[1];return(N_()==="ogg"?["ogg","mp3"]:["mp3","ogg"]).map(s=>`${t}.${s}`)}async function Vu(n){if(Ki[n])return Ki[n];let e=null;for(const t of U_(n)){if(Ki[t])return Ki[n]=Ki[t],Ki[t];try{const i=await fetch(t);if(!i.ok)throw new Error(`HTTP ${i.status} for ${t}`);const s=await i.arrayBuffer(),r=await he.decodeAudioData(s);return Ki[n]=r,Ki[t]=r,r}catch(i){e=i}}throw e??new Error(`No playable audio source for ${n}`)}let oi=null,Li=null,Ac=0;async function F_(n){if(!he)return;const e=++Ac;try{const t=await Vu(Tt("/assets/audio/chilledchicken.mp3"));if(e!==Ac||!he)return;Li=he.createGain(),Li.gain.value=n*Wn*2,Li.connect(Dt),oi=he.createBufferSource(),oi.buffer=t,oi.loop=!0,oi.connect(Li),oi.start()}catch{}}const O_={2:.04,3:.1,4:.22};function B_(n,e){const t=e?O_[n]??0:0;if(Gp=t,t===0){Jo();return}const i=t*Wn*2;oi&&Li&&he?Li.gain.setTargetAtTime(i,he.currentTime,.25):F_(t)}function Jo(){if(Ac++,oi){try{oi.stop()}catch{}oi=null}Li=null}function k_(){!he||wi||(ar=he.createGain(),ar.gain.value=0,ar.connect(Dt),wi=he.createBufferSource(),wi.buffer=Tr(2),wi.loop=!0,wi.connect(ar),wi.start(),ar.gain.setTargetAtTime(.005,he.currentTime,.3))}function Xp(){if(wi){try{wi.stop()}catch{}wi=null}ar=null}function z_(n){he&&(n?(Xp(),ln&&ln.gain.setTargetAtTime(Wn*.26,he.currentTime,.4),In&&In.gain.setTargetAtTime(Wn*.13,he.currentTime,.4)):(Jo(),ln&&ln.gain.setTargetAtTime(0,he.currentTime,.2),In&&In.gain.setTargetAtTime(0,he.currentTime,.2),k_()))}async function Ca(n,{volume:e=1}={}){if(he)try{const t=await Vu(n),i=he.createGain();i.gain.value=e,i.connect(Dt);const s=he.createBufferSource();s.buffer=t,s.connect(i),ea.push(s),s.onended=()=>{const r=ea.indexOf(s);r!==-1&&ea.splice(r,1)},s.start()}catch{}}function xr(){if(Jo(),Xp(),lo&&(clearTimeout(lo),lo=null),D_(),Gn&&he){const n=Gn,e=Cs,t=ln;Gn=null,Cs=null,ln=null,t&&(t.gain.cancelScheduledValues(he.currentTime),t.gain.setTargetAtTime(0,he.currentTime,.12)),n.stop(he.currentTime+.5),e&&e.stop(he.currentTime+.5)}for(;ea.length>0;){const n=ea.pop();try{n.stop()}catch{}}}function V_(){he&&he.state==="running"&&he.suspend()}function vl(){he&&he.state==="suspended"&&he.resume()}function ud(n){Ro=Math.max(0,Math.min(1,n)),Dt&&(Dt.gain.value=Ro*Vp)}function G_(){return Ro}function fd(n){Wn=Math.max(0,Math.min(1,n)),he&&(ln&&(ln.gain.cancelScheduledValues(he.currentTime),ln.gain.setValueAtTime(Wn*.26,he.currentTime)),In&&(In.gain.cancelScheduledValues(he.currentTime),In.gain.setValueAtTime(Wn*.13,he.currentTime)),Li&&oi&&Li.gain.setTargetAtTime(Gp*Wn*2,he.currentTime,.1))}function H_(){return Wn}async function dd(n,e=.15){if(Hp(),!he)return;if(bc===n&&Ai){yc=e,Po();return}qp();const t=++Ec;bc=n,yc=e;try{const i=await Vu(n);if(t!==Ec||!he)return;hr=he.createGain(),hr.connect(Dt),Ai=he.createBufferSource(),Ai.buffer=i,Ai.loop=!0,Ai.connect(hr),Po(),Ai.start()}catch(i){console.error("[audioSystem] Failed to start BGM:",i)}}function qp(){if(Ec++,bc=null,Ai){try{Ai.stop()}catch{}Ai=null}hr=null}function Po(){if(!hr||!he)return;const n=L.menuSoundMuted?0:yc;hr.gain.value=n}function $p(n){L.menuSoundMuted=!!n,ls({menuSoundMuted:L.menuSoundMuted}),Po()}const dn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},W_={class:"progress-container"},X_={class:"loading-label"},q_={key:0,class:"load-error-hint"},$_={key:0,class:"error-files"},K_={__name:"LoadingScreen",setup(n){const e=dt(0),t=dt(1),i=dt(0),s=dt([]);let r=!1;function a(){var o;if(!r){if(r=!0,!((o=window.createjs)!=null&&o.Tween)){t.value=0,Kt("MAIN_MENU");return}createjs.Tween.get(t).to({value:0},800,createjs.Ease.quadOut).call(()=>Kt("MAIN_MENU"))}}return _n(()=>{var u;if(!((u=window.createjs)!=null&&u.LoadQueue)){console.warn("[LoadingScreen] createjs unavailable — preload skipped."),e.value=1,a();return}const o=new createjs.LoadQueue(!0);o.on("progress",d=>{e.value=d.progress}),o.on("complete",()=>{e.value=1,a()});let l=0;o.on("fileload",()=>{l++,l>=c.length&&i.value>0&&(e.value=1,setTimeout(a,1200))}),o.on("error",d=>{var h;const f=((h=d.data)==null?void 0:h.src)??"Unknown file";i.value++,l++,s.value.push(f.split("/").pop()),console.warn("[LoadingScreen] Asset failed to load:",f),l>=c.length&&(e.value=1,setTimeout(a,1200))});const c=[{id:"cam1-feed-mp4",src:Tt("/assets/video/cam1.mp4"),type:createjs.Types.VIDEO},{id:"cam1-feed-webm",src:Tt("/assets/video/cam1.webm"),type:createjs.Types.VIDEO},{id:"cam2-feed-mp4",src:Tt("/assets/video/cam2.mp4"),type:createjs.Types.VIDEO},{id:"cam2-feed-webm",src:Tt("/assets/video/cam2.webm"),type:createjs.Types.VIDEO},{id:"cam3-feed-mp4",src:Tt("/assets/video/cam3.mp4"),type:createjs.Types.VIDEO},{id:"cam3-feed-webm",src:Tt("/assets/video/cam3.webm"),type:createjs.Types.VIDEO},{id:"cam4-feed-mp4",src:Tt("/assets/video/cam4.mp4"),type:createjs.Types.VIDEO},{id:"cam4-feed-webm",src:Tt("/assets/video/cam4.webm"),type:createjs.Types.VIDEO},{id:"bgm-menu",src:Tt("/assets/audio/foxscream.mp3"),type:createjs.Types.BINARY},{id:"bgm-game",src:Tt("/assets/audio/countrycoop.mp3"),type:createjs.Types.BINARY},{id:"amb-camera",src:Tt("/assets/audio/chilledchicken.mp3"),type:createjs.Types.BINARY},{id:"sfx-gameover-coop",src:Tt("/assets/audio/chickencoop.mp3"),type:createjs.Types.BINARY},{id:"sfx-gameover-flap",src:Tt("/assets/audio/flapping.mp3"),type:createjs.Types.BINARY}];c.length===0?(e.value=1,a()):o.loadManifest(c)}),(o,l)=>(Oe(),He("div",{class:"loading-screen",style:us({opacity:t.value})},[l[1]||(l[1]=G("h1",{class:"loading-title"},"Five Nights at Henhouse's",-1)),G("div",W_,[G("div",{class:"progress-bar",style:us({width:`${e.value*100}%`})},null,4)]),G("p",X_,"Lade Assets … "+it(Math.round(e.value*100))+"%",1),i.value>0?(Oe(),He("p",q_,[Fs(" ⚠ "+it(i.value)+" Asset(s) konnten nicht geladen werden ",1),s.value.length?(Oe(),He("span",$_,"("+it(s.value.join(", "))+")",1)):fn("",!0),l[0]||(l[0]=Fs(" — das Spiel startet dennoch. ",-1))])):fn("",!0)],4))}},Y_=dn(K_,[["__scopeId","data-v-63c5bf62"]]),Kp="fnhh_scores",j_=10;function Yp(){try{return JSON.parse(localStorage.getItem(Kp)??"[]")}catch{return[]}}function xl(n,e,t){const i=Yp();i.push({playerName:(n??"").trim().slice(0,20)||"Anonym",night:e,batteryRemaining:Math.round(t),createdAt:new Date().toISOString()}),i.sort((s,r)=>r.night-s.night||r.batteryRemaining-s.batteryRemaining);try{localStorage.setItem(Kp,JSON.stringify(i.slice(0,j_)))}catch{}}const Z_={class:"logo-container"},J_={__name:"GameLogo",setup(n){return(e,t)=>(Oe(),He("div",Z_,[...t[0]||(t[0]=[Bu('<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" class="game-logo" data-v-67d0dcc4><defs data-v-67d0dcc4><filter id="red-glow" x="-50%" y="-50%" width="200%" height="200%" data-v-67d0dcc4><feGaussianBlur stdDeviation="6" result="blur" data-v-67d0dcc4></feGaussianBlur><feMerge data-v-67d0dcc4><feMergeNode in="blur" data-v-67d0dcc4></feMergeNode><feMergeNode in="blur" data-v-67d0dcc4></feMergeNode><feMergeNode in="SourceGraphic" data-v-67d0dcc4></feMergeNode></feMerge></filter><filter id="cam-noise" data-v-67d0dcc4><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" result="noise" data-v-67d0dcc4></feTurbulence><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.2 0" in="noise" result="coloredNoise" data-v-67d0dcc4></feColorMatrix><feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" data-v-67d0dcc4></feComposite><feBlend mode="screen" in="SourceGraphic" in2="composite" data-v-67d0dcc4></feBlend></filter></defs><g class="claw-marks" stroke="#333" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6" data-v-67d0dcc4><path d="M 180 70 Q 220 150 190 270" data-v-67d0dcc4></path><path d="M 210 60 Q 260 160 230 280" data-v-67d0dcc4></path><path d="M 240 80 Q 280 170 270 260" data-v-67d0dcc4></path></g><g class="fox-eyes" filter="url(#red-glow)" data-v-67d0dcc4><path d="M 350 75 Q 370 60 390 80 Q 370 85 350 75" fill="#ff2222" data-v-67d0dcc4></path><circle cx="370" cy="74" r="2" fill="#000" data-v-67d0dcc4></circle><path d="M 410 80 Q 430 60 450 75 Q 430 85 410 80" fill="#ff2222" data-v-67d0dcc4></path><circle cx="430" cy="74" r="2" fill="#000" data-v-67d0dcc4></circle></g><text x="400" y="140" class="text-top" text-anchor="middle" filter="url(#cam-noise)" data-v-67d0dcc4> FIVE NIGHTS AT </text><text x="400" y="230" class="text-bottom" text-anchor="middle" data-v-67d0dcc4> HENHOUSE&#39;S </text></svg>',1)])]))}},Q_=dn(J_,[["__scopeId","data-v-67d0dcc4"]]),ev={class:"pc-section"},tv={class:"pc-list"},nv={class:"pc-list-key"},iv={class:"pc-list-val"},sv={class:"pc-section"},rv={class:"pc-ck-group-title"},av={class:"pc-ck-list"},ov=["aria-label"],lv={class:"pc-ck-text"},cv={class:"pc-ck-point"},uv={class:"pc-ck-how"},fv={__name:"ProjectContext",emits:["close"],setup(n,{emit:e}){const t=e,i=dt(null);let s=null;const r=[{title:"1. Spielidee und Konzept",items:[{done:!0,point:"Das Spiel hat eine klar beschreibbare Idee: Was ist das Spielziel, wer spielt es?",how:"Nachtschicht auf dem Bauernhof: per Überwachungs-Dashboard die Hühner bis 06:00 Uhr vor dem Fuchs schützen, ohne dass die Batterie leerläuft."},{done:!0,point:"Es gibt eine funktionierende Spielmechanik, kein reines grafisches Experiment.",how:"Batterie-Management, Kameraüberwachung, Flutlicht, Linsenreinigung und Signalstörungs-Kalibrierung greifen zu einem Survival-Loop ineinander."},{done:!0,point:"Der Umfang ist so gewählt, dass das Spiel bis zur Abgabe fertiggestellt werden kann.",how:"Scope bewusst auf 1 Antagonisten, 4 Kameras, 5 Nächte beschränkt."},{done:!0,point:"Mindestens zwei Rich-Media-Komponenten (Canvas, Audio, Video, Web-API) sind Teil des Konzepts.",how:"Canvas-Kamerafeed, Web Audio API, HTML5-Video und Three.js-Trophäenraum kombiniert im Einsatz."},{done:!0,point:"Das Spielprinzip ist ohne Erklärung innerhalb von 30 Sekunden verständlich.",how:'Vertrautes „Five Nights"-Schema (Kameras durchschalten, beobachten, Knopf drücken); zusätzlich eine Anleitung im Hauptmenü.'}]},{title:"2. Canvas und visuelle Darstellung",items:[{done:!0,point:"Das Spiel verwendet HTML5-Canvas als primäre Darstellungsfläche.",how:"Kamera-Monitor und alle Statusscreens rendern über die Canvas 2D API."},{done:!0,point:"Der Canvas wird korrekt in der HTML-Seite eingebunden und skaliert.",how:"Mount-Point in index.html, von Vue verwaltet, per CSS responsiv skaliert (Breakpoints 820/480 px)."},{done:!0,point:"Das Spiel läuft in einer stabilen Render-Schleife (requestAnimationFrame).",how:"Ein Master-Loop in gameLoop.js treibt alle zeitabhängigen Systeme; der Kamera-Monitor besitzt einen eigenen Render-rAF."},{done:!0,point:"Spielobjekte (Figur, Gegner, Hindernisse) werden auf dem Canvas gezeichnet und bewegt.",how:"Fuchs, Köder-Katzen, Flutlicht-Blitz und Schmutz-Overlay werden frameweise auf den Kamera-Canvas gezeichnet."},{done:!0,point:"Grafiken sind als Sprites oder Bilder eingebunden, nicht nur als einfache Rechtecke.",how:"Procedural gezeichnete Fuchs-Silhouette mit Lauf-Zyklus, Szenen-Hintergründe pro Kamera und Video-Feeds als Basisschicht."},{done:!0,point:"Animationen wirken flüssig und sind von der Framerate unabhängig (Delta-Time).",how:"Alle Updates nutzen delta (gegen dt-Spikes auf 0,1 s gekappt) — Batterie, Fuchstimer, Schmutz und Cooldowns laufen framerate-unabhängig."},{done:!0,point:"Spritesheets werden zur Zeichenoptimierung oder Charakteranimation verwendet.",how:"Das Fuchs-Spritesheet (8 Frames) wird einmalig in einen OffscreenCanvas vorgerendert und frameweise geblittet."},{done:!0,point:"Canvas-Effekte wie Transparenz, Schatten oder Farbfilter werden gezielt eingesetzt.",how:"Linsenschmutz per destination-out, Scanlines/Vignette, Kanal-Glitch, halbtransparente Overlays und der Game-Over-Rotblitz."}]},{title:"3. Interaktivität und Spielmechanik",items:[{done:!0,point:"Das Spiel reagiert auf Nutzereingaben (Tastatur, Maus oder Touch).",how:'Kamerawechsel per Taste 1–4/Klick, Pause per P/Escape, Kalibrieren per Leertaste, Linse reinigen per Ziehen, Touch und Taste „W".'},{done:!0,point:"Event-Handler sind korrekt registriert und werden sauber entfernt (kein Memory Leak).",how:"Alle Listener in onMounted registriert und in onUnmounted entfernt; der Dirt-Akkumulator wird beim Unmount abgemeldet."},{done:!0,point:"Es gibt eine funktionierende Spiellogik: Punkte, Regeln, Siegbedingung oder Verlieren.",how:"Sieg = Nacht bis 06:00 überstehen; Niederlage = Fuchs erreicht den Stall oder Batterie auf 0; Bewertung über Batterie + Nacht."},{done:!0,point:"Kollisionserkennung ist implementiert und funktioniert zuverlässig.",how:"Positionsbasiert: der Fuchs durchläuft Zonen 0→5, Position 5 löst Game-Over aus; Flutlicht wirkt nur bei passender Kamera und sauberer Linse."},{done:!0,point:"Der Schwierigkeitsgrad steigt im Verlauf des Spiels.",how:"Pro Nacht höhere Bewegungswahrscheinlichkeit, kürzere Intervalle, mehr Verbrauch, kürzere Nächte und ab Nacht 2 zusätzliche Signalstörungen."},{done:!0,point:"Das Spiel ist pausierbar und kann fortgesetzt werden.",how:"P/Escape friert rAF-Loop und AudioContext ein; alle Timer stehen still und laufen exakt weiter. Tab-Wechsel pausiert automatisch."},{done:!0,point:"Touch-Bedienung ist so gestaltet, dass das Spiel auf einem Smartphone spielbar ist.",how:"Linsenreinigung per touchstart/touchmove, responsives Dashboard-Layout und touch-fähige Buttons."}]},{title:"4. Spielzustände und Navigation",items:[{done:!0,point:"Es gibt einen sichtbaren Startbildschirm, der das Spiel aktivierbar macht.",how:"MainMenu mit Logo, Start-/Anleitung-/Trophäen-Navigation, Bestenliste und Checkliste; vorgeschalteter Ladebildschirm."},{done:!0,point:"Ein Game-Over-Zustand wird klar signalisiert (kein stilles Einfrieren).",how:"GameOverScreen mit Canvas-Text + rotem Blitz und Game-Over-Sound; ein leerer Akku führt in den eigenen POWER_OUT-Zustand."},{done:!0,point:"Das Spiel kann nach dem Ende neu gestartet werden (Restart).",how:'Game-Over-Screen bietet „Nacht wiederholen" (setzt die Nacht komplett zurück) und „Zurück zum Menü".'},{done:!0,point:"Der aktuelle Punktestand wird während des Spiels dynamisch angezeigt.",how:"Batterieanzeige, fiktive Nachtschicht-Uhr (00:00–06:00) und Nachtnummer werden reaktiv im Dashboard aktualisiert."},{done:!0,point:"Übergänge zwischen Spielzuständen (Start, Spiel, Pause, Ende) sind klar und fehlerfrei.",how:"Zentrale State-Machine in gameStore.js; Screen-Übergänge per TweenJS-Fade, der Loop startet/stoppt sauber an den Zustandsgrenzen."},{done:!0,point:"Es gibt ein Hauptmenü mit Navigierbarkeit (z. B. Highscore-Ansicht, Einstellungen).",how:"Bestenlisten-Tabelle (nach Nacht filterbar), Anleitung-Modal, Trophäenraum-Zugang und Mute-Toggle; Lautstärkeregler im Pausenmenü."}]},{title:"5. Audio",items:[{done:!0,point:"Audio-Dateien werden vorab geladen und stehen beim Spielstart bereit.",how:"PreloadJS lädt Musik/Ambient im Ladebildschirm als BINARY vor und wärmt den Cache fürs spätere fetch()/decodeAudioData()."},{done:!0,point:"Die Browser-Autoplay-Richtlinie wird beachtet: Audio startet erst nach einer Nutzergeste.",how:"Der AudioContext entsteht erst bei der ersten Nutzeraktion; ein einmaliger Resume-Handler reaktiviert einen suspendierten Kontext."},{done:!0,point:"Mindestens ein Sound reagiert auf ein Spielereignis (Treffer, Sprung, Verlieren etc.).",how:"Fuchsbewegung (mit Stereo-Panning), Flutlicht-Zap, Kamera-Glitch, Trophäen-Fanfare und Game-Over-Sting sind an Ereignisse gebunden."},{done:!0,point:"Hintergrundmusik und Soundeffekte sind getrennt steuerbar (z.B. Lautstärke).",how:"Getrennte Master- und Ambient-Regler im Pausenmenü, eigener Mute-Toggle für die Menümusik — alle Werte in localStorage persistiert."},{done:!0,point:"Sounds laufen nicht dauerhaft, wenn das Spiel pausiert oder beendet ist.",how:"Pause suspendiert den AudioContext; beim Verlassen ins Menü stoppt stopAllGameAudio() Drone, Wind, Ambient, Noise und alle One-Shots."},{done:!0,point:"Die Web Audio API (AudioContext) wird für Echtzeit-Effekte oder Visualisierungen eingesetzt.",how:'Alle Klänge synthetisiert (Oszillatoren, Noise-Buffer, Filter, StereoPanner, Master-Limiter); „durch-die-Wand"-Dämpfung per 400-Hz-Tiefpass.'},{done:!1,point:"Mikrofon-Eingabe wird als Spielmechanik eingesetzt (mit erklärendem Hinweis).",how:"Nicht umgesetzt, da es nicht zum Spielprinzip gepasst hätte."}]},{title:"6. Video (falls eingesetzt)",items:[{done:!0,point:"Video wird als Hintergrund, Cutscene oder in die Spielmechanik integriert.",how:"Vier loopende <video>-Kamerafeeds bilden die Basisschicht jeder Kamera im Kamera-Monitor."},{done:!0,point:"Das <video>-Element wird in mindestens einem gängigen Format ausgeliefert (MP4/WebM).",how:"Jeder Feed liegt als .mp4 (H.264) und .webm vor; der Browser wählt das passende Format."},{done:!0,point:"Steuerung und Timing des Videos passen zum Spielfluss.",how:"Die Feeds spielen stumm im Loop und werden beim Kamerawechsel umgeschaltet; ein kurzer Glitch-Übergang (~240 ms) überbrückt den Wechsel."},{done:!0,point:"Video wird auf dem Canvas gerendert und dort weiterverarbeitet (Pixel-Effekte, Compositing).",how:"Der Video-Frame wird per drawImage() auf den Canvas gezeichnet und mit Szenendetails, Schmutz, Scanlines, Vignette und Fuchs zusammengesetzt."}]},{title:"7. Assets und Ladevorgang",items:[{done:!0,point:"Alle benötigten Bilder und Audio-Dateien werden vor dem Spielstart geladen.",how:"PreloadJS lädt Videos und Audio über ein Manifest; Grafiken werden zur Laufzeit prozedural auf Canvas erzeugt."},{done:!0,point:"Während des Ladens gibt es einen sichtbaren Hinweis (Ladebalken, Text o.ä.).",how:"Reaktiver Fortschrittsbalken plus Prozentanzeige im Ladebildschirm."},{done:!0,point:"Das Spiel startet erst, wenn alle kritischen Assets verfügbar sind.",how:"Der Übergang ins Hauptmenü erfolgt erst beim complete-Event der LoadQueue."},{done:!0,point:"Fehler beim Laden von Assets werden abgefangen und sinnvoll behandelt.",how:"error/fileload-Fallback zählt Fehlschläge, zeigt einen Hinweis und schließt den Übergang dennoch ab; fehlt createjs, wird das Preloading übersprungen."}]},{title:"8. Datenpersistenz",items:[{done:!0,point:"Kein Backend, keine Datenbank, da lokale Speicherung ausreichend ist.",how:"Sämtliche Persistenz läuft über localStorage."},{done:!0,point:"Der Highscore wird im localStorage gespeichert und nach einem Neustart wieder angezeigt.",how:"Top-10-Bestenliste unter dem Schlüssel fnhh_scores, sortiert nach Nacht und Batterie; Anzeige im Hauptmenü."},{done:!0,point:"Spieleinstellungen (Lautstärke, Steuerung, Name) werden lokal gespeichert.",how:"settingsApi.js speichert Lautstärken, Name, Mute und Reduced-Motion unter fnhh_settings; der Nacht-Fortschritt liegt unter fnhh_save."}]},{title:"9. Technische Qualität",items:[{done:!0,point:"Code ist nachvollziehbar strukturiert – nicht alles in einer einzelnen Datei.",how:"Trennung in components/, systems/, stores/ und utils/."},{done:!0,point:"Spiellogik, Rendering und Event-Handling sind erkennbar voneinander getrennt.",how:"Logik in systems/, Rendering in den Komponenten, Eingaben in den Handlern; der Store ist die einzige Quelle der Wahrheit."},{done:!0,point:"Wiederkehrende Muster (z.B. Zeichnen eines Spielobjekts) sind als Funktion ausgelagert.",how:"Wiederverwendbare Helfer in canvasUtils.js; zentrale startCalibration()/Drain-Funktionen statt duplizierter Logik."},{done:!0,point:"Das Spiel läuft ohne JavaScript-Fehler in der Browser-Konsole.",how:"Fehlende Globals (createjs, Snap) werden defensiv abgefangen und degradieren still; Audio-/Asset-Zugriffe sind mit try/catch abgesichert."},{done:!0,point:"Variablen und Funktionen haben sprechende Namen, die den Spielkontext widerspiegeln.",how:"Englische, selbsterklärende Namen (drainFloodlight, foxConfirmedPosition); Konstanten in SCREAMING_SNAKE_CASE."},{done:!0,point:"Keine veralteten oder ineffizienten Rendering-Ansätze (kein DOM-Manipulation im Render-Loop).",how:"Gerendert wird ausschließlich auf Canvas; teure Surfaces liegen in OffscreenCanvases, Menü-Federn werden in-place recycelt."},{done:!0,point:"Verwendete externe Bibliotheken (z.B. Howler.js, Pixi.js) sind begründet eingesetzt.",how:"Nur Vue, Vite, Three.js (Trophäenraum), Snap.SVG (animierte SVG), PreloadJS/TweenJS (Laden/Übergänge)."}]},{title:"10. Abgabe und Präsentation",items:[{done:!0,point:"Das Spiel ist über eine URL erreichbar und ohne lokale Installation spielbar.",how:"Produktions-Build auf dem Hochschulserver, im Browser unter der Abgabe-URL direkt spielbar."},{done:!0,point:"Die URL und ggf. Zugangsdaten sind klar angegeben.",how:"https://lyra.hs-emden-leer.de:20200/Final/; keine Zugangsdaten nötig, URL auch in der README hinterlegt."},{done:!0,point:"Das Spiel kann in der Prüfung live vorgeführt werden – ohne Quelltextklärung.",how:"Live über die Abgabe-URL vorführbar; alle Mechaniken laufen ohne Eingriff in den Quelltext."},{done:!0,point:"Eine kurze README beschreibt das Spielziel, die Steuerung und die eingesetzten Rich-Media-Komponenten.",how:"README.md beschreibt Spielziel, Setup, Steuerung und Tech-Stack."},{done:!0,point:"Bekannte Einschränkungen (Browser-Kompatibilität, fehlende Features) sind dokumentiert.",how:"OffscreenCanvas-Fallback für Safari < 16.4, Hinweise auf entfallene Features (Mikrofon) in der Checkliste."}]},{title:"11. Darüber hinaus umgesetzt",items:[{done:!0,point:"Vollständig synthetisiertes Audio über die Web Audio API — keine Sound-Dateien nötig.",how:"Fuchs, Flutlicht, Glitch, Fanfare, Drone, Wind und zufällige Tier-Cues werden zur Laufzeit aus Oszillatoren und Noise erzeugt."},{done:!0,point:"Barrierefreiheit nach WCAG-Stufe A.",how:"Tastatur/Touch, sichtbarer :focus-visible-Fokus, formbasierte Statussymbole, role=img/aria-label, aria-live-Status, aria-pressed, Modal-Fokus-Management."},{done:!0,point:"Reduced-Motion-Modus gegen Blitz-/Flacker-Effekte (WCAG 2.3.1).",how:"Toggle im Pausenmenü unterdrückt CSS-Flacker, Vollbild-Flashes, Kanal-Glitch und ambiente Animationen; Audio/Texte bleiben erhalten."},{done:!0,point:"Dynamisches Spannungssystem statt Leerlauf.",how:"Zufällige Signalstörungen mit Kalibrierungs-Minispiel, Köder-Sichtungen (die sich als Katze entpuppen) und steigende Ambient-Intensität."},{done:!0,point:"Linsenschmutz mit Gameplay-Wirkung.",how:"Über die Nacht akkumulierender Schmutz per destination-out-Wischen; ab ≥ 0,75 verdeckt er den Fuchs und blockiert das Flutlicht."},{done:!0,point:"3D-Trophäenraum mit Stereoskopie (LE G3D, STE).",how:"Three.js-Szene mit freischaltbaren Trophäen, OrbitControls sowie Anaglyph- und WebXR-Modus."},{done:!0,point:"Performance-Optimierungen.",how:"Einzelner Master-rAF-Loop, OffscreenCanvas mit Fallback, willReadFrequently für die Schmutzmessung, In-place-Recycling der Menü-Federn."},{done:!0,point:"Sicherheit & Wartbarkeit.",how:"Bibliotheken lokal vendort (kein CDN-/Supply-Chain-Risiko, offline-fähig), defensives Degradieren, durchgängige JSDoc, DRY."},{done:!0,point:"Stabilität bei Tab-Wechsel und Pause.",how:"visibilitychange pausiert Spiel + Audio; alle Timer laufen als delta-Countdown und stehen exakt still — kein Burst beim Resume."}]},{title:"Kurztest vor der Abgabe",items:[{done:!0,point:"1. Spiel im Browser starten: Lädt der Startbildschirm ohne Fehler?",how:"Ladebildschirm mit Fortschrittsbalken, Fehler-Fallback und sauberem Übergang ins Menü verifiziert."},{done:!0,point:"2. Eine vollständige Runde spielen: Punkte, Kollision, Game Over, Restart.",how:'Sieg- und Niederlage-Pfad, Bestenlisten-Eintrag, „Nacht wiederholen" und das Spiel bis zur Trophäe durchgespielt.'},{done:!0,point:"3. Browser-Konsole öffnen: Keine JavaScript-Fehler während des Spielens.",how:"Defensive Guards für fehlende Globals und Assets verhindern Laufzeitfehler."},{done:!0,point:"4. Spiel pausieren und fortsetzen: Bleibt der Zustand korrekt erhalten?",how:"Pause friert rAF-Loop und AudioContext ein; alle Timer setzen beim Fortsetzen ohne dt-Spike exakt fort."},{done:!0,point:"5. Audio prüfen: Reagieren Sounds auf Ereignisse? Spielt nichts vor der ersten Nutzergeste ab?",how:"Final auf dem Abgabe-Build verifiziert (AudioContext startet nachweislich erst bei der ersten Geste)."},{done:!0,point:"6. Neues Tab öffnen und URL direkt aufrufen: Startet das Spiel ohne lokale Dateien?",how:"Über die Abgabe-URL in einem neuen Tab geprüft — startet ohne lokale Dateien."}]}],a=[{name:"Vue 3 + Vite",why:"Modernes MV*-Äquivalent zu Backbone/RequireJS (LE WOE) — Komponenten, reaktiver Zustand, native ES-Module."},{name:"Canvas 2D API",why:"Immediate-Mode-Zeichnen für Kamera-Feed, Pixel-Manipulation und Text (LE PXC, ZAC, VGC, THJ) — bewusst ohne EaselJS."},{name:"Web Audio API",why:"Direkter Node-Graph (Oszillatoren, Filter, Panning) für synthetisierte Klänge (LE AUD) — bewusst ohne SoundJS."},{name:"HTML5 Video",why:"Loopende Überwachungs-Feeds als Canvas-Basisschicht (LE VID)."},{name:"Three.js",why:"Trophäenraum mit 3D-Meshes, Anaglyph und WebXR (LE G3D, STE)."},{name:"Snap.SVG",why:"Nur für animierte SVG-Elemente (Fuchs-Dot, Warnleuchten); statisches SVG bleibt nativ (LE SVG)."},{name:"PreloadJS / TweenJS",why:"Asset-Preloading auf dem Ladebildschirm und Screen-Übergänge (LE 2DC)."},{name:"localStorage",why:"Spielstand und Bestenliste lokal (LE DMW) — kein Server, immer offline lauffähig."},{name:"jQuery (bewusst nicht verwendet)",why:"Löst mit DOM-Synchronisation dasselbe Grundproblem wie Vue; direkte jQuery-Mutationen würden Vues reaktiven Zustand korrumpieren. DOM-Traversal, Event-Delegation und Plugin-Pattern (LE JQY) deckt Vues Composition API samt Custom Events ab."}];function o(){t("close")}function l(c){if(c.key==="Escape"){c.preventDefault(),o();return}if(c.key!=="Tab"||!i.value)return;const u=i.value.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');if(u.length===0)return;const d=u[0],f=u[u.length-1];c.shiftKey&&document.activeElement===d?(c.preventDefault(),f.focus()):!c.shiftKey&&document.activeElement===f&&(c.preventDefault(),d.focus())}return _n(async()=>{var c,u;s=document.activeElement,window.addEventListener("keydown",l),await Nu(),(u=(c=i.value)==null?void 0:c.querySelector(".pc-close"))==null||u.focus()}),En(()=>{window.removeEventListener("keydown",l),s!=null&&s.focus&&s.focus()}),(c,u)=>(Oe(),He("div",{class:"pc-backdrop",onClick:ca(o,["self"])},[G("div",{ref_key:"box",ref:i,class:"pc-box",role:"dialog","aria-modal":"true","aria-label":"Projektkontext"},[G("button",{class:"pc-close",onClick:o,"aria-label":"Schließen"},"✕"),u[4]||(u[4]=Bu('<h2 class="pc-title" data-v-6526b44e>— Projektkontext —</h2><p class="pc-credit" data-v-6526b44e>Prüfungsabgabe RMA SoSe 2026</p><p class="pc-credit pc-credit--name" data-v-6526b44e>Entwicklung und Design: Jana Fisenko</p><section class="pc-section" data-v-6526b44e><h3 class="pc-heading" data-v-6526b44e>Spielidee</h3><p data-v-6526b44e>Browserbasiertes Survival-Horror-Spiel. Der Spieler übernimmt die Nachtschicht auf einem Bauernhof und muss fünf Nächte überstehen — bewaffnet nur mit einem Überwachungs-Dashboard aus vier Kameras, einer schwindenden Batterie und einem Flutlicht-Knopf. Ein Fuchs versucht jede Nacht, in den Hühnerstall einzubrechen. Der Spieler muss ihn per Kamera aufspüren, mit dem Flutlicht verscheuchen und dabei den Strom nicht ausgehen lassen.</p></section><section class="pc-section" data-v-6526b44e><h3 class="pc-heading" data-v-6526b44e>Ziel &amp; Motivation</h3><p data-v-6526b44e>Inspiriert von „Five Nights at Freddy&#39;s&quot;, aber auf einen Bauernhof verlegt. Der Twist: statt mehrerer Antagonisten gibt es nur einen Fuchs, dessen Verhalten sich über fünf Nächte hinweg dynamisch verändert — Routen, Geschwindigkeit und Reaktion auf das Licht. Die Spannung entsteht aus Ressourcenmanagement (Batterie) und gezielten Schockmomenten.</p></section>',5)),G("section",ev,[u[0]||(u[0]=G("h3",{class:"pc-heading"},"Tech-Stack & Begründung",-1)),u[1]||(u[1]=G("p",{class:"pc-lead"},"Leitprinzip: jede Technologie dort einsetzen, wo sie einen echten Zweck erfüllt — nicht als isolierte Demo. Wo moderne Werkzeuge denselben Lernzweck besser abdecken, ersetzen sie die Referenz-Library und das Konzept-Äquivalent wird ausgewiesen.",-1)),G("ul",tv,[(Oe(),He(kt,null,di(a,d=>G("li",{key:d.name},[G("span",nv,it(d.name),1),G("span",iv,it(d.why),1)])),64))]),u[2]||(u[2]=G("p",{class:"pc-note"},"Ebenfalls bewusst ersetzt: EaselJS und SoundJS (verbergen die Canvas-/Audio-Lernziele), Backbone + RequireJS (durch Vue 3 und native ES-Module abgelöst).",-1))]),G("section",sv,[u[3]||(u[3]=G("h3",{class:"pc-heading"},"Checkliste",-1)),(Oe(),He(kt,null,di(r,d=>G("div",{key:d.title,class:"pc-ck-group"},[G("h4",rv,it(d.title),1),G("ul",av,[(Oe(!0),He(kt,null,di(d.items,f=>(Oe(),He("li",{key:f.point,class:Bt(["pc-ck-item",{"pc-ck-item--todo":!f.done}])},[G("span",{class:Bt(["pc-ck-box",f.done?"pc-ck-box--done":"pc-ck-box--todo"]),"aria-label":f.done?"Erfüllt":"Nicht umgesetzt",role:"img"},it(f.done?"✓":"✕"),11,ov),G("span",lv,[G("span",cv,it(f.point),1),G("span",uv,it(f.how),1)])],2))),128))])])),64))])],512)]))}},dv=dn(fv,[["__scopeId","data-v-6526b44e"]]),hv=["title","aria-pressed"],pv={key:0,viewBox:"0 0 24 24",class:"sound-icon"},mv={key:1,viewBox:"0 0 24 24",class:"sound-icon"},gv={class:"feather-layer",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},_v=["transform"],vv=["d"],xv={class:"menu-logo"},Sv={class:"menu-content"},Mv={class:"menu-card menu-left"},bv={class:"subtitle"},yv={class:"menu-nav"},Ev={class:"menu-card menu-right"},Tv={class:"leaderboard"},Av={class:"night-filter",role:"group","aria-label":"Nacht filtern"},wv=["onClick"],Cv={key:0,class:"leaderboard-table","aria-label":"Top-Scores"},Rv={key:0},Pv={class:"rank"},Lv={class:"name"},Dv={key:0,class:"night"},Iv={class:"battery"},Nv={key:1,class:"leaderboard-empty"},Uv=18,Fv={__name:"MainMenu",setup(n){const e=dt(0),t=dt(!1),i=dt(!1),s=dt(null);let r=null;const a=dt([]),o=dt(0),l=wt(()=>o.value===0?a.value:a.value.filter(I=>I.night===o.value)),c=dt([]),u=["M0,-1.6 C0.15,-1.2 0.6,-0.9 0.55,-0.55 Q0.85,-0.35 0.65,0 Q0.9,0.25 0.6,0.55 Q0.75,0.8 0.45,1.1 Q0.5,1.35 0.15,1.6 L0,1.7 L-0.15,1.6 Q-0.5,1.35 -0.45,1.1 Q-0.75,0.8 -0.6,0.55 Q-0.9,0.25 -0.65,0 Q-0.85,-0.35 -0.55,-0.55 C-0.6,-0.9 -0.15,-1.2 0,-1.6Z","M0,-1.4 C0.2,-1 0.7,-0.7 0.6,-0.4 Q0.95,-0.2 0.7,0.1 Q1,0.35 0.65,0.65 Q0.8,0.95 0.4,1.2 L0,1.5 L-0.4,1.2 Q-0.8,0.95 -0.65,0.65 Q-1,0.35 -0.7,0.1 Q-0.95,-0.2 -0.6,-0.4 C-0.7,-0.7 -0.2,-1 0,-1.4Z","M0,-1.8 C0.1,-1.4 0.45,-1.1 0.4,-0.8 Q0.65,-0.6 0.5,-0.35 Q0.7,-0.1 0.5,0.15 Q0.65,0.4 0.45,0.65 Q0.6,0.9 0.35,1.1 Q0.4,1.35 0.1,1.6 L0,1.7 L-0.1,1.6 Q-0.4,1.35 -0.35,1.1 Q-0.6,0.9 -0.45,0.65 Q-0.65,0.4 -0.45,0.15 Q-0.7,-0.1 -0.5,-0.35 Q-0.65,-0.6 -0.4,-0.8 C-0.45,-1.1 -0.1,-1.4 0,-1.8Z"];let d=null,f=0;function h(I){return I.x=Math.random()*110-5,I.y=-5,I.rot=Math.random()*360,I.scale=.35+Math.random()*.45,I.vx=(Math.random()-.5)*.04,I.vy=.07+Math.random()*.09,I.vrot=(Math.random()-.5)*1.4,I.wobble=Math.random()*Math.PI*2,I.wobbleSpeed=.025+Math.random()*.025,I.wobbleAmp=.25+Math.random()*.35,I.shape=u[Math.floor(Math.random()*u.length)],I}function _(){return h({id:f++})}function S(){for(const I of c.value)I.x+=I.vx+Math.sin(I.wobble)*I.wobbleAmp,I.y+=I.vy,I.rot+=I.vrot,I.wobble+=I.wobbleSpeed,I.y>=105&&h(I);d=requestAnimationFrame(S)}_n(()=>{var I;for(let x=0;x<Uv;x++){const w=_();w.y=Math.random()*100,c.value.push(w)}L.reducedMotion||(d=requestAnimationFrame(S)),a.value=Yp(),(I=window.createjs)!=null&&I.Tween?createjs.Tween.get(e).to({value:1},900,createjs.Ease.quadIn):e.value=1}),En(()=>{d&&cancelAnimationFrame(d),window.removeEventListener("keydown",T)});const m=wt(()=>[1,2,3,4,5].every(I=>L.nightsCleared.includes(I)));function p(){$p(!L.menuSoundMuted)}function b(){r=document.activeElement,t.value=!0}function A(){t.value=!1}function T(I){if(I.key==="Escape"){I.preventDefault(),A();return}if(I.key!=="Tab"||!s.value)return;const x=s.value.querySelectorAll('button, input, [href], [tabindex]:not([tabindex="-1"])');if(x.length===0)return;const w=x[0],k=x[x.length-1];I.shiftKey&&document.activeElement===w?(I.preventDefault(),k.focus()):!I.shiftKey&&document.activeElement===k&&(I.preventDefault(),w.focus())}fi(t,async I=>{var x,w;I?(window.addEventListener("keydown",T),await Nu(),(w=(x=s.value)==null?void 0:x.querySelector(".htp-close"))==null||w.focus()):(window.removeEventListener("keydown",T),r!=null&&r.focus&&r.focus(),r=null)});function N(){if(m.value){L.nightsCleared=[],L.bestBattery={};try{localStorage.removeItem("fnhh_save")}catch{}}const I=[1,2,3,4,5].find(x=>!L.nightsCleared.includes(x))??1;L.currentNight=I,Kt("NIGHT_INTRO")}function D(){Kt("TROPHY_ROOM")}return(I,x)=>(Oe(),He("div",{class:"main-menu",style:us({opacity:e.value})},[G("button",{class:"mute-btn",onClick:p,title:Ye(L).menuSoundMuted?"Menüsound einschalten":"Menüsound ausschalten","aria-label":"Menüsound stummschalten","aria-pressed":Ye(L).menuSoundMuted},[Ye(L).menuSoundMuted?(Oe(),He("svg",mv,[...x[3]||(x[3]=[G("path",{fill:"currentColor",d:"M12,4L9.91,6.09L12,8.18M19,12C19,12.72 18.84,13.4 18.57,14L20.08,15.5C20.67,14.46 21,13.27 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.48,12.43 16.5,12.22 16.5,12M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.5C15.58,18 14.84,18.41 14,18.71V20.77C15.39,20.41 16.65,19.72 17.72,18.81L19.73,20.82L21,19.55L4.27,3M12,5.77V10.8L9,7.8L12,5.77Z"},null,-1)])])):(Oe(),He("svg",pv,[...x[2]||(x[2]=[G("path",{fill:"currentColor",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z"},null,-1)])]))],8,hv),(Oe(),He("svg",gv,[(Oe(!0),He(kt,null,di(c.value,w=>(Oe(),He("g",{key:w.id,transform:`translate(${w.x}, ${w.y}) rotate(${w.rot}) scale(${w.scale})`},[G("path",{d:w.shape,fill:"#e8c88a",opacity:"0.6"},null,8,vv),x[4]||(x[4]=G("line",{x1:"0",y1:"-1.6",x2:"0",y2:"1.7",stroke:"#a07040","stroke-width":"0.12",opacity:"0.8"},null,-1))],8,_v))),128))])),G("header",xv,[At(Q_)]),G("div",Sv,[G("div",Mv,[G("p",bv,it(m.value?"Alle 5 Nächte gemeistert!":`Nacht ${Ye(L).nightsCleared.length+1} wartet auf dich`),1),G("nav",yv,[G("button",{class:"menu-btn primary",onClick:N},it(m.value?"Neu starten":Ye(L).nightsCleared.length===0?"Spiel starten":"Weiter"),1),G("button",{class:"menu-btn secondary",title:"Trophäenraum ansehen",onClick:D}," Trophäenraum "),G("button",{class:"menu-btn secondary",onClick:b}," Anleitung "),G("button",{class:"menu-btn secondary",onClick:x[0]||(x[0]=w=>i.value=!0)}," Projektkontext ")])]),G("div",Ev,[G("section",Tv,[x[8]||(x[8]=G("h2",{class:"leaderboard-title"},"Bestenliste",-1)),G("div",Av,[(Oe(),He(kt,null,di([0,1,2,3,4,5],w=>G("button",{key:w,class:Bt(["filter-btn",{active:o.value===w}]),onClick:k=>o.value=w},it(w===0?"Alle":`N${w}`),11,wv)),64))]),l.value.length?(Oe(),He("table",Cv,[G("thead",null,[G("tr",null,[x[5]||(x[5]=G("th",null,"#",-1)),x[6]||(x[6]=G("th",null,"Name",-1)),o.value===0?(Oe(),He("th",Rv,"Nacht")):fn("",!0),x[7]||(x[7]=G("th",null,"Batterie",-1))])]),G("tbody",null,[(Oe(!0),He(kt,null,di(l.value,(w,k)=>(Oe(),He("tr",{key:k},[G("td",Pv,it(k+1),1),G("td",Lv,it(w.playerName),1),o.value===0?(Oe(),He("td",Dv,it(w.night),1)):fn("",!0),G("td",Iv,it(w.batteryRemaining)+" %",1)]))),128))])])):(Oe(),He("p",Nv,"Noch keine Einträge"))])])]),At(vr,{name:"htp"},{default:Us(()=>[t.value?(Oe(),He("div",{key:0,class:"htp-backdrop",onClick:ca(A,["self"])},[G("div",{ref_key:"htpBox",ref:s,class:"htp-box",role:"dialog","aria-modal":"true","aria-label":"Spielanleitung"},[G("button",{class:"htp-close",onClick:A,"aria-label":"Schließen"},"✕"),x[9]||(x[9]=G("h2",{class:"htp-title"},"— Anleitung —",-1)),x[10]||(x[10]=G("section",{class:"htp-section"},[G("h3",{class:"htp-heading"},"Spielziel"),G("p",null,"Du bist der Nachtwächter eines Bauernhofs. Überwache 5 Nächte lang die Kameras und verhindere, dass ein Fuchs ins Hühnerhaus einbricht. Überlebst du alle 5 Nächte, hast du gewonnen.")],-1)),x[11]||(x[11]=G("section",{class:"htp-section"},[G("h3",{class:"htp-heading"},"Steuerung"),G("table",{class:"htp-table"},[G("tbody",null,[G("tr",null,[G("td",{class:"key"},"1"),G("td",null,"Kamera 1 — Feld (Eingang)")]),G("tr",null,[G("td",{class:"key"},"2"),G("td",null,"Kamera 2 — Hoftor")]),G("tr",null,[G("td",{class:"key"},"3"),G("td",null,"Kamera 3 — Hühnerhofzentrum")]),G("tr",null,[G("td",{class:"key"},"4"),G("td",null,"Kamera 4 — Hühnerhaustür")]),G("tr",null,[G("td",{class:"key"},"CAM EIN/AUS"),G("td",null,"Kameramonitor ein-/ausschalten (spart Batterie)")]),G("tr",null,[G("td",{class:"key"},"FLUTLICHT"),G("td",null,"Fuchs zurückschlagen — wirkt nur auf Kamera 2–4 (5 s Abkühlung)")]),G("tr",null,[G("td",{class:"key"},"Maus / Finger"),G("td",null,"Über das Kamerabild wischen, um die Linse zu reinigen")]),G("tr",null,[G("td",{class:"key"},"W"),G("td",null,"Linse der aktiven Kamera komplett reinigen")]),G("tr",null,[G("td",{class:"key"},"Leertaste"),G("td",null,"Signalgestörte Kamera neu kalibrieren")]),G("tr",null,[G("td",{class:"key"},"P / Esc"),G("td",null,"Pause öffnen/schließen")])])])],-1)),x[12]||(x[12]=G("section",{class:"htp-section"},[G("h3",{class:"htp-heading"},"Linse reinigen"),G("p",null,'Im Laufe der Nacht setzt sich Schmutz auf den Kameralinsen ab. Ist eine Linse zu verschmutzt, erkennst du den Fuchs nicht mehr und kannst das Flutlicht dort nicht einsetzen. Wische mit der Maus — oder auf dem Touchscreen mit dem Finger — über das Bild, um den Schmutz wegzuwischen. Alternativ reinigt die Taste „W" die gerade aktive Kamera in einem Schritt.')],-1)),x[13]||(x[13]=G("section",{class:"htp-section"},[G("h3",{class:"htp-heading"},"Barrierefreiheit"),G("p",null,'Im Pausenmenü (Taste P oder Escape) findest du den Schalter „Reduzierte Bewegung". Ist er aktiv, werden Blitz-, Flacker- und Vollbild-Effekte unterdrückt — nützlich bei Lichtempfindlichkeit. Die Einstellung bleibt für die nächsten Spiele gespeichert. Audio und Spieltexte bleiben unverändert.')],-1)),x[14]||(x[14]=G("section",{class:"htp-section"},[G("h3",{class:"htp-heading"},"Batterie"),G("p",null,"Jede Nacht dauert 2–3 Minuten (frühe Nächte länger, Nacht 5 kürzer). Die Batterie leert sich nur, wenn der Kameramonitor aktiv ist — schneller wenn du einen Kanal beobachtest. Das Flutlicht kostet immer Batterie, egal ob die Kamera an oder aus ist. Schalte die Kamera aus, um Strom zu sparen. Fällt die Batterie auf 0 %, ist die Nacht verloren.")],-1)),x[15]||(x[15]=G("section",{class:"htp-section"},[G("h3",{class:"htp-heading"},"Der Fuchs"),G("p",null,"Der Fuchs schleicht sich von Kamera 1 (Feld) bis Kamera 4 (Hühnerhaustür) vor — und dann ins Hühnerhaus. Beobachtest du ihn auf der aktiven Kamera, bewegt er sich langsamer. Das Flutlicht schickt ihn zurück auf Start, aber nur wenn er auf Kamera 2, 3 oder 4 ist. Mit jeder Nacht wird er schneller und dreister.")],-1))],512)])):fn("",!0)]),_:1}),At(vr,{name:"htp"},{default:Us(()=>[i.value?(Oe(),ni(dv,{key:0,onClose:x[1]||(x[1]=w=>i.value=!1)})):fn("",!0)]),_:1})],4))}},Ov=dn(Fv,[["__scopeId","data-v-545280bd"]]),Bv={1:.68,2:.74,3:.8,4:.86,5:.92},jp={1:9,2:7,3:6,4:5,5:4},Zp={1:15,2:12,3:10,4:9,5:8},kv={0:0,1:-.8,2:-.4,3:.4,4:.8},hd={1:"fox-rustle",2:"fox-rustle",3:"fox-rustle",4:"fox-step"};let co=10,Lo=!1,Do=0;function zv(n){L.foxPosition=0,L.foxConfirmedPosition=null,Lo=!1,Do=0;const e=jp[n]??8,t=Zp[n]??14;co=e+Math.random()*(t-e)}function Vv(n){if(Lo)Do-=n,Do<=0&&(Lo=!1);else if(co-=n,co<=0){const e=L.currentNight,t=jp[e]??8,i=Zp[e]??14;co=t+Math.random()*(i-t),Wv()}Gv()}function Gv(){const n=L.activeCamera;if(!L.cameraActive){L.foxConfirmedPosition=null;return}if(L.cameraOffline[n-1]){L.foxConfirmedPosition===n&&(L.foxConfirmedPosition=null);return}L.foxPosition===n||L.ghostFoxPosition===n?L.foxConfirmedPosition=n:L.foxConfirmedPosition===n&&(L.foxConfirmedPosition=null)}function Hv(){const n=L.foxPosition;return n!==2&&n!==3&&n!==4||L.activeCamera!==n||L.cameraDirtBlocked[n-1]?!1:(Lo=!0,Do=5,L.foxPosition=0,L.foxConfirmedPosition=null,!0)}function Wv(){let n=Bv[L.currentNight]??.1;if(L.activeCamera===L.foxPosition&&L.cameraActive&&(n-=.2),n=Math.max(0,n),Math.random()<n){L.foxPosition++;const t=L.foxPosition;if(hd[t]){const i=!L.cameraActive,s=i?.15:.38;cs(hd[t],{pan:kv[t]??0,volume:s,throughWall:i})}t>=5&&(L.gameOverReason="fox",Kt("GAME_OVER"))}}const Xv=.15,qv=1.5,$v=8;function Kv(n){Qo(L.currentNight*.12*n)}function Yv(n){Qo(Xv*n)}function jv(){Qo(qv)}function Zv(){Qo($v)}function Qo(n){L.battery=Math.max(0,Math.min(100,L.battery-n))}let Ii=null,Io=0,Sr=!1,ua=!1,wc=null;function pd(n){wc=n}const Jp=[180,180,150,150,120];function Qp(){const n=L.activeCamera;return L.cameraActive&&L.cameraOffline[n-1]&&L.faultyCamera===n&&L.calibratingCamera===null?(L.calibratingCamera=n,L.calibrationProgress=0,!0):!1}function Jv(){Sr||(Sr=!0,Io=performance.now(),fo=30+Math.random()*30,ho=6+Math.random()*6,po=0,Ii=requestAnimationFrame(Gu))}function uo(){Sr=!1,ua=!1,Ii!==null&&(cancelAnimationFrame(Ii),Ii=null)}function Qv(){!Sr||ua||(ua=!0,Ii!==null&&(cancelAnimationFrame(Ii),Ii=null))}function ex(){!Sr||!ua||(ua=!1,Io=performance.now(),Ii=requestAnimationFrame(Gu))}function Gu(n){if(!Sr)return;const e=Math.min((n-Io)/1e3,.1);if(Io=n,tx(e),L.cameraActive&&(Kv(e),Yv(e)),Vv(e),sx(e),wc&&wc(e),L.floodlightAlpha>0&&(L.floodlightAlpha=Math.max(0,L.floodlightAlpha-.6*e)),L.floodlightCooldown>0&&(L.floodlightCooldown=Math.max(0,L.floodlightCooldown-e)),L.gameState!=="PLAYING"){uo();return}if(L.battery<=0){L.gameOverReason="battery",Kt("POWER_OUT"),uo();return}if(L.inGameTime>=Jp[L.currentNight-1]){Kt("NIGHT_CLEAR"),uo();return}Ii=requestAnimationFrame(Gu)}function tx(n){L.inGameTime+=n}let fo=30+Math.random()*30,ho=18+Math.random()*18,po=0;const nx=50,ix={2:70,3:58,4:48,5:42};function sx(n){if(L.gameState!=="PLAYING"||L.isPaused)return;const e=L.currentNight;if(e>=2&&L.faultyCamera===null&&(fo-=n,fo<=0&&(L.faultyCamera=1+Math.floor(Math.random()*4),L.cameraOffline=[!0,!0,!0,!0],cs("camera-glitch"))),L.ghostFoxPosition!==null)po-=n,po<=0&&(L.ghostFoxPosition=null);else if(ho-=n,ho<=0){const t=L.foxPosition,i=[];for(let a=1;a<=4;a++)a!==t&&(a===3||a===4?i.push(a,a,a,a,a):i.push(a));if(i.length>0){const a=i[Math.floor(Math.random()*i.length)];L.ghostFoxPosition=a,po=6+Math.random()*3}ho=({1:12,2:11,3:10,4:9,5:8}[e]??10)*(.8+Math.random()*.4)}L.calibratingCamera!==null&&(!L.cameraActive||L.activeCamera!==L.calibratingCamera||L.faultyCamera===null?(L.calibratingCamera=null,L.calibrationProgress=0):(L.calibrationProgress+=nx*n,L.calibrationProgress>=100&&(L.calibratingCamera===L.faultyCamera?(L.cameraOffline=[!1,!1,!1,!1],L.faultyCamera=null,cs("camera-restore"),fo=(ix[e]??55)*(.8+Math.random()*.4)):cs("camera-glitch"),L.calibratingCamera=null,L.calibrationProgress=0)))}const rx={__name:"NightTitle",setup(n){const e=dt(null);let t=null,i=null;const s={value:0};return _n(()=>{var u;L.battery=100,L.inGameTime=0,L.activeCamera=1,L.cameraActive=!0,L.floodlightAlpha=0,L.floodlightCamera=null,L.floodlightFoxVisible=!1,L.floodlightCatVisible=!1,L.floodlightCooldown=0,L.cameraLensDirt=[0,0,0,0],L.cameraDirtBlocked=[!1,!1,!1,!1],L.cameraOffline=[!1,!1,!1,!1],L.faultyCamera=null,L.calibratingCamera=null,L.calibrationProgress=0,L.ghostFoxPosition=null,zv(L.currentNight);const r=e.value;r.width=window.innerWidth,r.height=window.innerHeight,i=()=>{r.width=window.innerWidth,r.height=window.innerHeight},window.addEventListener("resize",i);const a=r.getContext("2d");function o(){const d=r.width,f=r.height;a.fillStyle="#000",a.fillRect(0,0,d,f),a.globalAlpha=s.value,a.fillStyle="#c8a96e",a.font=`bold ${Math.round(d*.07)}px 'Courier New', monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(`NACHT ${L.currentNight}`,d/2,f/2-24),a.font=`${Math.round(d*.027)}px 'Courier New', monospace`,a.fillStyle="#666",a.fillText("00:00 UHR",d/2,f/2+38),a.globalAlpha=1}function l(){Hp(),I_(),Jv(),Kt("PLAYING")}(u=window.createjs)!=null&&u.Tween?createjs.Tween.get(s).to({value:1},1200,createjs.Ease.quadOut).wait(1e3).to({value:0},700,createjs.Ease.quadIn).call(l):(s.value=1,setTimeout(l,1500));function c(){o(),t=requestAnimationFrame(c)}t=requestAnimationFrame(c)}),En(()=>{t&&cancelAnimationFrame(t),window.removeEventListener("resize",i)}),(r,a)=>(Oe(),He("canvas",{ref_key:"canvasRef",ref:e,class:"title-canvas"},null,512))}},ax=dn(rx,[["__scopeId","data-v-d5141476"]]);function Cc(n,e){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(n,e);const t=document.createElement("canvas");return t.width=n,t.height=e,t}const or=Object.freeze({frameW:96,frameH:64,frameCount:8});let Lr=null;function em(){if(Lr)return Lr;const{frameW:n,frameH:e,frameCount:t}=or;Lr=Cc(n*t,e);const i=Lr.getContext("2d");for(let s=0;s<t;s++){const r=s/t*Math.PI*2;lx(i,s*n+n/2,e*.54,e*.5,r)}return Lr}function ox(n,e,t,i,s,r,a=1){const{frameW:o,frameH:l,frameCount:c}=or,u=(e%c+c)%c,d=em();n.save(),n.globalAlpha=a,n.drawImage(d,u*o,0,o,l,t-s/2,i-r/2,s,r),n.restore()}function lx(n,e,t,i,s){n.save(),n.translate(e,t);const r="#d95a14",a="#241005",o="#f0f0f0",l=[-i*.24,-i*.06,i*.14,i*.3];for(const c of[0,2]){const u=Math.sin(s+c*1.5)*.55;n.save(),n.translate(l[c],i*.12),n.rotate(u),n.fillStyle=a,n.beginPath(),n.ellipse(0,i*.08,i*.05,i*.1,.1,0,Math.PI*2),n.fill(),n.translate(0,i*.15),n.rotate(-u*.3+.1),n.fillRect(-i*.025,0,i*.05,i*.18),n.restore()}n.save(),n.translate(i*.42,-i*.08),n.rotate(Math.sin(s*.5)*.15),n.fillStyle=r,n.beginPath(),n.moveTo(0,i*.1),n.quadraticCurveTo(i*.35,i*.05,i*.38,-i*.32),n.quadraticCurveTo(i*.32,-i*.46,i*.18,-i*.4),n.quadraticCurveTo(i*.22,-i*.2,-i*.05,-i*.04),n.closePath(),n.fill(),n.fillStyle=o,n.beginPath(),n.moveTo(i*.28,-i*.25),n.quadraticCurveTo(i*.35,-i*.28,i*.38,-i*.32),n.quadraticCurveTo(i*.32,-i*.46,i*.22,-i*.42),n.quadraticCurveTo(i*.24,-i*.35,i*.28,-i*.25),n.closePath(),n.fill(),n.restore(),n.fillStyle=r,n.beginPath(),n.ellipse(0,0,i*.48,i*.19,-.08,0,Math.PI*2),n.fill(),n.fillStyle=o,n.beginPath(),n.ellipse(-i*.38,i*.04,i*.12,i*.12,.4,0,Math.PI*2),n.fill(),n.fillStyle=r,n.beginPath(),n.ellipse(-i*.55,-i*.12,i*.18,i*.15,-.15,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(-i*.62,-i*.14),n.lineTo(-i*.86,-i*.04),n.lineTo(-i*.65,i*.02),n.closePath(),n.fill(),n.fillStyle=a,n.beginPath(),n.arc(-i*.85,-i*.04,i*.025,0,Math.PI*2),n.fill(),n.fillStyle=a,n.beginPath(),n.moveTo(-i*.42,-i*.22),n.lineTo(-i*.48,-i*.45),n.lineTo(-i*.32,-i*.22),n.closePath(),n.fill(),n.fillStyle=r,n.beginPath(),n.moveTo(-i*.46,-i*.22),n.lineTo(-i*.53,-i*.46),n.lineTo(-i*.36,-i*.22),n.closePath(),n.fill(),n.fillStyle=a,n.beginPath(),n.moveTo(-i*.5,-i*.36),n.lineTo(-i*.53,-i*.46),n.lineTo(-i*.45,-i*.36),n.closePath(),n.fill();for(const c of[1,3]){const u=Math.sin(s+c*1.5)*.55;n.save(),n.translate(l[c],i*.12),n.rotate(u),n.fillStyle=r,n.beginPath(),n.ellipse(0,i*.08,i*.055,i*.11,.1,0,Math.PI*2),n.fill(),n.translate(0,i*.15),n.rotate(-u*.3+.1),n.fillStyle=a,n.fillRect(-i*.026,0,i*.052,i*.18),n.restore()}n.restore()}const cx=["aria-label"],ux={class:"sr-only",role:"status","aria-live":"polite"},fx=["src"],dx=["src"],hx=["src"],px=["src"],mx=["src"],gx=["src"],_x=["src"],vx=["src"],xx=240,Sx=24,Mx={__name:"CameraMonitor",setup(n){const e=dt(null),t=wt(()=>{const g=L.activeCamera;return L.cameraActive?L.cameraOffline[g-1]?L.faultyCamera===g?`Kamera ${g}: Signalstörung — Störquelle, Leertaste drücken zum Kalibrieren`:`Kamera ${g}: Signalstörung — Störquelle laut Hofkarte auf Kamera ${L.faultyCamera}`:L.cameraDirtBlocked[g-1]?`Kamera ${g}: Linse zu verschmutzt — Bild zum Reinigen wischen`:L.foxPosition===g?`Kamera ${g}: Fuchs sichtbar`:`Kamera ${g}: ruhig`:`Kamera ${g}: Monitor ausgeschaltet`}),i=dt(null),s=dt(null),r=dt(null),a=dt(null);let o=null;const l=[null,null,null,null,null],c=[null,null,null,null],u=[null,null,null,null];let d=[null,null,null,null],f=null,h=0,_=!1,S=0;fi(()=>L.activeCamera,()=>{L.reducedMotion||(_=!0,S=performance.now())}),_n(()=>{em();const g=[null,Ie,tt,ot,We];for(let z=1;z<=4;z++){const M=Cc(640,360);g[z](M.getContext("2d"),640,360),l[z]=M}for(let z=0;z<4;z++){const M=Cc(640,360);c[z]=M,u[z]=M.getContext("2d",{willReadFrequently:!0}),b(z)}d=[i.value,s.value,r.value,a.value];for(const z of d)z&&z.play().catch(()=>{});const C=e.value;o=C.getContext("2d"),pd(I);function P(){!L.isPaused&&L.gameState==="PLAYING"&&(h+=.04),oe(o,C.width,C.height),_&&Ae(o,C.width,C.height),f=requestAnimationFrame(P)}f=requestAnimationFrame(P),window.addEventListener("keydown",$),window.addEventListener("mouseup",B)}),En(()=>{f&&cancelAnimationFrame(f),pd(null),window.removeEventListener("keydown",$),window.removeEventListener("mouseup",B),o=null,d=[null,null,null,null]});let m=0;function p(g){const C=u[g],P=c[g];if(!C||!P)return;const z=P.width,M=P.height,j=C.getImageData(0,0,z,M).data;let Q=0,q=0;const ce=16;for(let ie=0;ie<M;ie+=ce)for(let ue=0;ue<z;ue+=ce){const ge=(ie*z+ue)*4+3;j[ge]>8&&Q++,q++}const y=Q/q,v=Math.min(1,y);L.cameraLensDirt[g]=v;const W=D[L.currentNight]??.75;v>=W?L.cameraDirtBlocked[g]=!0:v<=W*.6&&(L.cameraDirtBlocked[g]=!1)}function b(g){u[g].clearRect(0,0,640,360);const P=L.currentNight;if(P===2||P===4){const M=3+Math.floor(Math.random()*4);for(let O=0;O<M;O++)T(g,Math.random()*640,Math.random()*360)}else{const M=Math.floor(Math.random()*3);for(let O=0;O<M;O++)A(g,Math.random()*640,Math.random()*360)}p(g)}function A(g,C,P){const z=u[g];if(!z)return;if(z.globalCompositeOperation="source-over",Math.random()<.4){const O=8+Math.random()*12,j=22+Math.random()*10,Q=19+Math.random()*9,q=15+Math.random()*9,ce=.2+Math.random()*.2,y=`rgba(${j}, ${Q}, ${q}, ${ce})`,v=3+Math.floor(Math.random()*3);for(let W=0;W<v;W++){const ie=C+(Math.random()-.5)*O*.9,ue=P+(Math.random()-.5)*O*.9,ge=O*(.4+Math.random()*.6);z.fillStyle=y,z.beginPath(),z.arc(ie,ue,ge,0,Math.PI*2),z.fill()}}else{const O=75+Math.random()*70,j=45+Math.random()*15,Q=41+Math.random()*12,q=35+Math.random()*12,ce=.04+Math.random()*.04,y=z.createRadialGradient(C,P,0,C,P,O);y.addColorStop(0,`rgba(${j},${Q},${q},${ce})`),y.addColorStop(.5,`rgba(${j},${Q},${q},${ce*.3})`),y.addColorStop(1,"rgba(0,0,0,0)"),z.fillStyle=y,z.beginPath(),z.arc(C,P,O,0,Math.PI*2),z.fill()}}function T(g,C,P){const z=u[g];if(!z)return;z.globalCompositeOperation="source-over";const M=11+Math.random()*12,O=72+Math.random()*28,j=90+Math.random()*28,Q=108+Math.random()*30,q=.22+Math.random()*.14,ce=z.createRadialGradient(C,P,0,C,P,M);ce.addColorStop(0,`rgba(${O},${j},${Q},${q})`),ce.addColorStop(.55,`rgba(${O},${j},${Q},${q*.85})`),ce.addColorStop(.82,`rgba(${O+32},${j+30},${Q+30},${q*1.25})`),ce.addColorStop(1,"rgba(0,0,0,0)"),z.fillStyle=ce,z.beginPath(),z.arc(C,P,M,0,Math.PI*2),z.fill()}const N={1:.35,2:1.3,3:.48,4:1.9,5:.65},D={1:.82,2:.48,3:.82,4:.48,5:.82};function I(g){const C=L.currentNight,P=N[C]??.4,z=C===2||C===4;for(let M=0;M<4;M++)if(!L.cameraDirtBlocked[M]&&Math.random()<P*g){if(z){const O=3+Math.floor(Math.random()*3);for(let j=0;j<O;j++)T(M,Math.random()*640,Math.random()*360)}else A(M,Math.random()*640,Math.random()*360);p(M)}}function x(g,C,P){const z=u[g];z.globalCompositeOperation="destination-out";const M=z.createRadialGradient(C,P,0,C,P,36);M.addColorStop(0,"rgba(0,0,0,1)"),M.addColorStop(.65,"rgba(0,0,0,0.6)"),M.addColorStop(1,"rgba(0,0,0,0)"),z.fillStyle=M,z.beginPath(),z.arc(C,P,36,0,Math.PI*2),z.fill(),z.globalCompositeOperation="source-over";const O=performance.now();O-m>100&&(p(g),m=O)}function w(g,C){if(!e.value)return null;const P=e.value.getBoundingClientRect(),z=16/9,M=P.width/P.height;let O,j,Q=0,q=0;return M>z?(j=P.height,O=P.height*z,Q=(P.width-O)/2):(O=P.width,j=P.width/z,q=(P.height-j)/2),{x:(g-P.left-Q)*(640/O),y:(C-P.top-q)*(360/j)}}let k=!1;function F(g){if(!L.cameraActive)return;k=!0;const C=w(g.clientX,g.clientY);C&&x(L.activeCamera-1,C.x,C.y)}function B(){k=!1}function J(g){if(!L.cameraActive||!k)return;const C=w(g.clientX,g.clientY);C&&x(L.activeCamera-1,C.x,C.y)}function re(g){if(!L.cameraActive)return;const C=g.touches[0];if(!C)return;const P=w(C.clientX,C.clientY);P&&x(L.activeCamera-1,P.x,P.y)}function X(){L.cameraActive&&p(L.activeCamera-1)}function Z(g){const C=u[g];C&&(C.clearRect(0,0,640,360),p(g))}function $(g){if(g.key!=="w"&&g.key!=="W"||!L.cameraActive||L.isPaused)return;const C=L.activeCamera-1;L.cameraOffline[C]||Z(C)}function oe(g,C,P){const z=L.activeCamera,M=L.foxPosition===z;if(!L.cameraActive){De(g,C,P,z);return}if(L.cameraOffline[z-1]){Ve(g,C,P,z);return}const O=d[z-1];O?(O.paused&&L.cameraActive&&!L.isPaused&&O.play().catch(()=>{}),O.readyState>=2?g.drawImage(O,0,0,C,P):(g.fillStyle="#020802",g.fillRect(0,0,C,P))):(g.fillStyle="#020802",g.fillRect(0,0,C,P));const j=l[z];if(j&&(g.globalAlpha=.18,g.drawImage(j,0,0),g.globalAlpha=1),M?Me(g,C,P,z,!1):L.ghostFoxPosition===z&&Me(g,C,P,z,!0),L.floodlightAlpha>0){const ce=L.floodlightAlpha;g.fillStyle=`rgba(255, 252, 215, ${ce*.9})`,g.fillRect(0,0,C,P),ce>.07&&L.floodlightCamera===z&&(L.floodlightFoxVisible?fe(g,C,P,ce):L.floodlightCatVisible&&Ce(g,C,P,ce))}g.drawImage(c[z-1],0,0),g.fillStyle="rgba(0, 18, 0, 0.14)";for(let ce=0;ce<P;ce+=3)g.fillRect(0,ce,C,1);const Q=g.createRadialGradient(C/2,P/2,P*.28,C/2,P/2,P*.72);Q.addColorStop(0,"transparent"),Q.addColorStop(1,"rgba(0,0,0,0.7)"),g.fillStyle=Q,g.fillRect(0,0,C,P),g.fillStyle="rgba(0,0,0,0.55)",g.fillRect(8,8,68,20),g.fillStyle="#4adf8a",g.font=`bold ${Math.round(P*.042)}px 'Courier New', monospace`,g.textAlign="left",g.textBaseline="top",g.fillText(`CAM ${z}`,13,11);const q=.45+.55*Math.abs(Math.sin(h*.45));g.fillStyle=`rgba(220, 30, 30, ${q})`,g.beginPath(),g.arc(C-18,18,5,0,Math.PI*2),g.fill(),g.fillStyle=`rgba(220, 30, 30, ${q*.8})`,g.font=`${Math.round(P*.034)}px 'Courier New', monospace`,g.textAlign="right",g.textBaseline="middle",g.fillText("REC",C-28,18),L.cameraDirtBlocked[z-1]&&ve(g,C,P)}function ve(g,C,P){const z=.55+.45*Math.abs(Math.sin(h*.8)),M=Math.round(P*.13),O=P-M-10;g.fillStyle="rgba(36, 20, 0, 0.74)",g.fillRect(0,O,C,M),g.strokeStyle=`rgba(223, 138, 58, ${z})`,g.lineWidth=2,g.strokeRect(1,O,C-2,M),g.textAlign="center",g.textBaseline="middle",g.fillStyle=`rgba(255, 180, 90, ${z})`,g.font=`bold ${Math.round(P*.05)}px 'Courier New', monospace`,g.fillText("⚠ LINSE ZU VERSCHMUTZT",C/2,O+M*.34),g.fillStyle="rgba(225, 205, 175, 0.82)",g.font=`${Math.round(P*.033)}px 'Courier New', monospace`,g.fillText("Mit der Maus über das Bild wischen — Flutlicht blockiert",C/2,O+M*.7)}function Ae(g,C,P){const z=(performance.now()-S)/xx;if(z>=1){_=!1;return}const M=1-z;g.save(),g.fillStyle=`rgba(0, 4, 0, ${M*.7})`,g.fillRect(0,0,C,P);for(let O=0;O<7;O++){const j=Math.random()*P,Q=2+Math.random()*P*.06,q=(Math.random()-.5)*C*.1*M;g.fillStyle=`rgba(120, 255, 160, ${(.05+Math.random()*.13)*M})`,g.fillRect(q,j,C,Q)}for(let O=0;O<3;O++)g.fillStyle=`rgba(0, 0, 0, ${.3*M})`,g.fillRect(0,Math.random()*P,C,1+Math.random()*P*.03);g.fillStyle=`rgba(140, 255, 170, ${.28*M})`,g.fillRect(0,z*P,C,2),g.restore()}function De(g,C,P,z){g.fillStyle="#020202",g.fillRect(0,0,C,P);const M=g.createLinearGradient(0,0,C,0);M.addColorStop(0,"rgba(255, 25, 25, 0.02)"),M.addColorStop(.5,"rgba(255, 25, 25, 0.10)"),M.addColorStop(1,"rgba(255, 25, 25, 0.02)"),g.fillStyle=M,g.fillRect(0,0,C,P),g.fillStyle="rgba(10, 18, 10, 0.8)";for(let O=0;O<P;O+=4)g.fillRect(0,O,C,1);g.strokeStyle="rgba(220, 60, 60, 0.5)",g.lineWidth=2,g.strokeRect(12,12,C-24,P-24),g.fillStyle="rgba(220, 60, 60, 0.92)",g.font=`bold ${Math.round(P*.09)}px 'Courier New', monospace`,g.textAlign="center",g.textBaseline="middle",g.fillText("KEIN SIGNAL",C/2,P/2-10),g.fillStyle="rgba(200, 200, 200, 0.72)",g.font=`${Math.round(P*.04)}px 'Courier New', monospace`,g.fillText(`CAM ${z} AUS`,C/2,P/2+24)}function Ie(g,C,P){const z=g.createLinearGradient(0,0,0,P*.54);z.addColorStop(0,"#010707"),z.addColorStop(1,"#021507"),g.fillStyle=z,g.fillRect(0,0,C,P*.54),g.fillStyle="rgba(160, 240, 160, 0.55)";const M=[[.09,.05],[.24,.13],[.48,.08],[.69,.04],[.83,.16],[.38,.19],[.58,.22],[.14,.27]];for(const[j,Q]of M)g.beginPath(),g.arc(j*C,Q*P,1,0,Math.PI*2),g.fill();const O=g.createLinearGradient(0,P*.5,0,P);O.addColorStop(0,"#041604"),O.addColorStop(1,"#020c02"),g.fillStyle=O,g.fillRect(0,P*.5,C,P*.5),g.fillStyle="#0a260a",g.beginPath(),g.moveTo(0,P*.54);for(let j=0;j<=C;j+=14)g.lineTo(j,P*.51+Math.sin(j*.28)*4+Math.cos(j*.65)*3);g.lineTo(C,P*.54),g.closePath(),g.fill(),g.fillStyle="#030c03",g.fillRect(C*.79,P*.22,C*.028,P*.32),g.fillStyle="#051505",g.beginPath(),g.ellipse(C*.804,P*.26,C*.065,P*.14,0,0,Math.PI*2),g.fill()}function tt(g,C,P){Ie(g,C,P),g.fillStyle="#080f05",g.beginPath(),g.moveTo(C*.36,P),g.lineTo(C*.41,P*.54),g.lineTo(C*.59,P*.54),g.lineTo(C*.64,P),g.closePath(),g.fill(),g.fillStyle="#0c1808";for(let z=0;z<3;z++)g.fillRect(C*(.04+z*.1),P*.39,C*.017,P*.24);g.fillRect(C*.04,P*.43,C*.24,P*.013),g.fillRect(C*.04,P*.51,C*.24,P*.013),g.fillStyle="#142508",g.fillRect(C*.375,P*.31,C*.022,P*.34),g.fillRect(C*.605,P*.31,C*.022,P*.34),g.fillRect(C*.375,P*.36,C*.253,P*.015),g.fillRect(C*.375,P*.46,C*.253,P*.015),g.fillRect(C*.375,P*.56,C*.253,P*.015),g.fillStyle="#0c1808";for(let z=0;z<3;z++)g.fillRect(C*(.64+z*.1),P*.39,C*.017,P*.24);g.fillRect(C*.64,P*.43,C*.25,P*.013),g.fillRect(C*.64,P*.51,C*.25,P*.013)}function ot(g,C,P){g.fillStyle="#010707",g.fillRect(0,0,C,P*.46);const z=g.createLinearGradient(0,P*.44,0,P);z.addColorStop(0,"#091008"),z.addColorStop(1,"#050a04"),g.fillStyle=z,g.fillRect(0,P*.44,C,P*.56),g.fillStyle="#060e06",g.fillRect(C*.29,P*.18,C*.42,P*.28),g.beginPath(),g.moveTo(C*.26,P*.18),g.lineTo(C*.5,P*.04),g.lineTo(C*.74,P*.18),g.closePath(),g.fill(),g.fillStyle="#0a1a0a",g.fillRect(C*.44,P*.29,C*.12,P*.17),g.fillStyle="#0c1a06",g.beginPath(),g.ellipse(C*.14,P*.72,C*.075,P*.065,0,0,Math.PI*2),g.fill(),g.strokeStyle="rgba(18, 35, 10, 0.45)",g.lineWidth=1;for(let M=0;M<5;M++)g.beginPath(),g.moveTo(0,P*(.54+M*.08)),g.lineTo(C,P*(.56+M*.07)),g.stroke()}function We(g,C,P){g.fillStyle="#060c06",g.fillRect(0,0,C,P),g.strokeStyle="rgba(12, 22, 10, 0.6)",g.lineWidth=1;for(let Q=0;Q<P;Q+=28)g.beginPath(),g.moveTo(0,Q),g.lineTo(C,Q),g.stroke();const z=C*.48,M=P*.7,O=(C-z)/2,j=(P-M)/2;g.fillStyle="#0a1a0a",g.fillRect(O-14,j-10,z+28,M+14),g.fillStyle="#0d200d",g.fillRect(O,j,z,M),g.strokeStyle="#091509",g.lineWidth=2;for(let Q=1;Q<8;Q++)g.beginPath(),g.moveTo(O,j+M/8*Q),g.lineTo(O+z,j+M/8*Q),g.stroke();g.lineWidth=3,g.beginPath(),g.moveTo(C*.5,j),g.lineTo(C*.5,j+M),g.stroke(),g.strokeStyle="#1a3a14",g.lineWidth=3,g.beginPath(),g.arc(O+z*.62,j+M*.54,8,0,Math.PI*2),g.stroke(),g.strokeStyle="rgba(20, 45, 12, 0.65)",g.lineWidth=1.5,g.beginPath(),g.moveTo(C*.43,j+M*.24),g.lineTo(C*.455,j+M*.44),g.stroke(),g.beginPath(),g.moveTo(C*.41,j+M*.27),g.lineTo(C*.435,j+M*.49),g.stroke()}function fe(g,C,P,z){const M=1-z,O=P*.17*(1-M*.55),j=C*(.5-M*.38),Q=P*(.6+M*.06),q=Math.floor(M*or.frameCount*2.8)%or.frameCount,ce=or.frameW/or.frameH;ox(g,q,j,Q,O*2.2*ce,O*2.2)}function Ce(g,C,P,z){const M=1-z,O=P*.12*(1-M*.5),j=C*(.46+M*.42),Q=P*(.63+M*.05);g.save(),g.globalAlpha=Math.min(1,z*1.4)*.92,g.fillStyle="rgba(14, 11, 16, 0.94)",g.strokeStyle="rgba(14, 11, 16, 0.94)",g.lineCap="round",g.lineWidth=O*.28,g.beginPath(),g.moveTo(j-O*1.4,Q),g.quadraticCurveTo(j-O*2.3,Q-O*.6,j-O*2,Q-O*1.45),g.stroke(),g.lineWidth=O*.2;const q=Math.sin(M*26)*O*.45;for(const v of[j-O*.8,j-O*.2,j+O*.5,j+O*1.05])g.beginPath(),g.moveTo(v,Q+O*.45),g.lineTo(v+(v>j?q:-q),Q+O*1.15),g.stroke();g.beginPath(),g.ellipse(j,Q,O*1.5,O*.7,0,0,Math.PI*2),g.fill();const ce=j+O*1.45,y=Q-O*.35;g.beginPath(),g.arc(ce,y,O*.55,0,Math.PI*2),g.fill(),g.beginPath(),g.moveTo(ce-O*.4,y-O*.3),g.lineTo(ce-O*.15,y-O*1.05),g.lineTo(ce+O*.12,y-O*.35),g.closePath(),g.fill(),g.beginPath(),g.moveTo(ce+O*.15,y-O*.35),g.lineTo(ce+O*.48,y-O*1),g.lineTo(ce+O*.62,y-O*.25),g.closePath(),g.fill(),g.fillStyle=`rgba(80, 255, 100, ${z})`,g.beginPath(),g.arc(ce+O*.28,y-O*.05,O*.13,0,Math.PI*2),g.fill(),g.restore()}function Me(g,C,P,z,M=!1){const O=.38+.62*Math.abs(Math.sin(h));let j,Q,q;if(z===1?(j=C*.23,Q=C*.28,q=P*.49):z===2?(j=C*.45,Q=C*.5,q=P*.43):z===3?(j=C*.63,Q=C*.68,q=P*.53):(j=C*.455,Q=C*.505,q=P*.52),M){j+=C*.14,Q+=C*.14,q-=P*.13;for(const ce of[j,Q]){const y=g.createRadialGradient(ce,q,1.5,ce,q,13);y.addColorStop(0,`rgba(40, 255, 70, ${O*.5})`),y.addColorStop(1,"transparent"),g.fillStyle=y,g.fillRect(ce-14,q-14,28,28),g.fillStyle=`rgba(70, 240, 95, ${O})`,g.beginPath(),g.ellipse(ce,q,4.5,3,0,0,Math.PI*2),g.fill(),g.fillStyle=`rgba(0, 0, 0, ${O*.85})`,g.beginPath(),g.ellipse(ce,q,1.6,2.4,0,0,Math.PI*2),g.fill()}return}for(const ce of[j,Q]){const y=g.createRadialGradient(ce,q,2,ce,q,20);y.addColorStop(0,`rgba(255, 25, 0, ${O*.65})`),y.addColorStop(1,"transparent"),g.fillStyle=y,g.fillRect(ce-22,q-22,44,44),g.fillStyle=`rgba(240, 45, 0, ${O})`,g.beginPath(),g.ellipse(ce,q,7,4.5,0,0,Math.PI*2),g.fill(),g.fillStyle=`rgba(0, 0, 0, ${O*.85})`,g.beginPath(),g.ellipse(ce,q,2.5,3.5,0,0,Math.PI*2),g.fill()}}function Ve(g,C,P,z){g.fillStyle="#050505",g.fillRect(0,0,C,P),g.fillStyle="rgba(120, 120, 120, 0.18)";for(let O=0;O<450;O++){const j=Math.random()*C,Q=Math.random()*P,q=2+Math.random()*8,ce=1+Math.random()*3;g.fillRect(j,Q,q,ce)}g.fillStyle="rgba(0, 0, 0, 0.4)";for(let O=0;O<P;O+=4)g.fillRect(0,O,C,1);g.strokeStyle="rgba(235, 65, 65, 0.4)",g.lineWidth=2,g.strokeRect(12,12,C-24,P-24),g.fillStyle="rgba(235, 65, 65, 0.95)",g.font=`bold ${Math.round(P*.08)}px 'Courier New', monospace`,g.textAlign="center",g.textBaseline="middle",g.fillText("SIGNALSTÖRUNG",C/2,P/2-25);const M=L.faultyCamera===z;if(g.font=`bold ${Math.round(P*.045)}px 'Courier New', monospace`,L.calibratingCamera===z){const O=Math.round(L.calibrationProgress);g.fillStyle="#ffaa33",g.fillText(`KALIBRIERUNG: ${O}%`,C/2,P/2+18);const j=200,Q=12,q=(C-j)/2,ce=P/2+38;g.strokeStyle="#444",g.strokeRect(q,ce,j,Q),g.fillStyle="#ffaa33",g.fillRect(q+2,ce+2,(j-4)*(O/100),Q-4)}else M?(g.fillStyle="#ffaa33",g.fillText("» STÖRQUELLE «",C/2,P/2+16),g.font=`${Math.round(P*.035)}px 'Courier New', monospace`,g.fillStyle="#cfcf99",g.fillText("LEERTASTE / KLICK: KALIBRIEREN",C/2,P/2+42)):(g.fillStyle="#bbb",g.fillText("GESAMTES SYSTEM OFFLINE",C/2,P/2+16),g.font=`${Math.round(P*.035)}px 'Courier New', monospace`,g.fillStyle="#999",g.fillText("STÖRQUELLE AUF HOFKARTE  ✕",C/2,P/2+42));g.fillStyle="rgba(0,0,0,0.55)",g.fillRect(8,8,68,20),g.fillStyle="#eb4141",g.font=`bold ${Math.round(P*.042)}px 'Courier New', monospace`,g.textAlign="left",g.textBaseline="top",g.fillText(`CAM ${z}`,13,11)}let pe=!1,me=0,R=0;function U(g){pe=!0,me=g.clientX,R=g.clientY}function Y(g){pe&&(pe=!1,Math.hypot(g.clientX-me,g.clientY-R)<=Sx&&Qp())}function ne(){pe=!1}return(g,C)=>(Oe(),He("div",{class:"cam-wrapper",onMousedown:F,onMousemove:J,onMouseleave:X,onTouchstart:ca(re,["prevent"]),onTouchmove:ca(re,["prevent"]),onPointerdown:U,onPointerup:Y,onPointercancel:ne},[G("canvas",{ref_key:"canvasRef",ref:e,class:"cam-canvas",width:"640",height:"360",role:"img","aria-label":t.value},null,8,cx),G("p",ux,it(t.value),1),G("video",{ref_key:"video1",ref:i,loop:"",muted:"",playsinline:"",preload:"auto",class:"cam-video"},[G("source",{src:Ye(Tt)("/assets/video/cam1.mp4"),type:"video/mp4"},null,8,fx),G("source",{src:Ye(Tt)("/assets/video/cam1.webm"),type:"video/webm"},null,8,dx)],512),G("video",{ref_key:"video2",ref:s,loop:"",muted:"",playsinline:"",preload:"auto",class:"cam-video"},[G("source",{src:Ye(Tt)("/assets/video/cam2.mp4"),type:"video/mp4"},null,8,hx),G("source",{src:Ye(Tt)("/assets/video/cam2.webm"),type:"video/webm"},null,8,px)],512),G("video",{ref_key:"video3",ref:r,loop:"",muted:"",playsinline:"",preload:"auto",class:"cam-video"},[G("source",{src:Ye(Tt)("/assets/video/cam3.mp4"),type:"video/mp4"},null,8,mx),G("source",{src:Ye(Tt)("/assets/video/cam3.webm"),type:"video/webm"},null,8,gx)],512),G("video",{ref_key:"video4",ref:a,loop:"",muted:"",playsinline:"",preload:"auto",class:"cam-video"},[G("source",{src:Ye(Tt)("/assets/video/cam4.mp4"),type:"video/mp4"},null,8,_x),G("source",{src:Ye(Tt)("/assets/video/cam4.webm"),type:"video/webm"},null,8,vx)],512)],32))}},bx=dn(Mx,[["__scopeId","data-v-e9085e1b"]]),yx={class:"hofmap-wrapper"},Ex=["onClick"],Tx=["cx","cy","fill","stroke"],Ax=["x","y","fill"],wx=["x","y"],Cx=["x","y","fill"],Rx={__name:"HofMap",emits:["switch-camera"],setup(n,{emit:e}){const t=e,i=dt(null),s=[{id:1,x:64,y:44,label:"CAM 1",zone:"FELD"},{id:2,x:64,y:140,label:"CAM 2",zone:"TOR"},{id:3,x:64,y:236,label:"CAM 3",zone:"HOF"},{id:4,x:64,y:332,label:"CAM 4",zone:"STALL"}];function r(m){return L.faultyCamera===m?"✕":L.cameraOffline[m-1]?"–":L.cameraDirtBlocked[m-1]?"⚠":""}function a(m,p){return L.faultyCamera===m?"#df3a3a":L.cameraOffline[m-1]?"#6a6a6a":L.cameraDirtBlocked[m-1]?"#df8a3a":L.activeCamera===m?"#3adf7a":p}const o=wt(()=>{const m=L.foxConfirmedPosition;return m==null?null:m>=1&&m<=4?{x:s[m-1].x,y:s[m-1].y}:null});let l=null,c=null,u=null,d=null,f=null,h=!1;_n(()=>{typeof Snap>"u"||(l=Snap(i.value),c=l.g(),u=c.circle(0,0,5).attr({fill:"none",stroke:"#dd3333",strokeWidth:1.5,opacity:0}),d=c.circle(0,0,5).attr({fill:"#bb2222"}),f=c.circle(0,0,2).attr({fill:"#ff5555"}),c.attr({display:"none"}),_(o.value))}),En(()=>{h=!1});function _(m){if(c){if(!m){h=!1,c.attr({display:"none"});return}if(u.attr({cx:m.x,cy:m.y}),d.attr({cx:m.x,cy:m.y}),f.attr({cx:m.x,cy:m.y}),c.attr({display:""}),L.reducedMotion){u.stop(),u.attr({r:11,opacity:.45});return}h||(h=!0,S())}}function S(){!h||!u||(u.attr({r:5,opacity:.6}),u.animate({r:13,opacity:0},1100,function(){h&&S()}))}return fi(o,m=>_(m)),(m,p)=>(Oe(),He("div",yx,[p[6]||(p[6]=G("p",{class:"map-title"},"HOFKARTE",-1)),(Oe(),He("svg",{ref_key:"svgEl",ref:i,viewBox:"0 0 168 404",class:"hofmap-svg"},[p[0]||(p[0]=G("line",{x1:"64",y1:"44",x2:"64",y2:"140",stroke:"#243a24","stroke-width":"1.5","stroke-dasharray":"5 3"},null,-1)),p[1]||(p[1]=G("line",{x1:"64",y1:"140",x2:"64",y2:"236",stroke:"#243a24","stroke-width":"1.5","stroke-dasharray":"5 3"},null,-1)),p[2]||(p[2]=G("line",{x1:"64",y1:"236",x2:"64",y2:"332",stroke:"#243a24","stroke-width":"1.5","stroke-dasharray":"5 3"},null,-1)),p[3]||(p[3]=G("line",{x1:"64",y1:"332",x2:"64",y2:"358",stroke:"#3a2424","stroke-width":"1.5","stroke-dasharray":"5 3"},null,-1)),(Oe(),He(kt,null,di(s,b=>G("g",{key:b.id,class:"cam-node",onClick:A=>t("switch-camera",b.id),style:{cursor:"pointer"}},[G("circle",{cx:b.x,cy:b.y,r:"19",fill:Ye(L).activeCamera===b.id?"#0a280a":"#0e0e0e",stroke:a(b.id,"#2a4a2a"),"stroke-width":"1.5"},null,8,Tx),G("text",{x:b.x,y:b.y+1,"text-anchor":"middle","dominant-baseline":"middle","font-family":"'Courier New', monospace","font-size":"11","font-weight":"bold",fill:a(b.id,"#5a8a5a")},it(b.label),9,Ax),G("text",{x:b.x+30,y:b.y+1,"text-anchor":"start","dominant-baseline":"middle","font-family":"'Courier New', monospace","font-size":"10",fill:"#3a6a3a"},it(b.zone),9,wx),r(b.id)?(Oe(),He("text",{key:0,x:b.x-30,y:b.y+1,"text-anchor":"middle","dominant-baseline":"middle","font-family":"'Courier New', monospace","font-size":"15","font-weight":"bold",fill:Ye(L).faultyCamera===b.id?"#df3a3a":Ye(L).cameraOffline[b.id-1]?"#8a8a8a":"#df8a3a"},it(r(b.id)),9,Cx)):fn("",!0)],8,Ex)),64)),p[4]||(p[4]=G("circle",{cx:"64",cy:"377",r:"19",fill:"#1a0a0a",stroke:"#5a2a2a","stroke-width":"1.5"},null,-1)),p[5]||(p[5]=G("text",{x:"64",y:"378","text-anchor":"middle","dominant-baseline":"middle","font-family":"'Courier New', monospace","font-size":"10","font-weight":"bold",fill:"#a85a5a"},"STALL",-1))],512))]))}},Px=dn(Rx,[["__scopeId","data-v-aac9f06d"]]),Lx={class:"battery"},Dx={class:"battery-body"},Ix={class:"power-pct"},Nx={__name:"PowerIndicator",setup(n){const e=wt(()=>{const i=L.battery;return i>50?"#4adf8a":i>30?"#dfdf4a":i>10?"#df944a":"#df4a4a"}),t=wt(()=>L.battery<=10);return(i,s)=>(Oe(),He("div",{class:Bt(["power",{flicker:t.value}])},[s[0]||(s[0]=G("span",{class:"power-label"},"BAT",-1)),G("div",Lx,[G("div",Dx,[G("div",{class:"battery-fill",style:us({width:`${Ye(L).battery}%`,backgroundColor:e.value})},null,4)]),G("div",{class:"battery-cap",style:us({background:e.value})},null,4)]),G("span",Ix,it(Math.round(Ye(L).battery))+"%",1)],2))}},Ux=dn(Nx,[["__scopeId","data-v-70666ffb"]]),Fx={class:"panel-title"},Ox={key:0,class:"defect-badge"},Bx={class:"warning-row"},kx={__name:"AlarmPanel",setup(n){const e=dt(null),t=wt(()=>L.foxPosition>=4),i=wt(()=>L.currentNight>=3);let s=null,r=null,a=null,o=null,l=!1;_n(()=>{typeof Snap>"u"||(s=Snap(e.value),s.circle(15,15,13).attr({fill:"none",stroke:"#2a2a2a",strokeWidth:1}),r=s.circle(15,15,11).attr({fill:"#1c1c1c",stroke:"#333",strokeWidth:1}),a=s.circle(15,15,7).attr({fill:"none",stroke:"#cc2222",strokeWidth:2,opacity:0}))}),En(()=>{o!==null&&(clearInterval(o),o=null)}),fi(t,f=>{!r||i.value||(f?c():u())});function c(){o===null&&(l=!1,d(),o=setInterval(()=>{l=!l,d()},320))}function u(){o!==null&&(clearInterval(o),o=null),l=!1,d()}function d(){!r||!a||(r.attr({fill:l?"#cc2222":"#1c1c1c",stroke:l?"#ff4444":"#333333"}),a.attr({opacity:l?.82:0,r:l?10:7}))}return(f,h)=>(Oe(),He("div",{class:Bt(["alarm-panel",{defective:i.value}])},[G("p",Fx,[h[0]||(h[0]=Fs(" ALARM-PANEL ",-1)),i.value?(Oe(),He("span",Ox,"⚠ DEFEKT")):fn("",!0)]),G("div",Bx,[(Oe(),He("svg",{ref_key:"warnSvgEl",ref:e,class:"warn-svg",viewBox:"0 0 30 30","aria-hidden":"true"},null,512)),G("span",{class:Bt(["warning-text",{active:t.value&&!i.value,defective:i.value}])},it(i.value?"SYSTEM DEFEKT":t.value?"! FUCHS NÄHERT SICH !":"ruhig"),3)])],2))}},zx=dn(kx,[["__scopeId","data-v-67ce4ed5"]]),Vx={class:"clock-panel"},Gx={class:"clock-face-wrap"},Hx=["aria-label"],Wx={stroke:"#2f6a3a","stroke-linecap":"round"},Xx=["y2","stroke-width","transform"],qx=["transform"],$x=["transform"],Kx={class:"clock-digital"},Yx={__name:"NightClock",setup(n){const e=wt(()=>{const o=Jp[L.currentNight-1]??180;return Math.min(1,L.inGameTime/o)}),t=wt(()=>e.value*6*60),i=wt(()=>t.value%60*6),s=wt(()=>t.value*.5%360),r=wt(()=>{const o=Math.floor(t.value/10)*10,l=Math.floor(o/60),c=o%60;return`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`}),a=Array.from({length:12},(o,l)=>l*30);return(o,l)=>(Oe(),He("section",Vx,[l[6]||(l[6]=G("p",{class:"clock-title"},"UHRZEIT",-1)),G("div",Gx,[(Oe(),He("svg",{viewBox:"0 0 120 120",class:"clock-svg",role:"img","aria-label":`Uhrzeit ${r.value} Uhr`},[l[0]||(l[0]=G("circle",{cx:"60",cy:"60",r:"56",fill:"#0a140a",stroke:"#1e3a1e","stroke-width":"2"},null,-1)),l[1]||(l[1]=G("circle",{cx:"60",cy:"60",r:"52",fill:"none",stroke:"#12240f","stroke-width":"1"},null,-1)),G("g",Wx,[(Oe(!0),He(kt,null,di(Ye(a),(c,u)=>(Oe(),He("line",{key:u,x1:"60",y1:"12",x2:"60",y2:u%3===0?20:16,"stroke-width":u%3===0?2.4:1.2,transform:`rotate(${c} 60 60)`},null,8,Xx))),128))]),l[2]||(l[2]=Bu('<g fill="#3a7a4a" font-family="&#39;Courier New&#39;, monospace" font-size="9" font-weight="bold" text-anchor="middle" dominant-baseline="middle" data-v-3c62f0b2><text x="60" y="27" data-v-3c62f0b2>12</text><text x="93" y="60" data-v-3c62f0b2>3</text><text x="60" y="94" data-v-3c62f0b2>6</text><text x="27" y="60" data-v-3c62f0b2>9</text></g>',1)),G("line",{x1:"60",y1:"66",x2:"60",y2:"36",stroke:"#4adf8a","stroke-width":"3.4","stroke-linecap":"round",transform:`rotate(${s.value} 60 60)`},null,8,qx),G("line",{x1:"60",y1:"68",x2:"60",y2:"22",stroke:"#7affb0","stroke-width":"2.2","stroke-linecap":"round",transform:`rotate(${i.value} 60 60)`},null,8,$x),l[3]||(l[3]=G("circle",{cx:"60",cy:"60",r:"3.2",fill:"#4adf8a"},null,-1)),l[4]||(l[4]=G("circle",{cx:"60",cy:"60",r:"1.4",fill:"#0a140a"},null,-1))],8,Hx))]),G("p",Kx,[Fs(it(r.value)+" ",1),l[5]||(l[5]=G("span",{class:"clock-unit"},"UHR",-1))])]))}},jx=dn(Yx,[["__scopeId","data-v-3c62f0b2"]]),Zx={class:"dashboard"},Jx={class:"dash-header"},Qx={class:"night-label"},eS={class:"dash-body"},tS={class:"cam-section"},nS={class:"control-row"},iS=["disabled"],sS={class:"cam-switcher"},rS=["onClick"],aS={class:"side-panel"},oS={class:"battery-panel"},lS={class:"pause-box"},cS={class:"pause-audio"},uS={class:"audio-row"},fS=["value"],dS={class:"audio-row"},hS=["value"],pS={class:"pause-access"},mS=["aria-pressed"],gS={class:"toggle-box","aria-hidden":"true"},_S={__name:"GameDashboard",setup(n){const e=dt(1),t=dt(.5);fi(()=>[L.activeCamera,L.cameraActive],([A,T])=>B_(A,T)),fi(()=>L.cameraActive,A=>z_(A));function i(A){A<1||A>4||A===L.activeCamera||(jv(),L.activeCamera=A)}function s(){L.cameraActive=!L.cameraActive}const r=wt(()=>L.floodlightCooldown>0),a=wt(()=>L.cameraDirtBlocked[L.activeCamera-1]??!1),o=wt(()=>L.cameraOffline[L.activeCamera-1]??!1),l=wt(()=>L.activeCamera===1),c=wt(()=>r.value||!L.cameraActive||a.value||o.value||l.value),u=wt(()=>r.value?"ABKÜHLUNG...":L.cameraActive?o.value?"SIGNALSTÖRUNG":a.value?"LINSE SCHMUTZIG":l.value?"KEINE WIRKUNG":"FLUTLICHT":"CAM AUS");function d(){if(c.value)return;Zv();const A=Hv();cs("floodlight",{pan:0,volume:.9}),L.floodlightAlpha=1,L.floodlightCamera=L.activeCamera,L.floodlightFoxVisible=A,L.floodlightCatVisible=L.ghostFoxPosition===L.activeCamera,L.floodlightCatVisible&&(L.ghostFoxPosition=null),L.floodlightCooldown=5}function f(){L.isPaused?(L.isPaused=!1,ex(),vl()):(L.isPaused=!0,Qv(),V_())}function h(){L.isPaused=!1,uo(),vl(),xr(),Kt("MAIN_MENU")}function _(A){const T=parseInt(A.key);if(T>=1&&T<=4){i(T);return}if(A.key==="p"||A.key==="P"||A.key==="Escape"){f();return}(A.key===" "||A.code==="Space")&&(A.preventDefault(),Qp())}function S(){document.hidden&&L.gameState==="PLAYING"&&!L.isPaused&&f()}function m(){L.reducedMotion=!L.reducedMotion,ls({reducedMotion:L.reducedMotion})}function p(A){e.value=Number(A.target.value),ud(e.value),ls({masterVol:e.value})}function b(A){t.value=Number(A.target.value),fd(t.value),ls({ambientVol:t.value})}return _n(()=>{const A=va();e.value=A.masterVol??G_(),t.value=A.ambientVol??H_(),ud(e.value),fd(t.value),window.addEventListener("keydown",_),document.addEventListener("visibilitychange",S)}),En(()=>{window.removeEventListener("keydown",_),document.removeEventListener("visibilitychange",S),Jo(),L.isPaused&&(L.isPaused=!1,vl())}),(A,T)=>(Oe(),He("div",Zx,[G("header",Jx,[G("span",Qx,"NACHT "+it(Ye(L).currentNight),1)]),G("div",eS,[G("div",tS,[At(bx),G("div",nS,[G("button",{class:Bt(["cam-btn cam-toggle",{active:Ye(L).cameraActive}]),onClick:s},it(Ye(L).cameraActive?"CAM AUS":"CAM EIN"),3),G("button",{class:Bt(["cam-btn pause-btn",{active:Ye(L).isPaused}]),onClick:f,title:"Pause & Menü (P / Escape)"},it(Ye(L).isPaused?"▶ WEITER":"☰ PAUSE / MENÜ"),3),G("button",{class:"cam-btn floodlight-btn",disabled:c.value,onClick:d},it(u.value),9,iS)]),G("div",sS,[(Oe(),He(kt,null,di(4,N=>G("button",{key:N,class:Bt(["cam-btn",{active:Ye(L).activeCamera===N}]),onClick:D=>i(N)},"CAM "+it(N),11,rS)),64))])]),G("aside",aS,[At(zx),At(jx),G("div",oS,[At(Ux)]),At(Px,{onSwitchCamera:i})])]),At(vr,{name:"pause-fade"},{default:Us(()=>[Ye(L).isPaused?(Oe(),He("div",{key:0,class:"pause-overlay",onClick:ca(f,["self"])},[G("div",lS,[T[3]||(T[3]=G("p",{class:"pause-title"},"— PAUSIERT —",-1)),T[4]||(T[4]=G("p",{class:"pause-hint"},"Drücke P, Escape oder klicke hier um fortzufahren",-1)),G("button",{class:"pause-resume-btn",onClick:f},"Weiter spielen"),G("button",{class:"pause-abort-btn",onClick:h},"Zum Hauptmenü"),G("div",cS,[G("label",uS,[T[0]||(T[0]=G("span",null,"Gesamt",-1)),G("input",{type:"range",min:"0",max:"1",step:"0.05",value:e.value,onInput:p,class:"vol-slider"},null,40,fS)]),G("label",dS,[T[1]||(T[1]=G("span",null,"Ambient",-1)),G("input",{type:"range",min:"0",max:"1",step:"0.05",value:t.value,onInput:b,class:"vol-slider"},null,40,hS)])]),G("div",pS,[G("button",{class:Bt(["pause-toggle",{on:Ye(L).reducedMotion}]),"aria-pressed":Ye(L).reducedMotion,onClick:m},[G("span",gS,it(Ye(L).reducedMotion?"✓":""),1),Fs(" Reduzierte Bewegung: "+it(Ye(L).reducedMotion?"AN":"AUS"),1)],10,mS),T[2]||(T[2]=G("p",{class:"pause-toggle-hint"},"Reduziert Blitz- und Flacker-Effekte",-1))])])])):fn("",!0)]),_:1})]))}},vS=dn(_S,[["__scopeId","data-v-f57c8f1a"]]),xS={class:"nightclear-wrapper"},SS=["aria-label"],MS={key:0,class:"nightclear-ui"},bS={key:1,class:"choice-row"},yS={__name:"NightClearScreen",setup(n){const e=dt(null),t=dt(""),i=dt(!1),s=wt(()=>L.currentNight===5),r=wt(()=>`Nacht ${L.currentNight} bestanden. Batterie verbleibend: ${Math.round(L.battery)} Prozent.`);let a=null,o=1,l=null,c=0,u="flash";_n(()=>{xr(),t.value=va().playerName??"",L.nightsCleared.includes(L.currentNight)||L.nightsCleared.push(L.currentNight);const _=L.bestBattery[L.currentNight]??0;L.battery>_&&(L.bestBattery[L.currentNight]=Math.round(L.battery)),L.totalNightsCleared++;try{localStorage.setItem("fnhh_save",JSON.stringify({nightsCleared:L.nightsCleared,bestBattery:L.bestBattery,totalNightsCleared:L.totalNightsCleared}))}catch{}const S=e.value;S.width=window.innerWidth,S.height=window.innerHeight,l=()=>{S.width=window.innerWidth,S.height=window.innerHeight},window.addEventListener("resize",l);const m=S.getContext("2d");L.reducedMotion&&(u="text",o=0,i.value=!0);function p(){const b=S.width,A=S.height;if(m.fillStyle="#000",m.fillRect(0,0,b,A),u==="flash")m.fillStyle=`rgba(0, 120, 30, ${o})`,m.fillRect(0,0,b,A),o-=.022,o<=0&&(u="text",i.value=!0);else{c=Math.min(c+.018,1),m.globalAlpha=c;const T=Math.min(Math.round(b*.06),Math.round(A*.13));m.fillStyle="#4adf8a",m.font=`bold ${T}px 'Courier New', monospace`,m.textAlign="center",m.textBaseline="middle",m.fillText(`NACHT ${L.currentNight} BESTANDEN`,b/2,A/2-T*.55),m.font=`${Math.round(T*.32)}px 'Courier New', monospace`,m.fillStyle="#999",m.fillText(`Batterie verbleibend: ${Math.round(L.battery)} %`,b/2,A/2+T*.5),m.globalAlpha=1}a=requestAnimationFrame(p)}a=requestAnimationFrame(p)}),En(()=>{a&&cancelAnimationFrame(a),window.removeEventListener("resize",l)});function d(){ls({playerName:t.value}),xl(t.value,L.currentNight,L.battery),Kt("TROPHY_ROOM")}function f(){ls({playerName:t.value}),xl(t.value,L.currentNight,L.battery),L.currentNight++,Kt("NIGHT_INTRO")}function h(){ls({playerName:t.value}),xl(t.value,L.currentNight,L.battery),Kt("MAIN_MENU")}return(_,S)=>(Oe(),He("div",xS,[G("canvas",{ref_key:"canvasRef",ref:e,class:"nightclear-canvas",role:"img","aria-label":r.value},null,8,SS),At(vr,{name:"fade-up"},{default:Us(()=>[i.value?(Oe(),He("div",MS,[F0(G("input",{"onUpdate:modelValue":S[0]||(S[0]=m=>t.value=m),class:"name-input",type:"text",maxlength:"20",placeholder:"Dein Name","aria-label":"Spielername"},null,512),[[p_,t.value]]),s.value?(Oe(),He("button",{key:0,class:"proceed-btn",onClick:d},"WEITER")):(Oe(),He("div",bS,[G("button",{class:"proceed-btn",onClick:f},"NÄCHSTE NACHT"),G("button",{class:"proceed-btn menu-btn",onClick:h},"HAUPTMENÜ")]))])):fn("",!0)]),_:1})]))}},ES=dn(yS,[["__scopeId","data-v-a76a01dd"]]),TS={__name:"PowerOutScreen",setup(n){const e=dt(null);let t=null,i=null,s=null;return _n(()=>{xr();const r=e.value;r.width=window.innerWidth,r.height=window.innerHeight,s=()=>{r.width=window.innerWidth,r.height=window.innerHeight},window.addEventListener("resize",s);const a=r.getContext("2d"),o=performance.now();function l(c){const u=(c-o)/1e3,d=r.width,f=r.height;if(a.fillStyle="#000",a.fillRect(0,0,d,f),u<.12&&!L.reducedMotion){const h=(.12-u)/.12;a.fillStyle=`rgba(10, 80, 20, ${h*.7})`,a.fillRect(0,0,d,f)}if(u>.8){const h=Math.min((u-.8)/.6,1);a.globalAlpha=h,a.fillStyle="#2a2a2a",a.font=`bold ${Math.round(d*.035)}px 'Courier New', monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText("STROMAUSFALL",d/2,f/2),a.globalAlpha=1}t=requestAnimationFrame(l)}t=requestAnimationFrame(l),i=setTimeout(()=>{Kt("GAME_OVER")},3e3)}),En(()=>{t&&cancelAnimationFrame(t),clearTimeout(i),window.removeEventListener("resize",s)}),(r,a)=>(Oe(),He("canvas",{ref_key:"canvasRef",ref:e,class:"powerout-canvas",role:"img","aria-label":"Stromausfall. Die Batterie ist leer."},null,512))}},AS=dn(TS,[["__scopeId","data-v-0268898e"]]),wS={class:"gameover-wrapper"},CS=["aria-label"],md=2500,RS={__name:"GameOverScreen",setup(n){const e=wt(()=>L.gameOverReason==="battery"?"Game Over. Deine Batterie ist leer.":"Game Over. Der Fuchs ist ins Hühnerhaus eingedrungen."),t=dt(null);let i=null,s=1,r=null,a=0,o="flash",l=0;const c=[];function u(_,S,m=!1){c.length=0;const p=m?70:45;for(let b=0;b<p;b++)c.push({x:Math.random()*_,y:m?Math.random()*S*.6:-Math.random()*S-20,vx:(Math.random()-.5)*(m?4.5:2),vy:m?3.5+Math.random()*4.5:1.5+Math.random()*2.5,rot:Math.random()*Math.PI*2,vrot:(Math.random()-.5)*(m?.2:.08),wobble:Math.random()*Math.PI*2,wobbleSpeed:.03+Math.random()*.04,wobbleAmp:m?2.5+Math.random()*3:.8+Math.random()*1.2,scale:m?1+Math.random()*1.3:.7+Math.random()*.8})}function d(_,S,m){_.save(),_.fillStyle="rgba(235, 230, 220, 0.88)",_.strokeStyle="rgba(205, 200, 190, 0.4)",_.lineWidth=1;for(const p of c)p.x+=p.vx+Math.sin(p.wobble)*p.wobbleAmp,p.y+=p.vy,p.rot+=p.vrot,p.wobble+=p.wobbleSpeed,p.y>m+20&&(p.y=-20,p.x=Math.random()*S,p.vy=1.5+Math.random()*2.5),_.save(),_.translate(p.x,p.y),_.rotate(p.rot),_.scale(p.scale,p.scale),_.beginPath(),_.moveTo(0,-12),_.quadraticCurveTo(4,-6,2,8),_.quadraticCurveTo(0,12,-2,8),_.quadraticCurveTo(-4,-6,0,-12),_.closePath(),_.fill(),_.beginPath(),_.moveTo(0,-12),_.lineTo(0,12),_.stroke(),_.restore();_.restore()}_n(()=>{xr();const _=t.value;_.width=window.innerWidth,_.height=window.innerHeight,r=()=>{_.width=window.innerWidth,_.height=window.innerHeight},window.addEventListener("resize",r);const S=_.getContext("2d"),m=_.width,p=_.height;L.reducedMotion?(o="text",s=0,L.gameOverReason==="fox"?(Ca(Tt("/assets/audio/chickencoop.mp3"),{volume:.75}),Ca(Tt("/assets/audio/flapping.mp3"),{volume:.5})):cs("game-over")):L.gameOverReason==="fox"?(o="cutscene",l=performance.now(),u(m,p,!0),Ca("/assets/audio/chickencoop.mp3",{volume:.75}),Ca("/assets/audio/flapping.mp3",{volume:.5})):cs("game-over");function b(){const A=_.width,T=_.height;if(S.fillStyle="#000",S.fillRect(0,0,A,T),o==="cutscene"){d(S,A,T);const N=performance.now()-l,D=Math.min(N/md,1),I=Math.max(0,.55*(1-D*1.8));I>0&&(S.fillStyle=`rgba(160, 0, 0, ${I})`,S.fillRect(0,0,A,T)),N>=md&&(o="flash",s=1,u(A,T,!1))}else if(o==="flash")S.fillStyle=`rgba(180, 0, 0, ${s})`,S.fillRect(0,0,A,T),s-=.022,s<=0&&(o="text");else{L.gameOverReason==="fox"&&!L.reducedMotion&&d(S,A,T),a=Math.min(a+.018,1),S.globalAlpha=a;const N=Math.round(A*.1);S.fillStyle="#bb2020",S.font=`bold ${N}px 'Courier New', monospace`,S.textAlign="center",S.textBaseline="middle",S.fillText("GAME OVER",A/2,T/2-N*.35),S.font=`${Math.round(A*.024)}px 'Courier New', monospace`,S.fillStyle="#888";const D=L.gameOverReason==="battery"?"Deine Batterie ist leer.":"Der Fuchs ist ins Hühnerhaus eingedrungen.";S.fillText(D,A/2,T/2+N*.6),S.globalAlpha=1}i=requestAnimationFrame(b)}i=requestAnimationFrame(b)}),En(()=>{i&&cancelAnimationFrame(i),window.removeEventListener("resize",r)});function f(){Kt("MAIN_MENU")}function h(){Kt("NIGHT_INTRO")}return(_,S)=>(Oe(),He("div",wS,[G("canvas",{ref_key:"canvasRef",ref:t,class:"gameover-canvas",role:"img","aria-label":e.value},null,8,CS),G("div",{class:"gameover-ui"},[G("button",{class:"back-btn retry-btn",onClick:h},"Nacht wiederholen"),G("button",{class:"back-btn",onClick:f},"Zurück zum Menü")])]))}},PS=dn(RS,[["__scopeId","data-v-23a78dc7"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="184",pr={ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},LS=0,gd=1,DS=2,ta=1,IS=2,Wr=3,ds=0,gn=1,Pi=2,Ni=0,mr=1,Rc=2,_d=3,vd=4,NS=5,Rs=100,US=101,FS=102,OS=103,BS=104,kS=200,zS=201,VS=202,GS=203,Pc=204,Lc=205,HS=206,WS=207,XS=208,qS=209,$S=210,KS=211,YS=212,jS=213,ZS=214,Dc=0,Ic=1,Nc=2,Mr=3,Uc=4,Fc=5,Oc=6,Bc=7,tm=0,JS=1,QS=2,hi=0,nm=1,im=2,sm=3,Wu=4,rm=5,am=6,om=7,lm=300,Os=301,br=302,Sl=303,Ml=304,el=306,kc=1e3,Di=1001,zc=1002,Wt=1003,eM=1004,Ra=1005,$t=1006,bl=1007,Ls=1008,bn=1009,cm=1010,um=1011,fa=1012,Xu=1013,mi=1014,li=1015,ki=1016,qu=1017,$u=1018,da=1020,fm=35902,dm=35899,hm=1021,pm=1022,Nn=1023,zi=1026,Ds=1027,mm=1028,Ku=1029,Bs=1030,Yu=1031,ju=1033,mo=33776,go=33777,_o=33778,vo=33779,Vc=35840,Gc=35841,Hc=35842,Wc=35843,Xc=36196,qc=37492,$c=37496,Kc=37488,Yc=37489,No=37490,jc=37491,Zc=37808,Jc=37809,Qc=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,au=37817,ou=37818,lu=37819,cu=37820,uu=37821,fu=36492,du=36494,hu=36495,pu=36283,mu=36284,Uo=36285,gu=36286,tM=3200,_u=0,nM=1,as="",Ln="srgb",Fo="srgb-linear",Oo="linear",gt="srgb",Ws=7680,xd=519,iM=512,sM=513,rM=514,Zu=515,aM=516,oM=517,Ju=518,lM=519,Sd=35044,Md="300 es",ci=2e3,ha=2001;function cM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uM(){const n=Bo("canvas");return n.style.display="block",n}const bd={};function yd(...n){const e="THREE."+n.shift();console.log(e,...n)}function gm(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=gm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ft(...n){n=gm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vu(...n){const e=n.join(" ");e in bd||(bd[e]=!0,Xe(...n))}function fM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const dM={[Dc]:Ic,[Nc]:Oc,[Uc]:Bc,[Mr]:Fc,[Ic]:Dc,[Oc]:Nc,[Bc]:Uc,[Fc]:Mr};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,pa=180/Math.PI;function xa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function hM(n,e){return(n%e+e)%e}function yl(n,e,t){return(1-t)*n+t*e}function Dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qu={DEG2RAD:xo,RAD2DEG:pa},df=class df{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};df.prototype.isVector2=!0;let je=df;class Vi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[a+0],h=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==f||c!==h||u!==_){let m=l*f+c*h+u*_+d*S;m<0&&(f=-f,h=-h,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),A=Math.sin(b);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A,l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,d=d*p+S*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,d=d*p+S*o;const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],f=r[a+1],h=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),f=l(i/2),h=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hf=class hf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ed.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hf.prototype.isVector3=!0;let H=hf;const El=new H,Ed=new Vi,pf=class pf{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],S=s[0],m=s[3],p=s[6],b=s[1],A=s[4],T=s[7],N=s[2],D=s[5],I=s[8];return r[0]=a*S+o*b+l*N,r[3]=a*m+o*A+l*D,r[6]=a*p+o*T+l*I,r[1]=c*S+u*b+d*N,r[4]=c*m+u*A+d*D,r[7]=c*p+u*T+d*I,r[2]=f*S+h*b+_*N,r[5]=f*m+h*A+_*D,r[8]=f*p+h*T+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,h=c*r-a*l,_=t*d+i*f+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(s*c-u*i)*S,e[2]=(o*i-s*a)*S,e[3]=f*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=h*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pf.prototype.isMatrix3=!0;let Ke=pf;const Tl=new Ke,Td=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pM(){const n={enabled:!0,workingColorSpace:Fo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fo]:{primaries:e,whitePoint:i,transfer:Oo,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),n}const at=pM();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xs;class mM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=Bo("canvas")),Xs.width=e.width,Xs.height=e.height;const s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gM=0;class ef{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Al(s[a].image)):r.push(Al(s[a]))}else r=Al(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let _M=0;const wl=new H;class sn extends ps{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=Di,s=Di,r=$t,a=Ls,o=Nn,l=bn,c=sn.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=xa(),this.name="",this.source=new ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=lm;sn.DEFAULT_ANISOTROPY=1;const mf=class mf{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,T=(h+1)/2,N=(p+1)/2,D=(u+f)/4,I=(d+S)/4,x=(_+m)/4;return A>T&&A>N?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=D/i,r=I/i):T>N?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=D/s,r=x/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=I/r,s=x/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-S)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mf.prototype.isVector4=!0;let Lt=mf;class vM extends ps{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ef(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends vM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _m extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ko=class ko{constructor(e,t,i,s,r,a,o,l,c,u,d,f,h,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,f,h,_,S,m)}set(e,t,i,s,r,a,o,l,c,u,d,f,h,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ko().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,S=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,S=c*d;t[0]=f+S*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,S=c*d;t[0]=f-S*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,S=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-S*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+S,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SM,e,MM)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Yi.crossVectors(i,Sn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Yi.crossVectors(i,Sn)),Yi.normalize(),Pa.crossVectors(Sn,Yi),s[0]=Yi.x,s[4]=Pa.x,s[8]=Sn.x,s[1]=Yi.y,s[5]=Pa.y,s[9]=Sn.y,s[2]=Yi.z,s[6]=Pa.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],S=i[6],m=i[10],p=i[14],b=i[3],A=i[7],T=i[11],N=i[15],D=s[0],I=s[4],x=s[8],w=s[12],k=s[1],F=s[5],B=s[9],J=s[13],re=s[2],X=s[6],Z=s[10],$=s[14],oe=s[3],ve=s[7],Ae=s[11],De=s[15];return r[0]=a*D+o*k+l*re+c*oe,r[4]=a*I+o*F+l*X+c*ve,r[8]=a*x+o*B+l*Z+c*Ae,r[12]=a*w+o*J+l*$+c*De,r[1]=u*D+d*k+f*re+h*oe,r[5]=u*I+d*F+f*X+h*ve,r[9]=u*x+d*B+f*Z+h*Ae,r[13]=u*w+d*J+f*$+h*De,r[2]=_*D+S*k+m*re+p*oe,r[6]=_*I+S*F+m*X+p*ve,r[10]=_*x+S*B+m*Z+p*Ae,r[14]=_*w+S*J+m*$+p*De,r[3]=b*D+A*k+T*re+N*oe,r[7]=b*I+A*F+T*X+N*ve,r[11]=b*x+A*B+T*Z+N*Ae,r[15]=b*w+A*J+T*$+N*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],S=e[7],m=e[11],p=e[15],b=l*h-c*f,A=o*h-c*d,T=o*f-l*d,N=a*h-c*u,D=a*f-l*u,I=a*d-o*u;return t*(S*b-m*A+p*T)-i*(_*b-m*N+p*D)+s*(_*A-S*N+p*I)-r*(_*T-S*D+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],S=e[13],m=e[14],p=e[15],b=t*o-i*a,A=t*l-s*a,T=t*c-r*a,N=i*l-s*o,D=i*c-r*o,I=s*c-r*l,x=u*S-d*_,w=u*m-f*_,k=u*p-h*_,F=d*m-f*S,B=d*p-h*S,J=f*p-h*m,re=b*J-A*B+T*F+N*k-D*w+I*x;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/re;return e[0]=(o*J-l*B+c*F)*X,e[1]=(s*B-i*J-r*F)*X,e[2]=(S*I-m*D+p*N)*X,e[3]=(f*D-d*I-h*N)*X,e[4]=(l*k-a*J-c*w)*X,e[5]=(t*J-s*k+r*w)*X,e[6]=(m*T-_*I-p*A)*X,e[7]=(u*I-f*T+h*A)*X,e[8]=(a*B-o*k+c*x)*X,e[9]=(i*k-t*B-r*x)*X,e[10]=(_*D-S*T+p*b)*X,e[11]=(d*T-u*D-h*b)*X,e[12]=(o*w-a*F-l*x)*X,e[13]=(t*F-i*w+s*x)*X,e[14]=(S*A-_*N-m*b)*X,e[15]=(u*N-d*A+f*b)*X,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,h=r*u,_=r*d,S=a*u,m=a*d,p=o*d,b=l*c,A=l*u,T=l*d,N=i.x,D=i.y,I=i.z;return s[0]=(1-(S+p))*N,s[1]=(h+T)*N,s[2]=(_-A)*N,s[3]=0,s[4]=(h-T)*D,s[5]=(1-(f+p))*D,s[6]=(m+b)*D,s[7]=0,s[8]=(_+A)*I,s[9]=(m-b)*I,s[10]=(1-(f+S))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=qs.set(s[0],s[1],s[2]).length();const o=qs.set(s[4],s[5],s[6]).length(),l=qs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);const c=1/a,u=1/o,d=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ci,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===ci)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ha)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ci,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===ci)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===ha)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ko.prototype.isMatrix4=!0;let Rt=ko;const qs=new H,Bn=new Rt,SM=new H(0,0,0),MM=new H(1,1,1),Yi=new H,Pa=new H,Sn=new H,wd=new Rt,Cd=new Vi;class hs{constructor(e=0,t=0,i=0,s=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bM=0;const Rd=new H,$s=new Vi,xi=new Rt,La=new H,Ir=new H,yM=new H,EM=new Vi,Pd=new H(1,0,0),Ld=new H(0,1,0),Dd=new H(0,0,1),Id={type:"added"},TM={type:"removed"},Ks={type:"childadded",child:null},Cl={type:"childremoved",child:null};class Yt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new H,t=new hs,i=new Vi,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ke}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?La.copy(e):La.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ir,La,this.up):xi.lookAt(La,Ir,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(xi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Id),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(TM),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Id),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,EM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new H(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=hM(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Pl(a,r,e+1/3),this.g=Pl(a,r,e),this.b=Pl(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Ln){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const i=xm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return at.workingToColorSpace(Qt.copy(this),e),Math.round(rt(Qt.r*255,0,255))*65536+Math.round(rt(Qt.g*255,0,255))*256+Math.round(rt(Qt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ln){at.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Da);const i=yl(ji.h,Da.h,t),s=yl(ji.s,Da.s,t),r=yl(ji.l,Da.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ct;ct.NAMES=xm;class tf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=t}clone(){return new tf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wM extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kn=new H,Si=new H,Ll=new H,Mi=new H,Ys=new H,js=new H,Nd=new H,Dl=new H,Il=new H,Nl=new H,Ul=new Lt,Fl=new Lt,Ol=new Lt;class Hn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),kn.subVectors(e,t),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){kn.subVectors(s,t),Si.subVectors(i,t),Ll.subVectors(e,t);const a=kn.dot(kn),o=kn.dot(Si),l=kn.dot(Ll),c=Si.dot(Si),u=Si.dot(Ll),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-h-_,_,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ul.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Ul.fromBufferAttribute(e,t),Fl.fromBufferAttribute(e,i),Ol.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ul,r.x),a.addScaledVector(Fl,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(e,t,i,s){return kn.subVectors(i,t),Si.subVectors(e,t),kn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),kn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ys.subVectors(s,i),js.subVectors(r,i),Dl.subVectors(e,i);const l=Ys.dot(Dl),c=js.dot(Dl);if(l<=0&&c<=0)return t.copy(i);Il.subVectors(e,s);const u=Ys.dot(Il),d=js.dot(Il);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ys,a);Nl.subVectors(e,r);const h=Ys.dot(Nl),_=js.dot(Nl);if(_>=0&&h<=_)return t.copy(r);const S=h*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(js,o);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return Nd.subVectors(r,s),o=(d-u)/(d-u+(h-_)),t.copy(s).addScaledVector(Nd,o);const p=1/(m+S+f);return a=S*p,o=f*p,t.copy(i).addScaledVector(Ys,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sa{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Na.subVectors(this.max,Nr),Zs.subVectors(e.a,Nr),Js.subVectors(e.b,Nr),Qs.subVectors(e.c,Nr),Zi.subVectors(Js,Zs),Ji.subVectors(Qs,Js),Ss.subVectors(Zs,Qs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Ss.z,Ss.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Ss.z,0,-Ss.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Ss.y,Ss.x,0];return!Bl(t,Zs,Js,Qs,Na)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,Zs,Js,Qs,Na))?!1:(Ua.crossVectors(Zi,Ji),t=[Ua.x,Ua.y,Ua.z],Bl(t,Zs,Js,Qs,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new H,new H,new H,new H,new H,new H,new H,new H],zn=new H,Ia=new Sa,Zs=new H,Js=new H,Qs=new H,Zi=new H,Ji=new H,Ss=new H,Nr=new H,Na=new H,Ua=new H,Ms=new H;function Bl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ms.fromArray(n,r);const o=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),u=i.dot(Ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ot=new H,Fa=new je;let CM=0;class $n extends ps{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sd,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sm extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mm extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}}const RM=new Sa,Ur=new H,kl=new H;class tl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):RM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(kl)),this.expandByPoint(Ur.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PM=0;const wn=new Rt,zl=new Yt,er=new H,Mn=new Sa,Fr=new Sa,Ht=new H;class vn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cM(e)?Mm:Sm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Mn.min,Fr.min),Mn.expandByPoint(Ht),Ht.addVectors(Mn.max,Fr.max),Mn.expandByPoint(Ht)):(Mn.expandByPoint(Fr.min),Mn.expandByPoint(Fr.max))}Mn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),Ht.add(er)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new H,l[x]=new H;const c=new H,u=new H,d=new H,f=new je,h=new je,_=new je,S=new H,m=new H;function p(x,w,k){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,k),f.fromBufferAttribute(r,x),h.fromBufferAttribute(r,w),_.fromBufferAttribute(r,k),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const F=1/(h.x*_.y-_.x*h.y);isFinite(F)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(F),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(F),o[x].add(S),o[w].add(S),o[k].add(S),l[x].add(m),l[w].add(m),l[k].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,w=b.length;x<w;++x){const k=b[x],F=k.start,B=k.count;for(let J=F,re=F+B;J<re;J+=3)p(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const A=new H,T=new H,N=new H,D=new H;function I(x){N.fromBufferAttribute(s,x),D.copy(N);const w=o[x];A.copy(w),A.sub(N.multiplyScalar(N.dot(w))).normalize(),T.crossVectors(D,w);const F=T.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,F)}for(let x=0,w=b.length;x<w;++x){const k=b[x],F=k.start,B=k.count;for(let J=F,re=F+B;J<re;J+=3)I(e.getX(J+0)),I(e.getX(J+1)),I(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?h=l[S]*o.data.stride+o.offset:h=l[S]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new $n(f,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LM=0;class Ar extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=mr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Lc,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pc&&(i.blendSrc=this.blendSrc),this.blendDst!==Lc&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yi=new H,Vl=new H,Oa=new H,Qi=new H,Gl=new H,Ba=new H,Hl=new H;class nf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vl.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(Vl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=Qi.dot(this.direction),l=-Qi.dot(Oa),c=Qi.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const S=1/u;d*=S,f*=S,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Vl).addScaledVector(Oa,f),h}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){Gl.subVectors(t,e),Ba.subVectors(i,e),Hl.crossVectors(Gl,Ba);let a=this.direction.dot(Hl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qi.subVectors(this.origin,e);const l=o*this.direction.dot(Ba.crossVectors(Qi,Ba));if(l<0)return null;const c=o*this.direction.dot(Gl.cross(Qi));if(c<0||l+c>a)return null;const u=-o*Qi.dot(Hl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sf extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ud=new Rt,bs=new nf,ka=new tl,Fd=new H,za=new H,Va=new H,Ga=new H,Wl=new H,Ha=new H,Od=new H,Wa=new H;class Ft extends Yt{constructor(e=new vn,t=new sf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Wl.fromBufferAttribute(d,e),a?Ha.addScaledVector(Wl,u):Ha.addScaledVector(Wl.sub(t),u))}t.add(Ha)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(ka.containsPoint(bs.origin)===!1&&(bs.intersectSphere(ka,Fd)===null||bs.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(Ud.copy(r).invert(),bs.copy(e.ray).applyMatrix4(Ud),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],p=a[m.materialIndex],b=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let T=b,N=A;T<N;T+=3){const D=o.getX(T),I=o.getX(T+1),x=o.getX(T+2);s=Xa(this,p,e,i,c,u,d,D,I,x),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const b=o.getX(m),A=o.getX(m+1),T=o.getX(m+2);s=Xa(this,a,e,i,c,u,d,b,A,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],p=a[m.materialIndex],b=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let T=b,N=A;T<N;T+=3){const D=T,I=T+1,x=T+2;s=Xa(this,p,e,i,c,u,d,D,I,x),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),S=Math.min(l.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const b=m,A=m+1,T=m+2;s=Xa(this,a,e,i,c,u,d,b,A,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function DM(n,e,t,i,s,r,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ds,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function Xa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,za),n.getVertexPosition(l,Va),n.getVertexPosition(c,Ga);const u=DM(n,e,t,i,za,Va,Ga,Od);if(u){const d=new H;Hn.getBarycoord(Od,za,Va,Ga,d),s&&(u.uv=Hn.getInterpolatedAttribute(s,o,l,c,d,new je)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,o,l,c,d,new je)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};Hn.getNormal(za,Va,Ga,f.normal),u.face=f,u.barycoord=d}return u}class IM extends sn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Wt,u=Wt,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xl=new H,NM=new H,UM=new Ke;class is{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Xl.subVectors(i,t).cross(NM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||UM.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new tl,FM=new je(.5,.5),qa=new H;class rf{constructor(e=new is,t=new is,i=new is,s=new is,r=new is,a=new is){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],_=r[8],S=r[9],m=r[10],p=r[11],b=r[12],A=r[13],T=r[14],N=r[15];if(s[0].setComponents(c-a,h-u,p-_,N-b).normalize(),s[1].setComponents(c+a,h+u,p+_,N+b).normalize(),s[2].setComponents(c+o,h+d,p+S,N+A).normalize(),s[3].setComponents(c-o,h-d,p-S,N-A).normalize(),i)s[4].setComponents(l,f,m,T).normalize(),s[5].setComponents(c-l,h-f,p-m,N-T).normalize();else if(s[4].setComponents(c-l,h-f,p-m,N-T).normalize(),t===ci)s[5].setComponents(c+l,h+f,p+m,N+T).normalize();else if(t===ha)s[5].setComponents(l,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const t=FM.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bm extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bd=new Rt,xu=new nf,$a=new tl,Ka=new H;class OM extends Yt{constructor(e=new vn,t=new bm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Bd.copy(s).invert(),xu.copy(e.ray).applyMatrix4(Bd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=f,S=h;_<S;_++){const m=c.getX(_);Ka.fromBufferAttribute(d,m),kd(Ka,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=f,S=h;_<S;_++)Ka.fromBufferAttribute(d,_),kd(Ka,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kd(n,e,t,i,s,r,a){const o=xu.distanceSqToPoint(n);if(o<t){const l=new H;xu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ym extends sn{constructor(e=[],t=Os,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BM extends sn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yr extends sn{constructor(e,t,i=mi,s,r,a,o=Wt,l=Wt,c,u=zi,d=1){if(u!==zi&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kM extends yr{constructor(e,t=mi,i=Os,s,r,a=Wt,o=Wt,l,c=zi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Em extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ks extends vn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2));function _(S,m,p,b,A,T,N,D,I,x,w){const k=T/I,F=N/x,B=T/2,J=N/2,re=D/2,X=I+1,Z=x+1;let $=0,oe=0;const ve=new H;for(let Ae=0;Ae<Z;Ae++){const De=Ae*F-J;for(let Ie=0;Ie<X;Ie++){const tt=Ie*k-B;ve[S]=tt*b,ve[m]=De*A,ve[p]=re,c.push(ve.x,ve.y,ve.z),ve[S]=0,ve[m]=0,ve[p]=D>0?1:-1,u.push(ve.x,ve.y,ve.z),d.push(Ie/I),d.push(1-Ae/x),$+=1}}for(let Ae=0;Ae<x;Ae++)for(let De=0;De<I;De++){const Ie=f+De+X*Ae,tt=f+De+X*(Ae+1),ot=f+(De+1)+X*(Ae+1),We=f+(De+1)+X*Ae;l.push(Ie,tt,We),l.push(tt,ot,We),oe+=6}o.addGroup(h,oe,w),h+=oe,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class af extends vn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let _=0;const S=[],m=i/2;let p=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(h,2));function b(){const T=new H,N=new H;let D=0;const I=(t-e)/i;for(let x=0;x<=r;x++){const w=[],k=x/r,F=k*(t-e)+e;for(let B=0;B<=s;B++){const J=B/s,re=J*l+o,X=Math.sin(re),Z=Math.cos(re);N.x=F*X,N.y=-k*i+m,N.z=F*Z,d.push(N.x,N.y,N.z),T.set(X,I,Z).normalize(),f.push(T.x,T.y,T.z),h.push(J,1-k),w.push(_++)}S.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){const k=S[w][x],F=S[w+1][x],B=S[w+1][x+1],J=S[w][x+1];(e>0||w!==0)&&(u.push(k,F,J),D+=3),(t>0||w!==r-1)&&(u.push(F,B,J),D+=3)}c.addGroup(p,D,0),p+=D}function A(T){const N=_,D=new je,I=new H;let x=0;const w=T===!0?e:t,k=T===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*k,0),f.push(0,k,0),h.push(.5,.5),_++;const F=_;for(let B=0;B<=s;B++){const re=B/s*l+o,X=Math.cos(re),Z=Math.sin(re);I.x=w*Z,I.y=m*k,I.z=w*X,d.push(I.x,I.y,I.z),f.push(0,k,0),D.x=X*.5+.5,D.y=Z*.5*k+.5,h.push(D.x,D.y),_++}for(let B=0;B<s;B++){const J=N+B,re=F+B;T===!0?u.push(re,re+1,J):u.push(re+1,re,J),x+=3}c.addGroup(p,x,T===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zM{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],f=i[s+1]-u,h=(a-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new je:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new H,s=[],r=[],a=[],o=new H,l=new Rt;for(let h=0;h<=e;h++){const _=h/e;s[h]=this.getTangentAt(_,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(rt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,_))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(rt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],h*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function of(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,h*=u,s(a,o,f,h)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const zd=new H,Vd=new H,ql=new of,$l=new of,Kl=new of;class VM extends zM{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Vd.subVectors(s[0],s[1]).add(s[0]),c=Vd);const d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(zd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zd),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),h),S=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),ql.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,S,m),$l.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,S,m),Kl.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(ql.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),$l.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Kl.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(ql.calc(l),$l.calc(l),Kl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Vn extends vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const b=p*f-a;for(let A=0;A<c;A++){const T=A*d-r;_.push(T,-b,0),S.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const A=b+c*p,T=b+c*(p+1),N=b+1+c*(p+1),D=b+1+c*p;h.push(A,T,D),h.push(T,N,D)}this.setIndex(h),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(S,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.widthSegments,e.heightSegments)}}class lf extends vn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new H,f=new H,h=[],_=[],S=[],m=[];for(let p=0;p<=i;p++){const b=[],A=p/i;let T=0;p===0&&a===0?T=.5/t:p===i&&l===Math.PI&&(T=-.5/t);for(let N=0;N<=t;N++){const D=N/t;d.x=-e*Math.cos(s+D*r)*Math.sin(a+A*o),d.y=e*Math.cos(a+A*o),d.z=e*Math.sin(s+D*r)*Math.sin(a+A*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),m.push(D+T,1-A),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const A=u[p][b+1],T=u[p][b],N=u[p+1][b],D=u[p+1][b+1];(p!==0||a>0)&&h.push(A,T,D),(p!==i-1||l<Math.PI)&&h.push(T,N,D)}this.setIndex(h),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(S,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Gd(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Gd(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const s in i)e[s]=i[s]}return e}function Gd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function GM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const HM={clone:Er,merge:an};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=XM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=GM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qM extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Es extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $M extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KM extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cf extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Yl=new Rt,Hd=new H,Wd=new H;class Am{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),Yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ha||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ya=new H,ja=new Vi,Qn=new H;class wm extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,ja,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,ja,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ya,ja,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,ja,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const es=new H,Xd=new je,qd=new je;class tn extends wm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Xd,qd),t.subVectors(qd,Xd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class YM extends Am{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $d extends cf{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new YM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class jM extends Am{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Za extends cf{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class uf extends wm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ZM extends cf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const tr=-90,nr=1;class JM extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(tr,nr,e,t);s.layers=this.layers,this.add(s);const r=new tn(tr,nr,e,t);r.layers=this.layers,this.add(r);const a=new tn(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new tn(tr,nr,e,t);o.layers=this.layers,this.add(o);const l=new tn(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new tn(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class QM extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kd{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gf=class gf{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};gf.prototype.isMatrix2=!0;let Yd=gf;class eb extends ps{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Xe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function jd(n,e,t,i){const s=tb(i);switch(t){case hm:return n*e;case mm:return n*e/s.components*s.byteLength;case Ku:return n*e/s.components*s.byteLength;case Bs:return n*e*2/s.components*s.byteLength;case Yu:return n*e*2/s.components*s.byteLength;case pm:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case ju:return n*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _o:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:case Wc:return Math.max(n,16)*Math.max(e,8)/4;case Vc:case Hc:return Math.max(n,8)*Math.max(e,8)/2;case Xc:case qc:case Kc:case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $c:case No:case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fu:case du:case hu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pu:case mu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uo:case gu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tb(n){switch(n){case bn:case cm:return{byteLength:1,components:1};case fa:case um:case ki:return{byteLength:2,components:1};case qu:case $u:return{byteLength:2,components:4};case mi:case Xu:case li:return{byteLength:4,components:1};case fm:case dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function nb(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],S=d[h];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,d[f]=S)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const S=d[h];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_b=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ab=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ty=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ny=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ry=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:ib,alphahash_pars_fragment:sb,alphamap_fragment:rb,alphamap_pars_fragment:ab,alphatest_fragment:ob,alphatest_pars_fragment:lb,aomap_fragment:cb,aomap_pars_fragment:ub,batching_pars_vertex:fb,batching_vertex:db,begin_vertex:hb,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:_b,clipping_planes_fragment:vb,clipping_planes_pars_fragment:xb,clipping_planes_pars_vertex:Sb,clipping_planes_vertex:Mb,color_fragment:bb,color_pars_fragment:yb,color_pars_vertex:Eb,color_vertex:Tb,common:Ab,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Cb,displacementmap_pars_vertex:Rb,displacementmap_vertex:Pb,emissivemap_fragment:Lb,emissivemap_pars_fragment:Db,colorspace_fragment:Ib,colorspace_pars_fragment:Nb,envmap_fragment:Ub,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Ob,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:Yb,envmap_vertex:kb,fog_vertex:zb,fog_pars_vertex:Vb,fog_fragment:Gb,fog_pars_fragment:Hb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:Xb,lights_lambert_fragment:qb,lights_lambert_pars_fragment:$b,lights_pars_begin:Kb,lights_toon_fragment:jb,lights_toon_pars_fragment:Zb,lights_phong_fragment:Jb,lights_phong_pars_fragment:Qb,lights_physical_fragment:ey,lights_physical_pars_fragment:ty,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:sy,lightprobes_pars_fragment:ry,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:oy,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:uy,map_pars_fragment:fy,map_particle_fragment:dy,map_particle_pars_fragment:hy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:_y,morphnormal_vertex:vy,morphtarget_pars_vertex:xy,morphtarget_vertex:Sy,normal_fragment_begin:My,normal_fragment_maps:by,normal_pars_fragment:yy,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Ry,iridescence_pars_fragment:Py,opaque_fragment:Ly,packing:Dy,premultiplied_alpha_fragment:Iy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:zy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Gy,skinbase_vertex:Hy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:$y,specularmap_pars_fragment:Ky,tonemapping_fragment:Yy,tonemapping_pars_fragment:jy,transmission_fragment:Zy,transmission_pars_fragment:Jy,uv_pars_fragment:Qy,uv_pars_vertex:eE,uv_vertex:tE,worldpos_vertex:nE,background_vert:iE,background_frag:sE,backgroundCube_vert:rE,backgroundCube_frag:aE,cube_vert:oE,cube_frag:lE,depth_vert:cE,depth_frag:uE,distance_vert:fE,distance_frag:dE,equirect_vert:hE,equirect_frag:pE,linedashed_vert:mE,linedashed_frag:gE,meshbasic_vert:_E,meshbasic_frag:vE,meshlambert_vert:xE,meshlambert_frag:SE,meshmatcap_vert:ME,meshmatcap_frag:bE,meshnormal_vert:yE,meshnormal_frag:EE,meshphong_vert:TE,meshphong_frag:AE,meshphysical_vert:wE,meshphysical_frag:CE,meshtoon_vert:RE,meshtoon_frag:PE,points_vert:LE,points_frag:DE,shadow_vert:IE,shadow_frag:NE,sprite_vert:UE,sprite_frag:FE},Pe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ri={basic:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:an([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:an([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:an([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:an([Pe.points,Pe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:an([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:an([Pe.common,Pe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:an([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:an([Pe.sprite,Pe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:an([Pe.common,Pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:an([Pe.lights,Pe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ri.physical={uniforms:an([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ja={r:0,b:0,g:0},OE=new Rt,Rm=new Ke;Rm.set(-1,0,0,0,1,0,0,0,1);function BE(n,e,t,i,s,r){const a=new ct(0);let o=s===!0?0:1,l,c,u=null,d=0,f=null;function h(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const T=b.backgroundBlurriness>0;A=e.get(A,T)}return A}function _(b){let A=!1;const T=h(b);T===null?m(a,o):T&&T.isColor&&(m(T,1),A=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,A){const T=h(A);T&&(T.isCubeTexture||T.mapping===el)?(c===void 0&&(c=new Ft(new ks(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Er(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(N,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OE.makeRotationFromEuler(A.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rm),c.material.toneMapped=at.getTransfer(T.colorSpace)!==gt,(u!==T||d!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ft(new Vn(2,2),new Yn({name:"BackgroundMaterial",uniforms:Er(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=at.getTransfer(T.colorSpace)!==gt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(Ja,Tm(n)),t.buffers.color.setClear(Ja.r,Ja.g,Ja.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:_,addToRenderList:S,dispose:p}}function kE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(F,B,J,re,X){let Z=!1;const $=d(F,re,J,B);r!==$&&(r=$,c(r.object)),Z=h(F,re,J,X),Z&&_(F,re,J,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(F,B,J,re),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function d(F,B,J,re){const X=re.wireframe===!0;let Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);const $=F.isInstancedMesh===!0?F.id:0;let oe=Z[$];oe===void 0&&(oe={},Z[$]=oe);let ve=oe[J.id];ve===void 0&&(ve={},oe[J.id]=ve);let Ae=ve[X];return Ae===void 0&&(Ae=f(l()),ve[X]=Ae),Ae}function f(F){const B=[],J=[],re=[];for(let X=0;X<t;X++)B[X]=0,J[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:re,object:F,attributes:{},index:null}}function h(F,B,J,re){const X=r.attributes,Z=B.attributes;let $=0;const oe=J.getAttributes();for(const ve in oe)if(oe[ve].location>=0){const De=X[ve];let Ie=Z[ve];if(Ie===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),De===void 0||De.attribute!==Ie||Ie&&De.data!==Ie.data)return!0;$++}return r.attributesNum!==$||r.index!==re}function _(F,B,J,re){const X={},Z=B.attributes;let $=0;const oe=J.getAttributes();for(const ve in oe)if(oe[ve].location>=0){let De=Z[ve];De===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(De=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(De=F.instanceColor));const Ie={};Ie.attribute=De,De&&De.data&&(Ie.data=De.data),X[ve]=Ie,$++}r.attributes=X,r.attributesNum=$,r.index=re}function S(){const F=r.newAttributes;for(let B=0,J=F.length;B<J;B++)F[B]=0}function m(F){p(F,0)}function p(F,B){const J=r.newAttributes,re=r.enabledAttributes,X=r.attributeDivisors;J[F]=1,re[F]===0&&(n.enableVertexAttribArray(F),re[F]=1),X[F]!==B&&(n.vertexAttribDivisor(F,B),X[F]=B)}function b(){const F=r.newAttributes,B=r.enabledAttributes;for(let J=0,re=B.length;J<re;J++)B[J]!==F[J]&&(n.disableVertexAttribArray(J),B[J]=0)}function A(F,B,J,re,X,Z,$){$===!0?n.vertexAttribIPointer(F,B,J,X,Z):n.vertexAttribPointer(F,B,J,re,X,Z)}function T(F,B,J,re){S();const X=re.attributes,Z=J.getAttributes(),$=B.defaultAttributeValues;for(const oe in Z){const ve=Z[oe];if(ve.location>=0){let Ae=X[oe];if(Ae===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(Ae=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(Ae=F.instanceColor)),Ae!==void 0){const De=Ae.normalized,Ie=Ae.itemSize,tt=e.get(Ae);if(tt===void 0)continue;const ot=tt.buffer,We=tt.type,fe=tt.bytesPerElement,Ce=We===n.INT||We===n.UNSIGNED_INT||Ae.gpuType===Xu;if(Ae.isInterleavedBufferAttribute){const Me=Ae.data,Ve=Me.stride,pe=Ae.offset;if(Me.isInstancedInterleavedBuffer){for(let me=0;me<ve.locationSize;me++)p(ve.location+me,Me.meshPerAttribute);F.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let me=0;me<ve.locationSize;me++)m(ve.location+me);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let me=0;me<ve.locationSize;me++)A(ve.location+me,Ie/ve.locationSize,We,De,Ve*fe,(pe+Ie/ve.locationSize*me)*fe,Ce)}else{if(Ae.isInstancedBufferAttribute){for(let Me=0;Me<ve.locationSize;Me++)p(ve.location+Me,Ae.meshPerAttribute);F.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Me=0;Me<ve.locationSize;Me++)m(ve.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Me=0;Me<ve.locationSize;Me++)A(ve.location+Me,Ie/ve.locationSize,We,De,Ie*fe,Ie/ve.locationSize*Me*fe,Ce)}}else if($!==void 0){const De=$[oe];if(De!==void 0)switch(De.length){case 2:n.vertexAttrib2fv(ve.location,De);break;case 3:n.vertexAttrib3fv(ve.location,De);break;case 4:n.vertexAttrib4fv(ve.location,De);break;default:n.vertexAttrib1fv(ve.location,De)}}}}b()}function N(){w();for(const F in i){const B=i[F];for(const J in B){const re=B[J];for(const X in re){const Z=re[X];for(const $ in Z)u(Z[$].object),delete Z[$];delete re[X]}}delete i[F]}}function D(F){if(i[F.id]===void 0)return;const B=i[F.id];for(const J in B){const re=B[J];for(const X in re){const Z=re[X];for(const $ in Z)u(Z[$].object),delete Z[$];delete re[X]}}delete i[F.id]}function I(F){for(const B in i){const J=i[B];for(const re in J){const X=J[re];if(X[F.id]===void 0)continue;const Z=X[F.id];for(const $ in Z)u(Z[$].object),delete Z[$];delete X[F.id]}}}function x(F){for(const B in i){const J=i[B],re=F.isInstancedMesh===!0?F.id:0,X=J[re];if(X!==void 0){for(const Z in X){const $=X[Z];for(const oe in $)u($[oe].object),delete $[oe];delete X[Z]}delete J[re],Object.keys(J).length===0&&delete i[B]}}}function w(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:k,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function zE(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function VE(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Nn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==bn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==li&&!x)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:T,maxSamples:N,samples:D}}function GE(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new is,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,A=b*4;let T=p.clippingState||null;l.value=T,T=u(_,f,A,h);for(let N=0;N!==A;++N)T[N]=t[N];p.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=h+S*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,T=h;A!==S;++A,T+=4)a.copy(d[A]).applyMatrix4(b,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const os=4,Zd=[.125,.215,.35,.446,.526,.582],Ps=20,HE=256,Or=new uf,Jd=new ct;let jl=null,Zl=0,Jl=0,Ql=!1;const WE=new H;class Qd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=WE}=r;jl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Zl,Jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:ki,format:Nn,colorSpace:Fo,depthBuffer:!1},s=eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XE(r)),this._blurMaterial=$E(r,e,t),this._ggxMaterial=qE(r,e,t)}return s}_compileMaterial(e){const t=new Ft(new vn,e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,i,s,r){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Jd),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new ks,new sf({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Jd),p=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const N=this._cubeSize;ir(s,T*N,A>2?N:0,N,N),d.setRenderTarget(s),p&&d.render(S,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Os||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ir(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-os?i-_+os:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,ir(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ir(e,m,p,3*S,2*S),s.setRenderTarget(e),s.render(o,Or)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ps-1),S=r/_,m=isFinite(r)?1+Math.floor(u*S):Ps;m>Ps&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);const p=[];let b=0;for(let I=0;I<Ps;++I){const x=I/S,w=Math.exp(-x*x/2);p.push(w),I===0?b+=w:I<m&&(b+=2*w)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-i;const T=this._sizeLods[s],N=3*T*(s>A-os?s-A+os:0),D=4*(this._cubeSize-T);ir(t,N,D,3*T,2*T),l.setRenderTarget(t),l.render(d,Or)}}function XE(n){const e=[],t=[],i=[];let s=n;const r=n-os+1+Zd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-os?l=Zd[a-n+os-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,S=3,m=2,p=1,b=new Float32Array(S*_*h),A=new Float32Array(m*_*h),T=new Float32Array(p*_*h);for(let D=0;D<h;D++){const I=D%3*2/3-1,x=D>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];b.set(w,S*_*D),A.set(f,m*_*D);const k=[D,D,D,D,D,D];T.set(k,p*_*D)}const N=new vn;N.setAttribute("position",new $n(b,S)),N.setAttribute("uv",new $n(A,m)),N.setAttribute("faceIndex",new $n(T,p)),i.push(new Ft(N,null)),s>os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function eh(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=el,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qE(n,e,t){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function $E(n,e,t){const i=new Float32Array(Ps),s=new H(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function th(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function nh(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pm extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ym(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ks(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ni});r.uniforms.tEquirect.value=t;const a=new Ft(s,r),o=t.minFilter;return t.minFilter===Ls&&(t.minFilter=$t),new JM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function KE(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Sl||h===Ml)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const S=new Pm(_.height);return S.fromEquirectangularTexture(n,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,_=h===Sl||h===Ml,S=h===Os||h===br;if(_||S){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Qd(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const b=f.image;return _&&b&&b.height>0||S&&b&&l(b)?(i===null&&(i=new Qd(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===Sl?f.mapping=Os:h===Ml&&(f.mapping=br),f}function l(f){let h=0;const _=6;for(let S=0;S<_;S++)f[S]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function YE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&vu("WebGLRenderer: "+i+" extension not supported."),s}}}function jE(n,e,t,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(h!==null){const b=h.array;S=h.version;for(let A=0,T=b.length;A<T;A+=3){const N=b[A+0],D=b[A+1],I=b[A+2];f.push(N,D,D,I,I,N)}}else{const b=_.array;S=_.version;for(let A=0,T=b.length/3-1;A<T;A+=3){const N=A+0,D=A+1,I=A+2;f.push(N,D,D,I,I,N)}}const m=new(_.count>=65535?Mm:Sm)(f,1);m.version=S;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ZE(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*a,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let S=0;for(let m=0;m<h;m++)S+=f[m];t.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function JE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function QE(n,e,t){const i=new WeakMap,s=new Lt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let k=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",k)};var h=k;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),m===!0&&(T=3);let N=o.attributes.position.count*T,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*D*4*d),x=new _m(I,N,D,d);x.type=li,x.needsUpdate=!0;const w=T*4;for(let F=0;F<d;F++){const B=p[F],J=b[F],re=A[F],X=N*D*4*F;for(let Z=0;Z<B.count;Z++){const $=Z*w;_===!0&&(s.fromBufferAttribute(B,Z),I[X+$+0]=s.x,I[X+$+1]=s.y,I[X+$+2]=s.z,I[X+$+3]=0),S===!0&&(s.fromBufferAttribute(J,Z),I[X+$+4]=s.x,I[X+$+5]=s.y,I[X+$+6]=s.z,I[X+$+7]=0),m===!0&&(s.fromBufferAttribute(re,Z),I[X+$+8]=s.x,I[X+$+9]=s.y,I[X+$+10]=s.z,I[X+$+11]=re.itemSize===4?s.w:1)}}f={count:d,texture:x,size:new je(N,D)},i.set(o,f),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function eT(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const tT={[nm]:"LINEAR_TONE_MAPPING",[im]:"REINHARD_TONE_MAPPING",[sm]:"CINEON_TONE_MAPPING",[Wu]:"ACES_FILMIC_TONE_MAPPING",[am]:"AGX_TONE_MAPPING",[om]:"NEUTRAL_TONE_MAPPING",[rm]:"CUSTOM_TONE_MAPPING"};function nT(n,e,t,i,s){const r=new Fn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new yr(e,t):void 0}),a=new Fn(e,t,{type:ki,depthBuffer:!1,stencilBuffer:!1}),o=new vn;o.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new jt([0,2,0,0,2,0],2));const l=new qM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ft(o,l),u=new uf(-1,1,1,-1,0,1);let d=null,f=null,h=!1,_,S=null,m=[],p=!1;this.setSize=function(b,A){r.setSize(b,A),a.setSize(b,A);for(let T=0;T<m.length;T++){const N=m[T];N.setSize&&N.setSize(b,A)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const A=r.width,T=r.height;for(let N=0;N<m.length;N++){const D=m[N];D.setSize&&D.setSize(A,T)}},this.begin=function(b,A){if(h||b.toneMapping===hi&&m.length===0)return!1;if(S=A,A!==null){const T=A.width,N=A.height;(r.width!==T||r.height!==N)&&this.setSize(T,N)}return p===!1&&b.setRenderTarget(r),_=b.toneMapping,b.toneMapping=hi,!0},this.hasRenderPass=function(){return p},this.end=function(b,A){b.toneMapping=_,h=!0;let T=r,N=a;for(let D=0;D<m.length;D++){const I=m[D];if(I.enabled!==!1&&(I.render(b,N,T,A),I.needsSwap!==!1)){const x=T;T=N,N=x}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,l.defines={},at.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");const D=tT[f];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(S),b.render(c,u),S=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Lm=new sn,Su=new yr(1,1),Dm=new _m,Im=new xM,Nm=new ym,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function il(n,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function rT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function aT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function oT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;oh.set(i),n.uniformMatrix2fv(this.addr,!1,oh),Gt(t,i)}}function lT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;ah.set(i),n.uniformMatrix3fv(this.addr,!1,ah),Gt(t,i)}}function cT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;rh.set(i),n.uniformMatrix4fv(this.addr,!1,rh),Gt(t,i)}}function uT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function dT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function hT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function pT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function vT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=t.isReversedDepthBuffer()?Ju:Zu,r=Su):r=Lm,t.setTexture2D(e||r,s)}function xT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Im,s)}function ST(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nm,s)}function MT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Dm,s)}function bT(n){switch(n){case 5126:return iT;case 35664:return sT;case 35665:return rT;case 35666:return aT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function yT(n,e){n.uniform1fv(this.addr,e)}function ET(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function TT(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function AT(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function wT(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CT(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RT(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PT(n,e){n.uniform1iv(this.addr,e)}function LT(n,e){n.uniform2iv(this.addr,e)}function DT(n,e){n.uniform3iv(this.addr,e)}function IT(n,e){n.uniform4iv(this.addr,e)}function NT(n,e){n.uniform1uiv(this.addr,e)}function UT(n,e){n.uniform2uiv(this.addr,e)}function FT(n,e){n.uniform3uiv(this.addr,e)}function OT(n,e){n.uniform4uiv(this.addr,e)}function BT(n,e,t){const i=this.cache,s=e.length,r=il(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Su:a=Lm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function kT(n,e,t){const i=this.cache,s=e.length,r=il(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Im,r[a])}function zT(n,e,t){const i=this.cache,s=e.length,r=il(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nm,r[a])}function VT(n,e,t){const i=this.cache,s=e.length,r=il(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Dm,r[a])}function GT(n){switch(n){case 5126:return yT;case 35664:return ET;case 35665:return TT;case 35666:return AT;case 35674:return wT;case 35675:return CT;case 35676:return RT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return DT;case 35669:case 35673:return IT;case 5125:return NT;case 36294:return UT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return VT}}class HT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bT(t.type)}}class WT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GT(t.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function lh(n,e){n.seq.push(e),n.map[e.id]=e}function qT(n,e,t){const i=n.name,s=i.length;for(ec.lastIndex=0;;){const r=ec.exec(i),a=ec.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lh(t,c===void 0?new HT(o,n,e):new WT(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new XT(o),lh(t,d)),t=d}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);qT(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ch(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $T=37297;let KT=0;function YT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const uh=new Ke;function jT(n){at._getMatrix(uh,at.workingColorSpace,n);const e=`mat3( ${uh.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Oo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+YT(n.getShaderSource(e),o)}else return r}function ZT(n,e){const t=jT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JT={[nm]:"Linear",[im]:"Reinhard",[sm]:"Cineon",[Wu]:"ACESFilmic",[am]:"AgX",[om]:"Neutral",[rm]:"Custom"};function QT(n,e){const t=JT[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qa=new H;function e1(){at.getLuminanceCoefficients(Qa);const n=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function n1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function i1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qr(n){return n!==""}function dh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(n){return n.replace(s1,a1)}const r1=new Map;function a1(n,e){let t=nt[e];if(t===void 0){const i=r1.get(e);if(i!==void 0)t=nt[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mu(t)}const o1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(n){return n.replace(o1,l1)}function l1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const c1={[ta]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function u1(n){return c1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f1={[Os]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE",[el]:"ENVMAP_TYPE_CUBE_UV"};function d1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":f1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const h1={[br]:"ENVMAP_MODE_REFRACTION"};function p1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":h1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m1={[tm]:"ENVMAP_BLENDING_MULTIPLY",[JS]:"ENVMAP_BLENDING_MIX",[QS]:"ENVMAP_BLENDING_ADD"};function g1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":m1[n.combine]||"ENVMAP_BLENDING_NONE"}function _1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function v1(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=u1(t),c=d1(t),u=p1(t),d=g1(t),f=_1(t),h=t1(t),_=n1(r),S=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?nt.tonemapping_pars_fragment:"",t.toneMapping!==hi?QT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,ZT("linearToOutputTexel",t.outputColorSpace),e1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=Mu(a),a=dh(a,t),a=hh(a,t),o=Mu(o),o=dh(o,t),o=hh(o,t),a=ph(a),o=ph(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=b+m+a,T=b+p+o,N=ch(s,s.VERTEX_SHADER,A),D=ch(s,s.FRAGMENT_SHADER,T);s.attachShader(S,N),s.attachShader(S,D),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function I(F){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(S)||"",J=s.getShaderInfoLog(N)||"",re=s.getShaderInfoLog(D)||"",X=B.trim(),Z=J.trim(),$=re.trim();let oe=!0,ve=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,N,D);else{const Ae=fh(s,N,"vertex"),De=fh(s,D,"fragment");ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+Ae+`
`+De)}else X!==""?Xe("WebGLProgram: Program Info Log:",X):(Z===""||$==="")&&(ve=!1);ve&&(F.diagnostics={runnable:oe,programLog:X,vertexShader:{log:Z,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(N),s.deleteShader(D),x=new So(s,S),w=i1(s,S)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(S,$T)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=D,this}let x1=0;class S1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new M1(e),t.set(e,i)),i}}class M1{constructor(e){this.id=x1++,this.code=e,this.usedTimes=0}}function b1(n){return n===Bs||n===No||n===Uo}function y1(n,e,t,i,s,r){const a=new vm,o=new S1,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,w,k,F,B,J){const re=F.fog,X=B.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,oe=e.get(x.envMap||Z,$),ve=oe&&oe.mapping===el?oe.image.height:null,Ae=h[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const De=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ie=De!==void 0?De.length:0;let tt=0;X.morphAttributes.position!==void 0&&(tt=1),X.morphAttributes.normal!==void 0&&(tt=2),X.morphAttributes.color!==void 0&&(tt=3);let ot,We,fe,Ce;if(Ae){const Je=ri[Ae];ot=Je.vertexShader,We=Je.fragmentShader}else ot=x.vertexShader,We=x.fragmentShader,o.update(x),fe=o.getVertexShaderID(x),Ce=o.getFragmentShaderID(x);const Me=n.getRenderTarget(),Ve=n.state.buffers.depth.getReversed(),pe=B.isInstancedMesh===!0,me=B.isBatchedMesh===!0,R=!!x.map,U=!!x.matcap,Y=!!oe,ne=!!x.aoMap,g=!!x.lightMap,C=!!x.bumpMap,P=!!x.normalMap,z=!!x.displacementMap,M=!!x.emissiveMap,O=!!x.metalnessMap,j=!!x.roughnessMap,Q=x.anisotropy>0,q=x.clearcoat>0,ce=x.dispersion>0,y=x.iridescence>0,v=x.sheen>0,W=x.transmission>0,ie=Q&&!!x.anisotropyMap,ue=q&&!!x.clearcoatMap,ge=q&&!!x.clearcoatNormalMap,xe=q&&!!x.clearcoatRoughnessMap,ae=y&&!!x.iridescenceMap,de=y&&!!x.iridescenceThicknessMap,be=v&&!!x.sheenColorMap,we=v&&!!x.sheenRoughnessMap,ye=!!x.specularMap,Ee=!!x.specularColorMap,$e=!!x.specularIntensityMap,Ze=W&&!!x.transmissionMap,lt=W&&!!x.thicknessMap,V=!!x.gradientMap,Se=!!x.alphaMap,le=x.alphaTest>0,Re=!!x.alphaHash,Te=!!x.extensions;let _e=hi;x.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(_e=n.toneMapping);const ke={shaderID:Ae,shaderType:x.type,shaderName:x.name,vertexShader:ot,fragmentShader:We,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:Ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:me,batchingColor:me&&B._colorsTexture!==null,instancing:pe,instancingColor:pe&&B.instanceColor!==null,instancingMorph:pe&&B.morphTexture!==null,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:R,matcap:U,envMap:Y,envMapMode:Y&&oe.mapping,envMapCubeUVHeight:ve,aoMap:ne,lightMap:g,bumpMap:C,normalMap:P,displacementMap:z,emissiveMap:M,normalMapObjectSpace:P&&x.normalMapType===nM,normalMapTangentSpace:P&&x.normalMapType===_u,packedNormalMap:P&&x.normalMapType===_u&&b1(x.normalMap.format),metalnessMap:O,roughnessMap:j,anisotropy:Q,anisotropyMap:ie,clearcoat:q,clearcoatMap:ue,clearcoatNormalMap:ge,clearcoatRoughnessMap:xe,dispersion:ce,iridescence:y,iridescenceMap:ae,iridescenceThicknessMap:de,sheen:v,sheenColorMap:be,sheenRoughnessMap:we,specularMap:ye,specularColorMap:Ee,specularIntensityMap:$e,transmission:W,transmissionMap:Ze,thicknessMap:lt,gradientMap:V,opaque:x.transparent===!1&&x.blending===mr&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:le,alphaHash:Re,combine:x.combine,mapUv:R&&_(x.map.channel),aoMapUv:ne&&_(x.aoMap.channel),lightMapUv:g&&_(x.lightMap.channel),bumpMapUv:C&&_(x.bumpMap.channel),normalMapUv:P&&_(x.normalMap.channel),displacementMapUv:z&&_(x.displacementMap.channel),emissiveMapUv:M&&_(x.emissiveMap.channel),metalnessMapUv:O&&_(x.metalnessMap.channel),roughnessMapUv:j&&_(x.roughnessMap.channel),anisotropyMapUv:ie&&_(x.anisotropyMap.channel),clearcoatMapUv:ue&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(x.sheenRoughnessMap.channel),specularMapUv:ye&&_(x.specularMap.channel),specularColorMapUv:Ee&&_(x.specularColorMap.channel),specularIntensityMapUv:$e&&_(x.specularIntensityMap.channel),transmissionMapUv:Ze&&_(x.transmissionMap.channel),thicknessMapUv:lt&&_(x.thicknessMap.channel),alphaMapUv:Se&&_(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(P||Q),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(R||Se),fog:!!re,useFog:x.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&P===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ve,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:R&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:M&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pi,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&x.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)w.push(k),w.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(p(w,x),b(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function A(x){const w=h[x.type];let k;if(w){const F=ri[w];k=HM.clone(F.uniforms)}else k=x.uniforms;return k}function T(x,w){let k=u.get(w);return k!==void 0?++k.usedTimes:(k=new v1(n,w,x,s),c.push(k),u.set(w,k)),k}function N(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function D(x){o.remove(x)}function I(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:T,releaseProgram:N,releaseShaderCache:D,programs:c,dispose:I}}function E1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function T1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _h(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,S,m,p){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:p},n[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=_,b.materialVariant=a(f),b.groupOrder=S,b.renderOrder=f.renderOrder,b.z=m,b.group=p),e++,b}function l(f,h,_,S,m,p){const b=o(f,h,_,S,m,p);_.transmission>0?i.push(b):_.transparent===!0?s.push(b):t.push(b)}function c(f,h,_,S,m,p){const b=o(f,h,_,S,m,p);_.transmission>0?i.unshift(b):_.transparent===!0?s.unshift(b):t.unshift(b)}function u(f,h){t.length>1&&t.sort(f||T1),i.length>1&&i.sort(h||gh),s.length>1&&s.sort(h||gh)}function d(){for(let f=e,h=n.length;f<h;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function A1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new _h,n.set(i,[a])):s>=r.length?(a=new _h,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function w1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ct};break;case"SpotLight":t={position:new H,direction:new H,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function C1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let R1=0;function P1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function L1(n){const e=new w1,t=C1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new Rt,a=new Rt;function o(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,_=0,S=0,m=0,p=0,b=0,A=0,T=0,N=0,D=0,I=0;c.sort(P1);for(let w=0,k=c.length;w<k;w++){const F=c[w],B=F.color,J=F.intensity,re=F.distance;let X=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Bs?X=F.shadow.map.texture:X=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=B.r*J,d+=B.g*J,f+=B.b*J;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(F.sh.coefficients[Z],J);I++}else if(F.isDirectionalLight){const Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,oe=t.get(F);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,i.directionalShadow[h]=oe,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=F.shadow.matrix,b++}i.directional[h]=Z,h++}else if(F.isSpotLight){const Z=e.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(B).multiplyScalar(J),Z.distance=re,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,i.spot[S]=Z;const $=F.shadow;if(F.map&&(i.spotLightMap[N]=F.map,N++,$.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[S]=$.matrix,F.castShadow){const oe=t.get(F);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,i.spotShadow[S]=oe,i.spotShadowMap[S]=X,T++}S++}else if(F.isRectAreaLight){const Z=e.get(F);Z.color.copy(B).multiplyScalar(J),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=Z,m++}else if(F.isPointLight){const Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){const $=F.shadow,oe=t.get(F);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,oe.shadowCameraNear=$.camera.near,oe.shadowCameraFar=$.camera.far,i.pointShadow[_]=oe,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=F.shadow.matrix,A++}i.point[_]=Z,_++}else if(F.isHemisphereLight){const Z=e.get(F);Z.skyColor.copy(F.color).multiplyScalar(J),Z.groundColor.copy(F.groundColor).multiplyScalar(J),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==h||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==b||x.numPointShadows!==A||x.numSpotShadows!==T||x.numSpotMaps!==N||x.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=T+N-D,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,x.directionalLength=h,x.pointLength=_,x.spotLength=S,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=b,x.numPointShadows=A,x.numSpotShadows=T,x.numSpotMaps=N,x.numLightProbes=I,i.version=R1++)}function l(c,u){let d=0,f=0,h=0,_=0,S=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const A=c[p];if(A.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(A.isSpotLight){const T=i.spot[h];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(A.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const T=i.hemi[S];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function vh(n){const e=new L1(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function D1(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new vh(n),e.set(s,[o])):r>=a.length?(o=new vh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U1=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],F1=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xh=new Rt,Br=new H,tc=new H;function O1(n,e,t){let i=new rf;const s=new je,r=new je,a=new Lt,o=new $M,l=new KM,c={},u=t.maxTextureSize,d={[ds]:gn,[gn]:ds,[Pi]:Pi},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:I1,fragmentShader:N1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ft(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let p=this.type;this.render=function(D,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;this.type===IS&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ta);const w=n.getRenderTarget(),k=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ni),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const J=p!==this.type;J&&I.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(X=>X.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,X=D.length;re<X;re++){const Z=D[re],$=Z.shadow;if($===void 0){Xe("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const oe=$.getFrameExtents();s.multiply(oe),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,$.mapSize.y=r.y));const ve=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=ve,$.map===null||J===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Wr){if(Z.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Fn(s.x,s.y,{format:Bs,type:ki,minFilter:$t,magFilter:$t,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new yr(s.x,s.y,li),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=zi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Wt,$.map.depthTexture.magFilter=Wt}else Z.isPointLight?($.map=new Pm(s.x),$.map.depthTexture=new kM(s.x,mi)):($.map=new Fn(s.x,s.y),$.map.depthTexture=new yr(s.x,s.y,mi)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=zi,this.type===ta?($.map.depthTexture.compareFunction=ve?Ju:Zu,$.map.depthTexture.minFilter=$t,$.map.depthTexture.magFilter=$t):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Wt,$.map.depthTexture.magFilter=Wt);$.camera.updateProjectionMatrix()}const Ae=$.map.isWebGLCubeRenderTarget?6:1;for(let De=0;De<Ae;De++){if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,De),n.clear();else{De===0&&(n.setRenderTarget($.map),n.clear());const Ie=$.getViewport(De);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),B.viewport(a)}if(Z.isPointLight){const Ie=$.camera,tt=$.matrix,ot=Z.distance||Ie.far;ot!==Ie.far&&(Ie.far=ot,Ie.updateProjectionMatrix()),Br.setFromMatrixPosition(Z.matrixWorld),Ie.position.copy(Br),tc.copy(Ie.position),tc.add(U1[De]),Ie.up.copy(F1[De]),Ie.lookAt(tc),Ie.updateMatrixWorld(),tt.makeTranslation(-Br.x,-Br.y,-Br.z),xh.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),$._frustum.setFromProjectionMatrix(xh,Ie.coordinateSystem,Ie.reversedDepth)}else $.updateMatrices(Z);i=$.getFrustum(),T(I,x,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Wr&&b($,x),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,k,F)};function b(D,I){const x=e.update(S);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Fn(s.x,s.y,{format:Bs,type:ki})),f.uniforms.shadow_pass.value=D.map.depthTexture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,x,f,S,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,x,h,S,null)}function A(D,I,x,w){let k=null;const F=x.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)k=F;else if(k=x.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=k.uuid,J=I.uuid;let re=c[B];re===void 0&&(re={},c[B]=re);let X=re[J];X===void 0&&(X=k.clone(),re[J]=X,I.addEventListener("dispose",N)),k=X}if(k.visible=I.visible,k.wireframe=I.wireframe,w===Wr?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:d[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,x.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const B=n.properties.get(k);B.light=x}return k}function T(D,I,x,w,k){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Wr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,D.matrixWorld);const J=e.update(D),re=D.material;if(Array.isArray(re)){const X=J.groups;for(let Z=0,$=X.length;Z<$;Z++){const oe=X[Z],ve=re[oe.materialIndex];if(ve&&ve.visible){const Ae=A(D,ve,w,k);D.onBeforeShadow(n,D,I,x,J,Ae,oe),n.renderBufferDirect(x,null,J,Ae,D,oe),D.onAfterShadow(n,D,I,x,J,Ae,oe)}}}else if(re.visible){const X=A(D,re,w,k);D.onBeforeShadow(n,D,I,x,J,X,null),n.renderBufferDirect(x,null,J,X,D,null),D.onAfterShadow(n,D,I,x,J,X,null)}}const B=D.children;for(let J=0,re=B.length;J<re;J++)T(B[J],I,x,w,k)}function N(D){D.target.removeEventListener("dispose",N);for(const x in c){const w=c[x],k=D.target.uuid;k in w&&(w[k].dispose(),delete w[k])}}}function B1(n,e){function t(){let V=!1;const Se=new Lt;let le=null;const Re=new Lt(0,0,0,0);return{setMask:function(Te){le!==Te&&!V&&(n.colorMask(Te,Te,Te,Te),le=Te)},setLocked:function(Te){V=Te},setClear:function(Te,_e,ke,Je,It){It===!0&&(Te*=Je,_e*=Je,ke*=Je),Se.set(Te,_e,ke,Je),Re.equals(Se)===!1&&(n.clearColor(Te,_e,ke,Je),Re.copy(Se))},reset:function(){V=!1,le=null,Re.set(-1,0,0,0)}}}function i(){let V=!1,Se=!1,le=null,Re=null,Te=null;return{setReversed:function(_e){if(Se!==_e){const ke=e.get("EXT_clip_control");_e?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Se=_e;const Je=Te;Te=null,this.setClear(Je)}},getReversed:function(){return Se},setTest:function(_e){_e?Me(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(_e){le!==_e&&!V&&(n.depthMask(_e),le=_e)},setFunc:function(_e){if(Se&&(_e=dM[_e]),Re!==_e){switch(_e){case Dc:n.depthFunc(n.NEVER);break;case Ic:n.depthFunc(n.ALWAYS);break;case Nc:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case Uc:n.depthFunc(n.EQUAL);break;case Fc:n.depthFunc(n.GEQUAL);break;case Oc:n.depthFunc(n.GREATER);break;case Bc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Te!==_e&&(Te=_e,Se&&(_e=1-_e),n.clearDepth(_e))},reset:function(){V=!1,le=null,Re=null,Te=null,Se=!1}}}function s(){let V=!1,Se=null,le=null,Re=null,Te=null,_e=null,ke=null,Je=null,It=null;return{setTest:function(_t){V||(_t?Me(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(_t){Se!==_t&&!V&&(n.stencilMask(_t),Se=_t)},setFunc:function(_t,gi,jn){(le!==_t||Re!==gi||Te!==jn)&&(n.stencilFunc(_t,gi,jn),le=_t,Re=gi,Te=jn)},setOp:function(_t,gi,jn){(_e!==_t||ke!==gi||Je!==jn)&&(n.stencilOp(_t,gi,jn),_e=_t,ke=gi,Je=jn)},setLocked:function(_t){V=_t},setClear:function(_t){It!==_t&&(n.clearStencil(_t),It=_t)},reset:function(){V=!1,Se=null,le=null,Re=null,Te=null,_e=null,ke=null,Je=null,It=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f={},h=new WeakMap,_=[],S=null,m=!1,p=null,b=null,A=null,T=null,N=null,D=null,I=null,x=new ct(0,0,0),w=0,k=!1,F=null,B=null,J=null,re=null,X=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,oe=0;const ve=n.getParameter(n.VERSION);ve.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ve)[1]),$=oe>=1):ve.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),$=oe>=2);let Ae=null,De={};const Ie=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),ot=new Lt().fromArray(Ie),We=new Lt().fromArray(tt);function fe(V,Se,le,Re){const Te=new Uint8Array(4),_e=n.createTexture();n.bindTexture(V,_e),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<le;ke++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Se+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return _e}const Ce={};Ce[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),a.setFunc(Mr),C(!1),P(gd),Me(n.CULL_FACE),ne(Ni);function Me(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function Ve(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function pe(V,Se){return f[V]!==Se?(n.bindFramebuffer(V,Se),f[V]=Se,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function me(V,Se){let le=_,Re=!1;if(V){le=h.get(Se),le===void 0&&(le=[],h.set(Se,le));const Te=V.textures;if(le.length!==Te.length||le[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,ke=Te.length;_e<ke;_e++)le[_e]=n.COLOR_ATTACHMENT0+_e;le.length=Te.length,Re=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Re=!0);Re&&n.drawBuffers(le)}function R(V){return S!==V?(n.useProgram(V),S=V,!0):!1}const U={[Rs]:n.FUNC_ADD,[US]:n.FUNC_SUBTRACT,[FS]:n.FUNC_REVERSE_SUBTRACT};U[OS]=n.MIN,U[BS]=n.MAX;const Y={[kS]:n.ZERO,[zS]:n.ONE,[VS]:n.SRC_COLOR,[Pc]:n.SRC_ALPHA,[$S]:n.SRC_ALPHA_SATURATE,[XS]:n.DST_COLOR,[HS]:n.DST_ALPHA,[GS]:n.ONE_MINUS_SRC_COLOR,[Lc]:n.ONE_MINUS_SRC_ALPHA,[qS]:n.ONE_MINUS_DST_COLOR,[WS]:n.ONE_MINUS_DST_ALPHA,[KS]:n.CONSTANT_COLOR,[YS]:n.ONE_MINUS_CONSTANT_COLOR,[jS]:n.CONSTANT_ALPHA,[ZS]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(V,Se,le,Re,Te,_e,ke,Je,It,_t){if(V===Ni){m===!0&&(Ve(n.BLEND),m=!1);return}if(m===!1&&(Me(n.BLEND),m=!0),V!==NS){if(V!==p||_t!==k){if((b!==Rs||N!==Rs)&&(n.blendEquation(n.FUNC_ADD),b=Rs,N=Rs),_t)switch(V){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rc:n.blendFunc(n.ONE,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",V);break}else switch(V){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _d:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vd:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",V);break}A=null,T=null,D=null,I=null,x.set(0,0,0),w=0,p=V,k=_t}return}Te=Te||Se,_e=_e||le,ke=ke||Re,(Se!==b||Te!==N)&&(n.blendEquationSeparate(U[Se],U[Te]),b=Se,N=Te),(le!==A||Re!==T||_e!==D||ke!==I)&&(n.blendFuncSeparate(Y[le],Y[Re],Y[_e],Y[ke]),A=le,T=Re,D=_e,I=ke),(Je.equals(x)===!1||It!==w)&&(n.blendColor(Je.r,Je.g,Je.b,It),x.copy(Je),w=It),p=V,k=!1}function g(V,Se){V.side===Pi?Ve(n.CULL_FACE):Me(n.CULL_FACE);let le=V.side===gn;Se&&(le=!le),C(le),V.blending===mr&&V.transparent===!1?ne(Ni):ne(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Re=V.stencilWrite;o.setTest(Re),Re&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),M(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function C(V){F!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),F=V)}function P(V){V!==LS?(Me(n.CULL_FACE),V!==B&&(V===gd?n.cullFace(n.BACK):V===DS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),B=V}function z(V){V!==J&&($&&n.lineWidth(V),J=V)}function M(V,Se,le){V?(Me(n.POLYGON_OFFSET_FILL),(re!==Se||X!==le)&&(re=Se,X=le,a.getReversed()&&(Se=-Se),n.polygonOffset(Se,le))):Ve(n.POLYGON_OFFSET_FILL)}function O(V){V?Me(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function j(V){V===void 0&&(V=n.TEXTURE0+Z-1),Ae!==V&&(n.activeTexture(V),Ae=V)}function Q(V,Se,le){le===void 0&&(Ae===null?le=n.TEXTURE0+Z-1:le=Ae);let Re=De[le];Re===void 0&&(Re={type:void 0,texture:void 0},De[le]=Re),(Re.type!==V||Re.texture!==Se)&&(Ae!==le&&(n.activeTexture(le),Ae=le),n.bindTexture(V,Se||Ce[V]),Re.type=V,Re.texture=Se)}function q(){const V=De[Ae];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ce(){try{n.compressedTexImage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function y(){try{n.compressedTexImage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function v(){try{n.texSubImage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function W(){try{n.texSubImage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function ge(){try{n.texStorage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function xe(){try{n.texStorage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function ae(){try{n.texImage2D(...arguments)}catch(V){ft("WebGLState:",V)}}function de(){try{n.texImage3D(...arguments)}catch(V){ft("WebGLState:",V)}}function be(V){return d[V]!==void 0?d[V]:n.getParameter(V)}function we(V,Se){d[V]!==Se&&(n.pixelStorei(V,Se),d[V]=Se)}function ye(V){ot.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ot.copy(V))}function Ee(V){We.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),We.copy(V))}function $e(V,Se){let le=c.get(Se);le===void 0&&(le=new WeakMap,c.set(Se,le));let Re=le.get(V);Re===void 0&&(Re=n.getUniformBlockIndex(Se,V.name),le.set(V,Re))}function Ze(V,Se){const Re=c.get(Se).get(V);l.get(Se)!==Re&&(n.uniformBlockBinding(Se,Re,V.__bindingPointIndex),l.set(Se,Re))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Ae=null,De={},f={},h=new WeakMap,_=[],S=null,m=!1,p=null,b=null,A=null,T=null,N=null,D=null,I=null,x=new ct(0,0,0),w=0,k=!1,F=null,B=null,J=null,re=null,X=null,ot.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Me,disable:Ve,bindFramebuffer:pe,drawBuffers:me,useProgram:R,setBlending:ne,setMaterial:g,setFlipSided:C,setCullFace:P,setLineWidth:z,setPolygonOffset:M,setScissorTest:O,activeTexture:j,bindTexture:Q,unbindTexture:q,compressedTexImage2D:ce,compressedTexImage3D:y,texImage2D:ae,texImage3D:de,pixelStorei:we,getParameter:be,updateUBOMapping:$e,uniformBlockBinding:Ze,texStorage2D:ge,texStorage3D:xe,texSubImage2D:v,texSubImage3D:W,compressedTexSubImage2D:ie,compressedTexSubImage3D:ue,scissor:ye,viewport:Ee,reset:lt}}function k1(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,v){return _?new OffscreenCanvas(y,v):Bo("canvas")}function m(y,v,W){let ie=1;const ue=ce(y);if((ue.width>W||ue.height>W)&&(ie=W/Math.max(ue.width,ue.height)),ie<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const ge=Math.floor(ie*ue.width),xe=Math.floor(ie*ue.height);f===void 0&&(f=S(ge,xe));const ae=v?S(ge,xe):f;return ae.width=ge,ae.height=xe,ae.getContext("2d").drawImage(y,0,0,ge,xe),Xe("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ge+"x"+xe+")."),ae}else return"data"in y&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),y;return y}function p(y){return y.generateMipmaps}function b(y){n.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,v,W,ie,ue,ge=!1){if(y!==null){if(n[y]!==void 0)return n[y];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let xe;ie&&(xe=e.get("EXT_texture_norm16"),xe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=v;if(v===n.RED&&(W===n.FLOAT&&(ae=n.R32F),W===n.HALF_FLOAT&&(ae=n.R16F),W===n.UNSIGNED_BYTE&&(ae=n.R8),W===n.UNSIGNED_SHORT&&xe&&(ae=xe.R16_EXT),W===n.SHORT&&xe&&(ae=xe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ae=n.R8UI),W===n.UNSIGNED_SHORT&&(ae=n.R16UI),W===n.UNSIGNED_INT&&(ae=n.R32UI),W===n.BYTE&&(ae=n.R8I),W===n.SHORT&&(ae=n.R16I),W===n.INT&&(ae=n.R32I)),v===n.RG&&(W===n.FLOAT&&(ae=n.RG32F),W===n.HALF_FLOAT&&(ae=n.RG16F),W===n.UNSIGNED_BYTE&&(ae=n.RG8),W===n.UNSIGNED_SHORT&&xe&&(ae=xe.RG16_EXT),W===n.SHORT&&xe&&(ae=xe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ae=n.RG8UI),W===n.UNSIGNED_SHORT&&(ae=n.RG16UI),W===n.UNSIGNED_INT&&(ae=n.RG32UI),W===n.BYTE&&(ae=n.RG8I),W===n.SHORT&&(ae=n.RG16I),W===n.INT&&(ae=n.RG32I)),v===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),W===n.UNSIGNED_INT&&(ae=n.RGB32UI),W===n.BYTE&&(ae=n.RGB8I),W===n.SHORT&&(ae=n.RGB16I),W===n.INT&&(ae=n.RGB32I)),v===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),W===n.UNSIGNED_INT&&(ae=n.RGBA32UI),W===n.BYTE&&(ae=n.RGBA8I),W===n.SHORT&&(ae=n.RGBA16I),W===n.INT&&(ae=n.RGBA32I)),v===n.RGB&&(W===n.UNSIGNED_SHORT&&xe&&(ae=xe.RGB16_EXT),W===n.SHORT&&xe&&(ae=xe.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),v===n.RGBA){const de=ge?Oo:at.getTransfer(ue);W===n.FLOAT&&(ae=n.RGBA32F),W===n.HALF_FLOAT&&(ae=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ae=de===gt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&xe&&(ae=xe.RGBA16_EXT),W===n.SHORT&&xe&&(ae=xe.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function N(y,v){let W;return y?v===null||v===mi||v===da?W=n.DEPTH24_STENCIL8:v===li?W=n.DEPTH32F_STENCIL8:v===fa&&(W=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mi||v===da?W=n.DEPTH_COMPONENT24:v===li?W=n.DEPTH_COMPONENT32F:v===fa&&(W=n.DEPTH_COMPONENT16),W}function D(y,v){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Wt&&y.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function I(y){const v=y.target;v.removeEventListener("dispose",I),w(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(y){const v=y.target;v.removeEventListener("dispose",x),F(v)}function w(y){const v=i.get(y);if(v.__webglInit===void 0)return;const W=y.source,ie=h.get(W);if(ie){const ue=ie[v.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&k(y),Object.keys(ie).length===0&&h.delete(W)}i.remove(y)}function k(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const W=y.source,ie=h.get(W);delete ie[v.__cacheKey],a.memory.textures--}function F(y){const v=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let ue=0;ue<v.__webglFramebuffer[ie].length;ue++)n.deleteFramebuffer(v.__webglFramebuffer[ie][ue]);else n.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)n.deleteFramebuffer(v.__webglFramebuffer[ie]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const W=y.textures;for(let ie=0,ue=W.length;ie<ue;ie++){const ge=i.get(W[ie]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(W[ie])}i.remove(y)}let B=0;function J(){B=0}function re(){return B}function X(y){B=y}function Z(){const y=B;return y>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),B+=1,y}function $(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function oe(y,v){const W=i.get(y);if(y.isVideoTexture&&Q(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&W.__version!==y.version){const ie=y.image;if(ie===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(W,y,v);return}}else y.isExternalTexture&&(W.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+v)}function ve(y,v){const W=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&W.__version!==y.version){Ve(W,y,v);return}else y.isExternalTexture&&(W.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+v)}function Ae(y,v){const W=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&W.__version!==y.version){Ve(W,y,v);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+v)}function De(y,v){const W=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&W.__version!==y.version){pe(W,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+v)}const Ie={[kc]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},tt={[Wt]:n.NEAREST,[eM]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[bl]:n.LINEAR_MIPMAP_NEAREST,[Ls]:n.LINEAR_MIPMAP_LINEAR},ot={[iM]:n.NEVER,[lM]:n.ALWAYS,[sM]:n.LESS,[Zu]:n.LEQUAL,[rM]:n.EQUAL,[Ju]:n.GEQUAL,[aM]:n.GREATER,[oM]:n.NOTEQUAL};function We(y,v){if(v.type===li&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$t||v.magFilter===bl||v.magFilter===Ra||v.magFilter===Ls||v.minFilter===$t||v.minFilter===bl||v.minFilter===Ra||v.minFilter===Ls)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,Ie[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,Ie[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,Ie[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,tt[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,tt[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ot[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Wt||v.minFilter!==Ra&&v.minFilter!==Ls||v.type===li&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function fe(y,v){let W=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",I));const ie=v.source;let ue=h.get(ie);ue===void 0&&(ue={},h.set(ie,ue));const ge=$(v);if(ge!==y.__cacheKey){ue[ge]===void 0&&(ue[ge]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ue[ge].usedTimes++;const xe=ue[y.__cacheKey];xe!==void 0&&(ue[y.__cacheKey].usedTimes--,xe.usedTimes===0&&k(v)),y.__cacheKey=ge,y.__webglTexture=ue[ge].texture}return W}function Ce(y,v,W){return Math.floor(Math.floor(y/W)/v)}function Me(y,v,W,ie){const ge=y.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,W,ie,v.data);else{ge.sort((we,ye)=>we.start-ye.start);let xe=0;for(let we=1;we<ge.length;we++){const ye=ge[xe],Ee=ge[we],$e=ye.start+ye.count,Ze=Ce(Ee.start,v.width,4),lt=Ce(ye.start,v.width,4);Ee.start<=$e+1&&Ze===lt&&Ce(Ee.start+Ee.count-1,v.width,4)===Ze?ye.count=Math.max(ye.count,Ee.start+Ee.count-ye.start):(++xe,ge[xe]=Ee)}ge.length=xe+1;const ae=t.getParameter(n.UNPACK_ROW_LENGTH),de=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let we=0,ye=ge.length;we<ye;we++){const Ee=ge[we],$e=Math.floor(Ee.start/4),Ze=Math.ceil(Ee.count/4),lt=$e%v.width,V=Math.floor($e/v.width),Se=Ze,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,lt,V,Se,le,W,ie,v.data)}y.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ae),t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function Ve(y,v,W){let ie=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=n.TEXTURE_3D);const ue=fe(y,v),ge=v.source;t.bindTexture(ie,y.__webglTexture,n.TEXTURE0+W);const xe=i.get(ge);if(ge.version!==xe.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const le=at.getPrimaries(at.workingColorSpace),Re=v.colorSpace===as?null:at.getPrimaries(v.colorSpace),Te=v.colorSpace===as||le===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let de=m(v.image,!1,s.maxTextureSize);de=q(v,de);const be=r.convert(v.format,v.colorSpace),we=r.convert(v.type);let ye=T(v.internalFormat,be,we,v.normalized,v.colorSpace,v.isVideoTexture);We(ie,v);let Ee;const $e=v.mipmaps,Ze=v.isVideoTexture!==!0,lt=xe.__version===void 0||ue===!0,V=ge.dataReady,Se=D(v,de);if(v.isDepthTexture)ye=N(v.format===Ds,v.type),lt&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,ye,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,ye,de.width,de.height,0,be,we,null));else if(v.isDataTexture)if($e.length>0){Ze&&lt&&t.texStorage2D(n.TEXTURE_2D,Se,ye,$e[0].width,$e[0].height);for(let le=0,Re=$e.length;le<Re;le++)Ee=$e[le],Ze?V&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,be,we,Ee.data):t.texImage2D(n.TEXTURE_2D,le,ye,Ee.width,Ee.height,0,be,we,Ee.data);v.generateMipmaps=!1}else Ze?(lt&&t.texStorage2D(n.TEXTURE_2D,Se,ye,de.width,de.height),V&&Me(v,de,be,we)):t.texImage2D(n.TEXTURE_2D,0,ye,de.width,de.height,0,be,we,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ze&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,ye,$e[0].width,$e[0].height,de.depth);for(let le=0,Re=$e.length;le<Re;le++)if(Ee=$e[le],v.format!==Nn)if(be!==null)if(Ze){if(V)if(v.layerUpdates.size>0){const Te=jd(Ee.width,Ee.height,v.format,v.type);for(const _e of v.layerUpdates){const ke=Ee.data.subarray(_e*Te/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Te/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,_e,Ee.width,Ee.height,1,be,ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,de.depth,be,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ye,Ee.width,Ee.height,de.depth,0,Ee.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,de.depth,be,we,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ye,Ee.width,Ee.height,de.depth,0,be,we,Ee.data)}else{Ze&&lt&&t.texStorage2D(n.TEXTURE_2D,Se,ye,$e[0].width,$e[0].height);for(let le=0,Re=$e.length;le<Re;le++)Ee=$e[le],v.format!==Nn?be!==null?Ze?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,be,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ye,Ee.width,Ee.height,0,Ee.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?V&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,be,we,Ee.data):t.texImage2D(n.TEXTURE_2D,le,ye,Ee.width,Ee.height,0,be,we,Ee.data)}else if(v.isDataArrayTexture)if(Ze){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,ye,de.width,de.height,de.depth),V)if(v.layerUpdates.size>0){const le=jd(de.width,de.height,v.format,v.type);for(const Re of v.layerUpdates){const Te=de.data.subarray(Re*le/de.data.BYTES_PER_ELEMENT,(Re+1)*le/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,de.width,de.height,1,be,we,Te)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,we,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,de.width,de.height,de.depth,0,be,we,de.data);else if(v.isData3DTexture)Ze?(lt&&t.texStorage3D(n.TEXTURE_3D,Se,ye,de.width,de.height,de.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,we,de.data)):t.texImage3D(n.TEXTURE_3D,0,ye,de.width,de.height,de.depth,0,be,we,de.data);else if(v.isFramebufferTexture){if(lt)if(Ze)t.texStorage2D(n.TEXTURE_2D,Se,ye,de.width,de.height);else{let le=de.width,Re=de.height;for(let Te=0;Te<Se;Te++)t.texImage2D(n.TEXTURE_2D,Te,ye,le,Re,0,be,we,null),le>>=1,Re>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),de.parentNode!==le){le.appendChild(de),d.add(v),le.onpaint=Je=>{const It=Je.changedElements;for(const _t of d)It.includes(_t.image)&&(_t.needsUpdate=!0)},le.requestPaint();return}const Re=0,Te=n.RGBA,_e=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Re,Te,_e,ke,de),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(Ze&&lt){const le=ce($e[0]);t.texStorage2D(n.TEXTURE_2D,Se,ye,le.width,le.height)}for(let le=0,Re=$e.length;le<Re;le++)Ee=$e[le],Ze?V&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,be,we,Ee):t.texImage2D(n.TEXTURE_2D,le,ye,be,we,Ee);v.generateMipmaps=!1}else if(Ze){if(lt){const le=ce(de);t.texStorage2D(n.TEXTURE_2D,Se,ye,le.width,le.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,we,de)}else t.texImage2D(n.TEXTURE_2D,0,ye,be,we,de);p(v)&&b(ie),xe.__version=ge.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function pe(y,v,W){if(v.image.length!==6)return;const ie=fe(y,v),ue=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+W);const ge=i.get(ue);if(ue.version!==ge.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);const xe=at.getPrimaries(at.workingColorSpace),ae=v.colorSpace===as?null:at.getPrimaries(v.colorSpace),de=v.colorSpace===as||xe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,we=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let _e=0;_e<6;_e++)!be&&!we?ye[_e]=m(v.image[_e],!0,s.maxCubemapSize):ye[_e]=we?v.image[_e].image:v.image[_e],ye[_e]=q(v,ye[_e]);const Ee=ye[0],$e=r.convert(v.format,v.colorSpace),Ze=r.convert(v.type),lt=T(v.internalFormat,$e,Ze,v.normalized,v.colorSpace),V=v.isVideoTexture!==!0,Se=ge.__version===void 0||ie===!0,le=ue.dataReady;let Re=D(v,Ee);We(n.TEXTURE_CUBE_MAP,v);let Te;if(be){V&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,lt,Ee.width,Ee.height);for(let _e=0;_e<6;_e++){Te=ye[_e].mipmaps;for(let ke=0;ke<Te.length;ke++){const Je=Te[ke];v.format!==Nn?$e!==null?V?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Je.width,Je.height,$e,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,lt,Je.width,Je.height,0,Je.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Je.width,Je.height,$e,Ze,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,lt,Je.width,Je.height,0,$e,Ze,Je.data)}}}else{if(Te=v.mipmaps,V&&Se){Te.length>0&&Re++;const _e=ce(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,lt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){V?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ye[_e].width,ye[_e].height,$e,Ze,ye[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,ye[_e].width,ye[_e].height,0,$e,Ze,ye[_e].data);for(let ke=0;ke<Te.length;ke++){const It=Te[ke].image[_e].image;V?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,It.width,It.height,$e,Ze,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,lt,It.width,It.height,0,$e,Ze,It.data)}}else{V?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,$e,Ze,ye[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,$e,Ze,ye[_e]);for(let ke=0;ke<Te.length;ke++){const Je=Te[ke];V?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,$e,Ze,Je.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,lt,$e,Ze,Je.image[_e])}}}p(v)&&b(n.TEXTURE_CUBE_MAP),ge.__version=ue.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function me(y,v,W,ie,ue,ge){const xe=r.convert(W.format,W.colorSpace),ae=r.convert(W.type),de=T(W.internalFormat,xe,ae,W.normalized,W.colorSpace),be=i.get(v),we=i.get(W);if(we.__renderTarget=v,!be.__hasExternalTextures){const ye=Math.max(1,v.width>>ge),Ee=Math.max(1,v.height>>ge);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,ge,de,ye,Ee,v.depth,0,xe,ae,null):t.texImage2D(ue,ge,de,ye,Ee,0,xe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),j(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ue,we.__webglTexture,0,O(v)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ue,we.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(y,v,W){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const ie=v.depthTexture,ue=ie&&ie.isDepthTexture?ie.type:null,ge=N(v.stencilBuffer,ue),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;j(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O(v),ge,v.width,v.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,O(v),ge,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ge,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,y)}else{const ie=v.textures;for(let ue=0;ue<ie.length;ue++){const ge=ie[ue],xe=r.convert(ge.format,ge.colorSpace),ae=r.convert(ge.type),de=T(ge.internalFormat,xe,ae,ge.normalized,ge.colorSpace);j(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O(v),de,v.width,v.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,O(v),de,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,de,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(y,v,W){const ie=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(v.depthTexture);if(ue.__renderTarget=v,(!ue.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ie){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),ue.__webglTexture===void 0){ue.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),We(n.TEXTURE_CUBE_MAP,v.depthTexture);const be=r.convert(v.depthTexture.format),we=r.convert(v.depthTexture.type);let ye;v.depthTexture.format===zi?ye=n.DEPTH_COMPONENT24:v.depthTexture.format===Ds&&(ye=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ye,v.width,v.height,0,be,we,null)}}else oe(v.depthTexture,0);const ge=ue.__webglTexture,xe=O(v),ae=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,de=v.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===zi)j(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ae,ge,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,de,ae,ge,0);else if(v.depthTexture.format===Ds)j(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ae,ge,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,de,ae,ge,0);else throw new Error("Unknown depthTexture format")}function Y(y){const v=i.get(y),W=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const ie=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){const ue=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",ue)};ie.addEventListener("dispose",ue),v.__depthDisposeCallback=ue}v.__boundDepthTexture=ie}if(y.depthTexture&&!v.__autoAllocateDepthBuffer)if(W)for(let ie=0;ie<6;ie++)U(v.__webglFramebuffer[ie],y,ie);else{const ie=y.texture.mipmaps;ie&&ie.length>0?U(v.__webglFramebuffer[0],y,0):U(v.__webglFramebuffer,y,0)}else if(W){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=n.createRenderbuffer(),R(v.__webglDepthbuffer[ie],y,!1);else{const ue=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=v.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ge)}}else{const ie=y.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),R(v.__webglDepthbuffer,y,!1);else{const ue=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,ge)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(y,v,W){const ie=i.get(y);v!==void 0&&me(ie.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Y(y)}function g(y){const v=y.texture,W=i.get(y),ie=i.get(v);y.addEventListener("dispose",x);const ue=y.textures,ge=y.isWebGLCubeRenderTarget===!0,xe=ue.length>1;if(xe||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=v.version,a.memory.textures++),ge){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[ae]=[];for(let de=0;de<v.mipmaps.length;de++)W.__webglFramebuffer[ae][de]=n.createFramebuffer()}else W.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)W.__webglFramebuffer[ae]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ae=0,de=ue.length;ae<de;ae++){const be=i.get(ue[ae]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&j(y)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ae=0;ae<ue.length;ae++){const de=ue[ae];W.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);const be=r.convert(de.format,de.colorSpace),we=r.convert(de.type),ye=T(de.internalFormat,be,we,de.normalized,de.colorSpace,y.isXRRenderTarget===!0),Ee=O(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,W.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),R(W.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),We(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)me(W.__webglFramebuffer[ae][de],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else me(W.__webglFramebuffer[ae],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(v)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ae=0,de=ue.length;ae<de;ae++){const be=ue[ae],we=i.get(be);let ye=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ye=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,we.__webglTexture),We(ye,be),me(W.__webglFramebuffer,y,be,n.COLOR_ATTACHMENT0+ae,ye,0),p(be)&&b(ye)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ae=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ie.__webglTexture),We(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)me(W.__webglFramebuffer[de],y,v,n.COLOR_ATTACHMENT0,ae,de);else me(W.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ae,0);p(v)&&b(ae),t.unbindTexture()}y.depthBuffer&&Y(y)}function C(y){const v=y.textures;for(let W=0,ie=v.length;W<ie;W++){const ue=v[W];if(p(ue)){const ge=A(y),xe=i.get(ue).__webglTexture;t.bindTexture(ge,xe),b(ge),t.unbindTexture()}}}const P=[],z=[];function M(y){if(y.samples>0){if(j(y)===!1){const v=y.textures,W=y.width,ie=y.height;let ue=n.COLOR_BUFFER_BIT;const ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(y),ae=v.length>1;if(ae)for(let be=0;be<v.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const de=y.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<v.length;be++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const we=i.get(v[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,W,ie,0,0,W,ie,ue,n.NEAREST),l===!0&&(P.length=0,z.length=0,P.push(n.COLOR_ATTACHMENT0+be),y.depthBuffer&&y.resolveDepthBuffer===!1&&(P.push(ge),z.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let be=0;be<v.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const we=i.get(v[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function O(y){return Math.min(s.maxSamples,y.samples)}function j(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Q(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function q(y,v){const W=y.colorSpace,ie=y.format,ue=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||W!==Fo&&W!==as&&(at.getTransfer(W)===gt?(ie!==Nn||ue!==bn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",W)),v}function ce(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.getTextureUnits=re,this.setTextureUnits=X,this.setTexture2D=oe,this.setTexture2DArray=ve,this.setTexture3D=Ae,this.setTextureCube=De,this.rebindTextures=ne,this.setupRenderTarget=g,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=M,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=me,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function z1(n,e){function t(i,s=as){let r;const a=at.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===qu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$u)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cm)return n.BYTE;if(i===um)return n.SHORT;if(i===fa)return n.UNSIGNED_SHORT;if(i===Xu)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===ki)return n.HALF_FLOAT;if(i===hm)return n.ALPHA;if(i===pm)return n.RGB;if(i===Nn)return n.RGBA;if(i===zi)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===mm)return n.RED;if(i===Ku)return n.RED_INTEGER;if(i===Bs)return n.RG;if(i===Yu)return n.RG_INTEGER;if(i===ju)return n.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===vo)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vc||i===Gc||i===Hc||i===Wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xc||i===qc||i===$c||i===Kc||i===Yc||i===No||i===jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xc||i===qc)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$c)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kc)return r.COMPRESSED_R11_EAC;if(i===Yc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===No)return r.COMPRESSED_RG11_EAC;if(i===jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===au||i===ou||i===lu||i===cu||i===uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===iu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===su)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ru)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===au)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ou)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fu||i===du||i===hu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===fu)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pu||i===mu||i===Uo||i===gu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===mu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const V1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Em(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yn({vertexShader:V1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W1 extends ps{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const S=typeof XRWebGLBinding<"u",m=new H1,p={},b=t.getContextAttributes();let A=null,T=null;const N=[],D=[],I=new je;let x=null;const w=new tn;w.viewport=new Lt;const k=new tn;k.viewport=new Lt;const F=[w,k],B=new QM;let J=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let Ce=N[fe];return Ce===void 0&&(Ce=new Rl,N[fe]=Ce),Ce.getTargetRaySpace()},this.getControllerGrip=function(fe){let Ce=N[fe];return Ce===void 0&&(Ce=new Rl,N[fe]=Ce),Ce.getGripSpace()},this.getHand=function(fe){let Ce=N[fe];return Ce===void 0&&(Ce=new Rl,N[fe]=Ce),Ce.getHandSpace()};function X(fe){const Ce=D.indexOf(fe.inputSource);if(Ce===-1)return;const Me=N[Ce];Me!==void 0&&(Me.update(fe.inputSource,fe.frame,c||a),Me.dispatchEvent({type:fe.type,data:fe.inputSource}))}function Z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",$);for(let fe=0;fe<N.length;fe++){const Ce=D[fe];Ce!==null&&(D[fe]=null,N[fe].disconnect(Ce))}J=null,re=null,m.reset();for(const fe in p)delete p[fe];e.setRenderTarget(A),h=null,f=null,d=null,s=null,T=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){r=fe,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){o=fe,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(fe){c=fe},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(fe){if(s=fe,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ve=null,pe=null;b.depth&&(pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?Ds:zi,Ve=b.stencil?da:mi);const me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Fn(f.textureWidth,f.textureHeight,{format:Nn,type:bn,depthTexture:new yr(f.textureWidth,f.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Fn(h.framebufferWidth,h.framebufferHeight,{format:Nn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(fe){for(let Ce=0;Ce<fe.removed.length;Ce++){const Me=fe.removed[Ce],Ve=D.indexOf(Me);Ve>=0&&(D[Ve]=null,N[Ve].disconnect(Me))}for(let Ce=0;Ce<fe.added.length;Ce++){const Me=fe.added[Ce];let Ve=D.indexOf(Me);if(Ve===-1){for(let me=0;me<N.length;me++)if(me>=D.length){D.push(Me),Ve=me;break}else if(D[me]===null){D[me]=Me,Ve=me;break}if(Ve===-1)break}const pe=N[Ve];pe&&pe.connect(Me)}}const oe=new H,ve=new H;function Ae(fe,Ce,Me){oe.setFromMatrixPosition(Ce.matrixWorld),ve.setFromMatrixPosition(Me.matrixWorld);const Ve=oe.distanceTo(ve),pe=Ce.projectionMatrix.elements,me=Me.projectionMatrix.elements,R=pe[14]/(pe[10]-1),U=pe[14]/(pe[10]+1),Y=(pe[9]+1)/pe[5],ne=(pe[9]-1)/pe[5],g=(pe[8]-1)/pe[0],C=(me[8]+1)/me[0],P=R*g,z=R*C,M=Ve/(-g+C),O=M*-g;if(Ce.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(O),fe.translateZ(M),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),pe[10]===-1)fe.projectionMatrix.copy(Ce.projectionMatrix),fe.projectionMatrixInverse.copy(Ce.projectionMatrixInverse);else{const j=R+M,Q=U+M,q=P-O,ce=z+(Ve-O),y=Y*U/Q*j,v=ne*U/Q*j;fe.projectionMatrix.makePerspective(q,ce,y,v,j,Q),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function De(fe,Ce){Ce===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(Ce.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(s===null)return;let Ce=fe.near,Me=fe.far;m.texture!==null&&(m.depthNear>0&&(Ce=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),B.near=k.near=w.near=Ce,B.far=k.far=w.far=Me,(J!==B.near||re!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),J=B.near,re=B.far),B.layers.mask=fe.layers.mask|6,w.layers.mask=B.layers.mask&-5,k.layers.mask=B.layers.mask&-3;const Ve=fe.parent,pe=B.cameras;De(B,Ve);for(let me=0;me<pe.length;me++)De(pe[me],Ve);pe.length===2?Ae(B,w,k):B.projectionMatrix.copy(w.projectionMatrix),Ie(fe,B,Ve)};function Ie(fe,Ce,Me){Me===null?fe.matrix.copy(Ce.matrixWorld):(fe.matrix.copy(Me.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(Ce.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(Ce.projectionMatrix),fe.projectionMatrixInverse.copy(Ce.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=pa*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(fe){l=fe,f!==null&&(f.fixedFoveation=fe),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=fe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(fe){return p[fe]};let tt=null;function ot(fe,Ce){if(u=Ce.getViewerPose(c||a),_=Ce,u!==null){const Me=u.views;h!==null&&(e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T));let Ve=!1;Me.length!==B.cameras.length&&(B.cameras.length=0,Ve=!0);for(let U=0;U<Me.length;U++){const Y=Me[U];let ne=null;if(h!==null)ne=h.getViewport(Y);else{const C=d.getViewSubImage(f,Y);ne=C.viewport,U===0&&(e.setRenderTargetTextures(T,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(T))}let g=F[U];g===void 0&&(g=new tn,g.layers.enable(U),g.viewport=new Lt,F[U]=g),g.matrix.fromArray(Y.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.projectionMatrix.fromArray(Y.projectionMatrix),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),g.viewport.set(ne.x,ne.y,ne.width,ne.height),U===0&&(B.matrix.copy(g.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ve===!0&&B.cameras.push(g)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const U=d.getDepthInformation(Me[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(pe&&pe.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let U=0;U<Me.length;U++){const Y=Me[U].camera;if(Y){let ne=p[Y];ne||(ne=new Em,p[Y]=ne);const g=d.getCameraImage(Y);ne.sourceTexture=g}}}}for(let Me=0;Me<N.length;Me++){const Ve=D[Me],pe=N[Me];Ve!==null&&pe!==void 0&&pe.update(Ve,Ce,c||a)}tt&&tt(fe,Ce),Ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ce}),_=null}const We=new Cm;We.setAnimationLoop(ot),this.setAnimationLoop=function(fe){tt=fe},this.dispose=function(){}}}const X1=new Rt,Um=new Ke;Um.set(-1,0,0,0,1,0,0,0,1);function q1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Tm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,T){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),A=b.envMap,T=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(X1.makeRotationFromEuler(T)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Um),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $1(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const T=A.program;i.uniformBlockBinding(b,T)}function c(b,A){let T=s[b.id];T===void 0&&(_(b),T=u(b),s[b.id]=T,b.addEventListener("dispose",m));const N=A.program;i.updateUBOMapping(b,N);const D=e.render.frame;r[b.id]!==D&&(f(b),r[b.id]=D)}function u(b){const A=d();b.__bindingPointIndex=A;const T=n.createBuffer(),N=b.__size,D=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,N,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,T),T}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const A=s[b.id],T=b.uniforms,N=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,I=T.length;D<I;D++){const x=Array.isArray(T[D])?T[D]:[T[D]];for(let w=0,k=x.length;w<k;w++){const F=x[w];if(h(F,D,w,N)===!0){const B=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let re=0;for(let X=0;X<J.length;X++){const Z=J[X],$=S(Z);typeof Z=="number"||typeof Z=="boolean"?(F.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,B+re,F.__data)):Z.isMatrix3?(F.__data[0]=Z.elements[0],F.__data[1]=Z.elements[1],F.__data[2]=Z.elements[2],F.__data[3]=0,F.__data[4]=Z.elements[3],F.__data[5]=Z.elements[4],F.__data[6]=Z.elements[5],F.__data[7]=0,F.__data[8]=Z.elements[6],F.__data[9]=Z.elements[7],F.__data[10]=Z.elements[8],F.__data[11]=0):ArrayBuffer.isView(Z)?F.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,F.__data.length)):(Z.toArray(F.__data,re),re+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,A,T,N){const D=b.value,I=A+"_"+T;if(N[I]===void 0)return typeof D=="number"||typeof D=="boolean"?N[I]=D:ArrayBuffer.isView(D)?N[I]=D.slice():N[I]=D.clone(),!0;{const x=N[I];if(typeof D=="number"||typeof D=="boolean"){if(x!==D)return N[I]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(x.equals(D)===!1)return x.copy(D),!0}}return!1}function _(b){const A=b.uniforms;let T=0;const N=16;for(let I=0,x=A.length;I<x;I++){const w=Array.isArray(A[I])?A[I]:[A[I]];for(let k=0,F=w.length;k<F;k++){const B=w[k],J=Array.isArray(B.value)?B.value:[B.value];for(let re=0,X=J.length;re<X;re++){const Z=J[re],$=S(Z),oe=T%N,ve=oe%$.boundary,Ae=oe+ve;T+=ve,Ae!==0&&N-Ae<$.storage&&(T+=N-Ae),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=$.storage}}}const D=T%N;return D>0&&(T+=N-D),b.__size=T,b.__cache={},this}function S(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){const A=b.target;A.removeEventListener("dispose",m);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const K1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function Y1(){return ei===null&&(ei=new IM(K1,16,16,Bs,ki),ei.name="DFG_LUT",ei.minFilter=$t,ei.magFilter=$t,ei.wrapS=Di,ei.wrapT=Di,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class j1{constructor(e={}){const{canvas:t=uM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=bn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=h,m=new Set([ju,Yu,Ku]),p=new Set([bn,mi,fa,da,qu,$u]),b=new Uint32Array(4),A=new Int32Array(4),T=new H;let N=null,D=null;const I=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let F=!1,B=null;this._outputColorSpace=Ln;let J=0,re=0,X=null,Z=-1,$=null;const oe=new Lt,ve=new Lt;let Ae=null;const De=new ct(0);let Ie=0,tt=t.width,ot=t.height,We=1,fe=null,Ce=null;const Me=new Lt(0,0,tt,ot),Ve=new Lt(0,0,tt,ot);let pe=!1;const me=new rf;let R=!1,U=!1;const Y=new Rt,ne=new H,g=new Lt,C={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function z(){return X===null?We:1}let M=i;function O(E,K){return t.getContext(E,K)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hu}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Je,!1),M===null){const K="webgl2";if(M=O(K,E),M===null)throw O(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ft("WebGLRenderer: "+E.message),E}let j,Q,q,ce,y,v,W,ie,ue,ge,xe,ae,de,be,we,ye,Ee,$e,Ze,lt,V,Se,le;function Re(){j=new YE(M),j.init(),V=new z1(M,j),Q=new VE(M,j,e,V),q=new B1(M,j),Q.reversedDepthBuffer&&f&&q.buffers.depth.setReversed(!0),ce=new JE(M),y=new E1,v=new k1(M,j,q,y,Q,V,ce),W=new KE(k),ie=new nb(M),Se=new kE(M,ie),ue=new jE(M,ie,ce,Se),ge=new eT(M,ue,ie,Se,ce),$e=new QE(M,Q,v),we=new GE(y),xe=new y1(k,W,j,Q,Se,we),ae=new q1(k,y),de=new A1,be=new D1(j),Ee=new BE(k,W,q,ge,_,l),ye=new O1(k,ge,Q),le=new $1(M,ce,Q,q),Ze=new zE(M,j,ce),lt=new ZE(M,j,ce),ce.programs=xe.programs,k.capabilities=Q,k.extensions=j,k.properties=y,k.renderLists=de,k.shadowMap=ye,k.state=q,k.info=ce}Re(),S!==bn&&(w=new nT(S,t.width,t.height,s,r));const Te=new W1(k,M);this.xr=Te,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(E){E!==void 0&&(We=E,this.setSize(tt,ot,!1))},this.getSize=function(E){return E.set(tt,ot)},this.setSize=function(E,K,se=!0){if(Te.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=E,ot=K,t.width=Math.floor(E*We),t.height=Math.floor(K*We),se===!0&&(t.style.width=E+"px",t.style.height=K+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,K)},this.getDrawingBufferSize=function(E){return E.set(tt*We,ot*We).floor()},this.setDrawingBufferSize=function(E,K,se){tt=E,ot=K,We=se,t.width=Math.floor(E*se),t.height=Math.floor(K*se),this.setViewport(0,0,E,K)},this.setEffects=function(E){if(S===bn){ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let K=0;K<E.length;K++)if(E[K].isOutputPass===!0){Xe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(oe)},this.getViewport=function(E){return E.copy(Me)},this.setViewport=function(E,K,se,ee){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,K,se,ee),q.viewport(oe.copy(Me).multiplyScalar(We).round())},this.getScissor=function(E){return E.copy(Ve)},this.setScissor=function(E,K,se,ee){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,K,se,ee),q.scissor(ve.copy(Ve).multiplyScalar(We).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){q.setScissorTest(pe=E)},this.setOpaqueSort=function(E){fe=E},this.setTransparentSort=function(E){Ce=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(E=!0,K=!0,se=!0){let ee=0;if(E){let te=!1;if(X!==null){const Ne=X.texture.format;te=m.has(Ne)}if(te){const Ne=X.texture.type,Fe=p.has(Ne),Le=Ee.getClearColor(),Be=Ee.getClearAlpha(),ze=Le.r,Qe=Le.g,st=Le.b;Fe?(b[0]=ze,b[1]=Qe,b[2]=st,b[3]=Be,M.clearBufferuiv(M.COLOR,0,b)):(A[0]=ze,A[1]=Qe,A[2]=st,A[3]=Be,M.clearBufferiv(M.COLOR,0,A))}else ee|=M.COLOR_BUFFER_BIT}K&&(ee|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&M.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Ee.dispose(),de.dispose(),be.dispose(),y.dispose(),W.dispose(),ge.dispose(),Se.dispose(),le.dispose(),xe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",_f),Te.removeEventListener("sessionend",vf),ms.stop()};function _e(E){E.preventDefault(),yd("WebGLRenderer: Context Lost."),F=!0}function ke(){yd("WebGLRenderer: Context Restored."),F=!1;const E=ce.autoReset,K=ye.enabled,se=ye.autoUpdate,ee=ye.needsUpdate,te=ye.type;Re(),ce.autoReset=E,ye.enabled=K,ye.autoUpdate=se,ye.needsUpdate=ee,ye.type=te}function Je(E){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function It(E){const K=E.target;K.removeEventListener("dispose",It),_t(K)}function _t(E){gi(E),y.remove(E)}function gi(E){const K=y.get(E).programs;K!==void 0&&(K.forEach(function(se){xe.releaseProgram(se)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,K,se,ee,te,Ne){K===null&&(K=C);const Fe=te.isMesh&&te.matrixWorld.determinant()<0,Le=Vm(E,K,se,ee,te);q.setMaterial(ee,Fe);let Be=se.index,ze=1;if(ee.wireframe===!0){if(Be=ue.getWireframeAttribute(se),Be===void 0)return;ze=2}const Qe=se.drawRange,st=se.attributes.position;let Ge=Qe.start*ze,vt=(Qe.start+Qe.count)*ze;Ne!==null&&(Ge=Math.max(Ge,Ne.start*ze),vt=Math.min(vt,(Ne.start+Ne.count)*ze)),Be!==null?(Ge=Math.max(Ge,0),vt=Math.min(vt,Be.count)):st!=null&&(Ge=Math.max(Ge,0),vt=Math.min(vt,st.count));const Nt=vt-Ge;if(Nt<0||Nt===1/0)return;Se.setup(te,ee,Le,se,Be);let Pt,St=Ze;if(Be!==null&&(Pt=ie.get(Be),St=lt,St.setIndex(Pt)),te.isMesh)ee.wireframe===!0?(q.setLineWidth(ee.wireframeLinewidth*z()),St.setMode(M.LINES)):St.setMode(M.TRIANGLES);else if(te.isLine){let Zt=ee.linewidth;Zt===void 0&&(Zt=1),q.setLineWidth(Zt*z()),te.isLineSegments?St.setMode(M.LINES):te.isLineLoop?St.setMode(M.LINE_LOOP):St.setMode(M.LINE_STRIP)}else te.isPoints?St.setMode(M.POINTS):te.isSprite&&St.setMode(M.TRIANGLES);if(te.isBatchedMesh)if(j.get("WEBGL_multi_draw"))St.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Zt=te._multiDrawStarts,Ue=te._multiDrawCounts,xn=te._multiDrawCount,ut=Be?ie.get(Be).bytesPerElement:1,Tn=y.get(ee).currentProgram.getUniforms();for(let Zn=0;Zn<xn;Zn++)Tn.setValue(M,"_gl_DrawID",Zn),St.render(Zt[Zn]/ut,Ue[Zn])}else if(te.isInstancedMesh)St.renderInstances(Ge,Nt,te.count);else if(se.isInstancedBufferGeometry){const Zt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ue=Math.min(se.instanceCount,Zt);St.renderInstances(Ge,Nt,Ue)}else St.render(Ge,Nt)};function jn(E,K,se){E.transparent===!0&&E.side===Pi&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,ba(E,K,se),E.side=ds,E.needsUpdate=!0,ba(E,K,se),E.side=Pi):ba(E,K,se)}this.compile=function(E,K,se=null){se===null&&(se=E),D=be.get(se),D.init(K),x.push(D),se.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),E!==se&&E.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),D.setupLights();const ee=new Set;return E.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let Fe=0;Fe<Ne.length;Fe++){const Le=Ne[Fe];jn(Le,se,te),ee.add(Le)}else jn(Ne,se,te),ee.add(Ne)}),D=x.pop(),ee},this.compileAsync=function(E,K,se=null){const ee=this.compile(E,K,se);return new Promise(te=>{function Ne(){if(ee.forEach(function(Fe){y.get(Fe).currentProgram.isReady()&&ee.delete(Fe)}),ee.size===0){te(E);return}setTimeout(Ne,10)}j.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let sl=null;function km(E){sl&&sl(E)}function _f(){ms.stop()}function vf(){ms.start()}const ms=new Cm;ms.setAnimationLoop(km),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(E){sl=E,Te.setAnimationLoop(E),E===null?ms.stop():ms.start()},Te.addEventListener("sessionstart",_f),Te.addEventListener("sessionend",vf),this.render=function(E,K){if(K!==void 0&&K.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(E,K);const se=Te.enabled===!0&&Te.isPresenting===!0,ee=w!==null&&(X===null||se)&&w.begin(k,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(K),K=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(k,E,K,X),D=be.get(E,x.length),D.init(K),D.state.textureUnits=v.getTextureUnits(),x.push(D),Y.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),me.setFromProjectionMatrix(Y,ci,K.reversedDepth),U=this.localClippingEnabled,R=we.init(this.clippingPlanes,U),N=de.get(E,I.length),N.init(),I.push(N),Te.enabled===!0&&Te.isPresenting===!0){const Fe=k.xr.getDepthSensingMesh();Fe!==null&&rl(Fe,K,-1/0,k.sortObjects)}rl(E,K,0,k.sortObjects),N.finish(),k.sortObjects===!0&&N.sort(fe,Ce),P=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,P&&Ee.addToRenderList(N,E),this.info.render.frame++,R===!0&&we.beginShadows();const te=D.state.shadowsArray;if(ye.render(te,E,K),R===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&w.hasRenderPass())===!1){const Fe=N.opaque,Le=N.transmissive;if(D.setupLights(),K.isArrayCamera){const Be=K.cameras;if(Le.length>0)for(let ze=0,Qe=Be.length;ze<Qe;ze++){const st=Be[ze];Sf(Fe,Le,E,st)}P&&Ee.render(E);for(let ze=0,Qe=Be.length;ze<Qe;ze++){const st=Be[ze];xf(N,E,st,st.viewport)}}else Le.length>0&&Sf(Fe,Le,E,K),P&&Ee.render(E),xf(N,E,K)}X!==null&&re===0&&(v.updateMultisampleRenderTarget(X),v.updateRenderTargetMipmap(X)),ee&&w.end(k),E.isScene===!0&&E.onAfterRender(k,E,K),Se.resetDefaultState(),Z=-1,$=null,x.pop(),x.length>0?(D=x[x.length-1],v.setTextureUnits(D.state.textureUnits),R===!0&&we.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?N=I[I.length-1]:N=null,B!==null&&B.renderEnd()};function rl(E,K,se,ee){if(E.visible===!1)return;if(E.layers.test(K.layers)){if(E.isGroup)se=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(K);else if(E.isLightProbeGrid)D.pushLightProbeGrid(E);else if(E.isLight)D.pushLight(E),E.castShadow&&D.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||me.intersectsSprite(E)){ee&&g.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);const Fe=ge.update(E),Le=E.material;Le.visible&&N.push(E,Fe,Le,se,g.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||me.intersectsObject(E))){const Fe=ge.update(E),Le=E.material;if(ee&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),g.copy(E.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),g.copy(Fe.boundingSphere.center)),g.applyMatrix4(E.matrixWorld).applyMatrix4(Y)),Array.isArray(Le)){const Be=Fe.groups;for(let ze=0,Qe=Be.length;ze<Qe;ze++){const st=Be[ze],Ge=Le[st.materialIndex];Ge&&Ge.visible&&N.push(E,Fe,Ge,se,g.z,st)}}else Le.visible&&N.push(E,Fe,Le,se,g.z,null)}}const Ne=E.children;for(let Fe=0,Le=Ne.length;Fe<Le;Fe++)rl(Ne[Fe],K,se,ee)}function xf(E,K,se,ee){const{opaque:te,transmissive:Ne,transparent:Fe}=E;D.setupLightsView(se),R===!0&&we.setGlobalState(k.clippingPlanes,se),ee&&q.viewport(oe.copy(ee)),te.length>0&&Ma(te,K,se),Ne.length>0&&Ma(Ne,K,se),Fe.length>0&&Ma(Fe,K,se),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Sf(E,K,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ee.id]===void 0){const Ge=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ee.id]=new Fn(1,1,{generateMipmaps:!0,type:Ge?ki:bn,minFilter:Ls,samples:Math.max(4,Q.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ne=D.state.transmissionRenderTarget[ee.id],Fe=ee.viewport||oe;Ne.setSize(Fe.z*k.transmissionResolutionScale,Fe.w*k.transmissionResolutionScale);const Le=k.getRenderTarget(),Be=k.getActiveCubeFace(),ze=k.getActiveMipmapLevel();k.setRenderTarget(Ne),k.getClearColor(De),Ie=k.getClearAlpha(),Ie<1&&k.setClearColor(16777215,.5),k.clear(),P&&Ee.render(se);const Qe=k.toneMapping;k.toneMapping=hi;const st=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),D.setupLightsView(ee),R===!0&&we.setGlobalState(k.clippingPlanes,ee),Ma(E,se,ee),v.updateMultisampleRenderTarget(Ne),v.updateRenderTargetMipmap(Ne),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let vt=0,Nt=K.length;vt<Nt;vt++){const Pt=K[vt],{object:St,geometry:Zt,material:Ue,group:xn}=Pt;if(Ue.side===Pi&&St.layers.test(ee.layers)){const ut=Ue.side;Ue.side=gn,Ue.needsUpdate=!0,Mf(St,se,ee,Zt,Ue,xn),Ue.side=ut,Ue.needsUpdate=!0,Ge=!0}}Ge===!0&&(v.updateMultisampleRenderTarget(Ne),v.updateRenderTargetMipmap(Ne))}k.setRenderTarget(Le,Be,ze),k.setClearColor(De,Ie),st!==void 0&&(ee.viewport=st),k.toneMapping=Qe}function Ma(E,K,se){const ee=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Ne=E.length;te<Ne;te++){const Fe=E[te],{object:Le,geometry:Be,group:ze}=Fe;let Qe=Fe.material;Qe.allowOverride===!0&&ee!==null&&(Qe=ee),Le.layers.test(se.layers)&&Mf(Le,K,se,Be,Qe,ze)}}function Mf(E,K,se,ee,te,Ne){E.onBeforeRender(k,K,se,ee,te,Ne),E.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),te.onBeforeRender(k,K,se,ee,E,Ne),te.transparent===!0&&te.side===Pi&&te.forceSinglePass===!1?(te.side=gn,te.needsUpdate=!0,k.renderBufferDirect(se,K,ee,te,E,Ne),te.side=ds,te.needsUpdate=!0,k.renderBufferDirect(se,K,ee,te,E,Ne),te.side=Pi):k.renderBufferDirect(se,K,ee,te,E,Ne),E.onAfterRender(k,K,se,ee,te,Ne)}function ba(E,K,se){K.isScene!==!0&&(K=C);const ee=y.get(E),te=D.state.lights,Ne=D.state.shadowsArray,Fe=te.state.version,Le=xe.getParameters(E,te.state,Ne,K,se,D.state.lightProbeGridArray),Be=xe.getProgramCacheKey(Le);let ze=ee.programs;ee.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?K.environment:null,ee.fog=K.fog;const Qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;ee.envMap=W.get(E.envMap||ee.environment,Qe),ee.envMapRotation=ee.environment!==null&&E.envMap===null?K.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",It),ze=new Map,ee.programs=ze);let st=ze.get(Be);if(st!==void 0){if(ee.currentProgram===st&&ee.lightsStateVersion===Fe)return yf(E,Le),st}else Le.uniforms=xe.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,se,Le),E.onBeforeCompile(Le,k),st=xe.acquireProgram(Le,Be),ze.set(Be,st),ee.uniforms=Le.uniforms;const Ge=ee.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=we.uniform),yf(E,Le),ee.needsLights=Hm(E),ee.lightsStateVersion=Fe,ee.needsLights&&(Ge.ambientLightColor.value=te.state.ambient,Ge.lightProbe.value=te.state.probe,Ge.directionalLights.value=te.state.directional,Ge.directionalLightShadows.value=te.state.directionalShadow,Ge.spotLights.value=te.state.spot,Ge.spotLightShadows.value=te.state.spotShadow,Ge.rectAreaLights.value=te.state.rectArea,Ge.ltc_1.value=te.state.rectAreaLTC1,Ge.ltc_2.value=te.state.rectAreaLTC2,Ge.pointLights.value=te.state.point,Ge.pointLightShadows.value=te.state.pointShadow,Ge.hemisphereLights.value=te.state.hemi,Ge.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ge.spotLightMatrix.value=te.state.spotLightMatrix,Ge.spotLightMap.value=te.state.spotLightMap,Ge.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=D.state.lightProbeGridArray.length>0,ee.currentProgram=st,ee.uniformsList=null,st}function bf(E){if(E.uniformsList===null){const K=E.currentProgram.getUniforms();E.uniformsList=So.seqWithValue(K.seq,E.uniforms)}return E.uniformsList}function yf(E,K){const se=y.get(E);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.batchingColor=K.batchingColor,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.instancingMorph=K.instancingMorph,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function zm(E,K){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;T.setFromMatrixPosition(K.matrixWorld);for(let se=0,ee=E.length;se<ee;se++){const te=E[se];if(te.texture!==null&&te.boundingBox.containsPoint(T))return te}return null}function Vm(E,K,se,ee,te){K.isScene!==!0&&(K=C),v.resetTextureUnits();const Ne=K.fog,Fe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?K.environment:null,Le=X===null?k.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:at.workingColorSpace,Be=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,ze=W.get(ee.envMap||Fe,Be),Qe=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,st=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ge=!!se.morphAttributes.position,vt=!!se.morphAttributes.normal,Nt=!!se.morphAttributes.color;let Pt=hi;ee.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Pt=k.toneMapping);const St=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Zt=St!==void 0?St.length:0,Ue=y.get(ee),xn=D.state.lights;if(R===!0&&(U===!0||E!==$)){const yt=E===$&&ee.id===Z;we.setState(ee,E,yt)}let ut=!1;ee.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==xn.state.version||Ue.outputColorSpace!==Le||te.isBatchedMesh&&Ue.batching===!1||!te.isBatchedMesh&&Ue.batching===!0||te.isBatchedMesh&&Ue.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ue.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ue.instancing===!1||!te.isInstancedMesh&&Ue.instancing===!0||te.isSkinnedMesh&&Ue.skinning===!1||!te.isSkinnedMesh&&Ue.skinning===!0||te.isInstancedMesh&&Ue.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ue.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ue.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ue.instancingMorph===!1&&te.morphTexture!==null||Ue.envMap!==ze||ee.fog===!0&&Ue.fog!==Ne||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==we.numPlanes||Ue.numIntersection!==we.numIntersection)||Ue.vertexAlphas!==Qe||Ue.vertexTangents!==st||Ue.morphTargets!==Ge||Ue.morphNormals!==vt||Ue.morphColors!==Nt||Ue.toneMapping!==Pt||Ue.morphTargetsCount!==Zt||!!Ue.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Ue.__version=ee.version);let Tn=Ue.currentProgram;ut===!0&&(Tn=ba(ee,K,te),B&&ee.isNodeMaterial&&B.onUpdateProgram(ee,Tn,Ue));let Zn=!1,Hi=!1,Vs=!1;const Mt=Tn.getUniforms(),Ut=Ue.uniforms;if(q.useProgram(Tn.program)&&(Zn=!0,Hi=!0,Vs=!0),ee.id!==Z&&(Z=ee.id,Hi=!0),Ue.needsLights){const yt=zm(D.state.lightProbeGridArray,te);Ue.lightProbeGrid!==yt&&(Ue.lightProbeGrid=yt,Hi=!0)}if(Zn||$!==E){q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Mt.setValue(M,"projectionMatrix",E.projectionMatrix),Mt.setValue(M,"viewMatrix",E.matrixWorldInverse);const Xi=Mt.map.cameraPosition;Xi!==void 0&&Xi.setValue(M,ne.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&Mt.setValue(M,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Mt.setValue(M,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,Hi=!0,Vs=!0)}if(Ue.needsLights&&(xn.state.directionalShadowMap.length>0&&Mt.setValue(M,"directionalShadowMap",xn.state.directionalShadowMap,v),xn.state.spotShadowMap.length>0&&Mt.setValue(M,"spotShadowMap",xn.state.spotShadowMap,v),xn.state.pointShadowMap.length>0&&Mt.setValue(M,"pointShadowMap",xn.state.pointShadowMap,v)),te.isSkinnedMesh){Mt.setOptional(M,te,"bindMatrix"),Mt.setOptional(M,te,"bindMatrixInverse");const yt=te.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),Mt.setValue(M,"boneTexture",yt.boneTexture,v))}te.isBatchedMesh&&(Mt.setOptional(M,te,"batchingTexture"),Mt.setValue(M,"batchingTexture",te._matricesTexture,v),Mt.setOptional(M,te,"batchingIdTexture"),Mt.setValue(M,"batchingIdTexture",te._indirectTexture,v),Mt.setOptional(M,te,"batchingColorTexture"),te._colorsTexture!==null&&Mt.setValue(M,"batchingColorTexture",te._colorsTexture,v));const Wi=se.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&$e.update(te,se,Tn),(Hi||Ue.receiveShadow!==te.receiveShadow)&&(Ue.receiveShadow=te.receiveShadow,Mt.setValue(M,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&K.environment!==null&&(Ut.envMapIntensity.value=K.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Y1()),Hi){if(Mt.setValue(M,"toneMappingExposure",k.toneMappingExposure),Ue.needsLights&&Gm(Ut,Vs),Ne&&ee.fog===!0&&ae.refreshFogUniforms(Ut,Ne),ae.refreshMaterialUniforms(Ut,ee,We,ot,D.state.transmissionRenderTarget[E.id]),Ue.needsLights&&Ue.lightProbeGrid){const yt=Ue.lightProbeGrid;Ut.probesSH.value=yt.texture,Ut.probesMin.value.copy(yt.boundingBox.min),Ut.probesMax.value.copy(yt.boundingBox.max),Ut.probesResolution.value.copy(yt.resolution)}So.upload(M,bf(Ue),Ut,v)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(So.upload(M,bf(Ue),Ut,v),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Mt.setValue(M,"center",te.center),Mt.setValue(M,"modelViewMatrix",te.modelViewMatrix),Mt.setValue(M,"normalMatrix",te.normalMatrix),Mt.setValue(M,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){const yt=ee.uniformsGroups;for(let Xi=0,Gs=yt.length;Xi<Gs;Xi++){const Ef=yt[Xi];le.update(Ef,Tn),le.bind(Ef,Tn)}}return Tn}function Gm(E,K){E.ambientLightColor.needsUpdate=K,E.lightProbe.needsUpdate=K,E.directionalLights.needsUpdate=K,E.directionalLightShadows.needsUpdate=K,E.pointLights.needsUpdate=K,E.pointLightShadows.needsUpdate=K,E.spotLights.needsUpdate=K,E.spotLightShadows.needsUpdate=K,E.rectAreaLights.needsUpdate=K,E.hemisphereLights.needsUpdate=K}function Hm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,K,se){const ee=y.get(E);ee.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=K,y.get(E.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,K){const se=y.get(E);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0};const Wm=M.createFramebuffer();this.setRenderTarget=function(E,K=0,se=0){X=E,J=K,re=se;let ee=null,te=!1,Ne=!1;if(E){const Le=y.get(E);if(Le.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(M.FRAMEBUFFER,Le.__webglFramebuffer),oe.copy(E.viewport),ve.copy(E.scissor),Ae=E.scissorTest,q.viewport(oe),q.scissor(ve),q.setScissorTest(Ae),Z=-1;return}else if(Le.__webglFramebuffer===void 0)v.setupRenderTarget(E);else if(Le.__hasExternalTextures)v.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Qe=E.depthTexture;if(Le.__boundDepthTexture!==Qe){if(Qe!==null&&y.has(Qe)&&(E.width!==Qe.image.width||E.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ne=!0);const ze=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[K])?ee=ze[K][se]:ee=ze[K],te=!0):E.samples>0&&v.useMultisampledRTT(E)===!1?ee=y.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?ee=ze[se]:ee=ze,oe.copy(E.viewport),ve.copy(E.scissor),Ae=E.scissorTest}else oe.copy(Me).multiplyScalar(We).floor(),ve.copy(Ve).multiplyScalar(We).floor(),Ae=pe;if(se!==0&&(ee=Wm),q.bindFramebuffer(M.FRAMEBUFFER,ee)&&q.drawBuffers(E,ee),q.viewport(oe),q.scissor(ve),q.setScissorTest(Ae),te){const Le=y.get(E.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+K,Le.__webglTexture,se)}else if(Ne){const Le=K;for(let Be=0;Be<E.textures.length;Be++){const ze=y.get(E.textures[Be]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Be,ze.__webglTexture,se,Le)}}else if(E!==null&&se!==0){const Le=y.get(E.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Le.__webglTexture,se)}Z=-1},this.readRenderTargetPixels=function(E,K,se,ee,te,Ne,Fe,Le=0){if(!(E&&E.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){q.bindFramebuffer(M.FRAMEBUFFER,Be);try{const ze=E.textures[Le],Qe=ze.format,st=ze.type;if(E.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Le),!Q.textureFormatReadable(Qe)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(st)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=E.width-ee&&se>=0&&se<=E.height-te&&M.readPixels(K,se,ee,te,V.convert(Qe),V.convert(st),Ne)}finally{const ze=X!==null?y.get(X).__webglFramebuffer:null;q.bindFramebuffer(M.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,K,se,ee,te,Ne,Fe,Le=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be)if(K>=0&&K<=E.width-ee&&se>=0&&se<=E.height-te){q.bindFramebuffer(M.FRAMEBUFFER,Be);const ze=E.textures[Le],Qe=ze.format,st=ze.type;if(E.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Le),!Q.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Ge),M.bufferData(M.PIXEL_PACK_BUFFER,Ne.byteLength,M.STREAM_READ),M.readPixels(K,se,ee,te,V.convert(Qe),V.convert(st),0);const vt=X!==null?y.get(X).__webglFramebuffer:null;q.bindFramebuffer(M.FRAMEBUFFER,vt);const Nt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await fM(M,Nt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Ge),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Ne),M.deleteBuffer(Ge),M.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,K=null,se=0){const ee=Math.pow(2,-se),te=Math.floor(E.image.width*ee),Ne=Math.floor(E.image.height*ee),Fe=K!==null?K.x:0,Le=K!==null?K.y:0;v.setTexture2D(E,0),M.copyTexSubImage2D(M.TEXTURE_2D,se,0,0,Fe,Le,te,Ne),q.unbindTexture()};const Xm=M.createFramebuffer(),qm=M.createFramebuffer();this.copyTextureToTexture=function(E,K,se=null,ee=null,te=0,Ne=0){let Fe,Le,Be,ze,Qe,st,Ge,vt,Nt;const Pt=E.isCompressedTexture?E.mipmaps[Ne]:E.image;if(se!==null)Fe=se.max.x-se.min.x,Le=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,ze=se.min.x,Qe=se.min.y,st=se.isBox3?se.min.z:0;else{const Ut=Math.pow(2,-te);Fe=Math.floor(Pt.width*Ut),Le=Math.floor(Pt.height*Ut),E.isDataArrayTexture?Be=Pt.depth:E.isData3DTexture?Be=Math.floor(Pt.depth*Ut):Be=1,ze=0,Qe=0,st=0}ee!==null?(Ge=ee.x,vt=ee.y,Nt=ee.z):(Ge=0,vt=0,Nt=0);const St=V.convert(K.format),Zt=V.convert(K.type);let Ue;K.isData3DTexture?(v.setTexture3D(K,0),Ue=M.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(v.setTexture2DArray(K,0),Ue=M.TEXTURE_2D_ARRAY):(v.setTexture2D(K,0),Ue=M.TEXTURE_2D),q.activeTexture(M.TEXTURE0),q.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(M.UNPACK_ALIGNMENT,K.unpackAlignment);const xn=q.getParameter(M.UNPACK_ROW_LENGTH),ut=q.getParameter(M.UNPACK_IMAGE_HEIGHT),Tn=q.getParameter(M.UNPACK_SKIP_PIXELS),Zn=q.getParameter(M.UNPACK_SKIP_ROWS),Hi=q.getParameter(M.UNPACK_SKIP_IMAGES);q.pixelStorei(M.UNPACK_ROW_LENGTH,Pt.width),q.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Pt.height),q.pixelStorei(M.UNPACK_SKIP_PIXELS,ze),q.pixelStorei(M.UNPACK_SKIP_ROWS,Qe),q.pixelStorei(M.UNPACK_SKIP_IMAGES,st);const Vs=E.isDataArrayTexture||E.isData3DTexture,Mt=K.isDataArrayTexture||K.isData3DTexture;if(E.isDepthTexture){const Ut=y.get(E),Wi=y.get(K),yt=y.get(Ut.__renderTarget),Xi=y.get(Wi.__renderTarget);q.bindFramebuffer(M.READ_FRAMEBUFFER,yt.__webglFramebuffer),q.bindFramebuffer(M.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Gs=0;Gs<Be;Gs++)Vs&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,y.get(E).__webglTexture,te,st+Gs),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,y.get(K).__webglTexture,Ne,Nt+Gs)),M.blitFramebuffer(ze,Qe,Fe,Le,Ge,vt,Fe,Le,M.DEPTH_BUFFER_BIT,M.NEAREST);q.bindFramebuffer(M.READ_FRAMEBUFFER,null),q.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(te!==0||E.isRenderTargetTexture||y.has(E)){const Ut=y.get(E),Wi=y.get(K);q.bindFramebuffer(M.READ_FRAMEBUFFER,Xm),q.bindFramebuffer(M.DRAW_FRAMEBUFFER,qm);for(let yt=0;yt<Be;yt++)Vs?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ut.__webglTexture,te,st+yt):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ut.__webglTexture,te),Mt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Wi.__webglTexture,Ne,Nt+yt):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Wi.__webglTexture,Ne),te!==0?M.blitFramebuffer(ze,Qe,Fe,Le,Ge,vt,Fe,Le,M.COLOR_BUFFER_BIT,M.NEAREST):Mt?M.copyTexSubImage3D(Ue,Ne,Ge,vt,Nt+yt,ze,Qe,Fe,Le):M.copyTexSubImage2D(Ue,Ne,Ge,vt,ze,Qe,Fe,Le);q.bindFramebuffer(M.READ_FRAMEBUFFER,null),q.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Mt?E.isDataTexture||E.isData3DTexture?M.texSubImage3D(Ue,Ne,Ge,vt,Nt,Fe,Le,Be,St,Zt,Pt.data):K.isCompressedArrayTexture?M.compressedTexSubImage3D(Ue,Ne,Ge,vt,Nt,Fe,Le,Be,St,Pt.data):M.texSubImage3D(Ue,Ne,Ge,vt,Nt,Fe,Le,Be,St,Zt,Pt):E.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Ne,Ge,vt,Fe,Le,St,Zt,Pt.data):E.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Ne,Ge,vt,Pt.width,Pt.height,St,Pt.data):M.texSubImage2D(M.TEXTURE_2D,Ne,Ge,vt,Fe,Le,St,Zt,Pt);q.pixelStorei(M.UNPACK_ROW_LENGTH,xn),q.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ut),q.pixelStorei(M.UNPACK_SKIP_PIXELS,Tn),q.pixelStorei(M.UNPACK_SKIP_ROWS,Zn),q.pixelStorei(M.UNPACK_SKIP_IMAGES,Hi),Ne===0&&K.generateMipmaps&&M.generateMipmap(Ue),q.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&v.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?v.setTextureCube(E,0):E.isData3DTexture?v.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?v.setTexture2DArray(E,0):v.setTexture2D(E,0),q.unbindTexture()},this.resetState=function(){J=0,re=0,X=null,q.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Sh={type:"change"},ff={type:"start"},Fm={type:"end"},eo=new nf,Mh=new is,Z1=Math.cos(70*Qu.DEG2RAD),zt=new H,pn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nc=1e-6;class J1 extends eb{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Vi,this._lastTargetPosition=new H,this._quat=new Vi().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kd,this._sphericalDelta=new Kd,this._scale=1,this._panOffset=new H,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new H,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eA.bind(this),this._onPointerDown=Q1.bind(this),this._onPointerUp=tA.bind(this),this._onContextMenu=lA.bind(this),this._onMouseWheel=sA.bind(this),this._onKeyDown=rA.bind(this),this._onTouchStart=aA.bind(this),this._onTouchMove=oA.bind(this),this._onMouseDown=nA.bind(this),this._onMouseMove=iA.bind(this),this._interceptControlDown=cA.bind(this),this._interceptControlUp=uA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sh),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=zt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<Z1?this.object.lookAt(this.target):(Mh.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(Mh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nc||this._lastTargetPosition.distanceToSquared(this.target)>nc?(this.dispatchEvent(Sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Q1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function eA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function tA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fm),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nA(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(ff)}function iA(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sA(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(ff),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fm))}function rA(n){this.enabled!==!1&&this._handleKeyDown(n)}function aA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(ff)}function oA(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function lA(n){this.enabled!==!1&&n.preventDefault()}function cA(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fA=new uf(-1,1,1,-1,0,1);class dA extends vn{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}}const hA=new dA;class pA{constructor(e){this._mesh=new Ft(hA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const kr=new H,bh=new H,yh=new H,to=new H,zr=new H,ic=new H,no=new H,sc=new Vi;function Eh(n,e,t,i,s=!1){const r=e,a=t,o=i,l=n.position,c=n.near,u=n.far;to.copy(a).sub(r).normalize(),zr.copy(o).sub(r).normalize(),ic.crossVectors(to,zr).normalize(),kr.copy(r).sub(l),bh.copy(a).sub(l),yh.copy(o).sub(l);const d=-kr.dot(ic),f=to.dot(kr)*c/d,h=to.dot(bh)*c/d,_=zr.dot(kr)*c/d,S=zr.dot(yh)*c/d;sc.setFromUnitVectors(no.set(0,1,0),zr),n.quaternion.setFromUnitVectors(no.set(0,0,1).applyQuaternion(sc),ic).multiply(sc),n.projectionMatrix.set(2*c/(h-f),0,(h+f)/(h-f),0,0,2*c/(S-_),(S+_)/(S-_),0,0,0,(u+c)/(c-u),2*u*c/(c-u),0,0,-1,0),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),s&&(n.fov=Qu.RAD2DEG/Math.min(1,n.aspect)*Math.atan((no.copy(a).sub(r).length()+no.copy(o).sub(r).length())/kr.length()))}const Cn=new tn,Rn=new tn,Th=new H,Ah=new H,io=new H,rc=new H,ac=new H,oc=new H,Ts=new H,Vr=new H,lc=new H;class mA{constructor(e,t=512,i=512){this.colorMatrixLeft=new Ke().fromArray([.4561,-.0400822,-.0152161,.500484,-.0378246,-.0205971,.176381,-.0157589,-.00546856]),this.colorMatrixRight=new Ke().fromArray([-.0434706,.378476,-.0721527,-.0879388,.73364,-.112961,-.00155529,-.0184503,1.2264]),this.eyeSep=.064,this.planeDistance=.5;const s={minFilter:$t,magFilter:Wt,format:Nn},r=new Fn(t,i,s),a=new Fn(t,i,s);Cn.layers.enable(1),Rn.layers.enable(2);const o=new Yn({uniforms:{mapLeft:{value:r.texture},mapRight:{value:a.texture},colorMatrixLeft:{value:this.colorMatrixLeft},colorMatrixRight:{value:this.colorMatrixRight}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = vec2( uv.x, uv.y );","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D mapLeft;","uniform sampler2D mapRight;","varying vec2 vUv;","uniform mat3 colorMatrixLeft;","uniform mat3 colorMatrixRight;","void main() {","	vec2 uv = vUv;","	vec4 colorL = texture2D( mapLeft, uv );","	vec4 colorR = texture2D( mapRight, uv );","	vec3 color = clamp(","			colorMatrixLeft * colorL.rgb +","			colorMatrixRight * colorR.rgb, 0., 1. );","	gl_FragColor = vec4(","			color.r, color.g, color.b,","			max( colorL.a, colorR.a ) );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","}"].join(`
`)}),l=new pA(o);this.setSize=function(c,u){e.setSize(c,u);const d=e.getPixelRatio();r.setSize(c*d,u*d),a.setSize(c*d,u*d)},this.render=function(c,u){const d=e.getRenderTarget();c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),u.matrixWorld.extractBasis(Ts,Vr,lc),Ts.normalize(),Vr.normalize(),lc.normalize();const f=this.eyeSep/2;Th.copy(u.position).addScaledVector(Ts,-f),Ah.copy(u.position).addScaledVector(Ts,f),io.copy(u.position).addScaledVector(lc,-this.planeDistance);const h=this.planeDistance*Math.tan(Qu.DEG2RAD*u.fov/2),_=h*u.aspect;rc.copy(io).addScaledVector(Ts,-_).addScaledVector(Vr,-h),ac.copy(io).addScaledVector(Ts,_).addScaledVector(Vr,-h),oc.copy(io).addScaledVector(Ts,-_).addScaledVector(Vr,h),Cn.position.copy(Th),Cn.near=u.near,Cn.far=u.far,Eh(Cn,rc,ac,oc,!0),Cn.matrixWorld.compose(Cn.position,Cn.quaternion,Cn.scale),Cn.matrixWorldInverse.copy(Cn.matrixWorld).invert(),Rn.position.copy(Ah),Rn.near=u.near,Rn.far=u.far,Eh(Rn,rc,ac,oc,!0),Rn.matrixWorld.compose(Rn.position,Rn.quaternion,Rn.scale),Rn.matrixWorldInverse.copy(Rn.matrixWorld).invert(),e.setRenderTarget(r),e.clear(),e.render(c,Cn),e.setRenderTarget(a),e.clear(),e.render(c,Rn),e.setRenderTarget(null),l.render(e),e.setRenderTarget(d)},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}}const gA={class:"trophy-legend"},_A={class:"legend-header"},vA={class:"legend-night"},xA={key:0,class:"legend-remaining"},SA={class:"mode-bar"},MA=["title","aria-pressed"],bA={key:0,viewBox:"0 0 24 24",class:"sound-icon"},yA={key:1,viewBox:"0 0 24 24",class:"sound-icon"},EA=["disabled","title"],TA={class:"trophy-nav"},AA={class:"celebrate-name"},wA={key:0,class:"anaglyph-hint"},wh=2.2,CA=1600,cc=70,RA={__name:"TrophyRoom",setup(n){const e=dt(null),t=dt(null),i=dt("standard"),s=dt(!1),r=dt(null);let a=null,o=null,l=null,c=null,u=null,d=[],f=null,h=null,_=!1;const S=new H,m=new H;let p=-1,b=!1,A=0,T=null,N=null,D=[],I=null,x=null,w=performance.now();const k=wt(()=>[1,2,3,4,5].find(pe=>!L.nightsCleared.includes(pe))),F=wt(()=>Math.min(5,Math.floor(L.totalNightsCleared/5))),B=wt(()=>F.value>=5?0:(F.value+1)*5-L.totalNightsCleared),J=[{night:1,name:"Klassischer Fuchsschwanz",color:14637588},{night:2,name:"Arktischer Fuchsschwanz",color:15790320},{night:3,name:"Goldener Fuchsschwanz",color:13410330},{night:4,name:"Eisiger Fuchsschwanz",color:5220070},{night:5,name:"Toxischer Fuchsschwanz",color:6278943}];function re(pe,me,R){const U=J[me].color,Y=new VM([new H(0,-.15,0),new H(.04,-.02,.02),new H(.1,.12,.05),new H(.14,.26,.02),new H(.08,.38,-.02),new H(0,.46,-.04)]),ne=45,g=Y.getPoints(ne);for(let C=0;C<=ne;C++){const P=C/ne,z=g[C];let M=0;P<.5?M=.035+(.15-.035)*(P/.5):M=.15-(.15-.012)*((P-.5)/.5);const O=new lf(M,8,8),j=P>.82?16316664:U,Q=new Es({color:j,roughness:.88,metalness:.05,...R&&{transparent:!0,opacity:.01,depthWrite:!1,emissive:j,emissiveIntensity:.06}}),q=new Ft(O,Q);q.position.copy(z),q.castShadow=!R,q.receiveShadow=!R,pe.add(q)}}function X(pe,me){const R=new Xr;re(R,pe,!me);const U=new af(.12,.15,.06,16),Y=new Es({color:12634320,roughness:.15,metalness:.9}),ne=new Ft(U,Y);return ne.position.y=-.18,ne.castShadow=!0,ne.receiveShadow=!0,R.add(ne),R}function Z(){const pe=e.value,me=pe.clientWidth||800,R=pe.clientHeight||600;a=new j1({canvas:pe,antialias:!0}),a.setSize(me,R,!1),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.shadowMap.enabled=!0,a.shadowMap.type=ta,a.toneMapping=Wu,a.toneMappingExposure=1.8,o=new wM,o.background=new ct(525570),o.fog=new tf(525570,.018),l=new tn(48,me/R,.1,60),l.position.set(0,1.3,5.5),o.add(new ZM(8014376,3.5));const U=new Za(16750916,12,20);U.position.set(0,4.5,1.5),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),U.shadow.camera.near=.5,U.shadow.camera.far=20,o.add(U);const Y=new Za(16742195,5,14);Y.position.set(-3.5,2.5,3),o.add(Y);const ne=new Za(13395490,3,12);ne.position.set(3.5,1.5,-1),o.add(ne);const g=new $d(16764040,2.5,14,Math.PI/5,.35);g.position.set(0,3.5,4.5),g.target.position.set(0,.2,0),g.castShadow=!1,o.add(g),o.add(g.target);const C=new $d(16773590,7,18,Math.PI/4.2,.6,1);C.position.set(0,3.4,2.6),C.target.position.set(0,.4,0),C.castShadow=!1,o.add(C),o.add(C.target);const P=-.6,z=-.9,M=8,O=4.5,j=12,Q=z+O,q=P+j,ce=(P+q)/2,y=(z+Q)/2,v=new Es({color:2363912,roughness:.95,metalness:.02}),W=new Es({color:1969670,roughness:.96,metalness:.02}),ie=new Es({color:1707012,roughness:.98}),ue=new Es({color:1313284,roughness:.98}),ge=new Es({color:3808522,roughness:.85,metalness:.05}),xe=new Ft(new Vn(M,j),ie);xe.rotation.x=-Math.PI/2,xe.position.set(0,z,ce),xe.receiveShadow=!0,o.add(xe);const ae=new Ft(new Vn(M,j),ue);ae.rotation.x=Math.PI/2,ae.position.set(0,Q,ce),o.add(ae);const de=new Ft(new Vn(M,O),W);de.position.set(0,y,P),de.receiveShadow=!0,o.add(de);const be=new Ft(new Vn(M,O),v);be.rotation.y=Math.PI,be.position.set(0,y,q),o.add(be);const we=new Ft(new Vn(j,O),v);we.rotation.y=Math.PI/2,we.position.set(-M/2,y,ce),we.receiveShadow=!0,o.add(we);const ye=new Ft(new Vn(j,O),v);ye.rotation.y=-Math.PI/2,ye.position.set(M/2,y,ce),ye.receiveShadow=!0,o.add(ye);function Ee(V){const Se=new Ft(new ks(.66,.06,.8),ge);Se.position.set(V,-.03,-.2),Se.castShadow=!0,Se.receiveShadow=!0,o.add(Se);const le=new Ft(new ks(.5,.16,.34),ge);le.position.set(V,-.14,-.42),le.castShadow=!0,o.add(le)}const $e=1.12,Ze=-2.24;d=J.map((V,Se)=>{var _e;const le=L.totalNightsCleared>=(Se+1)*5,Re=X(Se,le),Te=Ze+Se*$e;return Re.position.set(Te,.21,0),Re.scale.set(.001,.001,.001),Ee(Te),Re.userData.unlocked=le,Re.userData.idleRotSpeed=.005,o.add(Re),(_e=window.createjs)!=null&&_e.Tween?createjs.Tween.get(Re.scale).wait(Se*130+250).to({x:1,y:1,z:1},520,createjs.Ease.backOut):Re.scale.set(1,1,1),Re});const lt=va().acknowledgedTrophies??0;if(F.value>lt){p=F.value-1,ls({acknowledgedTrophies:F.value});const V=p*130+250+520;I=setTimeout($,V)}c=new J1(l,a.domElement),c.target.set(0,.35,0),c.enablePan=!1,c.minDistance=2,c.maxDistance=10,c.maxPolarAngle=Math.PI/2+.15,c.enableDamping=!0,c.dampingFactor=.08,c.update(),navigator.xr&&navigator.xr.isSessionSupported("immersive-vr").then(V=>{s.value=V}).catch(()=>{s.value=!1}),window.addEventListener("resize",fe),a.setAnimationLoop(ve)}function $(){var g;if(p<0||!d[p])return;const pe=d[p];if(cs("trophy-unlock"),r.value=((g=J[p])==null?void 0:g.name)??null,x=setTimeout(()=>{r.value=null},5e3),T=new Za(16764778,0,6,2),T.position.set(pe.position.x,pe.position.y+.45,.6),o.add(T),L.reducedMotion){T.intensity=5;return}const me=new Float32Array(cc*3);D=[];const R=pe.position.x,U=pe.position.y+.4;for(let C=0;C<cc;C++){me[C*3]=R,me[C*3+1]=U,me[C*3+2]=0;const P=Math.random()*Math.PI*2,z=.4+Math.random()*1.1;D.push({x:Math.cos(P)*z*.5,y:1+Math.random()*1.8,z:Math.sin(P)*z*.5})}const Y=new vn;Y.setAttribute("position",new $n(me,3));const ne=new bm({color:16765562,size:.05,transparent:!0,opacity:1,blending:Rc,depthWrite:!1});N=new OM(Y,ne),o.add(N),A=performance.now(),b=!0}function oe(){b=!1,N&&(o.remove(N),N.geometry.dispose(),N.material.dispose(),N=null),T&&(o.remove(T),T=null)}function ve(){const pe=performance.now(),me=Math.min((pe-w)/1e3,.05);w=pe,c.update(),i.value==="webxr"&&tt();for(const R of d)R.rotation.y+=R.userData.idleRotSpeed;if(b){const R=(pe-A)/CA;if(R>=1)oe();else{T.intensity=Math.sin(R*Math.PI)*16;const U=d[p];if(U){const ne=1+Math.sin(R*Math.PI)*.12;U.scale.set(ne,ne,ne)}const Y=N.geometry.attributes.position.array;for(let ne=0;ne<cc;ne++){const g=D[ne];Y[ne*3]+=g.x*me,Y[ne*3+1]+=g.y*me,Y[ne*3+2]+=g.z*me,g.y-=2.6*me}N.geometry.attributes.position.needsUpdate=!0,N.material.opacity=1-R}}i.value==="anaglyph"&&u?u.render(o,l):a.render(o,l)}function Ae(pe){if(pe!==i.value){if(a.xr.getSession()&&a.xr.getSession().end(),pe==="anaglyph"&&!u){u=new mA(a);const me=e.value.clientWidth,R=e.value.clientHeight;u.setSize(me,R)}a.xr.enabled=!1,i.value=pe}}async function De(){if(!(!s.value||f||!navigator.xr)){S.copy(l.position),m.copy(c.target);try{const pe=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]});a.xr.enabled=!0,a.xr.setReferenceSpaceType("local-floor"),await a.xr.setSession(pe);const me=a.xr.getReferenceSpace();if(me&&typeof XRRigidTransform<"u"){const R=new XRRigidTransform({x:0,y:0,z:-wh});a.xr.setReferenceSpace(me.getOffsetReferenceSpace(R))}f=pe,i.value="webxr",c.enabled=!1,_=!1,ot(),pe.addEventListener("end",We)}catch(pe){console.warn("VR konnte nicht gestartet werden:",pe),a.xr.enabled=!1,i.value="standard"}}}function Ie(){var pe,me;(me=(pe=a==null?void 0:a.xr)==null?void 0:pe.getSession())==null||me.end()}function tt(){var me,R,U;if(!f)return;let pe=!1;for(const Y of f.inputSources)if((U=(R=(me=Y.gamepad)==null?void 0:me.buttons)==null?void 0:R[5])!=null&&U.pressed){pe=!0;break}pe&&!_&&Ie(),_=pe}function ot(){const pe=document.createElement("canvas");pe.width=1024,pe.height=256;const me=pe.getContext("2d");me.fillStyle="rgba(20, 8, 2, 0.85)",me.fillRect(0,0,pe.width,pe.height),me.strokeStyle="#c8861f",me.lineWidth=6,me.strokeRect(3,3,pe.width-6,pe.height-6),me.fillStyle="#ffe6ac",me.textAlign="center",me.textBaseline="middle",me.font='bold 70px "Courier New", monospace',me.fillText("Taste B drücken",pe.width/2,95),me.font='50px "Courier New", monospace',me.fillStyle="#d4a96a",me.fillText("um VR zu verlassen",pe.width/2,175);const R=new BM(pe),U=new sf({map:R,transparent:!0,depthTest:!1});h=new Ft(new Vn(1.6,.4),U),h.position.set(0,2,wh-1.6),h.renderOrder=999,o.add(h)}function We(){var pe;_=!1,h&&(o.remove(h),h.geometry.dispose(),(pe=h.material.map)==null||pe.dispose(),h.material.dispose(),h=null),f&&(f.removeEventListener("end",We),f=null),a.xr.enabled=!1,c.enabled=!0,l.position.copy(S),c.target.copy(m),c.update(),i.value==="webxr"&&(i.value="standard"),fe()}function fe(){if(!a||!l||!e.value)return;const pe=e.value.clientWidth,me=e.value.clientHeight;l.aspect=pe/me,l.updateProjectionMatrix(),a.setSize(pe,me,!1),u&&u.setSize(pe,me)}function Ce(){Kt("MAIN_MENU")}function Me(){$p(!L.menuSoundMuted)}function Ve(){const pe=k.value;pe&&(L.currentNight=pe,Kt("NIGHT_INTRO"))}return _n(()=>{Z()}),En(()=>{var pe;I&&clearTimeout(I),x&&clearTimeout(x),oe(),(pe=a==null?void 0:a.xr)!=null&&pe.getSession()?a.xr.getSession().end():h&&We(),a==null||a.setAnimationLoop(null),window.removeEventListener("resize",fe),c==null||c.dispose(),u==null||u.dispose(),a==null||a.dispose()}),(pe,me)=>(Oe(),He("div",{ref_key:"containerRef",ref:t,class:"trophy-room"},[G("canvas",{ref_key:"canvasRef",ref:e,class:"trophy-canvas"},null,512),me[7]||(me[7]=G("header",{class:"trophy-hud-top"},[G("span",{class:"trophy-title"},"— Trophäenraum —")],-1)),G("aside",gA,[G("p",_A,it(F.value>=5?"Vollständige Sammlung":"Trophäensammlung"),1),(Oe(),He(kt,null,di(J,(R,U)=>G("div",{key:R.night,class:Bt(["legend-item",{"legend-item--locked":U>=F.value}])},[G("span",vA,"Trophäe "+it(R.night),1),G("span",{class:Bt(["legend-name",{"legend-name--locked":U>=F.value}])},it(R.name),3)],2)),64)),F.value<5?(Oe(),He("p",xA," Noch "+it(B.value)+" "+it(B.value===1?"Nacht":"Nächte")+" bis zur nächsten Trophäe ",1)):fn("",!0)]),G("nav",SA,[G("button",{class:"mute-btn",onClick:Me,title:Ye(L).menuSoundMuted?"Menüsound einschalten":"Menüsound ausschalten","aria-label":"Menüsound stummschalten","aria-pressed":Ye(L).menuSoundMuted},[Ye(L).menuSoundMuted?(Oe(),He("svg",yA,[...me[4]||(me[4]=[G("path",{fill:"currentColor",d:"M12,4L9.91,6.09L12,8.18M19,12C19,12.72 18.84,13.4 18.57,14L20.08,15.5C20.67,14.46 21,13.27 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.48,12.43 16.5,12.22 16.5,12M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.5C15.58,18 14.84,18.41 14,18.71V20.77C15.39,20.41 16.65,19.72 17.72,18.81L19.73,20.82L21,19.55L4.27,3M12,5.77V10.8L9,7.8L12,5.77Z"},null,-1)])])):(Oe(),He("svg",bA,[...me[3]||(me[3]=[G("path",{fill:"currentColor",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z"},null,-1)])]))],8,MA),G("button",{class:Bt(["mode-btn",{active:i.value==="standard"}]),onClick:me[0]||(me[0]=R=>Ae("standard"))},"Standard 3D",2),G("button",{class:Bt(["mode-btn",{active:i.value==="anaglyph"}]),onClick:me[1]||(me[1]=R=>Ae("anaglyph")),title:"Rot-Cyan-Brille erforderlich"},"Anaglyph",2),G("button",{class:Bt(["mode-btn",{active:i.value==="webxr",disabled:!s.value&&i.value!=="webxr"}]),disabled:!s.value&&i.value!=="webxr",title:i.value==="webxr"?"VR-Ansicht beenden":s.value?"VR-Headset erforderlich":"WebXR nicht unterstützt",onClick:me[2]||(me[2]=R=>i.value==="webxr"?Ie():De())},it(i.value==="webxr"?"VR verlassen":"WebXR / VR"),11,EA)]),G("footer",TA,[G("button",{class:"nav-btn secondary",onClick:Ce},"Hauptmenü"),k.value!==void 0?(Oe(),He("button",{key:0,class:"nav-btn primary",onClick:Ve},"Nacht "+it(k.value)+" starten",1)):fn("",!0)]),At(vr,{name:"celebrate-fade"},{default:Us(()=>[r.value?(Oe(),He("div",{key:0,class:Bt(["celebrate-banner",{"celebrate-banner--static":Ye(L).reducedMotion}]),role:"status","aria-live":"polite"},[me[5]||(me[5]=G("span",{class:"celebrate-star","aria-hidden":"true"},"★",-1)),me[6]||(me[6]=Fs(" Neue Trophäe freigeschaltet ",-1)),G("span",AA,it(r.value),1)],2)):fn("",!0)]),_:1}),At(vr,{name:"hint-fade"},{default:Us(()=>[i.value==="anaglyph"?(Oe(),He("div",wA," Rot-Cyan-3D-Brille aufsetzen ")):fn("",!0)]),_:1})],512))}},PA=dn(RA,[["__scopeId","data-v-37ea3985"]]),LA={key:8,class:"placeholder-screen"},DA={__name:"App",setup(n){return fi(()=>L.gameState,e=>{e==="MAIN_MENU"?(xr(),dd(Tt("/assets/audio/foxscream.mp3"),.15)):e==="TROPHY_ROOM"?(xr(),dd(Tt("/assets/audio/countrycoop.mp3"),.12)):qp()},{immediate:!0}),(e,t)=>(Oe(),He("div",{id:"game-root",class:Bt({"reduced-motion":Ye(L).reducedMotion})},[Ye(L).gameState==="LOADING"?(Oe(),ni(Y_,{key:0})):Ye(L).gameState==="MAIN_MENU"?(Oe(),ni(Ov,{key:1})):Ye(L).gameState==="NIGHT_INTRO"?(Oe(),ni(ax,{key:2})):Ye(L).gameState==="PLAYING"?(Oe(),ni(vS,{key:3})):Ye(L).gameState==="NIGHT_CLEAR"?(Oe(),ni(ES,{key:4})):Ye(L).gameState==="POWER_OUT"?(Oe(),ni(AS,{key:5})):Ye(L).gameState==="GAME_OVER"?(Oe(),ni(PS,{key:6})):Ye(L).gameState==="TROPHY_ROOM"?(Oe(),ni(PA,{key:7})):(Oe(),He("div",LA,[G("p",null,it(Ye(L).gameState),1)]))],2))}},Ch=localStorage.getItem("fnhh_save");if(Ch)try{const n=JSON.parse(Ch);n.nightsCleared&&(L.nightsCleared=n.nightsCleared),n.bestBattery&&(L.bestBattery=n.bestBattery),typeof n.totalNightsCleared=="number"&&(L.totalNightsCleared=n.totalNightsCleared)}catch{}const Om=va();L.menuSoundMuted=!!Om.menuSoundMuted;L.reducedMotion=!!Om.reducedMotion;function Bm(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}Bm();window.addEventListener("resize",Bm);x_(DA).mount("#app");
