// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function f(e,r,t,n){var o,a,i,u,l,f,c;if(f=e-r,e<=0||f<=0)return NaN;if(1===e||0===n)return 0;for(o=t[a=n<0?(1-e)*n:0],a+=n,i=0,u=0,c=1;c<e;c++)i+=(l=t[a]-o)*l,u+=l,a+=n;return i/f-u/e*(u/f)}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o){var a,i,u,l,f,c,_;if(c=e-r,e<=0||c<=0)return NaN;if(1===e||0===n)return 0;for(a=t[i=o],i+=n,u=0,l=0,_=1;_<e;_++)u+=(f=t[i]-a)*f,l+=f,i+=n;return u/c-l/e*(l/c)}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).variancech=r();
//# sourceMappingURL=browser.js.map
