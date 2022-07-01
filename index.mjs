// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function e(r,e,n,t){var i,f,u,a,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(i=n[f=t<0?(1-r)*t:0],f+=t,u=0,a=0,s=1;s<r;s++)u+=(o=n[f]-i)*o,a+=o,f+=t;return u/d-a/r*(a/d)}r(e,"ndarray",(function(r,e,n,t,i){var f,u,a,o,d,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(f=n[u=i],u+=t,a=0,o=0,l=1;l<r;l++)a+=(d=n[u]-f)*d,o+=d,u+=t;return a/s-o/r*(o/s)}));export{e as default};
//# sourceMappingURL=index.mjs.map
