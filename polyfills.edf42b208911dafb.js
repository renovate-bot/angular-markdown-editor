(self.webpackChunkangular_markdown_editor=self.webpackChunkangular_markdown_editor||[]).push([[429],{435:(ee,ue,ce)=>{"use strict";ce(539),ce(583)},539:()=>{!function(){if(!(typeof window>"u"))try{var ee=new window.CustomEvent("test",{cancelable:!0});if(ee.preventDefault(),!0!==ee.defaultPrevented)throw new Error("Could not prevent default")}catch{var ue=function(ye,te){var oe,pe;return(te=te||{}).bubbles=!!te.bubbles,te.cancelable=!!te.cancelable,(oe=document.createEvent("CustomEvent")).initCustomEvent(ye,te.bubbles,te.cancelable,te.detail),pe=oe.preventDefault,oe.preventDefault=function(){pe.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch{this.defaultPrevented=!0}},oe};ue.prototype=window.Event.prototype,window.CustomEvent=ue}}()},583:()=>{"use strict";!function(e){const t=e.performance;function c(H){t&&t.mark&&t.mark(H)}function s(H,r){t&&t.measure&&t.measure(H,r)}c("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function l(H){return a+H}const y=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(y||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}class _{constructor(r,n){this._parent=r,this._name=n?n.name||"unnamed":"<root>",this._properties=n&&n.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,n)}static assertZonePatched(){if(e.Promise!==ae.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let r=_.current;for(;r.parent;)r=r.parent;return r}static get current(){return U.zone}static get currentTask(){return ie}static __load_patch(r,n,o=!1){if(ae.hasOwnProperty(r)){if(!o&&y)throw Error("Already loaded patch: "+r)}else if(!e["__Zone_disable_"+r]){const b="Zone:"+r;c(b),ae[r]=n(e,_,q),s(b,b)}}get parent(){return this._parent}get name(){return this._name}get(r){const n=this.getZoneWith(r);if(n)return n._properties[r]}getZoneWith(r){let n=this;for(;n;){if(n._properties.hasOwnProperty(r))return n;n=n._parent}return null}fork(r){if(!r)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,r)}wrap(r,n){if("function"!=typeof r)throw new Error("Expecting function got: "+r);const o=this._zoneDelegate.intercept(this,r,n),b=this;return function(){return b.runGuarded(o,this,arguments,n)}}run(r,n,o,b){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,r,n,o,b)}finally{U=U.parent}}runGuarded(r,n=null,o,b){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,r,n,o,b)}catch(G){if(this._zoneDelegate.handleError(this,G))throw G}}finally{U=U.parent}}runTask(r,n,o){if(r.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(r.zone||$).name+"; Execution: "+this.name+")");if(r.state===j&&(r.type===J||r.type===w))return;const b=r.state!=p;b&&r._transitionTo(p,M),r.runCount++;const G=ie;ie=r,U={parent:U,zone:this};try{r.type==w&&r.data&&!r.data.isPeriodic&&(r.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,r,n,o)}catch(re){if(this._zoneDelegate.handleError(this,re))throw re}}finally{r.state!==j&&r.state!==d&&(r.type==J||r.data&&r.data.isPeriodic?b&&r._transitionTo(M,p):(r.runCount=0,this._updateTaskCount(r,-1),b&&r._transitionTo(j,p,j))),U=U.parent,ie=G}}scheduleTask(r){if(r.zone&&r.zone!==this){let o=this;for(;o;){if(o===r.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${r.zone.name}`);o=o.parent}}r._transitionTo(z,j);const n=[];r._zoneDelegates=n,r._zone=this;try{r=this._zoneDelegate.scheduleTask(this,r)}catch(o){throw r._transitionTo(d,z,j),this._zoneDelegate.handleError(this,o),o}return r._zoneDelegates===n&&this._updateTaskCount(r,1),r.state==z&&r._transitionTo(M,z),r}scheduleMicroTask(r,n,o,b){return this.scheduleTask(new m(N,r,n,o,b,void 0))}scheduleMacroTask(r,n,o,b,G){return this.scheduleTask(new m(w,r,n,o,b,G))}scheduleEventTask(r,n,o,b,G){return this.scheduleTask(new m(J,r,n,o,b,G))}cancelTask(r){if(r.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(r.zone||$).name+"; Execution: "+this.name+")");r._transitionTo(x,M,p);try{this._zoneDelegate.cancelTask(this,r)}catch(n){throw r._transitionTo(d,x),this._zoneDelegate.handleError(this,n),n}return this._updateTaskCount(r,-1),r._transitionTo(j,x),r.runCount=0,r}_updateTaskCount(r,n){const o=r._zoneDelegates;-1==n&&(r._zoneDelegates=null);for(let b=0;b<o.length;b++)o[b]._updateTaskCount(r.type,n)}}_.__symbol__=l;const P={name:"",onHasTask:(H,r,n,o)=>H.hasTask(n,o),onScheduleTask:(H,r,n,o)=>H.scheduleTask(n,o),onInvokeTask:(H,r,n,o,b,G)=>H.invokeTask(n,o,b,G),onCancelTask:(H,r,n,o)=>H.cancelTask(n,o)};class k{constructor(r,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=r,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const b=o&&o.onHasTask,G=n&&n._hasTaskZS;(b||G)&&(this._hasTaskZS=b?o:P,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=r,o.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this.zone))}fork(r,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,r,n):new _(r,n)}intercept(r,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,r,n,o):n}invoke(r,n,o,b,G){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,r,n,o,b,G):n.apply(o,b)}handleError(r,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,r,n)}scheduleTask(r,n){let o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,r,n),o||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=N)throw new Error("Task is missing scheduleFn.");C(n)}return o}invokeTask(r,n,o,b){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,r,n,o,b):n.callback.apply(o,b)}cancelTask(r,n){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,r,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o}hasTask(r,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,r,n)}catch(o){this.handleError(r,o)}}_updateTaskCount(r,n){const o=this._taskCounts,b=o[r],G=o[r]=b+n;if(G<0)throw new Error("More tasks executed then were scheduled.");if(0==b||0==G){const re={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:r};this.hasTask(this.zone,re)}}}class m{constructor(r,n,o,b,G,re){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=n,this.data=b,this.scheduleFn=G,this.cancelFn=re,!o)throw new Error("callback is not defined");this.callback=o;const u=this;r===J&&b&&b.useG?this.invoke=m.invokeTask:this.invoke=function(){return m.invokeTask.call(e,u,this,arguments)}}static invokeTask(r,n,o){r||(r=this),Q++;try{return r.runCount++,r.zone.runTask(r,n,o)}finally{1==Q&&E(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(j,z)}_transitionTo(r,n,o){if(this._state!==n&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${r}', expecting state '${n}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=r,r==j&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const I=l("setTimeout"),S=l("Promise"),Z=l("then");let K,F=[],A=!1;function X(H){if(K||e[S]&&(K=e[S].resolve(0)),K){let r=K[Z];r||(r=K.then),r.call(K,H)}else e[I](H,0)}function C(H){0===Q&&0===F.length&&X(E),H&&F.push(H)}function E(){if(!A){for(A=!0;F.length;){const H=F;F=[];for(let r=0;r<H.length;r++){const n=H[r];try{n.zone.runTask(n,null,null)}catch(o){q.onUnhandledError(o)}}}q.microtaskDrainDone(),A=!1}}const $={name:"NO ZONE"},j="notScheduled",z="scheduling",M="scheduled",p="running",x="canceling",d="unknown",N="microTask",w="macroTask",J="eventTask",ae={},q={symbol:l,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:C,showUncaughtError:()=>!_[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:X};let U={parent:null,zone:new _(null,null)},ie=null,Q=0;function W(){}s("Zone","Zone"),e.Zone=_}(typeof window<"u"&&window||typeof self<"u"&&self||global);const ee=Object.getOwnPropertyDescriptor,ue=Object.defineProperty,ce=Object.getPrototypeOf,ye=Object.create,te=Array.prototype.slice,oe="addEventListener",pe="removeEventListener",Re=Zone.__symbol__(oe),Ie=Zone.__symbol__(pe),fe="true",he="false",Pe=Zone.__symbol__("");function Me(e,t){return Zone.current.wrap(e,t)}function Le(e,t,c,s,a){return Zone.current.scheduleMacroTask(e,t,c,s,a)}const L=Zone.__symbol__,De=typeof window<"u",ge=De?window:void 0,Y=De&&ge||"object"==typeof self&&self||global;function Ae(e,t){for(let c=e.length-1;c>=0;c--)"function"==typeof e[c]&&(e[c]=Me(e[c],t+"_"+c));return e}function Be(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Fe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Oe=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),je=!Oe&&!Fe&&!(!De||!ge.HTMLElement),Ue=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Fe&&!(!De||!ge.HTMLElement),Se={},We=function(e){if(!(e=e||Y.event))return;let t=Se[e.type];t||(t=Se[e.type]=L("ON_PROPERTY"+e.type));const c=this||e.target||Y,s=c[t];let a;if(je&&c===ge&&"error"===e.type){const l=e;a=s&&s.call(this,l.message,l.filename,l.lineno,l.colno,l.error),!0===a&&e.preventDefault()}else a=s&&s.apply(this,arguments),null!=a&&!a&&e.preventDefault();return a};function Xe(e,t,c){let s=ee(e,t);if(!s&&c&&ee(c,t)&&(s={enumerable:!0,configurable:!0}),!s||!s.configurable)return;const a=L("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete s.writable,delete s.value;const l=s.get,y=s.set,_=t.slice(2);let P=Se[_];P||(P=Se[_]=L("ON_PROPERTY"+_)),s.set=function(k){let m=this;!m&&e===Y&&(m=Y),m&&("function"==typeof m[P]&&m.removeEventListener(_,We),y&&y.call(m,null),m[P]=k,"function"==typeof k&&m.addEventListener(_,We,!1))},s.get=function(){let k=this;if(!k&&e===Y&&(k=Y),!k)return null;const m=k[P];if(m)return m;if(l){let I=l.call(this);if(I)return s.set.call(this,I),"function"==typeof k.removeAttribute&&k.removeAttribute(t),I}return null},ue(e,t,s),e[a]=!0}function ze(e,t,c){if(t)for(let s=0;s<t.length;s++)Xe(e,"on"+t[s],c);else{const s=[];for(const a in e)"on"==a.slice(0,2)&&s.push(a);for(let a=0;a<s.length;a++)Xe(e,s[a],c)}}const se=L("originalInstance");function we(e){const t=Y[e];if(!t)return;Y[L(e)]=t,Y[e]=function(){const a=Ae(arguments,e);switch(a.length){case 0:this[se]=new t;break;case 1:this[se]=new t(a[0]);break;case 2:this[se]=new t(a[0],a[1]);break;case 3:this[se]=new t(a[0],a[1],a[2]);break;case 4:this[se]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},_e(Y[e],t);const c=new t(function(){});let s;for(s in c)"XMLHttpRequest"===e&&"responseBlob"===s||function(a){"function"==typeof c[a]?Y[e].prototype[a]=function(){return this[se][a].apply(this[se],arguments)}:ue(Y[e].prototype,a,{set:function(l){"function"==typeof l?(this[se][a]=Me(l,e+"."+a),_e(this[se][a],l)):this[se][a]=l},get:function(){return this[se][a]}})}(s);for(s in t)"prototype"!==s&&t.hasOwnProperty(s)&&(Y[e][s]=t[s])}function de(e,t,c){let s=e;for(;s&&!s.hasOwnProperty(t);)s=ce(s);!s&&e[t]&&(s=e);const a=L(t);let l=null;if(s&&(!(l=s[a])||!s.hasOwnProperty(a))){l=s[a]=s[t];if(Be(s&&ee(s,t))){const _=c(l,a,t);s[t]=function(){return _(this,arguments)},_e(s[t],l)}}return l}function lt(e,t,c){let s=null;function a(l){const y=l.data;return y.args[y.cbIdx]=function(){l.invoke.apply(this,arguments)},s.apply(y.target,y.args),l}s=de(e,t,l=>function(y,_){const P=c(y,_);return P.cbIdx>=0&&"function"==typeof _[P.cbIdx]?Le(P.name,_[P.cbIdx],P,a):l.apply(y,_)})}function _e(e,t){e[L("OriginalDelegate")]=t}let qe=!1,He=!1;function ft(){if(qe)return He;qe=!0;try{const e=ge.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(He=!0)}catch{}return He}Zone.__load_patch("ZoneAwarePromise",(e,t,c)=>{const s=Object.getOwnPropertyDescriptor,a=Object.defineProperty;const y=c.symbol,_=[],P=!0===e[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],k=y("Promise"),m=y("then");c.onUnhandledError=u=>{if(c.showUncaughtError()){const f=u&&u.rejection;f?console.error("Unhandled Promise rejection:",f instanceof Error?f.message:f,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",f,f instanceof Error?f.stack:void 0):console.error(u)}},c.microtaskDrainDone=()=>{for(;_.length;){const u=_.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(f){Z(f)}}};const S=y("unhandledPromiseRejectionHandler");function Z(u){c.onUnhandledError(u);try{const f=t[S];"function"==typeof f&&f.call(this,u)}catch{}}function F(u){return u&&u.then}function A(u){return u}function K(u){return n.reject(u)}const X=y("state"),C=y("value"),E=y("finally"),$=y("parentPromiseValue"),j=y("parentPromiseState"),M=null,p=!0,x=!1;function N(u,f){return i=>{try{q(u,f,i)}catch(h){q(u,!1,h)}}}const w=function(){let u=!1;return function(i){return function(){u||(u=!0,i.apply(null,arguments))}}},ae=y("currentTaskTrace");function q(u,f,i){const h=w();if(u===i)throw new TypeError("Promise resolved with itself");if(u[X]===M){let g=null;try{("object"==typeof i||"function"==typeof i)&&(g=i&&i.then)}catch(v){return h(()=>{q(u,!1,v)})(),u}if(f!==x&&i instanceof n&&i.hasOwnProperty(X)&&i.hasOwnProperty(C)&&i[X]!==M)ie(i),q(u,i[X],i[C]);else if(f!==x&&"function"==typeof g)try{g.call(i,h(N(u,f)),h(N(u,!1)))}catch(v){h(()=>{q(u,!1,v)})()}else{u[X]=f;const v=u[C];if(u[C]=i,u[E]===E&&f===p&&(u[X]=u[j],u[C]=u[$]),f===x&&i instanceof Error){const T=t.currentTask&&t.currentTask.data&&t.currentTask.data.__creationTrace__;T&&a(i,ae,{configurable:!0,enumerable:!1,writable:!0,value:T})}for(let T=0;T<v.length;)Q(u,v[T++],v[T++],v[T++],v[T++]);if(0==v.length&&f==x){u[X]=0;let T=i;try{throw new Error("Uncaught (in promise): "+function l(u){if(u&&u.toString===Object.prototype.toString)return(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u);return u?u.toString():Object.prototype.toString.call(u)}(i)+(i&&i.stack?"\n"+i.stack:""))}catch(R){T=R}P&&(T.throwOriginal=!0),T.rejection=i,T.promise=u,T.zone=t.current,T.task=t.currentTask,_.push(T),c.scheduleMicroTask()}}}return u}const U=y("rejectionHandledHandler");function ie(u){if(0===u[X]){try{const f=t[U];f&&"function"==typeof f&&f.call(this,{rejection:u[C],promise:u})}catch{}u[X]=x;for(let f=0;f<_.length;f++)u===_[f].promise&&_.splice(f,1)}}function Q(u,f,i,h,g){ie(u);const v=u[X],T=v?"function"==typeof h?h:A:"function"==typeof g?g:K;f.scheduleMicroTask("Promise.then",()=>{try{const R=u[C],D=!!i&&E===i[E];D&&(i[$]=R,i[j]=v);const O=f.run(T,void 0,D&&T!==K&&T!==A?[]:[R]);q(i,!0,O)}catch(R){q(i,!1,R)}},i)}const H=function(){},r=e.AggregateError;class n{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(f){return q(new this(null),p,f)}static reject(f){return q(new this(null),x,f)}static any(f){if(!f||"function"!=typeof f[Symbol.iterator])return Promise.reject(new r([],"All promises were rejected"));const i=[];let h=0;try{for(let T of f)h++,i.push(n.resolve(T))}catch{return Promise.reject(new r([],"All promises were rejected"))}if(0===h)return Promise.reject(new r([],"All promises were rejected"));let g=!1;const v=[];return new n((T,R)=>{for(let D=0;D<i.length;D++)i[D].then(O=>{g||(g=!0,T(O))},O=>{v.push(O),h--,0===h&&(g=!0,R(new r(v,"All promises were rejected")))})})}static race(f){let i,h,g=new this((R,D)=>{i=R,h=D});function v(R){i(R)}function T(R){h(R)}for(let R of f)F(R)||(R=this.resolve(R)),R.then(v,T);return g}static all(f){return n.allWithCallback(f)}static allSettled(f){return(this&&this.prototype instanceof n?this:n).allWithCallback(f,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(f,i){let h,g,v=new this((O,V)=>{h=O,g=V}),T=2,R=0;const D=[];for(let O of f){F(O)||(O=this.resolve(O));const V=R;try{O.then(B=>{D[V]=i?i.thenCallback(B):B,T--,0===T&&h(D)},B=>{i?(D[V]=i.errorCallback(B),T--,0===T&&h(D)):g(B)})}catch(B){g(B)}T++,R++}return T-=2,0===T&&h(D),v}constructor(f){const i=this;if(!(i instanceof n))throw new Error("Must be an instanceof Promise.");i[X]=M,i[C]=[];try{const h=w();f&&f(h(N(i,p)),h(N(i,x)))}catch(h){q(i,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return n}then(f,i){var h;let g=null===(h=this.constructor)||void 0===h?void 0:h[Symbol.species];(!g||"function"!=typeof g)&&(g=this.constructor||n);const v=new g(H),T=t.current;return this[X]==M?this[C].push(T,v,f,i):Q(this,T,v,f,i),v}catch(f){return this.then(null,f)}finally(f){var i;let h=null===(i=this.constructor)||void 0===i?void 0:i[Symbol.species];(!h||"function"!=typeof h)&&(h=n);const g=new h(H);g[E]=E;const v=t.current;return this[X]==M?this[C].push(v,g,f,f):Q(this,v,g,f,f),g}}n.resolve=n.resolve,n.reject=n.reject,n.race=n.race,n.all=n.all;const o=e[k]=e.Promise;e.Promise=n;const b=y("thenPatched");function G(u){const f=u.prototype,i=s(f,"then");if(i&&(!1===i.writable||!i.configurable))return;const h=f.then;f[m]=h,u.prototype.then=function(g,v){return new n((R,D)=>{h.call(this,R,D)}).then(g,v)},u[b]=!0}return c.patchThen=G,o&&(G(o),de(e,"fetch",u=>function re(u){return function(f,i){let h=u.apply(f,i);if(h instanceof n)return h;let g=h.constructor;return g[b]||G(g),h}}(u))),Promise[t.__symbol__("uncaughtPromiseErrors")]=_,n}),Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,c=L("OriginalDelegate"),s=L("Promise"),a=L("Error"),l=function(){if("function"==typeof this){const k=this[c];if(k)return"function"==typeof k?t.call(k):Object.prototype.toString.call(k);if(this===Promise){const m=e[s];if(m)return t.call(m)}if(this===Error){const m=e[a];if(m)return t.call(m)}}return t.call(this)};l[c]=t,Function.prototype.toString=l;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}});let ke=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ke=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ke=!1}const ht={useG:!0},ne={},Ye={},$e=new RegExp("^"+Pe+"(\\w+)(true|false)$"),Ke=L("propagationStopped");function Je(e,t){const c=(t?t(e):e)+he,s=(t?t(e):e)+fe,a=Pe+c,l=Pe+s;ne[e]={},ne[e][he]=a,ne[e][fe]=l}function dt(e,t,c,s){const a=s&&s.add||oe,l=s&&s.rm||pe,y=s&&s.listeners||"eventListeners",_=s&&s.rmAll||"removeAllListeners",P=L(a),k="."+a+":",m="prependListener",S=function(C,E,$){if(C.isRemoved)return;const j=C.callback;let z;"object"==typeof j&&j.handleEvent&&(C.callback=p=>j.handleEvent(p),C.originalDelegate=j);try{C.invoke(C,E,[$])}catch(p){z=p}const M=C.options;if(M&&"object"==typeof M&&M.once){const p=C.originalDelegate?C.originalDelegate:C.callback;E[l].call(E,$.type,p,M)}return z};function Z(C,E,$){if(!(E=E||e.event))return;const j=C||E.target||e,z=j[ne[E.type][$?fe:he]];if(z){const M=[];if(1===z.length){const p=S(z[0],j,E);p&&M.push(p)}else{const p=z.slice();for(let x=0;x<p.length&&(!E||!0!==E[Ke]);x++){const d=S(p[x],j,E);d&&M.push(d)}}if(1===M.length)throw M[0];for(let p=0;p<M.length;p++){const x=M[p];t.nativeScheduleMicroTask(()=>{throw x})}}}const F=function(C){return Z(this,C,!1)},A=function(C){return Z(this,C,!0)};function K(C,E){if(!C)return!1;let $=!0;E&&void 0!==E.useG&&($=E.useG);const j=E&&E.vh;let z=!0;E&&void 0!==E.chkDup&&(z=E.chkDup);let M=!1;E&&void 0!==E.rt&&(M=E.rt);let p=C;for(;p&&!p.hasOwnProperty(a);)p=ce(p);if(!p&&C[a]&&(p=C),!p||p[P])return!1;const x=E&&E.eventNameToString,d={},N=p[P]=p[a],w=p[L(l)]=p[l],J=p[L(y)]=p[y],ae=p[L(_)]=p[_];let q;function U(i,h){return!ke&&"object"==typeof i&&i?!!i.capture:ke&&h?"boolean"==typeof i?{capture:i,passive:!0}:i?"object"==typeof i&&!1!==i.passive?Object.assign(Object.assign({},i),{passive:!0}):i:{passive:!0}:i}E&&E.prepend&&(q=p[L(E.prepend)]=p[E.prepend]);const n=$?function(i){if(!d.isExisting)return N.call(d.target,d.eventName,d.capture?A:F,d.options)}:function(i){return N.call(d.target,d.eventName,i.invoke,d.options)},o=$?function(i){if(!i.isRemoved){const h=ne[i.eventName];let g;h&&(g=h[i.capture?fe:he]);const v=g&&i.target[g];if(v)for(let T=0;T<v.length;T++)if(v[T]===i){v.splice(T,1),i.isRemoved=!0,0===v.length&&(i.allRemoved=!0,i.target[g]=null);break}}if(i.allRemoved)return w.call(i.target,i.eventName,i.capture?A:F,i.options)}:function(i){return w.call(i.target,i.eventName,i.invoke,i.options)},G=E&&E.diff?E.diff:function(i,h){const g=typeof h;return"function"===g&&i.callback===h||"object"===g&&i.originalDelegate===h},re=Zone[L("UNPATCHED_EVENTS")],u=e[L("PASSIVE_EVENTS")],f=function(i,h,g,v,T=!1,R=!1){return function(){const D=this||e;let O=arguments[0];E&&E.transferEventName&&(O=E.transferEventName(O));let V=arguments[1];if(!V)return i.apply(this,arguments);if(Oe&&"uncaughtException"===O)return i.apply(this,arguments);let B=!1;if("function"!=typeof V){if(!V.handleEvent)return i.apply(this,arguments);B=!0}if(j&&!j(i,V,D,arguments))return;const Ee=ke&&!!u&&-1!==u.indexOf(O),le=U(arguments[2],Ee);if(re)for(let me=0;me<re.length;me++)if(O===re[me])return Ee?i.call(D,O,V,le):i.apply(this,arguments);const Ge=!!le&&("boolean"==typeof le||le.capture),nt=!(!le||"object"!=typeof le)&&le.once,gt=Zone.current;let Ve=ne[O];Ve||(Je(O,x),Ve=ne[O]);const rt=Ve[Ge?fe:he];let Ne,be=D[rt],ot=!1;if(be){if(ot=!0,z)for(let me=0;me<be.length;me++)if(G(be[me],V))return}else be=D[rt]=[];const st=D.constructor.name,it=Ye[st];it&&(Ne=it[O]),Ne||(Ne=st+h+(x?x(O):O)),d.options=le,nt&&(d.options.once=!1),d.target=D,d.capture=Ge,d.eventName=O,d.isExisting=ot;const Ce=$?ht:void 0;Ce&&(Ce.taskData=d);const Te=gt.scheduleEventTask(Ne,V,Ce,g,v);return d.target=null,Ce&&(Ce.taskData=null),nt&&(le.once=!0),!ke&&"boolean"==typeof Te.options||(Te.options=le),Te.target=D,Te.capture=Ge,Te.eventName=O,B&&(Te.originalDelegate=V),R?be.unshift(Te):be.push(Te),T?D:void 0}};return p[a]=f(N,k,n,o,M),q&&(p[m]=f(q,".prependListener:",function(i){return q.call(d.target,d.eventName,i.invoke,d.options)},o,M,!0)),p[l]=function(){const i=this||e;let h=arguments[0];E&&E.transferEventName&&(h=E.transferEventName(h));const g=arguments[2],v=!!g&&("boolean"==typeof g||g.capture),T=arguments[1];if(!T)return w.apply(this,arguments);if(j&&!j(w,T,i,arguments))return;const R=ne[h];let D;R&&(D=R[v?fe:he]);const O=D&&i[D];if(O)for(let V=0;V<O.length;V++){const B=O[V];if(G(B,T)){if(O.splice(V,1),B.isRemoved=!0,0===O.length&&(B.allRemoved=!0,i[D]=null,"string"==typeof h)){i[Pe+"ON_PROPERTY"+h]=null}return B.zone.cancelTask(B),M?i:void 0}}return w.apply(this,arguments)},p[y]=function(){const i=this||e;let h=arguments[0];E&&E.transferEventName&&(h=E.transferEventName(h));const g=[],v=Qe(i,x?x(h):h);for(let T=0;T<v.length;T++){const R=v[T];let D=R.originalDelegate?R.originalDelegate:R.callback;g.push(D)}return g},p[_]=function(){const i=this||e;let h=arguments[0];if(h){E&&E.transferEventName&&(h=E.transferEventName(h));const g=ne[h];if(g){const v=g[he],T=g[fe],R=i[v],D=i[T];if(R){const O=R.slice();for(let V=0;V<O.length;V++){const B=O[V];let Ee=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,h,Ee,B.options)}}if(D){const O=D.slice();for(let V=0;V<O.length;V++){const B=O[V];let Ee=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,h,Ee,B.options)}}}}else{const g=Object.keys(i);for(let v=0;v<g.length;v++){const T=g[v],R=$e.exec(T);let D=R&&R[1];D&&"removeListener"!==D&&this[_].call(this,D)}this[_].call(this,"removeListener")}if(M)return this},_e(p[a],N),_e(p[l],w),ae&&_e(p[_],ae),J&&_e(p[y],J),!0}let X=[];for(let C=0;C<c.length;C++)X[C]=K(c[C],s);return X}function Qe(e,t){if(!t){const l=[];for(let y in e){const _=$e.exec(y);let P=_&&_[1];if(P&&(!t||P===t)){const k=e[y];if(k)for(let m=0;m<k.length;m++)l.push(k[m])}}return l}let c=ne[t];c||(Je(t),c=ne[t]);const s=e[c[he]],a=e[c[fe]];return s?a?s.concat(a):s.slice():a?a.slice():[]}function _t(e,t){const c=e.Event;c&&c.prototype&&t.patchMethod(c.prototype,"stopImmediatePropagation",s=>function(a,l){a[Ke]=!0,s&&s.apply(a,l)})}function Et(e,t,c,s,a){const l=Zone.__symbol__(s);if(t[l])return;const y=t[l]=t[s];t[s]=function(_,P,k){return P&&P.prototype&&a.forEach(function(m){const I=`${c}.${s}::`+m,S=P.prototype;try{if(S.hasOwnProperty(m)){const Z=e.ObjectGetOwnPropertyDescriptor(S,m);Z&&Z.value?(Z.value=e.wrapWithCurrentZone(Z.value,I),e._redefineProperty(P.prototype,m,Z)):S[m]&&(S[m]=e.wrapWithCurrentZone(S[m],I))}else S[m]&&(S[m]=e.wrapWithCurrentZone(S[m],I))}catch{}}),y.call(t,_,P,k)},e.attachOriginToPatched(t[s],y)}function et(e,t,c){if(!c||0===c.length)return t;const s=c.filter(l=>l.target===e);if(!s||0===s.length)return t;const a=s[0].ignoreProperties;return t.filter(l=>-1===a.indexOf(l))}function tt(e,t,c,s){if(!e)return;ze(e,et(e,t,c),s)}function xe(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}function Tt(e,t){if(Oe&&!Ue||Zone[e.symbol("patchEvents")])return;const c=t.__Zone_ignore_on_properties;let s=[];if(je){const a=window;s=s.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function ut(){try{const e=ge.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];tt(a,xe(a),c&&c.concat(l),ce(a))}s=s.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<s.length;a++){const l=t[s[a]];l&&l.prototype&&tt(l.prototype,xe(l.prototype),c)}}Zone.__load_patch("util",(e,t,c)=>{const s=xe(e);c.patchOnProperties=ze,c.patchMethod=de,c.bindArguments=Ae,c.patchMacroTask=lt;const a=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[a]=e[l]),e[a]&&(t[a]=t[l]=e[a]),c.patchEventPrototype=_t,c.patchEventTarget=dt,c.isIEOrEdge=ft,c.ObjectDefineProperty=ue,c.ObjectGetOwnPropertyDescriptor=ee,c.ObjectCreate=ye,c.ArraySlice=te,c.patchClass=we,c.wrapWithCurrentZone=Me,c.filterProperties=et,c.attachOriginToPatched=_e,c._redefineProperty=Object.defineProperty,c.patchCallbacks=Et,c.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ne,eventNames:s,isBrowser:je,isMix:Ue,isNode:Oe,TRUE_STR:fe,FALSE_STR:he,ZONE_SYMBOL_PREFIX:Pe,ADD_EVENT_LISTENER_STR:oe,REMOVE_EVENT_LISTENER_STR:pe})});const Ze=L("zoneTask");function ve(e,t,c,s){let a=null,l=null;c+=s;const y={};function _(k){const m=k.data;return m.args[0]=function(){return k.invoke.apply(this,arguments)},m.handleId=a.apply(e,m.args),k}function P(k){return l.call(e,k.data.handleId)}a=de(e,t+=s,k=>function(m,I){if("function"==typeof I[0]){const S={isPeriodic:"Interval"===s,delay:"Timeout"===s||"Interval"===s?I[1]||0:void 0,args:I},Z=I[0];I[0]=function(){try{return Z.apply(this,arguments)}finally{S.isPeriodic||("number"==typeof S.handleId?delete y[S.handleId]:S.handleId&&(S.handleId[Ze]=null))}};const F=Le(t,I[0],S,_,P);if(!F)return F;const A=F.data.handleId;return"number"==typeof A?y[A]=F:A&&(A[Ze]=F),A&&A.ref&&A.unref&&"function"==typeof A.ref&&"function"==typeof A.unref&&(F.ref=A.ref.bind(A),F.unref=A.unref.bind(A)),"number"==typeof A||A?A:F}return k.apply(e,I)}),l=de(e,c,k=>function(m,I){const S=I[0];let Z;"number"==typeof S?Z=y[S]:(Z=S&&S[Ze],Z||(Z=S)),Z&&"string"==typeof Z.type?"notScheduled"!==Z.state&&(Z.cancelFn&&Z.data.isPeriodic||0===Z.runCount)&&("number"==typeof S?delete y[S]:S&&(S[Ze]=null),Z.zone.cancelTask(Z)):k.apply(e,I)})}Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("queueMicrotask",(e,t,c)=>{c.patchMethod(e,"queueMicrotask",s=>function(a,l){t.current.scheduleMicroTask("queueMicrotask",l[0])})}),Zone.__load_patch("timers",e=>{const t="set",c="clear";ve(e,t,c,"Timeout"),ve(e,t,c,"Interval"),ve(e,t,c,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{ve(e,"request","cancel","AnimationFrame"),ve(e,"mozRequest","mozCancel","AnimationFrame"),ve(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,t)=>{const c=["alert","prompt","confirm"];for(let s=0;s<c.length;s++){const a=c[s];de(e,a,(l,y,_)=>function(P,k){return t.current.run(l,e,k,_)})}}),Zone.__load_patch("EventTarget",(e,t,c)=>{(function mt(e,t){t.patchEventPrototype(e,t)})(e,c),function pt(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:s,TRUE_STR:a,FALSE_STR:l,ZONE_SYMBOL_PREFIX:y}=t.getGlobalObjects();for(let P=0;P<c.length;P++){const k=c[P],S=y+(k+l),Z=y+(k+a);s[k]={},s[k][l]=S,s[k][a]=Z}const _=e.EventTarget;return _&&_.prototype?(t.patchEventTarget(e,t,[_&&_.prototype]),!0):void 0}(e,c);const s=e.XMLHttpRequestEventTarget;s&&s.prototype&&c.patchEventTarget(e,c,[s.prototype])}),Zone.__load_patch("MutationObserver",(e,t,c)=>{we("MutationObserver"),we("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,t,c)=>{we("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,t,c)=>{we("FileReader")}),Zone.__load_patch("on_property",(e,t,c)=>{Tt(c,e)}),Zone.__load_patch("customElements",(e,t,c)=>{!function yt(e,t){const{isBrowser:c,isMix:s}=t.getGlobalObjects();if(!c&&!s||!e.customElements||!("customElements"in e))return;t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,c)}),Zone.__load_patch("XHR",(e,t)=>{!function P(k){const m=k.XMLHttpRequest;if(!m)return;const I=m.prototype;let Z=I[Re],F=I[Ie];if(!Z){const d=k.XMLHttpRequestEventTarget;if(d){const N=d.prototype;Z=N[Re],F=N[Ie]}}const A="readystatechange",K="scheduled";function X(d){const N=d.data,w=N.target;w[l]=!1,w[_]=!1;const J=w[a];Z||(Z=w[Re],F=w[Ie]),J&&F.call(w,A,J);const ae=w[a]=()=>{if(w.readyState===w.DONE)if(!N.aborted&&w[l]&&d.state===K){const U=w[t.__symbol__("loadfalse")];if(0!==w.status&&U&&U.length>0){const ie=d.invoke;d.invoke=function(){const Q=w[t.__symbol__("loadfalse")];for(let W=0;W<Q.length;W++)Q[W]===d&&Q.splice(W,1);!N.aborted&&d.state===K&&ie.call(d)},U.push(d)}else d.invoke()}else!N.aborted&&!1===w[l]&&(w[_]=!0)};return Z.call(w,A,ae),w[c]||(w[c]=d),p.apply(w,N.args),w[l]=!0,d}function C(){}function E(d){const N=d.data;return N.aborted=!0,x.apply(N.target,N.args)}const $=de(I,"open",()=>function(d,N){return d[s]=0==N[2],d[y]=N[1],$.apply(d,N)}),z=L("fetchTaskAborting"),M=L("fetchTaskScheduling"),p=de(I,"send",()=>function(d,N){if(!0===t.current[M]||d[s])return p.apply(d,N);{const w={target:d,url:d[y],isPeriodic:!1,args:N,aborted:!1},J=Le("XMLHttpRequest.send",C,w,X,E);d&&!0===d[_]&&!w.aborted&&J.state===K&&J.invoke()}}),x=de(I,"abort",()=>function(d,N){const w=function S(d){return d[c]}(d);if(w&&"string"==typeof w.type){if(null==w.cancelFn||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(!0===t.current[z])return x.apply(d,N)})}(e);const c=L("xhrTask"),s=L("xhrSync"),a=L("xhrListener"),l=L("xhrScheduled"),y=L("xhrURL"),_=L("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,t){const c=e.constructor.name;for(let s=0;s<t.length;s++){const a=t[s],l=e[a];if(l){if(!Be(ee(e,a)))continue;e[a]=(_=>{const P=function(){return _.apply(this,Ae(arguments,c+"."+a))};return _e(P,_),P})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function c(s){return function(a){Qe(e,s).forEach(y=>{const _=e.PromiseRejectionEvent;if(_){const P=new _(s,{promise:a.promise,reason:a.rejection});y.invoke(P)}})}}e.PromiseRejectionEvent&&(t[L("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),t[L("rejectionHandledHandler")]=c("rejectionhandled"))})}},ee=>{var ye;ye=435,ee(ee.s=ye)}]);