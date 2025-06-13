"use strict";var p=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var M=p(function(F,h){
function k(r,a,t,e,q){var o,u,f,v,c,i,n,s,x;for(o=t.data,u=t.accessors[0],s=r-a,v=q,f=u(o,v),v+=e,c=0,i=0,x=1;x<r;x++)n=u(o,v)-f,c+=n*n,i+=n,v+=e;return c/s-i/r*(i/s)}h.exports=k
});var y=p(function(G,d){
var O=require('@stdlib/array-base-arraylike2object/dist'),P=M();function R(r,a,t,e,q){var o,u,f,v,c,i,n,s;if(i=r-a,r<=0||i<=0)return NaN;if(r===1||e===0)return 0;if(n=O(t),n.accessorProtocol)return P(r,a,n,e,q);for(u=q,o=t[u],u+=e,f=0,v=0,s=1;s<r;s++)c=t[u]-o,f+=c*c,v+=c,u+=e;return f/i-v/r*(v/i)}d.exports=R
});var m=p(function(H,l){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(r,a,t,e){return z(r,a,t,e,w(r,e))}l.exports=A
});var j=p(function(I,g){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=m(),C=y();B(b,"ndarray",C);g.exports=b
});var D=j();module.exports=D;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
