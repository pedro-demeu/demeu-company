var $=Object.defineProperty;var c=(e,n)=>$(e,"name",{value:n,configurable:!0});import{r as t}from"./index.9505a85c.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p.apply(this,arguments)}c(p,"_extends");function x(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}c(x,"$6ed0406888f73fc4$var$setRef");function u(...e){return n=>e.forEach(r=>x(r,n))}c(u,"$6ed0406888f73fc4$export$43e446d32b3d21af");function C(...e){return t.exports.useCallback(u(...e),e)}c(C,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const m=t.exports.forwardRef((e,n)=>{const{children:r,...o}=e,s=t.exports.Children.toArray(r),l=s.find(b);if(l){const i=l.props.children,a=s.map(d=>d===l?t.exports.Children.count(i)>1?t.exports.Children.only(null):t.exports.isValidElement(i)?i.props.children:null:d);return t.exports.createElement(f,p({},o,{ref:n}),t.exports.isValidElement(i)?t.exports.cloneElement(i,void 0,a):null)}return t.exports.createElement(f,p({},o,{ref:n}),r)});m.displayName="Slot";const f=t.exports.forwardRef((e,n)=>{const{children:r,...o}=e;return t.exports.isValidElement(r)?t.exports.cloneElement(r,{...E(o,r.props),ref:u(n,r.ref)}):t.exports.Children.count(r)>1?t.exports.Children.only(null):null});f.displayName="SlotClone";const h=c(({children:e})=>t.exports.createElement(t.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function b(e){return t.exports.isValidElement(e)&&e.type===h}c(b,"$5e63c961fc1ce211$var$isSlottable");function E(e,n){const r={...n};for(const o in n){const s=e[o],l=n[o];/^on[A-Z]/.test(o)?r[o]=(...a)=>{l==null||l(...a),s==null||s(...a)}:o==="style"?r[o]={...s,...l}:o==="className"&&(r[o]=[s,l].filter(Boolean).join(" "))}return{...e,...r}}c(E,"$5e63c961fc1ce211$var$mergeProps");export{m as $,p as _,C as a};
//# sourceMappingURL=index.module.3d56405c.js.map
