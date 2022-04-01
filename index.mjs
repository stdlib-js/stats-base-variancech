// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t){var a,i,f,u,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(a=n[i=t<0?(1-r)*t:0],i+=t,f=0,u=0,s=1;s<r;s++)f+=(o=n[i]-a)*o,u+=o,i+=t;return f/d-u/r*(u/d)};r(e,"ndarray",(function(r,e,n,t,a){var i,f,u,o,d,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(i=n[f=a],f+=t,u=0,o=0,l=1;l<r;l++)u+=(d=n[f]-i)*d,o+=d,f+=t;return u/s-o/r*(o/s)}));var n=e;export{n as default};
//# sourceMappingURL=index.mjs.map
