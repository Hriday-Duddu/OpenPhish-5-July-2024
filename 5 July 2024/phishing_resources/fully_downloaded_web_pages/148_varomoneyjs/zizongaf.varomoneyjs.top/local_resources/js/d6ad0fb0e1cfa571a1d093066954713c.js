"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[85],{1267:(s,e,t)=>{t.d(e,{Z:()=>n});const i={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1,transport:"websocket",noSharedWorker:location.search.indexOf("noSharedWorker=1")>0};i.http=location.search.indexOf("http=1")>0,i.http&&(i.transport="https");const n=i},2219:(s,e,t)=>{t.d(e,{Z:()=>i});const i=Date.now()%Math.random()*1e8|0},6761:(s,e,t)=>{t.d(e,{Z:()=>i});const i="undefined"!=typeof window?window:self},4064:(s,e,t)=>{function i(s,e){const t=s.findIndex(e);return-1!==t?s.splice(t,1)[0]:void 0}t.d(e,{Z:()=>i})},1655:(s,e,t)=>{function i(s,e){const t=s.indexOf(e),i=-1===t?void 0:s.splice(t,1);return null==i?void 0:i[0]}t.d(e,{Z:()=>i})},5289:(s,e,t)=>{t.d(e,{Z:()=>n});const i=Date.now();function n(){return"["+((Date.now()-i)/1e3).toFixed(3)+"]"}},3241:(s,e,t)=>{t.d(e,{Z:()=>n});var i=t(4064);class n{constructor(s){this._constructor(s)}_constructor(s){this.reuseResults=s,this.listeners={},this.listenerResults={}}addEventListener(s,e,t){var i,n;(null!==(i=(n=this.listeners)[s])&&void 0!==i?i:n[s]=[]).push({callback:e,options:t}),this.listenerResults.hasOwnProperty(s)&&(e(...this.listenerResults[s]),null==t?void 0:t.once)&&this.listeners[s].pop()}addMultipleEventsListeners(s){for(const e in s)this.addEventListener(e,s[e])}removeEventListener(s,e,t){this.listeners[s]&&(0,i.Z)(this.listeners[s],(s=>s.callback===e))}invokeListenerCallback(s,e,...t){var i;let n,o;try{n=e.callback(...t)}catch(s){o=s}if((null===(i=e.options)||void 0===i?void 0:i.once)&&this.removeEventListener(s,e.callback),o)throw o;return n}_dispatchEvent(s,e,...t){this.reuseResults&&(this.listenerResults[s]=t);const i=e&&[],n=this.listeners[s];return n&&n.slice().forEach((e=>{if(-1===n.findIndex((s=>s.callback===e.callback)))return;const o=this.invokeListenerCallback(s,e,...t);i&&i.push(o)})),i}dispatchResultableEvent(s,...e){return this._dispatchEvent(s,!0,...e)}dispatchEvent(s,...e){this._dispatchEvent(s,!1,...e)}cleanup(){this.listeners={},this.listenerResults={}}}},5471:(s,e,t)=>{t.d(e,{Z:()=>n});const i={};function n(s){var e;return null!==(e=i[s])&&void 0!==e?e:i[s]={type:s}}},153:(s,e,t)=>{t.d(e,{Z:()=>d});var i=t(410),n=t(2219),o=t(6761),r=t(1655),a=t(1352),c=t(3241),h=t(5471),l=t(5003);class d extends c.Z{constructor(s){super(!1),this.logSuffix=s,this.onMessage=s=>{const e=s.data,t=s.source||s.currentTarget;this.processTaskMap[e.type](e,t,s)},this.processResultTask=s=>{const{taskId:e,result:t,error:i}=s.payload,n=this.awaiting[e];n&&(this.debug&&this.log.debug("done",n.taskType,t,i),"error"in s.payload?n.reject(i):n.resolve(t),delete this.awaiting[e])},this.processAckTask=s=>{const e=s.payload,t=this.awaiting[e.taskId];t&&((0,t.resolve)({cached:e.cached,result:e.cached?"result"in e?Promise.resolve(e.result):Promise.reject(e.error):new Promise(((s,e)=>{t.resolve=s,t.reject=e}))}),e.cached&&delete this.awaiting[e.taskId])},this.processPingTask=(s,e,t)=>{this.pushTask(this.createTask("pong",void 0),t.source)},this.processPongTask=(s,e,t)=>{const i=this.pingResolves.get(e);i&&(this.pingResolves.delete(e),i())},this.processCloseTask=(s,e,t)=>{this.detachPort(e)},this.processLockTask=(s,e,t)=>{const i=s.payload;this.requestedLocks.has(i)||(this.requestedLocks.set(i,e),navigator.locks.request(i,(()=>{this.processCloseTask(void 0,e,void 0),this.requestedLocks.delete(i)})))},this.processInvokeTask=(s,e,t)=>{return i=this,n=void 0,r=function*(){const i=s.id,n=s.payload;let o,r,a,c;n.void||(o={taskId:i},r=this.createTask("result",o)),n.withAck&&(a=this.createTask("ack",{taskId:i,cached:!0}));try{const s=this.listeners[n.type];if(!(null==s?void 0:s.length))throw new Error("no listener");const i=s[0];let r=this.invokeListenerCallback(n.type,i,n.payload,e,t);if(n.void)return;if(c=r instanceof Promise,a){const s=!c;if(a.payload.cached=s,s&&(a.payload.result=r),this.pushTask(a,e),s)return}c&&(r=yield r),o.result=r}catch(t){if(this.log.error("worker task error:",t,s),n.void)return;if(a&&a.payload.cached)return a.payload.error=t,void this.pushTask(a,e);o.error=t}this.pushTask(r,e)},new((o=void 0)||(o=Promise))((function(s,e){function t(s){try{c(r.next(s))}catch(s){e(s)}}function a(s){try{c(r.throw(s))}catch(s){e(s)}}function c(e){var i;e.done?s(e.value):(i=e.value,i instanceof o?i:new o((function(s){s(i)}))).then(t,a)}c((r=r.apply(i,n||[])).next())}));var i,n,o,r},this.listenPorts=[],this.sendPorts=[],this.pingResolves=new Map,this.taskId=0,this.awaiting={},this.pending=new Map,this.log=(0,l.kg)("MP"+(s?"-"+s:"")),this.debug=i.ZP,this.heldLocks=new Map,this.requestedLocks=new Map,this.processTaskMap={result:this.processResultTask,ack:this.processAckTask,invoke:this.processInvokeTask,ping:this.processPingTask,pong:this.processPongTask,close:this.processCloseTask,lock:this.processLockTask}}setOnPortDisconnect(s){this.onPortDisconnect=s}attachPort(s){this.attachListenPort(s),this.attachSendPort(s)}attachListenPort(s){this.listenPorts.push(s),s.addEventListener("message",this.onMessage)}attachSendPort(s){var e,t;if(this.log.warn("attaching send port"),null===(t=(e=s).start)||void 0===t||t.call(e),this.sendPorts.push(s),"undefined"!=typeof window)if("locks"in navigator){const e=["lock",n.Z,this.logSuffix||"",2147483647*Math.random()|0].join("-");this.log.warn("created lock",e);const t=new Promise((t=>this.heldLocks.set(s,{resolve:t,id:e}))).then((()=>this.heldLocks.delete(s)));navigator.locks.request(e,(()=>(this.resendLockTask(s),t)))}else window.addEventListener("beforeunload",(()=>{const s=this.createTask("close",void 0);this.postMessage(void 0,s)}));this.releasePending()}resendLockTask(s){const e=this.heldLocks.get(s);e&&this.pushTask(this.createTask("lock",e.id),s)}detachPort(s){var e,t,i,n;this.log.warn("disconnecting port"),(0,r.Z)(this.listenPorts,s),(0,r.Z)(this.sendPorts,s),null===(e=s.removeEventListener)||void 0===e||e.call(s,"message",this.onMessage),null===(i=(t=s).close)||void 0===i||i.call(t),null===(n=this.onPortDisconnect)||void 0===n||n.call(this,s);const o=this.heldLocks.get(s);null==o||o.resolve();const a=(0,h.Z)("PORT_DISCONNECTED");for(const e in this.awaiting){const t=this.awaiting[e];t.port===s&&(t.reject(a),delete this.awaiting[e])}}postMessage(s,e){(Array.isArray(s)?s:s?[s]:this.sendPorts).forEach((s=>{s.postMessage(e,e.transfer)}))}releasePending(){this.releasingPending||(this.releasingPending=!0,this.debug&&this.log.debug("releasing tasks, length:",this.pending.size),this.pending.forEach(((s,e)=>{const t=s,i=e?[e]:this.sendPorts;i.length&&(t.forEach((s=>{try{this.postMessage(i,s)}catch(e){this.log.error("postMessage error:",e,s,i)}})),this.pending.delete(e))})),this.debug&&this.log.debug("released tasks"),this.releasingPending=!1)}createTask(s,e,t){return{type:s,payload:e,id:this.taskId++,transfer:t}}createInvokeTask(s,e,t,i,n){return this.createTask("invoke",{type:s,payload:e,withAck:t,void:i},n)}pushTask(s,e){let t=this.pending.get(e);t||this.pending.set(e,t=[]),t.push(s),this.releasePending()}invokeVoid(s,e,t,i){const n=this.createInvokeTask(s,e,void 0,!0,i);this.pushTask(n,t)}invoke(s,e,t,i,n){let r;this.debug&&this.log.debug("start",s,e);const c=new Promise(((o,a)=>{r=this.createInvokeTask(s,e,t,void 0,n),this.awaiting[r.id]={resolve:o,reject:a,taskType:s,port:i},this.pushTask(r,i)}));if(a.kC){c.finally((()=>{clearInterval(s)}));const s=o.Z.setInterval((()=>{this.log.error("task still has no result",r,i)}),6e4)}return c}invokeExceptSource(s,e,t){const i=this.sendPorts.slice();(0,r.Z)(i,t),i.forEach((t=>{this.invokeVoid(s,e,t)}))}}}}]);
//# sourceMappingURL=85.c5a45a5b8327be101844.bundle.js.map