// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e,t){var a,i,f,o,u,d,s;if(d=r-n,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(a=e[i=t<0?(1-r)*t:0],i+=t,f=0,o=0,s=1;s<r;s++)f+=(u=e[i]-a)*u,o+=u,i+=t;return f/d-o/r*(o/d)}r(n,"ndarray",(function(r,n,e,t,a){var i,f,o,u,d,s,l;if(s=r-n,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(i=e[f=a],f+=t,o=0,u=0,l=1;l<r;l++)o+=(d=e[f]-i)*d,u+=d,f+=t;return o/s-u/r*(u/s)}));const{ndarray:e}=n;export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
