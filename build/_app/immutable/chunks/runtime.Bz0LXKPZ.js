var It=Array.isArray,bt=Array.from,Pt=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,Qn=Object.getOwnPropertyDescriptors,Ct=Object.prototype,Ft=Array.prototype,Xn=Object.getPrototypeOf;const qt=()=>{};function Lt(n){return n()}function nt(n){for(var t=0;t<n.length;t++)n[t]()}const E=2,mn=4,B=8,an=16,g=32,W=64,nn=128,O=256,K=512,h=1024,x=2048,P=4096,b=8192,C=16384,tt=32768,Tn=65536,Yt=1<<17,rt=1<<19,gn=1<<20,dn=Symbol("$state"),Mt=Symbol("legacy props"),jt=Symbol("");function An(n){return n===this.v}function et(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function xn(n){return!et(n,this.v)}function lt(n){throw new Error("effect_in_teardown")}function at(){throw new Error("effect_in_unowned_derived")}function st(n){throw new Error("effect_orphan")}function ut(){throw new Error("effect_update_depth_exceeded")}function Ut(){throw new Error("hydration_failed")}function Bt(n){throw new Error("props_invalid_value")}function Ht(){throw new Error("state_descriptors_fixed")}function Vt(){throw new Error("state_prototype_fixed")}function ot(){throw new Error("state_unsafe_local_read")}function it(){throw new Error("state_unsafe_mutation")}let J=!1;function Gt(){J=!0}function sn(n){return{f:0,v:n,reactions:null,equals:An,version:0}}function Kt(n){return Sn(sn(n))}function ft(n,t=!1){var e;const r=sn(n);return t||(r.equals=xn),J&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function $t(n,t=!1){return Sn(ft(n,t))}function Sn(n){return o!==null&&o.f&E&&(T===null?At([n]):T.push(n)),n}function Zt(n,t){return un(n,Jn(()=>vn(n))),t}function un(n,t){return o!==null&&cn()&&o.f&(E|an)&&(T===null||!T.includes(n))&&it(),_t(n,t)}function _t(n,t){return n.equals(t)||(n.v=t,n.version=Gn(),Rn(n,x),cn()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(n)?(m(u,x),X(u)):A===null?xt([n]):A.push(n))),t}function Rn(n,t){var r=n.reactions;if(r!==null)for(var e=cn(),l=r.length,a=0;a<l;a++){var s=r[a],f=s.f;f&x||!e&&s===u||(m(s,t),f&(h|O)&&(f&E?Rn(s,P):X(s)))}}function On(n){console.warn("hydration_mismatch")}const zt=1,Wt=2,Jt=4,Qt=8,Xt=16,nr=1,tr=2,ct="[",vt="[!",pt="]",Dn={},rr=Symbol();let R=!1;function er(n){R=n}let w;function Y(n){if(n===null)throw On(),Dn;return w=n}function lr(){return Y(D(w))}function ar(n){if(R){if(D(w)!==null)throw On(),Dn;w=n}}function sr(n=1){if(R){for(var t=n,r=w;t--;)r=D(r);w=r}}function ur(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===pt){if(n===0)return t;n-=1}else(r===ct||r===vt)&&(n+=1)}var e=D(t);t.remove(),t=e}}var yn,kn,Nn;function or(){if(yn===void 0){yn=window;var n=Element.prototype,t=Node.prototype;kn=hn(t,"firstChild").get,Nn=hn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function tn(n=""){return document.createTextNode(n)}function rn(n){return kn.call(n)}function D(n){return Nn.call(n)}function ir(n,t){if(!R)return rn(n);var r=rn(w);if(r===null)r=w.appendChild(tn());else if(t&&r.nodeType!==3){var e=tn();return r==null||r.before(e),Y(e),e}return Y(r),r}function fr(n,t){if(!R){var r=rn(n);return r instanceof Comment&&r.data===""?D(r):r}return w}function _r(n,t=1,r=!1){let e=R?w:n;for(var l;t--;)l=e,e=D(e);if(!R)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=tn();return e===null?l==null||l.after(s):e.before(s),Y(s),s}return Y(e),e}function cr(n){n.textContent=""}function ht(n){var t=E|x;u===null?t|=O:u.f|=gn;var r=o!==null&&o.f&E?o:null;const e={children:null,ctx:i,deps:null,equals:An,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function vr(n){const t=ht(n);return t.equals=xn,t}function In(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&E?on(e):q(e)}}}function dt(n){for(var t=n.parent;t!==null;){if(!(t.f&E))return t;t=t.parent}return null}function bn(n){var t,r=u;z(dt(n));try{In(n),t=Kn(n)}finally{z(r)}return t}function Pn(n){var t=bn(n),r=(k||n.f&O)&&n.deps!==null?P:h;m(n,r),n.equals(t)||(n.v=t,n.version=Gn())}function on(n){In(n),U(n,0),m(n,C),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Cn(n){u===null&&o===null&&st(),o!==null&&o.f&O&&at(),_n&&lt()}function yt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var l=(n&W)!==0,a=u,s={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=N;try{En(!0),H(s),s.f|=tt}catch(_){throw q(s),_}finally{En(f)}}else t!==null&&X(s);var p=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&gn)===0;if(!p&&!l&&e&&(a!==null&&yt(s,a),o!==null&&o.f&E)){var d=o;(d.children??(d.children=[])).push(s)}return s}function pr(n){const t=F(B,null,!1);return m(t,h),t.teardown=n,t}function hr(n){Cn();var t=u!==null&&(u.f&g)!==0&&i!==null&&!i.m;if(t){var r=i;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Fn(n);return e}}function dr(n){return Cn(),fn(n)}function yr(n){const t=F(W,n,!0);return()=>{q(t)}}function Fn(n){return F(mn,n,!1)}function Er(n,t,r,e){var l=i,a={effect:null,ran:!1};l.l.r1.push(a),a.effect=fn(()=>{n(),!a.ran&&(a.ran=!0,un(l.l.r2,!0),Jn(t))})}function wr(){var n=i;fn(()=>{if(vn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&m(r,P),L(r)&&H(r),t.ran=!1}n.l.r2.v=!1}})}function fn(n){return F(B,n,!0)}function mr(n){return Et(n)}function Et(n,t=0){return F(B|an|t,n,!0)}function Tr(n,t=!0){return F(B|g,n,!0,t)}function qn(n){var t=n.teardown;if(t!==null){const r=_n,e=o;wn(!0),Z(null);try{t.call(null)}finally{wn(r),Z(e)}}}function Ln(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)on(t[r])}}function Yn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;q(r,t),r=e}}function wt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||q(t),t=r}}function q(n,t=!0){var r=!1;if((t||n.f&rt)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var a=e===l?null:D(e);e.remove(),e=a}r=!0}Yn(n,t&&!r),Ln(n),U(n,0),m(n,C);var s=n.transitions;if(s!==null)for(const p of s)p.stop();qn(n);var f=n.parent;f!==null&&f.first!==null&&Mn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Mn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function gr(n,t){var r=[];jn(n,r,!0),mt(r,()=>{q(n),t&&t()})}function mt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function jn(n,t,r){if(!(n.f&b)){if(n.f^=b,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var l=e.next,a=(e.f&Tn)!==0||(e.f&g)!==0;jn(e,t,a?r:!1),e=l}}}function Ar(n){Un(n,!0)}function Un(n,t){if(n.f&b){L(n)&&H(n),n.f^=b;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&Tn)!==0||(r.f&g)!==0;Un(r,l?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}let $=!1,en=[];function Bn(){$=!1;const n=en.slice();en=[],nt(n)}function xr(n){$||($=!0,queueMicrotask(Bn)),en.push(n)}function Tt(){$&&Bn()}const Hn=0,gt=1;let V=!1,G=Hn,M=!1,j=null,N=!1,_n=!1;function En(n){N=n}function wn(n){_n=n}let S=[],I=0;let o=null;function Z(n){o=n}let u=null;function z(n){u=n}let T=null;function At(n){T=n}let v=null,y=0,A=null;function xt(n){A=n}let Vn=0,k=!1,i=null;function Gn(){return++Vn}function cn(){return!J||i!==null&&i.l===null}function L(n){var s,f;var t=n.f;if(t&x)return!0;if(t&P){var r=n.deps,e=(t&O)!==0;if(r!==null){var l;if(t&K){for(l=0;l<r.length;l++)((s=r[l]).reactions??(s.reactions=[])).push(n);n.f^=K}for(l=0;l<r.length;l++){var a=r[l];if(L(a)&&Pn(a),e&&u!==null&&!k&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||m(n,h)}return!1}function St(n,t){for(var r=t;r!==null;){if(r.f&nn)try{r.fn(n);return}catch{r.f^=nn}r=r.parent}throw V=!1,n}function Rt(n){return(n.f&C)===0&&(n.parent===null||(n.parent.f&nn)===0)}function Q(n,t,r,e){if(V){if(r===null&&(V=!1),Rt(t))throw n;return}r!==null&&(V=!0);{St(n,t);return}}function Kn(n){var pn;var t=v,r=y,e=A,l=o,a=k,s=T,f=i,p=n.f;v=null,y=0,A=null,o=p&(g|W)?null:n,k=!N&&(p&O)!==0,T=null,i=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(U(n,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else n.deps=_=v;if(!k)for(c=y;c<_.length;c++)((pn=_[c]).reactions??(pn.reactions=[])).push(n)}else _!==null&&y<_.length&&(U(n,y),_.length=y);return d}finally{v=t,y=r,A=e,o=l,k=a,T=s,i=f}}function Ot(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&E&&(v===null||!v.includes(t))&&(m(t,P),t.f&(O|K)||(t.f^=K),U(t,0))}function U(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Ot(n,r[e])}function H(n){var t=n.f;if(!(t&C)){m(n,h);var r=u,e=i;u=n;try{t&an?wt(n):Yn(n),Ln(n),qn(n);var l=Kn(n);n.teardown=typeof l=="function"?l:null,n.version=Vn}catch(a){Q(a,n,r,e||n.ctx)}finally{u=r}}}function $n(){if(I>1e3){I=0;try{ut()}catch(n){if(j!==null)Q(n,j,null);else throw n}}I++}function Zn(n){var t=n.length;if(t!==0){$n();var r=N;N=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&h||(l.f^=h);var a=[];zn(l,a),Dt(a)}}finally{N=r}}}function Dt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(C|b)))try{L(e)&&(H(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mn(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function kt(){if(M=!1,I>1001)return;const n=S;S=[],Zn(n),M||(I=0,j=null)}function X(n){G===Hn&&(M||(M=!0,queueMicrotask(kt))),j=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(W|g)){if(!(r&h))return;t.f^=h}}S.push(t)}function zn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,a=(l&g)!==0,s=a&&(l&h)!==0,f=r.next;if(!s&&!(l&b))if(l&B){if(a)r.f^=h;else try{L(r)&&H(r)}catch(c){Q(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&mn&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),zn(p,t)}function Wn(n){var t=G,r=S;try{$n();const l=[];G=gt,S=l,M=!1,Zn(r);var e=n==null?void 0:n();return Tt(),(S.length>0||l.length>0)&&Wn(),I=0,j=null,e}finally{G=t,S=r}}async function Sr(){await Promise.resolve(),Wn()}function vn(n){var _;var t=n.f,r=(t&E)!==0;if(r&&t&C){var e=bn(n);return on(n),e}if(o!==null){T!==null&&T.includes(n)&&ot();var l=o.deps;v===null&&l!==null&&l[y]===n?y++:v===null?v=[n]:v.push(n),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(n)&&(m(u,x),X(u))}else if(r&&n.deps===null)for(var a=n,s=a.parent,f=a;s!==null;)if(s.f&E){var p=s;f=p,s=p.parent}else{var d=s;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(a=n,L(a)&&Pn(a)),n.v}function Jn(n){const t=o;try{return o=null,n()}finally{o=t}}const Nt=~(x|P|h);function m(n,t){n.f=n.f&Nt|t}function Rr(n,t=1){var r=vn(n),e=t===1?r++:r--;return un(n,r),e}function Or(n,t=!1,r){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(i.l={s:null,u:null,r1:[],r2:sn(!1)})}function Dr(n){const t=i;if(t!==null){const s=t.e;if(s!==null){var r=u,e=o;t.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];z(a.effect),Z(a.reaction),Fn(a.fn)}}finally{z(r),Z(e)}}i=t.p,t.m=!0}return{}}function kr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(dn in n)ln(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&dn in r&&ln(r)}}}function ln(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{ln(n[e],t)}catch{}const r=Xn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qn(r);for(let l in e){const a=e[l].get;if(a)try{a.call(n)}catch{}}}}}export{Ft as $,dr as A,hr as B,Jn as C,Lt as D,nt as E,vn as F,kr as G,ct as H,ht as I,Gt as J,Et as K,Tn as L,qt as M,q as N,tr as O,Z as P,z as Q,o as R,Pt as S,nr as T,It as U,xr as V,pr as W,ft as X,un as Y,dn as Z,Ct as _,D as a,sn as a0,Ht as a1,rr as a2,hn as a3,Vt as a4,Xn as a5,vt as a6,ur as a7,Ar as a8,gr as a9,et as aA,Rr as aa,Bt as ab,Yt as ac,Jt as ad,xn as ae,g as af,W as ag,zt as ah,J as ai,Wt as aj,Qt as ak,Mt as al,vr as am,Xt as an,Fn as ao,fn as ap,Wn as aq,Sr as ar,Kt as as,jt as at,Qn as au,Er as av,wr as aw,Zt as ax,$t as ay,sr as az,Dn as b,Y as c,w as d,pt as e,On as f,rn as g,lr as h,or as i,Ut as j,cr as k,bt as l,yr as m,tn as n,Tr as o,Or as p,R as q,u as r,er as s,Dr as t,i as u,fr as v,mr as w,ir as x,ar as y,_r as z};
