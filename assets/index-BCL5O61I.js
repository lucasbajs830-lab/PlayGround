(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Qa="187",Oc=0,So=1,Bc=2,Ss=1,zc=2,xs=3,hi=0,en=1,vn=2,Vi=0,Wi=1,Fn=2,yo=3,Eo=4,Gc=5,Gi=100,kc=101,Hc=102,Vc=103,Wc=104,Xc=200,qc=201,Yc=202,$c=203,Il=204,Dl=205,Kc=206,Zc=207,Jc=208,Qc=209,jc=210,eh=211,th=212,nh=213,ih=214,ha=0,ua=1,da=2,ys=3,fa=4,pa=5,ma=6,ga=7,ja=0,sh=1,rh=2,Bn=0,Nl=1,Ul=2,Fl=3,eo=4,Ol=5,Bl=6,zl=7,Gl=300,Ji=301,Es=302,Ir=303,Dr=304,gr=1e3,On=1001,_a=1002,Vt=1003,ah=1004,Ds=1005,sn=1006,Nr=1007,Jn=1008,cn=1009,kl=1010,Hl=1011,Ts=1012,to=1013,Rn=1014,Mn=1015,Cn=1016,no=1017,io=1018,Qi=1020,Vl=35902,Wl=35899,Xl=1021,ql=1022,wn=1023,jn=1026,Qn=1027,so=1028,ro=1029,ui=1030,ao=1031,oo=1033,cr=33776,hr=33777,ur=33778,dr=33779,xa=35840,va=35841,Ma=35842,Sa=35843,ya=36196,Ea=37492,Ta=37496,ba=37488,wa=37489,_r=37490,Aa=37491,Ra=37808,Ca=37809,Pa=37810,La=37811,Ia=37812,Da=37813,Na=37814,Ua=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,Ga=37820,ka=37821,Ha=36492,Va=36494,Wa=36495,Xa=36283,qa=36284,xr=36285,Ya=36286,oh=3200,vr=0,lh=1,Kn="",jt="srgb",Mr="srgb-linear",Sr="linear",ut="srgb",Ur=7680,ch=519,hh=512,uh=513,dh=514,Yl=515,fh=516,ph=517,$l=518,Kl=519,Zl=35044,To="300 es",Sn=2e3,bs=2001;function mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gh(){const i=yr("canvas");return i.style.display="block",i}const bo={};function Er(...i){const e="THREE."+i.shift();console.log(e,...i)}function Jl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=Jl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Jl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xi(...i){const e=i.join(" ");e in bo||(bo[e]=!0,qe(...i))}function _h(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const xh={[ha]:ha,[da]:ma,[fa]:fa,[ys]:pa,[ua]:ua,[ma]:da,[ga]:ga,[pa]:ys};class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,$a=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function vh(i,e){return(i%e+e)%e}function Or(i,e,t){return(1-t)*i+t*e}function Mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ar(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ql(i,e){if(e.constructor===Float32Array)return i;const t=Ar(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function jl(i,e){if(e.constructor===Float32Array)return i;const t=Ar(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const mo=class mo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mo.prototype.isVector2=!0;let Ze=mo;class ts{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],d=r[a+0],m=r[a+1],_=r[a+2],S=r[a+3];if(p!==S||c!==d||l!==m||h!==_){let f=c*d+l*m+h*_+p*S;f<0&&(d=-d,m=-m,_=-_,S=-S,f=-f);let u=1-o;if(f<.9995){const M=Math.acos(f),b=Math.sin(M);u=Math.sin(u*M)/b,o=Math.sin(o*M)/b,c=c*u+d*o,l=l*u+m*o,h=h*u+_*o,p=p*u+S*o}else{c=c*u+d*o,l=l*u+m*o,h=h*u+_*o,p=p*u+S*o;const M=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=M,l*=M,h*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*p+c*m-l*d,e[t+1]=c*_+h*d+l*p-o*m,e[t+2]=l*_+h*m+o*d-c*p,e[t+3]=h*_-o*p-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),d=c(n/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*p+l*m*_,this._y=l*m*p-d*h*_,this._z=l*h*_+d*m*p,this._w=l*h*p-d*m*_;break;case"YXZ":this._x=d*h*p+l*m*_,this._y=l*m*p-d*h*_,this._z=l*h*_-d*m*p,this._w=l*h*p+d*m*_;break;case"ZXY":this._x=d*h*p-l*m*_,this._y=l*m*p+d*h*_,this._z=l*h*_+d*m*p,this._w=l*h*p-d*m*_;break;case"ZYX":this._x=d*h*p-l*m*_,this._y=l*m*p+d*h*_,this._z=l*h*_-d*m*p,this._w=l*h*p+d*m*_;break;case"YZX":this._x=d*h*p+l*m*_,this._y=l*m*p+d*h*_,this._z=l*h*_-d*m*p,this._w=l*h*p-d*m*_;break;case"XZY":this._x=d*h*p-l*m*_,this._y=l*m*p-d*h*_,this._z=l*h*_+d*m*p,this._w=l*h*p+d*m*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=n+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const go=class go{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};go.prototype.isVector3=!0;let N=go;const Br=new N,wo=new ts,_o=class _o{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],d=n[2],m=n[5],_=n[8],S=s[0],f=s[3],u=s[6],M=s[1],b=s[4],T=s[7],A=s[2],w=s[5],g=s[8];return r[0]=a*S+o*M+c*A,r[3]=a*f+o*b+c*w,r[6]=a*u+o*T+c*g,r[1]=l*S+h*M+p*A,r[4]=l*f+h*b+p*w,r[7]=l*u+h*T+p*g,r[2]=d*S+m*M+_*A,r[5]=d*f+m*b+_*w,r[8]=d*u+m*T+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*a-o*l,d=o*c-h*r,m=l*r-a*c,_=t*p+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(s*l-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=d*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zr.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zr.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_o.prototype.isMatrix3=!0;let $e=_o;const zr=new $e,Ao=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ro=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sh(){const i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:e,whitePoint:n,transfer:Sr,toXYZ:Ao,fromXYZ:Ro,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Ao,fromXYZ:Ro,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const rt=Sh();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class yh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xi===void 0&&(xi=yr("canvas")),xi.width=e.width,xi.height=e.height;const s=xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eh=0;class lo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gr(s[a].image)):r.push(Gr(s[a]))}else r=Gr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Th=0;const kr=new N;class $t extends di{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=On,s=On,r=sn,a=Jn,o=wn,c=cn,l=$t.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=fi(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kr).x}get height(){return this.source.getSize(kr).y}get depth(){return this.source.getSize(kr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Gl;$t.DEFAULT_ANISOTROPY=1;const xo=class xo{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],m=c[5],_=c[9],S=c[2],f=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-S)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+S)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,T=(m+1)/2,A=(u+1)/2,w=(h+d)/4,g=(p+S)/4,y=(_+f)/4;return b>T&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=g/n):T>A?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=w/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=y/r),this.set(n,s,r,t),this}let M=Math.sqrt((f-_)*(f-_)+(p-S)*(p-S)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(p-S)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xo.prototype.isVector4=!0;let bt=xo;class bh extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new $t({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new lo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ec extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wh extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wr=class wr{constructor(e,t,n,s,r,a,o,c,l,h,p,d,m,_,S,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,p,d,m,_,S,f)}set(e,t,n,s,r,a,o,c,l,h,p,d,m,_,S,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=d,u[3]=m,u[7]=_,u[11]=S,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*p,_=o*h,S=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=m+_*l,t[5]=d-S*l,t[9]=-o*c,t[2]=S-d*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*p,_=l*h,S=l*p;t[0]=d+S*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=S+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*p,_=l*h,S=l*p;t[0]=d-S*o,t[4]=-a*p,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=S-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*p,_=o*h,S=o*p;t[0]=c*h,t[4]=_*l-m,t[8]=d*l+S,t[1]=c*p,t[5]=S*l+d,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,_=o*c,S=o*l;t[0]=c*h,t[4]=S-d*p,t[8]=_*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*p+_,t[10]=d-S*p}else if(e.order==="XZY"){const d=a*c,m=a*l,_=o*c,S=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+S,t[5]=a*h,t[9]=m*p-_,t[2]=_*p-m,t[6]=o*h,t[10]=S*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,Rh)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Hn.crossVectors(n,an),Hn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Hn.crossVectors(n,an)),Hn.normalize(),Ns.crossVectors(an,Hn),s[0]=Hn.x,s[4]=Ns.x,s[8]=an.x,s[1]=Hn.y,s[5]=Ns.y,s[9]=an.y,s[2]=Hn.z,s[6]=Ns.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],d=n[9],m=n[13],_=n[2],S=n[6],f=n[10],u=n[14],M=n[3],b=n[7],T=n[11],A=n[15],w=s[0],g=s[4],y=s[8],U=s[12],L=s[1],D=s[5],F=s[9],W=s[13],C=s[2],k=s[6],K=s[10],z=s[14],ne=s[3],V=s[7],Q=s[11],ee=s[15];return r[0]=a*w+o*L+c*C+l*ne,r[4]=a*g+o*D+c*k+l*V,r[8]=a*y+o*F+c*K+l*Q,r[12]=a*U+o*W+c*z+l*ee,r[1]=h*w+p*L+d*C+m*ne,r[5]=h*g+p*D+d*k+m*V,r[9]=h*y+p*F+d*K+m*Q,r[13]=h*U+p*W+d*z+m*ee,r[2]=_*w+S*L+f*C+u*ne,r[6]=_*g+S*D+f*k+u*V,r[10]=_*y+S*F+f*K+u*Q,r[14]=_*U+S*W+f*z+u*ee,r[3]=M*w+b*L+T*C+A*ne,r[7]=M*g+b*D+T*k+A*V,r[11]=M*y+b*F+T*K+A*Q,r[15]=M*U+b*W+T*z+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],m=e[14],_=e[3],S=e[7],f=e[11],u=e[15],M=c*m-l*d,b=o*m-l*p,T=o*d-c*p,A=a*m-l*h,w=a*d-c*h,g=a*p-o*h;return t*(S*M-f*b+u*T)-n*(_*M-f*A+u*w)+s*(_*b-S*A+u*g)-r*(_*T-S*w+f*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],m=e[11],_=e[12],S=e[13],f=e[14],u=e[15],M=t*o-n*a,b=t*c-s*a,T=t*l-r*a,A=n*c-s*o,w=n*l-r*o,g=s*l-r*c,y=h*S-p*_,U=h*f-d*_,L=h*u-m*_,D=p*f-d*S,F=p*u-m*S,W=d*u-m*f,C=M*W-b*F+T*D+A*L-w*U+g*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/C;return e[0]=(o*W-c*F+l*D)*k,e[1]=(s*F-n*W-r*D)*k,e[2]=(S*g-f*w+u*A)*k,e[3]=(d*w-p*g-m*A)*k,e[4]=(c*L-a*W-l*U)*k,e[5]=(t*W-s*L+r*U)*k,e[6]=(f*T-_*g-u*b)*k,e[7]=(h*g-d*T+m*b)*k,e[8]=(a*F-o*L+l*y)*k,e[9]=(n*L-t*F-r*y)*k,e[10]=(_*w-S*T+u*M)*k,e[11]=(p*T-h*w-m*M)*k,e[12]=(o*U-a*D-c*y)*k,e[13]=(t*D-n*U+s*y)*k,e[14]=(S*b-_*A-f*M)*k,e[15]=(h*A-p*b+d*M)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,p=o+o,d=r*l,m=r*h,_=r*p,S=a*h,f=a*p,u=o*p,M=c*l,b=c*h,T=c*p,A=n.x,w=n.y,g=n.z;return s[0]=(1-(S+u))*A,s[1]=(m+T)*A,s[2]=(_-b)*A,s[3]=0,s[4]=(m-T)*w,s[5]=(1-(d+u))*w,s[6]=(f+M)*w,s[7]=0,s[8]=(_+b)*g,s[9]=(f-M)*g,s[10]=(1-(d+S))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),c=vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gn.copy(this);const l=1/a,h=1/o,p=1/c;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=p,gn.elements[9]*=p,gn.elements[10]*=p,t.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Sn,c=!1){const l=this.elements,h=2*r/(t-e),p=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s);let _,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===Sn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===bs)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn,c=!1){const l=this.elements,h=2/(t-e),p=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===Sn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===bs)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wr.prototype.isMatrix4=!0;let pt=wr;const vi=new N,gn=new pt,Ah=new N(0,0,0),Rh=new N(1,1,1),Hn=new N,Ns=new N,an=new N,Co=new pt,Po=new ts;class Gn{constructor(e=0,t=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Po.setFromEuler(this),this.setFromQuaternion(Po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const Lo=new N,Mi=new ts,Ln=new pt,Us=new N,as=new N,Ph=new N,Lh=new ts,Io=new N(1,0,0),Do=new N(0,1,0),No=new N(0,0,1),Uo={type:"added"},Ih={type:"removed"},Si={type:"childadded",child:null},Hr={type:"childremoved",child:null};class Ct extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new N,t=new Gn,n=new ts,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new $e}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Io,e)}rotateY(e){return this.rotateOnAxis(Do,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Lo.copy(e).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Io,e)}translateY(e){return this.translateOnAxis(Do,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Us.copy(e):Us.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(as,Us,this.up):Ln.lookAt(Us,as,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uo),Si.child=e,this.dispatchEvent(Si),Si.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ih),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uo),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ct.DEFAULT_UP=new N(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nt extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dh={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const f=t.getJointPose(S,n),u=this._getHandJoint(l,S);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Wr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=vh(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wr(a,r,e+1/3),this.g=Wr(a,r,e),this.b=Wr(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return rt.workingToColorSpace(Yt.copy(this),e),Math.round(st(Yt.r*255,0,255))*65536+Math.round(st(Yt.g*255,0,255))*256+Math.round(st(Yt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=jt){rt.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Fs);const n=Or(Vn.h,Fs.h,t),s=Or(Vn.s,Fs.s,t),r=Or(Vn.l,Fs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ke;Ke.NAMES=nc;class co{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new co(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ic extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _n=new N,In=new N,Xr=new N,Dn=new N,yi=new N,Ei=new N,Fo=new N,qr=new N,Yr=new N,$r=new N,Kr=new bt,Zr=new bt,Jr=new bt;class pn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),In.subVectors(n,t),Xr.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(In),c=_n.dot(Xr),l=In.dot(In),h=In.dot(Xr),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const d=1/p,m=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Kr.setScalar(0),Zr.setScalar(0),Jr.setScalar(0),Kr.fromBufferAttribute(e,t),Zr.fromBufferAttribute(e,n),Jr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kr,r.x),a.addScaledVector(Zr,r.y),a.addScaledVector(Jr,r.z),a}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),In.subVectors(e,t),_n.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),In.subVectors(this.a,this.b),_n.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;yi.subVectors(s,n),Ei.subVectors(r,n),qr.subVectors(e,n);const c=yi.dot(qr),l=Ei.dot(qr);if(c<=0&&l<=0)return t.copy(n);Yr.subVectors(e,s);const h=yi.dot(Yr),p=Ei.dot(Yr);if(h>=0&&p<=h)return t.copy(s);const d=c*p-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(yi,a);$r.subVectors(e,r);const m=yi.dot($r),_=Ei.dot($r);if(_>=0&&m<=_)return t.copy(r);const S=m*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ei,o);const f=h*_-m*p;if(f<=0&&p-h>=0&&m-_>=0)return Fo.subVectors(r,s),o=(p-h)/(p-h+(m-_)),t.copy(s).addScaledVector(Fo,o);const u=1/(f+S+d);return a=S*u,o=d*u,t.copy(n).addScaledVector(yi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Bs.subVectors(this.max,os),Ti.subVectors(e.a,os),bi.subVectors(e.b,os),wi.subVectors(e.c,os),Wn.subVectors(bi,Ti),Xn.subVectors(wi,bi),si.subVectors(Ti,wi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-si.z,si.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,si.z,0,-si.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-si.y,si.x,0];return!Qr(t,Ti,bi,wi,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,Ti,bi,wi,Bs))?!1:(zs.crossVectors(Wn,Xn),t=[zs.x,zs.y,zs.z],Qr(t,Ti,bi,wi,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new N,new N,new N,new N,new N,new N,new N,new N],xn=new N,Os=new pi,Ti=new N,bi=new N,wi=new N,Wn=new N,Xn=new N,si=new N,os=new N,Bs=new N,zs=new N,ri=new N;function Qr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),c=e.dot(ri),l=t.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Dt=new N,Gs=new Ze;let Nh=0;class rn extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=Mn,this.version=0,this._normalizationScale=e!==void 0?Ar(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ql(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):jl(e,this.array)}}class sc extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rc extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Uh=new pi,ls=new N,jr=new N;class ns{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(jr)),this.expandByPoint(ls.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fh=0;const un=new pt,ea=new Ct,Ai=new N,on=new pi,cs=new pi,Bt=new N;class tn extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?rc:sc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(on.min,cs.min),on.expandByPoint(Bt),Bt.addVectors(on.max,cs.max),on.expandByPoint(Bt)):(on.expandByPoint(cs.min),on.expandByPoint(cs.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Bt.fromBufferAttribute(o,l),c&&(Ai.fromBufferAttribute(e,l),Bt.add(Ai)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new N,c[U]=new N;const h=new N,p=new N,d=new N,m=new Ze,_=new Ze,S=new Ze,f=new N,u=new N;function M(U,L,D){l[U]=l[L]=l[D]=1,h.fromBufferAttribute(n,U),p.fromBufferAttribute(n,L),d.fromBufferAttribute(n,D),m.fromBufferAttribute(r,U),_.fromBufferAttribute(r,L),S.fromBufferAttribute(r,D),p.sub(h),d.sub(h),_.sub(m),S.sub(m);const F=1/(_.x*S.y-S.x*_.y);isFinite(F)&&(f.copy(p).multiplyScalar(S.y).addScaledVector(d,-_.y).multiplyScalar(F),u.copy(d).multiplyScalar(_.x).addScaledVector(p,-S.x).multiplyScalar(F),o[U].add(f),o[L].add(f),o[D].add(f),c[U].add(u),c[L].add(u),c[D].add(u))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,L=b.length;U<L;++U){const D=b[U],F=D.start,W=D.count;for(let C=F,k=F+W;C<k;C+=3)M(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const T=new N,A=new N,w=new N,g=new N;function y(U){w.fromBufferAttribute(s,U),g.copy(w);const L=o[U];T.copy(L),T.sub(w.multiplyScalar(w.dot(L))).normalize(),A.crossVectors(g,L);const F=A.dot(c[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,F)}for(let U=0,L=n.count;U<L;++U)l[U]&&y(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,p=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),S=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,p=o.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let S=0,f=c.length;S<f;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let u=0;u<h;u++)d[_++]=l[m++]}return new rn(d,h,p)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){const m=l[p];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],p=r[l];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Oo(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Oo(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Oo(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=fi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Jt=new N;class Tr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Ar(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ql(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):jl(e,this.data.array)}}const ta=new N,Bh=new N,zh=new $e;class Yn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ta.subVectors(n,t).cross(Bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ta),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),s=this.coplanarPoint(ta).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Gh=0;class ti extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Wi,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Dl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ki extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ri;const hs=new N,Ci=new N,Pi=new N,Li=new Ze,us=new Ze,ac=new pt,ks=new N,ds=new N,Hs=new N,Bo=new Ze,na=new Ze,zo=new Ze;class vs extends Ct{constructor(e=new ki){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oh(t,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new Tr(n,3,0,!1)),Ri.setAttribute("uv",new Tr(n,2,3,!1))}this.geometry=Ri,this.material=e,this.center=new Ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),ac.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Pi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Vs(ks.set(-.5,-.5,0),Pi,a,Ci,s,r),Vs(ds.set(.5,-.5,0),Pi,a,Ci,s,r),Vs(Hs.set(.5,.5,0),Pi,a,Ci,s,r),Bo.set(0,0),na.set(1,0),zo.set(1,1);let o=e.ray.intersectTriangle(ks,ds,Hs,!1,hs);if(o===null&&(Vs(ds.set(-.5,.5,0),Pi,a,Ci,s,r),na.set(0,1),o=e.ray.intersectTriangle(ks,Hs,ds,!1,hs),o===null))return;const c=e.ray.origin.distanceTo(hs);c<e.near||c>e.far||t.push({distance:c,point:hs.clone(),uv:pn.getInterpolation(hs,ks,ds,Hs,Bo,na,zo,new Ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Vs(i,e,t,n,s,r){Li.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(us.x=r*Li.x-s*Li.y,us.y=s*Li.x+r*Li.y):us.copy(Li),i.copy(e),i.x+=us.x,i.y+=us.y,i.applyMatrix4(ac)}const Un=new N,ia=new N,Ws=new N,Xs=new N;class oc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ia.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Xs.copy(this.origin).sub(ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),o=Xs.dot(this.direction),c=-Xs.dot(Ws),l=Xs.lengthSq(),h=Math.abs(1-a*a);let p,d,m,_;if(h>0)if(p=a*c-o,d=a*o-c,_=r*h,p>=0)if(d>=-_)if(d<=_){const S=1/h;p*=S,d*=S,m=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;else d=-r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;else d<=-_?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+d*(d+2*c)+l):d<=_?(p=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+d*(d+2*c)+l);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ia).addScaledVector(Ws,d),m}intersectSphere(e,t){if(e.radius<0)return null;Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=e.x-a.x,d=e.y-a.y,m=e.z-a.z,_=t.x-a.x,S=t.y-a.y,f=t.z-a.z,u=n.x-a.x,M=n.y-a.y,b=n.z-a.z,T=Math.abs(c),A=Math.abs(l),w=Math.abs(h);let g,y,U,L,D,F,W,C,k,K,z,ne;if(T>=A&&T>=w?(U=c,F=p,k=_,ne=u,c>=0?(g=l,y=h,L=d,D=m,W=S,C=f,K=M,z=b):(g=h,y=l,L=m,D=d,W=f,C=S,K=b,z=M)):A>=w?(U=l,F=d,k=S,ne=M,l>=0?(g=h,y=c,L=m,D=p,W=f,C=_,K=b,z=u):(g=c,y=h,L=p,D=m,W=_,C=f,K=u,z=b)):(U=h,F=m,k=f,ne=b,h>=0?(g=c,y=l,L=p,D=d,W=_,C=S,K=u,z=M):(g=l,y=c,L=d,D=p,W=S,C=_,K=M,z=u)),U===0)return null;const V=g/U,Q=y/U,ee=1/U,ye=L-V*F,He=D-Q*F,q=W-V*k,le=C-Q*k,Se=K-V*ne,Be=z-Q*ne,xe=Se*le-Be*q,Ve=ye*Be-He*Se,vt=q*He-le*ye;if(s){if(xe<0||Ve<0||vt<0)return null}else if((xe<0||Ve<0||vt<0)&&(xe>0||Ve>0||vt>0))return null;const ie=xe+Ve+vt;if(ie===0)return null;const Ee=ee*(xe*F+Ve*k+vt*ne);return(ie>0?Ee<0:Ee>0)?null:this.at(Ee/ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Go=new pt,ai=new oc,qs=new ns,ko=new N,Ys=new N,$s=new N,Ks=new N,sa=new N,Zs=new N,Ho=new N,Js=new N;class te extends Ct{constructor(e=new tn,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],p=r[c];h!==0&&(sa.fromBufferAttribute(p,e),a?Zs.addScaledVector(sa,h):Zs.addScaledVector(sa.sub(t),h))}t.add(Zs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(qs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(qs,ko)===null||ai.origin.distanceToSquared(ko)>(e.far-e.near)**2))&&(Go.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Go),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const f=d[_],u=a[f.materialIndex],M=Math.max(f.start,m.start),b=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let T=M,A=b;T<A;T+=3){const w=o.getX(T),g=o.getX(T+1),y=o.getX(T+2);s=Qs(this,u,e,n,l,h,p,w,g,y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let f=_,u=S;f<u;f+=3){const M=o.getX(f),b=o.getX(f+1),T=o.getX(f+2);s=Qs(this,a,e,n,l,h,p,M,b,T),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const f=d[_],u=a[f.materialIndex],M=Math.max(f.start,m.start),b=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let T=M,A=b;T<A;T+=3){const w=T,g=T+1,y=T+2;s=Qs(this,u,e,n,l,h,p,w,g,y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let f=_,u=S;f<u;f+=3){const M=f,b=f+1,T=f+2;s=Qs(this,a,e,n,l,h,p,M,b,T),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function kh(i,e,t,n,s,r,a,o){let c;if(e.side===en?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===hi,o),c===null)return null;Js.copy(o),Js.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Js);return l<t.near||l>t.far?null:{distance:l,point:Js.clone(),object:i}}function Qs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ys),i.getVertexPosition(c,$s),i.getVertexPosition(l,Ks);const h=kh(i,e,t,n,Ys,$s,Ks,Ho);if(h){const p=new N;pn.getBarycoord(Ho,Ys,$s,Ks,p),s&&(h.uv=pn.getInterpolatedAttribute(s,o,c,l,p,new Ze)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,c,l,p,new Ze)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,c,l,p,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};pn.getNormal(Ys,$s,Ks,d.normal),h.face=d,h.barycoord=p}return h}class lc extends $t{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Vt,h=Vt,p,d){super(null,a,o,c,l,h,s,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo extends rn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ii=new pt,Wo=new pt,js=[],Xo=new pi,Hh=new pt,fs=new te,ps=new ns;class Vh extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),Xo.copy(e.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Xo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),ps.copy(e.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),Wo.multiplyMatrices(n,Ii),fs.matrixWorld=Wo,fs.raycast(e,js);for(let a=0,o=js.length;a<o;a++){const c=js[a];c.instanceId=r,c.object=this,t.push(c)}js.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lc(new Float32Array(s*this.count),s,this.count,so,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oi=new ns,Wh=new Ze(.5,.5),er=new N;class ws{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],d=r[6],m=r[7],_=r[8],S=r[9],f=r[10],u=r[11],M=r[12],b=r[13],T=r[14],A=r[15];if(s[0].setComponents(l-a,m-h,u-_,A-M).normalize(),s[1].setComponents(l+a,m+h,u+_,A+M).normalize(),s[2].setComponents(l+o,m+p,u+S,A+b).normalize(),s[3].setComponents(l-o,m-p,u-S,A-b).normalize(),n)s[4].setComponents(c,d,f,T).normalize(),s[5].setComponents(l-c,m-d,u-f,A-T).normalize();else if(s[4].setComponents(l-c,m-d,u-f,A-T).normalize(),t===Sn)s[5].setComponents(l+c,m+d,u+f,A+T).normalize();else if(t===bs)s[5].setComponents(c,d,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=Wh.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(er.x=s.normal.x>0?e.max.x:e.min.x,er.y=s.normal.y>0?e.max.y:e.min.y,er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const qo=new pt;class ho{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];qo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ws),n[s].setFromProjectionMatrix(qo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ws),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new ho().copy(this)}}class cc extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yo=new pt,Ka=new oc,tr=new ns,nr=new N;class hc extends Ct{constructor(e=new tn,t=new cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,e.ray.intersectsSphere(tr)===!1)return;Yo.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(Yo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=d,S=m;_<S;_++){const f=l.getX(_);nr.fromBufferAttribute(p,f),$o(nr,f,c,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=d,S=m;_<S;_++)nr.fromBufferAttribute(p,_),$o(nr,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $o(i,e,t,n,s,r,a){const o=Ka.distanceSqToPoint(i);if(o<t){const c=new N;Ka.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class uc extends $t{constructor(e=[],t=Ji,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dc extends $t{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ji extends $t{constructor(e,t,n=Rn,s,r,a,o=Vt,c=Vt,l,h=jn,p=1){if(h!==jn&&h!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class fc extends ji{constructor(e,t=Rn,n=Ji,s,r,a=Vt,o=Vt,c,l=jn){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pc extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ke extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],p=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function _(S,f,u,M,b,T,A,w,g,y,U){const L=T/g,D=A/y,F=T/2,W=A/2,C=w/2,k=g+1,K=y+1;let z=0,ne=0;const V=new N;for(let Q=0;Q<K;Q++){const ee=Q*D-W;for(let ye=0;ye<k;ye++){const He=ye*L-F;V[S]=He*M,V[f]=ee*b,V[u]=C,l.push(V.x,V.y,V.z),V[S]=0,V[f]=0,V[u]=w>0?1:-1,h.push(V.x,V.y,V.z),p.push(ye/g),p.push(1-Q/y),z+=1}}for(let Q=0;Q<y;Q++)for(let ee=0;ee<g;ee++){const ye=d+ee+k*Q,He=d+ee+k*(Q+1),q=d+(ee+1)+k*(Q+1),le=d+(ee+1)+k*Q;c.push(ye,He,le),c.push(He,q,le),ne+=6}o.addGroup(m,ne,U),m+=ne,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ci extends tn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new N,h=new Ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){const m=n+p/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(o,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class St extends tn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],d=[],m=[];let _=0;const S=[],f=n/2;let u=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(m,2));function M(){const T=new N,A=new N;let w=0;const g=(t-e)/n;for(let y=0;y<=r;y++){const U=[],L=y/r,D=L*(t-e)+e;for(let F=0;F<=s;F++){const W=F/s,C=W*c+o,k=Math.sin(C),K=Math.cos(C);A.x=D*k,A.y=-L*n+f,A.z=D*K,p.push(A.x,A.y,A.z),T.set(k,g,K).normalize(),d.push(T.x,T.y,T.z),m.push(W,1-L),U.push(_++)}S.push(U)}for(let y=0;y<s;y++)for(let U=0;U<r;U++){const L=S[U][y],D=S[U+1][y],F=S[U+1][y+1],W=S[U][y+1];(e>0||U!==0)&&(h.push(L,D,W),w+=3),(t>0||U!==r-1)&&(h.push(D,F,W),w+=3)}l.addGroup(u,w,0),u+=w}function b(T){const A=_,w=new Ze,g=new N;let y=0;const U=T===!0?e:t,L=T===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,f*L,0),d.push(0,L,0),m.push(.5,.5),_++;const D=_;for(let F=0;F<=s;F++){const C=F/s*c+o,k=Math.cos(C),K=Math.sin(C);g.x=U*K,g.y=f*L,g.z=U*k,p.push(g.x,g.y,g.z),d.push(0,L,0),w.x=k*.5+.5,w.y=K*.5*L+.5,m.push(w.x,w.y),_++}for(let F=0;F<s;F++){const W=A+F,C=D+F;T===!0?h.push(C,C+1,W):h.push(C+1,C,W),y+=3}l.addGroup(u,y,T===!0?1:2),u+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uo extends St{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new uo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dt extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=e/o,d=t/c,m=[],_=[],S=[],f=[];for(let u=0;u<h;u++){const M=u*d-a;for(let b=0;b<l;b++){const T=b*p-r;_.push(T,-M,0),S.push(0,0,1),f.push(b/o),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){const b=M+l*u,T=M+l*(u+1),A=M+1+l*(u+1),w=M+1+l*u;m.push(b,T,w),m.push(T,A,w)}this.setIndex(m),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yi extends tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],p=new N,d=new N,m=[],_=[],S=[],f=[];for(let u=0;u<=n;u++){const M=[],b=u/n,T=a+b*o,A=e*Math.cos(T),w=Math.sqrt(e*e-A*A);let g=0;u===0&&a===0?g=.5/t:u===n&&c===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){const U=y/t,L=s+U*r;p.x=-w*Math.cos(L),p.y=A,p.z=w*Math.sin(L),_.push(p.x,p.y,p.z),d.copy(p).normalize(),S.push(d.x,d.y,d.z),f.push(U+g,1-b),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){const b=h[u][M+1],T=h[u][M],A=h[u+1][M],w=h[u+1][M+1];(u!==0||a>0)&&m.push(b,T,w),(u!==n-1||c<Math.PI)&&m.push(T,A,w)}this.setIndex(m),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $i extends tn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],p=[],d=new N,m=new N,_=new N;for(let S=0;S<=n;S++){const f=a+S/n*o;for(let u=0;u<=s;u++){const M=u/s*r;m.x=(e+t*Math.cos(f))*Math.cos(M),m.y=(e+t*Math.cos(f))*Math.sin(M),m.z=t*Math.sin(f),l.push(m.x,m.y,m.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),_.subVectors(m,d).normalize(),h.push(_.x,_.y,_.z),p.push(u/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let f=1;f<=s;f++){const u=(s+1)*S+f-1,M=(s+1)*(S-1)+f-1,b=(s+1)*(S-1)+f,T=(s+1)*S+f;c.push(u,M,T),c.push(M,b,T)}this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Ko(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ko(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=es(i[t]);for(const s in n)e[s]=n[s]}return e}function Ko(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const qh={clone:es,merge:Qt};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=Xh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kh extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fe extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zh extends Fe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Jh extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ja,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qh extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jh extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fo extends Ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class eu extends fo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ra=new pt,Zo=new N,Jo=new N;class gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zo),Jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ra,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===bs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ir=new N,sr=new ts,En=new N;class _c extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ir,sr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,sr,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ir,sr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,sr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qn=new N,Qo=new Ze,jo=new Ze;class fn extends _c{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Qo,jo),t.subVectors(jo,Qo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tu extends gc{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class Rr extends fo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class xc extends _c{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nu extends gc{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iu extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Di=-90,Ni=1;class Za extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Di,Ni,e,t);s.layers=this.layers,this.add(s);const r=new fn(Di,Ni,e,t);r.layers=this.layers,this.add(r);const a=new fn(Di,Ni,e,t);a.layers=this.layers,this.add(a);const o=new fn(Di,Ni,e,t);o.layers=this.layers,this.add(o);const c=new fn(Di,Ni,e,t);c.layers=this.layers,this.add(c);const l=new fn(Di,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class su extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function el(i,e,t,n){const s=ru(n);switch(t){case Xl:return i*e;case so:return i*e/s.components*s.byteLength;case ro:return i*e/s.components*s.byteLength;case ui:return i*e*2/s.components*s.byteLength;case ao:return i*e*2/s.components*s.byteLength;case ql:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case oo:return i*e*4/s.components*s.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:case Sa:return Math.max(i,16)*Math.max(e,8)/4;case xa:case Ma:return Math.max(i,8)*Math.max(e,8)/2;case ya:case Ea:case ba:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case _r:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ha:case Va:case Wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xr:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ru(i){switch(i){case cn:case kl:return{byteLength:1,components:1};case Ts:case Hl:case Cn:return{byteLength:2,components:1};case no:case io:return{byteLength:2,components:4};case Rn:case to:case Mn:return{byteLength:4,components:1};case Vl:case Wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function vc(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function au(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<p.length;m++){const _=p[d],S=p[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,p[d]=S)}p.length=d+1;for(let m=0,_=p.length;m<_;m++){const S=p[m];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lu=`#ifdef USE_ALPHAHASH
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
#endif`,cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fu=`#ifdef USE_AOMAP
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
#endif`,pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mu=`#ifdef USE_BATCHING
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
#endif`,gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
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
#endif`,Su=`#ifdef USE_BUMPMAP
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
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ru=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pu=`#define PI 3.141592653589793
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
} // validated`,Lu=`vec3 transformedNormal = objectNormal;
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
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ou=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yu=`#ifdef USE_GRADIENTMAP
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
}`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ju=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qu=`#ifdef USE_ENVMAP
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
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
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
#endif`,sd=`uniform sampler2D dfgLUT;
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
}`,rd=`
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Md=`#if defined( USE_MORPHCOLORS )
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
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xd=`float getShadowMask() {
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
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ef=`#ifdef USE_TRANSMISSION
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
#endif`,tf=`#ifdef USE_TRANSMISSION
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
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lf=`uniform sampler2D t2D;
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform float backgroundBlurriness;
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`#include <common>
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
}`,pf=`#if DEPTH_PACKING == 3200
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
}`,mf=`#define DISTANCE
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
}`,gf=`#define DISTANCE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,yf=`uniform vec3 diffuse;
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
}`,Ef=`#define LAMBERT
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
}`,Tf=`#define LAMBERT
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
}`,bf=`#define MATCAP
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
}`,wf=`#define MATCAP
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
}`,Af=`#define NORMAL
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
}`,Rf=`#define NORMAL
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
}`,Cf=`#define PHONG
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
}`,Pf=`#define PHONG
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
}`,Lf=`#define STANDARD
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
}`,If=`#define STANDARD
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
}`,Df=`#define TOON
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
}`,Nf=`#define TOON
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
}`,Uf=`uniform float size;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Of=`#include <common>
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
}`,Bf=`uniform vec3 color;
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
}`,zf=`uniform float rotation;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:ou,alphahash_pars_fragment:lu,alphamap_fragment:cu,alphamap_pars_fragment:hu,alphatest_fragment:uu,alphatest_pars_fragment:du,aomap_fragment:fu,aomap_pars_fragment:pu,batching_pars_vertex:mu,batching_vertex:gu,begin_vertex:_u,beginnormal_vertex:xu,bsdfs:vu,iridescence_fragment:Mu,bumpmap_pars_fragment:Su,clipping_planes_fragment:yu,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:bu,color_fragment:wu,color_pars_fragment:Au,color_pars_vertex:Ru,color_vertex:Cu,common:Pu,defaultnormal_vertex:Lu,displacementmap_pars_vertex:Iu,displacementmap_vertex:Du,emissivemap_fragment:Nu,emissivemap_pars_fragment:Uu,colorspace_fragment:Fu,colorspace_pars_fragment:Ou,envmap_fragment:Bu,envmap_common_pars_fragment:zu,envmap_pars_fragment:Gu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:Qu,envmap_vertex:Hu,fog_vertex:Vu,fog_pars_vertex:Wu,fog_fragment:Xu,fog_pars_fragment:qu,gradientmap_pars_fragment:Yu,lightmap_pars_fragment:$u,lights_lambert_fragment:Ku,lights_lambert_pars_fragment:Zu,lights_pars_begin:Ju,lights_toon_fragment:ju,lights_toon_pars_fragment:ed,lights_phong_fragment:td,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:sd,lights_fragment_begin:rd,lights_fragment_maps:ad,lights_fragment_end:od,lightprobes_pars_fragment:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:dd,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:xd,morphinstance_vertex:vd,morphcolor_vertex:Md,morphnormal_vertex:Sd,morphtarget_pars_vertex:yd,morphtarget_vertex:Ed,normal_fragment_begin:Td,normal_fragment_maps:bd,normal_pars_fragment:wd,normal_pars_vertex:Ad,normal_vertex:Rd,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Dd,opaque_fragment:Nd,packing:Ud,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Bd,dithering_pars_fragment:zd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Hd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:$d,skinnormal_vertex:Kd,specularmap_fragment:Zd,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:jd,transmission_fragment:ef,transmission_pars_fragment:tf,uv_pars_fragment:nf,uv_pars_vertex:sf,uv_vertex:rf,worldpos_vertex:af,background_vert:of,background_frag:lf,backgroundCube_vert:cf,backgroundCube_frag:hf,cube_vert:uf,cube_frag:df,depth_vert:ff,depth_frag:pf,distance_vert:mf,distance_frag:gf,equirect_vert:_f,equirect_frag:xf,linedashed_vert:vf,linedashed_frag:Mf,meshbasic_vert:Sf,meshbasic_frag:yf,meshlambert_vert:Ef,meshlambert_frag:Tf,meshmatcap_vert:bf,meshmatcap_frag:wf,meshnormal_vert:Af,meshnormal_frag:Rf,meshphong_vert:Cf,meshphong_frag:Pf,meshphysical_vert:Lf,meshphysical_frag:If,meshtoon_vert:Df,meshtoon_frag:Nf,points_vert:Uf,points_frag:Ff,shadow_vert:Of,shadow_frag:Bf,sprite_vert:zf,sprite_frag:Gf},ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},bn={basic:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([ve.points,ve.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([ve.common,ve.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([ve.sprite,ve.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Qt([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Qt([ve.lights,ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};bn.physical={uniforms:Qt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const rr={r:0,b:0,g:0},kf=new pt,Mc=new $e;Mc.set(-1,0,0,0,1,0,0,0,1);function Hf(i,e,t,n,s,r){const a=new Ke(0);let o=s===!0?0:1,c,l,h=null,p=0,d=null;function m(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const T=M.backgroundBlurriness>0;b=e.get(b,T)}return b}function _(M){let b=!1;const T=m(M);T===null?f(a,o):T&&T.isColor&&(f(T,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,b){const T=m(b);T&&T.isCubeTexture?(l===void 0&&(l=new te(new ke(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:es(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(kf.makeRotationFromEuler(b.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Mc),l.material.toneMapped=rt.getTransfer(T.colorSpace)!==ut,(h!==T||p!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,p=T.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new te(new dt(2,2),new ei({name:"BackgroundMaterial",uniforms:es(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=rt.getTransfer(T.colorSpace)!==ut,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||p!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,p=T.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,b){M.getRGB(rr,mc(i)),t.buffers.color.setClear(rr.r,rr.g,rr.b,b,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:_,addToRenderList:S,dispose:u}}function Vf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(D,F,W,C,k){let K=!1;const z=p(D,C,W,F);r!==z&&(r=z,l(r.object)),K=m(D,C,W,k),K&&_(D,C,W,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,T(D,F,W,C),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function p(D,F,W,C){const k=C.wireframe===!0;let K=n[F.id];K===void 0&&(K={},n[F.id]=K);const z=D.isInstancedMesh===!0?D.id:0;let ne=K[z];ne===void 0&&(ne={},K[z]=ne);let V=ne[W.id];V===void 0&&(V={},ne[W.id]=V);let Q=V[k];return Q===void 0&&(Q=d(c()),V[k]=Q),Q}function d(D){const F=[],W=[],C=[];for(let k=0;k<t;k++)F[k]=0,W[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:C,object:D,attributes:{},index:null}}function m(D,F,W,C){const k=r.attributes,K=F.attributes;let z=0;const ne=W.getAttributes();for(const V in ne)if(ne[V].location>=0){const ee=k[V];let ye=K[V];if(ye===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),ee===void 0||ee.attribute!==ye||ye&&ee.data!==ye.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function _(D,F,W,C){const k={},K=F.attributes;let z=0;const ne=W.getAttributes();for(const V in ne)if(ne[V].location>=0){let ee=K[V];ee===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const ye={};ye.attribute=ee,ee&&ee.data&&(ye.data=ee.data),k[V]=ye,z++}r.attributes=k,r.attributesNum=z,r.index=C}function S(){const D=r.newAttributes;for(let F=0,W=D.length;F<W;F++)D[F]=0}function f(D){u(D,0)}function u(D,F){const W=r.newAttributes,C=r.enabledAttributes,k=r.attributeDivisors;W[D]=1,C[D]===0&&(i.enableVertexAttribArray(D),C[D]=1),k[D]!==F&&(i.vertexAttribDivisor(D,F),k[D]=F)}function M(){const D=r.newAttributes,F=r.enabledAttributes;for(let W=0,C=F.length;W<C;W++)F[W]!==D[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function b(D,F,W,C,k,K,z){z===!0?i.vertexAttribIPointer(D,F,W,k,K):i.vertexAttribPointer(D,F,W,C,k,K)}function T(D,F,W,C){S();const k=C.attributes,K=W.getAttributes(),z=F.defaultAttributeValues;for(const ne in K){const V=K[ne];if(V.location>=0){let Q=k[ne];if(Q===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const ee=Q.normalized,ye=Q.itemSize,He=e.get(Q);if(He===void 0)continue;const q=He.buffer,le=He.type,Se=He.bytesPerElement,Be=le===i.INT||le===i.UNSIGNED_INT||Q.gpuType===to;if(Q.isInterleavedBufferAttribute){const xe=Q.data,Ve=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,vt=Q.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)u(V.location+ie,xe.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ie=0;ie<V.locationSize;ie++)f(V.location+ie);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ie=0;ie<V.locationSize;ie++)b(V.location+ie,ye/V.locationSize,le,ee,Ve*Se,(vt+ye/V.locationSize*ie)*Se,Be)}else{if(Q.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)u(V.location+xe,Q.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<V.locationSize;xe++)f(V.location+xe);i.bindBuffer(i.ARRAY_BUFFER,q);for(let xe=0;xe<V.locationSize;xe++)b(V.location+xe,ye/V.locationSize,le,ee,ye*Se,ye/V.locationSize*xe*Se,Be)}}else if(z!==void 0){const ee=z[ne];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(V.location,ee);break;case 3:i.vertexAttrib3fv(V.location,ee);break;case 4:i.vertexAttrib4fv(V.location,ee);break;default:i.vertexAttrib1fv(V.location,ee)}}}}M()}function A(){U();for(const D in n){const F=n[D];for(const W in F){const C=F[W];for(const k in C){const K=C[k];for(const z in K)h(K[z].object),delete K[z];delete C[k]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const W in F){const C=F[W];for(const k in C){const K=C[k];for(const z in K)h(K[z].object),delete K[z];delete C[k]}}delete n[D.id]}function g(D){for(const F in n){const W=n[F];for(const C in W){const k=W[C];if(k[D.id]===void 0)continue;const K=k[D.id];for(const z in K)h(K[z].object),delete K[z];delete k[D.id]}}}function y(D){for(const F in n){const W=n[F],C=D.isInstancedMesh===!0?D.id:0,k=W[C];if(k!==void 0){for(const K in k){const z=k[K];for(const ne in z)h(z[ne].object),delete z[ne];delete k[K]}delete W[C],Object.keys(W).length===0&&delete n[F]}}}function U(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:f,disableUnusedAttributes:M}}function Wf(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let m=0;m<h;m++)d+=l[m];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Xf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==wn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const y=g===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==cn&&g!==Mn&&!y&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:T,maxSamples:A,samples:w}}function qf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Yn,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||n!==0||s;return s=d,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,m){const _=p.clippingPlanes,S=p.clipIntersection,f=p.clipShadows,u=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?h(null):l();else{const M=r?0:n,b=M*4;let T=u.clippingState||null;c.value=T,T=h(_,d,b,m);for(let A=0;A!==b;++A)T[A]=t[A];u.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,m,_){const S=p!==null?p.length:0;let f=null;if(S!==0){if(f=c.value,_!==!0||f===null){const u=m+S*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<u)&&(f=new Float32Array(u));for(let b=0,T=m;b!==S;++b,T+=4)a.copy(p[b]).applyMatrix4(M,o),a.normal.toArray(f,T),f[T+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,f}}class po extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Vi});r.uniforms.tEquirect.value=t;const a=new te(s,r),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=sn),new Za(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const tl=256,Yf=3,$f=20,Sc=256,yc=16,Kf=3,Zf=new N,Jf=new Ke;class As{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Za(1,10,null),this._boxMesh=new te(new ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Zf}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const p=c.autoClear,d=c.autoClearColor,m=c.autoClearDepth,_=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(Jf));const f=new Za(n,s,h);return f.position.copy(o),f.update(c,e),c.autoClear=p,c.autoClearColor=d,c.autoClearDepth=m,c.autoClearStencil=_,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(tl,Mh(e))}_fromTexture(e,t){e.mapping===Ji||e.mapping===Es?this._setSize(e.image.length===0?tl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=nl(e,!1,!1),n=Math.log2(e)-Yf;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ji||e.mapping===Es?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=il()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Qf(),this._integrationMaterial=jf());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/yc);for(let a=0;a<=n;a++){const o=As.lodToRoughness(a,n);if(a>n-Kf)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Sc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ep());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function nl(i,e,t){return new po(i,{minFilter:Jn,generateMipmaps:e,type:Cn,colorSpace:Mr,depthBuffer:t})}function Cs(i,e,t){return new ei({name:i,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:en,blending:Vi,depthTest:!1,depthWrite:!1})}function Qf(){return Cs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sc}u

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
	`)}function jf(){return Cs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yc}},`

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
	`)}function ep(){return Cs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$f}
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
	`)}function il(){return Cs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function sl(){return Cs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===Ir||m===Dr)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new po(_.height);return S.fromEquirectangularTexture(i,d),e.set(d,S),d.addEventListener("dispose",l),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const m=d.mapping,_=m===Ir||m===Dr,S=m===Ji||m===Es;if(_||S){let f=t.get(d);const u=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new As(i)),f=_?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),f.texture;if(f!==void 0)return f.texture;{const M=d.image;return _&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new As(i)),f=_?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),d.addEventListener("dispose",h),f.texture):null}}}return d}function o(d,m){return m===Ir?d.mapping=Ji:m===Dr&&(d.mapping=Es),d}function c(d){let m=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&m++;return m===_}function l(d){const m=d.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function np(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function ip(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const f in _.attributes)e.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const S=r.get(_);S&&(e.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(_){const S=_.attributes;for(const f in S)e.update(S[f],i.ARRAY_BUFFER)}function p(_){const S=_.index,f=_.attributes.position;let u=0;if(f===void 0)return;const M=S!==null?S.array.length:f.array.length/3-1,b=f.count>=65535?rc:sc,T=new b(Math.ceil(M/3)*6,1),A=T.array;if(S!==null){const g=S.array;u=S.version;for(let y=0,U=0;y<M;y+=3){const L=g[y+0],D=g[y+1],F=g[y+2];A[U++]=L,A[U++]=D,A[U++]=D,A[U++]=F,A[U++]=F,A[U++]=L}}else{u=f.version;for(let g=0,y=0;g<M;g+=3){const U=g+0,L=g+1,D=g+2;A[y++]=U,A[y++]=L,A[y++]=L,A[y++]=D,A[y++]=D,A[y++]=U}}T.version=u;const w=r.get(_);w&&e.remove(w),r.set(_,T)}function d(_){const S=r.get(_);if(S){const f=_.index;f!==null&&S.version<f.version&&p(_)}else p(_);return r.get(_)}function m(){for(const _ in s){const S=s[_].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:d,dispose:m}}function sp(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*a),t.update(d,n,1)}function l(p,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,p*a,m),t.update(d,n,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,m);let S=0;for(let f=0;f<m;f++)S+=d[f];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function rp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ap(i,e,t){const n=new WeakMap,s=new bt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let L=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var m=L;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),f===!0&&(T=3);let A=o.attributes.position.count*T,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const g=new Float32Array(A*w*4*p),y=new ec(g,A,w,p);y.type=Mn,y.needsUpdate=!0;const U=T*4;for(let D=0;D<p;D++){const F=u[D],W=M[D],C=b[D],k=A*w*4*D;for(let K=0;K<F.count;K++){const z=K*U;_===!0&&(s.fromBufferAttribute(F,K),g[k+z+0]=s.x,g[k+z+1]=s.y,g[k+z+2]=s.z,g[k+z+3]=0),S===!0&&(s.fromBufferAttribute(W,K),g[k+z+4]=s.x,g[k+z+5]=s.y,g[k+z+6]=s.z,g[k+z+7]=0),f===!0&&(s.fromBufferAttribute(C,K),g[k+z+8]=s.x,g[k+z+9]=s.y,g[k+z+10]=s.z,g[k+z+11]=C.itemSize===4?s.w:1)}}d={count:p,texture:y,size:new Ze(A,w)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let f=0;f<l.length;f++)_+=l[f];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function op(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,p=l.geometry,d=e.get(l,p);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const lp={[Nl]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[eo]:"ACES_FILMIC_TONE_MAPPING",[Bl]:"AGX_TONE_MAPPING",[zl]:"NEUTRAL_TONE_MAPPING",[Ol]:"CUSTOM_TONE_MAPPING"};function cp(i,e,t,n,s,r){const a=new An(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new tn;h.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const p=new Kh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new te(h,p),m=new xc(-1,1,1,-1,0,1);let _=null,S=null,f=!1,u,M=null,b=[],T=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),c!==null&&c.setSize(A,w);for(let g=0;g<b.length;g++){const y=b[g];y.setSize&&y.setSize(A,w)}},this.setEffects=function(A){b=A,T=b.length>0&&b[0].isRenderPass===!0;const w=a.width,g=a.height;b.length>0&&o===null&&(o=new An(w,g,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new An(w,g,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&b.some(U=>U.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new ji(w,g),r===!0&&(l.format=Qn,l.type=Qi)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let U=0;U<b.length;U++){const L=b[U];L.setSize&&L.setSize(w,g),y&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(l)}},this.begin=function(A,w){if(f||A.toneMapping===Bn&&b.length===0)return!1;if(M=w,w!==null){const g=w.width,y=w.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return T===!1&&A.setRenderTarget(a),u=A.toneMapping,A.toneMapping=Bn,!0},this.hasRenderPass=function(){return T},this.end=function(A,w){A.toneMapping=u,f=!0;let g=a,y=o;for(let U=0;U<b.length;U++){const L=b[U];L.enabled!==!1&&(L.render(A,y,g,w),L.needsSwap!==!1&&(g=y,y=y===o?c:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,p.defines={},rt.getTransfer(_)===ut&&(p.defines.SRGB_TRANSFER="");const U=lp[S];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(M),A.render(d,m),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}const Ec=new $t,Tc=new ji(1,1),bc=new fc(1),wc=new ec,Ac=new wh,Rc=new uc,rl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=rl[s];if(r===void 0&&(r=new Float32Array(s),rl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cr(i,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),Ft(t,n)}}function mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),Ft(t,n)}}function gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),Ft(t,n)}}function _p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function Sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function Pr(i){return i.version===0&&(i.compareFunction=Kl,i.needsUpdate=!0),i}function bp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Pr(Tc):r=Ec,t.setTexture2D(e||r,s)}function wp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ac,s)}function Ap(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Pr(bc):r=Rc,t.setTextureCube(e||r,s)}function Rp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wc,s)}function Cp(i){switch(i){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return xp;case 35668:case 35672:return vp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return yp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}function Pp(i,e){i.uniform1fv(this.addr,e)}function Lp(i,e){const t=is(e,this.size,2);i.uniform2fv(this.addr,t)}function Ip(i,e){const t=is(e,this.size,3);i.uniform3fv(this.addr,t)}function Dp(i,e){const t=is(e,this.size,4);i.uniform4fv(this.addr,t)}function Np(i,e){const t=is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Up(i,e){const t=is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fp(i,e){const t=is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Op(i,e){i.uniform1iv(this.addr,e)}function Bp(i,e){i.uniform2iv(this.addr,e)}function zp(i,e){i.uniform3iv(this.addr,e)}function Gp(i,e){i.uniform4iv(this.addr,e)}function kp(i,e){i.uniform1uiv(this.addr,e)}function Hp(i,e){i.uniform2uiv(this.addr,e)}function Vp(i,e){i.uniform3uiv(this.addr,e)}function Wp(i,e){i.uniform4uiv(this.addr,e)}function Xp(i,e,t){const n=this.cache,s=e.length,r=Cr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Pr(Tc):a=Ec;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function qp(i,e,t){const n=this.cache,s=e.length,r=Cr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ac,r[a])}function Yp(i,e,t){const n=this.cache,s=e.length,r=Cr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Pr(bc):a=Rc;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function $p(i,e,t){const n=this.cache,s=e.length,r=Cr(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wc,r[a])}function Kp(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Ip;case 35666:return Dp;case 35674:return Np;case 35675:return Up;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return Gp;case 5125:return kp;case 36294:return Hp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return $p}}class Zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cp(t.type)}}class Jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kp(t.type)}}class Qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function hl(i,e){i.seq.push(e),i.map[e.id]=e}function jp(i,e,t){const n=i.name,s=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hl(t,l===void 0?new Zp(o,i,e):new Jp(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Qp(o),hl(t,p)),t=p}}}class fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);jp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const em=37297;let tm=0;function nm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const dl=new $e;function im(i){rt._getMatrix(dl,rt.workingColorSpace,i);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Sr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+nm(i.getShaderSource(e),o)}else return r}function sm(i,e){const t=im(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const rm={[Nl]:"Linear",[Ul]:"Reinhard",[Fl]:"Cineon",[eo]:"ACESFilmic",[Bl]:"AgX",[zl]:"Neutral",[Ol]:"Custom"};function am(i,e){const t=rm[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ar=new N;function om(){rt.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),e=ar.y.toFixed(4),t=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function cm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ms(i){return i!==""}function pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(um,dm)}function dm(i,e){const t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ja(t)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(fm,pm)}function pm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mm={[Ss]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function gm(i){return mm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _m={[Es]:"ENVMAP_MODE_REFRACTION"};function xm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_m[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vm={[ja]:"ENVMAP_BLENDING_MULTIPLY",[sh]:"ENVMAP_BLENDING_MIX",[rh]:"ENVMAP_BLENDING_ADD"};function Mm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vm[i.combine]||"ENVMAP_BLENDING_NONE"}function Sm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=gm(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xm(t),p=Mm(t),d=lm(t),m=cm(r),_=s.createProgram();let S,f,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ms).join(`
`),S.length>0&&(S+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ms).join(`
`),f.length>0&&(f+=`
`)):(S=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),f=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?et.tonemapping_pars_fragment:"",t.toneMapping!==Bn?am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,sm("linearToOutputTexel",t.outputColorSpace),om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Ja(a),a=pl(a,t),a=ml(a,t),o=Ja(o),o=pl(o,t),o=ml(o,t),a=gl(a),o=gl(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,f=["#define varying in",t.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=u+S+a,b=u+f+o,T=ul(s,s.VERTEX_SHADER,M),A=ul(s,s.FRAGMENT_SHADER,b);s.attachShader(_,T),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(T)||"",W=s.getShaderInfoLog(A)||"",C=D.trim(),k=F.trim(),K=W.trim();let z=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,A);else{const V=fl(s,T,"vertex"),Q=fl(s,A,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+C+`
`+V+`
`+Q)}else C!==""?qe("WebGLProgram: Program Info Log:",C):(k===""||K==="")&&(ne=!1);ne&&(L.diagnostics={runnable:z,programLog:C,vertexShader:{log:k,prefix:S},fragmentShader:{log:K,prefix:f}})}s.deleteShader(T),s.deleteShader(A),g=new fr(s,_),y=hm(s,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,em)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let ym=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tm(e),t.set(e,n)),n}}class Tm{constructor(e){this.id=ym++,this.code=e,this.usedTimes=0}}function bm(i){return i===ui||i===_r||i===xr}function wm(i,e,t,n,s,r){const a=new tc,o=new Em,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,y,U,L,D,F){const W=L.fog,C=D.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=e.get(g.envMap||k,K),ne=d[g.type];let V=n.precision;g.precision!==null&&(V=n.getMaxPrecision(g.precision),V!==g.precision&&qe("WebGLProgram.getParameters:",g.precision,"not supported, using",V,"instead."));const Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=Q!==void 0?Q.length:0;let ye=0;C.morphAttributes.position!==void 0&&(ye=1),C.morphAttributes.normal!==void 0&&(ye=2),C.morphAttributes.color!==void 0&&(ye=3);let He,q,le,Se;if(ne){const pe=bn[ne];He=pe.vertexShader,q=pe.fragmentShader}else{He=g.vertexShader,q=g.fragmentShader;const pe=o.getVertexShaderStage(g),ot=o.getFragmentShaderStage(g);o.update(g,pe,ot),le=pe.id,Se=ot.id}const Be=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ve=D.isInstancedMesh===!0,vt=D.isBatchedMesh===!0,ie=!!g.map,Ee=!!g.matcap,ze=!!z,Oe=ze&&z.isPMREMTexture===!0,tt=!!g.aoMap,_t=!!g.lightMap,se=!!g.bumpMap&&g.wireframe===!1,j=!!g.normalMap,Te=!!g.displacementMap,Ae=!!g.emissiveMap,We=!!g.metalnessMap,at=!!g.roughnessMap,At=g.anisotropy>0,I=g.clearcoat>0,Rt=g.diffuseRoughness>0,ft=g.dispersion>0,mt=g.retroreflectivity>0,me=g.iridescence>0,Et=g.sheen>0,De=g.transmission>0,Xe=At&&!!g.anisotropyMap,E=I&&!!g.clearcoatMap,x=I&&!!g.clearcoatNormalMap,O=I&&!!g.clearcoatRoughnessMap,re=Rt&&!!g.diffuseRoughnessMap,J=me&&!!g.iridescenceMap,ce=me&&!!g.iridescenceThicknessMap,fe=Et&&!!g.sheenColorMap,Y=Et&&!!g.sheenRoughnessMap,$=!!g.specularMap,ue=!!g.specularColorMap,R=!!g.specularIntensityMap,Z=De&&!!g.transmissionMap,X=De&&!!g.thicknessMap,de=!!g.gradientMap,oe=!!g.alphaMap,he=g.alphaTest>0,Ie=!!g.alphaHash,Je=!!g.extensions;let ae=Bn;g.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Ue=Oe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Qe={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:He,fragmentShader:q,defines:g.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:V,batching:vt,batchingColor:vt&&D._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&D.instanceColor!==null,instancingMorph:Ve&&D.morphTexture!==null,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ie,matcap:Ee,envMap:ze,envMapMode:ze&&z.mapping,envMapPMREM:Oe,envMapMaxLod:Oe?Ue.length-1:null,envMapSize:Oe?Ue[0].width:null,aoMap:tt,lightMap:_t,bumpMap:se,normalMap:j,displacementMap:Te,emissiveMap:Ae,normalMapObjectSpace:j&&g.normalMapType===lh,normalMapTangentSpace:j&&g.normalMapType===vr,packedNormalMap:j&&g.normalMapType===vr&&bm(g.normalMap.format),metalnessMap:We,roughnessMap:at,anisotropy:At,anisotropyMap:Xe,clearcoat:I,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:O,diffuseRoughness:Rt,diffuseRoughnessMap:re,dispersion:ft,retroreflection:mt,iridescence:me,iridescenceMap:J,iridescenceThicknessMap:ce,sheen:Et,sheenColorMap:fe,sheenRoughnessMap:Y,specularMap:$,specularColorMap:ue,specularIntensityMap:R,transmission:De,transmissionMap:Z,thicknessMap:X,gradientMap:de,opaque:g.transparent===!1&&g.blending===Wi&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:Ie,combine:g.combine,mapUv:ie&&m(g.map.channel),aoMapUv:tt&&m(g.aoMap.channel),lightMapUv:_t&&m(g.lightMap.channel),bumpMapUv:se&&m(g.bumpMap.channel),normalMapUv:j&&m(g.normalMap.channel),displacementMapUv:Te&&m(g.displacementMap.channel),emissiveMapUv:Ae&&m(g.emissiveMap.channel),metalnessMapUv:We&&m(g.metalnessMap.channel),roughnessMapUv:at&&m(g.roughnessMap.channel),anisotropyMapUv:Xe&&m(g.anisotropyMap.channel),clearcoatMapUv:E&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&m(g.sheenRoughnessMap.channel),specularMapUv:$&&m(g.specularMap.channel),specularColorMapUv:ue&&m(g.specularColorMap.channel),specularIntensityMapUv:R&&m(g.specularIntensityMap.channel),transmissionMapUv:Z&&m(g.transmissionMap.channel),thicknessMapUv:X&&m(g.thicknessMap.channel),alphaMapUv:oe&&m(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(j||At),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(ie||oe),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&j===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:ie&&g.map.isVideoTexture===!0&&rt.getTransfer(g.map.colorSpace)===ut,decodeVideoTextureEmissive:Ae&&g.emissiveMap.isVideoTexture===!0&&rt.getTransfer(g.emissiveMap.colorSpace)===ut,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===vn,flipSided:g.side===en,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Je&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&g.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function S(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)y.push(U),y.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(f(y,g),u(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function f(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function u(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const y=d[g.type];let U;if(y){const L=bn[y];U=qh.clone(L.uniforms)}else U=g.uniforms;return U}function b(g,y){let U=h.get(y);return U!==void 0?++U.usedTimes:(U=new Sm(i,y,g,s),l.push(U),h.set(y,U)),U}function T(g){if(--g.usedTimes===0){const y=l.indexOf(g);l[y]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:M,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:w}}function Am(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,_,S,f,u){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:m,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:f,group:u},i[e]=M):(M.id=d.id,M.object=d,M.geometry=m,M.material=_,M.materialVariant=a(d),M.groupOrder=S,M.renderOrder=d.renderOrder,M.z=f,M.group=u),e++,M}function c(d,m,_,S,f,u,M){M.reversedDepth===!0&&(f=-f);const b=o(d,m,_,S,f,u);_.transmission>0?n.push(b):_.transparent===!0?s.push(b):t.push(b)}function l(d,m,_,S,f,u){const M=o(d,m,_,S,f,u);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,m){t.length>1&&t.sort(d||Rm),n.length>1&&n.sort(m||xl),s.length>1&&s.sort(m||xl)}function p(){for(let d=e,m=i.length;d<m;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function Cm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new vl,i.set(n,[a])):s>=r.length?(a=new vl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ke};break;case"SpotLight":t={position:new N,direction:new N,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Lm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Im=0;function Dm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nm(i){const e=new Pm,t=Lm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new pt,a=new pt;function o(l){let h=0,p=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,_=0,S=0,f=0,u=0,M=0,b=0,T=0,A=0,w=0,g=0,y=0,U=0,L=0;l.sort(Dm);for(let F=0,W=l.length;F<W;F++){const C=l[F],k=C.color,K=C.intensity,z=C.distance;let ne=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ui?ne=C.shadow.map.texture:ne=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=k.r*K,p+=k.g*K,d+=k.b*K;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],K);L++}else if(C.isSunLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=ne;const ye=Q.getViewportCount();for(let He=0;He<ye;He++)n.sunShadowMatrix[S+He]=Q.getMatrix(He),n.sunShadowCascade[S+He]=Q._cascadeData[He];S+=ye,_++}n.sun[m]=V,m++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=C.shadow.matrix,A++}n.directional[f]=V,f++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(k).multiplyScalar(K),V.distance=z,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[M]=V;const Q=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,Q.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[M]=Q.matrix,C.castShadow){const ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=ne,g++}M++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(k).multiplyScalar(K),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=V,b++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const Q=C.shadow,ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[u]=ee,n.pointShadowMap[u]=ne,n.pointShadowMatrix[u]=C.shadow.matrix,w++}n.point[u]=V,u++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(K),V.groundColor.copy(C.groundColor).multiplyScalar(K),n.hemi[T]=V,T++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;const D=n.hash;(D.sunLength!==m||D.directionalLength!==f||D.pointLength!==u||D.spotLength!==M||D.rectAreaLength!==b||D.hemiLength!==T||D.numSunShadows!==_||D.numDirectionalShadows!==A||D.numPointShadows!==w||D.numSpotShadows!==g||D.numSpotMaps!==y||D.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=f,n.spot.length=M,n.rectArea.length=b,n.point.length=u,n.hemi.length=T,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-U,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=L,D.sunLength=m,D.directionalLength=f,D.pointLength=u,D.spotLength=M,D.rectAreaLength=b,D.hemiLength=T,D.numSunShadows=_,D.numDirectionalShadows=A,D.numPointShadows=w,D.numSpotShadows=g,D.numSpotMaps=y,D.numLightProbes=L,n.version=Im++)}function c(l,h){let p=0,d=0,m=0,_=0,S=0,f=0;const u=h.matrixWorldInverse;for(let M=0,b=l.length;M<b;M++){const T=l[M];if(T.isSunLight){const A=n.sun[p];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(u),p++}else if(T.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),d++}else if(T.isSpotLight){const A=n.spot[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),_++}else if(T.isRectAreaLight){const A=n.rectArea[S];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(u),a.identity(),r.copy(T.matrixWorld),r.premultiply(u),a.extractRotation(r),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(T.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const A=n.hemi[f];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(u),f++}}}return{setup:o,setupView:c,state:n}}function Ml(i){const e=new Nm(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function c(){e.setup(t),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function l(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Um(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ml(i),e.set(s,[o])):r>=a.length?(o=new Ml(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
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
}`,Bm=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],zm=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Sl=new pt,ms=new N,oa=new N;function Gm(i,e,t){let n=new ws;const s=new Ze,r=new Ze,a=new bt,o=new Qh,c=new jh,l={},h=t.maxTextureSize,p={[hi]:en,[en]:hi,[vn]:vn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Fm,fragmentShader:Om}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new tn;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new te(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let u=this.type;this.render=function(w,g,y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===zc&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);const U=i.getRenderTarget(),L=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Vi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=u!==this.type;W&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(k=>k.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,k=w.length;C<k;C++){const K=w[C],z=K.shadow;if(z===void 0){qe("WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ne=z.getFrameExtents();s.multiply(ne),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===xs){if(K.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new An(s.x,s.y,{format:ui,type:Cn,minFilter:sn,magFilter:sn,generateMipmaps:!1}),z.map.texture.name=K.name+".shadowMap",z.map.depthTexture=new ji(s.x,s.y,Mn),z.map.depthTexture.name=K.name+".shadowMapDepth",z.map.depthTexture.format=jn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt}else K.isPointLight?(z.map=new po(s.x),z.map.depthTexture=new fc(s.x,Rn)):(z.map=new An(s.x,s.y),z.map.depthTexture=new ji(s.x,s.y,Rn)),z.map.depthTexture.name=K.name+".shadowMap",z.map.depthTexture.format=jn,this.type===Ss?(z.map.depthTexture.compareFunction=V?$l:Yl,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();K.isPointLight!==!0&&z.updateMatrices(K,y);const ee=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:y.layers;for(let ye=0;ye<Q;ye++){const He=z.getCamera(ye);if(K.isPointLight){const q=z.camera,le=z.matrix,Se=K.distance||q.far;Se!==q.far&&(q.far=Se,q.updateProjectionMatrix()),ms.setFromMatrixPosition(K.matrixWorld),q.position.copy(ms),oa.copy(q.position),oa.add(Bm[ye]),q.up.copy(zm[ye]),q.lookAt(oa),q.updateMatrixWorld(),le.makeTranslation(-ms.x,-ms.y,-ms.z),Sl.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Sl,q.coordinateSystem,q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ye),i.clear();else{ye===0&&(i.setRenderTarget(z.map),i.clear());const q=z.getViewport(ye);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),F.viewport(a)}n=z.getFrustum(ye),T(g,y,He,K,ee,this.type)}z.isPointLightShadow!==!0&&this.type===xs&&M(z,y),z.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(U,L,D)};function M(w,g){const y=e.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new An(s.x,s.y,{format:ui,type:Cn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(g,null,y,d,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(g,null,y,m,S,null)}function b(w,g,y,U){let L=null;const D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)L=D;else if(L=y.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=L.uuid,W=g.uuid;let C=l[F];C===void 0&&(C={},l[F]=C);let k=C[W];k===void 0&&(k=L.clone(),C[W]=k,g.addEventListener("dispose",A)),L=k}if(L.visible=g.visible,L.wireframe=g.wireframe,U===xs?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:p[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=i.properties.get(L);F.light=y}return L}function T(w,g,y,U,L,D){if(w.visible===!1)return;if(w.layers.test(L)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===xs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const C=e.update(w),k=w.material;if(Array.isArray(k)){const K=C.groups;for(let z=0,ne=K.length;z<ne;z++){const V=K[z],Q=k[V.materialIndex];if(Q&&Q.visible){const ee=b(w,Q,U,D);w.onBeforeShadow(i,w,g,y,C,ee,V),i.renderBufferDirect(y,null,C,ee,w,V),w.onAfterShadow(i,w,g,y,C,ee,V)}}}else if(k.visible){const K=b(w,k,U,D);w.onBeforeShadow(i,w,g,y,C,K,null),i.renderBufferDirect(y,null,C,K,w,null),w.onAfterShadow(i,w,g,y,C,K,null)}}const W=w.children;for(let C=0,k=W.length;C<k;C++)T(W[C],g,y,U,L,D)}function A(w){w.target.removeEventListener("dispose",A);for(const y in l){const U=l[y],L=w.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}function km(i,e){function t(){let R=!1;const Z=new bt;let X=null;const de=new bt(0,0,0,0);return{setMask:function(oe){X!==oe&&!R&&(i.colorMask(oe,oe,oe,oe),X=oe)},setLocked:function(oe){R=oe},setClear:function(oe,he,Ie,Je,ae){ae===!0&&(oe*=Je,he*=Je,Ie*=Je),Z.set(oe,he,Ie,Je),de.equals(Z)===!1&&(i.clearColor(oe,he,Ie,Je),de.copy(Z))},reset:function(){R=!1,X=null,de.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,X=null,de=null,oe=null;return{setReversed:function(he){if(Z!==he){const Ie=e.get("EXT_clip_control");he?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Z=he;const Je=oe;oe=null,this.setClear(Je)}},getReversed:function(){return Z},setTest:function(he){he?xe(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(he){X!==he&&!R&&(i.depthMask(he),X=he)},setFunc:function(he){if(Z&&(he=xh[he]),de!==he){switch(he){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=he}},setLocked:function(he){R=he},setClear:function(he){oe!==he&&(oe=he,Z&&(he=1-he),i.clearDepth(he))},reset:function(){R=!1,X=null,de=null,oe=null,Z=!1}}}function s(){let R=!1,Z=null,X=null,de=null,oe=null,he=null,Ie=null,Je=null,ae=null;return{setTest:function(Ue){R||(Ue?xe(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(Ue){Z!==Ue&&!R&&(i.stencilMask(Ue),Z=Ue)},setFunc:function(Ue,Qe,pe){(X!==Ue||de!==Qe||oe!==pe)&&(i.stencilFunc(Ue,Qe,pe),X=Ue,de=Qe,oe=pe)},setOp:function(Ue,Qe,pe){(he!==Ue||Ie!==Qe||Je!==pe)&&(i.stencilOp(Ue,Qe,pe),he=Ue,Ie=Qe,Je=pe)},setLocked:function(Ue){R=Ue},setClear:function(Ue){ae!==Ue&&(i.clearStencil(Ue),ae=Ue)},reset:function(){R=!1,Z=null,X=null,de=null,oe=null,he=null,Ie=null,Je=null,ae=null}}}const r=new t,a=new n,o=new s;let c={};const l=new WeakMap;let h={},p={},d={},m=new WeakMap,_=[],S=null,f=!1,u=null,M=null,b=null,T=null,A=null,w=null,g=null,y=new Ke(0,0,0),U=0,L=!1,D=null,F=null,W=null,C=null,k=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=ne>=2);let Q=null,ee={};const ye=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),q=new bt().fromArray(ye),le=new bt().fromArray(He);function Se(R,Z,X,de){const oe=new Uint8Array(4),he=i.createTexture();i.bindTexture(R,he),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<X;Ie++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(Z+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return he}const Be={};Be[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Be[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Be[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(i.DEPTH_TEST),a.setFunc(ys),se(!1),j(So),xe(i.CULL_FACE),tt(Vi);function xe(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ve(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function vt(R,Z){return d[R]!==Z?(i.bindFramebuffer(R,Z),d[R]=Z,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Z),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function ie(R,Z){let X=_,de=!1;if(R){X=m.get(Z),X===void 0&&(X=[],m.set(Z,X));const oe=R.textures;if(X.length!==oe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ie=oe.length;he<Ie;he++)X[he]=i.COLOR_ATTACHMENT0+he;X.length=oe.length,de=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,de=!0);de&&i.drawBuffers(X)}function Ee(R){return S!==R?(i.useProgram(R),S=R,!0):!1}const ze={[Gi]:i.FUNC_ADD,[kc]:i.FUNC_SUBTRACT,[Hc]:i.FUNC_REVERSE_SUBTRACT};ze[Vc]=i.MIN,ze[Wc]=i.MAX;const Oe={[Xc]:i.ZERO,[qc]:i.ONE,[Yc]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[jc]:i.SRC_ALPHA_SATURATE,[Jc]:i.DST_COLOR,[Kc]:i.DST_ALPHA,[$c]:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,[Qc]:i.ONE_MINUS_DST_COLOR,[Zc]:i.ONE_MINUS_DST_ALPHA,[eh]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[nh]:i.CONSTANT_ALPHA,[ih]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(R,Z,X,de,oe,he,Ie,Je,ae,Ue){if(R===Vi){f===!0&&(Ve(i.BLEND),f=!1);return}if(f===!1&&(xe(i.BLEND),f=!0),R!==Gc){if(R!==u||Ue!==L){if((M!==Gi||A!==Gi)&&(i.blendEquation(i.FUNC_ADD),M=Gi,A=Gi),Ue)switch(R){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFunc(i.ONE,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",R);break}else switch(R){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yo:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eo:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",R);break}b=null,T=null,w=null,g=null,y.set(0,0,0),U=0,u=R,L=Ue}return}oe=oe||Z,he=he||X,Ie=Ie||de,(Z!==M||oe!==A)&&(i.blendEquationSeparate(ze[Z],ze[oe]),M=Z,A=oe),(X!==b||de!==T||he!==w||Ie!==g)&&(i.blendFuncSeparate(Oe[X],Oe[de],Oe[he],Oe[Ie]),b=X,T=de,w=he,g=Ie),(Je.equals(y)===!1||ae!==U)&&(i.blendColor(Je.r,Je.g,Je.b,ae),y.copy(Je),U=ae),u=R,L=!1}function _t(R,Z){R.side===vn?Ve(i.CULL_FACE):xe(i.CULL_FACE);let X=R.side===en;Z&&(X=!X),se(X),R.blending===Wi&&R.transparent===!1?tt(Vi):tt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const de=R.stencilWrite;o.setTest(de),de&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ae(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function j(R){R!==Oc?(xe(i.CULL_FACE),R!==F&&(R===So?i.cullFace(i.BACK):R===Bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),F=R}function Te(R){R!==W&&(z&&i.lineWidth(R),W=R)}function Ae(R,Z,X){R?(xe(i.POLYGON_OFFSET_FILL),(C!==Z||k!==X)&&(C=Z,k=X,a.getReversed()&&(Z=-Z,X=-X),i.polygonOffset(Z,X))):Ve(i.POLYGON_OFFSET_FILL)}function We(R){R?xe(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function at(R){R===void 0&&(R=i.TEXTURE0+K-1),Q!==R&&(i.activeTexture(R),Q=R)}function At(R,Z,X){X===void 0&&(Q===null?X=i.TEXTURE0+K-1:X=Q);let de=ee[X];de===void 0&&(de={type:void 0,texture:void 0},ee[X]=de),(de.type!==R||de.texture!==Z)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(R,Z||Be[R]),de.type=R,de.texture=Z)}function I(){const R=ee[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Rt(){try{i.compressedTexImage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function ft(){try{i.compressedTexImage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function mt(){try{i.texSubImage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function me(){try{i.texSubImage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function Et(){try{i.compressedTexSubImage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function Xe(){try{i.texStorage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function E(){try{i.texStorage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){ct("WebGLState:",R)}}function O(){try{i.texImage3D(...arguments)}catch(R){ct("WebGLState:",R)}}function re(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function J(R,Z){p[R]!==Z&&(i.pixelStorei(R,Z),p[R]=Z)}function ce(R){q.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),q.copy(R))}function fe(R){le.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),le.copy(R))}function Y(R,Z){let X=l.get(Z);X===void 0&&(X=new WeakMap,l.set(Z,X));let de=X.get(R);de===void 0&&(de=i.getUniformBlockIndex(Z,R.name),i.uniformBlockBinding(Z,de,de),X.set(R,de))}function $(R,Z,X){const oe=l.get(Z).get(R);c[oe]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,X),c[oe]=X)}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,ee={},d={},c={},m=new WeakMap,_=[],S=null,f=!1,u=null,M=null,b=null,T=null,A=null,w=null,g=null,y=new Ke(0,0,0),U=0,L=!1,D=null,F=null,W=null,C=null,k=null,q.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Ve,bindFramebuffer:vt,drawBuffers:ie,useProgram:Ee,setBlending:tt,setMaterial:_t,setFlipSided:se,setCullFace:j,setLineWidth:Te,setPolygonOffset:Ae,setScissorTest:We,activeTexture:at,bindTexture:At,unbindTexture:I,compressedTexImage2D:Rt,compressedTexImage3D:ft,texImage2D:x,texImage3D:O,pixelStorei:J,getParameter:re,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:Xe,texStorage3D:E,texSubImage2D:mt,texSubImage3D:me,compressedTexSubImage2D:Et,compressedTexSubImage3D:De,scissor:ce,viewport:fe,reset:ue}}function Hm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,h=new WeakMap,p=new Set;let d;const m=new WeakMap,_=new Set,S=new FinalizationRegistry(E=>_.delete(E));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(E,x){return f?new OffscreenCanvas(E,x):yr("canvas")}function M(E,x,O){let re=1;const J=Xe(E);if((J.width>O||J.height>O)&&(re=O/Math.max(J.width,J.height)),re<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ce=Math.floor(re*J.width),fe=Math.floor(re*J.height);d===void 0&&(d=u(ce,fe));const Y=x?u(ce,fe):d;return Y.width=ce,Y.height=fe,Y.getContext("2d").drawImage(E,0,0,ce,fe),qe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ce+"x"+fe+")."),Y}else return"data"in E&&qe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function b(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,x,O,re,J,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let fe;re&&(fe=e.get("EXT_texture_norm16"),fe||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),O===i.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),O===i.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),O===i.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const $=ce?Sr:rt.getTransfer(J);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=$===ut?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),O===i.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(E,x){let O;return E?x===null||x===Rn||x===Qi?O=i.DEPTH24_STENCIL8:x===Mn?O=i.DEPTH32F_STENCIL8:x===Ts&&(O=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rn||x===Qi?O=i.DEPTH_COMPONENT24:x===Mn?O=i.DEPTH_COMPONENT32F:x===Ts&&(O=i.DEPTH_COMPONENT16),O}function y(E,x){return b(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function U(E){const x=new WeakRef(E);n.get(E).__ref=x,_.add(x),S.register(E,x,x)}function L(E){const x=n.get(E).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function D(E){W(E.target)}function F(E){C(E.target)}function W(E){E.removeEventListener("dispose",D),L(E),K(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&p.delete(E)}function C(E){E.removeEventListener("dispose",F),L(E),ne(E)}function k(){for(const E of _){const x=E.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):W(x))}_.clear(),p.clear()}function K(E){const x=n.get(E);if(x.__webglInit===void 0)return;const O=E.source,re=m.get(O);if(re){const J=re[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(E),Object.keys(re).length===0&&m.delete(O)}n.remove(E)}function z(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const O=E.source,re=m.get(O);delete re[x.__cacheKey],a.memory.textures--}function ne(E){const x=n.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();const O=E.depthTexture;if(O&&O.renderTarget===E&&W(O),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ce=0;ce<x.__webglFramebuffer[J].length;ce++)i.deleteFramebuffer(x.__webglFramebuffer[J][ce]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const re=E.textures;for(let J=0,ce=re.length;J<ce;J++){const fe=n.get(re[J]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(re[J])}n.remove(E)}let V=0;function Q(){V=0}function ee(){return V}function ye(E){V=E}function He(){const E=V;return E>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,E}function q(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function le(E,x){const O=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const re=E.image;if(re===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(O,E,x);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Se(E,x){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){_t(O,E,x);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function Be(E,x){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){_t(O,E,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function xe(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){se(O,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const Ve={[gr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},vt={[Vt]:i.NEAREST,[ah]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},ie={[hh]:i.NEVER,[Kl]:i.ALWAYS,[uh]:i.LESS,[Yl]:i.LEQUAL,[dh]:i.EQUAL,[$l]:i.GEQUAL,[fh]:i.GREATER,[ph]:i.NOTEQUAL};function Ee(E,x){if(x.type===Mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===Nr||x.magFilter===Ds||x.magFilter===Jn||x.minFilter===sn||x.minFilter===Nr||x.minFilter===Ds||x.minFilter===Jn)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ve[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ve[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ve[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,vt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==Ds&&x.minFilter!==Jn||x.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ze(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D),U(x));const re=x.source;let J=m.get(re);J===void 0&&(J={},m.set(re,J));const ce=q(x);if(ce!==E.__cacheKey){J[ce]===void 0&&(J[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[ce].usedTimes++;const fe=J[E.__cacheKey];fe!==void 0&&(J[E.__cacheKey].usedTimes--,fe.usedTimes===0&&z(x)),E.__cacheKey=ce,E.__webglTexture=J[ce].texture}return O}function Oe(E,x,O){return Math.floor(Math.floor(E/O)/x)}function tt(E,x,O,re){const ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,re,x.data);else{ce.sort((R,Z)=>R.start-Z.start);let fe=0;for(let R=1;R<ce.length;R++){const Z=ce[fe],X=ce[R],de=Z.start+Z.count,oe=Oe(X.start,x.width,4),he=Oe(Z.start,x.width,4);X.start<=de+1&&oe===he&&Oe(X.start+X.count-1,x.width,4)===oe?Z.count=Math.max(Z.count,X.start+X.count-Z.start):(++fe,ce[fe]=X)}ce.length=fe+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,Z=ce.length;R<Z;R++){const X=ce[R],de=Math.floor(X.start/4),oe=Math.ceil(X.count/4),he=de%x.width,Ie=Math.floor(de/x.width),Je=oe,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(i.TEXTURE_2D,0,he,Ie,Je,ae,O,re,x.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function _t(E,x,O){let re=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=i.TEXTURE_3D);const J=ze(E,x),ce=x.source;t.bindTexture(re,E.__webglTexture,i.TEXTURE0+O);const fe=n.get(ce);if(ce.version!==fe.__version||J===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ae=rt.getPrimaries(rt.workingColorSpace),Ue=x.colorSpace===Kn?null:rt.getPrimaries(x.colorSpace),Qe=x.colorSpace===Kn||ae===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let $=M(x.image,!1,s.maxTextureSize);$=De(x,$);const ue=r.convert(x.format,x.colorSpace),R=r.convert(x.type);let Z=w(x.internalFormat,ue,R,x.normalized,x.colorSpace,x.isVideoTexture);Ee(re,x);let X;const de=x.mipmaps,oe=x.isVideoTexture!==!0,he=fe.__version===void 0||J===!0,Ie=ce.dataReady,Je=y(x,$);if(x.isDepthTexture)Z=g(x.format===Qn,x.type),he&&(oe?t.texStorage2D(i.TEXTURE_2D,1,Z,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,Z,$.width,$.height,0,ue,R,null));else if(x.isDataTexture)if(de.length>0){oe&&he&&t.texStorage2D(i.TEXTURE_2D,Je,Z,de[0].width,de[0].height);for(let ae=0,Ue=de.length;ae<Ue;ae++)X=de[ae],oe?Ie&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,ue,R,X.data):t.texImage2D(i.TEXTURE_2D,ae,Z,X.width,X.height,0,ue,R,X.data);x.generateMipmaps=!1}else oe?(he&&t.texStorage2D(i.TEXTURE_2D,Je,Z,$.width,$.height),Ie&&tt(x,$,ue,R)):t.texImage2D(i.TEXTURE_2D,0,Z,$.width,$.height,0,ue,R,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){oe&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,Z,de[0].width,de[0].height,$.depth);for(let ae=0,Ue=de.length;ae<Ue;ae++)if(X=de[ae],x.format!==wn)if(ue!==null)if(oe){if(Ie)if(x.layerUpdates.size>0){const Qe=el(X.width,X.height,x.format,x.type);for(const pe of x.layerUpdates){const ot=X.data.subarray(pe*Qe/X.data.BYTES_PER_ELEMENT,(pe+1)*Qe/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,pe,X.width,X.height,1,ue,ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,$.depth,ue,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Z,X.width,X.height,$.depth,0,X.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,$.depth,ue,R,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Z,X.width,X.height,$.depth,0,ue,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{oe&&he&&t.texStorage2D(i.TEXTURE_2D,Je,Z,de[0].width,de[0].height);for(let ae=0,Ue=de.length;ae<Ue;ae++)X=de[ae],x.format!==wn?ue!==null?oe?Ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,ue,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Z,X.width,X.height,0,X.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ie&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,ue,R,X.data):t.texImage2D(i.TEXTURE_2D,ae,Z,X.width,X.height,0,ue,R,X.data)}else if(x.isDataArrayTexture)if(oe){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,Z,$.width,$.height,$.depth),Ie)if(x.layerUpdates.size>0){const ae=el($.width,$.height,x.format,x.type);for(const Ue of x.layerUpdates){const Qe=$.data.subarray(Ue*ae/$.data.BYTES_PER_ELEMENT,(Ue+1)*ae/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,$.width,$.height,1,ue,R,Qe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ue,R,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,$.width,$.height,$.depth,0,ue,R,$.data);else if(x.isData3DTexture)oe?(he&&t.texStorage3D(i.TEXTURE_3D,Je,Z,$.width,$.height,$.depth),Ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ue,R,$.data)):t.texImage3D(i.TEXTURE_3D,0,Z,$.width,$.height,$.depth,0,ue,R,$.data);else if(x.isFramebufferTexture){if(he)if(oe)t.texStorage2D(i.TEXTURE_2D,Je,Z,$.width,$.height);else{let ae=$.width,Ue=$.height;for(let Qe=0;Qe<Je;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,Z,ae,Ue,0,ue,R,null),ae>>=1,Ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),$.parentNode!==ae){ae.appendChild($),p.add(x),ae.onpaint=Ue=>{const Qe=Ue.changedElements;for(const pe of p)Qe.includes(pe.image)&&(pe.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{const Qe=i.RGBA,pe=i.RGBA,ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qe,pe,ot,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(de.length>0){if(oe&&he){const ae=Xe(de[0]);t.texStorage2D(i.TEXTURE_2D,Je,Z,ae.width,ae.height)}for(let ae=0,Ue=de.length;ae<Ue;ae++)X=de[ae],oe?Ie&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ue,R,X):t.texImage2D(i.TEXTURE_2D,ae,Z,ue,R,X);x.generateMipmaps=!1}else if(oe){if(he){const ae=Xe($);t.texStorage2D(i.TEXTURE_2D,Je,Z,ae.width,ae.height)}Ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,R,$)}else t.texImage2D(i.TEXTURE_2D,0,Z,ue,R,$);b(x)&&x.mipmapsAutoUpdate===!0&&T(re),fe.__version=ce.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function se(E,x,O){if(x.image.length!==6)return;const re=ze(E,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const ce=n.get(J);if(J.version!==ce.__version||re===!0){t.activeTexture(i.TEXTURE0+O);const fe=rt.getPrimaries(rt.workingColorSpace),Y=x.colorSpace===Kn?null:rt.getPrimaries(x.colorSpace),$=x.colorSpace===Kn||fe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ue=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let pe=0;pe<6;pe++)!ue&&!R?Z[pe]=M(x.image[pe],!0,s.maxCubemapSize):Z[pe]=R?x.image[pe].image:x.image[pe],Z[pe]=De(x,Z[pe]);const X=Z[0],de=r.convert(x.format,x.colorSpace),oe=r.convert(x.type);let he=w(x.internalFormat,de,oe,x.normalized,x.colorSpace);const Ie=x.isVideoTexture!==!0,Je=ce.__version===void 0||re===!0,ae=J.dataReady;let Ue=y(x,X);Ee(i.TEXTURE_CUBE_MAP,x);let Qe;if(x.isDepthTexture){if(he=g(x.format===Qn,x.type),Je)if(Ie)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,X.width,X.height);else for(let pe=0;pe<6;pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,he,X.width,X.height,0,de,oe,null)}else if(ue){Ie&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,he,X.width,X.height);for(let pe=0;pe<6;pe++){Qe=Z[pe].mipmaps;for(let ot=0;ot<Qe.length;ot++){const wt=Qe[ot];x.format!==wn?de!==null?Ie?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot,0,0,wt.width,wt.height,de,wt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot,he,wt.width,wt.height,0,wt.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot,0,0,wt.width,wt.height,de,oe,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot,he,wt.width,wt.height,0,de,oe,wt.data)}}}else{if(Qe=x.mipmaps,Ie&&Je){Qe.length>0&&Ue++;const pe=Xe(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,he,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(R){Ie?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Z[pe].width,Z[pe].height,de,oe,Z[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,he,Z[pe].width,Z[pe].height,0,de,oe,Z[pe].data);for(let ot=0;ot<Qe.length;ot++){const hn=Qe[ot].image[pe].image;Ie?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot+1,0,0,hn.width,hn.height,de,oe,hn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot+1,he,hn.width,hn.height,0,de,oe,hn.data)}}else{Ie?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,de,oe,Z[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,he,de,oe,Z[pe]);for(let ot=0;ot<Qe.length;ot++){const wt=Qe[ot];Ie?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot+1,0,0,de,oe,wt.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ot+1,he,de,oe,wt.image[pe])}}}b(x)&&x.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),ce.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function j(E,x,O,re,J,ce){const fe=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),$=w(O.internalFormat,fe,Y,O.normalized,O.colorSpace),ue=n.get(x),R=n.get(O);if(R.__renderTarget=x,!ue.__hasExternalTextures){const Z=Math.max(1,x.width>>ce),X=Math.max(1,x.height>>ce);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ce,$,Z,X,x.depth,0,fe,Y,null):t.texImage2D(J,ce,$,Z,X,0,fe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,J,R.__webglTexture,0,mt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,J,R.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(E,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const re=x.depthTexture,J=re&&re.isDepthTexture?re.type:null,ce=g(x.stencilBuffer,J),fe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(x),ce,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(x),ce,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ce,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,E)}else{const re=x.textures;for(let J=0;J<re.length;J++){const ce=re[J],fe=r.convert(ce.format,ce.colorSpace),Y=r.convert(ce.type),$=w(ce.internalFormat,fe,Y,ce.normalized,ce.colorSpace);me(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(x),$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(E,x,O){const re=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(x.depthTexture);J.__renderTarget=x;const ce=re?x.depthTexture.image[0]:x.depthTexture.image;(!J.__webglTexture||ce.width!==x.width||ce.height!==x.height)&&(ce.width=x.width,ce.height=x.height,x.depthTexture.needsUpdate=!0),re?xe(x.depthTexture,0):le(x.depthTexture,0);const fe=J.__webglTexture,Y=mt(x),$=re?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ue=x.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===jn)me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,$,fe,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ue,$,fe,0);else if(x.depthTexture.format===Qn)me(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,$,fe,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ue,$,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(E){const x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const re=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),re){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,re.removeEventListener("dispose",J)};re.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=re}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let re=0;re<6;re++)Ae(x.__webglFramebuffer[re],E,re);else E.texture.mipmaps.length>0?Ae(x.__webglFramebuffer[0],E,0):Ae(x.__webglFramebuffer,E,0);else if(O){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]===void 0)x.__webglDepthbuffer[re]=i.createRenderbuffer(),Te(x.__webglDepthbuffer[re],E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ce)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Te(x.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,x,O){const re=n.get(E);x!==void 0&&j(re.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&We(E)}function At(E){const x=E.texture,O=n.get(E),re=n.get(x);E.addEventListener("dispose",F),U(E);const J=E.textures,ce=E.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=x.version,a.memory.textures++),ce){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let $=0;$<x.mipmaps.length;$++)O.__webglFramebuffer[Y][$]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Y=0,$=J.length;Y<$;Y++){const ue=n.get(J[Y]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&me(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){const $=J[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ue=r.convert($.format,$.colorSpace),R=r.convert($.type),Z=w($.internalFormat,ue,R,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),X=mt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)j(O.__webglFramebuffer[Y][$],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else j(O.__webglFramebuffer[Y],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(x)?T(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Y=0,$=J.length;Y<$;Y++){const ue=J[Y],R=n.get(ue);let Z=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,R.__webglTexture),Ee(Z,ue),j(O.__webglFramebuffer,E,ue,i.COLOR_ATTACHMENT0+Y,Z,0),b(ue)&&T(Z)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,re.__webglTexture),Ee(Y,x),x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)j(O.__webglFramebuffer[$],E,x,i.COLOR_ATTACHMENT0,Y,$);else j(O.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,Y,0);b(x)?T(Y):x.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&We(E)}function I(E){const x=E.textures;for(let O=0,re=x.length;O<re;O++){const J=x[O];if(b(J)&&J.mipmapsAutoUpdate===!0){const ce=A(E),fe=n.get(J).__webglTexture;t.bindTexture(ce,fe),T(ce),t.unbindTexture()}}}const Rt=[];function ft(E){if(E.samples>0){if(me(E)===!1){const x=E.textures,O=E.width,re=E.height;let J=i.COLOR_BUFFER_BIT;const ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(E),Y=x.length>1;if(Y)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ue]);const R=n.get(x[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,O,re,0,0,O,re,J,i.NEAREST),c===!0&&(Rt.length=0,Rt.push(i.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Rt.push(ce),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ue]);const R=n.get(x[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function mt(E){return Math.min(s.maxSamples,E.samples)}function me(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function De(E,x){const O=E.colorSpace,re=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Mr&&O!==Kn&&(rt.getTransfer(O)===ut?(re!==wn||J!==cn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",O)),x}function Xe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=He,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=ye,this.setTexture2D=le,this.setTexture2DArray=Se,this.setTexture3D=Be,this.setTextureCube=xe,this.rebindTextures=at,this.setupRenderTarget=At,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=j,this.useMultisampledRTT=me,this.dispose=k}function Vm(i,e){function t(n,s=Kn){let r;const a=rt.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===no)return i.UNSIGNED_SHORT_4_4_4_4;if(n===io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===to)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===wn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===so)return i.RED;if(n===ro)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===oo)return i.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===dr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===va||n===Ma||n===Sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Ea||n===Ta||n===ba||n===wa||n===_r||n===Aa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===Ea)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ba)return r.COMPRESSED_R11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Ga||n===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Va||n===Wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xa||n===qa||n===xr||n===Ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
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

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ei({vertexShader:Wm,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new dt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ym extends di{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,d=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",f=new qm,u={},M=t.getContextAttributes();let b=null,T=null;const A=[],w=[],g=new Ze;let y=null,U=null;const L=new fn;L.viewport=new bt;const D=new fn;D.viewport=new bt;const F=[L,D],W=new su;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=A[q];return le===void 0&&(le=new Vr,A[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=A[q];return le===void 0&&(le=new Vr,A[q]=le),le.getGripSpace()},this.getHand=function(q){let le=A[q];return le===void 0&&(le=new Vr,A[q]=le),le.getHandSpace()};function K(q){const le=w.indexOf(q.inputSource);if(le===-1)return;const Se=A[le];Se!==void 0&&(Se.update(q.inputSource,q.frame,l||a),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<A.length;q++){const le=w[q];le!==null&&(w[q]=null,A[q].disconnect(le))}C=null,k=null,f.reset();for(const q in u)delete u[q];if(e.setRenderTarget(b),m=null,d=null,p=null,s=null,T=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),U!==null){const q=U.camera;q.fov=U.fov,q.zoom=U.zoom,q.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Be=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?Qn:jn,Be=M.stencil?Qi:Rn);const Ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new An(d.textureWidth,d.textureHeight,{format:wn,type:cn,depthTexture:new ji(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new An(m.framebufferWidth,m.framebufferHeight,{format:wn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(q){for(let le=0;le<q.removed.length;le++){const Se=q.removed[le],Be=w.indexOf(Se);Be>=0&&(w[Be]=null,A[Be].disconnect(Se))}for(let le=0;le<q.added.length;le++){const Se=q.added[le];let Be=w.indexOf(Se);if(Be===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=w.length){w.push(Se),Be=Ve;break}else if(w[Ve]===null){w[Ve]=Se,Be=Ve;break}if(Be===-1)break}const xe=A[Be];xe&&xe.connect(Se)}}function V(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let le=q.near,Se=q.far;f.texture!==null&&(f.depthNear>0&&(le=f.depthNear),f.depthFar>0&&(Se=f.depthFar)),W.near=D.near=L.near=le,W.far=D.far=L.far=Se,(C!==W.near||k!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),C=W.near,k=W.far),W.layers.mask=q.layers.mask|6,L.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;const Be=q.parent,xe=W.cameras;V(W,Be);for(let Ve=0;Ve<xe.length;Ve++)V(xe[Ve],Be);W.projectionMatrix.copy(L.projectionMatrix),W.projectionMatrixInverse.copy(L.projectionMatrixInverse),U===null&&q.isPerspectiveCamera&&(U={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,W,Be)};function Q(q,le,Se){Se===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$a*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(W)},this.getCameraTexture=function(q){return u[q]};let ee=null;function ye(q,le){if(h=le.getViewerPose(l||a),_=le,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Be=!1;Se.length!==W.cameras.length&&(W.cameras.length=0,Be=!0);for(let ie=0;ie<Se.length;ie++){const Ee=Se[ie];let ze=null;if(m!==null)ze=m.getViewport(Ee);else{const tt=p.getViewSubImage(d,Ee);ze=tt.viewport,ie===0&&(e.setRenderTargetTextures(T,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(T))}let Oe=F[ie];Oe===void 0&&(Oe=new fn,Oe.layers.enable(ie),Oe.viewport=new bt,F[ie]=Oe),Oe.matrix.fromArray(Ee.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ee.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(ze.x,ze.y,ze.width,ze.height),ie===0&&(W.matrix.copy(Oe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Be===!0&&W.cameras.push(Oe)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const ie=p.getDepthInformation(Se[0]);ie&&ie.isValid&&ie.texture&&f.init(ie,s.renderState)}if(xe&&xe.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let ie=0;ie<Se.length;ie++){const Ee=Se[ie].camera;if(Ee){let ze=u[Ee];ze||(ze=new pc,u[Ee]=ze);const Oe=p.getCameraImage(Ee);ze.sourceTexture=Oe}}}}for(let Se=0;Se<A.length;Se++){const Be=w[Se],xe=A[Se];Be!==null&&xe!==void 0&&xe.update(Be,le,l||a)}ee&&ee(q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const He=new vc;He.setAnimationLoop(ye),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const $m=new pt,Cc=new $e;Cc.set(-1,0,0,0,1,0,0,0,1);function Km(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,mc(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,M,b,T){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(f,u):u.isMeshLambertMaterial?(r(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(f,u),p(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(f,u),d(f,u),u.isMeshPhysicalMaterial&&m(f,u,T)):u.isMeshMatcapMaterial?(r(f,u),_(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),S(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?c(f,u,M,b):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===en&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===en&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const M=e.get(u),b=M.envMap,T=M.envMapRotation;b&&(f.envMap.value=b,f.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(T)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Cc),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,M,b){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*M,f.scale.value=b*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,M){f.ior.value=u.ior,u.diffuseRoughness>0&&(f.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===en&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.retroreflectivity>0&&(f.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,u){u.matcap&&(f.matcap.value=u.matcap)}function S(f,u){const M=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zm(i,e,t,n){let s={},r={};function a(M,b){const T=b.program;n.uniformBlockBinding(M,T,s[M.id])}function o(M,b){let T=s[M.id];T===void 0&&(_(M),T=c(M),s[M.id]=T,M.addEventListener("dispose",f));const A=b.program;n.updateUBOMapping(M,A);const w=e.render.frame;r[M.id]!==w&&(l(M),r[M.id]=w)}function c(M){const b=i.createBuffer(),T=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(M){const b=s[M.id],T=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,g=T.length;w<g;w++){const y=T[w];if(Array.isArray(y))for(let U=0,L=y.length;U<L;U++)h(y[U],w,U,A);else h(y,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,b,T,A){if(d(M,b,T,A)===!0){const w=M.__offset,g=M.value;if(Array.isArray(g)){let y=0;for(let U=0;U<g.length;U++){const L=g[U],D=S(L,!0);p(L,M.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,M.__data)}}function p(M,b,T){typeof M=="number"||typeof M=="boolean"?b[T]=M:M.isMatrix3?(b[T]=M.elements[0],b[T+1]=M.elements[1],b[T+2]=M.elements[2],b[T+3]=0,b[T+4]=M.elements[3],b[T+5]=M.elements[4],b[T+6]=M.elements[5],b[T+7]=0,b[T+8]=M.elements[6],b[T+9]=M.elements[7],b[T+10]=M.elements[8],b[T+11]=0):ArrayBuffer.isView(M)?b.set(M.subarray(0,b.length-T),T):M.toArray(b,T)}function d(M,b,T,A){const w=M.value,g=b+"_"+T;if(Array.isArray(w)){A[g]===void 0&&(A[g]=[]);const y=A[g];let U=!1;for(let L=0;L<w.length;L++)m(w[L],y,L)===!0&&(U=!0);return U}return m(w,A,g)}function m(M,b,T){if(b[T]===void 0)return typeof M=="number"||typeof M=="boolean"?b[T]=M:ArrayBuffer.isView(M)?b[T]=M.slice():b[T]=M.clone(),!0;{const A=b[T];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return b[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function _(M){const b=M.uniforms;let T=0;const A=16;for(let g=0,y=b.length;g<y;g++){const U=Array.isArray(b[g])?b[g]:[b[g]];for(let L=0,D=U.length;L<D;L++){const F=U[L],W=Array.isArray(F.value)?F.value:[F.value],C=Array.isArray(b[g])||Array.isArray(F.value);let k=T;for(let z=0,ne=W.length;z<ne;z++){const V=W[z],Q=S(V,C),ee=T%A,ye=ee%Q.boundary,He=ee+ye;T+=ye,He!==0&&A-He<Q.storage&&(T+=A-He),z===0&&(k=T),T+=Q.storage}const K=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new K((T-k)/Float32Array.BYTES_PER_ELEMENT),F.__offset=k}}const w=T%A;return w>0&&(T+=A-w),M.__size=T,M.__cache={},this}function S(M,b){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=16,T.storage=48):M.isMatrix4?(T.boundary=16,T.storage=64):M.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",M),b===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function f(M){const b=M.target;b.removeEventListener("dispose",f),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function u(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:u}}const Jm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function Qm(){return Tn===null&&(Tn=new lc(Jm,16,16,ui,Cn),Tn.name="DFG_LUT",Tn.minFilter=sn,Tn.magFilter=sn,Tn.wrapS=On,Tn.wrapT=On,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class jm{constructor(e={}){const{canvas:t=gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=cn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=m,f=new Set([oo,ao,ro]),u=new Set([cn,Rn,Ts,Qi,no,io]),M=new Uint32Array(4),b=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const g=[],y=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,F=null,W=null,C=null,k=null;this._outputColorSpace=jt;let K=0,z=0,ne=null,V=-1,Q=null;const ee=new bt,ye=new bt;let He=null;const q=new Ke(0);let le=0,Se=t.width,Be=t.height,xe=1,Ve=null,vt=null;const ie=new bt(0,0,Se,Be),Ee=new bt(0,0,Se,Be);let ze=!1;const Oe=new ws,tt=new ho;let _t=!1,se=!1;const j=new pt,Te=new N,Ae=new bt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function At(){return ne===null?xe:1}let I=n;function Rt(v,P){return t.getContext(v,P)}let ft,mt,me,Et,De,Xe,E,x,O,re,J,ce,fe,Y,$,ue,R,Z,X,de,oe,he,Ie;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),I===null){const P="webgl2";if(I=Rt(P,v),I===null)throw Rt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(v){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ct("WebGLRenderer: "+v.message),v}function Je(){ft=new np(I),ft.init(),oe=new Vm(I,ft),mt=new Xf(I,ft,e,oe),me=new km(I,ft),mt.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),W=I.createFramebuffer(),C=I.createFramebuffer(),k=I.createFramebuffer(),Et=new rp(I),De=new Am,Xe=new Hm(I,ft,me,De,mt,oe,Et),E=new tp(L),x=new au(I),he=new Vf(I,x),O=new ip(I,x,Et,he),re=new op(I,O,x,he,Et),Z=new ap(I,mt,Xe),$=new qf(De),J=new wm(L,E,ft,mt,he,$),ce=new Km(L,De),fe=new Cm,Y=new Um(ft),R=new Hf(L,E,me,re,_,c),ue=new Gm(L,re,mt),Ie=new Zm(I,Et,mt,me),X=new Wf(I,ft,Et),de=new sp(I,ft,Et),Et.programs=J.programs,L.capabilities=mt,L.extensions=ft,L.properties=De,L.renderLists=fe,L.shadowMap=ue,L.state=me,L.info=Et}S!==cn&&(U=new cp(S,t.width,t.height,o,s,r));const ae=new Ym(L,I);this.xr=ae,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const v=ft.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ft.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(v){v!==void 0&&(xe=v,this.setSize(Se,Be,!1))},this.getSize=function(v){return v.set(Se,Be)},this.setSize=function(v,P,H=!0){if(ae.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=v,Be=P,t.width=Math.floor(v*xe),t.height=Math.floor(P*xe),H===!0&&(t.style.width=v+"px",t.style.height=P+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(Se*xe,Be*xe).floor()},this.setDrawingBufferSize=function(v,P,H){Se=v,Be=P,xe=H,t.width=Math.floor(v*H),t.height=Math.floor(P*H),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(S===cn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(ie)},this.setViewport=function(v,P,H,B){v.isVector4?ie.set(v.x,v.y,v.z,v.w):ie.set(v,P,H,B),me.viewport(ee.copy(ie).multiplyScalar(At()).round())},this.getScissor=function(v){return v.copy(Ee)},this.setScissor=function(v,P,H,B){v.isVector4?Ee.set(v.x,v.y,v.z,v.w):Ee.set(v,P,H,B),me.scissor(ye.copy(Ee).multiplyScalar(At()).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(v){me.setScissorTest(ze=v)},this.setOpaqueSort=function(v){Ve=v},this.setTransparentSort=function(v){vt=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,H=!0){let B=0;if(v){let G=!1;if(ne!==null){const _e=ne.texture.format;G=f.has(_e)}if(G){const _e=ne.texture.type,Re=u.has(_e),ge=R.getClearColor(),Me=R.getClearAlpha(),Ne=ge.r,je=ge.g,nt=ge.b;Re?(M[0]=Ne,M[1]=je,M[2]=nt,M[3]=Me,I.clearBufferuiv(I.COLOR,0,M)):(b[0]=Ne,b[1]=je,b[2]=nt,b[3]=Me,I.clearBufferiv(I.COLOR,0,b))}else B|=I.COLOR_BUFFER_BIT}P&&(B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),R.dispose(),fe.dispose(),Y.dispose(),Xe.dispose(),De.dispose(),E.dispose(),re.dispose(),O.dispose(),he.dispose(),Ie.dispose(),J.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",gi),ae.removeEventListener("sessionend",Lr),yn.stop()};function Ue(v){v.preventDefault(),Er("WebGLRenderer: Context Lost."),D=!0}function Qe(){Er("WebGLRenderer: Context Restored."),D=!1;const v=Et.autoReset,P=ue.enabled,H=ue.autoUpdate,B=ue.needsUpdate,G=ue.type;Je(),Et.autoReset=v,ue.enabled=P,ue.autoUpdate=H,ue.needsUpdate=B,ue.type=G}function pe(v){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ot(v){const P=v.target;P.removeEventListener("dispose",ot),wt(P)}function wt(v){hn(v),De.remove(v)}function hn(v){const P=De.get(v).programs;P!==void 0&&(P.forEach(function(H){J.releaseProgram(H)}),v.isShaderMaterial&&J.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,H,B,G,_e){P===null&&(P=We);const Re=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=Nc(v,P,H,B,G);me.setMaterial(B,Re);let Me=H.index,Ne=1;if(B.wireframe===!0){if(Me=O.getWireframeAttribute(H),Me===void 0)return;Ne=2}const je=H.drawRange,nt=H.attributes.position;let Pe=je.start*Ne,it=(je.start+je.count)*Ne;_e!==null&&(Pe=Math.max(Pe,_e.start*Ne),it=Math.min(it,(_e.start+_e.count)*Ne)),Me!==null?(Pe=Math.max(Pe,0),it=Math.min(it,Me.count)):nt!=null&&(Pe=Math.max(Pe,0),it=Math.min(it,nt.count));const It=it-Pe;if(It<0||It===1/0)return;he.setup(G,B,ge,H,Me);let xt,gt=X;if(Me!==null&&(xt=x.get(Me),gt=de,gt.setIndex(xt)),G.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*At()),gt.setMode(I.LINES)):gt.setMode(I.TRIANGLES);else if(G.isLine){let Wt=B.linewidth;Wt===void 0&&(Wt=1),me.setLineWidth(Wt*At()),G.isLineSegments?gt.setMode(I.LINES):G.isLineLoop?gt.setMode(I.LINE_LOOP):gt.setMode(I.LINE_STRIP)}else G.isPoints?gt.setMode(I.POINTS):G.isSprite&&gt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Wt=G._multiDrawStarts,Le=G._multiDrawCounts,Zt=G._multiDrawCount,ht=Me?x.get(Me).bytesPerElement:1,ni=De.get(B).currentProgram.getUniforms();for(let Xt=0;Xt<Zt;Xt++)ni.setValue(I,"_gl_DrawID",Xt),gt.render(Wt[Xt]/ht,Le[Xt])}else if(G.isInstancedMesh)gt.renderInstances(Pe,It,G.count);else if(H.isInstancedBufferGeometry){const Wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Le=Math.min(H.instanceCount,Wt);gt.renderInstances(Pe,It,Le)}else gt.render(Pe,It)};function mi(v,P,H,B){F!==null&&v.isNodeMaterial&&F.setObject(B,v),_t===!0&&$.setState(v,H,!1),v.transparent===!0&&v.side===vn&&v.forceSinglePass===!1?(v.side=en,v.needsUpdate=!0,Lt(v,P,B),v.side=hi,v.needsUpdate=!0,Lt(v,P,B),v.side=vn):Lt(v,P,B)}this.compile=function(v,P,H=null){H===null&&(H=v),F!==null&&F.renderStart(v,P,H),w=Y.get(H),w.init(P),y.push(w),H.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),v!==H&&v.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),se=this.localClippingEnabled,_t=$.init(this.clippingPlanes,se),_t===!0&&$.setGlobalState(this.clippingPlanes,P),F!==null&&ue.render(w.state.shadowsArray,H,P);const B=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){const ge=_e[Re];mi(ge,H,P,G),B.add(ge)}else mi(_e,H,P,G),B.add(_e)}),w=y.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(v,P,H=null){const B=this.compile(v,P,H);return new Promise(G=>{function _e(){if(B.forEach(function(Re){const Me=De.get(Re).currentProgram;(Me===void 0||Me.isReady())&&B.delete(Re)}),B.size===0){G(v);return}setTimeout(_e,10)}ft.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ps=null;function Ls(v){Ps&&Ps(v)}function gi(){yn.stop()}function Lr(){yn.start()}const yn=new vc;yn.setAnimationLoop(Ls),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(v){Ps=v,ae.setAnimationLoop(v),v===null?yn.stop():yn.start()},ae.addEventListener("sessionstart",gi),ae.addEventListener("sessionend",Lr),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(v,P);const H=ae.enabled===!0&&ae.isPresenting===!0,B=U!==null&&(ne===null||H)&&U.begin(L,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(P),P=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,P,ne),w=Y.get(v,y.length),w.init(P),w.state.textureUnits=Xe.getTextureUnits(),y.push(w),j.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?tt.setFromArrayCamera(P):Oe.setFromProjectionMatrix(j,Sn,P.reversedDepth),se=this.localClippingEnabled,_t=$.init(this.clippingPlanes,se),A=fe.get(v,g.length),A.init(),g.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const Re=L.xr.getDepthSensingMesh();Re!==null&&be(Re,P,-1/0,L.sortObjects)}be(v,P,0,L.sortObjects),A.finish(),F!==null&&F.updateLights(w.state.lightsArray),L.sortObjects===!0&&A.sort(Ve,vt),at=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,at&&R.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),_t===!0&&$.beginShadows();const G=w.state.shadowsArray;if(ue.render(G,v,P),_t===!0&&$.endShadows(),(B&&U.hasRenderPass())===!1){const Re=A.opaque,ge=A.transmissive;if(w.setupLights(),P.isArrayCamera){const Me=P.cameras;if(ge.length>0)for(let Ne=0,je=Me.length;Ne<je;Ne++){const nt=Me[Ne];Mt(Re,ge,v,nt)}at&&R.render(v);for(let Ne=0,je=Me.length;Ne<je;Ne++){const nt=Me[Ne];Ge(A,v,nt,nt.viewport)}}else ge.length>0&&Mt(Re,ge,v,P),at&&R.render(v),Ge(A,v,P)}ne!==null&&z===0&&(Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne)),B&&U.end(L),v.isScene===!0&&v.onAfterRender(L,v,P),he.resetDefaultState(),V=-1,Q=null,y.pop(),y.length>0?(w=y[y.length-1],Xe.setTextureUnits(w.state.textureUnits),_t===!0&&$.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,F!==null&&F.renderEnd()};function be(v,P,H,B){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){const Re=P.isArrayCamera?tt:Oe;if(!v.frustumCulled||v.intersectsFrustum(Re)){B&&Ae.setFromMatrixPosition(v.matrixWorld).applyMatrix4(j);const ge=re.update(v),Me=v.material;Me.visible&&A.push(v,ge,Me,H,Ae.z,null,P)}}else if(v.isMesh||v.isLine||v.isPoints){const Re=P.isArrayCamera?tt:Oe;if(!v.frustumCulled||v.intersectsFrustum(Re)){const ge=re.update(v),Me=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ae.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ae.copy(ge.boundingSphere.center)),Ae.applyMatrix4(v.matrixWorld).applyMatrix4(j)),Array.isArray(Me)){const Ne=ge.groups;for(let je=0,nt=Ne.length;je<nt;je++){const Pe=Ne[je],it=Me[Pe.materialIndex];it&&it.visible&&A.push(v,ge,it,H,Ae.z,Pe,P)}}else Me.visible&&A.push(v,ge,Me,H,Ae.z,null,P)}}}const _e=v.children;for(let Re=0,ge=_e.length;Re<ge;Re++)be(_e[Re],P,H,B)}function Ge(v,P,H,B){const{opaque:G,transmissive:_e,transparent:Re}=v;w.setupLightsView(H),_t===!0&&$.setGlobalState(L.clippingPlanes,H),B&&me.viewport(ee.copy(B)),G.length>0&&zt(G,P,H),_e.length>0&&zt(_e,P,H),Re.length>0&&zt(Re,P,H),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Mt(v,P,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Pe=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new An(1,1,{generateMipmaps:!0,type:Pe?Cn:cn,minFilter:Jn,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const _e=w.state.transmissionRenderTarget[B.id],Re=B.viewport||ee;_e.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const ge=L.getRenderTarget(),Me=L.getActiveCubeFace(),Ne=L.getActiveMipmapLevel();L.setRenderTarget(_e),L.getClearColor(q),le=L.getClearAlpha(),le<1&&L.setClearColor(16777215,.5),L.clear(),at&&R.render(H);const je=L.toneMapping;L.toneMapping=Bn;const nt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),_t===!0&&$.setGlobalState(L.clippingPlanes,B),zt(v,H,B),Xe.updateMultisampleRenderTarget(_e),Xe.updateRenderTargetMipmap(_e),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let it=0,It=P.length;it<It;it++){const xt=P[it],{object:gt,geometry:Wt,material:Le,group:Zt}=xt;if(Le.side===vn&&gt.layers.test(B.layers)){const ht=Le.side;Le.side=en,Le.needsUpdate=!0,nn(gt,H,B,Wt,Le,Zt),Le.side=ht,Le.needsUpdate=!0,Pe=!0}}Pe===!0&&(Xe.updateMultisampleRenderTarget(_e),Xe.updateRenderTargetMipmap(_e))}L.setRenderTarget(ge,Me,Ne),L.setClearColor(q,le),nt!==void 0&&(B.viewport=nt),L.toneMapping=je}function zt(v,P,H){const B=P.isScene===!0?P.overrideMaterial:null;for(let G=0,_e=v.length;G<_e;G++){const Re=v[G],{object:ge,geometry:Me,group:Ne}=Re;let je=Re.material;je.allowOverride===!0&&B!==null&&(je=B),ge.layers.test(H.layers)&&nn(ge,P,H,Me,je,Ne)}}function nn(v,P,H,B,G,_e){F!==null&&G.isNodeMaterial&&F.setObject(v,G),v.onBeforeRender(L,P,H,B,G,_e),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(L,P,H,B,v,_e),G.transparent===!0&&G.side===vn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,L.renderBufferDirect(H,P,B,G,v,_e),G.side=hi,G.needsUpdate=!0,L.renderBufferDirect(H,P,B,G,v,_e),G.side=vn):L.renderBufferDirect(H,P,B,G,v,_e),v.onAfterRender(L,P,H,B,G,_e)}function _i(v){let P=0;for(const H of v)H.texture!==null&&P++;return P}function Lt(v,P,H){P.isScene!==!0&&(P=We);const B=De.get(v),G=w.state.lights,_e=w.state.shadowsArray,Re=G.state.version,ge=J.getParameters(v,G.state,_e,P,H,w.state.lightProbeGridArray),Me=J.getProgramCacheKey(ge);let Ne=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;const je=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=E.get(v.envMap||B.environment,je),B.envMapRotation=B.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",ot),Ne=new Map,B.programs=Ne,B.programVariants=new Map);let nt=Ne.get(Me);if(nt!==void 0){if(B.currentProgram===nt&&B.lightsStateVersion===Re)return rs(v,ge),nt}else ge.uniforms=J.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,H,ge),v.onBeforeCompile(ge,L),nt=J.acquireProgram(ge,Me),Ne.set(Me,nt),B.uniforms=ge.uniforms;const Pe=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Pe.clippingPlanes=$.uniform),rs(v,ge),B.needsLights=Fc(v),B.lightsStateVersion=Re,B.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.sunLights.value=G.state.sun,Pe.sunLightShadows.value=G.state.sunShadow,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.sunShadowMatrix.value=G.state.sunShadowMatrix,Pe.sunShadowCascade.value=G.state.sunShadowCascade,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=_i(w.state.lightProbeGridArray),B.currentProgram=nt,B.uniformsList=null,nt}function Gt(v,P,H,B,G){const _e=De.get(v),Re=_e.currentProgram.id+","+B+","+G;let ge=_e.programVariants.get(Re);return ge===void 0?(ge=Lt(v,P,H),_e.programVariants.set(Re,ge)):(_e.currentProgram=ge,_e.uniformsList=null,_e.outputColorSpace=B,_e.toneMapping=G),ge}function ss(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=fr.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function rs(v,P){const H=De.get(v);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function Nc(v,P,H,B,G){P.isScene!==!0&&(P=We),Xe.resetTextureUnits();const _e=P.fog,Re=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,ge=ne===null?L.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:rt.workingColorSpace,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ne=E.get(B.envMap||Re,Me),je=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,nt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,It=!!H.morphAttributes.color;let xt=Bn;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xt=L.toneMapping);const gt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Wt=gt!==void 0?gt.length:0,Le=De.get(B),Zt=w.state.lights;if(_t===!0&&(se===!0||v!==Q)){const Tt=v===Q&&B.id===V;$.setState(B,v,Tt)}let ht=!1,ni=!1;B.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==Zt.state.version||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Ne||B.fog===!0&&Le.fog!==_e||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==$.numPlanes||Le.numIntersection!==$.numIntersection)||Le.vertexAlphas!==je||Le.vertexTangents!==nt||Le.morphTargets!==Pe||Le.morphNormals!==it||Le.morphColors!==It||Le.morphTargetsCount!==Wt||Le.numLightProbeGrids!==_i(w.state.lightProbeGridArray)?ht=!0:(Le.outputColorSpace!==ge||Le.toneMapping!==xt)&&(ni=!0):(ht=!0,Le.__version=B.version);let Xt=Le.currentProgram;(ht===!0||ni===!0)&&(Xt=ni===!0?Gt(B,P,G,ge,xt):Lt(B,P,G),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Xt,Le));let Is=!1,kn=!1,ii=!1;const lt=Xt.getUniforms(),kt=Le.uniforms;if(me.useProgram(Xt.program)&&(Is=!0,kn=!0,ii=!0),B.id!==V&&(V=B.id,kn=!0),Is||Q!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",v.projectionMatrix),lt.setValue(I,"viewMatrix",v.matrixWorldInverse);const Ot=lt.map.cameraPosition;Ot!==void 0&&Ot.setValue(I,Te.setFromMatrixPosition(v.matrixWorld)),mt.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,kn=!0,ii=!0)}if(Le.needsLights&&(Zt.state.sunShadowMap.length>0&&lt.setValue(I,"sunShadowMap",Zt.state.sunShadowMap,Xe),Zt.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",Zt.state.directionalShadowMap,Xe),Zt.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",Zt.state.spotShadowMap,Xe),Zt.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",Zt.state.pointShadowMap,Xe)),G.isSkinnedMesh){lt.setOptional(I,G,"bindMatrix"),lt.setOptional(I,G,"bindMatrixInverse");const Tt=G.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),lt.setValue(I,"boneTexture",Tt.boneTexture,Xe))}G.isBatchedMesh&&(lt.setOptional(I,G,"batchingTexture"),lt.setValue(I,"batchingTexture",G._matricesTexture,Xe),lt.setOptional(I,G,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",G._indirectTexture,Xe),lt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",G._colorsTexture,Xe));const mn=H.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Z.update(G,H,Xt),(kn||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,lt.setValue(I,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(kt.envMapIntensity.value=P.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Qm()),kn){if(lt.setValue(I,"toneMappingExposure",L.toneMappingExposure),Le.needsLights&&Uc(kt,ii),_e&&B.fog===!0&&ce.refreshFogUniforms(kt,_e),ce.refreshMaterialUniforms(kt,B,xe,Be,w.state.transmissionRenderTarget[v.id]),Le.needsLights&&Le.numLightProbeGrids>0){const Tt=T;let Ot=0;for(const Pn of w.state.lightProbeGridArray)Pn.texture!==null&&(Tt.textures[Ot]=Pn.texture,Tt.min[Ot]=Pn.boundingBox.min,Tt.max[Ot]=Pn.boundingBox.max,Tt.resolution[Ot]=Pn.resolution,Ot++);for(const Pn in Tt)Tt[Pn].length=Ot;kt.probesSH.value=Tt.textures,kt.probesMin.value=Tt.min,kt.probesMax.value=Tt.max,kt.probesResolution.value=Tt.resolution}fr.upload(I,ss(Le),kt,Xe)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(fr.upload(I,ss(Le),kt,Xe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(I,"center",G.center),lt.setValue(I,"modelViewMatrix",G.modelViewMatrix),lt.setValue(I,"normalMatrix",G.normalMatrix),lt.setValue(I,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const Tt=B.uniformsGroups;for(let Ot=0,Pn=Tt.length;Ot<Pn;Ot++){const Mo=Tt[Ot];Ie.update(Mo,Xt),Ie.bind(Mo,Xt)}}return Xt}function Uc(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Fc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,P,H){const B=De.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),De.get(v.texture).__webglTexture=P,De.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){const H=De.get(v);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,H=0){ne=v,K=P,z=H;let B=null,G=!1,_e=!1;if(v){const ge=De.get(v);if(ge.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),ee.copy(v.viewport),ye.copy(v.scissor),He=v.scissorTest,me.viewport(ee),me.scissor(ye),me.setScissorTest(He),V=-1;return}else if(ge.__webglFramebuffer===void 0)Xe.setupRenderTarget(v);else if(ge.__hasExternalTextures)Xe.rebindTextures(v,De.get(v.texture).__webglTexture,De.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const je=v.depthTexture;if(ge.__boundDepthTexture!==je){if(je!==null&&De.has(je)&&(v.width!==je.image.width||v.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(_e=!0);const Ne=De.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[P])?B=Ne[P][H]:B=Ne[P],G=!0):v.samples>0&&Xe.useMultisampledRTT(v)===!1?B=De.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[H]:B=Ne,ee.copy(v.viewport),ye.copy(v.scissor),He=v.scissorTest}else ee.copy(ie).multiplyScalar(xe).floor(),ye.copy(Ee).multiplyScalar(xe).floor(),He=ze;if(H!==0&&(B=W),me.bindFramebuffer(I.FRAMEBUFFER,B)&&me.drawBuffers(v,B),me.viewport(ee),me.scissor(ye),me.setScissorTest(He),G){const ge=De.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge.__webglTexture,H)}else if(_e){const ge=P;for(let Me=0;Me<v.textures.length;Me++){const Ne=De.get(v.textures[Me]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Me,Ne.__webglTexture,H,ge)}}else if(v!==null&&H!==0){const ge=De.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,H)}V=-1};function vo(v){const P=De.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=mt.textureFormatReadable(v.format),P.__typeReadable=mt.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,H,B,G,_e,Re,ge=0){if(!(v&&v.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=De.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Re!==void 0&&(Me=Me[Re],Array.isArray(Me)&&(Me=Me[0])),Me){me.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Ne=v.textures[ge],je=Ne.format,nt=Ne.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge);const Pe=vo(Ne);if(Pe.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-B&&H>=0&&H<=v.height-G&&I.readPixels(P,H,B,G,oe.convert(je),oe.convert(nt),_e)}finally{const Ne=ne!==null?De.get(ne).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,P,H,B,G,_e,Re,ge=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=De.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Re!==void 0&&(Me=Me[Re],Array.isArray(Me)&&(Me=Me[0])),Me)if(P>=0&&P<=v.width-B&&H>=0&&H<=v.height-G){me.bindFramebuffer(I.FRAMEBUFFER,Me);const Ne=v.textures[ge],je=Ne.format,nt=Ne.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge);const Pe=vo(Ne);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(P,H,B,G,oe.convert(je),oe.convert(nt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const It=ne!==null?De.get(ne).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,It);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _h(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(it),I.deleteSync(xt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,H=0){const B=Math.pow(2,-H),G=Math.floor(v.image.width*B),_e=Math.floor(v.image.height*B),Re=P!==null?P.x:0,ge=P!==null?P.y:0;Xe.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,Re,ge,G,_e),me.unbindTexture()},this.copyTextureToTexture=function(v,P,H=null,B=null,G=0,_e=0){let Re,ge,Me,Ne,je,nt,Pe,it,It;const xt=v.isCompressedTexture?v.mipmaps[_e]:v.image;if(H!==null)Re=H.max.x-H.min.x,ge=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Ne=H.min.x,je=H.min.y,nt=H.isBox3?H.min.z:0;else{const lt=Math.pow(2,-G);Re=Math.floor(xt.width*lt),ge=Math.floor(xt.height*lt),v.isDataArrayTexture?Me=xt.depth:v.isData3DTexture?Me=Math.floor(xt.depth*lt):Me=1,Ne=0,je=0,nt=0}B!==null?(Pe=B.x,it=B.y,It=B.z):(Pe=0,it=0,It=0);const gt=oe.convert(P.format),Wt=oe.convert(P.type);let Le;P.isData3DTexture?(Xe.setTexture3D(P,0),Le=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Xe.setTexture2DArray(P,0),Le=I.TEXTURE_2D_ARRAY):(Xe.setTexture2D(P,0),Le=I.TEXTURE_2D),me.activeTexture(I.TEXTURE0),me.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),me.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),me.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const Zt=me.getParameter(I.UNPACK_ROW_LENGTH),ht=me.getParameter(I.UNPACK_IMAGE_HEIGHT),ni=me.getParameter(I.UNPACK_SKIP_PIXELS),Xt=me.getParameter(I.UNPACK_SKIP_ROWS),Is=me.getParameter(I.UNPACK_SKIP_IMAGES);me.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),me.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),me.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(I.UNPACK_SKIP_ROWS,je),me.pixelStorei(I.UNPACK_SKIP_IMAGES,nt);const kn=v.isDataArrayTexture||v.isData3DTexture,ii=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){const lt=De.get(v),kt=De.get(P),mn=De.get(lt.__renderTarget),Tt=De.get(kt.__renderTarget);me.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ot=0;Ot<Me;Ot++)kn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(v).__webglTexture,G,nt+Ot),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(P).__webglTexture,_e,It+Ot)),I.blitFramebuffer(Ne,je,Ne+Re,je+ge,Pe,it,Pe+Re,it+ge,I.DEPTH_BUFFER_BIT,I.NEAREST);me.bindFramebuffer(I.READ_FRAMEBUFFER,null),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||De.has(v)){const lt=De.get(v),kt=De.get(P);me.bindFramebuffer(I.READ_FRAMEBUFFER,C),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let mn=0;mn<Me;mn++)kn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,lt.__webglTexture,G,nt+mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,lt.__webglTexture,G),ii?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,_e,It+mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,_e),G!==0?I.blitFramebuffer(Ne,je,Ne+Re,je+ge,Pe,it,Pe+Re,it+ge,I.COLOR_BUFFER_BIT,I.NEAREST):ii?I.copyTexSubImage3D(Le,_e,Pe,it,It+mn,Ne,je,Re,ge):I.copyTexSubImage2D(Le,_e,Pe,it,Ne,je,Re,ge);me.bindFramebuffer(I.READ_FRAMEBUFFER,null),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ii?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Le,_e,Pe,it,It,Re,ge,Me,gt,Wt,xt.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(Le,_e,Pe,it,It,Re,ge,Me,gt,xt.data):I.texSubImage3D(Le,_e,Pe,it,It,Re,ge,Me,gt,Wt,xt):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Pe,it,Re,ge,gt,Wt,xt.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Pe,it,xt.width,xt.height,gt,xt.data):I.texSubImage2D(I.TEXTURE_2D,_e,Pe,it,Re,ge,gt,Wt,xt);me.pixelStorei(I.UNPACK_ROW_LENGTH,Zt),me.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),me.pixelStorei(I.UNPACK_SKIP_PIXELS,ni),me.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),me.pixelStorei(I.UNPACK_SKIP_IMAGES,Is),_e===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&I.generateMipmap(Le),me.unbindTexture()},this.initRenderTarget=function(v){De.get(v).__webglFramebuffer===void 0&&Xe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Xe.setTextureCube(v,0):v.isData3DTexture?Xe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Xe.setTexture2DArray(v,0):Xe.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){K=0,z=0,ne=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class e0 extends ic{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ke;e.deleteAttribute("uv");const t=new Fe({side:en}),n=new Fe,s=new Rr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new te(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Vh(e,n,6),o=new Ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new te(e,Ui(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new te(e,Ui(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new te(e,Ui(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const p=new te(e,Ui(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const d=new te(e,Ui(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const m=new te(e,Ui(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ui(i){return new Jh({color:0,emissive:16777215,emissiveIntensity:i})}const gs=new N;function dn(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;gs.copy(e),gs[n]=0,gs.normalize();const l=.5*a/(a+o),h=1-gs.angleTo(i)/c;return Math.sign(gs[t])===1?h*l:o/(a+o)+l+l*(1-h)}class Ye extends ke{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new N,l=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,d=this.attributes.normal.array,m=this.attributes.uv.array,_=p.length/6,S=new N,f=.5/a;for(let u=0,M=0;u<p.length;u+=3,M+=2)switch(c.fromArray(p,u),l.copy(c),l.x-=Math.sign(l.x)*f,l.y-=Math.sign(l.y)*f,l.z-=Math.sign(l.z)*f,l.normalize(),p[u+0]=h.x*Math.sign(c.x)+l.x*r,p[u+1]=h.y*Math.sign(c.y)+l.y*r,p[u+2]=h.z*Math.sign(c.z)+l.z*r,d[u+0]=l.x,d[u+1]=l.y,d[u+2]=l.z,Math.floor(u/_)){case 0:S.set(1,0,0),m[M+0]=dn(S,l,"z","y",r,n),m[M+1]=1-dn(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),m[M+0]=1-dn(S,l,"z","y",r,n),m[M+1]=1-dn(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),m[M+0]=1-dn(S,l,"x","z",r,e),m[M+1]=dn(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),m[M+0]=1-dn(S,l,"x","z",r,e),m[M+1]=1-dn(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),m[M+0]=1-dn(S,l,"x","y",r,e),m[M+1]=1-dn(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),m[M+0]=dn(S,l,"x","y",r,e),m[M+1]=1-dn(S,l,"y","x",r,t);break}}static fromJSON(e){return new Ye(e.width,e.height,e.depth,e.segments,e.radius)}}const la=new Map;function Kt(i,e,t,n,s={}){if(la.has(i))return la.get(i);const r=document.createElement("canvas");r.width=e,r.height=t;const a=r.getContext("2d");n(a,e,t);const o=new dc(r);return o.colorSpace=jt,o.anisotropy=8,s.repeat&&(o.wrapS=o.wrapT=gr,o.repeat.set(s.repeat[0],s.repeat[1])),la.set(i,o),o}function t0(){return Kt("asphalt",512,512,(i,e,t)=>{i.fillStyle="#1a1a20",i.fillRect(0,0,e,t);const n=i.getImageData(0,0,e,t),s=n.data;for(let r=0;r<s.length;r+=4){const a=(Math.random()-.5)*34;s[r]+=a,s[r+1]+=a,s[r+2]+=a+2}i.putImageData(n,0,0);for(let r=0;r<900;r++){const a=30+Math.random()*50;i.fillStyle=`rgba(${a},${a},${a+4},${.25+Math.random()*.4})`,i.beginPath(),i.arc(Math.random()*e,Math.random()*t,.6+Math.random()*1.7,0,7),i.fill()}for(let r=0;r<22;r++){i.strokeStyle=`rgba(0,0,0,${.05+Math.random()*.15})`,i.lineWidth=2+Math.random()*9;const a=Math.random()*e;i.beginPath(),i.moveTo(a,0),i.bezierCurveTo(a+20,t*.3,a-30,t*.6,a+10,t),i.stroke()}i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=2,i.beginPath(),i.moveTo(0,t*.5),i.lineTo(e,t*.5),i.stroke()},{repeat:[4,90]})}function n0(){return Kt("checker",256,64,(i,e,t)=>{for(let s=0;s<t;s+=32)for(let r=0;r<e;r+=32)i.fillStyle=(r/32+s/32|0)%2===0?"#f2f0e8":"#101014",i.fillRect(r,s,32,32)})}function yl(i,e="#0b0b12",t="#ffd319",n="#ff5a12"){return Kt(`banner:${i}:${e}:${t}`,512,128,(s,r,a)=>{s.fillStyle=e,s.fillRect(0,0,r,a),s.fillStyle=n,s.fillRect(0,0,14,a),s.fillRect(r-14,0,14,a),s.strokeStyle="rgba(255,255,255,0.15)",s.lineWidth=3,s.strokeRect(8,8,r-16,a-16),s.fillStyle=t,s.font="italic 900 62px Arial, Helvetica, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,r/2,a/2+4)})}function i0(i,e=""){return Kt(`sign:${i}:${e}`,256,256,(t,n,s)=>{t.fillStyle="#0c0c12",t.fillRect(0,0,n,s),t.strokeStyle="#ffd319",t.lineWidth=8,t.strokeRect(10,10,n-20,s-20),t.fillStyle="#ffd319",t.font="italic 900 84px Arial, Helvetica, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,n/2,s/2-24),t.fillStyle="#cfcdd6",t.font="700 26px Arial, Helvetica, sans-serif",t.fillText(e,n/2,s/2+52)})}function s0(){return Kt("windows",128,256,(i,e,t)=>{i.fillStyle="#070810",i.fillRect(0,0,e,t);const n=10,s=22,r=e/n,a=t/s;for(let o=0;o<s;o++)for(let c=0;c<n;c++)if(Math.random()<.28){const l=Math.random()<.7;i.fillStyle=l?`rgba(255,${180+Math.random()*50},${90+Math.random()*60},${.35+Math.random()*.5})`:`rgba(120,200,255,${.25+Math.random()*.4})`,i.fillRect(c*r+r*.18,o*a+a*.22,r*.58,a*.48)}},{repeat:[1,1]})}function br(){return Kt("glow",128,128,(i,e,t)=>{const n=i.createRadialGradient(e/2,t/2,2,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.75)"),n.addColorStop(.45,"rgba(255,255,255,0.22)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)})}function r0(){return Kt("smoke",128,128,(i,e,t)=>{const n=i.createRadialGradient(e/2,t/2,4,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,0.85)"),n.addColorStop(.35,"rgba(235,235,245,0.45)"),n.addColorStop(.7,"rgba(200,200,215,0.12)"),n.addColorStop(1,"rgba(190,190,210,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)})}function a0(){return Kt("pool",256,256,(i,e,t)=>{const n=i.createRadialGradient(e/2,t/2,4,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,240,200,0.55)"),n.addColorStop(.4,"rgba(255,220,160,0.2)"),n.addColorStop(1,"rgba(255,210,150,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)})}function o0(){return Kt("crowd",256,64,(i,e,t)=>{i.fillStyle="#07070c",i.fillRect(0,0,e,t);const n=["#ffd319","#ff5a12","#2dff86","#37e6ff","#ff2e4d","#e8e6df","#8c2bff"];for(let s=0;s<420;s++){i.fillStyle=n[Math.random()*n.length|0],i.globalAlpha=.25+Math.random()*.5;const r=1.5+Math.random()*2.5;i.beginPath(),i.arc(Math.random()*e,Math.random()*t,r,0,7),i.fill()}i.globalAlpha=1},{repeat:[6,1]})}function l0(){return Kt("carbon",128,128,(i,e,t)=>{i.fillStyle="#0b0b0f",i.fillRect(0,0,e,t);const n=8;for(let s=0;s<t;s+=n)for(let r=0;r<e;r+=n){const a=(r/n+s/n&1)===0,o=i.createLinearGradient(r,s,r+n,s+n);a?(o.addColorStop(0,"#22222a"),o.addColorStop(.55,"#15151b"),o.addColorStop(1,"#0d0d12")):(o.addColorStop(0,"#101015"),o.addColorStop(.55,"#1b1b23"),o.addColorStop(1,"#0a0a0e")),i.fillStyle=o,i.fillRect(r,s,n,n),i.fillStyle=a?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.22)",i.fillRect(r,s,n,1)}},{repeat:[3,3]})}function ca(i,e=[24,22,26],t=13){return Kt(`suede:${i}`,128,128,(n,s,r)=>{n.fillStyle=`rgb(${e[0]},${e[1]},${e[2]})`,n.fillRect(0,0,s,r);const a=n.getImageData(0,0,s,r),o=a.data;for(let c=0;c<o.length;c+=4){const l=(Math.random()-.5)*t*2;o[c]=Math.max(0,Math.min(255,o[c]+l+1)),o[c+1]=Math.max(0,Math.min(255,o[c+1]+l)),o[c+2]=Math.max(0,Math.min(255,o[c+2]+l+2))}n.putImageData(a,0,0);for(let c=0;c<120;c++)n.fillStyle=`rgba(255,255,255,${.01+Math.random()*.02})`,n.beginPath(),n.arc(Math.random()*s,Math.random()*r,1+Math.random()*3,0,7),n.fill()},{repeat:[2,2]})}function c0(i="tach"){const e=i==="tach",t=e?9:6,n=e?Array.from({length:t+1},(s,r)=>String(r)):Array.from({length:t+1},(s,r)=>String(r*40));return Kt(`gauge:${i}`,256,256,(s,r,a)=>{const o=r/2,c=a/2,l=r/2-5;s.clearRect(0,0,r,a);const h=s.createRadialGradient(o,c-26,8,o,c,l);h.addColorStop(0,"#1c2030"),h.addColorStop(.7,"#0a0b11"),h.addColorStop(1,"#05060a"),s.fillStyle=h,s.beginPath(),s.arc(o,c,l,0,Math.PI*2),s.fill();const p=2.25+Math.PI/2,d=-2.25+Math.PI/2,m=p-d;if(e){const _=p-m*.74;s.strokeStyle="#ff2a18",s.lineWidth=11,s.beginPath(),s.arc(o,c,l-15,-_,-d,!1),s.stroke()}s.strokeStyle="rgba(190,196,210,0.55)",s.lineWidth=3,s.beginPath(),s.arc(o,c,l-4,-p,-d,!1),s.stroke();for(let _=0;_<=t*5;_++){const S=_/(t*5),f=p-m*S,u=_%5===0,M=l-(u?30:21),b=l-12;if(s.strokeStyle=u?"#eef1f7":"rgba(200,205,220,0.45)",s.lineWidth=u?4:2,s.beginPath(),s.moveTo(o+Math.cos(f)*M,c-Math.sin(f)*M),s.lineTo(o+Math.cos(f)*b,c-Math.sin(f)*b),s.stroke(),u){const T=n[Math.round(S*t)],A=l-48;s.fillStyle=S>.74&&e?"#ff6a4d":"#f2f4fa",s.font="italic 900 30px Arial, Helvetica, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(T,o+Math.cos(f)*A,c-Math.sin(f)*A)}}s.fillStyle="rgba(220,225,235,0.55)",s.font="700 15px Arial, Helvetica, sans-serif",s.textAlign="center",s.fillText(e?"RPM x1000":"KM/H",o,c+l*.52)})}function El(i="DB"){return Kt(`badge:${i}`,128,128,(e,t,n)=>{e.clearRect(0,0,t,n),e.fillStyle="#0b0b10",e.beginPath(),e.arc(t/2,n/2,t/2-2,0,7),e.fill(),e.strokeStyle="#ffd319",e.lineWidth=7,e.beginPath(),e.arc(t/2,n/2,t/2-7,0,7),e.stroke(),e.fillStyle="#ffd319",e.font="italic 900 54px Arial, Helvetica, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,t/2,n/2+3)})}function h0(){return Kt("windownet",256,256,(i,e,t)=>{i.clearRect(0,0,e,t),i.strokeStyle="#33333c",i.lineWidth=4;for(let n=20;n<e;n+=38)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke();for(let n=20;n<t;n+=38)i.beginPath(),i.moveTo(0,n),i.lineTo(e,n),i.stroke();i.lineWidth=12,i.strokeRect(6,6,e-12,t-12),i.fillStyle="#b3121f",i.fillRect(0,0,e,7)})}function u0(){return Kt("floormat",256,128,(i,e,t)=>{i.fillStyle="#0a0a0d",i.fillRect(0,0,e,t),i.strokeStyle="rgba(255,211,25,0.5)",i.lineWidth=3,i.strokeRect(10,10,e-20,t-20),i.fillStyle="rgba(255,211,25,0.75)",i.font="italic 900 40px Arial, Helvetica, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("DRAG BRASIL",e/2,t/2+2)},{repeat:[1,1]})}function d0(){return Kt("dashscreen",256,128,(i,e,t)=>{i.fillStyle="#04121a",i.fillRect(0,0,e,t),i.strokeStyle="rgba(47,216,255,0.18)",i.lineWidth=1;for(let n=0;n<e;n+=16)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke();for(let n=0;n<t;n+=16)i.beginPath(),i.moveTo(0,n),i.lineTo(e,n),i.stroke();i.fillStyle="#2fd8ff",i.font="italic 900 34px Arial, Helvetica, sans-serif",i.textAlign="left",i.textBaseline="middle",i.fillText("DRAG",16,36),i.fillStyle="#ffd319",i.fillText("BRASIL",16,72),i.fillStyle="#2fd8ff",i.fillRect(16,98,150,8),i.fillStyle="rgba(47,216,255,0.35)",i.fillRect(170,98,66,8)})}function f0(i){return new Fe({color:new Ke(i),metalness:.22,roughness:.42,envMapIntensity:.55})}const ln={dark:new Fe({color:723727,roughness:.7,metalness:.3}),trim:new Fe({color:1513245,roughness:.45,metalness:.7}),chrome:new Fe({color:13225174,roughness:.18,metalness:1}),tire:new Fe({color:657932,roughness:.95,metalness:0}),rim:new Fe({color:7369855,roughness:.34,metalness:.92}),rimDark:new Fe({color:3553860,roughness:.4,metalness:.8}),glass:new Zh({color:1847362,metalness:.45,roughness:.05,transparent:!0,opacity:.74,side:vn,depthWrite:!1,envMapIntensity:2.4}),interior:new Fe({color:460554,roughness:1,metalness:0,envMapIntensity:.15}),seat:new Fe({color:1774614,roughness:.95,envMapIntensity:.2}),seatRed:new Fe({color:4853784,roughness:.9,envMapIntensity:.2}),headlight:new Fe({color:16774872,emissive:16773312,emissiveIntensity:4,roughness:.2}),taillight:new Fe({color:4325384,emissive:16715808,emissiveIntensity:.9,roughness:.25}),amber:new Fe({color:3808e3,emissive:16747008,emissiveIntensity:1.2,roughness:.3})};function we(i,e,t,n=!0){const s=new te(i,e);return s.castShadow=n,s.receiveShadow=!0,t.add(s),s}function or(i,e,t,n){const s=new Nt;s.position.set(i,.345,e);const r=new Nt,a=new Nt;s.add(r),r.add(a);const o=.345,c=.29,l=new St(o,o,c,28,1);l.rotateZ(Math.PI/2),we(l,ln.tire,a);const h=new Fe({color:1908002,roughness:.9});for(let u=-2;u<=2;u++){const M=new te(new $i(o*.9,.012,6,36),h);M.rotation.y=Math.PI/2,M.position.x=u*.055,a.add(M)}const p=new St(o*.63,o*.63,c+.02,24);p.rotateZ(Math.PI/2),we(p,ln.rimDark,a,!1);const d=new St(o*.64,o*.64,.03,24);d.rotateZ(Math.PI/2);const m=we(d,ln.rim,a,!1);m.position.x=t*(c/2+.005);const _=ln.rim;for(let u=0;u<5;u++){const M=u/5*Math.PI*2,b=new te(new ke(.035,o*1.1,.075),_);b.position.set(t*(c/2+.03),Math.sin(M)*.02,0),b.rotation.x=M,a.add(b)}const S=new te(new St(.055,.055,.04,16),ln.chrome);S.rotation.z=Math.PI/2,S.position.x=t*(c/2+.02),a.add(S);const f=new te(new ke(.05,.16,.1),new Fe({color:16730642,roughness:.4,metalness:.4}));return f.position.set(t*.02,.16,.08),r.add(f),{group:s,steerGroup:r,spin:a,side:t,front:n}}function Tl({paint:i="#ff5a12",interior:e=!1,plate:t="DB"}={}){const n=new Nt,s=new Nt;n.add(s);const r=f0(i),a=new Fe({color:526347,roughness:.65,metalness:.4}),o=new Fe({color:921107,roughness:.5,metalness:.6}),c=new Ye(1.94,.56,4.55,4,.09);we(c,r,s).position.set(0,.63,0);const h=new Ye(1.88,.3,1.05,3,.07);we(h,r,s).position.set(0,.9,1.4);const d=new Ye(1.88,.3,.95,3,.07);we(d,r,s).position.set(0,.9,-1.475);for(const ie of[-1,1])we(new Ye(.16,.3,1.9,2,.05),r,s).position.set(ie*.86,.9,-.05);const _=new Fe({color:1315865,roughness:.62,metalness:.25,envMapIntensity:.3}),S=new Ye(1.82,.16,1.75,3,.055),f=we(S,_,s);f.position.set(0,.99,1.4),f.rotation.x=-.012;const u=new Ye(1.8,.14,1.5,3,.05);we(u,_,s).position.set(0,.985,-1.62);const b=new Ye(1.92,.26,.22,3,.06);we(b,r,s).position.set(0,.6,2.28);const A=new Ye(1.9,.28,.2,3,.06);we(A,r,s).position.set(0,.62,-2.26);for(const ie of[-1,1])we(new Ye(.13,.16,3.1,2,.03),o,s).position.set(ie*.92,.38,-.05);we(new Ye(1.34,.2,.08,2,.03),a,s,!1).position.set(0,.72,2.36),we(new Ye(1.12,.13,.02,2,.02),new Fe({color:328968,roughness:.9}),s,!1).position.set(0,.72,2.4);for(const ie of[-1,1]){we(new Ye(.44,.17,.08,3,.035),ln.headlight,s,!1).position.set(ie*.6,.88,2.34);const ze=new vs(new ki({map:br(),color:16771504,transparent:!0,opacity:.6,blending:Fn,depthWrite:!1}));ze.scale.set(1.1,1.1,1),ze.position.set(ie*.6,.88,2.43),s.add(ze),we(new Ye(.38,.14,.06,2,.03),ln.taillight,s,!1).position.set(ie*.66,.9,-2.31)}we(new Ye(1.45,.045,.04,2,.015),ln.taillight,s,!1).position.set(0,.83,-2.33),we(new Ye(1.5,.24,.04,2,.02),a,s,!1).position.set(0,.64,-2.34);const D=we(new Ye(.54,.07,.56,3,.03),r,s);D.position.set(0,1.09,1.24);const F=we(new ke(.4,.05,.03),new Fe({color:328968,roughness:.8}),s,!1);F.position.set(0,1.08,1.5),we(new Ye(1.62,.055,.34,2,.02),o,s).position.set(0,1.13,-2);for(const ie of[-1,1])we(new ke(.05,.18,.14),o,s).position.set(ie*.56,1.03,-2);for(const ie of[-1,1])we(new Ye(.22,.1,.13,2,.03),r,s).position.set(ie*1.01,1.03,.5),we(new ke(.12,.03,.04),o,s).position.set(ie*.94,.98,.5);const C=[];for(const ie of[-1,1]){const Ee=we(new St(.056,.062,.22,14),ln.chrome,s,!1);Ee.rotation.x=Math.PI/2,Ee.position.set(ie*.58,.38,-2.36),C.push(Ee);const ze=we(new St(.042,.042,.06,12),new yt({color:328965}),s,!1);ze.rotation.x=Math.PI/2,ze.position.set(ie*.58,.38,-2.45)}const k=[],K=[],z=we(new Ye(1.5,.07,1.72,3,.03),_,s);k.push(z,D,F),z.position.set(0,1.455,-.42),we(new Ye(1.5,.06,.1,2,.02),o,s).position.set(0,1.445,.44);const V=ln.glass;let Q=null,ee=null;for(const[ie,Ee,ze]of[[.58,-.46,.62],[-1.28,.5,.6]]){const Oe=new Nt;Oe.position.set(0,1.22,ie),Oe.rotation.x=Ee,s.add(Oe);const tt=new te(new dt(1.5,ze),V);tt.userData.windshield=ie>0,Oe.add(tt),ie>0&&(Q=tt,ee=Oe);const _t=new Fe({color:526347,roughness:.5,metalness:.4});for(const se of[ze/2,-ze/2]){const j=new te(new ke(1.56,.045,.035),_t);j.position.set(0,se,.002),Oe.add(j)}for(const se of[-.76,.76]){const j=new te(new ke(.04,ze+.045,.035),_t);j.position.set(se,0,.002),Oe.add(j)}}for(const ie of[-1,1]){const Ee=new te(new dt(1.62,.42),V);Ee.position.set(ie*.755,1.21,-.38),Ee.rotation.y=ie*Math.PI/2,s.add(Ee),K.push(Ee);for(const Oe of[.58,-1.28]){const tt=we(new ke(.055,.54,.08),o,s);tt.position.set(ie*.75,1.22,Oe),tt.rotation.x=Oe>0?-.42:.42}we(new ke(.05,.045,1.62),o,s).position.set(ie*.757,1.42,-.38)}for(const ie of[-1,1]){for(const ze of[.52,-1.2])we(new ke(.012,.48,.018),o,s,!1).position.set(ie*.955,.62,ze);we(new Ye(.16,.045,.05,2,.015),ln.chrome,s,!1).position.set(ie*.975,.78,-.62)}const ye=new Fe({color:2894902,roughness:.55,metalness:.4});for(const ie of[-.55,.55]){const Ee=we(new ke(.17,.014,1.66),ye,s,!1);Ee.position.set(ie,1.493,-.42),k.push(Ee),we(new ke(.17,.014,1.72),ye,s,!1).position.set(ie,1.075,1.4),we(new ke(.17,.014,1.36),ye,s,!1).position.set(ie,1.06,-1.62)}we(new ke(1.62,.035,.22),new Fe({color:526347,roughness:.85}),s,!1).position.set(0,1.09,.46);const q=new te(new dt(2.7,5.2),new yt({color:0,transparent:!0,opacity:.55,depthWrite:!1}));q.rotation.x=-Math.PI/2,q.position.y=.012,q.material.alphaMap=br(),q.material.opacity=.55,n.add(q);let le=null;const Se={tach:null,speed:null},Be=[];if(e){const ie=new Fe({map:ca("charcoal",[27,25,31],12),roughness:.97,metalness:.02,envMapIntensity:.16}),Ee=new Fe({map:ca("red",[62,13,22],15),roughness:.95,metalness:.02,envMapIntensity:.16}),ze=new Fe({map:l0(),color:9276821,roughness:.5,metalness:.4,envMapIntensity:.45}),Oe=new Fe({color:1250071,roughness:.78,metalness:.06,envMapIntensity:.2}),tt=new Fe({color:10133933,roughness:.3,metalness:.95,envMapIntensity:1.1}),_t=new Fe({color:657932,roughness:.96}),se=new Fe({color:11735583,roughness:.92,envMapIntensity:.18}),j=new Fe({color:2303276,roughness:.38,metalness:.85,envMapIntensity:.85}),Te=new Fe({color:1315865,roughness:.95}),Ae=new Fe({color:11735583,roughness:.5,metalness:.25});we(new Ye(1.6,.16,.5,4,.035),ie,s).position.set(0,.95,.61);const at=we(new Ye(1.44,.03,.36,3,.012),ze,s);at.position.set(0,1.045,.62),at.rotation.x=-.11,we(new Ye(1.42,.075,.03,2,.012),Oe,s,!1).position.set(0,.885,.35),we(new ke(1.36,.006,.006),Ae,s,!1).position.set(0,.906,.343);const Rt=we(new Ye(.5,.018,.28,2,.008),ze,s,!1);Rt.position.set(.4,1.062,.62),Rt.rotation.x=-.1;const ft=new te(new dt(.17,.17),new yt({map:El("DB"),transparent:!0}));ft.position.set(.4,.995,.346),ft.rotation.y=Math.PI,s.add(ft);for(const be of[-1,1]){we(new Ye(.2,.09,.05,2,.02),ze,s,!1).position.set(be*.6,.985,.352);const Mt=new te(new dt(.15,.05),new yt({color:328967}));Mt.position.set(be*.6,.985,.338),Mt.rotation.y=Math.PI,s.add(Mt);for(let zt=-1;zt<=1;zt++)we(new ke(.14,.008,.01),tt,s,!1).position.set(be*.6,.985+zt*.015,.334)}const mt=we(new Ye(.36,.15,.06,2,.02),ze,s,!1);mt.position.set(0,1.04,.37),mt.rotation.x=.16;const me=new te(new dt(.27,.098),new yt({map:d0(),color:11845833}));me.position.set(0,1.043,.338),me.rotation.set(.16,Math.PI,0),s.add(me);const Et=new te(new dt(.24,.014),new yt({color:3135743,transparent:!0,opacity:.7}));Et.position.set(0,1.017,.342),Et.rotation.set(.16,Math.PI,0),s.add(Et);for(const be of[-.23,.23]){const Ge=new te(new St(.018,.02,.024,12),tt);Ge.rotation.x=Math.PI/2,Ge.position.set(be,.925,.352),s.add(Ge)}const De=new Nt;De.position.set(-.355,1.016,.355),De.rotation.set(.18,Math.PI,0),s.add(De);const Xe=new te(new ke(.56,.21,.03),ze);De.add(Xe);for(const[be,Ge]of[-.15,.15].entries()){const Mt=new te(new $i(.071,.006,8,28),tt);Mt.position.set(Ge,0,.02),De.add(Mt);const zt=new te(new ci(.068,28),new yt({map:c0(be===0?"tach":"speed"),transparent:!0}));zt.position.set(Ge,0,.017),De.add(zt);const nn=new te(new ke(.006,.055,.004),new yt({color:be===0?16726831:16765721}));nn.geometry.translate(0,.025,0),nn.position.set(Ge,0,.026),nn.rotation.z=2.25,De.add(nn),be===0?Se.tach=nn:Se.speed=nn}const E=new yt({color:3663615});for(let be=0;be<3;be++){const Ge=new te(new ci(.0075,8),E);Ge.position.set(-.065+be*.065,-.075,.026),De.add(Ge)}we(new Ye(.34,.05,.026,2,.01),Te,s,!1).position.set(-.37,1.125,.352);for(let be=0;be<6;be++){const Ge=new te(new ci(.0105,10),new yt({color:2756884}));Ge.position.set(-.475+be*.042,1.121,.335),Ge.rotation.y=Math.PI,Ge.userData.on=be<3?3407718:be<5?16756768:16722452,s.add(Ge),Be.push(Ge)}le=new Nt,le.position.set(-.37,.842,.315),le.rotation.x=-.38,s.add(le);const O=new Fe({map:ca("wheel",[17,16,20],9),roughness:.94,metalness:.02}),re=new te(new $i(.148,.018,12,44,Math.PI*1.66),O);re.rotation.z=-Math.PI/3,le.add(re);const J=new te(new ke(.158,.024,.022),O);J.position.set(0,-.136,0),le.add(J);for(const be of[0,Math.PI,-Math.PI/2]){const Ge=new te(new ke(.028,.15,.012),tt);Ge.position.set(Math.cos(be)*.07,Math.sin(be)*.07,0),Ge.rotation.z=be-Math.PI/2,le.add(Ge)}const ce=new te(new St(.047,.05,.035,16),Te);ce.rotation.x=Math.PI/2,ce.position.z=-.012,le.add(ce);const fe=new te(new ci(.036,20),new yt({map:El("DB"),transparent:!0}));fe.position.z=-.032,fe.rotation.y=Math.PI,le.add(fe);const Y=new te(new ke(.032,.018,.012),new yt({color:16765721}));Y.position.set(0,.15,0),le.add(Y);for(const be of[-1,1])we(new ke(.065,.05,.01),ze,le,!1).position.set(be*.132,-.032,.03);const $=new te(new St(.04,.045,.3,12),Te);$.rotation.x=Math.PI/2,$.position.set(-.37,.94,.43),s.add($);const ue=we(new Ye(.14,.1,.2,2,.03),Te,s,!1);ue.position.set(-.37,.955,.43),ue.rotation.x=-.2;for(const be of[-1,1]){const Ge=new te(new St(.006,.008,.16,8),Te);Ge.rotation.z=Math.PI/2,Ge.rotation.y=be*.3,Ge.position.set(-.37+be*.11,.985,.45),s.add(Ge)}we(new Ye(1.52,.05,1.08,2,.03),ln.interior,s,!1).position.set(0,.918,-.04);const Z=new Fe({map:u0(),roughness:1,metalness:0});for(const be of[-.37,.4]){const Ge=new te(new dt(.48,.66),Z);Ge.rotation.x=-Math.PI/2,Ge.position.set(be,.947,-.16),s.add(Ge)}we(new Ye(.28,.22,.78,3,.06),ie,s,!1).position.set(0,.93,-.05);const de=we(new Ye(.24,.018,.62,2,.008),ze,s,!1);de.position.set(0,1.028,-.03),de.rotation.x=-.02;for(let be=0;be<4;be++){const Ge=new te(new St(.008,.008,.03,8),tt);Ge.position.set(-.07+be*.047,1.045,-.16),s.add(Ge);const Mt=new te(new Yi(.009,8,6),be===0?Ae:Te);Mt.position.set(-.07+be*.047,1.061,-.16),s.add(Mt)}const oe=new te(new uo(.055,.13,12),Oe);oe.position.set(.06,.985,.1),s.add(oe);const he=new te(new St(.011,.013,.2,8),tt);he.position.set(.06,1.03,.11),he.rotation.x=.22,s.add(he);const Ie=new te(new Ye(.042,.078,.038,2,.018),new Fe({color:1447451,roughness:.38,metalness:.2}));Ie.position.set(.06,1.085,.13),Ie.rotation.x=.22,s.add(Ie);const Je=new te(new St(.013,.016,.24,10),tt);Je.position.set(.06,1,-.28),Je.rotation.x=1.15,s.add(Je);const ae=new te(new St(.02,.02,.08,10),Te);ae.position.set(.06,1.055,-.35),ae.rotation.x=1.15,s.add(ae);const Ue=new te(new St(.05,.05,.32,14),Ae);Ue.position.set(.45,1,-.3),Ue.rotation.x=.16,s.add(Ue);const Qe=new te(new St(.012,.012,.06,8),Te);Qe.position.set(.45,1.18,-.27),s.add(Qe);for(const[be,Ge,Mt]of[[-.37,Ee,se],[.4,ie,null]]){we(new Ye(.5,.15,.54,3,.06),Ge,s).position.set(be,.99,-.42);for(const Lt of[-1,1]){const Gt=we(new Ye(.09,.12,.5,2,.03),Ge,s);Gt.position.set(be+Lt*.23,1.035,-.4),Gt.rotation.z=Lt*.12}const nn=we(new Ye(.46,.5,.15,3,.06),Ge,s);nn.position.set(be,1.16,-.72),nn.rotation.x=-.14;for(const Lt of[-1,1]){const Gt=we(new Ye(.085,.42,.17,2,.04),Ge,s);Gt.position.set(be+Lt*.2,1.15,-.7),Gt.rotation.x=-.14,Gt.rotation.z=Lt*.1}const _i=we(new Ye(.28,.13,.12,2,.05),Ge,s);_i.position.set(be,1.375,-.775),_i.rotation.x=-.14;for(const Lt of[-1,1]){const Gt=we(new ke(.055,.045,.02),Te,s,!1);Gt.position.set(be+Lt*.1,1.3,-.795),Gt.rotation.x=-.14}for(const Lt of[-1,1])we(new ke(.05,.04,.5),tt,s,!1).position.set(be+Lt*.16,.932,-.4);if(Mt){for(const ss of[-1,1]){const rs=we(new ke(.055,.34,.008),Mt,s,!1);rs.position.set(be+ss*.145,1.19,-.628),rs.rotation.z=-ss*.15}we(new ke(.4,.05,.008),Mt,s,!1).position.set(be,1.015,-.56),we(new ke(.07,.05,.02),tt,s,!1).position.set(be,1.015,-.55)}}const pe=(be,Ge=.028)=>new St(Ge,Ge,be,10);for(const be of[-1,1]){const Ge=new te(pe(.56),j);Ge.position.set(be*.62,1.16,-.98),s.add(Ge);const Mt=new te(pe(.58),j);Mt.position.set(be*.6,1.22,-1.07),Mt.rotation.x=.5,s.add(Mt)}const ot=new te(pe(1.24),j);ot.rotation.z=Math.PI/2,ot.position.set(0,1.44,-.98),s.add(ot);const wt=new te(pe(1.24),j);wt.rotation.z=Math.PI/2,wt.position.set(0,1.3,-.93),s.add(wt);for(const be of[-1,1]){const Ge=new te(pe(1.1,.024),j);Ge.rotation.x=Math.PI/2,Ge.position.set(be*.665,1.02,-.32),s.add(Ge);const Mt=new te(pe(.34,.04),Te);Mt.rotation.x=Math.PI/2,Mt.position.set(be*.665,1.02,-.18),s.add(Mt);const zt=new te(pe(.72,.024),j);zt.position.set(be*.665,1.15,-.72),zt.rotation.x=.72,s.add(zt)}for(const be of[-1,1]){we(new Ye(.05,.44,1.45,2,.02),ie,s).position.set(be*.72,.97,-.25),we(new Ye(.12,.06,.5,2,.025),Oe,s,!1).position.set(be*.66,1,-.05),we(new Ye(.1,.014,.12,2,.006),ze,s,!1).position.set(be*.655,1.035,.06),we(new Ye(.03,.026,.13,2,.008),Te,s,!1).position.set(be*.702,1.06,.1),we(new ke(.004,.004,1.1),Ae,s,!1).position.set(be*.7,1.115,-.28);const Lt=new te(new St(.075,.075,.02,20),_t);Lt.rotation.z=Math.PI/2,Lt.position.set(be*.695,.93,.02),s.add(Lt);const Gt=new te(new $i(.075,.008,6,22),tt);Gt.rotation.y=Math.PI/2,Gt.position.set(be*.69,.93,.02),s.add(Gt)}const hn=new te(new dt(1.18,.4),new yt({map:h0(),transparent:!0,side:vn,depthWrite:!1}));hn.rotation.y=Math.PI/2,hn.position.set(-.735,1.2,-.34),s.add(hn);const mi=new te(new St(.008,.008,1.2,8),tt);mi.rotation.x=Math.PI/2,mi.position.set(-.735,1.405,-.34),s.add(mi),we(new ke(1.38,.02,1.58),ie,s,!1).position.set(0,1.408,-.42);const Ls=we(new Ye(.2,.055,.04,2,.015),Te,s,!1);Ls.position.set(0,1.402,.375),Ls.rotation.x=-.2;const gi=new te(new dt(.17,.038),new Fe({color:2570314,roughness:.08,metalness:1,envMapIntensity:1.6}));gi.position.set(0,1.402,.351),gi.rotation.y=Math.PI,s.add(gi),we(new ke(.022,.07,.022),Te,s,!1).position.set(0,1.432,.39);const yn=new Rr(12834031,.7,2.4,2);yn.position.set(0,1.3,-.42),s.add(yn)}const xe=[or(-.88,1.43,-1,!0),or(.88,1.43,1,!0),or(-.91,-1.45,-1,!1),or(.91,-1.45,1,!1)];for(const ie of xe)n.add(ie.group);const Ve=[];s.traverse(ie=>{ie.isMesh&&ie.material===ln.taillight&&Ve.push(ie.material)});function vt(ie){r.color.set(ie)}return{root:n,body:s,wheels:xe,paintMat:r,windshieldGlass:Q,windshieldGroup:ee,sideGlassParts:K,roofParts:k,steeringWheel:le,needles:Se,shiftLights:Be,exhaustTips:C,setPaint:vt}}const bl=4.2,Fi=402.336;function p0(){const i=new Nt,e=new te(new dt(900,1200),new Fe({color:592399,roughness:1,metalness:0}));e.rotation.x=-Math.PI/2,e.position.set(0,-.04,220),e.receiveShadow=!0,i.add(e);const t=t0(),n=new te(new dt(20,620),new Fe({map:t,color:10987440,roughness:.92,metalness:.02}));n.rotation.x=-Math.PI/2,n.position.set(0,0,240),n.receiveShadow=!0,i.add(n);for(const se of[-1,1]){const j=new te(new dt(6,620),new Fe({color:1381659,roughness:.95}));j.rotation.x=-Math.PI/2,j.position.set(se*13,-.01,240),i.add(j)}const s=new te(new dt(30,120),new Fe({color:3813414,roughness:1}));s.rotation.x=-Math.PI/2,s.position.set(0,-.005,530),i.add(s);const r=new Fe({color:14342092,roughness:.7,emissive:2763302,emissiveIntensity:.4}),a=new Fe({color:14070311,roughness:.75,emissive:3812352,emissiveIntensity:.5});for(const se of[-1,1]){const j=new te(new dt(.16,600),r);j.rotation.x=-Math.PI/2,j.position.set(se*9.7,.012,240),i.add(j)}for(const se of[-.16,.16]){const j=new te(new dt(.1,600),a);j.rotation.x=-Math.PI/2,j.position.set(se,.013,240),i.add(j)}const o=n0();for(const[se,j]of[[0,20],[Fi,20]]){const Te=new te(new dt(j,1.1),new yt({map:o}));Te.rotation.x=-Math.PI/2,Te.position.set(0,.02,se),i.add(Te)}for(const se of[-1,1]){const j=new te(new dt(1.2,6),new yt({color:16777215,transparent:!0,opacity:.07}));j.rotation.x=-Math.PI/2,j.position.set(se*bl,.015,-3.5),i.add(j)}const c=new Fe({color:2303020,roughness:.55,metalness:.6});for(const se of[-1,1]){const j=new te(new ke(.12,.85,560),c);j.position.set(se*11.8,.42,220),j.castShadow=!1,j.receiveShadow=!0,i.add(j);const Te=new te(new ke(.26,.09,560),new Fe({color:4474191,roughness:.4,metalness:.7}));Te.position.set(se*11.8,.87,220),i.add(Te);for(let Ae=-20;Ae<500;Ae+=12){const We=new te(new ke(.1,.85,.1),c);We.position.set(se*11.95,.42,Ae),i.add(We)}}const l=[["DRAG BRASIL","#0b0b12","#ffd319","#ff5a12"],["NITRO","#101018","#37e6ff","#1b63ff"],["TURBO","#120c08","#ff8a3d","#ff5a12"],["GASOLINA","#0b0f0c","#2dff86","#1f9c55"],["PNEU FUDIDO","#0e0a12","#e8e6df","#8c2bff"],["402 METROS","#0f0b0b","#ff2e4d","#7d0719"]];for(let se=0;se<18;se++){const j=-16+se*26;if(j>410)break;const Te=yl(...l[se%l.length]);for(const Ae of[-1,1]){if((se+(Ae>0?1:0))%3===0)continue;const We=new te(new dt(9,.8),new yt({map:Te,transparent:!0}));We.position.set(Ae*11.7,.48,j),We.rotation.y=Ae>0?-Math.PI/2:Math.PI/2,i.add(We)}}const h=a0(),p=new Fe({color:1908261,roughness:.6,metalness:.6}),d=new Fe({color:16774352,emissive:16773576,emissiveIntensity:4.5,roughness:.3}),m=br();for(let se=-30;se<480;se+=48)for(const j of[-1,1]){const Te=j*15.5,Ae=new te(new St(.14,.2,9,8),p);Ae.position.set(Te,4.5,se),i.add(Ae);const We=new te(new ke(2.4,.12,.12),p);We.position.set(Te-j*1.1,8.9,se),i.add(We);const at=new te(new ke(1.1,.12,.5),d);at.position.set(Te-j*2.1,8.82,se),i.add(at);const At=new vs(new ki({map:m,color:16770736,transparent:!0,opacity:.55,blending:Fn,depthWrite:!1}));At.scale.set(7,5,1),At.position.set(Te-j*2.1,8.6,se),i.add(At);const I=new te(new dt(26,26),new yt({map:h,transparent:!0,opacity:.4,blending:Fn,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.position.set(Te-j*3,.03,se),i.add(I)}const _=[10,150,300,405];for(const se of _){const j=new Rr(16769968,320,75,2);j.position.set(0,9,se),i.add(j)}const S=new Fe({color:1184281,roughness:.9}),f=o0(),u=new yt({map:f,transparent:!0,opacity:.55,color:9079449});for(const se of[-1,1]){const j=new Nt;for(let Ae=0;Ae<5;Ae++){const We=new te(new ke(6,1.1,2.6),S);We.position.set(se*(24+Ae*1.9),.55+Ae*1.1,-8),We.receiveShadow=!0,j.add(We);const at=new te(new dt(26,1),u);at.rotation.y=se>0?-Math.PI/2:Math.PI/2,at.position.set(se*(23+Ae*1.9),1+Ae*1.1,-8),j.add(at)}const Te=new te(new ke(10,.16,28),S);Te.position.set(se*28,8.6,-8),j.add(Te);for(let Ae=-20;Ae<=4;Ae+=12){const We=new te(new ke(.24,8.5,.24),S);We.position.set(se*23,4.3,Ae),j.add(We)}i.add(j)}const M=document.createElement("canvas");M.width=1024,M.height=256;const b=M.getContext("2d");b.fillStyle="#06060a",b.fillRect(0,0,1024,256),b.strokeStyle="#ff5a12",b.lineWidth=8,b.strokeRect(8,8,1008,240),b.fillStyle="#ffd319",b.font="italic 900 132px Arial, Helvetica, sans-serif",b.textAlign="center",b.textBaseline="middle",b.fillText("DRAG BRASIL",512,118),b.fillStyle="#ff5a12",b.font="700 30px Arial, Helvetica, sans-serif",b.fillText("A R R A N C A D A   N O T U R N A",512,208);const T=new dc(M);T.colorSpace=jt;const A=new te(new dt(24,6),new yt({map:T,transparent:!0}));A.position.set(0,9,-42),i.add(A);const w=new vs(new ki({map:m,color:16747050,transparent:!0,opacity:.55,blending:Fn,depthWrite:!1}));w.scale.set(34,16,1),w.position.set(0,9,-43),i.add(w);for(const se of[-1,1]){const j=new te(new St(.2,.28,9,8),p);j.position.set(se*11,4.5,-42.5),i.add(j)}const g=[[100,"100m"],[200,"200m"],[300,"300m"]];for(const[se,j]of g){const Te=i0(j,"DISTÂNCIA");for(const Ae of[-1,1]){const We=new te(new dt(2.4,2.4),new yt({map:Te}));We.position.set(Ae*12.6,2.1,se),We.rotation.y=Ae>0?-Math.PI/3:Math.PI/3,i.add(We);const at=new te(new ke(.12,1.3,.12),c);at.position.set(Ae*12.6,.65,se),i.add(at)}}const y=yl("CHEGADA · 402 m","#0a0a10","#ffd319","#ff2e4d");for(const se of[-1,1]){const j=new te(new ke(.55,8,.55),c);j.position.set(se*11,4,Fi),j.castShadow=!0,i.add(j)}const U=new te(new ke(22.5,.4,.5),c);U.position.set(0,7.9,Fi),i.add(U);const L=new te(new dt(15,2.6),new yt({map:y,transparent:!0}));L.position.set(0,6.6,Fi-.32),L.rotation.y=Math.PI,i.add(L);const D=[];for(let se=0;se<9;se++){const j=new te(new Yi(.16,8,8),new yt({color:16765721}));j.position.set(-7+se*1.75,8.15,Fi-.3),i.add(j),D.push(j)}for(let se=0;se<16;se++){const j=new te(new ke(1.4,.55,.6),new Fe({color:se%2?13223610:1579039,roughness:.8}));j.position.set(-11+se*1.45,.28,545),i.add(j)}const F=new Nt;F.position.set(0,0,11.5),F.scale.set(1.15,1,1.15);const W=new te(new St(.075,.1,3.2,8),new Fe({color:1381660,roughness:.5,metalness:.7}));W.position.y=1.6,F.add(W);const C=new te(new ke(.8,.12,.8),c);C.position.y=.06,F.add(C);const k=new te(new ke(.46,1.95,.16),new Fe({color:526348,roughness:.35,metalness:.4}));k.position.set(0,2.35,.02),F.add(k);const K=new Yi(.135,12,12),z={};function ne(se,j,Te){const Ae=new Fe({color:1381660,emissive:Te,emissiveIntensity:.06,roughness:.25}),We=new te(K,Ae);We.position.set(0,j,.13),F.add(We);const at=new vs(new ki({map:m,color:Te,transparent:!0,opacity:0,blending:Fn,depthWrite:!1}));return at.scale.set(.52,.52,1),at.position.set(0,j,.22),F.add(at),z[se]={mesh:We,mat:Ae,halo:at,color:Te},We}ne("a1",3.02,16753664),ne("a2",2.76,16753664),ne("a3",2.5,16753664),ne("green",2.18,3014534),ne("red",1.86,16723533),i.add(F);const V=new Nt,Q=new te(new ke(1.6,3.4,1.2),new Fe({color:921109,roughness:.6,metalness:.3}));Q.position.y=1.7,V.add(Q);const ee=new te(new dt(1.25,.9),new yt({color:529178}));ee.position.set(0,2.55,.605),V.add(ee),V.position.set(-14.5,0,3.5),V.rotation.y=.25,i.add(V);const ye=new tn,He=900,q=new Float32Array(He*3),le=new Float32Array(He);for(let se=0;se<He;se++){const j=300+Math.random()*500,Te=Math.random()*Math.PI*2,Ae=Math.random()*Math.PI*.42;q[se*3]=Math.cos(Te)*Math.cos(Ae)*j,q[se*3+1]=Math.sin(Ae)*j+30,q[se*3+2]=Math.sin(Te)*Math.cos(Ae)*j+200,le[se]=Math.random()}ye.setAttribute("position",new rn(q,3)),ye.setAttribute("aSize",new rn(le,1));const Se=new cc({color:13621503,size:1.6,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,fog:!1}),Be=new hc(ye,Se);i.add(Be);const xe=new te(new ci(19,40),new yt({color:16051930,fog:!1}));xe.position.set(-150,120,-260),xe.lookAt(0,30,0),i.add(xe);const Ve=new vs(new ki({map:m,color:13621503,transparent:!0,opacity:.6,blending:Fn,depthWrite:!1,fog:!1}));Ve.scale.set(110,110,1),Ve.position.set(-150,120,-262),i.add(Ve);const vt=s0(),ie=new Nt,Ee=(se,j)=>se+Math.random()*(j-se);for(let se=0;se<26;se++){const j=Ee(10,24),Te=Ee(10,22),Ae=Ee(18,70),We=new Fe({color:658194,roughness:.9,metalness:.2,map:vt,emissiveMap:vt,emissive:16777215,emissiveIntensity:.65}),at=new te(new ke(j,Ae,Te),We),At=Math.floor(Math.random()*4);let I,Rt;At===0?(I=Ee(-320,-140),Rt=Ee(-160,400)):At===1?(I=Ee(140,320),Rt=Ee(-160,400)):At===2?(I=Ee(-220,220),Rt=Ee(-330,-150)):(I=Ee(-220,220),Rt=Ee(430,540)),at.position.set(I,Ae/2-.5,Rt),ie.add(at)}i.add(ie);const ze=new Fe({color:660240,roughness:1});for(let se=0;se<60;se++){const j=Math.random()<.5?-1:1,Te=new te(new Yi(Ee(1,2.6),6,5),ze);Te.position.set(j*Ee(17,45),Ee(.4,1.2),Ee(-60,470)),Te.scale.y=Ee(.7,1.5),i.add(Te)}let Oe={a:[!1,!1,!1],green:!1,red:!1};function tt(se){Oe=se;const j=["a1","a2","a3"];for(let Te=0;Te<3;Te++){const Ae=z[j[Te]],We=!!se.a[Te];Ae.mat.emissiveIntensity=We?7:.06,Ae.halo.material.opacity=We?.85:0}for(const Te of["green","red"]){const Ae=z[Te],We=Te==="green"?!!se.green:!!se.red;Ae.mat.emissiveIntensity=We?7:.05,Ae.halo.material.opacity=We?.9:0}}tt(Oe);function _t(se){const j=.45+Math.sin(se*1.7)*.08;w.material.opacity=j;for(const Te of D)Te.material.color.setHSL(.13,1,.55+Math.sin(se*3+Te.position.x)*.05)}return{group:i,setTree:tt,update:_t,LANE:bl,FINISH:Fi,treePosition:new N(0,2.4,11.5)}}function wl(i,e,{additive:t=!1,color:n=16777215}={}){const s=new tn,r=new Float32Array(i*3),a=new Float32Array(i),o=new Float32Array(i);for(let h=0;h<i;h++)r[h*3+1]=-1e3;s.setAttribute("position",new rn(r,3)),s.setAttribute("aSize",new rn(a,1)),s.setAttribute("aAlpha",new rn(o,1));const c=new ei({uniforms:{uTex:{value:e},uColor:{value:new Ke(n)},uScale:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:t?Fn:Wi}),l=new hc(s,c);return l.frustumCulled=!1,{geo:s,mat:c,points:l,positions:r,sizes:a,alphas:o,count:i}}class m0{constructor(e){this.scene=e,this.smoke=wl(320,r0(),{color:14146018}),this.smoke.mat.uniforms.uScale.value=1,e.add(this.smoke.points),this.fire=wl(120,br(),{additive:!0,color:16751162}),e.add(this.fire.points),this.smokeParts=Array.from({length:this.smoke.count},()=>({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1})),this.fireParts=Array.from({length:this.fire.count},()=>({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1})),this.si=0,this.fi=0,this._tmp=new N}emitSmoke(e,t=1,n=null){for(let s=0;s<Math.max(1,Math.round(t*2));s++){const r=this.smokeParts[this.si];this.si=(this.si+1)%this.smokeParts.length,r.alive=!0,r.x=e.x+(Math.random()-.5)*.3,r.y=e.y+Math.random()*.12,r.z=e.z+(Math.random()-.5)*.3;const a=.5+t*1.2;r.vx=(Math.random()-.5)*a+(n?n.x*t*.6:0),r.vy=.3+Math.random()*.7,r.vz=(Math.random()-.5)*a+(n?n.z*t*.6:0),r.max=1.1+Math.random()*1.5,r.life=r.max,r.size=26+Math.random()*26+t*16}}emitBackfire(e,t){for(let n=0;n<5;n++){const s=this.fireParts[this.fi];this.fi=(this.fi+1)%this.fireParts.length,s.alive=!0,s.x=e.x,s.y=e.y,s.z=e.z,s.vx=(Math.random()-.5)*1.4+t.x*3,s.vy=(Math.random()-.5)*.8+.3,s.vz=(Math.random()-.5)*1.4+t.z*3,s.max=.16+Math.random()*.16,s.life=s.max,s.size=14+Math.random()*16}}update(e){const t=Math.min(e,.05),n=this.smoke;for(let r=0;r<n.count;r++){const a=this.smokeParts[r];if(!a.alive){n.alphas[r]=0;continue}if(a.life-=t,a.life<=0){a.alive=!1,n.alphas[r]=0;continue}a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.vy+=.55*t,a.vx*=1-t*1.6,a.vz*=1-t*1.6;const o=a.life/a.max;n.positions[r*3]=a.x,n.positions[r*3+1]=a.y,n.positions[r*3+2]=a.z,n.sizes[r]=a.size*(1.4-o*.5),n.alphas[r]=Math.min(1,o*1.8)*.3}n.geo.attributes.position.needsUpdate=!0,n.geo.attributes.aSize.needsUpdate=!0,n.geo.attributes.aAlpha.needsUpdate=!0;const s=this.fire;for(let r=0;r<s.count;r++){const a=this.fireParts[r];if(!a.alive){s.alphas[r]=0;continue}if(a.life-=t,a.life<=0){a.alive=!1,s.alphas[r]=0;continue}a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.vx*=1-t*4,a.vy*=1-t*3,a.vz*=1-t*4;const o=a.life/a.max;s.positions[r*3]=a.x,s.positions[r*3+1]=a.y,s.positions[r*3+2]=a.z,s.sizes[r]=a.size*(.6+o*.9),s.alphas[r]=o}s.geo.attributes.position.needsUpdate=!0,s.geo.attributes.aSize.needsUpdate=!0,s.geo.attributes.aAlpha.needsUpdate=!0}clear(){for(const e of this.smokeParts)e.alive=!1;for(const e of this.fireParts)e.alive=!1;for(let e=0;e<this.smoke.count;e++)this.smoke.alphas[e]=0;for(let e=0;e<this.fire.count;e++)this.fire.alphas[e]=0;this.smoke.geo.attributes.aAlpha.needsUpdate=!0,this.fire.geo.attributes.aAlpha.needsUpdate=!0}}const Al=1.225,lr=9.81;function Ht(i,e,t){return i<e?e:i>t?t:i}function g0(i,e,t){return i+(e-i)*t}class pr{constructor(e){this.spec=e,this.reset()}reset(){const e=this.spec;this.speed=0,this.distance=0,this.gear=1,this.engineRpm=e.idle,this.throttle=0,this.clutch=!0,this.steer=0,this.brake=0,this.accel=0,this.wheelspin=0,this.tireTemp=.25,this.shiftTimer=0,this.shiftCount=0,this.bogTimer=0,this.clutchSlip=0,this.releaseRpm=0,this.releaseQuality=1,this.lateral=0,this.lateralV=0,this.odo=0,this.launched=!1,this.justReleased=!1,this.justShifted=!1,this.hitWall=!1,this.redlineCut=0,this.prevClutch=!0,this.wheelRpm=0,this.time=0}get ratio(){return this.spec.gears[this.gear-1]*this.spec.finalDrive}get speedKmh(){return this.speed*3.6}get rpmNorm(){return Ht((this.engineRpm-this.spec.idle)/(this.spec.redline-this.spec.idle),0,1.12)}torqueAt(e){const t=this.spec,n=Ht(e/t.peakRpm,.12,1.6);let s=1-.52*Math.pow(n-1,2);return n>1.32&&(s*=Ht(1-(n-1.32)*.9,.35,1)),e>t.redline&&(s*=.25),Math.max(30,t.torque*s)}shiftUp(){return this.gear<this.spec.gears.length&&this.shiftTimer<=0?(this.gear++,this.shiftTimer=.13,this.shiftCount++,this.justShifted=!0,!0):!1}shiftDown(){return this.gear>1&&this.shiftTimer<=0?(this.gear--,this.shiftTimer=.13,this.justShifted=!0,!0):!1}autoShift(){if(this.shiftTimer>0)return;const e=this.wheelRpm||this.engineRpm;e>this.spec.redline-260&&this.gear<this.spec.gears.length?this.shiftUp():e<this.spec.peakRpm*.42&&this.gear>1&&this.speed<20&&this.shiftDown()}step(e,t={},n=!1){e=Math.min(e,1/30);const s=this.spec;this.time+=e,this.justReleased=!1,this.justShifted=!1,this.hitWall=!1,this.throttle=Ht(t.throttle||0,0,1);const r=!!t.clutch;if(this.steer=Ht(t.steer||0,-1,1),this.brake=Ht(t.brake||0,0,1),this.prevClutch&&!r){this.justReleased=!0,this.releaseRpm=this.engineRpm,this.clutchSlip=.65;const b=s.launchRpm,T=Ht((this.releaseRpm-b-900)/2800,0,1),A=this.releaseRpm<b-1400;this.releaseQuality=(1-T*.24)*(A?.82:1),A&&(this.bogTimer=.55),this.speed>.4&&(this.launched=!0)}this.prevClutch=r,this.clutch=r,this.shiftTimer=Math.max(0,this.shiftTimer-e),this.bogTimer=Math.max(0,this.bogTimer-e),this.clutchSlip>0&&(this.clutchSlip=Math.max(0,this.clutchSlip-e));const o=this.speed/(2*Math.PI*s.wheelRadius)*this.ratio*60;if(this.wheelRpm=o,n){let b=s.idle;this.clutch&&this.throttle>.03&&(b=s.idle+this.throttle*(s.redline-s.idle)),this.engineRpm+=(b-this.engineRpm)*Math.min(1,e*2.4),this.engineRpm=Ht(this.engineRpm,s.idle,s.redline),this.speed=0,this.accel=0,this.wheelspin*=Math.exp(-e*5),this.tireTemp=Math.max(.2,this.tireTemp-e*.05);return}if(this.clutch){const b=this.throttle>.03?s.idle+this.throttle*(s.redline-s.idle):s.idle;this.engineRpm+=(b-this.engineRpm)*Math.min(1,e*3),this.engineRpm=Ht(this.engineRpm,s.idle,s.redline),this.wheelspin*=Math.exp(-e*4),this.accel=0,this.applyResistance(e,!1);return}let c=o;if(this.clutchSlip>0){const b=1-this.clutchSlip/.65;c=g0(this.releaseRpm,Math.max(o,s.idle),b*b)}this.wheelspin>.35&&(c=Math.max(c,Math.min(s.redline+150,o+this.wheelspin*2200))),this.shiftTimer>0&&(c=Math.max(c,o)),this.engineRpm=Ht(Math.max(c,(this.speed>1,s.idle)),s.idle,s.redline+150);let l=this.torqueAt(this.engineRpm)*this.throttle;this.shiftTimer>0&&(l*=.06),this.bogTimer>0&&(l*=.55),this.throttle<.03&&(l*=.15);let h=l*this.ratio*.9/s.wheelRadius;const p=s.mass*Ht(this.accel,-12,18)*.15,d=Math.max(s.mass*lr*.4,s.mass*lr*.56+p),_=s.grip*(.93+this.tireTemp*.07)*this.releaseQuality*d;let S=0;h>_&&this.throttle>.15?(h=_*.74,S=1):S=Ht(h/Math.max(_,1)*.45,0,.8),this.wheelspin>.7&&this.speed<8&&(S=Math.max(S,.85)),this.wheelspin+=(S-this.wheelspin)*Math.min(1,e*7),this.tireTemp=Ht(this.tireTemp+this.wheelspin*e*.09,.2,1);let f=.5*Al*s.cdA*this.speed*this.speed+.014*s.mass*lr;this.throttle<.04&&(f+=s.mass*.45),h-=f,this.brake>0&&this.speed>.2&&(h-=this.brake*s.mass*11),this.speed<.01&&h<0&&(h=0),this.accel=h/s.mass;const u=this.speed;this.speed=Math.max(0,this.speed+this.accel*e);const M=(u+this.speed)*.5;this.distance+=M*e,this.odo+=M*e,this.speed>1&&(this.lateralV+=this.steer*this.speed*.3*e),this.lateralV*=Math.exp(-e*2.1),this.lateral+=this.lateralV*e,Math.abs(this.lateral)>2.9&&(this.lateral=Ht(this.lateral,-2.9,2.9),this.lateralV*=-.25,this.speed*=.992,this.hitWall=!0),this.engineRpm>=s.redline?this.redlineCut=1:this.redlineCut=Math.max(0,this.redlineCut-e*4)}applyResistance(e,t=!0){if(this.speed<=0){this.speed=0;return}const n=this.spec,s=(.5*Al*n.cdA*this.speed*this.speed+.014*n.mass*lr)/n.mass;this.speed=Math.max(0,this.speed-s*e),this.distance+=this.speed*e,this.odo+=this.speed*e,this.speed>.5&&(this.lateralV*=Math.exp(-e*2.5),this.lateral+=this.lateralV*e)}}const _0=402.336,li=[{id:"laranja",name:"Laranja Brasa",hex:"#ff5a12",metal:.75,rough:.24},{id:"amarelo",name:"Amarelo Taxi",hex:"#ffc400",metal:.6,rough:.28},{id:"verde",name:"Verde Macaco",hex:"#25c45b",metal:.65,rough:.26},{id:"azul",name:"Azul Noite",hex:"#1b63ff",metal:.8,rough:.22},{id:"roxo",name:"Roxo Veneno",hex:"#8c2bff",metal:.75,rough:.24},{id:"vermelho",name:"Vermelho Sangue",hex:"#d20d24",metal:.7,rough:.26},{id:"branco",name:"Branco Perola",hex:"#e8e6df",metal:.45,rough:.3},{id:"preto",name:"Preto Fosco",hex:"#16161b",metal:.35,rough:.55}],Rs=[{id:"falcao",name:"FALCÃO V8",klass:"V8 5.0",price:0,tagline:"O clássico de arrancada. Pesado, bruto, sem frescura.",mass:1450,torque:480,peakRpm:4300,redline:6800,idle:850,gears:[3.22,2.08,1.49,1.16,.92,.76],finalDrive:3.55,wheelRadius:.345,cdA:.82,grip:1.02,launchRpm:3900,color:"#ff5a12"},{id:"tubarao",name:"TUBARÃO V8",klass:"V8 6.2",price:3500,tagline:"Mais torque embaixo. Sai de lado se pisar demais.",mass:1520,torque:610,peakRpm:4100,redline:6600,idle:800,gears:[3.05,1.98,1.44,1.12,.9,.74],finalDrive:3.42,wheelRadius:.35,cdA:.86,grip:1.08,launchRpm:3700,color:"#1b63ff"},{id:"foguete",name:"FOGUETE TURBO",klass:"TURBO 2.0",price:8e3,tagline:"Leve igual papel. O turbo acorda depois dos 3 mil.",mass:1160,torque:445,peakRpm:5200,redline:7600,idle:950,gears:[3.35,2.18,1.56,1.2,.95,.79],finalDrive:3.9,wheelRadius:.33,cdA:.68,grip:1.13,launchRpm:4600,color:"#ffc400"},{id:"lenda",name:"LENDA 900",klass:"PRO MOD",price:16e3,tagline:"Gaiola, slicks e 900 cv. Não é carro, é um foguete com placa.",mass:1080,torque:880,peakRpm:5e3,redline:8200,idle:1100,gears:[3.6,2.3,1.62,1.24,1,.82],finalDrive:4.11,wheelRadius:.36,cdA:.62,grip:1.35,launchRpm:5200,color:"#8c2bff"}],Pc=[{id:"engine",name:"MOTOR",desc:"Comando, admissão e acerto de injeção.",effect:"+7% de torque por nível",max:6,base:650,growth:1.55},{id:"tires",name:"PNEUS",desc:"Composto mais mole e pressão de arrancada.",effect:"+5% de aderência por nível",max:6,base:550,growth:1.55},{id:"weight",name:"PESO",desc:"Bancos fora, fibra no lugar do aço.",effect:"−3% de massa por nível",max:6,base:600,growth:1.55},{id:"gearbox",name:"CÂMBIO",desc:"Relação final curta pra esticar menos e sair mais.",effect:"+2% de redução final por nível",max:6,base:750,growth:1.55}];function Lc(i,e){return Math.round(i.base*Math.pow(i.growth,e)/50)*50}function Zn(i,e={}){const t={engine:e.engine|0,tires:e.tires|0,weight:e.weight|0,gearbox:e.gearbox|0};return{id:i.id,name:i.name,mass:i.mass*(1-.03*t.weight),torque:i.torque*(1+.07*t.engine),peakRpm:i.peakRpm,redline:i.redline,idle:i.idle,gears:i.gears.slice(),finalDrive:i.finalDrive*(1+.02*t.gearbox),wheelRadius:i.wheelRadius,cdA:i.cdA,grip:i.grip*(1+.05*t.tires),launchRpm:i.launchRpm}}function Rl(i,e){const t=Zn(i,e),s=t.peakRpm*Math.PI*2/60;return Math.round(t.torque*s/745.7)}const _s=[{name:"ZÉ DO TURBO",quote:"“Essa reta é minha desde 1998, garoto.”",car:"falcao",upgrades:{engine:1,tires:1},reward:1500,tier:1},{name:"DONA ZILDA",quote:"“Sai da frente que eu tô atrasada pro bingo.”",car:"falcao",upgrades:{engine:3,tires:2,weight:1},reward:2200,tier:2},{name:"BETÃO V8",quote:"“Meu bloco é de ferro. Seu ego é de alumínio.”",car:"tubarao",upgrades:{engine:2,tires:3,weight:2},reward:3200,tier:3},{name:"O MECÂNICO",quote:"“Eu montei os dois motores dessa pista. Boa sorte.”",car:"tubarao",upgrades:{engine:4,tires:4,weight:3,gearbox:2},reward:4400,tier:4},{name:"CAMPEÃ DA VILA",quote:"“Aqui não tem pole position. Tem vergonha na cara.”",car:"foguete",upgrades:{engine:4,tires:5,weight:4,gearbox:3},reward:6e3,tier:5},{name:"O MESTRE",quote:"“Quando a luz verde acender, já vai ser tarde.”",car:"foguete",upgrades:{engine:6,tires:6,weight:5,gearbox:5},reward:8e3,tier:6},{name:"FANTASMA 900",quote:"“Ninguém nunca viu meu carro de lado. Só o escape.”",car:"lenda",upgrades:{engine:5,tires:6,weight:5,gearbox:4},reward:10500,tier:7},{name:"O REI DA PISTA",quote:"“Última etapa. Depois dessa, o asfalto é seu.”",car:"lenda",upgrades:{engine:6,tires:6,weight:6,gearbox:6},reward:14e3,tier:8}],Cl=["#25c45b","#1b63ff","#d20d24","#8c2bff","#e8e6df","#ffc400","#16161b","#ff5a12"];function $n(i){return Rs.find(e=>e.id===i)||Rs[0]}const Ic="dragbrasil.save.v1",Dc=()=>({engine:0,tires:0,weight:0,gearbox:0});function x0(){return{money:1500,ownedCars:["falcao"],selected:"falcao",paints:{falcao:"laranja"},upgrades:{falcao:Dc()},wins:0,losses:0,races:0,bestET:null,bestTrap:null,sound:!0,careerWins:0,seenHelp:!1}}function v0(){const i=x0();try{const e=localStorage.getItem(Ic);if(!e)return i;const t=JSON.parse(e),n={...i,...t};n.ownedCars=Array.isArray(t.ownedCars)&&t.ownedCars.length?t.ownedCars:i.ownedCars,n.ownedCars.includes(n.selected)||(n.selected=n.ownedCars[0]),n.upgrades={...i.upgrades,...t.upgrades||{}};for(const s of Object.keys(n.upgrades))n.upgrades[s]={...Dc(),...n.upgrades[s]};return n.paints={...i.paints,...t.paints||{}},n}catch{return i}}function Oi(i){try{localStorage.setItem(Ic,JSON.stringify(i))}catch{}}function Hi(i){return"R$ "+Math.round(i).toLocaleString("pt-BR")}function Pl(i){return i==null||!isFinite(i)?"—":i.toFixed(3)+"s"}function M0(i,e=2){const t=Math.floor(i.sampleRate*e),n=i.createBuffer(1,t,i.sampleRate),s=n.getChannelData(0);let r=0;for(let a=0;a<t;a++){const o=Math.random()*2-1;r=(r+.02*o)/1.02,s[a]=r*3.2}return n}class S0{constructor(){this.ctx=null,this.muted=!1,this.ready=!1,this.lastPop=0}async init(){if(this.ready){this.ctx.state==="suspended"&&await this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,await t.resume(),this.master=t.createGain(),this.master.gain.value=this.muted?0:.85;const n=t.createDynamicsCompressor();n.threshold.value=-18,n.knee.value=20,n.ratio.value=5,n.attack.value=.005,n.release.value=.18,this.master.connect(n),n.connect(t.destination),this.noiseBuf=M0(t,2.5),this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=600,this.engineFilter.Q.value=1.4,this.engineGain.connect(this.engineFilter),this.engineFilter.connect(this.master);const s=(r,a,o=1)=>{const c=t.createOscillator();c.type=r,c.frequency.value=40*o;const l=t.createGain();return l.gain.value=a,c.connect(l),l.connect(this.engineGain),c.start(),{o:c,g:l,oct:o}};this.oscs=[s("sawtooth",.5),s("sawtooth",.35,1.01),s("square",.14,2),s("sine",.5,.5)],this.exhaustNoise=t.createBufferSource(),this.exhaustNoise.buffer=this.noiseBuf,this.exhaustNoise.loop=!0,this.exhaustFilter=t.createBiquadFilter(),this.exhaustFilter.type="bandpass",this.exhaustFilter.frequency.value=260,this.exhaustFilter.Q.value=.9,this.exhaustGain=t.createGain(),this.exhaustGain.gain.value=0,this.exhaustNoise.connect(this.exhaustFilter),this.exhaustFilter.connect(this.exhaustGain),this.exhaustGain.connect(this.master),this.exhaustNoise.start(),this.turboOsc=t.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.value=1800,this.turboGain=t.createGain(),this.turboGain.gain.value=0,this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.master),this.turboOsc.start(),this.tireNoise=t.createBufferSource(),this.tireNoise.buffer=this.noiseBuf,this.tireNoise.loop=!0,this.tireFilter=t.createBiquadFilter(),this.tireFilter.type="bandpass",this.tireFilter.frequency.value=2100,this.tireFilter.Q.value=9,this.tireGain=t.createGain(),this.tireGain.gain.value=0,this.tireNoise.connect(this.tireFilter),this.tireFilter.connect(this.tireGain),this.tireGain.connect(this.master),this.tireNoise.start(),this.windNoise=t.createBufferSource(),this.windNoise.buffer=this.noiseBuf,this.windNoise.loop=!0,this.windFilter=t.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=500,this.windGain=t.createGain(),this.windGain.gain.value=0,this.windNoise.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.master),this.windNoise.start(),this.crowdNoise=t.createBufferSource(),this.crowdNoise.buffer=this.noiseBuf,this.crowdNoise.loop=!0,this.crowdFilter=t.createBiquadFilter(),this.crowdFilter.type="bandpass",this.crowdFilter.frequency.value=650,this.crowdFilter.Q.value=.6,this.crowdGain=t.createGain(),this.crowdGain.gain.value=.012,this.crowdNoise.connect(this.crowdFilter),this.crowdFilter.connect(this.crowdGain),this.crowdGain.connect(this.master),this.crowdNoise.start(),this.ready=!0}setMuted(e){this.muted=e,!(!this.ready||!this.master)&&this.master.gain.setTargetAtTime(e?0:.85,this.ctx.currentTime,.03)}update(e){if(!this.ready)return;const t=this.ctx.currentTime,n=e.rpm||850,s=Math.max(0,Math.min(1.15,e.rpmNorm||0)),r=Math.max(22,n/60*2.15);for(const{o:p,oct:d}of this.oscs)p.frequency.setTargetAtTime(r*d,t,.02);const a=e.racing?1:.45,o=e.racing?.35+.65*(e.throttle||0):.2,c=a*o*(.055+s*.075);this.engineGain.gain.setTargetAtTime(c,t,.045),this.engineFilter.frequency.setTargetAtTime(260+s*1200+(e.throttle||0)*700,t,.05),this.exhaustGain.gain.setTargetAtTime((e.racing?.035:.01)*(.35+(e.throttle||0))*(.5+s*.8),t,.06);const l=e.racing?Math.max(0,s-.4)*(.6+(e.throttle||0)):0;this.turboOsc.frequency.setTargetAtTime(1500+s*2700,t,.06),this.turboGain.gain.setTargetAtTime(l*.02,t,.08);const h=Math.min(1,e.slip||0);this.tireGain.gain.setTargetAtTime(h*.15,t,.05),this.tireFilter.frequency.setTargetAtTime(1650+h*900,t,.1),this.windFilter.frequency.setTargetAtTime(380+Math.min(1,(e.speed||0)/80)*900,t,.2),this.windGain.gain.setTargetAtTime(Math.min(.09,(e.speed||0)*.0014),t,.15)}beep(e=700,t=.09,n=.16,s="square"){if(!this.ready)return;const r=this.ctx,a=r.createOscillator();a.type=s,a.frequency.value=e;const o=r.createGain();o.gain.setValueAtTime(1e-4,r.currentTime),o.gain.exponentialRampToValueAtTime(n,r.currentTime+.01),o.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+t),a.connect(o),o.connect(this.master),a.start(),a.stop(r.currentTime+t+.02)}pop(e=1){if(!this.ready)return;const t=this.ctx,n=t.currentTime;if(n-this.lastPop<.035)return;this.lastPop=n;const s=t.createBufferSource();s.buffer=this.noiseBuf,s.playbackRate.value=.7+Math.random()*.6;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1200,n),r.frequency.exponentialRampToValueAtTime(260,n+.14);const a=t.createGain();a.gain.setValueAtTime(.34*e,n),a.gain.exponentialRampToValueAtTime(.001,n+.17),s.connect(r),r.connect(a),a.connect(this.master),s.start(n),s.stop(n+.2);const o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(110,n),o.frequency.exponentialRampToValueAtTime(45,n+.12);const c=t.createGain();c.gain.setValueAtTime(.22*e,n),c.gain.exponentialRampToValueAtTime(.001,n+.15),o.connect(c),c.connect(this.master),o.start(n),o.stop(n+.16)}whoosh(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuf,n.playbackRate.value=1.4;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(2400,t),s.frequency.exponentialRampToValueAtTime(700,t+.3),s.Q.value=1.5;const r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.09,t+.03),r.gain.exponentialRampToValueAtTime(1e-4,t+.32),n.connect(s),s.connect(r),r.connect(this.master),n.start(t),n.stop(t+.34)}foul(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.value=120;const s=e.createGain();s.gain.setValueAtTime(.12,t),s.gain.setValueAtTime(.12,t+.3),s.gain.exponentialRampToValueAtTime(.001,t+.5),n.connect(s),s.connect(this.master),n.start(t),n.stop(t+.52)}win(){if(!this.ready)return;[523.25,659.25,783.99,1046.5].forEach((o,c)=>{const l=this.ctx,h=l.currentTime+c*.09,p=l.createOscillator();p.type="triangle",p.frequency.value=o;const d=l.createGain();d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(.16,h+.02),d.gain.exponentialRampToValueAtTime(1e-4,h+.45),p.connect(d),d.connect(this.master),p.start(h),p.stop(h+.5)});const t=this.ctx,n=t.currentTime,s=t.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0,s.playbackRate.value=1.1;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.7;const a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.07,n+.2),a.gain.exponentialRampToValueAtTime(1e-4,n+1.9),s.connect(r),r.connect(a),a.connect(this.master),s.start(n),s.stop(n+2)}lose(){if(!this.ready)return;const e=this.ctx;[220,174.6].forEach((t,n)=>{const s=e.currentTime+n*.18,r=e.createOscillator();r.type="sawtooth",r.frequency.value=t;const a=e.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.08,s+.02),a.gain.exponentialRampToValueAtTime(1e-4,s+.5),r.connect(a),a.connect(this.master),r.start(s),r.stop(s+.52)})}ui(){this.beep(950,.045,.05,"triangle")}}const Ce=i=>document.getElementById(i);class y0{constructor(e){this.game=e,this.el={boot:Ce("boot"),menu:Ce("menu"),garage:Ce("garage"),help:Ce("help"),hud:Ce("hud"),results:Ce("results"),money:Ce("menu-money"),money2:Ce("menu-best"),wins:Ce("menu-wins"),best2:Ce("menu-best-2"),record:Ce("menu-record"),carName:Ce("menu-car-name"),carClass:Ce("menu-car-class"),carStats:Ce("menu-car-stats"),rival:Ce("menu-rival"),rivalLine:Ce("menu-rival-line"),rivalTime:Ce("menu-rival-time"),garageMoney:Ce("garage-money"),carList:Ce("car-list"),paintList:Ce("paint-list"),upgradeList:Ce("upgrade-list"),tree:[Ce("t1"),Ce("t2"),Ce("t3")],treeGreen:Ce("tg"),treeRed:Ce("tr"),timer:Ce("hud-timer"),phase:Ce("hud-phase"),speed:Ce("hud-speed"),gear:Ce("hud-gear"),gearHint:Ce("gear-hint"),rpm:Ce("rpm-fill"),dist:Ce("hud-dist"),gapYou:Ce("gap-you-car"),gapRival:Ce("gap-rival-car"),launch:Ce("launch-prompt"),launchBig:document.querySelector(".lp-big"),launchLine:document.querySelector(".lp-line"),toast:Ce("hud-toast"),foul:Ce("foul-banner"),rivalName:Ce("hud-rival-name"),resTitle:Ce("res-title"),resKicker:Ce("res-kicker"),resSub:Ce("res-sub"),resET:Ce("res-et"),resReaction:Ce("res-reaction"),resSpeed:Ce("res-speed"),resRivalET:Ce("res-rival-et"),resMoney:Ce("res-money"),resRecord:Ce("res-record"),wheelPad:Ce("wheel-pad"),wheelKnob:Ce("wheel-knob"),gas:Ce("btn-gas"),clutch:Ce("btn-brake"),shiftUp:Ce("btn-shift-up"),shiftDown:Ce("btn-shift-down"),sound:Ce("btn-sound")},this.toastTimer=0,this._bindStatic()}_bindStatic(){const e=this.game;Ce("btn-boot").addEventListener("click",()=>e.boot()),Ce("btn-race").addEventListener("click",()=>e.startRace()),Ce("btn-garage").addEventListener("click",()=>e.openGarage()),Ce("btn-garage-2").addEventListener("click",()=>e.openGarage()),Ce("btn-help").addEventListener("click",()=>e.openHelp()),Ce("btn-res-again").addEventListener("click",()=>e.startRace()),Ce("btn-res-garage").addEventListener("click",()=>e.openGarage()),Ce("btn-res-menu").addEventListener("click",()=>e.openMenu()),Ce("btn-cam").addEventListener("click",()=>e.toggleCamera()),this.el.sound.addEventListener("click",()=>e.toggleSound());for(const t of document.querySelectorAll("[data-close]"))t.addEventListener("click",()=>e.closePanel(t.dataset.close))}show(e){const t=["boot","menu","garage","help","results"];for(const n of t)this.el[n].classList.toggle("hidden",n!==e);this.el.hud.classList.toggle("hidden",e!=="race")}updateMenu(e,t){const n=$n(e.selected),s=e.upgrades[n.id]||{},r=Rl(n,s);this.el.money.textContent=Hi(e.money),this.el.wins.textContent=e.wins,this.el.carName.textContent=n.name,this.el.carClass.textContent=n.klass,this.el.carStats.innerHTML=`
      <div><b>${r}</b><small>CAVALOS</small></div>
      <div><b>${Math.round(Zn(n,s).mass)}</b><small>KG</small></div>
      <div><b>${e.bestET?Pl(e.bestET).replace("s",""):"—"}</b><small>MELHOR ET</small></div>`,this.el.best2.textContent=e.bestET?Pl(e.bestET):"—",this.el.record.textContent=e.races?`${e.races} corridas · ${e.wins} vitórias`:"sem registro",this.el.rival.textContent=t.name,this.el.rivalLine.textContent=t.quote,this.el.rivalTime.textContent=`ET alvo ${t.target.toFixed(2)}s`,this.el.sound.textContent=e.sound?"🔊":"🔇"}renderGarage(e){const t=this.game;this.el.garageMoney.textContent=Math.round(e.money).toLocaleString("pt-BR"),this.el.carList.innerHTML="";for(const a of Rs){const o=e.ownedCars.includes(a.id),c=e.selected===a.id,l=e.upgrades[a.id]||{},h=Rl(a,l),p=document.createElement("div");p.className=`car-row${c?" active":""}${o?"":" locked"}`,p.innerHTML=`
        <div>
          <h4>${a.name} <span class="tag">${a.klass}</span></h4>
          <div class="spec">${h} cv · ${Math.round(Zn(a,l).mass)} kg · ${a.tagline}</div>
        </div>
        <div class="car-action ${c?"equipped":o?"":"buy"}">
          ${c?"EM USO":o?"USAR":Hi(a.price)}
        </div>`,p.addEventListener("click",()=>t.selectCar(a.id)),this.el.carList.appendChild(p)}this.el.paintList.innerHTML="";const n=$n(e.selected),s=e.paints[n.id]||"laranja";for(const a of li){const o=document.createElement("div");o.className=`paint-swatch${s===a.id?" active":""}`,o.style.background=`radial-gradient(circle at 35% 28%, ${E0(a.hex,.35)}, ${a.hex} 58%, ${T0(a.hex,.45)})`,o.title=a.name,o.addEventListener("click",()=>t.setPaint(n.id,a.id)),this.el.paintList.appendChild(o)}this.el.upgradeList.innerHTML="";const r=e.upgrades[n.id]||{};for(const a of Pc){const o=r[a.id]|0,c=o>=a.max,l=Lc(a,o),h=document.createElement("div");h.className="upgrade-row";const p=Array.from({length:a.max},(d,m)=>`<i class="${m<o?"on":""}"></i>`).join("");h.innerHTML=`
        <div class="upgrade-head"><h4>${a.name}</h4><span class="lvl">NÍVEL ${o}/${a.max}</span></div>
        <div class="pips">${p}</div>
        <div class="upgrade-foot">
          <div class="upgrade-desc">${a.desc}<br>${a.effect}</div>
          <button class="upgrade-btn ${c?"max":""}" ${c?"disabled":""}>
            ${c?"NO MÁXIMO":Hi(l)}
          </button>
        </div>`,c||h.querySelector("button").addEventListener("click",()=>t.buyUpgrade(a.id)),this.el.upgradeList.appendChild(h)}}showHUD(e){this.show("race"),this.el.rivalName.textContent=e,this.el.foul.classList.add("hidden"),this.el.launch.classList.add("hidden"),this.setTree([!1,!1,!1],!1,!1),this.setTimer(0),this.setSpeed(0),this.setGear(1,"EMBREIE + ACELERE",0),this.setGap(0,0,402.336),this.setPhase("PREPARE-SE"),this.toast("")}setTree(e,t,n){this.el.tree.forEach((s,r)=>s.classList.toggle("on",!!e[r])),this.el.treeGreen.classList.toggle("on",!!t),this.el.treeRed.classList.toggle("on",!!n)}setPhase(e){this.el.phase.textContent=e}setTimer(e){this.el.timer.textContent=e>=0?e.toFixed(3):"0.000"}setSpeed(e){this.el.speed.textContent=Math.max(0,Math.round(e))}setGear(e,t,n){this.el.gear.textContent=e,t!=null&&(this.el.gearHint.textContent=t),this.el.rpm.style.width=`${Math.min(112,n*100)}%`}setDist(e){this.el.dist.textContent=Math.max(0,Math.round(402.336-e))}setGap(e,t,n){const s=Math.max(0,Math.min(1,e/n)),r=Math.max(0,Math.min(1,t/n));this.el.gapYou.style.left=`${s*92}%`,this.el.gapRival.style.left=`${r*92}%`}showLaunch(e){this.el.launch.classList.toggle("hidden",!e)}setLaunchText(e,t){this.el.launchLine.textContent=e,this.el.launchBig.textContent=t}toast(e,t=1100){this.el.toast.textContent=e,this.el.toast.classList.toggle("show",!!e),clearTimeout(this.toastTimer),e&&(this.toastTimer=setTimeout(()=>this.el.toast.classList.remove("show"),t))}showFoul(e){this.el.foul.classList.toggle("hidden",!e)}setWheel(e){this.el.wheelPad.style.setProperty("--rot",`${e*90}deg`),this.el.wheelKnob.style.transform=`translate(${e*36}px, 0)`}setPedals(e,t){this.el.gas.classList.toggle("active",e>.1),this.el.clutch.classList.toggle("active",!!t)}showResults(e){this.show("results"),this.el.results.classList.toggle("lose",!e.win),this.el.resTitle.textContent=e.foul?"QUEIMOU":e.win?"VITÓRIA":"DERROTA",this.el.resKicker.textContent=e.kicker||(e.foul?"DESCLASSIFICADO":"RESULTADO OFICIAL"),this.el.resSub.textContent=e.sub||(e.foul?"Você soltou a embreagem antes do verde. O fiscal não perdoou.":e.win?`Você cruzou ${e.margin>0?e.margin.toFixed(3)+"s":"na frente"} antes do rival.`:e.dnf?"O carro não cruzou a linha. Ajuste o setup e tente de novo.":`Faltaram ${e.margin.toFixed(3)}s para pegar o ${e.rivalName}.`),this.el.resET.textContent=e.et?e.et.toFixed(3):"DNF",this.el.resReaction.textContent=e.reaction!=null?e.reaction.toFixed(3)+"s":"—",this.el.resSpeed.textContent=Math.round(e.trap||0),this.el.resRivalET.textContent=e.rivalET?e.rivalET.toFixed(3):"DNF",this.el.resMoney.textContent=(e.prize>=0?"+ ":"− ")+Hi(Math.abs(e.prize)),this.el.resMoney.style.color=e.prize>=0?"var(--green)":"var(--red)",this.el.resRecord.classList.toggle("hidden",!e.record)}}function Ki(i){return Math.max(0,Math.min(255,Math.round(i)))}function E0(i,e){const t=i.replace("#",""),n=Ki(parseInt(t.slice(0,2),16)+255*e),s=Ki(parseInt(t.slice(2,4),16)+255*e),r=Ki(parseInt(t.slice(4,6),16)+255*e);return`rgb(${n},${s},${r})`}function T0(i,e){const t=i.replace("#",""),n=Ki(parseInt(t.slice(0,2),16)*(1-e)),s=Ki(parseInt(t.slice(2,4),16)*(1-e)),r=Ki(parseInt(t.slice(4,6),16)*(1-e));return`rgb(${n},${s},${r})`}const Bi=4.2,zi=-1.43,mr=_0,b0=[.78,.87,.95,1,1.05,1.1,1.15,1.22],Zi=1/120;function w0(i){const e=new pr(i);for(let s=0;s<240;s++){const r=e.engineRpm<i.launchRpm?1:.15;if(e.step(Zi,{throttle:r,clutch:!0},!0),e.engineRpm>=i.launchRpm)break}let t=0,n=0;for(;e.distance<mr&&n++<2640;){const s=e.wheelspin>.6?.65:1;e.step(Zi,{throttle:s,clutch:!1},!1),e.autoShift(),t+=Zi}return t}class A0{constructor(){this.save=v0(),this.audio=new S0,this.save.sound=this.save.sound!==!1,this.audio.muted=!this.save.sound,this.time=0,this.mode="boot",this.cameraMode="cockpit",this.phase="idle",this.steer=0,this.steerTarget=0,this.wheelPointer=null,this.keys={},this.touchGas=!1,this.touchClutch=!1,this.treeBeeped=[!1,!1,!1],this.rivalTargetCache=new Map,this.smokeAcc=0,this.simAcc=0,this.launchPromptVisible=!1,this.autoShift=!0,this.ui=null,this.initGraphics(),this.initTrack(),this.initCars(),this.initInput(),this.ui=new y0(this),this.audio.setMuted(!this.save.sound),this.ui.updateMenu(this.save,this.nextRival()),this.openMenu(!0),this.resize(),window.addEventListener("resize",()=>this.resize()),this.last=performance.now(),requestAnimationFrame(e=>this.frame(e)),new URLSearchParams(location.search).has("autostart")&&setTimeout(()=>{this.mode==="boot"&&this.boot(),setTimeout(()=>this.startRace(),120)},300)}initGraphics(){const e=document.getElementById("scene");this.renderer=new jm({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ss,this.renderer.toneMapping=eo,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=jt,this.scene=new ic,this.scene.background=new Ke(329228),this.scene.fog=new co(329228,.0048);const t=new As(this.renderer);this.scene.environment=t.fromScene(new e0,.04).texture,this.scene.environmentIntensity=.45,this.camera=new fn(68,window.innerWidth/window.innerHeight,.06,1100),this.camera.position.set(12,4,8),this.hemi=new eu(3359595,460555,.85),this.scene.add(this.hemi),this.moon=new iu(11058431,1.25),this.moon.position.set(30,60,-20),this.moon.castShadow=!0,this.moon.shadow.mapSize.set(2048,2048),this.moon.shadow.camera.left=-35,this.moon.shadow.camera.right=35,this.moon.shadow.camera.top=35,this.moon.shadow.camera.bottom=-35,this.moon.shadow.camera.near=1,this.moon.shadow.camera.far=200,this.moon.shadow.bias=-6e-4,this.moon.shadow.normalBias=.02,this.scene.add(this.moon),this.moonTarget=new Ct,this.scene.add(this.moonTarget),this.moon.target=this.moonTarget,this.warm=new Rr(16763274,45,40,2),this.warm.position.set(0,9,4),this.scene.add(this.warm),this.speedlines=document.getElementById("speedlines"),this.frameTimes=[],this.quality=1}initTrack(){this.track=p0(),this.scene.add(this.track.group),this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects=new m0(this.scene)}initCars(){this.playerGroup=new Nt,this.scene.add(this.playerGroup),this.playerModel=null,this.rivalModels={};for(const e of Rs){const t=Tl({paint:"#25c45b",interior:!1}),n=new Nt;n.add(t.root),n.visible=!1,this.scene.add(n),this.rivalModels[e.id]={model:t,group:n}}this.rebuildPlayerCar(),this.playerGroup.position.set(Bi,0,zi)}rebuildPlayerCar(){const e=this.save,t=$n(e.selected),n=li.find(s=>s.id===e.paints[t.id])?.hex||"#ff5a12";this.playerModel&&(this.playerGroup.remove(this.playerModel.root),this.playerModel.root.traverse(s=>{s.isMesh&&s.geometry&&s.geometry.dispose()}),this.playerModel=null),this.playerModel=Tl({paint:n,interior:!0}),this.playerGroup.add(this.playerModel.root),this.playerSpec=Zn(t,e.upgrades[t.id]||{}),this.playerSim=new pr(this.playerSpec)}nextRival(){const e=Ht(this.save.careerWins,0,_s.length-1),t=_s[e],n=Math.max(0,this.save.careerWins-(_s.length-1)),s=b0[e]+n*.035,r={...t,power:s,idx:e};return r.target=this.rivalTarget(r),r}rivalTarget(e){const t=`${e.car}:${JSON.stringify(e.upgrades)}:${e.power.toFixed(3)}`;if(this.rivalTargetCache.has(t))return this.rivalTargetCache.get(t);const n=Zn($n(e.car),e.upgrades);n.torque*=e.power;const s=w0(n);return this.rivalTargetCache.set(t,s),s}initInput(){const e=(l,h,p)=>{if(!l)return;const d=_=>{_.preventDefault();try{l.setPointerCapture(_.pointerId)}catch{}h()},m=()=>p();l.addEventListener("pointerdown",d),l.addEventListener("pointerup",m),l.addEventListener("pointercancel",m),l.addEventListener("lostpointercapture",m)};e(document.getElementById("btn-gas"),()=>{this.touchGas=!0},()=>{this.touchGas=!1}),e(document.getElementById("btn-brake"),()=>{this.touchClutch=!0},()=>{this.touchClutch=!1});const t=document.getElementById("btn-shift-up"),n=document.getElementById("btn-shift-down"),s=l=>h=>{h.preventDefault(),this.tryShift(l)};t.addEventListener("pointerdown",s(1)),n.addEventListener("pointerdown",s(-1));const r=document.getElementById("btn-auto");r.classList.toggle("on",this.autoShift),r.addEventListener("pointerdown",l=>{l.preventDefault(),this.autoShift=!this.autoShift,r.classList.toggle("on",this.autoShift),this.audio.ui()});const a=document.getElementById("wheel-pad"),o=l=>{const h=a.getBoundingClientRect(),p=(l.clientX-(h.left+h.width/2))/(h.width*.5);this.steerTarget=Ht(p*1.15,-1,1)};a.addEventListener("pointerdown",l=>{l.preventDefault(),this.wheelPointer=l.pointerId;try{a.setPointerCapture(l.pointerId)}catch{}o(l)}),a.addEventListener("pointermove",l=>{this.wheelPointer===l.pointerId&&o(l)});const c=()=>{this.wheelPointer=null,this.steerTarget=0};a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c),a.addEventListener("lostpointercapture",c),window.addEventListener("keydown",l=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(l.code)&&l.preventDefault(),this.keys[l.code]=!0,!l.repeat&&(l.code==="KeyC"&&this.toggleCamera(),(l.code==="ShiftLeft"||l.code==="ShiftRight"||l.code==="KeyE")&&this.tryShift(1),(l.code==="ControlLeft"||l.code==="ControlRight"||l.code==="KeyQ")&&this.tryShift(-1),l.code==="Escape"&&(this.mode==="race"?this.openMenu():(this.mode==="garage"||this.mode==="help")&&this.openMenu()))}),window.addEventListener("keyup",l=>{this.keys[l.code]=!1}),window.addEventListener("blur",()=>{this.keys={},this.touchGas=!1,this.touchClutch=!1}),document.querySelectorAll(".pedal, .shift-btn, .wheel-pad").forEach(l=>{l.addEventListener("contextmenu",h=>h.preventDefault())})}tryShift(e){if(this.mode!=="race"||!this.greenReached||this.playerFinished)return;const t=this.playerSim;(e>0?t.shiftUp():t.shiftDown())&&(this.audio.pop(.6),this.audio.whoosh(),this.spawnBackfire())}playerInput(){const e=this.keys;let t=e.KeyW||e.ArrowUp||this.touchGas?1:0,n=e.KeyS||e.ArrowDown||e.Space||this.touchClutch,s=0;return this.playerFinished&&(t=0,n=!1,s=1),{throttle:t,clutch:!!n,steer:this.steer,brake:s}}playerClutchPressed(){const e=this.keys;return!!(e.KeyS||e.ArrowDown||e.Space||this.touchClutch)}toggleCamera(){this.mode!=="race"&&this.mode!=="result"||(this.cameraMode=this.cameraMode==="cockpit"?"chase":"cockpit",this.audio.ui())}updateCamera(e){const t=this.camera,n=this.playerGroup.position.x,s=this.playerGroup.position.z,r=this.time,a=this.mode==="race"&&this.cameraMode==="cockpit";if(this.playerModel?.windshieldGroup&&(this.playerModel.windshieldGroup.visible=!a),this.playerModel?.windshieldGlass&&(this.playerModel.windshieldGlass.visible=!a),this.playerModel?.sideGlassParts)for(const f of this.playerModel.sideGlassParts)f.visible=!a;if(this.playerModel?.roofParts)for(const f of this.playerModel.roofParts)f.visible=!a;if(this.mode==="menu"||this.mode==="boot"||this.mode==="help"){const f=.68+Math.sin(r*.11)*.22,u=8.6,M=new N(n+Math.sin(f)*u,2.85+Math.sin(r*.19)*.12,s+Math.cos(f)*u);t.position.lerp(M,1-Math.exp(-e*2.2)),t.lookAt(n,.82,s+.15),t.fov+=(58-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}if(this.mode==="garage"){const f=1.02+Math.sin(r*.1)*.1,u=7.6,M=new N(n+Math.sin(f)*u,2.15,s+Math.cos(f)*u);t.position.lerp(M,1-Math.exp(-e*2.4)),t.lookAt(n,.78,s+.1),t.fov+=(52-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}if(this.mode==="result"){const f=.9+r*.12,u=8.6;t.position.lerp(new N(n+Math.sin(f)*u,2.6,s+Math.cos(f)*u),1-Math.exp(-e*2)),t.lookAt(n,.9,s+.4),t.fov+=(52-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}const o=this.playerSim;this.playerGroup.updateMatrixWorld(!0);const c=Math.min(1,o.speed/75);if(this.cameraMode==="chase"){const f=7.4+c*1.8,u=this.playerGroup.localToWorld(new N(0,2.55+c*.2,-f));t.position.lerp(u,1-Math.exp(-e*5));const M=this.playerGroup.localToWorld(new N(0,1,1.6));t.lookAt(M),t.fov+=(60+c*16-t.fov)*Math.min(1,e*4),t.updateProjectionMatrix();return}const l=o.accel,h=Math.min(.02,o.speed*7e-5+o.wheelspin*.01),p=this.playerGroup.localToWorld(new N(-.37,1.23,-.27));p.x+=Math.sin(r*53)*h,p.y+=Math.sin(r*61+1.3)*h*.7,p.z+=Math.cos(r*47)*h*.5,t.position.copy(p);const d=-.055-l*.0035+Math.sin(r*44)*h*.35,m=-this.steer*.035*c+Math.sin(r*37)*h*.3,_=this.steer*.05*c;t.rotation.set(d,Math.PI+_,m,"YXZ");const S=66+c*17+Math.min(4,o.wheelspin*4);t.fov+=(S-t.fov)*Math.min(1,e*4),t.updateProjectionMatrix()}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality>=1?1.75:1));const n=t>e*1.05&&window.matchMedia("(pointer: coarse)").matches;document.getElementById("rotate-hint").classList.toggle("hidden",!n)}boot(){this.audio.init(),this.save.sound=this.save.sound!==!1,this.audio.setMuted(!this.save.sound),this.ui.show("menu"),this.mode="menu",this.positionForShowroom(),this.ui.updateMenu(this.save,this.nextRival()),this.audio.ui()}positionForShowroom(){this.playerSim.reset(),this.playerSim.clutch=!0,this.playerSim.prevClutch=!0,this.playerGroup.position.set(Bi,0,zi),this.playerGroup.rotation.set(0,0,0),this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects.clear(),this.ui.showLaunch(!1),this.ui.showFoul(!1);for(const e of Object.keys(this.rivalModels))this.rivalModels[e].group.visible=!1}openMenu(e=!1){!e&&this.mode==="menu"||(this.mode="menu",this.phase="idle",this.greenReached=!1,this.playerFinished=!1,this.rivalFinished=!1,this.positionForShowroom(),e||this.ui.show("menu"),this.ui.updateMenu(this.save,this.nextRival()),this.speedlines.style.opacity="0")}openGarage(){this.mode="garage",this.positionForShowroom(),this.ui.show("garage"),this.ui.renderGarage(this.save),this.audio.ui()}openHelp(){this.mode="help",this.ui.show("help"),this.audio.ui()}closePanel(){this.openMenu()}selectCar(e){const t=this.save,n=$n(e);if(!t.ownedCars.includes(e)){if(t.money<n.price){this.uiToast(`Faltam ${Hi(n.price-t.money)} pra levar o ${n.name}.`);return}t.money-=n.price,t.ownedCars.push(e),t.paints[e]=li[Rs.indexOf(n)%li.length].id,t.upgrades[e]||(t.upgrades[e]={engine:0,tires:0,weight:0,gearbox:0}),t.selected=e,Oi(t),this.rebuildPlayerCar(),this.ui.renderGarage(t),this.uiToast(`${n.name} comprado!`),this.audio.ui();return}t.selected!==e&&(t.selected=e,Oi(t),this.rebuildPlayerCar(),this.ui.renderGarage(t),this.ui.updateMenu(t,this.nextRival()),this.audio.ui())}setPaint(e,t){if(this.save.paints[e]=t,Oi(this.save),e===this.save.selected&&this.playerModel){const s=li.find(r=>r.id===t);s&&this.playerModel.setPaint(s.hex)}this.ui.renderGarage(this.save);const n=li.find(s=>s.id===t);this.uiToast(`Pintura: ${n?n.name:t}`),this.audio.ui()}buyUpgrade(e){const t=this.save,n=t.selected,s=Pc.find(c=>c.id===e);if(!s)return;const r=t.upgrades[n]||(t.upgrades[n]={engine:0,tires:0,weight:0,gearbox:0}),a=r[e]|0;if(a>=s.max)return;const o=Lc(s,a);if(t.money<o){this.uiToast(`Sem caixa. Faltam ${Hi(o-t.money)}.`);return}t.money-=o,r[e]=a+1,Oi(t),this.playerSpec=Zn($n(n),r),this.ui.renderGarage(t),this.ui.updateMenu(t,this.nextRival()),this.uiToast(`${s.name} nível ${a+1} instalado.`),this.audio.ui()}toggleSound(){this.save.sound=!this.save.sound,Oi(this.save),this.save.sound&&this.audio.init(),this.audio.setMuted(!this.save.sound),document.getElementById("btn-sound").textContent=this.save.sound?"🔊":"🔇"}uiToast(e){const t=document.getElementById("ui-toast");t.textContent=e,t.classList.add("show"),clearTimeout(this._uiToastTimer),this._uiToastTimer=setTimeout(()=>t.classList.remove("show"),1900)}startRace(){this.audio.init(),this.audio.ui(),this.mode="race",this.phase="staging",this.cameraMode="cockpit",this.raceClock=0,this.simAcc=0,this.greenReached=!1,this.greenClock=null,this.foul=!1,this.playerRunStart=null,this.playerReaction=null,this.playerFinished=!1,this.rivalFinished=!1,this.playerET=null,this.playerTrap=0,this.rivalET=null,this.rivalTrap=0,this.endScheduled=null,this.launchPromptVisible=!1,this.lastClutch=!1,this.smokeAcc=0,this.treeBeeped=[!1,!1,!1],this.greenBeeped=!1,this.treeStart=1.25+Math.random()*.65,this.amberTimes=[this.treeStart,this.treeStart+.6,this.treeStart+1.2],this.greenAt=this.treeStart+1.72;const e=this.nextRival();this.rivalInfo=e,this.rivalReaction=.15+Math.random()*.13+Math.max(0,1-e.idx/8)*.05,this.playerSpec=Zn($n(this.save.selected),this.save.upgrades[this.save.selected]||{}),this.playerSim=new pr(this.playerSpec);const t=Zn($n(e.car),e.upgrades);t.torque*=e.power,this.rivalSpec=t,this.rivalSim=new pr(t),this.playerSim.reset(),this.playerSim.clutch=!0,this.playerSim.prevClutch=!0,this.playerGroup.position.set(Bi,0,zi),this.playerModel.setPaint(li.find(s=>s.id===(this.save.paints[this.save.selected]||"laranja"))?.hex||"#ff5a12");const n=this.rivalModels[e.car];for(const s of Object.keys(this.rivalModels))this.rivalModels[s].group.visible=s===e.car;n.model.setPaint(Cl[e.idx%Cl.length]),n.group.visible=!0,n.group.position.set(-Bi,0,zi),this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects.clear(),this.ui.showHUD(e.name),this.ui.setPhase("PREPARE-SE"),this.ui.setLaunchText("A LUZ VERDE ACENDEU","ACELERA!"),this.ui.showLaunch(!1),this.ui.showFoul(!1),this.speedlines.style.opacity="0",this.steer=0,this.steerTarget=0}updateTree(){if(this.greenReached)this.track.setTree({a:[!1,!1,!1],green:!this.foul,red:this.foul}),this.ui.setTree([!1,!1,!1],!this.foul,this.foul);else{const e=this.raceClock,t=this.amberTimes.map(n=>e>=n);this.track.setTree({a:t,green:!1,red:this.foul}),this.ui.setTree(t,!1,this.foul);for(let n=0;n<3;n++)!this.treeBeeped[n]&&e>=this.amberTimes[n]&&(this.treeBeeped[n]=!0,this.foul||this.audio.beep(620+n*45,.08,.12,"square"));e>=this.treeStart&&this.phase==="staging"&&(this.phase="tree",this.ui.setPhase("LUZES ACESAS")),e>=this.greenAt&&this.onGreen()}}onGreen(){this.greenReached||(this.greenReached=!0,this.greenClock=this.raceClock,this.phase="racing",this.ui.setPhase(this.foul?"QUEIMOU":"VAI!"),this.foul||(this.audio.beep(980,.25,.18,"square"),this.ui.showLaunch(!0),this.ui.setLaunchText("SOLTE A EMBREAGEM E PISA","VAI!"),this.ui.toast("VERDE! SOLTA A EMBREAGEM",900)))}registerFoul(){this.foul=!0,this.ui.showFoul(!0),this.ui.showLaunch(!1),this.ui.setPhase("QUEIMOU"),this.audio.foul()}stepRace(e){if(this.mode!=="race"||this.phase==="idle")return;const t=!this.greenReached,n=this.playerInput(),s=this.playerClutchPressed();if(!this.greenReached&&!this.foul&&this.lastClutch&&!s&&n.throttle>.15&&this.registerFoul(),this.lastClutch=s,this.playerSim.step(e,n,t),this.autoShift&&this.greenReached&&!this.playerFinished){const l=this.playerSim.gear;this.playerSim.autoShift(),this.playerSim.gear!==l&&(this.audio.pop(.6),this.audio.whoosh(),this.spawnBackfire())}const r=this.rivalSim,a=!this.greenReached,o=r.engineRpm<this.rivalSpec.launchRpm?1:.15;let c;if(a?c={throttle:o,clutch:!0,steer:0,brake:0}:this.raceClock<this.greenClock+this.rivalReaction?c={throttle:o,clutch:!0,steer:0,brake:0}:c={throttle:r.wheelspin>.6?.65:1,clutch:!1,steer:0,brake:this.rivalFinished?1:0},r.step(e,c,a),this.greenReached&&!this.rivalFinished&&!a){const l=r.gear;r.autoShift(),r.gear!==l&&this.spawnBackfire(!0)}!this.playerFinished&&this.playerSim.distance>=mr&&(this.playerFinished=!0,this.playerFinishClock=this.raceClock,this.playerET=this.playerRunStart!=null?this.raceClock-this.playerRunStart:null,this.playerTrap=this.playerSim.speedKmh,this.ui.toast(`CHEGOU! ${this.playerET?this.playerET.toFixed(3)+"s":""}`,1600),this.audio.pop(1)),!this.rivalFinished&&r.distance>=mr&&(this.rivalFinished=!0,this.rivalFinishClock=this.raceClock,this.rivalET=this.raceClock-(this.greenClock+this.rivalReaction),this.rivalTrap=r.speedKmh)}spawnBackfire(e=!1){const t=e?this.rivalModels[this.rivalInfo?.car]?.model:this.playerModel;if(!t)return;const n=new N;for(const s of t.exhaustTips)s.getWorldPosition(n),this.effects.emitBackfire(n,new N(0,.2,-1))}updateRace(e){if(this.raceClock+=e,this.updateTree(),this.greenReached&&!this.playerRunStart&&this.playerSim.speed>.25&&(this.playerRunStart=this.raceClock,this.playerReaction=this.raceClock-this.greenClock,this.launchPromptVisible=!1,this.ui.showLaunch(!1),!this.foul)){const t=this.playerReaction,n=t<.16?"LARGADA PERFEITA":t<.34?"BOA LARGADA":"SAIU ATRASADO";this.ui.toast(`${n} · ${t.toFixed(3)}s`,1300),t<.16&&this.audio.beep(1200,.12,.1,"triangle")}this.playerFinished&&this.rivalFinished&&this.endScheduled==null&&(this.endScheduled=this.raceClock),this.playerFinished&&!this.rivalFinished&&this.raceClock-this.playerFinishClock>5&&this.endScheduled==null&&(this.endScheduled=this.raceClock),!this.playerFinished&&this.raceClock-this.greenClock>20&&this.endScheduled==null&&(this.endScheduled=this.raceClock),this.endScheduled!=null&&this.raceClock-this.endScheduled>1.3&&this.finishRace()}finishRace(){if(this.mode!=="race")return;this.mode="result",this.cameraMode="chase";const e=this.playerFinished?this.playerFinishClock-this.greenClock:1/0,t=this.rivalFinished?this.rivalFinishClock-this.greenClock:1/0,n=!this.playerFinished,s=!this.foul&&!n&&e<t,r=s?Math.max(0,(this.rivalFinished?t:e+1)-e):this.rivalFinished?Math.abs(e-t):0,a=this.rivalInfo;let o=0;!this.foul&&!n&&(o=s?a.reward:Math.round(a.reward*.2));const c=this.save.bestET,l=!this.foul&&!n&&this.playerET!=null&&(c==null||this.playerET<c);!this.foul&&!n?(this.save.races++,s?(this.save.wins++,this.save.careerWins++):this.save.losses++,this.playerET!=null&&(this.save.bestET==null||this.playerET<this.save.bestET)&&(this.save.bestET=this.playerET),this.playerTrap&&(this.save.bestTrap==null||this.playerTrap>this.save.bestTrap)&&(this.save.bestTrap=this.playerTrap)):(this.save.races++,this.save.losses++);const h=s&&this.save.careerWins===_s.length;h&&(o+=5e3),this.save.money+=o,Oi(this.save);const p=s&&this.save.careerWins>=_s.length;this.ui.showResults({win:s,foul:this.foul,dnf:n,et:this.playerET,reaction:this.playerReaction,trap:this.playerTrap,rivalET:this.rivalET,rivalName:a.name,margin:r,prize:o,record:l,kicker:h?"CAMPEÃO DA TEMPORADA":this.foul?"DESCLASSIFICADO":"RESULTADO OFICIAL",sub:h?"Você limpou a fila inteira. O asfalto agora tem dono — e é você.":p&&s?"O rei caiu de novo. A fila vai ficar brava e voltar mais forte.":this.foul?"Você soltou a embreagem antes do verde. O fiscal não perdoou.":void 0}),this.foul?this.audio.foul():s?this.audio.win():this.audio.lose(),this.speedlines.style.opacity="0",this.ui.showFoul(!1)}updateCarVisuals(e){const t=this.playerModel;if(t){const s=this.playerSim;this.playerGroup.position.set(Bi+s.lateral,0,zi+s.distance);const r=s.speed/this.playerSpec.wheelRadius*e;for(const a of t.wheels)a.spin.rotation.x-=r,a.steerGroup.rotation.y=a.front?this.steer*.42:0;if(t.steeringWheel&&(t.steeringWheel.rotation.z=this.steer*1),t.needles.tach&&(t.needles.tach.rotation.z=2.25-s.rpmNorm*4.5),t.needles.speed&&(t.needles.speed.rotation.z=2.25-Math.min(1,s.speedKmh/240)*4.5),t.shiftLights?.length){const a=s.rpmNorm,o=this.mode==="race"?Math.floor(a*6.4):0,c=Math.floor(this.time*14)%2===0;t.shiftLights.forEach((l,h)=>{const p=h<o||a>.98&&c;l.material.color.setHex(p?l.userData.on:1513245)})}if(s.wheelspin>.38&&Math.random()<s.wheelspin){const a=new N;for(const o of t.wheels)o.front||(o.group.getWorldPosition(a),a.y=.06,this.effects.emitSmoke(a,s.wheelspin))}}if(this.rivalInfo){const s=this.rivalModels[this.rivalInfo.car];if(s&&s.group.visible){const r=this.rivalSim;s.group.position.set(-Bi+r.lateral,0,zi+r.distance);const a=r.speed/this.rivalSpec.wheelRadius*e;for(const o of s.model.wheels)o.spin.rotation.x-=a;if(r.wheelspin>.4&&Math.random()<r.wheelspin*.7){const o=new N;for(const c of s.model.wheels)c.front||(c.group.getWorldPosition(o),o.y=.05,this.effects.emitSmoke(o,r.wheelspin*.8))}}}const n=this.mode==="race"&&(this.playerFinished||this.playerSim.brake>.1);t&&t.root.traverse(s=>{s.isMesh&&s.material&&s.material.emissive&&s.material.emissive.r>.5&&s.material.emissive.g<.2&&(s.material.emissiveIntensity=n?3.2:.9)})}updateHud(){const e=this.playerSim;if(!e)return;this.ui.setSpeed(e.speedKmh);let t="SEGURE O GÁS";if(this.ui.el.phase.textContent,this.mode==="race")if(!this.greenReached)t="EMBREIE + ACELERE",this.ui.setPhase(this.foul?"QUEIMOU":this.phase==="tree"?"LUZES ACESAS":"PREPARE-SE");else if(this.playerFinished)t="FIM",this.ui.setPhase("FIM");else if(this.playerRunStart)t=e.wheelspin>.66?"PNEU CANTANDO":this.autoShift?"CÂMBIO AUTO":e.rpmNorm>.82?"▲ TROCA A MARCHA":"SEGURE O GÁS",this.ui.setPhase("CORRIDA");else{t="SOLTE A EMBREAGEM",this.ui.setPhase(this.foul?"QUEIMOU":"VAI!");const r=!this.foul&&this.playerSim.speed<.25;this.ui.showLaunch(r),r&&this.ui.setLaunchText("SOLTE A EMBREAGEM E PISA","VAI!")}this.ui.setGear(e.gear,t,e.rpmNorm),this.ui.setTimer(this.playerRunStart?this.playerFinished?this.playerET:this.raceClock-this.playerRunStart:0),this.ui.setDist(e.distance),this.rivalSim&&this.ui.setGap(e.distance,this.rivalSim.distance,mr),this.ui.setPedals(this.touchGas||this.keys.KeyW||this.keys.ArrowUp,this.playerClutchPressed()),this.ui.setWheel(this.steer);const n=e.speedKmh,s=this.mode==="race"?Ht((n-75)/150,0,.55):0;this.speedlines.style.opacity=String(s)}frame(e){const t=Math.min(.05,Math.max(1e-4,(e-this.last)/1e3));this.last=e,this.time+=t;const n=(this.keys.ArrowRight||this.keys.KeyD?1:0)+(this.keys.ArrowLeft||this.keys.KeyA?-1:0),s=n!==0?n:this.steerTarget;if(this.steer+=(s-this.steer)*Math.min(1,t*9),Math.abs(this.steer)<.002&&(this.steer=0),this.mode==="race"){this.updateRace(t),this.simAcc+=t;let o=0;for(;this.simAcc>=Zi&&o<10;)this.stepRace(Zi),this.simAcc-=Zi,o++}this.updateCarVisuals(t),this.updateCamera(t),this.effects.update(t),this.track.update(this.time),this.mode==="race"?this.updateHud():this.mode==="result"&&(this.ui.setSpeed(this.playerSim.speedKmh),this.ui.setWheel(this.steer));const r=this.moonTarget.position;r.set(this.playerGroup.position.x,0,this.playerGroup.position.z),this.moon.position.set(r.x+28,60,r.z-18),this.moonTarget.updateMatrixWorld();const a={rpm:this.playerSim?this.playerSim.engineRpm:850,rpmNorm:this.playerSim?this.playerSim.rpmNorm:0,throttle:this.mode==="race"?this.playerInput().throttle:0,speed:this.playerSim?this.playerSim.speed:0,slip:this.playerSim?this.playerSim.wheelspin:0,racing:this.mode==="race"};if(this.audio.update(a),this.renderer.render(this.scene,this.camera),this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.frameTimes.length===90&&this.time>4){const o=this.frameTimes.reduce((c,l)=>c+l,0)/this.frameTimes.length;!location.search.includes("hq")&&o>.045&&this.quality>.5&&(this.quality=.5,this.renderer.setPixelRatio(1),this.frameTimes.length=0)}requestAnimationFrame(o=>this.frame(o))}}function Ll(){window.__dragBrasil||(window.__dragBrasil=new A0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ll,{once:!0}):Ll();
