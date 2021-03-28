/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{300:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(292),o=function(e){for(var t=[],p=0,i=0;i<e.length;i++){var n=e.charCodeAt(i);n<128?t[p++]=n:n<2048?(t[p++]=n>>6|192,t[p++]=63&n|128):55296==(64512&n)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++i)),t[p++]=n>>18|240,t[p++]=n>>12&63|128,t[p++]=n>>6&63|128,t[p++]=63&n|128):(t[p++]=n>>12|224,t[p++]=n>>6&63|128,t[p++]=63&n|128)}return t};var c=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();var h=function(e){function t(code,n,r){var o=e.call(this,n)||this;return o.code=code,o.customData=r,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,l.prototype.create),o}return Object(r.c)(t,e),t}(Error),l=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(code){for(var data=[],e=1;e<arguments.length;e++)data[e-1]=arguments[e];var t=data[0]||{},n=this.service+"/"+code,template=this.errors[code],r=template?f(template,t):"Error",o=this.serviceName+": "+r+" ("+n+").",c=new h(n,o,t);return c},e}();function f(template,data){return template.replace(d,(function(e,t){var n=data[t];return null!=n?String(n):"<"+t+"?>"}))}var d=/\{\$([^}]+)}/g;!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var i=1;i<this.blockSize;++i)this.pad_[i]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(i=16;i<80;i++){var r=n[i-3]^n[i-8]^n[i-14]^n[i-16];n[i]=4294967295&(r<<1|r>>>31)}var o,c,a=this.chain_[0],b=this.chain_[1],h=this.chain_[2],l=this.chain_[3],f=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(o=l^b&(h^l),c=1518500249):(o=b^h^l,c=1859775393):i<60?(o=b&h|l&(b|h),c=2400959708):(o=b^h^l,c=3395469782);r=(a<<5|a>>>27)+o+f+c+n[i]&4294967295;f=l,l=h,h=4294967295&(b<<30|b>>>2),b=a,a=r}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+b&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,o=this.buf_,c=this.inbuf_;r<t;){if(0===c)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(o[c]=e.charCodeAt(r),++r,++c===this.blockSize){this.compress_(o),c=0;break}}else for(;r<t;)if(o[c]=e[r],++r,++c===this.blockSize){this.compress_(o),c=0;break}}this.inbuf_=c,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(i=0;i<5;i++)for(var r=24;r>=0;r-=8)e[n]=this.chain_[i]>>r&255,++n;return e}}();!function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,o=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=v),void 0===r.error&&(r.error=v),void 0===r.complete&&(r.complete=v);var c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?r.error(o.finalError):r.complete()}catch(e){}})),this.observers.push(r),c},e.prototype.unsubscribeOne=function(i){void 0!==this.observers&&void 0!==this.observers[i]&&(delete this.observers[i],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var i=0;i<this.observers.length;i++)this.sendOne(i,e)},e.prototype.sendOne=function(i,e){var t=this;this.task.then((function(){if(void 0!==t.observers&&void 0!==t.observers[i])try{e(t.observers[i])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}();function v(){}}).call(this,n(77))},316:function(e,t,n){"use strict";n.r(t);n(303);var r=n(292),o=n(300),c=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),h="[DEFAULT]",l=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e=h);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new o.a;this.instancesDeferred.set(t,n);try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=Object(r.a)({identifier:h,optional:!1},e),n=t.identifier,o=t.optional,c=this.normalizeInstanceIdentifier(n);try{var l=this.getOrInitializeService({instanceIdentifier:c});if(!l){if(o)return null;throw Error("Service "+this.name+" is not available")}return l}catch(e){if(o)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(component){var e,t;if(component.name!==this.name)throw Error("Mismatching Component "+component.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=component,function(component){return"EAGER"===component.instantiationMode}(component))try{this.getOrInitializeService({instanceIdentifier:h})}catch(e){}try{for(var n=Object(r.g)(this.instancesDeferred.entries()),o=n.next();!o.done;o=n.next()){var c=Object(r.e)(o.value,2),l=c[0],f=c[1],d=this.normalizeInstanceIdentifier(l);try{var v=this.getOrInitializeService({instanceIdentifier:d});f.resolve(v)}catch(e){}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e=h),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(r.b)(this,void 0,void 0,(function(){var e;return Object(r.d)(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(r.f)(Object(r.f)([],Object(r.e)(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Object(r.e)(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=h),this.instances.has(e)},e.prototype.initialize=function(e){void 0===e&&(e={});var t=e.instanceIdentifier,n=void 0===t?h:t,r=e.options,o=void 0===r?{}:r,c=this.normalizeInstanceIdentifier(n);if(this.isInitialized(c))throw Error(this.name+"("+c+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");return this.getOrInitializeService({instanceIdentifier:c,options:o})},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,o=void 0===r?{}:r,c=this.instances.get(n);return!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===h?void 0:t),options:o}),this.instances.set(n,c)),c||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:h:e},e}();!function(){function e(e){this.name=e,this.providers=new Map}e.prototype.addComponent=function(component){var e=this.getProvider(component.name);if(e.isComponentSet())throw new Error("Component "+component.name+" has already been registered with "+this.name);e.setComponent(component)},e.prototype.addOrOverwriteComponent=function(component){this.getProvider(component.name).isComponentSet()&&this.providers.delete(component.name),this.addComponent(component)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new l(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())}}();var f,d,v=n(299),y=n(293),w=((f={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',f["only-available-in-window"]="This method is available in a Window context.",f["only-available-in-sw"]="This method is available in a service worker context.",f["permission-default"]="The notification permission was not granted and dismissed instead.",f["permission-blocked"]="The notification permission was not granted and blocked instead.",f["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",f["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",f["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",f["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",f["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",f["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",f["token-update-no-token"]="FCM returned no token when updating the user to push.",f["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",f["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",f["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",f["invalid-vapid-key"]="The public VAPID key must be a string.",f["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",f),m=new o.b("messaging","Messaging",w),O="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",k="google.c.a.c_id";function j(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(r.f)([],Object(r.e)(t)))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function I(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(d||(d={}));var S="fcm_token_details_db",_="fcm_token_object_Store";function C(e){return Object(r.b)(this,void 0,void 0,(function(){var t,n,o=this;return Object(r.d)(this,(function(c){switch(c.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=c.sent(),!t.map((function(e){return e.name})).includes(S))return[2,null];c.label=2;case 2:return n=null,[4,Object(v.openDb)(S,5,(function(t){return Object(r.b)(o,void 0,void 0,(function(){var o,c,h,l;return Object(r.d)(this,(function(r){switch(r.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains(_)?[4,(o=t.transaction.objectStore(_)).index("fcmSenderId").get(e)]:[2];case 1:return c=r.sent(),[4,o.clear()];case 2:if(r.sent(),!c)return[2];if(2===t.oldVersion){if(!(h=c).auth||!h.p256dh||!h.endpoint)return[2];n={token:h.fcmToken,createTime:null!==(l=h.createTime)&&void 0!==l?l:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:"string"==typeof h.vapidKey?h.vapidKey:j(h.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(n={token:(h=c).fcmToken,createTime:h.createTime,subscriptionOptions:{auth:j(h.auth),p256dh:j(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:j(h.vapidKey)}});return[2]}}))}))}))];case 3:return c.sent().close(),[4,Object(v.deleteDb)(S)];case 4:return c.sent(),[4,Object(v.deleteDb)("fcm_vapid_details_db")];case 5:return c.sent(),[4,Object(v.deleteDb)("undefined")];case 6:return c.sent(),[2,M(n)?n:null]}}))}))}function M(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}var E="firebase-messaging-store",T=null;function D(){return T||(T=Object(v.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(E)}}))),T}function P(e){return Object(r.b)(this,void 0,void 0,(function(){var t,n,o;return Object(r.d)(this,(function(r){switch(r.label){case 0:return t=A(e),[4,D()];case 1:return[4,r.sent().transaction(E).objectStore(E).get(t)];case 2:return(n=r.sent())?[2,n]:[3,3];case 3:return[4,C(e.appConfig.senderId)];case 4:return(o=r.sent())?[4,K(e,o)]:[3,6];case 5:return r.sent(),[2,o];case 6:return[2]}}))}))}function K(e,t){return Object(r.b)(this,void 0,void 0,(function(){var n,o,c;return Object(r.d)(this,(function(r){switch(r.label){case 0:return n=A(e),[4,D()];case 1:return o=r.sent(),[4,(c=o.transaction(E,"readwrite")).objectStore(E).put(t,n)];case 2:return r.sent(),[4,c.complete];case 3:return r.sent(),[2,t]}}))}))}function N(e){return Object(r.b)(this,void 0,void 0,(function(){var t,n,o;return Object(r.d)(this,(function(r){switch(r.label){case 0:return t=A(e),[4,D()];case 1:return n=r.sent(),[4,(o=n.transaction(E,"readwrite")).objectStore(E).delete(t)];case 2:return r.sent(),[4,o.complete];case 3:return r.sent(),[2]}}))}))}function A(e){return e.appConfig.appId}function R(e,t){return Object(r.b)(this,void 0,void 0,(function(){var n,body,o,c,h,l;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,F(e)];case 1:n=r.sent(),body=L(t),o={method:"POST",headers:n,body:JSON.stringify(body)},r.label=2;case 2:return r.trys.push([2,5,,6]),[4,fetch(W(e.appConfig),o)];case 3:return[4,r.sent().json()];case 4:return c=r.sent(),[3,6];case 5:throw h=r.sent(),m.create("token-subscribe-failed",{errorInfo:h});case 6:if(c.error)throw l=c.error.message,m.create("token-subscribe-failed",{errorInfo:l});if(!c.token)throw m.create("token-subscribe-no-token");return[2,c.token]}}))}))}function x(e,t){return Object(r.b)(this,void 0,void 0,(function(){var n,body,o,c,h,l;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,F(e)];case 1:n=r.sent(),body=L(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(body)},r.label=2;case 2:return r.trys.push([2,5,,6]),[4,fetch(W(e.appConfig)+"/"+t.token,o)];case 3:return[4,r.sent().json()];case 4:return c=r.sent(),[3,6];case 5:throw h=r.sent(),m.create("token-update-failed",{errorInfo:h});case 6:if(c.error)throw l=c.error.message,m.create("token-update-failed",{errorInfo:l});if(!c.token)throw m.create("token-update-no-token");return[2,c.token]}}))}))}function z(e,t){return Object(r.b)(this,void 0,void 0,(function(){var n,o,c,h,l;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,F(e)];case 1:n=r.sent(),o={method:"DELETE",headers:n},r.label=2;case 2:return r.trys.push([2,5,,6]),[4,fetch(W(e.appConfig)+"/"+t,o)];case 3:return[4,r.sent().json()];case 4:if((c=r.sent()).error)throw h=c.error.message,m.create("token-unsubscribe-failed",{errorInfo:h});return[3,6];case 5:throw l=r.sent(),m.create("token-unsubscribe-failed",{errorInfo:l});case 6:return[2]}}))}))}function W(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function F(e){var t=e.appConfig,n=e.installations;return Object(r.b)(this,void 0,void 0,(function(){var e;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function L(e){var t=e.p256dh,n=e.auth,r=e.endpoint,o=e.vapidKey,body={web:{endpoint:r,auth:n,p256dh:t}};return o!==O&&(body.web.applicationPubKey=o),body}function U(e,t,n){return Object(r.b)(this,void 0,void 0,(function(){var o,c,h,l;return Object(r.d)(this,(function(r){switch(r.label){case 0:if("granted"!==Notification.permission)throw m.create("permission-blocked");return[4,G(t,n)];case 1:return o=r.sent(),[4,P(e)];case 2:return c=r.sent(),h={vapidKey:n,swScope:t.scope,endpoint:o.endpoint,auth:j(o.getKey("auth")),p256dh:j(o.getKey("p256dh"))},c?[3,3]:[2,B(e,h)];case 3:if(f=c.subscriptionOptions,v=(d=h).vapidKey===f.vapidKey,y=d.endpoint===f.endpoint,w=d.auth===f.auth,O=d.p256dh===f.p256dh,v&&y&&w&&O)return[3,8];r.label=4;case 4:return r.trys.push([4,6,,7]),[4,z(e,c.token)];case 5:return r.sent(),[3,7];case 6:return l=r.sent(),console.warn(l),[3,7];case 7:return[2,B(e,h)];case 8:return Date.now()>=c.createTime+6048e5?[2,V({token:c.token,createTime:Date.now(),subscriptionOptions:h},e,t)]:[2,c.token];case 9:return[2]}var f,d,v,y,w,O}))}))}function H(e,t){return Object(r.b)(this,void 0,void 0,(function(){var n,o;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,P(e)];case 1:return(n=r.sent())?[4,z(e,n.token)]:[3,4];case 2:return r.sent(),[4,N(e)];case 3:r.sent(),r.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(o=r.sent())?[2,o.unsubscribe()]:[2,!0]}}))}))}function V(e,t,n){return Object(r.b)(this,void 0,void 0,(function(){var o,c,h;return Object(r.d)(this,(function(l){switch(l.label){case 0:return l.trys.push([0,3,,5]),[4,x(t,e)];case 1:return o=l.sent(),c=Object(r.a)(Object(r.a)({},e),{token:o,createTime:Date.now()}),[4,K(t,c)];case 2:return l.sent(),[2,o];case 3:return h=l.sent(),[4,H(t,n)];case 4:throw l.sent(),h;case 5:return[2]}}))}))}function B(e,t){return Object(r.b)(this,void 0,void 0,(function(){var n,o;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,R(e,t)];case 1:return n=r.sent(),o={token:n,createTime:Date.now(),subscriptionOptions:t},[4,K(e,o)];case 2:return r.sent(),[2,o.token]}}))}))}function G(e,t){return Object(r.b)(this,void 0,void 0,(function(){var n;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:I(t)})]}}))}))}function $(data){return"object"==typeof data&&!!data&&k in data}function J(e){return new Promise((function(t){setTimeout(t,e)}))}var Y=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!=typeof e)throw m.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return Object(r.b)(this,void 0,void 0,(function(){var n;return Object(r.d)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,P(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:O,r.label=2;case 2:return[2,U(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return H(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw m.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw m.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw m.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw m.create("only-available-in-window")},e.prototype.onMessage=function(){throw m.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw m.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(r.b)(this,void 0,void 0,(function(){var t,n,o,c;return Object(r.d)(this,(function(r){switch(r.label){case 0:return(t=function(e){var data=e.data;if(!data)return null;try{return data.json()}catch(e){return null}}(e))?[4,ee()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=r.sent())?[2,X(n,t)]:(o=!1,t.notification?[4,te(Z(t))]:[3,3]);case 2:r.sent(),o=!0,r.label=3;case 3:return!0===o&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(c=function(e){var t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(t.notification){e.notification={};var title=t.notification.title;title&&(e.notification.title=title);var body=t.notification.body;body&&(e.notification.body=body);var image=t.notification.image;image&&(e.notification.image=image)}}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){if(t.fcmOptions){e.fcmOptions={};var link=t.fcmOptions.link;link&&(e.fcmOptions.link=link);var n=t.fcmOptions.analytics_label;n&&(e.fcmOptions.analyticsLabel=n)}}(t,e),t}(t),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(c):this.bgMessageHandler.next(c)),[4,J(1e3)]);case 4:return r.sent(),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(r.b)(this,void 0,void 0,(function(){var o;return Object(r.d)(this,(function(r){switch(r.label){case 0:return e.newSubscription?[3,2]:[4,H(this.firebaseDependencies,self.registration)];case 1:return r.sent(),[2];case 2:return[4,P(this.firebaseDependencies)];case 3:return o=r.sent(),[4,H(this.firebaseDependencies,self.registration)];case 4:return r.sent(),[4,U(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==o?void 0:o.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:O)];case 5:return r.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(r.b)(this,void 0,void 0,(function(){var o,link,c,h,l;return Object(r.d)(this,(function(r){switch(r.label){case 0:return(o=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(link=function(e){var t,n,r,link=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(link)return link;return $(e.data)?self.location.origin:null}(o))?(c=new URL(link,self.location.href),h=new URL(self.location.origin),c.host!==h.host?[2]:[4,Q(c)]):[2]):[2];case 1:return(l=r.sent())?[3,4]:[4,self.clients.openWindow(link)];case 2:return l=r.sent(),[4,J(3e3)];case 3:return r.sent(),[3,6];case 4:return[4,l.focus()];case 5:l=r.sent(),r.label=6;case 6:return l?(o.messageType=d.NOTIFICATION_CLICKED,o.isFirebaseMessaging=!0,[2,l.postMessage(o)]):[2]}}))}))},e}();function Z(e){var t,n=Object(r.a)({},e.notification);return n.data=((t={}).FCM_MSG=e,t),n}function Q(e){return Object(r.b)(this,void 0,void 0,(function(){var t,n,o,c,h,l,f;return Object(r.d)(this,(function(d){switch(d.label){case 0:return[4,ee()];case 1:t=d.sent();try{for(n=Object(r.g)(t),o=n.next();!o.done;o=n.next())if(c=o.value,h=new URL(c.url,self.location.href),e.host===h.host)return[2,c]}catch(e){l={error:e}}finally{try{o&&!o.done&&(f=n.return)&&f.call(n)}finally{if(l)throw l.error}}return[2,null]}}))}))}function X(e,t){var n,o;t.isFirebaseMessaging=!0,t.messageType=d.PUSH_RECEIVED;try{for(var c=Object(r.g)(e),h=c.next();!h.done;h=c.next()){h.value.postMessage(t)}}catch(e){n={error:e}}finally{try{h&&!h.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}}function ee(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function te(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var ne=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return Object(r.b)(this,void 0,void 0,(function(){var t,n;return Object(r.d)(this,(function(r){switch(r.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===d.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),$(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw m.create("permission-blocked");return[4,this.updateVapidKey(null==e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null==e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,U(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=O),[2]}))}))},e.prototype.updateSwReg=function(e){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw m.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return Object(r.b)(this,void 0,void 0,(function(){var e,t;return Object(r.d)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),m.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,H(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return Object(r.b)(this,void 0,void 0,(function(){var e;return Object(r.d)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?m.create("permission-blocked"):m.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw m.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw m.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw m.create("invalid-sw-registration");if(this.swRegistration)throw m.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw m.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw m.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,data){return Object(r.b)(this,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(n){switch(n.label){case 0:return t=function(e){switch(e){case d.NOTIFICATION_CLICKED:return"notification_open";case d.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return n.sent().logEvent(t,{message_id:data["google.c.a.c_id"],message_name:data["google.c.a.c_l"],message_time:data["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function ie(e){return m.create("missing-app-config-values",{valueName:e})}var re={isSupported:oe};function oe(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}y.a.INTERNAL.registerComponent(new c("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw ie("App Configuration Object");if(!e.name)throw ie("App Name");var o=e.options;try{for(var c=Object(r.g)(["projectId","apiKey","appId","messagingSenderId"]),h=c.next();!h.done;h=c.next()){var l=h.value;if(!o[l])throw ie(l)}}catch(e){t={error:e}}finally{try{h&&!h.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return{appName:e.name,projectId:o.projectId,apiKey:o.apiKey,appId:o.appId,senderId:o.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!oe())throw m.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new Y(n):new ne(n)}),"PUBLIC").setServiceProps(re))}}]);