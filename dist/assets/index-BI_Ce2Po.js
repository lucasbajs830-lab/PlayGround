(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const ro="187",Wc=0,Ro=1,Xc=2,ws=1,qc=2,ys=3,pi=0,tn=1,vn=2,qi=0,Yi=1,Bn=2,Co=3,Po=4,Yc=5,Vi=100,$c=101,Kc=102,Zc=103,Jc=104,Qc=200,jc=201,eh=202,th=203,kl=204,Hl=205,nh=206,ih=207,sh=208,rh=209,ah=210,oh=211,lh=212,ch=213,hh=214,_a=0,xa=1,va=2,As=3,Ma=4,Sa=5,ya=6,Ea=7,ao=0,uh=1,dh=2,zn=0,Vl=1,Wl=2,Xl=3,oo=4,ql=5,Yl=6,$l=7,Kl=300,es=301,Rs=302,Or=303,Br=304,Mr=1e3,Mn=1001,Ta=1002,Vt=1003,fh=1004,Os=1005,It=1006,zr=1007,ei=1008,hn=1009,Zl=1010,Jl=1011,Cs=1012,lo=1013,Rn=1014,Sn=1015,Cn=1016,co=1017,ho=1018,ts=1020,Ql=35902,jl=35899,ec=1021,tc=1022,An=1023,ni=1026,ti=1027,uo=1028,fo=1029,mi=1030,po=1031,mo=1033,pr=33776,mr=33777,gr=33778,_r=33779,ba=35840,wa=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,La=37496,Ia=37488,Da=37489,Sr=37490,Na=37491,Ua=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,Ga=37813,ka=37814,Ha=37815,Va=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,$a=37821,Ka=36492,Za=36494,Ja=36495,Qa=36283,ja=36284,yr=36285,eo=36286,ph=3200,Er=0,mh=1,Qn="",Gt="srgb",Tr="srgb-linear",br="linear",dt="srgb",Gr=7680,gh=519,_h=512,xh=513,vh=514,nc=515,Mh=516,Sh=517,ic=518,sc=519,rc=35044,Lo="300 es",yn=2e3,Ps=2001;function yh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Eh(){const s=wr("canvas");return s.style.display="block",s}const Io={};function Ar(...s){const e="THREE."+s.shift();console.log(e,...s)}function ac(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function $e(...s){s=ac(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ht(...s){s=ac(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function $i(...s){const e=s.join(" ");e in Io||(Io[e]=!0,$e(...s))}function Th(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const bh={[_a]:_a,[va]:ya,[Ma]:Ma,[As]:Sa,[xa]:xa,[ya]:va,[Ea]:Ea,[Sa]:As};class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,to=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function wh(s,e){return(s%e+e)%e}function Hr(s,e,t){return(1-t)*s+t*e}function Ah(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lr(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function oc(s,e){if(e.constructor===Float32Array)return s;const t=Lr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function lc(s,e){if(e.constructor===Float32Array)return s;const t=Lr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const yo=class yo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yo.prototype.isVector2=!0;let Qe=yo;class ss{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],p=n[i+3],d=r[a+0],m=r[a+1],_=r[a+2],M=r[a+3];if(p!==M||c!==d||l!==m||h!==_){let f=c*d+l*m+h*_+p*M;f<0&&(d=-d,m=-m,_=-_,M=-M,f=-f);let u=1-o;if(f<.9995){const S=Math.acos(f),b=Math.sin(S);u=Math.sin(u*S)/b,o=Math.sin(o*S)/b,c=c*u+d*o,l=l*u+m*o,h=h*u+_*o,p=p*u+M*o}else{c=c*u+d*o,l=l*u+m*o,h=h*u+_*o,p=p*u+M*o;const S=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=S,l*=S,h*=S,p*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],p=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*p+c*m-l*d,e[t+1]=c*_+h*d+l*p-o*m,e[t+2]=l*_+h*m+o*d-c*p,e[t+3]=h*_-o*p-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),p=o(r/2),d=c(n/2),m=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*p+l*m*_,this._y=l*m*p-d*h*_,this._z=l*h*_+d*m*p,this._w=l*h*p-d*m*_;break;case"YXZ":this._x=d*h*p+l*m*_,this._y=l*m*p-d*h*_,this._z=l*h*_-d*m*p,this._w=l*h*p+d*m*_;break;case"ZXY":this._x=d*h*p-l*m*_,this._y=l*m*p+d*h*_,this._z=l*h*_+d*m*p,this._w=l*h*p-d*m*_;break;case"ZYX":this._x=d*h*p-l*m*_,this._y=l*m*p+d*h*_,this._z=l*h*_-d*m*p,this._w=l*h*p+d*m*_;break;case"YZX":this._x=d*h*p+l*m*_,this._y=l*m*p+d*h*_,this._z=l*h*_-d*m*p,this._w=l*h*p-d*m*_;break;case"XZY":this._x=d*h*p-l*m*_,this._y=l*m*p-d*h*_,this._z=l*h*_+d*m*p,this._w=l*h*p+d*m*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=n+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Eo=class Eo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Do.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Do.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=i+c*p+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vr.copy(this).projectOnVector(e),this.sub(Vr)}reflect(e){return this.sub(Vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eo.prototype.isVector3=!0;let N=Eo;const Vr=new N,Do=new ss,To=class To{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],d=n[2],m=n[5],_=n[8],M=i[0],f=i[3],u=i[6],S=i[1],b=i[4],T=i[7],w=i[2],A=i[5],g=i[8];return r[0]=a*M+o*S+c*w,r[3]=a*f+o*b+c*A,r[6]=a*u+o*T+c*g,r[1]=l*M+h*S+p*w,r[4]=l*f+h*b+p*A,r[7]=l*u+h*T+p*g,r[2]=d*M+m*S+_*w,r[5]=d*f+m*b+_*A,r[8]=d*u+m*T+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*a-o*l,d=o*c-h*r,m=l*r-a*c,_=t*p+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=p*M,e[1]=(i*l-h*n)*M,e[2]=(o*n-i*a)*M,e[3]=d*M,e[4]=(h*t-i*c)*M,e[5]=(i*r-o*t)*M,e[6]=m*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};To.prototype.isMatrix3=!0;let Ze=To;const Wr=new Ze,No=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uo=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rh(){const s={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?br:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Tr]:{primaries:e,whitePoint:n,transfer:br,toXYZ:No,fromXYZ:Uo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:No,fromXYZ:Uo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),s}const ot=Rh();function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Si;class Ch{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=wr("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ph=0;class go{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xr(i[a].image)):r.push(Xr(i[a]))}else r=Xr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Lh=0;const qr=new N;class Kt extends gi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Mn,i=Mn,r=It,a=ei,o=An,c=hn,l=Kt.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=_i(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(qr).x}get height(){return this.source.getSize(qr).y}get depth(){return this.source.getSize(qr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Kl;Kt.DEFAULT_ANISOTROPY=1;const bo=class bo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],m=c[5],_=c[9],M=c[2],f=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-M)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+M)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,T=(m+1)/2,w=(u+1)/2,A=(h+d)/4,g=(p+M)/4,y=(_+f)/4;return b>T&&b>w?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=g/n):T>w?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=y/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=g/r,i=y/r),this.set(n,i,r,t),this}let S=Math.sqrt((f-_)*(f-_)+(p-M)*(p-M)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(p-M)/S,this.z=(d-h)/S,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bo.prototype.isVector4=!0;let bt=bo;class Ih extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new go(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Ih{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cc extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dh extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Pr=class Pr{constructor(e,t,n,i,r,a,o,c,l,h,p,d,m,_,M,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,p,d,m,_,M,f)}set(e,t,n,i,r,a,o,c,l,h,p,d,m,_,M,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=d,u[3]=m,u[7]=_,u[11]=M,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*p,_=o*h,M=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=m+_*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*p,_=l*h,M=l*p;t[0]=d+M*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=M+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*p,_=l*h,M=l*p;t[0]=d-M*o,t[4]=-a*p,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*p,_=o*h,M=o*p;t[0]=c*h,t[4]=_*l-m,t[8]=d*l+M,t[1]=c*p,t[5]=M*l+d,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,_=o*c,M=o*l;t[0]=c*h,t[4]=M-d*p,t[8]=_*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*p+_,t[10]=d-M*p}else if(e.order==="XZY"){const d=a*c,m=a*l,_=o*c,M=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+M,t[5]=a*h,t[9]=m*p-_,t[2]=_*p-m,t[6]=o*h,t[10]=M*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Uh)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Wn.crossVectors(n,an),Wn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Wn.crossVectors(n,an)),Wn.normalize(),Bs.crossVectors(an,Wn),i[0]=Wn.x,i[4]=Bs.x,i[8]=an.x,i[1]=Wn.y,i[5]=Bs.y,i[9]=an.y,i[2]=Wn.z,i[6]=Bs.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],d=n[9],m=n[13],_=n[2],M=n[6],f=n[10],u=n[14],S=n[3],b=n[7],T=n[11],w=n[15],A=i[0],g=i[4],y=i[8],U=i[12],L=i[1],D=i[5],F=i[9],W=i[13],C=i[2],k=i[6],K=i[10],z=i[14],ie=i[3],V=i[7],Q=i[11],ee=i[15];return r[0]=a*A+o*L+c*C+l*ie,r[4]=a*g+o*D+c*k+l*V,r[8]=a*y+o*F+c*K+l*Q,r[12]=a*U+o*W+c*z+l*ee,r[1]=h*A+p*L+d*C+m*ie,r[5]=h*g+p*D+d*k+m*V,r[9]=h*y+p*F+d*K+m*Q,r[13]=h*U+p*W+d*z+m*ee,r[2]=_*A+M*L+f*C+u*ie,r[6]=_*g+M*D+f*k+u*V,r[10]=_*y+M*F+f*K+u*Q,r[14]=_*U+M*W+f*z+u*ee,r[3]=S*A+b*L+T*C+w*ie,r[7]=S*g+b*D+T*k+w*V,r[11]=S*y+b*F+T*K+w*Q,r[15]=S*U+b*W+T*z+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],m=e[14],_=e[3],M=e[7],f=e[11],u=e[15],S=c*m-l*d,b=o*m-l*p,T=o*d-c*p,w=a*m-l*h,A=a*d-c*h,g=a*p-o*h;return t*(M*S-f*b+u*T)-n*(_*S-f*w+u*A)+i*(_*b-M*w+u*g)-r*(_*T-M*A+f*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],m=e[11],_=e[12],M=e[13],f=e[14],u=e[15],S=t*o-n*a,b=t*c-i*a,T=t*l-r*a,w=n*c-i*o,A=n*l-r*o,g=i*l-r*c,y=h*M-p*_,U=h*f-d*_,L=h*u-m*_,D=p*f-d*M,F=p*u-m*M,W=d*u-m*f,C=S*W-b*F+T*D+w*L-A*U+g*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/C;return e[0]=(o*W-c*F+l*D)*k,e[1]=(i*F-n*W-r*D)*k,e[2]=(M*g-f*A+u*w)*k,e[3]=(d*A-p*g-m*w)*k,e[4]=(c*L-a*W-l*U)*k,e[5]=(t*W-i*L+r*U)*k,e[6]=(f*T-_*g-u*b)*k,e[7]=(h*g-d*T+m*b)*k,e[8]=(a*F-o*L+l*y)*k,e[9]=(n*L-t*F-r*y)*k,e[10]=(_*A-M*T+u*S)*k,e[11]=(p*T-h*A-m*S)*k,e[12]=(o*U-a*D-c*y)*k,e[13]=(t*D-n*U+i*y)*k,e[14]=(M*b-_*w-f*S)*k,e[15]=(h*w-p*b+d*S)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,p=o+o,d=r*l,m=r*h,_=r*p,M=a*h,f=a*p,u=o*p,S=c*l,b=c*h,T=c*p,w=n.x,A=n.y,g=n.z;return i[0]=(1-(M+u))*w,i[1]=(m+T)*w,i[2]=(_-b)*w,i[3]=0,i[4]=(m-T)*A,i[5]=(1-(d+u))*A,i[6]=(f+S)*A,i[7]=0,i[8]=(_+b)*g,i[9]=(f-S)*g,i[10]=(1-(d+M))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=yi.set(i[0],i[1],i[2]).length();const o=yi.set(i[4],i[5],i[6]).length(),c=yi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),gn.copy(this);const l=1/a,h=1/o,p=1/c;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=p,gn.elements[9]*=p,gn.elements[10]*=p,t.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=yn,c=!1){const l=this.elements,h=2*r/(t-e),p=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i);let _,M;if(c)_=r/(a-r),M=a*r/(a-r);else if(o===yn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ps)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=yn,c=!1){const l=this.elements,h=2/(t-e),p=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i);let _,M;if(c)_=1/(a-r),M=a/(a-r);else if(o===yn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ps)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Pr.prototype.isMatrix4=!0;let mt=Pr;const yi=new N,gn=new mt,Nh=new N(0,0,0),Uh=new N(1,1,1),Wn=new N,Bs=new N,an=new N,Fo=new mt,Oo=new ss;class kn{constructor(e=0,t=0,n=0,i=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],p=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const Bo=new N,Ei=new ss,In=new mt,zs=new N,hs=new N,Oh=new N,Bh=new ss,zo=new N(1,0,0),Go=new N(0,1,0),ko=new N(0,0,1),Ho={type:"added"},zh={type:"removed"},Ti={type:"childadded",child:null},Yr={type:"childremoved",child:null};class Rt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new N,t=new kn,n=new ss,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(Go,e)}rotateZ(e){return this.rotateOnAxis(ko,e)}translateOnAxis(e,t){return Bo.copy(e).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(Go,e)}translateZ(e){return this.translateOnAxis(ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(hs,zs,this.up):In.lookAt(zs,hs,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(In),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ho),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zh),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ho),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new N(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gh={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const f=t.getJointPose(M,n),u=this._getHandJoint(l,M);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gh)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Kr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=wh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kr(a,r,e+1/3),this.g=Kr(a,r,e),this.b=Kr(a,r,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=uc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ot.workingToColorSpace($t.copy(this),e),Math.round(rt($t.r*255,0,255))*65536+Math.round(rt($t.g*255,0,255))*256+Math.round(rt($t.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace($t.copy(this),t);const n=$t.r,i=$t.g,r=$t.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(i-r)/p+(i<r?6:0);break;case i:c=(r-n)/p+2;break;case r:c=(n-i)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Gt){ot.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,i=$t.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Gs);const n=Hr(Xn.h,Gs.h,t),i=Hr(Xn.s,Gs.s,t),r=Hr(Xn.l,Gs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Je;Je.NAMES=uc;class _o{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=t}clone(){return new _o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _n=new N,Dn=new N,Zr=new N,Nn=new N,bi=new N,wi=new N,Vo=new N,Jr=new N,Qr=new N,jr=new N,ea=new bt,ta=new bt,na=new bt;class pn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_n.subVectors(i,t),Dn.subVectors(n,t),Zr.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Dn),c=_n.dot(Zr),l=Dn.dot(Dn),h=Dn.dot(Zr),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const d=1/p,m=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,n),na.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ea,r.x),a.addScaledVector(ta,r.y),a.addScaledVector(na,r.z),a}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Dn.subVectors(e,t),_n.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),_n.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;bi.subVectors(i,n),wi.subVectors(r,n),Jr.subVectors(e,n);const c=bi.dot(Jr),l=wi.dot(Jr);if(c<=0&&l<=0)return t.copy(n);Qr.subVectors(e,i);const h=bi.dot(Qr),p=wi.dot(Qr);if(h>=0&&p<=h)return t.copy(i);const d=c*p-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(bi,a);jr.subVectors(e,r);const m=bi.dot(jr),_=wi.dot(jr);if(_>=0&&m<=_)return t.copy(r);const M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(wi,o);const f=h*_-m*p;if(f<=0&&p-h>=0&&m-_>=0)return Vo.subVectors(r,i),o=(p-h)/(p-h+(m-_)),t.copy(i).addScaledVector(Vo,o);const u=1/(f+M+d);return a=M*u,o=d*u,t.copy(n).addScaledVector(bi,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),Hs.subVectors(this.max,us),Ai.subVectors(e.a,us),Ri.subVectors(e.b,us),Ci.subVectors(e.c,us),qn.subVectors(Ri,Ai),Yn.subVectors(Ci,Ri),li.subVectors(Ai,Ci);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-li.z,li.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,li.z,0,-li.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-li.y,li.x,0];return!ia(t,Ai,Ri,Ci,Hs)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,Ai,Ri,Ci,Hs))?!1:(Vs.crossVectors(qn,Yn),t=[Vs.x,Vs.y,Vs.z],ia(t,Ai,Ri,Ci,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new N,new N,new N,new N,new N,new N,new N,new N],xn=new N,ks=new xi,Ai=new N,Ri=new N,Ci=new N,qn=new N,Yn=new N,li=new N,us=new N,Hs=new N,Vs=new N,ci=new N;function ia(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ci.fromArray(s,r);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Lt=new N,Ws=new Qe;let kh=0;class rn extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=Sn,this.version=0,this._normalizationScale=e!==void 0?Lr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):oc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):lc(e,this.array)}}class fc extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pc extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hh=new xi,ds=new N,sa=new N;class rs{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(sa)),this.expandByPoint(ds.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vh=0;const dn=new mt,ra=new Rt,Pi=new N,on=new xi,fs=new xi,zt=new N;class nn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?pc:fc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(on.min,fs.min),on.expandByPoint(zt),zt.addVectors(on.max,fs.max),on.expandByPoint(zt)):(on.expandByPoint(fs.min),on.expandByPoint(fs.max))}on.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)zt.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(e,l),zt.add(Pi)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new N,c[U]=new N;const h=new N,p=new N,d=new N,m=new Qe,_=new Qe,M=new Qe,f=new N,u=new N;function S(U,L,D){l[U]=l[L]=l[D]=1,h.fromBufferAttribute(n,U),p.fromBufferAttribute(n,L),d.fromBufferAttribute(n,D),m.fromBufferAttribute(r,U),_.fromBufferAttribute(r,L),M.fromBufferAttribute(r,D),p.sub(h),d.sub(h),_.sub(m),M.sub(m);const F=1/(_.x*M.y-M.x*_.y);isFinite(F)&&(f.copy(p).multiplyScalar(M.y).addScaledVector(d,-_.y).multiplyScalar(F),u.copy(d).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(F),o[U].add(f),o[L].add(f),o[D].add(f),c[U].add(u),c[L].add(u),c[D].add(u))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,L=b.length;U<L;++U){const D=b[U],F=D.start,W=D.count;for(let C=F,k=F+W;C<k;C+=3)S(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const T=new N,w=new N,A=new N,g=new N;function y(U){A.fromBufferAttribute(i,U),g.copy(A);const L=o[U];T.copy(L),T.sub(A.multiplyScalar(A.dot(L))).normalize(),w.crossVectors(g,L);const F=w.dot(c[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,F)}for(let U=0,L=n.count;U<L;++U)l[U]&&y(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,p=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),M=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,f),h.subVectors(a,r),p.subVectors(i,r),h.cross(p),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),p.subVectors(i,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,p=o.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let M=0,f=c.length;M<f;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*h;for(let u=0;u<h;u++)d[_++]=l[m++]}return new rn(d,h,p)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){const m=l[p];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],p=r[l];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Wo(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Wo(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Wo(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=_i()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const jt=new N;class Rr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Lr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):oc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):lc(e,this.data.array)}}const aa=new N,Xh=new N,qh=new Ze;class Zn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=aa.subVectors(n,t).cross(Xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qh.getNormalMatrix(e),i=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Yh=0;class si extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Yi,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Hl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wi extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Li;const ps=new N,Ii=new N,Di=new N,Ni=new Qe,ms=new Qe,mc=new mt,Xs=new N,gs=new N,qs=new N,Xo=new Qe,oa=new Qe,qo=new Qe;class Es extends Rt{constructor(e=new Wi){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wh(t,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new Rr(n,3,0,!1)),Li.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=Li,this.material=e,this.center=new Qe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),mc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Di.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ys(Xs.set(-.5,-.5,0),Di,a,Ii,i,r),Ys(gs.set(.5,-.5,0),Di,a,Ii,i,r),Ys(qs.set(.5,.5,0),Di,a,Ii,i,r),Xo.set(0,0),oa.set(1,0),qo.set(1,1);let o=e.ray.intersectTriangle(Xs,gs,qs,!1,ps);if(o===null&&(Ys(gs.set(-.5,.5,0),Di,a,Ii,i,r),oa.set(0,1),o=e.ray.intersectTriangle(Xs,qs,gs,!1,ps),o===null))return;const c=e.ray.origin.distanceTo(ps);c<e.near||c>e.far||t.push({distance:c,point:ps.clone(),uv:pn.getInterpolation(ps,Xs,gs,qs,Xo,oa,qo,new Qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Ys(s,e,t,n,i,r){Ni.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ms.x=r*Ni.x-i*Ni.y,ms.y=i*Ni.x+r*Ni.y):ms.copy(Ni),s.copy(e),s.x+=ms.x,s.y+=ms.y,s.applyMatrix4(mc)}const Fn=new N,la=new N,$s=new N,Ks=new N;class gc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){la.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(la);const r=e.distanceTo(t)*.5,a=-this.direction.dot($s),o=Ks.dot(this.direction),c=-Ks.dot($s),l=Ks.lengthSq(),h=Math.abs(1-a*a);let p,d,m,_;if(h>0)if(p=a*c-o,d=a*o-c,_=r*h,p>=0)if(d>=-_)if(d<=_){const M=1/h;p*=M,d*=M,m=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;else d=-r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;else d<=-_?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+d*(d+2*c)+l):d<=_?(p=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+d*(d+2*c)+l);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(la).addScaledVector($s,d),m}intersectSphere(e,t){if(e.radius<0)return null;Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=e.x-a.x,d=e.y-a.y,m=e.z-a.z,_=t.x-a.x,M=t.y-a.y,f=t.z-a.z,u=n.x-a.x,S=n.y-a.y,b=n.z-a.z,T=Math.abs(c),w=Math.abs(l),A=Math.abs(h);let g,y,U,L,D,F,W,C,k,K,z,ie;if(T>=w&&T>=A?(U=c,F=p,k=_,ie=u,c>=0?(g=l,y=h,L=d,D=m,W=M,C=f,K=S,z=b):(g=h,y=l,L=m,D=d,W=f,C=M,K=b,z=S)):w>=A?(U=l,F=d,k=M,ie=S,l>=0?(g=h,y=c,L=m,D=p,W=f,C=_,K=b,z=u):(g=c,y=h,L=p,D=m,W=_,C=f,K=u,z=b)):(U=h,F=m,k=f,ie=b,h>=0?(g=c,y=l,L=p,D=d,W=_,C=M,K=u,z=S):(g=l,y=c,L=d,D=p,W=M,C=_,K=S,z=u)),U===0)return null;const V=g/U,Q=y/U,ee=1/U,be=L-V*F,He=D-Q*F,q=W-V*k,ae=C-Q*k,Ee=K-V*ie,Ue=z-Q*ie,me=Ee*ae-Ue*q,Ve=be*Ue-He*Ee,vt=q*He-ae*be;if(i){if(me<0||Ve<0||vt<0)return null}else if((me<0||Ve<0||vt<0)&&(me>0||Ve>0||vt>0))return null;const Be=me+Ve+vt;if(Be===0)return null;const Xe=ee*(me*F+Ve*k+vt*ie);return(Be>0?Xe<0:Xe>0)?null:this.at(Xe/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yo=new mt,hi=new gc,Zs=new rs,$o=new N,Js=new N,Qs=new N,js=new N,ca=new N,er=new N,Ko=new N,tr=new N;class te extends Rt{constructor(e=new nn,t=new pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],p=r[c];h!==0&&(ca.fromBufferAttribute(p,e),a?er.addScaledVector(ca,h):er.addScaledVector(ca.sub(t),h))}t.add(er)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(Zs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Zs,$o)===null||hi.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Yo.copy(r).invert(),hi.copy(e.ray).applyMatrix4(Yo),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const f=d[_],u=a[f.materialIndex],S=Math.max(f.start,m.start),b=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,w=b;T<w;T+=3){const A=o.getX(T),g=o.getX(T+1),y=o.getX(T+2);i=nr(this,u,e,n,l,h,p,A,g,y),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let f=_,u=M;f<u;f+=3){const S=o.getX(f),b=o.getX(f+1),T=o.getX(f+2);i=nr(this,a,e,n,l,h,p,S,b,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const f=d[_],u=a[f.materialIndex],S=Math.max(f.start,m.start),b=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,w=b;T<w;T+=3){const A=T,g=T+1,y=T+2;i=nr(this,u,e,n,l,h,p,A,g,y),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let f=_,u=M;f<u;f+=3){const S=f,b=f+1,T=f+2;i=nr(this,a,e,n,l,h,p,S,b,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function $h(s,e,t,n,i,r,a,o){let c;if(e.side===tn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===pi,o),c===null)return null;tr.copy(o),tr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(tr);return l<t.near||l>t.far?null:{distance:l,point:tr.clone(),object:s}}function nr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Js),s.getVertexPosition(c,Qs),s.getVertexPosition(l,js);const h=$h(s,e,t,n,Js,Qs,js,Ko);if(h){const p=new N;pn.getBarycoord(Ko,Js,Qs,js,p),i&&(h.uv=pn.getInterpolatedAttribute(i,o,c,l,p,new Qe)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,c,l,p,new Qe)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,c,l,p,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};pn.getNormal(Js,Qs,js,d.normal),h.face=d,h.barycoord=p}return h}class _c extends Kt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Vt,h=Vt,p,d){super(null,a,o,c,l,h,i,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo extends rn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ui=new mt,Jo=new mt,ir=[],Qo=new xi,Kh=new mt,_s=new te,xs=new rs;class Zh extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),Qo.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Qo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),xs.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),e.ray.intersectsSphere(xs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ui),Jo.multiplyMatrices(n,Ui),_s.matrixWorld=Jo,_s.raycast(e,ir);for(let a=0,o=ir.length;a<o;a++){const c=ir[a];c.instanceId=r,c.object=this,t.push(c)}ir.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _c(new Float32Array(i*this.count),i,this.count,uo,Sn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ui=new rs,Jh=new Qe(.5,.5),sr=new N;class Ls{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,r=new Zn,a=new Zn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],d=r[6],m=r[7],_=r[8],M=r[9],f=r[10],u=r[11],S=r[12],b=r[13],T=r[14],w=r[15];if(i[0].setComponents(l-a,m-h,u-_,w-S).normalize(),i[1].setComponents(l+a,m+h,u+_,w+S).normalize(),i[2].setComponents(l+o,m+p,u+M,w+b).normalize(),i[3].setComponents(l-o,m-p,u-M,w-b).normalize(),n)i[4].setComponents(c,d,f,T).normalize(),i[5].setComponents(l-c,m-d,u-f,w-T).normalize();else if(i[4].setComponents(l-c,m-d,u-f,w-T).normalize(),t===yn)i[5].setComponents(l+c,m+d,u+f,w+T).normalize();else if(t===Ps)i[5].setComponents(c,d,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=Jh.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(sr.x=i.normal.x>0?e.max.x:e.min.x,sr.y=i.normal.y>0?e.max.y:e.min.y,sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const jo=new mt;class xo{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];jo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ls),n[i].setFromProjectionMatrix(jo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ls),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new xo().copy(this)}}class xc extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const el=new mt,no=new gc,rr=new rs,ar=new N;class vc extends Rt{constructor(e=new nn,t=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;el.copy(i).invert(),no.copy(e.ray).applyMatrix4(el);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=d,M=m;_<M;_++){const f=l.getX(_);ar.fromBufferAttribute(p,f),tl(ar,f,c,i,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=d,M=m;_<M;_++)ar.fromBufferAttribute(p,_),tl(ar,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tl(s,e,t,n,i,r,a){const o=no.distanceSqToPoint(s);if(o<t){const c=new N;no.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Mc extends Kt{constructor(e=[],t=es,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ir extends Kt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ns extends Kt{constructor(e,t,n=Rn,i,r,a,o=Vt,c=Vt,l,h=ni,p=1){if(h!==ni&&h!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Sc extends ns{constructor(e,t=Rn,n=es,i,r,a=Vt,o=Vt,c,l=ni){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yc extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ke extends nn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],p=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(p,2));function _(M,f,u,S,b,T,w,A,g,y,U){const L=T/g,D=w/y,F=T/2,W=w/2,C=A/2,k=g+1,K=y+1;let z=0,ie=0;const V=new N;for(let Q=0;Q<K;Q++){const ee=Q*D-W;for(let be=0;be<k;be++){const He=be*L-F;V[M]=He*S,V[f]=ee*b,V[u]=C,l.push(V.x,V.y,V.z),V[M]=0,V[f]=0,V[u]=A>0?1:-1,h.push(V.x,V.y,V.z),p.push(be/g),p.push(1-Q/y),z+=1}}for(let Q=0;Q<y;Q++)for(let ee=0;ee<g;ee++){const be=d+ee+k*Q,He=d+ee+k*(Q+1),q=d+(ee+1)+k*(Q+1),ae=d+(ee+1)+k*Q;c.push(be,He,ae),c.push(He,q,ae),ie+=6}o.addGroup(m,ie,U),m+=ie,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fi extends nn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new N,h=new Qe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){const m=n+p/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(o,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Et extends nn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],p=[],d=[],m=[];let _=0;const M=[],f=n/2;let u=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(m,2));function S(){const T=new N,w=new N;let A=0;const g=(t-e)/n;for(let y=0;y<=r;y++){const U=[],L=y/r,D=L*(t-e)+e;for(let F=0;F<=i;F++){const W=F/i,C=W*c+o,k=Math.sin(C),K=Math.cos(C);w.x=D*k,w.y=-L*n+f,w.z=D*K,p.push(w.x,w.y,w.z),T.set(k,g,K).normalize(),d.push(T.x,T.y,T.z),m.push(W,1-L),U.push(_++)}M.push(U)}for(let y=0;y<i;y++)for(let U=0;U<r;U++){const L=M[U][y],D=M[U+1][y],F=M[U+1][y+1],W=M[U][y+1];(e>0||U!==0)&&(h.push(L,D,W),A+=3),(t>0||U!==r-1)&&(h.push(D,F,W),A+=3)}l.addGroup(u,A,0),u+=A}function b(T){const w=_,A=new Qe,g=new N;let y=0;const U=T===!0?e:t,L=T===!0?1:-1;for(let F=1;F<=i;F++)p.push(0,f*L,0),d.push(0,L,0),m.push(.5,.5),_++;const D=_;for(let F=0;F<=i;F++){const C=F/i*c+o,k=Math.cos(C),K=Math.sin(C);g.x=U*K,g.y=f*L,g.z=U*k,p.push(g.x,g.y,g.z),d.push(0,L,0),A.x=k*.5+.5,A.y=K*.5*L+.5,m.push(A.x,A.y),_++}for(let F=0;F<i;F++){const W=w+F,C=D+F;T===!0?h.push(C,C+1,W):h.push(C+1,C,W),y+=3}l.addGroup(u,y,T===!0?1:2),u+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vo extends Et{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new vo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ft extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,p=e/o,d=t/c,m=[],_=[],M=[],f=[];for(let u=0;u<h;u++){const S=u*d-a;for(let b=0;b<l;b++){const T=b*p-r;_.push(T,-S,0),M.push(0,0,1),f.push(b/o),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<o;S++){const b=S+l*u,T=S+l*(u+1),w=S+1+l*(u+1),A=S+1+l*u;m.push(b,T,A),m.push(T,w,A)}this.setIndex(m),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(M,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zi extends nn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],p=new N,d=new N,m=[],_=[],M=[],f=[];for(let u=0;u<=n;u++){const S=[],b=u/n,T=a+b*o,w=e*Math.cos(T),A=Math.sqrt(e*e-w*w);let g=0;u===0&&a===0?g=.5/t:u===n&&c===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){const U=y/t,L=i+U*r;p.x=-A*Math.cos(L),p.y=w,p.z=A*Math.sin(L),_.push(p.x,p.y,p.z),d.copy(p).normalize(),M.push(d.x,d.y,d.z),f.push(U+g,1-b),S.push(l++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const b=h[u][S+1],T=h[u][S],w=h[u+1][S],A=h[u+1][S+1];(u!==0||a>0)&&m.push(b,T,A),(u!==n-1||c<Math.PI)&&m.push(T,w,A)}this.setIndex(m),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(M,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ji extends nn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],p=[],d=new N,m=new N,_=new N;for(let M=0;M<=n;M++){const f=a+M/n*o;for(let u=0;u<=i;u++){const S=u/i*r;m.x=(e+t*Math.cos(f))*Math.cos(S),m.y=(e+t*Math.cos(f))*Math.sin(S),m.z=t*Math.sin(f),l.push(m.x,m.y,m.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),_.subVectors(m,d).normalize(),h.push(_.x,_.y,_.z),p.push(u/i),p.push(M/n)}}for(let M=1;M<=n;M++)for(let f=1;f<=i;f++){const u=(i+1)*M+f-1,S=(i+1)*(M-1)+f-1,b=(i+1)*(M-1)+f,T=(i+1)*M+f;c.push(u,S,T),c.push(S,b,T)}this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function is(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(nl(i))i.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(nl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function en(s){const e={};for(let t=0;t<s.length;t++){const n=is(s[t]);for(const i in n)e[i]=n[i]}return e}function nl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Qh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ec(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const jh={clone:is,merge:en};var eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eu,this.fragmentShader=tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Qh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(i.value);break;case"v2":this.uniforms[n].value=new Qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new N().fromArray(i.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nu extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oe extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Er,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iu extends Oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return $i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){$i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class su extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Er,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ru extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class au extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mo extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ou extends Mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ha=new mt,il=new N,sl=new N;class Tc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;il.setFromMatrixPosition(e.matrixWorld),t.position.copy(il),sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ha,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const or=new N,lr=new ss,Tn=new N;class bc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(or,lr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(or,lr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new N,rl=new Qe,al=new Qe;class cn extends bc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,rl,al),t.subVectors(al,rl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class lu extends Tc{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Dr extends Mo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class wc extends bc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cu extends Tc{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hu extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new cu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Fi=-90,Oi=1;class io extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(Fi,Oi,e,t);i.layers=this.layers,this.add(i);const r=new cn(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new cn(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new cn(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const c=new cn(Fi,Oi,e,t);c.layers=this.layers,this.add(c);const l=new cn(Fi,Oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class uu extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function ol(s,e,t,n){const i=du(n);switch(t){case ec:return s*e;case uo:return s*e/i.components*i.byteLength;case fo:return s*e/i.components*i.byteLength;case mi:return s*e*2/i.components*i.byteLength;case po:return s*e*2/i.components*i.byteLength;case tc:return s*e*3/i.components*i.byteLength;case An:return s*e*4/i.components*i.byteLength;case mo:return s*e*4/i.components*i.byteLength;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gr:case _r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ra:return Math.max(s,16)*Math.max(e,8)/4;case ba:case Aa:return Math.max(s,8)*Math.max(e,8)/2;case Ca:case Pa:case Ia:case Da:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case La:case Sr:case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Va:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ka:case Za:case Ja:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qa:case ja:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yr:case eo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function du(s){switch(s){case hn:case Zl:return{byteLength:1,components:1};case Cs:case Jl:case Cn:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case Rn:case lo:case Sn:return{byteLength:4,components:1};case Ql:case jl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);function Ac(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function fu(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,p=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=s.SHORT;else if(l instanceof Uint32Array)m=s.UNSIGNED_INT;else if(l instanceof Int32Array)m=s.INT;else if(l instanceof Int8Array)m=s.BYTE;else if(l instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const h=c.array,p=c.updateRanges;if(s.bindBuffer(l,o),p.length===0)s.bufferSubData(l,0,h);else{p.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<p.length;m++){const _=p[d],M=p[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,p[d]=M)}p.length=d+1;for(let m=0,_=p.length;m<_;m++){const M=p[m];s.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Au=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Du=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ud=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ef=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ff=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:pu,alphahash_pars_fragment:mu,alphamap_fragment:gu,alphamap_pars_fragment:_u,alphatest_fragment:xu,alphatest_pars_fragment:vu,aomap_fragment:Mu,aomap_pars_fragment:Su,batching_pars_vertex:yu,batching_vertex:Eu,begin_vertex:Tu,beginnormal_vertex:bu,bsdfs:wu,iridescence_fragment:Au,bumpmap_pars_fragment:Ru,clipping_planes_fragment:Cu,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Lu,clipping_planes_vertex:Iu,color_fragment:Du,color_pars_fragment:Nu,color_pars_vertex:Uu,color_vertex:Fu,common:Ou,defaultnormal_vertex:Bu,displacementmap_pars_vertex:zu,displacementmap_vertex:Gu,emissivemap_fragment:ku,emissivemap_pars_fragment:Hu,colorspace_fragment:Vu,colorspace_pars_fragment:Wu,envmap_fragment:Xu,envmap_common_pars_fragment:qu,envmap_pars_fragment:Yu,envmap_pars_vertex:$u,envmap_physical_pars_fragment:rd,envmap_vertex:Ku,fog_vertex:Zu,fog_pars_vertex:Ju,fog_fragment:Qu,fog_pars_fragment:ju,gradientmap_pars_fragment:ed,lightmap_pars_fragment:td,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:hd,lights_physical_pars_fragment:ud,lights_fragment_begin:dd,lights_fragment_maps:fd,lights_fragment_end:pd,lightprobes_pars_fragment:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:vd,map_fragment:Md,map_pars_fragment:Sd,map_particle_fragment:yd,map_particle_pars_fragment:Ed,metalnessmap_fragment:Td,metalnessmap_pars_fragment:bd,morphinstance_vertex:wd,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Id,normal_pars_fragment:Dd,normal_pars_vertex:Nd,normal_vertex:Ud,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Gd,opaque_fragment:kd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:jd,skinning_pars_vertex:ef,skinning_vertex:tf,skinnormal_vertex:nf,specularmap_fragment:sf,specularmap_pars_fragment:rf,tonemapping_fragment:af,tonemapping_pars_fragment:of,transmission_fragment:lf,transmission_pars_fragment:cf,uv_pars_fragment:hf,uv_pars_vertex:uf,uv_vertex:df,worldpos_vertex:ff,background_vert:pf,background_frag:mf,backgroundCube_vert:gf,backgroundCube_frag:_f,cube_vert:xf,cube_frag:vf,depth_vert:Mf,depth_frag:Sf,distance_vert:yf,distance_frag:Ef,equirect_vert:Tf,equirect_frag:bf,linedashed_vert:wf,linedashed_frag:Af,meshbasic_vert:Rf,meshbasic_frag:Cf,meshlambert_vert:Pf,meshlambert_frag:Lf,meshmatcap_vert:If,meshmatcap_frag:Df,meshnormal_vert:Nf,meshnormal_frag:Uf,meshphong_vert:Ff,meshphong_frag:Of,meshphysical_vert:Bf,meshphysical_frag:zf,meshtoon_vert:Gf,meshtoon_frag:kf,points_vert:Hf,points_frag:Vf,shadow_vert:Wf,shadow_frag:Xf,sprite_vert:qf,sprite_frag:Yf},ve={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},wn={basic:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:en([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:en([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:en([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:en([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:en([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:en([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:en([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:en([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:en([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:en([ve.lights,ve.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};wn.physical={uniforms:en([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const cr={r:0,b:0,g:0},$f=new mt,Rc=new Ze;Rc.set(-1,0,0,0,1,0,0,0,1);function Kf(s,e,t,n,i,r){const a=new Je(0);let o=i===!0?0:1,c,l,h=null,p=0,d=null;function m(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const T=S.backgroundBlurriness>0;b=e.get(b,T)}return b}function _(S){let b=!1;const T=m(S);T===null?f(a,o):T&&T.isColor&&(f(T,1),b=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(S,b){const T=m(b);T&&T.isCubeTexture?(l===void 0&&(l=new te(new ke(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:is(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($f.makeRotationFromEuler(b.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rc),l.material.toneMapped=ot.getTransfer(T.colorSpace)!==dt,(h!==T||p!==T.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=T,p=T.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new te(new ft(2,2),new ii({name:"BackgroundMaterial",uniforms:is(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ot.getTransfer(T.colorSpace)!==dt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||p!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,p=T.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,b){S.getRGB(cr,Ec(s)),t.buffers.color.setClear(cr.r,cr.g,cr.b,b,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:_,addToRenderList:M,dispose:u}}function Zf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(D,F,W,C,k){let K=!1;const z=p(D,C,W,F);r!==z&&(r=z,l(r.object)),K=m(D,C,W,k),K&&_(D,C,W,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,T(D,F,W,C),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return s.createVertexArray()}function l(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function p(D,F,W,C){const k=C.wireframe===!0;let K=n[F.id];K===void 0&&(K={},n[F.id]=K);const z=D.isInstancedMesh===!0?D.id:0;let ie=K[z];ie===void 0&&(ie={},K[z]=ie);let V=ie[W.id];V===void 0&&(V={},ie[W.id]=V);let Q=V[k];return Q===void 0&&(Q=d(c()),V[k]=Q),Q}function d(D){const F=[],W=[],C=[];for(let k=0;k<t;k++)F[k]=0,W[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:C,object:D,attributes:{},index:null}}function m(D,F,W,C){const k=r.attributes,K=F.attributes;let z=0;const ie=W.getAttributes();for(const V in ie)if(ie[V].location>=0){const ee=k[V];let be=K[V];if(be===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function _(D,F,W,C){const k={},K=F.attributes;let z=0;const ie=W.getAttributes();for(const V in ie)if(ie[V].location>=0){let ee=K[V];ee===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),k[V]=be,z++}r.attributes=k,r.attributesNum=z,r.index=C}function M(){const D=r.newAttributes;for(let F=0,W=D.length;F<W;F++)D[F]=0}function f(D){u(D,0)}function u(D,F){const W=r.newAttributes,C=r.enabledAttributes,k=r.attributeDivisors;W[D]=1,C[D]===0&&(s.enableVertexAttribArray(D),C[D]=1),k[D]!==F&&(s.vertexAttribDivisor(D,F),k[D]=F)}function S(){const D=r.newAttributes,F=r.enabledAttributes;for(let W=0,C=F.length;W<C;W++)F[W]!==D[W]&&(s.disableVertexAttribArray(W),F[W]=0)}function b(D,F,W,C,k,K,z){z===!0?s.vertexAttribIPointer(D,F,W,k,K):s.vertexAttribPointer(D,F,W,C,k,K)}function T(D,F,W,C){M();const k=C.attributes,K=W.getAttributes(),z=F.defaultAttributeValues;for(const ie in K){const V=K[ie];if(V.location>=0){let Q=k[ie];if(Q===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const ee=Q.normalized,be=Q.itemSize,He=e.get(Q);if(He===void 0)continue;const q=He.buffer,ae=He.type,Ee=He.bytesPerElement,Ue=ae===s.INT||ae===s.UNSIGNED_INT||Q.gpuType===lo;if(Q.isInterleavedBufferAttribute){const me=Q.data,Ve=me.isInterleavedBuffer===!0?me.stride:me.itemSize,vt=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Be=0;Be<V.locationSize;Be++)u(V.location+Be,me.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Be=0;Be<V.locationSize;Be++)f(V.location+Be);s.bindBuffer(s.ARRAY_BUFFER,q);for(let Be=0;Be<V.locationSize;Be++)b(V.location+Be,be/V.locationSize,ae,ee,Ve*Ee,(vt+be/V.locationSize*Be)*Ee,Ue)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)u(V.location+me,Q.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<V.locationSize;me++)f(V.location+me);s.bindBuffer(s.ARRAY_BUFFER,q);for(let me=0;me<V.locationSize;me++)b(V.location+me,be/V.locationSize,ae,ee,be*Ee,be/V.locationSize*me*Ee,Ue)}}else if(z!==void 0){const ee=z[ie];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(V.location,ee);break;case 3:s.vertexAttrib3fv(V.location,ee);break;case 4:s.vertexAttrib4fv(V.location,ee);break;default:s.vertexAttrib1fv(V.location,ee)}}}}S()}function w(){U();for(const D in n){const F=n[D];for(const W in F){const C=F[W];for(const k in C){const K=C[k];for(const z in K)h(K[z].object),delete K[z];delete C[k]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const W in F){const C=F[W];for(const k in C){const K=C[k];for(const z in K)h(K[z].object),delete K[z];delete C[k]}}delete n[D.id]}function g(D){for(const F in n){const W=n[F];for(const C in W){const k=W[C];if(k[D.id]===void 0)continue;const K=k[D.id];for(const z in K)h(K[z].object),delete K[z];delete k[D.id]}}}function y(D){for(const F in n){const W=n[F],C=D.isInstancedMesh===!0?D.id:0,k=W[C];if(k!==void 0){for(const K in k){const z=k[K];for(const ie in z)h(z[ie].object),delete z[ie];delete k[K]}delete W[C],Object.keys(W).length===0&&delete n[F]}}}function U(){L(),a=!0,r!==i&&(r=i,l(r.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:U,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:f,disableUnusedAttributes:S}}function Jf(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let m=0;m<h;m++)d+=l[m];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(g){return!(g!==An&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const y=g===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==hn&&g!==Sn&&!y&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&($e("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:T,maxSamples:w,samples:A}}function jf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Zn,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||n!==0||i;return i=d,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,m){const _=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,u=s.get(p);if(!i||_===null||_.length===0||r&&!f)r?h(null):l();else{const S=r?0:n,b=S*4;let T=u.clippingState||null;c.value=T,T=h(_,d,b,m);for(let w=0;w!==b;++w)T[w]=t[w];u.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,m,_){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=c.value,_!==!0||f===null){const u=m+M*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<u)&&(f=new Float32Array(u));for(let b=0,T=m;b!==M;++b,T+=4)a.copy(p[b]).applyMatrix4(S,o),a.normal.toArray(f,T),f[T+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}class So extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ke(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:qi});r.uniforms.tEquirect.value=t;const a=new te(i,r),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=It),new io(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ll=256,ep=3,tp=20,Cc=256,Pc=16,np=3,ip=new N,sp=new Je;class Is{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new io(1,10,null),this._boxMesh=new te(new ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=ip}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const p=c.autoClear,d=c.autoClearColor,m=c.autoClearDepth,_=c.autoClearStencil,M=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(e.background=c.getClearColor(sp));const f=new io(n,i,h);return f.position.copy(o),f.update(c,e),c.autoClear=p,c.autoClearColor=d,c.autoClearDepth=m,c.autoClearStencil=_,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ll,Ah(e))}_fromTexture(e,t){e.mapping===es||e.mapping===Rs?this._setSize(e.image.length===0?ll:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=cl(e,!1,!1),n=Math.log2(e)-ep;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=cl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===es||e.mapping===Rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=rp(),this._integrationMaterial=ap());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Pc);for(let a=0;a<=n;a++){const o=Is.lodToRoughness(a,n);if(a>n-np)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Cc*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=op());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function cl(s,e,t){return new So(s,{minFilter:ei,generateMipmaps:e,type:Cn,colorSpace:Tr,depthBuffer:t})}function Ns(s,e,t){return new ii({name:s,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:tn,blending:qi,depthTest:!1,depthWrite:!1})}function rp(){return Ns("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ap(){return Ns("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function op(){return Ns("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${tp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function hl(){return Ns("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ul(){return Ns("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function lp(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===Or||m===Br)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const M=new So(_.height);return M.fromEquirectangularTexture(s,d),e.set(d,M),d.addEventListener("dispose",l),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const m=d.mapping,_=m===Or||m===Br,M=m===es||m===Rs;if(_||M){let f=t.get(d);const u=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new Is(s)),f=_?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),f.texture;if(f!==void 0)return f.texture;{const S=d.image;return _&&S&&S.height>0||M&&S&&c(S)?(n===null&&(n=new Is(s)),f=_?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),d.addEventListener("dispose",h),f.texture):null}}}return d}function o(d,m){return m===Or?d.mapping=es:m===Br&&(d.mapping=Rs),d}function c(d){let m=0;const _=6;for(let M=0;M<_;M++)d[M]!==void 0&&m++;return m===_}function l(d){const m=d.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function cp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$i("WebGLRenderer: "+n+" extension not supported."),i}}}function hp(s,e,t,n){const i={},r=new WeakMap,a=new FinalizationRegistry(_=>delete i[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const f in _.attributes)e.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete i[_.id],a.unregister(_);const M=r.get(_);M&&(e.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,M){return i[M.id]!==void 0||(M.addEventListener("dispose",o),i[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(_){const M=_.attributes;for(const f in M)e.update(M[f],s.ARRAY_BUFFER)}function p(_){const M=_.index,f=_.attributes.position;let u=0;if(f===void 0)return;const S=M!==null?M.array.length:f.array.length/3-1,b=f.count>=65535?pc:fc,T=new b(Math.ceil(S/3)*6,1),w=T.array;if(M!==null){const g=M.array;u=M.version;for(let y=0,U=0;y<S;y+=3){const L=g[y+0],D=g[y+1],F=g[y+2];w[U++]=L,w[U++]=D,w[U++]=D,w[U++]=F,w[U++]=F,w[U++]=L}}else{u=f.version;for(let g=0,y=0;g<S;g+=3){const U=g+0,L=g+1,D=g+2;w[y++]=U,w[y++]=L,w[y++]=L,w[y++]=D,w[y++]=D,w[y++]=U}}T.version=u;const A=r.get(_);A&&e.remove(A),r.set(_,T)}function d(_){const M=r.get(_);if(M){const f=_.index;f!==null&&M.version<f.version&&p(_)}else p(_);return r.get(_)}function m(){for(const _ in i){const M=i[_].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:d,dispose:m}}function up(s,e,t){let n;function i(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){s.drawElements(n,d,r,p*a),t.update(d,n,1)}function l(p,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,p*a,m),t.update(d,n,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,m);let M=0;for(let f=0;f<m;f++)M+=d[f];t.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function dp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fp(s,e,t){const n=new WeakMap,i=new bt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let L=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var m=L;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),M===!0&&(T=2),f===!0&&(T=3);let w=o.attributes.position.count*T,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const g=new Float32Array(w*A*4*p),y=new cc(g,w,A,p);y.type=Sn,y.needsUpdate=!0;const U=T*4;for(let D=0;D<p;D++){const F=u[D],W=S[D],C=b[D],k=w*A*4*D;for(let K=0;K<F.count;K++){const z=K*U;_===!0&&(i.fromBufferAttribute(F,K),g[k+z+0]=i.x,g[k+z+1]=i.y,g[k+z+2]=i.z,g[k+z+3]=0),M===!0&&(i.fromBufferAttribute(W,K),g[k+z+4]=i.x,g[k+z+5]=i.y,g[k+z+6]=i.z,g[k+z+7]=0),f===!0&&(i.fromBufferAttribute(C,K),g[k+z+8]=i.x,g[k+z+9]=i.y,g[k+z+10]=i.z,g[k+z+11]=C.itemSize===4?i.w:1)}}d={count:p,texture:y,size:new Qe(w,A)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let f=0;f<l.length;f++)_+=l[f];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",M),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function pp(s,e,t,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,p=l.geometry,d=e.get(l,p);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const mp={[Vl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[oo]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function gp(s,e,t,n,i,r){const a=new En(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new nn;h.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const p=new nu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new te(h,p),m=new wc(-1,1,1,-1,0,1);let _=null,M=null,f=!1,u,S=null,b=[],T=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),c!==null&&c.setSize(w,A);for(let g=0;g<b.length;g++){const y=b[g];y.setSize&&y.setSize(w,A)}},this.setEffects=function(w){b=w,T=b.length>0&&b[0].isRenderPass===!0;const A=a.width,g=a.height;b.length>0&&o===null&&(o=new En(A,g,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new En(A,g,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));const y=i===!0&&b.some(U=>U.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new ns(A,g),r===!0&&(l.format=ti,l.type=ts)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let U=0;U<b.length;U++){const L=b[U];L.setSize&&L.setSize(A,g),y&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(l)}},this.begin=function(w,A){if(f||w.toneMapping===zn&&b.length===0)return!1;if(S=A,A!==null){const g=A.width,y=A.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return T===!1&&w.setRenderTarget(a),u=w.toneMapping,w.toneMapping=zn,!0},this.hasRenderPass=function(){return T},this.end=function(w,A){w.toneMapping=u,f=!0;let g=a,y=o;for(let U=0;U<b.length;U++){const L=b[U];L.enabled!==!1&&(L.render(w,y,g,A),L.needsSwap!==!1&&(g=y,y=y===o?c:o))}if(_!==w.outputColorSpace||M!==w.toneMapping){_=w.outputColorSpace,M=w.toneMapping,p.defines={},ot.getTransfer(_)===dt&&(p.defines.SRGB_TRANSFER="");const U=mp[M];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(S),w.render(d,m),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}const Lc=new Kt,Ic=new ns(1,1),Dc=new Sc(1),Nc=new cc,Uc=new Dh,Fc=new Mc,dl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function as(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=dl[i];if(r===void 0&&(r=new Float32Array(i),dl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Nr(s,e){let t=fl[e];t===void 0&&(t=new Int32Array(e),fl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function _p(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function Mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function Sp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;gl.set(n),s.uniformMatrix2fv(this.addr,!1,gl),Ft(t,n)}}function yp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;ml.set(n),s.uniformMatrix3fv(this.addr,!1,ml),Ft(t,n)}}function Ep(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;pl.set(n),s.uniformMatrix4fv(this.addr,!1,pl),Ft(t,n)}}function Tp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function wp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function Ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function Rp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function Pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function Lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function Ur(s){return s.version===0&&(s.compareFunction=sc,s.needsUpdate=!0),s}function Ip(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ur(Ic):r=Lc,t.setTexture2D(e||r,i)}function Dp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uc,i)}function Np(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ur(Dc):r=Fc,t.setTextureCube(e||r,i)}function Up(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nc,i)}function Fp(s){switch(s){case 5126:return _p;case 35664:return xp;case 35665:return vp;case 35666:return Mp;case 35674:return Sp;case 35675:return yp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return bp;case 35668:case 35672:return wp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Up}}function Op(s,e){s.uniform1fv(this.addr,e)}function Bp(s,e){const t=as(e,this.size,2);s.uniform2fv(this.addr,t)}function zp(s,e){const t=as(e,this.size,3);s.uniform3fv(this.addr,t)}function Gp(s,e){const t=as(e,this.size,4);s.uniform4fv(this.addr,t)}function kp(s,e){const t=as(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Hp(s,e){const t=as(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Vp(s,e){const t=as(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Wp(s,e){s.uniform1iv(this.addr,e)}function Xp(s,e){s.uniform2iv(this.addr,e)}function qp(s,e){s.uniform3iv(this.addr,e)}function Yp(s,e){s.uniform4iv(this.addr,e)}function $p(s,e){s.uniform1uiv(this.addr,e)}function Kp(s,e){s.uniform2uiv(this.addr,e)}function Zp(s,e){s.uniform3uiv(this.addr,e)}function Jp(s,e){s.uniform4uiv(this.addr,e)}function Qp(s,e,t){const n=this.cache,i=e.length,r=Nr(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ur(Ic):a=Lc;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function jp(s,e,t){const n=this.cache,i=e.length,r=Nr(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Uc,r[a])}function em(s,e,t){const n=this.cache,i=e.length,r=Nr(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Ur(Dc):a=Fc;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function tm(s,e,t){const n=this.cache,i=e.length,r=Nr(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nc,r[a])}function nm(s){switch(s){case 5126:return Op;case 35664:return Bp;case 35665:return zp;case 35666:return Gp;case 35674:return kp;case 35675:return Hp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return $p;case 36294:return Kp;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}class im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fp(t.type)}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nm(t.type)}}class rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function _l(s,e){s.seq.push(e),s.map[e.id]=e}function am(s,e,t){const n=s.name,i=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),a=ua.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){_l(t,l===void 0?new im(o,s,e):new sm(o,s,e));break}else{let p=t.map[o];p===void 0&&(p=new rm(o),_l(t,p)),t=p}}}class xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);am(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const om=37297;let lm=0;function cm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const vl=new Ze;function hm(s){ot._getMatrix(vl,ot.workingColorSpace,s);const e=`mat3( ${vl.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case br:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ml(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+cm(s.getShaderSource(e),o)}else return r}function um(s,e){const t=hm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const dm={[Vl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[oo]:"ACESFilmic",[Yl]:"AgX",[$l]:"Neutral",[ql]:"Custom"};function fm(s,e){const t=dm[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new N;function pm(){ot.getLuminanceCoefficients(hr);const s=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function gm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _m(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ts(s){return s!==""}function Sl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function yl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(s){return s.replace(xm,vm)}function vm(s,e){const t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return so(t)}const Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(s){return s.replace(Mm,Sm)}function Sm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ym={[ws]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function Em(s){return ym[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tm={[Rs]:"ENVMAP_MODE_REFRACTION"};function bm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wm={[ao]:"ENVMAP_BLENDING_MULTIPLY",[uh]:"ENVMAP_BLENDING_MIX",[dh]:"ENVMAP_BLENDING_ADD"};function Am(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wm[s.combine]||"ENVMAP_BLENDING_NONE"}function Rm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Em(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=bm(t),p=Am(t),d=mm(t),m=gm(r),_=i.createProgram();let M,f,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ts).join(`
`),M.length>0&&(M+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ts).join(`
`),f.length>0&&(f+=`
`)):(M=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),f=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?tt.tonemapping_pars_fragment:"",t.toneMapping!==zn?fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,um("linearToOutputTexel",t.outputColorSpace),pm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),a=so(a),a=Sl(a,t),a=yl(a,t),o=so(o),o=Sl(o,t),o=yl(o,t),a=El(a),o=El(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,f=["#define varying in",t.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=u+M+a,b=u+f+o,T=xl(i,i.VERTEX_SHADER,S),w=xl(i,i.FRAGMENT_SHADER,b);i.attachShader(_,T),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(L){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(w)||"",C=D.trim(),k=F.trim(),K=W.trim();let z=!0,ie=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,w);else{const V=Ml(i,T,"vertex"),Q=Ml(i,w,"fragment");ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+C+`
`+V+`
`+Q)}else C!==""?$e("WebGLProgram: Program Info Log:",C):(k===""||K==="")&&(ie=!1);ie&&(L.diagnostics={runnable:z,programLog:C,vertexShader:{log:k,prefix:M},fragmentShader:{log:K,prefix:f}})}i.deleteShader(T),i.deleteShader(w),g=new xr(i,_),y=_m(i,_)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(_,om)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Cm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lm(e),t.set(e,n)),n}}class Lm{constructor(e){this.id=Cm++,this.code=e,this.usedTimes=0}}function Im(s){return s===mi||s===Sr||s===yr}function Dm(s,e,t,n,i,r){const a=new hc,o=new Pm,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,y,U,L,D,F){const W=L.fog,C=D.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=e.get(g.envMap||k,K),ie=d[g.type];let V=n.precision;g.precision!==null&&(V=n.getMaxPrecision(g.precision),V!==g.precision&&$e("WebGLProgram.getParameters:",g.precision,"not supported, using",V,"instead."));const Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=Q!==void 0?Q.length:0;let be=0;C.morphAttributes.position!==void 0&&(be=1),C.morphAttributes.normal!==void 0&&(be=2),C.morphAttributes.color!==void 0&&(be=3);let He,q,ae,Ee;if(ie){const _e=wn[ie];He=_e.vertexShader,q=_e.fragmentShader}else{He=g.vertexShader,q=g.fragmentShader;const _e=o.getVertexShaderStage(g),ct=o.getFragmentShaderStage(g);o.update(g,_e,ct),ae=_e.id,Ee=ct.id}const Ue=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),Ve=D.isInstancedMesh===!0,vt=D.isBatchedMesh===!0,Be=!!g.map,Xe=!!g.matcap,xe=!!z,Pe=xe&&z.isPMREMTexture===!0,qe=!!g.aoMap,nt=!!g.lightMap,j=!!g.bumpMap&&g.wireframe===!1,ne=!!g.normalMap,Le=!!g.displacementMap,Me=!!g.emissiveMap,Ie=!!g.metalnessMap,at=!!g.roughnessMap,At=g.anisotropy>0,I=g.clearcoat>0,Dt=g.diffuseRoughness>0,yt=g.dispersion>0,gt=g.retroreflectivity>0,fe=g.iridescence>0,wt=g.sheen>0,ze=g.transmission>0,We=At&&!!g.anisotropyMap,E=I&&!!g.clearcoatMap,x=I&&!!g.clearcoatNormalMap,O=I&&!!g.clearcoatRoughnessMap,se=Dt&&!!g.diffuseRoughnessMap,J=fe&&!!g.iridescenceMap,le=fe&&!!g.iridescenceThicknessMap,de=wt&&!!g.sheenColorMap,Y=wt&&!!g.sheenRoughnessMap,$=!!g.specularMap,he=!!g.specularColorMap,R=!!g.specularIntensityMap,Z=ze&&!!g.transmissionMap,X=ze&&!!g.thicknessMap,ue=!!g.gradientMap,oe=!!g.alphaMap,ce=g.alphaTest>0,De=!!g.alphaHash,je=!!g.extensions;let re=zn;g.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(re=s.toneMapping);const Fe=Pe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ke={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:He,fragmentShader:q,defines:g.defines,customVertexShaderID:ae,customFragmentShaderID:Ee,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:V,batching:vt,batchingColor:vt&&D._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&D.instanceColor!==null,instancingMorph:Ve&&D.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Be,matcap:Xe,envMap:xe,envMapMode:xe&&z.mapping,envMapPMREM:Pe,envMapMaxLod:Pe?Fe.length-1:null,envMapSize:Pe?Fe[0].width:null,aoMap:qe,lightMap:nt,bumpMap:j,normalMap:ne,displacementMap:Le,emissiveMap:Me,normalMapObjectSpace:ne&&g.normalMapType===mh,normalMapTangentSpace:ne&&g.normalMapType===Er,packedNormalMap:ne&&g.normalMapType===Er&&Im(g.normalMap.format),metalnessMap:Ie,roughnessMap:at,anisotropy:At,anisotropyMap:We,clearcoat:I,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:O,diffuseRoughness:Dt,diffuseRoughnessMap:se,dispersion:yt,retroreflection:gt,iridescence:fe,iridescenceMap:J,iridescenceThicknessMap:le,sheen:wt,sheenColorMap:de,sheenRoughnessMap:Y,specularMap:$,specularColorMap:he,specularIntensityMap:R,transmission:ze,transmissionMap:Z,thicknessMap:X,gradientMap:ue,opaque:g.transparent===!1&&g.blending===Yi&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:ce,alphaHash:De,combine:g.combine,mapUv:Be&&m(g.map.channel),aoMapUv:qe&&m(g.aoMap.channel),lightMapUv:nt&&m(g.lightMap.channel),bumpMapUv:j&&m(g.bumpMap.channel),normalMapUv:ne&&m(g.normalMap.channel),displacementMapUv:Le&&m(g.displacementMap.channel),emissiveMapUv:Me&&m(g.emissiveMap.channel),metalnessMapUv:Ie&&m(g.metalnessMap.channel),roughnessMapUv:at&&m(g.roughnessMap.channel),anisotropyMapUv:We&&m(g.anisotropyMap.channel),clearcoatMapUv:E&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&m(g.sheenRoughnessMap.channel),specularMapUv:$&&m(g.specularMap.channel),specularColorMapUv:he&&m(g.specularColorMap.channel),specularIntensityMapUv:R&&m(g.specularIntensityMap.channel),transmissionMapUv:Z&&m(g.transmissionMap.channel),thicknessMapUv:X&&m(g.thicknessMap.channel),alphaMapUv:oe&&m(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ne||At),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(Be||oe),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&ne===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:be,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:Be&&g.map.isVideoTexture===!0&&ot.getTransfer(g.map.colorSpace)===dt,decodeVideoTextureEmissive:Me&&g.emissiveMap.isVideoTexture===!0&&ot.getTransfer(g.emissiveMap.colorSpace)===dt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===vn,flipSided:g.side===tn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:je&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&g.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function M(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)y.push(U),y.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(f(y,g),u(y,g),y.push(s.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function f(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function u(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){const y=d[g.type];let U;if(y){const L=wn[y];U=jh.clone(L.uniforms)}else U=g.uniforms;return U}function b(g,y){let U=h.get(y);return U!==void 0?++U.usedTimes:(U=new Rm(s,y,g,i),l.push(U),h.set(y,U)),U}function T(g){if(--g.usedTimes===0){const y=l.indexOf(g);l[y]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:S,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:A}}function Nm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Um(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function bl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,_,M,f,u){let S=s[e];return S===void 0?(S={id:d.id,object:d,geometry:m,material:_,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:f,group:u},s[e]=S):(S.id=d.id,S.object=d,S.geometry=m,S.material=_,S.materialVariant=a(d),S.groupOrder=M,S.renderOrder=d.renderOrder,S.z=f,S.group=u),e++,S}function c(d,m,_,M,f,u,S){S.reversedDepth===!0&&(f=-f);const b=o(d,m,_,M,f,u);_.transmission>0?n.push(b):_.transparent===!0?i.push(b):t.push(b)}function l(d,m,_,M,f,u){const S=o(d,m,_,M,f,u);_.transmission>0?n.unshift(S):_.transparent===!0?i.unshift(S):t.unshift(S)}function h(d,m){t.length>1&&t.sort(d||Um),n.length>1&&n.sort(m||bl),i.length>1&&i.sort(m||bl)}function p(){for(let d=e,m=s.length;d<m;d++){const _=s[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:p,sort:h}}function Fm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new wl,s.set(n,[a])):i>=r.length?(a=new wl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Om(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Je};break;case"SpotLight":t={position:new N,direction:new N,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function Bm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zm=0;function Gm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function km(s){const e=new Om,t=Bm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,r=new mt,a=new mt;function o(l){let h=0,p=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,_=0,M=0,f=0,u=0,S=0,b=0,T=0,w=0,A=0,g=0,y=0,U=0,L=0;l.sort(Gm);for(let F=0,W=l.length;F<W;F++){const C=l[F],k=C.color,K=C.intensity,z=C.distance;let ie=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===mi?ie=C.shadow.map.texture:ie=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=k.r*K,p+=k.g*K,d+=k.b*K;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],K);L++}else if(C.isSunLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=ie;const be=Q.getViewportCount();for(let He=0;He<be;He++)n.sunShadowMatrix[M+He]=Q.getMatrix(He),n.sunShadowCascade[M+He]=Q._cascadeData[He];M+=be,_++}n.sun[m]=V,m++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=ie,n.directionalShadowMatrix[f]=C.shadow.matrix,w++}n.directional[f]=V,f++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(k).multiplyScalar(K),V.distance=z,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[S]=V;const Q=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,Q.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[S]=Q.matrix,C.castShadow){const ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[S]=ee,n.spotShadowMap[S]=ie,g++}S++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(k).multiplyScalar(K),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=V,b++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const Q=C.shadow,ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[u]=ee,n.pointShadowMap[u]=ie,n.pointShadowMatrix[u]=C.shadow.matrix,A++}n.point[u]=V,u++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(K),V.groundColor.copy(C.groundColor).multiplyScalar(K),n.hemi[T]=V,T++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;const D=n.hash;(D.sunLength!==m||D.directionalLength!==f||D.pointLength!==u||D.spotLength!==S||D.rectAreaLength!==b||D.hemiLength!==T||D.numSunShadows!==_||D.numDirectionalShadows!==w||D.numPointShadows!==A||D.numSpotShadows!==g||D.numSpotMaps!==y||D.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=f,n.spot.length=S,n.rectArea.length=b,n.point.length=u,n.hemi.length=T,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-U,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=L,D.sunLength=m,D.directionalLength=f,D.pointLength=u,D.spotLength=S,D.rectAreaLength=b,D.hemiLength=T,D.numSunShadows=_,D.numDirectionalShadows=w,D.numPointShadows=A,D.numSpotShadows=g,D.numSpotMaps=y,D.numLightProbes=L,n.version=zm++)}function c(l,h){let p=0,d=0,m=0,_=0,M=0,f=0;const u=h.matrixWorldInverse;for(let S=0,b=l.length;S<b;S++){const T=l[S];if(T.isSunLight){const w=n.sun[p];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(u),p++}else if(T.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(u),d++}else if(T.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(u),_++}else if(T.isRectAreaLight){const w=n.rectArea[M];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),a.identity(),r.copy(T.matrixWorld),r.premultiply(u),a.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(T.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const w=n.hemi[f];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(u),f++}}}return{setup:o,setupView:c,state:n}}function Al(s){const e=new km(s),t=[],n=[],i=[];function r(p){h.camera=p,t.length=0,n.length=0,i.length=0}function a(p){p.isLightProbeGrid?i.push(p):t.push(p)}function o(p){n.push(p)}function c(){e.setup(t),i.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function l(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Hm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Al(s),e.set(i,[o])):r>=a.length?(o=new Al(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xm=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],qm=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Rl=new mt,vs=new N,da=new N;function Ym(s,e,t){let n=new Ls;const i=new Qe,r=new Qe,a=new bt,o=new ru,c=new au,l={},h=t.maxTextureSize,p={[pi]:tn,[tn]:pi,[vn]:vn},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new te(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let u=this.type;this.render=function(A,g,y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;this.type===qc&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);const U=s.getRenderTarget(),L=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(qi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=u!==this.type;W&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(k=>k.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,k=A.length;C<k;C++){const K=A[C],z=K.shadow;if(z===void 0){$e("WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ie=z.getFrameExtents();i.multiply(ie),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,z.mapSize.y=r.y));const V=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ys){if(K.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new En(i.x,i.y,{format:mi,type:Cn,minFilter:It,magFilter:It,generateMipmaps:!1}),z.map.texture.name=K.name+".shadowMap",z.map.depthTexture=new ns(i.x,i.y,Sn),z.map.depthTexture.name=K.name+".shadowMapDepth",z.map.depthTexture.format=ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt}else K.isPointLight?(z.map=new So(i.x),z.map.depthTexture=new Sc(i.x,Rn)):(z.map=new En(i.x,i.y),z.map.depthTexture=new ns(i.x,i.y,Rn)),z.map.depthTexture.name=K.name+".shadowMap",z.map.depthTexture.format=ni,this.type===ws?(z.map.depthTexture.compareFunction=V?ic:nc,z.map.depthTexture.minFilter=It,z.map.depthTexture.magFilter=It):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();K.isPointLight!==!0&&z.updateMatrices(K,y);const ee=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:y.layers;for(let be=0;be<Q;be++){const He=z.getCamera(be);if(K.isPointLight){const q=z.camera,ae=z.matrix,Ee=K.distance||q.far;Ee!==q.far&&(q.far=Ee,q.updateProjectionMatrix()),vs.setFromMatrixPosition(K.matrixWorld),q.position.copy(vs),da.copy(q.position),da.add(Xm[be]),q.up.copy(qm[be]),q.lookAt(da),q.updateMatrixWorld(),ae.makeTranslation(-vs.x,-vs.y,-vs.z),Rl.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Rl,q.coordinateSystem,q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,be),s.clear();else{be===0&&(s.setRenderTarget(z.map),s.clear());const q=z.getViewport(be);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),F.viewport(a)}n=z.getFrustum(be),T(g,y,He,K,ee,this.type)}z.isPointLightShadow!==!0&&this.type===ys&&S(z,y),z.needsUpdate=!1}u=this.type,f.needsUpdate=!1,s.setRenderTarget(U,L,D)};function S(A,g){const y=e.update(M);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new En(i.x,i.y,{format:mi,type:Cn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(g,null,y,d,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(g,null,y,m,M,null)}function b(A,g,y,U){let L=null;const D=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)L=D;else if(L=y.isPointLight===!0?c:o,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=L.uuid,W=g.uuid;let C=l[F];C===void 0&&(C={},l[F]=C);let k=C[W];k===void 0&&(k=L.clone(),C[W]=k,g.addEventListener("dispose",w)),L=k}if(L.visible=g.visible,L.wireframe=g.wireframe,U===ys?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:p[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=s.properties.get(L);F.light=y}return L}function T(A,g,y,U,L,D){if(A.visible===!1)return;if(A.layers.test(L)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===ys)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const C=e.update(A),k=A.material;if(Array.isArray(k)){const K=C.groups;for(let z=0,ie=K.length;z<ie;z++){const V=K[z],Q=k[V.materialIndex];if(Q&&Q.visible){const ee=b(A,Q,U,D);A.onBeforeShadow(s,A,g,y,C,ee,V),s.renderBufferDirect(y,null,C,ee,A,V),A.onAfterShadow(s,A,g,y,C,ee,V)}}}else if(k.visible){const K=b(A,k,U,D);A.onBeforeShadow(s,A,g,y,C,K,null),s.renderBufferDirect(y,null,C,K,A,null),A.onAfterShadow(s,A,g,y,C,K,null)}}const W=A.children;for(let C=0,k=W.length;C<k;C++)T(W[C],g,y,U,L,D)}function w(A){A.target.removeEventListener("dispose",w);for(const y in l){const U=l[y],L=A.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}function $m(s,e){function t(){let R=!1;const Z=new bt;let X=null;const ue=new bt(0,0,0,0);return{setMask:function(oe){X!==oe&&!R&&(s.colorMask(oe,oe,oe,oe),X=oe)},setLocked:function(oe){R=oe},setClear:function(oe,ce,De,je,re){re===!0&&(oe*=je,ce*=je,De*=je),Z.set(oe,ce,De,je),ue.equals(Z)===!1&&(s.clearColor(oe,ce,De,je),ue.copy(Z))},reset:function(){R=!1,X=null,ue.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,X=null,ue=null,oe=null;return{setReversed:function(ce){if(Z!==ce){const De=e.get("EXT_clip_control");ce?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Z=ce;const je=oe;oe=null,this.setClear(je)}},getReversed:function(){return Z},setTest:function(ce){ce?me(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(ce){X!==ce&&!R&&(s.depthMask(ce),X=ce)},setFunc:function(ce){if(Z&&(ce=bh[ce]),ue!==ce){switch(ce){case _a:s.depthFunc(s.NEVER);break;case xa:s.depthFunc(s.ALWAYS);break;case va:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case Ma:s.depthFunc(s.EQUAL);break;case Sa:s.depthFunc(s.GEQUAL);break;case ya:s.depthFunc(s.GREATER);break;case Ea:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=ce}},setLocked:function(ce){R=ce},setClear:function(ce){oe!==ce&&(oe=ce,Z&&(ce=1-ce),s.clearDepth(ce))},reset:function(){R=!1,X=null,ue=null,oe=null,Z=!1}}}function i(){let R=!1,Z=null,X=null,ue=null,oe=null,ce=null,De=null,je=null,re=null;return{setTest:function(Fe){R||(Fe?me(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(Fe){Z!==Fe&&!R&&(s.stencilMask(Fe),Z=Fe)},setFunc:function(Fe,Ke,_e){(X!==Fe||ue!==Ke||oe!==_e)&&(s.stencilFunc(Fe,Ke,_e),X=Fe,ue=Ke,oe=_e)},setOp:function(Fe,Ke,_e){(ce!==Fe||De!==Ke||je!==_e)&&(s.stencilOp(Fe,Ke,_e),ce=Fe,De=Ke,je=_e)},setLocked:function(Fe){R=Fe},setClear:function(Fe){re!==Fe&&(s.clearStencil(Fe),re=Fe)},reset:function(){R=!1,Z=null,X=null,ue=null,oe=null,ce=null,De=null,je=null,re=null}}}const r=new t,a=new n,o=new i;let c={};const l=new WeakMap;let h={},p={},d={},m=new WeakMap,_=[],M=null,f=!1,u=null,S=null,b=null,T=null,w=null,A=null,g=null,y=new Je(0,0,0),U=0,L=!1,D=null,F=null,W=null,C=null,k=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ie=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=ie>=2);let Q=null,ee={};const be=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),q=new bt().fromArray(be),ae=new bt().fromArray(He);function Ee(R,Z,X,ue){const oe=new Uint8Array(4),ce=s.createTexture();s.bindTexture(R,ce),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<X;De++)R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(Z+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return ce}const Ue={};Ue[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(s.DEPTH_TEST),a.setFunc(As),j(!1),ne(Ro),me(s.CULL_FACE),qe(qi);function me(R){h[R]!==!0&&(s.enable(R),h[R]=!0)}function Ve(R){h[R]!==!1&&(s.disable(R),h[R]=!1)}function vt(R,Z){return d[R]!==Z?(s.bindFramebuffer(R,Z),d[R]=Z,R===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Z),R===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function Be(R,Z){let X=_,ue=!1;if(R){X=m.get(Z),X===void 0&&(X=[],m.set(Z,X));const oe=R.textures;if(X.length!==oe.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,De=oe.length;ce<De;ce++)X[ce]=s.COLOR_ATTACHMENT0+ce;X.length=oe.length,ue=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,ue=!0);ue&&s.drawBuffers(X)}function Xe(R){return M!==R?(s.useProgram(R),M=R,!0):!1}const xe={[Vi]:s.FUNC_ADD,[$c]:s.FUNC_SUBTRACT,[Kc]:s.FUNC_REVERSE_SUBTRACT};xe[Zc]=s.MIN,xe[Jc]=s.MAX;const Pe={[Qc]:s.ZERO,[jc]:s.ONE,[eh]:s.SRC_COLOR,[kl]:s.SRC_ALPHA,[ah]:s.SRC_ALPHA_SATURATE,[sh]:s.DST_COLOR,[nh]:s.DST_ALPHA,[th]:s.ONE_MINUS_SRC_COLOR,[Hl]:s.ONE_MINUS_SRC_ALPHA,[rh]:s.ONE_MINUS_DST_COLOR,[ih]:s.ONE_MINUS_DST_ALPHA,[oh]:s.CONSTANT_COLOR,[lh]:s.ONE_MINUS_CONSTANT_COLOR,[ch]:s.CONSTANT_ALPHA,[hh]:s.ONE_MINUS_CONSTANT_ALPHA};function qe(R,Z,X,ue,oe,ce,De,je,re,Fe){if(R===qi){f===!0&&(Ve(s.BLEND),f=!1);return}if(f===!1&&(me(s.BLEND),f=!0),R!==Yc){if(R!==u||Fe!==L){if((S!==Vi||w!==Vi)&&(s.blendEquation(s.FUNC_ADD),S=Vi,w=Vi),Fe)switch(R){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bn:s.blendFunc(s.ONE,s.ONE);break;case Co:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Po:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ht("WebGLState: Invalid blending: ",R);break}else switch(R){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Co:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Po:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",R);break}b=null,T=null,A=null,g=null,y.set(0,0,0),U=0,u=R,L=Fe}return}oe=oe||Z,ce=ce||X,De=De||ue,(Z!==S||oe!==w)&&(s.blendEquationSeparate(xe[Z],xe[oe]),S=Z,w=oe),(X!==b||ue!==T||ce!==A||De!==g)&&(s.blendFuncSeparate(Pe[X],Pe[ue],Pe[ce],Pe[De]),b=X,T=ue,A=ce,g=De),(je.equals(y)===!1||re!==U)&&(s.blendColor(je.r,je.g,je.b,re),y.copy(je),U=re),u=R,L=!1}function nt(R,Z){R.side===vn?Ve(s.CULL_FACE):me(s.CULL_FACE);let X=R.side===tn;Z&&(X=!X),j(X),R.blending===Yi&&R.transparent===!1?qe(qi):qe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const ue=R.stencilWrite;o.setTest(ue),ue&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Me(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(R){D!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),D=R)}function ne(R){R!==Wc?(me(s.CULL_FACE),R!==F&&(R===Ro?s.cullFace(s.BACK):R===Xc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),F=R}function Le(R){R!==W&&(z&&s.lineWidth(R),W=R)}function Me(R,Z,X){R?(me(s.POLYGON_OFFSET_FILL),(C!==Z||k!==X)&&(C=Z,k=X,a.getReversed()&&(Z=-Z,X=-X),s.polygonOffset(Z,X))):Ve(s.POLYGON_OFFSET_FILL)}function Ie(R){R?me(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function at(R){R===void 0&&(R=s.TEXTURE0+K-1),Q!==R&&(s.activeTexture(R),Q=R)}function At(R,Z,X){X===void 0&&(Q===null?X=s.TEXTURE0+K-1:X=Q);let ue=ee[X];ue===void 0&&(ue={type:void 0,texture:void 0},ee[X]=ue),(ue.type!==R||ue.texture!==Z)&&(Q!==X&&(s.activeTexture(X),Q=X),s.bindTexture(R,Z||Ue[R]),ue.type=R,ue.texture=Z)}function I(){const R=ee[Q];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Dt(){try{s.compressedTexImage2D(...arguments)}catch(R){ht("WebGLState:",R)}}function yt(){try{s.compressedTexImage3D(...arguments)}catch(R){ht("WebGLState:",R)}}function gt(){try{s.texSubImage2D(...arguments)}catch(R){ht("WebGLState:",R)}}function fe(){try{s.texSubImage3D(...arguments)}catch(R){ht("WebGLState:",R)}}function wt(){try{s.compressedTexSubImage2D(...arguments)}catch(R){ht("WebGLState:",R)}}function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(R){ht("WebGLState:",R)}}function We(){try{s.texStorage2D(...arguments)}catch(R){ht("WebGLState:",R)}}function E(){try{s.texStorage3D(...arguments)}catch(R){ht("WebGLState:",R)}}function x(){try{s.texImage2D(...arguments)}catch(R){ht("WebGLState:",R)}}function O(){try{s.texImage3D(...arguments)}catch(R){ht("WebGLState:",R)}}function se(R){return p[R]!==void 0?p[R]:s.getParameter(R)}function J(R,Z){p[R]!==Z&&(s.pixelStorei(R,Z),p[R]=Z)}function le(R){q.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),q.copy(R))}function de(R){ae.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),ae.copy(R))}function Y(R,Z){let X=l.get(Z);X===void 0&&(X=new WeakMap,l.set(Z,X));let ue=X.get(R);ue===void 0&&(ue=s.getUniformBlockIndex(Z,R.name),s.uniformBlockBinding(Z,ue,ue),X.set(R,ue))}function $(R,Z,X){const oe=l.get(Z).get(R);c[oe]!==X&&(s.bindBufferBase(s.UNIFORM_BUFFER,oe,X),c[oe]=X)}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,ee={},d={},c={},m=new WeakMap,_=[],M=null,f=!1,u=null,S=null,b=null,T=null,w=null,A=null,g=null,y=new Je(0,0,0),U=0,L=!1,D=null,F=null,W=null,C=null,k=null,q.set(0,0,s.canvas.width,s.canvas.height),ae.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Ve,bindFramebuffer:vt,drawBuffers:Be,useProgram:Xe,setBlending:qe,setMaterial:nt,setFlipSided:j,setCullFace:ne,setLineWidth:Le,setPolygonOffset:Me,setScissorTest:Ie,activeTexture:at,bindTexture:At,unbindTexture:I,compressedTexImage2D:Dt,compressedTexImage3D:yt,texImage2D:x,texImage3D:O,pixelStorei:J,getParameter:se,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:We,texStorage3D:E,texSubImage2D:gt,texSubImage3D:fe,compressedTexSubImage2D:wt,compressedTexSubImage3D:ze,scissor:le,viewport:de,reset:he}}function Km(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,h=new WeakMap,p=new Set;let d;const m=new WeakMap,_=new Set,M=new FinalizationRegistry(E=>_.delete(E));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(E,x){return f?new OffscreenCanvas(E,x):wr("canvas")}function S(E,x,O){let se=1;const J=We(E);if((J.width>O||J.height>O)&&(se=O/Math.max(J.width,J.height)),se<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const le=Math.floor(se*J.width),de=Math.floor(se*J.height);d===void 0&&(d=u(le,de));const Y=x?u(le,de):d;return Y.width=le,Y.height=de,Y.getContext("2d").drawImage(E,0,0,le,de),$e("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+le+"x"+de+")."),Y}else return"data"in E&&$e("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function b(E){return E.generateMipmaps}function T(E){s.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(E,x,O,se,J,le=!1){if(E!==null){if(s[E]!==void 0)return s[E];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;se&&(de=e.get("EXT_texture_norm16"),de||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8),O===s.UNSIGNED_SHORT&&de&&(Y=de.R16_EXT),O===s.SHORT&&de&&(Y=de.R16_SNORM_EXT)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),x===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8),O===s.UNSIGNED_SHORT&&de&&(Y=de.RG16_EXT),O===s.SHORT&&de&&(Y=de.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_SHORT&&de&&(Y=de.RGB16_EXT),O===s.SHORT&&de&&(Y=de.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const $=le?br:ot.getTransfer(J);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=$===dt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&de&&(Y=de.RGBA16_EXT),O===s.SHORT&&de&&(Y=de.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(E,x){let O;return E?x===null||x===Rn||x===ts?O=s.DEPTH24_STENCIL8:x===Sn?O=s.DEPTH32F_STENCIL8:x===Cs&&(O=s.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rn||x===ts?O=s.DEPTH_COMPONENT24:x===Sn?O=s.DEPTH_COMPONENT32F:x===Cs&&(O=s.DEPTH_COMPONENT16),O}function y(E,x){return b(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function U(E){const x=new WeakRef(E);n.get(E).__ref=x,_.add(x),M.register(E,x,x)}function L(E){const x=n.get(E).__ref;x!==void 0&&(_.delete(x),M.unregister(x))}function D(E){W(E.target)}function F(E){C(E.target)}function W(E){E.removeEventListener("dispose",D),L(E),K(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&p.delete(E)}function C(E){E.removeEventListener("dispose",F),L(E),ie(E)}function k(){for(const E of _){const x=E.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):W(x))}_.clear(),p.clear()}function K(E){const x=n.get(E);if(x.__webglInit===void 0)return;const O=E.source,se=m.get(O);if(se){const J=se[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(E),Object.keys(se).length===0&&m.delete(O)}n.remove(E)}function z(E){const x=n.get(E);s.deleteTexture(x.__webglTexture);const O=E.source,se=m.get(O);delete se[x.__cacheKey],a.memory.textures--}function ie(E){const x=n.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();const O=E.depthTexture;if(O&&O.renderTarget===E&&W(O),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let le=0;le<x.__webglFramebuffer[J].length;le++)s.deleteFramebuffer(x.__webglFramebuffer[J][le]);else s.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)s.deleteFramebuffer(x.__webglFramebuffer[J]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const se=E.textures;for(let J=0,le=se.length;J<le;J++){const de=n.get(se[J]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(se[J])}n.remove(E)}let V=0;function Q(){V=0}function ee(){return V}function be(E){V=E}function He(){const E=V;return E>=i.maxTextures&&$e("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,E}function q(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function ae(E,x){const O=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const se=E.image;if(se===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(O,E,x);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function Ee(E,x){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){nt(O,E,x);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function Ue(E,x){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){nt(O,E,x);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function me(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){j(O,E,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const Ve={[Mr]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[Ta]:s.MIRRORED_REPEAT},vt={[Vt]:s.NEAREST,[fh]:s.NEAREST_MIPMAP_NEAREST,[Os]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[zr]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},Be={[_h]:s.NEVER,[sc]:s.ALWAYS,[xh]:s.LESS,[nc]:s.LEQUAL,[vh]:s.EQUAL,[ic]:s.GEQUAL,[Mh]:s.GREATER,[Sh]:s.NOTEQUAL};function Xe(E,x){if(x.type===Sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===It||x.magFilter===zr||x.magFilter===Os||x.magFilter===ei||x.minFilter===It||x.minFilter===zr||x.minFilter===Os||x.minFilter===ei)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,Ve[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Ve[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Ve[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,vt[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==Os&&x.minFilter!==ei||x.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function xe(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D),U(x));const se=x.source;let J=m.get(se);J===void 0&&(J={},m.set(se,J));const le=q(x);if(le!==E.__cacheKey){J[le]===void 0&&(J[le]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[le].usedTimes++;const de=J[E.__cacheKey];de!==void 0&&(J[E.__cacheKey].usedTimes--,de.usedTimes===0&&z(x)),E.__cacheKey=le,E.__webglTexture=J[le].texture}return O}function Pe(E,x,O){return Math.floor(Math.floor(E/O)/x)}function qe(E,x,O,se){const le=E.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,se,x.data);else{le.sort((R,Z)=>R.start-Z.start);let de=0;for(let R=1;R<le.length;R++){const Z=le[de],X=le[R],ue=Z.start+Z.count,oe=Pe(X.start,x.width,4),ce=Pe(Z.start,x.width,4);X.start<=ue+1&&oe===ce&&Pe(X.start+X.count-1,x.width,4)===oe?Z.count=Math.max(Z.count,X.start+X.count-Z.start):(++de,le[de]=X)}le.length=de+1;const Y=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),he=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let R=0,Z=le.length;R<Z;R++){const X=le[R],ue=Math.floor(X.start/4),oe=Math.ceil(X.count/4),ce=ue%x.width,De=Math.floor(ue/x.width),je=oe,re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,De),t.texSubImage2D(s.TEXTURE_2D,0,ce,De,je,re,O,se,x.data)}E.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function nt(E,x,O){let se=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=s.TEXTURE_3D);const J=xe(E,x),le=x.source;t.bindTexture(se,E.__webglTexture,s.TEXTURE0+O);const de=n.get(le);if(le.version!==de.__version||J===!0){if(t.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const re=ot.getPrimaries(ot.workingColorSpace),Fe=x.colorSpace===Qn?null:ot.getPrimaries(x.colorSpace),Ke=x.colorSpace===Qn||re===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let $=S(x.image,!1,i.maxTextureSize);$=ze(x,$);const he=r.convert(x.format,x.colorSpace),R=r.convert(x.type);let Z=A(x.internalFormat,he,R,x.normalized,x.colorSpace,x.isVideoTexture);Xe(se,x);let X;const ue=x.mipmaps,oe=x.isVideoTexture!==!0,ce=de.__version===void 0||J===!0,De=le.dataReady,je=y(x,$);if(x.isDepthTexture)Z=g(x.format===ti,x.type),ce&&(oe?t.texStorage2D(s.TEXTURE_2D,1,Z,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,Z,$.width,$.height,0,he,R,null));else if(x.isDataTexture)if(ue.length>0){oe&&ce&&t.texStorage2D(s.TEXTURE_2D,je,Z,ue[0].width,ue[0].height);for(let re=0,Fe=ue.length;re<Fe;re++)X=ue[re],oe?De&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,X.width,X.height,he,R,X.data):t.texImage2D(s.TEXTURE_2D,re,Z,X.width,X.height,0,he,R,X.data);x.generateMipmaps=!1}else oe?(ce&&t.texStorage2D(s.TEXTURE_2D,je,Z,$.width,$.height),De&&qe(x,$,he,R)):t.texImage2D(s.TEXTURE_2D,0,Z,$.width,$.height,0,he,R,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){oe&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,je,Z,ue[0].width,ue[0].height,$.depth);for(let re=0,Fe=ue.length;re<Fe;re++)if(X=ue[re],x.format!==An)if(he!==null)if(oe){if(De)if(x.layerUpdates.size>0){const Ke=ol(X.width,X.height,x.format,x.type);for(const _e of x.layerUpdates){const ct=X.data.subarray(_e*Ke/X.data.BYTES_PER_ELEMENT,(_e+1)*Ke/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,_e,X.width,X.height,1,he,ct)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,$.depth,he,X.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Z,X.width,X.height,$.depth,0,X.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?De&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,$.depth,he,R,X.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Z,X.width,X.height,$.depth,0,he,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{oe&&ce&&t.texStorage2D(s.TEXTURE_2D,je,Z,ue[0].width,ue[0].height);for(let re=0,Fe=ue.length;re<Fe;re++)X=ue[re],x.format!==An?he!==null?oe?De&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,X.width,X.height,he,X.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Z,X.width,X.height,0,X.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?De&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,X.width,X.height,he,R,X.data):t.texImage2D(s.TEXTURE_2D,re,Z,X.width,X.height,0,he,R,X.data)}else if(x.isDataArrayTexture)if(oe){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,je,Z,$.width,$.height,$.depth),De)if(x.layerUpdates.size>0){const re=ol($.width,$.height,x.format,x.type);for(const Fe of x.layerUpdates){const Ke=$.data.subarray(Fe*re/$.data.BYTES_PER_ELEMENT,(Fe+1)*re/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Fe,$.width,$.height,1,he,R,Ke)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,he,R,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,$.width,$.height,$.depth,0,he,R,$.data);else if(x.isData3DTexture)oe?(ce&&t.texStorage3D(s.TEXTURE_3D,je,Z,$.width,$.height,$.depth),De&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,he,R,$.data)):t.texImage3D(s.TEXTURE_3D,0,Z,$.width,$.height,$.depth,0,he,R,$.data);else if(x.isFramebufferTexture){if(ce)if(oe)t.texStorage2D(s.TEXTURE_2D,je,Z,$.width,$.height);else{let re=$.width,Fe=$.height;for(let Ke=0;Ke<je;Ke++)t.texImage2D(s.TEXTURE_2D,Ke,Z,re,Fe,0,he,R,null),re>>=1,Fe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const re=s.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),$.parentNode!==re){re.appendChild($),p.add(x),re.onpaint=Fe=>{const Ke=Fe.changedElements;for(const _e of p)Ke.includes(_e.image)&&(_e.needsUpdate=!0)},re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{const Ke=s.RGBA,_e=s.RGBA,ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ke,_e,ct,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ue.length>0){if(oe&&ce){const re=We(ue[0]);t.texStorage2D(s.TEXTURE_2D,je,Z,re.width,re.height)}for(let re=0,Fe=ue.length;re<Fe;re++)X=ue[re],oe?De&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,he,R,X):t.texImage2D(s.TEXTURE_2D,re,Z,he,R,X);x.generateMipmaps=!1}else if(oe){if(ce){const re=We($);t.texStorage2D(s.TEXTURE_2D,je,Z,re.width,re.height)}De&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,R,$)}else t.texImage2D(s.TEXTURE_2D,0,Z,he,R,$);b(x)&&x.mipmapsAutoUpdate===!0&&T(se),de.__version=le.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function j(E,x,O){if(x.image.length!==6)return;const se=xe(E,x),J=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const le=n.get(J);if(J.version!==le.__version||se===!0){t.activeTexture(s.TEXTURE0+O);const de=ot.getPrimaries(ot.workingColorSpace),Y=x.colorSpace===Qn?null:ot.getPrimaries(x.colorSpace),$=x.colorSpace===Qn||de===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const he=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let _e=0;_e<6;_e++)!he&&!R?Z[_e]=S(x.image[_e],!0,i.maxCubemapSize):Z[_e]=R?x.image[_e].image:x.image[_e],Z[_e]=ze(x,Z[_e]);const X=Z[0],ue=r.convert(x.format,x.colorSpace),oe=r.convert(x.type);let ce=A(x.internalFormat,ue,oe,x.normalized,x.colorSpace);const De=x.isVideoTexture!==!0,je=le.__version===void 0||se===!0,re=J.dataReady;let Fe=y(x,X);Xe(s.TEXTURE_CUBE_MAP,x);let Ke;if(x.isDepthTexture){if(ce=g(x.format===ti,x.type),je)if(De)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ce,X.width,X.height);else for(let _e=0;_e<6;_e++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,X.width,X.height,0,ue,oe,null)}else if(he){De&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ce,X.width,X.height);for(let _e=0;_e<6;_e++){Ke=Z[_e].mipmaps;for(let ct=0;ct<Ke.length;ct++){const Mt=Ke[ct];x.format!==An?ue!==null?De?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct,0,0,Mt.width,Mt.height,ue,Mt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct,ce,Mt.width,Mt.height,0,Mt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct,0,0,Mt.width,Mt.height,ue,oe,Mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct,ce,Mt.width,Mt.height,0,ue,oe,Mt.data)}}}else{if(Ke=x.mipmaps,De&&je){Ke.length>0&&Fe++;const _e=We(Z[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ce,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(R){De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Z[_e].width,Z[_e].height,ue,oe,Z[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,Z[_e].width,Z[_e].height,0,ue,oe,Z[_e].data);for(let ct=0;ct<Ke.length;ct++){const un=Ke[ct].image[_e].image;De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct+1,0,0,un.width,un.height,ue,oe,un.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct+1,ce,un.width,un.height,0,ue,oe,un.data)}}else{De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ue,oe,Z[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,ue,oe,Z[_e]);for(let ct=0;ct<Ke.length;ct++){const Mt=Ke[ct];De?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct+1,0,0,ue,oe,Mt.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ct+1,ce,ue,oe,Mt.image[_e])}}}b(x)&&x.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),le.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ne(E,x,O,se,J,le){const de=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),$=A(O.internalFormat,de,Y,O.normalized,O.colorSpace),he=n.get(x),R=n.get(O);if(R.__renderTarget=x,!he.__hasExternalTextures){const Z=Math.max(1,x.width>>le),X=Math.max(1,x.height>>le);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,le,$,Z,X,x.depth,0,de,Y,null):t.texImage2D(J,le,$,Z,X,0,de,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),fe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,J,R.__webglTexture,0,gt(x)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,J,R.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(E,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer){const se=x.depthTexture,J=se&&se.isDepthTexture?se.type:null,le=g(x.stencilBuffer,J),de=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;fe(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(x),le,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(x),le,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,le,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,E)}else{const se=x.textures;for(let J=0;J<se.length;J++){const le=se[J],de=r.convert(le.format,le.colorSpace),Y=r.convert(le.type),$=A(le.internalFormat,de,Y,le.normalized,le.colorSpace);fe(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(x),$,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(x),$,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,$,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(E,x,O){const se=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(x.depthTexture);J.__renderTarget=x;const le=se?x.depthTexture.image[0]:x.depthTexture.image;(!J.__webglTexture||le.width!==x.width||le.height!==x.height)&&(le.width=x.width,le.height=x.height,x.depthTexture.needsUpdate=!0),se?me(x.depthTexture,0):ae(x.depthTexture,0);const de=J.__webglTexture,Y=gt(x),$=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,he=x.depthTexture.format===ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===ni)fe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,$,de,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,he,$,de,0);else if(x.depthTexture.format===ti)fe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,$,de,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,he,$,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ie(E){const x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const se=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),se){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,se.removeEventListener("dispose",J)};se.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=se}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let se=0;se<6;se++)Me(x.__webglFramebuffer[se],E,se);else E.texture.mipmaps.length>0?Me(x.__webglFramebuffer[0],E,0):Me(x.__webglFramebuffer,E,0);else if(O){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]===void 0)x.__webglDepthbuffer[se]=s.createRenderbuffer(),Le(x.__webglDepthbuffer[se],E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,le)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Le(x.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(E,x,O){const se=n.get(E);x!==void 0&&ne(se.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ie(E)}function At(E){const x=E.texture,O=n.get(E),se=n.get(x);E.addEventListener("dispose",F),U(E);const J=E.textures,le=E.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=x.version,a.memory.textures++),le){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let $=0;$<x.mipmaps.length;$++)O.__webglFramebuffer[Y][$]=s.createFramebuffer()}else O.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(de)for(let Y=0,$=J.length;Y<$;Y++){const he=n.get(J[Y]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&fe(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){const $=J[Y];O.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const he=r.convert($.format,$.colorSpace),R=r.convert($.type),Z=A($.internalFormat,he,R,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),X=gt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,Z,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)ne(O.__webglFramebuffer[Y][$],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else ne(O.__webglFramebuffer[Y],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(x)?T(s.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(de){for(let Y=0,$=J.length;Y<$;Y++){const he=J[Y],R=n.get(he);let Z=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,R.__webglTexture),Xe(Z,he),ne(O.__webglFramebuffer,E,he,s.COLOR_ATTACHMENT0+Y,Z,0),b(he)&&T(Z)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,se.__webglTexture),Xe(Y,x),x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)ne(O.__webglFramebuffer[$],E,x,s.COLOR_ATTACHMENT0,Y,$);else ne(O.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,Y,0);b(x)?T(Y):x.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&Ie(E)}function I(E){const x=E.textures;for(let O=0,se=x.length;O<se;O++){const J=x[O];if(b(J)&&J.mipmapsAutoUpdate===!0){const le=w(E),de=n.get(J).__webglTexture;t.bindTexture(le,de),T(le),t.unbindTexture()}}}const Dt=[];function yt(E){if(E.samples>0){if(fe(E)===!1){const x=E.textures,O=E.width,se=E.height;let J=s.COLOR_BUFFER_BIT;const le=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(E),Y=x.length>1;if(Y)for(let he=0;he<x.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<x.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const R=n.get(x[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,R,0)}s.blitFramebuffer(0,0,O,se,0,0,O,se,J,s.NEAREST),c===!0&&(Dt.length=0,Dt.push(s.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Dt.push(le),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<x.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const R=n.get(x[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,R,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const x=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function gt(E){return Math.min(i.maxSamples,E.samples)}function fe(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function ze(E,x){const O=E.colorSpace,se=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Tr&&O!==Qn&&(ot.getTransfer(O)===dt?(se!==An||J!==hn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",O)),x}function We(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=He,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=be,this.setTexture2D=ae,this.setTexture2DArray=Ee,this.setTexture3D=Ue,this.setTextureCube=me,this.rebindTextures=at,this.setupRenderTarget=At,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=fe,this.dispose=k}function Zm(s,e){function t(n,i=Qn){let r;const a=ot.getTransfer(i);if(n===hn)return s.UNSIGNED_BYTE;if(n===co)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zl)return s.BYTE;if(n===Jl)return s.SHORT;if(n===Cs)return s.UNSIGNED_SHORT;if(n===lo)return s.INT;if(n===Rn)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===ec)return s.ALPHA;if(n===tc)return s.RGB;if(n===An)return s.RGBA;if(n===ni)return s.DEPTH_COMPONENT;if(n===ti)return s.DEPTH_STENCIL;if(n===uo)return s.RED;if(n===fo)return s.RED_INTEGER;if(n===mi)return s.RG;if(n===po)return s.RG_INTEGER;if(n===mo)return s.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===wa||n===Aa||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Sr||n===Na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ia)return r.COMPRESSED_R11_EAC;if(n===Da)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sr)return r.COMPRESSED_RG11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Ga||n===ka||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===Za||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===ja||n===yr||n===eo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:Jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e0 extends gi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,d=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",f=new jm,u={},S=t.getContextAttributes();let b=null,T=null;const w=[],A=[],g=new Qe;let y=null,U=null;const L=new cn;L.viewport=new bt;const D=new cn;D.viewport=new bt;const F=[L,D],W=new uu;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=w[q];return ae===void 0&&(ae=new $r,w[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=w[q];return ae===void 0&&(ae=new $r,w[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=w[q];return ae===void 0&&(ae=new $r,w[q]=ae),ae.getHandSpace()};function K(q){const ae=A.indexOf(q.inputSource);if(ae===-1)return;const Ee=w[ae];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,l||a),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",ie);for(let q=0;q<w.length;q++){const ae=A[q];ae!==null&&(A[q]=null,w[q].disconnect(ae))}C=null,k=null,f.reset();for(const q in u)delete u[q];if(e.setRenderTarget(b),m=null,d=null,p=null,i=null,T=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),U!==null){const q=U.camera;q.fov=U.fov,q.zoom=U.zoom,q.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",z),i.addEventListener("inputsourceschange",ie),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=S.stencil?ti:ni,Ue=S.stencil?ts:Rn);const Ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new En(d.textureWidth,d.textureHeight,{format:An,type:hn,depthTexture:new ns(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new En(m.framebufferWidth,m.framebufferHeight,{format:An,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ie(q){for(let ae=0;ae<q.removed.length;ae++){const Ee=q.removed[ae],Ue=A.indexOf(Ee);Ue>=0&&(A[Ue]=null,w[Ue].disconnect(Ee))}for(let ae=0;ae<q.added.length;ae++){const Ee=q.added[ae];let Ue=A.indexOf(Ee);if(Ue===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=A.length){A.push(Ee),Ue=Ve;break}else if(A[Ve]===null){A[Ve]=Ee,Ue=Ve;break}if(Ue===-1)break}const me=w[Ue];me&&me.connect(Ee)}}function V(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ae=q.near,Ee=q.far;f.texture!==null&&(f.depthNear>0&&(ae=f.depthNear),f.depthFar>0&&(Ee=f.depthFar)),W.near=D.near=L.near=ae,W.far=D.far=L.far=Ee,(C!==W.near||k!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),C=W.near,k=W.far),W.layers.mask=q.layers.mask|6,L.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;const Ue=q.parent,me=W.cameras;V(W,Ue);for(let Ve=0;Ve<me.length;Ve++)V(me[Ve],Ue);W.projectionMatrix.copy(L.projectionMatrix),W.projectionMatrixInverse.copy(L.projectionMatrixInverse),U===null&&q.isPerspectiveCamera&&(U={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,W,Ue)};function Q(q,ae,Ee){Ee===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=to*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(W)},this.getCameraTexture=function(q){return u[q]};let ee=null;function be(q,ae){if(h=ae.getViewerPose(l||a),_=ae,h!==null){const Ee=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Ue=!1;Ee.length!==W.cameras.length&&(W.cameras.length=0,Ue=!0);for(let Be=0;Be<Ee.length;Be++){const Xe=Ee[Be];let xe=null;if(m!==null)xe=m.getViewport(Xe);else{const qe=p.getViewSubImage(d,Xe);xe=qe.viewport,Be===0&&(e.setRenderTargetTextures(T,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(T))}let Pe=F[Be];Pe===void 0&&(Pe=new cn,Pe.layers.enable(Be),Pe.viewport=new bt,F[Be]=Pe),Pe.matrix.fromArray(Xe.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Xe.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(xe.x,xe.y,xe.width,xe.height),Be===0&&(W.matrix.copy(Pe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ue===!0&&W.cameras.push(Pe)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const Be=p.getDepthInformation(Ee[0]);Be&&Be.isValid&&Be.texture&&f.init(Be,i.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Be=0;Be<Ee.length;Be++){const Xe=Ee[Be].camera;if(Xe){let xe=u[Xe];xe||(xe=new yc,u[Xe]=xe);const Pe=p.getCameraImage(Xe);xe.sourceTexture=Pe}}}}for(let Ee=0;Ee<w.length;Ee++){const Ue=A[Ee],me=w[Ee];Ue!==null&&me!==void 0&&me.update(Ue,ae,l||a)}ee&&ee(q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const He=new Ac;He.setAnimationLoop(be),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const t0=new mt,Oc=new Ze;Oc.set(-1,0,0,0,1,0,0,0,1);function n0(s,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Ec(s)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function i(f,u,S,b,T){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(f,u):u.isMeshLambertMaterial?(r(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(f,u),p(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(f,u),d(f,u),u.isMeshPhysicalMaterial&&m(f,u,T)):u.isMeshMatcapMaterial?(r(f,u),_(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),M(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?c(f,u,S,b):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===tn&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===tn&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const S=e.get(u),b=S.envMap,T=S.envMapRotation;b&&(f.envMap.value=b,f.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(T)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Oc),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,S,b){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*S,f.scale.value=b*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,S){f.ior.value=u.ior,u.diffuseRoughness>0&&(f.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.retroreflectivity>0&&(f.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,u){u.matcap&&(f.matcap.value=u.matcap)}function M(f,u){const S=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function i0(s,e,t,n){let i={},r={};function a(S,b){const T=b.program;n.uniformBlockBinding(S,T,i[S.id])}function o(S,b){let T=i[S.id];T===void 0&&(_(S),T=c(S),i[S.id]=T,S.addEventListener("dispose",f));const w=b.program;n.updateUBOMapping(S,w);const A=e.render.frame;r[S.id]!==A&&(l(S),r[S.id]=A)}function c(S){const b=s.createBuffer(),T=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function l(S){const b=i[S.id],T=S.uniforms,w=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,g=T.length;A<g;A++){const y=T[A];if(Array.isArray(y))for(let U=0,L=y.length;U<L;U++)h(y[U],A,U,w);else h(y,A,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,b,T,w){if(d(S,b,T,w)===!0){const A=S.__offset,g=S.value;if(Array.isArray(g)){let y=0;for(let U=0;U<g.length;U++){const L=g[U],D=M(L,!0);p(L,S.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,S.__data)}}function p(S,b,T){typeof S=="number"||typeof S=="boolean"?b[T]=S:S.isMatrix3?(b[T]=S.elements[0],b[T+1]=S.elements[1],b[T+2]=S.elements[2],b[T+3]=0,b[T+4]=S.elements[3],b[T+5]=S.elements[4],b[T+6]=S.elements[5],b[T+7]=0,b[T+8]=S.elements[6],b[T+9]=S.elements[7],b[T+10]=S.elements[8],b[T+11]=0):ArrayBuffer.isView(S)?b.set(S.subarray(0,b.length-T),T):S.toArray(b,T)}function d(S,b,T,w){const A=S.value,g=b+"_"+T;if(Array.isArray(A)){w[g]===void 0&&(w[g]=[]);const y=w[g];let U=!1;for(let L=0;L<A.length;L++)m(A[L],y,L)===!0&&(U=!0);return U}return m(A,w,g)}function m(S,b,T){if(b[T]===void 0)return typeof S=="number"||typeof S=="boolean"?b[T]=S:ArrayBuffer.isView(S)?b[T]=S.slice():b[T]=S.clone(),!0;{const w=b[T];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return b[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function _(S){const b=S.uniforms;let T=0;const w=16;for(let g=0,y=b.length;g<y;g++){const U=Array.isArray(b[g])?b[g]:[b[g]];for(let L=0,D=U.length;L<D;L++){const F=U[L],W=Array.isArray(F.value)?F.value:[F.value],C=Array.isArray(b[g])||Array.isArray(F.value);let k=T;for(let z=0,ie=W.length;z<ie;z++){const V=W[z],Q=M(V,C),ee=T%w,be=ee%Q.boundary,He=ee+be;T+=be,He!==0&&w-He<Q.storage&&(T+=w-He),z===0&&(k=T),T+=Q.storage}const K=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new K((T-k)/Float32Array.BYTES_PER_ELEMENT),F.__offset=k}}const A=T%w;return A>0&&(T+=w-A),S.__size=T,S.__cache={},this}function M(S,b){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=16,T.storage=48):S.isMatrix4?(T.boundary=16,T.storage=64):S.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",S),b===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function f(S){const b=S.target;b.removeEventListener("dispose",f),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function u(){for(const S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:a,update:o,dispose:u}}const s0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function r0(){return bn===null&&(bn=new _c(s0,16,16,mi,Cn),bn.name="DFG_LUT",bn.minFilter=It,bn.magFilter=It,bn.wrapS=Mn,bn.wrapT=Mn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class a0{constructor(e={}){const{canvas:t=Eh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=hn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=m,f=new Set([mo,po,fo]),u=new Set([hn,Rn,Cs,ts,co,ho]),S=new Uint32Array(4),b=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let w=null,A=null;const g=[],y=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,F=null,W=null,C=null,k=null;this._outputColorSpace=Gt;let K=0,z=0,ie=null,V=-1,Q=null;const ee=new bt,be=new bt;let He=null;const q=new Je(0);let ae=0,Ee=t.width,Ue=t.height,me=1,Ve=null,vt=null;const Be=new bt(0,0,Ee,Ue),Xe=new bt(0,0,Ee,Ue);let xe=!1;const Pe=new Ls,qe=new xo;let nt=!1,j=!1;const ne=new mt,Le=new N,Me=new bt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function At(){return ie===null?me:1}let I=n;function Dt(v,P){return t.getContext(v,P)}let yt,gt,fe,wt,ze,We,E,x,O,se,J,le,de,Y,$,he,R,Z,X,ue,oe,ce,De;try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",_e,!1),I===null){const P="webgl2";if(I=Dt(P,v),I===null)throw Dt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(v){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ht("WebGLRenderer: "+v.message),v}function je(){yt=new cp(I),yt.init(),oe=new Zm(I,yt),gt=new Qf(I,yt,e,oe),fe=new $m(I,yt),gt.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),W=I.createFramebuffer(),C=I.createFramebuffer(),k=I.createFramebuffer(),wt=new dp(I),ze=new Nm,We=new Km(I,yt,fe,ze,gt,oe,wt),E=new lp(L),x=new fu(I),ce=new Zf(I,x),O=new hp(I,x,wt,ce),se=new pp(I,O,x,ce,wt),Z=new fp(I,gt,We),$=new jf(ze),J=new Dm(L,E,yt,gt,ce,$),le=new n0(L,ze),de=new Fm,Y=new Hm(yt),R=new Kf(L,E,fe,se,_,c),he=new Ym(L,se,gt),De=new i0(I,wt,gt,fe),X=new Jf(I,yt,wt),ue=new up(I,yt,wt),wt.programs=J.programs,L.capabilities=gt,L.extensions=yt,L.properties=ze,L.renderLists=de,L.shadowMap=he,L.state=fe,L.info=wt}M!==hn&&(U=new gp(M,t.width,t.height,o,i,r));const re=new e0(L,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const v=yt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=yt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(v){v!==void 0&&(me=v,this.setSize(Ee,Ue,!1))},this.getSize=function(v){return v.set(Ee,Ue)},this.setSize=function(v,P,H=!0){if(re.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=v,Ue=P,t.width=Math.floor(v*me),t.height=Math.floor(P*me),H===!0&&(t.style.width=v+"px",t.style.height=P+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(Ee*me,Ue*me).floor()},this.setDrawingBufferSize=function(v,P,H){Ee=v,Ue=P,me=H,t.width=Math.floor(v*H),t.height=Math.floor(P*H),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(M===hn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(Be)},this.setViewport=function(v,P,H,B){v.isVector4?Be.set(v.x,v.y,v.z,v.w):Be.set(v,P,H,B),fe.viewport(ee.copy(Be).multiplyScalar(At()).round())},this.getScissor=function(v){return v.copy(Xe)},this.setScissor=function(v,P,H,B){v.isVector4?Xe.set(v.x,v.y,v.z,v.w):Xe.set(v,P,H,B),fe.scissor(be.copy(Xe).multiplyScalar(At()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(v){fe.setScissorTest(xe=v)},this.setOpaqueSort=function(v){Ve=v},this.setTransparentSort=function(v){vt=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,H=!0){let B=0;if(v){let G=!1;if(ie!==null){const ge=ie.texture.format;G=f.has(ge)}if(G){const ge=ie.texture.type,Ae=u.has(ge),pe=R.getClearColor(),Se=R.getClearAlpha(),Ne=pe.r,et=pe.g,it=pe.b;Ae?(S[0]=Ne,S[1]=et,S[2]=it,S[3]=Se,I.clearBufferuiv(I.COLOR,0,S)):(b[0]=Ne,b[1]=et,b[2]=it,b[3]=Se,I.clearBufferiv(I.COLOR,0,b))}else B|=I.COLOR_BUFFER_BIT}P&&(B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),R.dispose(),de.dispose(),Y.dispose(),We.dispose(),ze.dispose(),E.dispose(),se.dispose(),O.dispose(),ce.dispose(),De.dispose(),J.dispose(),re.dispose(),re.removeEventListener("sessionstart",Fr),re.removeEventListener("sessionend",ls),Hn.stop()};function Fe(v){v.preventDefault(),Ar("WebGLRenderer: Context Lost."),D=!0}function Ke(){Ar("WebGLRenderer: Context Restored."),D=!1;const v=wt.autoReset,P=he.enabled,H=he.autoUpdate,B=he.needsUpdate,G=he.type;je(),wt.autoReset=v,he.enabled=P,he.autoUpdate=H,he.needsUpdate=B,he.type=G}function _e(v){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ct(v){const P=v.target;P.removeEventListener("dispose",ct),Mt(P)}function Mt(v){un(v),ze.remove(v)}function un(v){const P=ze.get(v).programs;P!==void 0&&(P.forEach(function(H){J.releaseProgram(H)}),v.isShaderMaterial&&J.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,H,B,G,ge){P===null&&(P=Ie);const Ae=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=Us(v,P,H,B,G);fe.setMaterial(B,Ae);let Se=H.index,Ne=1;if(B.wireframe===!0){if(Se=O.getWireframeAttribute(H),Se===void 0)return;Ne=2}const et=H.drawRange,it=H.attributes.position;let Re=et.start*Ne,st=(et.start+et.count)*Ne;ge!==null&&(Re=Math.max(Re,ge.start*Ne),st=Math.min(st,(ge.start+ge.count)*Ne)),Se!==null?(Re=Math.max(Re,0),st=Math.min(st,Se.count)):it!=null&&(Re=Math.max(Re,0),st=Math.min(st,it.count));const Pt=st-Re;if(Pt<0||Pt===1/0)return;ce.setup(G,B,pe,H,Se);let St,xt=X;if(Se!==null&&(St=x.get(Se),xt=ue,xt.setIndex(St)),G.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*At()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(G.isLine){let Xt=B.linewidth;Xt===void 0&&(Xt=1),fe.setLineWidth(Xt*At()),G.isLineSegments?xt.setMode(I.LINES):G.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else G.isPoints?xt.setMode(I.POINTS):G.isSprite&&xt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xt=G._multiDrawStarts,Ce=G._multiDrawCounts,Qt=G._multiDrawCount,ut=Se?x.get(Se).bytesPerElement:1,ai=ze.get(B).currentProgram.getUniforms();for(let qt=0;qt<Qt;qt++)ai.setValue(I,"_gl_DrawID",qt),xt.render(Xt[qt]/ut,Ce[qt])}else if(G.isInstancedMesh)xt.renderInstances(Re,Pt,G.count);else if(H.isInstancedBufferGeometry){const Xt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ce=Math.min(H.instanceCount,Xt);xt.renderInstances(Re,Pt,Ce)}else xt.render(Re,Pt)};function vi(v,P,H,B){F!==null&&v.isNodeMaterial&&F.setObject(B,v),nt===!0&&$.setState(v,H,!1),v.transparent===!0&&v.side===vn&&v.forceSinglePass===!1?(v.side=tn,v.needsUpdate=!0,Pn(v,P,B),v.side=pi,v.needsUpdate=!0,Pn(v,P,B),v.side=vn):Pn(v,P,B)}this.compile=function(v,P,H=null){H===null&&(H=v),F!==null&&F.renderStart(v,P,H),A=Y.get(H),A.init(P),y.push(A),H.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),v!==H&&v.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),j=this.localClippingEnabled,nt=$.init(this.clippingPlanes,j),nt===!0&&$.setGlobalState(this.clippingPlanes,P),F!==null&&he.render(A.state.shadowsArray,H,P);const B=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const pe=ge[Ae];vi(pe,H,P,G),B.add(pe)}else vi(ge,H,P,G),B.add(ge)}),A=y.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(v,P,H=null){const B=this.compile(v,P,H);return new Promise(G=>{function ge(){if(B.forEach(function(Ae){const Se=ze.get(Ae).currentProgram;(Se===void 0||Se.isReady())&&B.delete(Ae)}),B.size===0){G(v);return}setTimeout(ge,10)}yt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ri=null;function os(v){ri&&ri(v)}function Fr(){Hn.stop()}function ls(){Hn.start()}const Hn=new Ac;Hn.setAnimationLoop(os),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(v){ri=v,re.setAnimationLoop(v),v===null?Hn.stop():Hn.start()},re.addEventListener("sessionstart",Fr),re.addEventListener("sessionend",ls),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(v,P);const H=re.enabled===!0&&re.isPresenting===!0,B=U!==null&&(ie===null||H)&&U.begin(L,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(P),P=re.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,P,ie),A=Y.get(v,y.length),A.init(P),A.state.textureUnits=We.getTextureUnits(),y.push(A),ne.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?qe.setFromArrayCamera(P):Pe.setFromProjectionMatrix(ne,yn,P.reversedDepth),j=this.localClippingEnabled,nt=$.init(this.clippingPlanes,j),w=de.get(v,g.length),w.init(),g.push(w),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Ae=L.xr.getDepthSensingMesh();Ae!==null&&Mi(Ae,P,-1/0,L.sortObjects)}Mi(v,P,0,L.sortObjects),w.finish(),F!==null&&F.updateLights(A.state.lightsArray),L.sortObjects===!0&&w.sort(Ve,vt),at=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,at&&R.addToRenderList(w,v),this.info.autoReset===!0&&this.info.reset(),nt===!0&&$.beginShadows();const G=A.state.shadowsArray;if(he.render(G,v,P),nt===!0&&$.endShadows(),(B&&U.hasRenderPass())===!1){const Ae=w.opaque,pe=w.transmissive;if(A.setupLights(),P.isArrayCamera){const Se=P.cameras;if(pe.length>0)for(let Ne=0,et=Se.length;Ne<et;Ne++){const it=Se[Ne];Ge(Ae,pe,v,it)}at&&R.render(v);for(let Ne=0,et=Se.length;Ne<et;Ne++){const it=Se[Ne];we(w,v,it,it.viewport)}}else pe.length>0&&Ge(Ae,pe,v,P),at&&R.render(v),we(w,v,P)}ie!==null&&z===0&&(We.updateMultisampleRenderTarget(ie),We.updateRenderTargetMipmap(ie)),B&&U.end(L),v.isScene===!0&&v.onAfterRender(L,v,P),ce.resetDefaultState(),V=-1,Q=null,y.pop(),y.length>0?(A=y[y.length-1],We.setTextureUnits(A.state.textureUnits),nt===!0&&$.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,F!==null&&F.renderEnd()};function Mi(v,P,H,B){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){const Ae=P.isArrayCamera?qe:Pe;if(!v.frustumCulled||v.intersectsFrustum(Ae)){B&&Me.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ne);const pe=se.update(v),Se=v.material;Se.visible&&w.push(v,pe,Se,H,Me.z,null,P)}}else if(v.isMesh||v.isLine||v.isPoints){const Ae=P.isArrayCamera?qe:Pe;if(!v.frustumCulled||v.intersectsFrustum(Ae)){const pe=se.update(v),Se=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Me.copy(v.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Me.copy(pe.boundingSphere.center)),Me.applyMatrix4(v.matrixWorld).applyMatrix4(ne)),Array.isArray(Se)){const Ne=pe.groups;for(let et=0,it=Ne.length;et<it;et++){const Re=Ne[et],st=Se[Re.materialIndex];st&&st.visible&&w.push(v,pe,st,H,Me.z,Re,P)}}else Se.visible&&w.push(v,pe,Se,H,Me.z,null,P)}}}const ge=v.children;for(let Ae=0,pe=ge.length;Ae<pe;Ae++)Mi(ge[Ae],P,H,B)}function we(v,P,H,B){const{opaque:G,transmissive:ge,transparent:Ae}=v;A.setupLightsView(H),nt===!0&&$.setGlobalState(L.clippingPlanes,H),B&&fe.viewport(ee.copy(B)),G.length>0&&_t(G,P,H),ge.length>0&&_t(ge,P,H),Ae.length>0&&_t(Ae,P,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ge(v,P,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){const Re=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new En(1,1,{generateMipmaps:!0,type:Re?Cn:hn,minFilter:ei,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const ge=A.state.transmissionRenderTarget[B.id],Ae=B.viewport||ee;ge.setSize(Ae.z*L.transmissionResolutionScale,Ae.w*L.transmissionResolutionScale);const pe=L.getRenderTarget(),Se=L.getActiveCubeFace(),Ne=L.getActiveMipmapLevel();L.setRenderTarget(ge),L.getClearColor(q),ae=L.getClearAlpha(),ae<1&&L.setClearColor(16777215,.5),L.clear(),at&&R.render(H);const et=L.toneMapping;L.toneMapping=zn;const it=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),nt===!0&&$.setGlobalState(L.clippingPlanes,B),_t(v,H,B),We.updateMultisampleRenderTarget(ge),We.updateRenderTargetMipmap(ge),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let st=0,Pt=P.length;st<Pt;st++){const St=P[st],{object:xt,geometry:Xt,material:Ce,group:Qt}=St;if(Ce.side===vn&&xt.layers.test(B.layers)){const ut=Ce.side;Ce.side=tn,Ce.needsUpdate=!0,Jt(xt,H,B,Xt,Ce,Qt),Ce.side=ut,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(We.updateMultisampleRenderTarget(ge),We.updateRenderTargetMipmap(ge))}L.setRenderTarget(pe,Se,Ne),L.setClearColor(q,ae),it!==void 0&&(B.viewport=it),L.toneMapping=et}function _t(v,P,H){const B=P.isScene===!0?P.overrideMaterial:null;for(let G=0,ge=v.length;G<ge;G++){const Ae=v[G],{object:pe,geometry:Se,group:Ne}=Ae;let et=Ae.material;et.allowOverride===!0&&B!==null&&(et=B),pe.layers.test(H.layers)&&Jt(pe,P,H,Se,et,Ne)}}function Jt(v,P,H,B,G,ge){F!==null&&G.isNodeMaterial&&F.setObject(v,G),v.onBeforeRender(L,P,H,B,G,ge),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(L,P,H,B,v,ge),G.transparent===!0&&G.side===vn&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,L.renderBufferDirect(H,P,B,G,v,ge),G.side=pi,G.needsUpdate=!0,L.renderBufferDirect(H,P,B,G,v,ge),G.side=vn):L.renderBufferDirect(H,P,B,G,v,ge),v.onAfterRender(L,P,H,B,G,ge)}function sn(v){let P=0;for(const H of v)H.texture!==null&&P++;return P}function Pn(v,P,H){P.isScene!==!0&&(P=Ie);const B=ze.get(v),G=A.state.lights,ge=A.state.shadowsArray,Ae=G.state.version,pe=J.getParameters(v,G.state,ge,P,H,A.state.lightProbeGridArray),Se=J.getProgramCacheKey(pe);let Ne=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;const et=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=E.get(v.envMap||B.environment,et),B.envMapRotation=B.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",ct),Ne=new Map,B.programs=Ne,B.programVariants=new Map);let it=Ne.get(Se);if(it!==void 0){if(B.currentProgram===it&&B.lightsStateVersion===Ae)return cs(v,pe),it}else pe.uniforms=J.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,H,pe),v.onBeforeCompile(pe,L),it=J.acquireProgram(pe,Se),Ne.set(Se,it),B.uniforms=pe.uniforms;const Re=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=$.uniform),cs(v,pe),B.needsLights=Vc(v),B.lightsStateVersion=Ae,B.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.sunLights.value=G.state.sun,Re.sunLightShadows.value=G.state.sunShadow,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.sunShadowMatrix.value=G.state.sunShadowMatrix,Re.sunShadowCascade.value=G.state.sunShadowCascade,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=sn(A.state.lightProbeGridArray),B.currentProgram=it,B.uniformsList=null,it}function Wt(v,P,H,B,G){const ge=ze.get(v),Ae=ge.currentProgram.id+","+B+","+G;let pe=ge.programVariants.get(Ae);return pe===void 0?(pe=Pn(v,P,H),ge.programVariants.set(Ae,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=B,ge.toneMapping=G),pe}function Ot(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=xr.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function cs(v,P){const H=ze.get(v);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function Us(v,P,H,B,G){P.isScene!==!0&&(P=Ie),We.resetTextureUnits();const ge=P.fog,Ae=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,pe=ie===null?L.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ot.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ne=E.get(B.envMap||Ae,Se),et=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,it=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,Pt=!!H.morphAttributes.color;let St=zn;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(St=L.toneMapping);const xt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=xt!==void 0?xt.length:0,Ce=ze.get(B),Qt=A.state.lights;if(nt===!0&&(j===!0||v!==Q)){const Tt=v===Q&&B.id===V;$.setState(B,v,Tt)}let ut=!1,ai=!1;B.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Qt.state.version||G.isBatchedMesh&&Ce.batching===!1||!G.isBatchedMesh&&Ce.batching===!0||G.isBatchedMesh&&Ce.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ce.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||G.isInstancedMesh&&Ce.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ce.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ce.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ce.instancingMorph===!1&&G.morphTexture!==null||Ce.envMap!==Ne||B.fog===!0&&Ce.fog!==ge||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==$.numPlanes||Ce.numIntersection!==$.numIntersection)||Ce.vertexAlphas!==et||Ce.vertexTangents!==it||Ce.morphTargets!==Re||Ce.morphNormals!==st||Ce.morphColors!==Pt||Ce.morphTargetsCount!==Xt||Ce.numLightProbeGrids!==sn(A.state.lightProbeGridArray)?ut=!0:(Ce.outputColorSpace!==pe||Ce.toneMapping!==St)&&(ai=!0):(ut=!0,Ce.__version=B.version);let qt=Ce.currentProgram;(ut===!0||ai===!0)&&(qt=ai===!0?Wt(B,P,G,pe,St):Pn(B,P,G),F&&B.isNodeMaterial&&F.onUpdateProgram(B,qt,Ce));let Fs=!1,Vn=!1,oi=!1;const lt=qt.getUniforms(),kt=Ce.uniforms;if(fe.useProgram(qt.program)&&(Fs=!0,Vn=!0,oi=!0),B.id!==V&&(V=B.id,Vn=!0),Fs||Q!==v){fe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",v.projectionMatrix),lt.setValue(I,"viewMatrix",v.matrixWorldInverse);const Bt=lt.map.cameraPosition;Bt!==void 0&&Bt.setValue(I,Le.setFromMatrixPosition(v.matrixWorld)),gt.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Vn=!0,oi=!0)}if(Ce.needsLights&&(Qt.state.sunShadowMap.length>0&&lt.setValue(I,"sunShadowMap",Qt.state.sunShadowMap,We),Qt.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",Qt.state.directionalShadowMap,We),Qt.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",Qt.state.spotShadowMap,We),Qt.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",Qt.state.pointShadowMap,We)),G.isSkinnedMesh){lt.setOptional(I,G,"bindMatrix"),lt.setOptional(I,G,"bindMatrixInverse");const Tt=G.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),lt.setValue(I,"boneTexture",Tt.boneTexture,We))}G.isBatchedMesh&&(lt.setOptional(I,G,"batchingTexture"),lt.setValue(I,"batchingTexture",G._matricesTexture,We),lt.setOptional(I,G,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",G._indirectTexture,We),lt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",G._colorsTexture,We));const mn=H.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Z.update(G,H,qt),(Vn||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,lt.setValue(I,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(kt.envMapIntensity.value=P.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=r0()),Vn){if(lt.setValue(I,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&Hc(kt,oi),ge&&B.fog===!0&&le.refreshFogUniforms(kt,ge),le.refreshMaterialUniforms(kt,B,me,Ue,A.state.transmissionRenderTarget[v.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){const Tt=T;let Bt=0;for(const Ln of A.state.lightProbeGridArray)Ln.texture!==null&&(Tt.textures[Bt]=Ln.texture,Tt.min[Bt]=Ln.boundingBox.min,Tt.max[Bt]=Ln.boundingBox.max,Tt.resolution[Bt]=Ln.resolution,Bt++);for(const Ln in Tt)Tt[Ln].length=Bt;kt.probesSH.value=Tt.textures,kt.probesMin.value=Tt.min,kt.probesMax.value=Tt.max,kt.probesResolution.value=Tt.resolution}xr.upload(I,Ot(Ce),kt,We)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xr.upload(I,Ot(Ce),kt,We),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(I,"center",G.center),lt.setValue(I,"modelViewMatrix",G.modelViewMatrix),lt.setValue(I,"normalMatrix",G.normalMatrix),lt.setValue(I,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const Tt=B.uniformsGroups;for(let Bt=0,Ln=Tt.length;Bt<Ln;Bt++){const Ao=Tt[Bt];De.update(Ao,qt),De.bind(Ao,qt)}}return qt}function Hc(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Vc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,P,H){const B=ze.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ze.get(v.texture).__webglTexture=P,ze.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){const H=ze.get(v);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,H=0){ie=v,K=P,z=H;let B=null,G=!1,ge=!1;if(v){const pe=ze.get(v);if(pe.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(I.FRAMEBUFFER,pe.__webglFramebuffer),ee.copy(v.viewport),be.copy(v.scissor),He=v.scissorTest,fe.viewport(ee),fe.scissor(be),fe.setScissorTest(He),V=-1;return}else if(pe.__webglFramebuffer===void 0)We.setupRenderTarget(v);else if(pe.__hasExternalTextures)We.rebindTextures(v,ze.get(v.texture).__webglTexture,ze.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const et=v.depthTexture;if(pe.__boundDepthTexture!==et){if(et!==null&&ze.has(et)&&(v.width!==et.image.width||v.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(v)}}const Se=v.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);const Ne=ze.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[P])?B=Ne[P][H]:B=Ne[P],G=!0):v.samples>0&&We.useMultisampledRTT(v)===!1?B=ze.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[H]:B=Ne,ee.copy(v.viewport),be.copy(v.scissor),He=v.scissorTest}else ee.copy(Be).multiplyScalar(me).floor(),be.copy(Xe).multiplyScalar(me).floor(),He=xe;if(H!==0&&(B=W),fe.bindFramebuffer(I.FRAMEBUFFER,B)&&fe.drawBuffers(v,B),fe.viewport(ee),fe.scissor(be),fe.setScissorTest(He),G){const pe=ze.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe.__webglTexture,H)}else if(ge){const pe=P;for(let Se=0;Se<v.textures.length;Se++){const Ne=ze.get(v.textures[Se]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Se,Ne.__webglTexture,H,pe)}}else if(v!==null&&H!==0){const pe=ze.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,H)}V=-1};function wo(v){const P=ze.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=gt.textureFormatReadable(v.format),P.__typeReadable=gt.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,H,B,G,ge,Ae,pe=0){if(!(v&&v.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ze.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se){fe.bindFramebuffer(I.FRAMEBUFFER,Se);try{const Ne=v.textures[pe],et=Ne.format,it=Ne.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe);const Re=wo(Ne);if(Re.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-B&&H>=0&&H<=v.height-G&&I.readPixels(P,H,B,G,oe.convert(et),oe.convert(it),ge)}finally{const Ne=ie!==null?ze.get(ie).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,P,H,B,G,ge,Ae,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ze.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se)if(P>=0&&P<=v.width-B&&H>=0&&H<=v.height-G){fe.bindFramebuffer(I.FRAMEBUFFER,Se);const Ne=v.textures[pe],et=Ne.format,it=Ne.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe);const Re=wo(Ne);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),I.readPixels(P,H,B,G,oe.convert(et),oe.convert(it),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Pt=ie!==null?ze.get(ie).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,Pt);const St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Th(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(st),I.deleteSync(St),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,H=0){const B=Math.pow(2,-H),G=Math.floor(v.image.width*B),ge=Math.floor(v.image.height*B),Ae=P!==null?P.x:0,pe=P!==null?P.y:0;We.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,Ae,pe,G,ge),fe.unbindTexture()},this.copyTextureToTexture=function(v,P,H=null,B=null,G=0,ge=0){let Ae,pe,Se,Ne,et,it,Re,st,Pt;const St=v.isCompressedTexture?v.mipmaps[ge]:v.image;if(H!==null)Ae=H.max.x-H.min.x,pe=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Ne=H.min.x,et=H.min.y,it=H.isBox3?H.min.z:0;else{const lt=Math.pow(2,-G);Ae=Math.floor(St.width*lt),pe=Math.floor(St.height*lt),v.isDataArrayTexture?Se=St.depth:v.isData3DTexture?Se=Math.floor(St.depth*lt):Se=1,Ne=0,et=0,it=0}B!==null?(Re=B.x,st=B.y,Pt=B.z):(Re=0,st=0,Pt=0);const xt=oe.convert(P.format),Xt=oe.convert(P.type);let Ce;P.isData3DTexture?(We.setTexture3D(P,0),Ce=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(We.setTexture2DArray(P,0),Ce=I.TEXTURE_2D_ARRAY):(We.setTexture2D(P,0),Ce=I.TEXTURE_2D),fe.activeTexture(I.TEXTURE0),fe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),fe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),fe.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const Qt=fe.getParameter(I.UNPACK_ROW_LENGTH),ut=fe.getParameter(I.UNPACK_IMAGE_HEIGHT),ai=fe.getParameter(I.UNPACK_SKIP_PIXELS),qt=fe.getParameter(I.UNPACK_SKIP_ROWS),Fs=fe.getParameter(I.UNPACK_SKIP_IMAGES);fe.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),fe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),fe.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),fe.pixelStorei(I.UNPACK_SKIP_ROWS,et),fe.pixelStorei(I.UNPACK_SKIP_IMAGES,it);const Vn=v.isDataArrayTexture||v.isData3DTexture,oi=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){const lt=ze.get(v),kt=ze.get(P),mn=ze.get(lt.__renderTarget),Tt=ze.get(kt.__renderTarget);fe.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Bt=0;Bt<Se;Bt++)Vn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.get(v).__webglTexture,G,it+Bt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.get(P).__webglTexture,ge,Pt+Bt)),I.blitFramebuffer(Ne,et,Ne+Ae,et+pe,Re,st,Re+Ae,st+pe,I.DEPTH_BUFFER_BIT,I.NEAREST);fe.bindFramebuffer(I.READ_FRAMEBUFFER,null),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||ze.has(v)){const lt=ze.get(v),kt=ze.get(P);fe.bindFramebuffer(I.READ_FRAMEBUFFER,C),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let mn=0;mn<Se;mn++)Vn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,lt.__webglTexture,G,it+mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,lt.__webglTexture,G),oi?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,ge,Pt+mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,ge),G!==0?I.blitFramebuffer(Ne,et,Ne+Ae,et+pe,Re,st,Re+Ae,st+pe,I.COLOR_BUFFER_BIT,I.NEAREST):oi?I.copyTexSubImage3D(Ce,ge,Re,st,Pt+mn,Ne,et,Ae,pe):I.copyTexSubImage2D(Ce,ge,Re,st,Ne,et,Ae,pe);fe.bindFramebuffer(I.READ_FRAMEBUFFER,null),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else oi?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Ce,ge,Re,st,Pt,Ae,pe,Se,xt,Xt,St.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,ge,Re,st,Pt,Ae,pe,Se,xt,St.data):I.texSubImage3D(Ce,ge,Re,st,Pt,Ae,pe,Se,xt,Xt,St):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,Re,st,Ae,pe,xt,Xt,St.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,Re,st,St.width,St.height,xt,St.data):I.texSubImage2D(I.TEXTURE_2D,ge,Re,st,Ae,pe,xt,Xt,St);fe.pixelStorei(I.UNPACK_ROW_LENGTH,Qt),fe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut),fe.pixelStorei(I.UNPACK_SKIP_PIXELS,ai),fe.pixelStorei(I.UNPACK_SKIP_ROWS,qt),fe.pixelStorei(I.UNPACK_SKIP_IMAGES,Fs),ge===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&I.generateMipmap(Ce),fe.unbindTexture()},this.initRenderTarget=function(v){ze.get(v).__webglFramebuffer===void 0&&We.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?We.setTextureCube(v,0):v.isData3DTexture?We.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?We.setTexture2DArray(v,0):We.setTexture2D(v,0),fe.unbindTexture()},this.resetState=function(){K=0,z=0,ie=null,fe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class o0 extends dc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ke;e.deleteAttribute("uv");const t=new Oe({side:tn}),n=new Oe,i=new Dr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new te(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Zh(e,n,6),o=new Rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new te(e,Bi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new te(e,Bi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new te(e,Bi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const p=new te(e,Bi(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const d=new te(e,Bi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const m=new te(e,Bi(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Bi(s){return new su({color:0,emissive:16777215,emissiveIntensity:s})}const Ms=new N;function fn(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;Ms.copy(e),Ms[n]=0,Ms.normalize();const l=.5*a/(a+o),h=1-Ms.angleTo(s)/c;return Math.sign(Ms[t])===1?h*l:o/(a+o)+l+l*(1-h)}class Ye extends ke{constructor(e=1,t=1,n=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new N,l=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,d=this.attributes.normal.array,m=this.attributes.uv.array,_=p.length/6,M=new N,f=.5/a;for(let u=0,S=0;u<p.length;u+=3,S+=2)switch(c.fromArray(p,u),l.copy(c),l.x-=Math.sign(l.x)*f,l.y-=Math.sign(l.y)*f,l.z-=Math.sign(l.z)*f,l.normalize(),p[u+0]=h.x*Math.sign(c.x)+l.x*r,p[u+1]=h.y*Math.sign(c.y)+l.y*r,p[u+2]=h.z*Math.sign(c.z)+l.z*r,d[u+0]=l.x,d[u+1]=l.y,d[u+2]=l.z,Math.floor(u/_)){case 0:M.set(1,0,0),m[S+0]=fn(M,l,"z","y",r,n),m[S+1]=1-fn(M,l,"y","z",r,t);break;case 1:M.set(-1,0,0),m[S+0]=1-fn(M,l,"z","y",r,n),m[S+1]=1-fn(M,l,"y","z",r,t);break;case 2:M.set(0,1,0),m[S+0]=1-fn(M,l,"x","z",r,e),m[S+1]=fn(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),m[S+0]=1-fn(M,l,"x","z",r,e),m[S+1]=1-fn(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),m[S+0]=1-fn(M,l,"x","y",r,e),m[S+1]=1-fn(M,l,"y","x",r,t);break;case 5:M.set(0,0,-1),m[S+0]=fn(M,l,"x","y",r,e),m[S+1]=1-fn(M,l,"y","x",r,t);break}}static fromJSON(e){return new Ye(e.width,e.height,e.depth,e.segments,e.radius)}}const fa=new Map;function Zt(s,e,t,n,i={}){if(fa.has(s))return fa.get(s);const r=document.createElement("canvas");r.width=e,r.height=t;const a=r.getContext("2d");n(a,e,t);const o=new Ir(r);return o.colorSpace=Gt,o.anisotropy=8,i.repeat&&(o.wrapS=o.wrapT=Mr,o.repeat.set(i.repeat[0],i.repeat[1])),fa.set(s,o),o}function l0(){return Zt("asphalt",512,512,(s,e,t)=>{s.fillStyle="#1a1a20",s.fillRect(0,0,e,t);const n=s.getImageData(0,0,e,t),i=n.data;for(let r=0;r<i.length;r+=4){const a=(Math.random()-.5)*34;i[r]+=a,i[r+1]+=a,i[r+2]+=a+2}s.putImageData(n,0,0);for(let r=0;r<900;r++){const a=30+Math.random()*50;s.fillStyle=`rgba(${a},${a},${a+4},${.25+Math.random()*.4})`,s.beginPath(),s.arc(Math.random()*e,Math.random()*t,.6+Math.random()*1.7,0,7),s.fill()}for(let r=0;r<22;r++){s.strokeStyle=`rgba(0,0,0,${.05+Math.random()*.15})`,s.lineWidth=2+Math.random()*9;const a=Math.random()*e;s.beginPath(),s.moveTo(a,0),s.bezierCurveTo(a+20,t*.3,a-30,t*.6,a+10,t),s.stroke()}s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=2,s.beginPath(),s.moveTo(0,t*.5),s.lineTo(e,t*.5),s.stroke()},{repeat:[4,90]})}function c0(){return Zt("checker",256,64,(s,e,t)=>{for(let i=0;i<t;i+=32)for(let r=0;r<e;r+=32)s.fillStyle=(r/32+i/32|0)%2===0?"#f2f0e8":"#101014",s.fillRect(r,i,32,32)})}function Cl(s,e="#0b0b12",t="#ffd319",n="#ff5a12"){return Zt(`banner:${s}:${e}:${t}`,512,128,(i,r,a)=>{i.fillStyle=e,i.fillRect(0,0,r,a),i.fillStyle=n,i.fillRect(0,0,14,a),i.fillRect(r-14,0,14,a),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=3,i.strokeRect(8,8,r-16,a-16),i.fillStyle=t,i.font="italic 900 62px Arial, Helvetica, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,r/2,a/2+4)})}function h0(s,e=""){return Zt(`sign:${s}:${e}`,256,256,(t,n,i)=>{t.fillStyle="#0c0c12",t.fillRect(0,0,n,i),t.strokeStyle="#ffd319",t.lineWidth=8,t.strokeRect(10,10,n-20,i-20),t.fillStyle="#ffd319",t.font="italic 900 84px Arial, Helvetica, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(s,n/2,i/2-24),t.fillStyle="#cfcdd6",t.font="700 26px Arial, Helvetica, sans-serif",t.fillText(e,n/2,i/2+52)})}function u0(){return Zt("windows",128,256,(s,e,t)=>{s.fillStyle="#070810",s.fillRect(0,0,e,t);const n=10,i=22,r=e/n,a=t/i;for(let o=0;o<i;o++)for(let c=0;c<n;c++)if(Math.random()<.28){const l=Math.random()<.7;s.fillStyle=l?`rgba(255,${180+Math.random()*50},${90+Math.random()*60},${.35+Math.random()*.5})`:`rgba(120,200,255,${.25+Math.random()*.4})`,s.fillRect(c*r+r*.18,o*a+a*.22,r*.58,a*.48)}},{repeat:[1,1]})}function Cr(){return Zt("glow",128,128,(s,e,t)=>{const n=s.createRadialGradient(e/2,t/2,2,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.75)"),n.addColorStop(.45,"rgba(255,255,255,0.22)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.fillRect(0,0,e,t)})}function d0(){return Zt("smoke",128,128,(s,e,t)=>{const n=s.createRadialGradient(e/2,t/2,4,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,0.85)"),n.addColorStop(.35,"rgba(235,235,245,0.45)"),n.addColorStop(.7,"rgba(200,200,215,0.12)"),n.addColorStop(1,"rgba(190,190,210,0)"),s.fillStyle=n,s.fillRect(0,0,e,t)})}function f0(){return Zt("pool",256,256,(s,e,t)=>{const n=s.createRadialGradient(e/2,t/2,4,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,240,200,0.55)"),n.addColorStop(.4,"rgba(255,220,160,0.2)"),n.addColorStop(1,"rgba(255,210,150,0)"),s.fillStyle=n,s.fillRect(0,0,e,t)})}function p0(){return Zt("crowd",256,64,(s,e,t)=>{s.fillStyle="#07070c",s.fillRect(0,0,e,t);const n=["#ffd319","#ff5a12","#2dff86","#37e6ff","#ff2e4d","#e8e6df","#8c2bff"];for(let i=0;i<420;i++){s.fillStyle=n[Math.random()*n.length|0],s.globalAlpha=.25+Math.random()*.5;const r=1.5+Math.random()*2.5;s.beginPath(),s.arc(Math.random()*e,Math.random()*t,r,0,7),s.fill()}s.globalAlpha=1},{repeat:[6,1]})}function m0(){return Zt("carbon",128,128,(s,e,t)=>{s.fillStyle="#0b0b0f",s.fillRect(0,0,e,t);const n=8;for(let i=0;i<t;i+=n)for(let r=0;r<e;r+=n){const a=(r/n+i/n&1)===0,o=s.createLinearGradient(r,i,r+n,i+n);a?(o.addColorStop(0,"#22222a"),o.addColorStop(.55,"#15151b"),o.addColorStop(1,"#0d0d12")):(o.addColorStop(0,"#101015"),o.addColorStop(.55,"#1b1b23"),o.addColorStop(1,"#0a0a0e")),s.fillStyle=o,s.fillRect(r,i,n,n),s.fillStyle=a?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.22)",s.fillRect(r,i,n,1)}},{repeat:[3,3]})}function pa(s,e=[24,22,26],t=13){return Zt(`suede:${s}`,128,128,(n,i,r)=>{n.fillStyle=`rgb(${e[0]},${e[1]},${e[2]})`,n.fillRect(0,0,i,r);const a=n.getImageData(0,0,i,r),o=a.data;for(let c=0;c<o.length;c+=4){const l=(Math.random()-.5)*t*2;o[c]=Math.max(0,Math.min(255,o[c]+l+1)),o[c+1]=Math.max(0,Math.min(255,o[c+1]+l)),o[c+2]=Math.max(0,Math.min(255,o[c+2]+l+2))}n.putImageData(a,0,0);for(let c=0;c<120;c++)n.fillStyle=`rgba(255,255,255,${.01+Math.random()*.02})`,n.beginPath(),n.arc(Math.random()*i,Math.random()*r,1+Math.random()*3,0,7),n.fill()},{repeat:[2,2]})}function g0(s="tach"){const e=s==="tach",t=e?9:6,n=e?Array.from({length:t+1},(i,r)=>String(r)):Array.from({length:t+1},(i,r)=>String(r*40));return Zt(`gauge:${s}`,256,256,(i,r,a)=>{const o=r/2,c=a/2,l=r/2-5;i.clearRect(0,0,r,a);const h=i.createRadialGradient(o,c-26,8,o,c,l);h.addColorStop(0,"#1c2030"),h.addColorStop(.7,"#0a0b11"),h.addColorStop(1,"#05060a"),i.fillStyle=h,i.beginPath(),i.arc(o,c,l,0,Math.PI*2),i.fill();const p=2.25+Math.PI/2,d=-2.25+Math.PI/2,m=p-d;if(e){const _=p-m*.74;i.strokeStyle="#ff2a18",i.lineWidth=11,i.beginPath(),i.arc(o,c,l-15,-_,-d,!1),i.stroke()}i.strokeStyle="rgba(190,196,210,0.55)",i.lineWidth=3,i.beginPath(),i.arc(o,c,l-4,-p,-d,!1),i.stroke();for(let _=0;_<=t*5;_++){const M=_/(t*5),f=p-m*M,u=_%5===0,S=l-(u?30:21),b=l-12;if(i.strokeStyle=u?"#eef1f7":"rgba(200,205,220,0.45)",i.lineWidth=u?4:2,i.beginPath(),i.moveTo(o+Math.cos(f)*S,c-Math.sin(f)*S),i.lineTo(o+Math.cos(f)*b,c-Math.sin(f)*b),i.stroke(),u){const T=n[Math.round(M*t)],w=l-48;i.fillStyle=M>.74&&e?"#ff6a4d":"#f2f4fa",i.font="italic 900 30px Arial, Helvetica, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(T,o+Math.cos(f)*w,c-Math.sin(f)*w)}}i.fillStyle="rgba(220,225,235,0.55)",i.font="700 15px Arial, Helvetica, sans-serif",i.textAlign="center",i.fillText(e?"RPM x1000":"KM/H",o,c+l*.52)})}function Pl(s="DB"){return Zt(`badge:${s}`,128,128,(e,t,n)=>{e.clearRect(0,0,t,n),e.fillStyle="#0b0b10",e.beginPath(),e.arc(t/2,n/2,t/2-2,0,7),e.fill(),e.strokeStyle="#ffd319",e.lineWidth=7,e.beginPath(),e.arc(t/2,n/2,t/2-7,0,7),e.stroke(),e.fillStyle="#ffd319",e.font="italic 900 54px Arial, Helvetica, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,t/2,n/2+3)})}function _0(){return Zt("windownet",256,256,(s,e,t)=>{s.clearRect(0,0,e,t),s.strokeStyle="#33333c",s.lineWidth=4;for(let n=20;n<e;n+=38)s.beginPath(),s.moveTo(n,0),s.lineTo(n,t),s.stroke();for(let n=20;n<t;n+=38)s.beginPath(),s.moveTo(0,n),s.lineTo(e,n),s.stroke();s.lineWidth=12,s.strokeRect(6,6,e-12,t-12),s.fillStyle="#b3121f",s.fillRect(0,0,e,7)})}function x0(){return Zt("floormat",256,128,(s,e,t)=>{s.fillStyle="#0a0a0d",s.fillRect(0,0,e,t),s.strokeStyle="rgba(255,211,25,0.5)",s.lineWidth=3,s.strokeRect(10,10,e-20,t-20),s.fillStyle="rgba(255,211,25,0.75)",s.font="italic 900 40px Arial, Helvetica, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText("DRAG BRASIL",e/2,t/2+2)},{repeat:[1,1]})}function v0(){return Zt("dashscreen",256,128,(s,e,t)=>{s.fillStyle="#04121a",s.fillRect(0,0,e,t),s.strokeStyle="rgba(47,216,255,0.18)",s.lineWidth=1;for(let n=0;n<e;n+=16)s.beginPath(),s.moveTo(n,0),s.lineTo(n,t),s.stroke();for(let n=0;n<t;n+=16)s.beginPath(),s.moveTo(0,n),s.lineTo(e,n),s.stroke();s.fillStyle="#2fd8ff",s.font="italic 900 34px Arial, Helvetica, sans-serif",s.textAlign="left",s.textBaseline="middle",s.fillText("DRAG",16,36),s.fillStyle="#ffd319",s.fillText("BRASIL",16,72),s.fillStyle="#2fd8ff",s.fillRect(16,98,150,8),s.fillStyle="rgba(47,216,255,0.35)",s.fillRect(170,98,66,8)})}function M0(s){return new Oe({color:new Je(s),metalness:.22,roughness:.42,envMapIntensity:.55})}const ln={dark:new Oe({color:723727,roughness:.7,metalness:.3}),trim:new Oe({color:1513245,roughness:.45,metalness:.7}),chrome:new Oe({color:13225174,roughness:.18,metalness:1}),tire:new Oe({color:657932,roughness:.95,metalness:0}),rim:new Oe({color:7369855,roughness:.34,metalness:.92}),rimDark:new Oe({color:3553860,roughness:.4,metalness:.8}),glass:new iu({color:1847362,metalness:.45,roughness:.05,transparent:!0,opacity:.74,side:vn,depthWrite:!1,envMapIntensity:2.4}),interior:new Oe({color:460554,roughness:1,metalness:0,envMapIntensity:.15}),seat:new Oe({color:1774614,roughness:.95,envMapIntensity:.2}),seatRed:new Oe({color:4853784,roughness:.9,envMapIntensity:.2}),headlight:new Oe({color:16774872,emissive:16773312,emissiveIntensity:4,roughness:.2}),taillight:new Oe({color:4325384,emissive:16715808,emissiveIntensity:.9,roughness:.25}),amber:new Oe({color:3808e3,emissive:16747008,emissiveIntensity:1.2,roughness:.3})};function Te(s,e,t,n=!0){const i=new te(s,e);return i.castShadow=n,i.receiveShadow=!0,t.add(i),i}function ur(s,e,t,n){const i=new Nt;i.position.set(s,.345,e);const r=new Nt,a=new Nt;i.add(r),r.add(a);const o=.345,c=.29,l=new Et(o,o,c,28,1);l.rotateZ(Math.PI/2),Te(l,ln.tire,a);const h=new Oe({color:1908002,roughness:.9});for(let u=-2;u<=2;u++){const S=new te(new Ji(o*.9,.012,6,36),h);S.rotation.y=Math.PI/2,S.position.x=u*.055,a.add(S)}const p=new Et(o*.63,o*.63,c+.02,24);p.rotateZ(Math.PI/2),Te(p,ln.rimDark,a,!1);const d=new Et(o*.64,o*.64,.03,24);d.rotateZ(Math.PI/2);const m=Te(d,ln.rim,a,!1);m.position.x=t*(c/2+.005);const _=ln.rim;for(let u=0;u<5;u++){const S=u/5*Math.PI*2,b=new te(new ke(.035,o*1.1,.075),_);b.position.set(t*(c/2+.03),Math.sin(S)*.02,0),b.rotation.x=S,a.add(b)}const M=new te(new Et(.055,.055,.04,16),ln.chrome);M.rotation.z=Math.PI/2,M.position.x=t*(c/2+.02),a.add(M);const f=new te(new ke(.05,.16,.1),new Oe({color:16730642,roughness:.4,metalness:.4}));return f.position.set(t*.02,.16,.08),r.add(f),{group:i,steerGroup:r,spin:a,side:t,front:n}}function Ll({paint:s="#ff5a12",interior:e=!1,plate:t="DB"}={}){const n=new Nt,i=new Nt;n.add(i);const r=M0(s),a=new Oe({color:526347,roughness:.65,metalness:.4}),o=new Oe({color:921107,roughness:.5,metalness:.6}),c=new Ye(1.94,.56,4.55,4,.09);Te(c,r,i).position.set(0,.63,0);const h=new Ye(1.88,.3,1.05,3,.07);Te(h,r,i).position.set(0,.9,1.4);const d=new Ye(1.88,.3,.95,3,.07);Te(d,r,i).position.set(0,.9,-1.475);for(const xe of[-1,1])Te(new Ye(.16,.3,1.9,2,.05),r,i).position.set(xe*.86,.9,-.05);const _=new Oe({color:1315865,roughness:.62,metalness:.25,envMapIntensity:.3}),M=new Ye(1.82,.16,1.75,3,.055),f=Te(M,_,i);f.position.set(0,.99,1.4),f.rotation.x=-.012;const u=new Ye(1.8,.14,1.5,3,.05);Te(u,_,i).position.set(0,.985,-1.62);const b=new Ye(1.92,.26,.22,3,.06);Te(b,r,i).position.set(0,.6,2.28);const w=new Ye(1.9,.28,.2,3,.06);Te(w,r,i).position.set(0,.62,-2.26);for(const xe of[-1,1])Te(new Ye(.13,.16,3.1,2,.03),o,i).position.set(xe*.92,.38,-.05);Te(new Ye(1.34,.2,.08,2,.03),a,i,!1).position.set(0,.72,2.36),Te(new Ye(1.12,.13,.02,2,.02),new Oe({color:328968,roughness:.9}),i,!1).position.set(0,.72,2.4);for(const xe of[-1,1]){Te(new Ye(.44,.17,.08,3,.035),ln.headlight,i,!1).position.set(xe*.6,.88,2.34);const qe=new Es(new Wi({map:Cr(),color:16771504,transparent:!0,opacity:.6,blending:Bn,depthWrite:!1}));qe.scale.set(1.1,1.1,1),qe.position.set(xe*.6,.88,2.43),i.add(qe),Te(new Ye(.38,.14,.06,2,.03),ln.taillight,i,!1).position.set(xe*.66,.9,-2.31)}Te(new Ye(1.45,.045,.04,2,.015),ln.taillight,i,!1).position.set(0,.83,-2.33),Te(new Ye(1.5,.24,.04,2,.02),a,i,!1).position.set(0,.64,-2.34);const D=Te(new Ye(.54,.07,.56,3,.03),r,i);D.position.set(0,1.09,1.24);const F=Te(new ke(.4,.05,.03),new Oe({color:328968,roughness:.8}),i,!1);F.position.set(0,1.08,1.5),Te(new Ye(1.62,.055,.34,2,.02),o,i).position.set(0,1.13,-2);for(const xe of[-1,1])Te(new ke(.05,.18,.14),o,i).position.set(xe*.56,1.03,-2);for(const xe of[-1,1])Te(new Ye(.22,.1,.13,2,.03),r,i).position.set(xe*1.01,1.03,.5),Te(new ke(.12,.03,.04),o,i).position.set(xe*.94,.98,.5);const C=[];for(const xe of[-1,1]){const Pe=Te(new Et(.056,.062,.22,14),ln.chrome,i,!1);Pe.rotation.x=Math.PI/2,Pe.position.set(xe*.58,.38,-2.36),C.push(Pe);const qe=Te(new Et(.042,.042,.06,12),new pt({color:328965}),i,!1);qe.rotation.x=Math.PI/2,qe.position.set(xe*.58,.38,-2.45)}const k=[],K=[],z=Te(new Ye(1.5,.07,1.72,3,.03),_,i);k.push(z,D,F),z.position.set(0,1.455,-.42),Te(new Ye(1.5,.06,.1,2,.02),o,i).position.set(0,1.445,.44);const V=ln.glass;let Q=null,ee=null;for(const[xe,Pe,qe]of[[.58,-.46,.62],[-1.28,.5,.6]]){const nt=new Nt;nt.position.set(0,1.22,xe),nt.rotation.x=Pe,i.add(nt);const j=new te(new ft(1.5,qe),V);j.userData.windshield=xe>0,nt.add(j),xe>0&&(Q=j,ee=nt);const ne=new Oe({color:526347,roughness:.5,metalness:.4});for(const Le of[qe/2,-qe/2]){const Me=new te(new ke(1.56,.045,.035),ne);Me.position.set(0,Le,.002),nt.add(Me)}for(const Le of[-.76,.76]){const Me=new te(new ke(.04,qe+.045,.035),ne);Me.position.set(Le,0,.002),nt.add(Me)}}for(const xe of[-1,1]){const Pe=new te(new ft(1.62,.42),V);Pe.position.set(xe*.755,1.21,-.38),Pe.rotation.y=xe*Math.PI/2,i.add(Pe),K.push(Pe);for(const nt of[.58,-1.28]){const j=Te(new ke(.055,.54,.08),o,i);j.position.set(xe*.75,1.22,nt),j.rotation.x=nt>0?-.42:.42}Te(new ke(.05,.045,1.62),o,i).position.set(xe*.757,1.42,-.38)}for(const xe of[-1,1]){for(const qe of[.52,-1.2])Te(new ke(.012,.48,.018),o,i,!1).position.set(xe*.955,.62,qe);Te(new Ye(.16,.045,.05,2,.015),ln.chrome,i,!1).position.set(xe*.975,.78,-.62)}const be=new Oe({color:2894902,roughness:.55,metalness:.4});for(const xe of[-.55,.55]){const Pe=Te(new ke(.17,.014,1.66),be,i,!1);Pe.position.set(xe,1.493,-.42),k.push(Pe),Te(new ke(.17,.014,1.72),be,i,!1).position.set(xe,1.075,1.4),Te(new ke(.17,.014,1.36),be,i,!1).position.set(xe,1.06,-1.62)}const He=new Oe({color:526347,roughness:.85});for(const xe of[-1,1])Te(new ke(.55,.035,.22),He,i,!1).position.set(xe*.535,1.09,.46);const q=new te(new ft(2.7,5.2),new pt({color:0,transparent:!0,opacity:.55,depthWrite:!1}));q.rotation.x=-Math.PI/2,q.position.y=.012,q.material.alphaMap=Cr(),q.material.opacity=.55,n.add(q);let ae=null,Ee=null,Ue=null;const me={tach:null,speed:null},Ve=[];if(e){const xe=new Oe({map:pa("charcoal",[27,25,31],12),roughness:.97,metalness:.02,envMapIntensity:.16}),Pe=new Oe({map:pa("red",[62,13,22],15),roughness:.95,metalness:.02,envMapIntensity:.16}),qe=new Oe({map:m0(),color:9276821,roughness:.5,metalness:.4,envMapIntensity:.45}),nt=new Oe({color:1250071,roughness:.78,metalness:.06,envMapIntensity:.2}),j=new Oe({color:10133933,roughness:.3,metalness:.95,envMapIntensity:1.1}),ne=new Oe({color:657932,roughness:.96}),Le=new Oe({color:11735583,roughness:.92,envMapIntensity:.18}),Me=new Oe({color:2303276,roughness:.38,metalness:.85,envMapIntensity:.85}),Ie=new Oe({color:1315865,roughness:.95}),at=new Oe({color:11735583,roughness:.5,metalness:.25});Te(new Ye(1.6,.16,.5,4,.035),xe,i).position.set(0,.95,.61);const I=Te(new Ye(1.44,.03,.36,3,.012),qe,i);I.position.set(0,1.045,.62),I.rotation.x=-.11,Te(new Ye(1.42,.075,.03,2,.012),nt,i,!1).position.set(0,.885,.35),Te(new ke(1.36,.006,.006),at,i,!1).position.set(0,.906,.343);const gt=Te(new Ye(.5,.018,.28,2,.008),qe,i,!1);gt.position.set(.4,1.062,.62),gt.rotation.x=-.1;const fe=new te(new ft(.17,.17),new pt({map:Pl("DB"),transparent:!0}));fe.position.set(.4,.995,.346),fe.rotation.y=Math.PI,i.add(fe);for(const we of[-1,1]){Te(new Ye(.2,.09,.05,2,.02),qe,i,!1).position.set(we*.6,.985,.352);const _t=new te(new ft(.15,.05),new pt({color:328967}));_t.position.set(we*.6,.985,.338),_t.rotation.y=Math.PI,i.add(_t);for(let Jt=-1;Jt<=1;Jt++)Te(new ke(.14,.008,.01),j,i,!1).position.set(we*.6,.985+Jt*.015,.334)}const wt=Te(new Ye(.38,.19,.06,2,.02),qe,i,!1);wt.position.set(0,1.075,.4),wt.rotation.set(.34,0,0);const ze=Te(new Ye(.4,.03,.11,2,.012),xe,i,!1);ze.position.set(0,1.152,.373),ze.rotation.x=.34,Ee=new te(new ft(.34,.124),new pt({map:v0(),color:11845833})),Ee.position.set(0,1.081,.352),Ee.rotation.set(.34,Math.PI,0),i.add(Ee);const We=new te(new ft(.26,.012),new pt({color:3135743,transparent:!0,opacity:.55}));We.position.set(0,1.019,.36),We.rotation.set(.34,Math.PI,0),i.add(We);for(const we of[-.23,.23]){const Ge=new te(new Et(.018,.02,.024,12),j);Ge.rotation.x=Math.PI/2,Ge.position.set(we,.925,.352),i.add(Ge)}const E=new Nt;E.position.set(-.355,1.016,.355),E.rotation.set(.18,Math.PI,0),i.add(E);const x=new te(new ke(.56,.21,.03),qe);E.add(x);for(const[we,Ge]of[-.15,.15].entries()){const _t=new te(new Ji(.071,.006,8,28),j);_t.position.set(Ge,0,.02),E.add(_t);const Jt=new te(new fi(.068,28),new pt({map:g0(we===0?"tach":"speed"),transparent:!0}));Jt.position.set(Ge,0,.017),E.add(Jt);const sn=new te(new ke(.006,.055,.004),new pt({color:we===0?16726831:16765721}));sn.geometry.translate(0,.025,0),sn.position.set(Ge,0,.026),sn.rotation.z=2.25,E.add(sn),we===0?me.tach=sn:me.speed=sn}const O=new pt({color:3663615});for(let we=0;we<3;we++){const Ge=new te(new fi(.0075,8),O);Ge.position.set(-.065+we*.065,-.075,.026),E.add(Ge)}Te(new Ye(.34,.05,.026,2,.01),Ie,i,!1).position.set(-.37,1.125,.352);for(let we=0;we<6;we++){const Ge=new te(new fi(.0105,10),new pt({color:2756884}));Ge.position.set(-.475+we*.042,1.121,.335),Ge.rotation.y=Math.PI,Ge.userData.on=we<3?3407718:we<5?16756768:16722452,i.add(Ge),Ve.push(Ge)}ae=new Nt,ae.position.set(-.37,.842,.315),ae.rotation.x=-.38,i.add(ae);const J=new Oe({map:pa("wheel",[17,16,20],9),roughness:.94,metalness:.02}),le=new te(new Ji(.148,.018,12,44,Math.PI*1.66),J);le.rotation.z=-Math.PI/3,ae.add(le);const de=new te(new ke(.158,.024,.022),J);de.position.set(0,-.136,0),ae.add(de);for(const we of[0,Math.PI,-Math.PI/2]){const Ge=new te(new ke(.028,.15,.012),j);Ge.position.set(Math.cos(we)*.07,Math.sin(we)*.07,0),Ge.rotation.z=we-Math.PI/2,ae.add(Ge)}const Y=new te(new Et(.047,.05,.035,16),Ie);Y.rotation.x=Math.PI/2,Y.position.z=-.012,ae.add(Y);const $=new te(new fi(.036,20),new pt({map:Pl("DB"),transparent:!0}));$.position.z=-.032,$.rotation.y=Math.PI,ae.add($);const he=new te(new ke(.032,.018,.012),new pt({color:16765721}));he.position.set(0,.15,0),ae.add(he);for(const we of[-1,1])Te(new ke(.065,.05,.01),qe,ae,!1).position.set(we*.132,-.032,.03);const R=new te(new Et(.04,.045,.3,12),Ie);R.rotation.x=Math.PI/2,R.position.set(-.37,.94,.43),i.add(R);const Z=Te(new Ye(.14,.1,.2,2,.03),Ie,i,!1);Z.position.set(-.37,.955,.43),Z.rotation.x=-.2;for(const we of[-1,1]){const Ge=new te(new Et(.006,.008,.16,8),Ie);Ge.rotation.z=Math.PI/2,Ge.rotation.y=we*.3,Ge.position.set(-.37+we*.11,.985,.45),i.add(Ge)}Te(new Ye(1.52,.05,1.08,2,.03),ln.interior,i,!1).position.set(0,.918,-.04);const ue=new Oe({map:x0(),roughness:1,metalness:0});for(const we of[-.37,.4]){const Ge=new te(new ft(.48,.66),ue);Ge.rotation.x=-Math.PI/2,Ge.position.set(we,.947,-.16),i.add(Ge)}Te(new Ye(.28,.22,.78,3,.06),xe,i,!1).position.set(0,.93,-.05);const ce=Te(new Ye(.24,.018,.62,2,.008),qe,i,!1);ce.position.set(0,1.028,-.03),ce.rotation.x=-.02;for(let we=0;we<4;we++){const Ge=new te(new Et(.008,.008,.03,8),j);Ge.position.set(-.07+we*.047,1.045,-.16),i.add(Ge);const _t=new te(new Zi(.009,8,6),we===0?at:Ie);_t.position.set(-.07+we*.047,1.061,-.16),i.add(_t)}const De=new te(new vo(.055,.13,12),nt);De.position.set(.06,.985,.1),i.add(De);const je=new te(new Et(.011,.013,.2,8),j);je.position.set(.06,1.03,.11),je.rotation.x=.22,i.add(je);const re=new te(new Ye(.042,.078,.038,2,.018),new Oe({color:1447451,roughness:.38,metalness:.2}));re.position.set(.06,1.085,.13),re.rotation.x=.22,i.add(re);const Fe=new te(new Et(.013,.016,.24,10),j);Fe.position.set(.06,1,-.28),Fe.rotation.x=1.15,i.add(Fe);const Ke=new te(new Et(.02,.02,.08,10),Ie);Ke.position.set(.06,1.055,-.35),Ke.rotation.x=1.15,i.add(Ke);const _e=new te(new Et(.05,.05,.32,14),at);_e.position.set(.45,1,-.3),_e.rotation.x=.16,i.add(_e);const ct=new te(new Et(.012,.012,.06,8),Ie);ct.position.set(.45,1.18,-.27),i.add(ct);for(const[we,Ge,_t]of[[-.37,Pe,Le],[.4,xe,null]]){Te(new Ye(.5,.15,.54,3,.06),Ge,i).position.set(we,.99,-.42);for(const Wt of[-1,1]){const Ot=Te(new Ye(.09,.12,.5,2,.03),Ge,i);Ot.position.set(we+Wt*.23,1.035,-.4),Ot.rotation.z=Wt*.12}const sn=Te(new Ye(.46,.5,.15,3,.06),Ge,i);sn.position.set(we,1.16,-.72),sn.rotation.x=-.14;for(const Wt of[-1,1]){const Ot=Te(new Ye(.085,.42,.17,2,.04),Ge,i);Ot.position.set(we+Wt*.2,1.15,-.7),Ot.rotation.x=-.14,Ot.rotation.z=Wt*.1}const Pn=Te(new Ye(.28,.13,.12,2,.05),Ge,i);Pn.position.set(we,1.375,-.775),Pn.rotation.x=-.14;for(const Wt of[-1,1]){const Ot=Te(new ke(.055,.045,.02),Ie,i,!1);Ot.position.set(we+Wt*.1,1.3,-.795),Ot.rotation.x=-.14}for(const Wt of[-1,1])Te(new ke(.05,.04,.5),j,i,!1).position.set(we+Wt*.16,.932,-.4);if(_t){for(const cs of[-1,1]){const Us=Te(new ke(.055,.34,.008),_t,i,!1);Us.position.set(we+cs*.145,1.19,-.628),Us.rotation.z=-cs*.15}Te(new ke(.4,.05,.008),_t,i,!1).position.set(we,1.015,-.56),Te(new ke(.07,.05,.02),j,i,!1).position.set(we,1.015,-.55)}}const Mt=(we,Ge=.028)=>new Et(Ge,Ge,we,10);for(const we of[-1,1]){const Ge=new te(Mt(.56),Me);Ge.position.set(we*.62,1.16,-.98),i.add(Ge);const _t=new te(Mt(.58),Me);_t.position.set(we*.6,1.22,-1.07),_t.rotation.x=.5,i.add(_t)}const un=new te(Mt(1.24),Me);un.rotation.z=Math.PI/2,un.position.set(0,1.44,-.98),i.add(un);const vi=new te(Mt(1.24),Me);vi.rotation.z=Math.PI/2,vi.position.set(0,1.3,-.93),i.add(vi);for(const we of[-1,1]){const Ge=new te(Mt(1.1,.024),Me);Ge.rotation.x=Math.PI/2,Ge.position.set(we*.665,1.02,-.32),i.add(Ge);const _t=new te(Mt(.34,.04),Ie);_t.rotation.x=Math.PI/2,_t.position.set(we*.665,1.02,-.18),i.add(_t);const Jt=new te(Mt(.72,.024),Me);Jt.position.set(we*.665,1.15,-.72),Jt.rotation.x=.72,i.add(Jt)}for(const we of[-1,1]){Te(new Ye(.05,.44,1.45,2,.02),xe,i).position.set(we*.72,.97,-.25),Te(new Ye(.12,.06,.5,2,.025),nt,i,!1).position.set(we*.66,1,-.05),Te(new Ye(.1,.014,.12,2,.006),qe,i,!1).position.set(we*.655,1.035,.06),Te(new Ye(.03,.026,.13,2,.008),Ie,i,!1).position.set(we*.702,1.06,.1),Te(new ke(.004,.004,1.1),at,i,!1).position.set(we*.7,1.115,-.28);const Wt=new te(new Et(.075,.075,.02,20),ne);Wt.rotation.z=Math.PI/2,Wt.position.set(we*.695,.93,.02),i.add(Wt);const Ot=new te(new Ji(.075,.008,6,22),j);Ot.rotation.y=Math.PI/2,Ot.position.set(we*.69,.93,.02),i.add(Ot)}const ri=new te(new ft(1.18,.4),new pt({map:_0(),transparent:!0,side:vn,depthWrite:!1}));ri.rotation.y=Math.PI/2,ri.position.set(-.735,1.2,-.34),i.add(ri);const os=new te(new Et(.008,.008,1.2,8),j);os.rotation.x=Math.PI/2,os.position.set(-.735,1.405,-.34),i.add(os),Te(new ke(1.38,.02,1.58),xe,i,!1).position.set(0,1.408,-.42);const ls=Te(new Ye(.2,.055,.04,2,.015),Ie,i,!1);ls.position.set(0,1.402,.375),ls.rotation.x=-.2,Ue=new te(new ft(.17,.038),new Oe({color:2570314,roughness:.08,metalness:1,envMapIntensity:1.6})),Ue.position.set(0,1.402,.351),Ue.rotation.y=Math.PI,i.add(Ue),Te(new ke(.022,.07,.022),Ie,i,!1).position.set(0,1.432,.39);const Mi=new Dr(12834031,.7,2.4,2);Mi.position.set(0,1.3,-.42),i.add(Mi)}const vt=[ur(-.88,1.43,-1,!0),ur(.88,1.43,1,!0),ur(-.91,-1.45,-1,!1),ur(.91,-1.45,1,!1)];for(const xe of vt)n.add(xe.group);const Be=[];i.traverse(xe=>{xe.isMesh&&xe.material===ln.taillight&&Be.push(xe.material)});function Xe(xe){r.color.set(xe)}return{root:n,body:i,wheels:vt,paintMat:r,windshieldGlass:Q,windshieldGroup:ee,sideGlassParts:K,roofParts:k,steeringWheel:ae,needles:me,shiftLights:Ve,dashScreen:Ee,mirrorGlass:Ue,exhaustTips:C,setPaint:Xe}}const On=512,Kn=186,dr="#2fd8ff",ma="#ffd319",Il="#ff3b2f",Dl="#eaf6ff",ga="rgba(160,180,196,0.65)";class S0{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=On,this.canvas.height=Kn,this.ctx=this.canvas.getContext("2d"),this.texture=new Ir(this.canvas),this.texture.colorSpace=Gt,this.texture.minFilter=It,this.texture.magFilter=It,this.texture.generateMipmaps=!1,this.texture.anisotropy=4,this.material=new pt({map:this.texture,toneMapped:!1}),this._last=""}draw(e){const t=this.ctx,n=e.time||0,i=e.mode==="race"||e.mode==="result",r=Math.max(0,Math.round(e.speed||0)),a=Math.max(0,Math.min(1,e.rpm||0)),o=e.gear||1,c=Math.max(0,e.distance||0),l=e.finish||402.336,h=e.gap,p=e.et;t.fillStyle="#04121a",t.fillRect(0,0,On,Kn),t.strokeStyle="rgba(47,216,255,0.06)",t.lineWidth=1;for(let w=0;w<On;w+=16)t.beginPath(),t.moveTo(w+.5,0),t.lineTo(w+.5,Kn),t.stroke();for(let w=0;w<Kn;w+=16)t.beginPath(),t.moveTo(0,w+.5),t.lineTo(On,w+.5),t.stroke();const d=t.createLinearGradient(0,0,0,Kn);d.addColorStop(0,"rgba(120,210,255,0.10)"),d.addColorStop(.5,"rgba(120,210,255,0.02)"),d.addColorStop(1,"rgba(0,0,0,0.25)"),t.fillStyle=d,t.fillRect(0,0,On,Kn),t.textBaseline="alphabetic",t.textAlign="left",t.fillStyle=dr,t.font="italic 900 15px Arial, Helvetica, sans-serif",t.fillText("DRAG BRASIL",16,24),t.textAlign="right",t.fillStyle=i?ma:dr,t.font="700 14px Arial, Helvetica, sans-serif";const m=i?e.et!=null?`FIM · ${e.et.toFixed(3)}s`:e.phase||"CORRIDA":"MOTOR PRONTO";t.fillText(m,On-16,24),t.strokeStyle="rgba(47,216,255,0.22)",t.beginPath(),t.moveTo(16,34),t.lineTo(On-16,34),t.stroke(),t.textAlign="left",t.fillStyle=Dl,t.font="italic 900 78px Arial, Helvetica, sans-serif",t.fillText(String(r),18,118),t.fillStyle=dr,t.font="italic 900 16px Arial, Helvetica, sans-serif",t.fillText("KM/H",20,142),t.fillStyle=ga,t.font="700 14px Arial, Helvetica, sans-serif";const _=`${Math.min(Math.round(c),Math.round(l))} / ${Math.round(l)} M`;if(t.fillText(_,20,168),h!=null&&p==null){t.fillStyle=h>=0?"#6dff9a":"#ff8a6d",t.font="700 14px Arial, Helvetica, sans-serif";const w=h>=0?"+":"−";t.fillText(`RIVAL ${w}${Math.abs(h).toFixed(0)} M`,178,168)}const M=250,f=244,u=16,S=2,b=(f-S*(u-1))/u;t.fillStyle="rgba(47,216,255,0.14)",t.fillRect(M,56,f,22);for(let w=0;w<u;w++){if(!(w/u<a))continue;const g=w/(u-1);t.fillStyle=g>.86?Il:g>.68?ma:dr,t.fillRect(M+w*(b+S),56,b,22)}a>.965&&Math.floor(n*12)%2===0&&(t.strokeStyle=Il,t.lineWidth=2,t.strokeRect(M-2,54,f+4,26)),t.textAlign="left",t.fillStyle=ga,t.font="700 13px Arial, Helvetica, sans-serif",t.fillText("RPM",M,98),t.fillStyle=Dl,t.font="italic 900 18px Arial, Helvetica, sans-serif",t.fillText(`${Math.round(a*9)}.0k`,M+38,98),t.textAlign="left",t.fillStyle=ga,t.font="700 13px Arial, Helvetica, sans-serif",t.fillText("MARCHA",366,100),t.fillStyle=ma,t.font="italic 900 54px Arial, Helvetica, sans-serif",t.fillText(String(o),366,152);const T=Math.floor(n*.35%1*Kn);t.fillStyle="rgba(120,210,255,0.05)",t.fillRect(0,T,On,2),t.strokeStyle="rgba(47,216,255,0.35)",t.lineWidth=2,t.strokeRect(1,1,On-2,Kn-2),this.texture.needsUpdate=!0}}class y0{constructor(e,t){this.renderer=e,this.scene=t,this.width=384,this.height=128,this.target=new En(this.width,this.height,{depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=Gt,this.target.texture.minFilter=It,this.target.texture.magFilter=It,this.target.texture.wrapS=Mn,this.target.texture.wrapT=Mn,this.target.texture.repeat.x=-1,this.target.texture.offset.x=1,this.camera=new cn(46,this.width/this.height,.1,420),this.lights=[],this.material=new pt({map:this.target.texture,toneMapped:!1}),this.material.color.setScalar(1.2)}update(e){const t=e.position;this.camera.position.set(t.x,1.42,t.z-2.5),this.camera.lookAt(t.x,.75,t.z-30),this.camera.updateMatrixWorld(),this.lights.length||this.scene.traverse(c=>{c.isLight&&this.lights.push([c,c.intensity])});const n=this.renderer,i=n.getRenderTarget(),r=n.shadowMap.autoUpdate,a=e.visible,o=n.toneMappingExposure;e.visible=!1,n.shadowMap.autoUpdate=!1,n.toneMappingExposure=o*1.7;for(const[c]of this.lights)c.intensity*=2.6;n.setRenderTarget(this.target),n.render(this.scene,this.camera),n.setRenderTarget(i);for(const[c,l]of this.lights)c.intensity=l;n.toneMappingExposure=o,n.shadowMap.autoUpdate=r,e.visible=a}}class E0{constructor(){this.stream=null,this.active=!1,this.fps=15,this.fit="contain",this.onchange=null,this.onmeta=null,this._last=0,this._ended=this._ended.bind(this),this.video=document.createElement("video"),this.video.muted=!0,this.video.playsInline=!0,this.video.autoplay=!0,this.video.setAttribute("playsinline",""),this.video.addEventListener("loadedmetadata",()=>this._onMeta()),this.video.addEventListener("resize",()=>this._onMeta()),this.dashCanvas=this._canvas(512,186),this.mirrorCanvas=this._canvas(512,114),this.dashTexture=this._texture(this.dashCanvas),this.mirrorTexture=this._texture(this.mirrorCanvas),this.dashMaterial=new pt({map:this.dashTexture,toneMapped:!1}),this.mirrorMaterial=new pt({map:this.mirrorTexture,toneMapped:!1}),this.dashMaterial.color.setScalar(1.25),this.mirrorMaterial.color.setScalar(1.25)}_canvas(e,t){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");return i.fillStyle="#04121a",i.fillRect(0,0,e,t),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",n}_texture(e){const t=new Ir(e);return t.colorSpace=Gt,t.minFilter=It,t.magFilter=It,t.generateMipmaps=!1,t}get videoSize(){return{width:this.video.videoWidth||0,height:this.video.videoHeight||0}}_onMeta(){this.onmeta?.(this.videoSize),this._last=0}async start({fps:e=15,fit:t="contain"}={}){if(!navigator.mediaDevices?.getDisplayMedia){const i=new Error("captura de tela não suportada neste navegador");throw i.code="unsupported",i}const n=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:{ideal:e,max:e},width:{ideal:1920},height:{ideal:1080}},audio:!1});return this.attach(n),this.setFps(e),this.fit=t,n}attach(e){if(this.detach(),!!e){this.stream=e,this.video.srcObject=e,this.video.play().catch(()=>{}),this.active=!0;for(const t of e.getVideoTracks())t.addEventListener("ended",this._ended);this._last=0,this.onchange?.("start")}}_ended(){this.active&&this.stop("ended")}setFps(e){this.fps=Math.max(1,Math.min(60,Number(e)||15));for(const t of this.stream?.getVideoTracks()||[])t.applyConstraints({frameRate:{ideal:this.fps,max:this.fps}}).catch(()=>{})}setFit(e){this.fit=e==="cover"?"cover":"contain"}update(e=performance.now()){if(!this.active||this.video.readyState<2)return;const t=1e3/this.fps;e-this._last<t||(this._last=e,this._blit(this.dashCanvas)&&(this.dashTexture.needsUpdate=!0),this._blit(this.mirrorCanvas)&&(this.mirrorTexture.needsUpdate=!0))}_blit(e){const t=this.video.videoWidth,n=this.video.videoHeight;if(!t||!n)return!1;const i=e.getContext("2d"),r=e.width,a=e.height,c=this.fit==="cover"?Math.max(r/t,a/n):Math.min(r/t,a/n),l=t*c,h=n*c,p=(r-l)/2,d=(a-h)/2;i.fillStyle="#030b11",i.fillRect(0,0,r,a),i.save();try{i.drawImage(this.video,p,d,l,h)}catch{return i.restore(),!1}const m=i.createLinearGradient(0,0,0,a);return m.addColorStop(0,"rgba(190,235,255,0.10)"),m.addColorStop(.45,"rgba(190,235,255,0.02)"),m.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=m,i.fillRect(0,0,r,a),i.restore(),!0}stop(e="stop"){this.detach(),this.onchange?.(e)}detach(){if(this.stream)for(const e of this.stream.getTracks())e.removeEventListener("ended",this._ended),e.stop();this.stream=null,this.video.srcObject=null,this.active=!1}}const Nl=4.2,zi=402.336;function T0(){const s=new Nt,e=new te(new ft(900,1200),new Oe({color:592399,roughness:1,metalness:0}));e.rotation.x=-Math.PI/2,e.position.set(0,-.04,220),e.receiveShadow=!0,s.add(e);const t=l0(),n=new te(new ft(20,620),new Oe({map:t,color:10987440,roughness:.92,metalness:.02}));n.rotation.x=-Math.PI/2,n.position.set(0,0,240),n.receiveShadow=!0,s.add(n);for(const j of[-1,1]){const ne=new te(new ft(6,620),new Oe({color:1381659,roughness:.95}));ne.rotation.x=-Math.PI/2,ne.position.set(j*13,-.01,240),s.add(ne)}const i=new te(new ft(30,120),new Oe({color:3813414,roughness:1}));i.rotation.x=-Math.PI/2,i.position.set(0,-.005,530),s.add(i);const r=new Oe({color:14342092,roughness:.7,emissive:2763302,emissiveIntensity:.4}),a=new Oe({color:14070311,roughness:.75,emissive:3812352,emissiveIntensity:.5});for(const j of[-1,1]){const ne=new te(new ft(.16,600),r);ne.rotation.x=-Math.PI/2,ne.position.set(j*9.7,.012,240),s.add(ne)}for(const j of[-.16,.16]){const ne=new te(new ft(.1,600),a);ne.rotation.x=-Math.PI/2,ne.position.set(j,.013,240),s.add(ne)}const o=c0();for(const[j,ne]of[[0,20],[zi,20]]){const Le=new te(new ft(ne,1.1),new pt({map:o}));Le.rotation.x=-Math.PI/2,Le.position.set(0,.02,j),s.add(Le)}for(const j of[-1,1]){const ne=new te(new ft(1.2,6),new pt({color:16777215,transparent:!0,opacity:.07}));ne.rotation.x=-Math.PI/2,ne.position.set(j*Nl,.015,-3.5),s.add(ne)}const c=new Oe({color:2303020,roughness:.55,metalness:.6});for(const j of[-1,1]){const ne=new te(new ke(.12,.85,560),c);ne.position.set(j*11.8,.42,220),ne.castShadow=!1,ne.receiveShadow=!0,s.add(ne);const Le=new te(new ke(.26,.09,560),new Oe({color:4474191,roughness:.4,metalness:.7}));Le.position.set(j*11.8,.87,220),s.add(Le);for(let Me=-20;Me<500;Me+=12){const Ie=new te(new ke(.1,.85,.1),c);Ie.position.set(j*11.95,.42,Me),s.add(Ie)}}const l=[["DRAG BRASIL","#0b0b12","#ffd319","#ff5a12"],["NITRO","#101018","#37e6ff","#1b63ff"],["TURBO","#120c08","#ff8a3d","#ff5a12"],["GASOLINA","#0b0f0c","#2dff86","#1f9c55"],["PNEU FUDIDO","#0e0a12","#e8e6df","#8c2bff"],["402 METROS","#0f0b0b","#ff2e4d","#7d0719"]];for(let j=0;j<18;j++){const ne=-16+j*26;if(ne>410)break;const Le=Cl(...l[j%l.length]);for(const Me of[-1,1]){if((j+(Me>0?1:0))%3===0)continue;const Ie=new te(new ft(9,.8),new pt({map:Le,transparent:!0}));Ie.position.set(Me*11.7,.48,ne),Ie.rotation.y=Me>0?-Math.PI/2:Math.PI/2,s.add(Ie)}}const h=f0(),p=new Oe({color:1908261,roughness:.6,metalness:.6}),d=new Oe({color:16774352,emissive:16773576,emissiveIntensity:4.5,roughness:.3}),m=Cr();for(let j=-30;j<480;j+=48)for(const ne of[-1,1]){const Le=ne*15.5,Me=new te(new Et(.14,.2,9,8),p);Me.position.set(Le,4.5,j),s.add(Me);const Ie=new te(new ke(2.4,.12,.12),p);Ie.position.set(Le-ne*1.1,8.9,j),s.add(Ie);const at=new te(new ke(1.1,.12,.5),d);at.position.set(Le-ne*2.1,8.82,j),s.add(at);const At=new Es(new Wi({map:m,color:16770736,transparent:!0,opacity:.55,blending:Bn,depthWrite:!1}));At.scale.set(7,5,1),At.position.set(Le-ne*2.1,8.6,j),s.add(At);const I=new te(new ft(26,26),new pt({map:h,transparent:!0,opacity:.4,blending:Bn,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.position.set(Le-ne*3,.03,j),s.add(I)}const _=[10,150,300,405];for(const j of _){const ne=new Dr(16769968,320,75,2);ne.position.set(0,9,j),s.add(ne)}const M=new Oe({color:1184281,roughness:.9}),f=p0(),u=new pt({map:f,transparent:!0,opacity:.55,color:9079449});for(const j of[-1,1]){const ne=new Nt;for(let Me=0;Me<5;Me++){const Ie=new te(new ke(6,1.1,2.6),M);Ie.position.set(j*(24+Me*1.9),.55+Me*1.1,-8),Ie.receiveShadow=!0,ne.add(Ie);const at=new te(new ft(26,1),u);at.rotation.y=j>0?-Math.PI/2:Math.PI/2,at.position.set(j*(23+Me*1.9),1+Me*1.1,-8),ne.add(at)}const Le=new te(new ke(10,.16,28),M);Le.position.set(j*28,8.6,-8),ne.add(Le);for(let Me=-20;Me<=4;Me+=12){const Ie=new te(new ke(.24,8.5,.24),M);Ie.position.set(j*23,4.3,Me),ne.add(Ie)}s.add(ne)}const S=document.createElement("canvas");S.width=1024,S.height=256;const b=S.getContext("2d");b.fillStyle="#06060a",b.fillRect(0,0,1024,256),b.strokeStyle="#ff5a12",b.lineWidth=8,b.strokeRect(8,8,1008,240),b.fillStyle="#ffd319",b.font="italic 900 132px Arial, Helvetica, sans-serif",b.textAlign="center",b.textBaseline="middle",b.fillText("DRAG BRASIL",512,118),b.fillStyle="#ff5a12",b.font="700 30px Arial, Helvetica, sans-serif",b.fillText("A R R A N C A D A   N O T U R N A",512,208);const T=new Ir(S);T.colorSpace=Gt;const w=new te(new ft(24,6),new pt({map:T,transparent:!0}));w.position.set(0,9,-42),s.add(w);const A=new Es(new Wi({map:m,color:16747050,transparent:!0,opacity:.55,blending:Bn,depthWrite:!1}));A.scale.set(34,16,1),A.position.set(0,9,-43),s.add(A);for(const j of[-1,1]){const ne=new te(new Et(.2,.28,9,8),p);ne.position.set(j*11,4.5,-42.5),s.add(ne)}const g=[[100,"100m"],[200,"200m"],[300,"300m"]];for(const[j,ne]of g){const Le=h0(ne,"DISTÂNCIA");for(const Me of[-1,1]){const Ie=new te(new ft(2.4,2.4),new pt({map:Le}));Ie.position.set(Me*12.6,2.1,j),Ie.rotation.y=Me>0?-Math.PI/3:Math.PI/3,s.add(Ie);const at=new te(new ke(.12,1.3,.12),c);at.position.set(Me*12.6,.65,j),s.add(at)}}const y=Cl("CHEGADA · 402 m","#0a0a10","#ffd319","#ff2e4d");for(const j of[-1,1]){const ne=new te(new ke(.55,8,.55),c);ne.position.set(j*11,4,zi),ne.castShadow=!0,s.add(ne)}const U=new te(new ke(22.5,.4,.5),c);U.position.set(0,7.9,zi),s.add(U);const L=new te(new ft(15,2.6),new pt({map:y,transparent:!0}));L.position.set(0,6.6,zi-.32),L.rotation.y=Math.PI,s.add(L);const D=[];for(let j=0;j<9;j++){const ne=new te(new Zi(.16,8,8),new pt({color:16765721}));ne.position.set(-7+j*1.75,8.15,zi-.3),s.add(ne),D.push(ne)}for(let j=0;j<16;j++){const ne=new te(new ke(1.4,.55,.6),new Oe({color:j%2?13223610:1579039,roughness:.8}));ne.position.set(-11+j*1.45,.28,545),s.add(ne)}const F=new Nt;F.position.set(0,0,11.5),F.scale.set(1.15,1,1.15);const W=new te(new Et(.075,.1,3.2,8),new Oe({color:1381660,roughness:.5,metalness:.7}));W.position.y=1.6,F.add(W);const C=new te(new ke(.8,.12,.8),c);C.position.y=.06,F.add(C);const k=new te(new ke(.46,1.95,.16),new Oe({color:526348,roughness:.35,metalness:.4}));k.position.set(0,2.35,.02),F.add(k);const K=new Zi(.135,12,12),z={};function ie(j,ne,Le){const Me=new Oe({color:1381660,emissive:Le,emissiveIntensity:.06,roughness:.25}),Ie=new te(K,Me);Ie.position.set(0,ne,.13),F.add(Ie);const at=new Es(new Wi({map:m,color:Le,transparent:!0,opacity:0,blending:Bn,depthWrite:!1}));return at.scale.set(.52,.52,1),at.position.set(0,ne,.22),F.add(at),z[j]={mesh:Ie,mat:Me,halo:at,color:Le},Ie}ie("a1",3.02,16753664),ie("a2",2.76,16753664),ie("a3",2.5,16753664),ie("green",2.18,3014534),ie("red",1.86,16723533),s.add(F);const V=new Nt,Q=new te(new ke(1.6,3.4,1.2),new Oe({color:921109,roughness:.6,metalness:.3}));Q.position.y=1.7,V.add(Q);const ee=new te(new ft(1.25,.9),new pt({color:529178}));ee.position.set(0,2.55,.605),V.add(ee),V.position.set(-14.5,0,3.5),V.rotation.y=.25,s.add(V);const be=new nn,He=900,q=new Float32Array(He*3),ae=new Float32Array(He);for(let j=0;j<He;j++){const ne=300+Math.random()*500,Le=Math.random()*Math.PI*2,Me=Math.random()*Math.PI*.42;q[j*3]=Math.cos(Le)*Math.cos(Me)*ne,q[j*3+1]=Math.sin(Me)*ne+30,q[j*3+2]=Math.sin(Le)*Math.cos(Me)*ne+200,ae[j]=Math.random()}be.setAttribute("position",new rn(q,3)),be.setAttribute("aSize",new rn(ae,1));const Ee=new xc({color:13621503,size:1.6,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,fog:!1}),Ue=new vc(be,Ee);s.add(Ue);const me=new te(new fi(19,40),new pt({color:16051930,fog:!1}));me.position.set(-150,120,-260),me.lookAt(0,30,0),s.add(me);const Ve=new Es(new Wi({map:m,color:13621503,transparent:!0,opacity:.6,blending:Bn,depthWrite:!1,fog:!1}));Ve.scale.set(110,110,1),Ve.position.set(-150,120,-262),s.add(Ve);const vt=u0(),Be=new Nt,Xe=(j,ne)=>j+Math.random()*(ne-j);for(let j=0;j<26;j++){const ne=Xe(10,24),Le=Xe(10,22),Me=Xe(18,70),Ie=new Oe({color:658194,roughness:.9,metalness:.2,map:vt,emissiveMap:vt,emissive:16777215,emissiveIntensity:.65}),at=new te(new ke(ne,Me,Le),Ie),At=Math.floor(Math.random()*4);let I,Dt;At===0?(I=Xe(-320,-140),Dt=Xe(-160,400)):At===1?(I=Xe(140,320),Dt=Xe(-160,400)):At===2?(I=Xe(-220,220),Dt=Xe(-330,-150)):(I=Xe(-220,220),Dt=Xe(430,540)),at.position.set(I,Me/2-.5,Dt),Be.add(at)}s.add(Be);const xe=new Oe({color:660240,roughness:1});for(let j=0;j<60;j++){const ne=Math.random()<.5?-1:1,Le=new te(new Zi(Xe(1,2.6),6,5),xe);Le.position.set(ne*Xe(17,45),Xe(.4,1.2),Xe(-60,470)),Le.scale.y=Xe(.7,1.5),s.add(Le)}let Pe={a:[!1,!1,!1],green:!1,red:!1};function qe(j){Pe=j;const ne=["a1","a2","a3"];for(let Le=0;Le<3;Le++){const Me=z[ne[Le]],Ie=!!j.a[Le];Me.mat.emissiveIntensity=Ie?7:.06,Me.halo.material.opacity=Ie?.85:0}for(const Le of["green","red"]){const Me=z[Le],Ie=Le==="green"?!!j.green:!!j.red;Me.mat.emissiveIntensity=Ie?7:.05,Me.halo.material.opacity=Ie?.9:0}}qe(Pe);function nt(j){const ne=.45+Math.sin(j*1.7)*.08;A.material.opacity=ne;for(const Le of D)Le.material.color.setHSL(.13,1,.55+Math.sin(j*3+Le.position.x)*.05)}return{group:s,setTree:qe,update:nt,LANE:Nl,FINISH:zi,treePosition:new N(0,2.4,11.5)}}function Ul(s,e,{additive:t=!1,color:n=16777215}={}){const i=new nn,r=new Float32Array(s*3),a=new Float32Array(s),o=new Float32Array(s);for(let h=0;h<s;h++)r[h*3+1]=-1e3;i.setAttribute("position",new rn(r,3)),i.setAttribute("aSize",new rn(a,1)),i.setAttribute("aAlpha",new rn(o,1));const c=new ii({uniforms:{uTex:{value:e},uColor:{value:new Je(n)},uScale:{value:1}},vertexShader:`
      attribute float aSize;
      attribute float aAlpha;
      varying float vAlpha;
      uniform float uScale;
      void main() {
        vAlpha = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale * (280.0 / max(-mv.z, 0.1));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform sampler2D uTex;
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        vec4 t = texture2D(uTex, gl_PointCoord);
        gl_FragColor = vec4(uColor, t.a * vAlpha);
      }
    `,transparent:!0,depthWrite:!1,blending:t?Bn:Yi}),l=new vc(i,c);return l.frustumCulled=!1,{geo:i,mat:c,points:l,positions:r,sizes:a,alphas:o,count:s}}class b0{constructor(e){this.scene=e,this.smoke=Ul(320,d0(),{color:14146018}),this.smoke.mat.uniforms.uScale.value=1,e.add(this.smoke.points),this.fire=Ul(120,Cr(),{additive:!0,color:16751162}),e.add(this.fire.points),this.smokeParts=Array.from({length:this.smoke.count},()=>({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1})),this.fireParts=Array.from({length:this.fire.count},()=>({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1})),this.si=0,this.fi=0,this._tmp=new N}emitSmoke(e,t=1,n=null){for(let i=0;i<Math.max(1,Math.round(t*2));i++){const r=this.smokeParts[this.si];this.si=(this.si+1)%this.smokeParts.length,r.alive=!0,r.x=e.x+(Math.random()-.5)*.3,r.y=e.y+Math.random()*.12,r.z=e.z+(Math.random()-.5)*.3;const a=.5+t*1.2;r.vx=(Math.random()-.5)*a+(n?n.x*t*.6:0),r.vy=.3+Math.random()*.7,r.vz=(Math.random()-.5)*a+(n?n.z*t*.6:0),r.max=1.1+Math.random()*1.5,r.life=r.max,r.size=26+Math.random()*26+t*16}}emitBackfire(e,t){for(let n=0;n<5;n++){const i=this.fireParts[this.fi];this.fi=(this.fi+1)%this.fireParts.length,i.alive=!0,i.x=e.x,i.y=e.y,i.z=e.z,i.vx=(Math.random()-.5)*1.4+t.x*3,i.vy=(Math.random()-.5)*.8+.3,i.vz=(Math.random()-.5)*1.4+t.z*3,i.max=.16+Math.random()*.16,i.life=i.max,i.size=14+Math.random()*16}}update(e){const t=Math.min(e,.05),n=this.smoke;for(let r=0;r<n.count;r++){const a=this.smokeParts[r];if(!a.alive){n.alphas[r]=0;continue}if(a.life-=t,a.life<=0){a.alive=!1,n.alphas[r]=0;continue}a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.vy+=.55*t,a.vx*=1-t*1.6,a.vz*=1-t*1.6;const o=a.life/a.max;n.positions[r*3]=a.x,n.positions[r*3+1]=a.y,n.positions[r*3+2]=a.z,n.sizes[r]=a.size*(1.4-o*.5),n.alphas[r]=Math.min(1,o*1.8)*.3}n.geo.attributes.position.needsUpdate=!0,n.geo.attributes.aSize.needsUpdate=!0,n.geo.attributes.aAlpha.needsUpdate=!0;const i=this.fire;for(let r=0;r<i.count;r++){const a=this.fireParts[r];if(!a.alive){i.alphas[r]=0;continue}if(a.life-=t,a.life<=0){a.alive=!1,i.alphas[r]=0;continue}a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.vx*=1-t*4,a.vy*=1-t*3,a.vz*=1-t*4;const o=a.life/a.max;i.positions[r*3]=a.x,i.positions[r*3+1]=a.y,i.positions[r*3+2]=a.z,i.sizes[r]=a.size*(.6+o*.9),i.alphas[r]=o}i.geo.attributes.position.needsUpdate=!0,i.geo.attributes.aSize.needsUpdate=!0,i.geo.attributes.aAlpha.needsUpdate=!0}clear(){for(const e of this.smokeParts)e.alive=!1;for(const e of this.fireParts)e.alive=!1;for(let e=0;e<this.smoke.count;e++)this.smoke.alphas[e]=0;for(let e=0;e<this.fire.count;e++)this.fire.alphas[e]=0;this.smoke.geo.attributes.aAlpha.needsUpdate=!0,this.fire.geo.attributes.aAlpha.needsUpdate=!0}}const Fl=1.225,fr=9.81;function Ht(s,e,t){return s<e?e:s>t?t:s}function w0(s,e,t){return s+(e-s)*t}class vr{constructor(e){this.spec=e,this.reset()}reset(){const e=this.spec;this.speed=0,this.distance=0,this.gear=1,this.engineRpm=e.idle,this.throttle=0,this.clutch=!0,this.steer=0,this.brake=0,this.accel=0,this.wheelspin=0,this.tireTemp=.25,this.shiftTimer=0,this.shiftCount=0,this.bogTimer=0,this.clutchSlip=0,this.releaseRpm=0,this.releaseQuality=1,this.lateral=0,this.lateralV=0,this.odo=0,this.launched=!1,this.justReleased=!1,this.justShifted=!1,this.hitWall=!1,this.redlineCut=0,this.prevClutch=!0,this.wheelRpm=0,this.time=0}get ratio(){return this.spec.gears[this.gear-1]*this.spec.finalDrive}get speedKmh(){return this.speed*3.6}get rpmNorm(){return Ht((this.engineRpm-this.spec.idle)/(this.spec.redline-this.spec.idle),0,1.12)}torqueAt(e){const t=this.spec,n=Ht(e/t.peakRpm,.12,1.6);let i=1-.52*Math.pow(n-1,2);return n>1.32&&(i*=Ht(1-(n-1.32)*.9,.35,1)),e>t.redline&&(i*=.25),Math.max(30,t.torque*i)}shiftUp(){return this.gear<this.spec.gears.length&&this.shiftTimer<=0?(this.gear++,this.shiftTimer=.13,this.shiftCount++,this.justShifted=!0,!0):!1}shiftDown(){return this.gear>1&&this.shiftTimer<=0?(this.gear--,this.shiftTimer=.13,this.justShifted=!0,!0):!1}autoShift(){if(this.shiftTimer>0)return;const e=this.wheelRpm||this.engineRpm;e>this.spec.redline-260&&this.gear<this.spec.gears.length?this.shiftUp():e<this.spec.peakRpm*.42&&this.gear>1&&this.speed<20&&this.shiftDown()}step(e,t={},n=!1){e=Math.min(e,1/30);const i=this.spec;this.time+=e,this.justReleased=!1,this.justShifted=!1,this.hitWall=!1,this.throttle=Ht(t.throttle||0,0,1);const r=!!t.clutch;if(this.steer=Ht(t.steer||0,-1,1),this.brake=Ht(t.brake||0,0,1),this.prevClutch&&!r){this.justReleased=!0,this.releaseRpm=this.engineRpm,this.clutchSlip=.65;const b=i.launchRpm,T=Ht((this.releaseRpm-b-900)/2800,0,1),w=this.releaseRpm<b-1400;this.releaseQuality=(1-T*.24)*(w?.82:1),w&&(this.bogTimer=.55),this.speed>.4&&(this.launched=!0)}this.prevClutch=r,this.clutch=r,this.shiftTimer=Math.max(0,this.shiftTimer-e),this.bogTimer=Math.max(0,this.bogTimer-e),this.clutchSlip>0&&(this.clutchSlip=Math.max(0,this.clutchSlip-e));const o=this.speed/(2*Math.PI*i.wheelRadius)*this.ratio*60;if(this.wheelRpm=o,n){let b=i.idle;this.clutch&&this.throttle>.03&&(b=i.idle+this.throttle*(i.redline-i.idle)),this.engineRpm+=(b-this.engineRpm)*Math.min(1,e*2.4),this.engineRpm=Ht(this.engineRpm,i.idle,i.redline),this.speed=0,this.accel=0,this.wheelspin*=Math.exp(-e*5),this.tireTemp=Math.max(.2,this.tireTemp-e*.05);return}if(this.clutch){const b=this.throttle>.03?i.idle+this.throttle*(i.redline-i.idle):i.idle;this.engineRpm+=(b-this.engineRpm)*Math.min(1,e*3),this.engineRpm=Ht(this.engineRpm,i.idle,i.redline),this.wheelspin*=Math.exp(-e*4),this.accel=0,this.applyResistance(e,!1);return}let c=o;if(this.clutchSlip>0){const b=1-this.clutchSlip/.65;c=w0(this.releaseRpm,Math.max(o,i.idle),b*b)}this.wheelspin>.35&&(c=Math.max(c,Math.min(i.redline+150,o+this.wheelspin*2200))),this.shiftTimer>0&&(c=Math.max(c,o)),this.engineRpm=Ht(Math.max(c,(this.speed>1,i.idle)),i.idle,i.redline+150);let l=this.torqueAt(this.engineRpm)*this.throttle;this.shiftTimer>0&&(l*=.06),this.bogTimer>0&&(l*=.55),this.throttle<.03&&(l*=.15);let h=l*this.ratio*.9/i.wheelRadius;const p=i.mass*Ht(this.accel,-12,18)*.15,d=Math.max(i.mass*fr*.4,i.mass*fr*.56+p),_=i.grip*(.93+this.tireTemp*.07)*this.releaseQuality*d;let M=0;h>_&&this.throttle>.15?(h=_*.74,M=1):M=Ht(h/Math.max(_,1)*.45,0,.8),this.wheelspin>.7&&this.speed<8&&(M=Math.max(M,.85)),this.wheelspin+=(M-this.wheelspin)*Math.min(1,e*7),this.tireTemp=Ht(this.tireTemp+this.wheelspin*e*.09,.2,1);let f=.5*Fl*i.cdA*this.speed*this.speed+.014*i.mass*fr;this.throttle<.04&&(f+=i.mass*.45),h-=f,this.brake>0&&this.speed>.2&&(h-=this.brake*i.mass*11),this.speed<.01&&h<0&&(h=0),this.accel=h/i.mass;const u=this.speed;this.speed=Math.max(0,this.speed+this.accel*e);const S=(u+this.speed)*.5;this.distance+=S*e,this.odo+=S*e,this.speed>1&&(this.lateralV+=this.steer*this.speed*.3*e),this.lateralV*=Math.exp(-e*2.1),this.lateral+=this.lateralV*e,Math.abs(this.lateral)>2.9&&(this.lateral=Ht(this.lateral,-2.9,2.9),this.lateralV*=-.25,this.speed*=.992,this.hitWall=!0),this.engineRpm>=i.redline?this.redlineCut=1:this.redlineCut=Math.max(0,this.redlineCut-e*4)}applyResistance(e,t=!0){if(this.speed<=0){this.speed=0;return}const n=this.spec,i=(.5*Fl*n.cdA*this.speed*this.speed+.014*n.mass*fr)/n.mass;this.speed=Math.max(0,this.speed-i*e),this.distance+=this.speed*e,this.odo+=this.speed*e,this.speed>.5&&(this.lateralV*=Math.exp(-e*2.5),this.lateral+=this.lateralV*e)}}const A0=402.336,di=[{id:"laranja",name:"Laranja Brasa",hex:"#ff5a12",metal:.75,rough:.24},{id:"amarelo",name:"Amarelo Taxi",hex:"#ffc400",metal:.6,rough:.28},{id:"verde",name:"Verde Macaco",hex:"#25c45b",metal:.65,rough:.26},{id:"azul",name:"Azul Noite",hex:"#1b63ff",metal:.8,rough:.22},{id:"roxo",name:"Roxo Veneno",hex:"#8c2bff",metal:.75,rough:.24},{id:"vermelho",name:"Vermelho Sangue",hex:"#d20d24",metal:.7,rough:.26},{id:"branco",name:"Branco Perola",hex:"#e8e6df",metal:.45,rough:.3},{id:"preto",name:"Preto Fosco",hex:"#16161b",metal:.35,rough:.55}],Ds=[{id:"falcao",name:"FALCÃO V8",klass:"V8 5.0",price:0,tagline:"O clássico de arrancada. Pesado, bruto, sem frescura.",mass:1450,torque:480,peakRpm:4300,redline:6800,idle:850,gears:[3.22,2.08,1.49,1.16,.92,.76],finalDrive:3.55,wheelRadius:.345,cdA:.82,grip:1.02,launchRpm:3900,color:"#ff5a12"},{id:"tubarao",name:"TUBARÃO V8",klass:"V8 6.2",price:3500,tagline:"Mais torque embaixo. Sai de lado se pisar demais.",mass:1520,torque:610,peakRpm:4100,redline:6600,idle:800,gears:[3.05,1.98,1.44,1.12,.9,.74],finalDrive:3.42,wheelRadius:.35,cdA:.86,grip:1.08,launchRpm:3700,color:"#1b63ff"},{id:"foguete",name:"FOGUETE TURBO",klass:"TURBO 2.0",price:8e3,tagline:"Leve igual papel. O turbo acorda depois dos 3 mil.",mass:1160,torque:445,peakRpm:5200,redline:7600,idle:950,gears:[3.35,2.18,1.56,1.2,.95,.79],finalDrive:3.9,wheelRadius:.33,cdA:.68,grip:1.13,launchRpm:4600,color:"#ffc400"},{id:"lenda",name:"LENDA 900",klass:"PRO MOD",price:16e3,tagline:"Gaiola, slicks e 900 cv. Não é carro, é um foguete com placa.",mass:1080,torque:880,peakRpm:5e3,redline:8200,idle:1100,gears:[3.6,2.3,1.62,1.24,1,.82],finalDrive:4.11,wheelRadius:.36,cdA:.62,grip:1.35,launchRpm:5200,color:"#8c2bff"}],Bc=[{id:"engine",name:"MOTOR",desc:"Comando, admissão e acerto de injeção.",effect:"+7% de torque por nível",max:6,base:650,growth:1.55},{id:"tires",name:"PNEUS",desc:"Composto mais mole e pressão de arrancada.",effect:"+5% de aderência por nível",max:6,base:550,growth:1.55},{id:"weight",name:"PESO",desc:"Bancos fora, fibra no lugar do aço.",effect:"−3% de massa por nível",max:6,base:600,growth:1.55},{id:"gearbox",name:"CÂMBIO",desc:"Relação final curta pra esticar menos e sair mais.",effect:"+2% de redução final por nível",max:6,base:750,growth:1.55}];function zc(s,e){return Math.round(s.base*Math.pow(s.growth,e)/50)*50}function jn(s,e={}){const t={engine:e.engine|0,tires:e.tires|0,weight:e.weight|0,gearbox:e.gearbox|0};return{id:s.id,name:s.name,mass:s.mass*(1-.03*t.weight),torque:s.torque*(1+.07*t.engine),peakRpm:s.peakRpm,redline:s.redline,idle:s.idle,gears:s.gears.slice(),finalDrive:s.finalDrive*(1+.02*t.gearbox),wheelRadius:s.wheelRadius,cdA:s.cdA,grip:s.grip*(1+.05*t.tires),launchRpm:s.launchRpm}}function Ol(s,e){const t=jn(s,e),i=t.peakRpm*Math.PI*2/60;return Math.round(t.torque*i/745.7)}const Ss=[{name:"ZÉ DO TURBO",quote:"“Essa reta é minha desde 1998, garoto.”",car:"falcao",upgrades:{engine:1,tires:1},reward:1500,tier:1},{name:"DONA ZILDA",quote:"“Sai da frente que eu tô atrasada pro bingo.”",car:"falcao",upgrades:{engine:3,tires:2,weight:1},reward:2200,tier:2},{name:"BETÃO V8",quote:"“Meu bloco é de ferro. Seu ego é de alumínio.”",car:"tubarao",upgrades:{engine:2,tires:3,weight:2},reward:3200,tier:3},{name:"O MECÂNICO",quote:"“Eu montei os dois motores dessa pista. Boa sorte.”",car:"tubarao",upgrades:{engine:4,tires:4,weight:3,gearbox:2},reward:4400,tier:4},{name:"CAMPEÃ DA VILA",quote:"“Aqui não tem pole position. Tem vergonha na cara.”",car:"foguete",upgrades:{engine:4,tires:5,weight:4,gearbox:3},reward:6e3,tier:5},{name:"O MESTRE",quote:"“Quando a luz verde acender, já vai ser tarde.”",car:"foguete",upgrades:{engine:6,tires:6,weight:5,gearbox:5},reward:8e3,tier:6},{name:"FANTASMA 900",quote:"“Ninguém nunca viu meu carro de lado. Só o escape.”",car:"lenda",upgrades:{engine:5,tires:6,weight:5,gearbox:4},reward:10500,tier:7},{name:"O REI DA PISTA",quote:"“Última etapa. Depois dessa, o asfalto é seu.”",car:"lenda",upgrades:{engine:6,tires:6,weight:6,gearbox:6},reward:14e3,tier:8}],Bl=["#25c45b","#1b63ff","#d20d24","#8c2bff","#e8e6df","#ffc400","#16161b","#ff5a12"];function Jn(s){return Ds.find(e=>e.id===s)||Ds[0]}const Gc="dragbrasil.save.v1",kc=()=>({engine:0,tires:0,weight:0,gearbox:0});function R0(){return{money:1500,ownedCars:["falcao"],selected:"falcao",paints:{falcao:"laranja"},upgrades:{falcao:kc()},wins:0,losses:0,races:0,bestET:null,bestTrap:null,sound:!0,careerWins:0,seenHelp:!1}}function C0(){const s=R0();try{const e=localStorage.getItem(Gc);if(!e)return s;const t=JSON.parse(e),n={...s,...t};n.ownedCars=Array.isArray(t.ownedCars)&&t.ownedCars.length?t.ownedCars:s.ownedCars,n.ownedCars.includes(n.selected)||(n.selected=n.ownedCars[0]),n.upgrades={...s.upgrades,...t.upgrades||{}};for(const i of Object.keys(n.upgrades))n.upgrades[i]={...kc(),...n.upgrades[i]};return n.paints={...s.paints,...t.paints||{}},n}catch{return s}}function Gi(s){try{localStorage.setItem(Gc,JSON.stringify(s))}catch{}}function Xi(s){return"R$ "+Math.round(s).toLocaleString("pt-BR")}function zl(s){return s==null||!isFinite(s)?"—":s.toFixed(3)+"s"}function P0(s,e=2){const t=Math.floor(s.sampleRate*e),n=s.createBuffer(1,t,s.sampleRate),i=n.getChannelData(0);let r=0;for(let a=0;a<t;a++){const o=Math.random()*2-1;r=(r+.02*o)/1.02,i[a]=r*3.2}return n}class L0{constructor(){this.ctx=null,this.muted=!1,this.ready=!1,this.lastPop=0}async init(){if(this.ready){this.ctx.state==="suspended"&&await this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,await t.resume(),this.master=t.createGain(),this.master.gain.value=this.muted?0:.85;const n=t.createDynamicsCompressor();n.threshold.value=-18,n.knee.value=20,n.ratio.value=5,n.attack.value=.005,n.release.value=.18,this.master.connect(n),n.connect(t.destination),this.noiseBuf=P0(t,2.5),this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=600,this.engineFilter.Q.value=1.4,this.engineGain.connect(this.engineFilter),this.engineFilter.connect(this.master);const i=(r,a,o=1)=>{const c=t.createOscillator();c.type=r,c.frequency.value=40*o;const l=t.createGain();return l.gain.value=a,c.connect(l),l.connect(this.engineGain),c.start(),{o:c,g:l,oct:o}};this.oscs=[i("sawtooth",.5),i("sawtooth",.35,1.01),i("square",.14,2),i("sine",.5,.5)],this.exhaustNoise=t.createBufferSource(),this.exhaustNoise.buffer=this.noiseBuf,this.exhaustNoise.loop=!0,this.exhaustFilter=t.createBiquadFilter(),this.exhaustFilter.type="bandpass",this.exhaustFilter.frequency.value=260,this.exhaustFilter.Q.value=.9,this.exhaustGain=t.createGain(),this.exhaustGain.gain.value=0,this.exhaustNoise.connect(this.exhaustFilter),this.exhaustFilter.connect(this.exhaustGain),this.exhaustGain.connect(this.master),this.exhaustNoise.start(),this.turboOsc=t.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.value=1800,this.turboGain=t.createGain(),this.turboGain.gain.value=0,this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.master),this.turboOsc.start(),this.tireNoise=t.createBufferSource(),this.tireNoise.buffer=this.noiseBuf,this.tireNoise.loop=!0,this.tireFilter=t.createBiquadFilter(),this.tireFilter.type="bandpass",this.tireFilter.frequency.value=2100,this.tireFilter.Q.value=9,this.tireGain=t.createGain(),this.tireGain.gain.value=0,this.tireNoise.connect(this.tireFilter),this.tireFilter.connect(this.tireGain),this.tireGain.connect(this.master),this.tireNoise.start(),this.windNoise=t.createBufferSource(),this.windNoise.buffer=this.noiseBuf,this.windNoise.loop=!0,this.windFilter=t.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=500,this.windGain=t.createGain(),this.windGain.gain.value=0,this.windNoise.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.master),this.windNoise.start(),this.crowdNoise=t.createBufferSource(),this.crowdNoise.buffer=this.noiseBuf,this.crowdNoise.loop=!0,this.crowdFilter=t.createBiquadFilter(),this.crowdFilter.type="bandpass",this.crowdFilter.frequency.value=650,this.crowdFilter.Q.value=.6,this.crowdGain=t.createGain(),this.crowdGain.gain.value=.012,this.crowdNoise.connect(this.crowdFilter),this.crowdFilter.connect(this.crowdGain),this.crowdGain.connect(this.master),this.crowdNoise.start(),this.ready=!0}setMuted(e){this.muted=e,!(!this.ready||!this.master)&&this.master.gain.setTargetAtTime(e?0:.85,this.ctx.currentTime,.03)}update(e){if(!this.ready)return;const t=this.ctx.currentTime,n=e.rpm||850,i=Math.max(0,Math.min(1.15,e.rpmNorm||0)),r=Math.max(22,n/60*2.15);for(const{o:p,oct:d}of this.oscs)p.frequency.setTargetAtTime(r*d,t,.02);const a=e.racing?1:.45,o=e.racing?.35+.65*(e.throttle||0):.2,c=a*o*(.055+i*.075);this.engineGain.gain.setTargetAtTime(c,t,.045),this.engineFilter.frequency.setTargetAtTime(260+i*1200+(e.throttle||0)*700,t,.05),this.exhaustGain.gain.setTargetAtTime((e.racing?.035:.01)*(.35+(e.throttle||0))*(.5+i*.8),t,.06);const l=e.racing?Math.max(0,i-.4)*(.6+(e.throttle||0)):0;this.turboOsc.frequency.setTargetAtTime(1500+i*2700,t,.06),this.turboGain.gain.setTargetAtTime(l*.02,t,.08);const h=Math.min(1,e.slip||0);this.tireGain.gain.setTargetAtTime(h*.15,t,.05),this.tireFilter.frequency.setTargetAtTime(1650+h*900,t,.1),this.windFilter.frequency.setTargetAtTime(380+Math.min(1,(e.speed||0)/80)*900,t,.2),this.windGain.gain.setTargetAtTime(Math.min(.09,(e.speed||0)*.0014),t,.15)}beep(e=700,t=.09,n=.16,i="square"){if(!this.ready)return;const r=this.ctx,a=r.createOscillator();a.type=i,a.frequency.value=e;const o=r.createGain();o.gain.setValueAtTime(1e-4,r.currentTime),o.gain.exponentialRampToValueAtTime(n,r.currentTime+.01),o.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+t),a.connect(o),o.connect(this.master),a.start(),a.stop(r.currentTime+t+.02)}pop(e=1){if(!this.ready)return;const t=this.ctx,n=t.currentTime;if(n-this.lastPop<.035)return;this.lastPop=n;const i=t.createBufferSource();i.buffer=this.noiseBuf,i.playbackRate.value=.7+Math.random()*.6;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1200,n),r.frequency.exponentialRampToValueAtTime(260,n+.14);const a=t.createGain();a.gain.setValueAtTime(.34*e,n),a.gain.exponentialRampToValueAtTime(.001,n+.17),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.2);const o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(110,n),o.frequency.exponentialRampToValueAtTime(45,n+.12);const c=t.createGain();c.gain.setValueAtTime(.22*e,n),c.gain.exponentialRampToValueAtTime(.001,n+.15),o.connect(c),c.connect(this.master),o.start(n),o.stop(n+.16)}whoosh(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuf,n.playbackRate.value=1.4;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(2400,t),i.frequency.exponentialRampToValueAtTime(700,t+.3),i.Q.value=1.5;const r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.09,t+.03),r.gain.exponentialRampToValueAtTime(1e-4,t+.32),n.connect(i),i.connect(r),r.connect(this.master),n.start(t),n.stop(t+.34)}foul(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.value=120;const i=e.createGain();i.gain.setValueAtTime(.12,t),i.gain.setValueAtTime(.12,t+.3),i.gain.exponentialRampToValueAtTime(.001,t+.5),n.connect(i),i.connect(this.master),n.start(t),n.stop(t+.52)}win(){if(!this.ready)return;[523.25,659.25,783.99,1046.5].forEach((o,c)=>{const l=this.ctx,h=l.currentTime+c*.09,p=l.createOscillator();p.type="triangle",p.frequency.value=o;const d=l.createGain();d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(.16,h+.02),d.gain.exponentialRampToValueAtTime(1e-4,h+.45),p.connect(d),d.connect(this.master),p.start(h),p.stop(h+.5)});const t=this.ctx,n=t.currentTime,i=t.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0,i.playbackRate.value=1.1;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.7;const a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.07,n+.2),a.gain.exponentialRampToValueAtTime(1e-4,n+1.9),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+2)}lose(){if(!this.ready)return;const e=this.ctx;[220,174.6].forEach((t,n)=>{const i=e.currentTime+n*.18,r=e.createOscillator();r.type="sawtooth",r.frequency.value=t;const a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.08,i+.02),a.gain.exponentialRampToValueAtTime(1e-4,i+.5),r.connect(a),a.connect(this.master),r.start(i),r.stop(i+.52)})}ui(){this.beep(950,.045,.05,"triangle")}}const ye=s=>document.getElementById(s);class I0{constructor(e){this.game=e,this.el={boot:ye("boot"),menu:ye("menu"),garage:ye("garage"),help:ye("help"),hud:ye("hud"),results:ye("results"),money:ye("menu-money"),money2:ye("menu-best"),wins:ye("menu-wins"),best2:ye("menu-best-2"),record:ye("menu-record"),carName:ye("menu-car-name"),carClass:ye("menu-car-class"),carStats:ye("menu-car-stats"),rival:ye("menu-rival"),rivalLine:ye("menu-rival-line"),rivalTime:ye("menu-rival-time"),garageMoney:ye("garage-money"),carList:ye("car-list"),paintList:ye("paint-list"),upgradeList:ye("upgrade-list"),tree:[ye("t1"),ye("t2"),ye("t3")],treeGreen:ye("tg"),treeRed:ye("tr"),timer:ye("hud-timer"),phase:ye("hud-phase"),speed:ye("hud-speed"),gear:ye("hud-gear"),gearHint:ye("gear-hint"),rpm:ye("rpm-fill"),dist:ye("hud-dist"),gapYou:ye("gap-you-car"),gapRival:ye("gap-rival-car"),launch:ye("launch-prompt"),launchBig:document.querySelector(".lp-big"),launchLine:document.querySelector(".lp-line"),toast:ye("hud-toast"),foul:ye("foul-banner"),rivalName:ye("hud-rival-name"),resTitle:ye("res-title"),resKicker:ye("res-kicker"),resSub:ye("res-sub"),resET:ye("res-et"),resReaction:ye("res-reaction"),resSpeed:ye("res-speed"),resRivalET:ye("res-rival-et"),resMoney:ye("res-money"),resRecord:ye("res-record"),wheelPad:ye("wheel-pad"),wheelKnob:ye("wheel-knob"),gas:ye("btn-gas"),clutch:ye("btn-brake"),shiftUp:ye("btn-shift-up"),shiftDown:ye("btn-shift-down"),sound:ye("btn-sound"),prism:ye("prism"),prismStatus:ye("prism-status"),prismStart:ye("btn-prism-start")},this.toastTimer=0,this._bindStatic()}_bindStatic(){const e=this.game;ye("btn-boot").addEventListener("click",()=>e.boot()),ye("btn-race").addEventListener("click",()=>e.startRace()),ye("btn-garage").addEventListener("click",()=>e.openGarage()),ye("btn-garage-2").addEventListener("click",()=>e.openGarage()),ye("btn-help").addEventListener("click",()=>e.openHelp()),ye("btn-res-again").addEventListener("click",()=>e.startRace()),ye("btn-res-garage").addEventListener("click",()=>e.openGarage()),ye("btn-res-menu").addEventListener("click",()=>e.openMenu()),ye("btn-cam").addEventListener("click",()=>e.toggleCamera()),this.el.sound.addEventListener("click",()=>e.toggleSound()),ye("btn-prism").addEventListener("click",()=>e.togglePrism(!0)),ye("btn-prism-menu").addEventListener("click",()=>e.togglePrism(!0)),ye("btn-prism-close").addEventListener("click",()=>e.togglePrism(!1)),ye("btn-prism-start").addEventListener("click",()=>e.startPrismCapture()),ye("btn-prism-stop").addEventListener("click",()=>e.stopPrismCapture());for(const t of document.querySelectorAll(".prism-seg[data-target]")){const n=t.dataset.target;for(const i of t.querySelectorAll("button"))i.addEventListener("click",()=>{n==="fps"?e.setPrismFps(Number(i.dataset.fps)):n==="fit"?e.setPrismFit(i.dataset.fit):e.setPrismSource(n,i.dataset.src)})}this.setPrismStamp();for(const t of document.querySelectorAll("[data-close]"))t.addEventListener("click",()=>e.closePanel(t.dataset.close))}togglePrism(e){const t=this.el.prism;if(!t)return;const n=e??t.classList.contains("hidden");t.classList.toggle("hidden",!n),n&&this.syncPrism(this.game.prism)}syncPrism(e){const t=this.el.prism;if(!(!t||!e)){for(const n of["dash","mirror"])for(const i of t.querySelectorAll(`.prism-seg[data-target="${n}"] button`))i.classList.toggle("on",i.dataset.src===e[n]);this.setPrismFps(e.fps);for(const n of t.querySelectorAll('.prism-seg[data-target="fit"] button'))n.classList.toggle("on",n.dataset.fit===e.fit)}}setPrismFps(e){const t=this.el.prism;if(t)for(const n of t.querySelectorAll('.prism-seg[data-target="fps"] button'))n.classList.toggle("on",Number(n.dataset.fps)===Number(e))}setPrismStatus(e,t=!1){const n=this.el.prismStatus;if(!n)return;const i=n.querySelector("span")||n;i.textContent=e,n.classList.toggle("live",!!t)}setPrismActive(e){const t=this.el.prismStart;t&&(t.textContent=e?"TROCAR FONTE":"CAPTURAR JANELA",this.el.prism?.classList.toggle("streaming",!!e))}setPrismStamp(){if("getDisplayMedia"in(navigator.mediaDevices||{}))return;const e=this.el.prismStart;e&&(e.disabled=!0,e.textContent="SEM SUPORTE"),this.setPrismStatus("Este navegador não captura janelas")}show(e){const t=["boot","menu","garage","help","results"];for(const n of t)this.el[n].classList.toggle("hidden",n!==e);this.el.hud.classList.toggle("hidden",e!=="race")}updateMenu(e,t){const n=Jn(e.selected),i=e.upgrades[n.id]||{},r=Ol(n,i);this.el.money.textContent=Xi(e.money),this.el.wins.textContent=e.wins,this.el.carName.textContent=n.name,this.el.carClass.textContent=n.klass,this.el.carStats.innerHTML=`
      <div><b>${r}</b><small>CAVALOS</small></div>
      <div><b>${Math.round(jn(n,i).mass)}</b><small>KG</small></div>
      <div><b>${e.bestET?zl(e.bestET).replace("s",""):"—"}</b><small>MELHOR ET</small></div>`,this.el.best2.textContent=e.bestET?zl(e.bestET):"—",this.el.record.textContent=e.races?`${e.races} corridas · ${e.wins} vitórias`:"sem registro",this.el.rival.textContent=t.name,this.el.rivalLine.textContent=t.quote,this.el.rivalTime.textContent=`ET alvo ${t.target.toFixed(2)}s`,this.el.sound.textContent=e.sound?"🔊":"🔇"}renderGarage(e){const t=this.game;this.el.garageMoney.textContent=Math.round(e.money).toLocaleString("pt-BR"),this.el.carList.innerHTML="";for(const a of Ds){const o=e.ownedCars.includes(a.id),c=e.selected===a.id,l=e.upgrades[a.id]||{},h=Ol(a,l),p=document.createElement("div");p.className=`car-row${c?" active":""}${o?"":" locked"}`,p.innerHTML=`
        <div>
          <h4>${a.name} <span class="tag">${a.klass}</span></h4>
          <div class="spec">${h} cv · ${Math.round(jn(a,l).mass)} kg · ${a.tagline}</div>
        </div>
        <div class="car-action ${c?"equipped":o?"":"buy"}">
          ${c?"EM USO":o?"USAR":Xi(a.price)}
        </div>`,p.addEventListener("click",()=>t.selectCar(a.id)),this.el.carList.appendChild(p)}this.el.paintList.innerHTML="";const n=Jn(e.selected),i=e.paints[n.id]||"laranja";for(const a of di){const o=document.createElement("div");o.className=`paint-swatch${i===a.id?" active":""}`,o.style.background=`radial-gradient(circle at 35% 28%, ${D0(a.hex,.35)}, ${a.hex} 58%, ${N0(a.hex,.45)})`,o.title=a.name,o.addEventListener("click",()=>t.setPaint(n.id,a.id)),this.el.paintList.appendChild(o)}this.el.upgradeList.innerHTML="";const r=e.upgrades[n.id]||{};for(const a of Bc){const o=r[a.id]|0,c=o>=a.max,l=zc(a,o),h=document.createElement("div");h.className="upgrade-row";const p=Array.from({length:a.max},(d,m)=>`<i class="${m<o?"on":""}"></i>`).join("");h.innerHTML=`
        <div class="upgrade-head"><h4>${a.name}</h4><span class="lvl">NÍVEL ${o}/${a.max}</span></div>
        <div class="pips">${p}</div>
        <div class="upgrade-foot">
          <div class="upgrade-desc">${a.desc}<br>${a.effect}</div>
          <button class="upgrade-btn ${c?"max":""}" ${c?"disabled":""}>
            ${c?"NO MÁXIMO":Xi(l)}
          </button>
        </div>`,c||h.querySelector("button").addEventListener("click",()=>t.buyUpgrade(a.id)),this.el.upgradeList.appendChild(h)}}showHUD(e){this.show("race"),this.el.rivalName.textContent=e,this.el.foul.classList.add("hidden"),this.el.launch.classList.add("hidden"),this.setTree([!1,!1,!1],!1,!1),this.setTimer(0),this.setSpeed(0),this.setGear(1,"EMBREIE + ACELERE",0),this.setGap(0,0,402.336),this.setPhase("PREPARE-SE"),this.toast("")}setTree(e,t,n){this.el.tree.forEach((i,r)=>i.classList.toggle("on",!!e[r])),this.el.treeGreen.classList.toggle("on",!!t),this.el.treeRed.classList.toggle("on",!!n)}setPhase(e){this.el.phase.textContent=e}setTimer(e){this.el.timer.textContent=e>=0?e.toFixed(3):"0.000"}setSpeed(e){this.el.speed.textContent=Math.max(0,Math.round(e))}setGear(e,t,n){this.el.gear.textContent=e,t!=null&&(this.el.gearHint.textContent=t),this.el.rpm.style.width=`${Math.min(112,n*100)}%`}setDist(e){this.el.dist.textContent=Math.max(0,Math.round(402.336-e))}setGap(e,t,n){const i=Math.max(0,Math.min(1,e/n)),r=Math.max(0,Math.min(1,t/n));this.el.gapYou.style.left=`${i*92}%`,this.el.gapRival.style.left=`${r*92}%`}showLaunch(e){this.el.launch.classList.toggle("hidden",!e)}setLaunchText(e,t){this.el.launchLine.textContent=e,this.el.launchBig.textContent=t}toast(e,t=1100){this.el.toast.textContent=e,this.el.toast.classList.toggle("show",!!e),clearTimeout(this.toastTimer),e&&(this.toastTimer=setTimeout(()=>this.el.toast.classList.remove("show"),t))}showFoul(e){this.el.foul.classList.toggle("hidden",!e)}setWheel(e){this.el.wheelPad.style.setProperty("--rot",`${e*90}deg`),this.el.wheelKnob.style.transform=`translate(${e*36}px, 0)`}setPedals(e,t){this.el.gas.classList.toggle("active",e>.1),this.el.clutch.classList.toggle("active",!!t)}showResults(e){this.show("results"),this.el.results.classList.toggle("lose",!e.win),this.el.resTitle.textContent=e.foul?"QUEIMOU":e.win?"VITÓRIA":"DERROTA",this.el.resKicker.textContent=e.kicker||(e.foul?"DESCLASSIFICADO":"RESULTADO OFICIAL"),this.el.resSub.textContent=e.sub||(e.foul?"Você soltou a embreagem antes do verde. O fiscal não perdoou.":e.win?`Você cruzou ${e.margin>0?e.margin.toFixed(3)+"s":"na frente"} antes do rival.`:e.dnf?"O carro não cruzou a linha. Ajuste o setup e tente de novo.":`Faltaram ${e.margin.toFixed(3)}s para pegar o ${e.rivalName}.`),this.el.resET.textContent=e.et?e.et.toFixed(3):"DNF",this.el.resReaction.textContent=e.reaction!=null?e.reaction.toFixed(3)+"s":"—",this.el.resSpeed.textContent=Math.round(e.trap||0),this.el.resRivalET.textContent=e.rivalET?e.rivalET.toFixed(3):"DNF",this.el.resMoney.textContent=(e.prize>=0?"+ ":"− ")+Xi(Math.abs(e.prize)),this.el.resMoney.style.color=e.prize>=0?"var(--green)":"var(--red)",this.el.resRecord.classList.toggle("hidden",!e.record)}}function Qi(s){return Math.max(0,Math.min(255,Math.round(s)))}function D0(s,e){const t=s.replace("#",""),n=Qi(parseInt(t.slice(0,2),16)+255*e),i=Qi(parseInt(t.slice(2,4),16)+255*e),r=Qi(parseInt(t.slice(4,6),16)+255*e);return`rgb(${n},${i},${r})`}function N0(s,e){const t=s.replace("#",""),n=Qi(parseInt(t.slice(0,2),16)*(1-e)),i=Qi(parseInt(t.slice(2,4),16)*(1-e)),r=Qi(parseInt(t.slice(4,6),16)*(1-e));return`rgb(${n},${i},${r})`}const ki=4.2,Hi=-1.43,bs=A0,U0=[.78,.87,.95,1,1.05,1.1,1.15,1.22],ji=1/120;function F0(s){const e=new vr(s);for(let i=0;i<240;i++){const r=e.engineRpm<s.launchRpm?1:.15;if(e.step(ji,{throttle:r,clutch:!0},!0),e.engineRpm>=s.launchRpm)break}let t=0,n=0;for(;e.distance<bs&&n++<2640;){const i=e.wheelspin>.6?.65:1;e.step(ji,{throttle:i,clutch:!1},!1),e.autoShift(),t+=ji}return t}class O0{constructor(){this.save=C0(),this.audio=new L0,this.save.sound=this.save.sound!==!1,this.audio.muted=!this.save.sound,this.time=0,this.mode="boot",this.cameraMode="cockpit",this.phase="idle",this.steer=0,this.steerTarget=0,this.wheelPointer=null,this.keys={},this.touchGas=!1,this.touchClutch=!1,this.treeBeeped=[!1,!1,!1],this.rivalTargetCache=new Map,this.smokeAcc=0,this.simAcc=0,this.launchPromptVisible=!1,this.autoShift=!0,this.ui=null,this.prism={dash:"telemetry",mirror:"camera",fps:15,fit:"contain"},this.initGraphics(),this.initTrack(),this.initCars(),this.initInput(),this.ui=new I0(this),this.audio.setMuted(!this.save.sound),this.ui.updateMenu(this.save,this.nextRival()),this.openMenu(!0),this.resize(),window.addEventListener("resize",()=>this.resize()),this.last=performance.now(),requestAnimationFrame(e=>this.frame(e)),new URLSearchParams(location.search).has("autostart")&&setTimeout(()=>{this.mode==="boot"&&this.boot(),setTimeout(()=>this.startRace(),120)},300)}initGraphics(){const e=document.getElementById("scene");this.renderer=new a0({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ws,this.renderer.toneMapping=oo,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=Gt,this.scene=new dc,this.scene.background=new Je(329228),this.scene.fog=new _o(329228,.0048);const t=new Is(this.renderer);this.scene.environment=t.fromScene(new o0,.04).texture,this.scene.environmentIntensity=.45,this.camera=new cn(68,window.innerWidth/window.innerHeight,.06,1100),this.camera.position.set(12,4,8),this.hemi=new ou(3359595,460555,.85),this.scene.add(this.hemi),this.moon=new hu(11058431,1.25),this.moon.position.set(30,60,-20),this.moon.castShadow=!0,this.moon.shadow.mapSize.set(2048,2048),this.moon.shadow.camera.left=-35,this.moon.shadow.camera.right=35,this.moon.shadow.camera.top=35,this.moon.shadow.camera.bottom=-35,this.moon.shadow.camera.near=1,this.moon.shadow.camera.far=200,this.moon.shadow.bias=-6e-4,this.moon.shadow.normalBias=.02,this.scene.add(this.moon),this.moonTarget=new Rt,this.scene.add(this.moonTarget),this.moon.target=this.moonTarget,this.warm=new Dr(16763274,45,40,2),this.warm.position.set(0,9,4),this.scene.add(this.warm),this.speedlines=document.getElementById("speedlines"),this.frameTimes=[],this.quality=1}initTrack(){this.track=T0(),this.scene.add(this.track.group),this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects=new b0(this.scene)}initCars(){this.playerGroup=new Nt,this.scene.add(this.playerGroup),this.playerModel=null,this.rivalModels={};for(const e of Ds){const t=Ll({paint:"#25c45b",interior:!1}),n=new Nt;n.add(t.root),n.visible=!1,this.scene.add(n),this.rivalModels[e.id]={model:t,group:n}}this.rebuildPlayerCar(),this.playerGroup.position.set(ki,0,Hi)}rebuildPlayerCar(){const e=this.save,t=Jn(e.selected),n=di.find(i=>i.id===e.paints[t.id])?.hex||"#ff5a12";this.playerModel&&(this.playerGroup.remove(this.playerModel.root),this.playerModel.root.traverse(i=>{i.isMesh&&i.geometry&&i.geometry.dispose()}),this.playerModel=null),this.playerModel=Ll({paint:n,interior:!0}),this.telemetry||(this.telemetry=new S0),this.mirrorFeed||(this.mirrorFeed=new y0(this.renderer,this.scene)),this.applyCabinScreens(),this.screenClock=0,this.mirrorAcc=0,this.playerGroup.add(this.playerModel.root),this.playerSpec=jn(t,e.upgrades[t.id]||{}),this.playerSim=new vr(this.playerSpec)}nextRival(){const e=Ht(this.save.careerWins,0,Ss.length-1),t=Ss[e],n=Math.max(0,this.save.careerWins-(Ss.length-1)),i=U0[e]+n*.035,r={...t,power:i,idx:e};return r.target=this.rivalTarget(r),r}rivalTarget(e){const t=`${e.car}:${JSON.stringify(e.upgrades)}:${e.power.toFixed(3)}`;if(this.rivalTargetCache.has(t))return this.rivalTargetCache.get(t);const n=jn(Jn(e.car),e.upgrades);n.torque*=e.power;const i=F0(n);return this.rivalTargetCache.set(t,i),i}initInput(){const e=(l,h,p)=>{if(!l)return;const d=_=>{_.preventDefault();try{l.setPointerCapture(_.pointerId)}catch{}h()},m=()=>p();l.addEventListener("pointerdown",d),l.addEventListener("pointerup",m),l.addEventListener("pointercancel",m),l.addEventListener("lostpointercapture",m)};e(document.getElementById("btn-gas"),()=>{this.touchGas=!0},()=>{this.touchGas=!1}),e(document.getElementById("btn-brake"),()=>{this.touchClutch=!0},()=>{this.touchClutch=!1});const t=document.getElementById("btn-shift-up"),n=document.getElementById("btn-shift-down"),i=l=>h=>{h.preventDefault(),this.tryShift(l)};t.addEventListener("pointerdown",i(1)),n.addEventListener("pointerdown",i(-1));const r=document.getElementById("btn-auto");r.classList.toggle("on",this.autoShift),r.addEventListener("pointerdown",l=>{l.preventDefault(),this.autoShift=!this.autoShift,r.classList.toggle("on",this.autoShift),this.audio.ui()});const a=document.getElementById("wheel-pad"),o=l=>{const h=a.getBoundingClientRect(),p=(l.clientX-(h.left+h.width/2))/(h.width*.5);this.steerTarget=Ht(p*1.15,-1,1)};a.addEventListener("pointerdown",l=>{l.preventDefault(),this.wheelPointer=l.pointerId;try{a.setPointerCapture(l.pointerId)}catch{}o(l)}),a.addEventListener("pointermove",l=>{this.wheelPointer===l.pointerId&&o(l)});const c=()=>{this.wheelPointer=null,this.steerTarget=0};a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c),a.addEventListener("lostpointercapture",c),window.addEventListener("keydown",l=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(l.code)&&l.preventDefault(),this.keys[l.code]=!0,!l.repeat&&(l.code==="KeyC"&&this.toggleCamera(),l.code==="KeyP"&&this.togglePrism(),(l.code==="ShiftLeft"||l.code==="ShiftRight"||l.code==="KeyE")&&this.tryShift(1),(l.code==="ControlLeft"||l.code==="ControlRight"||l.code==="KeyQ")&&this.tryShift(-1),l.code==="Escape"&&(this.mode==="race"?this.openMenu():(this.mode==="garage"||this.mode==="help")&&this.openMenu()))}),window.addEventListener("keyup",l=>{this.keys[l.code]=!1}),window.addEventListener("blur",()=>{this.keys={},this.touchGas=!1,this.touchClutch=!1}),document.querySelectorAll(".pedal, .shift-btn, .wheel-pad").forEach(l=>{l.addEventListener("contextmenu",h=>h.preventDefault())})}tryShift(e){if(this.mode!=="race"||!this.greenReached||this.playerFinished)return;const t=this.playerSim;(e>0?t.shiftUp():t.shiftDown())&&(this.audio.pop(.6),this.audio.whoosh(),this.spawnBackfire())}playerInput(){const e=this.keys;let t=e.KeyW||e.ArrowUp||this.touchGas?1:0,n=e.KeyS||e.ArrowDown||e.Space||this.touchClutch,i=0;return this.playerFinished&&(t=0,n=!1,i=1),{throttle:t,clutch:!!n,steer:this.steer,brake:i}}playerClutchPressed(){const e=this.keys;return!!(e.KeyS||e.ArrowDown||e.Space||this.touchClutch)}toggleCamera(){this.mode!=="race"&&this.mode!=="result"||(this.cameraMode=this.cameraMode==="cockpit"?"chase":"cockpit",this.audio.ui())}updateCamera(e){const t=this.camera,n=this.playerGroup.position.x,i=this.playerGroup.position.z,r=this.time,a=this.mode==="race"&&this.cameraMode==="cockpit";if(this.playerModel?.windshieldGroup&&(this.playerModel.windshieldGroup.visible=!a),this.playerModel?.windshieldGlass&&(this.playerModel.windshieldGlass.visible=!a),this.playerModel?.sideGlassParts)for(const f of this.playerModel.sideGlassParts)f.visible=!a;if(this.playerModel?.roofParts)for(const f of this.playerModel.roofParts)f.visible=!a;if(this.mode==="menu"||this.mode==="boot"||this.mode==="help"){const f=.68+Math.sin(r*.11)*.22,u=8.6,S=new N(n+Math.sin(f)*u,2.85+Math.sin(r*.19)*.12,i+Math.cos(f)*u);t.position.lerp(S,1-Math.exp(-e*2.2)),t.lookAt(n,.82,i+.15),t.fov+=(58-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}if(this.mode==="garage"){const f=1.02+Math.sin(r*.1)*.1,u=7.6,S=new N(n+Math.sin(f)*u,2.15,i+Math.cos(f)*u);t.position.lerp(S,1-Math.exp(-e*2.4)),t.lookAt(n,.78,i+.1),t.fov+=(52-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}if(this.mode==="result"){const f=.9+r*.12,u=8.6;t.position.lerp(new N(n+Math.sin(f)*u,2.6,i+Math.cos(f)*u),1-Math.exp(-e*2)),t.lookAt(n,.9,i+.4),t.fov+=(52-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}const o=this.playerSim;this.playerGroup.updateMatrixWorld(!0);const c=Math.min(1,o.speed/75);if(this.cameraMode==="chase"){const f=7.4+c*1.8,u=this.playerGroup.localToWorld(new N(0,2.55+c*.2,-f));t.position.lerp(u,1-Math.exp(-e*5));const S=this.playerGroup.localToWorld(new N(0,1,1.6));t.lookAt(S),t.fov+=(60+c*16-t.fov)*Math.min(1,e*4),t.updateProjectionMatrix();return}const l=o.accel,h=Math.min(.02,o.speed*7e-5+o.wheelspin*.01),p=this.playerGroup.localToWorld(new N(-.37,1.23,-.27));p.x+=Math.sin(r*53)*h,p.y+=Math.sin(r*61+1.3)*h*.7,p.z+=Math.cos(r*47)*h*.5,t.position.copy(p);const d=-.055-l*.0035+Math.sin(r*44)*h*.35,m=-this.steer*.035*c+Math.sin(r*37)*h*.3,_=this.steer*.05*c;t.rotation.set(d,Math.PI+_,m,"YXZ");const M=66+c*17+Math.min(4,o.wheelspin*4);t.fov+=(M-t.fov)*Math.min(1,e*4),t.updateProjectionMatrix()}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality>=1?1.75:1));const n=t>e*1.05&&window.matchMedia("(pointer: coarse)").matches;document.getElementById("rotate-hint").classList.toggle("hidden",!n)}boot(){this.audio.init(),this.save.sound=this.save.sound!==!1,this.audio.setMuted(!this.save.sound),this.ui.show("menu"),this.mode="menu",this.positionForShowroom(),this.ui.updateMenu(this.save,this.nextRival()),this.audio.ui()}positionForShowroom(){this.playerSim.reset(),this.playerSim.clutch=!0,this.playerSim.prevClutch=!0,this.playerGroup.position.set(ki,0,Hi),this.playerGroup.rotation.set(0,0,0),this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects.clear(),this.ui.showLaunch(!1),this.ui.showFoul(!1);for(const e of Object.keys(this.rivalModels))this.rivalModels[e].group.visible=!1}openMenu(e=!1){!e&&this.mode==="menu"||(this.mode="menu",this.phase="idle",this.greenReached=!1,this.playerFinished=!1,this.rivalFinished=!1,this.positionForShowroom(),e||this.ui.show("menu"),this.ui.updateMenu(this.save,this.nextRival()),this.speedlines.style.opacity="0")}openGarage(){this.mode="garage",this.positionForShowroom(),this.ui.show("garage"),this.ui.renderGarage(this.save),this.audio.ui()}openHelp(){this.mode="help",this.ui.show("help"),this.audio.ui()}closePanel(){this.openMenu()}selectCar(e){const t=this.save,n=Jn(e);if(!t.ownedCars.includes(e)){if(t.money<n.price){this.uiToast(`Faltam ${Xi(n.price-t.money)} pra levar o ${n.name}.`);return}t.money-=n.price,t.ownedCars.push(e),t.paints[e]=di[Ds.indexOf(n)%di.length].id,t.upgrades[e]||(t.upgrades[e]={engine:0,tires:0,weight:0,gearbox:0}),t.selected=e,Gi(t),this.rebuildPlayerCar(),this.ui.renderGarage(t),this.uiToast(`${n.name} comprado!`),this.audio.ui();return}t.selected!==e&&(t.selected=e,Gi(t),this.rebuildPlayerCar(),this.ui.renderGarage(t),this.ui.updateMenu(t,this.nextRival()),this.audio.ui())}setPaint(e,t){if(this.save.paints[e]=t,Gi(this.save),e===this.save.selected&&this.playerModel){const i=di.find(r=>r.id===t);i&&this.playerModel.setPaint(i.hex)}this.ui.renderGarage(this.save);const n=di.find(i=>i.id===t);this.uiToast(`Pintura: ${n?n.name:t}`),this.audio.ui()}buyUpgrade(e){const t=this.save,n=t.selected,i=Bc.find(c=>c.id===e);if(!i)return;const r=t.upgrades[n]||(t.upgrades[n]={engine:0,tires:0,weight:0,gearbox:0}),a=r[e]|0;if(a>=i.max)return;const o=zc(i,a);if(t.money<o){this.uiToast(`Sem caixa. Faltam ${Xi(o-t.money)}.`);return}t.money-=o,r[e]=a+1,Gi(t),this.playerSpec=jn(Jn(n),r),this.ui.renderGarage(t),this.ui.updateMenu(t,this.nextRival()),this.uiToast(`${i.name} nível ${a+1} instalado.`),this.audio.ui()}toggleSound(){this.save.sound=!this.save.sound,Gi(this.save),this.save.sound&&this.audio.init(),this.audio.setMuted(!this.save.sound),document.getElementById("btn-sound").textContent=this.save.sound?"🔊":"🔇"}uiToast(e){const t=document.getElementById("ui-toast");t.textContent=e,t.classList.add("show"),clearTimeout(this._uiToastTimer),this._uiToastTimer=setTimeout(()=>t.classList.remove("show"),1900)}startRace(){this.audio.init(),this.audio.ui(),this.mode="race",this.phase="staging",this.cameraMode="cockpit",this.raceClock=0,this.simAcc=0,this.greenReached=!1,this.greenClock=null,this.foul=!1,this.playerRunStart=null,this.playerReaction=null,this.playerFinished=!1,this.rivalFinished=!1,this.playerET=null,this.playerTrap=0,this.rivalET=null,this.rivalTrap=0,this.endScheduled=null,this.launchPromptVisible=!1,this.lastClutch=!1,this.smokeAcc=0,this.treeBeeped=[!1,!1,!1],this.greenBeeped=!1,this.treeStart=1.25+Math.random()*.65,this.amberTimes=[this.treeStart,this.treeStart+.6,this.treeStart+1.2],this.greenAt=this.treeStart+1.72;const e=this.nextRival();this.rivalInfo=e,this.rivalReaction=.15+Math.random()*.13+Math.max(0,1-e.idx/8)*.05,this.playerSpec=jn(Jn(this.save.selected),this.save.upgrades[this.save.selected]||{}),this.playerSim=new vr(this.playerSpec);const t=jn(Jn(e.car),e.upgrades);t.torque*=e.power,this.rivalSpec=t,this.rivalSim=new vr(t),this.playerSim.reset(),this.playerSim.clutch=!0,this.playerSim.prevClutch=!0,this.playerGroup.position.set(ki,0,Hi),this.playerModel.setPaint(di.find(i=>i.id===(this.save.paints[this.save.selected]||"laranja"))?.hex||"#ff5a12");const n=this.rivalModels[e.car];for(const i of Object.keys(this.rivalModels))this.rivalModels[i].group.visible=i===e.car;n.model.setPaint(Bl[e.idx%Bl.length]),n.group.visible=!0,n.group.position.set(-ki,0,Hi),this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects.clear(),this.ui.showHUD(e.name),this.ui.setPhase("PREPARE-SE"),this.ui.setLaunchText("A LUZ VERDE ACENDEU","ACELERA!"),this.ui.showLaunch(!1),this.ui.showFoul(!1),this.speedlines.style.opacity="0",this.steer=0,this.steerTarget=0}updateTree(){if(this.greenReached)this.track.setTree({a:[!1,!1,!1],green:!this.foul,red:this.foul}),this.ui.setTree([!1,!1,!1],!this.foul,this.foul);else{const e=this.raceClock,t=this.amberTimes.map(n=>e>=n);this.track.setTree({a:t,green:!1,red:this.foul}),this.ui.setTree(t,!1,this.foul);for(let n=0;n<3;n++)!this.treeBeeped[n]&&e>=this.amberTimes[n]&&(this.treeBeeped[n]=!0,this.foul||this.audio.beep(620+n*45,.08,.12,"square"));e>=this.treeStart&&this.phase==="staging"&&(this.phase="tree",this.ui.setPhase("LUZES ACESAS")),e>=this.greenAt&&this.onGreen()}}onGreen(){this.greenReached||(this.greenReached=!0,this.greenClock=this.raceClock,this.phase="racing",this.ui.setPhase(this.foul?"QUEIMOU":"VAI!"),this.foul||(this.audio.beep(980,.25,.18,"square"),this.ui.showLaunch(!0),this.ui.setLaunchText("SOLTE A EMBREAGEM E PISA","VAI!"),this.ui.toast("VERDE! SOLTA A EMBREAGEM",900)))}registerFoul(){this.foul=!0,this.ui.showFoul(!0),this.ui.showLaunch(!1),this.ui.setPhase("QUEIMOU"),this.audio.foul()}stepRace(e){if(this.mode!=="race"||this.phase==="idle")return;const t=!this.greenReached,n=this.playerInput(),i=this.playerClutchPressed();if(!this.greenReached&&!this.foul&&this.lastClutch&&!i&&n.throttle>.15&&this.registerFoul(),this.lastClutch=i,this.playerSim.step(e,n,t),this.autoShift&&this.greenReached&&!this.playerFinished){const l=this.playerSim.gear;this.playerSim.autoShift(),this.playerSim.gear!==l&&(this.audio.pop(.6),this.audio.whoosh(),this.spawnBackfire())}const r=this.rivalSim,a=!this.greenReached,o=r.engineRpm<this.rivalSpec.launchRpm?1:.15;let c;if(a?c={throttle:o,clutch:!0,steer:0,brake:0}:this.raceClock<this.greenClock+this.rivalReaction?c={throttle:o,clutch:!0,steer:0,brake:0}:c={throttle:r.wheelspin>.6?.65:1,clutch:!1,steer:0,brake:this.rivalFinished?1:0},r.step(e,c,a),this.greenReached&&!this.rivalFinished&&!a){const l=r.gear;r.autoShift(),r.gear!==l&&this.spawnBackfire(!0)}!this.playerFinished&&this.playerSim.distance>=bs&&(this.playerFinished=!0,this.playerFinishClock=this.raceClock,this.playerET=this.playerRunStart!=null?this.raceClock-this.playerRunStart:null,this.playerTrap=this.playerSim.speedKmh,this.ui.toast(`CHEGOU! ${this.playerET?this.playerET.toFixed(3)+"s":""}`,1600),this.audio.pop(1)),!this.rivalFinished&&r.distance>=bs&&(this.rivalFinished=!0,this.rivalFinishClock=this.raceClock,this.rivalET=this.raceClock-(this.greenClock+this.rivalReaction),this.rivalTrap=r.speedKmh)}spawnBackfire(e=!1){const t=e?this.rivalModels[this.rivalInfo?.car]?.model:this.playerModel;if(!t)return;const n=new N;for(const i of t.exhaustTips)i.getWorldPosition(n),this.effects.emitBackfire(n,new N(0,.2,-1))}updateRace(e){if(this.raceClock+=e,this.updateTree(),this.greenReached&&!this.playerRunStart&&this.playerSim.speed>.25&&(this.playerRunStart=this.raceClock,this.playerReaction=this.raceClock-this.greenClock,this.launchPromptVisible=!1,this.ui.showLaunch(!1),!this.foul)){const t=this.playerReaction,n=t<.16?"LARGADA PERFEITA":t<.34?"BOA LARGADA":"SAIU ATRASADO";this.ui.toast(`${n} · ${t.toFixed(3)}s`,1300),t<.16&&this.audio.beep(1200,.12,.1,"triangle")}this.playerFinished&&this.rivalFinished&&this.endScheduled==null&&(this.endScheduled=this.raceClock),this.playerFinished&&!this.rivalFinished&&this.raceClock-this.playerFinishClock>5&&this.endScheduled==null&&(this.endScheduled=this.raceClock),!this.playerFinished&&this.raceClock-this.greenClock>20&&this.endScheduled==null&&(this.endScheduled=this.raceClock),this.endScheduled!=null&&this.raceClock-this.endScheduled>1.3&&this.finishRace()}finishRace(){if(this.mode!=="race")return;this.mode="result",this.cameraMode="chase";const e=this.playerFinished?this.playerFinishClock-this.greenClock:1/0,t=this.rivalFinished?this.rivalFinishClock-this.greenClock:1/0,n=!this.playerFinished,i=!this.foul&&!n&&e<t,r=i?Math.max(0,(this.rivalFinished?t:e+1)-e):this.rivalFinished?Math.abs(e-t):0,a=this.rivalInfo;let o=0;!this.foul&&!n&&(o=i?a.reward:Math.round(a.reward*.2));const c=this.save.bestET,l=!this.foul&&!n&&this.playerET!=null&&(c==null||this.playerET<c);!this.foul&&!n?(this.save.races++,i?(this.save.wins++,this.save.careerWins++):this.save.losses++,this.playerET!=null&&(this.save.bestET==null||this.playerET<this.save.bestET)&&(this.save.bestET=this.playerET),this.playerTrap&&(this.save.bestTrap==null||this.playerTrap>this.save.bestTrap)&&(this.save.bestTrap=this.playerTrap)):(this.save.races++,this.save.losses++);const h=i&&this.save.careerWins===Ss.length;h&&(o+=5e3),this.save.money+=o,Gi(this.save);const p=i&&this.save.careerWins>=Ss.length;this.ui.showResults({win:i,foul:this.foul,dnf:n,et:this.playerET,reaction:this.playerReaction,trap:this.playerTrap,rivalET:this.rivalET,rivalName:a.name,margin:r,prize:o,record:l,kicker:h?"CAMPEÃO DA TEMPORADA":this.foul?"DESCLASSIFICADO":"RESULTADO OFICIAL",sub:h?"Você limpou a fila inteira. O asfalto agora tem dono — e é você.":p&&i?"O rei caiu de novo. A fila vai ficar brava e voltar mais forte.":this.foul?"Você soltou a embreagem antes do verde. O fiscal não perdoou.":void 0}),this.foul?this.audio.foul():i?this.audio.win():this.audio.lose(),this.speedlines.style.opacity="0",this.ui.showFoul(!1)}ensureWindowFeed(){if(this.windowFeed)return this.windowFeed;const e=new E0;return e.onchange=t=>{t==="ended"&&(this.prism.dash="telemetry",this.prism.mirror="camera",this.applyCabinScreens(),this.ui?.syncPrism(this.prism),this.ui?.setPrismActive(!1),this.ui?.setPrismStatus("Compartilhamento encerrado"),this.uiToast("PRISM desconectado"))},e.onmeta=({width:t,height:n})=>{e.active&&t&&n&&this.ui?.setPrismStatus(`${t}×${n} · ao vivo`,!0)},this.windowFeed=e,e}applyCabinScreens(){const e=this.playerModel;if(!e)return;const t=this.windowFeed,n=!!t?.active;e.dashScreen&&(e.dashScreen.material=n&&this.prism.dash==="capture"?t.dashMaterial:this.telemetry.material),e.mirrorGlass&&(e.mirrorGlass.material=n&&this.prism.mirror==="capture"?t.mirrorMaterial:this.mirrorFeed.material)}setPrismSource(e,t){if(!(e!=="dash"&&e!=="mirror")){if(this.prism[e]=t,t==="capture"&&!this.windowFeed?.active){this.startPrismCapture();return}this.applyCabinScreens(),this.ui?.syncPrism(this.prism)}}setPrismFps(e){this.prism.fps=e,this.windowFeed?.setFps(e),this.ui?.syncPrism(this.prism)}setPrismFit(e){this.prism.fit=e,this.windowFeed?.setFit(e),this.ui?.syncPrism(this.prism)}async startPrismCapture(){if(this.prismPending)return;this.prismPending=!0;const e=this.prismToken=(this.prismToken||0)+1,t=this.ensureWindowFeed();this.ui?.setPrismStatus("Escolha uma janela, aba ou tela…");try{await t.start({fps:this.prism.fps,fit:this.prism.fit})}catch(n){this.prismPending=!1;const i=n?.code==="unsupported"?"Este navegador não captura janelas":n?.name==="NotAllowedError"?"Captura cancelada":"Falha ao abrir a captura";this.prism.dash==="capture"&&(this.prism.dash="telemetry"),this.prism.mirror==="capture"&&(this.prism.mirror="camera"),this.applyCabinScreens(),this.ui?.syncPrism(this.prism),this.ui?.setPrismStatus(i),this.ui?.setPrismActive(!1),this.uiToast(i);return}if(this.prismPending=!1,e!==this.prismToken){t.stop();return}this.prism.dash!=="capture"&&this.prism.mirror!=="capture"&&(this.prism.dash="capture"),this.applyCabinScreens(),this.ui?.syncPrism(this.prism),this.ui?.setPrismActive(!0),this.ui?.setPrismStatus("Captura ao vivo · tela central",!0),this.uiToast("PRISM CONECTADO")}stopPrismCapture(){this.prismToken=(this.prismToken||0)+1,this.windowFeed?.stop(),this.prism.dash="telemetry",this.prism.mirror="camera",this.applyCabinScreens(),this.ui?.syncPrism(this.prism),this.ui?.setPrismActive(!1),this.ui?.setPrismStatus("Nenhuma captura ativa")}togglePrism(e){this.mode!=="boot"&&document.getElementById("boot")?.classList.contains("hidden")&&(this.ui?.togglePrism(e),this.audio.ui())}updateLiveScreens(e){const t=this.playerSim;if(!t||!this.telemetry)return;this.windowFeed?.active&&this.windowFeed.update();const n=this.prism.dash==="capture"&&this.windowFeed?.active,i=this.prism.mirror==="capture"&&this.windowFeed?.active,r=this.mode==="race"?1/12:1/6;if(!n&&this.time-(this.screenClock||0)>=r){this.screenClock=this.time;const a=this.rivalSim;this.telemetry.draw({mode:this.mode,time:this.time,speed:t.speedKmh,rpm:t.rpmNorm,gear:t.gear,distance:t.distance,finish:bs,gap:a?a.distance-t.distance:null,et:(this.mode==="race"||this.mode==="result")&&this.playerFinished?this.playerET:null,phase:this.mode==="race"||this.mode==="result"?this.playerFinished?"FIM":this.greenReached?"CORRIDA":"PREPARE":void 0})}if(this.mirrorFeed&&!i){const a=this.mode==="race"&&this.cameraMode==="cockpit";this.mirrorAcc=(this.mirrorAcc||0)+e,this.mirrorAcc>=(a?1/15:1/6)&&(this.mirrorAcc=0,this.mirrorFeed.update(this.playerGroup))}}updateCarVisuals(e){const t=this.playerModel;if(t){const i=this.playerSim;this.playerGroup.position.set(ki+i.lateral,0,Hi+i.distance);const r=i.speed/this.playerSpec.wheelRadius*e;for(const a of t.wheels)a.spin.rotation.x-=r,a.steerGroup.rotation.y=a.front?this.steer*.42:0;if(t.steeringWheel&&(t.steeringWheel.rotation.z=this.steer*1),t.needles.tach&&(t.needles.tach.rotation.z=2.25-i.rpmNorm*4.5),t.needles.speed&&(t.needles.speed.rotation.z=2.25-Math.min(1,i.speedKmh/240)*4.5),t.shiftLights?.length){const a=i.rpmNorm,o=this.mode==="race"?Math.floor(a*6.4):0,c=Math.floor(this.time*14)%2===0;t.shiftLights.forEach((l,h)=>{const p=h<o||a>.98&&c;l.material.color.setHex(p?l.userData.on:1513245)})}if(i.wheelspin>.38&&Math.random()<i.wheelspin){const a=new N;for(const o of t.wheels)o.front||(o.group.getWorldPosition(a),a.y=.06,this.effects.emitSmoke(a,i.wheelspin))}}if(this.rivalInfo){const i=this.rivalModels[this.rivalInfo.car];if(i&&i.group.visible){const r=this.rivalSim;i.group.position.set(-ki+r.lateral,0,Hi+r.distance);const a=r.speed/this.rivalSpec.wheelRadius*e;for(const o of i.model.wheels)o.spin.rotation.x-=a;if(r.wheelspin>.4&&Math.random()<r.wheelspin*.7){const o=new N;for(const c of i.model.wheels)c.front||(c.group.getWorldPosition(o),o.y=.05,this.effects.emitSmoke(o,r.wheelspin*.8))}}}const n=this.mode==="race"&&(this.playerFinished||this.playerSim.brake>.1);t&&t.root.traverse(i=>{i.isMesh&&i.material&&i.material.emissive&&i.material.emissive.r>.5&&i.material.emissive.g<.2&&(i.material.emissiveIntensity=n?3.2:.9)})}updateHud(){const e=this.playerSim;if(!e)return;this.ui.setSpeed(e.speedKmh);let t="SEGURE O GÁS";if(this.ui.el.phase.textContent,this.mode==="race")if(!this.greenReached)t="EMBREIE + ACELERE",this.ui.setPhase(this.foul?"QUEIMOU":this.phase==="tree"?"LUZES ACESAS":"PREPARE-SE");else if(this.playerFinished)t="FIM",this.ui.setPhase("FIM");else if(this.playerRunStart)t=e.wheelspin>.66?"PNEU CANTANDO":this.autoShift?"CÂMBIO AUTO":e.rpmNorm>.82?"▲ TROCA A MARCHA":"SEGURE O GÁS",this.ui.setPhase("CORRIDA");else{t="SOLTE A EMBREAGEM",this.ui.setPhase(this.foul?"QUEIMOU":"VAI!");const r=!this.foul&&this.playerSim.speed<.25;this.ui.showLaunch(r),r&&this.ui.setLaunchText("SOLTE A EMBREAGEM E PISA","VAI!")}this.ui.setGear(e.gear,t,e.rpmNorm),this.ui.setTimer(this.playerRunStart?this.playerFinished?this.playerET:this.raceClock-this.playerRunStart:0),this.ui.setDist(e.distance),this.rivalSim&&this.ui.setGap(e.distance,this.rivalSim.distance,bs),this.ui.setPedals(this.touchGas||this.keys.KeyW||this.keys.ArrowUp,this.playerClutchPressed()),this.ui.setWheel(this.steer);const n=e.speedKmh,i=this.mode==="race"?Ht((n-75)/150,0,.55):0;this.speedlines.style.opacity=String(i)}frame(e){const t=Math.min(.05,Math.max(1e-4,(e-this.last)/1e3));this.last=e,this.time+=t;const n=(this.keys.ArrowRight||this.keys.KeyD?1:0)+(this.keys.ArrowLeft||this.keys.KeyA?-1:0),i=n!==0?n:this.steerTarget;if(this.steer+=(i-this.steer)*Math.min(1,t*9),Math.abs(this.steer)<.002&&(this.steer=0),this.mode==="race"){this.updateRace(t),this.simAcc+=t;let o=0;for(;this.simAcc>=ji&&o<10;)this.stepRace(ji),this.simAcc-=ji,o++}this.updateCarVisuals(t),this.updateCamera(t),this.effects.update(t),this.track.update(this.time),this.mode==="race"?this.updateHud():this.mode==="result"&&(this.ui.setSpeed(this.playerSim.speedKmh),this.ui.setWheel(this.steer));const r=this.moonTarget.position;r.set(this.playerGroup.position.x,0,this.playerGroup.position.z),this.moon.position.set(r.x+28,60,r.z-18),this.moonTarget.updateMatrixWorld();const a={rpm:this.playerSim?this.playerSim.engineRpm:850,rpmNorm:this.playerSim?this.playerSim.rpmNorm:0,throttle:this.mode==="race"?this.playerInput().throttle:0,speed:this.playerSim?this.playerSim.speed:0,slip:this.playerSim?this.playerSim.wheelspin:0,racing:this.mode==="race"};if(this.audio.update(a),this.updateLiveScreens(t),this.renderer.render(this.scene,this.camera),this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.frameTimes.length===90&&this.time>4){const o=this.frameTimes.reduce((c,l)=>c+l,0)/this.frameTimes.length;!location.search.includes("hq")&&o>.045&&this.quality>.5&&(this.quality=.5,this.renderer.setPixelRatio(1),this.frameTimes.length=0)}requestAnimationFrame(o=>this.frame(o))}}function Gl(){window.__dragBrasil||(window.__dragBrasil=new O0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Gl,{once:!0}):Gl();
