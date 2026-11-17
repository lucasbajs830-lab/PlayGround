(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const uo="187",th=0,Uo=1,nh=2,Rs=1,ih=2,Ts=3,Mi=0,an=1,xn=2,$i=0,Ki=1,Dn=2,Fo=3,Oo=4,sh=5,Xi=100,rh=101,ah=102,oh=103,lh=104,ch=200,hh=201,uh=202,dh=203,jl=204,ec=205,fh=206,ph=207,mh=208,gh=209,_h=210,xh=211,vh=212,Mh=213,Sh=214,Ea=0,wa=1,Ta=2,Cs=3,ba=4,Aa=5,Ra=6,Ca=7,fo=0,yh=1,Eh=2,qn=0,tc=1,nc=2,ic=3,po=4,sc=5,rc=6,ac=7,oc=300,ts=301,Ps=302,Br=303,zr=304,Ls=1e3,bn=1001,Pa=1002,Jt=1003,wh=1004,Vs=1005,Ut=1006,kr=1007,ai=1008,dn=1009,lc=1010,cc=1011,Is=1012,mo=1013,Fn=1014,An=1015,On=1016,go=1017,_o=1018,ns=1020,hc=35902,uc=35899,dc=1021,fc=1022,Un=1023,ci=1026,oi=1027,xo=1028,vo=1029,Si=1030,Mo=1031,So=1033,vr=33776,Mr=33777,Sr=33778,yr=33779,La=35840,Ia=35841,Da=35842,Na=35843,Ua=36196,Fa=37492,Oa=37496,Ba=37488,za=37489,wr=37490,ka=37491,Ga=37808,Ha=37809,Va=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,$a=37815,Ka=37816,Za=37817,Ja=37818,Qa=37819,ja=37820,eo=37821,to=36492,no=36494,io=36495,so=36283,ro=36284,Tr=36285,ao=36286,Th=3200,br=0,bh=1,ii="",Xt="srgb",Ar="srgb-linear",Rr="linear",Et="srgb",Gr=7680,Ah=519,Rh=512,Ch=513,Ph=514,pc=515,Lh=516,Ih=517,mc=518,gc=519,_c=35044,Bo="300 es",Rn=2e3,Ds=2001;function Dh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nh(){const s=Cr("canvas");return s.style.display="block",s}const zo={};function Pr(...s){const e="THREE."+s.shift();console.log(e,...s)}function xc(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ye(...s){s=xc(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function mt(...s){s=xc(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Zi(...s){const e=s.join(" ");e in zo||(zo[e]=!0,Ye(...s))}function Uh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Fh={[Ea]:Ea,[Ta]:Ra,[ba]:ba,[Cs]:Aa,[wa]:wa,[Ra]:Ta,[Ca]:Ca,[Aa]:Cs};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,oo=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function Oh(s,e){return(s%e+e)%e}function Vr(s,e,t){return(1-t)*s+t*e}function Bh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nr(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vc(s,e){if(e.constructor===Float32Array)return s;const t=Nr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Mc(s,e){if(e.constructor===Float32Array)return s;const t=Nr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Co=class Co{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Co.prototype.isVector2=!0;let $e=Co;class rs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(f!==S||c!==u||l!==p||h!==_){let m=c*u+l*p+h*_+f*S;m<0&&(u=-u,p=-p,_=-_,S=-S,m=-m);let d=1-o;if(m<.9995){const M=Math.acos(m),R=Math.sin(M);d=Math.sin(d*M)/R,o=Math.sin(o*M)/R,c=c*d+u*o,l=l*d+p*o,h=h*d+_*o,f=f*d+S*o}else{c=c*d+u*o,l=l*d+p*o,h=h*d+_*o,f=f*d+S*o;const M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*f+c*p-l*u,e[t+1]=c*_+h*u+l*f-o*p,e[t+2]=l*_+h*p+o*u-c*f,e[t+3]=h*_-o*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(r/2),u=c(n/2),p=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f+u*p*_;break;case"YZX":this._x=u*h*f+l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f-u*p*_;break;case"XZY":this._x=u*h*f-l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f+u*p*_;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Po=class Po{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=i+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Po.prototype.isVector3=!0;let U=Po;const Wr=new U,ko=new rs,Lo=class Lo{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],S=i[0],m=i[3],d=i[6],M=i[1],R=i[4],T=i[7],b=i[2],A=i[5],g=i[8];return r[0]=a*S+o*M+c*b,r[3]=a*m+o*R+c*A,r[6]=a*d+o*T+c*g,r[1]=l*S+h*M+f*b,r[4]=l*m+h*R+f*A,r[7]=l*d+h*T+f*g,r[2]=u*S+p*M+_*b,r[5]=u*m+p*R+_*A,r[8]=u*d+p*T+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*r,p=l*r-a*c,_=t*f+n*u+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(i*l-h*n)*S,e[2]=(o*n-i*a)*S,e[3]=u*S,e[4]=(h*t-i*c)*S,e[5]=(i*r-o*t)*S,e[6]=p*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lo.prototype.isMatrix3=!0;let Ze=Lo;const Xr=new Ze,Go=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zh(){const s={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ar]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),s}const ct=zh();function Yn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bi;class kh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Cr("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gh=0;class yo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(qr(i[a].image)):r.push(qr(i[a]))}else r=qr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function qr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Hh=0;const Yr=new U;class en extends yi{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=bn,i=bn,r=Ut,a=ai,o=Un,c=dn,l=en.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Ei(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=oc;en.DEFAULT_ANISOTROPY=1;const Io=class Io{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],_=c[9],S=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,T=(p+1)/2,b=(d+1)/2,A=(h+u)/4,g=(f+S)/4,E=(_+m)/4;return R>T&&R>b?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=A/n,r=g/n):T>b?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=E/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=g/r,i=E/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-S)/M,this.z=(u-h)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Io.prototype.isVector4=!0;let Nt=Io;class Vh extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new en({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new yo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Vh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sc extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wh extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Dr=class Dr{constructor(e,t,n,i,r,a,o,c,l,h,f,u,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,f,u,p,_,S,m)}set(e,t,n,i,r,a,o,c,l,h,f,u,p,_,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*f,_=o*h,S=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+_*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,_=l*h,S=l*f;t[0]=u+S*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,_=l*h,S=l*f;t[0]=u-S*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,p=a*f,_=o*h,S=o*f;t[0]=c*h,t[4]=_*l-p,t[8]=u*l+S,t[1]=c*f,t[5]=S*l+u,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,_=o*c,S=o*l;t[0]=c*h,t[4]=S-u*f,t[8]=_*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*f+_,t[10]=u-S*f}else if(e.order==="XZY"){const u=a*c,p=a*l,_=o*c,S=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+S,t[5]=a*h,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*h,t[10]=S*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xh,e,qh)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Kn.crossVectors(n,cn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Kn.crossVectors(n,cn)),Kn.normalize(),Ws.crossVectors(cn,Kn),i[0]=Kn.x,i[4]=Ws.x,i[8]=cn.x,i[1]=Kn.y,i[5]=Ws.y,i[9]=cn.y,i[2]=Kn.z,i[6]=Ws.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],S=n[6],m=n[10],d=n[14],M=n[3],R=n[7],T=n[11],b=n[15],A=i[0],g=i[4],E=i[8],B=i[12],D=i[1],z=i[5],k=i[9],$=i[13],I=i[2],q=i[6],ee=i[10],W=i[14],ce=i[3],Z=i[7],ie=i[11],ae=i[15];return r[0]=a*A+o*D+c*I+l*ce,r[4]=a*g+o*z+c*q+l*Z,r[8]=a*E+o*k+c*ee+l*ie,r[12]=a*B+o*$+c*W+l*ae,r[1]=h*A+f*D+u*I+p*ce,r[5]=h*g+f*z+u*q+p*Z,r[9]=h*E+f*k+u*ee+p*ie,r[13]=h*B+f*$+u*W+p*ae,r[2]=_*A+S*D+m*I+d*ce,r[6]=_*g+S*z+m*q+d*Z,r[10]=_*E+S*k+m*ee+d*ie,r[14]=_*B+S*$+m*W+d*ae,r[3]=M*A+R*D+T*I+b*ce,r[7]=M*g+R*z+T*q+b*Z,r[11]=M*E+R*k+T*ee+b*ie,r[15]=M*B+R*$+T*W+b*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],_=e[3],S=e[7],m=e[11],d=e[15],M=c*p-l*u,R=o*p-l*f,T=o*u-c*f,b=a*p-l*h,A=a*u-c*h,g=a*f-o*h;return t*(S*M-m*R+d*T)-n*(_*M-m*b+d*A)+i*(_*R-S*b+d*g)-r*(_*T-S*A+m*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],_=e[12],S=e[13],m=e[14],d=e[15],M=t*o-n*a,R=t*c-i*a,T=t*l-r*a,b=n*c-i*o,A=n*l-r*o,g=i*l-r*c,E=h*S-f*_,B=h*m-u*_,D=h*d-p*_,z=f*m-u*S,k=f*d-p*S,$=u*d-p*m,I=M*$-R*k+T*z+b*D-A*B+g*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/I;return e[0]=(o*$-c*k+l*z)*q,e[1]=(i*k-n*$-r*z)*q,e[2]=(S*g-m*A+d*b)*q,e[3]=(u*A-f*g-p*b)*q,e[4]=(c*D-a*$-l*B)*q,e[5]=(t*$-i*D+r*B)*q,e[6]=(m*T-_*g-d*R)*q,e[7]=(h*g-u*T+p*R)*q,e[8]=(a*k-o*D+l*E)*q,e[9]=(n*D-t*k-r*E)*q,e[10]=(_*A-S*T+d*M)*q,e[11]=(f*T-h*A-p*M)*q,e[12]=(o*B-a*z-c*E)*q,e[13]=(t*z-n*B+i*E)*q,e[14]=(S*R-_*b-m*M)*q,e[15]=(h*b-f*R+u*M)*q,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,u=r*l,p=r*h,_=r*f,S=a*h,m=a*f,d=o*f,M=c*l,R=c*h,T=c*f,b=n.x,A=n.y,g=n.z;return i[0]=(1-(S+d))*b,i[1]=(p+T)*b,i[2]=(_-R)*b,i[3]=0,i[4]=(p-T)*A,i[5]=(1-(u+d))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(_+R)*g,i[9]=(m-M)*g,i[10]=(1-(u+S))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ai.set(i[0],i[1],i[2]).length();const o=Ai.set(i[4],i[5],i[6]).length(),c=Ai.set(i[8],i[9],i[10]).length();r<0&&(a=-a),En.copy(this);const l=1/a,h=1/o,f=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=Rn,c=!1){const l=this.elements,h=2*r/(t-e),f=2*r/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let _,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===Rn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ds)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Rn,c=!1){const l=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),p=-(n+i)/(n-i);let _,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===Rn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ds)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Dr.prototype.isMatrix4=!0;let bt=Dr;const Ai=new U,En=new bt,Xh=new U(0,0,0),qh=new U(1,1,1),Kn=new U,Ws=new U,cn=new U,Vo=new bt,Wo=new rs;class Bn{constructor(e=0,t=0,n=0,i=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yh=0;const Xo=new U,Ri=new rs,kn=new bt,Xs=new U,ds=new U,$h=new U,Kh=new rs,qo=new U(1,0,0),Yo=new U(0,1,0),$o=new U(0,0,1),Ko={type:"added"},Zh={type:"removed"},Ci={type:"childadded",child:null},$r={type:"childremoved",child:null};class Ft extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new U,t=new Bn,n=new rs,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ze}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(Yo,e)}rotateZ(e){return this.rotateOnAxis($o,e)}translateOnAxis(e,t){return Xo.copy(e).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(Yo,e)}translateZ(e){return this.translateOnAxis($o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ds,Xs,this.up):kn.lookAt(Xs,ds,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(kn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ko),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zh),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ko),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,$h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jh={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(l,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jh)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Zr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=Oh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zr(a,r,e+1/3),this.g=Zr(a,r,e),this.b=Zr(a,r,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ct.workingToColorSpace(jt.copy(this),e),Math.round(rt(jt.r*255,0,255))*65536+Math.round(rt(jt.g*255,0,255))*256+Math.round(rt(jt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,r=jt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Xt){ct.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(qs);const n=Vr(Zn.h,qs.h,t),i=Vr(Zn.s,qs.s,t),r=Vr(Zn.l,qs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Je;Je.NAMES=Ec;class Eo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=t}clone(){return new Eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wc extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wn=new U,Gn=new U,Jr=new U,Hn=new U,Pi=new U,Li=new U,Zo=new U,Qr=new U,jr=new U,ea=new U,ta=new Nt,na=new Nt,ia=new Nt;class vn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wn.subVectors(i,t),Gn.subVectors(n,t),Jr.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Gn),c=wn.dot(Jr),l=Gn.dot(Gn),h=Gn.dot(Jr),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(a,Hn.y),c.addScaledVector(o,Hn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),Gn.subVectors(e,t),wn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),wn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Pi.subVectors(i,n),Li.subVectors(r,n),Qr.subVectors(e,n);const c=Pi.dot(Qr),l=Li.dot(Qr);if(c<=0&&l<=0)return t.copy(n);jr.subVectors(e,i);const h=Pi.dot(jr),f=Li.dot(jr);if(h>=0&&f<=h)return t.copy(i);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Pi,a);ea.subVectors(e,r);const p=Pi.dot(ea),_=Li.dot(ea);if(_>=0&&p<=_)return t.copy(r);const S=p*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Li,o);const m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return Zo.subVectors(r,i),o=(f-h)/(f-h+(p-_)),t.copy(i).addScaledVector(Zo,o);const d=1/(m+S+u);return a=S*d,o=u*d,t.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ui{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),$s.subVectors(this.max,fs),Ii.subVectors(e.a,fs),Di.subVectors(e.b,fs),Ni.subVectors(e.c,fs),Jn.subVectors(Di,Ii),Qn.subVectors(Ni,Di),pi.subVectors(Ii,Ni);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-pi.z,pi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,pi.z,0,-pi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-pi.y,pi.x,0];return!sa(t,Ii,Di,Ni,$s)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Ii,Di,Ni,$s))?!1:(Ks.crossVectors(Jn,Qn),t=[Ks.x,Ks.y,Ks.z],sa(t,Ii,Di,Ni,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new U,new U,new U,new U,new U,new U,new U,new U],Tn=new U,Ys=new ui,Ii=new U,Di=new U,Ni=new U,Jn=new U,Qn=new U,pi=new U,fs=new U,$s=new U,Ks=new U,mi=new U;function sa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){mi.fromArray(s,r);const o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const zt=new U,Zs=new $e;let Qh=0;class fn extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=e!==void 0?Nr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mc(e,this.array)}}class Tc extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bc extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const jh=new ui,ps=new U,ra=new U;class as{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ra)),this.expandByPoint(ps.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eu=0;const gn=new bt,aa=new Ft,Ui=new U,hn=new ui,ms=new ui,Kt=new U;class qt extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?bc:Tc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(hn.min,ms.min),hn.expandByPoint(Kt),Kt.addVectors(hn.max,ms.max),hn.expandByPoint(Kt)):(hn.expandByPoint(ms.min),hn.expandByPoint(ms.max))}hn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Kt.fromBufferAttribute(o,l),c&&(Ui.fromBufferAttribute(e,l),Kt.add(Ui)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new U,c[B]=new U;const h=new U,f=new U,u=new U,p=new $e,_=new $e,S=new $e,m=new U,d=new U;function M(B,D,z){l[B]=l[D]=l[z]=1,h.fromBufferAttribute(n,B),f.fromBufferAttribute(n,D),u.fromBufferAttribute(n,z),p.fromBufferAttribute(r,B),_.fromBufferAttribute(r,D),S.fromBufferAttribute(r,z),f.sub(h),u.sub(h),_.sub(p),S.sub(p);const k=1/(_.x*S.y-S.x*_.y);isFinite(k)&&(m.copy(f).multiplyScalar(S.y).addScaledVector(u,-_.y).multiplyScalar(k),d.copy(u).multiplyScalar(_.x).addScaledVector(f,-S.x).multiplyScalar(k),o[B].add(m),o[D].add(m),o[z].add(m),c[B].add(d),c[D].add(d),c[z].add(d))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,D=R.length;B<D;++B){const z=R[B],k=z.start,$=z.count;for(let I=k,q=k+$;I<q;I+=3)M(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const T=new U,b=new U,A=new U,g=new U;function E(B){A.fromBufferAttribute(i,B),g.copy(A);const D=o[B];T.copy(D),T.sub(A.multiplyScalar(A.dot(D))).normalize(),b.crossVectors(g,D);const k=b.dot(c[B])<0?-1:1;a.setXYZW(B,T.x,T.y,T.z,k)}for(let B=0,D=n.count;B<D;++B)l[B]&&E(B);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,f=new U;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let p=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*h;for(let d=0;d<h;d++)u[_++]=l[p++]}return new fn(u,h,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Jo(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Jo(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Jo(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ei()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const nn=new U;class Lr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Nr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mc(e,this.data.array)}}const oa=new U,nu=new U,iu=new Ze;class ti{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oa.subVectors(n,t).cross(nu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||iu.getNormalMatrix(e),i=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let su=0;class di extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Ki,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=ec,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qi extends di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Fi;const gs=new U,Oi=new U,Bi=new U,zi=new $e,_s=new $e,Ac=new bt,Js=new U,xs=new U,Qs=new U,Qo=new $e,la=new $e,jo=new $e;class bs extends Ft{constructor(e=new qi){if(super(),this.isSprite=!0,this.type="Sprite",Fi===void 0){Fi=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tu(t,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new Lr(n,3,0,!1)),Fi.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Fi,this.material=e,this.center=new $e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),Ac.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Bi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;js(Js.set(-.5,-.5,0),Bi,a,Oi,i,r),js(xs.set(.5,-.5,0),Bi,a,Oi,i,r),js(Qs.set(.5,.5,0),Bi,a,Oi,i,r),Qo.set(0,0),la.set(1,0),jo.set(1,1);let o=e.ray.intersectTriangle(Js,xs,Qs,!1,gs);if(o===null&&(js(xs.set(-.5,.5,0),Bi,a,Oi,i,r),la.set(0,1),o=e.ray.intersectTriangle(Js,Qs,xs,!1,gs),o===null))return;const c=e.ray.origin.distanceTo(gs);c<e.near||c>e.far||t.push({distance:c,point:gs.clone(),uv:vn.getInterpolation(gs,Js,xs,Qs,Qo,la,jo,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function js(s,e,t,n,i,r){zi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(_s.x=r*zi.x-i*zi.y,_s.y=i*zi.x+r*zi.y):_s.copy(zi),s.copy(e),s.x+=_s.x,s.y+=_s.y,s.applyMatrix4(Ac)}const Wn=new U,ca=new U,er=new U,tr=new U;class Rc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ca.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(ca);const r=e.distanceTo(t)*.5,a=-this.direction.dot(er),o=tr.dot(this.direction),c=-tr.dot(er),l=tr.lengthSq(),h=Math.abs(1-a*a);let f,u,p,_;if(h>0)if(f=a*c-o,u=a*o-c,_=r*h,f>=0)if(u>=-_)if(u<=_){const S=1/h;f*=S,u*=S,p=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ca).addScaledVector(er,u),p}intersectSphere(e,t){if(e.radius<0)return null;Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,d=n.x-a.x,M=n.y-a.y,R=n.z-a.z,T=Math.abs(c),b=Math.abs(l),A=Math.abs(h);let g,E,B,D,z,k,$,I,q,ee,W,ce;if(T>=b&&T>=A?(B=c,k=f,q=_,ce=d,c>=0?(g=l,E=h,D=u,z=p,$=S,I=m,ee=M,W=R):(g=h,E=l,D=p,z=u,$=m,I=S,ee=R,W=M)):b>=A?(B=l,k=u,q=S,ce=M,l>=0?(g=h,E=c,D=p,z=f,$=m,I=_,ee=R,W=d):(g=c,E=h,D=f,z=p,$=_,I=m,ee=d,W=R)):(B=h,k=p,q=m,ce=R,h>=0?(g=c,E=l,D=f,z=u,$=_,I=S,ee=d,W=M):(g=l,E=c,D=u,z=f,$=S,I=_,ee=M,W=d)),B===0)return null;const Z=g/B,ie=E/B,ae=1/B,Pe=D-Z*k,Xe=z-ie*k,Q=$-Z*q,he=I-ie*q,Ae=ee-Z*ce,Ne=W-ie*ce,Se=Ae*he-Ne*Q,He=Pe*Ne-Xe*Ae,Rt=Q*Xe-he*Pe;if(i){if(Se<0||He<0||Rt<0)return null}else if((Se<0||He<0||Rt<0)&&(Se>0||He>0||Rt>0))return null;const ze=Se+He+Rt;if(ze===0)return null;const ot=ae*(Se*k+He*q+Rt*ce);return(ze>0?ot<0:ot>0)?null:this.at(ot/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const el=new bt,gi=new Rc,nr=new as,tl=new U,ir=new U,sr=new U,rr=new U,ha=new U,ar=new U,nl=new U,or=new U;class se extends Ft{constructor(e=new qt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(ha.fromBufferAttribute(f,e),a?ar.addScaledVector(ha,h):ar.addScaledVector(ha.sub(t),h))}t.add(ar)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(nr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(nr,tl)===null||gi.origin.distanceToSquared(tl)>(e.far-e.near)**2))&&(el.copy(r).invert(),gi.copy(e.ray).applyMatrix4(el),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],d=a[m.materialIndex],M=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,b=R;T<b;T+=3){const A=o.getX(T),g=o.getX(T+1),E=o.getX(T+2);i=lr(this,d,e,n,l,h,f,A,g,E),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const M=o.getX(m),R=o.getX(m+1),T=o.getX(m+2);i=lr(this,a,e,n,l,h,f,M,R,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],d=a[m.materialIndex],M=Math.max(m.start,p.start),R=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,b=R;T<b;T+=3){const A=T,g=T+1,E=T+2;i=lr(this,d,e,n,l,h,f,A,g,E),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const M=m,R=m+1,T=m+2;i=lr(this,a,e,n,l,h,f,M,R,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ru(s,e,t,n,i,r,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Mi,o),c===null)return null;or.copy(o),or.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(or);return l<t.near||l>t.far?null:{distance:l,point:or.clone(),object:s}}function lr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ir),s.getVertexPosition(c,sr),s.getVertexPosition(l,rr);const h=ru(s,e,t,n,ir,sr,rr,nl);if(h){const f=new U;vn.getBarycoord(nl,ir,sr,rr,f),i&&(h.uv=vn.getInterpolatedAttribute(i,o,c,l,f,new $e)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,c,l,f,new $e)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,c,l,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new U,materialIndex:0};vn.getNormal(ir,sr,rr,u.normal),h.face=u,h.barycoord=f}return h}class Cc extends en{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Jt,h=Jt,f,u){super(null,a,o,c,l,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il extends fn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new bt,sl=new bt,cr=[],rl=new ui,au=new bt,vs=new se,Ms=new as;class ou extends se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,au)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),rl.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(rl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Ms.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ki),sl.multiplyMatrices(n,ki),vs.matrixWorld=sl,vs.raycast(e,cr);for(let a=0,o=cr.length;a<o;a++){const c=cr[a];c.instanceId=r,c.object=this,t.push(c)}cr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cc(new Float32Array(i*this.count),i,this.count,xo,An));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _i=new as,lu=new $e(.5,.5),hr=new U;class Ns{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],p=r[7],_=r[8],S=r[9],m=r[10],d=r[11],M=r[12],R=r[13],T=r[14],b=r[15];if(i[0].setComponents(l-a,p-h,d-_,b-M).normalize(),i[1].setComponents(l+a,p+h,d+_,b+M).normalize(),i[2].setComponents(l+o,p+f,d+S,b+R).normalize(),i[3].setComponents(l-o,p-f,d-S,b-R).normalize(),n)i[4].setComponents(c,u,m,T).normalize(),i[5].setComponents(l-c,p-u,d-m,b-T).normalize();else if(i[4].setComponents(l-c,p-u,d-m,b-T).normalize(),t===Rn)i[5].setComponents(l+c,p+u,d+m,b+T).normalize();else if(t===Ds)i[5].setComponents(c,u,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=lu.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hr.x=i.normal.x>0?e.max.x:e.min.x,hr.y=i.normal.y>0?e.max.y:e.min.y,hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const al=new bt;class wo{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];al.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ns),n[i].setFromProjectionMatrix(al,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ns),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new wo().copy(this)}}class Pc extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ol=new bt,lo=new Rc,ur=new as,dr=new U;class Lc extends Ft{constructor(e=new qt,t=new Pc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;ol.copy(i).invert(),lo.copy(e.ray).applyMatrix4(ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=u,S=p;_<S;_++){const m=l.getX(_);dr.fromBufferAttribute(f,m),ll(dr,m,c,i,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=u,S=p;_<S;_++)dr.fromBufferAttribute(f,_),ll(dr,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ll(s,e,t,n,i,r,a){const o=lo.distanceSqToPoint(s);if(o<t){const c=new U;lo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ic extends en{constructor(e=[],t=ts,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Os extends en{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class is extends en{constructor(e,t,n=Fn,i,r,a,o=Jt,c=Jt,l,h=ci,f=1){if(h!==ci&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Dc extends is{constructor(e,t=Fn,n=ts,i,r,a=Jt,o=Jt,c,l=ci){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nc extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oe extends qt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2));function _(S,m,d,M,R,T,b,A,g,E,B){const D=T/g,z=b/E,k=T/2,$=b/2,I=A/2,q=g+1,ee=E+1;let W=0,ce=0;const Z=new U;for(let ie=0;ie<ee;ie++){const ae=ie*z-$;for(let Pe=0;Pe<q;Pe++){const Xe=Pe*D-k;Z[S]=Xe*M,Z[m]=ae*R,Z[d]=I,l.push(Z.x,Z.y,Z.z),Z[S]=0,Z[m]=0,Z[d]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(Pe/g),f.push(1-ie/E),W+=1}}for(let ie=0;ie<E;ie++)for(let ae=0;ae<g;ae++){const Pe=u+ae+q*ie,Xe=u+ae+q*(ie+1),Q=u+(ae+1)+q*(ie+1),he=u+(ae+1)+q*ie;c.push(Pe,Xe,he),c.push(Xe,Q,he),ce+=6}o.addGroup(p,ce,B),p+=ce,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class si extends qt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new U,h=new $e;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=n+f/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yt extends qt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],p=[];let _=0;const S=[],m=n/2;let d=0;M(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(p,2));function M(){const T=new U,b=new U;let A=0;const g=(t-e)/n;for(let E=0;E<=r;E++){const B=[],D=E/r,z=D*(t-e)+e;for(let k=0;k<=i;k++){const $=k/i,I=$*c+o,q=Math.sin(I),ee=Math.cos(I);b.x=z*q,b.y=-D*n+m,b.z=z*ee,f.push(b.x,b.y,b.z),T.set(q,g,ee).normalize(),u.push(T.x,T.y,T.z),p.push($,1-D),B.push(_++)}S.push(B)}for(let E=0;E<i;E++)for(let B=0;B<r;B++){const D=S[B][E],z=S[B+1][E],k=S[B+1][E+1],$=S[B][E+1];(e>0||B!==0)&&(h.push(D,z,$),A+=3),(t>0||B!==r-1)&&(h.push(z,k,$),A+=3)}l.addGroup(d,A,0),d+=A}function R(T){const b=_,A=new $e,g=new U;let E=0;const B=T===!0?e:t,D=T===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,m*D,0),u.push(0,D,0),p.push(.5,.5),_++;const z=_;for(let k=0;k<=i;k++){const I=k/i*c+o,q=Math.cos(I),ee=Math.sin(I);g.x=B*ee,g.y=m*D,g.z=B*q,f.push(g.x,g.y,g.z),u.push(0,D,0),A.x=q*.5+.5,A.y=ee*.5*D+.5,p.push(A.x,A.y),_++}for(let k=0;k<i;k++){const $=b+k,I=z+k;T===!0?h.push(I,I+1,$):h.push(I+1,I,$),E+=3}l.addGroup(d,E,T===!0?1:2),d+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends yt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new To(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cu{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,p=(a-h)/u;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new $e:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],r=[],a=[],o=new U,c=new bt;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(rt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(rt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function bo(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,p*=h,i(a,o,u,p)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const cl=new U,hl=new U,ua=new bo,da=new bo,fa=new bo;class hu extends cu{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(hl.subVectors(i[0],i[1]).add(i[0]),l=hl);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(cl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=cl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),ua.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,_,S,m),da.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,_,S,m),fa.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,_,S,m)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),da.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),fa.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(ua.calc(c),da.calc(c),fa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class It extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=e/o,u=t/c,p=[],_=[],S=[],m=[];for(let d=0;d<h;d++){const M=d*u-a;for(let R=0;R<l;R++){const T=R*f-r;_.push(T,-M,0),S.push(0,0,1),m.push(R/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const R=M+l*d,T=M+l*(d+1),b=M+1+l*(d+1),A=M+1+l*d;p.push(R,T,A),p.push(T,b,A)}this.setIndex(p),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.widthSegments,e.heightSegments)}}class li extends qt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new U,u=new U,p=[],_=[],S=[],m=[];for(let d=0;d<=n;d++){const M=[],R=d/n,T=a+R*o,b=e*Math.cos(T),A=Math.sqrt(e*e-b*b);let g=0;d===0&&a===0?g=.5/t:d===n&&c===Math.PI&&(g=-.5/t);for(let E=0;E<=t;E++){const B=E/t,D=i+B*r;f.x=-A*Math.cos(D),f.y=b,f.z=A*Math.sin(D),_.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),m.push(B+g,1-R),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const R=h[d][M+1],T=h[d][M],b=h[d+1][M],A=h[d+1][M+1];(d!==0||a>0)&&p.push(R,T,A),(d!==n-1||c<Math.PI)&&p.push(T,b,A)}this.setIndex(p),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qi extends qt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],f=[],u=new U,p=new U,_=new U;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let d=0;d<=i;d++){const M=d/i*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),_.subVectors(p,u).normalize(),h.push(_.x,_.y,_.z),f.push(d/i),f.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=i;m++){const d=(i+1)*S+m-1,M=(i+1)*(S-1)+m-1,R=(i+1)*(S-1)+m,T=(i+1)*S+m;c.push(d,M,T),c.push(M,R,T)}this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ss(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(ul(i))i.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ul(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=ss(s[t]);for(const i in n)e[i]=n[i]}return e}function ul(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function uu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Uc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const du={clone:ss,merge:sn};var fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fu,this.fragmentShader=pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(i.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mu extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class De extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fc extends De{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gu extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=fo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _u extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xu extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ao extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class vu extends Ao{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const pa=new bt,dl=new U,fl=new U;class Oc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(dl),fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Ds||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fr=new U,pr=new rs,Ln=new U;class Bc extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fr,pr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fr,pr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jn=new U,pl=new $e,ml=new $e;class un extends Bc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,pl,ml),t.subVectors(ml,pl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mu extends Oc{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class ji extends Ao{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class zc extends Bc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Su extends Oc{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yu extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Su}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Gi=-90,Hi=1;class co extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(Gi,Hi,e,t);i.layers=this.layers,this.add(i);const r=new un(Gi,Hi,e,t);r.layers=this.layers,this.add(r);const a=new un(Gi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new un(Gi,Hi,e,t);o.layers=this.layers,this.add(o);const c=new un(Gi,Hi,e,t);c.layers=this.layers,this.add(c);const l=new un(Gi,Hi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Eu extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function gl(s,e,t,n){const i=wu(n);switch(t){case dc:return s*e;case xo:return s*e/i.components*i.byteLength;case vo:return s*e/i.components*i.byteLength;case Si:return s*e*2/i.components*i.byteLength;case Mo:return s*e*2/i.components*i.byteLength;case fc:return s*e*3/i.components*i.byteLength;case Un:return s*e*4/i.components*i.byteLength;case So:return s*e*4/i.components*i.byteLength;case vr:case Mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sr:case yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ia:case Na:return Math.max(s,16)*Math.max(e,8)/4;case La:case Da:return Math.max(s,8)*Math.max(e,8)/2;case Ua:case Fa:case Ba:case za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oa:case wr:case ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Za:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case eo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case to:case no:case io:return Math.ceil(s/4)*Math.ceil(e/4)*16;case so:case ro:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Tr:case ao:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wu(s){switch(s){case dn:case lc:return{byteLength:1,components:1};case Is:case cc:case On:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case Fn:case mo:case An:return{byteLength:4,components:1};case hc:case uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);function kc(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Tu(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){const _=f[u],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,f[u]=S)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];s.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ku=`#define PI 3.141592653589793
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
} // validated`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
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
#endif`,Ed=`uniform sampler2D dfgLUT;
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
}`,wd=`
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zd=`#if defined( USE_MORPHCOLORS )
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
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
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
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uf=`float getShadowMask() {
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
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform float backgroundBlurriness;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
}`,Nf=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`uniform float scale;
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Hf=`#define LAMBERT
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define NORMAL
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
}`,Yf=`#define NORMAL
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
}`,$f=`#define PHONG
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
}`,Kf=`#define PHONG
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
}`,Zf=`#define STANDARD
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
}`,Jf=`#define STANDARD
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
}`,Qf=`#define TOON
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
}`,jf=`#define TOON
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
}`,ep=`uniform float size;
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 color;
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
}`,sp=`uniform float rotation;
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
}`,rp=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:bu,alphahash_pars_fragment:Au,alphamap_fragment:Ru,alphamap_pars_fragment:Cu,alphatest_fragment:Pu,alphatest_pars_fragment:Lu,aomap_fragment:Iu,aomap_pars_fragment:Du,batching_pars_vertex:Nu,batching_vertex:Uu,begin_vertex:Fu,beginnormal_vertex:Ou,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:$u,common:Ku,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ju,displacementmap_vertex:Qu,emissivemap_fragment:ju,emissivemap_pars_fragment:ed,colorspace_fragment:td,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:ad,envmap_physical_pars_fragment:_d,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:xd,lights_toon_pars_fragment:vd,lights_phong_fragment:Md,lights_phong_pars_fragment:Sd,lights_physical_fragment:yd,lights_physical_pars_fragment:Ed,lights_fragment_begin:wd,lights_fragment_maps:Td,lights_fragment_end:bd,lightprobes_pars_fragment:Ad,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Cd,logdepthbuf_pars_vertex:Pd,logdepthbuf_vertex:Ld,map_fragment:Id,map_pars_fragment:Dd,map_particle_fragment:Nd,map_particle_pars_fragment:Ud,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:Od,morphinstance_vertex:Bd,morphcolor_vertex:zd,morphnormal_vertex:kd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Hd,normal_fragment_begin:Vd,normal_fragment_maps:Wd,normal_pars_fragment:Xd,normal_pars_vertex:qd,normal_vertex:Yd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:Zd,clearcoat_pars_fragment:Jd,iridescence_pars_fragment:Qd,opaque_fragment:jd,packing:ef,premultiplied_alpha_fragment:tf,project_vertex:nf,dithering_fragment:sf,dithering_pars_fragment:rf,roughnessmap_fragment:af,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:cf,shadowmap_vertex:hf,shadowmask_pars_fragment:uf,skinbase_vertex:df,skinning_pars_vertex:ff,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:xf,tonemapping_pars_fragment:vf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:yf,uv_pars_vertex:Ef,uv_vertex:wf,worldpos_vertex:Tf,background_vert:bf,background_frag:Af,backgroundCube_vert:Rf,backgroundCube_frag:Cf,cube_vert:Pf,cube_frag:Lf,depth_vert:If,depth_frag:Df,distance_vert:Nf,distance_frag:Uf,equirect_vert:Ff,equirect_frag:Of,linedashed_vert:Bf,linedashed_frag:zf,meshbasic_vert:kf,meshbasic_frag:Gf,meshlambert_vert:Hf,meshlambert_frag:Vf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:qf,meshnormal_frag:Yf,meshphong_vert:$f,meshphong_frag:Kf,meshphysical_vert:Zf,meshphysical_frag:Jf,meshtoon_vert:Qf,meshtoon_frag:jf,points_vert:ep,points_frag:tp,shadow_vert:np,shadow_frag:ip,sprite_vert:sp,sprite_frag:rp},we={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Nn={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Je(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Nn.physical={uniforms:sn([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const mr={r:0,b:0,g:0},ap=new bt,Gc=new Ze;Gc.set(-1,0,0,0,1,0,0,0,1);function op(s,e,t,n,i,r){const a=new Je(0);let o=i===!0?0:1,c,l,h=null,f=0,u=null;function p(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){const T=M.backgroundBlurriness>0;R=e.get(R,T)}return R}function _(M){let R=!1;const T=p(M);T===null?m(a,o):T&&T.isColor&&(m(T,1),R=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(M,R){const T=p(R);T&&T.isCubeTexture?(l===void 0&&(l=new se(new Oe(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ss(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gc),l.material.toneMapped=ct.getTransfer(T.colorSpace)!==Et,(h!==T||f!==T.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new se(new It(2,2),new hi({name:"BackgroundMaterial",uniforms:ss(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ct.getTransfer(T.colorSpace)!==Et,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,R){M.getRGB(mr,Uc(s)),t.buffers.color.setClear(mr.r,mr.g,mr.b,R,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:S,dispose:d}}function lp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(z,k,$,I,q){let ee=!1;const W=f(z,I,$,k);r!==W&&(r=W,l(r.object)),ee=p(z,I,$,q),ee&&_(z,I,$,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,T(z,k,$,I),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return s.createVertexArray()}function l(z){return s.bindVertexArray(z)}function h(z){return s.deleteVertexArray(z)}function f(z,k,$,I){const q=I.wireframe===!0;let ee=n[k.id];ee===void 0&&(ee={},n[k.id]=ee);const W=z.isInstancedMesh===!0?z.id:0;let ce=ee[W];ce===void 0&&(ce={},ee[W]=ce);let Z=ce[$.id];Z===void 0&&(Z={},ce[$.id]=Z);let ie=Z[q];return ie===void 0&&(ie=u(c()),Z[q]=ie),ie}function u(z){const k=[],$=[],I=[];for(let q=0;q<t;q++)k[q]=0,$[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:I,object:z,attributes:{},index:null}}function p(z,k,$,I){const q=r.attributes,ee=k.attributes;let W=0;const ce=$.getAttributes();for(const Z in ce)if(ce[Z].location>=0){const ae=q[Z];let Pe=ee[Z];if(Pe===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(Pe=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(Pe=z.instanceColor)),ae===void 0||ae.attribute!==Pe||Pe&&ae.data!==Pe.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function _(z,k,$,I){const q={},ee=k.attributes;let W=0;const ce=$.getAttributes();for(const Z in ce)if(ce[Z].location>=0){let ae=ee[Z];ae===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor));const Pe={};Pe.attribute=ae,ae&&ae.data&&(Pe.data=ae.data),q[Z]=Pe,W++}r.attributes=q,r.attributesNum=W,r.index=I}function S(){const z=r.newAttributes;for(let k=0,$=z.length;k<$;k++)z[k]=0}function m(z){d(z,0)}function d(z,k){const $=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;$[z]=1,I[z]===0&&(s.enableVertexAttribArray(z),I[z]=1),q[z]!==k&&(s.vertexAttribDivisor(z,k),q[z]=k)}function M(){const z=r.newAttributes,k=r.enabledAttributes;for(let $=0,I=k.length;$<I;$++)k[$]!==z[$]&&(s.disableVertexAttribArray($),k[$]=0)}function R(z,k,$,I,q,ee,W){W===!0?s.vertexAttribIPointer(z,k,$,q,ee):s.vertexAttribPointer(z,k,$,I,q,ee)}function T(z,k,$,I){S();const q=I.attributes,ee=$.getAttributes(),W=k.defaultAttributeValues;for(const ce in ee){const Z=ee[ce];if(Z.location>=0){let ie=q[ce];if(ie===void 0&&(ce==="instanceMatrix"&&z.instanceMatrix&&(ie=z.instanceMatrix),ce==="instanceColor"&&z.instanceColor&&(ie=z.instanceColor)),ie!==void 0){const ae=ie.normalized,Pe=ie.itemSize,Xe=e.get(ie);if(Xe===void 0)continue;const Q=Xe.buffer,he=Xe.type,Ae=Xe.bytesPerElement,Ne=he===s.INT||he===s.UNSIGNED_INT||ie.gpuType===mo;if(ie.isInterleavedBufferAttribute){const Se=ie.data,He=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Rt=ie.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let ze=0;ze<Z.locationSize;ze++)d(Z.location+ze,Se.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ze=0;ze<Z.locationSize;ze++)m(Z.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let ze=0;ze<Z.locationSize;ze++)R(Z.location+ze,Pe/Z.locationSize,he,ae,He*Ae,(Rt+Pe/Z.locationSize*ze)*Ae,Ne)}else{if(ie.isInstancedBufferAttribute){for(let Se=0;Se<Z.locationSize;Se++)d(Z.location+Se,ie.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Se=0;Se<Z.locationSize;Se++)m(Z.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Se=0;Se<Z.locationSize;Se++)R(Z.location+Se,Pe/Z.locationSize,he,ae,Pe*Ae,Pe/Z.locationSize*Se*Ae,Ne)}}else if(W!==void 0){const ae=W[ce];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(Z.location,ae);break;case 3:s.vertexAttrib3fv(Z.location,ae);break;case 4:s.vertexAttrib4fv(Z.location,ae);break;default:s.vertexAttrib1fv(Z.location,ae)}}}}M()}function b(){B();for(const z in n){const k=n[z];for(const $ in k){const I=k[$];for(const q in I){const ee=I[q];for(const W in ee)h(ee[W].object),delete ee[W];delete I[q]}}delete n[z]}}function A(z){if(n[z.id]===void 0)return;const k=n[z.id];for(const $ in k){const I=k[$];for(const q in I){const ee=I[q];for(const W in ee)h(ee[W].object),delete ee[W];delete I[q]}}delete n[z.id]}function g(z){for(const k in n){const $=n[k];for(const I in $){const q=$[I];if(q[z.id]===void 0)continue;const ee=q[z.id];for(const W in ee)h(ee[W].object),delete ee[W];delete q[z.id]}}}function E(z){for(const k in n){const $=n[k],I=z.isInstancedMesh===!0?z.id:0,q=$[I];if(q!==void 0){for(const ee in q){const W=q[ee];for(const ce in W)h(W[ce].object),delete W[ce];delete q[ee]}delete $[I],Object.keys($).length===0&&delete n[k]}}}function B(){D(),a=!0,r!==i&&(r=i,l(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:B,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function cp(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hp(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(g){return!(g!==Un&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const E=g===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==dn&&g!==An&&!E&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ye("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:T,maxSamples:b,samples:A}}function up(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ti,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||i;return i=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=s.get(f);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,R=M*4;let T=d.clippingState||null;c.value=T,T=h(_,u,R,p);for(let b=0;b!==R;++b)T[b]=t[b];d.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const d=p+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let R=0,T=p;R!==S;++R,T+=4)a.copy(f[R]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}class Ro extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ic(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oe(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:$i});r.uniforms.tEquirect.value=t;const a=new se(i,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=Ut),new co(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const _l=256,dp=3,fp=20,Hc=256,Vc=16,pp=3,mp=new U,gp=new Je;class Us{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new co(1,10,null),this._boxMesh=new se(new Oe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=mp}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,_=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(gp));const m=new co(n,i,h);return m.position.copy(o),m.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=_,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_l,Bh(e))}_fromTexture(e,t){e.mapping===ts||e.mapping===Ps?this._setSize(e.image.length===0?_l:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=xl(e,!1,!1),n=Math.log2(e)-dp;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ts||e.mapping===Ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_p(),this._integrationMaterial=xp());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vc);for(let a=0;a<=n;a++){const o=Us.lodToRoughness(a,n);if(a>n-pp)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Hc*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vp());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function xl(s,e,t){return new Ro(s,{minFilter:ai,generateMipmaps:e,type:On,colorSpace:Ar,depthBuffer:t})}function Bs(s,e,t){return new hi({name:s,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:an,blending:$i,depthTest:!1,depthWrite:!1})}function _p(){return Bs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hc}u

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
	`)}function xp(){return Bs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vc}},`

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
	`)}function vp(){return Bs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fp}
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
	`)}function vl(){return Bs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ml(){return Bs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mp(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Br||p===zr)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new Ro(_.height);return S.fromEquirectangularTexture(s,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const p=u.mapping,_=p===Br||p===zr,S=p===ts||p===Ps;if(_||S){let m=t.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Us(s)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return _&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new Us(s)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Br?u.mapping=ts:p===zr&&(u.mapping=Ps),u}function c(u){let p=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&p++;return p===_}function l(u){const p=u.target;p.removeEventListener("dispose",l);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Sp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Zi("WebGLRenderer: "+n+" extension not supported."),i}}}function yp(s,e,t,n){const i={},r=new WeakMap,a=new FinalizationRegistry(_=>delete i[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete i[_.id],a.unregister(_);const S=r.get(_);S&&(e.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,S){return i[S.id]!==void 0||(S.addEventListener("dispose",o),i[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(_){const S=_.attributes;for(const m in S)e.update(S[m],s.ARRAY_BUFFER)}function f(_){const S=_.index,m=_.attributes.position;let d=0;if(m===void 0)return;const M=S!==null?S.array.length:m.array.length/3-1,R=m.count>=65535?bc:Tc,T=new R(Math.ceil(M/3)*6,1),b=T.array;if(S!==null){const g=S.array;d=S.version;for(let E=0,B=0;E<M;E+=3){const D=g[E+0],z=g[E+1],k=g[E+2];b[B++]=D,b[B++]=z,b[B++]=z,b[B++]=k,b[B++]=k,b[B++]=D}}else{d=m.version;for(let g=0,E=0;g<M;g+=3){const B=g+0,D=g+1,z=g+2;b[E++]=B,b[E++]=D,b[E++]=D,b[E++]=z,b[E++]=z,b[E++]=B}}T.version=d;const A=r.get(_);A&&e.remove(A),r.set(_,T)}function u(_){const S=r.get(_);if(S){const m=_.index;m!==null&&S.version<m.version&&f(_)}else f(_);return r.get(_)}function p(){for(const _ in i){const S=i[_].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:u,dispose:p}}function Ep(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){s.drawElements(n,u,r,f*a),t.update(u,n,1)}function l(f,u,p){p!==0&&(s.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];t.update(S,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function wp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tp(s,e,t){const n=new WeakMap,i=new Nt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let D=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var p=D;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),m===!0&&(T=3);let b=o.attributes.position.count*T,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const g=new Float32Array(b*A*4*f),E=new Sc(g,b,A,f);E.type=An,E.needsUpdate=!0;const B=T*4;for(let z=0;z<f;z++){const k=d[z],$=M[z],I=R[z],q=b*A*4*z;for(let ee=0;ee<k.count;ee++){const W=ee*B;_===!0&&(i.fromBufferAttribute(k,ee),g[q+W+0]=i.x,g[q+W+1]=i.y,g[q+W+2]=i.z,g[q+W+3]=0),S===!0&&(i.fromBufferAttribute($,ee),g[q+W+4]=i.x,g[q+W+5]=i.y,g[q+W+6]=i.z,g[q+W+7]=0),m===!0&&(i.fromBufferAttribute(I,ee),g[q+W+8]=i.x,g[q+W+9]=i.y,g[q+W+10]=i.z,g[q+W+11]=I.itemSize===4?i.w:1)}}u={count:f,texture:E,size:new $e(b,A)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",S),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function bp(s,e,t,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Ap={[tc]:"LINEAR_TONE_MAPPING",[nc]:"REINHARD_TONE_MAPPING",[ic]:"CINEON_TONE_MAPPING",[po]:"ACES_FILMIC_TONE_MAPPING",[rc]:"AGX_TONE_MAPPING",[ac]:"NEUTRAL_TONE_MAPPING",[sc]:"CUSTOM_TONE_MAPPING"};function Rp(s,e,t,n,i,r){const a=new Cn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new qt;h.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const f=new mu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new se(h,f),p=new zc(-1,1,1,-1,0,1);let _=null,S=null,m=!1,d,M=null,R=[],T=!1;this.setSize=function(b,A){a.setSize(b,A),o!==null&&o.setSize(b,A),c!==null&&c.setSize(b,A);for(let g=0;g<R.length;g++){const E=R[g];E.setSize&&E.setSize(b,A)}},this.setEffects=function(b){R=b,T=R.length>0&&R[0].isRenderPass===!0;const A=a.width,g=a.height;R.length>0&&o===null&&(o=new Cn(A,g,{type:On,depthBuffer:!1,stencilBuffer:!1}),c=new Cn(A,g,{type:On,depthBuffer:!1,stencilBuffer:!1}));const E=i===!0&&R.some(B=>B.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new is(A,g),r===!0&&(l.format=oi,l.type=ns)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let B=0;B<R.length;B++){const D=R[B];D.setSize&&D.setSize(A,g),E&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(l)}},this.begin=function(b,A){if(m||b.toneMapping===qn&&R.length===0)return!1;if(M=A,A!==null){const g=A.width,E=A.height;(a.width!==g||a.height!==E)&&this.setSize(g,E)}return T===!1&&b.setRenderTarget(a),d=b.toneMapping,b.toneMapping=qn,!0},this.hasRenderPass=function(){return T},this.end=function(b,A){b.toneMapping=d,m=!0;let g=a,E=o;for(let B=0;B<R.length;B++){const D=R[B];D.enabled!==!1&&(D.render(b,E,g,A),D.needsSwap!==!1&&(g=E,E=E===o?c:o))}if(_!==b.outputColorSpace||S!==b.toneMapping){_=b.outputColorSpace,S=b.toneMapping,f.defines={},ct.getTransfer(_)===Et&&(f.defines.SRGB_TRANSFER="");const B=Ap[S];B&&(f.defines[B]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,b.setRenderTarget(M),b.render(u,p),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}const Wc=new en,Xc=new is(1,1),qc=new Dc(1),Yc=new Sc,$c=new Wh,Kc=new Ic,Sl=[],yl=[],El=new Float32Array(16),wl=new Float32Array(9),Tl=new Float32Array(4);function os(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Sl[i];if(r===void 0&&(r=new Float32Array(i),Sl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function $t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ur(s,e){let t=yl[e];t===void 0&&(t=new Int32Array(e),yl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Cp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2fv(this.addr,e),$t(t,e)}}function Lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;s.uniform3fv(this.addr,e),$t(t,e)}}function Ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4fv(this.addr,e),$t(t,e)}}function Dp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Tl.set(n),s.uniformMatrix2fv(this.addr,!1,Tl),$t(t,n)}}function Np(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;wl.set(n),s.uniformMatrix3fv(this.addr,!1,wl),$t(t,n)}}function Up(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;El.set(n),s.uniformMatrix4fv(this.addr,!1,El),$t(t,n)}}function Fp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2iv(this.addr,e),$t(t,e)}}function Bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3iv(this.addr,e),$t(t,e)}}function zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4iv(this.addr,e),$t(t,e)}}function kp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2uiv(this.addr,e),$t(t,e)}}function Hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3uiv(this.addr,e),$t(t,e)}}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4uiv(this.addr,e),$t(t,e)}}function Fr(s){return s.version===0&&(s.compareFunction=gc,s.needsUpdate=!0),s}function Wp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Fr(Xc):r=Wc,t.setTexture2D(e||r,i)}function Xp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$c,i)}function qp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Fr(qc):r=Kc,t.setTextureCube(e||r,i)}function Yp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yc,i)}function $p(s){switch(s){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Ip;case 35674:return Dp;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Gp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Kp(s,e){s.uniform1fv(this.addr,e)}function Zp(s,e){const t=os(e,this.size,2);s.uniform2fv(this.addr,t)}function Jp(s,e){const t=os(e,this.size,3);s.uniform3fv(this.addr,t)}function Qp(s,e){const t=os(e,this.size,4);s.uniform4fv(this.addr,t)}function jp(s,e){const t=os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function em(s,e){const t=os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tm(s,e){const t=os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function nm(s,e){s.uniform1iv(this.addr,e)}function im(s,e){s.uniform2iv(this.addr,e)}function sm(s,e){s.uniform3iv(this.addr,e)}function rm(s,e){s.uniform4iv(this.addr,e)}function am(s,e){s.uniform1uiv(this.addr,e)}function om(s,e){s.uniform2uiv(this.addr,e)}function lm(s,e){s.uniform3uiv(this.addr,e)}function cm(s,e){s.uniform4uiv(this.addr,e)}function hm(s,e,t){const n=this.cache,i=e.length,r=Ur(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Fr(Xc):a=Wc;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function um(s,e,t){const n=this.cache,i=e.length,r=Ur(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$c,r[a])}function dm(s,e,t){const n=this.cache,i=e.length,r=Ur(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Fr(qc):a=Kc;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function fm(s,e,t){const n=this.cache,i=e.length,r=Ur(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Yc,r[a])}function pm(s){switch(s){case 5126:return Kp;case 35664:return Zp;case 35665:return Jp;case 35666:return Qp;case 35674:return jp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$p(t.type)}}class gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}}class _m{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function bl(s,e){s.seq.push(e),s.map[e.id]=e}function xm(s,e,t){const n=s.name,i=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){bl(t,l===void 0?new mm(o,s,e):new gm(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new _m(o),bl(t,f)),t=f}}}class Er{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);xm(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Al(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const vm=37297;let Mm=0;function Sm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Rl=new Ze;function ym(s){ct._getMatrix(Rl,ct.workingColorSpace,s);const e=`mat3( ${Rl.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(s)){case Rr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sm(s.getShaderSource(e),o)}else return r}function Em(s,e){const t=ym(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const wm={[tc]:"Linear",[nc]:"Reinhard",[ic]:"Cineon",[po]:"ACESFilmic",[rc]:"AgX",[ac]:"Neutral",[sc]:"Custom"};function Tm(s,e){const t=wm[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gr=new U;function bm(){ct.getLuminanceCoefficients(gr);const s=gr.x.toFixed(4),e=gr.y.toFixed(4),t=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function Rm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function As(s){return s!==""}function Pl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ll(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(s){return s.replace(Pm,Lm)}function Lm(s,e){const t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ho(t)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(s){return s.replace(Im,Dm)}function Dm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dl(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Nm={[Rs]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function Um(s){return Nm[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fm={[Ps]:"ENVMAP_MODE_REFRACTION"};function Om(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Fm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Bm={[fo]:"ENVMAP_BLENDING_MULTIPLY",[yh]:"ENVMAP_BLENDING_MIX",[Eh]:"ENVMAP_BLENDING_ADD"};function zm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Bm[s.combine]||"ENVMAP_BLENDING_NONE"}function km(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Um(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Om(t),f=zm(t),u=Am(t),p=Rm(r),_=i.createProgram();let S,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(As).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(As).join(`
`),m.length>0&&(m+=`
`)):(S=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),m=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?it.tonemapping_pars_fragment:"",t.toneMapping!==qn?Tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Em("linearToOutputTexel",t.outputColorSpace),bm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=ho(a),a=Pl(a,t),a=Ll(a,t),o=ho(o),o=Pl(o,t),o=Ll(o,t),a=Il(a),o=Il(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=d+S+a,R=d+m+o,T=Al(i,i.VERTEX_SHADER,M),b=Al(i,i.FRAGMENT_SHADER,R);i.attachShader(_,T),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(T)||"",$=i.getShaderInfoLog(b)||"",I=z.trim(),q=k.trim(),ee=$.trim();let W=!0,ce=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,b);else{const Z=Cl(i,T,"vertex"),ie=Cl(i,b,"fragment");mt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+Z+`
`+ie)}else I!==""?Ye("WebGLProgram: Program Info Log:",I):(q===""||ee==="")&&(ce=!1);ce&&(D.diagnostics={runnable:W,programLog:I,vertexShader:{log:q,prefix:S},fragmentShader:{log:ee,prefix:m}})}i.deleteShader(T),i.deleteShader(b),g=new Er(i,_),E=Cm(i,_)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(_,vm)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let Gm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vm(e),t.set(e,n)),n}}class Vm{constructor(e){this.id=Gm++,this.code=e,this.usedTimes=0}}function Wm(s){return s===Si||s===wr||s===Tr}function Xm(s,e,t,n,i,r){const a=new yc,o=new Hm,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,E,B,D,z,k){const $=D.fog,I=z.geometry,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,ee=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,W=e.get(g.envMap||q,ee),ce=u[g.type];let Z=n.precision;g.precision!==null&&(Z=n.getMaxPrecision(g.precision),Z!==g.precision&&Ye("WebGLProgram.getParameters:",g.precision,"not supported, using",Z,"instead."));const ie=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ae=ie!==void 0?ie.length:0;let Pe=0;I.morphAttributes.position!==void 0&&(Pe=1),I.morphAttributes.normal!==void 0&&(Pe=2),I.morphAttributes.color!==void 0&&(Pe=3);let Xe,Q,he,Ae;if(ce){const le=Nn[ce];Xe=le.vertexShader,Q=le.fragmentShader}else{Xe=g.vertexShader,Q=g.fragmentShader;const le=o.getVertexShaderStage(g),Ke=o.getFragmentShaderStage(g);o.update(g,le,Ke),he=le.id,Ae=Ke.id}const Ne=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),He=z.isInstancedMesh===!0,Rt=z.isBatchedMesh===!0,ze=!!g.map,ot=!!g.matcap,at=!!W,Ve=at&&W.isPMREMTexture===!0,Ct=!!g.aoMap,Pt=!!g.lightMap,be=!!g.bumpMap&&g.wireframe===!1,ke=!!g.normalMap,nt=!!g.displacementMap,Qe=!!g.emissiveMap,st=!!g.metalnessMap,kt=!!g.roughnessMap,Dt=g.anisotropy>0,N=g.clearcoat>0,gt=g.diffuseRoughness>0,_t=g.dispersion>0,vt=g.retroreflectivity>0,ve=g.iridescence>0,Mt=g.sheen>0,Be=g.transmission>0,We=Dt&&!!g.anisotropyMap,w=N&&!!g.clearcoatMap,x=N&&!!g.clearcoatNormalMap,G=N&&!!g.clearcoatRoughnessMap,oe=gt&&!!g.diffuseRoughnessMap,ne=ve&&!!g.iridescenceMap,ue=ve&&!!g.iridescenceThicknessMap,_e=Mt&&!!g.sheenColorMap,J=Mt&&!!g.sheenRoughnessMap,j=!!g.specularMap,me=!!g.specularColorMap,C=!!g.specularIntensityMap,te=Be&&!!g.transmissionMap,y=Be&&!!g.thicknessMap,P=!!g.gradientMap,F=!!g.alphaMap,O=g.alphaTest>0,X=!!g.alphaHash,re=!!g.extensions;let K=qn;g.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(K=s.toneMapping);const de=Ve?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Te={shaderID:ce,shaderType:g.type,shaderName:g.name,vertexShader:Xe,fragmentShader:Q,defines:g.defines,customVertexShaderID:he,customFragmentShaderID:Ae,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Z,batching:Rt,batchingColor:Rt&&z._colorsTexture!==null,instancing:He,instancingColor:He&&z.instanceColor!==null,instancingMorph:He&&z.morphTexture!==null,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ze,matcap:ot,envMap:at,envMapMode:at&&W.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?de.length-1:null,envMapSize:Ve?de[0].width:null,aoMap:Ct,lightMap:Pt,bumpMap:be,normalMap:ke,displacementMap:nt,emissiveMap:Qe,normalMapObjectSpace:ke&&g.normalMapType===bh,normalMapTangentSpace:ke&&g.normalMapType===br,packedNormalMap:ke&&g.normalMapType===br&&Wm(g.normalMap.format),metalnessMap:st,roughnessMap:kt,anisotropy:Dt,anisotropyMap:We,clearcoat:N,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:G,diffuseRoughness:gt,diffuseRoughnessMap:oe,dispersion:_t,retroreflection:vt,iridescence:ve,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:Mt,sheenColorMap:_e,sheenRoughnessMap:J,specularMap:j,specularColorMap:me,specularIntensityMap:C,transmission:Be,transmissionMap:te,thicknessMap:y,gradientMap:P,opaque:g.transparent===!1&&g.blending===Ki&&g.alphaToCoverage===!1,alphaMap:F,alphaTest:O,alphaHash:X,combine:g.combine,mapUv:ze&&p(g.map.channel),aoMapUv:Ct&&p(g.aoMap.channel),lightMapUv:Pt&&p(g.lightMap.channel),bumpMapUv:be&&p(g.bumpMap.channel),normalMapUv:ke&&p(g.normalMap.channel),displacementMapUv:nt&&p(g.displacementMap.channel),emissiveMapUv:Qe&&p(g.emissiveMap.channel),metalnessMapUv:st&&p(g.metalnessMap.channel),roughnessMapUv:kt&&p(g.roughnessMap.channel),anisotropyMapUv:We&&p(g.anisotropyMap.channel),clearcoatMapUv:w&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(g.sheenRoughnessMap.channel),specularMapUv:j&&p(g.specularMap.channel),specularColorMapUv:me&&p(g.specularColorMap.channel),specularIntensityMapUv:C&&p(g.specularIntensityMap.channel),transmissionMapUv:te&&p(g.transmissionMap.channel),thicknessMapUv:y&&p(g.thicknessMap.channel),alphaMapUv:F&&p(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ke||Dt),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!I.attributes.uv&&(ze||F),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&ke===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Pe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.filter(le=>le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:K,decodeVideoTexture:ze&&g.map.isVideoTexture===!0&&ct.getTransfer(g.map.colorSpace)===Et,decodeVideoTextureEmissive:Qe&&g.emissiveMap.isVideoTexture===!0&&ct.getTransfer(g.emissiveMap.colorSpace)===Et,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xn,flipSided:g.side===an,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:re&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&g.extensions.multiDraw===!0||Rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function S(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const B in g.defines)E.push(B),E.push(g.defines[B]);return g.isRawShaderMaterial===!1&&(m(E,g),d(E,g),E.push(s.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function m(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function d(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const E=u[g.type];let B;if(E){const D=Nn[E];B=du.clone(D.uniforms)}else B=g.uniforms;return B}function R(g,E){let B=h.get(E);return B!==void 0?++B.usedTimes:(B=new km(s,E,g,i),l.push(B),h.set(E,B)),B}function T(g){if(--g.usedTimes===0){const E=l.indexOf(g);l[E]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function b(g){o.remove(g)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:A}}function qm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Nl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ul(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,S,m,d){let M=s[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:d},s[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=_,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=d),e++,M}function c(u,p,_,S,m,d,M){M.reversedDepth===!0&&(m=-m);const R=o(u,p,_,S,m,d);_.transmission>0?n.push(R):_.transparent===!0?i.push(R):t.push(R)}function l(u,p,_,S,m,d){const M=o(u,p,_,S,m,d);_.transmission>0?n.unshift(M):_.transparent===!0?i.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||Ym),n.length>1&&n.sort(p||Nl),i.length>1&&i.sort(p||Nl)}function f(){for(let u=e,p=s.length;u<p;u++){const _=s[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:h}}function $m(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ul,s.set(n,[a])):i>=r.length?(a=new Ul,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Km(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Je};break;case"SpotLight":t={position:new U,direction:new U,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function Zm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jm=0;function Qm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jm(s){const e=new Km,t=Zm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,r=new bt,a=new bt;function o(l){let h=0,f=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,_=0,S=0,m=0,d=0,M=0,R=0,T=0,b=0,A=0,g=0,E=0,B=0,D=0;l.sort(Qm);for(let k=0,$=l.length;k<$;k++){const I=l[k],q=I.color,ee=I.intensity,W=I.distance;let ce=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Si?ce=I.shadow.map.texture:ce=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=q.r*ee,f+=q.g*ee,u+=q.b*ee;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],ee);D++}else if(I.isSunLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,ae=t.get(I);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[_]=ae,n.sunShadowMap[_]=ce;const Pe=ie.getViewportCount();for(let Xe=0;Xe<Pe;Xe++)n.sunShadowMatrix[S+Xe]=ie.getMatrix(Xe),n.sunShadowCascade[S+Xe]=ie._cascadeData[Xe];S+=Pe,_++}n.sun[p]=Z,p++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,ae=t.get(I);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.directionalShadow[m]=ae,n.directionalShadowMap[m]=ce,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=Z,m++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(q).multiplyScalar(ee),Z.distance=W,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[M]=Z;const ie=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,ie.updateMatrices(I),I.castShadow&&B++),n.spotLightMatrix[M]=ie.matrix,I.castShadow){const ae=t.get(I);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.spotShadow[M]=ae,n.spotShadowMap[M]=ce,g++}M++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(q).multiplyScalar(ee),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=Z,R++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const ie=I.shadow,ae=t.get(I);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,n.pointShadow[d]=ae,n.pointShadowMap[d]=ce,n.pointShadowMatrix[d]=I.shadow.matrix,A++}n.point[d]=Z,d++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(ee),Z.groundColor.copy(I.groundColor).multiplyScalar(ee),n.hemi[T]=Z,T++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const z=n.hash;(z.sunLength!==p||z.directionalLength!==m||z.pointLength!==d||z.spotLength!==M||z.rectAreaLength!==R||z.hemiLength!==T||z.numSunShadows!==_||z.numDirectionalShadows!==b||z.numPointShadows!==A||z.numSpotShadows!==g||z.numSpotMaps!==E||z.numLightProbes!==D)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=d,n.hemi.length=T,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+E-B,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=D,z.sunLength=p,z.directionalLength=m,z.pointLength=d,z.spotLength=M,z.rectAreaLength=R,z.hemiLength=T,z.numSunShadows=_,z.numDirectionalShadows=b,z.numPointShadows=A,z.numSpotShadows=g,z.numSpotMaps=E,z.numLightProbes=D,n.version=Jm++)}function c(l,h){let f=0,u=0,p=0,_=0,S=0,m=0;const d=h.matrixWorldInverse;for(let M=0,R=l.length;M<R;M++){const T=l[M];if(T.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(d),f++}else if(T.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(d),u++}else if(T.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(d),_++}else if(T.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(T.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(T.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function Fl(s){const e=new jm(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function c(){e.setup(t),i.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function e0(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Fl(s),e.set(i,[o])):r>=a.length?(o=new Fl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`,i0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],s0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ol=new bt,Ss=new U,ga=new U;function r0(s,e,t){let n=new Ns;const i=new $e,r=new $e,a=new Nt,o=new _u,c=new xu,l={},h=t.maxTextureSize,f={[Mi]:an,[an]:Mi,[xn]:xn},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new se(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let d=this.type;this.render=function(A,g,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===ih&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);const B=s.getRenderTarget(),D=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),k=s.state;k.setBlending($i),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=d!==this.type;$&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=A.length;I<q;I++){const ee=A[I],W=ee.shadow;if(W===void 0){Ye("WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ce=W.getFrameExtents();i.multiply(ce),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ce.x),i.x=r.x*ce.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ce.y),i.y=r.y*ce.y,W.mapSize.y=r.y));const Z=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Z,W.map===null||$===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ts){if(ee.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Cn(i.x,i.y,{format:Si,type:On,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),W.map.texture.name=ee.name+".shadowMap",W.map.depthTexture=new is(i.x,i.y,An),W.map.depthTexture.name=ee.name+".shadowMapDepth",W.map.depthTexture.format=ci,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt}else ee.isPointLight?(W.map=new Ro(i.x),W.map.depthTexture=new Dc(i.x,Fn)):(W.map=new Cn(i.x,i.y),W.map.depthTexture=new is(i.x,i.y,Fn)),W.map.depthTexture.name=ee.name+".shadowMap",W.map.depthTexture.format=ci,this.type===Rs?(W.map.depthTexture.compareFunction=Z?mc:pc,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const ie=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();ee.isPointLight!==!0&&W.updateMatrices(ee,E);const ae=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:E.layers;for(let Pe=0;Pe<ie;Pe++){const Xe=W.getCamera(Pe);if(ee.isPointLight){const Q=W.camera,he=W.matrix,Ae=ee.distance||Q.far;Ae!==Q.far&&(Q.far=Ae,Q.updateProjectionMatrix()),Ss.setFromMatrixPosition(ee.matrixWorld),Q.position.copy(Ss),ga.copy(Q.position),ga.add(i0[Pe]),Q.up.copy(s0[Pe]),Q.lookAt(ga),Q.updateMatrixWorld(),he.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Ol.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ol,Q.coordinateSystem,Q.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,Pe),s.clear();else{Pe===0&&(s.setRenderTarget(W.map),s.clear());const Q=W.getViewport(Pe);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),k.viewport(a)}n=W.getFrustum(Pe),T(g,E,Xe,ee,ae,this.type)}W.isPointLightShadow!==!0&&this.type===Ts&&M(W,E),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(B,D,z)};function M(A,g){const E=e.update(S);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Cn(i.x,i.y,{format:Si,type:On}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(g,null,E,u,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(g,null,E,p,S,null)}function R(A,g,E,B){let D=null;const z=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)D=z;else if(D=E.isPointLight===!0?c:o,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const k=D.uuid,$=g.uuid;let I=l[k];I===void 0&&(I={},l[k]=I);let q=I[$];q===void 0&&(q=D.clone(),I[$]=q,g.addEventListener("dispose",b)),D=q}if(D.visible=g.visible,D.wireframe=g.wireframe,B===Ts?D.side=g.shadowSide!==null?g.shadowSide:g.side:D.side=g.shadowSide!==null?g.shadowSide:f[g.side],D.alphaMap=g.alphaMap,D.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,D.map=g.map,D.clipShadows=g.clipShadows,D.clippingPlanes=g.clippingPlanes,D.clipIntersection=g.clipIntersection,D.displacementMap=g.displacementMap,D.displacementScale=g.displacementScale,D.displacementBias=g.displacementBias,D.wireframeLinewidth=g.wireframeLinewidth,D.linewidth=g.linewidth,E.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const k=s.properties.get(D);k.light=E}return D}function T(A,g,E,B,D,z){if(A.visible===!1)return;if(A.layers.test(D)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Ts)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const I=e.update(A),q=A.material;if(Array.isArray(q)){const ee=I.groups;for(let W=0,ce=ee.length;W<ce;W++){const Z=ee[W],ie=q[Z.materialIndex];if(ie&&ie.visible){const ae=R(A,ie,B,z);A.onBeforeShadow(s,A,g,E,I,ae,Z),s.renderBufferDirect(E,null,I,ae,A,Z),A.onAfterShadow(s,A,g,E,I,ae,Z)}}}else if(q.visible){const ee=R(A,q,B,z);A.onBeforeShadow(s,A,g,E,I,ee,null),s.renderBufferDirect(E,null,I,ee,A,null),A.onAfterShadow(s,A,g,E,I,ee,null)}}const $=A.children;for(let I=0,q=$.length;I<q;I++)T($[I],g,E,B,D,z)}function b(A){A.target.removeEventListener("dispose",b);for(const E in l){const B=l[E],D=A.target.uuid;D in B&&(B[D].dispose(),delete B[D])}}}function a0(s,e){function t(){let C=!1;const te=new Nt;let y=null;const P=new Nt(0,0,0,0);return{setMask:function(F){y!==F&&!C&&(s.colorMask(F,F,F,F),y=F)},setLocked:function(F){C=F},setClear:function(F,O,X,re,K){K===!0&&(F*=re,O*=re,X*=re),te.set(F,O,X,re),P.equals(te)===!1&&(s.clearColor(F,O,X,re),P.copy(te))},reset:function(){C=!1,y=null,P.set(-1,0,0,0)}}}function n(){let C=!1,te=!1,y=null,P=null,F=null;return{setReversed:function(O){if(te!==O){const X=e.get("EXT_clip_control");O?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),te=O;const re=F;F=null,this.setClear(re)}},getReversed:function(){return te},setTest:function(O){O?Se(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(O){y!==O&&!C&&(s.depthMask(O),y=O)},setFunc:function(O){if(te&&(O=Fh[O]),P!==O){switch(O){case Ea:s.depthFunc(s.NEVER);break;case wa:s.depthFunc(s.ALWAYS);break;case Ta:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case ba:s.depthFunc(s.EQUAL);break;case Aa:s.depthFunc(s.GEQUAL);break;case Ra:s.depthFunc(s.GREATER);break;case Ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}P=O}},setLocked:function(O){C=O},setClear:function(O){F!==O&&(F=O,te&&(O=1-O),s.clearDepth(O))},reset:function(){C=!1,y=null,P=null,F=null,te=!1}}}function i(){let C=!1,te=null,y=null,P=null,F=null,O=null,X=null,re=null,K=null;return{setTest:function(de){C||(de?Se(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(de){te!==de&&!C&&(s.stencilMask(de),te=de)},setFunc:function(de,Te,le){(y!==de||P!==Te||F!==le)&&(s.stencilFunc(de,Te,le),y=de,P=Te,F=le)},setOp:function(de,Te,le){(O!==de||X!==Te||re!==le)&&(s.stencilOp(de,Te,le),O=de,X=Te,re=le)},setLocked:function(de){C=de},setClear:function(de){K!==de&&(s.clearStencil(de),K=de)},reset:function(){C=!1,te=null,y=null,P=null,F=null,O=null,X=null,re=null,K=null}}}const r=new t,a=new n,o=new i;let c={};const l=new WeakMap;let h={},f={},u={},p=new WeakMap,_=[],S=null,m=!1,d=null,M=null,R=null,T=null,b=null,A=null,g=null,E=new Je(0,0,0),B=0,D=!1,z=null,k=null,$=null,I=null,q=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ce=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=ce>=1):Z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=ce>=2);let ie=null,ae={};const Pe=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),Q=new Nt().fromArray(Pe),he=new Nt().fromArray(Xe);function Ae(C,te,y,P){const F=new Uint8Array(4),O=s.createTexture();s.bindTexture(C,O),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let X=0;X<y;X++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,P,0,s.RGBA,s.UNSIGNED_BYTE,F):s.texImage2D(te+X,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,F);return O}const Ne={};Ne[s.TEXTURE_2D]=Ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Ne[s.TEXTURE_CUBE_MAP]=Ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[s.TEXTURE_2D_ARRAY]=Ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ne[s.TEXTURE_3D]=Ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(s.DEPTH_TEST),a.setFunc(Cs),be(!1),ke(Uo),Se(s.CULL_FACE),Ct($i);function Se(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function He(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function Rt(C,te){return u[C]!==te?(s.bindFramebuffer(C,te),u[C]=te,C===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=te),C===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=te),!0):!1}function ze(C,te){let y=_,P=!1;if(C){y=p.get(te),y===void 0&&(y=[],p.set(te,y));const F=C.textures;if(y.length!==F.length||y[0]!==s.COLOR_ATTACHMENT0){for(let O=0,X=F.length;O<X;O++)y[O]=s.COLOR_ATTACHMENT0+O;y.length=F.length,P=!0}}else y[0]!==s.BACK&&(y[0]=s.BACK,P=!0);P&&s.drawBuffers(y)}function ot(C){return S!==C?(s.useProgram(C),S=C,!0):!1}const at={[Xi]:s.FUNC_ADD,[rh]:s.FUNC_SUBTRACT,[ah]:s.FUNC_REVERSE_SUBTRACT};at[oh]=s.MIN,at[lh]=s.MAX;const Ve={[ch]:s.ZERO,[hh]:s.ONE,[uh]:s.SRC_COLOR,[jl]:s.SRC_ALPHA,[_h]:s.SRC_ALPHA_SATURATE,[mh]:s.DST_COLOR,[fh]:s.DST_ALPHA,[dh]:s.ONE_MINUS_SRC_COLOR,[ec]:s.ONE_MINUS_SRC_ALPHA,[gh]:s.ONE_MINUS_DST_COLOR,[ph]:s.ONE_MINUS_DST_ALPHA,[xh]:s.CONSTANT_COLOR,[vh]:s.ONE_MINUS_CONSTANT_COLOR,[Mh]:s.CONSTANT_ALPHA,[Sh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(C,te,y,P,F,O,X,re,K,de){if(C===$i){m===!0&&(He(s.BLEND),m=!1);return}if(m===!1&&(Se(s.BLEND),m=!0),C!==sh){if(C!==d||de!==D){if((M!==Xi||b!==Xi)&&(s.blendEquation(s.FUNC_ADD),M=Xi,b=Xi),de)switch(C){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dn:s.blendFunc(s.ONE,s.ONE);break;case Fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:mt("WebGLState: Invalid blending: ",C);break}else switch(C){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fo:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oo:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",C);break}R=null,T=null,A=null,g=null,E.set(0,0,0),B=0,d=C,D=de}return}F=F||te,O=O||y,X=X||P,(te!==M||F!==b)&&(s.blendEquationSeparate(at[te],at[F]),M=te,b=F),(y!==R||P!==T||O!==A||X!==g)&&(s.blendFuncSeparate(Ve[y],Ve[P],Ve[O],Ve[X]),R=y,T=P,A=O,g=X),(re.equals(E)===!1||K!==B)&&(s.blendColor(re.r,re.g,re.b,K),E.copy(re),B=K),d=C,D=!1}function Pt(C,te){C.side===xn?He(s.CULL_FACE):Se(s.CULL_FACE);let y=C.side===an;te&&(y=!y),be(y),C.blending===Ki&&C.transparent===!1?Ct($i):Ct(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const P=C.stencilWrite;o.setTest(P),P&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Qe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(C){z!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),z=C)}function ke(C){C!==th?(Se(s.CULL_FACE),C!==k&&(C===Uo?s.cullFace(s.BACK):C===nh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),k=C}function nt(C){C!==$&&(W&&s.lineWidth(C),$=C)}function Qe(C,te,y){C?(Se(s.POLYGON_OFFSET_FILL),(I!==te||q!==y)&&(I=te,q=y,a.getReversed()&&(te=-te,y=-y),s.polygonOffset(te,y))):He(s.POLYGON_OFFSET_FILL)}function st(C){C?Se(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function kt(C){C===void 0&&(C=s.TEXTURE0+ee-1),ie!==C&&(s.activeTexture(C),ie=C)}function Dt(C,te,y){y===void 0&&(ie===null?y=s.TEXTURE0+ee-1:y=ie);let P=ae[y];P===void 0&&(P={type:void 0,texture:void 0},ae[y]=P),(P.type!==C||P.texture!==te)&&(ie!==y&&(s.activeTexture(y),ie=y),s.bindTexture(C,te||Ne[C]),P.type=C,P.texture=te)}function N(){const C=ae[ie];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(C){mt("WebGLState:",C)}}function _t(){try{s.compressedTexImage3D(...arguments)}catch(C){mt("WebGLState:",C)}}function vt(){try{s.texSubImage2D(...arguments)}catch(C){mt("WebGLState:",C)}}function ve(){try{s.texSubImage3D(...arguments)}catch(C){mt("WebGLState:",C)}}function Mt(){try{s.compressedTexSubImage2D(...arguments)}catch(C){mt("WebGLState:",C)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(C){mt("WebGLState:",C)}}function We(){try{s.texStorage2D(...arguments)}catch(C){mt("WebGLState:",C)}}function w(){try{s.texStorage3D(...arguments)}catch(C){mt("WebGLState:",C)}}function x(){try{s.texImage2D(...arguments)}catch(C){mt("WebGLState:",C)}}function G(){try{s.texImage3D(...arguments)}catch(C){mt("WebGLState:",C)}}function oe(C){return f[C]!==void 0?f[C]:s.getParameter(C)}function ne(C,te){f[C]!==te&&(s.pixelStorei(C,te),f[C]=te)}function ue(C){Q.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Q.copy(C))}function _e(C){he.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),he.copy(C))}function J(C,te){let y=l.get(te);y===void 0&&(y=new WeakMap,l.set(te,y));let P=y.get(C);P===void 0&&(P=s.getUniformBlockIndex(te,C.name),s.uniformBlockBinding(te,P,P),y.set(C,P))}function j(C,te,y){const F=l.get(te).get(C);c[F]!==y&&(s.bindBufferBase(s.UNIFORM_BUFFER,F,y),c[F]=y)}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},ie=null,ae={},u={},c={},p=new WeakMap,_=[],S=null,m=!1,d=null,M=null,R=null,T=null,b=null,A=null,g=null,E=new Je(0,0,0),B=0,D=!1,z=null,k=null,$=null,I=null,q=null,Q.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:He,bindFramebuffer:Rt,drawBuffers:ze,useProgram:ot,setBlending:Ct,setMaterial:Pt,setFlipSided:be,setCullFace:ke,setLineWidth:nt,setPolygonOffset:Qe,setScissorTest:st,activeTexture:kt,bindTexture:Dt,unbindTexture:N,compressedTexImage2D:gt,compressedTexImage3D:_t,texImage2D:x,texImage3D:G,pixelStorei:ne,getParameter:oe,updateUBOMapping:J,uniformBlockBinding:j,texStorage2D:We,texStorage3D:w,texSubImage2D:vt,texSubImage3D:ve,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Be,scissor:ue,viewport:_e,reset:me}}function o0(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,h=new WeakMap,f=new Set;let u;const p=new WeakMap,_=new Set,S=new FinalizationRegistry(w=>_.delete(w));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(w,x){return m?new OffscreenCanvas(w,x):Cr("canvas")}function M(w,x,G){let oe=1;const ne=We(w);if((ne.width>G||ne.height>G)&&(oe=G/Math.max(ne.width,ne.height)),oe<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ue=Math.floor(oe*ne.width),_e=Math.floor(oe*ne.height);u===void 0&&(u=d(ue,_e));const J=x?d(ue,_e):u;return J.width=ue,J.height=_e,J.getContext("2d").drawImage(w,0,0,ue,_e),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+_e+")."),J}else return"data"in w&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function R(w){return w.generateMipmaps}function T(w){s.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(w,x,G,oe,ne,ue=!1){if(w!==null){if(s[w]!==void 0)return s[w];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===s.RED&&(G===s.FLOAT&&(J=s.R32F),G===s.HALF_FLOAT&&(J=s.R16F),G===s.UNSIGNED_BYTE&&(J=s.R8),G===s.UNSIGNED_SHORT&&_e&&(J=_e.R16_EXT),G===s.SHORT&&_e&&(J=_e.R16_SNORM_EXT)),x===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.R8UI),G===s.UNSIGNED_SHORT&&(J=s.R16UI),G===s.UNSIGNED_INT&&(J=s.R32UI),G===s.BYTE&&(J=s.R8I),G===s.SHORT&&(J=s.R16I),G===s.INT&&(J=s.R32I)),x===s.RG&&(G===s.FLOAT&&(J=s.RG32F),G===s.HALF_FLOAT&&(J=s.RG16F),G===s.UNSIGNED_BYTE&&(J=s.RG8),G===s.UNSIGNED_SHORT&&_e&&(J=_e.RG16_EXT),G===s.SHORT&&_e&&(J=_e.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RG8UI),G===s.UNSIGNED_SHORT&&(J=s.RG16UI),G===s.UNSIGNED_INT&&(J=s.RG32UI),G===s.BYTE&&(J=s.RG8I),G===s.SHORT&&(J=s.RG16I),G===s.INT&&(J=s.RG32I)),x===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGB8UI),G===s.UNSIGNED_SHORT&&(J=s.RGB16UI),G===s.UNSIGNED_INT&&(J=s.RGB32UI),G===s.BYTE&&(J=s.RGB8I),G===s.SHORT&&(J=s.RGB16I),G===s.INT&&(J=s.RGB32I)),x===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),G===s.UNSIGNED_INT&&(J=s.RGBA32UI),G===s.BYTE&&(J=s.RGBA8I),G===s.SHORT&&(J=s.RGBA16I),G===s.INT&&(J=s.RGBA32I)),x===s.RGB&&(G===s.UNSIGNED_SHORT&&_e&&(J=_e.RGB16_EXT),G===s.SHORT&&_e&&(J=_e.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),x===s.RGBA){const j=ue?Rr:ct.getTransfer(ne);G===s.FLOAT&&(J=s.RGBA32F),G===s.HALF_FLOAT&&(J=s.RGBA16F),G===s.UNSIGNED_BYTE&&(J=j===Et?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&_e&&(J=_e.RGBA16_EXT),G===s.SHORT&&_e&&(J=_e.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(w,x){let G;return w?x===null||x===Fn||x===ns?G=s.DEPTH24_STENCIL8:x===An?G=s.DEPTH32F_STENCIL8:x===Is&&(G=s.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fn||x===ns?G=s.DEPTH_COMPONENT24:x===An?G=s.DEPTH_COMPONENT32F:x===Is&&(G=s.DEPTH_COMPONENT16),G}function E(w,x){return R(w)===!0||w.isFramebufferTexture&&w.minFilter!==Jt&&w.minFilter!==Ut?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function B(w){const x=new WeakRef(w);n.get(w).__ref=x,_.add(x),S.register(w,x,x)}function D(w){const x=n.get(w).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function z(w){$(w.target)}function k(w){I(w.target)}function $(w){w.removeEventListener("dispose",z),D(w),ee(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function I(w){w.removeEventListener("dispose",k),D(w),ce(w)}function q(){for(const w of _){const x=w.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):$(x))}_.clear(),f.clear()}function ee(w){const x=n.get(w);if(x.__webglInit===void 0)return;const G=w.source,oe=p.get(G);if(oe){const ne=oe[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&W(w),Object.keys(oe).length===0&&p.delete(G)}n.remove(w)}function W(w){const x=n.get(w);s.deleteTexture(x.__webglTexture);const G=w.source,oe=p.get(G);delete oe[x.__cacheKey],a.memory.textures--}function ce(w){const x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();const G=w.depthTexture;if(G&&G.renderTarget===w&&$(G),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(x.__webglFramebuffer[ne]))for(let ue=0;ue<x.__webglFramebuffer[ne].length;ue++)s.deleteFramebuffer(x.__webglFramebuffer[ne][ue]);else s.deleteFramebuffer(x.__webglFramebuffer[ne]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[ne])}else{if(Array.isArray(x.__webglFramebuffer))for(let ne=0;ne<x.__webglFramebuffer.length;ne++)s.deleteFramebuffer(x.__webglFramebuffer[ne]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ne=0;ne<x.__webglColorRenderbuffer.length;ne++)x.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[ne]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const oe=w.textures;for(let ne=0,ue=oe.length;ne<ue;ne++){const _e=n.get(oe[ne]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(oe[ne])}n.remove(w)}let Z=0;function ie(){Z=0}function ae(){return Z}function Pe(w){Z=w}function Xe(){const w=Z;return w>=i.maxTextures&&Ye("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+i.maxTextures),Z+=1,w}function Q(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function he(w,x){const G=n.get(w);if(w.isVideoTexture&&Mt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){const oe=w.image;if(oe===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(G,w,x);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+x)}function Ae(w,x){const G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){Pt(G,w,x);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+x)}function Ne(w,x){const G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){Pt(G,w,x);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+x)}function Se(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){be(G,w,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+x)}const He={[Ls]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},Rt={[Jt]:s.NEAREST,[wh]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[kr]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},ze={[Rh]:s.NEVER,[gc]:s.ALWAYS,[Ch]:s.LESS,[pc]:s.LEQUAL,[Ph]:s.EQUAL,[mc]:s.GEQUAL,[Lh]:s.GREATER,[Ih]:s.NOTEQUAL};function ot(w,x){if(x.type===An&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ut||x.magFilter===kr||x.magFilter===Vs||x.magFilter===ai||x.minFilter===Ut||x.minFilter===kr||x.minFilter===Vs||x.minFilter===ai)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,He[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,He[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,He[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Rt[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Rt[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==Vs&&x.minFilter!==ai||x.type===An&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function at(w,x){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",z),B(x));const oe=x.source;let ne=p.get(oe);ne===void 0&&(ne={},p.set(oe,ne));const ue=Q(x);if(ue!==w.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[ue].usedTimes++;const _e=ne[w.__cacheKey];_e!==void 0&&(ne[w.__cacheKey].usedTimes--,_e.usedTimes===0&&W(x)),w.__cacheKey=ue,w.__webglTexture=ne[ue].texture}return G}function Ve(w,x,G){return Math.floor(Math.floor(w/G)/x)}function Ct(w,x,G,oe){const ue=w.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,G,oe,x.data);else{ue.sort((C,te)=>C.start-te.start);let _e=0;for(let C=1;C<ue.length;C++){const te=ue[_e],y=ue[C],P=te.start+te.count,F=Ve(y.start,x.width,4),O=Ve(te.start,x.width,4);y.start<=P+1&&F===O&&Ve(y.start+y.count-1,x.width,4)===F?te.count=Math.max(te.count,y.start+y.count-te.start):(++_e,ue[_e]=y)}ue.length=_e+1;const J=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let C=0,te=ue.length;C<te;C++){const y=ue[C],P=Math.floor(y.start/4),F=Math.ceil(y.count/4),O=P%x.width,X=Math.floor(P/x.width),re=F,K=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,O),t.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,O,X,re,K,G,oe,x.data)}w.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function Pt(w,x,G){let oe=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=s.TEXTURE_3D);const ne=at(w,x),ue=x.source;t.bindTexture(oe,w.__webglTexture,s.TEXTURE0+G);const _e=n.get(ue);if(ue.version!==_e.__version||ne===!0){if(t.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const K=ct.getPrimaries(ct.workingColorSpace),de=x.colorSpace===ii?null:ct.getPrimaries(x.colorSpace),Te=x.colorSpace===ii||K===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let j=M(x.image,!1,i.maxTextureSize);j=Be(x,j);const me=r.convert(x.format,x.colorSpace),C=r.convert(x.type);let te=A(x.internalFormat,me,C,x.normalized,x.colorSpace,x.isVideoTexture);ot(oe,x);let y;const P=x.mipmaps,F=x.isVideoTexture!==!0,O=_e.__version===void 0||ne===!0,X=ue.dataReady,re=E(x,j);if(x.isDepthTexture)te=g(x.format===oi,x.type),O&&(F?t.texStorage2D(s.TEXTURE_2D,1,te,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,te,j.width,j.height,0,me,C,null));else if(x.isDataTexture)if(P.length>0){F&&O&&t.texStorage2D(s.TEXTURE_2D,re,te,P[0].width,P[0].height);for(let K=0,de=P.length;K<de;K++)y=P[K],F?X&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,y.width,y.height,me,C,y.data):t.texImage2D(s.TEXTURE_2D,K,te,y.width,y.height,0,me,C,y.data);x.generateMipmaps=!1}else F?(O&&t.texStorage2D(s.TEXTURE_2D,re,te,j.width,j.height),X&&Ct(x,j,me,C)):t.texImage2D(s.TEXTURE_2D,0,te,j.width,j.height,0,me,C,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&O&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,te,P[0].width,P[0].height,j.depth);for(let K=0,de=P.length;K<de;K++)if(y=P[K],x.format!==Un)if(me!==null)if(F){if(X)if(x.layerUpdates.size>0){const Te=gl(y.width,y.height,x.format,x.type);for(const le of x.layerUpdates){const Ke=y.data.subarray(le*Te/y.data.BYTES_PER_ELEMENT,(le+1)*Te/y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,le,y.width,y.height,1,me,Ke)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,y.width,y.height,j.depth,me,y.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,te,y.width,y.height,j.depth,0,y.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,y.width,y.height,j.depth,me,C,y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,te,y.width,y.height,j.depth,0,me,C,y.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{F&&O&&t.texStorage2D(s.TEXTURE_2D,re,te,P[0].width,P[0].height);for(let K=0,de=P.length;K<de;K++)y=P[K],x.format!==Un?me!==null?F?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,y.width,y.height,me,y.data):t.compressedTexImage2D(s.TEXTURE_2D,K,te,y.width,y.height,0,y.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?X&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,y.width,y.height,me,C,y.data):t.texImage2D(s.TEXTURE_2D,K,te,y.width,y.height,0,me,C,y.data)}else if(x.isDataArrayTexture)if(F){if(O&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,te,j.width,j.height,j.depth),X)if(x.layerUpdates.size>0){const K=gl(j.width,j.height,x.format,x.type);for(const de of x.layerUpdates){const Te=j.data.subarray(de*K/j.data.BYTES_PER_ELEMENT,(de+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,j.width,j.height,1,me,C,Te)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,me,C,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,te,j.width,j.height,j.depth,0,me,C,j.data);else if(x.isData3DTexture)F?(O&&t.texStorage3D(s.TEXTURE_3D,re,te,j.width,j.height,j.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,me,C,j.data)):t.texImage3D(s.TEXTURE_3D,0,te,j.width,j.height,j.depth,0,me,C,j.data);else if(x.isFramebufferTexture){if(O)if(F)t.texStorage2D(s.TEXTURE_2D,re,te,j.width,j.height);else{let K=j.width,de=j.height;for(let Te=0;Te<re;Te++)t.texImage2D(s.TEXTURE_2D,Te,te,K,de,0,me,C,null),K>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const K=s.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),f.add(x),K.onpaint=de=>{const Te=de.changedElements;for(const le of f)Te.includes(le.image)&&(le.needsUpdate=!0)},K.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{const Te=s.RGBA,le=s.RGBA,Ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Te,le,Ke,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(P.length>0){if(F&&O){const K=We(P[0]);t.texStorage2D(s.TEXTURE_2D,re,te,K.width,K.height)}for(let K=0,de=P.length;K<de;K++)y=P[K],F?X&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,me,C,y):t.texImage2D(s.TEXTURE_2D,K,te,me,C,y);x.generateMipmaps=!1}else if(F){if(O){const K=We(j);t.texStorage2D(s.TEXTURE_2D,re,te,K.width,K.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,C,j)}else t.texImage2D(s.TEXTURE_2D,0,te,me,C,j);R(x)&&x.mipmapsAutoUpdate===!0&&T(oe),_e.__version=ue.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function be(w,x,G){if(x.image.length!==6)return;const oe=at(w,x),ne=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+G);const ue=n.get(ne);if(ne.version!==ue.__version||oe===!0){t.activeTexture(s.TEXTURE0+G);const _e=ct.getPrimaries(ct.workingColorSpace),J=x.colorSpace===ii?null:ct.getPrimaries(x.colorSpace),j=x.colorSpace===ii||_e===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,te=[];for(let le=0;le<6;le++)!me&&!C?te[le]=M(x.image[le],!0,i.maxCubemapSize):te[le]=C?x.image[le].image:x.image[le],te[le]=Be(x,te[le]);const y=te[0],P=r.convert(x.format,x.colorSpace),F=r.convert(x.type);let O=A(x.internalFormat,P,F,x.normalized,x.colorSpace);const X=x.isVideoTexture!==!0,re=ue.__version===void 0||oe===!0,K=ne.dataReady;let de=E(x,y);ot(s.TEXTURE_CUBE_MAP,x);let Te;if(x.isDepthTexture){if(O=g(x.format===oi,x.type),re)if(X)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,O,y.width,y.height);else for(let le=0;le<6;le++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,O,y.width,y.height,0,P,F,null)}else if(me){X&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,O,y.width,y.height);for(let le=0;le<6;le++){Te=te[le].mipmaps;for(let Ke=0;Ke<Te.length;Ke++){const ht=Te[Ke];x.format!==Un?P!==null?X?K&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ke,0,0,ht.width,ht.height,P,ht.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ke,O,ht.width,ht.height,0,ht.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ke,0,0,ht.width,ht.height,P,F,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ke,O,ht.width,ht.height,0,P,F,ht.data)}}}else{if(Te=x.mipmaps,X&&re){Te.length>0&&de++;const le=We(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,O,le.width,le.height)}for(let le=0;le<6;le++)if(C){X?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,te[le].width,te[le].height,P,F,te[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,O,te[le].width,te[le].height,0,P,F,te[le].data);for(let Ke=0;Ke<Te.length;Ke++){const St=Te[Ke].image[le].image;X?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ke+1,0,0,St.width,St.height,P,F,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ke+1,O,St.width,St.height,0,P,F,St.data)}}else{X?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,P,F,te[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,O,P,F,te[le]);for(let Ke=0;Ke<Te.length;Ke++){const ht=Te[Ke];X?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ke+1,0,0,P,F,ht.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ke+1,O,P,F,ht.image[le])}}}R(x)&&x.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),ue.__version=ne.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ke(w,x,G,oe,ne,ue){const _e=r.convert(G.format,G.colorSpace),J=r.convert(G.type),j=A(G.internalFormat,_e,J,G.normalized,G.colorSpace),me=n.get(x),C=n.get(G);if(C.__renderTarget=x,!me.__hasExternalTextures){const te=Math.max(1,x.width>>ue),y=Math.max(1,x.height>>ue);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,ue,j,te,y,x.depth,0,_e,J,null):t.texImage2D(ne,ue,j,te,y,0,_e,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ve(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ne,C.__webglTexture,0,vt(x)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ne,C.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(w,x,G){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){const oe=x.depthTexture,ne=oe&&oe.isDepthTexture?oe.type:null,ue=g(x.stencilBuffer,ne),_e=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ve(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt(x),ue,x.width,x.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt(x),ue,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ue,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,w)}else{const oe=x.textures;for(let ne=0;ne<oe.length;ne++){const ue=oe[ne],_e=r.convert(ue.format,ue.colorSpace),J=r.convert(ue.type),j=A(ue.internalFormat,_e,J,ue.normalized,ue.colorSpace);ve(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt(x),j,x.width,x.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt(x),j,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,j,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(w,x,G){const oe=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=n.get(x.depthTexture);ne.__renderTarget=x;const ue=oe?x.depthTexture.image[0]:x.depthTexture.image;(!ne.__webglTexture||ue.width!==x.width||ue.height!==x.height)&&(ue.width=x.width,ue.height=x.height,x.depthTexture.needsUpdate=!0),oe?Se(x.depthTexture,0):he(x.depthTexture,0);const _e=ne.__webglTexture,J=vt(x),j=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,me=x.depthTexture.format===oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===ci)ve(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,j,_e,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,me,j,_e,0);else if(x.depthTexture.format===oi)ve(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,j,_e,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,me,j,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(w){const x=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const oe=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),oe){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,oe.removeEventListener("dispose",ne)};oe.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=oe}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(G)for(let oe=0;oe<6;oe++)Qe(x.__webglFramebuffer[oe],w,oe);else w.texture.mipmaps.length>0?Qe(x.__webglFramebuffer[0],w,0):Qe(x.__webglFramebuffer,w,0);else if(G){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]===void 0)x.__webglDepthbuffer[oe]=s.createRenderbuffer(),nt(x.__webglDepthbuffer[oe],w,!1);else{const ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=x.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,ue)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),nt(x.__webglDepthbuffer,w,!1);else{const ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(w,x,G){const oe=n.get(w);x!==void 0&&ke(oe.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&st(w)}function Dt(w){const x=w.texture,G=n.get(w),oe=n.get(x);w.addEventListener("dispose",k),B(w);const ne=w.textures,ue=w.isWebGLCubeRenderTarget===!0,_e=ne.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=x.version,a.memory.textures++),ue){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let j=0;j<x.mipmaps.length;j++)G.__webglFramebuffer[J][j]=s.createFramebuffer()}else G.__webglFramebuffer[J]=s.createFramebuffer()}else{if(x.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)G.__webglFramebuffer[J]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(_e)for(let J=0,j=ne.length;J<j;J++){const me=n.get(ne[J]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&ve(w)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<ne.length;J++){const j=ne[J];G.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[J]);const me=r.convert(j.format,j.colorSpace),C=r.convert(j.type),te=A(j.internalFormat,me,C,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),y=vt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,y,te,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,G.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),ot(s.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)ke(G.__webglFramebuffer[J][j],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else ke(G.__webglFramebuffer[J],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);R(x)?T(s.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let J=0,j=ne.length;J<j;J++){const me=ne[J],C=n.get(me);let te=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(te=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,C.__webglTexture),ot(te,me),ke(G.__webglFramebuffer,w,me,s.COLOR_ATTACHMENT0+J,te,0),R(me)&&T(te)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,oe.__webglTexture),ot(J,x),x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)ke(G.__webglFramebuffer[j],w,x,s.COLOR_ATTACHMENT0,J,j);else ke(G.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,J,0);R(x)?T(J):x.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&st(w)}function N(w){const x=w.textures;for(let G=0,oe=x.length;G<oe;G++){const ne=x[G];if(R(ne)&&ne.mipmapsAutoUpdate===!0){const ue=b(w),_e=n.get(ne).__webglTexture;t.bindTexture(ue,_e),T(ue),t.unbindTexture()}}}const gt=[];function _t(w){if(w.samples>0){if(ve(w)===!1){const x=w.textures,G=w.width,oe=w.height;let ne=s.COLOR_BUFFER_BIT;const ue=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(w),J=x.length>1;if(J)for(let me=0;me<x.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<x.length;me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);const C=n.get(x[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,G,oe,0,0,G,oe,ne,s.NEAREST),c===!0&&(gt.length=0,gt.push(s.COLOR_ATTACHMENT0+me),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&gt.push(ue),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<x.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);const C=n.get(x[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,C,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function vt(w){return Math.min(i.maxSamples,w.samples)}function ve(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Be(w,x){const G=w.colorSpace,oe=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Ar&&G!==ii&&(ct.getTransfer(G)===Et?(oe!==Un||ne!==dn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",G)),x}function We(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Xe,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=Pe,this.setTexture2D=he,this.setTexture2DArray=Ae,this.setTexture3D=Ne,this.setTextureCube=Se,this.rebindTextures=kt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=ve,this.dispose=q}function l0(s,e){function t(n,i=ii){let r;const a=ct.getTransfer(i);if(n===dn)return s.UNSIGNED_BYTE;if(n===go)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===uc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===lc)return s.BYTE;if(n===cc)return s.SHORT;if(n===Is)return s.UNSIGNED_SHORT;if(n===mo)return s.INT;if(n===Fn)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===On)return s.HALF_FLOAT;if(n===dc)return s.ALPHA;if(n===fc)return s.RGB;if(n===Un)return s.RGBA;if(n===ci)return s.DEPTH_COMPONENT;if(n===oi)return s.DEPTH_STENCIL;if(n===xo)return s.RED;if(n===vo)return s.RED_INTEGER;if(n===Si)return s.RG;if(n===Mo)return s.RG_INTEGER;if(n===So)return s.RGBA_INTEGER;if(n===vr||n===Mr||n===Sr||n===yr)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Ia||n===Da||n===Na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===wr||n===ka)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Fa)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ba)return r.COMPRESSED_R11_EAC;if(n===za)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wr)return r.COMPRESSED_RG11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===Za||n===Ja||n===Qa||n===ja||n===eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===no||n===io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===to)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===so||n===ro||n===Tr||n===ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h0=`
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

}`;class u0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hi({vertexShader:c0,fragmentShader:h0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new It(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d0 extends yi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new u0,d={},M=t.getContextAttributes();let R=null,T=null;const b=[],A=[],g=new $e;let E=null,B=null;const D=new un;D.viewport=new Nt;const z=new un;z.viewport=new Nt;const k=[D,z],$=new Eu;let I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=b[Q];return he===void 0&&(he=new Kr,b[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=b[Q];return he===void 0&&(he=new Kr,b[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=b[Q];return he===void 0&&(he=new Kr,b[Q]=he),he.getHandSpace()};function ee(Q){const he=A.indexOf(Q.inputSource);if(he===-1)return;const Ae=b[he];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,l||a),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){i.removeEventListener("select",ee),i.removeEventListener("selectstart",ee),i.removeEventListener("selectend",ee),i.removeEventListener("squeeze",ee),i.removeEventListener("squeezestart",ee),i.removeEventListener("squeezeend",ee),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<b.length;Q++){const he=A[Q];he!==null&&(A[Q]=null,b[Q].disconnect(he))}I=null,q=null,m.reset();for(const Q in d)delete d[Q];if(e.setRenderTarget(R),p=null,u=null,f=null,i=null,T=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(g.width,g.height,!1),B!==null){const Q=B.camera;Q.fov=B.fov,Q.zoom=B.zoom,Q.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(R=e.getRenderTarget(),i.addEventListener("select",ee),i.addEventListener("selectstart",ee),i.addEventListener("selectend",ee),i.addEventListener("squeeze",ee),i.addEventListener("squeezestart",ee),i.addEventListener("squeezeend",ee),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ce),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ne=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=M.stencil?oi:ci,Ne=M.stencil?ns:Fn);const He={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(He),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new Cn(u.textureWidth,u.textureHeight,{format:Un,type:dn,depthTexture:new is(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Ae),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Cn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(Q){for(let he=0;he<Q.removed.length;he++){const Ae=Q.removed[he],Ne=A.indexOf(Ae);Ne>=0&&(A[Ne]=null,b[Ne].disconnect(Ae))}for(let he=0;he<Q.added.length;he++){const Ae=Q.added[he];let Ne=A.indexOf(Ae);if(Ne===-1){for(let He=0;He<b.length;He++)if(He>=A.length){A.push(Ae),Ne=He;break}else if(A[He]===null){A[He]=Ae,Ne=He;break}if(Ne===-1)break}const Se=b[Ne];Se&&Se.connect(Ae)}}function Z(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let he=Q.near,Ae=Q.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),$.near=z.near=D.near=he,$.far=z.far=D.far=Ae,(I!==$.near||q!==$.far)&&(i.updateRenderState({depthNear:$.near,depthFar:$.far}),I=$.near,q=$.far),$.layers.mask=Q.layers.mask|6,D.layers.mask=$.layers.mask&-5,z.layers.mask=$.layers.mask&-3;const Ne=Q.parent,Se=$.cameras;Z($,Ne);for(let He=0;He<Se.length;He++)Z(Se[He],Ne);$.projectionMatrix.copy(D.projectionMatrix),$.projectionMatrixInverse.copy(D.projectionMatrixInverse),B===null&&Q.isPerspectiveCamera&&(B={camera:Q,fov:Q.fov,zoom:Q.zoom}),ie(Q,$,Ne)};function ie(Q,he,Ae){Ae===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=oo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Q){c=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(Q){return d[Q]};let ae=null;function Pe(Q,he){if(h=he.getViewerPose(l||a),_=he,h!==null){const Ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Ne=!1;Ae.length!==$.cameras.length&&($.cameras.length=0,Ne=!0);for(let ze=0;ze<Ae.length;ze++){const ot=Ae[ze];let at=null;if(p!==null)at=p.getViewport(ot);else{const Ct=f.getViewSubImage(u,ot);at=Ct.viewport,ze===0&&(e.setRenderTargetTextures(T,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(T))}let Ve=k[ze];Ve===void 0&&(Ve=new un,Ve.layers.enable(ze),Ve.viewport=new Nt,k[ze]=Ve),Ve.matrix.fromArray(ot.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ot.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(at.x,at.y,at.width,at.height),ze===0&&($.matrix.copy(Ve.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ne===!0&&$.cameras.push(Ve)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const ze=f.getDepthInformation(Ae[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,i.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let ze=0;ze<Ae.length;ze++){const ot=Ae[ze].camera;if(ot){let at=d[ot];at||(at=new Nc,d[ot]=at);const Ve=f.getCameraImage(ot);at.sourceTexture=Ve}}}}for(let Ae=0;Ae<b.length;Ae++){const Ne=A[Ae],Se=b[Ae];Ne!==null&&Se!==void 0&&Se.update(Ne,he,l||a)}ae&&ae(Q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),_=null}const Xe=new kc;Xe.setAnimationLoop(Pe),this.setAnimationLoop=function(Q){ae=Q},this.dispose=function(){}}}const f0=new bt,Zc=new Ze;Zc.set(-1,0,0,0,1,0,0,0,1);function p0(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Uc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,R,T){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,M,R):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===an&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===an&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),R=M.envMap,T=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zc),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,R){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=R*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function m0(s,e,t,n){let i={},r={};function a(M,R){const T=R.program;n.uniformBlockBinding(M,T,i[M.id])}function o(M,R){let T=i[M.id];T===void 0&&(_(M),T=c(M),i[M.id]=T,M.addEventListener("dispose",m));const b=R.program;n.updateUBOMapping(M,b);const A=e.render.frame;r[M.id]!==A&&(l(M),r[M.id]=A)}function c(M){const R=s.createBuffer(),T=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),R}function l(M){const R=i[M.id],T=M.uniforms,b=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let A=0,g=T.length;A<g;A++){const E=T[A];if(Array.isArray(E))for(let B=0,D=E.length;B<D;B++)h(E[B],A,B,b);else h(E,A,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,R,T,b){if(u(M,R,T,b)===!0){const A=M.__offset,g=M.value;if(Array.isArray(g)){let E=0;for(let B=0;B<g.length;B++){const D=g[B],z=S(D,!0);f(D,M.__data,E),E+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,M.__data)}}function f(M,R,T){typeof M=="number"||typeof M=="boolean"?R[T]=M:M.isMatrix3?(R[T]=M.elements[0],R[T+1]=M.elements[1],R[T+2]=M.elements[2],R[T+3]=0,R[T+4]=M.elements[3],R[T+5]=M.elements[4],R[T+6]=M.elements[5],R[T+7]=0,R[T+8]=M.elements[6],R[T+9]=M.elements[7],R[T+10]=M.elements[8],R[T+11]=0):ArrayBuffer.isView(M)?R.set(M.subarray(0,R.length-T),T):M.toArray(R,T)}function u(M,R,T,b){const A=M.value,g=R+"_"+T;if(Array.isArray(A)){b[g]===void 0&&(b[g]=[]);const E=b[g];let B=!1;for(let D=0;D<A.length;D++)p(A[D],E,D)===!0&&(B=!0);return B}return p(A,b,g)}function p(M,R,T){if(R[T]===void 0)return typeof M=="number"||typeof M=="boolean"?R[T]=M:ArrayBuffer.isView(M)?R[T]=M.slice():R[T]=M.clone(),!0;{const b=R[T];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return R[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(b.equals(M)===!1)return b.copy(M),!0}}return!1}function _(M){const R=M.uniforms;let T=0;const b=16;for(let g=0,E=R.length;g<E;g++){const B=Array.isArray(R[g])?R[g]:[R[g]];for(let D=0,z=B.length;D<z;D++){const k=B[D],$=Array.isArray(k.value)?k.value:[k.value],I=Array.isArray(R[g])||Array.isArray(k.value);let q=T;for(let W=0,ce=$.length;W<ce;W++){const Z=$[W],ie=S(Z,I),ae=T%b,Pe=ae%ie.boundary,Xe=ae+Pe;T+=Pe,Xe!==0&&b-Xe<ie.storage&&(T+=b-Xe),W===0&&(q=T),T+=ie.storage}const ee=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new ee((T-q)/Float32Array.BYTES_PER_ELEMENT),k.__offset=q}}const A=T%b;return A>0&&(T+=b-A),M.__size=T,M.__cache={},this}function S(M,R){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=16,T.storage=48):M.isMatrix4?(T.boundary=16,T.storage=64):M.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",M),R===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function m(M){const R=M.target;R.removeEventListener("dispose",m),s.deleteBuffer(i[R.id]),delete i[R.id],delete r[R.id]}function d(){for(const M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:a,update:o,dispose:d}}const g0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function _0(){return In===null&&(In=new Cc(g0,16,16,Si,On),In.name="DFG_LUT",In.minFilter=Ut,In.magFilter=Ut,In.wrapS=bn,In.wrapT=bn,In.generateMipmaps=!1,In.needsUpdate=!0),In}class x0{constructor(e={}){const{canvas:t=Nh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=dn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=p,m=new Set([So,Mo,vo]),d=new Set([dn,Fn,Is,ns,go,_o]),M=new Uint32Array(4),R=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let b=null,A=null;const g=[],E=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let z=!1,k=null,$=null,I=null,q=null;this._outputColorSpace=Xt;let ee=0,W=0,ce=null,Z=-1,ie=null;const ae=new Nt,Pe=new Nt;let Xe=null;const Q=new Je(0);let he=0,Ae=t.width,Ne=t.height,Se=1,He=null,Rt=null;const ze=new Nt(0,0,Ae,Ne),ot=new Nt(0,0,Ae,Ne);let at=!1;const Ve=new Ns,Ct=new wo;let Pt=!1,be=!1;const ke=new bt,nt=new U,Qe=new Nt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Dt(){return ce===null?Se:1}let N=n;function gt(v,L){return t.getContext(v,L)}let _t,vt,ve,Mt,Be,We,w,x,G,oe,ne,ue,_e,J,j,me,C,te,y,P,F,O,X;try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uo}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",le,!1),N===null){const L="webgl2";if(N=gt(L,v),N===null)throw gt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(v){throw t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",le,!1),mt("WebGLRenderer: "+v.message),v}function re(){_t=new Sp(N),_t.init(),F=new l0(N,_t),vt=new hp(N,_t,e,F),ve=new a0(N,_t),vt.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),$=N.createFramebuffer(),I=N.createFramebuffer(),q=N.createFramebuffer(),Mt=new wp(N),Be=new qm,We=new o0(N,_t,ve,Be,vt,F,Mt),w=new Mp(D),x=new Tu(N),O=new lp(N,x),G=new yp(N,x,Mt,O),oe=new bp(N,G,x,O,Mt),te=new Tp(N,vt,We),j=new up(Be),ne=new Xm(D,w,_t,vt,O,j),ue=new p0(D,Be),_e=new $m,J=new e0(_t),C=new op(D,w,ve,oe,_,c),me=new r0(D,oe,vt),X=new m0(N,Mt,vt,ve),y=new cp(N,_t,Mt),P=new Ep(N,_t,Mt),Mt.programs=ne.programs,D.capabilities=vt,D.extensions=_t,D.properties=Be,D.renderLists=_e,D.shadowMap=me,D.state=ve,D.info=Mt}S!==dn&&(B=new Rp(S,t.width,t.height,o,i,r));const K=new d0(D,N);this.xr=K,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const v=_t.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=_t.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(v){v!==void 0&&(Se=v,this.setSize(Ae,Ne,!1))},this.getSize=function(v){return v.set(Ae,Ne)},this.setSize=function(v,L,Y=!0){if(K.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=v,Ne=L,t.width=Math.floor(v*Se),t.height=Math.floor(L*Se),Y===!0&&(t.style.width=v+"px",t.style.height=L+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Ae*Se,Ne*Se).floor()},this.setDrawingBufferSize=function(v,L,Y){Ae=v,Ne=L,Se=Y,t.width=Math.floor(v*Y),t.height=Math.floor(L*Y),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(S===dn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ae)},this.getViewport=function(v){return v.copy(ze)},this.setViewport=function(v,L,Y,H){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,L,Y,H),ve.viewport(ae.copy(ze).multiplyScalar(Dt()).round())},this.getScissor=function(v){return v.copy(ot)},this.setScissor=function(v,L,Y,H){v.isVector4?ot.set(v.x,v.y,v.z,v.w):ot.set(v,L,Y,H),ve.scissor(Pe.copy(ot).multiplyScalar(Dt()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(v){ve.setScissorTest(at=v)},this.setOpaqueSort=function(v){He=v},this.setTransparentSort=function(v){Rt=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,Y=!0){let H=0;if(v){let V=!1;if(ce!==null){const ge=ce.texture.format;V=m.has(ge)}if(V){const ge=ce.texture.type,Re=d.has(ge),pe=C.getClearColor(),ye=C.getClearAlpha(),Ie=pe.r,Ue=pe.g,je=pe.b;Re?(M[0]=Ie,M[1]=Ue,M[2]=je,M[3]=ye,N.clearBufferuiv(N.COLOR,0,M)):(R[0]=Ie,R[1]=Ue,R[2]=je,R[3]=ye,N.clearBufferiv(N.COLOR,0,R))}else H|=N.COLOR_BUFFER_BIT}L&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),k=v},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",le,!1),C.dispose(),_e.dispose(),J.dispose(),We.dispose(),Be.dispose(),w.dispose(),oe.dispose(),G.dispose(),O.dispose(),X.dispose(),ne.dispose(),K.dispose(),K.removeEventListener("sessionstart",ls),K.removeEventListener("sessionend",zn),Mn.stop()};function de(v){v.preventDefault(),Pr("WebGLRenderer: Context Lost."),z=!0}function Te(){Pr("WebGLRenderer: Context Restored."),z=!1;const v=Mt.autoReset,L=me.enabled,Y=me.autoUpdate,H=me.needsUpdate,V=me.type;re(),Mt.autoReset=v,me.enabled=L,me.autoUpdate=Y,me.needsUpdate=H,me.type=V}function le(v){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ke(v){const L=v.target;L.removeEventListener("dispose",Ke),ht(L)}function ht(v){St(v),Be.remove(v)}function St(v){const L=Be.get(v).programs;L!==void 0&&(L.forEach(function(Y){ne.releaseProgram(Y)}),v.isShaderMaterial&&ne.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,Y,H,V,ge){L===null&&(L=st);const Re=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=Gs(v,L,Y,H,V);ve.setMaterial(H,Re);let ye=Y.index,Ie=1;if(H.wireframe===!0){if(ye=G.getWireframeAttribute(Y),ye===void 0)return;Ie=2}const Ue=Y.drawRange,je=Y.attributes.position;let Le=Ue.start*Ie,et=(Ue.start+Ue.count)*Ie;ge!==null&&(Le=Math.max(Le,ge.start*Ie),et=Math.min(et,(ge.start+ge.count)*Ie)),ye!==null?(Le=Math.max(Le,0),et=Math.min(et,ye.count)):je!=null&&(Le=Math.max(Le,0),et=Math.min(et,je.count));const Lt=et-Le;if(Lt<0||Lt===1/0)return;O.setup(V,H,pe,Y,ye);let ut,xt=y;if(ye!==null&&(ut=x.get(ye),xt=P,xt.setIndex(ut)),V.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*Dt()),xt.setMode(N.LINES)):xt.setMode(N.TRIANGLES);else if(V.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),ve.setLineWidth(Ot*Dt()),V.isLineSegments?xt.setMode(N.LINES):V.isLineLoop?xt.setMode(N.LINE_LOOP):xt.setMode(N.LINE_STRIP)}else V.isPoints?xt.setMode(N.POINTS):V.isSprite&&xt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))xt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ot=V._multiDrawStarts,Ce=V._multiDrawCounts,Gt=V._multiDrawCount,ft=ye?x.get(ye).bytesPerElement:1,Pn=Be.get(H).currentProgram.getUniforms();for(let Zt=0;Zt<Gt;Zt++)Pn.setValue(N,"_gl_DrawID",Zt),xt.render(Ot[Zt]/ft,Ce[Zt])}else if(V.isInstancedMesh)xt.renderInstances(Le,Lt,V.count);else if(Y.isInstancedBufferGeometry){const Ot=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,Ot);xt.renderInstances(Le,Lt,Ce)}else xt.render(Le,Lt)};function At(v,L,Y,H){k!==null&&v.isNodeMaterial&&k.setObject(H,v),Pt===!0&&j.setState(v,Y,!1),v.transparent===!0&&v.side===xn&&v.forceSinglePass===!1?(v.side=an,v.needsUpdate=!0,$n(v,L,H),v.side=Mi,v.needsUpdate=!0,$n(v,L,H),v.side=xn):$n(v,L,H)}this.compile=function(v,L,Y=null){Y===null&&(Y=v),k!==null&&k.renderStart(v,L,Y),A=J.get(Y),A.init(L),E.push(A),Y.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),v!==Y&&v.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),be=this.localClippingEnabled,Pt=j.init(this.clippingPlanes,be),Pt===!0&&j.setGlobalState(this.clippingPlanes,L),k!==null&&me.render(A.state.shadowsArray,Y,L);const H=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){const pe=ge[Re];At(pe,Y,L,V),H.add(pe)}else At(ge,Y,L,V),H.add(ge)}),A=E.pop(),k!==null&&k.renderEnd(),H},this.compileAsync=function(v,L,Y=null){const H=this.compile(v,L,Y);return new Promise(V=>{function ge(){if(H.forEach(function(Re){const ye=Be.get(Re).currentProgram;(ye===void 0||ye.isReady())&&H.delete(Re)}),H.size===0){V(v);return}setTimeout(ge,10)}_t.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let on=null;function pn(v){on&&on(v)}function ls(){Mn.stop()}function zn(){Mn.start()}const Mn=new kc;Mn.setAnimationLoop(pn),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(v){on=v,K.setAnimationLoop(v),v===null?Mn.stop():Mn.start()},K.addEventListener("sessionstart",ls),K.addEventListener("sessionend",zn),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;k!==null&&k.renderStart(v,L);const Y=K.enabled===!0&&K.isPresenting===!0,H=B!==null&&(ce===null||Y)&&B.begin(D,ce);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(L),L=K.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,L,ce),A=J.get(v,E.length),A.init(L),A.state.textureUnits=We.getTextureUnits(),E.push(A),ke.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Ct.setFromArrayCamera(L):Ve.setFromProjectionMatrix(ke,Rn,L.reversedDepth),be=this.localClippingEnabled,Pt=j.init(this.clippingPlanes,be),b=_e.get(v,g.length),b.init(),g.push(b),this.info.render.frame++,K.enabled===!0&&K.isPresenting===!0){const Re=D.xr.getDepthSensingMesh();Re!==null&&cs(Re,L,-1/0,D.sortObjects)}cs(v,L,0,D.sortObjects),b.finish(),k!==null&&k.updateLights(A.state.lightsArray),D.sortObjects===!0&&b.sort(He,Rt),kt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,kt&&C.addToRenderList(b,v),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&j.beginShadows();const V=A.state.shadowsArray;if(me.render(V,v,L),Pt===!0&&j.endShadows(),(H&&B.hasRenderPass())===!1){const Re=b.opaque,pe=b.transmissive;if(A.setupLights(),L.isArrayCamera){const ye=L.cameras;if(pe.length>0)for(let Ie=0,Ue=ye.length;Ie<Ue;Ie++){const je=ye[Ie];ks(Re,pe,v,je)}kt&&C.render(v);for(let Ie=0,Ue=ye.length;Ie<Ue;Ie++){const je=ye[Ie];zs(b,v,je,je.viewport)}}else pe.length>0&&ks(Re,pe,v,L),kt&&C.render(v),zs(b,v,L)}ce!==null&&W===0&&(We.updateMultisampleRenderTarget(ce),We.updateRenderTargetMipmap(ce)),H&&B.end(D),v.isScene===!0&&v.onAfterRender(D,v,L),O.resetDefaultState(),Z=-1,ie=null,E.pop(),E.length>0?(A=E[E.length-1],We.setTextureUnits(A.state.textureUnits),Pt===!0&&j.setGlobalState(D.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?b=g[g.length-1]:b=null,k!==null&&k.renderEnd()};function cs(v,L,Y,H){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){const Re=L.isArrayCamera?Ct:Ve;if(!v.frustumCulled||v.intersectsFrustum(Re)){H&&Qe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ke);const pe=oe.update(v),ye=v.material;ye.visible&&b.push(v,pe,ye,Y,Qe.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){const Re=L.isArrayCamera?Ct:Ve;if(!v.frustumCulled||v.intersectsFrustum(Re)){const pe=oe.update(v),ye=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Qe.copy(v.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Qe.copy(pe.boundingSphere.center)),Qe.applyMatrix4(v.matrixWorld).applyMatrix4(ke)),Array.isArray(ye)){const Ie=pe.groups;for(let Ue=0,je=Ie.length;Ue<je;Ue++){const Le=Ie[Ue],et=ye[Le.materialIndex];et&&et.visible&&b.push(v,pe,et,Y,Qe.z,Le,L)}}else ye.visible&&b.push(v,pe,ye,Y,Qe.z,null,L)}}}const ge=v.children;for(let Re=0,pe=ge.length;Re<pe;Re++)cs(ge[Re],L,Y,H)}function zs(v,L,Y,H){const{opaque:V,transmissive:ge,transparent:Re}=v;A.setupLightsView(Y),Pt===!0&&j.setGlobalState(D.clippingPlanes,Y),H&&ve.viewport(ae.copy(H)),V.length>0&&Sn(V,L,Y),ge.length>0&&Sn(ge,L,Y),Re.length>0&&Sn(Re,L,Y),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function ks(v,L,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Le=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Cn(1,1,{generateMipmaps:!0,type:Le?On:dn,minFilter:ai,samples:Math.max(4,vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const ge=A.state.transmissionRenderTarget[H.id],Re=H.viewport||ae;ge.setSize(Re.z*D.transmissionResolutionScale,Re.w*D.transmissionResolutionScale);const pe=D.getRenderTarget(),ye=D.getActiveCubeFace(),Ie=D.getActiveMipmapLevel();D.setRenderTarget(ge),D.getClearColor(Q),he=D.getClearAlpha(),he<1&&D.setClearColor(16777215,.5),D.clear(),kt&&C.render(Y);const Ue=D.toneMapping;D.toneMapping=qn;const je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),Pt===!0&&j.setGlobalState(D.clippingPlanes,H),Sn(v,Y,H),We.updateMultisampleRenderTarget(ge),We.updateRenderTargetMipmap(ge),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let et=0,Lt=L.length;et<Lt;et++){const ut=L[et],{object:xt,geometry:Ot,material:Ce,group:Gt}=ut;if(Ce.side===xn&&xt.layers.test(H.layers)){const ft=Ce.side;Ce.side=an,Ce.needsUpdate=!0,yn(xt,Y,H,Ot,Ce,Gt),Ce.side=ft,Ce.needsUpdate=!0,Le=!0}}Le===!0&&(We.updateMultisampleRenderTarget(ge),We.updateRenderTargetMipmap(ge))}D.setRenderTarget(pe,ye,Ie),D.setClearColor(Q,he),je!==void 0&&(H.viewport=je),D.toneMapping=Ue}function Sn(v,L,Y){const H=L.isScene===!0?L.overrideMaterial:null;for(let V=0,ge=v.length;V<ge;V++){const Re=v[V],{object:pe,geometry:ye,group:Ie}=Re;let Ue=Re.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),pe.layers.test(Y.layers)&&yn(pe,L,Y,ye,Ue,Ie)}}function yn(v,L,Y,H,V,ge){k!==null&&V.isNodeMaterial&&k.setObject(v,V),v.onBeforeRender(D,L,Y,H,V,ge),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(D,L,Y,H,v,ge),V.transparent===!0&&V.side===xn&&V.forceSinglePass===!1?(V.side=an,V.needsUpdate=!0,D.renderBufferDirect(Y,L,H,V,v,ge),V.side=Mi,V.needsUpdate=!0,D.renderBufferDirect(Y,L,H,V,v,ge),V.side=xn):D.renderBufferDirect(Y,L,H,V,v,ge),v.onAfterRender(D,L,Y,H,V,ge)}function hs(v){let L=0;for(const Y of v)Y.texture!==null&&L++;return L}function $n(v,L,Y){L.isScene!==!0&&(L=st);const H=Be.get(v),V=A.state.lights,ge=A.state.shadowsArray,Re=V.state.version,pe=ne.getParameters(v,V.state,ge,L,Y,A.state.lightProbeGridArray),ye=ne.getProgramCacheKey(pe);let Ie=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,H.fog=L.fog;const Ue=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=w.get(v.envMap||H.environment,Ue),H.envMapRotation=H.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",Ke),Ie=new Map,H.programs=Ie,H.programVariants=new Map);let je=Ie.get(ye);if(je!==void 0){if(H.currentProgram===je&&H.lightsStateVersion===Re)return mn(v,pe),je}else pe.uniforms=ne.getUniforms(v),k!==null&&v.isNodeMaterial&&k.build(v,Y,pe),v.onBeforeCompile(pe,D),je=ne.acquireProgram(pe,ye),Ie.set(ye,je),H.uniforms=pe.uniforms;const Le=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Le.clippingPlanes=j.uniform),mn(v,pe),H.needsLights=No(v),H.lightsStateVersion=Re,H.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.sunLights.value=V.state.sun,Le.sunLightShadows.value=V.state.sunShadow,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.sunShadowMatrix.value=V.state.sunShadowMatrix,Le.sunShadowCascade.value=V.state.sunShadowCascade,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=hs(A.state.lightProbeGridArray),H.currentProgram=je,H.uniformsList=null,je}function Do(v,L,Y,H,V){const ge=Be.get(v),Re=ge.currentProgram.id+","+H+","+V;let pe=ge.programVariants.get(Re);return pe===void 0?(pe=$n(v,L,Y),ge.programVariants.set(Re,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=H,ge.toneMapping=V),pe}function Or(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Er.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function mn(v,L){const Y=Be.get(v);Y.outputColorSpace=L.outputColorSpace,Y.batching=L.batching,Y.batchingColor=L.batchingColor,Y.instancing=L.instancing,Y.instancingColor=L.instancingColor,Y.instancingMorph=L.instancingMorph,Y.skinning=L.skinning,Y.morphTargets=L.morphTargets,Y.morphNormals=L.morphNormals,Y.morphColors=L.morphColors,Y.morphTargetsCount=L.morphTargetsCount,Y.numClippingPlanes=L.numClippingPlanes,Y.numIntersection=L.numClipIntersection,Y.vertexAlphas=L.vertexAlphas,Y.vertexTangents=L.vertexTangents,Y.toneMapping=L.toneMapping}function Gs(v,L,Y,H,V){L.isScene!==!0&&(L=st),We.resetTextureUnits();const ge=L.fog,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?L.environment:null,pe=ce===null?D.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ct.workingColorSpace,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ie=w.get(H.envMap||Re,ye),Ue=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,Lt=!!Y.morphAttributes.color;let ut=qn;H.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ut=D.toneMapping);const xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ot=xt!==void 0?xt.length:0,Ce=Be.get(H),Gt=A.state.lights;if(Pt===!0&&(be===!0||v!==ie)){const pt=v===ie&&H.id===Z;j.setState(H,v,pt)}let ft=!1,Pn=!1;H.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Gt.state.version||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==Ie||H.fog===!0&&Ce.fog!==ge||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==j.numPlanes||Ce.numIntersection!==j.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==je||Ce.morphTargets!==Le||Ce.morphNormals!==et||Ce.morphColors!==Lt||Ce.morphTargetsCount!==Ot||Ce.numLightProbeGrids!==hs(A.state.lightProbeGridArray)?ft=!0:(Ce.outputColorSpace!==pe||Ce.toneMapping!==ut)&&(Pn=!0):(ft=!0,Ce.__version=H.version);let Zt=Ce.currentProgram;(ft===!0||Pn===!0)&&(Zt=Pn===!0?Do(H,L,V,pe,ut):$n(H,L,V),k&&H.isNodeMaterial&&k.onUpdateProgram(H,Zt,Ce));let fi=!1,fe=!1,Ee=!1;const Fe=Zt.getUniforms(),tt=Ce.uniforms;if(ve.useProgram(Zt.program)&&(fi=!0,fe=!0,Ee=!0),H.id!==Z&&(Z=H.id,fe=!0),fi||ie!==v){ve.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Fe.setValue(N,"projectionMatrix",v.projectionMatrix),Fe.setValue(N,"viewMatrix",v.matrixWorldInverse);const qe=Fe.map.cameraPosition;qe!==void 0&&qe.setValue(N,nt.setFromMatrixPosition(v.matrixWorld)),vt.logarithmicDepthBuffer&&Fe.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Fe.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),ie!==v&&(ie=v,fe=!0,Ee=!0)}if(Ce.needsLights&&(Gt.state.sunShadowMap.length>0&&Fe.setValue(N,"sunShadowMap",Gt.state.sunShadowMap,We),Gt.state.directionalShadowMap.length>0&&Fe.setValue(N,"directionalShadowMap",Gt.state.directionalShadowMap,We),Gt.state.spotShadowMap.length>0&&Fe.setValue(N,"spotShadowMap",Gt.state.spotShadowMap,We),Gt.state.pointShadowMap.length>0&&Fe.setValue(N,"pointShadowMap",Gt.state.pointShadowMap,We)),V.isSkinnedMesh){Fe.setOptional(N,V,"bindMatrix"),Fe.setOptional(N,V,"bindMatrixInverse");const pt=V.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),Fe.setValue(N,"boneTexture",pt.boneTexture,We))}V.isBatchedMesh&&(Fe.setOptional(N,V,"batchingTexture"),Fe.setValue(N,"batchingTexture",V._matricesTexture,We),Fe.setOptional(N,V,"batchingIdTexture"),Fe.setValue(N,"batchingIdTexture",V._indirectTexture,We),Fe.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Fe.setValue(N,"batchingColorTexture",V._colorsTexture,We));const lt=Y.morphAttributes;if((lt.position!==void 0||lt.normal!==void 0||lt.color!==void 0)&&te.update(V,Y,Zt),(fe||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,Fe.setValue(N,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&L.environment!==null&&(tt.envMapIntensity.value=L.environmentIntensity),tt.dfgLUT!==void 0&&(tt.dfgLUT.value=_0()),fe){if(Fe.setValue(N,"toneMappingExposure",D.toneMappingExposure),Ce.needsLights&&Hs(tt,Ee),ge&&H.fog===!0&&ue.refreshFogUniforms(tt,ge),ue.refreshMaterialUniforms(tt,H,Se,Ne,A.state.transmissionRenderTarget[v.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){const pt=T;let qe=0;for(const Bt of A.state.lightProbeGridArray)Bt.texture!==null&&(pt.textures[qe]=Bt.texture,pt.min[qe]=Bt.boundingBox.min,pt.max[qe]=Bt.boundingBox.max,pt.resolution[qe]=Bt.resolution,qe++);for(const Bt in pt)pt[Bt].length=qe;tt.probesSH.value=pt.textures,tt.probesMin.value=pt.min,tt.probesMax.value=pt.max,tt.probesResolution.value=pt.resolution}Er.upload(N,Or(Ce),tt,We)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Er.upload(N,Or(Ce),tt,We),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Fe.setValue(N,"center",V.center),Fe.setValue(N,"modelViewMatrix",V.modelViewMatrix),Fe.setValue(N,"normalMatrix",V.normalMatrix),Fe.setValue(N,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const pt=H.uniformsGroups;for(let qe=0,Bt=pt.length;qe<Bt;qe++){const Ht=pt[qe];X.update(Ht,Zt),X.bind(Ht,Zt)}}return Zt}function Hs(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function No(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(v,L,Y){const H=Be.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Be.get(v.texture).__webglTexture=L,Be.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const Y=Be.get(v);Y.__webglFramebuffer=L,Y.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,Y=0){ce=v,ee=L,W=Y;let H=null,V=!1,ge=!1;if(v){const pe=Be.get(v);if(pe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(N.FRAMEBUFFER,pe.__webglFramebuffer),ae.copy(v.viewport),Pe.copy(v.scissor),Xe=v.scissorTest,ve.viewport(ae),ve.scissor(Pe),ve.setScissorTest(Xe),Z=-1;return}else if(pe.__webglFramebuffer===void 0)We.setupRenderTarget(v);else if(pe.__hasExternalTextures)We.rebindTextures(v,Be.get(v.texture).__webglTexture,Be.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ue=v.depthTexture;if(pe.__boundDepthTexture!==Ue){if(Ue!==null&&Be.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(v)}}const ye=v.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ge=!0);const Ie=Be.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?H=Ie[L][Y]:H=Ie[L],V=!0):v.samples>0&&We.useMultisampledRTT(v)===!1?H=Be.get(v).__webglMultisampledFramebuffer:Array.isArray(Ie)?H=Ie[Y]:H=Ie,ae.copy(v.viewport),Pe.copy(v.scissor),Xe=v.scissorTest}else ae.copy(ze).multiplyScalar(Se).floor(),Pe.copy(ot).multiplyScalar(Se).floor(),Xe=at;if(Y!==0&&(H=$),ve.bindFramebuffer(N.FRAMEBUFFER,H)&&ve.drawBuffers(v,H),ve.viewport(ae),ve.scissor(Pe),ve.setScissorTest(Xe),V){const pe=Be.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,Y)}else if(ge){const pe=L;for(let ye=0;ye<v.textures.length;ye++){const Ie=Be.get(v.textures[ye]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ye,Ie.__webglTexture,Y,pe)}}else if(v!==null&&Y!==0){const pe=Be.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,Y)}Z=-1};function wi(v){const L=Be.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=vt.textureFormatReadable(v.format),L.__typeReadable=vt.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,Y,H,V,ge,Re,pe=0){if(!(v&&v.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Re!==void 0&&(ye=ye[Re],Array.isArray(ye)&&(ye=ye[0])),ye){ve.bindFramebuffer(N.FRAMEBUFFER,ye);try{const Ie=v.textures[pe],Ue=Ie.format,je=Ie.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);const Le=wi(Ie);if(Le.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-H&&Y>=0&&Y<=v.height-V&&N.readPixels(L,Y,H,V,F.convert(Ue),F.convert(je),ge)}finally{const Ie=ce!==null?Be.get(ce).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(v,L,Y,H,V,ge,Re,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Re!==void 0&&(ye=ye[Re],Array.isArray(ye)&&(ye=ye[0])),ye)if(L>=0&&L<=v.width-H&&Y>=0&&Y<=v.height-V){ve.bindFramebuffer(N.FRAMEBUFFER,ye);const Ie=v.textures[pe],Ue=Ie.format,je=Ie.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);const Le=wi(Ie);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(L,Y,H,V,F.convert(Ue),F.convert(je),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Lt=ce!==null?Be.get(ce).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,Lt);const ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Uh(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(et),N.deleteSync(ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,Y=0){const H=Math.pow(2,-Y),V=Math.floor(v.image.width*H),ge=Math.floor(v.image.height*H),Re=L!==null?L.x:0,pe=L!==null?L.y:0;We.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Re,pe,V,ge),ve.unbindTexture()},this.copyTextureToTexture=function(v,L,Y=null,H=null,V=0,ge=0){let Re,pe,ye,Ie,Ue,je,Le,et,Lt;const ut=v.isCompressedTexture?v.mipmaps[ge]:v.image;if(Y!==null)Re=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,ye=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,Ue=Y.min.y,je=Y.isBox3?Y.min.z:0;else{const Fe=Math.pow(2,-V);Re=Math.floor(ut.width*Fe),pe=Math.floor(ut.height*Fe),v.isDataArrayTexture?ye=ut.depth:v.isData3DTexture?ye=Math.floor(ut.depth*Fe):ye=1,Ie=0,Ue=0,je=0}H!==null?(Le=H.x,et=H.y,Lt=H.z):(Le=0,et=0,Lt=0);const xt=F.convert(L.format),Ot=F.convert(L.type);let Ce;L.isData3DTexture?(We.setTexture3D(L,0),Ce=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(We.setTexture2DArray(L,0),Ce=N.TEXTURE_2D_ARRAY):(We.setTexture2D(L,0),Ce=N.TEXTURE_2D),ve.activeTexture(N.TEXTURE0),ve.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),ve.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ve.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const Gt=ve.getParameter(N.UNPACK_ROW_LENGTH),ft=ve.getParameter(N.UNPACK_IMAGE_HEIGHT),Pn=ve.getParameter(N.UNPACK_SKIP_PIXELS),Zt=ve.getParameter(N.UNPACK_SKIP_ROWS),fi=ve.getParameter(N.UNPACK_SKIP_IMAGES);ve.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),ve.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),ve.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),ve.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),ve.pixelStorei(N.UNPACK_SKIP_IMAGES,je);const fe=v.isDataArrayTexture||v.isData3DTexture,Ee=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Fe=Be.get(v),tt=Be.get(L),lt=Be.get(Fe.__renderTarget),pt=Be.get(tt.__renderTarget);ve.bindFramebuffer(N.READ_FRAMEBUFFER,lt.__webglFramebuffer),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let qe=0;qe<ye;qe++)fe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(v).__webglTexture,V,je+qe),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(L).__webglTexture,ge,Lt+qe)),N.blitFramebuffer(Ie,Ue,Ie+Re,Ue+pe,Le,et,Le+Re,et+pe,N.DEPTH_BUFFER_BIT,N.NEAREST);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||Be.has(v)){const Fe=Be.get(v),tt=Be.get(L);ve.bindFramebuffer(N.READ_FRAMEBUFFER,I),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,q);for(let lt=0;lt<ye;lt++)fe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fe.__webglTexture,V,je+lt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Fe.__webglTexture,V),Ee?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,tt.__webglTexture,ge,Lt+lt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,tt.__webglTexture,ge),V!==0?N.blitFramebuffer(Ie,Ue,Ie+Re,Ue+pe,Le,et,Le+Re,et+pe,N.COLOR_BUFFER_BIT,N.NEAREST):Ee?N.copyTexSubImage3D(Ce,ge,Le,et,Lt+lt,Ie,Ue,Re,pe):N.copyTexSubImage2D(Ce,ge,Le,et,Ie,Ue,Re,pe);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ee?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Ce,ge,Le,et,Lt,Re,pe,ye,xt,Ot,ut.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,ge,Le,et,Lt,Re,pe,ye,xt,ut.data):N.texSubImage3D(Ce,ge,Le,et,Lt,Re,pe,ye,xt,Ot,ut):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Le,et,Re,pe,xt,Ot,ut.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Le,et,ut.width,ut.height,xt,ut.data):N.texSubImage2D(N.TEXTURE_2D,ge,Le,et,Re,pe,xt,Ot,ut);ve.pixelStorei(N.UNPACK_ROW_LENGTH,Gt),ve.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),ve.pixelStorei(N.UNPACK_SKIP_PIXELS,Pn),ve.pixelStorei(N.UNPACK_SKIP_ROWS,Zt),ve.pixelStorei(N.UNPACK_SKIP_IMAGES,fi),ge===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&N.generateMipmap(Ce),ve.unbindTexture()},this.initRenderTarget=function(v){Be.get(v).__webglFramebuffer===void 0&&We.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?We.setTextureCube(v,0):v.isData3DTexture?We.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?We.setTexture2DArray(v,0):We.setTexture2D(v,0),ve.unbindTexture()},this.resetState=function(){ee=0,W=0,ce=null,ve.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class v0 extends wc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Oe;e.deleteAttribute("uv");const t=new De({side:an}),n=new De,i=new ji(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new se(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new ou(e,n,6),o=new Ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new se(e,Vi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new se(e,Vi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new se(e,Vi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new se(e,Vi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new se(e,Vi(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const p=new se(e,Vi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Vi(s){return new gu({color:0,emissive:16777215,emissiveIntensity:s})}const ys=new U;function _n(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;ys.copy(e),ys[n]=0,ys.normalize();const l=.5*a/(a+o),h=1-ys.angleTo(s)/c;return Math.sign(ys[t])===1?h*l:o/(a+o)+l+l*(1-h)}class Ge extends Oe{constructor(e=1,t=1,n=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new U,l=new U,h=new U(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,_=f.length/6,S=new U,m=.5/a;for(let d=0,M=0;d<f.length;d+=3,M+=2)switch(c.fromArray(f,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[d+0]=h.x*Math.sign(c.x)+l.x*r,f[d+1]=h.y*Math.sign(c.y)+l.y*r,f[d+2]=h.z*Math.sign(c.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/_)){case 0:S.set(1,0,0),p[M+0]=_n(S,l,"z","y",r,n),p[M+1]=1-_n(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),p[M+0]=1-_n(S,l,"z","y",r,n),p[M+1]=1-_n(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),p[M+0]=1-_n(S,l,"x","z",r,e),p[M+1]=_n(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),p[M+0]=1-_n(S,l,"x","z",r,e),p[M+1]=1-_n(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),p[M+0]=1-_n(S,l,"x","y",r,e),p[M+1]=1-_n(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),p[M+0]=_n(S,l,"x","y",r,e),p[M+1]=1-_n(S,l,"y","x",r,t);break}}static fromJSON(e){return new Ge(e.width,e.height,e.depth,e.segments,e.radius)}}const _a=new Map;function tn(s,e,t,n,i={}){if(_a.has(s))return _a.get(s);const r=document.createElement("canvas");r.width=e,r.height=t;const a=r.getContext("2d");n(a,e,t);const o=new Os(r);return o.colorSpace=Xt,o.anisotropy=8,i.repeat&&(o.wrapS=o.wrapT=Ls,o.repeat.set(i.repeat[0],i.repeat[1])),_a.set(s,o),o}function M0(){return tn("asphalt",512,512,(s,e,t)=>{s.fillStyle="#1a1a20",s.fillRect(0,0,e,t);const n=s.getImageData(0,0,e,t),i=n.data;for(let r=0;r<i.length;r+=4){const a=(Math.random()-.5)*34;i[r]+=a,i[r+1]+=a,i[r+2]+=a+2}s.putImageData(n,0,0);for(let r=0;r<900;r++){const a=30+Math.random()*50;s.fillStyle=`rgba(${a},${a},${a+4},${.25+Math.random()*.4})`,s.beginPath(),s.arc(Math.random()*e,Math.random()*t,.6+Math.random()*1.7,0,7),s.fill()}for(let r=0;r<22;r++){s.strokeStyle=`rgba(0,0,0,${.05+Math.random()*.15})`,s.lineWidth=2+Math.random()*9;const a=Math.random()*e;s.beginPath(),s.moveTo(a,0),s.bezierCurveTo(a+20,t*.3,a-30,t*.6,a+10,t),s.stroke()}s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=2,s.beginPath(),s.moveTo(0,t*.5),s.lineTo(e,t*.5),s.stroke()},{repeat:[4,90]})}function S0(){return tn("checker",256,64,(s,e,t)=>{for(let i=0;i<t;i+=32)for(let r=0;r<e;r+=32)s.fillStyle=(r/32+i/32|0)%2===0?"#f2f0e8":"#101014",s.fillRect(r,i,32,32)})}function Bl(s,e="#0b0b12",t="#ffd319",n="#ff5a12"){return tn(`banner:${s}:${e}:${t}`,512,128,(i,r,a)=>{i.fillStyle=e,i.fillRect(0,0,r,a),i.fillStyle=n,i.fillRect(0,0,14,a),i.fillRect(r-14,0,14,a),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=3,i.strokeRect(8,8,r-16,a-16),i.fillStyle=t,i.font="italic 900 62px Arial, Helvetica, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,r/2,a/2+4)})}function zl(s,e=""){return tn(`sign:${s}:${e}`,256,256,(t,n,i)=>{t.fillStyle="#0c0c12",t.fillRect(0,0,n,i),t.strokeStyle="#ffd319",t.lineWidth=8,t.strokeRect(10,10,n-20,i-20),t.fillStyle="#ffd319",t.font="italic 900 84px Arial, Helvetica, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(s,n/2,i/2-24),t.fillStyle="#cfcdd6",t.font="700 26px Arial, Helvetica, sans-serif",t.fillText(e,n/2,i/2+52)})}function y0(){return tn("windows",128,256,(s,e,t)=>{s.fillStyle="#070810",s.fillRect(0,0,e,t);const n=10,i=22,r=e/n,a=t/i;for(let o=0;o<i;o++)for(let c=0;c<n;c++)if(Math.random()<.28){const l=Math.random()<.7;s.fillStyle=l?`rgba(255,${180+Math.random()*50},${90+Math.random()*60},${.35+Math.random()*.5})`:`rgba(120,200,255,${.25+Math.random()*.4})`,s.fillRect(c*r+r*.18,o*a+a*.22,r*.58,a*.48)}},{repeat:[1,1]})}function Ir(){return tn("glow",128,128,(s,e,t)=>{const n=s.createRadialGradient(e/2,t/2,2,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.75)"),n.addColorStop(.45,"rgba(255,255,255,0.22)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.fillRect(0,0,e,t)})}function E0(){return tn("smoke",128,128,(s,e,t)=>{const n=s.createRadialGradient(e/2,t/2,4,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,0.85)"),n.addColorStop(.35,"rgba(235,235,245,0.45)"),n.addColorStop(.7,"rgba(200,200,215,0.12)"),n.addColorStop(1,"rgba(190,190,210,0)"),s.fillStyle=n,s.fillRect(0,0,e,t)})}function w0(){return tn("pool",256,256,(s,e,t)=>{const n=s.createRadialGradient(e/2,t/2,4,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,240,200,0.55)"),n.addColorStop(.4,"rgba(255,220,160,0.2)"),n.addColorStop(1,"rgba(255,210,150,0)"),s.fillStyle=n,s.fillRect(0,0,e,t)})}function T0(){return tn("crowd",256,64,(s,e,t)=>{s.fillStyle="#07070c",s.fillRect(0,0,e,t);const n=["#ffd319","#ff5a12","#2dff86","#37e6ff","#ff2e4d","#e8e6df","#8c2bff"];for(let i=0;i<420;i++){s.fillStyle=n[Math.random()*n.length|0],s.globalAlpha=.25+Math.random()*.5;const r=1.5+Math.random()*2.5;s.beginPath(),s.arc(Math.random()*e,Math.random()*t,r,0,7),s.fill()}s.globalAlpha=1},{repeat:[6,1]})}function kl(){return tn("carbon",128,128,(s,e,t)=>{s.fillStyle="#0b0b0f",s.fillRect(0,0,e,t);const n=8;for(let i=0;i<t;i+=n)for(let r=0;r<e;r+=n){const a=(r/n+i/n&1)===0,o=s.createLinearGradient(r,i,r+n,i+n);a?(o.addColorStop(0,"#22222a"),o.addColorStop(.55,"#15151b"),o.addColorStop(1,"#0d0d12")):(o.addColorStop(0,"#101015"),o.addColorStop(.55,"#1b1b23"),o.addColorStop(1,"#0a0a0e")),s.fillStyle=o,s.fillRect(r,i,n,n),s.fillStyle=a?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.22)",s.fillRect(r,i,n,1)}},{repeat:[3,3]})}function xa(s,e=[24,22,26],t=13){return tn(`suede:${s}`,128,128,(n,i,r)=>{n.fillStyle=`rgb(${e[0]},${e[1]},${e[2]})`,n.fillRect(0,0,i,r);const a=n.getImageData(0,0,i,r),o=a.data;for(let c=0;c<o.length;c+=4){const l=(Math.random()-.5)*t*2;o[c]=Math.max(0,Math.min(255,o[c]+l+1)),o[c+1]=Math.max(0,Math.min(255,o[c+1]+l)),o[c+2]=Math.max(0,Math.min(255,o[c+2]+l+2))}n.putImageData(a,0,0);for(let c=0;c<120;c++)n.fillStyle=`rgba(255,255,255,${.01+Math.random()*.02})`,n.beginPath(),n.arc(Math.random()*i,Math.random()*r,1+Math.random()*3,0,7),n.fill()},{repeat:[2,2]})}function b0(s="tach"){const e=s==="tach",t=e?9:6,n=e?Array.from({length:t+1},(i,r)=>String(r)):Array.from({length:t+1},(i,r)=>String(r*40));return tn(`gauge:${s}`,256,256,(i,r,a)=>{const o=r/2,c=a/2,l=r/2-5;i.clearRect(0,0,r,a);const h=i.createRadialGradient(o,c-26,8,o,c,l);h.addColorStop(0,"#1c2030"),h.addColorStop(.7,"#0a0b11"),h.addColorStop(1,"#05060a"),i.fillStyle=h,i.beginPath(),i.arc(o,c,l,0,Math.PI*2),i.fill();const f=2.25+Math.PI/2,u=-2.25+Math.PI/2,p=f-u;if(e){const _=f-p*.74;i.strokeStyle="#ff2a18",i.lineWidth=11,i.beginPath(),i.arc(o,c,l-15,-_,-u,!1),i.stroke()}i.strokeStyle="rgba(190,196,210,0.55)",i.lineWidth=3,i.beginPath(),i.arc(o,c,l-4,-f,-u,!1),i.stroke();for(let _=0;_<=t*5;_++){const S=_/(t*5),m=f-p*S,d=_%5===0,M=l-(d?30:21),R=l-12;if(i.strokeStyle=d?"#eef1f7":"rgba(200,205,220,0.45)",i.lineWidth=d?4:2,i.beginPath(),i.moveTo(o+Math.cos(m)*M,c-Math.sin(m)*M),i.lineTo(o+Math.cos(m)*R,c-Math.sin(m)*R),i.stroke(),d){const T=n[Math.round(S*t)],b=l-48;i.fillStyle=S>.74&&e?"#ff6a4d":"#f2f4fa",i.font="italic 900 30px Arial, Helvetica, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(T,o+Math.cos(m)*b,c-Math.sin(m)*b)}}i.fillStyle="rgba(220,225,235,0.55)",i.font="700 15px Arial, Helvetica, sans-serif",i.textAlign="center",i.fillText(e?"RPM x1000":"KM/H",o,c+l*.52)})}function Gl(s="DB"){return tn(`badge:${s}`,128,128,(e,t,n)=>{e.clearRect(0,0,t,n),e.fillStyle="#0b0b10",e.beginPath(),e.arc(t/2,n/2,t/2-2,0,7),e.fill(),e.strokeStyle="#ffd319",e.lineWidth=7,e.beginPath(),e.arc(t/2,n/2,t/2-7,0,7),e.stroke(),e.fillStyle="#ffd319",e.font="italic 900 54px Arial, Helvetica, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,t/2,n/2+3)})}function A0(){return tn("windownet",256,256,(s,e,t)=>{s.clearRect(0,0,e,t),s.strokeStyle="#33333c",s.lineWidth=4;for(let n=20;n<e;n+=38)s.beginPath(),s.moveTo(n,0),s.lineTo(n,t),s.stroke();for(let n=20;n<t;n+=38)s.beginPath(),s.moveTo(0,n),s.lineTo(e,n),s.stroke();s.lineWidth=12,s.strokeRect(6,6,e-12,t-12),s.fillStyle="#b3121f",s.fillRect(0,0,e,7)})}function R0(){return tn("floormat",256,128,(s,e,t)=>{s.fillStyle="#0a0a0d",s.fillRect(0,0,e,t),s.strokeStyle="rgba(255,211,25,0.28)",s.lineWidth=3,s.strokeRect(10,10,e-20,t-20),s.fillStyle="rgba(255,211,25,0.32)",s.font="italic 900 40px Arial, Helvetica, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText("DRAG BRASIL",e/2,t/2+2)},{repeat:[1,1]})}function C0(){return tn("dashscreen",256,128,(s,e,t)=>{s.fillStyle="#04121a",s.fillRect(0,0,e,t),s.strokeStyle="rgba(47,216,255,0.18)",s.lineWidth=1;for(let n=0;n<e;n+=16)s.beginPath(),s.moveTo(n,0),s.lineTo(n,t),s.stroke();for(let n=0;n<t;n+=16)s.beginPath(),s.moveTo(0,n),s.lineTo(e,n),s.stroke();s.fillStyle="#2fd8ff",s.font="italic 900 34px Arial, Helvetica, sans-serif",s.textAlign="left",s.textBaseline="middle",s.fillText("DRAG",16,36),s.fillStyle="#ffd319",s.fillText("BRASIL",16,72),s.fillStyle="#2fd8ff",s.fillRect(16,98,150,8),s.fillStyle="rgba(47,216,255,0.35)",s.fillRect(170,98,66,8)})}function P0(s){return new De({color:new Je(s),metalness:.22,roughness:.42,envMapIntensity:.55})}const rn={dark:new De({color:723727,roughness:.7,metalness:.3}),trim:new De({color:1513245,roughness:.45,metalness:.7}),chrome:new De({color:13225174,roughness:.18,metalness:1}),tire:new De({color:657932,roughness:.95,metalness:0}),rim:new De({color:7369855,roughness:.34,metalness:.92}),rimDark:new De({color:3553860,roughness:.4,metalness:.8}),glass:new Fc({color:1847362,metalness:.45,roughness:.05,transparent:!0,opacity:.74,side:xn,depthWrite:!1,envMapIntensity:2.4}),interior:new De({color:460554,roughness:1,metalness:0,envMapIntensity:.15}),seat:new De({color:1774614,roughness:.95,envMapIntensity:.2}),seatRed:new De({color:4853784,roughness:.9,envMapIntensity:.2}),headlight:new De({color:16774872,emissive:16773312,emissiveIntensity:4,roughness:.2}),taillight:new De({color:4325384,emissive:16715808,emissiveIntensity:.9,roughness:.25}),amber:new De({color:3808e3,emissive:16747008,emissiveIntensity:1.2,roughness:.3})};function xe(s,e,t,n=!0){const i=new se(s,e);return i.castShadow=n,i.receiveShadow=!0,t.add(i),i}const L0=new U(0,1,0);function Hl(s,e,t){const n=t.x-e.x,i=t.y-e.y,r=t.z-e.z,a=Math.hypot(n,i,r);a<1e-5||(s.position.set((e.x+t.x)/2,(e.y+t.y)/2,(e.z+t.z)/2),s.quaternion.setFromUnitVectors(L0,new U(n/a,i/a,r/a)),s.scale.y=a/(s.userData.baseLen||1))}function I0(s,e,t,n,i,r){const a=e.x-s.x,o=e.y-s.y,c=e.z-s.z;let l=Math.hypot(a,o,c);l=Math.min(Math.max(l,.001),t+n-.002);const h=a/l,f=o/l,u=c/l,p=(t*t-n*n+l*l)/(2*l),_=Math.sqrt(Math.max(0,t*t-p*p));let S=i.x-h*(i.x*h+i.y*f+i.z*u),m=i.y-f*(i.x*h+i.y*f+i.z*u),d=i.z-u*(i.x*h+i.y*f+i.z*u);const M=Math.hypot(S,m,d)||1;return S/=M,m/=M,d/=M,r.set(s.x+h*p+S*_,s.y+f*p+m*_,s.z+u*p+d*_),r}function _r(s,e,t,n){const i=new wt;i.position.set(s,.345,e);const r=new wt,a=new wt;i.add(r),r.add(a);const o=.345,c=.29,l=new yt(o,o,c,28,1);l.rotateZ(Math.PI/2),xe(l,rn.tire,a);const h=new De({color:1908002,roughness:.9});for(let d=-2;d<=2;d++){const M=new se(new Qi(o*.9,.012,6,36),h);M.rotation.y=Math.PI/2,M.position.x=d*.055,a.add(M)}const f=new yt(o*.63,o*.63,c+.02,24);f.rotateZ(Math.PI/2),xe(f,rn.rimDark,a,!1);const u=new yt(o*.64,o*.64,.03,24);u.rotateZ(Math.PI/2);const p=xe(u,rn.rim,a,!1);p.position.x=t*(c/2+.005);const _=rn.rim;for(let d=0;d<5;d++){const M=d/5*Math.PI*2,R=new se(new Oe(.035,o*1.1,.075),_);R.position.set(t*(c/2+.03),Math.sin(M)*.02,0),R.rotation.x=M,a.add(R)}const S=new se(new yt(.055,.055,.04,16),rn.chrome);S.rotation.z=Math.PI/2,S.position.x=t*(c/2+.02),a.add(S);const m=new se(new Oe(.05,.16,.1),new De({color:16730642,roughness:.4,metalness:.4}));return m.position.set(t*.02,.16,.08),r.add(m),{group:i,steerGroup:r,spin:a,side:t,front:n}}function Vl({paint:s="#ff5a12",interior:e=!1,plate:t="DB",kit:n="muscle"}={}){const i=new wt,r=new wt;i.add(r);const a=P0(s),o=new De({color:526347,roughness:.65,metalness:.4}),c=new De({color:921107,roughness:.5,metalness:.6}),l=new Ge(1.94,.56,4.55,4,.09);xe(l,a,r).position.set(0,.63,0);const f=new Ge(1.88,.3,1.05,3,.07);xe(f,a,r).position.set(0,.9,1.4);const p=new Ge(1.88,.3,.95,3,.07);xe(p,a,r).position.set(0,.9,-1.475);for(const be of[-1,1])xe(new Ge(.16,.3,1.9,2,.05),a,r).position.set(be*.86,.9,-.05);const S=new De({color:1315865,roughness:.62,metalness:.25,envMapIntensity:.3}),m=new Ge(1.82,.16,1.75,3,.055),d=xe(m,S,r);d.position.set(0,.99,1.4),d.rotation.x=-.012;const M=new Ge(1.8,.14,1.5,3,.05);xe(M,S,r).position.set(0,.985,-1.62);const T=new Ge(1.92,.26,.22,3,.06);xe(T,a,r).position.set(0,.6,2.28);const A=new Ge(1.9,.28,.2,3,.06);xe(A,a,r).position.set(0,.62,-2.26);for(const be of[-1,1])xe(new Ge(.13,.16,3.1,2,.03),c,r).position.set(be*.92,.38,-.05);xe(new Ge(1.34,.2,.08,2,.03),o,r,!1).position.set(0,.72,2.36),xe(new Ge(1.12,.13,.02,2,.02),new De({color:328968,roughness:.9}),r,!1).position.set(0,.72,2.4);for(const be of[-1,1]){xe(new Ge(.44,.17,.08,3,.035),rn.headlight,r,!1).position.set(be*.6,.88,2.34);const nt=new bs(new qi({map:Ir(),color:16771504,transparent:!0,opacity:.6,blending:Dn,depthWrite:!1}));nt.scale.set(1.1,1.1,1),nt.position.set(be*.6,.88,2.43),r.add(nt),xe(new Ge(.38,.14,.06,2,.03),rn.taillight,r,!1).position.set(be*.66,.9,-2.31)}xe(new Ge(1.45,.045,.04,2,.015),rn.taillight,r,!1).position.set(0,.83,-2.33),xe(new Ge(1.5,.24,.04,2,.02),o,r,!1).position.set(0,.64,-2.34);const k=xe(new Ge(.54,.07,.56,3,.03),a,r);k.position.set(0,1.09,1.24);const $=xe(new Oe(.4,.05,.03),new De({color:328968,roughness:.8}),r,!1);if($.position.set(0,1.08,1.5),n==="hotrod"){xe(new Ge(.46,.24,.5,3,.05),rn.chrome,r).position.set(0,1.27,1.24),xe(new Ge(.56,.1,.56,2,.03),c,r).position.set(0,1.4,1.24),xe(new Oe(.42,.08,.04),new De({color:328968,roughness:.7}),r,!1).position.set(0,1.4,1.52);const Qe=xe(new yt(.04,.04,.06,12),rn.chrome,r,!1);Qe.rotation.z=Math.PI/2,Qe.position.set(0,1.2,1),k.visible=!1,$.visible=!1}else n==="gt"&&(k.scale.set(1.15,.8,1.15),$.scale.set(1.2,1,1));if(n==="gt"||n==="street"||n==="oval")for(const[be,ke]of[[-1,1.43],[1,1.43],[-1,-1.45],[1,-1.45]]){const nt=xe(new Ge(.26,.13,.95,2,.05),a,r);nt.position.set(be*.93,.82,ke),nt.rotation.z=be*-.12}if(n!=="oval"){const be=xe(new Ge(1.62,.055,.34,2,.02),c,r);be.position.set(0,n==="gt"?1.22:1.13,-2),n==="gt"&&be.scale.set(1.08,1.3,1);for(const ke of[-1,1])xe(new Oe(.05,.18,.14),c,r).position.set(ke*.56,n==="gt"?1.12:1.03,-2)}else xe(new Oe(1.5,.04,.16),c,r).position.set(0,1.05,-2.28);for(const be of[-1,1])xe(new Ge(.22,.1,.13,2,.03),a,r).position.set(be*1.01,1.03,.5),xe(new Oe(.12,.03,.04),c,r).position.set(be*.94,.98,.5);const I=[];for(const be of[-1,1]){const ke=xe(new yt(.056,.062,.22,14),rn.chrome,r,!1);ke.rotation.x=Math.PI/2,ke.position.set(be*.58,.38,-2.36),I.push(ke);const nt=xe(new yt(.042,.042,.06,12),new dt({color:328965}),r,!1);nt.rotation.x=Math.PI/2,nt.position.set(be*.58,.38,-2.45)}const q=[],ee=[],W=xe(new Ge(1.5,.07,1.72,3,.03),S,r);q.push(W,k,$),W.position.set(0,1.455,-.42),xe(new Ge(1.5,.06,.1,2,.02),c,r).position.set(0,1.445,.44);const Z=rn.glass;let ie=null,ae=null;for(const[be,ke,nt]of[[.58,-.46,.62],[-1.28,.5,.6]]){const Qe=new wt;Qe.position.set(0,1.22,be),Qe.rotation.x=ke,r.add(Qe);const st=new se(new It(1.5,nt),Z);st.userData.windshield=be>0,Qe.add(st),be>0&&(ie=st,ae=Qe);const kt=new De({color:526347,roughness:.5,metalness:.4});for(const Dt of[nt/2,-nt/2]){const N=new se(new Oe(1.56,.045,.035),kt);N.position.set(0,Dt,.002),Qe.add(N)}for(const Dt of[-.76,.76]){const N=new se(new Oe(.04,nt+.045,.035),kt);N.position.set(Dt,0,.002),Qe.add(N)}}for(const be of[-1,1]){const ke=new se(new It(1.62,.42),Z);ke.position.set(be*.755,1.21,-.38),ke.rotation.y=be*Math.PI/2,r.add(ke),ee.push(ke);for(const Qe of[.58,-1.28]){const st=xe(new Oe(.055,.54,.08),c,r);st.position.set(be*.75,1.22,Qe),st.rotation.x=Qe>0?-.42:.42}xe(new Oe(.05,.045,1.62),c,r).position.set(be*.757,1.42,-.38)}for(const be of[-1,1]){for(const nt of[.52,-1.2])xe(new Oe(.012,.48,.018),c,r,!1).position.set(be*.955,.62,nt);xe(new Ge(.16,.045,.05,2,.015),rn.chrome,r,!1).position.set(be*.975,.78,-.62)}const Pe=new De({color:2894902,roughness:.55,metalness:.4});for(const be of[-.55,.55]){const ke=xe(new Oe(.17,.014,1.66),Pe,r,!1);ke.position.set(be,1.493,-.42),q.push(ke),xe(new Oe(.17,.014,1.72),Pe,r,!1).position.set(be,1.075,1.4),xe(new Oe(.17,.014,1.36),Pe,r,!1).position.set(be,1.06,-1.62)}const Xe=new De({color:526347,roughness:.85});for(const be of[-1,1])xe(new Oe(.55,.035,.22),Xe,r,!1).position.set(be*.535,1.09,.46);const Q=new se(new It(2.7,5.2),new dt({color:0,transparent:!0,opacity:.55,depthWrite:!1}));Q.rotation.x=-Math.PI/2,Q.position.y=.012,Q.material.alphaMap=Ir(),Q.material.opacity=.55,i.add(Q);let he=null,Ae=null,Ne=null,Se=null,He=()=>{};const Rt=[],ze=[],ot={tach:null,speed:null},at=[];if(e){const be=new De({map:xa("charcoal",[27,25,31],12),roughness:.97,metalness:.02,envMapIntensity:.16}),ke=new De({map:xa("red",[62,13,22],15),roughness:.95,metalness:.02,envMapIntensity:.16}),nt=new De({map:kl(),color:9276821,roughness:.5,metalness:.4,envMapIntensity:.45}),Qe=new De({color:1250071,roughness:.78,metalness:.06,envMapIntensity:.2}),st=new De({color:10133933,roughness:.3,metalness:.95,envMapIntensity:1.1}),kt=new De({color:657932,roughness:.96}),Dt=new De({color:11735583,roughness:.92,envMapIntensity:.18}),N=new De({color:2303276,roughness:.38,metalness:.85,envMapIntensity:.85}),gt=new De({color:1315865,roughness:.95}),_t=new De({color:11735583,roughness:.5,metalness:.25}),vt=new De({map:kl(),color:5460828,roughness:.84,metalness:.14,envMapIntensity:.22});xe(new Ge(1.6,.16,.5,4,.035),be,r).position.set(0,.95,.61);const Mt=xe(new Ge(1.44,.03,.36,3,.012),vt,r);Mt.position.set(0,1.045,.62),Mt.rotation.x=-.11,xe(new Ge(1.42,.075,.03,2,.012),Qe,r,!1).position.set(0,.885,.35),xe(new Oe(1.36,.006,.006),_t,r,!1).position.set(0,.906,.343);const w=xe(new Ge(.5,.018,.28,2,.008),nt,r,!1);w.position.set(.4,1.062,.62),w.rotation.x=-.1;const x=new se(new It(.17,.17),new dt({map:Gl("DB"),transparent:!0}));x.position.set(.4,.995,.346),x.rotation.y=Math.PI,r.add(x);for(const fe of[-1,1]){xe(new Ge(.2,.09,.05,2,.02),nt,r,!1).position.set(fe*.6,.985,.352);const Fe=new se(new It(.15,.05),new dt({color:328967}));Fe.position.set(fe*.6,.985,.338),Fe.rotation.y=Math.PI,r.add(Fe);for(let tt=-1;tt<=1;tt++)xe(new Oe(.14,.008,.01),st,r,!1).position.set(fe*.6,.985+tt*.015,.334)}const G=xe(new Ge(.38,.19,.06,2,.02),nt,r,!1);G.position.set(0,1.075,.4),G.rotation.set(.34,0,0);const oe=xe(new Ge(.4,.03,.11,2,.012),be,r,!1);oe.position.set(0,1.152,.373),oe.rotation.x=.34,Ae=new se(new It(.34,.124),new dt({map:C0(),color:11845833})),Ae.position.set(0,1.081,.352),Ae.rotation.set(.34,Math.PI,0),r.add(Ae);const ne=new se(new It(.26,.012),new dt({color:3135743,transparent:!0,opacity:.55}));ne.position.set(0,1.019,.36),ne.rotation.set(.34,Math.PI,0),r.add(ne);for(const fe of[-.23,.23]){const Ee=new se(new yt(.018,.02,.024,12),st);Ee.rotation.x=Math.PI/2,Ee.position.set(fe,.925,.352),r.add(Ee)}const ue=new wt;ue.position.set(-.355,1.016,.355),ue.rotation.set(.18,Math.PI,0),r.add(ue);const _e=new se(new Oe(.56,.21,.03),nt);ue.add(_e);for(const[fe,Ee]of[-.15,.15].entries()){const Fe=new se(new Qi(.071,.006,8,28),st);Fe.position.set(Ee,0,.02),ue.add(Fe);const tt=new se(new si(.068,28),new dt({map:b0(fe===0?"tach":"speed"),transparent:!0}));tt.position.set(Ee,0,.017),ue.add(tt);const lt=new se(new Oe(.006,.055,.004),new dt({color:fe===0?16726831:16765721}));lt.geometry.translate(0,.025,0),lt.position.set(Ee,0,.026),lt.rotation.z=2.25,ue.add(lt),fe===0?ot.tach=lt:ot.speed=lt}const J=new dt({color:3663615});for(let fe=0;fe<3;fe++){const Ee=new se(new si(.0075,8),J);Ee.position.set(-.065+fe*.065,-.075,.026),ue.add(Ee)}xe(new Ge(.34,.05,.026,2,.01),gt,r,!1).position.set(-.37,1.125,.352);for(let fe=0;fe<6;fe++){const Ee=new se(new si(.0105,10),new dt({color:2756884}));Ee.position.set(-.475+fe*.042,1.121,.335),Ee.rotation.y=Math.PI,Ee.userData.on=fe<3?3407718:fe<5?16756768:16722452,r.add(Ee),at.push(Ee)}he=new wt,he.position.set(-.37,.842,.315),he.rotation.x=-.38,r.add(he);const me=new De({map:xa("wheel",[72,66,76],16),roughness:.86,metalness:.04}),C=new se(new Qi(.155,.024,12,44,Math.PI*1.66),me);C.rotation.z=-Math.PI/3,he.add(C);const te=new se(new Oe(.158,.024,.022),me);te.position.set(0,-.136,0),he.add(te);for(const fe of[0,Math.PI,-Math.PI/2]){const Ee=new se(new Oe(.028,.15,.012),st);Ee.position.set(Math.cos(fe)*.07,Math.sin(fe)*.07,0),Ee.rotation.z=fe-Math.PI/2,he.add(Ee)}const y=new se(new yt(.047,.05,.035,16),gt);y.rotation.x=Math.PI/2,y.position.z=-.012,he.add(y);const P=new se(new si(.036,20),new dt({map:Gl("DB"),transparent:!0}));P.position.z=-.032,P.rotation.y=Math.PI,he.add(P);const F=new se(new Oe(.075,.02,.014),new dt({color:16765721}));F.position.set(0,.155,.004),he.add(F);const O=new se(new Oe(.032,.034,.012),new dt({color:16726831}));O.position.set(0,.132,.004),he.add(O);for(const fe of[-1,1])xe(new Oe(.065,.05,.01),nt,he,!1).position.set(fe*.132,-.032,.03);const X=new se(new yt(.04,.045,.3,12),gt);X.rotation.x=Math.PI/2,X.position.set(-.37,.94,.43),r.add(X);const re=xe(new Ge(.14,.1,.2,2,.03),gt,r,!1);re.position.set(-.37,.955,.43),re.rotation.x=-.2;for(const fe of[-1,1]){const Ee=new se(new yt(.006,.008,.16,8),gt);Ee.rotation.z=Math.PI/2,Ee.rotation.y=fe*.3,Ee.position.set(-.37+fe*.11,.985,.45),r.add(Ee)}xe(new Ge(1.52,.05,1.08,2,.03),rn.interior,r,!1).position.set(0,.918,-.04);const de=new De({map:R0(),roughness:1,metalness:0});for(const fe of[-.37,.4]){const Ee=new se(new It(.48,.66),de);Ee.rotation.x=-Math.PI/2,Ee.position.set(fe,.947,-.16),r.add(Ee),ze.push(Ee)}xe(new Ge(.28,.22,.78,3,.06),be,r,!1).position.set(0,.93,-.05);const le=xe(new Ge(.24,.018,.62,2,.008),nt,r,!1);le.position.set(0,1.028,-.03),le.rotation.x=-.02;for(let fe=0;fe<4;fe++){const Ee=new se(new yt(.008,.008,.03,8),st);Ee.position.set(-.07+fe*.047,1.045,-.16),r.add(Ee);const Fe=new se(new li(.009,8,6),fe===0?_t:gt);Fe.position.set(-.07+fe*.047,1.061,-.16),r.add(Fe)}const Ke=new se(new To(.055,.13,12),Qe);Ke.position.set(.06,.985,.1),r.add(Ke);const ht=new se(new yt(.011,.013,.2,8),st);ht.position.set(.06,1.03,.11),ht.rotation.x=.22,r.add(ht);const St=new se(new Ge(.042,.078,.038,2,.018),new De({color:1447451,roughness:.38,metalness:.2}));St.position.set(.06,1.085,.13),St.rotation.x=.22,r.add(St);const At=new se(new yt(.013,.016,.24,10),st);At.position.set(.06,1,-.28),At.rotation.x=1.15,r.add(At);const on=new se(new yt(.02,.02,.08,10),gt);on.position.set(.06,1.055,-.35),on.rotation.x=1.15,r.add(on);const pn=new se(new yt(.05,.05,.32,14),_t);pn.position.set(.45,1,-.3),pn.rotation.x=.16,r.add(pn);const ls=new se(new yt(.012,.012,.06,8),gt);ls.position.set(.45,1.18,-.27),r.add(ls);for(const[fe,Ee,Fe]of[[-.37,ke,Dt],[.4,be,null]]){const tt=fe<0?Rt:null,lt=Ht=>(tt&&tt.push(Ht),Ht);lt(xe(new Ge(.5,.15,.54,3,.06),Ee,r)).position.set(fe,.99,-.42);for(const Ht of[-1,1]){const ln=lt(xe(new Ge(.09,.12,.5,2,.03),Ee,r));ln.position.set(fe+Ht*.23,1.035,-.4),ln.rotation.z=Ht*.12}const qe=lt(xe(new Ge(.46,.5,.15,3,.06),Ee,r));qe.position.set(fe,1.16,-.72),qe.rotation.x=-.14;for(const Ht of[-1,1]){const ln=lt(xe(new Ge(.085,.42,.17,2,.04),Ee,r));ln.position.set(fe+Ht*.2,1.15,-.7),ln.rotation.x=-.14,ln.rotation.z=Ht*.1}const Bt=lt(xe(new Ge(.28,.13,.12,2,.05),Ee,r));Bt.position.set(fe,1.375,-.775),Bt.rotation.x=-.14;for(const Ht of[-1,1]){const ln=lt(xe(new Oe(.055,.045,.02),gt,r,!1));ln.position.set(fe+Ht*.1,1.3,-.795),ln.rotation.x=-.14}for(const Ht of[-1,1])lt(xe(new Oe(.05,.04,.5),st,r,!1)).position.set(fe+Ht*.16,.932,-.4);if(Fe){for(const Ti of[-1,1]){const us=lt(xe(new Oe(.055,.34,.008),Fe,r,!1));us.position.set(fe+Ti*.145,1.19,-.628),us.rotation.z=-Ti*.15}lt(xe(new Oe(.4,.05,.008),Fe,r,!1)).position.set(fe,1.015,-.56),lt(xe(new Oe(.07,.05,.02),st,r,!1)).position.set(fe,1.015,-.55)}}const zn=new De({color:2766420,roughness:.74,metalness:.08,envMapIntensity:.45}),Mn=new De({color:10227744,roughness:.8,metalness:.05}),cs=new De({color:12589092,roughness:.36,metalness:.12}),zs=new De({color:15329248,roughness:.26,metalness:.18,envMapIntensity:1}),ks=new Fc({color:661026,roughness:.04,metalness:.9,envMapIntensity:1.5,transparent:!0,opacity:.92}),Sn=new wt;Sn.position.set(-.37,0,0),r.add(Sn);const yn=new wt;Sn.add(yn);const hs=xe(new Ge(.36,.42,.26,3,.06),zn,yn);hs.position.set(0,1.1,-.34),hs.rotation.x=-.18;const $n=xe(new Oe(.05,.4,.012),Mn,yn,!1);$n.position.set(0,1.1,-.208),$n.rotation.x=-.18;for(const fe of[-1,1]){const Ee=xe(new Oe(.045,.34,.012),Dt,yn,!1);Ee.position.set(fe*.085,1.13,-.2),Ee.rotation.z=fe*.16,Ee.rotation.x=-.18}xe(new Oe(.085,.05,.02),st,yn,!1).position.set(0,1.02,-.215),xe(new Oe(.34,.045,.012),Dt,yn,!1).position.set(0,1.005,-.225);const mn=new wt;Sn.add(mn);const Gs=new se(new yt(.044,.05,.09,10),zn);Gs.position.set(0,1.235,-.305),mn.add(Gs);const Hs=xe(new li(.103,20,16),zs,mn);Hs.position.set(0,1.305,-.305),Hs.scale.set(.96,1,1.04),xe(new Oe(.05,.012,.19),Mn,mn,!1).position.set(0,1.402,-.305);const wi=new se(new Ge(.14,.062,.026,2,.012),ks);wi.position.set(0,1.318,-.196),wi.rotation.x=-.12,mn.add(wi);const v=new se(new Oe(.075,.028,.02),gt);v.position.set(0,1.268,-.207),mn.add(v),xe(new Oe(.055,.012,.09),gt,mn,!1).position.set(0,1.408,-.29);const H=[{base:Math.PI,sx:-1,pole:new U(-.32,-1,-.12)},{base:0,sx:1,pole:new U(.32,-1,-.12)}].map(({base:fe,sx:Ee,pole:Fe})=>{const tt=new wt;Sn.add(tt);const lt=new yt(.046,.04,1,10),pt=new se(lt,zn);pt.userData.baseLen=1,tt.add(pt);const qe=new yt(.04,.033,1,10),Bt=new se(qe,zn);Bt.userData.baseLen=1,tt.add(Bt);const Ht=new se(new li(.04,10,8),zn);tt.add(Ht);const ln=new se(new li(.05,10,8),zn);tt.add(ln);const Ti=new se(new yt(.049,.049,.05,10),Mn);Ti.userData.baseLen=1,tt.add(Ti);const us=new se(new Ge(.095,.072,.115,2,.028),cs);return tt.add(us),{base:fe,arm:tt,upper:pt,lower:Bt,elbowJoint:Ht,shoulderJoint:ln,cuff:Ti,hand:us,pole:Fe,shoulder:new U(Ee*.19,1.225,-.3),length:.42}}),V=new Bn(-.38,0,0,"XYZ"),ge=new U,Re=new U,pe=new U,ye=new U(.43,1.085,.13);Se={group:Sn,arms:H,head:mn,torso:yn,shiftTimer:0,shift(){this.shiftTimer=.42},update(fe,Ee={}){this.shiftTimer=Math.max(0,this.shiftTimer-(fe||0));const Fe=this.shiftTimer>0?1-this.shiftTimer/.42:0,tt=Math.sin(Math.PI*Math.min(1,Fe)),lt=Math.max(-1,Math.min(1,Ee.steer||0));V.set(-.38,0,lt,"XYZ");for(const qe of H)ge.set(Math.cos(qe.base)*.16,Math.sin(qe.base)*.16,-.014).applyEuler(V),ge.x+=0,ge.y+=.842,ge.z+=.315,qe.base===0?pe.copy(ge).lerp(ye,tt):pe.copy(ge),I0(qe.shoulder,pe,qe.length,qe.length,qe.pole,Re),Hl(qe.upper,qe.shoulder,Re),Hl(qe.lower,Re,pe),qe.elbowJoint.position.copy(Re),qe.shoulderJoint.position.copy(qe.shoulder),qe.cuff.position.copy(pe).lerp(Re,.12),qe.cuff.quaternion.copy(qe.lower.quaternion),qe.hand.position.copy(pe),qe.hand.quaternion.copy(qe.lower.quaternion);const pt=Math.sin((Ee.time||0)*1.9)*.0022;mn.position.y=pt,yn.position.y=pt*.45}};const Ie=document.createElement("canvas");Ie.width=160,Ie.height=112;const Ue=Ie.getContext("2d"),je=new Os(Ie);je.colorSpace=Xt,je.minFilter=Ut,je.magFilter=Ut,je.generateMipmaps=!1;let Le=0;He=fe=>{fe!==Le&&(Le=fe,Ue.fillStyle="#050609",Ue.fillRect(0,0,160,112),Ue.strokeStyle="rgba(55,230,255,0.35)",Ue.lineWidth=3,Ue.strokeRect(5,5,150,102),Ue.textAlign="center",Ue.fillStyle="#37e6ff",Ue.font="700 13px Arial, Helvetica, sans-serif",Ue.fillText("MARCHA",80,24),Ue.fillStyle="#ffd319",Ue.shadowColor="#ff8a1a",Ue.shadowBlur=16,Ue.font="italic 900 72px Arial, Helvetica, sans-serif",Ue.fillText(String(fe),80,93),Ue.shadowBlur=0,je.needsUpdate=!0)},He(1,!0);const et=new wt;et.position.set(-.37,1.072,.292),et.rotation.x=-.24,r.add(et),xe(new Ge(.19,.13,.05,2,.02),gt,et,!1);const Lt=new se(new It(.155,.102),new dt({map:je,toneMapped:!1}));Lt.position.z=-.027,Lt.rotation.y=Math.PI,et.add(Lt);for(let fe=0;fe<4;fe++){const Ee=new se(new si(.0072,10),new dt({color:2363668}));Ee.position.set(-.054+fe*.036,.074,-.027),Ee.rotation.y=Math.PI,Ee.userData.on=fe<2?3407718:fe<3?16756768:16722452,et.add(Ee),at.push(Ee)}const ut=(fe,Ee=.028)=>new yt(Ee,Ee,fe,10);for(const fe of[-1,1]){const Ee=new se(ut(.56),N);Ee.position.set(fe*.62,1.16,-.98),r.add(Ee);const Fe=new se(ut(.58),N);Fe.position.set(fe*.6,1.22,-1.07),Fe.rotation.x=.5,r.add(Fe)}const xt=new se(ut(1.24),N);xt.rotation.z=Math.PI/2,xt.position.set(0,1.44,-.98),r.add(xt);const Ot=new se(ut(1.24),N);Ot.rotation.z=Math.PI/2,Ot.position.set(0,1.3,-.93),r.add(Ot);for(const fe of[-1,1]){const Ee=new se(ut(1.1,.024),N);Ee.rotation.x=Math.PI/2,Ee.position.set(fe*.665,1.02,-.32),r.add(Ee);const Fe=new se(ut(.34,.04),gt);Fe.rotation.x=Math.PI/2,Fe.position.set(fe*.665,1.02,-.18),r.add(Fe);const tt=new se(ut(.72,.024),N);tt.position.set(fe*.665,1.15,-.72),tt.rotation.x=.72,r.add(tt)}for(const fe of[-1,1]){xe(new Ge(.05,.44,1.45,2,.02),be,r).position.set(fe*.72,.97,-.25),xe(new Ge(.12,.06,.5,2,.025),Qe,r,!1).position.set(fe*.66,1,-.05),xe(new Ge(.1,.014,.12,2,.006),nt,r,!1).position.set(fe*.655,1.035,.06),xe(new Ge(.03,.026,.13,2,.008),gt,r,!1).position.set(fe*.702,1.06,.1),xe(new Oe(.004,.004,1.1),_t,r,!1).position.set(fe*.7,1.115,-.28);const qe=new se(new yt(.075,.075,.02,20),kt);qe.rotation.z=Math.PI/2,qe.position.set(fe*.695,.93,.02),r.add(qe);const Bt=new se(new Qi(.075,.008,6,22),st);Bt.rotation.y=Math.PI/2,Bt.position.set(fe*.69,.93,.02),r.add(Bt)}const Ce=new se(new It(1.18,.4),new dt({map:A0(),transparent:!0,side:xn,depthWrite:!1}));Ce.rotation.y=Math.PI/2,Ce.position.set(-.735,1.2,-.34),r.add(Ce);const Gt=new se(new yt(.008,.008,1.2,8),st);Gt.rotation.x=Math.PI/2,Gt.position.set(-.735,1.405,-.34),r.add(Gt),xe(new Oe(1.38,.02,1.58),be,r,!1).position.set(0,1.408,-.42);const Pn=xe(new Ge(.2,.055,.04,2,.015),gt,r,!1);Pn.position.set(0,1.402,.375),Pn.rotation.x=-.2,Ne=new se(new It(.17,.038),new De({color:2570314,roughness:.08,metalness:1,envMapIntensity:1.6})),Ne.position.set(0,1.402,.351),Ne.rotation.y=Math.PI,r.add(Ne),xe(new Oe(.022,.07,.022),gt,r,!1).position.set(0,1.432,.39);const fi=new ji(12834031,.7,2.4,2);fi.position.set(0,1.3,-.42),r.add(fi)}const Ve=[_r(-.88,1.43,-1,!0),_r(.88,1.43,1,!0),_r(-.91,-1.45,-1,!1),_r(.91,-1.45,1,!1)];for(const be of Ve)i.add(be.group);const Ct=[];r.traverse(be=>{be.isMesh&&be.material===rn.taillight&&Ct.push(be.material)});function Pt(be){a.color.set(be)}return{root:i,body:r,wheels:Ve,paintMat:a,windshieldGlass:ie,windshieldGroup:ae,sideGlassParts:ee,roofParts:q,steeringWheel:he,needles:ot,shiftLights:at,driver:Se,driverSeatParts:Rt,floorMatParts:ze,setGear:He,dashScreen:Ae,mirrorGlass:Ne,exhaustTips:I,setPaint:Pt}}const Xn=512,ei=186,xr="#2fd8ff",va="#ffd319",Wl="#ff3b2f",Xl="#eaf6ff",Ma="rgba(160,180,196,0.65)";class D0{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Xn,this.canvas.height=ei,this.ctx=this.canvas.getContext("2d"),this.texture=new Os(this.canvas),this.texture.colorSpace=Xt,this.texture.minFilter=Ut,this.texture.magFilter=Ut,this.texture.generateMipmaps=!1,this.texture.anisotropy=4,this.material=new dt({map:this.texture,toneMapped:!1}),this._last=""}draw(e){const t=this.ctx,n=e.time||0,i=e.mode==="race"||e.mode==="result",r=Math.max(0,Math.round(e.speed||0)),a=Math.max(0,Math.min(1,e.rpm||0)),o=e.gear||1,c=Math.max(0,e.distance||0),l=e.finish||402.336,h=e.gap,f=e.et;t.fillStyle="#04121a",t.fillRect(0,0,Xn,ei),t.strokeStyle="rgba(47,216,255,0.06)",t.lineWidth=1;for(let b=0;b<Xn;b+=16)t.beginPath(),t.moveTo(b+.5,0),t.lineTo(b+.5,ei),t.stroke();for(let b=0;b<ei;b+=16)t.beginPath(),t.moveTo(0,b+.5),t.lineTo(Xn,b+.5),t.stroke();const u=t.createLinearGradient(0,0,0,ei);u.addColorStop(0,"rgba(120,210,255,0.10)"),u.addColorStop(.5,"rgba(120,210,255,0.02)"),u.addColorStop(1,"rgba(0,0,0,0.25)"),t.fillStyle=u,t.fillRect(0,0,Xn,ei),t.textBaseline="alphabetic",t.textAlign="left",t.fillStyle=xr,t.font="italic 900 15px Arial, Helvetica, sans-serif",t.fillText("DRAG BRASIL",16,24),t.textAlign="right",t.fillStyle=i?va:xr,t.font="700 14px Arial, Helvetica, sans-serif";const p=i?e.et!=null?`FIM · ${e.et.toFixed(3)}s`:e.phase||"CORRIDA":"MOTOR PRONTO";t.fillText(p,Xn-16,24),t.strokeStyle="rgba(47,216,255,0.22)",t.beginPath(),t.moveTo(16,34),t.lineTo(Xn-16,34),t.stroke(),t.textAlign="left",t.fillStyle=Xl,t.font="italic 900 78px Arial, Helvetica, sans-serif",t.fillText(String(r),18,118),t.fillStyle=xr,t.font="italic 900 16px Arial, Helvetica, sans-serif",t.fillText("KM/H",20,142),t.fillStyle=Ma,t.font="700 14px Arial, Helvetica, sans-serif";const _=`${Math.min(Math.round(c),Math.round(l))} / ${Math.round(l)} M`;if(t.fillText(_,20,168),h!=null&&f==null){t.fillStyle=h>=0?"#6dff9a":"#ff8a6d",t.font="700 14px Arial, Helvetica, sans-serif";const b=h>=0?"+":"−";t.fillText(`RIVAL ${b}${Math.abs(h).toFixed(0)} M`,178,168)}const S=250,m=244,d=16,M=2,R=(m-M*(d-1))/d;t.fillStyle="rgba(47,216,255,0.14)",t.fillRect(S,56,m,22);for(let b=0;b<d;b++){if(!(b/d<a))continue;const g=b/(d-1);t.fillStyle=g>.86?Wl:g>.68?va:xr,t.fillRect(S+b*(R+M),56,R,22)}a>.965&&Math.floor(n*12)%2===0&&(t.strokeStyle=Wl,t.lineWidth=2,t.strokeRect(S-2,54,m+4,26)),t.textAlign="left",t.fillStyle=Ma,t.font="700 13px Arial, Helvetica, sans-serif",t.fillText("RPM",S,98),t.fillStyle=Xl,t.font="italic 900 18px Arial, Helvetica, sans-serif",t.fillText(`${Math.round(a*9)}.0k`,S+38,98),t.textAlign="left",t.fillStyle=Ma,t.font="700 13px Arial, Helvetica, sans-serif",t.fillText("MARCHA",366,100),t.fillStyle=va,t.font="italic 900 54px Arial, Helvetica, sans-serif",t.fillText(String(o),366,152);const T=Math.floor(n*.35%1*ei);t.fillStyle="rgba(120,210,255,0.05)",t.fillRect(0,T,Xn,2),t.strokeStyle="rgba(47,216,255,0.35)",t.lineWidth=2,t.strokeRect(1,1,Xn-2,ei-2),this.texture.needsUpdate=!0}}class N0{constructor(e,t){this.renderer=e,this.scene=t,this.width=384,this.height=128,this.target=new Cn(this.width,this.height,{depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=Xt,this.target.texture.minFilter=Ut,this.target.texture.magFilter=Ut,this.target.texture.wrapS=bn,this.target.texture.wrapT=bn,this.target.texture.repeat.x=-1,this.target.texture.offset.x=1,this.camera=new un(46,this.width/this.height,.1,420),this.lights=[],this.material=new dt({map:this.target.texture,toneMapped:!1}),this.material.color.setScalar(1.2)}update(e){const t=e.position;this.camera.position.set(t.x,1.42,t.z-2.5),this.camera.lookAt(t.x,.75,t.z-30),this.camera.updateMatrixWorld(),this.lights.length||this.scene.traverse(c=>{c.isLight&&this.lights.push([c,c.intensity])});const n=this.renderer,i=n.getRenderTarget(),r=n.shadowMap.autoUpdate,a=e.visible,o=n.toneMappingExposure;e.visible=!1,n.shadowMap.autoUpdate=!1,n.toneMappingExposure=o*1.7;for(const[c]of this.lights)c.intensity*=2.6;n.setRenderTarget(this.target),n.render(this.scene,this.camera),n.setRenderTarget(i);for(const[c,l]of this.lights)c.intensity=l;n.toneMappingExposure=o,n.shadowMap.autoUpdate=r,e.visible=a}}class U0{constructor(){this.stream=null,this.active=!1,this.fps=15,this.fit="contain",this.onchange=null,this.onmeta=null,this._last=0,this._ended=this._ended.bind(this),this.video=document.createElement("video"),this.video.muted=!0,this.video.playsInline=!0,this.video.autoplay=!0,this.video.setAttribute("playsinline",""),this.video.addEventListener("loadedmetadata",()=>this._onMeta()),this.video.addEventListener("resize",()=>this._onMeta()),this.dashCanvas=this._canvas(512,186),this.mirrorCanvas=this._canvas(512,114),this.dashTexture=this._texture(this.dashCanvas),this.mirrorTexture=this._texture(this.mirrorCanvas),this.dashMaterial=new dt({map:this.dashTexture,toneMapped:!1}),this.mirrorMaterial=new dt({map:this.mirrorTexture,toneMapped:!1}),this.dashMaterial.color.setScalar(1.25),this.mirrorMaterial.color.setScalar(1.25)}_canvas(e,t){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");return i.fillStyle="#04121a",i.fillRect(0,0,e,t),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",n}_texture(e){const t=new Os(e);return t.colorSpace=Xt,t.minFilter=Ut,t.magFilter=Ut,t.generateMipmaps=!1,t}get videoSize(){return{width:this.video.videoWidth||0,height:this.video.videoHeight||0}}_onMeta(){this.onmeta?.(this.videoSize),this._last=0}async start({fps:e=15,fit:t="contain"}={}){if(!navigator.mediaDevices?.getDisplayMedia){const i=new Error("captura de tela não suportada neste navegador");throw i.code="unsupported",i}const n=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:{ideal:e,max:e},width:{ideal:1920},height:{ideal:1080}},audio:!1});return this.attach(n),this.setFps(e),this.fit=t,n}attach(e){if(this.detach(),!!e){this.stream=e,this.video.srcObject=e,this.video.play().catch(()=>{}),this.active=!0;for(const t of e.getVideoTracks())t.addEventListener("ended",this._ended);this._last=0,this.onchange?.("start")}}_ended(){this.active&&this.stop("ended")}setFps(e){this.fps=Math.max(1,Math.min(60,Number(e)||15));for(const t of this.stream?.getVideoTracks()||[])t.applyConstraints({frameRate:{ideal:this.fps,max:this.fps}}).catch(()=>{})}setFit(e){this.fit=e==="cover"?"cover":"contain"}update(e=performance.now()){if(!this.active||this.video.readyState<2)return;const t=1e3/this.fps;e-this._last<t||(this._last=e,this._blit(this.dashCanvas)&&(this.dashTexture.needsUpdate=!0),this._blit(this.mirrorCanvas)&&(this.mirrorTexture.needsUpdate=!0))}_blit(e){const t=this.video.videoWidth,n=this.video.videoHeight;if(!t||!n)return!1;const i=e.getContext("2d"),r=e.width,a=e.height,c=this.fit==="cover"?Math.max(r/t,a/n):Math.min(r/t,a/n),l=t*c,h=n*c,f=(r-l)/2,u=(a-h)/2;i.fillStyle="#030b11",i.fillRect(0,0,r,a),i.save();try{i.drawImage(this.video,f,u,l,h)}catch{return i.restore(),!1}const p=i.createLinearGradient(0,0,0,a);return p.addColorStop(0,"rgba(190,235,255,0.10)"),p.addColorStop(.45,"rgba(190,235,255,0.02)"),p.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=p,i.fillRect(0,0,r,a),i.restore(),!0}stop(e="stop"){this.detach(),this.onchange?.(e)}detach(){if(this.stream)for(const e of this.stream.getTracks())e.removeEventListener("ended",this._ended),e.stop();this.stream=null,this.video.srcObject=null,this.active=!1}}const xi=7.2,Vt=xi+1.05,F0=2.15,O0=[[0,-80],[0,-20],[0,40],[0,120],[0,200],[0,270],[10,320],[38,352],[78,362],[118,360],[152,352],[178,334],[186,306],[200,282],[226,274],[262,280],[298,296],[322,320],[350,334],[382,330],[410,322],[438,300],[450,270],[446,238],[424,216],[394,212],[358,210],[318,212],[282,218],[252,228],[228,240],[204,238],[184,232],[168,220],[158,202],[154,180],[152,150],[150,120],[148,90],[148,60],[156,40],[176,28],[200,26],[240,26],[280,32],[312,48],[344,54],[378,48],[400,30],[430,22],[470,20],[510,26],[540,36],[560,50],[572,74],[576,102],[578,140],[580,180],[592,212],[614,232],[642,238],[690,240],[740,236],[800,228],[860,214],[920,206],[980,208]],ql=86,B0=10.4,z0=7,k0=3.1;function G0(){const s=new wt,e=new wt;s.add(e);const t=new hu(O0.map(([y,P])=>new U(y,0,P)),!1,"centripetal",.5),n=t.getLength(),i=Math.max(500,Math.round(n/2)),r=n/i,a=t.getSpacedPoints(i),o=new Float32Array(i+1),c=new Float32Array(i+1),l=new Float32Array(i+1),h=new Float32Array(i+1),f=new Float32Array(i+1);for(let y=0;y<=i;y++){const P=a[Math.max(0,y-1)],F=a[Math.min(i,y+1)];let O=F.x-P.x,X=F.z-P.z;const re=Math.hypot(O,X)||1;O/=re,X/=re,o[y]=O,c[y]=X,l[y]=Math.atan2(O,X)}for(let y=0;y<=i;y++){const P=l[Math.max(0,y-1)];let O=l[Math.min(i,y+1)]-P;for(;O>Math.PI;)O-=Math.PI*2;for(;O<-Math.PI;)O+=Math.PI*2;h[y]=O/(2*r)}for(let y=0;y<=i;y++){let P=0,F=0;for(let O=-4;O<=4;O++){const X=Math.max(0,Math.min(i,y+O)),re=5-Math.abs(O);P+=h[X]*re,F+=re}f[y]=P/F}let u=0,p=1/0;for(let y=0;y<=i;y++){const P=a[y].x*a[y].x+a[y].z*a[y].z;P<p&&(p=P,u=y)}const _=u*r,S=Math.max(_+900,n-150),m=Math.min(i,Math.round(S/r)),d=S-_,M=new Float32Array(i+1),R=new Uint8Array(i+1);for(let y=0;y<=i;y++){const P=Math.abs(f[y]),F=P>1e-4?Math.sqrt(B0/P):ql;M[y]=Math.min(ql,F)}for(let y=m-1;y>=0;y--)M[y]=Math.min(M[y],Math.sqrt(M[y+1]*M[y+1]+2*z0*r));for(let y=u+1;y<=m;y++)M[y]=Math.min(M[y],Math.sqrt(M[y-1]*M[y-1]+2*k0*r));for(let y=0;y<=i;y++){const F=M[Math.min(i,y+1)]-M[y];R[y]=F<-.045?1:F>.045?2:0}const T=new Float32Array(i+1);for(let y=0;y<=i;y++){let P=0;for(let F=-5;F<=5;F++)P+=f[Math.max(0,Math.min(i,y+F))];T[y]=Math.max(-2.4,Math.min(2.4,P/11*120))}const b=[];let A=!1,g=null;for(let y=u;y<=i;y++){const P=Math.abs(f[y]);P>.0105?(A||(A=!0,g={entry:y*r,apex:y*r,exit:y*r,radius:1/P,dir:Math.sign(f[y]),speed:M[y]}),P>1/g.radius&&(g.radius=1/P,g.apex=y*r,g.speed=M[y]),g.exit=y*r):A&&(A=!1,g.exit-g.entry>14&&b.push(g))}A&&b.push(g);const E=(y,P,F)=>y+(P-y)*F;function B(y,P={}){const F=Math.max(0,Math.min(i-1e-4,y/r)),O=Math.floor(F),X=F-O,re=E(o[O],o[O+1],X),K=E(c[O],c[O+1],X),de=1/(Math.hypot(re,K)||1);return P.x=E(a[O].x,a[O+1].x,X),P.z=E(a[O].z,a[O+1].z,X),P.tx=re*de,P.tz=K*de,P.nx=P.tz,P.nz=-P.tx,P.heading=Math.atan2(P.tx,P.tz),P.kappa=E(f[O],f[O+1],X),P.s=y,P}function D(y,P,F,O=0){const X=[],re=[],K=[];for(let Te=0;Te<=i;Te++){const le=c[Te],Ke=-o[Te],ht=a[Te].x+le*y,St=a[Te].z+Ke*y;if(X.push(ht+le*(-P/2),F,St+Ke*(-P/2)),X.push(ht+le*(P/2),F,St+Ke*(P/2)),re.push(0,Te*r*(O||1/9),1,Te*r*(O||1/9)),Te<i){const At=Te*2;K.push(At,At+2,At+1,At+1,At+2,At+3)}}const de=new qt;return de.setAttribute("position",new Tt(X,3)),de.setAttribute("uv",new Tt(re,2)),de.setIndex(K),de.computeVertexNormals(),de}function z(y,P,F=0){const O=[],X=[],re=[];for(let de=0;de<=i;de++){const Te=c[de],le=-o[de],Ke=a[de].x+Te*y,ht=a[de].z+le*y;if(O.push(Ke,F,ht),O.push(Ke,F+P,ht),X.push(de*r*.2,0,de*r*.2,1),de<i){const St=de*2;re.push(St,St+1,St+2,St+1,St+3,St+2)}}const K=new qt;return K.setAttribute("position",new Tt(O,3)),K.setAttribute("uv",new Tt(X,2)),K.setIndex(re),K.computeVertexNormals(),K}const k=new ui().setFromPoints(a),$=(k.min.x+k.max.x)/2,I=(k.min.z+k.max.z)/2,q=k.max.x-k.min.x+900,ee=k.max.z-k.min.z+900,W=new se(new It(q,ee),new De({color:526606,roughness:1,metalness:0}));W.rotation.x=-Math.PI/2,W.position.set($,-.06,I),W.receiveShadow=!0,s.add(W);const ce=new se(D(0,xi*2+9,-.015),new De({color:1315867,roughness:.97}));ce.receiveShadow=!0,s.add(ce);const Z=M0();Z.wrapS=Z.wrapT=Ls;const ie=new se(D(0,xi*2,0),new De({map:Z,color:11119026,roughness:.92,metalness:.02}));ie.receiveShadow=!0,s.add(ie);const ae=new De({color:14276297,roughness:.7,emissive:2236958,emissiveIntensity:.5}),Pe=new De({color:14201898,roughness:.7,emissive:3812352,emissiveIntensity:.6});for(const y of[-1,1]){const P=new se(D(y*(xi-.35),.16,.012),ae);s.add(P);const F=Q(y*(xi+.42),.85);s.add(F)}for(const y of[-.18,.18])s.add(new se(D(y,.1,.013),Pe));const Xe=S0();for(const y of[_,S]){const P=B(y),F=new wt;F.position.set(P.x,.02,P.z),F.rotation.y=P.heading;const O=new se(new It(xi*2,1.2),new dt({map:Xe}));O.rotation.x=-Math.PI/2,F.add(O),s.add(F)}function Q(y,P){const F=[],O=[],X=[];for(let K=0;K<=i;K++){const de=c[K],Te=-o[K],le=a[K].x+de*y,Ke=a[K].z+Te*y;F.push(le+de*(-P/2),.018,Ke+Te*(-P/2)),F.push(le+de*(P/2),.018,Ke+Te*(P/2));const St=Math.floor(K*r/3)%2===0?[.85,.11,.12]:[.8,.78,.74];if(O.push(...St,...St),K<i){const At=K*2;X.push(At,At+2,At+1,At+1,At+2,At+3)}}const re=new qt;return re.setAttribute("position",new Tt(F,3)),re.setAttribute("color",new Tt(O,3)),re.setIndex(X),re.computeVertexNormals(),new se(re,new De({vertexColors:!0,roughness:.75}))}{const y=[],P=[],F=[];for(let K=0;K<=m;K++){const de=c[K],Te=-o[K],le=a[K].x+de*T[K],Ke=a[K].z+Te*T[K],ht=.19;y.push(le+de*-ht,.035,Ke+Te*-ht,le+de*ht,.035,Ke+Te*ht);const St=R[K],At=St===1?[1,.1,.07]:St===2?[.1,1,.34]:[1,.62,.06],on=St===0?.28:.85;if(P.push(At[0]*on,At[1]*on,At[2]*on,At[0]*on,At[1]*on,At[2]*on),K<m){const pn=K*2;F.push(pn,pn+2,pn+1,pn+1,pn+2,pn+3)}}const O=new qt;O.setAttribute("position",new Tt(y,3)),O.setAttribute("color",new Tt(P,3)),O.setIndex(F);const X=new dt({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Dn,toneMapped:!1}),re=new se(O,X);re.renderOrder=2,s.add(re)}const he=new De({color:2303020,roughness:.55,metalness:.6,side:xn}),Ae=new De({color:5263965,roughness:.32,metalness:.85});for(const y of[-1,1]){const P=new se(z(y*Vt,.95),he);P.receiveShadow=!0,s.add(P);const F=new se(D(y*Vt,.32,.96),Ae);s.add(F);for(let O=_-50;O<S+60;O+=40){const X=B(O),re=new se(new Oe(.26,.08,.05),new dt({color:y>0?16765721:3663615}));re.position.set(X.x+X.nx*(y*(Vt-.03)),.72,X.z+X.nz*(y*(Vt-.03))),re.rotation.y=X.heading,s.add(re)}}const Ne=[["DRAG BRASIL","#0b0b12","#ffd319","#ff5a12"],["RUA É RUA","#101018","#37e6ff","#1b63ff"],["TURBO","#120c08","#ff8a3d","#ff5a12"],["FREIA ANTES","#0b0f0c","#2dff86","#1f9c55"],["SEM MEDO","#0e0a12","#e8e6df","#8c2bff"],["ÚLTIMA RETA","#0f0b0b","#ff2e4d","#7d0719"]];for(let y=0;y<34;y++){const P=_-20+y*Math.max(34,d/30);if(P>S+30)break;const F=B(P),O=y%2?1:-1,X=new wt;X.position.set(F.x,0,F.z),X.rotation.y=F.heading;const re=new se(new It(7.5,.7),new dt({map:Bl(...Ne[y%Ne.length]),transparent:!0}));re.position.set(O*(Vt-.02),.5,0),re.rotation.y=O>0?-Math.PI/2:Math.PI/2,X.add(re),s.add(X)}const Se=w0(),He=Ir(),Rt=new De({color:1908261,roughness:.6,metalness:.6}),ze=new De({color:16774352,emissive:16773576,emissiveIntensity:4.2,roughness:.3});let ot=0;for(let y=_-60;y<S+120;y+=52){const P=B(y);for(const F of[-1,1]){if((Math.round(y/52)+(F>0?1:0))%2===0)continue;const O=new wt;O.position.set(P.x+P.nx*(F*(Vt+3.6)),0,P.z+P.nz*(F*(Vt+3.6))),O.rotation.y=P.heading;const X=new se(new yt(.12,.18,8.6,8),Rt);X.position.y=4.3,O.add(X);const re=new se(new Oe(-F*2.2,.1,.1),Rt);re.position.set(-F*1.05,8.5,0),O.add(re);const K=new se(new Oe(1.1,.1,.46),ze);K.position.set(-F*2,8.44,0),O.add(K);const de=new bs(new qi({map:He,color:16770736,transparent:!0,opacity:.55,blending:Dn,depthWrite:!1}));de.scale.set(7,5,1),de.position.set(-F*2,8.2,0),O.add(de);const Te=new se(new It(24,24),new dt({map:Se,transparent:!0,opacity:.35,blending:Dn,depthWrite:!1}));if(Te.rotation.x=-Math.PI/2,Te.position.set(-F*2.4,.03,0),O.add(Te),s.add(O),ot++%8===0&&Math.abs(y-_)<d){const le=new ji(16769968,260,60,2);le.position.set(P.x+P.nx*(F*(Vt+2)),8.2,P.z+P.nz*(F*(Vt+2))),s.add(le)}}}const at=[];for(let y=u+8;y<m-8&&!(!(R[y]!==1||R[y-1]===1)&&!(M[y]>27)&&!at.some(P=>Math.abs(P-y*r)<90)&&(at.push(y*r),at.length>=7));y++);for(const y of at){const P=B(y-16),F=zl("FREIA",`${Math.round(M[Math.round(y/r)]*3.6)} km/h`);for(const O of[-1,1]){const X=new wt;X.position.set(P.x,0,P.z),X.rotation.y=P.heading;const re=new se(new It(2.3,2.3),new dt({map:F,transparent:!0}));re.position.set(O*(Vt+1),2,0),re.rotation.y=O>0?-Math.PI/2:Math.PI/2,X.add(re);const K=new se(new Oe(.12,1,.12),he);K.position.set(O*(Vt+1),.5,0),X.add(K),s.add(X)}}for(let y=300;y<d;y+=300){const P=B(_+y),F=zl(`${y}m`,"CORRIDA DE RUA");for(const O of[-1,1]){const X=new se(new It(2.1,2.1),new dt({map:F}));X.position.set(P.x+P.nx*(O*(Vt+1)),1.9,P.z+P.nz*(O*(Vt+1))),X.rotation.y=P.heading+(O>0?-Math.PI/2:Math.PI/2),s.add(X)}}const Ve=new wt,Ct=B(_+11.5);Ve.position.set(Ct.x,0,Ct.z),Ve.rotation.y=Ct.heading,Ve.scale.set(1.15,1,1.15);const Pt=new se(new yt(.075,.1,3.2,8),new De({color:1381660,roughness:.5,metalness:.7}));Pt.position.y=1.6,Ve.add(Pt);const be=new se(new Oe(.8,.12,.8),he);be.position.y=.06,Ve.add(be);const ke=new se(new Oe(.46,1.95,.16),new De({color:526348,roughness:.35,metalness:.4}));ke.position.set(0,2.35,.02),Ve.add(ke);const nt=new li(.135,12,12),Qe={};function st(y,P,F){const O=new De({color:1381660,emissive:F,emissiveIntensity:.06,roughness:.25}),X=new se(nt,O);X.position.set(0,P,.13),Ve.add(X);const re=new bs(new qi({map:He,color:F,transparent:!0,opacity:0,blending:Dn,depthWrite:!1}));re.scale.set(.52,.52,1),re.position.set(0,P,.22),Ve.add(re),Qe[y]={mesh:X,mat:O,halo:re,color:F}}st("a1",3.02,16753664),st("a2",2.76,16753664),st("a3",2.5,16753664),st("green",2.18,3014534),st("red",1.86,16723533),s.add(Ve);{const y=B(_-1),P=new wt;P.position.set(y.x,0,y.z),P.rotation.y=y.heading;for(const Te of[-1,1]){const le=new se(new Oe(.45,7.4,.45),he);le.position.set(Te*(Vt+1.4),3.7,0),le.castShadow=!0,P.add(le)}const F=new se(new Oe((Vt+1.4)*2+.5,.35,.45),he);F.position.y=7.3,P.add(F);const O=document.createElement("canvas");O.width=1024,O.height=256;const X=O.getContext("2d");X.fillStyle="#06060a",X.fillRect(0,0,1024,256),X.strokeStyle="#ff5a12",X.lineWidth=8,X.strokeRect(8,8,1008,240),X.fillStyle="#ffd319",X.font="italic 900 132px Arial, Helvetica, sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText("DRAG BRASIL",512,118),X.fillStyle="#ff5a12",X.font="700 30px Arial, Helvetica, sans-serif",X.fillText("R U A   ·   S E M   L I M I T E",512,208);const re=new Os(O);re.colorSpace=Xt;const K=new se(new It(13,3.2),new dt({map:re,transparent:!0}));K.position.set(0,5.6,-.28),K.rotation.y=Math.PI,P.add(K);const de=new bs(new qi({map:He,color:16747050,transparent:!0,opacity:.5,blending:Dn,depthWrite:!1}));de.scale.set(20,9,1),de.position.set(0,5.6,-.4),P.add(de),s.add(P),s.userData.logoGlow=de}const kt=Bl(`CHEGADA · ${(d/1e3).toFixed(2)} km`,"#0a0a10","#ffd319","#ff2e4d"),Dt=[];{const y=B(S),P=new wt;P.position.set(y.x,0,y.z),P.rotation.y=y.heading;for(const X of[-1,1]){const re=new se(new Oe(.55,8,.55),he);re.position.set(X*(Vt+.2),4,0),re.castShadow=!0,P.add(re)}const F=new se(new Oe(Vt*2+2,.4,.5),he);F.position.y=7.9,P.add(F);const O=new se(new It(15,2.5),new dt({map:kt,transparent:!0}));O.position.set(0,6.55,-.3),O.rotation.y=Math.PI,P.add(O);for(let X=0;X<9;X++){const re=new se(new li(.15,8,8),new dt({color:16765721}));re.position.set(-7+X*1.75,8.12,-.28),P.add(re),Dt.push(re)}s.add(P)}const N=new De({color:1184281,roughness:.9}),gt=T0(),_t=new dt({map:gt,transparent:!0,opacity:.55,color:9079449});{const y=B(_-12);for(const P of[-1,1]){const F=new wt;F.position.set(y.x,0,y.z),F.rotation.y=y.heading;for(let O=0;O<4;O++){const X=new se(new Oe(5,1,2.4),N);X.position.set(P*(Vt+7+O*1.8),.5+O*1,0),X.receiveShadow=!0,F.add(X);const re=new se(new It(24,.9),_t);re.rotation.y=P>0?-Math.PI/2:Math.PI/2,re.position.set(P*(Vt+6+O*1.8),.95+O*1,0),F.add(re)}s.add(F)}}const vt=y0(),ve=[.55,.8,1.1].map(y=>new De({color:658194,roughness:.9,metalness:.2,map:vt,emissiveMap:vt,emissive:16777215,emissiveIntensity:y})),Mt=(y,P)=>y+Math.random()*(P-y);for(let y=0;y<46;y++){const P=_-60+(d+160)*(y/45)+Mt(-30,30),F=B(Math.max(0,Math.min(n-10,P))),O=y%2?1:-1,X=Mt(20,48),re=Mt(9,22),K=Mt(9,20),de=Mt(13,58),Te=new se(new Oe(re,de,K),ve[y%3]);Te.position.set(F.x+F.nx*O*X,de/2-.5,F.z+F.nz*O*X),Te.rotation.y=F.heading+Mt(-.25,.25),s.add(Te);const le=new se(new Oe(re*.9,1.6,.15),new dt({color:y%3===0?16757082:y%3===1?3663615:16734738,transparent:!0,opacity:.45}));le.position.set(F.x+F.nx*O*(X-K/2-.1),1.2,F.z+F.nz*O*(X-K/2-.1)),le.rotation.y=F.heading,s.add(le)}const Be=new qt,We=800,w=new Float32Array(We*3);for(let y=0;y<We;y++){const P=320+Math.random()*520,F=Math.random()*Math.PI*2,O=Math.random()*Math.PI*.42;w[y*3]=Math.cos(F)*Math.cos(O)*P,w[y*3+1]=Math.sin(O)*P+30,w[y*3+2]=Math.sin(F)*Math.cos(O)*P}Be.setAttribute("position",new fn(w,3));const x=new Lc(Be,new Pc({color:13621503,size:1.7,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,fog:!1}));e.add(x);const G=new se(new si(16,40),new dt({color:16051930,fog:!1}));G.position.set(-150,120,-260),G.lookAt(0,30,0),e.add(G);const oe=new bs(new qi({map:He,color:13621503,transparent:!0,opacity:.6,blending:Dn,depthWrite:!1,fog:!1}));oe.scale.set(100,100,1),oe.position.set(-150,120,-262),e.add(oe);let ne={a:[!1,!1,!1],green:!1,red:!1};function ue(y){ne=y;const P=["a1","a2","a3"];for(let F=0;F<3;F++){const O=Qe[P[F]],X=!!y.a[F];O.mat.emissiveIntensity=X?7:.06,O.halo.material.opacity=X?.85:0}for(const F of["green","red"]){const O=Qe[F],X=F==="green"?!!y.green:!!y.red;O.mat.emissiveIntensity=X?7:.05,O.halo.material.opacity=X?.9:0}}ue(ne);function _e(y){const P=Math.max(0,Math.min(i,Math.round(y/r)));return M[P]}function J(y){const P=Math.max(0,Math.min(i,Math.round(y/r)));return R[P]}function j(y){let P=null;for(const F of b)F.exit>y+4&&(!P||F.entry<P.entry)&&(P=F);return P}function me(y,P,F,O=0){const X=B(P);return y.position.set(X.x+X.nx*F,0,X.z+X.nz*F),y.rotation.set(0,X.heading,O,"YXZ"),X}const C=B(_);return{group:s,sky:e,setTree:ue,update(y){s.userData.logoGlow&&(s.userData.logoGlow.material.opacity=.45+Math.sin(y*1.7)*.08);for(const P of Dt)P.material.color.setHSL(.13,1,.55+Math.sin(y*3+P.position.x)*.05)},LANE:F0,HALF_WIDTH:xi,LENGTH:n,START_S:_,FINISH_S:S,FINISH:d,frameAt:B,speedAt:_e,stateAt:J,nextCorner:j,placeAt:me,corners:b,startPos:{x:C.x,z:C.z,heading:C.heading},treePosition:new U(Ct.x,2.4,Ct.z),raceLine:{profiles:M,states:R,ds:r}}}function Yl(s,e,{additive:t=!1,color:n=16777215}={}){const i=new qt,r=new Float32Array(s*3),a=new Float32Array(s),o=new Float32Array(s);for(let h=0;h<s;h++)r[h*3+1]=-1e3;i.setAttribute("position",new fn(r,3)),i.setAttribute("aSize",new fn(a,1)),i.setAttribute("aAlpha",new fn(o,1));const c=new hi({uniforms:{uTex:{value:e},uColor:{value:new Je(n)},uScale:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:t?Dn:Ki}),l=new Lc(i,c);return l.frustumCulled=!1,{geo:i,mat:c,points:l,positions:r,sizes:a,alphas:o,count:s}}class H0{constructor(e){this.scene=e,this.smoke=Yl(320,E0(),{color:14146018}),this.smoke.mat.uniforms.uScale.value=1,e.add(this.smoke.points),this.fire=Yl(120,Ir(),{additive:!0,color:16751162}),e.add(this.fire.points),this.smokeParts=Array.from({length:this.smoke.count},()=>({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1})),this.fireParts=Array.from({length:this.fire.count},()=>({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1})),this.si=0,this.fi=0,this._tmp=new U}emitSmoke(e,t=1,n=null){for(let i=0;i<Math.max(1,Math.round(t*2));i++){const r=this.smokeParts[this.si];this.si=(this.si+1)%this.smokeParts.length,r.alive=!0,r.x=e.x+(Math.random()-.5)*.3,r.y=e.y+Math.random()*.12,r.z=e.z+(Math.random()-.5)*.3;const a=.5+t*1.2;r.vx=(Math.random()-.5)*a+(n?n.x*t*.6:0),r.vy=.3+Math.random()*.7,r.vz=(Math.random()-.5)*a+(n?n.z*t*.6:0),r.max=1.1+Math.random()*1.5,r.life=r.max,r.size=26+Math.random()*26+t*16}}emitBackfire(e,t){for(let n=0;n<5;n++){const i=this.fireParts[this.fi];this.fi=(this.fi+1)%this.fireParts.length,i.alive=!0,i.x=e.x,i.y=e.y,i.z=e.z,i.vx=(Math.random()-.5)*1.4+t.x*3,i.vy=(Math.random()-.5)*.8+.3,i.vz=(Math.random()-.5)*1.4+t.z*3,i.max=.16+Math.random()*.16,i.life=i.max,i.size=14+Math.random()*16}}update(e){const t=Math.min(e,.05),n=this.smoke;for(let r=0;r<n.count;r++){const a=this.smokeParts[r];if(!a.alive){n.alphas[r]=0;continue}if(a.life-=t,a.life<=0){a.alive=!1,n.alphas[r]=0;continue}a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.vy+=.55*t,a.vx*=1-t*1.6,a.vz*=1-t*1.6;const o=a.life/a.max;n.positions[r*3]=a.x,n.positions[r*3+1]=a.y,n.positions[r*3+2]=a.z,n.sizes[r]=a.size*(1.4-o*.5),n.alphas[r]=Math.min(1,o*1.8)*.3}n.geo.attributes.position.needsUpdate=!0,n.geo.attributes.aSize.needsUpdate=!0,n.geo.attributes.aAlpha.needsUpdate=!0;const i=this.fire;for(let r=0;r<i.count;r++){const a=this.fireParts[r];if(!a.alive){i.alphas[r]=0;continue}if(a.life-=t,a.life<=0){a.alive=!1,i.alphas[r]=0;continue}a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.vx*=1-t*4,a.vy*=1-t*3,a.vz*=1-t*4;const o=a.life/a.max;i.positions[r*3]=a.x,i.positions[r*3+1]=a.y,i.positions[r*3+2]=a.z,i.sizes[r]=a.size*(.6+o*.9),i.alphas[r]=o}i.geo.attributes.position.needsUpdate=!0,i.geo.attributes.aSize.needsUpdate=!0,i.geo.attributes.aAlpha.needsUpdate=!0}clear(){for(const e of this.smokeParts)e.alive=!1;for(const e of this.fireParts)e.alive=!1;for(let e=0;e<this.smoke.count;e++)this.smoke.alphas[e]=0;for(let e=0;e<this.fire.count;e++)this.fire.alphas[e]=0;this.smoke.geo.attributes.aAlpha.needsUpdate=!0,this.fire.geo.attributes.aAlpha.needsUpdate=!0}}const $l=1.225,Es=9.81;function Wt(s,e,t){return s<e?e:s>t?t:s}function V0(s,e,t){return s+(e-s)*t}class Sa{constructor(e){this.spec=e,this.reset()}reset(){const e=this.spec;this.speed=0,this.distance=0,this.gear=1,this.engineRpm=e.idle,this.throttle=0,this.clutch=!0,this.steer=0,this.brake=0,this.accel=0,this.wheelspin=0,this.tireTemp=.25,this.shiftTimer=0,this.shiftCount=0,this.bogTimer=0,this.clutchSlip=0,this.releaseRpm=0,this.releaseQuality=1,this.lateral=0,this.lateralV=0,this.slide=0,this.wallTimer=0,this.crashed=!1,this.crashes=0,this.odo=0,this.launched=!1,this.justReleased=!1,this.justShifted=!1,this.hitWall=!1,this.redlineCut=0,this.prevClutch=!0,this.wheelRpm=0,this.time=0}get ratio(){return this.spec.gears[this.gear-1]*this.spec.finalDrive}get speedKmh(){return this.speed*3.6}get rpmNorm(){return Wt((this.engineRpm-this.spec.idle)/(this.spec.redline-this.spec.idle),0,1.12)}torqueAt(e){const t=this.spec,n=Wt(e/t.peakRpm,.12,1.6);let i=1-.52*Math.pow(n-1,2);return n>1.32&&(i*=Wt(1-(n-1.32)*.9,.35,1)),e>t.redline&&(i*=.25),Math.max(30,t.torque*i)}shiftUp(){return this.gear<this.spec.gears.length&&this.shiftTimer<=0?(this.gear++,this.shiftTimer=.13,this.shiftCount++,this.justShifted=!0,!0):!1}shiftDown(){return this.gear>1&&this.shiftTimer<=0?(this.gear--,this.shiftTimer=.13,this.justShifted=!0,!0):!1}autoShift(){if(this.shiftTimer>0)return;const e=this.wheelRpm||this.engineRpm;e>this.spec.redline-260&&this.gear<this.spec.gears.length?this.shiftUp():e<this.spec.peakRpm*.42&&this.gear>1&&this.speed<20&&this.shiftDown()}step(e,t={},n=!1){e=Math.min(e,1/30);const i=this.spec;this.time+=e,this.justReleased=!1,this.justShifted=!1,this.hitWall=!1,this.crashed=!1,this.throttle=Wt(t.throttle||0,0,1);const r=!!t.clutch;if(this.steer=Wt(t.steer||0,-1,1),this.brake=Wt(t.brake||0,0,1),this.prevClutch&&!r){this.justReleased=!0,this.releaseRpm=this.engineRpm,this.clutchSlip=.65;const b=i.launchRpm,A=Wt((this.releaseRpm-b-900)/2800,0,1),g=this.releaseRpm<b-1400;this.releaseQuality=(1-A*.24)*(g?.82:1),g&&(this.bogTimer=.55),this.speed>.4&&(this.launched=!0)}this.prevClutch=r,this.clutch=r,this.shiftTimer=Math.max(0,this.shiftTimer-e),this.bogTimer=Math.max(0,this.bogTimer-e),this.wallTimer=Math.max(0,this.wallTimer-e),this.clutchSlip>0&&(this.clutchSlip=Math.max(0,this.clutchSlip-e));const o=this.speed/(2*Math.PI*i.wheelRadius)*this.ratio*60;if(this.wheelRpm=o,n){let b=i.idle;this.clutch&&this.throttle>.03&&(b=i.idle+this.throttle*(i.redline-i.idle)),this.engineRpm+=(b-this.engineRpm)*Math.min(1,e*2.4),this.engineRpm=Wt(this.engineRpm,i.idle,i.redline),this.speed=0,this.accel=0,this.wheelspin*=Math.exp(-e*5),this.tireTemp=Math.max(.2,this.tireTemp-e*.05);return}if(this.clutch){const b=this.throttle>.03?i.idle+this.throttle*(i.redline-i.idle):i.idle;this.engineRpm+=(b-this.engineRpm)*Math.min(1,e*3),this.engineRpm=Wt(this.engineRpm,i.idle,i.redline),this.wheelspin*=Math.exp(-e*4),this.accel=0,this.applyResistance(e,!1);return}let c=o;if(this.clutchSlip>0){const b=1-this.clutchSlip/.65;c=V0(this.releaseRpm,Math.max(o,i.idle),b*b)}this.wheelspin>.35&&(c=Math.max(c,Math.min(i.redline+150,o+this.wheelspin*2200))),this.shiftTimer>0&&(c=Math.max(c,o)),this.engineRpm=Wt(Math.max(c,(this.speed>1,i.idle)),i.idle,i.redline+150);let l=this.torqueAt(this.engineRpm)*this.throttle;this.shiftTimer>0&&(l*=.06),this.bogTimer>0&&(l*=.55),this.throttle<.03&&(l*=.15);let h=l*this.ratio*.9/i.wheelRadius;const f=i.mass*Wt(this.accel,-12,18)*.15,u=Math.max(i.mass*Es*.4,i.mass*Es*.56+f),_=i.grip*(.93+this.tireTemp*.07)*this.releaseQuality*u;let S=0;h>_&&this.throttle>.15?(h=_*.74,S=1):S=Wt(h/Math.max(_,1)*.45,0,.8),this.wheelspin>.7&&this.speed<8&&(S=Math.max(S,.85)),this.wheelspin+=(S-this.wheelspin)*Math.min(1,e*7),this.tireTemp=Wt(this.tireTemp+this.wheelspin*e*.09,.2,1);let m=.5*$l*i.cdA*this.speed*this.speed+.014*i.mass*Es;this.throttle<.04&&(m+=i.mass*.45),h-=m,this.brake>0&&this.speed>.2&&(h-=this.brake*i.mass*11),this.speed<.01&&h<0&&(h=0),this.accel=h/i.mass;const d=this.speed;this.speed=Math.max(0,this.speed+this.accel*e);const M=(d+this.speed)*.5;this.distance+=M*e,this.odo+=M*e;const R=t.curvature||0,T=t.lateralLimit||3.4;if(this.speed>1.2){const b=i.grip*Es*.95,A=this.speed*this.speed*Math.abs(R);if(A>b){const g=A-b;this.lateralV-=Math.sign(R)*g*.62*e,this.speed=Math.max(0,this.speed-g*.045*e),this.slide=Wt(g/Math.max(b,1),0,1)}else this.slide=Math.max(0,this.slide-e*1.8);this.lateralV+=this.steer*this.speed*.15*e,Math.abs(this.steer)>.15&&(this.speed=Math.max(0,this.speed-Math.abs(this.steer)*e*.9)),this.speed=Math.max(0,this.speed-Math.abs(R)*this.speed*this.speed*.0045*e)}if(this.lateralV*=Math.exp(-e*1.7),this.lateral+=this.lateralV*e,Math.abs(this.lateral)>T){const b=Math.sign(this.lateral);this.lateral=b*T,this.lateralV*=-.22,this.hitWall=!0,this.wallTimer<=0?(this.speed*=.78,this.wallTimer=.7,this.crashed=!0,this.crashes++):this.speed=Math.max(0,this.speed-e*6)}this.engineRpm>=i.redline?this.redlineCut=1:this.redlineCut=Math.max(0,this.redlineCut-e*4)}applyResistance(e,t=!0){if(this.speed<=0){this.speed=0;return}const n=this.spec,i=(.5*$l*n.cdA*this.speed*this.speed+.014*n.mass*Es)/n.mass;this.speed=Math.max(0,this.speed-i*e),this.distance+=this.speed*e,this.odo+=this.speed*e,this.speed>.5&&(this.lateralV*=Math.exp(-e*2.5),this.lateral+=this.lateralV*e)}}const vi=[{id:"laranja",name:"Laranja Brasa",hex:"#ff5a12",metal:.75,rough:.24},{id:"amarelo",name:"Amarelo Taxi",hex:"#ffc400",metal:.6,rough:.28},{id:"verde",name:"Verde Macaco",hex:"#25c45b",metal:.65,rough:.26},{id:"azul",name:"Azul Noite",hex:"#1b63ff",metal:.8,rough:.22},{id:"roxo",name:"Roxo Veneno",hex:"#8c2bff",metal:.75,rough:.24},{id:"vermelho",name:"Vermelho Sangue",hex:"#d20d24",metal:.7,rough:.26},{id:"branco",name:"Branco Perola",hex:"#e8e6df",metal:.45,rough:.3},{id:"preto",name:"Preto Fosco",hex:"#16161b",metal:.35,rough:.55}],Fs=[{id:"falcao",name:"FALCÃO V8",klass:"V8 5.0",price:0,tagline:"O clássico de arrancada. Pesado, bruto, sem frescura.",mass:1450,torque:480,peakRpm:4300,redline:6800,idle:850,gears:[3.22,2.08,1.49,1.16,.92,.76],finalDrive:3.55,wheelRadius:.345,cdA:.82,grip:1.02,launchRpm:3900,color:"#ff5a12"},{id:"tubarao",name:"TUBARÃO V8",klass:"V8 6.2",price:3500,tagline:"Mais torque embaixo. Sai de lado se pisar demais.",mass:1520,torque:610,peakRpm:4100,redline:6600,idle:800,gears:[3.05,1.98,1.44,1.12,.9,.74],finalDrive:3.42,wheelRadius:.35,cdA:.86,grip:1.08,launchRpm:3700,color:"#1b63ff"},{id:"foguete",name:"FOGUETE TURBO",klass:"TURBO 2.0",price:8e3,tagline:"Leve igual papel. O turbo acorda depois dos 3 mil.",mass:1160,torque:445,peakRpm:5200,redline:7600,idle:950,gears:[3.35,2.18,1.56,1.2,.95,.79],finalDrive:3.9,wheelRadius:.33,cdA:.68,grip:1.13,launchRpm:4600,color:"#ffc400"},{id:"lenda",name:"LENDA 900",klass:"PRO MOD",price:16e3,tagline:"Gaiola, slicks e 900 cv. Não é carro, é um foguete com placa.",mass:1080,torque:880,peakRpm:5e3,redline:8200,idle:1100,gears:[3.6,2.3,1.62,1.24,1,.82],finalDrive:4.11,wheelRadius:.36,cdA:.62,grip:1.35,launchRpm:5200,color:"#8c2bff"},{id:"oval",name:"OVAL CHAMP",klass:"OVAL V8",price:2800,tagline:"Bicudo de oval com V8 de verdade. Feito pra encarar a rua.",mass:1380,torque:430,peakRpm:4400,redline:7e3,idle:850,gears:[3.15,2.02,1.45,1.13,.9,.74],finalDrive:3.55,wheelRadius:.35,cdA:.8,grip:1.02,launchRpm:3900,color:"#ffc400",kit:"oval"},{id:"ikusa",name:"IKUSA GT",klass:"GT 3.0",price:7200,tagline:"Importado da madrugada. Gira alto e não reclama das curvas.",mass:1240,torque:470,peakRpm:5600,redline:8600,idle:950,gears:[3.2,2.1,1.55,1.2,.96,.8],finalDrive:3.72,wheelRadius:.34,cdA:.68,grip:1.17,launchRpm:4800,color:"#e8e6df",kit:"gt"},{id:"hotrod",name:"HOT ROD 32",klass:"BLOWER V8",price:11500,tagline:"Blower pra fora do capô. Torque de trator, freio de coragem.",mass:1320,torque:720,peakRpm:3800,redline:6400,idle:800,gears:[2.98,1.9,1.38,1.08,.88,.73],finalDrive:3.31,wheelRadius:.37,cdA:.95,grip:.99,launchRpm:3500,color:"#8c2bff",kit:"hotrod"},{id:"steel",name:"STEEL WHEELS",klass:"STREET GT",price:15500,tagline:"GT de rua com pneus largos. O pack fechou, a rua abriu.",mass:1480,torque:640,peakRpm:4900,redline:7600,idle:900,gears:[3.1,2,1.46,1.14,.92,.77],finalDrive:3.5,wheelRadius:.36,cdA:.78,grip:1.24,launchRpm:4300,color:"#d20d24",kit:"street"}],Jc=[{id:"engine",name:"MOTOR",desc:"Comando, admissão e acerto de injeção.",effect:"+7% de torque por nível",max:6,base:650,growth:1.55},{id:"tires",name:"PNEUS",desc:"Composto mais mole e pressão de arrancada.",effect:"+5% de aderência por nível",max:6,base:550,growth:1.55},{id:"weight",name:"PESO",desc:"Bancos fora, fibra no lugar do aço.",effect:"−3% de massa por nível",max:6,base:600,growth:1.55},{id:"gearbox",name:"CÂMBIO",desc:"Relação final curta pra esticar menos e sair mais.",effect:"+2% de redução final por nível",max:6,base:750,growth:1.55}];function Qc(s,e){return Math.round(s.base*Math.pow(s.growth,e)/50)*50}function ri(s,e={}){const t={engine:e.engine|0,tires:e.tires|0,weight:e.weight|0,gearbox:e.gearbox|0};return{id:s.id,name:s.name,mass:s.mass*(1-.03*t.weight),torque:s.torque*(1+.07*t.engine),peakRpm:s.peakRpm,redline:s.redline,idle:s.idle,gears:s.gears.slice(),finalDrive:s.finalDrive*(1+.02*t.gearbox),wheelRadius:s.wheelRadius,cdA:s.cdA,grip:s.grip*(1+.05*t.tires),launchRpm:s.launchRpm}}function Kl(s,e){const t=ri(s,e),i=t.peakRpm*Math.PI*2/60;return Math.round(t.torque*i/745.7)}const ws=[{name:"ZÉ DO TURBO",quote:"“Essa reta é minha desde 1998, garoto.”",car:"falcao",upgrades:{engine:1,tires:1},reward:1500,tier:1},{name:"DONA ZILDA",quote:"“Sai da frente que eu tô atrasada pro bingo.”",car:"oval",upgrades:{engine:3,tires:2,weight:1},reward:2200,tier:2},{name:"BETÃO V8",quote:"“Meu bloco é de ferro. Seu ego é de alumínio.”",car:"ikusa",upgrades:{engine:2,tires:3,weight:2},reward:3200,tier:3},{name:"O MECÂNICO",quote:"“Eu montei os dois motores dessa pista. Boa sorte.”",car:"hotrod",upgrades:{engine:4,tires:4,weight:3,gearbox:2},reward:4400,tier:4},{name:"CAMPEÃ DA VILA",quote:"“Aqui não tem pole position. Tem vergonha na cara.”",car:"ikusa",upgrades:{engine:4,tires:5,weight:4,gearbox:3},reward:6e3,tier:5},{name:"O MESTRE",quote:"“Quando a luz verde acender, já vai ser tarde.”",car:"hotrod",upgrades:{engine:6,tires:6,weight:5,gearbox:5},reward:8e3,tier:6},{name:"FANTASMA 900",quote:"“Ninguém nunca viu meu carro de lado. Só o escape.”",car:"steel",upgrades:{engine:5,tires:6,weight:5,gearbox:4},reward:10500,tier:7},{name:"O REI DA PISTA",quote:"“Última etapa. Depois dessa, o asfalto é seu.”",car:"lenda",upgrades:{engine:6,tires:6,weight:6,gearbox:6},reward:14e3,tier:8}],Zl=["#25c45b","#1b63ff","#d20d24","#8c2bff","#e8e6df","#ffc400","#16161b","#ff5a12"];function ni(s){return Fs.find(e=>e.id===s)||Fs[0]}const jc="dragbrasil.save.v1",eh=()=>({engine:0,tires:0,weight:0,gearbox:0});function W0(){return{money:1500,ownedCars:["falcao"],selected:"falcao",paints:{falcao:"laranja"},upgrades:{falcao:eh()},wins:0,losses:0,races:0,bestET:null,bestTrap:null,sound:!0,careerWins:0,seenHelp:!1}}function X0(){const s=W0();try{const e=localStorage.getItem(jc);if(!e)return s;const t=JSON.parse(e),n={...s,...t};n.ownedCars=Array.isArray(t.ownedCars)&&t.ownedCars.length?t.ownedCars:s.ownedCars,n.ownedCars.includes(n.selected)||(n.selected=n.ownedCars[0]),n.upgrades={...s.upgrades,...t.upgrades||{}};for(const i of Object.keys(n.upgrades))n.upgrades[i]={...eh(),...n.upgrades[i]};return n.paints={...s.paints,...t.paints||{}},n}catch{return s}}function Wi(s){try{localStorage.setItem(jc,JSON.stringify(s))}catch{}}function Yi(s){return"R$ "+Math.round(s).toLocaleString("pt-BR")}function Jl(s){return s==null||!isFinite(s)?"—":s.toFixed(3)+"s"}function q0(s,e=2){const t=Math.floor(s.sampleRate*e),n=s.createBuffer(1,t,s.sampleRate),i=n.getChannelData(0);let r=0;for(let a=0;a<t;a++){const o=Math.random()*2-1;r=(r+.02*o)/1.02,i[a]=r*3.2}return n}class Y0{constructor(){this.ctx=null,this.muted=!1,this.ready=!1,this.lastPop=0}async init(){if(this.ready){this.ctx.state==="suspended"&&await this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,await t.resume(),this.master=t.createGain(),this.master.gain.value=this.muted?0:.85;const n=t.createDynamicsCompressor();n.threshold.value=-18,n.knee.value=20,n.ratio.value=5,n.attack.value=.005,n.release.value=.18,this.master.connect(n),n.connect(t.destination),this.noiseBuf=q0(t,2.5),this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=600,this.engineFilter.Q.value=1.4,this.engineGain.connect(this.engineFilter),this.engineFilter.connect(this.master);const i=(r,a,o=1)=>{const c=t.createOscillator();c.type=r,c.frequency.value=40*o;const l=t.createGain();return l.gain.value=a,c.connect(l),l.connect(this.engineGain),c.start(),{o:c,g:l,oct:o}};this.oscs=[i("sawtooth",.5),i("sawtooth",.35,1.01),i("square",.14,2),i("sine",.5,.5)],this.exhaustNoise=t.createBufferSource(),this.exhaustNoise.buffer=this.noiseBuf,this.exhaustNoise.loop=!0,this.exhaustFilter=t.createBiquadFilter(),this.exhaustFilter.type="bandpass",this.exhaustFilter.frequency.value=260,this.exhaustFilter.Q.value=.9,this.exhaustGain=t.createGain(),this.exhaustGain.gain.value=0,this.exhaustNoise.connect(this.exhaustFilter),this.exhaustFilter.connect(this.exhaustGain),this.exhaustGain.connect(this.master),this.exhaustNoise.start(),this.turboOsc=t.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.value=1800,this.turboGain=t.createGain(),this.turboGain.gain.value=0,this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.master),this.turboOsc.start(),this.tireNoise=t.createBufferSource(),this.tireNoise.buffer=this.noiseBuf,this.tireNoise.loop=!0,this.tireFilter=t.createBiquadFilter(),this.tireFilter.type="bandpass",this.tireFilter.frequency.value=2100,this.tireFilter.Q.value=9,this.tireGain=t.createGain(),this.tireGain.gain.value=0,this.tireNoise.connect(this.tireFilter),this.tireFilter.connect(this.tireGain),this.tireGain.connect(this.master),this.tireNoise.start(),this.windNoise=t.createBufferSource(),this.windNoise.buffer=this.noiseBuf,this.windNoise.loop=!0,this.windFilter=t.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=500,this.windGain=t.createGain(),this.windGain.gain.value=0,this.windNoise.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.master),this.windNoise.start(),this.crowdNoise=t.createBufferSource(),this.crowdNoise.buffer=this.noiseBuf,this.crowdNoise.loop=!0,this.crowdFilter=t.createBiquadFilter(),this.crowdFilter.type="bandpass",this.crowdFilter.frequency.value=650,this.crowdFilter.Q.value=.6,this.crowdGain=t.createGain(),this.crowdGain.gain.value=.012,this.crowdNoise.connect(this.crowdFilter),this.crowdFilter.connect(this.crowdGain),this.crowdGain.connect(this.master),this.crowdNoise.start(),this.ready=!0}setMuted(e){this.muted=e,!(!this.ready||!this.master)&&this.master.gain.setTargetAtTime(e?0:.85,this.ctx.currentTime,.03)}update(e){if(!this.ready)return;const t=this.ctx.currentTime,n=e.rpm||850,i=Math.max(0,Math.min(1.15,e.rpmNorm||0)),r=Math.max(22,n/60*2.15);for(const{o:f,oct:u}of this.oscs)f.frequency.setTargetAtTime(r*u,t,.02);const a=e.racing?1:.45,o=e.racing?.35+.65*(e.throttle||0):.2,c=a*o*(.055+i*.075);this.engineGain.gain.setTargetAtTime(c,t,.045),this.engineFilter.frequency.setTargetAtTime(260+i*1200+(e.throttle||0)*700,t,.05),this.exhaustGain.gain.setTargetAtTime((e.racing?.035:.01)*(.35+(e.throttle||0))*(.5+i*.8),t,.06);const l=e.racing?Math.max(0,i-.4)*(.6+(e.throttle||0)):0;this.turboOsc.frequency.setTargetAtTime(1500+i*2700,t,.06),this.turboGain.gain.setTargetAtTime(l*.02,t,.08);const h=Math.min(1,e.slip||0);this.tireGain.gain.setTargetAtTime(h*.15,t,.05),this.tireFilter.frequency.setTargetAtTime(1650+h*900,t,.1),this.windFilter.frequency.setTargetAtTime(380+Math.min(1,(e.speed||0)/80)*900,t,.2),this.windGain.gain.setTargetAtTime(Math.min(.09,(e.speed||0)*.0014),t,.15)}beep(e=700,t=.09,n=.16,i="square"){if(!this.ready)return;const r=this.ctx,a=r.createOscillator();a.type=i,a.frequency.value=e;const o=r.createGain();o.gain.setValueAtTime(1e-4,r.currentTime),o.gain.exponentialRampToValueAtTime(n,r.currentTime+.01),o.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+t),a.connect(o),o.connect(this.master),a.start(),a.stop(r.currentTime+t+.02)}pop(e=1){if(!this.ready)return;const t=this.ctx,n=t.currentTime;if(n-this.lastPop<.035)return;this.lastPop=n;const i=t.createBufferSource();i.buffer=this.noiseBuf,i.playbackRate.value=.7+Math.random()*.6;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1200,n),r.frequency.exponentialRampToValueAtTime(260,n+.14);const a=t.createGain();a.gain.setValueAtTime(.34*e,n),a.gain.exponentialRampToValueAtTime(.001,n+.17),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.2);const o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(110,n),o.frequency.exponentialRampToValueAtTime(45,n+.12);const c=t.createGain();c.gain.setValueAtTime(.22*e,n),c.gain.exponentialRampToValueAtTime(.001,n+.15),o.connect(c),c.connect(this.master),o.start(n),o.stop(n+.16)}whoosh(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuf,n.playbackRate.value=1.4;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(2400,t),i.frequency.exponentialRampToValueAtTime(700,t+.3),i.Q.value=1.5;const r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.09,t+.03),r.gain.exponentialRampToValueAtTime(1e-4,t+.32),n.connect(i),i.connect(r),r.connect(this.master),n.start(t),n.stop(t+.34)}foul(){if(!this.ready)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.value=120;const i=e.createGain();i.gain.setValueAtTime(.12,t),i.gain.setValueAtTime(.12,t+.3),i.gain.exponentialRampToValueAtTime(.001,t+.5),n.connect(i),i.connect(this.master),n.start(t),n.stop(t+.52)}win(){if(!this.ready)return;[523.25,659.25,783.99,1046.5].forEach((o,c)=>{const l=this.ctx,h=l.currentTime+c*.09,f=l.createOscillator();f.type="triangle",f.frequency.value=o;const u=l.createGain();u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(.16,h+.02),u.gain.exponentialRampToValueAtTime(1e-4,h+.45),f.connect(u),u.connect(this.master),f.start(h),f.stop(h+.5)});const t=this.ctx,n=t.currentTime,i=t.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0,i.playbackRate.value=1.1;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.7;const a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.07,n+.2),a.gain.exponentialRampToValueAtTime(1e-4,n+1.9),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+2)}lose(){if(!this.ready)return;const e=this.ctx;[220,174.6].forEach((t,n)=>{const i=e.currentTime+n*.18,r=e.createOscillator();r.type="sawtooth",r.frequency.value=t;const a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.08,i+.02),a.gain.exponentialRampToValueAtTime(1e-4,i+.5),r.connect(a),a.connect(this.master),r.start(i),r.stop(i+.52)})}ui(){this.beep(950,.045,.05,"triangle")}}const Me=s=>document.getElementById(s);class $0{constructor(e){this.game=e,this.el={boot:Me("boot"),menu:Me("menu"),garage:Me("garage"),help:Me("help"),hud:Me("hud"),results:Me("results"),money:Me("menu-money"),money2:Me("menu-best"),wins:Me("menu-wins"),best2:Me("menu-best-2"),record:Me("menu-record"),carName:Me("menu-car-name"),carClass:Me("menu-car-class"),carStats:Me("menu-car-stats"),rival:Me("menu-rival"),rivalLine:Me("menu-rival-line"),rivalTime:Me("menu-rival-time"),garageMoney:Me("garage-money"),carList:Me("car-list"),paintList:Me("paint-list"),upgradeList:Me("upgrade-list"),tree:[Me("t1"),Me("t2"),Me("t3")],treeGreen:Me("tg"),treeRed:Me("tr"),timer:Me("hud-timer"),phase:Me("hud-phase"),speed:Me("hud-speed"),gear:Me("hud-gear"),gearHint:Me("gear-hint"),rpm:Me("rpm-fill"),dist:Me("hud-dist"),gapYou:Me("gap-you-car"),gapRival:Me("gap-rival-car"),launch:Me("launch-prompt"),launchBig:document.querySelector(".lp-big"),launchLine:document.querySelector(".lp-line"),toast:Me("hud-toast"),foul:Me("foul-banner"),rivalName:Me("hud-rival-name"),resTitle:Me("res-title"),resKicker:Me("res-kicker"),resSub:Me("res-sub"),resET:Me("res-et"),resReaction:Me("res-reaction"),resSpeed:Me("res-speed"),resRivalET:Me("res-rival-et"),resMoney:Me("res-money"),resRecord:Me("res-record"),wheelPad:Me("wheel-pad"),wheelKnob:Me("wheel-knob"),gas:Me("btn-gas"),clutch:Me("btn-brake"),shiftUp:Me("btn-shift-up"),shiftDown:Me("btn-shift-down"),sound:Me("btn-sound"),prism:Me("prism"),prismStatus:Me("prism-status"),prismStart:Me("btn-prism-start"),raceLine:Me("race-line"),rlAdvice:Me("rl-advice"),rlCorner:Me("rl-corner"),rlStrip:Me("rl-strip"),rlSpeed:Me("rl-speed"),rlTarget:Me("rl-target"),menuTrack:Me("menu-track")},this.toastTimer=0,this._bindStatic()}_bindStatic(){const e=this.game;Me("btn-boot").addEventListener("click",()=>e.boot()),Me("btn-race").addEventListener("click",()=>e.startRace()),Me("btn-garage").addEventListener("click",()=>e.openGarage()),Me("btn-garage-2").addEventListener("click",()=>e.openGarage()),Me("btn-help").addEventListener("click",()=>e.openHelp()),Me("btn-res-again").addEventListener("click",()=>e.startRace()),Me("btn-res-garage").addEventListener("click",()=>e.openGarage()),Me("btn-res-menu").addEventListener("click",()=>e.openMenu()),Me("btn-cam").addEventListener("click",()=>e.toggleCamera()),this.el.sound.addEventListener("click",()=>e.toggleSound()),Me("btn-prism").addEventListener("click",()=>e.togglePrism(!0)),Me("btn-prism-menu").addEventListener("click",()=>e.togglePrism(!0)),Me("btn-prism-close").addEventListener("click",()=>e.togglePrism(!1)),Me("btn-prism-start").addEventListener("click",()=>e.startPrismCapture()),Me("btn-prism-stop").addEventListener("click",()=>e.stopPrismCapture());for(const t of document.querySelectorAll(".prism-seg[data-target]")){const n=t.dataset.target;for(const i of t.querySelectorAll("button"))i.addEventListener("click",()=>{n==="fps"?e.setPrismFps(Number(i.dataset.fps)):n==="fit"?e.setPrismFit(i.dataset.fit):e.setPrismSource(n,i.dataset.src)})}this.setPrismStamp();for(const t of document.querySelectorAll("[data-close]"))t.addEventListener("click",()=>e.closePanel(t.dataset.close))}togglePrism(e){const t=this.el.prism;if(!t)return;const n=e??t.classList.contains("hidden");t.classList.toggle("hidden",!n),n&&this.syncPrism(this.game.prism)}syncPrism(e){const t=this.el.prism;if(!(!t||!e)){for(const n of["dash","mirror"])for(const i of t.querySelectorAll(`.prism-seg[data-target="${n}"] button`))i.classList.toggle("on",i.dataset.src===e[n]);this.setPrismFps(e.fps);for(const n of t.querySelectorAll('.prism-seg[data-target="fit"] button'))n.classList.toggle("on",n.dataset.fit===e.fit)}}setPrismFps(e){const t=this.el.prism;if(t)for(const n of t.querySelectorAll('.prism-seg[data-target="fps"] button'))n.classList.toggle("on",Number(n.dataset.fps)===Number(e))}setPrismStatus(e,t=!1){const n=this.el.prismStatus;if(!n)return;const i=n.querySelector("span")||n;i.textContent=e,n.classList.toggle("live",!!t)}setPrismActive(e){const t=this.el.prismStart;t&&(t.textContent=e?"TROCAR FONTE":"CAPTURAR JANELA",this.el.prism?.classList.toggle("streaming",!!e))}setPrismStamp(){if("getDisplayMedia"in(navigator.mediaDevices||{}))return;const e=this.el.prismStart;e&&(e.disabled=!0,e.textContent="SEM SUPORTE"),this.setPrismStatus("Este navegador não captura janelas")}show(e){const t=["boot","menu","garage","help","results"];for(const n of t)this.el[n].classList.toggle("hidden",n!==e);this.el.hud.classList.toggle("hidden",e!=="race")}updateMenu(e,t){const n=ni(e.selected),i=e.upgrades[n.id]||{},r=Kl(n,i);if(this.el.money.textContent=Yi(e.money),this.el.wins.textContent=e.wins,this.el.carName.textContent=n.name,this.el.carClass.textContent=n.klass,this.el.carStats.innerHTML=`
      <div><b>${r}</b><small>CAVALOS</small></div>
      <div><b>${Math.round(ri(n,i).mass)}</b><small>KG</small></div>
      <div><b>${e.bestET?Jl(e.bestET).replace("s",""):"—"}</b><small>MELHOR ET</small></div>`,this.el.best2.textContent=e.bestET?Jl(e.bestET):"—",this.el.record.textContent=e.races?`${e.races} corridas · ${e.wins} vitórias`:"sem registro",this.el.rival.textContent=t.name,this.el.rivalLine.textContent=t.quote,this.el.rivalTime.textContent=`ALVO ${t.target.toFixed(2)}s`,this.el.menuTrack&&this.game.track){const a=(this.game.track.FINISH/1e3).toFixed(2).replace(".",",");this.el.menuTrack.textContent=`${a} KM · ${this.game.track.corners.length} CURVAS`}this.el.sound.textContent=e.sound?"🔊":"🔇"}renderGarage(e){const t=this.game;this.el.garageMoney.textContent=Math.round(e.money).toLocaleString("pt-BR"),this.el.carList.innerHTML="";for(const a of Fs){const o=e.ownedCars.includes(a.id),c=e.selected===a.id,l=e.upgrades[a.id]||{},h=Kl(a,l),f=document.createElement("div");f.className=`car-row${c?" active":""}${o?"":" locked"}`,f.innerHTML=`
        <div>
          <h4>${a.name} <span class="tag">${a.klass}</span></h4>
          <div class="spec">${h} cv · ${Math.round(ri(a,l).mass)} kg · ${a.tagline}</div>
        </div>
        <div class="car-action ${c?"equipped":o?"":"buy"}">
          ${c?"EM USO":o?"USAR":Yi(a.price)}
        </div>`,f.addEventListener("click",()=>t.selectCar(a.id)),this.el.carList.appendChild(f)}this.el.paintList.innerHTML="";const n=ni(e.selected),i=e.paints[n.id]||"laranja";for(const a of vi){const o=document.createElement("div");o.className=`paint-swatch${i===a.id?" active":""}`,o.style.background=`radial-gradient(circle at 35% 28%, ${K0(a.hex,.35)}, ${a.hex} 58%, ${Z0(a.hex,.45)})`,o.title=a.name,o.addEventListener("click",()=>t.setPaint(n.id,a.id)),this.el.paintList.appendChild(o)}this.el.upgradeList.innerHTML="";const r=e.upgrades[n.id]||{};for(const a of Jc){const o=r[a.id]|0,c=o>=a.max,l=Qc(a,o),h=document.createElement("div");h.className="upgrade-row";const f=Array.from({length:a.max},(u,p)=>`<i class="${p<o?"on":""}"></i>`).join("");h.innerHTML=`
        <div class="upgrade-head"><h4>${a.name}</h4><span class="lvl">NÍVEL ${o}/${a.max}</span></div>
        <div class="pips">${f}</div>
        <div class="upgrade-foot">
          <div class="upgrade-desc">${a.desc}<br>${a.effect}</div>
          <button class="upgrade-btn ${c?"max":""}" ${c?"disabled":""}>
            ${c?"NO MÁXIMO":Yi(l)}
          </button>
        </div>`,c||h.querySelector("button").addEventListener("click",()=>t.buyUpgrade(a.id)),this.el.upgradeList.appendChild(h)}}showHUD(e){this.show("race"),this.el.rivalName.textContent=e,this.el.foul.classList.add("hidden"),this.el.launch.classList.add("hidden"),this.setTree([!1,!1,!1],!1,!1),this.setTimer(0),this.setSpeed(0),this.setGear(1,"EMBREIE + ACELERE",0),this.setGap(0,0,this.game.finishDistance||402.336),this.setPhase("PREPARE-SE"),this.toast("")}setTree(e,t,n){this.el.tree.forEach((i,r)=>i.classList.toggle("on",!!e[r])),this.el.treeGreen.classList.toggle("on",!!t),this.el.treeRed.classList.toggle("on",!!n)}setPhase(e){this.el.phase.textContent=e}setTimer(e){this.el.timer.textContent=e>=0?e.toFixed(3):"0.000"}setSpeed(e){this.el.speed.textContent=Math.max(0,Math.round(e))}setGear(e,t,n){this.el.gear.textContent=e,t!=null&&(this.el.gearHint.textContent=t),this.el.rpm.style.width=`${Math.min(112,n*100)}%`}setDist(e,t=this.game.finishDistance||402.336){this.el.dist.textContent=Math.max(0,Math.round(t-e))}setGap(e,t,n){const i=Math.max(0,Math.min(1,e/n)),r=Math.max(0,Math.min(1,t/n));this.el.gapYou.style.left=`${i*92}%`,this.el.gapRival.style.left=`${r*92}%`}setRaceLine(e){if(!this.el.raceLine)return;const t=e.advice||"MANTÉM";this.el.rlAdvice.textContent=t,this.el.rlAdvice.className=`rl-advice ${t==="FREIA"?"brake":t==="ACELERA"?"accel":"hold"}`,this.el.rlSpeed.textContent=Math.round(e.speed||0),this.el.rlTarget.textContent=Math.round(e.target||0),e.cornerDist==null?this.el.rlCorner.textContent="RETA · PODE ACELERAR":e.cornerDist<4?this.el.rlCorner.textContent=`CURVA ${e.cornerDir>0?"▶":"◀"} ${Math.round(e.cornerSpeed)} km/h`:this.el.rlCorner.textContent=`${Math.round(e.cornerDist)} m ${e.cornerDir>0?"▶":"◀"} ${Math.round(e.cornerSpeed)} km/h`;const n=this.el.rlStrip;if(!n)return;if(n.children.length!==30){n.innerHTML="";for(let o=0;o<30;o++)n.appendChild(document.createElement("i"))}const{profile:i,states:r,ds:a}=e.profile||{};if(!(!r||!a))for(let o=0;o<30;o++){const c=e.sWorld+o*10,l=Math.max(0,Math.min(r.length-1,Math.round(c/a))),h=c>e.finishS?-1:r[l],f=h===1?"brake":h===2?"accel":h===0?"hold":"off";n.children[o].className=f+(o===0?" now":"")}}showLaunch(e){this.el.launch.classList.toggle("hidden",!e)}setLaunchText(e,t){this.el.launchLine.textContent=e,this.el.launchBig.textContent=t}toast(e,t=1100){this.el.toast.textContent=e,this.el.toast.classList.toggle("show",!!e),clearTimeout(this.toastTimer),e&&(this.toastTimer=setTimeout(()=>this.el.toast.classList.remove("show"),t))}showFoul(e){this.el.foul.classList.toggle("hidden",!e)}setWheel(e){this.el.wheelPad.style.setProperty("--rot",`${e*90}deg`),this.el.wheelKnob.style.transform=`translate(${e*36}px, 0)`}setPedals(e,t){this.el.gas.classList.toggle("active",e>.1),this.el.clutch.classList.toggle("active",!!t)}showResults(e){this.show("results"),this.el.results.classList.toggle("lose",!e.win),this.el.resTitle.textContent=e.foul?"QUEIMOU":e.win?"VITÓRIA":"DERROTA",this.el.resKicker.textContent=e.kicker||(e.foul?"DESCLASSIFICADO":"RESULTADO OFICIAL"),this.el.resSub.textContent=e.sub||(e.foul?"Você soltou a embreagem antes do verde. O fiscal não perdoou.":e.win?`Você cruzou ${e.margin>0?e.margin.toFixed(3)+"s":"na frente"} antes do rival.`:e.dnf?"O carro não cruzou a linha. Ajuste o setup e tente de novo.":`Faltaram ${e.margin.toFixed(3)}s para pegar o ${e.rivalName}.`),this.el.resET.textContent=e.et?e.et.toFixed(3):"DNF",this.el.resReaction.textContent=e.reaction!=null?e.reaction.toFixed(3)+"s":"—",this.el.resSpeed.textContent=Math.round(e.trap||0),this.el.resRivalET.textContent=e.rivalET?e.rivalET.toFixed(3):"DNF",this.el.resMoney.textContent=(e.prize>=0?"+ ":"− ")+Yi(Math.abs(e.prize)),this.el.resMoney.style.color=e.prize>=0?"var(--green)":"var(--red)",this.el.resRecord.classList.toggle("hidden",!e.record)}}function es(s){return Math.max(0,Math.min(255,Math.round(s)))}function K0(s,e){const t=s.replace("#",""),n=es(parseInt(t.slice(0,2),16)+255*e),i=es(parseInt(t.slice(2,4),16)+255*e),r=es(parseInt(t.slice(4,6),16)+255*e);return`rgb(${n},${i},${r})`}function Z0(s,e){const t=s.replace("#",""),n=es(parseInt(t.slice(0,2),16)*(1-e)),i=es(parseInt(t.slice(2,4),16)*(1-e)),r=es(parseInt(t.slice(4,6),16)*(1-e));return`rgb(${n},${i},${r})`}const J0=[.78,.87,.95,1,1.05,1.1,1.15,1.22],ya=1/120;function Q0(s,e){const t=Math.min(86,s.redline/60/(s.gears[s.gears.length-1]*s.finalDrive)*2*Math.PI*s.wheelRadius);let n=2;for(let i=0;i<e.FINISH;i+=5){const r=Math.min(t,e.speedAt(e.START_S+i));n+=5/Math.max(9,r)}return n}class j0{constructor(){this.save=X0(),this.audio=new Y0,this.save.sound=this.save.sound!==!1,this.audio.muted=!this.save.sound,this.time=0,this.mode="boot",this.cameraMode="cockpit",this.phase="idle",this.steer=0,this.steerTarget=0,this.wheelPointer=null,this.keys={},this.touchGas=!1,this.touchClutch=!1,this.treeBeeped=[!1,!1,!1],this.rivalTargetCache=new Map,this.smokeAcc=0,this.simAcc=0,this.launchPromptVisible=!1,this.autoShift=!0,this.ui=null,this.prism={dash:"telemetry",mirror:"camera",fps:15,fit:"contain"},this.initGraphics(),this.initTrack(),this.initCars(),this.initInput(),this.ui=new $0(this),this.audio.setMuted(!this.save.sound),this.ui.updateMenu(this.save,this.nextRival()),this.openMenu(!0),this.resize(),window.addEventListener("resize",()=>this.resize()),this.last=performance.now(),requestAnimationFrame(e=>this.frame(e)),new URLSearchParams(location.search).has("autostart")&&setTimeout(()=>{this.mode==="boot"&&this.boot(),setTimeout(()=>this.startRace(),120)},300)}initGraphics(){const e=document.getElementById("scene");this.renderer=new x0({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rs,this.renderer.toneMapping=po,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=Xt,this.scene=new wc,this.scene.background=new Je(329228),this.scene.fog=new Eo(329228,.0048);const t=new Us(this.renderer);this.scene.environment=t.fromScene(new v0,.04).texture,this.scene.environmentIntensity=.45,this.camera=new un(68,window.innerWidth/window.innerHeight,.06,1100),this.camera.position.set(12,4,8),this.hemi=new vu(3359595,460555,.85),this.scene.add(this.hemi),this.moon=new yu(11058431,1.25),this.moon.position.set(30,60,-20),this.moon.castShadow=!0,this.moon.shadow.mapSize.set(2048,2048),this.moon.shadow.camera.left=-35,this.moon.shadow.camera.right=35,this.moon.shadow.camera.top=35,this.moon.shadow.camera.bottom=-35,this.moon.shadow.camera.near=1,this.moon.shadow.camera.far=200,this.moon.shadow.bias=-6e-4,this.moon.shadow.normalBias=.02,this.scene.add(this.moon),this.moonTarget=new Ft,this.scene.add(this.moonTarget),this.moon.target=this.moonTarget,this.warm=new ji(16763274,45,40,2),this.warm.position.set(0,9,4),this.scene.add(this.warm),this.speedlines=document.getElementById("speedlines"),this.frameTimes=[],this.quality=1}initTrack(){this.track=G0(),this.scene.add(this.track.group),this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects=new H0(this.scene),this.startS=this.track.START_S,this.finishDistance=this.track.FINISH,this.lineClock=0,this._gearShown=0}initCars(){this.playerGroup=new wt,this.scene.add(this.playerGroup),this.playerModel=null,this.rivalModels={};for(const e of Fs){const t=Vl({paint:"#25c45b",interior:!1,kit:e.kit}),n=new wt;n.add(t.root),n.visible=!1,this.scene.add(n),this.rivalModels[e.id]={model:t,group:n}}this.rebuildPlayerCar(),this.track.placeAt(this.playerGroup,this.startS-1.4,this.track.LANE),this.cabinLight=new ji(13820159,.7,2.2,2),this.cabinFill=new ji(16763274,.16,1.8,2),this.scene.add(this.cabinLight,this.cabinFill)}rebuildPlayerCar(){const e=this.save,t=ni(e.selected),n=vi.find(i=>i.id===e.paints[t.id])?.hex||"#ff5a12";this.playerModel&&(this.playerGroup.remove(this.playerModel.root),this.playerModel.root.traverse(i=>{i.isMesh&&i.geometry&&i.geometry.dispose()}),this.playerModel=null),this.playerModel=Vl({paint:n,interior:!0,kit:t.kit}),this.telemetry||(this.telemetry=new D0),this.mirrorFeed||(this.mirrorFeed=new N0(this.renderer,this.scene)),this.applyCabinScreens(),this.screenClock=0,this.mirrorAcc=0,this.playerGroup.add(this.playerModel.root),this.playerSpec=ri(t,e.upgrades[t.id]||{}),this.playerSim=new Sa(this.playerSpec)}nextRival(){const e=Wt(this.save.careerWins,0,ws.length-1),t=ws[e],n=Math.max(0,this.save.careerWins-(ws.length-1)),i=J0[e]+n*.035,r={...t,power:i,idx:e};return r.target=this.rivalTarget(r),r}rivalTarget(e){const t=`${e.car}:${JSON.stringify(e.upgrades)}:${e.power.toFixed(3)}`;if(this.rivalTargetCache.has(t))return this.rivalTargetCache.get(t);const n=ri(ni(e.car),e.upgrades);n.torque*=e.power;const i=Q0(n,this.track);return this.rivalTargetCache.set(t,i),i}initInput(){const e=(l,h,f)=>{if(!l)return;const u=_=>{_.preventDefault();try{l.setPointerCapture(_.pointerId)}catch{}h()},p=()=>f();l.addEventListener("pointerdown",u),l.addEventListener("pointerup",p),l.addEventListener("pointercancel",p),l.addEventListener("lostpointercapture",p)};e(document.getElementById("btn-gas"),()=>{this.touchGas=!0},()=>{this.touchGas=!1}),e(document.getElementById("btn-brake"),()=>{this.touchClutch=!0},()=>{this.touchClutch=!1});const t=document.getElementById("btn-shift-up"),n=document.getElementById("btn-shift-down"),i=l=>h=>{h.preventDefault(),this.tryShift(l)};t.addEventListener("pointerdown",i(1)),n.addEventListener("pointerdown",i(-1));const r=document.getElementById("btn-auto");r.classList.toggle("on",this.autoShift),r.addEventListener("pointerdown",l=>{l.preventDefault(),this.autoShift=!this.autoShift,r.classList.toggle("on",this.autoShift),this.audio.ui()});const a=document.getElementById("wheel-pad"),o=l=>{const h=a.getBoundingClientRect(),f=(l.clientX-(h.left+h.width/2))/(h.width*.5);this.steerTarget=Wt(f*1.15,-1,1)};a.addEventListener("pointerdown",l=>{l.preventDefault(),this.wheelPointer=l.pointerId;try{a.setPointerCapture(l.pointerId)}catch{}o(l)}),a.addEventListener("pointermove",l=>{this.wheelPointer===l.pointerId&&o(l)});const c=()=>{this.wheelPointer=null,this.steerTarget=0};a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c),a.addEventListener("lostpointercapture",c),window.addEventListener("keydown",l=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(l.code)&&l.preventDefault(),this.keys[l.code]=!0,!l.repeat&&(l.code==="KeyC"&&this.toggleCamera(),l.code==="KeyP"&&this.togglePrism(),(l.code==="ShiftLeft"||l.code==="ShiftRight"||l.code==="KeyE")&&this.tryShift(1),(l.code==="ControlLeft"||l.code==="ControlRight"||l.code==="KeyQ")&&this.tryShift(-1),l.code==="Escape"&&(this.mode==="race"?this.openMenu():(this.mode==="garage"||this.mode==="help")&&this.openMenu()))}),window.addEventListener("keyup",l=>{this.keys[l.code]=!1}),window.addEventListener("blur",()=>{this.keys={},this.touchGas=!1,this.touchClutch=!1}),document.querySelectorAll(".pedal, .shift-btn, .wheel-pad").forEach(l=>{l.addEventListener("contextmenu",h=>h.preventDefault())})}tryShift(e){if(this.mode!=="race"||!this.greenReached||this.playerFinished)return;const t=this.playerSim;(e>0?t.shiftUp():t.shiftDown())&&(this.audio.pop(.6),this.audio.whoosh(),this.spawnBackfire(),this.playerModel?.driver?.shift())}playerInput(){const e=this.keys,t=!!(e.KeyW||e.ArrowUp||this.touchGas),n=!!(e.KeyS||e.ArrowDown||this.touchClutch);let i=t?1:0,r=!!e.Space||n&&!this.greenReached,a=this.greenReached&&n?1:0;return this.playerFinished&&(i=0,r=!1,a=1),{throttle:i,clutch:r,steer:this.steer,brake:a}}playerClutchPressed(){const e=this.keys;return!!(e.Space||!this.greenReached&&(e.KeyS||e.ArrowDown||this.touchClutch))}toggleCamera(){this.mode!=="race"&&this.mode!=="result"||(this.cameraMode=this.cameraMode==="cockpit"?"chase":"cockpit",this.audio.ui())}updateCamera(e){const t=this.camera,n=this.playerGroup.position.x,i=this.playerGroup.position.z,r=this.time,a=this.mode==="race"&&this.cameraMode==="cockpit";if(this.playerModel?.windshieldGlass&&(this.playerModel.windshieldGlass.visible=!a),this.playerModel?.sideGlassParts)for(const d of this.playerModel.sideGlassParts)d.visible=!a;if(this.playerModel?.roofParts)for(const d of this.playerModel.roofParts)d.visible=!a;if(this.playerModel?.driver&&(this.playerModel.driver.head.visible=!a,this.playerModel.driver.torso.visible=!a),this.playerModel?.driverSeatParts)for(const d of this.playerModel.driverSeatParts)d.visible=!a;if(this.playerModel?.floorMatParts)for(const d of this.playerModel.floorMatParts)d.visible=!a;if(this.playerModel?.driver?.arms)for(const d of this.playerModel.driver.arms)d.upper.visible=!a,d.shoulderJoint.visible=!a,d.elbowJoint.visible=!a;if(this.mode==="menu"||this.mode==="boot"||this.mode==="help"){const d=.68+Math.sin(r*.11)*.22,M=8.6,R=new U(n+Math.sin(d)*M,2.85+Math.sin(r*.19)*.12,i+Math.cos(d)*M);t.position.lerp(R,1-Math.exp(-e*2.2)),t.lookAt(n,.82,i+.15),t.fov+=(58-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}if(this.mode==="garage"){const d=1.02+Math.sin(r*.1)*.1,M=7.6,R=new U(n+Math.sin(d)*M,2.15,i+Math.cos(d)*M);t.position.lerp(R,1-Math.exp(-e*2.4)),t.lookAt(n,.78,i+.1),t.fov+=(52-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}if(this.mode==="result"){const d=.9+r*.12,M=8.6;t.position.lerp(new U(n+Math.sin(d)*M,2.6,i+Math.cos(d)*M),1-Math.exp(-e*2)),t.lookAt(n,.9,i+.4),t.fov+=(52-t.fov)*Math.min(1,e*2),t.updateProjectionMatrix();return}const o=this.playerSim;this.playerGroup.updateMatrixWorld(!0);const c=Math.min(1,o.speed/75);if(this.cameraMode==="chase"){const d=7.4+c*1.8,M=this.playerGroup.localToWorld(new U(0,2.55+c*.2,-d));t.position.lerp(M,1-Math.exp(-e*5));const R=this.playerGroup.localToWorld(new U(0,1,1.6));t.lookAt(R),t.fov+=(60+c*16-t.fov)*Math.min(1,e*4),t.updateProjectionMatrix();return}const l=o.accel,h=this.crashShake||0,f=Math.min(.035,o.speed*7e-5+o.wheelspin*.01+h*.03),u=this.playerGroup.localToWorld(new U(-.37,1.235,-.3));u.x+=Math.sin(r*53)*f,u.y+=Math.sin(r*61+1.3)*f*.7,u.z+=Math.cos(r*47)*f*.5,t.position.copy(u);const p=-.07-l*.0035+Math.sin(r*44)*f*.35,_=-this.steer*.03*c+Math.sin(r*37)*f*.3,S=this.steer*.05*c;t.rotation.set(p,this.playerGroup.rotation.y+Math.PI+S,_+this.playerGroup.rotation.z*.8,"YXZ");const m=64+c*13+Math.min(3,o.wheelspin*3);t.fov+=(m-t.fov)*Math.min(1,e*4),t.updateProjectionMatrix()}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality>=1?1.75:1));const n=t>e*1.05&&window.matchMedia("(pointer: coarse)").matches;document.getElementById("rotate-hint").classList.toggle("hidden",!n)}boot(){this.audio.init(),this.save.sound=this.save.sound!==!1,this.audio.setMuted(!this.save.sound),this.ui.show("menu"),this.mode="menu",this.positionForShowroom(),this.ui.updateMenu(this.save,this.nextRival()),this.audio.ui()}positionForShowroom(){this.playerSim.reset(),this.playerSim.clutch=!0,this.playerSim.prevClutch=!0,this.track.placeAt(this.playerGroup,this.startS-1.4,this.track.LANE),this.crashShake=0,this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects.clear(),this.ui.showLaunch(!1),this.ui.showFoul(!1);for(const e of Object.keys(this.rivalModels))this.rivalModels[e].group.visible=!1}openMenu(e=!1){!e&&this.mode==="menu"||(this.mode="menu",this.phase="idle",this.greenReached=!1,this.playerFinished=!1,this.rivalFinished=!1,this.positionForShowroom(),e||this.ui.show("menu"),this.ui.updateMenu(this.save,this.nextRival()),this.speedlines.style.opacity="0")}openGarage(){this.mode="garage",this.positionForShowroom(),this.ui.show("garage"),this.ui.renderGarage(this.save),this.audio.ui()}openHelp(){this.mode="help",this.ui.show("help"),this.audio.ui()}closePanel(){this.openMenu()}selectCar(e){const t=this.save,n=ni(e);if(!t.ownedCars.includes(e)){if(t.money<n.price){this.uiToast(`Faltam ${Yi(n.price-t.money)} pra levar o ${n.name}.`);return}t.money-=n.price,t.ownedCars.push(e),t.paints[e]=vi[Fs.indexOf(n)%vi.length].id,t.upgrades[e]||(t.upgrades[e]={engine:0,tires:0,weight:0,gearbox:0}),t.selected=e,Wi(t),this.rebuildPlayerCar(),this.ui.renderGarage(t),this.uiToast(`${n.name} comprado!`),this.audio.ui();return}t.selected!==e&&(t.selected=e,Wi(t),this.rebuildPlayerCar(),this.ui.renderGarage(t),this.ui.updateMenu(t,this.nextRival()),this.audio.ui())}setPaint(e,t){if(this.save.paints[e]=t,Wi(this.save),e===this.save.selected&&this.playerModel){const i=vi.find(r=>r.id===t);i&&this.playerModel.setPaint(i.hex)}this.ui.renderGarage(this.save);const n=vi.find(i=>i.id===t);this.uiToast(`Pintura: ${n?n.name:t}`),this.audio.ui()}buyUpgrade(e){const t=this.save,n=t.selected,i=Jc.find(c=>c.id===e);if(!i)return;const r=t.upgrades[n]||(t.upgrades[n]={engine:0,tires:0,weight:0,gearbox:0}),a=r[e]|0;if(a>=i.max)return;const o=Qc(i,a);if(t.money<o){this.uiToast(`Sem caixa. Faltam ${Yi(o-t.money)}.`);return}t.money-=o,r[e]=a+1,Wi(t),this.playerSpec=ri(ni(n),r),this.ui.renderGarage(t),this.ui.updateMenu(t,this.nextRival()),this.uiToast(`${i.name} nível ${a+1} instalado.`),this.audio.ui()}toggleSound(){this.save.sound=!this.save.sound,Wi(this.save),this.save.sound&&this.audio.init(),this.audio.setMuted(!this.save.sound),document.getElementById("btn-sound").textContent=this.save.sound?"🔊":"🔇"}uiToast(e){const t=document.getElementById("ui-toast");t.textContent=e,t.classList.add("show"),clearTimeout(this._uiToastTimer),this._uiToastTimer=setTimeout(()=>t.classList.remove("show"),1900)}startRace(){this.audio.init(),this.audio.ui(),this.mode="race",this.phase="staging",this.cameraMode="cockpit",this.raceClock=0,this.simAcc=0,this.greenReached=!1,this.greenClock=null,this.foul=!1,this.playerRunStart=null,this.playerReaction=null,this.playerFinished=!1,this.rivalFinished=!1,this.playerET=null,this.playerTrap=0,this.rivalET=null,this.rivalTrap=0,this.endScheduled=null,this.launchPromptVisible=!1,this.lastClutch=!1,this.smokeAcc=0,this.treeBeeped=[!1,!1,!1],this.greenBeeped=!1,this.treeStart=1.25+Math.random()*.65,this.amberTimes=[this.treeStart,this.treeStart+.6,this.treeStart+1.2],this.greenAt=this.treeStart+1.72;const e=this.nextRival();this.rivalInfo=e,this.rivalReaction=.15+Math.random()*.13+Math.max(0,1-e.idx/8)*.05,this.playerSpec=ri(ni(this.save.selected),this.save.upgrades[this.save.selected]||{}),this.playerSim=new Sa(this.playerSpec);const t=ri(ni(e.car),e.upgrades);t.torque*=e.power,this.rivalSpec=t,this.rivalSim=new Sa(t),this.playerSim.reset(),this.playerSim.clutch=!0,this.playerSim.prevClutch=!0,this.track.placeAt(this.playerGroup,this.startS-1.4,this.track.LANE),this.crashShake=0,this._gearShown=0,this.playerModel.setPaint(vi.find(i=>i.id===(this.save.paints[this.save.selected]||"laranja"))?.hex||"#ff5a12");const n=this.rivalModels[e.car];for(const i of Object.keys(this.rivalModels))this.rivalModels[i].group.visible=i===e.car;n.model.setPaint(Zl[e.idx%Zl.length]),n.group.visible=!0,this.track.placeAt(n.group,this.startS-1.4,-this.track.LANE),this.track.setTree({a:[!1,!1,!1],green:!1,red:!1}),this.effects.clear(),this.ui.showHUD(e.name),this.ui.setPhase("PREPARE-SE"),this.ui.setLaunchText("A LUZ VERDE ACENDEU","ACELERA!"),this.ui.showLaunch(!1),this.ui.showFoul(!1),this.speedlines.style.opacity="0",this.steer=0,this.steerTarget=0}updateTree(){if(this.greenReached)this.track.setTree({a:[!1,!1,!1],green:!this.foul,red:this.foul}),this.ui.setTree([!1,!1,!1],!this.foul,this.foul);else{const e=this.raceClock,t=this.amberTimes.map(n=>e>=n);this.track.setTree({a:t,green:!1,red:this.foul}),this.ui.setTree(t,!1,this.foul);for(let n=0;n<3;n++)!this.treeBeeped[n]&&e>=this.amberTimes[n]&&(this.treeBeeped[n]=!0,this.foul||this.audio.beep(620+n*45,.08,.12,"square"));e>=this.treeStart&&this.phase==="staging"&&(this.phase="tree",this.ui.setPhase("LUZES ACESAS")),e>=this.greenAt&&this.onGreen()}}onGreen(){this.greenReached||(this.greenReached=!0,this.greenClock=this.raceClock,this.phase="racing",this.ui.setPhase(this.foul?"QUEIMOU":"VAI!"),this.foul||(this.audio.beep(980,.25,.18,"square"),this.ui.showLaunch(!0),this.ui.setLaunchText("SOLTE A EMBREAGEM E PISA","VAI!"),this.ui.toast("VERDE! SOLTA A EMBREAGEM",900)))}registerFoul(){this.foul=!0,this.ui.showFoul(!0),this.ui.showLaunch(!1),this.ui.setPhase("QUEIMOU"),this.audio.foul()}stepRace(e){if(this.mode!=="race"||this.phase==="idle")return;const t=!this.greenReached,n=this.playerInput(),i=this.track.frameAt(this.startS+this.playerSim.distance);n.curvature=i.kappa,n.lateralLimit=3.9;const r=this.playerClutchPressed();if(!this.greenReached&&!this.foul&&this.lastClutch&&!r&&n.throttle>.15&&this.registerFoul(),this.lastClutch=r,this.playerSim.step(e,n,t),this.playerSim.crashed&&(this.crashShake=1,this.audio.beep(90,.18,.3,"sawtooth"),this.ui.toast("BATEU NO MURO!",900)),this.autoShift&&this.greenReached&&!this.playerFinished){const p=this.playerSim.gear;this.playerSim.autoShift(),this.playerSim.gear!==p&&(this.audio.pop(.6),this.audio.whoosh(),this.spawnBackfire(),this.playerModel?.driver?.shift())}const a=this.rivalSim,o=!this.greenReached,c=a.engineRpm<this.rivalSpec.launchRpm?1:.15,l=this.track.frameAt(this.startS+a.distance),h=Math.min(this.finishDistance,a.distance+16+a.speed*.55),f=this.track.speedAt(this.startS+h)*.93;let u;if(o?u={throttle:c,clutch:!0,steer:0,brake:0,curvature:l.kappa}:this.raceClock<this.greenClock+this.rivalReaction?u={throttle:c,clutch:!0,steer:0,brake:0,curvature:l.kappa}:this.rivalFinished?u={throttle:0,clutch:!1,steer:0,brake:1,curvature:l.kappa}:a.speed>f+1.2?u={throttle:0,clutch:!1,steer:0,brake:.85,curvature:l.kappa}:a.speed>f-1.2?u={throttle:a.wheelspin>.6?.5:.35,clutch:!1,steer:0,brake:.15,curvature:l.kappa}:u={throttle:a.wheelspin>.6?.65:1,clutch:!1,steer:0,brake:0,curvature:l.kappa},a.step(e,u,o),this.greenReached&&!this.rivalFinished&&!o){const p=a.gear;a.autoShift(),a.gear!==p&&this.spawnBackfire(!0)}!this.playerFinished&&this.playerSim.distance>=this.finishDistance&&(this.playerFinished=!0,this.playerFinishClock=this.raceClock,this.playerET=this.playerRunStart!=null?this.raceClock-this.playerRunStart:null,this.playerTrap=this.playerSim.speedKmh,this.ui.toast(`CHEGOU! ${this.playerET?this.playerET.toFixed(3)+"s":""}`,1600),this.audio.pop(1)),!this.rivalFinished&&a.distance>=this.finishDistance&&(this.rivalFinished=!0,this.rivalFinishClock=this.raceClock,this.rivalET=this.raceClock-(this.greenClock+this.rivalReaction),this.rivalTrap=a.speedKmh)}spawnBackfire(e=!1){const t=e?this.rivalModels[this.rivalInfo?.car]?.model:this.playerModel;if(!t)return;const n=new U;for(const i of t.exhaustTips)i.getWorldPosition(n),this.effects.emitBackfire(n,new U(0,.2,-1))}updateRace(e){if(this.raceClock+=e,this.updateTree(),this.greenReached&&!this.playerRunStart&&this.playerSim.speed>.25&&(this.playerRunStart=this.raceClock,this.playerReaction=this.raceClock-this.greenClock,this.launchPromptVisible=!1,this.ui.showLaunch(!1),!this.foul)){const t=this.playerReaction,n=t<.16?"LARGADA PERFEITA":t<.34?"BOA LARGADA":"SAIU ATRASADO";this.ui.toast(`${n} · ${t.toFixed(3)}s`,1300),t<.16&&this.audio.beep(1200,.12,.1,"triangle")}this.playerFinished&&this.rivalFinished&&this.endScheduled==null&&(this.endScheduled=this.raceClock),this.playerFinished&&!this.rivalFinished&&this.raceClock-this.playerFinishClock>5&&this.endScheduled==null&&(this.endScheduled=this.raceClock),!this.playerFinished&&this.raceClock-this.greenClock>240&&this.endScheduled==null&&(this.endScheduled=this.raceClock),this.endScheduled!=null&&this.raceClock-this.endScheduled>1.3&&this.finishRace()}finishRace(){if(this.mode!=="race")return;this.mode="result",this.cameraMode="chase";const e=this.playerFinished?this.playerFinishClock-this.greenClock:1/0,t=this.rivalFinished?this.rivalFinishClock-this.greenClock:1/0,n=!this.playerFinished,i=!this.foul&&!n&&e<t,r=i?Math.max(0,(this.rivalFinished?t:e+1)-e):this.rivalFinished?Math.abs(e-t):0,a=this.rivalInfo;let o=0;!this.foul&&!n&&(o=i?a.reward:Math.round(a.reward*.2));const c=this.save.bestET,l=!this.foul&&!n&&this.playerET!=null&&(c==null||this.playerET<c);!this.foul&&!n?(this.save.races++,i?(this.save.wins++,this.save.careerWins++):this.save.losses++,this.playerET!=null&&(this.save.bestET==null||this.playerET<this.save.bestET)&&(this.save.bestET=this.playerET),this.playerTrap&&(this.save.bestTrap==null||this.playerTrap>this.save.bestTrap)&&(this.save.bestTrap=this.playerTrap)):(this.save.races++,this.save.losses++);const h=i&&this.save.careerWins===ws.length;h&&(o+=5e3),this.save.money+=o,Wi(this.save);const f=i&&this.save.careerWins>=ws.length;this.ui.showResults({win:i,foul:this.foul,dnf:n,et:this.playerET,reaction:this.playerReaction,trap:this.playerTrap,rivalET:this.rivalET,rivalName:a.name,margin:r,prize:o,record:l,kicker:h?"CAMPEÃO DA TEMPORADA":this.foul?"DESCLASSIFICADO":"RESULTADO OFICIAL",sub:h?"Você limpou a fila inteira. O asfalto agora tem dono — e é você.":f&&i?"O rei caiu de novo. A fila vai ficar brava e voltar mais forte.":this.foul?"Você soltou a embreagem antes do verde. O fiscal não perdoou.":void 0}),this.foul?this.audio.foul():i?this.audio.win():this.audio.lose(),this.speedlines.style.opacity="0",this.ui.showFoul(!1)}ensureWindowFeed(){if(this.windowFeed)return this.windowFeed;const e=new U0;return e.onchange=t=>{t==="ended"&&(this.prism.dash="telemetry",this.prism.mirror="camera",this.applyCabinScreens(),this.ui?.syncPrism(this.prism),this.ui?.setPrismActive(!1),this.ui?.setPrismStatus("Compartilhamento encerrado"),this.uiToast("PRISM desconectado"))},e.onmeta=({width:t,height:n})=>{e.active&&t&&n&&this.ui?.setPrismStatus(`${t}×${n} · ao vivo`,!0)},this.windowFeed=e,e}applyCabinScreens(){const e=this.playerModel;if(!e)return;const t=this.windowFeed,n=!!t?.active;e.dashScreen&&(e.dashScreen.material=n&&this.prism.dash==="capture"?t.dashMaterial:this.telemetry.material),e.mirrorGlass&&(e.mirrorGlass.material=n&&this.prism.mirror==="capture"?t.mirrorMaterial:this.mirrorFeed.material)}setPrismSource(e,t){if(!(e!=="dash"&&e!=="mirror")){if(this.prism[e]=t,t==="capture"&&!this.windowFeed?.active){this.startPrismCapture();return}this.applyCabinScreens(),this.ui?.syncPrism(this.prism)}}setPrismFps(e){this.prism.fps=e,this.windowFeed?.setFps(e),this.ui?.syncPrism(this.prism)}setPrismFit(e){this.prism.fit=e,this.windowFeed?.setFit(e),this.ui?.syncPrism(this.prism)}async startPrismCapture(){if(this.prismPending)return;this.prismPending=!0;const e=this.prismToken=(this.prismToken||0)+1,t=this.ensureWindowFeed();this.ui?.setPrismStatus("Escolha uma janela, aba ou tela…");try{await t.start({fps:this.prism.fps,fit:this.prism.fit})}catch(n){this.prismPending=!1;const i=n?.code==="unsupported"?"Este navegador não captura janelas":n?.name==="NotAllowedError"?"Captura cancelada":"Falha ao abrir a captura";this.prism.dash==="capture"&&(this.prism.dash="telemetry"),this.prism.mirror==="capture"&&(this.prism.mirror="camera"),this.applyCabinScreens(),this.ui?.syncPrism(this.prism),this.ui?.setPrismStatus(i),this.ui?.setPrismActive(!1),this.uiToast(i);return}if(this.prismPending=!1,e!==this.prismToken){t.stop();return}this.prism.dash!=="capture"&&this.prism.mirror!=="capture"&&(this.prism.dash="capture"),this.applyCabinScreens(),this.ui?.syncPrism(this.prism),this.ui?.setPrismActive(!0),this.ui?.setPrismStatus("Captura ao vivo · tela central",!0),this.uiToast("PRISM CONECTADO")}stopPrismCapture(){this.prismToken=(this.prismToken||0)+1,this.windowFeed?.stop(),this.prism.dash="telemetry",this.prism.mirror="camera",this.applyCabinScreens(),this.ui?.syncPrism(this.prism),this.ui?.setPrismActive(!1),this.ui?.setPrismStatus("Nenhuma captura ativa")}togglePrism(e){this.mode!=="boot"&&document.getElementById("boot")?.classList.contains("hidden")&&(this.ui?.togglePrism(e),this.audio.ui())}updateLiveScreens(e){const t=this.playerSim;if(!t||!this.telemetry)return;this.windowFeed?.active&&this.windowFeed.update();const n=this.prism.dash==="capture"&&this.windowFeed?.active,i=this.prism.mirror==="capture"&&this.windowFeed?.active,r=this.mode==="race"?1/12:1/6;if(!n&&this.time-(this.screenClock||0)>=r){this.screenClock=this.time;const a=this.rivalSim;this.telemetry.draw({mode:this.mode,time:this.time,speed:t.speedKmh,rpm:t.rpmNorm,gear:t.gear,distance:t.distance,finish:this.finishDistance,gap:a?a.distance-t.distance:null,et:(this.mode==="race"||this.mode==="result")&&this.playerFinished?this.playerET:null,phase:this.mode==="race"||this.mode==="result"?this.playerFinished?"FIM":this.greenReached?"CORRIDA":"PREPARE":void 0})}if(this.mirrorFeed&&!i){const a=this.mode==="race"&&this.cameraMode==="cockpit";this.mirrorAcc=(this.mirrorAcc||0)+e,this.mirrorAcc>=(a?1/15:1/6)&&(this.mirrorAcc=0,this.mirrorFeed.update(this.playerGroup))}}updateCarVisuals(e){const t=this.playerModel;if(t){const i=this.playerSim,r=this.track.frameAt(this.startS+i.distance),a=Wt(r.kappa*i.speed*i.speed*.0045,-.1,.1);this.track.placeAt(this.playerGroup,this.startS+i.distance,this.track.LANE+i.lateral,a);const o=i.speed/this.playerSpec.wheelRadius*e;for(const c of t.wheels)c.spin.rotation.x-=o,c.steerGroup.rotation.y=c.front?this.steer*.42:0;if(t.steeringWheel&&(t.steeringWheel.rotation.z=this.steer*1),t.needles.tach&&(t.needles.tach.rotation.z=2.25-i.rpmNorm*4.5),t.needles.speed&&(t.needles.speed.rotation.z=2.25-Math.min(1,i.speedKmh/240)*4.5),i.gear!==this._gearShown&&(this._gearShown=i.gear,t.setGear?.(i.gear),this.mode==="race"&&t.driver?.shift()),t.driver&&t.driver.update(e,{steer:this.steer,time:this.time,speed:i.speed}),this.cabinLight&&(this.cabinLight.position.copy(this.playerGroup.localToWorld(new U(-.37,1.15,.08))),this.cabinFill.position.copy(this.playerGroup.localToWorld(new U(.05,1.3,.2)))),t.shiftLights?.length){const c=i.rpmNorm,l=this.mode==="race"?Math.floor(c*6.4):0,h=Math.floor(this.time*14)%2===0;t.shiftLights.forEach((f,u)=>{const p=u<l||c>.98&&h;f.material.color.setHex(p?f.userData.on:1513245)})}if(i.wheelspin>.38&&Math.random()<i.wheelspin){const c=new U;for(const l of t.wheels)l.front||(l.group.getWorldPosition(c),c.y=.06,this.effects.emitSmoke(c,i.wheelspin))}}if(this.rivalInfo){const i=this.rivalModels[this.rivalInfo.car];if(i&&i.group.visible){const r=this.rivalSim,a=this.track.frameAt(this.startS+r.distance),o=Wt(a.kappa*r.speed*r.speed*.0045,-.1,.1);this.track.placeAt(i.group,this.startS+r.distance,-this.track.LANE+r.lateral,o);const c=r.speed/this.rivalSpec.wheelRadius*e;for(const l of i.model.wheels)l.spin.rotation.x-=c;if(r.wheelspin>.4&&Math.random()<r.wheelspin*.7){const l=new U;for(const h of i.model.wheels)h.front||(h.group.getWorldPosition(l),l.y=.05,this.effects.emitSmoke(l,r.wheelspin*.8))}}}const n=this.mode==="race"&&(this.playerFinished||this.playerSim.brake>.1);t&&t.root.traverse(i=>{i.isMesh&&i.material&&i.material.emissive&&i.material.emissive.r>.5&&i.material.emissive.g<.2&&(i.material.emissiveIntensity=n?3.2:.9)})}updateHud(){const e=this.playerSim;if(!e)return;this.ui.setSpeed(e.speedKmh);let t="SEGURE O GÁS";if(this.ui.el.phase.textContent,this.mode==="race")if(!this.greenReached)t="EMBREIE + ACELERE",this.ui.setPhase(this.foul?"QUEIMOU":this.phase==="tree"?"LUZES ACESAS":"PREPARE-SE");else if(this.playerFinished)t="FIM",this.ui.setPhase("FIM");else if(this.playerRunStart)t=e.wheelspin>.66?"PNEU CANTANDO":this.autoShift?"CÂMBIO AUTO":e.rpmNorm>.82?"▲ TROCA A MARCHA":"SEGURE O GÁS",this.ui.setPhase("CORRIDA");else{t="SOLTE A EMBREAGEM",this.ui.setPhase(this.foul?"QUEIMOU":"VAI!");const o=!this.foul&&this.playerSim.speed<.25;this.ui.showLaunch(o),o&&this.ui.setLaunchText("SOLTE A EMBREAGEM E PISA","VAI!")}this.ui.setGear(e.gear,t,e.rpmNorm),this.ui.setTimer(this.playerRunStart?this.playerFinished?this.playerET:this.raceClock-this.playerRunStart:0),this.ui.setDist(e.distance,this.finishDistance),this.rivalSim&&this.ui.setGap(e.distance,this.rivalSim.distance,this.finishDistance);const n=!!(this.touchGas||this.keys.KeyW||this.keys.ArrowUp),i=this.playerClutchPressed()||this.greenReached&&!!(this.keys.KeyS||this.keys.ArrowDown||this.touchClutch);if(this.ui.setPedals(n,i),this.ui.setWheel(this.steer),this.mode==="race"&&this.time-(this.lineClock||0)>.12){this.lineClock=this.time;const o=this.startS+e.distance,c=this.track.speedAt(o),l=this.track.stateAt(o+8),h=this.track.nextCorner(o);let f="MANTÉM";e.speed>c+2.2?f="FREIA":(l===2||e.speed<c-3)&&(f="ACELERA"),this.ui.setRaceLine({advice:f,speed:e.speedKmh,target:c*3.6,cornerDist:h?Math.max(0,h.entry-o):null,cornerDir:h?h.dir:0,cornerSpeed:h?h.speed*3.6:null,sWorld:o,finishS:this.track.FINISH_S,profile:this.track.raceLine})}const r=e.speedKmh,a=this.mode==="race"?Wt((r-75)/150,0,.55):0;this.speedlines.style.opacity=String(a)}frame(e){const t=Math.min(.05,Math.max(1e-4,(e-this.last)/1e3));this.last=e,this.time+=t;const n=(this.keys.ArrowRight||this.keys.KeyD?1:0)+(this.keys.ArrowLeft||this.keys.KeyA?-1:0),i=n!==0?n:this.steerTarget;if(this.steer+=(i-this.steer)*Math.min(1,t*9),Math.abs(this.steer)<.002&&(this.steer=0),this.mode==="race"){this.updateRace(t),this.simAcc+=t;let o=0;for(;this.simAcc>=ya&&o<10;)this.stepRace(ya),this.simAcc-=ya,o++}this.updateCarVisuals(t),this.crashShake=Math.max(0,(this.crashShake||0)-t*2.4),this.updateCamera(t),this.effects.update(t),this.track.update(this.time),this.track.sky.position.set(this.playerGroup.position.x,0,this.playerGroup.position.z),this.mode==="race"?this.updateHud():this.mode==="result"&&(this.ui.setSpeed(this.playerSim.speedKmh),this.ui.setWheel(this.steer));const r=this.moonTarget.position;r.set(this.playerGroup.position.x,0,this.playerGroup.position.z),this.moon.position.set(r.x+28,60,r.z-18),this.moonTarget.updateMatrixWorld();const a={rpm:this.playerSim?this.playerSim.engineRpm:850,rpmNorm:this.playerSim?this.playerSim.rpmNorm:0,throttle:this.mode==="race"?this.playerInput().throttle:0,speed:this.playerSim?this.playerSim.speed:0,slip:this.playerSim?this.playerSim.wheelspin:0,racing:this.mode==="race"};if(this.audio.update(a),this.updateLiveScreens(t),this.renderer.render(this.scene,this.camera),this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.frameTimes.length===90&&this.time>4){const o=this.frameTimes.reduce((c,l)=>c+l,0)/this.frameTimes.length;!location.search.includes("hq")&&o>.045&&this.quality>.5&&(this.quality=.5,this.renderer.setPixelRatio(1),this.frameTimes.length=0)}requestAnimationFrame(o=>this.frame(o))}}function Ql(){window.__dragBrasil||(window.__dragBrasil=new j0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ql,{once:!0}):Ql();
