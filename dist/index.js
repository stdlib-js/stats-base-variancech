"use strict";var p=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var x=p(function(w,q){
function O(r,i,f,a){var o,e,v,t,n,u,c;if(u=r-i,r<=0||u<=0)return NaN;if(r===1||a===0)return 0;for(a<0?e=(1-r)*a:e=0,o=f[e],e+=a,v=0,t=0,c=1;c<r;c++)n=f[e]-o,v+=n*n,t+=n,e+=a;return v/u-t/r*(t/u)}q.exports=O
});var h=p(function(z,M){
function R(r,i,f,a,o){var e,v,t,n,u,c,s;if(c=r-i,r<=0||c<=0)return NaN;if(r===1||a===0)return 0;for(v=o,e=f[v],v+=a,t=0,n=0,s=1;s<r;s++)u=f[v]-e,t+=u*u,n+=u,v+=a;return t/c-n/r*(n/c)}M.exports=R
});var l=p(function(A,y){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=x(),g=h();b(m,"ndarray",g);y.exports=m
});var j=l();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
