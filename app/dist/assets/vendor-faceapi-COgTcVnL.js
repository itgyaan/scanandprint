import{i as e,t}from"./rolldown-runtime-C0FnF6B9.js";var n=t(((e,t)=>{t.exports={}})),r=t(((e,t)=>{t.exports=e=window.fetch,e.default=window.fetch.bind(window),e.Headers=window.Headers,e.Request=window.Request,e.Response=window.Response})),i=t(((t,i)=>{(function(e,n){typeof t==`object`&&i!==void 0?n(t):typeof define==`function`&&define.amd?define([`exports`],n):n((e||=self).faceapi=e.faceapi||{})})(t,function(t){var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}a(e,t),e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function s(e,t,n,r){return new(n||=Promise)(function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,s)}c((r=r.apply(e,t||[])).next())})}function c(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=0<(i=o.trys).length&&i[i.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var l=(u.prototype.setPlatform=function(e,t){this.platform!=null&&console.warn(`Platform `+this.platformName+` has already been set. Overwriting the platform with `+t+`.`),this.platformName=e,this.platform=t},u.prototype.registerFlag=function(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){var r=this.urlFlags[e];console.warn(`Setting feature override from URL `+e+`: `+r+`.`),this.set(e,r)}},u.prototype.get=function(e){return e in this.flags||(this.flags[e]=this.evaluateFlag(e)),this.flags[e]},u.prototype.getNumber=function(e){return this.get(e)},u.prototype.getBool=function(e){return this.get(e)},u.prototype.getFlags=function(){return this.flags},Object.defineProperty(u.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),u.prototype.set=function(e,t){if(this.flagRegistry[e]==null)throw Error(`Cannot set flag `+e+` as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)},u.prototype.evaluateFlag=function(e){if(this.flagRegistry[e]==null)throw Error(`Cannot evaluate flag '`+e+`': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()},u.prototype.setFlags=function(e){this.flags=Object.assign({},e)},u.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},u.prototype.populateURLFlags=function(){var e=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var t,n,r=(t=this.global.location.search,n={},t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(e){var t=[...arguments].slice(1);return function(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||``)}(n,t[0],t[1]),t.join(`=`)}),n);`tfjsflags`in r&&r.tfjsflags.split(`,`).forEach(function(t){var n=t.split(`:`),r=n[0],i=n[1];e.urlFlags[r]=function(e,t){if((t=t.toLowerCase())===`true`||t===`false`)return t===`true`;if(``+ +t===t)return+t;throw Error(`Could not parse value flag value `+t+` for flag `+e+`.`)}(r,i)})}},u);function u(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}function d(){return f}var f=null,p=new Map,m=new Map;function h(e,t){var n=b(e,t);return p.get(n)}function g(e){return m.get(e)}function _(e){for(var t=p.entries(),n=[];;){var r=t.next(),i=r.done,a=r.value;if(i)break;var o=a[0],s=a[1];o.split(`_`)[0]===e&&n.push(s)}return n}function v(e){var t=e.kernelName,n=e.backendName,r=b(t,n);if(p.has(r))throw Error(`The kernel '`+t+`' for backend '`+n+`' is already registered`);p.set(r,e)}function y(e){var t=e.kernelName;m.has(t)&&console.warn(`Overriding the gradient for '`+t+`'`),m.set(t,e)}function b(e,t){return t+`_`+e}function x(e){for(var t=e.length,n=0,r=0;0<t;)r=Math.random()*t|0,n=e[--t],e[t]=e[r],e[r]=n}function S(e,t,n){return Math.max(e,Math.min(t,n))}function C(e){return e%2==0?e:e+1}function w(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return t}function T(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function E(e,t,n){n===void 0&&(n=``),T(A(e,t),function(){return n+` Shapes `+e+` and `+t+` must match`})}function D(e){T(e!=null,function(){return`The input to the tensor constructor must be a non-null value.`})}function O(e,t,n){if(t===void 0&&(t=[]),n===void 0&&(n=!1),t??=[],Array.isArray(e)||se(e)&&!n)for(var r=0;r<e.length;++r)O(e[r],t,n);else t.push(e);return t}function k(e){if(e.length===0)return 1;for(var t=e[0],n=1;n<e.length;n++)t*=e[n];return t}function A(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function j(e){return e%1==0}function M(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;var t=Math.exp(2*e);return(t-1)/(t+1)}function N(e){var t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function P(e,t){return t<=e.length?e:e+` `.repeat(t-e.length)}function F(e,t,n){return t===void 0&&(t=function(e){return 0}),new Promise(function(r,i){var a=0,o=function(){if(e())r();else{var s=t(++a);n!=null&&n<=a?i():setTimeout(o,s)}};o()})}function ee(e,t){for(var n=1,r=-1,i=0;i<e.length;++i)if(0<=e[i])n*=e[i];else if(e[i]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim `+r+` and dim `+i);r=i}else if(e[i]<0)throw Error(`Shapes can not be < 0. Found `+e[i]+` at dim `+i);if(r===-1){if(0<t&&t!==n)throw Error(`Size(`+t+`) must match the product of shape `+e);return e}if(n===0)throw Error(`Cannot infer the missing size in [`+e+`] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got `+t+` / `+n);var a=e.slice();return a[r]=t/n,a}function I(e,t){var n=t.length;return T((e=e==null?t.map(function(e,t){return t}):[].concat(e)).every(function(e){return-n<=e&&e<n}),function(){return`All values in axis param must be in range [-`+n+`, `+n+`) but got axis `+e}),T(e.every(function(e){return j(e)}),function(){return`All values in axis param must be integers but got axis `+e}),e.map(function(e){return e<0?n+e:e})}function te(e,t){for(var n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:I(t,e).sort(),o=0,s=0;s<e.length;++s){if(a!=null){if(a[o]===s&&e[s]!==1)throw Error(`Can't squeeze axis `+s+` since its dim '`+e[s]+`' is not 1`);(a[o]==null||a[o]>s)&&e[s]===1&&(n.push(e[s]),r.push(s)),a[o]<=s&&o++}e[s]!==1&&(n.push(e[s]),r.push(s))}return{newShape:n,keptDims:r}}function ne(e,t){var n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else{if(e!==`bool`)throw Error(`Unknown data type `+e);n=new Uint8Array(t)}return n}function re(e,t){var n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else{if(e!==`string`)throw Error(`Unknown data type `+e);n=Array(t)}return n}function ie(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type `+t+` being uploaded contains `+r+`.`)}}function ae(e){return e===`bool`||e===`complex64`||e===`float32`||e===`int32`||e===`string`}function oe(e,t){return!(t===`complex64`||t===`float32`&&e!==`complex64`||t===`int32`&&e!==`float32`&&e!==`complex64`||t===`bool`&&e===`bool`)}function se(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function ce(e){if(e===`float32`||e===`int32`)return 4;if(e===`complex64`)return 8;if(e===`bool`)return 1;throw Error(`Unknown dtype `+e)}function le(e){if(e==null)return 0;var t=0;return e.forEach(function(e){return t+=e.length}),t}function ue(e){return typeof e==`string`||e instanceof String}function de(e){return typeof e==`boolean`}function fe(e){return typeof e==`number`}function pe(e){return Array.isArray(e)?pe(e[0]):e instanceof Float32Array?`float32`:e instanceof Int32Array||e instanceof Uint8Array?`int32`:fe(e)?`float32`:ue(e)?`string`:de(e)?`bool`:`float32`}function me(e){return!!(e&&e.constructor&&e.call&&e.apply)}function he(e,t){for(var n=t;n<e;++n)if(e%n==0)return n;return e}function ge(e){var t=e.length;if(t<2)return[];var n=Array(t-1);n[t-2]=e[t-1];for(var r=t-3;0<=r;--r)n[r]=n[r+1]*e[r+1];return n}function _e(e,t,n){if(t===`string`)throw Error(`Cannot convert a string[] to a TypedArray`);if(Array.isArray(e)&&(e=O(e)),n&&ie(e,t),e instanceof Float32Array&&t===`float32`||e instanceof Int32Array&&t===`int32`||e instanceof Uint8Array&&t===`bool`)return e;if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t!==`bool`)throw Error(`Unknown data type `+t);for(var r=new Uint8Array(e.length),i=0;i<r.length;++i)Math.round(e[i])!==0&&(r[i]=1);return r}function ve(e,t){if(e.length===0)return t[0];var n=e.reduce(function(e,t){return e*t});if(n===0)return[];if(n!==t.length)throw Error(`[`+e+`] does not match the input size.`);return function e(t,n,r){var i=[];if(n.length===1)for(var a=n[0],o=0;o<a;o++)i[o]=r[t+o];else{a=n[0];var s=n.slice(1),c=s.reduce(function(e,t){return e*t});for(o=0;o<a;o++)i[o]=e(t+o*c,s,r)}return i}(0,e,t)}function ye(e,t){for(var n=be(e,t),r=0;r<n.length;r++)n[r]=1;return n}function be(e,t){if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`)return new Uint8Array(e);throw Error(`Unknown data type `+t)}function xe(){return d().platform.now()}function Se(e){e.forEach(function(t){T(Number.isInteger(t)&&0<=t,function(){return`Tensor must have a shape comprised of positive integers but got shape [`+e+`].`})})}function Ce(e,t){return t===void 0&&(t=`utf-8`),t||=`utf-8`,d().platform.encode(e,t)}function we(e,t){return t===void 0&&(t=`utf-8`),t||=`utf-8`,d().platform.decode(e,t)}function Te(e,t,n){if(t===0)return 0;if(t===1)return e[0];for(var r=e[e.length-1],i=0;i<e.length-1;++i)r+=n[i]*e[i];return r}function Ee(e,t,n){if(t===0)return[];if(t===1)return[e];for(var r=Array(t),i=0;i<r.length-1;++i)r[i]=Math.floor(e/n[i]),e-=r[i]*n[i];return r[r.length-1]=e,r}var De=Object.freeze({shuffle:x,clamp:S,nearestLargerEven:C,sum:w,randUniform:function(e,t){var n=Math.random();return t*n+(1-n)*e},distSquared:function(e,t){for(var n=0,r=0;r<e.length;r++){var i=Number(e[r])-Number(t[r]);n+=i*i}return n},assert:T,assertShapesMatch:E,assertNonNull:D,flatten:O,sizeFromShape:k,isScalarShape:function(e){return e.length===0},arraysEqual:A,isInt:j,tanh:M,sizeToSquarishShape:N,createShuffledIndices:function(e){for(var t=new Uint32Array(e),n=0;n<e;++n)t[n]=n;return x(t),t},rightPad:P,repeatedTry:F,inferFromImplicitShape:ee,parseAxisParam:I,squeezeShape:te,getTypedArrayFromDType:ne,getArrayFromDType:re,checkConversionForErrors:ie,isValidDtype:ae,hasEncodingLoss:oe,isTypedArray:se,bytesPerElement:ce,bytesFromStringArray:le,isString:ue,isBoolean:de,isNumber:fe,inferDtype:pe,isFunction:me,nearestDivisor:he,computeStrides:ge,toTypedArray:_e,toNestedArray:ve,makeOnesTypedArray:ye,makeZerosTypedArray:be,now:xe,assertNonNegativeIntegerDimensions:Se,fetch:function(e,t){return d().platform.fetch(e,t)},encodeString:Ce,decodeString:we,locToIndex:Te,indexToLoc:Ee}),Oe=(ke.prototype.profileKernel=function(e,t,n){var r,i=this,a=this.backendTimer.time(function(){r=n()});return r.forEach(function(n){n.data().then(function(r){(function(e,t,n){if(t===`float32`)for(var r=0;r<e.length;r++){var i=e[r];if(isNaN(i)||!isFinite(i))return console.warn(`Found `+i+` in the result of '`+n+`'`)}})(r,n.dtype,e),a.then(function(a){var o=``;a.getExtraProfileInfo!=null&&(o=a.getExtraProfileInfo()),i.logger.logKernelProfile(e,n,r,a.kernelMs,t,o)})})}),r},ke);function ke(e,t){this.backendTimer=e,(this.logger=t)??(this.logger=new Ae)}var Ae=(je.prototype.logKernelProfile=function(e,t,n,r,i,a){var o=typeof r==`number`?P(r+`ms`,9):r.error,s=P(e,25),c=t.rank,l=t.size,u=P(t.shape.toString(),14),d=``;for(var f in i){var p=i[f].shape||t.shape,m=p.length;d+=f+`: `+m+`D `+(0<m?p:``)+` `}console.log(`%c`+s+`	%c`+o+`	%c`+c+`D `+u+`	%c`+l+`	%c`+d+`	%c`+a,`font-weight:bold`,`color:red`,`color:blue`,`color: orange`,`color: green`,`color: steelblue`)},je);function je(){}var Me=7;function Ne(e,t,n){return P(Array.isArray(e)?parseFloat(e[0].toFixed(Me))+` + `+parseFloat(e[1].toFixed(Me))+`j`:ue(e)?`'`+e+`'`:n===`bool`?Pe(e):parseFloat(e.toFixed(Me)).toString(),t)}function Pe(e){return e===0?`false`:`true`}function Fe(e){for(var t=[],n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var Ie=(ze.prototype.set=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];n.length===0&&(n=[0]),T(n.length===this.rank,function(){return`The number of provided coordinates (`+n.length+`) must match the rank (`+t.rank+`)`});var i=this.locToIndex(n);this.values[i]=e},ze.prototype.get=function(){var e=[...arguments];e.length===0&&(e=[0]);for(var t=0,n=0,r=e;n<r.length;n++){var i=r[n];if(i<0||i>=this.shape[t]){var a=`Requested out of range element at `+e+`.   Buffer shape=`+this.shape;throw Error(a)}t++}for(var o=e[e.length-1],s=0;s<e.length-1;++s)o+=this.strides[s]*e[s];return this.values[o]},ze.prototype.locToIndex=function(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];for(var t=e[e.length-1],n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t},ze.prototype.indexToLoc=function(e){if(this.rank===0)return[];if(this.rank===1)return[e];for(var t=Array(this.shape.length),n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t},Object.defineProperty(ze.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),ze.prototype.toTensor=function(){return Le().makeTensor(this.values,this.shape,this.dtype)},ze),Le=null,L=null,Re=null;function ze(e,t,n){var r=this;if(this.dtype=t,this.shape=e.slice(),this.size=k(e),n!=null){var i=n.length;T(i===this.size,function(){return`Length of values '`+i+`' does not match the size inferred by the shape '`+r.size+`'.`})}if(t===`complex64`)throw Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);this.values=n||re(t,this.size),this.strides=ge(e)}var Be=(R.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},R.prototype.asScalar=function(){return this.throwIfDisposed(),T(this.size===1,function(){return`The array must have only 1 element.`}),this.reshape([])},R.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},R.prototype.as2D=function(e,t){return this.throwIfDisposed(),this.reshape([e,t])},R.prototype.as3D=function(e,t,n){return this.throwIfDisposed(),this.reshape([e,t,n])},R.prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),this.reshape([e,t,n,r])},R.prototype.as5D=function(e,t,n,r,i){return this.throwIfDisposed(),this.reshape([e,t,n,r,i])},R.prototype.asType=function(e){return this.throwIfDisposed(),L.cast(this,e)},Object.defineProperty(R.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),R.prototype.buffer=function(){return s(this,void 0,void 0,function(){var e;return c(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,L.buffer(this.shape,this.dtype,e)]}})})},R.prototype.bufferSync=function(){return L.buffer(this.shape,this.dtype,this.dataSync())},R.prototype.array=function(){return s(this,void 0,void 0,function(){var e;return c(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,ve(this.shape,e)]}})})},R.prototype.arraySync=function(){return ve(this.shape,this.dataSync())},R.prototype.data=function(){return s(this,void 0,void 0,function(){var e,t;return c(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),e=Le().read(this.dataId),this.dtype===`string`?[4,e]:[3,2];case 1:t=n.sent();try{return[2,t.map(function(e){return we(e)})]}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}case 2:return[2,e]}})})},R.prototype.dataSync=function(){this.throwIfDisposed();var e=Le().readSync(this.dataId);if(this.dtype===`string`)try{return e.map(function(e){return we(e)})}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}return e},R.prototype.bytes=function(){return s(this,void 0,void 0,function(){var e;return c(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),[4,Le().read(this.dataId)];case 1:return e=t.sent(),this.dtype===`string`?[2,e]:[2,new Uint8Array(e.buffer)]}})})},R.prototype.dispose=function(){this.isDisposed||(Le().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(R.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),R.prototype.throwIfDisposed=function(){if(this.isDisposed)throw Error(`Tensor is disposed.`)},R.prototype.toFloat=function(){return this.asType(`float32`)},R.prototype.toInt=function(){return this.asType(`int32`)},R.prototype.toBool=function(){return this.asType(`bool`)},R.prototype.print=function(e){return e===void 0&&(e=!1),L.print(this,e)},R.prototype.reshape=function(e){return this.throwIfDisposed(),L.reshape(this,e)},R.prototype.reshapeAs=function(e){return this.throwIfDisposed(),this.reshape(e.shape)},R.prototype.expandDims=function(e){return e===void 0&&(e=0),L.expandDims(this,e)},R.prototype.cumsum=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=!1),n===void 0&&(n=!1),L.cumsum(this,e,t,n)},R.prototype.squeeze=function(e){return this.throwIfDisposed(),L.squeeze(this,e)},R.prototype.clone=function(){return this.throwIfDisposed(),L.clone(this)},R.prototype.oneHot=function(e,t,n){return this.throwIfDisposed(),L.oneHot(this,e,t,n)},R.prototype.toString=function(e){return e===void 0&&(e=!1),function(e,t,n,r){var i=ge(t),a=function(e,t,n,r){var i=k(t),a=r[r.length-1],o=Array(a).fill(0),s=t.length,c=n===`complex64`?Fe(e):e;if(1<s)for(var l=0;l<i/a;l++)for(var u=l*a,d=0;d<a;d++)o[d]=Math.max(o[d],Ne(c[u+d],0,n).length);return o}(e,t,n,i),o=t.length,s=function e(t,n,r,i,a,o){o===void 0&&(o=!0);var s=r===`complex64`?2:1,c=n[0],l=n.length;if(l===0)return r===`complex64`?[Ne(Fe(t)[0],0,r)]:r===`bool`?[Pe(t[0])]:[t[0].toString()];if(l===1){if(20<c){var u=3*s,d=Array.from(t.slice(0,u)),f=Array.from(t.slice((c-3)*s,c*s));return r===`complex64`&&(d=Fe(d),f=Fe(f)),[`[`+d.map(function(e,t){return Ne(e,a[t],r)}).join(`, `)+`, ..., `+f.map(function(e,t){return Ne(e,a[c-3+t],r)}).join(`, `)+`]`]}return[`[`+(r===`complex64`?Fe(t):Array.from(t)).map(function(e,t){return Ne(e,a[t],r)}).join(`, `)+`]`]}var p=n.slice(1),m=i.slice(1),h=i[0]*s,g=[];if(20<c){for(var _=0;_<3;_++){var v=(y=_*h)+h;g.push.apply(g,e(t.slice(y,v),p,r,m,a,!1))}for(g.push(`...`),_=c-3;_<c;_++)v=(y=_*h)+h,g.push.apply(g,e(t.slice(y,v),p,r,m,a,_===c-1))}else for(_=0;_<c;_++){var y;v=(y=_*h)+h,g.push.apply(g,e(t.slice(y,v),p,r,m,a,_===c-1))}var b=l===2?`,`:``;for(g[0]=`[`+g[0]+b,_=1;_<g.length-1;_++)g[_]=` `+g[_]+b;var x=`,
`;for(_=2;_<l;_++)x+=`
`;return g[g.length-1]=` `+g[g.length-1]+`]`+(o?``:x),g}(e,t,n,i,a),c=[`Tensor`];return r&&(c.push(`  dtype: `+n),c.push(`  rank: `+o),c.push(`  shape: [`+t+`]`),c.push(`  values:`)),c.push(s.map(function(e){return`    `+e}).join(`
`)),c.join(`
`)}(this.dataSync(),this.shape,this.dtype,e)},R.prototype.tile=function(e){return this.throwIfDisposed(),L.tile(this,e)},R.prototype.gather=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),L.gather(this,e,t)},R.prototype.matMul=function(e,t,n){return t===void 0&&(t=!1),n===void 0&&(n=!1),this.throwIfDisposed(),L.matMul(this,e,t,n)},R.prototype.dot=function(e){return this.throwIfDisposed(),L.dot(this,e)},R.prototype.norm=function(e,t,n){return e===void 0&&(e=`euclidean`),t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),L.norm(this,e,t,n)},R.prototype.slice=function(e,t){return this.throwIfDisposed(),L.slice(this,e,t)},R.prototype.reverse=function(e){return this.throwIfDisposed(),L.reverse(this,e)},R.prototype.concat=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),e instanceof R&&(e=[e]),L.concat([this].concat(e),t)},R.prototype.split=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),L.split(this,e,t)},R.prototype.stack=function(e,t){return t===void 0&&(t=0),L.stack([this,e],t)},R.prototype.unstack=function(e){return e===void 0&&(e=0),L.unstack(this,e)},R.prototype.pad=function(e,t){return t===void 0&&(t=0),L.pad(this,e,t)},R.prototype.batchNormalization=function(e,t,n,r,i){return n===void 0&&(n=.001),Re(`tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon`),this.batchNorm(e,t,i,r,n)},R.prototype.batchNorm=function(e,t,n,r,i){return i===void 0&&(i=.001),this.throwIfDisposed(),L.batchNorm(this,e,t,n,r,i)},R.prototype.all=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),L.all(this,e,t)},R.prototype.any=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),L.any(this,e,t)},R.prototype.logSumExp=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),L.logSumExp(this,e,t)},R.prototype.sum=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),L.sum(this,e,t)},R.prototype.prod=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),L.prod(this,e,t)},R.prototype.mean=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),L.mean(this,e,t)},R.prototype.min=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),L.min(this,e,t)},R.prototype.max=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),L.max(this,e,t)},R.prototype.argMin=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),L.argMin(this,e)},R.prototype.argMax=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),L.argMax(this,e)},R.prototype.cast=function(e){return this.throwIfDisposed(),L.cast(this,e)},R.prototype.add=function(e){return this.throwIfDisposed(),L.add(this,e)},R.prototype.addStrict=function(e){return this.throwIfDisposed(),L.addStrict(this,e)},R.prototype.atan2=function(e){return this.throwIfDisposed(),L.atan2(this,e)},R.prototype.sub=function(e){return this.throwIfDisposed(),L.sub(this,e)},R.prototype.subStrict=function(e){return this.throwIfDisposed(),L.subStrict(this,e)},R.prototype.pow=function(e){return this.throwIfDisposed(),L.pow(this,e)},R.prototype.powStrict=function(e){return this.throwIfDisposed(),L.powStrict(this,e)},R.prototype.mul=function(e){return this.throwIfDisposed(),L.mul(this,e)},R.prototype.mulStrict=function(e){return this.throwIfDisposed(),L.mulStrict(this,e)},R.prototype.div=function(e){return this.throwIfDisposed(),L.div(this,e)},R.prototype.divNoNan=function(e){return this.throwIfDisposed(),L.divNoNan(this,e)},R.prototype.floorDiv=function(e){return this.throwIfDisposed(),L.floorDiv(this,e)},R.prototype.divStrict=function(e){return this.throwIfDisposed(),L.divStrict(this,e)},R.prototype.minimum=function(e){return this.throwIfDisposed(),L.minimum(this,e)},R.prototype.minimumStrict=function(e){return this.throwIfDisposed(),L.minimumStrict(this,e)},R.prototype.maximum=function(e){return this.throwIfDisposed(),L.maximum(this,e)},R.prototype.maximumStrict=function(e){return this.throwIfDisposed(),L.maximumStrict(this,e)},R.prototype.mod=function(e){return this.throwIfDisposed(),L.mod(this,e)},R.prototype.modStrict=function(e){return this.throwIfDisposed(),L.modStrict(this,e)},R.prototype.squaredDifferenceStrict=function(e){return this.throwIfDisposed(),L.squaredDifferenceStrict(this,e)},R.prototype.transpose=function(e){return this.throwIfDisposed(),L.transpose(this,e)},R.prototype.notEqual=function(e){return this.throwIfDisposed(),L.notEqual(this,e)},R.prototype.notEqualStrict=function(e){return this.throwIfDisposed(),L.notEqualStrict(this,e)},R.prototype.less=function(e){return this.throwIfDisposed(),L.less(this,e)},R.prototype.lessStrict=function(e){return this.throwIfDisposed(),L.lessStrict(this,e)},R.prototype.equal=function(e){return this.throwIfDisposed(),L.equal(this,e)},R.prototype.equalStrict=function(e){return this.throwIfDisposed(),L.equalStrict(this,e)},R.prototype.lessEqual=function(e){return this.throwIfDisposed(),L.lessEqual(this,e)},R.prototype.lessEqualStrict=function(e){return this.throwIfDisposed(),L.lessEqualStrict(this,e)},R.prototype.greater=function(e){return this.throwIfDisposed(),L.greater(this,e)},R.prototype.greaterStrict=function(e){return this.throwIfDisposed(),L.greaterStrict(this,e)},R.prototype.greaterEqual=function(e){return this.throwIfDisposed(),L.greaterEqual(this,e)},R.prototype.greaterEqualStrict=function(e){return this.throwIfDisposed(),L.greaterEqualStrict(this,e)},R.prototype.logicalAnd=function(e){return this.throwIfDisposed(),L.logicalAnd(this,e)},R.prototype.logicalOr=function(e){return this.throwIfDisposed(),L.logicalOr(this,e)},R.prototype.logicalNot=function(){return this.throwIfDisposed(),L.logicalNot(this)},R.prototype.logicalXor=function(e){return this.throwIfDisposed(),L.logicalXor(this,e)},R.prototype.where=function(e,t){return this.throwIfDisposed(),L.where(e,this,t)},R.prototype.neg=function(){return this.throwIfDisposed(),L.neg(this)},R.prototype.ceil=function(){return this.throwIfDisposed(),L.ceil(this)},R.prototype.floor=function(){return this.throwIfDisposed(),L.floor(this)},R.prototype.sign=function(){return this.throwIfDisposed(),L.sign(this)},R.prototype.isNaN=function(){return this.throwIfDisposed(),L.isNaN(this)},R.prototype.isInf=function(){return this.throwIfDisposed(),L.isInf(this)},R.prototype.isFinite=function(){return this.throwIfDisposed(),L.isFinite(this)},R.prototype.exp=function(){return this.throwIfDisposed(),L.exp(this)},R.prototype.expm1=function(){return this.throwIfDisposed(),L.expm1(this)},R.prototype.log=function(){return this.throwIfDisposed(),L.log(this)},R.prototype.log1p=function(){return this.throwIfDisposed(),L.log1p(this)},R.prototype.sqrt=function(){return this.throwIfDisposed(),L.sqrt(this)},R.prototype.rsqrt=function(){return this.throwIfDisposed(),L.rsqrt(this)},R.prototype.square=function(){return this.throwIfDisposed(),L.square(this)},R.prototype.reciprocal=function(){return this.throwIfDisposed(),L.reciprocal(this)},R.prototype.abs=function(){return this.throwIfDisposed(),L.abs(this)},R.prototype.clipByValue=function(e,t){return this.throwIfDisposed(),L.clipByValue(this,e,t)},R.prototype.relu=function(){return this.throwIfDisposed(),L.relu(this)},R.prototype.relu6=function(){return this.throwIfDisposed(),L.relu6(this)},R.prototype.elu=function(){return this.throwIfDisposed(),L.elu(this)},R.prototype.selu=function(){return this.throwIfDisposed(),L.selu(this)},R.prototype.leakyRelu=function(e){return e===void 0&&(e=.2),this.throwIfDisposed(),L.leakyRelu(this,e)},R.prototype.prelu=function(e){return this.throwIfDisposed(),L.prelu(this,e)},R.prototype.sigmoid=function(){return this.throwIfDisposed(),L.sigmoid(this)},R.prototype.logSigmoid=function(){return this.throwIfDisposed(),L.logSigmoid(this)},R.prototype.softplus=function(){return this.throwIfDisposed(),L.softplus(this)},R.prototype.zerosLike=function(){return this.throwIfDisposed(),L.zerosLike(this)},R.prototype.onesLike=function(){return this.throwIfDisposed(),L.onesLike(this)},R.prototype.sin=function(){return this.throwIfDisposed(),L.sin(this)},R.prototype.cos=function(){return this.throwIfDisposed(),L.cos(this)},R.prototype.tan=function(){return this.throwIfDisposed(),L.tan(this)},R.prototype.asin=function(){return this.throwIfDisposed(),L.asin(this)},R.prototype.acos=function(){return this.throwIfDisposed(),L.acos(this)},R.prototype.atan=function(){return this.throwIfDisposed(),L.atan(this)},R.prototype.sinh=function(){return this.throwIfDisposed(),L.sinh(this)},R.prototype.cosh=function(){return this.throwIfDisposed(),L.cosh(this)},R.prototype.tanh=function(){return this.throwIfDisposed(),L.tanh(this)},R.prototype.asinh=function(){return this.throwIfDisposed(),L.asinh(this)},R.prototype.acosh=function(){return this.throwIfDisposed(),L.acosh(this)},R.prototype.atanh=function(){return this.throwIfDisposed(),L.atanh(this)},R.prototype.erf=function(){return this.throwIfDisposed(),L.erf(this)},R.prototype.round=function(){return this.throwIfDisposed(),L.round(this)},R.prototype.step=function(e){return e===void 0&&(e=0),this.throwIfDisposed(),L.step(this,e)},R.prototype.softmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),L.softmax(this,e)},R.prototype.logSoftmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),L.logSoftmax(this,e)},R.prototype.resizeBilinear=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),L.image.resizeBilinear(this,e,t)},R.prototype.resizeNearestNeighbor=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),L.image.resizeNearestNeighbor(this,e,t)},R.prototype.conv1d=function(e,t,n,r,i,a){return r===void 0&&(r=`NWC`),i===void 0&&(i=1),this.throwIfDisposed(),L.conv1d(this,e,t,n,r,i,a)},R.prototype.conv2d=function(e,t,n,r,i,a){return r===void 0&&(r=`NHWC`),i===void 0&&(i=[1,1]),this.throwIfDisposed(),L.conv2d(this,e,t,n,r,i,a)},R.prototype.conv2dTranspose=function(e,t,n,r,i){return this.throwIfDisposed(),L.conv2dTranspose(this,e,t,n,r,i)},R.prototype.depthwiseConv2D=function(e,t,n,r,i,a){return r===void 0&&(r=`NHWC`),i===void 0&&(i=[1,1]),this.throwIfDisposed(),L.depthwiseConv2d(this,e,t,n,r,i,a)},R.prototype.separableConv2d=function(e,t,n,r,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a=`NHWC`),this.throwIfDisposed(),L.separableConv2d(this,e,t,n,r,i,a)},R.prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),L.avgPool(this,e,t,n,r)},R.prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),L.maxPool(this,e,t,n,r)},R.prototype.localResponseNormalization=function(e,t,n,r){return e===void 0&&(e=5),t===void 0&&(t=1),n===void 0&&(n=1),r===void 0&&(r=.5),L.localResponseNormalization(this,e,t,n,r)},R.prototype.pool=function(e,t,n,r,i){return this.throwIfDisposed(),L.pool(this,e,t,n,r,i)},R.prototype.variable=function(e,t,n){return e===void 0&&(e=!0),this.throwIfDisposed(),Le().makeVariable(this,e,t,n)},R.prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),L.unsortedSegmentSum(this,e,t)},R.prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),L.batchToSpaceND(this,e,t)},R.prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),L.spaceToBatchND(this,e,t)},R.prototype.topk=function(e,t){return e===void 0&&(e=1),t===void 0&&(t=!0),this.throwIfDisposed(),L.topk(this,e,t)},R.prototype.stridedSlice=function(e,t,n,r,i,a,o,s){return r===void 0&&(r=0),i===void 0&&(i=0),a===void 0&&(a=0),o===void 0&&(o=0),s===void 0&&(s=0),this.throwIfDisposed(),L.stridedSlice(this,e,t,n,r,i,a,o,s)},R.prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),L.depthToSpace(this,e,t)},R.prototype.fft=function(){return this.throwIfDisposed(),L.spectral.fft(this)},R.prototype.ifft=function(){return this.throwIfDisposed(),L.spectral.ifft(this)},R.prototype.rfft=function(){return this.throwIfDisposed(),L.spectral.rfft(this)},R.prototype.irfft=function(){return this.throwIfDisposed(),L.spectral.irfft(this)},R);function R(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||`float32`,this.size=k(e),this.strides=ge(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():`higher`}Object.defineProperty(Be,Symbol.hasInstance,{value:function(e){return!!e&&e.dataId!=null&&e.shape!=null&&e.dtype!=null}});var Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe=(o($e,Ke=Be),$e.prototype.assign=function(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (`+e.dtype+`) and previous value (`+this.dtype+`) must match`);if(!A(e.shape,this.shape))throw Error(`shape of the new value (`+e.shape+`) and previous value (`+this.shape+`) must match`);Le().disposeTensor(this),this.dataId=e.dataId,Le().incRef(this,null)},$e.prototype.dispose=function(){Le().disposeVariable(this),this.isDisposedInternal=!0},$e);function $e(e,t,n,r){var i=Ke.call(this,e.shape,e.dtype,e.dataId,r)||this;return i.trainable=t,i.name=n,i}Object.defineProperty(Qe,Symbol.hasInstance,{value:function(e){return e instanceof Be&&e.assign!=null&&e.assign instanceof Function}}),(Ze=Ve||={}).R0=`R0`,Ze.R1=`R1`,Ze.R2=`R2`,Ze.R3=`R3`,Ze.R4=`R4`,Ze.R5=`R5`,Ze.R6=`R6`,(Xe=He||={}).float32=`float32`,Xe.int32=`int32`,Xe.bool=`int32`,Xe.complex64=`complex64`,(Ye=Ue||={}).float32=`float32`,Ye.int32=`int32`,Ye.bool=`bool`,Ye.complex64=`complex64`,(Je=We||={}).float32=`float32`,Je.int32=`float32`,Je.bool=`float32`,Je.complex64=`complex64`,(qe=Ge||={}).float32=`complex64`,qe.int32=`complex64`,qe.bool=`complex64`,qe.complex64=`complex64`;var et={float32:We,int32:He,bool:Ue,complex64:Ge};function tt(e,t){if(e!==`string`&&t!==`string`)return et[e][t];if(e===`string`&&t===`string`)return`string`;throw Error(`Can not upcast `+e+` with `+t)}function nt(e){return tt(e,`int32`)}function rt(e,t){if(e.dtype===t.dtype)return[e,t];var n=tt(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function it(e,t){T(e.dtype===t.dtype,function(){return`The dtypes of the first(`+e.dtype+`) and second(`+t.dtype+`) input must match`})}function at(e){var t=[];return function e(t,n,r){if(t!=null){if(t instanceof Be)n.push(t);else if(i=t,Array.isArray(i)||typeof i==`object`){var i,a=t;for(var o in a){var s=a[o];r.has(s)||(r.add(s),e(s,n,r))}}}}(e,t,new Set),t}var ot,st=Object.freeze({makeTypesMatch:rt,assertTypesMatch:it,isTensorInList:function(e,t){return t.some(function(t){return t.id===e.id})},getTensorsInContainer:at}),ct=(ut.prototype.dispose=function(){for(var e in this.registeredVariables)this.registeredVariables[e].dispose()},ut),lt=(z.prototype.ready=function(){return s(this,void 0,void 0,function(){var e,t,n;return c(this,function(r){switch(r.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];e=this.getSortedBackends(),t=0,r.label=1;case 1:return t<e.length?(n=e[t],[4,this.initializeBackend(n).success]):[3,5];case 2:return r.sent()?[4,this.setBackend(n)]:[3,4];case 3:return r.sent(),[2];case 4:return t++,[3,1];case 5:throw Error(`Could not initialize any backends, all backend initializations failed.`)}})})},Object.defineProperty(z.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw Error(`Backend '`+this.backendName+`' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){var e=this.initializeBackendsAndReturnBest(),t=e.name;if(e.asyncInit)throw Error(`The highest priority backend '`+t+`' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance},enumerable:!0,configurable:!0}),z.prototype.backendNames=function(){return Object.keys(this.registryFactory)},z.prototype.findBackend=function(e){return!(e in this.registry)&&(!(e in this.registryFactory)||this.initializeBackend(e).asyncInit)?null:this.registry[e]},z.prototype.findBackendFactory=function(e){return e in this.registryFactory?this.registryFactory[e].factory:null},z.prototype.registerBackend=function(e,t,n){return n===void 0&&(n=1),e in this.registryFactory?(console.warn(e+` backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)},z.prototype.setBackend=function(e){return s(this,void 0,void 0,function(){var t,n,r;return c(this,function(i){switch(i.label){case 0:if(this.registryFactory[e]==null)throw Error(`Backend name '`+e+`' not found in registry`);return this.backendName=e,this.registry[e]==null?(this.backendInstance=null,t=this.initializeBackend(e),n=t.success,t.asyncInit?[4,n]:[3,2]):[3,4];case 1:return r=i.sent(),[3,3];case 2:r=n,i.label=3;case 3:if(!r)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Oe(this.backendInstance),[2,!0]}})})},z.prototype.setupRegisteredKernels=function(){var e=this;_(this.backendName).forEach(function(t){t.setupFunc!=null&&t.setupFunc(e.backendInstance)})},z.prototype.disposeRegisteredKernels=function(e){var t=this;_(e).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(t.registry[e])})},z.prototype.initializeBackend=function(e){var t=this,n=this.registryFactory[e];if(n==null)throw Error(`Cannot initialize backend `+e+`, no registration found.`);try{var r=n.factory();if(Promise.resolve(r)!==r)return this.registry[e]=r,{success:!0,asyncInit:!1};var i=++this.pendingBackendInitId,a=r.then(function(n){return!(i<t.pendingBackendInitId||(t.registry[e]=n,t.pendingBackendInit=null))}).catch(function(n){return!(i<t.pendingBackendInitId||(t.pendingBackendInit=null,console.warn(`Initialization of backend `+e+` failed`),console.warn(n.stack||n.message),1))});return{success:this.pendingBackendInit=a,asyncInit:!0}}catch(t){return console.warn(`Initialization of backend `+e+` failed`),console.warn(t.stack||t.message),{success:!1,asyncInit:!1}}},z.prototype.removeBackend=function(e){if(!(e in this.registryFactory))throw Error(e+` backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},z.prototype.getSortedBackends=function(){var e=this;if(Object.keys(this.registryFactory).length===0)throw Error(`No backend found in registry.`);return Object.keys(this.registryFactory).sort(function(t,n){return e.registryFactory[n].priority-e.registryFactory[t].priority})},z.prototype.initializeBackendsAndReturnBest=function(){for(var e=this.getSortedBackends(),t=0;t<e.length;t++){var n=e[t],r=this.initializeBackend(n),i=r.success,a=r.asyncInit;if(a||i)return{name:n,asyncInit:a}}throw Error(`Could not initialize any backends, all backend initializations failed.`)},z.prototype.moveData=function(e,t){var n=this.state.tensorInfo.get(t),r=n.backend,i=this.readSync(t);r.disposeData(t),(n.backend=e).move(t,i,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},z.prototype.tidy=function(e,t){var n,r=this,i=null;if(t==null){if(typeof e!=`function`)throw Error(`Please provide a function to tidy()`);t=e}else{if(typeof e!=`string`&&!(e instanceof String))throw Error(`When calling with two arguments, the first argument to tidy() must be a string`);if(typeof t!=`function`)throw Error(`When calling with two arguments, the 2nd argument to tidy() must be a function`);i=e}return this.scopedRun(function(){return r.startScope(i)},function(){return r.endScope(n)},function(){return(n=t())instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),n})},z.prototype.scopedRun=function(e,t,n){e();try{var r=n();return t(),r}catch(e){throw t(),e}},z.prototype.nextTensorId=function(){return z.nextTensorId++},z.prototype.nextVariableId=function(){return z.nextVariableId++},z.prototype.clone=function(e){var t=this.makeTensorFromDataId(e.dataId,e.shape,e.dtype),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],function(e){return{x:function(){return e.toFloat()}}},[]),t},z.prototype.runKernel=function(e,t,n,r,i){return this.runKernelFunc(null,t,null,e,n,r,i)},z.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool(`IS_TEST`)},z.prototype.checkKernelForMemLeak=function(e,t,n){var r=this.backend.numDataIds(),i=0;n.forEach(function(e){i+=e.dtype===`complex64`?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-i-a;if(0<o)throw Error(`Backend '`+this.backendName+`' has an internal memory leak (`+o+` data ids) after running '`+e+`'`)},z.prototype.runKernelFunc=function(e,t,n,r,i,a,o){var s,c=this;a===void 0&&(a=[]),o===void 0&&(o=[]);var l=[],u=this.isTapeOn();function d(e){u&&(l=e.map(function(e){return c.keep(c.clone(e))}))}r??=this.state.activeScope==null?``:this.state.activeScope.name;var f,p=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var g,_=h(r,this.backendName);return f=_==null?function(){var t=c.backend.numDataIds();g=c.tidy(function(){return e(c.backend,d)});var n=Array.isArray(g)?g:[g];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(r,t,n),n}:function(){var e=c.backend.numDataIds();g=_.kernelFunc({inputs:t,attrs:i,backend:c.backend});var n=Array.isArray(g)?g:[g];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(r,e,n);var s=n.map(function(e){var t=e.dataId,n=e.shape,r=e.dtype;return c.makeTensorFromDataId(t,n,r)}),l=s.filter(function(e,t){return o[t]});return d((a||[]).slice().concat(l)),s},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){s=c.ENV.getBool(`DEBUG`)?c.profiler.profileKernel(r,t,function(){return f()}):f()}),u&&this.addTapeNode(r,t,s,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:r,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(t).map(function(e){return t[e].shape}),outputShapes:s.map(function(e){return e.shape})}),Array.isArray(g)?s:s[0]},z.prototype.makeTensor=function(e,t,n,r){if(e==null)throw Error(`Values passed to engine.makeTensor() are null`);n||=`float32`,r||=this.backend;var i=e;n===`string`&&ue(e[0])&&(i=e.map(function(e){return Ce(e)}));var a=r.write(i,t,n),o=new Be(t,n,a,this.nextTensorId());if(this.incRef(o,r),n===`string`){var s=this.state.tensorInfo.get(a),c=le(i);this.state.numBytes+=c-s.bytes,s.bytes=c}return o},z.prototype.makeTensorFromDataId=function(e,t,n,r){var i=new Be(t,n||=`float32`,e,this.nextTensorId());return this.incRef(i,r),i},z.prototype.makeVariable=function(e,t,n,r){t===void 0&&(t=!0),n||=this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.asType(r));var i=new Qe(e,t,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw Error(`Variable with name `+i.name+` was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},z.prototype.incRef=function(e,t){var n=this.state.tensorInfo.has(e.dataId)?this.state.tensorInfo.get(e.dataId).refCount:0;if(this.state.numTensors++,e.dtype===`string`&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var r=0;e.dtype!==`complex64`&&e.dtype!==`string`&&(r=e.size*ce(e.dtype)),this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r,refCount:0}),this.state.numBytes+=r}this.state.tensorInfo.get(e.dataId).refCount++,e instanceof Qe||this.track(e)},z.prototype.disposeTensor=function(e){if(this.state.tensorInfo.has(e.dataId)){this.state.numTensors--,e.dtype===`string`&&this.state.numStringTensors--;var t=this.state.tensorInfo.get(e.dataId);t.refCount<=1?(e.dtype!==`complex64`&&(this.state.numBytes-=t.bytes),this.state.numDataBuffers--,t.backend.disposeData(e.dataId),this.state.tensorInfo.delete(e.dataId)):this.state.tensorInfo.get(e.dataId).refCount--}},z.prototype.disposeVariables=function(){for(var e in this.state.registeredVariables){var t=this.state.registeredVariables[e];this.disposeVariable(t)}},z.prototype.disposeVariable=function(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]},z.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,0<this.state.numStringTensors&&(e.unreliable=!0,e.reasons??=[],e.reasons.push(`Memory usage by string tensors is approximate (2 bytes per character)`)),e},z.prototype.profile=function(e){return s(this,void 0,void 0,function(){var t,n;return c(this,function(r){return this.state.profiling=!0,t=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(e){return e.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},z.prototype.isTapeOn=function(){return 0<this.state.gradientDepth&&this.state.kernelDepth===0},z.prototype.addTapeNode=function(e,t,n,r,i){var a=this,o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:i},s=g(e);s!=null&&(r=s.gradFunc),r!=null&&(o.gradient=function(e){return e=e.map(function(e,t){if(e!=null)return e;var r=n[t],i=be(r.size,r.dtype);return a.makeTensor(i,r.shape,r.dtype)}),r(1<e.length?e:e[0],i)}),this.state.activeTape.push(o)},z.prototype.keep=function(e){return e.kept=!0,e},z.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},z.prototype.endTape=function(){this.state.gradientDepth--},z.prototype.startScope=function(e){var t={track:[],name:`unnamed scope`,id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t},z.prototype.endScope=function(e){for(var t=this,n=at(e),r=new Set(n.map(function(e){return e.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||r.has(a.id)||a.dispose()}var o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(e){e.kept||e.scopeId!==o.id||t.track(e)})},z.prototype.gradients=function(e,t,n,r){var i=this;if(r===void 0&&(r=!1),T(0<t.length,function(){return`gradients() received an empty list of xs.`}),n!=null&&n.dtype!==`float32`)throw Error(`dy must have 'float32' dtype, but has '`+n.dtype+`'`);var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy(`forward`,e)});T(a instanceof Be,function(){return`The result y returned by f() must be a tensor.`});var o=function(e,t,n){for(var r={},i={},a=0;a<t.length;a++)r[t[a].id]=!0;for(a=0;a<e.length;a++){var o=(m=e[a]).inputs;for(var s in o){for(var c=o[s],l=!1,u=0;u<t.length;u++)if(r[c.id]){m.outputs.forEach(function(e){return r[e.id]=!0}),l=!0,i[m.id]=!0;break}if(l)break}}var d={};d[n.id]=!0;var f={};for(a=e.length-1;0<=a;a--)for(o=(m=e[a]).inputs,u=0;u<m.outputs.length;u++)if(d[m.outputs[u].id]){for(var s in o)d[o[s].id]=!0,f[m.id]=!0;break}var p=[];for(a=0;a<e.length;a++){var m;if(i[(m=e[a]).id]&&f[m.id]){var h={};for(var s in m.inputs){var g=m.inputs[s];r[g.id]&&(h[s]=g)}var _=Object.assign({},m);_.inputs=h,_.outputs=m.outputs,p.push(_)}}return p}(this.state.activeTape,t,a);if(!r&&o.length===0&&0<t.length)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.`);return this.tidy(`backward`,function(){var e,r,s={};s[a.id]=n??(r=ye(k(e=a.shape),`float32`),B.makeTensor(r,e,`float32`)),function(e,t){for(var n=function(n){var r=t[n],a=[];if(r.outputs.forEach(function(t){var n=e[t.id];n==null?a.push(null):a.push(n)}),r.gradient==null)throw Error(`Cannot compute gradient: gradient function not found for `+r.kernelName+`.`);function o(t){if(!(t in s))throw Error(`Cannot backprop through input `+t+`. Available gradients found: `+Object.keys(s)+`.`);var n=function(e){return i.tidy(e)}(function(){return s[t]()});if(n.dtype!==`float32`)throw Error(`Error in gradient for op `+r.kernelName+`. The gradient of input `+t+` must have 'float32' dtype, but has '`+n.dtype+`'`);var a=r.inputs[t];if(!A(n.shape,a.shape))throw Error(`Error in gradient for op `+r.kernelName+`. The gradient of input '`+t+`' has shape '`+n.shape+`', which does not match the shape of the input '`+a.shape+`'`);if(e[a.id]==null)e[a.id]=n;else{var o=e[a.id];e[a.id]=o.add(n),o.dispose()}}var s=r.gradient(a);for(var c in r.inputs)o(c)},r=t.length-1;0<=r;r--)n(r)}(s,o);var c=t.map(function(e){return s[e.id]});return i.state.gradientDepth===0&&(i.state.activeTape.forEach(function(e){for(var t=0,n=e.saved;t<n.length;t++)n[t].dispose()}),i.state.activeTape=null),{value:a,grads:c}})},z.prototype.customGrad=function(e){var t=this;return T(me(e),function(){return`The f passed in customGrad(f) must be a function.`}),function(){for(var n,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];T(r.every(function(e){return e instanceof Be}),function(){return`The args passed in customGrad(f)(x1, x2,...) must all be tensors`});var a={};return r.forEach(function(e,t){a[t]=e}),t.runKernelFunc(function(t,i){return T((n=e.apply(void 0,r.concat([i]))).value instanceof Be,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),T(me(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},a,function(e,t){var i=n.gradFunc(e,t),a=Array.isArray(i)?i:[i];T(a.length===r.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),T(a.every(function(e){return e instanceof Be}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var o={};return a.forEach(function(e,t){o[t]=function(){return e}}),o})}},z.prototype.readSync=function(e){return this.state.tensorInfo.get(e).backend.readSync(e)},z.prototype.read=function(e){return this.state.tensorInfo.get(e).backend.read(e)},z.prototype.time=function(e){return s(this,void 0,void 0,function(){var t,n;return c(this,function(r){switch(r.label){case 0:return t=xe(),[4,this.backend.time(e)];case 1:return(n=r.sent()).wallMs=xe()-t,[2,n]}})})},z.prototype.track=function(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e},Object.defineProperty(z.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),z.prototype.reset=function(){for(var e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ct,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},z.nextTensorId=0,z.nextVariableId=0,z);function z(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ct}function ut(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}var B=function(){var e,t=function(){if(ot==null){var e=void 0;if(typeof window<`u`)e=window;else if(typeof global<`u`)e=global;else if(typeof process<`u`)e=process;else{if(typeof self>`u`)throw Error(`Could not find a global object`);e=self}ot=e}return ot}();return t._tfengine??=new lt(new l(t)),e=t._tfengine.ENV,f=e,Le=function(){return t._tfengine},t._tfengine}();function dt(){return typeof window<`u`&&window.document!=null||typeof WorkerGlobalScope<`u`}var ft=d();ft.registerFlag(`DEBUG`,function(){return!1},function(e){e&&console.warn(`Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.`)}),ft.registerFlag(`IS_BROWSER`,function(){return dt()}),ft.registerFlag(`IS_NODE`,function(){return typeof process<`u`&&process.versions!==void 0&&process.versions.node!==void 0}),ft.registerFlag(`IS_CHROME`,function(){return typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),ft.registerFlag(`PROD`,function(){return!1}),ft.registerFlag(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`,function(){return ft.getBool(`DEBUG`)}),ft.registerFlag(`DEPRECATION_WARNINGS_ENABLED`,function(){return!0}),ft.registerFlag(`IS_TEST`,function(){return!1});var pt,mt,ht,gt,_t,vt,yt={},bt={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function xt(e,t){yt[e]=t}function St(e){e in yt||(yt[e]=function(e){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);var t=function(){if(typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}();return t.addEventListener(`webglcontextlost`,function(t){t.preventDefault(),delete yt[e]},!1),e===1?t.getContext(`webgl`,bt)||t.getContext(`experimental-webgl`,bt):t.getContext(`webgl2`,bt)}(e));var t=yt[e];return t.isContextLost()?(delete yt[e],St(e)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),yt[e])}function Ct(e,t){return[t,e]}function wt(e){var t=k(e);return N(Math.ceil(t/4))}function Tt(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function Et(e,t){var n,r,i,a,o,s,c,l,u,f=e;return u=d().getNumber(`WEBGL_VERSION`)===2?(n=f.R32F,r=f.R16F,i=f.RGBA16F,a=f.RGBA32F,o=f.RED,s=4,c=1,l=f.HALF_FLOAT,f.FLOAT):(n=e.RGBA,r=e.RGBA,i=e.RGBA,a=f.RGBA,o=e.RGBA,c=s=4,l=t==null?null:t.HALF_FLOAT_OES,e.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:i,internalFormatPackedFloat:a,textureFormatFloat:o,downloadTextureFormat:e.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:c,textureTypeHalfFloat:l,textureTypeFloat:u}}function V(e,t,n){var r=n();return t&&function(e){var t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+Ot(e,t))}(e),r}(vt=pt||={})[vt.DENSE=0]=`DENSE`,vt[vt.SHARED_BATCH=1]=`SHARED_BATCH`,(_t=mt||={})[_t.RENDER=0]=`RENDER`,_t[_t.UPLOAD=1]=`UPLOAD`,_t[_t.PIXELS=2]=`PIXELS`,_t[_t.DOWNLOAD=3]=`DOWNLOAD`,(gt=ht||={})[gt.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,gt[gt.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,gt[gt.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,gt[gt.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,gt[gt.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`;function Dt(e){return!!(d().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||5.96e-8<Math.abs(e)&&Math.abs(e)<65504)}function Ot(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code `+t}}function kt(e,t,n){return Qt(e,t,function(){return e.getExtension(n)},`Extension "`+n+`" not supported on this browser.`)}function At(e,t,n){var r=Qt(e,t,function(){return e.createShader(e.VERTEX_SHADER)},`Unable to create vertex WebGLShader.`);if(V(e,t,function(){return e.shaderSource(r,n)}),V(e,t,function(){return e.compileShader(r)}),!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(r)),Error(`Failed to compile vertex shader.`);return r}function jt(e,t,n){var r=Qt(e,t,function(){return e.createShader(e.FRAGMENT_SHADER)},`Unable to create fragment WebGLShader.`);if(V(e,t,function(){return e.shaderSource(r,n)}),V(e,t,function(){return e.compileShader(r)}),!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw function(e,t){var n=Pt.exec(t);if(n==null)return console.log(`Couldn't parse line number in error: `+t),console.log(e);for(var r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map(function(e,t){return P((t+1).toString(),a)+e}),s=0,c=0;c<o.length;c++)s=Math.max(o[c].length,s);var l=o.slice(0,r-1),u=o.slice(r-1,r),d=o.slice(r);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c `+P(u[0],s),`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(d.join(`
`))}(n,e.getShaderInfoLog(r)),Error(`Failed to compile fragment shader.`);return r}var Mt,Nt,Pt=/ERROR: [0-9]+:([0-9]+):/g;function Ft(e,t){return Qt(e,t,function(){return e.createProgram()},`Unable to create WebGLProgram.`)}function It(e,t,n){if(V(e,t,function(){return e.linkProgram(n)}),!1===e.getProgramParameter(n,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(n)),Error(`Failed to link vertex and fragment shaders.`)}function Lt(e,t,n){if(V(e,t,function(){return e.validateProgram(n)}),!1===e.getProgramParameter(n,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(n)),Error(`Shader program validation failed.`)}function Rt(e,t,n){var r=Qt(e,t,function(){return e.createBuffer()},`Unable to create WebGLBuffer`);return V(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,r)}),V(e,t,function(){return e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW)}),r}function zt(e,t,n){var r=Qt(e,t,function(){return e.createBuffer()},`Unable to create WebGLBuffer`);return V(e,t,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)}),V(e,t,function(){return e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW)}),r}function Bt(e,t){return Qt(e,t,function(){return e.createTexture()},`Unable to create WebGLTexture.`)}function Vt(e,t){var n=d().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){var r=`[`+e+`x`+t+`]`;throw Error(`Requested texture size `+r+` is invalid.`)}if(n<e||n<t)throw r=`[`+e+`x`+t+`]`,Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU [`+n+`x`+n+`].`)}function Ht(e,t){return Qt(e,t,function(){return e.createFramebuffer()},`Unable to create WebGLFramebuffer.`)}function Ut(e,t,n,r,i,a,o,s){var c=e.getAttribLocation(n,r);return c!==-1&&(V(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,i)}),V(e,t,function(){return e.vertexAttribPointer(c,a,e.FLOAT,!1,o,s)}),V(e,t,function(){return e.enableVertexAttribArray(c)}),!0)}function Wt(e,t,n,r){$t(e,r),V(e,t,function(){return e.activeTexture(e.TEXTURE0+r)}),V(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)})}function Gt(e,t,n,r){return Qt(e,t,function(){return e.getUniformLocation(n,r)},`uniform "`+r+`" not present in program.`)}function Kt(e,t,n){return e.getUniformLocation(t,n)}function qt(e,t,n,r,i,a){V(e,t,function(){return Wt(e,t,r,a)}),V(e,t,function(){return e.uniform1i(i,a)})}function Jt(e,t,n,r){V(e,t,function(){return e.bindFramebuffer(e.FRAMEBUFFER,r)}),V(e,t,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)})}function Yt(e,t,n){V(e,t,function(){return e.bindFramebuffer(e.FRAMEBUFFER,n)}),V(e,t,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)})}function Xt(e){var t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+Zt(e,t))}function Zt(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error `+t}}function Qt(e,t,n,r){var i=V(e,t,function(){return n()});if(i==null)throw Error(r);return i}function $t(e,t){var n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||n<r)throw Error(`textureUnit must be in [gl.TEXTURE0, gl.TEXTURE`+n+`].`)}function en(e,t){return t===void 0&&(t=2),k(e.slice(0,e.length-t))}function tn(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[1<e.length?e[e.length-2]:1,e[e.length-1]]}function nn(e){var t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[en(e)].concat(tn(e))),t}function rn(e,t){var n;t===void 0&&(t=!1);var r=d().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);t&&(r*=2,(e=e.map(function(t,n){return n>=e.length-2?C(e[n]):e[n]})).length===1&&(e=[2,e[0]])),e.length!==2&&(e=te(e).newShape);var i=k(e);if(e.length<=1&&i<=r)return[1,i];if(e.length===2&&e[0]<=r&&e[1]<=r)return e;if(e.length===3&&e[0]*e[1]<=r&&e[2]<=r)return[e[0]*e[1],e[2]];if(e.length===3&&e[0]<=r&&e[1]*e[2]<=r)return[e[0],e[1]*e[2]];if(e.length===4&&e[0]*e[1]*e[2]<=r&&e[3]<=r)return[e[0]*e[1]*e[2],e[3]];if(e.length===4&&e[0]<=r&&e[1]*e[2]*e[3]<=r)return[e[0],e[1]*e[2]*e[3]];if(t){var a=en(e),o=2,s=2;return e.length&&(o=(n=tn(e))[0],s=n[1]),N(i=o/2*a*(s/2)).map(function(e){return 2*e})}return N(i)}function an(e){return e%2==0}function on(e,t){if(A(e=e.slice(-2),t=t.slice(-2))||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){var n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r||an(n)&&an(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&an(e[0])&&an(t[0])}function sn(e){if(Mt==null){var t=St(e);Mt=t.getParameter(t.MAX_TEXTURE_SIZE)}return Mt}function cn(e){if(Nt==null){var t=St(e);Nt=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Nt)}function ln(e){if(e===0)return 0;var t=St(e);return un(t,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!un(t,`EXT_disjoint_timer_query`)}function un(e,t){return e.getExtension(t)!=null}function dn(e){try{if(St(e)!=null)return!0}catch{return!1}return!1}function fn(e){if(e===0)return!1;var t=St(e);if(e===1){if(!un(t,`OES_texture_float`))return!1}else if(!un(t,`EXT_color_buffer_float`))return!1;return mn(t)}function pn(e){if(e===0)return!1;var t=St(e);if(e===1)return!!un(t,`OES_texture_float`)&&!!un(t,`WEBGL_color_buffer_float`)&&mn(t);if(un(t,`EXT_color_buffer_float`))return mn(t);if(un(t,`EXT_color_buffer_half_float`)){var n=t.getExtension(`EXT_color_buffer_half_float`);return function(e){var t=Et(e,n),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);var i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);var a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}(t)}return!1}function mn(e){var t=Et(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);var i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function hn(e){return e===2&&St(e).fenceSync!=null}var gn=Object.freeze({callAndCheck:V,canBeRepresented:Dt,getWebGLErrorMessage:Ot,getExtensionOrThrow:kt,createVertexShader:At,createFragmentShader:jt,createProgram:Ft,linkProgram:It,validateProgram:Lt,createStaticVertexBuffer:Rt,createStaticIndexBuffer:zt,getNumChannels:function(){return d().getNumber(`WEBGL_VERSION`)===2?1:4},createTexture:Bt,validateTextureSize:Vt,createFramebuffer:Ht,bindVertexBufferToProgramAttribute:Ut,bindTextureUnit:Wt,unbindTextureUnit:function(e,t,n){$t(e,n),V(e,t,function(){return e.activeTexture(e.TEXTURE0+n)}),V(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)})},getProgramUniformLocationOrThrow:Gt,getProgramUniformLocation:Kt,bindTextureToProgramUniformSampler:qt,bindCanvasToFramebuffer:function(e,t){V(e,t,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),V(e,t,function(){return e.viewport(0,0,e.canvas.width,e.canvas.height)}),V(e,t,function(){return e.scissor(0,0,e.canvas.width,e.canvas.height)})},bindColorTextureToFramebuffer:Jt,unbindColorTextureFromFramebuffer:Yt,validateFramebuffer:Xt,getFramebufferErrorMessage:Zt,getBatchDim:en,getRowsCols:tn,getShapeAs3D:nn,getTextureShapeFromLogicalShape:rn,isReshapeFree:on,getWebGLMaxTextureSize:sn,resetMaxTextureSize:function(){Mt=null},resetMaxTexturesInShader:function(){Nt=null},getMaxTexturesInShader:cn,getWebGLDisjointQueryTimerVersion:ln,hasExtension:un,isWebGLVersionEnabled:dn,isCapableOfRenderingToFloatTexture:fn,isDownloadFloatTextureEnabled:pn,isWebGLFenceEnabled:hn}),_n=d();function vn(e){d().getBool(`DEPRECATION_WARNINGS_ENABLED`)&&console.warn(e+` You can disable deprecation warnings with tf.disableDeprecationWarnings().`)}function H(e,t){return B.tidy(e,t)}function yn(e){at(e).forEach(function(e){return e.dispose()})}function bn(e){return B.keep(e)}function xn(){var e=[...arguments];d().getBool(`IS_TEST`)||console.warn.apply(console,e)}function Sn(e,t){var n=e;if(se(e))return t===`string`?[]:[e.length];if(!Array.isArray(e))return[];for(var r=[];Array.isArray(n)||se(n)&&t!==`string`;)r.push(n.length),n=n[0];return Array.isArray(e)&&d().getBool(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`)&&function e(t,n,r){if(r||=[],Array.isArray(t)||se(t)){T(0<n.length,function(){return`Element arr[`+r.join(`][`)+`] should be a primitive, but is an array of `+t.length+` elements`}),T(t.length===n[0],function(){return`Element arr[`+r.join(`][`)+`] should have `+n[0]+` elements, but has `+t.length+` elements`});for(var i=n.slice(1),a=0;a<t.length;++a)e(t[a],i,r.concat(a))}else T(n.length===0,function(){return`Element arr[`+r.join(`][`)+`] is a primitive, but should be an array/TypedArray of `+n[0]+` elements`})}(e,r,[]),r}function Cn(e,t,n,r){if(e!=null&&(e!==`numeric`&&e!==t||e===`numeric`&&t===`string`))throw Error(`Argument '`+n+`' passed to '`+r+`' must be `+e+` tensor, but got `+t+` tensor`)}function U(e,t,n,r){if(r===void 0&&(r=`numeric`),e instanceof Be)return Cn(r,e.dtype,t,n),e;var i=pe(e);if(i!==`string`&&0<=[`bool`,`int32`,`float32`].indexOf(r)&&(i=r),Cn(r,i,t,n),e==null||!se(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`){var a=e==null?`null`:e.constructor.name;throw Error(`Argument '`+t+`' passed to '`+n+`' must be a Tensor or TensorLike, but got '`+a+`'`)}var o=Sn(e,i);se(e)||Array.isArray(e)||(e=[e]);var s=i===`string`?O(e,[],!0):_e(e,i,d().getBool(`DEBUG`));return B.makeTensor(s,o,i)}function wn(e,t,n,r){if(r===void 0&&(r=`numeric`),!Array.isArray(e))throw Error(`Argument `+t+` passed to `+n+" must be a `Tensor[]` or `TensorLike[]`");return e.map(function(e,r){return U(e,t+`[`+r+`]`,n)},r)}function Tn(e,t){for(var n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function En(e,t,n){for(var r=e.length+t.length,i=[],a=0,o=0,s=0;s<r;s++)n.indexOf(s)===-1?i.push(e[a++]):i.push(t[o++]);return i}function Dn(e,t){for(var n=[],r=e.length,i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(function(t){return e[t]})]}function On(e,t){return En(e,t.map(function(e){return 1}),t)}function kn(e,t,n){T(Tn(t,n),function(){return e+` supports only inner-most axes for now. Got axes `+t+` and rank-`+n+` input.`})}function An(e,t){if(Tn(e,t))return null;for(var n=[],r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(function(e){return n.push(e)}),n}function jn(e){return e.map(function(e,t){return[t,e]}).sort(function(e,t){return e[1]-t[1]}).map(function(e){return e[0]})}function Mn(e,t){for(var n=[],r=t-e;r<t;++r)n.push(r);return n}function Nn(e,t){var n=e[0].length;e.forEach(function(e,t){T(e.length===n,function(){return`Error in concat`+n+`D: rank of tensors[`+t+`] must be the same as the rank of the rest (`+n+`)`})}),T(0<=t&&t<n,function(){return`Error in concat`+n+`D: axis must be between 0 and `+(n-1)+`.`});var r=e[0];e.forEach(function(e,i){for(var a=0;a<n;a++)T(a===t||e[a]===r[a],function(){return`Error in concat`+n+`D: Shape of tensors[`+i+`] (`+e+`) does not match the shape of the rest (`+r+`) along the non-concatenated axis `+i+`.`})})}function Pn(e,t){for(var n=e[0].slice(),r=1;r<e.length;r++)n[t]+=e[r][t];return n}function W(e){var t=Object.keys(e);if(t.length!==1)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with `+t.length+` keys.`);var n=t[0],r=e[n];n.endsWith(`_`)&&(n=n.substring(0,n.length-1));function i(){var e=[...arguments];B.startScope(n);try{var t=r.apply(void 0,e);return t instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),B.endScope(t),t}catch(e){throw B.endScope(null),e}}return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}_n.registerFlag(`HAS_WEBGL`,function(){return 0<_n.getNumber(`WEBGL_VERSION`)}),_n.registerFlag(`WEBGL_VERSION`,function(){return dn(2)?2:+!!dn(1)}),_n.registerFlag(`WEBGL_BUFFER_SUPPORTED`,function(){return _n.get(`WEBGL_VERSION`)===2}),_n.registerFlag(`WEBGL_CPU_FORWARD`,function(){return!0}),_n.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,function(){return!1}),_n.registerFlag(`WEBGL_PACK`,function(){return _n.getBool(`HAS_WEBGL`)}),_n.registerFlag(`WEBGL_PACK_NORMALIZATION`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_PACK_CLIP`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,function(){return!1}),_n.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_PACK_REDUCE`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_LAZILY_UNPACK`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_CONV_IM2COL`,function(){return _n.getBool(`WEBGL_PACK`)}),_n.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,function(){return sn(_n.getNumber(`WEBGL_VERSION`))}),_n.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,function(){return cn(_n.getNumber(`WEBGL_VERSION`))}),_n.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,function(){var e=_n.getNumber(`WEBGL_VERSION`);return e===0?0:ln(e)}),_n.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,function(){return 0<_n.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)&&(e=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))));var e}),_n.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,function(){return fn(_n.getNumber(`WEBGL_VERSION`))}),_n.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,function(){return!_n.getBool(`WEBGL_FORCE_F16_TEXTURES`)&&_n.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)}),_n.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,function(){return pn(_n.getNumber(`WEBGL_VERSION`))}),_n.registerFlag(`WEBGL_FENCE_API_ENABLED`,function(){return hn(_n.getNumber(`WEBGL_VERSION`))}),_n.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,function(){return _n.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0}),Re=vn;var Fn=W({complex_:function(e,t){var n=U(e,`real`,`complex`),r=U(t,`imag`,`complex`);return E(n.shape,r.shape,`real and imag shapes, `+n.shape+` and `+r.shape+`, must match in call to tf.complex().`),B.runKernelFunc(function(e){return e.complex(n,r)},{$real:n,$imag:r})}}),In=W({real_:function(e){var t=U(e,`input`,`real`);return B.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Ln=W({imag_:function(e){var t=U(e,`input`,`imag`);return B.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function Rn(e,t,n){return zn(e,t,Sn(e,n),n)}function zn(e,t,n,r){if(r??=pe(e),r===`complex64`)throw Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);if(!se(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`)throw Error(`values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray`);if(t!=null){Se(t);var i=k(t),a=k(n);T(i===a,function(){return`Based on the provided shape, [`+t+`], the tensor should have `+i+` values but has `+a});for(var o=0;o<n.length;++o){var s=n[o],c=o!==n.length-1||s!==k(t.slice(o));T(n[o]===t[o]||!c,function(){return`Error creating a new Tensor. Inferred shape (`+n+`) does not match the provided shape (`+t+`). `})}}return se(e)||Array.isArray(e)||(e=[e]),t||=n,e=r===`string`?O(e,[],!0):_e(e,r,d().getBool(`DEBUG`)),B.makeTensor(e,t,r)}function G(e,t){if((se(e)&&t!==`string`||Array.isArray(e))&&t!==`complex64`)throw Error(`Error creating a new Scalar: value must be a primitive (number|boolean|string)`);if(t===`string`&&se(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return zn(e,[],[],t)}function Bn(e,t){D(e);var n=Sn(e,t);if(n.length!==1)throw Error(`tensor1d() requires values to be a flat/TypedArray`);return zn(e,null,n,t)}function Vn(e,t,n){if(D(e),t!=null&&t.length!==2)throw Error(`tensor2d() requires shape to have two numbers`);var r=Sn(e,n);if(r.length!==2&&r.length!==1)throw Error(`tensor2d() requires values to be number[][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return zn(e,t,r,n)}function Hn(e,t,n){if(D(e),t!=null&&t.length!==3)throw Error(`tensor3d() requires shape to have three numbers`);var r=Sn(e,n);if(r.length!==3&&r.length!==1)throw Error(`tensor3d() requires values to be number[][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return zn(e,t,r,n)}function Un(e,t,n){if(D(e),t!=null&&t.length!==4)throw Error(`tensor4d() requires shape to have four numbers`);var r=Sn(e,n);if(r.length!==4&&r.length!==1)throw Error(`tensor4d() requires values to be number[][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return zn(e,t,r,n)}function Wn(e,t,n){if(D(e),t!=null&&t.length!==5)throw Error(`tensor5d() requires shape to have five numbers`);var r=Sn(e,n);if(r.length!==5&&r.length!==1)throw Error(`tensor5d() requires values to be number[][][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor5d() requires shape to be provided when `values` are a flat array");return zn(e,t,r,n)}function Gn(e,t,n){if(D(e),t!=null&&t.length!==6)throw Error(`tensor6d() requires shape to have six numbers`);var r=Sn(e,n);if(r.length!==6&&r.length!==1)throw Error(`tensor6d() requires values to be number[][][][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor6d() requires shape to be provided when `values` are a flat array");return zn(e,t||=r,r,n)}function Kn(e,t,n,r){return t===void 0&&(t=!0),B.makeVariable(e,t,n,r)}function qn(e,t){if(t===void 0&&(t=`float32`),t===`complex64`)return Fn(qn(e,`float32`),Jn(e,`float32`));var n=ye(k(e),t);return B.makeTensor(n,e,t)}function Jn(e,t){if(t===void 0&&(t=`float32`),t===`complex64`)return Fn(Jn(e,`float32`),Jn(e,`float32`));var n=be(k(e),t);return B.makeTensor(n,e,t)}function Yn(e,t,n){return B.runKernelFunc(function(r){return r.fill(e,t,n)},{})}function Xn(e,t,n){if(n<=0)throw Error(`The number of values should be positive.`);return B.runKernelFunc(function(r){return r.linspace(e,t,n)},{})}function Zn(e,t,n,r){if(n===void 0&&(n=1),r===void 0&&(r=`float32`),n===0)throw Error(`Cannot have a step of zero`);if(e===t||e<t&&n<0||t<e&&1<n)return Jn([0],r);var i=be(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),i[0]=e;for(var a=1;a<i.length;a++)i[a]=i[a-1]+n;return Bn(i,r)}var Qn=W({onesLike_:function(e){var t=U(e,`x`,`onesLike`);return t.dtype===`complex64`?Fn(Qn(In(t)),$n(Ln(t))):B.runKernelFunc(function(e){return e.onesLike(t)},{$x:t},function(e,t){return{$x:function(){return $n(e)}}})}}),$n=W({zerosLike_:function(e){var t=U(e,`x`,`zerosLike`);return B.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,t){return{$x:function(){return $n(e)}}})}}),er=W({concat_:function(e,t){t===void 0&&(t=0),T(1<=e.length,function(){return`Pass at least one tensor to concat`});var n=wn(e,`tensors`,`concat`);n[0].dtype===`complex64`&&n.forEach(function(e){if(e.dtype!==`complex64`)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+e.dtype+`. `)}),t=I(t,n[0].shape)[0];var r=Pn(n.map(function(e){return e.shape}),t);if(k(r)===0)return Rn([],r);if((n=n.filter(function(e){return 0<e.size})).length===1)return n[0];var i=n.map(function(e){return e.shape});Nn(i,t);var a=n,o={axis:t};return B.runKernelFunc(function(e){return e.concat(n,t)},a,function(e){return ar(e,i.map(function(e){return e[t]}),t).map(function(e){return function(){return e}})},`Concat`,o)}}),tr=W({concat1d_:function(e){return er(e,0)}}),nr=W({concat2d_:function(e,t){return er(e,t)}}),rr=W({concat3d_:function(e,t){return er(e,t)}}),ir=W({concat4d_:function(e,t){return er(e,t)}}),ar=W({split_:function(e,t,n){n===void 0&&(n=0);var r,i=U(e,`x`,`split`);return n=I(n,i.shape)[0],r=typeof t==`number`?(T(i.shape[n]%t==0,function(){return`Number of splits must evenly divide the axis.`}),Array(t).fill(i.shape[n]/t)):(T(i.shape[n]===t.reduce(function(e,t){return e+t}),function(){return`The sum of sizes must match the size of the axis dimension.`}),t),B.runKernelFunc(function(e){return e.split(i,r,n)},{$x:i},function(e){return{$x:function(){return er(e,n)}}})}});function or(e,t){return e(t={exports:{}},t.exports),t.exports}var sr=or(function(e){(function(e,t){function n(e){var t,n=this,r=(t=4022871197,function(e){e=e.toString();for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t)}return 23283064365386963e-26*(t>>>0)});n.next=function(){var e=2091639*n.s0+23283064365386963e-26*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(` `),n.s1=r(` `),n.s2=r(` `),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null}function r(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function i(e,t){var i=new n(e),a=t&&t.state,o=i.next;return o.int32=function(){return 4294967296*i.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,a&&(typeof a==`object`&&r(a,i),o.state=function(){return r(i,{})}),o}t&&t.exports?t.exports=i:this.alea=i})(0,e)}),cr=or(function(e){(function(e,t){function n(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function r(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function i(e,t){function i(){return(a.next()>>>0)/4294967296}var a=new n(e),o=t&&t.state;return i.double=function(){do var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},i.int32=a.next,i.quick=i,o&&(typeof o==`object`&&r(o,a),i.state=function(){return r(a,{})}),i}t&&t.exports?t.exports=i:this.xor128=i})(0,e)}),lr=or(function(e){(function(e,t){function n(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,e===((t.v=0)|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function r(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function i(e,t){function i(){return(a.next()>>>0)/4294967296}var a=new n(e),o=t&&t.state;return i.double=function(){do var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},i.int32=a.next,i.quick=i,o&&(typeof o==`object`&&r(o,a),i.state=function(){return r(a,{})}),i}t&&t.exports?t.exports=i:this.xorwow=i})(0,e)}),ur=or(function(e){(function(e,t){function n(e){var t=this;t.next=function(){var e,n,r=t.x,i=t.i;return e=r[i],n=(e^=e>>>7)^e<<24,n^=(e=r[i+1&7])^e>>>10,n^=(e=r[i+3&7])^e>>>3,n^=(e=r[i+4&7])^e<<7,e=r[i+7&7],n^=(e^=e<<13)^e<<9,r[i]=n,t.i=i+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;0<n;--n)e.next()}(t,e)}function r(e,t){return t.x=e.x.slice(),t.i=e.i,t}function i(e,t){e??=+new Date;function i(){return(a.next()>>>0)/4294967296}var a=new n(e),o=t&&t.state;return i.double=function(){do var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},i.int32=a.next,i.quick=i,o&&(o.x&&r(o,a),i.state=function(){return r(a,{})}),i}t&&t.exports?t.exports=i:this.xorshift7=i})(0,e)}),dr=or(function(e){(function(e,t){function n(e){var t=this;t.next=function(){var e,n,r=t.w,i=t.X,a=t.i;return t.w=r=r+1640531527|0,n=i[a+34&127],e=i[a=a+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=i[a]=n^e,t.i=a,n+(r^r>>>16)|0},function(e,t){var n,r,i,a,o,s=[],c=128;for(t===(0|t)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,0<=a&&(o=o+1640531527|0,i=(n=s[127&a]^=r+o)==0?i+1:0);for(128<=i&&(s[127&(t&&t.length||0)]=-1),i=127,a=512;0<a;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}(t,e)}function r(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function i(e,t){e??=+new Date;function i(){return(a.next()>>>0)/4294967296}var a=new n(e),o=t&&t.state;return i.double=function(){do var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},i.int32=a.next,i.quick=i,o&&(o.X&&r(o,a),i.state=function(){return r(a,{})}),i}t&&t.exports?t.exports=i:this.xor4096=i})(0,e)}),fr=or(function(e){(function(e,t){function n(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function r(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function i(e,t){function i(){return(a.next()>>>0)/4294967296}var a=new n(e),o=t&&t.state;return i.double=function(){do var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},i.int32=a.next,i.quick=i,o&&(typeof o==`object`&&r(o,a),i.state=function(){return r(a,{})}),i}t&&t.exports?t.exports=i:this.tychei=i})(0,e)}),pr=or(function(e){(function(t,r){var i,a=this,o=256,s=6,c=`random`,l=r.pow(o,s),u=r.pow(2,52),d=2*u,f=o-1;function p(e,n,f){function p(){for(var e=b.g(s),t=l,n=0;e<u;)e=(e+n)*o,t*=o,n=b.g(1);for(;d<=e;)e/=2,t/=2,n>>>=1;return(e+n)/t}var v=[],y=g(function e(t,n){var r,i=[],a=typeof t;if(n&&a==`object`)for(r in t)try{i.push(e(t[r],n-1))}catch{}return i.length?i:a==`string`?t:t+`\0`}((n=n==1?{entropy:!0}:n||{}).entropy?[e,_(t)]:e??function(){try{var e;return i&&(e=i.randomBytes)?e=e(o):(e=new Uint8Array(o),(a.crypto||a.msCrypto).getRandomValues(e)),_(e)}catch{var n=a.navigator,r=n&&n.plugins;return[+new Date,a,r,a.screen,_(t)]}}(),3),v),b=new m(v);return p.int32=function(){return 0|b.g(4)},p.quick=function(){return b.g(4)/4294967296},p.double=p,g(_(b.S),t),(n.pass||f||function(e,t,n,i){return i&&(i.S&&h(i,b),e.state=function(){return h(b,{})}),n?(r[c]=e,t):e})(p,y,`global`in n?n.global:this==r,n.state)}function m(e){var t,n=e.length,r=this,i=0,a=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);i<o;)s[i]=i++;for(i=0;i<o;i++)s[i]=s[a=f&a+e[i%n]+(t=s[i])],s[a]=t;(r.g=function(e){for(var t,n=0,i=r.i,a=r.j,s=r.S;e--;)t=s[i=f&i+1],n=n*o+s[f&(s[i]=s[a=f&a+t])+(s[a]=t)];return r.i=i,r.j=a,n})(o)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){for(var n,r=e+``,i=0;i<r.length;)t[f&i]=f&(n^=19*t[f&i])+r.charCodeAt(i++);return _(t)}function _(e){return String.fromCharCode.apply(0,e)}if(r[`seed`+c]=p,g(r.random(),t),e.exports){e.exports=p;try{i=n()}catch{}}})([],Math)});pr.alea=sr,pr.xor128=cr,pr.xorwow=lr,pr.xorshift7=ur,pr.xor4096=dr,pr.tychei=fr;var mr=pr.alea,hr=(br.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e=this.nextVal;return this.nextVal=NaN,e}for(var t,n,r=!1;!r;){for(var i=void 0,a=void 0,o=void 0;1<=(o=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a)||o===0;);var s=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*i*s,n=this.mean+this.stdDev*a*s,this.truncated&&!this.isValidTruncated(t)||(r=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)},br.prototype.convertValue=function(e){return this.dtype==null||this.dtype===`float32`?e:Math.round(e)},br.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},br),gr=(yr.prototype.nextValue=function(){for(var e,t,n,r,i,a;;){for(;r=this.randn.nextValue(),(a=1+this.c*r)<=0;);if(a*=a*a,t=1-.331*(e=r*r)*e,n=.5*e+this.d*(1-a+Math.log(a)),(i=this.randu())<t||Math.log(i)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=this.randu()**(1/this.alpha)),this.convertValue(a)},yr.prototype.convertValue=function(e){return this.dtype===`float32`?e:Math.round(e)},yr),_r=(vr.prototype.convertValue=function(e){return this.canReturnFloat()?e:Math.round(e)},vr.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},vr);function vr(e,t,n,r){var i=this;if(e===void 0&&(e=0),t===void 0&&(t=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype===`float32`},this.min=e,this.range=t-e,this.dtype=n,r??=Math.random(),typeof r==`number`&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between `+e+` - `+t+` <= 1 and dtype is not float`);this.random=mr(r)}function yr(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;var i=r||Math.random();this.randu=mr(i.toString()),this.randn=new hr(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}function br(e,t,n,r,i){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=mr(a.toString())}function xr(e,t,n){return t===void 0&&(t=`float32`),t||=`float32`,Se(e),new Ie(e,t,n)}function Sr(e,t){t===void 0&&(t=!1),console.log(e.toString(t))}function Cr(e,t){return s(this,void 0,void 0,function(){var n,r,i,a,o,s,l,u,d,f;return c(this,function(c){switch(c.label){case 0:return n=U(e,`x`,`setdiff1d`),r=U(t,`y`,`setdiff1d`),T(n.dtype===r.dtype,function(){return`x and y should have the same dtype, but got x (`+n.dtype+`) and y (`+r.dtype+`).`}),T(n.rank===1,function(){return`x should be 1D tensor, but got x (`+n.shape+`).`}),T(r.rank===1,function(){return`y should be 1D tensor, but got y (`+r.shape+`).`}),[4,n.data()];case 1:return i=c.sent(),[4,r.data()];case 2:for(a=c.sent(),o=new Set(a),d=s=0;d<i.length;d++)o.has(i[d])||s++;for(l=new Ie([s],n.dtype),u=new Ie([s],`int32`),f=d=0;d<i.length;d++)o.has(i[d])||(l.values[f]=i[d],u.values[f]=d,f++);return[2,[l.toTensor(),u.toTensor()]]}})})}var wr=W({batchToSpaceND_:function(e,t,n){var r=U(e,`x`,`batchToSpaceND`),i=t.reduce(function(e,t){return e*t});return T(r.rank>=1+t.length,function(){return`input rank is `+r.rank+` but should be > than blockShape.length `+t.length}),T(n.length===t.length,function(){return`crops.length is `+n.length+` but should be equal to blockShape.length  `+t.length}),T(r.shape[0]%i==0,function(){return`input tensor batch is `+r.shape[0]+` but is not divisible by the product of the elements of blockShape `+t.join(` * `)+` === `+i}),B.runKernelFunc(function(e){return e.batchToSpaceND(r,t,n)},{$x:r},function(e){return{$x:function(){return e.spaceToBatchND(t,n)}}})}}),Tr=W({broadcastTo_:function(e,t){var n=U(e,`broadcastTo`,`x`),r=n.shape;if(t.some(function(e){return!(0<e)||e%1!=0}))throw Error(`broadcastTo(): Invalid broadcast shape [`+t+`].`);if(t.length<n.rank)throw Error(`broadcastTo(): shape.length=`+t.length+` < input.rank=`+n.rank+`.`);if(t.length>n.rank){for(var i=n.shape.slice();i.length<t.length;)i.unshift(1);n=n.reshape(i)}for(var a=Array.from(t),o=t.length-1;0<=o;o--)if(n.shape[o]===t[o])a[o]=1;else if(n.shape[o]!==1)throw Error(`broadcastTo(): [`+r+`] cannot be broadcast to [`+t+`].`);var s=a.map(function(e,t){return 1<e?t:-1}).filter(function(e){return 0<=e});return s.length===0?n.clone():B.runKernelFunc(function(e){return e.tile(n,a)},{input:n},function(e){return{input:function(){return e.sum(s,!0)}}})}}),Er=W({cast_:function(e,t){var n=U(e,`x`,`cast`);if(!ae(t))throw Error(`Failed to cast to unknown dtype `+t);if(t===`string`&&n.dtype!==`string`||t!==`string`&&n.dtype===`string`)throw Error(`Only strings can be casted to strings`);var r={dtype:t};return B.runKernelFunc(function(e){return e.cast(n,t)},{x:n},function(e){return{x:function(){return e.clone()}}},`Cast`,r)}}),Dr=W({clone_:function(e){var t=U(e,`x`,`clone`,null);return B.runKernelFunc(function(){return B.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),Or=W({cumsum_:function(e,t,n,r){t===void 0&&(t=0),n===void 0&&(n=!1),r===void 0&&(r=!1);var i=U(e,`x`,`cumsum`),a=An([t|=0],i.rank),o=i;a!=null&&(o=i.transpose(a));var s=Mn(1,i.rank)[0],c=B.runKernelFunc(function(e){return e.cumsum(o,s,n,r)},{permutedX:o},function(e){return{permutedX:function(){return e.cumsum(t,n,!r)}}});return a!=null&&(c=c.transpose(a)),c}}),kr=W({depthToSpace_:function(e,t,n){n===void 0&&(n=`NHWC`);var r=U(e,`x`,`depthToSpace`),i=n===`NHWC`?r.shape[1]:r.shape[2],a=n===`NHWC`?r.shape[2]:r.shape[3],o=n===`NHWC`?r.shape[3]:r.shape[1];return T(0<=i*t,function(){return`Negative dimension size caused by overflow when multiplying
      `+i+` and `+t+`  for depthToSpace with input shape
      `+r.shape}),T(0<=a*t,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+` and `+t+` for depthToSpace with input shape
          `+r.shape}),T(o%(t*t)==0,function(){return`Dimension size must be evenly divisible by `+t*t+` but is `+o+` for depthToSpace with input shape `+r.shape}),B.runKernelFunc(function(e){return e.depthToSpace(r,t,n)},{$x:r})}}),Ar=W({expandDims_:function(e,t){t===void 0&&(t=0);var n=U(e,`x`,`expandDims`,null);T(t<=n.rank,function(){return`Axis must be <= rank of the tensor`});var r=n.shape.slice();return t<0&&(T(-(n.rank+1)<=t,function(){return`Axis must be in the interval [`+-(n.rank+1)+`, `+n.rank+`]`}),t=n.rank+t+1),r.splice(t,0,1),Ur(n,r)}}),jr=W({eye_:function(e,t,n,r){r===void 0&&(r=`float32`),t??=e;for(var i=xr([e,t],r),a=e<=t?e:t,o=0;o<a;++o)i.set(1,o,o);var s=i.toTensor().as2D(e,t);if(n==null)return s;if(n.length===1)return qr(Ar(s,0),[n[0],1,1]);if(n.length===2)return qr(Ar(Ar(s,0),0),[n[0],n[1],1,1]);if(n.length===3)return qr(Ar(Ar(Ar(s,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received `+n.length+`D.`)}}),Mr=W({multinomial_:function(e,t,n,r){r===void 0&&(r=!1);var i=U(e,`logits`,`multinomial`),a=i.size,o=i.rank;if(a<2)throw Error(`Error in multinomial: you need at least 2 outcomes, but got `+a+`.`);if(2<o)throw Error(`Rank of probabilities must be 1 or 2, but is `+o);n||=Math.random();var s=o===1?i.as2D(1,-1):i,c=B.runKernelFunc(function(e){return e.multinomial(s,r,t,n)},{logits2D:s});return o===1?c.as1D():c}}),Nr=W({oneHot_:function(e,t,n,r){if(n===void 0&&(n=1),r===void 0&&(r=0),t<2)throw Error(`Error in oneHot: depth must be >=2, but it is `+t);var i=U(e,`indices`,`oneHot`,`int32`),a=i.shape.concat([t]);return i=i.flatten(),B.runKernelFunc(function(e){return e.oneHot(i,t,n,r)},{$indices:i},function(e){return{$indices:function(){return Jn(i.shape,`float32`)}}}).reshape(a)}}),Pr=W({pad_:function(e,t,n){n===void 0&&(n=0);var r=U(e,`x`,`pad`);if(r.rank===0)throw Error(`pad(scalar) is not defined. Pass non-scalar to pad`);var i={paddings:t,constantValue:n};return B.runKernelFunc(function(e){return e.pad(r,t,n)},{x:r},function(e){var n=t.map(function(e){return e[0]});return{x:function(){return e.slice(n,r.shape)}}},`PadV2`,i)}}),Fr=W({pad1d_:function(e,t,n){return n===void 0&&(n=0),T(t.length===2,function(){return`Invalid number of paddings. Must be length of 2.`}),Pr(e,[t],n)}}),Ir=W({pad2d_:function(e,t,n){return n===void 0&&(n=0),T(t.length===2&&t[0].length===2&&t[1].length===2,function(){return`Invalid number of paddings. Must be length of 2 each.`}),Pr(e,t,n)}}),Lr=W({pad3d_:function(e,t,n){return n===void 0&&(n=0),T(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return`Invalid number of paddings. Must be length of 2 each.`}),Pr(e,t,n)}}),Rr=W({pad4d_:function(e,t,n){return n===void 0&&(n=0),T(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return`Invalid number of paddings. Must be length of 2 each.`}),Pr(e,t,n)}}),zr=W({rand_:function(e,t,n){var r=k(e),i=null;if(n==null||n===`float32`)i=new Float32Array(r);else if(n===`int32`)i=new Int32Array(r);else{if(n!==`bool`)throw Error(`Unknown data type `+n);i=new Uint8Array(r)}for(var a=0;a<r;a++)i[a]=t();return B.makeTensor(i,e,n)}}),Br=W({randomNormal_:function(e,t,n,r,i){if(t===void 0&&(t=0),n===void 0&&(n=1),r!=null&&r===`bool`)throw Error(`Unsupported data type `+r);for(var a=new hr(t,n,r,!1,i),o=xr(e,r),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),Vr=W({randomGamma_:function(e,t,n,r,i){if(n===void 0&&(n=1),r===void 0&&(r=`float32`),n??=1,r??=`float32`,r!==`float32`&&r!==`int32`)throw Error(`Unsupported data type `+r);for(var a=new gr(t,n,r,i),o=xr(e,r),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),Hr=W({randomUniform_:function(e,t,n,r,i){t===void 0&&(t=0),n===void 0&&(n=1),r===void 0&&(r=`float32`);for(var a=xr(e,r),o=new _r(t,n,null,i),s=0;s<a.values.length;s++)a.values[s]=o.nextValue();return a.toTensor()}}),Ur=W({reshape_:function(e,t){var n=U(e,`x`,`reshape`,null);t=ee(t,n.size),T(n.size===k(t),function(){return`new shape and old shape must have the same number of elements.`});var r={shape:t};return B.runKernelFunc(function(e){return e.reshape(n,t)},{x:n},function(e){return{x:function(){return e.reshape(n.shape)}}},`Reshape`,r)}}),Wr=W({spaceToBatchND_:function(e,t,n){var r=U(e,`x`,`spaceToBatchND`);return T(r.rank>=1+t.length,function(){return`input rank `+r.rank+` should be > than [blockShape] `+t.length}),T(n.length===t.length,function(){return`paddings.shape[0] `+n.length+` must be equal to [blockShape] `+t.length}),T(r.shape.reduce(function(e,r,i){return 0<i&&i<=t.length?e&&(r+n[i-1][0]+n[i-1][1])%t[i-1]==0:e},!0),function(){return`input spatial dimensions `+r.shape.slice(1)+` with paddings `+n.toString()+` must be divisible by blockShapes `+t.toString()}),B.runKernelFunc(function(e){return e.spaceToBatchND(r,t,n)},{$x:r},function(e){return{$x:function(){return e.batchToSpaceND(t,n)}}})}}),Gr=W({squeeze_:function(e,t){var n=U(e,`x`,`squeeze`);return Ur(n,te(n.shape,t).newShape)}}),Kr=W({stack_:function(e,t){t===void 0&&(t=0);var n=wn(e,`tensors`,`stack`);if(T(1<=n.length,function(){return`Pass at least one tensor to tf.stack`}),n.length===1)return n[0].expandDims(t);var r=n[0].rank,i=n[0].shape,a=n[0].dtype;return T(t<=r,function(){return`Axis must be <= rank of the tensor`}),n.forEach(function(e){E(i,e.shape,`All tensors passed to stack must have matching shapes`)}),n.forEach(function(e){T(a===e.dtype,function(){return`All tensors passed to stack must have matching dtypes`})}),er(n.map(function(e){return e.expandDims(t)}),t)}}),qr=W({tile_:function(e,t){var n=U(e,`x`,`tile`,null);T(n.rank===t.length,function(){return`Error in transpose: rank of input `+n.rank+` must match length of reps `+t+`.`});var r=[n],i={reps:t};return B.runKernelFunc(function(e,r){var i=e.tile(n,t);return r([n]),i},{x:n},function(e,n){var r=n[0];return{x:function(){var n=$n(r);if(r.rank===1)for(var i=0;i<t[0];++i)n=n.add(e.slice([i*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(i=0;i<t[0];++i)for(var a=0;a<t[1];++a)n=n.add(e.slice([i*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(i=0;i<t[0];++i)for(a=0;a<t[1];++a)for(var o=0;o<t[2];++o)n=n.add(e.slice([i*r.shape[0],a*r.shape[1],o*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(r.rank!==4)throw Error(`Gradient for tile operation is not implemented for rank-`+r.rank+` tensors yet.`);for(i=0;i<t[0];++i)for(a=0;a<t[1];++a)for(o=0;o<t[2];++o)for(var s=0;s<t[3];++s)n=n.add(e.slice([i*r.shape[0],a*r.shape[1],o*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return n}}},`Tile`,i,r)}}),Jr=W({truncatedNormal_:function(e,t,n,r,i){if(t===void 0&&(t=0),n===void 0&&(n=1),r!=null&&r===`bool`)throw Error(`Unsupported data type `+r);for(var a=new hr(t,n,r,!0,i),o=xr(e,r),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),Yr=W({unstack_:function(e,t){t===void 0&&(t=0),t||=0;var n=U(e,`x`,`unstack`);T(t>=-n.shape.length&&t<n.shape.length,function(){return`Axis = `+t+` is not in [-`+n.shape.length+`, `+n.shape.length+`)`}),t<0&&(t+=n.shape.length);var r={axis:t};return B.runKernelFunc(function(e){return e.unstack(n,t)},{x:n},function(e){return{x:function(){return Kr(e,t)}}},`Unpack`,r)}});function Xr(e,t,n,r){r===void 0&&(r=!0);var i=[];if(r)(i=i.concat(t.slice(0))).push(e[0]/n),i=i.concat(e.slice(1));else{i=i.concat(e[0]);for(var a=t.length,o=0;o<a;++o)i=i.concat([e[o+1]/t[o],t[o]]);i=i.concat(e.slice(a+1))}return i}function Zr(e,t,n){n===void 0&&(n=!0);var r=[];if(n){r.push(t);for(var i=t+1;i<e;++i)i<=2*t?(r.push(i),r.push(i-(t+1))):r.push(i)}else{var a=[],o=[];for(i=1;i<e;++i)2*t+1<=i||i%2==1?o.push(i):a.push(i);r.push.apply(r,a),r.push(0),r.push.apply(r,o)}return r}function Qr(e,t,n,r){r===void 0&&(r=!0);var i=[];r?i.push(e[0]/n):i.push(e[0]*n);for(var a=1;a<e.length;++a)a<=t.length?r?i.push(t[a-1]*e[a]):i.push(e[a]/t[a-1]):i.push(e[a]);return i}function $r(e,t){for(var n=[0],r=0;r<t;++r)n.push(e[r][0]);return n}function ei(e,t,n){for(var r=e.slice(0,1),i=0;i<n;++i)r.push(e[i+1]-t[i][0]-t[i][1]);return r}function ti(e,t){if(e.rank<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was `+e.rank+`.`);if(t.rank<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was `+t.rank+`.`);if(t.dtype!==`int32`)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was `+t.dtype+`.`);if(t.shape[t.rank-1]>e.rank)throw Error(`index innermost dimension length must be <= tensor rank; saw: `+t.shape[t.rank-1]+` vs. `+e.rank);if(e.size===0)throw Error(`Requested more than 0 entries, but input is empty. Input shape: `+e.shape+`.`);for(var n=t.shape,r=n[n.length-1],i=1,a=0;a<n.length-1;++a)i*=n[a];var o=e.shape,s=n.slice();s.pop();var c=1;for(a=r;a<e.rank;++a)c*=o[a],s.push(o[a]);var l=ge(e.shape).map(function(e){return e/c}).concat([1]).slice(0,r);return[s,i,c,l]}var ni=Object.freeze({prepareAndValidate:ti});function ri(e){return e<=30?e:he(e,Math.floor(Math.sqrt(e)))}function ii(e,t,n){var r=1<t.rank?t.shape[t.rank-1]:1,i=1<t.rank?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: `+n.shape+`, indices.shape: `+t.shape+`, shape: `+e+`, sliceDim: `+r+`, and batchDim: `+i+`.`;if(n.rank<i)throw Error(a+` update.rank < `+i+`. `);if(e.length<r+(n.rank-i))throw Error(a+` Output shape length < `+(r+(n.rank-i)));if(n.rank!==i+e.length-r)throw Error(a+` update.rank != `+(i+e.length-r));for(var o=0;o<i;++o)if(n.shape[o]!==t.shape[o])throw Error(a+` updates.shape[`+o+`] (`+n.shape[o]+`) != indices.shape[`+o+`] (`+t.shape[o]+`).`);for(o=0;o<n.rank-i;++o)if(n.shape[o+i]!==e[o+r])throw Error(a+` updates.shape[`+(o+i)+`] (`+n.shape[o+i]+`) != shape[`+(o+i)+`] (`+e[o+i]+`)`)}function ai(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was `+t.rank+`.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was `+e.rank+`.`);if(t.dtype!==`int32`)throw Error(`The dtype of 'indices' should be int32, but got dtype: `+t.dtype);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: `+n);if(n.length===0){if(t.size===0)throw Error(`Indices specified for empty output. indices shape: `+t.shape);if(e.size===0)throw Error(`Updates specified for empty output. updates shape: `+e.shape)}ii(n,t,e)}function oi(e,t,n){for(var r=t.shape.length,i=1<r?t.shape[r-1]:1,a=n.length,o=1,s=i;s<a;++s)o*=n[s];var c=i<1?1:i;return{sliceRank:i,numUpdates:k(t.shape)/c,sliceSize:o,strides:ge(n.slice(0,i)).concat([1]),outputSize:k(n)}}var si=Object.freeze({validateUpdateShape:ii,validateInput:ai,calculateShapes:oi});function ci(e,t,n){T(e.rank===t.length,function(){return`Error in slice`+e.rank+`D: Length of begin `+t+` must match the rank of the array (`+e.rank+`).`}),T(e.rank===n.length,function(){return`Error in slice`+e.rank+`D: Length of size `+n+` must match the rank of the array (`+e.rank+`).`});for(var r=function(r){T(t[r]+n[r]<=e.shape[r],function(){return`Error in slice`+e.rank+`D: begin[`+r+`] + size[`+r+`] (`+(t[r]+n[r])+`) would overflow input.shape[`+r+`] (`+e.shape[r]+`)`})},i=0;i<e.rank;++i)r(i)}function li(e){for(var t=[],n=0;0<e;)1&e&&t.push(n),e/=2,n++;return t}function ui(e,t,n){for(var r=[],i=0;i<e.length;i++)r[i]=Math.ceil((t[i]-e[i])/n[i]);return r}function di(e,t,n,r,i){var a=t[i],o=n[i]||1;(e&1<<i||a==null)&&(a=0<o?-(2**53-1):2**53-1);var s=r[i];return a<0&&(a+=s),S(0,a,s-1)}function fi(e,t,n,r,i){var a=t[i],o=n[i]||1;(e&1<<i||a==null)&&(a=0<o?2**53-1:-(2**53-1));var s=r[i];return a<0&&(a+=s),0<o?S(0,a,s):S(-1,a,s-1)}function pi(e,t,n){for(var r=n.length,i=0;i<n.length;i++)if(1<n[i]){r=i;break}for(i=r+1;i<n.length;i++)if(0<t[i]||n[i]!==e[i])return!1;return!0}function mi(e,t){for(var n=0<e.length?e[e.length-1]:1,r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}var hi=Object.freeze({assertParamsValid:ci,maskToAxes:li,computeOutShape:ui,startForAxis:di,stopForAxis:fi,isSliceContinous:pi,computeFlatOffset:mi});function gi(e,t){T(me(e),function(){return`The f passed in variableGrads(f) must be a function`}),T(t==null||Array.isArray(t)&&t.every(function(e){return e instanceof Qe}),function(){return`The varList passed in variableGrads(f, varList) must be an array of variables`});var n=t!=null;if(!n)for(var r in t=[],B.registeredVariables)t.push(B.registeredVariables[r]);var i=n?t.filter(function(e){return!e.trainable}):null,a=t.length;T(0<(t=t.filter(function(e){return e.trainable})).length,function(){return`variableGrads() expects at least one of the input variables to be trainable, but none of the `+a+` variables is trainable.`});var o=B.gradients(e,t,null,!0),s=o.value,c=o.grads;T(c.some(function(e){return e!=null}),function(){return`Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().`}),T(s.rank===0,function(){return`The f passed in variableGrads(f) must return a scalar, but it returned a rank-`+s.rank+` tensor`});var l={};return t.forEach(function(e,t){c[t]!=null&&(l[e.name]=c[t])}),i?.forEach(function(e){return l[e.name]=null}),{value:s,grads:l}}function _i(e){return B.customGrad(e)}function vi(e){if(0<e.filter(function(e){return e==null}).length)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}var yi=W({softmax_:function(e,t){t===void 0&&(t=-1);var n=U(e,`logits`,`softmax`,`float32`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank `+n.rank+` and dim was `+t);return B.runKernelFunc(function(e,r){var i=e.softmax(n,t);return r([i]),i},{logits:n},function(e,n){var r=n[0],i=e.mul(r);return{logits:function(){return i.sub(i.sum([t],!0).mul(r))}}},`Softmax`,{dim:t},[],[!0])}}),bi=W({logSoftmax_:function(e,t){t===void 0&&(t=-1);var n=U(e,`logits`,`logSoftmax`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank `+n.rank+` and axis was `+t);return _i(function(e,n){var r=e.max(t,!0),i=e.sub(r),a=i.toFloat().sub(i.exp().sum(t,!0).log());return n([a]),{value:a,gradFunc:function(e,n){var r=n[0].exp();return e.sub(e.sum(t,!0).mul(r))}}})(n)}}),xi=(Ci.prototype.get=function(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)},Ci.prototype.set=function(e,t){this.dataIdsCount++,this.data.set(e,t)},Ci.prototype.has=function(e){return this.data.has(e)},Ci.prototype.delete=function(e){return this.dataIdsCount--,this.data.delete(e)},Ci.prototype.numDataIds=function(){return this.dataIdsCount},Ci),Si=(K.prototype.time=function(e){return q(`time`)},K.prototype.read=function(e){return q(`read`)},K.prototype.readSync=function(e){return q(`readSync`)},K.prototype.numDataIds=function(){return q(`numDataIds`)},K.prototype.disposeData=function(e){return q(`disposeData`)},K.prototype.write=function(e,t,n){return q(`write`)},K.prototype.move=function(e,t,n,r){return q(`move`)},K.prototype.memory=function(){return q(`memory`)},K.prototype.floatPrecision=function(){return q(`floatPrecision`)},K.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},K.prototype.batchMatMul=function(e,t,n,r){return q(`batchMatMul`)},K.prototype.fusedBatchMatMul=function(e){return e.a,e.b,e.transposeA,e.transposeB,e.bias,e.activation,e.preluActivationWeights,q(`fusedBatchMatMul`)},K.prototype.slice=function(e,t,n){return q(`slice`)},K.prototype.stridedSlice=function(e,t,n,r){return q(`stridedSlice`)},K.prototype.unstack=function(e,t){return q(`unstack`)},K.prototype.reverse=function(e,t){return q(`reverse`)},K.prototype.concat=function(e,t){return q(`concat`)},K.prototype.neg=function(e){return q(`neg`)},K.prototype.add=function(e,t){return q(`add`)},K.prototype.addN=function(e){return q(`addN`)},K.prototype.subtract=function(e,t){return q(`subtract`)},K.prototype.multiply=function(e,t){return q(`multiply`)},K.prototype.realDivide=function(e,t){return q(`realDivide`)},K.prototype.floorDiv=function(e,t){return q(`floorDiv`)},K.prototype.sum=function(e,t){return q(`sum`)},K.prototype.prod=function(e,t){return q(`prod`)},K.prototype.unsortedSegmentSum=function(e,t,n){return q(`unsortedSegmentSum`)},K.prototype.argMin=function(e,t){return q(`argMin`)},K.prototype.argMax=function(e,t){return q(`argMax`)},K.prototype.equal=function(e,t){return q(`equal`)},K.prototype.notEqual=function(e,t){return q(`notEqual`)},K.prototype.less=function(e,t){return q(`less`)},K.prototype.lessEqual=function(e,t){return q(`lessEqual`)},K.prototype.greater=function(e,t){return q(`greater`)},K.prototype.greaterEqual=function(e,t){return q(`greaterEqual`)},K.prototype.logicalNot=function(e){return q(`logicalNot`)},K.prototype.logicalAnd=function(e,t){return q(`logicalAnd`)},K.prototype.logicalOr=function(e,t){return q(`logicalOr`)},K.prototype.where=function(e){return q(`where`)},K.prototype.select=function(e,t,n){return q(`select`)},K.prototype.topk=function(e,t,n){return q(`topk`)},K.prototype.min=function(e,t){return q(`min`)},K.prototype.minimum=function(e,t){return q(`minimum`)},K.prototype.mod=function(e,t){return q(`mod`)},K.prototype.max=function(e,t){return q(`max`)},K.prototype.maximum=function(e,t){return q(`maximum`)},K.prototype.all=function(e,t){return q(`all`)},K.prototype.any=function(e,t){return q(`any`)},K.prototype.squaredDifference=function(e,t){return q(`squaredDifference`)},K.prototype.ceil=function(e){return q(`ceil`)},K.prototype.floor=function(e){return q(`floor`)},K.prototype.round=function(e){return q(`round`)},K.prototype.sign=function(e){return q(`sign`)},K.prototype.isNaN=function(e){return q(`isNaN`)},K.prototype.isInf=function(e){return q(`isInf`)},K.prototype.isFinite=function(e){return q(`isFinite`)},K.prototype.pow=function(e,t){return q(`pow`)},K.prototype.exp=function(e){return q(`exp`)},K.prototype.expm1=function(e){return q(`expm1`)},K.prototype.softmax=function(e,t){return q(`softmax`)},K.prototype.log=function(e){return q(`log`)},K.prototype.log1p=function(e){return q(`log1p`)},K.prototype.sqrt=function(e){return q(`sqrt`)},K.prototype.rsqrt=function(e){return q(`rsqrt`)},K.prototype.square=function(e){return q(`square`)},K.prototype.reciprocal=function(e){return q(`reciprocal`)},K.prototype.relu=function(e){return q(`relu`)},K.prototype.relu6=function(e){return q(`relu6`)},K.prototype.prelu=function(e,t){return q(`prelu`)},K.prototype.elu=function(e){return q(`elu`)},K.prototype.eluDer=function(e,t){return q(`eluDer`)},K.prototype.selu=function(e){return q(`selu`)},K.prototype.int=function(e){return q(`int`)},K.prototype.clip=function(e,t,n){return q(`clip`)},K.prototype.abs=function(e){return q(`abs`)},K.prototype.complexAbs=function(e){return q(`complexAbs`)},K.prototype.sigmoid=function(e){return q(`sigmoid`)},K.prototype.softplus=function(e){return q(`softplus`)},K.prototype.sin=function(e){return q(`sin`)},K.prototype.cos=function(e){return q(`cos`)},K.prototype.tan=function(e){return q(`tan`)},K.prototype.asin=function(e){return q(`asin`)},K.prototype.acos=function(e){return q(`acos`)},K.prototype.atan=function(e){return q(`atan`)},K.prototype.atan2=function(e,t){return q(`atan2`)},K.prototype.sinh=function(e){return q(`sinh`)},K.prototype.cosh=function(e){return q(`cosh`)},K.prototype.tanh=function(e){return q(`tanh`)},K.prototype.asinh=function(e){return q(`asinh`)},K.prototype.acosh=function(e){return q(`acosh`)},K.prototype.atanh=function(e){return q(`atanh`)},K.prototype.erf=function(e){return q(`erf`)},K.prototype.step=function(e,t){return q(`step`)},K.prototype.fusedConv2d=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,q(`fusedConv2d`)},K.prototype.conv2d=function(e,t,n){return q(`conv2d`)},K.prototype.conv2dDerInput=function(e,t,n){return q(`conv2dDerInput`)},K.prototype.conv2dDerFilter=function(e,t,n){return q(`conv2dDerFilter`)},K.prototype.fusedDepthwiseConv2D=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,q(`fusedDepthwiseConv2D`)},K.prototype.depthwiseConv2D=function(e,t,n){return q(`depthwiseConv2D`)},K.prototype.depthwiseConv2DDerInput=function(e,t,n){return q(`depthwiseConv2DDerInput`)},K.prototype.depthwiseConv2DDerFilter=function(e,t,n){return q(`depthwiseConv2DDerFilter`)},K.prototype.conv3d=function(e,t,n){return q(`conv3d`)},K.prototype.conv3dDerInput=function(e,t,n){return q(`conv3dDerInput`)},K.prototype.conv3dDerFilter=function(e,t,n){return q(`conv3dDerFilter`)},K.prototype.maxPool=function(e,t){return q(`maxPool`)},K.prototype.maxPoolBackprop=function(e,t,n,r){return q(`maxPoolBackprop`)},K.prototype.avgPool=function(e,t){return q(`avgPool`)},K.prototype.avgPoolBackprop=function(e,t,n){return q(`avgPoolBackprop`)},K.prototype.avgPool3d=function(e,t){return q(`avgPool3d`)},K.prototype.avgPool3dBackprop=function(e,t,n){return q(`avgPool3dBackprop`)},K.prototype.maxPool3d=function(e,t){return q(`maxPool3d`)},K.prototype.maxPool3dBackprop=function(e,t,n,r){return q(`maxPool3dBackprop`)},K.prototype.reshape=function(e,t){return q(`reshape`)},K.prototype.cast=function(e,t){return q(`cast`)},K.prototype.tile=function(e,t){return q(`tile`)},K.prototype.pad=function(e,t,n){return q(`pad`)},K.prototype.transpose=function(e,t){return q(`transpose`)},K.prototype.gather=function(e,t,n){return q(`gather`)},K.prototype.gatherND=function(e,t){return q(`gatherND`)},K.prototype.scatterND=function(e,t,n){return q(`scatterND`)},K.prototype.batchToSpaceND=function(e,t,n){return q(`batchToSpaceND`)},K.prototype.spaceToBatchND=function(e,t,n){return q(`spaceToBatchND`)},K.prototype.resizeBilinear=function(e,t,n,r){return q(`resizeBilinear`)},K.prototype.resizeBilinearBackprop=function(e,t,n){return q(`resizeBilinearBackprop`)},K.prototype.resizeNearestNeighbor=function(e,t,n,r){return q(`resizeNearestNeighbor`)},K.prototype.resizeNearestNeighborBackprop=function(e,t,n){return q(`resizeNearestNeighborBackprop`)},K.prototype.batchNormalization=function(e,t,n,r,i,a){return q(`batchNormalization`)},K.prototype.localResponseNormalization4D=function(e,t,n,r,i){return q(`localResponseNormalization4D`)},K.prototype.LRNGrad=function(e,t,n,r,i,a,o){return q(`LRNGrad`)},K.prototype.multinomial=function(e,t,n,r){return q(`multinomial`)},K.prototype.oneHot=function(e,t,n,r){return q(`oneHot`)},K.prototype.cumsum=function(e,t,n,r){return q(`cumsum`)},K.prototype.nonMaxSuppression=function(e,t,n,r,i){return q(`nonMaxSuppression`)},K.prototype.fft=function(e){return q(`fft`)},K.prototype.ifft=function(e){return q(`ifft`)},K.prototype.complex=function(e,t){return q(`complex`)},K.prototype.real=function(e){return q(`real`)},K.prototype.imag=function(e){return q(`imag`)},K.prototype.cropAndResize=function(e,t,n,r,i,a){return q(`cropAndResize`)},K.prototype.depthToSpace=function(e,t,n){return q(`depthToSpace`)},K.prototype.split=function(e,t,n){return q(`split`)},K.prototype.sparseToDense=function(e,t,n,r){return q(`sparseToDense`)},K.prototype.diag=function(e){return q(`diag`)},K.prototype.fill=function(e,t,n){return q(`fill`)},K.prototype.onesLike=function(e){return q(`onesLike`)},K.prototype.zerosLike=function(e){return q(`zerosLike`)},K.prototype.linspace=function(e,t,n){return q(`linspace`)},K.prototype.dispose=function(){return q(`dispose`)},K);function K(){}function Ci(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}function q(e){throw Error(`'`+e+`' not yet implemented or not found in the registry. Did you forget to import the kernel?`)}function wi(e,t){for(var n=e.length,r=[],i=0;i<n;i++){var a=n-1-i,o=e[a]||1;1<(t[t.length-1-i]||1)&&o===1&&r.unshift(a)}return r}function Ti(e,t){for(var n=[],r=0;r<t.length;r++){var i=e[e.length-r-1],a=t.length-r-1,o=t[a];(i==null||i===1&&1<o)&&n.unshift(a)}return n}function Ei(e,t){for(var n=[],r=Math.max(e.length,t.length),i=0;i<r;i++){var a=e[e.length-i-1];a??=1;var o=t[t.length-i-1];if(o??=1,a===1)n.unshift(o);else if(o===1)n.unshift(a);else{if(a!==o)throw Error(`Operands could not be broadcast together with shapes `+e+` and `+t+`.`);n.unshift(a)}}return n}function Di(e,t,n,r,i,a,o){o===void 0&&(o=`channelsLast`);var s,c=Mi(t),l=c[0],u=c[1];if(o===`channelsLast`)s=[l,u,e[3],e[3]];else{if(o!==`channelsFirst`)throw Error(`Unknown dataFormat `+o);s=[l,u,e[1],e[1]]}return ki(e,s,n,r,i,a,!1,o)}function Oi(e,t,n,r,i,a,o){o===void 0&&(o=`NDHWC`);var s,c,l=Ni(t),u=l[0],d=l[1],f=l[2];if(o===`NDHWC`)c=`channelsLast`,s=[u,d,f,e[4],e[4]];else{if(o!==`NCDHW`)throw Error(`Unknown dataFormat `+o);c=`channelsFirst`,s=[u,d,f,e[1],e[1]]}return Ai(e,s,n,r,i,!1,c,a)}function ki(e,t,n,r,i,a,o,s){o===void 0&&(o=!1),s===void 0&&(s=`channelsLast`);var c=[-1,-1,-1,-1],l=c[0],u=c[1],d=c[2],f=c[3];if(s===`channelsLast`)l=e[0],u=e[1],d=e[2],f=e[3];else{if(s!==`channelsFirst`)throw Error(`Unknown dataFormat `+s);l=e[0],f=e[1],u=e[2],d=e[3]}var p,m=t[0],h=t[1],g=t[3],_=Mi(n),v=_[0],y=_[1],b=Mi(r),x=b[0],S=b[1],C=Pi(m,x),w=Pi(h,S),E=function(e,t,n,r,i,o,s){var c,l,u;if(typeof e==`number`){c={top:e,bottom:e,left:e,right:e,type:e===0?`VALID`:`NUMBER`};var d=function(e,t,n,r,i){r??=ji(e,t,n);var a=e[1],o=Fi((e[0]-t+2*r)/n+1,i);T(j(o),function(){return`The output # of rows (`+o+`) must be an integer. Change the stride and/or zero pad parameters`});var s=Fi((a-t+2*r)/n+1,i);return T(j(s),function(){return`The output # of columns (`+s+`) must be an integer. Change the stride and/or zero pad parameters`}),[o,s]}([t,n],o,r,e,a);l=d[0],u=d[1]}else if(e===`same`){l=Math.ceil(t/r),u=Math.ceil(n/i);var f=Math.max(0,(l-1)*r+o-t),p=Math.max(0,(u-1)*i+s-n),m=Math.floor(f/2),h=f-m,g=Math.floor(p/2);c={top:m,bottom:h,left:g,right:p-g,type:`SAME`}}else{if(e!==`valid`)throw Error(`Unknown padding parameter: `+e);c={top:0,bottom:0,left:0,right:0,type:`VALID`},l=Math.ceil((t-o+1)/r),u=Math.ceil((n-s+1)/i)}return{padInfo:c,outHeight:l,outWidth:u}}(i,u,d,v,y,C,w),D=E.padInfo,O=E.outHeight,k=E.outWidth,A=o?g*f:g;return s===`channelsFirst`?p=[l,A,O,k]:s===`channelsLast`&&(p=[l,O,k,A]),{batchSize:l,dataFormat:s,inHeight:u,inWidth:d,inChannels:f,outHeight:O,outWidth:k,outChannels:A,padInfo:D,strideHeight:v,strideWidth:y,filterHeight:m,filterWidth:h,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationHeight:x,dilationWidth:S,inShape:e,outShape:p,filterShape:t}}function Ai(e,t,n,r,i,a,o,s){a===void 0&&(a=!1),o===void 0&&(o=`channelsLast`);var c=[-1,-1,-1,-1,-1],l=c[0],u=c[1],d=c[2],f=c[3],p=c[4];if(o===`channelsLast`)l=e[0],u=e[1],d=e[2],f=e[3],p=e[4];else{if(o!==`channelsFirst`)throw Error(`Unknown dataFormat `+o);l=e[0],p=e[1],u=e[2],d=e[3],f=e[4]}var m,h=t[0],g=t[1],_=t[2],v=t[4],y=Ni(n),b=y[0],x=y[1],S=y[2],C=Ni(r),w=C[0],E=C[1],D=C[2],O=Pi(h,w),k=Pi(g,E),A=Pi(_,D),M=function(e,t,n,r,i,a,o,c,l,u){var d,f,p,m;if(typeof e==`number`){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?`VALID`:`NUMBER`};var h=function(e,t,n,r,i,a){i??=ji(e,t,r);var o=e[1],s=e[2],c=Fi((e[0]-t+2*i)/r+1,a);T(j(c),function(){return`The output # of depths (`+c+`) must be an integer. Change the stride and/or zero pad parameters`});var l=Fi((o-t+2*i)/r+1,a);T(j(l),function(){return`The output # of rows (`+l+`) must be an integer. Change the stride and/or zero pad parameters`});var u=Fi((s-t+2*i)/r+1,a);return T(j(u),function(){return`The output # of columns (`+u+`) must be an integer. Change the stride and/or zero pad parameters`}),[c,l,u,1]}([t,n,r,1],c,0,i,e,s);f=h[0],p=h[1],m=h[2]}else if(e===`same`){var g=((f=Math.ceil(t/i))-1)*i+c-t,_=((p=Math.ceil(n/a))-1)*a+l-n,v=((m=Math.ceil(r/o))-1)*o+u-r,y=Math.floor(g/2),b=g-y,x=Math.floor(_/2),S=_-x,C=Math.floor(v/2);d={top:x,bottom:S,left:C,right:v-C,front:y,back:b,type:`SAME`}}else{if(e!==`valid`)throw Error(`Unknown padding parameter: `+e);d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:`VALID`},f=Math.ceil((t-c+1)/i),p=Math.ceil((n-l+1)/a),m=Math.ceil((r-u+1)/o)}return{padInfo:d,outDepth:f,outHeight:p,outWidth:m}}(i,u,d,f,b,x,S,O,k,A),N=M.padInfo,P=M.outDepth,F=M.outHeight,ee=M.outWidth,I=a?v*p:v;return o===`channelsFirst`?m=[l,I,P,F,ee]:o===`channelsLast`&&(m=[l,P,F,ee,I]),{batchSize:l,dataFormat:o,inDepth:u,inHeight:d,inWidth:f,inChannels:p,outDepth:P,outHeight:F,outWidth:ee,outChannels:I,padInfo:N,strideDepth:b,strideHeight:x,strideWidth:S,filterDepth:h,filterHeight:g,filterWidth:_,effectiveFilterDepth:O,effectiveFilterHeight:k,effectiveFilterWidth:A,dilationDepth:w,dilationHeight:E,dilationWidth:D,inShape:e,outShape:m,filterShape:t}}function ji(e,t,n,r){r===void 0&&(r=1);var i=Pi(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)}function Mi(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Ni(e){return typeof e==`number`?[e,e,e]:e}function Pi(e,t){return t<=1?e:e+(e-1)*(t-1)}function Fi(e,t){if(!t)return e;switch(t){case`round`:return Math.round(e);case`ceil`:return Math.ceil(e);case`floor`:return Math.floor(e);default:throw Error(`Unknown roundingMode `+t)}}function Ii(e){var t=Mi(e),n=t[0],r=t[1],i=t[2];return n===1&&r===1&&i===1}function Li(e,t){return Ii(e)||Ii(t)}function Ri(e){if(e===`NHWC`)return`channelsLast`;if(e===`NCHW`)return`channelsFirst`;throw Error(`Unknown dataFormat `+e)}function zi(e,t,n){if(t===`complex64`){if(e.dtype===`complex64`)return e.clone();var r=Jn(e.shape),i=e.toFloat(),a=n.complex(i,r);return r.dispose(),i.dispose(),a}if(!oe(e.dtype,t))return B.makeTensorFromDataId(e.dataId,e.shape,t);if(e.dtype===`complex64`){var o=n.real(e);return a=o.cast(t),o.dispose(),a}if(t===`int32`)return n.int(e);if(t!==`bool`)throw Error(`Error in Cast: failed to cast `+e.dtype+` to `+t);var s=G(0,e.dtype);return a=n.notEqual(e,s),s.dispose(),a}function Bi(e,t){return B.makeTensorFromDataId(e.dataId,t,e.dtype)}function Vi(e,t,n){var r=(t-e)/(n-1),i=be(n,`float32`);i[0]=e;for(var a=1;a<i.length;a++)i[a]=i[a-1]+r;return Bn(i,`float32`)}var Hi=Object.freeze({castTensor:zi,reshapeTensor:Bi,linspaceImpl:Vi,upcastType:tt,axesAreInnerMostDims:Tn,combineLocations:En,computeOutAndReduceShapes:Dn,expandShapeToKeepDim:On,assertAxesAreInnerMostDims:kn,getAxesPermutation:An,getUndoAxesPermutation:jn,getInnerMostAxes:Mn,getBroadcastDims:wi,getReductionAxes:Ti,assertAndGetBroadcastShape:Ei,assertParamsConsistent:Nn,computeOutShape:Pn,computePool2DInfo:Di,computePool3DInfo:Oi,computeConv2DInfo:ki,computeConv3DInfo:Ai,computeDefaultPad:ji,tupleValuesAreOne:Ii,eitherStridesOrDilationsAreOne:Li,convertConv2DDataFormat:Ri,PARALLELIZE_THRESHOLD:30,computeOptimalWindowSize:ri});function Ui(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:`+e.length+`, imag: `+t.length+`.`);for(var n=new Float32Array(2*e.length),r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function Wi(e,t){return{real:e[2*t],imag:e[2*t+1]}}function Gi(e,t){return t<e?1:e<t?-1:0}function Ki(e,t,n,r,i){return Ji(e,t,n,r,i,0).selectedIndices}function qi(e,t,n,r,i,a){var o=Ji(e,t,n,r,i,a);return o.numValidOutputs.dispose(),{selectedIndices:o.selectedIndices,selectedScores:o.selectedScores}}function Ji(e,t,n,r,i,a,o,s){s===void 0&&(s=!1);for(var c=Array.from(t).map(function(e,t){return{score:e,boxIndex:t,suppressBeginIndex:0}}).filter(function(e){return e.score>i}).sort(Xi),l=0<a?-.5/a:0,u=[],d=[];u.length<n&&0<c.length;){var f=c.pop(),p=f.score,m=f.boxIndex,h=f.suppressBeginIndex;if(p<i)break;for(var g=!1,_=u.length-1;h<=_;--_){var v=Yi(e,m,u[_]);if(r<=v){g=!0;break}if(f.score*=(C=r,w=l,T=v,E=Math.exp(w*T*T),T<=C?E:0),f.score<=i)break}f.suppressBeginIndex=u.length,g||(f.score===p?(u.push(m),d.push(f.score)):f.score>i&&(x=function(e,t,n){for(var r=0,i=e.length,a=0,o=!1;r<i;){var s=n(t,e[a=r+(i-r>>>1)]);0<s?r=a+1:(i=a,o=!s)}return o?r:-r-1}(y=c,b=f,Xi||Gi),S=x<0?-(x+1):x,y.splice(S,0,b)))}var y,b,x,S,C,w,T,E,D=u.length;return s&&(u.fill(0,D),d.fill(0,D)),{selectedIndices:Bn(u,`int32`),selectedScores:Bn(d,`float32`),numValidOutputs:G(D,`int32`)}}function Yi(e,t,n){var r=e.subarray(4*t,4*t+4),i=e.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),d=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(s-a)*(c-o),m=(d-l)*(f-u);if(p<=0||m<=0)return 0;var h=Math.max(a,l),g=Math.max(o,u),_=Math.min(s,d),v=Math.min(c,f),y=Math.max(_-h,0)*Math.max(v-g,0);return y/(p+m-y)}function Xi(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}function Zi(e,t,n){var r=Array(e.rank).fill(0),i=e.shape.slice();return t.map(function(t){i[n]=t;var a=e.slice(r,i);return r[n]+=t,a})}function Qi(e,t){for(var n=Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];var i=xr(n,e.dtype);for(r=0;r<i.values.length;++r){for(var a=i.indexToLoc(r),o=Array(e.rank),s=0;s<o.length;s++)o[s]=a[s]%e.shape[s];var c=e.locToIndex(o);i.values[r]=e.values[c]}return i.toTensor()}function $i(e,t,n,r){for(var i=t[t.length-1],a=[e.length/i,i],o=a[0],s=a[1],c=ne(n,o*r),l=ne(`int32`,o*r),u=0;u<o;u++){for(var d=u*s,f=e.subarray(d,d+s),p=[],m=0;m<f.length;m++)p.push({value:f[m],index:m});p.sort(function(e,t){return t.value-e.value});var h=u*r,g=c.subarray(h,h+r),_=l.subarray(h,h+r);for(m=0;m<r;m++)g[m]=p[m].value,_[m]=p[m].index}var v=t.slice();return v[v.length-1]=r,[Rn(c,v,n),Rn(l,v,`int32`)]}function ea(e,t){for(var n=[],r=0;r<t.length;r++)t[r]&&n.push(r);var i=xr(e,`int32`),a=xr([n.length,e.length],`int32`);for(r=0;r<n.length;r++){var o=i.indexToLoc(n[r]),s=r*e.length;a.values.set(o,s)}return a.toTensor()}function ta(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map(function(e,t){return`T`+t});var n=[];this.variableNames.forEach(function(e){n.push(`float v`+e+` = get`+e+`AtOutCoords();`)});var r=this.variableNames.map(function(e){return`v`+e}).join(` + `);this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `}function na(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map(function(e,t){return`T`+t});var n=[];this.variableNames.forEach(function(e){n.push(`vec4 v`+e+` = get`+e+`AtOutCoords();`)});var r=this.variableNames.map(function(e){return`v`+e}).join(` + `);this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `}function ra(e,t,n){this.variableNames=[`A`];var r=e.windowSize,i=e.batchSize,a=e.inSize,o=Math.ceil(a/r);n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,o];var s=t===`max`?`>`:`<`,c=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+c+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}function ia(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map(function(t){return e+`.`+t})}function aa(e,t){return t===1?[e]:ia(e,t)}function oa(){var e,t,n,r,i,a,o,s,c,l;return l=d().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,n=`out`,r=t=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,c=``,`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(t=`attribute`,r=n=`varying`,i=`texture2D`,a=`gl_FragColor`,o=e=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}function sa(e,t,n){n===void 0&&(n=`index`);var r=ge(t);return r.map(function(t,i){return`int `+e[i]+` = `+n+` / `+t+`; `+(i===r.length-1?`int `+e[i+1]+` = `+n+` - `+e[i]+` * `+t:`index -= `+e[i]+` * `+t)+`;`}).join(``)}function ca(e){var t=ge(e).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+` + coords.y * `+t[1]+` + coords.z;
  }
`}var la=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function ua(e,t,n,r){var i=[];e.forEach(function(e){var t=k(e.shapeInfo.logicalShape);e.shapeInfo.isUniform?i.push(`uniform float `+e.name+(1<t?`[`+t+`]`:``)+`;`):(i.push(`uniform sampler2D `+e.name+`;`),i.push(`uniform int offset`+e.name+`;`))});var a,o,s,c=i.join(`
`),l=e.map(function(e){return function(e,t,n){n===void 0&&(n=!1);var r=``;r+=n?function e(t){var n,r,i;switch(t.shapeInfo.logicalShape.length){case 0:return n=t.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=oa(),`
    vec4 `+r+`() {
      return `+i.texture2D+`(`+n+`, halfCR);
    }
  `;case 1:return function(e){var t=e.name,n=`get`+t.charAt(0).toUpperCase()+t.slice(1),r=e.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=oa();return`
    vec4 `+n+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+i[0]+`, `+i[1]+`, index);
      return `+a.texture2D+`(`+t+`, uv);
    }
  `}(t);case 2:return function(e){var t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=i[0],o=i[1],s=oa();if(i!=null&&A(t,i))return`
      vec4 `+r+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+o+`.0, `+a+`.0);

        return `+s.texture2D+`(`+n+`, uv);
      }
    `;var c=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=Math.ceil(t[1]/2);return`
    vec4 `+r+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+l+`, `+c[0]+`, `+c[1]+`, row, col);
      return `+s.texture2D+`(`+n+`, uv);
    }
  `}(t);case 3:return function(t){var n=t.shapeInfo.logicalShape,r=t.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=t.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(n[0]===1)return`
        `+e(ma(t,n.slice(1)))+`
        vec4 `+i+`(int b, int row, int col) {
          return `+i+`(`+ha([`b`,`row`,`col`],[1,2])+`);
        }
      `;var s=o[0],c=o[1],l=Math.ceil(n[2]/2),u=l*Math.ceil(n[1]/2),d=oa();return`
    vec4 `+i+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+s+`, `+c+`, `+u+`, `+l+`, b, row, col);
      return `+d.texture2D+`(`+r+`, uv);
    }
  `}(t);default:return function(e){for(var t=e.shapeInfo.logicalShape,n=t.length,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],s=o[0],c=o[1],l=Math.ceil(t[n-1]/2),u=l*Math.ceil(t[n-2]/2),d=`int b, int row, int col`,f=`b * `+u+` + (row / 2) * `+l+` + (col / 2)`,p=2;p<n-1;p++)d=`int b`+p+`, `+d,u*=t[n-p-1],f=`b`+p+` * `+u+` + `+f;var m=oa();return`
    vec4 `+i+`(`+d+`) {
      int index = `+f+`;
      int texR = index / `+c+`;
      int texC = index - texR * `+c+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+c+`, `+s+`);
      return `+m.texture2D+`(`+r+`, uv);
    }
  `}(t)}}(e):function e(t){var n=t.shapeInfo.logicalShape;switch(n.length){case 0:return function(e){var t=e.name,n=`get`+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`float `+n+`() {return `+t+`;}`;var r=e.shapeInfo.texShape,i=r[0],a=r[1];if(i===1&&a===1)return`
      float `+n+`() {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var o=e.shapeInfo.texShape,s=o[0],c=o[1],l=da(t);return`
    float `+n+`() {
      vec2 uv = uvFromFlat(`+s+`, `+c+`, `+l+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(t);case 1:return function(e){var t=e.name,n=`get`+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`
      float `+n+`(int index) {
        `+fa(e)+`
      }
    `;var r=e.shapeInfo.texShape,i=r[0],a=r[1];if(a===1&&i===1)return`
      float `+n+`(int index) {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var o=da(t);return a===1?`
      float `+n+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+o+`) + 0.5) / `+i+`.0);
        return sampleTexture(`+t+`, uv);
      }
    `:i===1?`
      float `+n+`(int index) {
        vec2 uv = vec2((float(index + `+o+`) + 0.5) / `+a+`.0, 0.5);
        return sampleTexture(`+t+`, uv);
      }
    `:`
    float `+n+`(int index) {
      vec2 uv = uvFromFlat(`+i+`, `+a+`, index + `+o+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(t);case 2:return function(t){var n=t.shapeInfo.logicalShape,r=t.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=t.shapeInfo.texShape;if(a!=null&&A(n,a)){var o=a[0],s=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+s+`.0, `+o+`.0);
      return sampleTexture(`+r+`, uv);
    }
  `}var c=te(n),l=c.newShape,u=c.keptDims,d=l;if(d.length<n.length)return`
      `+e(ma(t,d))+`
      float `+i+`(int row, int col) {
        return `+i+`(`+ha([`row`,`col`],u)+`);
      }
    `;if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+fa(t)+`
      }
    `;var f=a[0],p=a[1],m=da(r);return p===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+`), vec3(`+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+f+`.0);
      return sampleTexture(`+r+`, uv);
    }
  `:f===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+`), vec3(`+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+p+`.0, 0.5);
      return sampleTexture(`+r+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+` + col + `+m+`;
    vec2 uv = uvFromFlat(`+f+`, `+p+`, index);
    return sampleTexture(`+r+`, uv);
  }
`}(t);case 3:return function(t){var n=t.shapeInfo.logicalShape,r=t.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[1]*n[2],o=n[2],s=te(n),c=s.newShape,l=s.keptDims,u=c;if(u.length<n.length)return`
        `+e(ma(t,u))+`
        float `+i+`(int row, int col, int depth) {
          return `+i+`(`+ha([`row`,`col`,`depth`],l)+`);
        }
      `;if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+`, `+o+`, 1)));
        `+fa(t)+`
      }
    `;var d=t.shapeInfo.texShape,f=d[0],p=d[1],m=t.shapeInfo.flatOffset;if(p===a&&m==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+o+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+p+`.0, `+f+`.0);
          return sampleTexture(`+r+`, uv);
        }
      `;if(p===o&&m==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+p+`.0, `+f+`.0);
      return sampleTexture(`+r+`, uv);
    }
  `;var h=da(r);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+` + col * `+o+` + depth + `+h+`;
        vec2 uv = uvFromFlat(`+f+`, `+p+`, index);
        return sampleTexture(`+r+`, uv);
      }
  `}(t);case 4:return function(t){var n=t.shapeInfo.logicalShape,r=t.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[3],o=n[2]*a,s=n[1]*o,c=te(n),l=c.newShape,u=c.keptDims;if(l.length<n.length)return`
      `+e(ma(t,l))+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+`(`+ha([`row`,`col`,`depth`,`depth2`],u)+`);
      }
    `;if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+s+`, `+o+`, `+a+`, 1)));
        `+fa(t)+`
      }
    `;var d=t.shapeInfo.flatOffset,f=t.shapeInfo.texShape,p=f[0],m=f[1];if(m===s&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+o+`, `+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+`.0, `+p+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `;if(m===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+`, `+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+`.0, `+p+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `;var h=da(r);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+s+` + col * `+o+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+p+`, `+m+`, index + `+h+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(t);case 5:return function(t){var n=t.shapeInfo.logicalShape,r=t.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[4],o=n[3]*a,s=n[2]*o,c=n[1]*s,l=te(n),u=l.newShape,d=l.keptDims;if(u.length<n.length)return`
      `+e(ma(t,u))+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+`(`+ha([`row`,`col`,`depth`,`depth2`,`depth3`],d)+`);
      }
    `;if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+`, `+s+`, `+o+`, `+a+`)) +
          depth3;
        `+fa(t)+`
      }
    `;var f=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,m=p[0],h=p[1];if(h===c&&f==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+s+`, `+o+`, `+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+h+`.0, `+m+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `;if(h===a&&f==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+`, `+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+h+`.0, `+m+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `;var g=da(r);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+` + col * `+s+` + depth * `+o+` +
          depth2 * `+a+` + depth3 + `+g+`;
      vec2 uv = uvFromFlat(`+m+`, `+h+`, index);
      return sampleTexture(`+r+`, uv);
    }
  `}(t);case 6:return function(t){var n=t.shapeInfo.logicalShape,r=t.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=te(n),o=a.newShape,s=a.keptDims;if(o.length<n.length)return`
      `+e(ma(t,o))+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+`(`+ha([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],s)+`);
      }
    `;var c=n[5],l=n[4]*c,u=n[3]*l,d=n[2]*u,f=n[1]*d;if(t.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+f+`, `+d+`, `+u+`, `+l+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+c+`, 1)));
        `+fa(t)+`
      }
    `;var p=t.shapeInfo.flatOffset,m=t.shapeInfo.texShape,h=m[0],g=m[1];if(g===f&&p==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+`, `+u+`, `+l+`, `+c+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+`.0, `+h+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `;if(g===c&&p==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+`.0, `+h+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `;var _=da(r);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+f+` + col * `+d+` + depth * `+u+` +
          depth2 * `+l+` + depth3 * `+c+` + depth4 + `+_+`;
      vec2 uv = uvFromFlat(`+h+`, `+g+`, index);
      return sampleTexture(`+r+`, uv);
    }
  `}(t);default:throw Error(n.length+`-D input sampling is not yet supported`)}}(e);var i=e.shapeInfo.logicalShape,a=t.logicalShape;return i.length<=a.length&&(r+=n?function(e,t){var n,r=e.name,i=r.charAt(0).toUpperCase()+r.slice(1),a=`get`+i+`AtOutCoords`,o=e.shapeInfo.logicalShape.length,s=t.logicalShape.length,c=wi(e.shapeInfo.logicalShape,t.logicalShape),l=pa(s),u=s-o,d=[`x`,`y`,`z`,`w`,`u`,`v`];n=o===0?``:s<2&&1<=c.length?`coords = 0;`:c.map(function(e){return`coords.`+d[e+u]+` = 0;`}).join(`
`);var f=s<2&&0<o?`coords`:e.shapeInfo.logicalShape.map(function(e,t){return`coords.`+d[t+u]}).join(`, `),p=`return outputValue;`,m=k(e.shapeInfo.logicalShape)===1,h=k(t.logicalShape)===1;if(o!==1||m||h){if(m&&!h)p=s===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(c.length){var g=o-2,_=o-1;-1<c.indexOf(g)&&-1<c.indexOf(_)?p=`return vec4(outputValue.x);`:-1<c.indexOf(g)?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:-1<c.indexOf(_)&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}}else p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+a+`() {
      `+l+` coords = getOutputCoords();
      `+n+`
      vec4 outputValue = get`+i+`(`+f+`);
      `+p+`
    }
  `}(e,t):function(e,t){var n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&A(o,a))return`
      float `+i+`() {
        return sampleTexture(`+n+`, resultUV);
      }
    `;var l=pa(c),u=wi(e.shapeInfo.logicalShape,t.logicalShape),d=c-s,f=[`x`,`y`,`z`,`w`,`u`,`v`];return`
    float `+i+`() {
      `+l+` coords = getOutputCoords();
      `+(s===0?``:c<2&&1<=u.length?`coords = 0;`:u.map(function(e){return`coords.`+f[e+d]+` = 0;`}).join(`
`))+`
      return get`+r+`(`+(c<2&&0<s?`coords`:e.shapeInfo.logicalShape.map(function(e,t){return`coords.`+f[t+d]}).join(`, `))+`);
    }
  `}(e,t)),r}(e,t,r)}).join(`
`),u=t.texShape,d=oa(),f=`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `,p=(s=d).version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+s.varyingFs+` vec2 resultUV;
    `+s.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+s.defineSpecialNaN+`
    `+s.defineSpecialInf+`
    `+s.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}

    
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}

    
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}

  `;return o=t.isPacked?(a=function(e,t){switch(e.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return n=t,(r=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)])[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+r[1]+`.0);
      }
    `:r[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+r[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+r[0]+`, `+r[1]+`));
      return 2 * (resTexRC.x * `+r[1]+` + resTexRC.y);
    }
  `;case 2:return function(e,t){var n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(A(e,t))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+n[0]+`, `+n[1]+`));
      }
    `;var r=Math.ceil(e[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+n[0]+`, `+n[1]+`));

      int index = resTexRC.x * `+n[1]+` + resTexRC.y;
      int r = 2 * (index / `+r+`);
      int c = imod(index, `+r+`) * 2;

      return ivec2(r, c);
    }
  `}(e,t);case 3:return i=e,a=t,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=(s=Math.ceil(i[2]/2))*Math.ceil(i[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+o[0]+`, `+o[1]+`));
      int index = resTexRC.x * `+o[1]+` + resTexRC.y;

      int b = index / `+c+`;
      index -= b * `+c+`;

      int r = 2 * (index / `+s+`);
      int c = imod(index, `+s+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(e,t){for(var n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],r=Math.ceil(e[e.length-1]/2),i=r*Math.ceil(e[e.length-2]/2),a=i,o=``,s=`b, r, c`,c=2;c<e.length-1;c++)o=`
      int b`+c+` = index / `+(a*=e[e.length-c-1])+`;
      index -= b`+c+` * `+a+`;
    `+o,s=`b`+c+`, `+s;return`
    ivec`+e.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+n[0]+`, `+n[1]+`));
      int index = resTexRC.x * `+n[1]+` + resTexRC.y;

      `+o+`

      int b = index / `+i+`;
      index -= b * `+i+`;

      int r = 2 * (index / `+r+`);
      int c = imod(index, `+r+`) * 2;

      return ivec`+e.length+`(`+s+`);
    }
  `}(e,t)}var n,r,i,a,o,s,c}(t.logicalShape,u),`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `):(a=function(e,t){switch(e.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return(u=t)[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+u[1]+`.0);
      }
    `:u[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+u[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+u[0]+`, `+u[1]+`));
      return resTexRC.x * `+u[1]+` + resTexRC.y;
    }
  `;case 2:return A(c=e,l=t)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+l[0]+`, `+l[1]+`));
      }
    `:c[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+l[0]+`, `+l[1]+`));
        int index = resTexRC.x * `+l[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:c[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+l[0]+`, `+l[1]+`));
        int index = resTexRC.x * `+l[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+l[0]+`, `+l[1]+`));
      int index = resTexRC.x * `+l[1]+` + resTexRC.y;
      int r = index / `+c[1]+`;
      int c = index - r * `+c[1]+`;
      return ivec2(r, c);
    }
  `;case 3:return d=t,f=sa([`r`,`c`,`d`],e),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+d[0]+`, `+d[1]+`));
      int index = resTexRC.x * `+d[1]+` + resTexRC.y;
      `+f+`
      return ivec3(r, c, d);
    }
  `;case 4:return o=t,s=sa([`r`,`c`,`d`,`d2`],e),`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+o[0]+`, `+o[1]+`));
      int index = resTexRC.x * `+o[1]+` + resTexRC.y;
      `+s+`
      return ivec4(r, c, d, d2);
    }
  `;case 5:return i=t,a=sa([`r`,`c`,`d`,`d2`,`d3`],e),`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+i[0]+`,
                             `+i[1]+`));

      int index = resTexRC.x * `+i[1]+` + resTexRC.y;

      `+a+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `;case 6:return n=t,r=sa([`r`,`c`,`d`,`d2`,`d3`,`d4`],e),`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+n[0]+`, `+n[1]+`));
      int index = resTexRC.x * `+n[1]+` + resTexRC.y;

      `+r+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `;default:throw Error(e.length+`-D output sampling is not yet supported`)}var n,r,i,a,o,s,c,l,u,d,f}(t.logicalShape,u),`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `),r&&(p+=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`),[p,f,o,c,a,l,n].join(`
`)}function da(e){return`offset`+e}function fa(e){var t=e.name,n=k(e.shapeInfo.logicalShape);return n<2?`return `+t+`;`:`
    for (int i = 0; i < `+n+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function pa(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank `+e+` is not yet supported`)}function ma(e,t){var n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function ha(e,t){return t.map(function(t){return e[t]}).join(`, `)}function ga(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,T(2<e.length,function(){return`Packed arg`+(n.charAt(0).toUpperCase()+n.slice(1))+` supports only inputs with rank above 2.`});var i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),1<a&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);var o,s,c=this.outputShape,l=c.length,u=pa(l),d=aa(`coords`,l);if(a===1){var f=pa(s=l+1);o=`
        `+f+` sourceLocR = `+f+`(`+d.join()+`, 0);
        ++`+d[l-1]+`;
        `+f+` sourceLocG = `+f+`(`+d.join()+`, 0);
        ++`+d[l-2]+`;
        `+f+` sourceLocA = `+f+`(`+d.join()+`, 0);
        --`+d[l-1]+`;
        `+f+` sourceLocB = `+f+`(`+d.join()+`, 0);
        --`+d[l-2]+`;`}else o=`
        `+u+` sourceLocR = coords;
        ++`+d[(s=l)-1]+`;
        `+u+` sourceLocG = coords;
        ++`+d[l-2]+`;
        `+u+` sourceLocA = coords;
        --`+d[l-1]+`;
        `+u+` sourceLocB = coords;
        --`+d[l-2]+`;`;var p=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,s),m=`.`+p[s-1],h=p.map(function(e){return`int `+e}),g=aa(`sourceLocR`,s-1).concat(`inIdx.r`),_=aa(`sourceLocG`,s-1).concat(`inIdx.g`),v=aa(`sourceLocB`,s-1).concat(`inIdx.b`),y=aa(`sourceLocA`,s-1).concat(`inIdx.a`),b=n===`max`?`greaterThan`:`lessThan`,x=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+_.join()+`),
                             getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+y.join()+`)));`,S=`vec4(
            getAChannel(`+g.join()+`),
            hasNextCol ? getAChannel(`+_.join()+`) : 0.,
            hasNextRow ? getAChannel(`+v.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+y.join()+`) : 0.)`,C=r?``:`
      float getBestIndicesAChannel(`+h.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+h.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+C+`
      void main() {
        `+u+` coords = getOutputCoords();
        bool hasNextCol = `+d[l-1]+` < `+(c[l-1]-1)+`;
        bool hasNextRow = `+d[l-2]+` < `+(c[l-2]-1)+`;
        `+o+`
        ivec4 srcIdx = ivec4(sourceLocR`+m+`, sourceLocG`+m+`,
          sourceLocB`+m+`, sourceLocA`+m+`) * `+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+S+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+x+`
          vec4 candidate = `+S+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+b+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}function _a(e){this.variableNames=[`dy`],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(`+l+`, `+u+`);
      const float avgMultiplier = float(`+d+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+c+`;
            wC+= `+o+`) {
            float dyC = float(dyCCorner + wC) / `+i+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}function va(e){this.variableNames=[`dy`],this.outputShape=e.inShape;var t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(`+p+`, `+m+`, `+h+`);
      const float avgMultiplier = float(`+g+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+u+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+i+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+d+`;
              wR += `+c+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+l+`) {
              float dyC = float(dyCCorner + wC) / `+o+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}function ya(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],Ei(e,t),Ei(e,n);var o=`0.0`;r!=null&&(Ei(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);var s=`1.0`;i!=null&&(Ei(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+o+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}function ba(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],Ei(e,t),Ei(e,n);var o=`vec4(0.0)`;r!=null&&(Ei(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);var s=`vec4(1.0)`;i!=null&&(Ei(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = `+o+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `}function xa(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=Ei(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+e+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}function Sa(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=Ei(t,n),this.userCode=`
      float binaryOperation(float a, float b) {
        `+e+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}function Ca(e,t,n,r){r===void 0&&(r=!1),this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Ei(t,n);var i=this.outputShape.length,a=``;if(r){if(i===0||k(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+pa(i)+` coords = getOutputCoords();
        `,i===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var o=aa(`coords`,i);a+=`
            bool nextRowOutOfBounds =
              (`+o[i-2]+` + 1) >= `+this.outputShape[i-2]+`;
            bool nextColOutOfBounds =
              (`+o[i-1]+` + 1) >= `+this.outputShape[i-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+e+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `}function wa(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}function Ta(e){this.outputShape=[],this.outputShape=Pn(e,1),this.variableNames=e.map(function(e,t){return`T`+t});var t=Array(e.length-1);t[0]=e[0][1];for(var n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];var r=[`if (yC < `+t[0]+`) setOutput(getT0(yR, yC));`];for(n=1;n<t.length;n++){var i=t[n-1];r.push(`else if (yC < `+t[n]+`) setOutput(getT`+n+`(yR, yC-`+i+`));`)}var a=t.length,o=t[t.length-1];r.push(`else setOutput(getT`+a+`(yR, yC-`+o+`));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `}function Ea(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Pn(e,t);var n=this.outputShape,r=n.length,i=pa(r),a=aa(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map(function(e,t){return`T`+t});var s=Array(e.length-1);s[0]=e[0][t];for(var c=1;c<s.length;c++)s[c]=s[c-1]+e[c][t];var l=o[t],u=o.slice(-2),d=o.join(),f=`if (`+l+` < `+s[0]+`) {
        return getChannel(
            getT0(`+d+`), vec2(`+u.join()+`));
        }`;for(c=1;c<s.length;c++){var p=s[c-1];f+=`
        if (`+l+` < `+s[c]+`  && `+l+` >= `+s[c-1]+`) {
          return getChannel(
            getT`+c+`(`+Ia(o,l,p)+`),
            vec2(`+Ia(u,l,p)+`));
        }`}var m=s.length,h=s[s.length-1];f+=`
        return getChannel(
          getT`+m+`(`+Ia(o,l,h)+`),
          vec2(`+Ia(u,l,h)+`));`,this.userCode=`
      float getValue(`+o.map(function(e){return`int `+e})+`) {
        `+f+`
      }

      void main() {
        `+i+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[r-1]+` = `+a[r-1]+` + 1;
        if (`+a[r-1]+` < `+n[r-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[r-2]+` = `+a[r-2]+` + 1;
        if (`+a[r-2]+` < `+n[r-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[r-1]+` = `+a[r-1]+` - 1;
        if (`+a[r-2]+` < `+n[r-2]+` &&
            `+a[r-1]+` < `+n[r-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `}var Da=`return a + b;`,Oa=`return a - b;`,ka=`return a * b;`,Aa=`return (a < 0.) ? b * a : a;`,ja=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Ma=(Fa.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(r,i){n.minLoc??(n.minLoc=r.getUniformLocationNoThrow(i,`minVal`),n.maxLoc=r.getUniformLocationNoThrow(i,`maxVal`)),r.gl.uniform1f(n.minLoc,e),r.gl.uniform1f(n.maxLoc,t)}},Fa),Na=(Pa.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(r,i){n.minLoc??(n.minLoc=r.getUniformLocationNoThrow(i,`minVal`),n.maxLoc=r.getUniformLocationNoThrow(i,`maxVal`)),r.gl.uniform1f(n.minLoc,e),r.gl.uniform1f(n.maxLoc,t)}},Pa);function Pa(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}function Fa(e){this.variableNames=[`A`],this.outputShape=e,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}function Ia(e,t,n){var r=e.indexOf(t);return e.map(function(e,t){return t===r?e+` - `+n:e}).join()}function La(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+t+` - `+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+n+` - `+i+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}function Ra(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+o+`, `+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+u+`];

        ivec2 dyCorner = ivec2(coords[`+c+`], coords[`+l+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+i+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}function za(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;var t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yF = 0; yF < `+e.outDepth+`; yF++) {
            int xF = wF + yF * `+t+` - `+i+`;

            if (xF < 0 || xF >= `+e.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+e.outHeight+`; yR++) {
              int xR = wR + yR * `+n+` - `+a+`;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+e.outWidth+`; yC++) {
                int xC = wC + yC * `+r+` - `+o+`;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}function Ba(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;var t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+`, `+c+`, `+l+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+i+`.0;

          if (dyF < 0.0 || dyF >= `+e.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+n+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+n+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+o+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}function Va(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+t+` - `+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+n+` - `+i+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}function Ha(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+`, `+o+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+i+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}function Ua(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=[`x`,`W`],this.outputShape=e.outShape;var i=e.padInfo.top,a=e.padInfo.left,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterHeight,d=e.filterWidth,f=4*Math.floor(e.inChannels/4),p=e.inChannels%4,m=e.dataFormat===`channelsLast`,h=m?1:2,g=m?2:3,_=m?3:1,v=``,y=``;n&&(v=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,y=`result = activation(result);`);var b=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+o+`, `+s+`);
      const ivec2 pads = ivec2(`+i+`, `+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+_+`];

        ivec2 xRCCorner =
            ivec2(coords[`+h+`], coords[`+g+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+u+`; wR++) {
          int xR = xRCorner + wR * `+c+`;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+l+`;

            if (xC < 0 || xC >= `+e.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+m+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p==1)+`) {

              if (`+m+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(p==2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+m+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p==3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+m+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+b+`
        `+y+`
        setOutput(result);
      }
    `}function Wa(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;var t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=4*Math.floor(e.inChannels/4),m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+i+`, `+a+`, `+o+`);
      const ivec3 pads = ivec3(`+t+`, `+n+`, `+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+u+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+d+`; wR++) {
            int xR = xRCorner + wR * `+c+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+l+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(m==1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(m==2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(m==3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}function Ga(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=[`x`,`W`],this.outputShape=e.outShape;var i=e.inHeight,a=e.inWidth,o=e.padInfo.top,s=e.padInfo.left,c=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,f=e.filterHeight,p=e.filterWidth,m=e.outChannels/e.inChannels,h=``,g=``;n&&(h=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,g=`result = activation(result);`);var _=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),this.userCode=`
      `+h+`

      const ivec2 strides = ivec2(`+c+`, `+l+`);
      const ivec2 pads = ivec2(`+o+`, `+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+m+`;
        int q = d2 - d1 * `+m+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+i+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+d+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+_+`
        `+g+`
        setOutput(result);
      }
    `}function Ka(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.outShape;for(var i=e.inHeight,a=e.inWidth,o=e.padInfo.top,s=e.padInfo.left,c=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,f=e.filterHeight,p=e.filterWidth,m=p,h=`int xR; int xC; int xCOffset;`,g=0;g<f;g++)for(var _=0;_<p;_++)h+=`
          vec4 xTexelR`+g+`C`+2*_+` = vec4(0.);
          vec4 wR`+g+`C`+_+` = vec4(0.);
          vec4 xR`+g+`C`+_+` = vec4(0.);`;for(g=0;g<f;g++)for(var v=0;v<m;v++){if(h+=`
          xR = xRCorner + `+g*u+`;
          xC = xCCorner + `+(_=2*v)*d+`;
        `,l===1){if(_<p&&(h+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+i+` && xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+g+`C`+_+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+g+`C`+_+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+g+`C`+_+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+i+` && xCOffset >= 0 && xCOffset < `+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+g+`C`+_+` = vec4(previous.zw, xTexelR`+g+`C`+_+`.xy);
                } else {
                  xR`+g+`C`+_+` = vec4(0, 0, xTexelR`+g+`C`+_+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+i+` && xC >= 0 && xC < `+a+`) {
                  xTexelR`+g+`C`+_+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+`C`+_+` = vec4(0.);
                }

                xR`+g+`C`+_+` = xTexelR`+g+`C`+_+`;
              `,_+1<p)){var y=s%2==0?C(d):d;d%2==0&&s%2==1||d%2!=0&&s%2!=1?(h+=`
                  xCOffset = xC + `+s%2+` + `+y+`;

                  if(xR >= 0 && xR < `+i+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+g+`C`+(_+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,1<d&&(h+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+i+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+g+`C`+_+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+g+`C`+_+` = vec4(0.);
                    }
                  `),h+=`
                  xR`+g+`C`+(_+1)+` = vec4(
                    xTexelR`+g+`C`+_+`.zw, xTexelR`+g+`C`+(_+2)+`.xy);
                `):h+=`
                  xCOffset = xC + `+y+`;

                  if(xR >= 0 && xR < `+i+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+g+`C`+(_+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+g+`C`+(_+1)+` = xTexelR`+g+`C`+(_+2)+`;
                `}}else _<p&&(h+=`
              if(xR >= 0 && xR < `+i+`) {
            `,s%2==1?(h+=`
                xCOffset = xC + 1 - `+l+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+g+`C`+_+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+`C`+_+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+g+`C`+(_+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+g+`C`+(_+2)+` = vec4(0.);
                }

                xR`+g+`C`+_+` = vec4(
                  xTexelR`+g+`C`+_+`.zw, xTexelR`+g+`C`+(_+2)+`.zw);
              `,_+1<p&&(h+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+l+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+g+`C`+(_+1)+` = vec4(xTexelR`+g+`C`+(_+2)+`.xy, final.xy);
                `)):(h+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+g+`C`+_+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+`C`+_+` = vec4(0.);
                }

                xCOffset = xC + `+l+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+g+`C`+(_+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+`C`+(_+2)+` = vec4(0.);
                }

                xR`+g+`C`+_+` = vec4(
                  xTexelR`+g+`C`+_+`.xy, xTexelR`+g+`C`+(_+2)+`.xy);
              `,_+1<p&&(h+=`
                  xR`+g+`C`+(_+1)+` = vec4(
                    xTexelR`+g+`C`+_+`.zw, xTexelR`+g+`C`+(_+2)+`.zw);
                `)),h+=`}`);_<p&&(h+=`
            vec4 wTexelR`+g+`C`+_+` = getW(`+g+`, `+_+`, d1, q);
            wR`+g+`C`+_+` = vec4(wTexelR`+g+`C`+_+`.xz, wTexelR`+g+`C`+_+`.xz);
          `,_+1<p&&(h+=`
              vec4 wTexelR`+g+`C`+(_+1)+` = getW(`+g+`, `+(_+1)+`, d1, q);
              wR`+g+`C`+(_+1)+` =
                vec4(wTexelR`+g+`C`+(_+1)+`.xz, wTexelR`+g+`C`+(_+1)+`.xz);`))}for(g=0;g<f;g++)for(_=0;_<p;_++)h+=`dotProd += xR`+g+`C`+_+` * wR`+g+`C`+_+`;`;var b=``,x=``;n&&(b=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`vec4 activation(vec4 x) {
          `+n+`
        }`,x=`result = activation(result);`);var S=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+c+`, `+l+`);
      const ivec2 pads = ivec2(`+o+`, `+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+h+`

        vec4 result = dotProd;
        `+S+`
        `+x+`
        setOutput(result);
      }
    `}function qa(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];var a=e[0],o=e[1],s=e[2],c=e[3],l=t[0],u=n[0],d=n[1];this.outputShape=[l,u,d,c];var f=+(r===`bilinear`),p=[o-1+`.0`,s-1+`.0`],m=p[0],h=p[1],g=1<u?[``+(o-1)/(u-1),`(y2-y1) * height_ratio`,`y1*`+m+` + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * `+m],_=g[0],v=g[1],y=g[2],b=1<d?[``+(s-1)/(d-1),`(x2-x1) * width_ratio`,`x1*`+h+` + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * `+h],x=b[0],S=b[1],C=b[2];this.userCode=`
      const float height_ratio = float(`+_+`);
      const float width_ratio = float(`+x+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+v+`;
        float width_scale = `+S+`;

        float in_y = `+y+`;
        if( in_y < 0.0 || in_y > `+m+` ) {
          setOutput(float(`+i+`));
          return;
        }
        float in_x = `+C+`;
        if( in_x < 0.0 || in_x > `+h+` ) {
          setOutput(float(`+i+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}function Ja(e,t,n){this.variableNames=[`x`];var r=(this.outputShape=e).length,i=e[e.length-1],a=n?`<`:`>`;this.userCode=`
      int getIndex(int i) {
        `+(n?`return `+i+` -i - 1;`:`return i;`)+`
      }

      void main() {
        `+pa(r)+` coords = getOutputCoords();
        int end = `+Ya(r,`coords`)+`;
        float val = 0.0;
        for (int i = `+i+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+Ya(r,`coords`)+` = idx;
          val += getX(`+function(e,t){if(r===1)return t;if(r===2)return t+`.x, `+t+`.y`;if(r===3)return`coords.x, coords.y, coords.z`;if(r===4)return`coords.x, coords.y, coords.z, coords.w`;throw Error(`Cumulative sum for rank `+r+` is not yet supported`)}(0,`coords`)+`);
        }
        setOutput(val);
      }
    `}function Ya(e,t){if(e===1)return``+t;if(e===2)return t+`.y`;if(e===3)return t+`.z`;if(e===4)return t+`.w`;throw Error(`Cumulative sum for rank `+e+` is not yet supported`)}function Xa(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=pt.DENSE;var t=wt(e),n=oa();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+sa([`r`,`c`,`d`],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+`, `+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+n.output+` = result;
      }
    `}function Za(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=pt.DENSE;var t=wt(e),n=oa();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+sa([`r`,`c`,`d`],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+`, `+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+n.output+` = result;
      }
    `}function Qa(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}function $a(e){this.variableNames=[`A`],this.outTexUsage=mt.DOWNLOAD;var t=oa();this.outputShape=e,this.userCode=`
      `+la+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `}function eo(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=mt.DOWNLOAD;var t=oa();this.outputShape=e,this.userCode=`
      `+la+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `}function to(e,t,n){n===void 0&&(n=!1),this.variableNames=[`A`];var r=oa(),i=t[0],a=t[1];this.outputShape=e;var o=`result`;n&&(o=`floor(result * 255. + 0.5)`),this.userCode=`
      `+ca(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+`.0, `+i+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+` = vec4(`+o+`, 0., 0., 0.);
      }
    `}function no(e,t,n){n===void 0&&(n=!1),this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;var r=oa(),i=t[0],a=t[1];this.outputShape=e;var o=``,s=`result`;n&&(s=`floor(result * 255. + 0.5)`);for(var c=0;c<=1;c++)for(var l=0;l<=1;l++){var u=2*c+l;o+=`
          localCoords = coords;
          if(localCoords[2] + `+l+` < `+e[2]+`) {
            localCoords[2] += `+l+`;
            if(localCoords[1] + `+c+` < `+e[1]+`) {
              localCoords[1] += `+c+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+`.0, `+i+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+u+`] = values[0];
              } else if(offset == 1) {
                result[`+u+`] = values[1];
              } else if(offset == 2) {
                result[`+u+`] = values[2];
              } else {
                result[`+u+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+ca(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+o+`

        `+r.output+` = `+s+`;
      }
    `}function ro(e,t,n){this.variableNames=[`real`,`imag`];var r=t[1];this.outputShape=t;var i=n?`2.0 * `+Math.PI:`-2.0 * `+Math.PI,a=n?r+`.0`:`1.0`;this.userCode=`
      const float exponentMultiplier = `+i+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+e+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}function io(e,t,n){this.variableNames=[`A`,`indices`];var r=e.slice();r[n]=t,this.outputShape=r,this.rank=r.length;var i=pa(this.rank),a=function(e,t){var n=e.length;if(4<n)throw Error(`Gather for rank `+n+` is not yet supported`);if(n===1)return`int(getIndices(resRC))`;for(var r=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],i=[],a=0;a<e.length;a++)a===t?i.push(`int(getIndices(`+r[a]+`))`):i.push(``+r[a]);return i.join()}(e,n);this.userCode=`
      void main() {
        `+i+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `}var ao=(co.prototype.getHeightCoordString=function(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`},co.prototype.getWidthCoordString=function(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`},co.prototype.getDepthCoordString=function(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`},co.prototype.getOutputDepthSize=function(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]},co.prototype.getInputSamplingString=function(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`},co),oo=(so.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,r){t.valueLoc??=n.getUniformLocationNoThrow(r,`value`),n.gl.uniform1f(t.valueLoc,e)}},so);function so(e,t){this.outputShape=[],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}function co(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+t+`;
      int offset_h = imod(h, `+t+`);
      int in_w = w / `+t+`;
      int offset_w = imod(w, `+t+`);
      int offset_d = (offset_h * `+t+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}function lo(e,t,n){this.sliceDim=e,this.strides=t,this.variableNames=[`x`,`indices`],this.outputShape=n;var r=pa(t.length),i=pa(n.length),a=1<this.sliceDim?`strides[j]`:`strides`;this.userCode=`
        `+r+` strides = `+r+`(`+this.strides+`);
         void main() {
          `+i+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `}function uo(e,t){var n=oa();return At(e,t,n.version+`
    precision highp float;
    `+n.attribute+` vec3 clipSpacePos;
    `+n.attribute+` vec2 uv;
    `+n.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function fo(e,t){return Rt(e,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function po(e,t){return zt(e,t,new Uint16Array([0,1,2,2,1,3]))}function mo(e,t,n,r,i,a,o){Vt(n,r);var s=Bt(e,t),c=e.TEXTURE_2D;return V(e,t,function(){return e.bindTexture(c,s)}),V(e,t,function(){return e.texParameteri(c,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)}),V(e,t,function(){return e.texParameteri(c,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}),V(e,t,function(){return e.texParameteri(c,e.TEXTURE_MIN_FILTER,e.NEAREST)}),V(e,t,function(){return e.texParameteri(c,e.TEXTURE_MAG_FILTER,e.NEAREST)}),V(e,t,function(){return e.texImage2D(c,0,i,n,r,0,a,o,null)}),V(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)}),s}function ho(e,t,n,r,i){var a=Ct(n,r);return mo(e,t,a[0],a[1],i.internalFormatFloat,i.textureFormatFloat,e.FLOAT)}function go(e,t,n,r,i){var a=Ct(n,r);return mo(e,t,a[0],a[1],i.internalFormatHalfFloat,i.textureFormatFloat,i.textureTypeHalfFloat)}function _o(e,t,n,r,i){var a=Ct(n,r);return mo(e,t,a[0],a[1],e.RGBA,e.RGBA,e.UNSIGNED_BYTE)}function vo(e,t,n,r,i){var a=Tt(n,r);return mo(e,t,a[0],a[1],i.internalFormatPackedFloat,e.RGBA,e.FLOAT)}function yo(e,t,n,r,i){var a=Tt(n,r);return mo(e,t,a[0],a[1],i.internalFormatPackedHalfFloat,e.RGBA,i.textureTypeHalfFloat)}function bo(e,t,n,r){return V(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,r)}),Ut(e,t,n,`clipSpacePos`,r,3,20,0)&&Ut(e,t,n,`uv`,r,2,20,12)}function xo(e,t,n,r,i,a,o){var s,c,l;V(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)}),l=a instanceof Uint8Array?(s=new Uint8Array(r*i*4),c=e.UNSIGNED_BYTE,e.RGBA):(s=new Float32Array(r*i*4),c=e.FLOAT,o.internalFormatPackedFloat),s.set(a),V(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,l,r,i,0,e.RGBA,c,s)}),V(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)})}function So(e,t,n,r){V(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)}),r.data instanceof Uint8Array?V(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)}):V(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)}),V(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)})}function Co(e,t,n,r,i){var a=e.createBuffer();V(e,t,function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,a)});var o=16*n*r;return V(e,t,function(){return e.bufferData(e.PIXEL_PACK_BUFFER,o,e.STREAM_READ)}),V(e,t,function(){return e.readPixels(0,0,r,n,e.RGBA,e.FLOAT,0)}),V(e,t,function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}),a}function wo(e,t,n){var r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function To(e,t,n,r,i){var a=Ct(n,r),o=a[0],s=a[1],c=new Uint8Array(n*r*4);return V(e,t,function(){return e.readPixels(0,0,o,s,i.downloadTextureFormat,e.UNSIGNED_BYTE,c)}),new Float32Array(c.buffer)}function Eo(e,t,n,r,i,a,o,s){var c,l=e,u=new Float32Array((c=Tt(a,o))[0]*c[1]*4);return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,u),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),u}function Do(e,t,n,r){var i=new Float32Array(n*r*4);return V(e,t,function(){return e.readPixels(0,0,r,n,e.RGBA,e.FLOAT,i)}),i}var Oo=Object.freeze({createVertexShader:uo,createVertexBuffer:fo,createIndexBuffer:po,createFloat32MatrixTexture:ho,createFloat16MatrixTexture:go,createUnsignedBytesMatrixTexture:_o,createPackedMatrixTexture:vo,createFloat16PackedMatrixTexture:yo,bindVertexProgramAttributeStreams:bo,uploadDenseMatrixToTexture:xo,uploadPixelDataToTexture:So,createBufferFromOutputTexture:Co,downloadFloat32MatrixFromBuffer:wo,downloadByteEncodedFloatMatrixFromOutputTexture:To,downloadPackedMatrixFromBuffer:Eo,downloadMatrixFromPackedOutputTexture:Do}),ko=(Object.defineProperty(J.prototype,"debug",{get:function(){return d().getBool(`DEBUG`)},enumerable:!0,configurable:!0}),J.prototype.dispose=function(){var e=this;if(!this.disposed){this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);var t=this.gl;V(t,this.debug,function(){return t.finish()}),V(t,this.debug,function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)}),V(t,this.debug,function(){return t.deleteFramebuffer(e.framebuffer)}),V(t,this.debug,function(){return t.bindBuffer(t.ARRAY_BUFFER,null)}),V(t,this.debug,function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)}),V(t,this.debug,function(){return t.deleteBuffer(e.indexBuffer)}),this.disposed=!0}},J.prototype.createFloat32MatrixTexture=function(e,t){return this.throwIfDisposed(),ho(this.gl,this.debug,e,t,this.textureConfig)},J.prototype.createFloat16MatrixTexture=function(e,t){return this.throwIfDisposed(),go(this.gl,this.debug,e,t,this.textureConfig)},J.prototype.createUnsignedBytesMatrixTexture=function(e,t){return this.throwIfDisposed(),_o(this.gl,this.debug,e,t,this.textureConfig)},J.prototype.uploadPixelDataToTexture=function(e,t){this.throwIfDisposed(),So(this.gl,this.debug,e,t)},J.prototype.uploadDenseMatrixToTexture=function(e,t,n,r){this.throwIfDisposed(),xo(this.gl,this.debug,e,t,n,r,this.textureConfig)},J.prototype.createFloat16PackedMatrixTexture=function(e,t){return this.throwIfDisposed(),yo(this.gl,this.debug,e,t,this.textureConfig)},J.prototype.createPackedMatrixTexture=function(e,t){return this.throwIfDisposed(),vo(this.gl,this.debug,e,t,this.textureConfig)},J.prototype.deleteMatrixTexture=function(e){var t=this;this.throwIfDisposed(),this.outputTexture===e&&(Yt(this.gl,this.debug,this.framebuffer),this.outputTexture=null),V(this.gl,this.debug,function(){return t.gl.deleteTexture(e)})},J.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,function(){return To(r.gl,r.debug,t,n,r.textureConfig)})},J.prototype.downloadPackedMatrixFromBuffer=function(e,t,n,r,i,a){return Eo(this.gl,e,0,0,0,i,a,this.textureConfig)},J.prototype.downloadFloat32MatrixFromBuffer=function(e,t){return wo(this.gl,e,t)},J.prototype.createBufferFromTexture=function(e,t,n){this.bindTextureToFrameBuffer(e);var r=Co(this.gl,this.debug,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r},J.prototype.createAndWaitForFence=function(){var e=this.createFence(this.gl);return this.pollFence(e)},J.prototype.createFence=function(e){var t,n,r=this;if(d().getBool(`WEBGL_FENCE_API_ENABLED`)){var i=e,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=function(){var e=i.clientWaitSync(a,0,0);return e===i.ALREADY_SIGNALED||e===i.CONDITION_SATISFIED},t=a}else n=0<d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)?(t=this.beginQuery(),this.endQuery(),function(){return r.isQueryAvailable(t,d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}):function(){return!0};return{query:t,isFencePassed:n}},J.prototype.downloadMatrixFromPackedTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,function(){return Do(r.gl,r.debug,t,n)})},J.prototype.createProgram=function(e){this.throwIfDisposed();var t=this.gl,n=jt(t,this.debug,e),r=uo(t,this.debug),i=Ft(t,this.debug);return V(t,this.debug,function(){return t.attachShader(i,r)}),V(t,this.debug,function(){return t.attachShader(i,n)}),It(t,this.debug,i),this.debug&&Lt(t,this.debug,i),this.vertexAttrsAreBound||=(this.setProgram(i),bo(t,this.debug,this.program,this.vertexBuffer)),i},J.prototype.deleteProgram=function(e){var t=this;this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&V(this.gl,this.debug,function(){return t.gl.deleteProgram(e)})},J.prototype.setProgram=function(e){var t=this;this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Lt(this.gl,this.debug,this.program),V(this.gl,this.debug,function(){return t.gl.useProgram(e)})},J.prototype.getUniformLocation=function(e,t,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Gt(this.gl,this.debug,e,t):Kt(this.gl,e,t)},J.prototype.getAttributeLocation=function(e,t){var n=this;return this.throwIfDisposed(),V(this.gl,this.debug,function(){return n.gl.getAttribLocation(e,t)})},J.prototype.getUniformLocationNoThrow=function(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)},J.prototype.setInputMatrixTexture=function(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),qt(this.gl,this.debug,this.program,e,t,n)},J.prototype.setOutputMatrixTexture=function(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)},J.prototype.setOutputPackedMatrixTexture=function(e,t,n){this.throwIfDisposed();var r=Tt(t,n),i=r[0],a=r[1];this.setOutputMatrixTextureDriver(e,i,a)},J.prototype.setOutputMatrixWriteRegion=function(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)},J.prototype.setOutputPackedMatrixWriteRegion=function(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)},J.prototype.debugValidate=function(){this.program!=null&&Lt(this.gl,this.debug,this.program),Xt(this.gl)},J.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var e=this.gl;this.debug&&this.debugValidate(),V(e,this.debug,function(){return e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)})},J.prototype.blockUntilAllProgramsCompleted=function(){var e=this;this.throwIfDisposed(),V(this.gl,this.debug,function(){return e.gl.finish()})},J.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension??=kt(this.gl,this.debug,d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension},J.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},J.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},J.prototype.beginQuery=function(){if(d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){var e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}var r=this.getQueryTimerExtensionWebGL1(),i=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,i),i},J.prototype.endQuery=function(){if(d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)!==2){var e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}else{var t=this.gl,n=this.getQueryTimerExtensionWebGL2();t.endQuery(n.TIME_ELAPSED_EXT)}},J.prototype.waitForQueryAndGetTime=function(e){return s(this,void 0,void 0,function(){var t=this;return c(this,function(n){switch(n.label){case 0:return[4,F(function(){return t.disposed||t.isQueryAvailable(e,d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))})];case 1:return n.sent(),[2,this.getQueryTime(e,d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))]}})})},J.prototype.getQueryTime=function(e,t){if(t===0)return null;if(t===2){var n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}var r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)/1e6},J.prototype.isQueryAvailable=function(e,t){if(t===0)return!0;if(t!==2)return i=(r=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT),this.disjoint??=this.gl.getParameter(r.GPU_DISJOINT_EXT),i&&!this.disjoint;var n=this.gl,r=this.getQueryTimerExtensionWebGL2(),i=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(r.GPU_DISJOINT_EXT),i&&!this.disjoint},J.prototype.pollFence=function(e){var t=this;return new Promise(function(n){t.addItemToPoll(function(){return e.isFencePassed()},function(){return n()})})},J.prototype.pollItems=function(){for(var e=function(e){for(var t=0;t<e.length&&e[t]();++t);return t-1}(this.itemsToPoll.map(function(e){return e.isDoneFn})),t=0;t<=e;++t)(0,this.itemsToPoll[t].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(e+1)},J.prototype.addItemToPoll=function(e,t){var n=this;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),1<this.itemsToPoll.length||F(function(){return n.pollItems(),n.itemsToPoll.length===0})},J.prototype.bindTextureToFrameBuffer=function(e){this.throwIfDisposed(),Jt(this.gl,this.debug,e,this.framebuffer),this.debug&&Xt(this.gl)},J.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture==null?Yt(this.gl,this.debug,this.framebuffer):(Jt(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Xt(this.gl))},J.prototype.downloadMatrixDriver=function(e,t){this.bindTextureToFrameBuffer(e);var n=t();return this.unbindTextureToFrameBuffer(),n},J.prototype.setOutputMatrixTextureDriver=function(e,t,n){this.throwIfDisposed();var r=this.gl;Jt(r,this.debug,e,this.framebuffer),this.debug&&Xt(r),this.outputTexture=e,V(r,this.debug,function(){return r.viewport(0,0,t,n)}),V(r,this.debug,function(){return r.scissor(0,0,t,n)})},J.prototype.setOutputMatrixWriteRegionDriver=function(e,t,n,r){var i=this;this.throwIfDisposed(),V(this.gl,this.debug,function(){return i.gl.scissor(e,t,n,r)})},J.prototype.throwIfDisposed=function(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)},J.prototype.throwIfNoProgram=function(){if(this.program==null)throw Error(`No GPU program is currently set.`)},J);function J(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var t=d().getNumber(`WEBGL_VERSION`);e==null?this.gl=St(t):xt(t,this.gl=e);var n=`WEBGL_color_buffer_float`;if(d().getNumber(`WEBGL_VERSION`)===1){if(this.textureFloatExtension=kt(this.gl,this.debug,`OES_texture_float`),un(this.gl,`OES_texture_half_float`))this.textureHalfFloatExtension=kt(this.gl,this.debug,`OES_texture_half_float`);else if(d().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),un(this.gl,`EXT_color_buffer_half_float`))this.colorBufferHalfFloatExtension=kt(this.gl,this.debug,`EXT_color_buffer_half_float`);else if(d().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,un(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!un(this.gl,`EXT_color_buffer_half_float`))throw Error(`GL context does not support color renderable floats`);this.colorBufferHalfFloatExtension=this.gl.getExtension(`EXT_color_buffer_half_float`)}this.vertexBuffer=fo(this.gl,this.debug),this.indexBuffer=po(this.gl,this.debug),this.framebuffer=Ht(this.gl,this.debug),this.textureConfig=Et(this.gl,this.textureHalfFloatExtension)}function Ao(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with `+e.length+` inputs, but was executed with `+t.length+` inputs`);e.forEach(function(e,n){var r=e.logicalShape,i=t[n],a=i.shape;if(!A(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes `+r+` and `+a+` must match`);if(!e.isUniform||!i.isUniform){var o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!A(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape `+o+` and `+s+` must match`)}})}function jo(e,t,n){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var r=n.filterWidth,i=n.inChannels,a=n.strideWidth,o=n.strideHeight,s=n.padInfo,c=n.outWidth,l=n.dilationWidth,u=n.dilationHeight,d=n.dataFormat,f=s.left,p=s.top,m=i*r,h=oa(),g=d===`channelsLast`,_=+!g,v=g?1:2,y=``,b=0;b<=1;b++)for(var x=0;x<=1;x++)y+=`
          blockIndex = rc.y + `+x+`;
          pos = rc.x + `+b+`;

          if(blockIndex < `+e[1]+` && pos < `+e[0]+`) {
            offsetY = int(blockIndex / (`+c+`)) * `+o+` - `+p+`;
            d0 = offsetY + `+u+` * (pos / `+m+`);

            if(d0 < `+t[_]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+c+`.) * `+a+`. - `+f+`.);
              d1 = offsetX + `+l+` * (int(mod(float(pos), `+m+`.) / `+i+`.));

              if(d1 < `+t[v]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+i+`.));

                if (`+g+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*b+x)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*b+x)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+y+`

        `+h.output+` = result;
      }
    `}function Mo(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];var a,o=t,s=e[3]-1;this.outputShape=e;var c=`float(`+n+`) + float(`+r+`) * sum`;a=i===.5?`inversesqrt(`+c+`)`:i===1?`1.0/(`+c+`)`:`exp(log(`+c+`) * float(-`+i+`));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+o+`; j <= `+o+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `}function No(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+`) * norm + float(`+n+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+i+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+i+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}function Po(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,o=t,s=e[3]-1;this.outputShape=e;var c=`float(`+n+`) + float(`+r+`) * sum`;a=i===.5?`inversesqrt(`+c+`)`:i===1?`1.0/(`+c+`)`:`exp(log(`+c+`) * float(-`+i+`));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+o+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+o+`; j <= `+o+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `}function Fo(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;var t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+o+`, `+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+i+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+n+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+c+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}function Io(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;var t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(`+u+`, `+d+`, `+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+i+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+c+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+n+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+l+`;
                wC += `+o+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+c+` * `+l+` +
                  wR * `+l+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}function Lo(e,t,n,r,i,a,o){n===void 0&&(n=!1),r===void 0&&(r=!1),i===void 0&&(i=!1),a===void 0&&(a=null),o===void 0&&(o=!1),this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=n?e[1]:e[2],c=Math.ceil(s/2),l=n?`i * 2, rc.y`:`rc.y, i * 2`,u=r?`rc.z, i * 2`:`i * 2, rc.z`,d=n?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],f=r?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],p=``,m=``;a&&(p=o?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,m=`result = activation(result);`);var h=i?`result += getBiasAtOutCoords();`:``;i&&this.variableNames.push(`bias`),o&&this.variableNames.push(`preluActivationWeights`),this.userCode=`
      `+p+`

      const float sharedDimension = `+c+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+c+`; i++) {
          vec4 a = getMatrixA(rc.x, `+l+`);
          vec4 b = getMatrixB(rc.x, `+u+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+d[0]+` * `+f[0]+`);
          result += (`+d[1]+` * `+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+h+`

        `+m+`

        setOutput(result);
      }
    `}function Ro(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+`), float(`+n+`),
                      float(index == coords.y)));
      }
    `}function zo(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;var t,n,r,i,a=(this.outputShape=e).length;if(a===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var o=aa(`rc`,a),s=pa(a),c=function(e,t,n){if(e===1)return`rc > `+t[0];for(var r=``,i=e-2;i<e;i++)r+=n[i]+` >= `+t[i],i<e-1&&(r+=`||`);return r}(a,e,o),l=function(e,t,n){if(e===1)return``;var r=o.slice(-2);return`
    int r = `+r[0]+`;
    int c = `+r[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+t+`;
    bool rEdge = rp1 >= `+n+`;
  `}(a,e[e.length-1],e[e.length-2]),u=(n=o,r=(t=e).length,i=function(e,t){for(var n=[],r=0;r<=1;r++)for(var i=0;i<=1;i++){for(var a=(r===0?`r`:`rp1`)+`, `+(i===0?`c`:`cp1`),o=2;o<e;o++)a=t[t.length-1-o]+`,`+a;n.push(a)}return n}(r,n),r===1?`getA(rc),
            rc + 1 >= `+t[0]+` ? 0. : getA(rc + 1),
            0, 0`:`getA(`+i[0]+`),
          cEdge ? 0. : getA(`+i[1]+`),
          rEdge ? 0. : getA(`+i[2]+`),
          rEdge || cEdge ? 0. : getA(`+i[3]+`)`);this.userCode=`
        void main() {
          `+s+` rc = getOutputCoords();

          if(`+c+`) {
            setOutput(vec4(0));
          } else {
            `+l+`

            setOutput(vec4(`+u+`));
          }
        }
      `}}var Bo=(Vo.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,r){t.seedLoc??=n.getUniformLocation(r,`seed`),n.gl.uniform1f(t.seedLoc,e)}},Vo);function Vo(e,t,n){this.variableNames=[`probs`],this.outputShape=[e,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(t-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(t-1)+`));
      }
    `}function Ho(e,t,n){this.variableNames=[`x`],this.outputShape=t.map(function(t,n){return t[0]+e[n]+t[1]});var r=e.length,i=pa(r),a=t.map(function(e){return e[0]}).join(`,`),o=t.map(function(t,n){return t[0]+e[n]}).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);this.userCode=r===1?`
        int start = `+a+`;
        int end = `+o+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+n+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `:`
      `+i+` start = `+i+`(`+a+`);
      `+i+` end = `+i+`(`+o+`);

      void main() {
        `+i+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+n+`));
        } else {
          `+i+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `}function Uo(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(t,n){return t[0]+e[n]+t[1]});for(var r=e.length,i=pa(r),a=t.map(function(e){return e[0]}).join(`,`),o=t.map(function(t,n){return t[0]+e[n]}).join(`,`),s=aa(`rc`,r),c=aa(`source`,r),l=s[r-1]+` < `+this.outputShape[r-1],u=r===1?`source`:`vec2(`+c.slice(-2).join()+`)`,d=[i+` rc = outputLoc;`,s[r-1]+` += 1;
       if(`+l+`) {
      `,r===1?``:`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+` < `+this.outputShape[r-2]+`) {`,r===1?``:`  `+s[r-1]+` += 1;
         if(`+l+`) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``,m=0,h=r===1?2:4;m<h;m++)p+=`
        `+d[m]+`
        if (`+f+`) {
          result[`+m+`] = float(`+n+`);
        } else {
          `+i+` source = rc - start;
          result[`+m+`] = getChannel(getX(`+c.join()+`), `+u+`);
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const `+i+` start = `+i+`(`+a+`);
      const `+i+` end = `+i+`(`+o+`);

      void main() {
        `+i+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `}function Wo(e,t,n){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);var r=e.filterWidth,i=e.strideHeight,a=e.strideWidth,o=e.dilationHeight,s=e.dilationWidth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=e.padInfo.top,d=e.padInfo.left;this.outputShape=e.outShape;var f=t===`avg`,p=`0.0`;if(f||(p=`-1.0 / 1e-20`),n)this.userCode=`
        const ivec2 strides = ivec2(`+i+`, `+a+`);
        const ivec2 pads = ivec2(`+u+`, `+d+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+c+`;
              wR += `+o+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+l+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+l+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var m=t+`(`+t+`(`+t+`(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(m=`avgValue / count`);var h=4*Math.floor(r/4),g=r%4,_=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+i+`, `+a+`);
      const ivec2 pads = ivec2(`+u+`, `+d+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+c+`;
            wR += `+o+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+_+`
          }

          int xC = xCCorner + `+h+`;
          if (`+(g==1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+_+`
          } else if (`+(g==2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+_+`
          } else if (`+(g==3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+_+`
          }
        }
        setOutput(`+m+`);
      }
    `}}function Go(e,t,n){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);var r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=e.padInfo.front,m=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;var g=t===`avg`,_=`0.0`;if(g||(_=`-1.0 / 1e-20`),n)this.userCode=`
        const ivec3 strides =
            ivec3(`+i+`, `+a+`, `+o+`);
        const ivec3 pads = ivec3(`+p+`, `+m+`, `+h+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+u+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+e.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+d+`;
                wR += `+c+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+l+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+d+` * `+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var v=t+`(`+t+`(`+t+`(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / count`);var y=4*Math.floor(r/4),b=r%4,x=`
      if (`+g+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+i+`, `+a+`, `+o+`);
      const ivec3 pads = ivec3(`+p+`, `+m+`, `+h+`);
      const float initializationValue = `+_+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+_+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+u+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+d+`;
            wR += `+c+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+y+`; wC += 4) {
              int xC = xCCorner + wC * `+l+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+l+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+l+`, ch)
              );

              `+x+`
            }

            int xC = xCCorner + `+y+`;
            if (`+(b==1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+x+`
            } else if (`+(b==2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                initializationValue,
                initializationValue
              );

              `+x+`
            } else if (`+(b==3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+l+`, ch),
                initializationValue
              );

              `+x+`
            }
          }
          setOutput(`+v+`);
        }
      }
    `}}function Ko(e,t){this.variableNames=[`x`];var n=e.windowSize,r=e.batchSize,i=e.inSize,a=Math.ceil(i/n);this.outputShape=[r,a];var o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);var c=t+`(`+t+`(`+t+`(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);var l=4*Math.floor(n/4),u=n%4,d=`
      if (`+(t===`sum`)+`) {
        sumValue += dot(values, ones);
      } else if (`+(t===`prod`)+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);var p=``;0<i%n&&(p=`
        if (inIdx < 0 || inIdx >= `+i+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+o+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        vec4 minMaxValue = vec4(`+o+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+l+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+` values = `+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+d+`
        }

        int inIdx = inOffset + `+l+`;
        if (`+(u==1)+`) {
          `+f+` values = `+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+d+`
        } else if (`+(u==2)+`) {
          `+f+` values = `+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+d+`
        } else if (`+(u==3)+`) {
          `+f+` values = `+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+d+`
        }
        setOutput(`+c+`);
      }
    `}function qo(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var n=``,r=0;r<4;r++){var i=`thisRC = rc;`;r%2==1&&(i+=`thisRC.z += 1;`),1<r&&(i+=`thisRC.y += 1;`),n+=`
        `+i+`
        `+(0<r?`if(thisRC.y < rows && thisRC.z < cols){`:``)+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(0<r?`}`:``)+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+sa([`r`,`c`,`d`],t)+`
      return ivec3(r, c, d);
    }
  
      `+ca(e)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+e[1]+`;
        int cols = `+e[2]+`;

        `+n+`

        setOutput(result);
      }
    `}function Jo(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,i=r[1],a=r[2],o=e.shape,s=o[1],c=o[2],l=[n&&1<s?i-1:i,n&&1<c?a-1:a],u=[n&&1<s?s-1:s,n&&1<c?c-1:c],d=l[0]/u[0],f=l[1]/u[1],p=1/d,m=1/f,h=2*Math.ceil(p)+2,g=2*Math.ceil(m)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+d+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+m+`);

        const int winHeight = int(`+h+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+c+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(i-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}function Yo(e,t,n,r){this.variableNames=[`A`],this.outputShape=[];var i=e[0],a=e[1],o=e[2],s=e[3];this.outputShape=[i,t,n,s];var c=[r&&1<t?a-1:a,r&&1<n?o-1:o],l=[r&&1<t?t-1:t,r&&1<n?n-1:n];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+c[0]/l[0]+`,
          `+c[1]/l[1]+`);
      const vec2 inputShapeRC = vec2(`+a+`.0, `+o+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}function Xo(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var i=e[0],a=e[1],o=e[2],s=e[3];this.outputShape=[i,t,n,s];var c=[r&&1<t?a-1:a,r&&1<n?o-1:o],l=[r&&1<t?t-1:t,r&&1<n?n-1:n];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+c[0]/l[0]+`,
          `+c[1]/l[1]+`,
          `+c[1]/l[1]+`);
      const vec3 inputShapeRC = vec3(`+a+`.0, `+o+`.0,
                                     `+o+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(n-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}function Zo(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,i=r[1],a=r[2],o=e.shape,s=o[1],c=o[2],l=[n&&1<s?i-1:i,n&&1<c?a-1:a],u=[n&&1<s?s-1:s,n&&1<c?c-1:c],d=l[0]/u[0],f=l[1]/u[1],p=1/d,m=1/f,h=2*Math.ceil(p)+2,g=2*Math.ceil(m)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+d+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+m+`);

        const int winHeight = int(`+h+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+c+`) {
              continue;
            }

            float sourceFracRow =
              float(`+l[0]+`) *
                (float(dyR) / float(`+u[0]+`));

            float sourceFracCol =
                float(`+l[1]+`) *
                  (float(dyC) / float(`+u[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+i+`) - 1),
                `+n+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+n+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}function Qo(e,t,n,r){this.variableNames=[`A`],this.outputShape=[];var i=e[0],a=e[1],o=e[2],s=e[3];this.outputShape=[i,t,n,s];var c=[r&&1<t?a-1:a,r&&1<n?o-1:o],l=[r&&1<t?t-1:t,r&&1<n?n-1:n],u=r?`0.5`:`0.0`;this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+c[0]/l[0]+`,
          `+c[1]/l[1]+`);
      const vec2 inputShapeRC = vec2(`+a+`.0, `+o+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+u+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}function $o(e,t){this.variableNames=[`x`];var n=e.length;if(4<n)throw Error(`WebGL backend: Reverse of rank-`+n+` tensor is not yet supported`);if(this.outputShape=e,n!==1){var r=e.map(function(n,r){return i=r,t.indexOf(i)!==-1&&e[i]!==1?e[i]+` - coords[`+i+`] - 1`:`coords[`+i+`]`;var i}).join(`,`),i=pa(n);this.userCode=`
      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+e[0]+` - coord - 1));
        }
      `}function es(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;var n=e.length;if(4<n)throw Error(`WebGL backend: Reverse of rank-`+n+` tensor is not yet supported`);this.outputShape=e;var r,i,a,o=aa(`rc`,n),s=o[n-1]+` + 1 < `+this.outputShape[n-1],c=o[n-2]+` + 1 < `+this.outputShape[n-2],l=pa(n);function u(n){var r=e.map(function(r,i){return a=i,o=n,t.indexOf(a)!==-1&&e[a]!==1?e[a]+` - `+o[a]+` - 1`:``+o[a];var a,o});return`getChannel(getX(`+r.join(`,`)+`), vec2(`+r.slice(-2).join(`,`)+`))`}this.userCode=n===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+e[0]+` - rc - 1),
            `+e[0]+` - rc - 1);
          if(`+s+`){
              result.g = getChannel(getX(`+e[0]+` - (rc  + 1) - 1),
                `+e[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+l+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+u(o.slice())+`;
          if(`+s+`){
            result.g = `+((a=o.slice())[n-1]=`(`+a[n-1]+` + 1)`,u(a))+`;
          }
          if(`+c+`) {
            result.b = `+((i=o.slice())[n-2]=`(`+i[n-2]+` + 1)`,u(i))+`;
            if(`+s+`) {
              result.a = `+((r=o.slice())[n-1]=`(`+r[n-1]+` + 1)`,r[n-2]=`(`+r[n-2]+` + 1)`,u(r))+`;
            }
          }
          setOutput(result);
        }
    `}function ts(e,t,n,r,i,a,o){this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;var s=pa(i.length),c=pa(a.length),l=``;n===1?l=`i`:n===2&&(l=`i, j`);var u=`getIndices(`+l+`)`,d=``;r===1?d=`i`:r===2&&(d=`i, coords[1]`);var f=`getUpdates(`+d+`)`,p=1<t?`strides[j]`:`strides`;this.userCode=`
        `+s+` strides = `+s+`(`+i+`);

        void main() {
          `+c+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+e+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+u+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}function ns(e,t){this.variableNames=[`x`,`segmentIds`];var n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];var s=4*Math.floor(n/4),c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;0<i%n&&(u=`
        if (inIdx < 0 || inIdx >= `+i+`) {
          return initializationValue;
        }
      `);var d=``;0<i%n&&(d=`
        if (inIdx < 0 || inIdx >= `+i+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+u+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+d+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+`)) * float(`+n+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+l+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(c==1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+l+`
        } else if (`+(c==2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+l+`
        } else if (`+(c==3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+l+`
        }
        setOutput(sumValue);
      }
    `}function rs(e,t,n){var r,i;if(this.variableNames=[`c`,`a`,`b`],this.outputShape=t,4<n)throw Error(`Where for rank `+n+` is not yet supported`);if(n===1)r=i=`resRC`;else{for(var a=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],o=[],s=[],c=0;c<t.length;c++)s.push(``+a[c]),c<e&&o.push(``+a[c]);r=o.join(),i=s.join()}var l=pa(n);this.userCode=`
      void main() {
        `+l+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+i+`));
        } else {
          setOutput(getB(`+i+`));
        }
      }
    `}var is=(os.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error(`The rank (`+this.rank+`) of the program must match the length of start (`+e.length+`)`);return function(n,r){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(r,`start`),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},os),as=[`x`,`y`,`z`,`w`,`u`,`v`];function os(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;var t,n=pa(this.rank),r=`uniform int start[`+this.rank+`];`,i=function(e){if(e===1)return`sourceLoc`;if(e<=6)return as.slice(0,e).map(function(e){return`sourceLoc.`+e}).join(`,`);throw Error(`Slicing for rank `+e+` is not yet supported`)}(this.rank);t=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+e.map(function(e,t){return`sourceLoc.`+as[t]+` = start[`+t+`] + coords.`+as[t]+`;`}).join(`
`)+`
      `,this.userCode=`
      `+r+`
      void main() {
        `+t+`
        setOutput(getSource(`+i+`));
      }
    `}function ss(e,t,n){this.variableNames=[`x`];var r=(this.outputShape=n).length,i=pa(n.length),a=pa(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{var s=0;o=n.map(function(e,t){return s++,n.length===1?`coords * strides[`+t+`] + begin[`+t+`]`:`coords[`+(s-1)+`] * strides[`+t+`] + begin[`+t+`]`}).join(`,`)}this.userCode=`
      `+i+` begin = `+i+`(`+e+`);
      `+i+` strides = `+i+`(`+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+o+`));
      }
    `}var cs=(ds.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error(`The rank (`+this.rank+`) of the program must match the length of start (`+e.length+`)`);return function(n,r){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(r,`start`),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},ds),ls=(us.prototype.acquireTexture=function(e,t,n){var r,i=fs(t,n),a=ps(e,i,n);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),0<this.freeTextures[a].length){this.numFreeTextures--,this.numUsedTextures++,this.log();var o=this.freeTextures[a].shift();return this.usedTextures[a].push(o),o}return this.numUsedTextures++,this.log(),i===ht.PACKED_2X2_FLOAT32?r=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):i===ht.PACKED_2X2_FLOAT16?r=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):i===ht.UNPACKED_FLOAT32?r=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):i===ht.UNPACKED_FLOAT16?r=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):i===ht.PACKED_4X1_UNSIGNED_BYTE&&(r=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[a].push(r),r},us.prototype.releaseTexture=function(e,t,n,r){if(this.freeTextures!=null){var i=ps(t,fs(n,r),r);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(e),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],o=a.indexOf(e);if(o<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);a.splice(o,1),this.log()}},us.prototype.log=function(){if(this.logEnabled){var e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,this.numFreeTextures+` / `+this.numUsedTextures,`(`+e+`)`)}},us.prototype.getNumUsedTextures=function(){return this.numUsedTextures},us.prototype.getNumFreeTextures=function(){return this.numFreeTextures},us.prototype.dispose=function(){var e=this;if(this.freeTextures!=null){for(var t in this.freeTextures)this.freeTextures[t].forEach(function(t){e.gpgpu.deleteMatrixTexture(t)});for(var t in this.usedTextures)this.usedTextures[t].forEach(function(t){e.gpgpu.deleteMatrixTexture(t)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},us);function us(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}function ds(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length;var t=pa(this.rank),n=aa(`coords`,this.rank),r=aa(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(`+r.slice(-2).join()+`)`,a=`getChannel(getSource(`+r.join()+`), `+i+`)`,o=`
      result.x = `+a+`;
      if (++`+n[this.rank-1]+` < `+e[this.rank-1]+`) {
        ++`+r[this.rank-1]+`;
        result.y = `+a+`;
        --`+r[this.rank-1]+`;
      }
    `,s=this.rank===1?``:`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+` < `+e[this.rank-2]+`) {
        ++`+r[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+n[this.rank-1]+` < `+e[this.rank-1]+`) {
          ++`+r[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+t+`(`+e.map(function(e,t){return`start[`+t+`]`}).join()+`);`:e.map(function(e,t){return r[t]+` = `+n[t]+` + start[`+t+`];`}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+t+` coords = getOutputCoords();
        `+t+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+o+`
        `+s+`
        setOutput(result);
      }
    `}function fs(e,t){if(e===mt.UPLOAD)return ht.PACKED_2X2_FLOAT32;if(e===mt.RENDER||e==null)return n=t,d().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?n?ht.PACKED_2X2_FLOAT32:ht.UNPACKED_FLOAT32:n?ht.PACKED_2X2_FLOAT16:ht.UNPACKED_FLOAT16;var n;if(e===mt.DOWNLOAD||e===mt.PIXELS)return ht.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type `+e)}function ps(e,t,n){return e[0]+`_`+e[1]+`_`+t+`_`+n}function ms(e,t){this.variableNames=[`A`];for(var n=Array(e.length),r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;var i=pa(this.rank),a=function(e){var t=e.length;if(5<t)throw Error(`Tile for rank `+t+` is not yet supported`);if(t===1)return`imod(resRC, `+e[0]+`)`;for(var n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[],i=0;i<e.length;i++)r.push(`imod(`+n[i]+`, `+e[i]+`)`);return r.join()}(e);this.userCode=`
      void main() {
        `+i+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `}function hs(e,t){this.variableNames=[`A`];for(var n=Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;var i=pa(this.rank),a=function(e){var t=e.length;if(6<t)throw Error(`Transpose for rank `+t+` is not yet supported`);for(var n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t),i=0;i<e.length;i++)r[e[i]]=n[i];return r.join()}(t);this.userCode=`
    void main() {
      `+i+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `}function gs(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;for(var n=Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,6<this.rank)throw Error(`Packed transpose for rank `+this.rank+` is not yet supported.`);var i=pa(this.rank),a=ia(`rc`,this.rank),o=Array(this.rank);for(r=0;r<t.length;r++)o[t[r]]=a[r];var s=`vec2(`+o.slice(-2).join()+`)`,c=`++`+a[this.rank-1]+` < `+n[this.rank-1],l=`getChannel(getA(`+o.join()+`), `+s+`)`;this.userCode=`
    void main() {
      `+i+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+l+`;
      if(`+c+`) {
        result[1] = `+l+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+` < `+n[this.rank-2]+`) {
        result[2] = `+l+`;
        if(`+c+`) {
          result[3] = `+l+`;
        }
      }
      setOutput(result);
    }
    `}function _s(e,t){this.variableNames=[`A`],this.outputShape=e,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}function vs(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}function ys(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1;var t=(this.outputShape=e).length,n=aa(`rc`,t),r=pa(t),i=function(e,t){if(e===1)return`rc`;for(var n=``,r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(`+a.join(`,`)+`)`;this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+i+`);

        setOutput(getChannel(packedInput, `+o+`));
      }
    `}var bs=1.7580993408473768,xs=1.0507009873554805,Ss=`if (isnan(x)) return x;`,Cs=`return abs(x);`,ws=Ss+`
  return (x < 0.0) ? 0.0 : x;
`,Ts=Ss+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Es=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,Ds=`return -x;`,Os=`return ceil(x);`,ks=`return floor(x);`,As=`return exp(x);`,js=`return exp(x) - 1.0;`,Ms=`return x;`,Ns=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Ps=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Fs=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Is={};function Ls(e,t){if(t===void 0&&(t=!1),e===`linear`)return`return x;`;if(e===`relu`)return t?Ns:ws;if(e===`elu`)return t?Fs:Es;if(e===`relu6`)return t?Ps:Ts;if(e===`prelu`)return t?ja:Aa;throw Error(`Activation `+e+` has not been implemented for the WebGL backend.`)}var Rs,zs=(o(Y,Rs=Si),Y.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},Y.prototype.write=function(e,t,n){if(d().getBool(`DEBUG`)&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);var r={};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:mt.UPLOAD}),r},Y.prototype.move=function(e,t,n,r){if(d().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:mt.UPLOAD})},Y.prototype.readSync=function(e){var t=this.texData.get(e),n=t.values,r=t.dtype,i=t.complexTensors,a=t.slice,o=t.shape,s=t.isPacked;if(a!=null){var c=s?new vs(o,Ms):new _s(o,Ms),l=this.runWebGLProgram(c,[{dataId:e,shape:o,dtype:r}],r),u=this.readSync(l.dataId);return this.disposeData(l.dataId),u}if(n!=null)return this.convertAndCacheOnCPU(e);if(r===`string`)return n;var d,f,p=this.activeTimers!=null;return p&&(d=xe()),f=r===`complex64`?Ui(i.real.dataSync(),i.imag.dataSync()):this.getValuesFromTexture(e),p&&(this.downloadWaitMs+=xe()-d),this.convertAndCacheOnCPU(e,f)},Y.prototype.read=function(e){return s(this,void 0,void 0,function(){var t,n,r,i,a,o,s,l,u,f,p,m,h,g,_,v,y,b,x,S,C,w;return c(this,function(c){switch(c.label){case 0:if(this.pendingRead.has(e))return t=this.pendingRead.get(e),[2,new Promise(function(e){return t.push(e)})];if(n=this.texData.get(e),r=n.values,i=n.shape,a=n.slice,o=n.dtype,s=n.complexTensors,l=n.isPacked,a!=null)return u=l?new vs(i,Ms):new _s(i,Ms),f=this.runWebGLProgram(u,[{dataId:e,shape:i,dtype:o}],o),p=this.read(f.dataId),this.disposeData(f.dataId),[2,p];if(r!=null)return[2,this.convertAndCacheOnCPU(e)];if(!d().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&d().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);return m=null,o!==`complex64`&&d().get(`WEBGL_BUFFER_SUPPORTED`)&&(h=this.decode(e),g=this.texData.get(h.dataId),m=(w=this.gpgpu).createBufferFromTexture.apply(w,[g.texture].concat(wt(i)))),this.pendingRead.set(e,[]),o===`complex64`?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:c.sent(),c.label=2;case 2:return o===`complex64`?[4,Promise.all([s.real.data(),s.imag.data()])]:[3,4];case 3:return v=c.sent(),y=v[0],b=v[1],_=Ui(y,b),[3,5];case 4:_=m==null?this.getValuesFromTexture(e):(x=k(i),this.gpgpu.downloadFloat32MatrixFromBuffer(m,x)),c.label=5;case 5:return h!=null&&this.disposeData(h.dataId),S=this.convertAndCacheOnCPU(e,_),C=this.pendingRead.get(e),this.pendingRead.delete(e),C.forEach(function(e){return e(S)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,S]}})})},Y.prototype.checkNumericalProblems=function(e){if(e!=null)for(var t=0;t<e.length;t++){var n=e[t];if(!Dt(n))throw d().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value `+n+` cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value `+n+` cannot be represented on this device.`)}},Y.prototype.getValuesFromTexture=function(e){var t,n=this.texData.get(e),r=n.shape,i=n.dtype,a=n.isPacked,o=k(r);if(d().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){var s=this.decode(e),c=this.texData.get(s.dataId),l=(t=this.gpgpu).downloadMatrixFromPackedTexture.apply(t,[c.texture].concat(wt(r))).subarray(0,o);return this.disposeData(s.dataId),l}var u=d().getBool(`WEBGL_PACK`)&&!0===a,f=u?nn(r):r,p=u?new eo(f):new $a(f),m=this.runWebGLProgram(p,[{shape:f,dtype:i,dataId:e}],`float32`),h=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(h.texture,h.texShape[0],h.texShape[1]).subarray(0,o);return this.disposeData(m.dataId),g},Y.prototype.time=function(e){return s(this,void 0,void 0,function(){var t,n,r,i,a,o,s;return c(this,function(c){switch(c.label){case 0:return t=this.activeTimers,r=!(n=[]),this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e(),i=O(this.activeTimers.map(function(e){return e.query})).filter(function(e){return e!=null}),a=O(this.activeTimers.map(function(e){return e.name})).filter(function(e){return e!=null}),this.activeTimers=t,r&&(this.programTimersStack=null),o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},0<d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)?[4,Promise.all(i)]:[3,2];case 1:return s=c.sent(),o.kernelMs=w(s),o.getExtraProfileInfo=function(){return s.map(function(e,t){return{name:a[t],ms:e}}).map(function(e){return e.name+`: `+e.ms}).join(`, `)},[3,3];case 2:o.kernelMs={error:`WebGL query timers are not supported in this environment.`},c.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,o]}})})},Y.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},Y.prototype.startTimer=function(){return 0<d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)?this.gpgpu.beginQuery():{startMs:xe(),endMs:null}},Y.prototype.endTimer=function(e){return 0<d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)?this.gpgpu.endQuery():e.endMs=xe(),e},Y.prototype.getQueryTime=function(e){return s(this,void 0,void 0,function(){var t;return c(this,function(n){return 0<d().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(t=e).endMs-t.startMs]})})},Y.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var t=this.texData.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.texData.delete(e)}}},Y.prototype.releaseGPUData=function(e){var t=this.texData.get(e),n=t.texture,r=t.dtype,i=t.texShape,a=t.usage,o=t.isPacked,s=t.slice,c=s&&s.origDataId||e,l=this.dataRefCount.get(c);1<l?this.dataRefCount.set(c,l-1):(this.dataRefCount.delete(c),n!=null&&(this.numBytesInGPU-=this.computeBytes(i,r),this.textureManager.releaseTexture(n,i,a,o)));var u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null},Y.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},Y.prototype.getDataInfo=function(e){return this.texData.get(e)},Y.prototype.getCPUBackend=function(){return d().getBool(`WEBGL_CPU_FORWARD`)?(this.cpuBackend??=B.findBackend(`cpu`),this.cpuBackend):null},Y.prototype.shouldExecuteOnCPU=function(e,t){var n=this;return t===void 0&&(t=128),this.getCPUBackend()!=null&&e.every(function(e){return n.texData.get(e.dataId).texture==null&&e.size<t})},Y.prototype.getGPGPUContext=function(){return this.gpgpu},Y.prototype.complex=function(e,t){var n=this.makeOutput(e.shape,`complex64`);return this.texData.get(n.dataId).complexTensors={real:B.keep(e.clone()),imag:B.keep(t.clone())},n},Y.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},Y.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},Y.prototype.slice=function(e,t,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,t,n);if(k(n)===0)return Rn([],n,e.dtype);var r=this.texData.get(e.dataId).isPacked,i=pi(e.shape,t,n);if(!r&&i)return this.uploadToGPU(e.dataId),this.shallowSlice(e,t,n);var a=d().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new cs(n):new is(n),o=a.getCustomSetupFunc(t);return this.compileAndRun(a,[e],null,o)},Y.prototype.shallowSlice=function(e,t,n){var r=this.texData.get(e.dataId),i=this.makeOutput(n,e.dtype),a=this.texData.get(i.dataId);Object.assign(a,r),a.shape=n,a.dtype=e.dtype;var o=mi(t,e.strides);r.slice&&(o+=r.slice.flatOffset),a.slice={flatOffset:o,origDataId:r.slice&&r.slice.origDataId||e.dataId};var s=this.dataRefCount.get(a.slice.origDataId)||1;return this.dataRefCount.set(a.slice.origDataId,s+1),i},Y.prototype.stridedSlice=function(e,t,n,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,t,n,r);var i=ui(t,n,r);if(i.some(function(e){return e===0}))return Rn([],i);var a=new ss(t,r,i);return this.compileAndRun(a,[e])},Y.prototype.reverse=function(e,t){var n=d().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new es(e.shape,t):new $o(e.shape,t);return this.compileAndRun(n,[e])},Y.prototype.concat=function(e,t){if(e[0].dtype===`complex64`){var n=e.map(function(e){return In(e)}),r=e.map(function(e){return Ln(e)});return Fn(this.concat(n,t),this.concat(r,t))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,t);if(e.length===1)return e[0];if(e.length>d().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`)){var i=Math.floor(e.length/2),a=this.concat(e.slice(0,i),t),o=this.concat(e.slice(i),t);return this.concat([a,o],t)}if(d().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&1<e[0].rank){var s=new Ea(e.map(function(e){return e.shape}),t);return this.compileAndRun(s,e)}var c=Pn(e.map(function(e){return e.shape}),t),l=e.map(function(e){return e.as2D(-1,k(e.shape.slice(t)))}),u=new Ta(l.map(function(e){return e.shape}));return this.compileAndRun(u,l).reshape(c)},Y.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(d().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Ds,e.dtype);var t=new _s(e.shape,Ds);return this.compileAndRun(t,[e])},Y.prototype.batchMatMul=function(e,t,n,r){var i=n?e.shape[2]:e.shape[1],a=r?t.shape[1]:t.shape[2],o=n?e.shape[1]:e.shape[2],s=e.shape[0];if((i===1||a===1)&&1e3<o){n&&(e=e.transpose([0,2,1])),r&&(t=t.transpose([0,2,1]));var c=a===1?e:e.as3D(s,o,1),l=a===1?2:1,u=a===1?t.as3D(s,1,o):t;return this.multiply(c,u).sum(l,!0)}var d=tt(e.dtype,t.dtype),f=new Lo(e.shape,[s,i,a],n,r);return this.compileAndRun(f,[e,t],d)},Y.prototype.fusedBatchMatMul=function(e){var t=e.a,n=e.b,r=e.transposeA,i=e.transposeB,a=e.bias,o=e.activation,s=e.preluActivationWeights,c=r?t.shape[2]:t.shape[1],l=i?n.shape[1]:n.shape[2],u=t.shape[0],d=tt(t.dtype,n.dtype),f=a!=null,p=s!=null,m=o?Ls(o,!0):null,h=new Lo(t.shape,[u,c,l],r,i,f,m,p),g=[t,n];return a&&g.push(a),s&&g.push(s),this.compileAndRun(h,g,d)},Y.prototype.multiply=function(e,t){if(e.dtype===`complex64`){var n=this.texData.get(e.dataId),r=this.texData.get(t.dataId),i=new xa(`return areal * breal - aimag * bimag;`,e.shape,t.shape),a=new xa(`return areal * bimag + aimag * breal;`,e.shape,t.shape),o=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag),this.makeComplexComponentTensorInfo(t,r.complexTensors.real),this.makeComplexComponentTensorInfo(t,r.complexTensors.imag)],s=this.compileAndRun(i,o),c=this.compileAndRun(a,o),l=this.complex(s,c);return s.dispose(),c.dispose(),l}if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.multiply(e,t);if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,ka,e.dtype);var u=new Sa(ka,e.shape,t.shape);return this.compileAndRun(u,[e,t],e.dtype)},Y.prototype.batchNormalization=function(e,t,n,r,i,a){var o=[e,t,n],s=null;a!=null&&(s=a.shape,o.push(a));var c=null;if(i!=null&&(c=i.shape,o.push(i)),d().getBool(`WEBGL_PACK_NORMALIZATION`)){var l=new ba(e.shape,t.shape,n.shape,s,c,r);return this.compileAndRun(l,o)}var u=new ya(e.shape,t.shape,n.shape,s,c,r);return this.compileAndRun(u,o)},Y.prototype.localResponseNormalization4D=function(e,t,n,r,i){var a=d().getBool(`WEBGL_PACK_NORMALIZATION`)?new Po(e.shape,t,n,r,i):new Mo(e.shape,t,n,r,i);return this.compileAndRun(a,[e])},Y.prototype.LRNGrad=function(e,t,n,r,i,a,o){var s=new No(t.shape,r,i,a,o);return this.compileAndRun(s,[t,n,e])},Y.prototype.tile=function(e,t){if(e.dtype===`string`){var n=this.readSync(e.dataId).map(function(e){return we(e)});return Qi(xr(e.shape,e.dtype,n),t)}var r=new ms(e.shape,t);return this.compileAndRun(r,[e])},Y.prototype.pad=function(e,t,n){var r=d().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new Uo(e.shape,t,n):new Ho(e.shape,t,n);return this.compileAndRun(r,[e])},Y.prototype.transpose=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,t);var n=d().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new gs(e.shape,t):new hs(e.shape,t);return this.compileAndRun(n,[e])},Y.prototype.gather=function(e,t,n){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.gather(e,t,n);var r=new io(e.shape,t.size,n);return this.compileAndRun(r,[e,t])},Y.prototype.batchToSpaceND=function(e,t,n){T(e.rank<=4,function(){return`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`});var r=t.reduce(function(e,t){return e*t}),i=Xr(e.shape,t,r),a=Zr(i.length,t.length),o=Qr(e.shape,t,r),s=$r(n,t.length),c=ei(o,n,t.length);return e.reshape(i).transpose(a).reshape(o).slice(s,c)},Y.prototype.spaceToBatchND=function(e,t,n){T(e.rank<=4,function(){return`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`});var r=t.reduce(function(e,t){return e*t}),i=[[0,0]];i.push.apply(i,n);for(var a=1+t.length;a<e.shape.length;++a)i.push([0,0]);var o=e.pad(i),s=Xr(o.shape,t,r,!1),c=Zr(s.length,t.length,!1),l=Qr(o.shape,t,r,!1);return o.reshape(s).transpose(c).reshape(l)},Y.prototype.reduce=function(e,t,n){var r=e.shape[0],i=e.shape[1],a=new Ko({windowSize:ri(i),inSize:i,batchSize:r},t),o=this.compileAndRun(a,[e],n);return o.shape[1]===1?o:this.reduce(o,t,n)},Y.prototype.argReduce=function(e,t,n){n===void 0&&(n=null);var r=e.shape[0],i=e.shape[1];n!=null&&(r=n.shape[0],i=n.shape[1]);var a=new ra({windowSize:ri(i),inSize:i,batchSize:r},t,n==null),o=[e];n!=null&&o.push(n);var s=this.compileAndRun(a,o,`int32`);return s.shape[1]===1?s:this.argReduce(e,t,s)},Y.prototype.argReducePacked=function(e,t,n){n===void 0&&(n=null);var r=n==null?e.shape:n.shape,i=new ga(r,ri(r[r.length-1]),t,n==null),a=n==null?[e]:[e,n],o=this.compileAndRun(i,a,`int32`);return o.rank===e.rank?this.argReducePacked(e,t,o):o},Y.prototype.sum=function(e,t){kn(`sum`,t,e.rank);var n=Dn(e.shape,t),r=n[0],i=k(n[1]),a=e.as2D(-1,i),o=nt(e.dtype);return this.reduce(a,`sum`,o).reshape(r)},Y.prototype.prod=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,t);var n=Dn(e.shape,t),r=n[0],i=k(n[1]),a=e.as2D(-1,i),o=nt(e.dtype);return this.reduce(a,`prod`,o).reshape(r)},Y.prototype.unsortedSegmentSum=function(e,t,n){var r=0,i=An([r],e.rank),a=e;i!=null&&(a=e.transpose(i),r=Mn(1,e.rank)[0]);var o=function(e,t,n){for(var r=[],i=e.length,a=0;a<i;a++)a===t?r.push(n):r.push(e[a]);return r}(a.shape,r,n),s=k([a.shape[r]]),c=a.as2D(-1,s),l=nt(e.dtype),u=this.segOpCompute(c,`unsortedSegmentSum`,t,l,n).reshape(o);return i!=null&&(u=u.transpose(jn(i))),u},Y.prototype.segOpCompute=function(e,t,n,r,i){var a=e.shape[0],o=e.shape[1],s=function(e,t){var n,r=!1;for(e<=30?(n=e,r=!0):n=he(e,Math.floor(Math.sqrt(e)));!r;)t<n||n===e?r=!0:n=he(e,n+1);return n}(o,i),c=new ns({windowSize:s,inSize:o,batchSize:a,numSegments:i},t),l=this.compileAndRun(c,[e,n],r);return l.shape[1]===i?l:(n=Zn(0,i).tile([o/s]),this.segOpCompute(l,t,n,r,i))},Y.prototype.argMinMaxReduce=function(e,t,n){var r=[t];if(kn(`arg`+n.charAt(0).toUpperCase()+n.slice(1),r,e.rank),!d().getBool(`WEBGL_PACK_REDUCE`)||e.rank<=2){var i=Dn(e.shape,r),a=i[0],o=k(i[1]),s=e.as2D(-1,o);return this.argReduce(s,n).reshape(a)}return this.argReducePacked(e,n)},Y.prototype.argMin=function(e,t){return this.argMinMaxReduce(e,t,`min`)},Y.prototype.argMax=function(e,t){return this.argMinMaxReduce(e,t,`max`)},Y.prototype.cumsum=function(e,t,n,r){if(t!==e.rank-1)throw Error(`WebGL cumsum shader expects an inner-most axis=`+(e.rank-1)+` but got axis=`+t);var i=new Ja(e.shape,n,r);return this.compileAndRun(i,[e])},Y.prototype.equal=function(e,t){if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(equal(a, b));
`,`bool`);var n=new Sa(`return float(a == b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},Y.prototype.notEqual=function(e,t){if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(notEqual(a, b));
`,`bool`);var n=new Sa(`return float(a != b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},Y.prototype.less=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.less(e,t);if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(lessThan(a, b));
`,`bool`);var n=new Sa(`return float(a < b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},Y.prototype.lessEqual=function(e,t){if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(lessThanEqual(a, b));
`,`bool`);var n=new Sa(`return float(a <= b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},Y.prototype.greater=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.greater(e,t);if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(greaterThan(a, b));
`,`bool`);var n=new Sa(`return float(a > b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},Y.prototype.greaterEqual=function(e,t){if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(greaterThanEqual(a, b));
`,`bool`);var n=new Sa(`return float(a >= b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},Y.prototype.logicalNot=function(e){var t=new _s(e.shape,`return float(!(x >= 1.0));`);return this.compileAndRun(t,[e])},Y.prototype.logicalAnd=function(e,t){if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,`bool`);var n=new Sa(`return float(a >= 1.0 && b >= 1.0);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},Y.prototype.logicalOr=function(e,t){if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,`bool`);var n=new Sa(`return float(a >= 1.0 || b >= 1.0);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},Y.prototype.select=function(e,t,n){var r=new rs(e.rank,t.shape,t.rank);return this.compileAndRun(r,[e,t,n],tt(t.dtype,n.dtype))},Y.prototype.where=function(e){xn(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);var t=e.dataSync();return ea(e.shape,t)},Y.prototype.topk=function(e,t,n){return $i(e.dataSync(),e.shape,e.dtype,t)},Y.prototype.min=function(e,t){kn(`min`,t,e.rank);var n=Dn(e.shape,t),r=n[0],i=k(n[1]),a=e.as2D(-1,i);return this.reduce(a,`min`,a.dtype).reshape(r)},Y.prototype.minimum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.minimum(e,t);var n=d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ca(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Sa(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},Y.prototype.mod=function(e,t){var n=d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ca(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Sa(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},Y.prototype.max=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,t);kn(`max`,t,e.rank);var n=Dn(e.shape,t),r=n[0],i=k(n[1]),a=e.as2D(-1,i);return this.reduce(a,`max`,a.dtype).reshape(r)},Y.prototype.maximum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.maximum(e,t);var n=d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ca(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Sa(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},Y.prototype.all=function(e,t){kn(`all`,t,e.rank);var n=Dn(e.shape,t),r=n[0],i=k(n[1]),a=e.as2D(-1,i);return this.reduce(a,`all`,a.dtype).reshape(r)},Y.prototype.any=function(e,t){kn(`any`,t,e.rank);var n=Dn(e.shape,t),r=n[0],i=k(n[1]),a=e.as2D(-1,i);return this.reduce(a,`any`,a.dtype).reshape(r)},Y.prototype.realDivide=function(e,t){if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,`float32`,!0);var n=new Sa(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`float32`)},Y.prototype.floorDiv=function(e,t){if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,`int32`);var n=new Sa(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`int32`)},Y.prototype.add=function(e,t){if(e.dtype===`complex64`&&t.dtype===`complex64`)return this.complexSeparableBinaryOp(e,t,Da);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.add(e,t);var n=tt(e.dtype,t.dtype);if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,Da,n);var r=new Sa(Da,e.shape,t.shape);return this.compileAndRun(r,[e,t],n)},Y.prototype.packedUnaryOp=function(e,t,n){var r=new vs(e.shape,t);return this.compileAndRun(r,[e],n)},Y.prototype.packedBinaryOp=function(e,t,n,r,i){i===void 0&&(i=!1);var a=new Ca(n,e.shape,t.shape,i);return this.compileAndRun(a,[e,t],r)},Y.prototype.complexSeparableBinaryOp=function(e,t,n){var r=this,i=this.texData.get(e.dataId),a=this.texData.get(t.dataId),o=[[i.complexTensors.real,a.complexTensors.real],[i.complexTensors.imag,a.complexTensors.imag]].map(function(i){var a=i[0],o=i[1],s=r.makeComplexComponentTensorInfo(e,a),c=r.makeComplexComponentTensorInfo(t,o),l=new Sa(n,e.shape,t.shape);return r.compileAndRun(l,[s,c],tt(a.dtype,o.dtype))}),s=o[0],c=o[1],l=this.complex(s,c);return s.dispose(),c.dispose(),l},Y.prototype.makeComplexComponentTensorInfo=function(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}},Y.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>d().get(`WEBGL_MAX_TEXTURES_IN_SHADER`)){var t=Math.floor(e.length/2),n=this.addN(e.slice(0,t)),r=this.addN(e.slice(t));return this.addN([n,r])}var i=e.map(function(e){return e.dtype}).reduce(function(e,t){return tt(e,t)}),a=e.map(function(e){return e.shape}),o=d().getBool(`WEBGL_PACK`)?new na(e[0].shape,a):new ta(e[0].shape,a);return this.compileAndRun(o,e,i)},Y.prototype.subtract=function(e,t){if(e.dtype===`complex64`&&t.dtype===`complex64`)return this.complexSeparableBinaryOp(e,t,Oa);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.subtract(e,t);var n=tt(e.dtype,t.dtype);if(d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,Oa,e.dtype);var r=new Sa(Oa,e.shape,t.shape);return this.compileAndRun(r,[e,t],n)},Y.prototype.pow=function(e,t){var n=d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ca(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Sa(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,t.shape),r=tt(e.dtype,t.dtype);return this.compileAndRun(n,[e,t],r)},Y.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(d().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Os,e.dtype);var t=new _s(e.shape,Os);return this.compileAndRun(t,[e])},Y.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(d().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,ks,e.dtype);var t=new _s(e.shape,ks);return this.compileAndRun(t,[e])},Y.prototype.sign=function(e){var t=new _s(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(t,[e])},Y.prototype.isNaN=function(e){var t=new _s(e.shape,`return float(isnan(x));`);return this.compileAndRun(t,[e],`bool`)},Y.prototype.isInf=function(e){var t=new _s(e.shape,`return float(isinf(x));`);return this.compileAndRun(t,[e],`bool`)},Y.prototype.isFinite=function(e){var t=new _s(e.shape,`return float(!isnan(x) && !isinf(x));`);return this.compileAndRun(t,[e],`bool`)},Y.prototype.round=function(e){var t=new _s(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(t,[e])},Y.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(d().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,As,e.dtype);var t=new _s(e.shape,As);return this.compileAndRun(t,[e])},Y.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(d().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,js,e.dtype);var t=new _s(e.shape,js);return this.compileAndRun(t,[e])},Y.prototype.softmax=function(e,t){var n=I([t],e.shape),r=this.max(e,n),i=On(r.shape,n),a=this.subtract(e,r.reshape(i)),o=this.exp(a),s=this.sum(o,n).reshape(i);return this.realDivide(o,s)},Y.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(d().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var t=new _s(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(t,[e])},Y.prototype.log1p=function(e){var t=new _s(e.shape,`return log(1.0 + x);`);return this.compileAndRun(t,[e])},Y.prototype.sqrt=function(e){var t=new _s(e.shape,`return sqrt(x);`);return this.compileAndRun(t,[e])},Y.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var t=new _s(e.shape,`return inversesqrt(x);`);return this.compileAndRun(t,[e])},Y.prototype.reciprocal=function(e){var t=new _s(e.shape,`return 1.0 / x;`);return this.compileAndRun(t,[e])},Y.prototype.relu=function(e){var t;return t=d().getBool(`WEBGL_PACK`)?new vs(e.shape,Ns):new _s(e.shape,ws),this.compileAndRun(t,[e])},Y.prototype.relu6=function(e){var t;return t=d().getBool(`WEBGL_PACK`)?new vs(e.shape,Ps):new _s(e.shape,Ts),this.compileAndRun(t,[e])},Y.prototype.prelu=function(e,t){var n=d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ca(ja,e.shape,t.shape):new Sa(Aa,e.shape,t.shape);return this.compileAndRun(n,[e,t])},Y.prototype.elu=function(e){if(d().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Fs,e.dtype);var t=new _s(e.shape,Es);return this.compileAndRun(t,[e])},Y.prototype.eluDer=function(e,t){var n=d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ca(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,t.shape):new Sa(`return (b >= 1.0) ? a : a * (b + 1.0);`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},Y.prototype.selu=function(e){var t=new _s(e.shape,`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = 1.7580993408473768;
  float scale = 1.0507009873554805;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`);return this.compileAndRun(t,[e])},Y.prototype.int=function(e){var t=new _s(e.shape,`return float(int(x));`);return this.compileAndRun(t,[e],`int32`)},Y.prototype.clip=function(e,t,n){var r,i=(r=d().getBool(`WEBGL_PACK_CLIP`)?new Na(e.shape):new Ma(e.shape)).getCustomSetupFunc(t,n);return this.compileAndRun(r,[e],null,i)},Y.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(d().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Cs,e.dtype);var t=new _s(e.shape,Cs);return this.compileAndRun(t,[e])},Y.prototype.complexAbs=function(e){var t=this.texData.get(e.dataId),n=new wa(e.shape),r=[this.makeComplexComponentTensorInfo(e,t.complexTensors.real),this.makeComplexComponentTensorInfo(e,t.complexTensors.imag)];return this.compileAndRun(n,r)},Y.prototype.sigmoid=function(e){var t=new _s(e.shape,`return 1.0 / (1.0 + exp(-1.0 * x));`);return this.compileAndRun(t,[e])},Y.prototype.softplus=function(e){var t=new _s(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(t,[e])},Y.prototype.sin=function(e){var t=new _s(e.shape,`if (isnan(x)) return x;
  return sin(x);
`);return this.compileAndRun(t,[e])},Y.prototype.cos=function(e){var t=new _s(e.shape,`if (isnan(x)) return x;
  return cos(x);
`);return this.compileAndRun(t,[e])},Y.prototype.tan=function(e){var t=new _s(e.shape,`return tan(x);`);return this.compileAndRun(t,[e])},Y.prototype.asin=function(e){var t=new _s(e.shape,`if (isnan(x)) return x;
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`);return this.compileAndRun(t,[e])},Y.prototype.acos=function(e){var t=new _s(e.shape,`if (isnan(x)) return x;
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`);return this.compileAndRun(t,[e])},Y.prototype.atan=function(e){var t=new _s(e.shape,`if (isnan(x)) return x;
  return atan(x);
`);return this.compileAndRun(t,[e])},Y.prototype.atan2=function(e,t){var n=d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ca(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Sa(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},Y.prototype.sinh=function(e){var t=new _s(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},Y.prototype.cosh=function(e){var t=new _s(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},Y.prototype.tanh=function(e){var t=new _s(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(t,[e])},Y.prototype.asinh=function(e){var t=new _s(e.shape,`if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));`);return this.compileAndRun(t,[e])},Y.prototype.acosh=function(e){var t=new _s(e.shape,`if (isnan(x)) return x;
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`);return this.compileAndRun(t,[e])},Y.prototype.atanh=function(e){var t=new _s(e.shape,`if (isnan(x)) return x;
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`);return this.compileAndRun(t,[e])},Y.prototype.erf=function(e){var t=new _s(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(t,[e])},Y.prototype.step=function(e,t){var n,r=new _s(e.shape,((n=t)===void 0&&(n=0),Ss+`
    return x > 0.0 ? 1.0 : float(`+n+`);
  `));return this.compileAndRun(r,[e])},Y.prototype.conv2dByMatMul=function(e,t,n,r,i,a){var o=e.shape,s=this.texData.get(e.dataId),c=n.inChannels,l=o[0]*o[1]*o[2],u=n.outChannels,f=n.dataFormat===`channelsLast`,p=(l==1||u===1)&&1e3<c,m=o[2]%2!=0&&!!s.isPacked;if(p||!d().getBool(`WEBGL_LAZILY_UNPACK`)||!d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)||!m){var h=f?o[0]*o[1]*o[2]:o[0]*o[2]*o[3],g=this.reshape(e,[1,h,n.inChannels]),_=this.reshape(t,[1,n.inChannels,n.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:_,transposeA:!1,transposeB:!1,bias:r,activation:i,preluActivationWeights:a}),n.outShape)}var v=f?o[0]*o[1]*(o[2]+1):o[0]*o[2]*(o[3]+1),y={dataId:e.dataId,shape:[1,v,n.inChannels],dtype:e.dtype},b=s.shape;s.shape=s.shape.slice(),s.shape[s.shape.length-2]++,T(on(s.shape,y.shape),function(){return`packed reshape `+s.shape+` to `+y.shape+` isn't free`});var x=this.reshape(t,[1,n.inChannels,n.outChannels]),S=this.fusedBatchMatMul({a:y,b:x,transposeA:!1,transposeB:!1,bias:r,activation:i,preluActivationWeights:a}),C=this.texData.get(S.dataId);return T(C.isPacked,function(){return`batchMatMul result is expected to be packed`}),s.shape=b,C.shape=n.outShape,B.makeTensorFromDataId(S.dataId,n.outShape,S.dtype)},Y.prototype.conv2dWithIm2Row=function(e,t,n,r,i,a){var o=n.filterWidth,s=n.filterHeight,c=n.inChannels,l=n.outWidth,u=n.outHeight,d=n.dataFormat===`channelsLast`,f=o*s*c,p=u*l,m=[f,p],h=e.squeeze([0]),g=t.reshape([1,f,-1]),_=new jo(m,h.shape,n),v=this.compileAndRun(_,[h]).reshape([1,m[0],m[1]]),y=r!=null,b=a!=null,x=i?Ls(i,!0):null,S=new Lo(v.shape,[1,p,n.outChannels],!0,!1,y,x,b),C=[v,g];r&&C.push(r),b&&C.push(a);var w=this.compileAndRun(S,C);return d?w.reshape([1,u,l,n.outChannels]):w.reshape([1,n.outChannels,u,l])},Y.prototype.fusedConv2d=function(e){var t=e.input,n=e.filter,r=e.convInfo,i=e.bias,a=e.activation,o=e.preluActivationWeights;if(r.filterHeight===1&&r.filterWidth===1&&r.dilationHeight===1&&r.dilationWidth===1&&r.strideHeight===1&&r.strideWidth===1&&(r.padInfo.type===`SAME`||r.padInfo.type===`VALID`))return this.conv2dByMatMul(t,n,r,i,a,o);if(d().getBool(`WEBGL_CONV_IM2COL`)&&t.shape[0]===1)return this.conv2dWithIm2Row(t,n,r,i,a,o);var s=i!=null,c=o!=null,l=new Ua(r,s,a?Ls(a,!1):null,c),u=[t,n];return i&&u.push(i),o&&u.push(o),this.compileAndRun(l,u)},Y.prototype.conv2d=function(e,t,n){if(n.filterHeight===1&&n.filterWidth===1&&n.dilationHeight===1&&n.dilationWidth===1&&n.strideHeight===1&&n.strideWidth===1&&(n.padInfo.type===`SAME`||n.padInfo.type===`VALID`))return this.conv2dByMatMul(e,t,n);if(d().getBool(`WEBGL_CONV_IM2COL`)&&e.shape[0]===1)return this.conv2dWithIm2Row(e,t,n);var r=new Ua(n);return this.compileAndRun(r,[e,t])},Y.prototype.conv2dDerInput=function(e,t,n){var r=new Ra(n);return this.compileAndRun(r,[e,t])},Y.prototype.conv2dDerFilter=function(e,t,n){var r=new La(n);return this.compileAndRun(r,[e,t])},Y.prototype.fusedDepthwiseConv2D=function(e){var t,n=e.input,r=e.filter,i=e.convInfo,a=e.bias,o=e.activation,s=e.preluActivationWeights,c=d().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,l=o?Ls(o,c):null,u=[n,r],f=a!=null,p=s!=null;return f&&u.push(a),p&&u.push(s),t=c?new Ka(i,f,l,p):new Ga(i,f,l,p),this.compileAndRun(t,u)},Y.prototype.depthwiseConv2D=function(e,t,n){var r;return r=d().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&n.strideWidth<=2&&n.outChannels/n.inChannels==1?new Ka(n):new Ga(n),this.compileAndRun(r,[e,t])},Y.prototype.depthwiseConv2DDerInput=function(e,t,n){var r=new Ha(n);return this.compileAndRun(r,[e,t])},Y.prototype.depthwiseConv2DDerFilter=function(e,t,n){var r=new Va(n);return this.compileAndRun(r,[e,t])},Y.prototype.conv3d=function(e,t,n){var r=new Wa(n);return this.compileAndRun(r,[e,t])},Y.prototype.conv3dDerInput=function(e,t,n){var r=new Ba(n);return this.compileAndRun(r,[e,t])},Y.prototype.conv3dDerFilter=function(e,t,n){var r=new za(n);return this.compileAndRun(r,[e,t])},Y.prototype.maxPool=function(e,t){var n=new Wo(t,`max`,!1);return this.compileAndRun(n,[e])},Y.prototype.avgPool=function(e,t){var n=new Wo(t,`avg`,!1);return this.compileAndRun(n,[e],`float32`)},Y.prototype.maxPoolBackprop=function(e,t,n,r){var i=new Wo(r,`max`,!0),a=this.compileAndRun(i,[t]),o=new Fo(r),s=this.compileAndRun(o,[e,a],t.dtype);return a.dispose(),s},Y.prototype.avgPoolBackprop=function(e,t,n){var r=new _a(n);return this.compileAndRun(r,[e],t.dtype)},Y.prototype.cast=function(e,t){return zi(e,t,this)},Y.prototype.unstack=function(e,t){for(var n=e.shape[t],r=Array(e.rank-1),i=0,a=0;a<e.rank;a++)a!==t&&(r[i++]=e.shape[a]);var o=Array(e.rank).fill(0),s=e.shape.slice();s[t]=1;var c=Array(n);for(a=0;a<c.length;a++)c[o[t]=a]=this.slice(e,o,s).reshape(r);return c},Y.prototype.avgPool3d=function(e,t){var n=new Go(t,`avg`,!1);return this.compileAndRun(n,[e],`float32`)},Y.prototype.avgPool3dBackprop=function(e,t,n){var r=new va(n);return this.compileAndRun(r,[e],t.dtype)},Y.prototype.maxPool3d=function(e,t){var n=new Go(t,`max`,!1);return this.compileAndRun(n,[e],`float32`)},Y.prototype.maxPool3dBackprop=function(e,t,n,r){var i=new Go(r,`max`,!0),a=this.compileAndRun(i,[t]),o=new Io(r),s=this.compileAndRun(o,[e,a],t.dtype);return a.dispose(),s},Y.prototype.reshape=function(e,t){var n=this.texData.get(e.dataId);if(!n.isPacked||on(e.shape,t)||n.texture!==null&&on(n.shape,t))return Bi(e,t);var r=this.packedReshape(e,t);return B.makeTensorFromDataId(r.dataId,r.shape,r.dtype)},Y.prototype.resizeBilinear=function(e,t,n,r){var i=d().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new Xo(e.shape,t,n,r):new Yo(e.shape,t,n,r);return this.compileAndRun(i,[e],`float32`)},Y.prototype.resizeBilinearBackprop=function(e,t,n){var r=new Jo(e,t,n);return this.compileAndRun(r,[e])},Y.prototype.resizeNearestNeighbor=function(e,t,n,r){var i=new Qo(e.shape,t,n,r);return this.compileAndRun(i,[e])},Y.prototype.resizeNearestNeighborBackprop=function(e,t,n){var r=new Zo(e,t,n);return this.compileAndRun(r,[e])},Y.prototype.multinomial=function(e,t,n,r){var i=t?e:yi(e),a=i.shape[0],o=i.shape[1],s=new Bo(a,o,n),c=s.getCustomSetupFunc(r);return this.compileAndRun(s,[i],`int32`,c)},Y.prototype.oneHot=function(e,t,n,r){var i=new Ro(e.size,t,n,r);return this.compileAndRun(i,[e])},Y.prototype.diag=function(e){var t=new Qa(e.size);return this.compileAndRun(t,[e])},Y.prototype.nonMaxSuppression=function(e,t,n,r,i){return xn(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`),Ki(e.dataSync(),t.dataSync(),n,r,i)},Y.prototype.cropAndResize=function(e,t,n,r,i,a){var o=new qa(e.shape,t.shape,r,i,a);return this.compileAndRun(o,[e,t,n],`float32`)},Y.prototype.depthToSpace=function(e,t,n){T(1<t,function(){return`blockSize should be > 1 for depthToSpace, but was: `+t});var r=e.shape[0],i=n===`NHWC`?e.shape[1]:e.shape[2],a=n===`NHWC`?e.shape[2]:e.shape[3],o=n===`NHWC`?e.shape[3]:e.shape[1],s=i*t,c=a*t,l=o/(t*t),u=new ao(n===`NHWC`?[r,s,c,l]:[r,l,s,c],t,n);return this.compileAndRun(u,[e])},Y.prototype.split=function(e,t,n){return Zi(e,t,n)},Y.prototype.scatterND=function(e,t,n){var r=oi(0,e,n),i=r.sliceRank,a=r.numUpdates,o=r.sliceSize,s=r.strides,c=r.outputSize,l=[c/o,o],u=e.reshape([a,i]),d=t.reshape([a,o]);if(c===0)return Bi(Rn([]),n);var f=G(0),p=new ts(a,i,u.rank,d.rank,s,l);return this.compileAndRun(p,[d,u,f]).reshape(n)},Y.prototype.sparseToDense=function(e,t,n,r){var i=oi(0,e,n),a=i.sliceRank,o=i.numUpdates,s=i.strides,c=i.outputSize,l=new ts(o,a,e.rank,t.rank,s,[c,1],!1);return this.compileAndRun(l,[t,e,r]).reshape(n)},Y.prototype.fft=function(e){return this.fftImpl(e,!1)},Y.prototype.ifft=function(e){return this.fftImpl(e,!0)},Y.prototype.fftImpl=function(e,t){var n=this.texData.get(e.dataId),r=new ro(`return real * expR - imag * expI;`,e.shape,t),i=new ro(`return real * expI + imag * expR;`,e.shape,t),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)],o=this.compileAndRun(r,a),s=this.compileAndRun(i,a),c=this.complex(o,s).as2D(e.shape[0],e.shape[1]);return o.dispose(),s.dispose(),c},Y.prototype.gatherND=function(e,t){var n=t.shape,r=n[n.length-1],i=ti(e,t),a=i[0],o=i[1],s=i[2],c=i[3],l=t.reshape([o,r]),u=e.reshape([e.size/s,s]),d=new lo(r,c,[o,s]);return this.compileAndRun(d,[u,l]).reshape(a)},Y.prototype.fill=function(e,t,n){if((n||=pe(t))===`string`){var r=re(n,k(e));return r.fill(t),B.makeTensor(r,e,n,this)}var i=new oo(e,t),a=i.getCustomSetupFunc(t);return this.compileAndRun(i,[],n,a)},Y.prototype.onesLike=function(e){if(e.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);return this.fill(e.shape,1,e.dtype)},Y.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype===`string`?``:0,e.dtype)},Y.prototype.linspace=function(e,t,n){return Vi(e,t,n)},Y.prototype.makeTensorInfo=function(e,t){var n=this.write(null,e,t);return this.texData.get(n).usage=null,{dataId:n,shape:e,dtype:t}},Y.prototype.makeOutput=function(e,t){var n=this.makeTensorInfo(e,t).dataId;return B.makeTensorFromDataId(n,e,t,this)},Y.prototype.unpackTensor=function(e){var t=new ys(e.shape);return this.runWebGLProgram(t,[e],e.dtype)},Y.prototype.packTensor=function(e){var t=new zo(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)},Y.prototype.packedReshape=function(e,t){var n=[en(e.shape)].concat(tn(e.shape)),r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new qo([en(t)].concat(tn(t)),n),a=this.runWebGLProgram(i,[r],e.dtype,null,!0);return{dataId:a.dataId,shape:t,dtype:a.dtype}},Y.prototype.decode=function(e){var t,n=this.texData.get(e),r=n.isPacked,i=n.shape,a=n.dtype,o=nn(i);return t=r?new Za(o):new Xa(o),{dtype:a,shape:i,dataId:this.runWebGLProgram(t,[{shape:o,dtype:a,dataId:e}],a,null,!0).dataId}},Y.prototype.runWebGLProgram=function(e,t,n,r,i){var a=this;i===void 0&&(i=!1);var o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===pt.DENSE&&(s.texShape=wt(e.outputShape).map(function(e){return 2*e})),e.outTexUsage!=null&&(s.usage=e.outTexUsage),k(o.shape)===0)return s.values=ne(o.dtype,0),o;var c=[],l=t.map(function(t){if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);var n=a.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&k(t.shape)<=d().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}else if(!!n.isPacked!=!!e.packedInputs)t=n.isPacked?a.unpackTensor(t):a.packTensor(t),c.push(t),n=a.texData.get(t.dataId);else if(n.isPacked&&!on(n.shape,t.shape)){var r=t,i=t.shape;t.shape=n.shape,t=a.packedReshape(t,i),c.push(t),n=a.texData.get(t.dataId),r.shape=i}return a.uploadToGPU(t.dataId),{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(o.dataId);var u,f={shape:o.shape,texData:s,isUniform:!1},p=function(e,t,n){var r=``;l.concat(n).forEach(function(e){var t=e.texData!=null&&e.texData.slice!=null&&0<e.texData.slice.flatOffset,n=e.isUniform?`uniform`:e.texData.texShape;r+=e.shape+`_`+n+`_`+t});var i=e.userCode;return e.constructor.name+`_`+r+`_`+i}(e,0,f),m=this.getAndSaveBinary(p,function(){return function(e,t,n,r){var i=t.userCode,a=n.map(function(e,n){var r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&0<e.texData.slice.flatOffset&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),o=a.map(function(e){return e.shapeInfo}),s={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},c=ua(a,s,i,t.packedInputs),l=e.createProgram(c),u=null,f=e.getUniformLocation(l,`NAN`,!1);d().getNumber(`WEBGL_VERSION`)===1&&(u=e.getUniformLocation(l,`INFINITY`,!1));for(var p={},m=0;m<t.variableNames.length;m++){var h=t.variableNames[m];p[h]=e.getUniformLocation(l,h,!1),p[`offset`+h]=e.getUniformLocation(l,`offset`+h,!1)}return{program:t,source:c,webGLProgram:l,uniformLocations:p,inShapeInfos:o,outShapeInfo:s,infLoc:u,nanLoc:f}}(a.gpgpu,e,l,f)}),h=this.activeTimers!=null;if(h&&(u=this.startTimer()),function(e,t,n,r,i){Ao(t.inShapeInfos,n),Ao([t.outShapeInfo],[r]);var a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a,o[0],o[1]):e.setOutputMatrixTexture(a,o[0],o[1]),e.setProgram(t.webGLProgram),d().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach(function(n,r){var i=t.program.variableNames[r],a=t.uniformLocations[i],o=t.uniformLocations[`offset`+i];if(a!=null){if(n.isUniform){if(k(n.shape)<2)e.gl.uniform1f(a,n.uniformValues[0]);else{var s=n.uniformValues;s instanceof Float32Array||(s=new Float32Array(s)),e.gl.uniform1fv(a,s)}}else n.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture,a,r)}}),i?.(e,t.webGLProgram),e.executeProgram()}(this.gpgpu,m,l,f,r),c.forEach(function(e){return a.disposeData(e.dataId)}),h&&(u=this.endTimer(u),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(u)})),d().getBool(`WEBGL_LAZILY_UNPACK`)||!s.isPacked||!1!==i)return o;var g=this.unpackTensor(o);return this.disposeData(o.dataId),g},Y.prototype.compileAndRun=function(e,t,n,r,i){i===void 0&&(i=!1),n||=t[0].dtype;var a=this.runWebGLProgram(e,t,n,r,i);return B.makeTensorFromDataId(a.dataId,a.shape,a.dtype)},Y.prototype.getAndSaveBinary=function(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]},Y.prototype.getTextureManager=function(){return this.textureManager},Y.prototype.dispose=function(){var e=this;this.disposed||=(d().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach(function(t){e.gpgpu.deleteProgram(e.binaryCache[t].webGLProgram),delete e.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)},Y.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue??=H(function(){if(!d().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){var t=d().getBool(`DEBUG`);d().set(`DEBUG`,!1);var n=e.abs(G(1e-8)).dataSync()[0];if(d().set(`DEBUG`,t),0<n)return 32}return 16}),this.floatPrecisionValue},Y.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},Y.prototype.uploadToGPU=function(e){var t,n=this.texData.get(e),r=n.shape,i=n.dtype,a=n.values,o=n.texture,s=n.usage,c=n.isPacked;if(o==null){var l,u=this.activeTimers!=null;u&&(l=xe());var d=n.texShape;if(d??(d=rn(r,c),n.texShape=d),a!=null){var f=nn(r),p=void 0,m=d[1],h=d[0],g=a instanceof Uint8Array;p=c?(m=(t=Tt(d[0],d[1]))[0],h=t[1],new no(f,[h,m],g)):new to(f,[h,m],g);var _=this.makeTensorInfo([h,m],i);this.texData.get(_.dataId).usage=g?mt.PIXELS:mt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(_.dataId),m,h,a);var v=this.runWebGLProgram(p,[_],i,null,!0),y=this.texData.get(v.dataId);n.texture=y.texture,n.texShape=y.texShape,n.isPacked=y.isPacked,n.usage=y.usage,this.disposeData(_.dataId),this.texData.delete(v.dataId),n.values=null,u&&(this.uploadWaitMs+=xe()-l)}else n.texture=this.acquireTexture(d,s,i,c)}},Y.prototype.convertAndCacheOnCPU=function(e,t){var n=this.texData.get(e),r=n.dtype;return this.releaseGPUData(e),t!=null&&(n.values=function(e,t){if(t===`float32`||t===`complex64`)return e;if(t!==`int32`&&t!==`bool`)throw Error(`Unknown dtype `+t);for(var n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length),r=0;r<n.length;++r)n[r]=Math.round(e[r]);return n}(t,r)),n.values},Y.prototype.acquireTexture=function(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: `+i+` MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)},Y.prototype.computeBytes=function(e,t){return e[0]*e[1]*ce(t)},Y);function Y(e){var t,n=Rs.call(this)||this;if(n.pendingRead=new WeakMap,n.pendingDisposal=new WeakSet,n.dataRefCount=new WeakMap,n.numBytesInGPU=0,n.uploadWaitMs=0,n.downloadWaitMs=0,n.warnedAboutMemory=!1,n.pendingDeletes=0,n.disposed=!1,!d().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);if(e==null){var r=St(d().getNumber(`WEBGL_VERSION`));n.binaryCache=((t=d().getNumber(`WEBGL_VERSION`))in Is||(Is[t]={}),Is[t]),n.gpgpu=new ko(r),n.canvas=r.canvas,n.gpgpuCreatedLocally=!0}else n.gpgpu=e,n.binaryCache={},n.gpgpuCreatedLocally=!1,n.canvas=e.gl.canvas;return n.textureManager=new ls(n.gpgpu),n.numMBBeforeWarning=d().global.screen==null?1024:d().global.screen.height*d().global.screen.width*window.devicePixelRatio*600/1024/1024,n.texData=new xi(n,B),n}dt()&&B.registerBackend(`webgl`,function(){return new zs},2);var Bs=W({square_:function(e){var t=U(e,`x`,`square`),n=[t];return B.runKernelFunc(function(e,n){return n([t]),e.square(t)},{x:t},null,`Square`,{},n,[])}}),Vs=`SquaredDifference`,Hs=W({squaredDifference_:function(e,t){var n,r=U(e,`a`,`squaredDifference`),i=U(t,`b`,`squaredDifference`);n=rt(r,i),r=n[0],i=n[1],Ei(r.shape,i.shape);var a={a:r,b:i},o=[r,i];return B.runKernelFunc(function(e,t){var n=e.squaredDifference(r,i);return t([r,i]),n},a,function(e,t){var n=t[0],r=t[1],i=G(2);return{a:function(){return e.mul(n.sub(r).mul(i))},b:function(){return e.mul(r.sub(n).mul(i))}}},Vs,{},o,[])}}),Us=W({abs_:function(e){var t=U(e,`x`,`abs`);return t.dtype===`complex64`?B.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):B.runKernelFunc(function(e,n){var r=e.abs(t);return n([t]),r},{x:t},function(e,t){var n=t[0];return{x:function(){return e.mul(n.toFloat().step(-1))}}},`Abs`)}}),Ws=W({acos_:function(e){var t=U(e,`x`,`acos`);return B.runKernelFunc(function(e,n){var r=e.acos(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.divStrict(G(1).sub(n.toFloat().square()).sqrt()).neg()}}})}}),Gs=W({acosh_:function(e){var t=U(e,`x`,`acosh`);return B.runKernelFunc(function(e,n){var r=e.acosh(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.divStrict(n.toFloat().square().sub(1).sqrt())}}})}}),Ks=W({asin_:function(e){var t=U(e,`x`,`asin`);return B.runKernelFunc(function(e,n){var r=e.asin(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.divStrict(G(1).sub(n.toFloat().square()).sqrt())}}})}}),qs=W({asinh_:function(e){var t=U(e,`x`,`asinh`);return B.runKernelFunc(function(e,n){var r=e.asinh(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.divStrict(G(1).add(n.toFloat().square()).sqrt())}}})}}),Js=W({atan_:function(e){var t=U(e,`x`,`atan`);return B.runKernelFunc(function(e,n){var r=e.atan(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.div(n.toFloat().square().add(1))}}})}}),Ys=W({atanh_:function(e){var t=U(e,`x`,`atanh`);return B.runKernelFunc(function(e,n){var r=e.atanh(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.div(G(1).sub(n.toFloat().square()))}}})}}),Xs=W({ceil_:function(e){var t=U(e,`x`,`ceil`);return B.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return $n(e)}}})}}),Zs=W({clipByValue_:function(e,t,n){var r=U(e,`x`,`clipByValue`);T(t<=n,function(){return`Error in clip: min (`+t+`) must be less than or equal to max (`+n+`).`});var i=[r],a={min:t,max:n};return B.runKernelFunc(function(e,i){var a=e.clip(r,t,n);return i([r]),a},{x:r},function(e,r){var i=r[0];return{x:function(){return e.where(i.greaterEqual(t).logicalAnd(i.lessEqual(n)),$n(e))}}},`ClipByValue`,a,i)}}),Qs=W({cos_:function(e){var t=U(e,`x`,`cos`),n=[t];return B.runKernelFunc(function(e,n){var r=e.cos(t);return n([t]),r},{x:t},function(e,t){var n=t[0];return{x:function(){return n.toFloat().sin().neg().mul(e)}}},`Cos`,{},n)}}),$s=W({cosh_:function(e){var t=U(e,`x`,`cosh`);return B.runKernelFunc(function(e,n){var r=e.cosh(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return n.toFloat().sinh().mulStrict(e)}}})}}),ec=W({erf_:function(e){var t=U(e,`x`,`erf`);return T(t.dtype===`int32`||t.dtype===`float32`,function(){return"Input dtype must be `int32` or `float32`."}),t.dtype===`int32`&&(t=t.toFloat()),B.runKernelFunc(function(e,n){var r=e.erf(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.mul(n.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),tc=W({exp_:function(e){var t=U(e,`x`,`exp`);return B.runKernelFunc(function(e,n){var r=e.exp(t);return n([r]),r},{x:t},function(e,t){return{x:function(){return e.mulStrict(t[0])}}},`Exp`,{},[],[!0])}}),nc=W({expm1_:function(e){var t=U(e,`x`,`expm1`);return B.runKernelFunc(function(e,n){var r=e.expm1(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.mul(n.exp())}}})}}),rc=W({floor_:function(e){var t=U(e,`x`,`floor`);return B.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return $n(e)}}})}}),ic=W({log_:function(e){var t=U(e,`x`,`log`),n=[t];return B.runKernelFunc(function(e,n){var r=e.log(t);return n([t]),r},{x:t},function(e,t){var n=t[0];return{x:function(){return e.div(n.toFloat())}}},`Log`,{},n)}}),ac=W({log1p_:function(e){var t=U(e,`x`,`log1p`);return B.runKernelFunc(function(e,n){var r=e.log1p(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.div(n.add(1))}}})}}),oc=W({logSigmoid_:function(e){var t=U(e,`x`,`logSigmoid`);return B.runKernelFunc(function(e,n){var r=e.softplus(t.neg()).neg();return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.mul(n.neg().sigmoid())}}})}}),sc=W({neg_:function(e){var t=U(e,`x`,`neg`),n=[t];return B.runKernelFunc(function(e){return e.neg(t)},{x:t},function(e){return{x:function(){return e.neg()}}},`Neg`,{},n)}}),cc=W({reciprocal_:function(e){var t=U(e,`x`,`reciprocal`);return B.runKernelFunc(function(e,n){var r=e.reciprocal(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.div(n.square().neg())}}})}}),lc=W({round_:function(e){var t=U(e,`x`,`round`);return B.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return $n(e)}}})}}),uc=W({rsqrt_:function(e){var t=U(e,`x`,`rsqrt`),n=[t];return B.runKernelFunc(function(e,n){var r=e.rsqrt(t);return n([t]),r},{x:t},function(e,t){var n=t[0];return{x:function(){return e.div(n.pow(1.5).mul(2)).neg()}}},`Rsqrt`,{},n)}}),dc=W({sigmoid_:function(e){var t=U(e,`x`,`sigmoid`);return B.runKernelFunc(function(e,n){var r=e.sigmoid(t);return n([r]),r},{x:t},function(e,t){var n=t[0];return{x:function(){return e.mul(n.mul(G(1).sub(n)))}}},`Sigmoid`)}}),fc=W({sign_:function(e){var t=U(e,`x`,`sign`);return B.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return $n(e)}}})}}),pc=W({isNaN_:function(e){var t=U(e,`x`,`isNaN`);return B.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return $n(e)}}})}}),mc=W({isInf_:function(e){var t=U(e,`x`,`isInf`);return B.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return $n(e)}}})}}),hc=W({isFinite_:function(e){var t=U(e,`x`,`isFinite`);return B.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return $n(e)}}})}}),gc=W({sin_:function(e){var t=U(e,`x`,`sin`),n=[t];return B.runKernelFunc(function(e,n){var r=e.sin(t);return n([t]),r},{x:t},function(e,t){var n=t[0];return{x:function(){return n.toFloat().cos().mul(e)}}},`Sin`,{},n)}}),_c=W({sinh_:function(e){var t=U(e,`x`,`sinh`);return B.runKernelFunc(function(e,n){var r=e.sinh(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return n.toFloat().cosh().mulStrict(e)}}})}}),vc=W({softplus_:function(e){var t=U(e,`x`,`softplus`);return B.runKernelFunc(function(e,n){var r=e.softplus(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.mul(n.sigmoid())}}})}}),yc=W({sqrt_:function(e){var t=U(e,`x`,`sqrt`);return B.runKernelFunc(function(e,n){var r=e.sqrt(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.div(n.toFloat().sqrt().mul(2))}}})}}),bc=W({step_:function(e,t){t===void 0&&(t=0);var n=U(e,`x`,`step`);return B.runKernelFunc(function(e){return e.step(n,t)},{$x:n},function(e){return{$x:function(){return $n(e)}}})}}),xc=W({tan_:function(e){var t=U(e,`x`,`tan`);return B.runKernelFunc(function(e,n){var r=e.tan(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return e.div(n.cos().square())}}})}}),Sc=W({tanh_:function(e){var t=U(e,`x`,`tanh`);return B.runKernelFunc(function(e,n){var r=e.tanh(t);return n([r]),r},{x:t},function(e,t){var n=t[0];return{x:function(){return G(1).sub(n.square()).mulStrict(e)}}},`Tanh`,{},null,[!0])}});function Cc(e,t,n,r,i,a){var o,s,c=U(e,`x`,`batchNorm`),l=U(t,`mean`,`batchNorm`),u=U(n,`variance`,`batchNorm`);return i!=null&&(o=U(i,`scale`,`batchNorm`)),r!=null&&(s=U(r,`offset`,`batchNorm`)),T(c.rank===2,function(){return`Error in batchNorm3D: x must be rank 3 but got rank `+c.rank+`.`}),T(l.rank===2||l.rank===1,function(){return`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank `+l.rank+`.`}),T(u.rank===2||u.rank===1,function(){return`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank `+u.rank+`.`}),o!=null&&T(o.rank===2||o.rank===1,function(){return`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank `+o.rank+`.`}),s!=null&&T(s.rank===2||s.rank===1,function(){return`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank `+s.rank+`.`}),Ec(c,l,u,s,o,a)}function wc(e,t,n,r,i,a){var o,s,c=U(e,`x`,`batchNorm`),l=U(t,`mean`,`batchNorm`),u=U(n,`variance`,`batchNorm`);return i!=null&&(o=U(i,`scale`,`batchNorm`)),r!=null&&(s=U(r,`offset`,`batchNorm`)),T(c.rank===3,function(){return`Error in batchNorm3D: x must be rank 3 but got rank `+c.rank+`.`}),T(l.rank===3||l.rank===1,function(){return`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank `+l.rank+`.`}),T(u.rank===3||u.rank===1,function(){return`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank `+u.rank+`.`}),o!=null&&T(o.rank===3||o.rank===1,function(){return`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank `+o.rank+`.`}),s!=null&&T(s.rank===3||s.rank===1,function(){return`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank `+s.rank+`.`}),Ec(c,l,u,s,o,a)}function Tc(e,t,n,r,i,a){var o,s,c=U(e,`x`,`batchNorm`),l=U(t,`mean`,`batchNorm`),u=U(n,`variance`,`batchNorm`);return i!=null&&(o=U(i,`scale`,`batchNorm`)),r!=null&&(s=U(r,`offset`,`batchNorm`)),T(c.rank===4,function(){return`Error in batchNorm4D: x must be rank 4 but got rank `+c.rank+`.`}),T(l.rank===4||l.rank===1,function(){return`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank `+l.rank+`.`}),T(u.rank===4||u.rank===1,function(){return`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank `+u.rank+`.`}),o!=null&&T(o.rank===4||o.rank===1,function(){return`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank `+o.rank+`.`}),s!=null&&T(s.rank===4||s.rank===1,function(){return`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank `+s.rank+`.`}),Ec(c,l,u,s,o,a)}function Ec(e,t,n,r,i,a){a??=.001;var o,s,c,l=U(e,`x`,`batchNorm`),u=U(t,`mean`,`batchNorm`),d=U(n,`variance`,`batchNorm`);i!=null&&(o=U(i,`scale`,`batchNorm`)),r!=null&&(s=U(r,`offset`,`batchNorm`)),T(u.rank===d.rank,function(){return`Batch normalization gradient requires mean and variance to have equal ranks.`}),T(s==null||u.rank===s.rank,function(){return`Batch normalization gradient requires mean and offset to have equal ranks.`}),T(o==null||u.rank===o.rank,function(){return`Batch normalization gradient requires mean and scale to have equal ranks.`}),c=l.rank===0||l.rank===1?l.as4D(1,1,1,l.size):l.rank===2?l.as4D(1,1,l.shape[0],l.shape[1]):l.rank===3?l.as4D(1,l.shape[0],l.shape[1],l.shape[2]):l;var f=[l,u,d,o];return B.runKernelFunc(function(e,t){var n=e.batchNormalization(c,Dc(u),Dc(d),a,Dc(o),Dc(s));return t([l,u,d,o]),n},{x:l,mean:u,variance:d,scale:o,offset:s},function(e,t){var n=t,r=n[0],i=n[1],o=n[2],s=n[3]??G(1),l=Ti(i.shape,c.shape),u=[];if(i.rank===1){for(var d=0;d<c.shape.length-1;++d)u.push(c.shape[d]);u.push(1)}var f=r.sub(i),p=e.mul(s),m=uc(o.add(G(a))),h=m.mul(m).mul(m).mul(G(-.5));return{x:function(){return i.rank===1?e.mul(qr(m.as4D(1,1,1,i.shape[0]),u)).mul(s).reshape(r.shape):e.mul(m).mul(s).reshape(r.shape)},mean:function(){var e=m.mul(G(-1)).mul(p);return i.rank===1&&(e=e.sum(l)),e.reshape(i.shape)},variance:function(){var e=h.mul(f).mul(p);return i.rank===1&&(e=e.sum(l)),e.reshape(i.shape)},scale:function(){var t=f.mul(m),n=e.mul(t);return i.rank===1&&(n=n.sum(l)),n.reshape(i.shape)},offset:function(){var t=e;return i.rank===1&&(t=t.sum(l)),t.reshape(i.shape)}}},`BatchNormalization`,{varianceEpsilon:a},f).reshape(l.shape)}function Dc(e){return e==null?null:e.rank===0?e.as1D():e.rank===1?e:e.rank===2?e.as4D(1,1,e.shape[0],e.shape[1]):e.rank===3?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e}function Oc(){vn(`tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon`)}function kc(e){return s(this,void 0,void 0,function(){var t,n,r;return c(this,function(i){switch(i.label){case 0:return[4,(t=U(e,`condition`,`whereAsync`,`bool`)).data()];case 1:return n=i.sent(),r=ea(t.shape,n),e!==t&&t.dispose(),[2,r]}})})}var Ac=W({batchNormalization2d_:function(e,t,n,r,i,a){return r===void 0&&(r=.001),Oc(),Cc(e,t,n,a,i,r)}}),jc=W({batchNormalization3d_:function(e,t,n,r,i,a){return r===void 0&&(r=.001),Oc(),wc(e,t,n,a,i,r)}}),Mc=W({batchNormalization4d_:function(e,t,n,r,i,a){return r===void 0&&(r=.001),Oc(),Tc(e,t,n,a,i,r)}}),Nc=W({batchNormalization_:function(e,t,n,r,i,a){return r===void 0&&(r=.001),Oc(),Ec(e,t,n,a,i,r)}}),Pc=W({batchNorm_:Ec}),Fc=W({batchNorm2d_:Cc}),Ic=W({batchNorm3d_:wc}),Lc=W({batchNorm4d_:Tc}),Rc=W({logicalAnd_:function(e,t){var n=U(e,`a`,`logicalAnd`,`bool`),r=U(t,`b`,`logicalAnd`,`bool`);return Ei(n.shape,r.shape),B.runKernelFunc(function(e){return e.logicalAnd(n,r)},{a:n,b:r},null,`LogicalAnd`)}}),zc=W({logicalNot_:function(e){var t=U(e,`x`,`logicalNot`,`bool`);return B.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Bc=W({logicalOr_:function(e,t){var n=U(e,`a`,`logicalOr`,`bool`),r=U(t,`b`,`logicalOr`,`bool`);return Ei(n.shape,r.shape),B.runKernelFunc(function(e){return e.logicalOr(n,r)},{$a:n,$b:r})}}),Vc=W({logicalXor_:function(e,t){var n=U(e,`a`,`logicalXor`,`bool`),r=U(t,`b`,`logicalXor`,`bool`);return Ei(n.shape,r.shape),Bc(e,t).logicalAnd(Rc(e,t).logicalNot())}}),Hc=W({where_:function(e,t,n){var r=U(t,`a`,`where`),i=U(n,`b`,`where`),a=U(e,`condition`,`where`,`bool`);return E(r.shape,i.shape,`Error in where: `),a.rank===1?T(a.shape[0]===r.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):E(a.shape,i.shape,`Error in where: `),B.runKernelFunc(function(e,t){var n=e.select(a,r,i);return t([a]),n},{$condition:a,$a:r,$b:i},function(e,t){var n=t[0];return{$condition:function(){return $n(n).toFloat()},$a:function(){return e.mul(n.cast(e.dtype))},$b:function(){return e.mul(n.logicalNot().cast(e.dtype))}}})}}),Uc=W({add_:function(e,t){var n,r=U(e,`a`,`add`),i=U(t,`b`,`add`);n=rt(r,i),r=n[0],i=n[1];var a=Ei(r.shape,i.shape);return B.runKernelFunc(function(e){return e.add(r,i)},{a:r,b:i},function(e){return{a:function(){var t=e,n=Ti(r.shape,a);return 0<n.length&&(t=t.sum(n)),t.reshape(r.shape)},b:function(){var t=e,n=Ti(i.shape,a);return 0<n.length&&(t=t.sum(n)),t.reshape(i.shape)}}},`Add`)}}),Wc=W({addN_:function(e){T(Array.isArray(e),function(){return`The argument passed to tf.addN() must be a list of tensors`}),T(1<=e.length,function(){return`Must pass at least one tensor to tf.addN(), but got `+e.length});var t=e.map(function(e,t){return U(e,`tensors`+t,`addN`)}),n=t[0];t.forEach(function(e){if(e.dtype!==n.dtype)throw Error(`All tensors passed to tf.addN() must have the same dtype`)}),t.forEach(function(e){if(!A(e.shape,n.shape))throw Error(`All tensors passed to tf.addN() must have the same shape`)});var r=t;return B.runKernelFunc(function(e){return e.addN(t)},r,function(e){var n={};return t.forEach(function(t,r){n[r]=function(){return e.clone()}}),n},`AddN`)}}),Gc=W({addStrict_:function(e,t){var n=U(e,`a`,`addStrict`),r=U(t,`b`,`addStrict`);return E(n.shape,r.shape,`Error in addStrict: `),n.add(r)}}),Kc=W({atan2_:function(e,t){var n,r=U(e,`a`,`atan2`),i=U(t,`b`,`atan2`);n=rt(r,i),r=n[0],i=n[1];var a=Ei(r.shape,i.shape);return B.runKernelFunc(function(e,t){var n=e.atan2(r,i);return t([r,i]),n},{$a:r,$b:i},function(e,t){var n=t[0],r=t[1];return{$a:function(){var t=Uc(n.square(),r.square()),i=e.mul(r.div(t)),o=Ti(n.shape,a);return 0<o.length&&(i=i.sum(o)),i.reshape(n.shape)},$b:function(){var t=Uc(n.square(),r.square()),i=sc(e.mul(n.div(t))),o=Ti(r.shape,a);return 0<o.length&&(i=i.sum(o)),i.reshape(r.shape)}}})}}),qc=W({div_:function(e,t){var n,r=U(e,`a`,`div`),i=U(t,`b`,`div`);if(n=rt(r,i),r=n[0],i=n[1],r.dtype===`int32`&&i.dtype===`int32`)return Xc(r,i);var a=Ei(r.shape,i.shape);return B.runKernelFunc(function(e,t){var n=e.realDivide(r,i);return t([r,i]),n},{a:r,b:i},function(e,t){var n=t[0],r=t[1];return{a:function(){var t=e.div(r.toFloat()),i=Ti(n.shape,a);return 0<i.length?t.sum(i).reshape(n.shape):t},b:function(){var t=e.mul(n.toFloat()),i=Ti(r.shape,a);0<i.length&&(t=t.sum(i).reshape(r.shape));var o=r.square();return t.div(o.toFloat()).neg()}}},`Div`)}}),Jc=W({divNoNan_:function(e,t){var n,r=U(e,`a`,`div`),i=U(t,`b`,`div`);r=(n=rt(r,i))[0],i=n[1];var a=qc(r,i),o=$n(a);return Hc(i.equal(o),o,a)}}),Yc=W({divStrict_:function(e,t){var n=U(e,`a`,`div`),r=U(t,`b`,`div`);return E(n.shape,r.shape,`Error in divideStrict: `),n.div(r)}}),Xc=W({floorDiv_:function(e,t){var n,r=U(e,`a`,`floorDiv`),i=U(t,`b`,`floorDiv`);n=rt(r,i),r=n[0],i=n[1];var a=Ei(r.shape,i.shape);return B.runKernelFunc(function(e,t){var n=e.floorDiv(r,i);return t([r,i]),n},{a:r,b:i},function(e,t){var n=t[0],r=t[1];return{a:function(){var t=e.div(r.toFloat()),i=Ti(n.shape,a);return 0<i.length?t.sum(i).reshape(n.shape):t},b:function(){var t=e.mul(n.toFloat()),i=Ti(r.shape,a);0<i.length&&(t=t.sum(i).reshape(r.shape));var o=r.square();return t.div(o.toFloat()).neg()}}},`FloorDiv`)}}),Zc=W({maximum_:function(e,t){var n,r=U(e,`a`,`maximum`),i=U(t,`b`,`maximum`);return n=rt(r,i),r=n[0],i=n[1],r.dtype===`bool`&&(r=r.toInt(),i=i.toInt()),Ei(r.shape,i.shape),B.runKernelFunc(function(e,t){var n=e.maximum(r,i);return t([r,i]),n},{a:r,b:i},function(e,t){var n=t[0],r=t[1];return{a:function(){return e.mul(n.greaterEqual(r).toFloat())},b:function(){return e.mul(n.less(r).toFloat())}}},`Maximum`)}}),Qc=W({maximumStrict_:function(e,t){var n=U(e,`a`,`maximumStrict`),r=U(t,`b`,`maximumStrict`);return E(n.shape,r.shape,`Error in maximumStrict: `),n.maximum(r)}}),$c=W({minimum_:function(e,t){var n,r=U(e,`a`,`minimum`),i=U(t,`b`,`minimum`);return n=rt(r,i),r=n[0],i=n[1],r.dtype===`bool`&&(r=r.toInt(),i=i.toInt()),Ei(r.shape,i.shape),B.runKernelFunc(function(e,t){var n=e.minimum(r,i);return t([r,i]),n},{a:r,b:i},function(e,t){var n=t[0],r=t[1];return{a:function(){return e.mul(n.lessEqual(r).toFloat())},b:function(){return e.mul(n.greater(r).toFloat())}}},`Minimum`)}}),el=W({minimumStrict_:function(e,t){var n=U(e,`a`,`minimumStrict`),r=U(t,`b`,`minimumStrict`);return E(n.shape,r.shape,`Error in minimumStrict: `),n.minimum(r)}}),tl=W({mod_:function(e,t){var n,r=U(e,`a`,`mod`),i=U(t,`b`,`mod`);n=rt(r,i),r=n[0],i=n[1];var a=Ei(r.shape,i.shape);return B.runKernelFunc(function(e,t){var n=e.mod(r,i);return t([r,i]),n},{$a:r,$b:i},function(e,t){var n=t[0],r=t[1];return{$a:function(){var t=Ti(n.shape,a);return 0<t.length?e.sum(t).reshape(n.shape):e},$b:function(){var t=e.mul(n.div(r).floor().neg()),i=Ti(r.shape,a);return 0<i.length?t.sum(i).reshape(r.shape):t}}})}}),nl=W({modStrict_:function(e,t){var n=U(e,`a`,`modStrict`),r=U(t,`b`,`modStrict`);return E(n.shape,r.shape,`Error in modStrict: `),n.mod(r)}}),rl=W({mul_:function(e,t){var n,r=U(e,`a`,`mul`),i=U(t,`b`,`mul`);n=rt(r,i),r=n[0],i=n[1];var a=Ei(r.shape,i.shape);return B.runKernelFunc(function(e,t){var n=e.multiply(r,i);return t([r,i]),n},{a:r,b:i},function(e,t){var n=t[0],r=t[1];return{a:function(){var t=e.mul(r.toFloat()),i=Ti(n.shape,a);return 0<i.length?t.sum(i).reshape(n.shape):t},b:function(){var t=e.mul(n.toFloat()),i=Ti(r.shape,a);return 0<i.length?t.sum(i).reshape(r.shape):t}}},`Mul`)}}),il=W({mulStrict_:function(e,t){var n=U(e,`a`,`mul`),r=U(t,`b`,`mul`);return E(n.shape,r.shape,`Error in multiplyStrict: `),n.mul(r)}}),al=W({pow_:function(e,t){var n,r=U(e,`base`,`pow`),i=U(t,`exp`,`pow`);n=rt(r,i),r=n[0],i=n[1];var a=Ei(r.shape,i.shape),o=[r,i];return B.runKernelFunc(function(e,t){var n=e.pow(r,i);return t([r,i,n]),n},{a:r,b:i},function(e,t){var n=t[0],r=t[1],i=t[2];return{a:function(){var t=r.toFloat(),i=e.mul(t.mul(n.pow(t.sub(G(1))))),o=Ti(n.shape,a);return 0<o.length&&(i=i.sum(o)),i.reshape(n.shape)},b:function(){var t=n.greater(0),o=n.log().where(t,$n(n)),s=e.mul(i.mul(o)),c=Ti(r.shape,a);return 0<c.length&&(s=s.sum(c)),s.reshape(r.shape)}}},`Pow`,{},o,[!0])}}),ol=W({powStrict_:function(e,t){return E(e.shape,t.shape,`Error in powStrict: `),e.pow(t)}}),sl=W({squaredDifferenceStrict_:function(e,t){var n=U(e,`a`,`squaredDifferenceStrict`),r=U(t,`b`,`squaredDifferenceStrict`);return E(n.shape,r.shape,`Error in squaredDifferenceStrict: `),n.squaredDifference(r)}}),cl=W({sub_:function(e,t){var n,r=U(e,`a`,`sub`),i=U(t,`b`,`sub`);n=rt(r,i),r=n[0],i=n[1];var a=Ei(r.shape,i.shape);return B.runKernelFunc(function(e){return e.subtract(r,i)},{a:r,b:i},function(e){return{a:function(){var t=e,n=Ti(r.shape,a);return 0<n.length&&(t=t.sum(n)),t.reshape(r.shape)},b:function(){var t=e,n=Ti(i.shape,a);return 0<n.length&&(t=t.sum(n)),t.neg().reshape(i.shape)}}},`Sub`)}}),ll=W({subStrict_:function(e,t){var n=U(e,`a`,`subStrict`),r=U(t,`b`,`subStrict`);return E(n.shape,r.shape,`Error in subStrict: `),n.sub(r)}}),ul=W({equal_:function(e,t){var n,r=U(e,`a`,`equal`),i=U(t,`b`,`equal`);return n=rt(r,i),r=n[0],i=n[1],Ei(r.shape,i.shape),B.runKernelFunc(function(e){return e.equal(r,i)},{$a:r,$b:i})}}),dl=W({equalStrict_:function(e,t){var n=U(e,`a`,`equalStrict`),r=U(t,`b`,`equalStrict`);return E(n.shape,r.shape,`Error in equalStrict: `),n.equal(r)}}),fl=W({greater_:function(e,t){var n,r=U(e,`a`,`greater`),i=U(t,`b`,`greater`);return n=rt(r,i),r=n[0],i=n[1],Ei(r.shape,i.shape),B.runKernelFunc(function(e){return e.greater(r,i)},{a:r,b:i},null,`Greater`)}}),pl=W({greaterEqual_:function(e,t){var n,r=U(e,`a`,`greaterEqual`),i=U(t,`b`,`greaterEqual`);return n=rt(r,i),r=n[0],i=n[1],Ei(r.shape,i.shape),B.runKernelFunc(function(e,t){var n=e.greaterEqual(r,i);return t([r,i]),n},{a:r,b:i},function(e,t){var n=t[0],r=t[1];return{a:function(){return $n(n)},b:function(){return $n(r)}}},`GreaterEqual`)}}),ml=W({greaterEqualStrict_:function(e,t){var n=U(e,`a`,`greaterEqualStrict`),r=U(t,`b`,`greaterEqualStrict`);return E(n.shape,r.shape,`Error in greaterEqualStrict: `),n.greaterEqual(r)}}),hl=W({greaterStrict_:function(e,t){var n=U(e,`a`,`greaterStrict`),r=U(t,`b`,`greaterStrict`);return E(n.shape,r.shape,`Error in greaterStrict: `),n.greater(r)}}),gl=W({less_:function(e,t){var n,r=U(e,`a`,`less`),i=U(t,`b`,`less`);return n=rt(r,i),r=n[0],i=n[1],Ei(r.shape,i.shape),B.runKernelFunc(function(e){return e.less(r,i)},{a:r,b:i},null,`Less`)}}),_l=W({lessEqual_:function(e,t){var n,r=U(e,`a`,`lessEqual`),i=U(t,`b`,`lessEqual`);return n=rt(r,i),r=n[0],i=n[1],Ei(r.shape,i.shape),B.runKernelFunc(function(e,t){var n=e.lessEqual(r,i);return t([r,i]),n},{a:r,b:i},null,`LessEqual`)}}),vl=W({lessEqualStrict_:function(e,t){var n=U(e,`a`,`lessEqualStrict`),r=U(t,`b`,`lessEqualStrict`);return E(n.shape,r.shape,`Error in lessEqualStrict: `),n.lessEqual(r)}}),yl=W({lessStrict_:function(e,t){var n=U(e,`a`,`lessStrict`),r=U(t,`b`,`lessStrict`);return E(n.shape,r.shape,`Error in lessStrict: `),n.less(r)}}),bl=W({notEqual_:function(e,t){var n,r=U(e,`a`,`notEqual`),i=U(t,`b`,`notEqual`);return n=rt(r,i),r=n[0],i=n[1],Ei(r.shape,i.shape),B.runKernelFunc(function(e){return e.notEqual(r,i)},{a:r,b:i},null,`NotEqual`)}}),xl=W({notEqualStrict_:function(e,t){var n=U(e,`a`,`notEqualStrict`),r=U(t,`b`,`notEqualStrict`);return E(n.shape,r.shape,`Error in notEqualStrict: `),n.notEqual(r)}});function Sl(e,t){for(var n=[],r=e;r<t;++r)n.push(r);return n}function Cl(e){for(var t=[],n=0;n<e.length;++n)for(var r=0;r<e[n].length;++r)t.push(e[n][r]);return t}function wl(e,t,n){return s(this,void 0,void 0,function(){var r,i,a,o,s,l,u,d,f,p,m,h,g;return c(this,function(c){switch(c.label){case 0:for(r=U(e,`tensor`,`boolMask`),i=U(t,`mask`,`boolMask`,`bool`),a=n??0,o=i.rank,s=r.shape,T(0<o,function(){return`mask cannot be scalar`}),E(s.slice(a,a+o),i.shape,`mask's shape must match the first K dimensions of tensor's shape,`),l=1,u=a;u<a+o;u++)l*=s[u];return d=s.slice(0,a).concat([l],s.slice(a+o)),f=r.reshape(d),p=i.reshape([-1]),[4,kc(p)];case 1:return m=c.sent(),h=m.squeeze([1]),g=Tl(f,h,a),e!==r&&r.dispose(),t!==i&&i.dispose(),h.dispose(),f.dispose(),p.dispose(),m.dispose(),[2,g]}})})}var Tl=W({gather_:function(e,t,n){n===void 0&&(n=0);var r=U(e,`x`,`gather`),i=U(t,`indices`,`gather`,`int32`);n=I(n,r.shape)[0];var a=function(e,t,n){for(var r=e.shape[n],i=[],a=1,o=1,s=0;s<n;s++)i.push(e.shape[s]),a*=e.shape[s];for(s=0;s<t.rank;s++)i.push(t.shape[s]);for(s=n+1;s<e.rank;s++)i.push(e.shape[s]),o*=e.shape[s];return{batchSize:a,sliceSize:o,dimSize:r,outputShape:i}}(r,i,n);return B.runKernelFunc(function(e,t){var a=e.gather(r,i.flatten(),n);return t([i]),a},{x:r,indices:i},function(e,t){var i=t[0];return{x:function(){var t=r.shape,a=i.size,o=t.slice(0,n),s=o.length,c=t.slice(n,t.length).slice(1),l=c.length,u=Sl(0,s),d=Sl(s+1,s+1+l),f=Cl([o,[a],c]),p=e.reshape(f),m=i.reshape([a]),h=Cl([[s],u,d]),g=El(p.transpose(h),m,r.shape[n]),_=jn(h);return g.transpose(_)},indices:function(){return i}}},`Gather`,{axis:n}).reshape(a.outputShape)}}),El=W({unsortedSegmentSum_:function(e,t,n){var r=U(e,`x`,`unsortedSegmentSum`),i=U(t,`segmentIds`,`unsortedSegmentSum`,`int32`);return T(j(n),function(){return`numSegments must be of dtype int`}),B.runKernelFunc(function(e,t){var a=e.unsortedSegmentSum(r,i,n);return t([i]),a},{$x:r},function(e,t){var n=t[0];return{$x:function(){return function(e,t){for(var n=Tl(e,Zc(t,$n(t))),r=pl(t,G(0,`int32`)),i=n.rank-r.rank,a=0;a<i;++a)r=Ar(r,a+1);r=Rc(r,qn(n.shape,`bool`));var o=$n(n);return Hc(r,n,o)}(e,n)}}})}});function Dl(e,t,n,r,i,a,o){a===void 0&&(a=`NHWC`),T(e.length===t.rank,function(){return`Length of inShape (`+e.length+`) and rank of dy (`+t.rank+`) must match`});var s=e,c=t,l=!1;t.rank===3&&(l=!0,c=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,e[0],e[1],e[2]]),T(s.length===4,function(){return`Error in conv2dDerInput: inShape must be length 4, but got length `+s.length+`.`}),T(c.rank===4,function(){return`Error in conv2dDerInput: dy must be rank 4, but got rank `+c.rank}),T(n.rank===4,function(){return`Error in conv2dDerInput: filter must be rank 4, but got rank `+n.rank});var u=a===`NHWC`?s[3]:s[1],d=a===`NHWC`?c.shape[3]:c.shape[1];T(u===n.shape[2],function(){return`Error in conv2dDerInput: depth of input (`+u+`) must match input depth for filter `+n.shape[2]+`.`}),T(d===n.shape[3],function(){return`Error in conv2dDerInput: depth of output (`+d+`) must match output depth for filter `+n.shape[3]+`.`}),o!=null&&T(j(i),function(){return`Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+i+`.`});var f=Ri(a),p=ki(s,n.shape,r,1,i,o,!1,f),m=B.runKernelFunc(function(e,t){var r=e.conv2dDerInput(c,n,p);return t([n,c]),r},{dy4D:c,filter:n},function(e,t){var n=t[0],s=t[1];return{dy4D:function(){return jl(e,n,r,i,a,1,o)},filter:function(){return Nl(e,s,n.shape,r,i,a,o)}}});return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}function Ol(e){var t,n=typeof(t=e)==`number`?[t,t,t]:t.length===2?[t[0],t[1],1]:t,r=n[0],i=n[1],a=n[2];return r===1&&i===1&&a===1}function kl(e,t,n,r,i){T(e.length===t.rank,function(){return`Length of inShape (`+e.length+`) and rank of dy (`+t.rank+`) must match`});var a=e,o=t,s=!1;t.rank===4&&(s=!0,o=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,e[0],e[1],e[2],e[3]]);var c=a[4],l=o.shape[4];T(a.length===5,function(){return`Error in conv3dDerInput: inShape must be length 5, but got length `+a.length+`.`}),T(o.rank===5,function(){return`Error in conv3dDerInput: dy must be rank 5, but got rank `+o.rank}),T(n.rank===5,function(){return`Error in conv3dDerInput: filter must be rank 5, but got rank `+n.rank}),T(c===n.shape[3],function(){return`Error in conv3dDerInput: depth of input (`+c+`) must match input depth for filter `+n.shape[3]+`.`}),T(l===n.shape[4],function(){return`Error in conv3dDerInput: depth of output (`+l+`) must match output depth for filter `+n.shape[4]+`.`});var u=Ai(a,n.shape,r,1,i),d=B.runKernelFunc(function(e){return e.conv3dDerInput(o,n,u)},{dy5D:o});return s?d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]):d}var Al=W({conv1d_:function(e,t,n,r,i,a,o){i===void 0&&(i=`NWC`),a===void 0&&(a=1);var s=U(e,`x`,`conv1d`),c=U(t,`filter`,`conv1d`),l=s,u=!1;s.rank===2&&(u=!0,l=s.as3D(1,s.shape[0],s.shape[1])),T(l.rank===3,function(){return`Error in conv1d: input must be rank 3, but got rank `+l.rank+`.`}),T(c.rank===3,function(){return`Error in conv1d: filter must be rank 3, but got rank `+c.rank+`.`}),o!=null&&T(j(r),function(){return`Error in conv1d: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+r+`.`}),T(l.shape[2]===c.shape[1],function(){return`Error in conv1d: depth of input (`+l.shape[2]+`) must match input depth for filter `+c.shape[1]+`.`}),T(Li(n,a),function(){return`Error in conv1D: Either stride or dilation must be 1. Got stride `+n+` and dilation '`+a+`'`}),T(i===`NWC`,function(){return`Error in conv1d: got dataFormat of `+i+` but only NWC is currently supported.`});var d=c.as4D(1,c.shape[0],c.shape[1],c.shape[2]),f=jl(l.as4D(l.shape[0],1,l.shape[1],l.shape[2]),d,[1,n],r,`NHWC`,[1,a],o);return u?f.as2D(f.shape[2],f.shape[3]):f.as3D(f.shape[0],f.shape[2],f.shape[3])}}),jl=W({conv2d_:function(e,t,n,r,i,a,o){i===void 0&&(i=`NHWC`),a===void 0&&(a=[1,1]);var s=U(e,`x`,`conv2d`),c=U(t,`filter`,`conv2d`),l=s,u=!1;s.rank===3&&(u=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),T(l.rank===4,function(){return`Error in conv2d: input must be rank 4, but got rank `+l.rank+`.`}),T(c.rank===4,function(){return`Error in conv2d: filter must be rank 4, but got rank `+c.rank+`.`}),o!=null&&T(j(r),function(){return`Error in conv2d: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+r+`.`});var d=i===`NHWC`?l.shape[3]:l.shape[1];T(d===c.shape[2],function(){return`Error in conv2d: depth of input (`+d+`) must match input depth for filter `+c.shape[2]+`.`}),T(Li(n,a),function(){return`Error in conv2D: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+a+`'`});var f=Ri(i),p=ki(l.shape,c.shape,n,a,r,o,!1,f),m=[c,l],h=B.runKernelFunc(function(e,t){var n=e.conv2d(l,c,p);return t([c,l]),n},{x:l,filter:c},function(e,t){var o=t,s=o[0],c=o[1];return T(Ii(a),function(){return`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '`+a+`'`}),{x:function(){return Pl(c.shape,e,s,n,r,i)},filter:function(){return Nl(c,e,s.shape,n,r,i)}}},`Conv2D`,p,m);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}}),Ml=W({conv3d_:function(e,t,n,r,i,a){i===void 0&&(i=`NDHWC`),a===void 0&&(a=[1,1,1]);var o,s=U(e,`x`,`conv3d`),c=U(t,`filter`,`conv3d`),l=s,u=!1;s.rank===4&&(u=!0,l=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),T(l.rank===5,function(){return`Error in conv3d: input must be rank 5, but got rank `+l.rank+`.`}),T(c.rank===5,function(){return`Error in conv3d: filter must be rank 5, but got rank `+c.rank+`.`}),T(l.shape[4]===c.shape[3],function(){return`Error in conv3d: depth of input (`+l.shape[4]+`) must match input depth for filter `+c.shape[3]+`.`}),T((o=a,Ol(n)||Ol(o)),function(){return`Error in conv3D: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+a+`'`}),T(i===`NDHWC`,function(){return`Error in conv3d: got dataFormat of `+i+` but only NDHWC is currently supported.`});var d=Ai(l.shape,c.shape,n,a,r),f=B.runKernelFunc(function(e,t){var n=e.conv3d(l,c,d);return t([l,c]),n},{x:l,$filter:c},function(e,t){T(Ol(a),function(){return`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '`+a+`'`});var i=t[0],o=t[1];return{x:function(){return kl(i.shape,e,o,n,r)},$filter:function(){return function(e,t,n,r,i){var a=e;e.rank===4&&(a=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]));var o=t;o.rank===4&&(o=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3])),T(a.rank===5,function(){return`Error in conv3dDerFilter: input must be rank 5, but got shape `+a.shape+`.`}),T(o.rank===5,function(){return`Error in conv3dDerFilter: dy must be rank 5, but got shape `+o.shape+`.`}),T(n.length===5,function(){return`Error in conv3dDerFilter: filterShape must be length 5, but got `+n+`.`}),T(a.shape[4]===n[3],function(){return`Error in conv3dDerFilter: depth of input `+a.shape[4]+`) must match input depth in filter (`+n[3]+`.`}),T(o.shape[4]===n[4],function(){return`Error in conv3dDerFilter: depth of dy (`+o.shape[4]+`) must match output depth for filter (`+n[4]+`).`});var s=Ai(a.shape,n,r,1,i);return B.runKernelFunc(function(e){return e.conv3dDerFilter(a,o,s)},{x5D:a,dy5D:o})}(i,e,o.shape,n,r)}}});return u?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Nl=W({conv2dDerFilter_:function(e,t,n,r,i,a,o){a===void 0&&(a=`NHWC`);var s=e;e.rank===3&&(s=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var c=t;c.rank===3&&(c=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),T(s.rank===4,function(){return`Error in conv2dDerFilter: input must be rank 4, but got shape `+s.shape+`.`}),T(c.rank===4,function(){return`Error in conv2dDerFilter: dy must be rank 4, but got shape `+c.shape+`.`}),T(n.length===4,function(){return`Error in conv2dDerFilter: filterShape must be length 4, but got `+n+`.`});var l=a===`NHWC`?s.shape[3]:s.shape[1],u=a===`NHWC`?c.shape[3]:c.shape[1];T(l===n[2],function(){return`Error in conv2dDerFilter: depth of input `+l+`) must match input depth in filter (`+n[2]+`.`}),T(u===n[3],function(){return`Error in conv2dDerFilter: depth of dy (`+u+`) must match output depth for filter (`+n[3]+`).`}),o!=null&&T(j(i),function(){return`Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+i+`.`});var d=Ri(a),f=ki(s.shape,n,r,1,i,o,!1,d);return B.runKernelFunc(function(e){return e.conv2dDerFilter(s,c,f)},{x4D:s,dy4D:c})}}),Pl=W({conv2dDerInput_:Dl}),Fl=W({depthwiseConv2d_:function(e,t,n,r,i,a,o){a===void 0&&(a=[1,1]);var s=U(e,`x`,`depthwiseConv2d`),c=U(t,`filter`,`depthwiseConv2d`),l=s,u=!1;s.rank===3&&(u=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),T(l.rank===4,function(){return`Error in depthwiseConv2d: input must be rank 4, but got rank `+l.rank+`.`}),T(c.rank===4,function(){return`Error in depthwiseConv2d: filter must be rank 4, but got rank `+c.rank+`.`}),T(l.shape[3]===c.shape[2],function(){return`Error in depthwiseConv2d: number of input channels (`+l.shape[3]+`) must match the inChannels dimension in filter `+c.shape[2]+`.`}),a??=[1,1],T(Li(n,a),function(){return`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+a+`'`}),o!=null&&T(j(r),function(){return`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+r+`.`});var d=ki(l.shape,c.shape,n,a,r,o,!0),f=[l,c],p=B.runKernelFunc(function(e,t){var n=e.depthwiseConv2D(l,c,d);return t([l,c]),n},{x:l,filter:c},function(e,t){T(Ii(a),function(){return`Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '`+a+`'`});var n=t[0],r=t[1];return{x:function(){return Il(n.shape,e,r,d)},filter:function(){return Ll(n,e,r.shape,d)}}},`DepthwiseConv2dNative`,d,f);return u?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),Il=W({depthwiseConv2dDerInput_:function(e,t,n,r){var i=t,a=!1;t.rank===3&&(a=!0,i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var o=B.runKernelFunc(function(e){return e.depthwiseConv2DDerInput(i,n,r)},{dy4D:i});return a?o.as3D(o.shape[1],o.shape[2],o.shape[3]):o}}),Ll=W({depthwiseConv2dDerFilter_:function(e,t,n,r){var i=e;e.rank===3&&(i=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),B.runKernelFunc(function(e){return e.depthwiseConv2DDerFilter(i,a,r)},{x4D:i,dy4D:a})}}),Rl=W({separableConv2d_:function(e,t,n,r,i,a,o){a===void 0&&(a=[1,1]),o===void 0&&(o=`NHWC`);var s=U(e,`x`,`separableConv2d`),c=U(t,`depthwiseFilter`,`separableConv2d`),l=U(n,`pointwiseFilter`,`separableConv2d`),u=s,d=!1;if(s.rank===3&&(d=!0,u=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),o===`NCHW`)throw Error(`separableConv2d currently does not support dataFormat NCHW; only NHWC is supported`);T(u.rank===4,function(){return`Error in separableConv2d: input must be rank 4, but got rank `+u.rank+`.`}),T(c.rank===4,function(){return`Error in separableConv2d: depthwise filter must be rank 4, but got rank `+c.rank+`.`}),T(l.rank===4,function(){return`Error in separableConv2d: pointwise filter must be rank 4, but got rank `+c.rank+`.`}),T(l.shape[0]===1,function(){return`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got `+l.shape[0]+`.`}),T(l.shape[1]===1,function(){return`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got `+l.shape[1]+`.`});var f=c.shape[2],p=c.shape[3];T(l.shape[2]===f*p,function(){return`Error in separableConv2d: the third dimension of pointwise filter must be `+f*p+`, but got `+l.shape[2]+`.`});var m=jl(Fl(u,c,r,i,o,a),l,1,`valid`,o);return d?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),zl=W({conv2dTranspose_:function(e,t,n,r,i,a){return Dl(n,U(e,`x`,`conv2dTranspose`),U(t,`filter`,`conv2dTranspose`),r,i,`NHWC`,a)}}),Bl=W({conv3dTranspose_:function(e,t,n,r,i){return kl(n,U(e,`x`,`conv3dTranspose`),U(t,`filter`,`conv3dTranspose`),r,i)}}),Vl=W({matMul_:function(e,t,n,r){var i;n===void 0&&(n=!1),r===void 0&&(r=!1);var a=U(e,`a`,`matMul`),o=U(t,`b`,`matMul`);i=rt(a,o),a=i[0],o=i[1];var s=n?a.shape[a.rank-2]:a.shape[a.rank-1],c=r?o.shape[o.rank-1]:o.shape[o.rank-2],l=n?a.shape[a.rank-1]:a.shape[a.rank-2],u=r?o.shape[o.rank-2]:o.shape[o.rank-1],d=a.shape.slice(0,-2),f=o.shape.slice(0,-2),p=k(d),m=k(f);T(2<=a.rank&&2<=o.rank&&a.rank===o.rank,function(){return`Error in matMul: inputs must have the same rank of at least 2, got ranks `+a.rank+` and `+o.rank+`.`}),T(A(d,f),function(){return`Error in matMul: outer dimensions (`+d+`) and (`+f+`) of Tensors with shapes `+a.shape+` and `+o.shape+` must match.`}),T(s===c,function(){return`Error in matMul: inner shapes (`+s+`) and (`+c+`) of Tensors with shapes `+a.shape+` and `+o.shape+` and transposeA=`+n+` and transposeB=`+r+` must match.`});var h=a.shape.slice(0,-2).concat([l,u]),g=n?a.as3D(p,s,l):a.as3D(p,l,s),_=r?o.as3D(m,u,c):o.as3D(m,c,u),v={transposeA:n,transposeB:r};return B.runKernelFunc(function(e,t){var i=e.batchMatMul(g,_,n,r);return t([g,_]),i},{a:g,b:_},function(e,t){var i=t,a=i[0],o=i[1];return n||r?!n&&r?{a:function(){return e.matMul(o,!1,!1)},b:function(){return e.matMul(a,!0,!1)}}:n&&!r?{a:function(){return o.matMul(e,!1,!0)},b:function(){return a.matMul(e,!1,!1)}}:{a:function(){return o.matMul(e,!0,!0)},b:function(){return e.matMul(a,!0,!0)}}:{a:function(){return e.matMul(o,!1,!0)},b:function(){return a.matMul(e,!0,!1)}}},`BatchMatMul`,v).reshape(h)}}),Hl=W({dot_:function(e,t){var n=U(e,`t1`,`dot`),r=U(t,`t2`,`dot`);T(!(n.rank!==1&&n.rank!==2||r.rank!==1&&r.rank!==2),function(){return`Error in dot: inputs must all be rank 1 or 2, but got ranks `+n.rank+` and `+r.rank+`.`});var i=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];return T(i===a,function(){return`Error in dot: inner dimensions of inputs must match, but got `+i+` and `+a+`.`}),n.rank===1&&r.rank===1?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():n.rank===1&&r.rank===2?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():n.rank===2&&r.rank===1?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}}),Ul=W({outerProduct_:function(e,t){var n=U(e,`v1`,`outerProduct`),r=U(t,`v2`,`outerProduct`);return T(n.rank===1&&r.rank===1,function(){return`Error in outerProduct: inputs must be rank 1, but got ranks `+n.rank+` and `+r.rank+`.`}),n.as2D(-1,1).matMul(r.as2D(1,-1))}}),Wl=W({reverse_:function(e,t){var n=U(e,`x`,`reverse`);if(n.rank===0)return n.clone();var r=I(t,n.shape);return B.runKernelFunc(function(e){return e.reverse(n,r)},{$x:n},function(e){return{$x:function(){return e.reverse(r)}}}).reshapeAs(n)}}),Gl=W({reverse1d_:function(e){var t=U(e,`x`,`reverse`);return T(t.rank===1,function(){return`Error in reverse1D: x must be rank 1 but got rank `+t.rank+`.`}),Wl(t,0)}}),Kl=W({reverse2d_:function(e,t){var n=U(e,`x`,`reverse`);return T(n.rank===2,function(){return`Error in reverse2D: x must be rank 2 but got rank `+n.rank+`.`}),Wl(n,t)}}),ql=W({reverse3d_:function(e,t){var n=U(e,`x`,`reverse`);return T(n.rank===3,function(){return`Error in reverse3D: x must be rank 3 but got rank `+n.rank+`.`}),Wl(n,t)}}),Jl=W({reverse4d_:function(e,t){var n=U(e,`x`,`reverse`);return T(n.rank===4,function(){return`Error in reverse4D: x must be rank 4 but got rank `+n.rank+`.`}),Wl(n,t)}});function Yl(e,t,n,r,i,a){var o=U(e,`x`,`maxPool`),s=o,c=!1;o.rank===3&&(c=!0,s=o.as4D(1,o.shape[0],o.shape[1],o.shape[2])),r??=[1,1],T(s.rank===4,function(){return`Error in maxPool: input must be rank 4 but got rank `+s.rank+`.`}),T(Li(n,r),function(){return`Error in maxPool: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+r+`'`}),a!=null&&T(j(i),function(){return`Error in maxPool: pad must be an integer when using, dimRoundingMode `+a+` but got pad `+i+`.`});var l=Di(s.shape,t,n,r,i,a);if(l.filterWidth===1&&l.filterHeight===1&&A(l.inShape,l.outShape))return o.clone();var u=[s],d=B.runKernelFunc(function(e,t){var n=e.maxPool(s,l);return t([s,n]),n},{x:s},function(e,a){var o=a[0],s=a[1];return{x:function(){return function(t,n,r,i,a,o,s){var c=U(e,`dy`,`maxPoolBackprop`),l=U(n,`input`,`maxPoolBackprop`),u=U(r,`output`,`maxPoolBackprop`);T(l.rank===c.rank,function(){return`Rank of input (`+l.rank+`) does not match rank of dy (`+c.rank+`)`}),o??=[1,1],T(Li(a,o),function(){return`Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides `+a+` and dilations '`+o+`'`}),T(c.rank===4,function(){return`Error in maxPoolBackprop: dy must be rank 4 but got rank `+c.rank+`.`}),T(l.rank===4,function(){return`Error in maxPoolBackprop: input must be rank 4 but got rank `+l.rank+`.`});var d=Di(l.shape,i,a,o,s,void 0);return B.runKernelFunc(function(e){return e.maxPoolBackprop(c,l,u,d)},{$dy:c,$input:l})}(0,o,s,t,n,r,i)}}},`MaxPool`,l,u);return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function Xl(e,t,n,r,i,a){var o=U(e,`x`,`avgPool`,`float32`);r??=[1,1],T(Li(n,r),function(){return`Error in avgPool: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+r+`'`});var s=o,c=!1;o.rank===3&&(c=!0,s=o.as4D(1,o.shape[0],o.shape[1],o.shape[2])),T(s.rank===4,function(){return`Error in avgPool: x must be rank 4 but got rank `+s.rank+`.`}),a!=null&&T(j(i),function(){return`Error in avgPool: pad must be an integer when using, dimRoundingMode `+a+` but got pad `+i+`.`});var l=Di(s.shape,t,n,r,i,a);if(l.filterWidth===1&&l.filterHeight===1&&A(l.inShape,l.outShape))return o.clone();var u=B.runKernelFunc(function(e){return e.avgPool(s,l)},{x:s},function(e){return{x:function(){return function(t,n,r,i,a,o){var s=U(e,`dy`,`avgPoolBackprop`),c=U(n,`input`,`avgPoolBackprop`);T(c.rank===s.rank,function(){return`Rank of input (`+c.rank+`) does not match rank of dy (`+s.rank+`)`}),a??=[1,1],T(Li(i,a),function(){return`Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides `+i+` and dilations '`+a+`'`});var l=c,u=s,d=!1;c.rank===3&&(d=!0,l=c.as4D(1,c.shape[0],c.shape[1],c.shape[2]),u=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),T(u.rank===4,function(){return`Error in avgPoolBackprop: dy must be rank 4 but got rank `+u.rank+`.`}),T(l.rank===4,function(){return`Error in avgPoolBackprop: input must be rank 4 but got rank `+l.rank+`.`});var f=Di(l.shape,r,i,a,o),p=B.runKernelFunc(function(e){return e.avgPoolBackprop(u,l,f)},{dy4D:u,input4D:l});return d?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}(0,s,t,n,r,i)}}},`AvgPool`,l);return u=u.cast(o.dtype),c?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}var Zl=W({maxPool_:function(e,t,n,r,i){return Yl(e,t,n,1,r,i)}}),Ql=W({avgPool_:function(e,t,n,r,i){return Xl(e,t,n,1,r,i)}}),$l=W({pool_:function(e,t,n,r,i,a){i??=[1,1],a??=1,r===0&&(r=`valid`);var o=U(e,`x`,`maxPool`),s=o,c=!1;o.rank===3&&(c=!0,s=o.as4D(1,o.shape[0],o.shape[1],o.shape[2])),T(Li(a,i),function(){return`Error in pool: Either strides or dilations must be 1. Got strides `+a+` and dilations '`+i+`'`});var l,u,d,f,p,m,h=Di(s.shape,t,a,i,r),g=[h.dilationHeight,h.dilationWidth];l=r===`same`?(u=[h.filterHeight,h.filterWidth],d=g,f=u.map(function(e,t){return e+(e-1)*(d[t]-1)}).map(function(e){return e-1}),p=f.map(function(e){return Math.floor(e/2)}),m=f.map(function(e,t){return e-p[t]}),f.map(function(e,t){return[p[t],m[t]]})):[[0,0],[0,0]];var _,v,y,b,x,S,C,w,E=g[0]===1&&g[1]===1,D=(_=[h.inHeight,h.inWidth],v=g,b=(y=l).map(function(e){return e[0]}),x=y.map(function(e){return e[1]}),S=_.concat(b,x),C=v.map(function(e,t){return(e-S[t]%e)%e}),w=x.map(function(e,t){return e+C[t]}),[v.map(function(e,t){return[b[t],w[t]]}),v.map(function(e,t){return[0,C[t]]})]),O=D[1],k=E?r:`valid`,A=E?s:Wr(s,g,D[0]),j=(n===`avg`?function(){return Xl(A,t,a,1,k)}:function(){return Yl(A,t,a,1,k)})(),M=E?j:wr(j,g,O);return c?M.as3D(M.shape[1],M.shape[2],M.shape[3]):M}}),eu=W({maxPool3d_:function(e,t,n,r,i,a,o){a===void 0&&(a=`NDHWC`);var s=U(e,`x`,`maxPool3d`),c=s,l=!1;s.rank===4&&(l=!0,c=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),o??=[1,1,1],T(c.rank===5,function(){return`Error in maxPool3d: x must be rank 5 but got rank `+c.rank+`.`}),T(a===`NDHWC`,function(){return`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of `+a}),T(Li(n,o),function(){return`Error in maxPool3d: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+o+`'`}),i!=null&&T(j(r),function(){return`Error in maxPool3d: pad must be an integer when using, dimRoundingMode `+i+` but got pad `+r+`.`});var u=Oi(c.shape,t,n,o,r,i,a),d=B.runKernelFunc(function(e,t){var n=e.maxPool3d(c,u);return t([c,n]),n},{x:c},function(e,a){var s=a[0],c=a[1];return{x:function(){return function(t,n,r,i,a,o,s,c){var l=U(e,`dy`,`maxPool3dBackprop`),u=U(n,`input`,`maxPool3dBackprop`),d=U(r,`output`,`maxPool3dBackprop`),f=l,p=u,m=d,h=!1;u.rank===4&&(h=!0,f=l.as5D(1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]),p=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]),m=d.as5D(1,d.shape[0],d.shape[1],d.shape[2],d.shape[3])),T(f.rank===5,function(){return`Error in maxPool3dBackprop: dy must be rank 5 but got rank `+f.rank+`.`}),T(p.rank===5,function(){return`Error in maxPool3dBackprop: input must be rank 5 but got rank `+p.rank+`.`}),T(m.rank===5,function(){return`Error in maxPool3dBackprop: output must be rank 5 but got rank `+m.rank+`.`}),o??=[1,1,1],T(Li(a,o),function(){return`Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides `+a+` and dilations '`+o+`'`}),c!=null&&T(j(s),function(){return`Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode `+c+` but got pad `+s+`.`});var g=Oi(p.shape,i,a,o,s,c),_=B.runKernelFunc(function(e){return e.maxPool3dBackprop(f,p,m,g)},{dy5D:f,input5D:p});return h?_.as4D(_.shape[1],_.shape[2],_.shape[3],_.shape[4]):_}(0,s,c,t,n,o,r,i)}}});return l?d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]):d}}),tu=W({avgPool3d_:function(e,t,n,r,i,a,o){a===void 0&&(a=`NDHWC`);var s=U(e,`x`,`avgPool3d`,`float32`),c=s,l=!1;s.rank===4&&(l=!0,c=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),o??=[1,1,1],T(c.rank===5,function(){return`Error in avgPool3d: x must be rank 5 but got rank `+c.rank+`.`}),T(a===`NDHWC`,function(){return`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of `+a}),T(Li(n,o),function(){return`Error in avgPool3d: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+o+`'`}),i!=null&&T(j(r),function(){return`Error in avgPool3d: pad must be an integer when using, dimRoundingMode `+i+` but got pad `+r+`.`});var u=Oi(c.shape,t,n,o,r,i,a),d=B.runKernelFunc(function(e){return e.avgPool3d(c,u)},{x:c},function(e){return{x:function(){return function(t,n,r,i,a,o,s){var c=U(e,`dy`,`avgPool3dBackprop`),l=U(n,`input`,`avgPool3dBackprop`),u=c,d=l,f=!1;l.rank===4&&(f=!0,u=c.as5D(1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]),d=l.as5D(1,l.shape[0],l.shape[1],l.shape[2],l.shape[3])),T(u.rank===5,function(){return`Error in avgPool3dBackprop: dy must be rank 5 but got rank `+u.rank+`.`}),T(d.rank===5,function(){return`Error in avgPool3dBackprop: input must be rank 5 but got rank `+d.rank+`.`}),a??=[1,1,1],T(Li(i,a),function(){return`Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides `+i+` and dilations '`+a+`'`}),s!=null&&T(j(o),function(){return`Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode `+s+` but got pad `+o+`.`});var p=Oi(d.shape,r,i,a,o,s),m=B.runKernelFunc(function(e){return e.avgPool3dBackprop(u,d,p)},{dy5D:u,input5D:d});return f?m.as4D(m.shape[1],m.shape[2],m.shape[3],m.shape[4]):m}(0,c,t,n,o,r,i)}}});return d=d.cast(c.dtype),l?d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]):d}}),nu=W({slice_:function(e,t,n){var r,i,a=U(e,`x`,`slice`);if(a.rank===0)throw Error(`Slicing scalar is not possible`);(r=typeof t==`number`?[t].concat(Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(e){T(e!==-1,function(){return`slice() does not support negative begin indexing.`})}),i=(i=n==null?Array(a.rank).fill(-1):typeof n==`number`?[n].concat(Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(Array(a.rank-n.length).fill(-1)):n).map(function(e,t){return 0<=e?e:(T(e===-1,function(){return`Negative size values should be exactly -1 but got `+e+` for the slice() size at index `+t+`.`}),a.shape[t]-r[t])}),ci(a,r,i);var o=a.shape,s={begin:r,size:i};return B.runKernelFunc(function(e){return e.slice(a,r,i)},{x:a},function(e){for(var t=[],n=0;n<e.rank;n++)t.push([r[n],o[n]-r[n]-i[n]]);return{x:function(){return e.pad(t)}}},`Slice`,s)}}),ru=W({slice1d_:function(e,t,n){var r=U(e,`x`,`slice1d`);return T(r.rank===1,function(){return`slice1d expects a rank-1 tensor, but got a rank-`+r.rank+` tensor`}),nu(r,[t],[n])}}),iu=W({slice2d_:function(e,t,n){var r=U(e,`x`,`slice2d`);return T(r.rank===2,function(){return`slice2d expects a rank-2 tensor, but got a rank-`+r.rank+` tensor`}),nu(r,t,n)}}),au=W({slice3d_:function(e,t,n){var r=U(e,`x`,`slice3d`);return T(r.rank===3,function(){return`slice3d expects a rank-3 tensor, but got a rank-`+r.rank+` tensor`}),nu(r,t,n)}}),ou=W({slice4d_:function(e,t,n){var r=U(e,`x`,`slice4d`);return T(r.rank===4,function(){return`slice4d expects a rank-4 tensor, but got a rank-`+r.rank+` tensor`}),nu(r,t,n)}});function su(e,t,n,r,i){return t.rank<n.rank&&(t=t.reshape(On(t.shape,r))),e.rank<n.rank&&(e=e.reshape(On(e.shape,r))),{x:function(){var r=e.mul(n.equal(t).cast(e.dtype));return i==null?r:r.transpose(i)}}}var cu=W({all_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=U(e,`x`,`all`,`bool`),i=I(t,r.shape),a=i,o=An(a,r.rank);o!=null&&(r=r.transpose(o),a=Mn(a.length,r.rank));var s=B.runKernelFunc(function(e){return e.all(r,a)},{$x:r});if(n){var c=On(s.shape,i);return s.reshape(c)}return s}}),lu=W({any_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=U(e,`x`,`any`,`bool`),i=I(t,r.shape),a=i,o=An(a,r.rank);o!=null&&(r=r.transpose(o),a=Mn(a.length,r.rank));var s=B.runKernelFunc(function(e){return e.any(r,a)},{$x:r});if(n){var c=On(s.shape,i);return s.reshape(c)}return s}}),uu=W({argMax_:function(e,t){t===void 0&&(t=0);var n=U(e,`x`,`argMax`);t??=0;var r=I(t,n.shape),i=An(r,n.rank);i!=null&&(n=n.transpose(i),r=Mn(r.length,n.rank));var a={axis:r[0]},o=[n];return B.runKernelFunc(function(e,t){var i=e.argMax(n,r[0]);return t([n]),i},{x:n},function(e,t){var n=t[0];return{x:function(){return $n(n)}}},`ArgMax`,a,o)}}),du=W({argMin_:function(e,t){t===void 0&&(t=0);var n=U(e,`x`,`argMin`);t??=0;var r=I(t,n.shape),i=An(r,n.rank);return i!=null&&(n=n.transpose(i),r=Mn(r.length,n.rank)),B.runKernelFunc(function(e,t){var i=e.argMin(n,r[0]);return t([n]),i},{$x:n},function(e,t){var n=t[0];return{$x:function(){return $n(n)}}})}}),fu=W({logSumExp_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=U(e,`x`,`logSumExp`),i=I(t,r.shape),a=r.max(i,!0),o=r.sub(a).exp().sum(i).log(),s=a.reshape(o.shape).add(o);if(n){var c=On(s.shape,i);return s.reshape(c)}return s}}),pu=W({max_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=U(e,`x`,`max`),i=r,a=I(t,r.shape),o=a,s=An(o,r.rank);s!=null&&(r=r.transpose(s),o=Mn(o.length,r.rank));var c=[r],l=B.runKernelFunc(function(e,t){var n=e.max(r,o);return t([i,n]),n},{x:r},function(e,t){return su(e,t[1],t[0],a,s)},`Max`,{axes:o},c,[!0]);if(n){var u=On(l.shape,a);l=l.reshape(u)}return l}}),mu=W({mean_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=U(e,`x`,`mean`),i=I(t,r.shape),a=k(Dn(r.shape,i)[1]);return _i(function(e){var r=G(a);return{value:(r.dtype===e.dtype?e:e.cast(r.dtype)).div(r).sum(t,n),gradFunc:function(t){var n=e.shape.slice();return i.forEach(function(e){n[e]=1}),t.reshape(n).mul(qn(e.shape,`float32`)).div(a)}}})(r)}}),hu=W({min_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=U(e,`x`,`min`),i=r,a=I(t,r.shape),o=a,s=An(o,r.rank);s!=null&&(r=r.transpose(s),o=Mn(o.length,r.rank));var c=[r],l=B.runKernelFunc(function(e,t){var n=e.min(r,o);return t([i,n]),n},{x:r},function(e,t){return su(e,t[1],t[0],a,s)},`Min`,{axes:o},c,[!0]);if(n){var u=On(l.shape,a);l=l.reshape(u)}return l}}),gu=W({moments_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=I(t,(e=U(e,`x`,`moments`)).shape),i=e.mean(r,n),a=i.shape;return n||(a=On(i.shape,r)),{mean:i,variance:e.toFloat().sub(i.reshape(a)).square().mean(r,n)}}}),_u=W({sum_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=U(e,`x`,`sum`);r.dtype===`bool`&&(r=r.toInt());var i=I(t,r.shape);return _i(function(e){var t=An(i,e.rank),r=i,a=e;t!=null&&(a=e.transpose(t),r=Mn(r.length,e.rank));function o(t){var n=e.shape.slice();return i.forEach(function(e){n[e]=1}),t.reshape(n).mul(qn(e.shape,`float32`))}var s={axes:r},c=B.runKernelFunc(function(e){return e.sum(a,r)},{x:a},function(e){return{x:function(){return o(e)}}},`Sum`,s);if(n){var l=On(c.shape,i);c=c.reshape(l)}return{value:c,gradFunc:o}})(r)}}),vu=W({prod_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=U(e,`x`,`prod`);r.dtype===`bool`&&(r=r.toInt());var i=I(t,r.shape),a=An(i,r.rank),o=i,s=r;a!=null&&(s=r.transpose(a),o=Mn(o.length,r.rank));var c=B.runKernelFunc(function(e){return e.prod(s,o)},{permutedX:s});if(n){var l=On(c.shape,i);c=c.reshape(l)}return c}}),yu=W({elu_:function(e){var t=U(e,`x`,`elu`);return B.runKernelFunc(function(e,n){var r=e.elu(t);return n([r]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){return B.runKernelFunc(function(t){return t.eluDer(e,n)},{dy:e,y:n})}}})}}),bu=W({leakyRelu_:function(e,t){t===void 0&&(t=.2);var n=U(e,`x`,`leakyRelu`);return Zc(G(t).mul(n),n)}}),xu=W({prelu_:function(e,t){var n=U(e,`x`,`prelu`),r=U(t,`alpha`,`prelu`);return B.runKernelFunc(function(e,t){var i=e.prelu(n,r);return t([n,r]),i},{x:n,alpha:r},function(e,t){var n=t[0],r=t[1],i=n.greater(0);return{x:function(){return Hc(i,e,e.mul(r))},alpha:function(){var t=Hc(i,$n(e),e.mul(n)),a=Ti(r.shape,e.shape);return 0<a.length&&(t=t.sum(a)),t.reshape(r.shape)}}},`Prelu`)}}),Su=W({relu_:function(e){var t=U(e,`x`,`relu`);return t.dtype===`bool`?t.toInt():B.runKernelFunc(function(e,n){var r=e.relu(t);return n([t]),r},{x:t},function(e,t){var n=t[0];return{x:function(){return e.mulStrict(n.step().toFloat())}}},`Relu`)}}),Cu=W({relu6_:function(e){var t=U(e,`x`,`relu6`);return t.dtype===`bool`?t.toInt():B.runKernelFunc(function(e,n){var r=e.relu6(t);return n([t]),r},{x:t},function(e,t){var n=t[0],r=n.lessEqual(6).mul(n.step());return{x:function(){return e.mulStrict(r.toFloat())}}},`Relu6`)}}),wu=W({selu_:function(e){var t=U(e,`x`,`selu`);return B.runKernelFunc(function(e,n){var r=e.selu(t);return n([t]),r},{$x:t},function(e,t){var n=t[0];return{$x:function(){var t=n.greater(G(0)),r=G(bs),i=G(xs);return Hc(t,e.mul(i),e.mul(r).mul(n.toFloat().exp()))}}})}}),Tu=W({transpose_:function(e,t){var n=U(e,`x`,`transpose`);if(t??=n.shape.map(function(e,t){return t}).reverse(),T(n.rank===t.length,function(){return`Error in transpose: rank of input `+n.rank+` must match length of perm `+t+`.`}),t.forEach(function(e){T(0<=e&&e<n.rank,function(){return`All entries in 'perm' must be between 0 and `+(n.rank-1)+` but got `+t})}),n.rank<=1)return n.clone();var r={perm:t};return B.runKernelFunc(function(e){return e.transpose(n,t)},{x:n},function(e){var n=jn(t);return{x:function(){return e.transpose(n)}}},`Transpose`,r)}}),Eu=W({localResponseNormalization_:function(e,t,n,r,i){t===void 0&&(t=5),n===void 0&&(n=1),r===void 0&&(r=1),i===void 0&&(i=.5);var a=U(e,`x`,`localResponseNormalization`);T(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+`.`}),T(j(t),function(){return`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius `+t+`.`});var o=a,s=!1;a.rank===3&&(s=!0,o=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var c=B.runKernelFunc(function(e,a){var s=e.localResponseNormalization4D(o,t,n,r,i);return a([o,s]),s},{x4D:o},function(e,a){var o=a[0],s=a[1];return{x4D:function(){return B.runKernelFunc(function(a){return a.LRNGrad(e,o,s,t,n,r,i)},{})}}});return s?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}}),Du=W({norm_:function(e,t,n,r){t===void 0&&(t=`euclidean`),n===void 0&&(n=null),r===void 0&&(r=!1);var i=function e(t,n,r){if(r===void 0&&(r=null),t.rank===0)return t.abs();if(t.rank!==1&&r===null)return e(t.reshape([-1]),n,r);if(t.rank===1||typeof r==`number`||Array.isArray(r)&&r.length===1){if(n===1)return t.abs().sum(r);if(n===1/0)return t.abs().max(r);if(n===-1/0)return t.abs().min(r);if(n===`euclidean`||n===2)return t.abs().pow(G(2,`int32`)).sum(r).sqrt();throw Error(`Error in norm: invalid ord value: `+n)}if(Array.isArray(r)&&r.length===2){if(n===1)return t.abs().sum(r[0]).max(r[1]-1);if(n===1/0)return t.abs().sum(r[1]).max(r[0]);if(n===-1/0)return t.abs().sum(r[1]).min(r[0]);if(n===`fro`||n===`euclidean`)return t.square().sum(r).sqrt();throw Error(`Error in norm: invalid ord value: `+n)}throw Error(`Error in norm: invalid axis: `+r)}(e=U(e,`x`,`norm`),t,n),a=i.shape;if(r){var o=I(n,e.shape);a=On(i.shape,o)}return i.reshape(a)}}),Ou=W({basicLSTMCell_:function(e,t,n,r,i,a){var o=U(e,`forgetBias`,`basicLSTMCell`),s=U(t,`lstmKernel`,`basicLSTMCell`),c=U(n,`lstmBias`,`basicLSTMCell`),l=U(r,`data`,`basicLSTMCell`),u=U(i,`c`,`basicLSTMCell`),d=U(a,`h`,`basicLSTMCell`),f=l.concat(d,1).matMul(s).add(c),p=f.shape[0],m=f.shape[1]/4,h=[p,m],g=f.slice([0,0],h),_=f.slice([0,m],h),v=f.slice([0,2*m],h),y=f.slice([0,3*m],h),b=g.sigmoid().mulStrict(_.tanh()).addStrict(u.mulStrict(o.add(v).sigmoid()));return[b,b.tanh().mulStrict(y.sigmoid())]}}),ku=W({multiRNNCell_:function(e,t,n,r){for(var i=U(t,`data`,`multiRNNCell`),a=wn(n,`c`,`multiRNNCell`),o=wn(r,`h`,`multiRNNCell`),s=i,c=[],l=0;l<e.length;l++){var u=e[l](s,a[l],o[l]);c.push(u[0]),c.push(u[1]),s=u[1]}var d=[],f=[];for(l=0;l<c.length;l+=2)d.push(c[l]),f.push(c[l+1]);return[d,f]}}),Au=W({movingAverage_:function(e,t,n,r,i){i===void 0&&(i=!0);var a=U(e,`v`,`movingAverage`),o=U(t,`x`,`movingAverage`),s=U(n,`decay`,`movingAverage`);it(a,o),T(A(a.shape,o.shape),function(){return`Shape mismatch in v and x`});var c=G(1),l=c.sub(s),u=o.sub(a).mul(l);if(i){T(r!=null,function(){return`When using zeroDebias: true, step is required.`});var d=U(r,`step`,`movingAverage`);u=u.div(c.sub(al(s,d)))}return a.add(u)}}),ju=W({stridedSlice_:function(e,t,n,r,i,a,o,s,c){if(i===void 0&&(i=0),a===void 0&&(a=0),o===void 0&&(o=0),s===void 0&&(s=0),c===void 0&&(c=0),r??=Array(t.length),o!==0)throw Error(`ellipsis mask is not yet supported`);var l=U(e,`x`,`stridedSlice`),u=li(s),d=l.shape.slice();u.forEach(function(e){t[e]=0,n[e]=1,d.splice(e,0,1)}),l=l.reshape(d);for(var f=0;f<l.rank;f++)t[f]=di(i,t,r,l.shape,f),n[f]=fi(a,n,r,l.shape,f),r[f]=r[f]||1;var p=li(c);p.forEach(function(e){n[e]=t[e]+1,r[e]=1});var m=ui(t,n,r),h=m.filter(function(e,t){return p.indexOf(t)===-1});return r.every(function(e){return e===1})?nu(l,t,m).reshape(h):B.runKernelFunc(function(e){return e.stridedSlice(l,t,n,r)},{$x:l}).reshape(h)}}),Mu=W({topk_:function(e,t,n){t===void 0&&(t=1),n===void 0&&(n=!0);var r=U(e,`x`,`topk`);if(r.rank===0)throw Error(`topk() expects the input to be of rank 1 or higher`);var i=r.shape[r.shape.length-1];if(i<t)throw Error(`'k' passed to topk() must be <= the last dimension (`+i+`) but got `+t);var a=B.runKernelFunc(function(e){return e.topk(r,t,n)},{$x:r});return{values:a[0],indices:a[1]}}}),Nu=W({scatterND_:function(e,t,n){var r=U(e,`indices`,`scatterND`,`int32`),i=U(t,`updates`,`scatterND`);return ai(i,r,n),B.runKernelFunc(function(e){return e.scatterND(r,i,n)},{indices:r,updates:i},null,`ScatterNd`,{shape:n})}}),Pu=W({fft_:function(e){T(e.dtype===`complex64`,function(){return`The dtype for tf.spectral.fft() must be complex64 but got `+e.dtype+`.`});var t=e.shape[e.shape.length-1],n=e.size/t,r=e.as2D(n,t);return B.runKernelFunc(function(e){return e.fft(r)},{input:e}).reshape(e.shape)}}),Fu=W({ifft_:function(e){T(e.dtype===`complex64`,function(){return`The dtype for tf.spectral.ifft() must be complex64 but got `+e.dtype+`.`});var t=e.shape[e.shape.length-1],n=e.size/t,r=e.as2D(n,t);return B.runKernelFunc(function(e){return e.ifft(r)},{input:e}).reshape(e.shape)}}),Iu=W({rfft_:function(e,t){T(e.dtype===`float32`,function(){return`The dtype for rfft() must be real value but got `+e.dtype});var n,r=e.shape[e.shape.length-1],i=e.size/r;if(t!=null&&t<r){var a=e.shape.map(function(e){return 0}),o=e.shape.map(function(e){return e});o[e.shape.length-1]=t,n=e.slice(a,o),r=t}else if(t!=null&&r<t){var s=e.shape.map(function(e){return e});s[e.shape.length-1]=t-r,n=e.concat(Jn(s),e.shape.length-1),r=t}else n=e;var c=n.zerosLike(),l=Pu(Fn(n,c).as2D(i,r)),u=Math.floor(r/2)+1,d=In(l),f=Ln(l),p=d.split([u,r-u],d.shape.length-1),m=f.split([u,r-u],f.shape.length-1),h=n.shape.slice();return h[n.shape.length-1]=u,Fn(p[0],m[0]).reshape(h)}}),Lu=W({irfft_:function(e){var t=e.shape[e.shape.length-1],n=e.size/t;if(t<=2){var r=e.as2D(n,t),i=Fu(r);return In(i)}var a=[n,2*(t-1)],o=In(e).as2D(n,t),s=Ln(e).as2D(n,t),c=o.slice([0,1],[n,t-2]).reverse(1),l=s.slice([0,1],[n,t-2]).reverse(1).mul(G(-1));return r=Fn(o.concat(c,1),s.concat(l,1)).as2D(a[0],a[1]),i=Fu(r),In(i)}}),Ru=Object.freeze({fft:Pu,ifft:Fu,rfft:Iu,irfft:Lu}),zu=W({sparseToDense_:function(e,t,n,r){r===void 0&&(r=0);var i=U(e,`sparseIndices`,`sparseToDense`,`int32`),a=U(t,`sparseValues`,`sparseToDense`),o=U(r,`defaultValue`,`sparseToDense`,a.dtype);return function(e,t,n,r){if(e.dtype!==`int32`)throw Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was `+e.dtype+`.`);if(2<e.rank)throw Error(`sparseIndices should be a scalar, vector, or matrix, but got shape `+e.shape+`.`);var i=0<e.rank?e.shape[0]:1,a=1<e.rank?e.shape[1]:1;if(n.length!==a)throw Error(`outputShape has incorrect number of elements:, `+n.length+`, should be: `+a+`.`);var o=t.size;if(t.rank!==0&&(t.rank!==1||o!==i))throw Error(`sparseValues has incorrect shape `+t.shape+`, should be [] or [`+i+`]`);if(t.dtype!==r.dtype)throw Error(`sparseValues.dtype must match defaultValues.dtype`)}(i,a,n,o),B.runKernelFunc(function(e){return e.sparseToDense(i,a,n,o)},{$sparseIndices:i,$sparseValues:a,$defaultValue:o})}}),Bu=W({gatherND_:function(e,t){var n=U(t,`indices`,`gatherND`,`int32`),r=U(e,`x`,`gatherND`);return B.runKernelFunc(function(e){return e.gatherND(r,n)},{x:r,indices:n},null,`GatherNd`)}}),Vu=W({diag_:function(e){var t=U(e,`x`,`diag`).flatten(),n=e.shape.concat(e.shape);return B.runKernelFunc(function(e){return e.diag(t)},{$x:t}).reshape(n)}}),Hu=W({dropout_:function(e,t,n,r){var i=U(e,`x`,`dropout`);if(T(i.dtype===`float32`,function(){return`x has to be a floating point tensor since it's going to be scaled, but got a `+i.dtype+` tensor instead.`}),T(0<=t&&t<1,function(){return`rate must be a float in the range [0, 1), but got `+t+`.`}),t===0)return e instanceof Be?i.clone():i;var a=function(e,t){if(t==null)return e.shape.slice();if(A(e.shape,t)||e.shape.length!==t.length)return t;for(var n=[],r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}(i,n),o=1-t,s=Hr(a,0,1,`float32`,r).add(o).floor().div(o);return i.mul(s)}});function Uu(e,t,n){for(var r=1-e%2,i=new Float32Array(e),a=0;a<e;++a){var o=2*Math.PI*a/(e+r-1);i[a]=t-n*Math.cos(o)}return Bn(i,`float32`)}function Wu(e,t,n){return n===void 0&&(n=1),s(this,void 0,void 0,function(){var r,i,a,o,s,l,u,d,f,p,m,h,g,_;return c(this,function(c){switch(c.label){case 0:return r=U(e,`predictions`,`inTopK`),i=U(t,`targets`,`inTopK`),T(1<r.rank,function(){return`inTopK() expects the predictions to be of rank 2 or higher, but got `+r.rank}),T(r.rank-1===i.rank,function(){return`predictions rank should be 1 larger than targets rank, but got predictions rank `+r.rank+` and targets rank `+i.rank}),E(r.shape.slice(0,r.shape.length-1),i.shape,`predictions's shape should be align with the targets' shape, except the last dimension.`),a=r.shape[r.shape.length-1],T(0<n&&n<=a,function(){return`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (`+a+`), but got `+n}),[4,r.data()];case 1:return o=c.sent(),[4,i.data()];case 2:for(s=c.sent(),l=[o.length/a,a],d=l[1],f=ne(`bool`,u=l[0]),p=0;p<u;p++){for(m=p*d,h=o.subarray(m,m+d),g=[],_=0;_<h.length;_++)g.push({value:h[_],index:_});for(g.sort(function(e,t){return t.value-e.value}),f[p]=0,_=0;_<n;_++)if(g[_].index===s[p]){f[p]=1;break}}return e!==r&&r.dispose(),t!==i&&i.dispose(),[2,Rn(f,i.shape,`bool`)]}})})}var Gu,Ku,qu=W({hannWindow_:function(e){return Uu(e,.5,.5)}}),Ju=W({hammingWindow_:function(e){return Uu(e,.54,.46)}}),Yu=W({frame_:function(e,t,n,r,i){r===void 0&&(r=!1),i===void 0&&(i=0);for(var a=0,o=[];a+t<=e.size;)o.push(nu(e,a,t)),a+=n;if(r)for(;a<e.size;){var s=a+t-e.size,c=er([nu(e,a,t-s),Yn([s],i)]);o.push(c),a+=n}return o.length===0?Vn([],[0,t]):er(o).as2D(o.length,t)}}),Xu=W({stft_:function(e,t,n,r,i){var a;i===void 0&&(i=qu),r??=(a=t,Math.floor(2**Math.ceil(Math.log(a)/Math.log(2))));for(var o=Yu(e,t,n),s=rl(o,i(t)),c=[],l=0;l<o.shape[0];l++)c.push(Iu(s.slice([l,0],[1,t]),r));return er(c)}}),Zu=Object.freeze({hannWindow:qu,hammingWindow:Ju,frame:Yu,stft:Xu});(Ku=Gu||={})[Ku.NONE=0]=`NONE`,Ku[Ku.MEAN=1]=`MEAN`,Ku[Ku.SUM=2]=`SUM`,Ku[Ku.SUM_BY_NONZERO_WEIGHTS=3]=`SUM_BY_NONZERO_WEIGHTS`;var Qu=W({absoluteDifference_:function(e,t,n,r){r===void 0&&(r=Gu.SUM_BY_NONZERO_WEIGHTS);var i=U(e,`labels`,`absoluteDifference`),a=U(t,`predictions`,`absoluteDifference`),o=null;return n!=null&&(o=U(n,`weights`,`absoluteDifference`)),E(i.shape,a.shape,`Error in absoluteDifference: `),$u(i.sub(a).abs(),o,r)}}),$u=W({computeWeightedLoss_:function(e,t,n){n===void 0&&(n=Gu.SUM_BY_NONZERO_WEIGHTS);var r=U(e,`losses`,`computeWeightedLoss`),i=null;t!=null&&(i=U(t,`weights`,`computeWeightedLoss`));var a=i==null?r:r.mul(i);if(n===Gu.NONE)return a;if(n===Gu.SUM)return a.sum();if(n===Gu.MEAN){if(i==null)return a.mean();var o=r.size/i.size,s=a.sum().div(i.sum());return 1<o?s.div(G(o)):s}if(n!==Gu.SUM_BY_NONZERO_WEIGHTS)throw Error(`Unknown reduction: `+n);if(i==null)return a.sum().div(G(r.size));var c=i.mul(qn(r.shape)).notEqual(G(0)).sum().toFloat();return a.sum().div(c)}}),ed=W({cosineDistance_:function(e,t,n,r,i){i===void 0&&(i=Gu.SUM_BY_NONZERO_WEIGHTS);var a=U(e,`labels`,`cosineDistance`),o=U(t,`predictions`,`cosineDistance`),s=null;return r!=null&&(s=U(r,`weights`,`cosineDistance`)),E(a.shape,o.shape,`Error in cosineDistance: `),$u(G(1).sub(a.mul(o).sum(n,!0)),s,i)}}),td=W({hingeLoss_:function(e,t,n,r){r===void 0&&(r=Gu.SUM_BY_NONZERO_WEIGHTS);var i=U(e,`labels`,`hingeLoss`),a=U(t,`predictions`,`hingeLoss`),o=null;n!=null&&(o=U(n,`weights`,`hingeLoss`)),E(i.shape,a.shape,`Error in hingeLoss: `);var s=G(1);return i=G(2).mul(i).sub(s),$u(s.sub(i.mul(a)).relu(),o,r)}}),nd=W({huberLoss_:function(e,t,n,r,i){r===void 0&&(r=1),i===void 0&&(i=Gu.SUM_BY_NONZERO_WEIGHTS);var a=U(e,`labels`,`huberLoss`),o=U(t,`predictions`,`huberLoss`),s=null;n!=null&&(s=U(n,`weights`,`huberLoss`)),E(a.shape,o.shape,`Error in huberLoss: `);var c=G(r),l=o.sub(a).abs(),u=$c(l,c),d=l.sub(u);return $u(G(.5).mul(u.square()).add(c.mul(d)),s,i)}}),rd=W({logLoss_:function(e,t,n,r,i){r===void 0&&(r=1e-7),i===void 0&&(i=Gu.SUM_BY_NONZERO_WEIGHTS);var a=U(e,`labels`,`logLoss`),o=U(t,`predictions`,`logLoss`),s=null;n!=null&&(s=U(n,`weights`,`logLoss`)),E(a.shape,o.shape,`Error in logLoss: `);var c=G(1),l=G(r);return $u(a.mul(o.add(l).log()).neg().sub(c.sub(a).mul(c.sub(o).add(l).log())),s,i)}}),id=W({meanSquaredError_:function(e,t,n,r){r===void 0&&(r=Gu.SUM_BY_NONZERO_WEIGHTS);var i=U(e,`labels`,`meanSquaredError`),a=U(t,`predictions`,`meanSquaredError`),o=null;return n!=null&&(o=U(n,`weights`,`meanSquaredError`)),E(i.shape,a.shape,`Error in meanSquaredError: `),$u(i.squaredDifference(a),o,r)}}),ad=W({sigmoidCrossEntropy_:function(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=Gu.SUM_BY_NONZERO_WEIGHTS);var a=U(e,`multiClassLabels`,`sigmoidCrossEntropy`),o=U(t,`logits`,`sigmoidCrossEntropy`),s=null;if(n!=null&&(s=U(n,`weights`,`sigmoidCrossEntropy`)),E(a.shape,o.shape,`Error in sigmoidCrossEntropy: `),0<r){var c=G(r),l=G(1),u=G(.5);a=a.mul(l.sub(c)).add(u.mul(c))}return $u(function(e,t){var n=U(a,`labels`,`sigmoidCrossEntropyWithLogits`),r=U(t,`logits`,`sigmoidCrossEntropyWithLogits`);E(n.shape,r.shape,`Error in sigmoidCrossEntropyWithLogits: `);var i=r.relu(),o=r.mul(n),s=r.abs().neg().exp().log1p();return i.sub(o).add(s)}(0,o),s,i)}}),od=W({softmaxCrossEntropy_:function(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=Gu.SUM_BY_NONZERO_WEIGHTS);var a=U(e,`onehotLabels`,`softmaxCrossEntropy`),o=U(t,`logits`,`softmaxCrossEntropy`),s=null;if(n!=null&&(s=U(n,`weights`,`softmaxCrossEntropy`)),E(a.shape,o.shape,`Error in softmaxCrossEntropy: `),0<r){var c=G(r),l=G(1),u=G(a.shape[1]);a=a.mul(l.sub(c)).add(c.div(u))}return $u(function(e,t,n){if(n===void 0&&(n=-1),n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank `+t.rank+` and dim was `+n);return _i(function(e,t,r){var i=t.logSumExp([n],!0),a=t.toFloat().sub(i);return r([e,a]),{value:a.mul(e).neg().sum([n]),gradFunc:function(e,t){var r=t[0],i=t[1],a=On(e.shape,[n]);return[e.reshape(a).mul(r.toFloat().sub(i.exp())),e.reshape(a).mul(i.exp().sub(r.toFloat()))]}}})(e,t)}(a,o),s,i)}}),sd=Object.freeze({get Reduction(){return Gu},absoluteDifference:Qu,computeWeightedLoss:$u,cosineDistance:ed,hingeLoss:td,huberLoss:nd,logLoss:rd,meanSquaredError:id,sigmoidCrossEntropy:ad,softmaxCrossEntropy:od});function cd(e,t){return t===void 0&&(t=!1),B.tidy(function(){if(e.shape.length!==2)throw Error(`qr2d() requires a 2D Tensor, but got a `+e.shape.length+`D Tensor.`);for(var n=e.shape[0],r=e.shape[1],i=jr(n),a=e.clone(),o=Vn([[1]],[1,1]),s=o.clone(),c=r<=n?r:n,l=function(e){var t,c=a,l=s,u=i;s=(t=B.tidy(function(){var t=a.slice([e,e],[n-e,1]),c=t.norm(),l=a.slice([e,e],[1,1]),u=Vn([[-1]]).where(l.greater(0),Vn([[1]])),d=l.sub(u.mul(c)),f=t.div(d);s=f.shape[0]===1?o.clone():o.concat(f.slice([1,0],[f.shape[0]-1,f.shape[1]]),0);var p=u.matMul(d).div(c).neg(),m=a.slice([e,0],[n-e,r]),h=p.mul(s);if(e===0)a=m.sub(h.matMul(s.transpose().matMul(m)));else{var g=m.sub(h.matMul(s.transpose().matMul(m)));a=a.slice([0,0],[e,r]).concat(g,0)}var _=i.slice([0,e],[n,i.shape[1]-e]);if(e===0)i=_.sub(_.matMul(s).matMul(h.transpose()));else{var v=_.sub(_.matMul(s).matMul(h.transpose()));i=i.slice([0,0],[n,e]).concat(v,1)}return[s,a,i]}))[0],a=t[1],i=t[2],yn([c,l,u])},u=0;u<c;++u)l(u);return!t&&r<n&&(i=i.slice([0,0],[n,r]),a=a.slice([0,0],[r,r])),[i,a]})}var ld=W({bandPart_:function(e,t,n){if(t%1!=0)throw Error(`bandPart(): numLower must be an integer, got `+t+`.`);if(n%1!=0)throw Error(`bandPart(): numUpper must be an integer, got `+n+`.`);var r=U(e,`a`,`bandPart`);if(r.rank<2)throw Error(`bandPart(): Rank must be at least 2, got `+r.rank+`.`);var i=r.shape,a=r.shape.slice(-2),o=a[0],s=a[1];if(!(t<=o))throw Error(`bandPart(): numLower (`+t+`) must not be greater than the number of rows (`+o+`).`);if(!(n<=s))throw Error(`bandPart(): numUpper (`+n+`) must not be greater than the number of columns (`+s+`).`);t<0&&(t=o),n<0&&(n=s);var c=cl(Zn(0,o,1,`int32`).reshape([-1,1]),Zn(0,s,1,`int32`)),l=Rc(c.lessEqual(G(+t,`int32`)),c.greaterEqual(G(-n,`int32`))),u=Jn([o,s],r.dtype);return Kr(Yr(r.reshape([-1,o,s])).map(function(e){return Hc(l,e,u)})).reshape(i)}}),ud=W({gramSchmidt_:function(e){var t;if(Array.isArray(e)){t=!1,T(e!=null&&0<e.length,function(){return`Gram-Schmidt process: input must not be null, undefined, or empty`});for(var n=e[0].shape[0],r=function(t){T(e[t].shape[0]===n,function(){return`Gram-Schmidt: Non-unique lengths found in the input vectors: (`+e[t].shape[0]+` vs. `+n+`)`})},i=1;i<e.length;++i)r(i)}else t=!0,e=ar(e,e.shape[0],0).map(function(e){return Gr(e,[0])});T(e.length<=e[0].shape[0],function(){return`Gram-Schmidt: Number of vectors (`+e.length+`) exceeds number of dimensions (`+e[0].shape[0]+`).`});function a(e){o.push(B.tidy(function(){var t=s[e];if(0<e)for(var n=0;n<e;++n){var r=_u(o[n].mulStrict(t)).mul(o[n]);t=t.sub(r)}return t.div(Du(t,`euclidean`))}))}var o=[],s=e;for(i=0;i<e.length;++i)a(i);return t?Kr(o,0):o}}),dd=W({qr_:function(e,t){if(t===void 0&&(t=!1),e.rank<2)throw Error(`qr() requires input tensor to have a rank >= 2, but got rank `+e.rank);if(e.rank===2)return cd(e,t);var n=e.shape.slice(0,e.shape.length-2).reduce(function(e,t){return e*t}),r=Yr(e.reshape([n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),i=[],a=[];return r.forEach(function(e){var n=cd(e,t),r=n[0],o=n[1];i.push(r),a.push(o)}),[Kr(i,0).reshape(e.shape),Kr(a,0).reshape(e.shape)]}}),fd=Object.freeze({bandPart:ld,gramSchmidt:ud,qr:dd});function pd(e,t,n,r,i,a){r??=.5,i??=-1/0,a??=0;var o=e.shape[0];return n=Math.min(n,o),T(0<=r&&r<=1,function(){return`iouThreshold must be in [0, 1], but was '`+r+`'`}),T(e.rank===2,function(){return`boxes must be a 2D tensor, but was of rank '`+e.rank+`'`}),T(e.shape[1]===4,function(){return`boxes must have 4 columns, but 2nd dimension was `+e.shape[1]}),T(t.rank===1,function(){return`scores must be a 1D tensor`}),T(t.shape[0]===o,function(){return`scores has incompatible shape with boxes. Expected `+o+`, but was `+t.shape[0]}),T(0<=a&&a<=1,function(){return`softNmsSigma must be in [0, 1], but was '`+a+`'`}),{maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a}}function md(e,t){return!(0<e)||t===`linear`}function hd(e,t,n){if(n==null||n===`linear`)return e;if(n===`relu`)return e.mul(t.step());throw Error(`Gradient for activation `+n+` has not been implemented yet.`)}function gd(e,t){var n=t,r=Ti(e.shape,t.shape);return 0<r.length&&(n=n.sum(r)),n.reshape(e.shape)}function _d(e,t,n){if(t===`linear`)return e;if(t===`relu`)return Su(e);if(t===`elu`)return yu(e);if(t===`relu6`)return Cu(e);if(t===`prelu`)return xu(e,n);throw Error(`Unknown fused activation `+t+`.`)}var vd=W({resizeBilinear_:function(e,t,n){n===void 0&&(n=!1);var r=U(e,`images`,`resizeBilinear`);T(r.rank===3||r.rank===4,function(){return`Error in resizeBilinear: x must be rank 3 or 4, but got rank `+r.rank+`.`}),T(t.length===2,function(){return`Error in resizeBilinear: new shape must 2D, but got shape `+t+`.`});var i=r,a=!1;r.rank===3&&(a=!0,i=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var o=t[0],s=t[1],c=B.runKernelFunc(function(e,t){return t([i]),e.resizeBilinear(i,o,s,n)},{x:i},function(e,t){return{x:function(){return B.runKernelFunc(function(r){return r.resizeBilinearBackprop(e,t[0],n)},{})}}},`ResizeBilinear`,{alignCorners:n,newHeight:o,newWidth:s});return a?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}}),yd=W({resizeNearestNeighbor_:function(e,t,n){n===void 0&&(n=!1);var r=U(e,`images`,`resizeNearestNeighbor`);T(r.rank===3||r.rank===4,function(){return`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank `+r.rank+`.`}),T(t.length===2,function(){return`Error in resizeNearestNeighbor: new shape must 2D, but got shape `+t+`.`}),T(r.dtype===`float32`||r.dtype===`int32`,function(){return"`images` must have `int32` or `float32` as dtype"});var i=r,a=!1;r.rank===3&&(a=!0,i=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var o=t[0],s=t[1],c=B.runKernelFunc(function(e,t){return t([i]),e.resizeNearestNeighbor(i,o,s,n)},{batchImages:i},function(e,t){return{batchImages:function(){return B.runKernelFunc(function(r){return r.resizeNearestNeighborBackprop(e,t[0],n)},{})}}});return a?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}}),bd=W({nonMaxSuppression_:function(e,t,n,r,i){r===void 0&&(r=.5),i===void 0&&(i=-1/0);var a=U(e,`boxes`,`nonMaxSuppression`),o=U(t,`scores`,`nonMaxSuppression`),s=pd(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;var c={maxOutputSize:n,iouThreshold:r,scoreThreshold:i};return B.runKernelFunc(function(e){return e.nonMaxSuppression(a,o,n,r,i)},{boxes:a,scores:o},null,`NonMaxSuppressionV3`,c)}}),xd=W({nonMaxSuppressionWithScore_:function(e,t,n,r,i,a){r===void 0&&(r=.5),i===void 0&&(i=-1/0),a===void 0&&(a=0);var o=U(e,`boxes`,`nonMaxSuppression`),s=U(t,`scores`,`nonMaxSuppression`),c=pd(o,s,n,r,i,a),l={maxOutputSize:n=c.maxOutputSize,iouThreshold:r=c.iouThreshold,scoreThreshold:i=c.scoreThreshold,softNmsSigma:a=c.softNmsSigma},u=B.runKernel(`NonMaxSuppressionV5`,{boxes:o,scores:s},l);return{selectedIndices:u[0],selectedScores:u[1]}}}),Sd=W({cropAndResize_:function(e,t,n,r,i,a){var o=U(e,`image`,`cropAndResize`),s=U(t,`boxes`,`cropAndResize`,`float32`),c=U(n,`boxInd`,`cropAndResize`,`int32`);i||=`bilinear`,a||=0;var l=s.shape[0];return T(o.rank===4,function(){return`Error in cropAndResize: image must be rank 4,but got rank `+o.rank+`.`}),T(s.rank===2&&s.shape[1]===4,function(){return`Error in cropAndResize: boxes must be have size [`+l+`,4] but had shape `+s.shape+`.`}),T(c.rank===1&&c.shape[0]===l,function(){return`Error in cropAndResize: boxInd must be have size [`+l+`] but had shape `+s.shape+`.`}),T(r.length===2,function(){return`Error in cropAndResize: cropSize must be of length 2, but got length `+r.length+`.`}),T(1<=r[0]&&1<=r[1],function(){return`cropSize must be atleast [1,1], but was `+r}),T(i===`bilinear`||i===`nearest`,function(){return`method must be bilinear or nearest, but was `+i}),B.runKernelFunc(function(e,t){return e.cropAndResize(o,s,c,r,i,a)},{images:o,boxes:s,boxInd:c},null,`CropAndResize`,{method:i,extrapolationValue:a,cropSize:r})}}),Cd=Object.freeze({resizeBilinear:vd,resizeNearestNeighbor:yd,nonMaxSuppression:bd,nonMaxSuppressionAsync:function(e,t,n,r,i){return r===void 0&&(r=.5),i===void 0&&(i=-1/0),s(this,void 0,void 0,function(){var a,o,s,l,u,d,f;return c(this,function(c){switch(c.label){case 0:return a=U(e,`boxes`,`nonMaxSuppressionAsync`),o=U(t,`scores`,`nonMaxSuppressionAsync`),s=pd(a,o,n,r,i),n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold,[4,Promise.all([a.data(),o.data()])];case 1:return l=c.sent(),u=l[0],d=l[1],f=Ki(u,d,n,r,i),a!==e&&a.dispose(),o!==t&&o.dispose(),[2,f]}})})},nonMaxSuppressionWithScore:xd,nonMaxSuppressionWithScoreAsync:function(e,t,n,r,i,a){return r===void 0&&(r=.5),i===void 0&&(i=-1/0),a===void 0&&(a=0),s(this,void 0,void 0,function(){var o,s,l,u,d,f,p;return c(this,function(c){switch(c.label){case 0:return o=U(e,`boxes`,`nonMaxSuppressionAsync`),s=U(t,`scores`,`nonMaxSuppressionAsync`),l=pd(o,s,n,r,i,a),n=l.maxOutputSize,r=l.iouThreshold,i=l.scoreThreshold,a=l.softNmsSigma,[4,Promise.all([o.data(),s.data()])];case 1:return u=c.sent(),d=u[0],f=u[1],p=qi(d,f,n,r,i,a),o!==e&&o.dispose(),s!==t&&s.dispose(),[2,p]}})})},cropAndResize:Sd}),wd=W({fusedMatMul_:function(e){var t,n=e.a,r=e.b,i=e.transposeA,a=i!==void 0&&i,o=e.transposeB,s=o!==void 0&&o,c=e.bias,l=e.activation,u=l===void 0?`linear`:l,d=e.preluActivationWeights;if(!1===md(B.state.gradientDepth,u)){var f=Vl(n,r,a,s);return c!=null&&(f=Uc(f,c)),_d(f,u,d)}var p=U(n,`a`,`fused matMul`),m=U(r,`b`,`fused matMul`);t=rt(p,m),p=t[0],m=t[1];var h=a?p.shape[p.rank-2]:p.shape[p.rank-1],g=s?m.shape[m.rank-1]:m.shape[m.rank-2],_=a?p.shape[p.rank-1]:p.shape[p.rank-2],v=s?m.shape[m.rank-2]:m.shape[m.rank-1],y=p.shape.slice(0,-2),b=m.shape.slice(0,-2),x=k(y),S=k(b);T(2<=p.rank&&2<=m.rank&&p.rank===m.rank,function(){return`Error in fused matMul: inputs must have the same rank of at least 2, got ranks `+p.rank+` and `+m.rank+`.`}),T(A(y,b),function(){return`Error in fused matMul: outer dimensions (`+y+`) and (`+b+`) of Tensors with shapes `+p.shape+` and `+m.shape+` must match.`}),T(h===g,function(){return`Error in fused matMul: inner shapes (`+h+`) and (`+g+`) of Tensors with shapes `+p.shape+` and `+m.shape+` and transposeA=`+a+` and transposeB=`+s+` must match.`});var C,w,E=p.shape.slice(0,-2).concat([_,v]),D=a?p.as3D(x,h,_):p.as3D(x,_,h),O=s?m.as3D(S,v,g):m.as3D(S,g,v);c!=null&&Ei(E,(C=rt(C=U(c,`bias`,`fused matMul`),p)[0]).shape),d!=null&&(w=U(d,`prelu weights`,`fused matMul`));var j={a:D,b:O};c!=null&&(j.bias=C),d!=null&&(j.preluActivationWeights=w);var M=[D,O];return B.runKernelFunc(function(e,t){var n=e.fusedBatchMatMul({a:D,b:O,transposeA:a,transposeB:s,bias:C,activation:u,preluActivationWeights:w});return t([D,O,n]),n},j,function(e,t){var n=t[0],r=t[1],i=t[2],o=hd(e,i,u),l={};return c!=null&&(l={bias:function(){return gd(C,o)}}),Object.assign(a||s?!a&&s?{a:function(){return o.matMul(r,!1,!1)},b:function(){return o.matMul(n,!0,!1)}}:a&&!s?{a:function(){return r.matMul(o,!1,!0)},b:function(){return n.matMul(o,!1,!1)}}:{a:function(){return r.matMul(o,!0,!0)},b:function(){return o.matMul(n,!0,!0)}}:{a:function(){return o.matMul(r,!1,!0)},b:function(){return n.matMul(o,!0,!1)}},l)},`_FusedMatMul`,{transposeA:a,transposeB:s,activation:u},M,[!0]).reshape(E)}}),Td=W({fusedConv2d_:function(e){var t=e.x,n=e.filter,r=e.strides,i=e.pad,a=e.dataFormat,o=a===void 0?`NHWC`:a,s=e.dilations,c=s===void 0?[1,1]:s,l=e.dimRoundingMode,u=e.bias,d=e.activation,f=d===void 0?`linear`:d,p=e.preluActivationWeights;if(f||=`linear`,!1===md(B.state.gradientDepth,f)){var m=jl(t,n,r,i,o,c,l);return u!=null&&(m=Uc(m,u)),_d(m,f,p)}var h=U(t,`x`,`conv2d`),g=U(n,`filter`,`conv2d`),_=h,v=!1;h.rank===3&&(v=!0,_=h.as4D(1,h.shape[0],h.shape[1],h.shape[2])),T(_.rank===4,function(){return`Error in fused conv2d: input must be rank 4, but got rank `+_.rank+`.`}),T(g.rank===4,function(){return`Error in fused conv2d: filter must be rank 4, but got rank `+g.rank+`.`}),l!=null&&T(j(i),function(){return`Error in fused conv2d: pad must be an integer when using, dimRoundingMode `+l+` but got pad `+i+`.`}),T(_.shape[3]===g.shape[2],function(){return`Error in conv2d: depth of input (`+_.shape[3]+`) must match input depth for filter `+g.shape[2]+`.`}),T(Li(r,c),function(){return`Error in conv2D: Either strides or dilations must be 1. Got strides `+r+` and dilations '`+c+`'`}),T(o===`NHWC`,function(){return`Error in conv2d: got dataFormat of `+o+` but only NHWC is currently supported.`});var y,b,x=ki(_.shape,g.shape,r,c,i,l);u!=null&&(y=rt(y=U(u,`bias`,`fused conv2d`),h)[0],Ei(x.outShape,y.shape)),p!=null&&(b=U(p,`prelu weights`,`fused conv2d`));var S={x:_,filter:g};u!=null&&(S.bias=y),p!=null&&(S.preluActivationWeights=b);var C=[g,_],w=B.runKernelFunc(function(e,t){var n=e.fusedConv2d({input:_,filter:g,convInfo:x,bias:y,activation:f,preluActivationWeights:b});return t([g,_,n]),n},S,function(e,t){var n=t,a=n[0],o=n[1],s=n[2],l=hd(e,s,f);T(Ii(c),function(){return`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '`+c+`'`});var d={};return u!=null&&(d={bias:function(){return gd(y,l)}}),Object.assign({x:function(){return Pl(o.shape,l,a,r,i)},filter:function(){return Nl(o,l,a.shape,r,i)}},d)},`FusedConv2D`,{convInfo:x,activation:f},C,[!0]);return v?w.as3D(w.shape[1],w.shape[2],w.shape[3]):w}}),Ed=W({fusedDepthwiseConv2d_:function(e){var t=e.x,n=e.filter,r=e.strides,i=e.pad,a=e.dataFormat,o=a===void 0?`NHWC`:a,s=e.dilations,c=s===void 0?[1,1]:s,l=e.dimRoundingMode,u=e.bias,d=e.activation,f=d===void 0?`linear`:d,p=e.preluActivationWeights;if(!1===md(B.state.gradientDepth,f)){var m=Fl(t,n,r,i,o,c,l);return u!=null&&(m=Uc(m,u)),_d(m,f,p)}var h=U(t,`x`,`depthwiseConv2d`),g=U(n,`filter`,`depthwiseConv2d`),_=h,v=!1;h.rank===3&&(v=!0,_=h.as4D(1,h.shape[0],h.shape[1],h.shape[2])),T(_.rank===4,function(){return`Error in fused depthwiseConv2d: input must be rank 4, but got rank `+_.rank+`.`}),T(g.rank===4,function(){return`Error in fused depthwiseConv2d: filter must be rank 4, but got rank `+g.rank+`.`}),T(_.shape[3]===g.shape[2],function(){return`Error in fused depthwiseConv2d: number of input channels (`+_.shape[3]+`) must match the inChannels dimension in filter `+g.shape[2]+`.`}),c??=[1,1],T(Li(r,c),function(){return`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides `+r+` and dilations '`+c+`'`}),l!=null&&T(j(i),function(){return`Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode `+l+` but got pad `+i+`.`});var y,b,x=ki(_.shape,g.shape,r,c,i,l,!0);u!=null&&(y=rt(y=U(u,`bias`,`fused conv2d`),h)[0],Ei(x.outShape,y.shape)),p!=null&&(b=U(p,`prelu weights`,`fused depthwiseConv2d`));var S={x:_,filter:g};u!=null&&(S.bias=y),p!=null&&(S.preluActivationWeights=b);var C=[g,_],w=B.runKernelFunc(function(e,t){var n=e.fusedDepthwiseConv2D({input:_,filter:g,convInfo:x,bias:y,activation:f,preluActivationWeights:b});return t([g,_,n]),n},S,function(e,t){T(Ii(c),function(){return`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '`+c+`'`});var n=t[0],r=t[1],i=t[2],a=hd(e,i,f),o={};return u!=null&&(o={bias:function(){return gd(y,a)}}),Object.assign({x:function(){return Il(r.shape,a,n,x)},filter:function(){return Ll(r,a,n.shape,x)}},o)},`FusedDepthwiseConv2D`,{convInfo:x,activation:f},C,[!0]);return v?w.as3D(w.shape[1],w.shape[2],w.shape[3]):w}}),Dd=Object.freeze({matMul:wd,conv2d:Td,depthwiseConv2d:Ed}),Od=Object.freeze({image:Cd,linalg:fd,losses:sd,spectral:Ru,fused:Dd,signal:Zu,square:Bs,squaredDifference:Hs,conv1d:Al,conv2d:jl,conv3d:Ml,depthwiseConv2d:Fl,separableConv2d:Rl,conv2dTranspose:zl,conv3dTranspose:Bl,op:W,batchNormalization2d:Ac,batchNormalization3d:jc,batchNormalization4d:Mc,batchNormalization:Nc,batchNorm:Pc,batchNorm2d:Fc,batchNorm3d:Ic,batchNorm4d:Lc,booleanMaskAsync:wl,complex:Fn,real:In,imag:Ln,concat:er,concat1d:tr,concat2d:nr,concat3d:rr,concat4d:ir,split:ar,matMul:Vl,dot:Hl,outerProduct:Ul,reverse:Wl,reverse1d:Gl,reverse2d:Kl,reverse3d:ql,reverse4d:Jl,maxPool:Zl,avgPool:Ql,pool:$l,maxPool3d:eu,avgPool3d:tu,slice:nu,slice1d:ru,slice2d:iu,slice3d:au,slice4d:ou,abs:Us,acos:Ws,acosh:Gs,asin:Ks,asinh:qs,atan:Js,atanh:Ys,ceil:Xs,clipByValue:Zs,cos:Qs,cosh:$s,erf:ec,exp:tc,expm1:nc,floor:rc,log:ic,log1p:ac,logSigmoid:oc,neg:sc,reciprocal:cc,round:lc,rsqrt:uc,sigmoid:dc,sign:fc,isNaN:pc,isInf:mc,isFinite:hc,sin:gc,sinh:_c,softplus:vc,sqrt:yc,step:bc,tan:xc,tanh:Sc,all:cu,any:lu,argMax:uu,argMin:du,logSumExp:fu,max:pu,mean:mu,min:hu,moments:gu,sum:_u,prod:vu,equal:ul,equalStrict:dl,greater:fl,greaterEqual:pl,greaterEqualStrict:ml,greaterStrict:hl,less:gl,lessEqual:_l,lessEqualStrict:vl,lessStrict:yl,notEqual:bl,notEqualStrict:xl,add:Uc,addN:Wc,addStrict:Gc,atan2:Kc,div:qc,divNoNan:Jc,divStrict:Yc,floorDiv:Xc,maximum:Zc,maximumStrict:Qc,minimum:$c,minimumStrict:el,mod:tl,modStrict:nl,mul:rl,mulStrict:il,pow:al,powStrict:ol,squaredDifferenceStrict:sl,sub:cl,subStrict:ll,elu:yu,leakyRelu:bu,prelu:xu,relu:Su,relu6:Cu,selu:wu,logicalAnd:Rc,logicalNot:zc,logicalOr:Bc,logicalXor:Vc,where:Hc,whereAsync:kc,buffer:xr,print:Sr,batchToSpaceND:wr,broadcastTo:Tr,cast:Er,clone:Dr,cumsum:Or,depthToSpace:kr,expandDims:Ar,eye:jr,multinomial:Mr,oneHot:Nr,pad:Pr,pad1d:Fr,pad2d:Ir,pad3d:Lr,pad4d:Rr,rand:zr,randomNormal:Br,randomGamma:Vr,randomUniform:Hr,reshape:Ur,spaceToBatchND:Wr,squeeze:Gr,stack:Kr,tile:qr,truncatedNormal:Jr,unstack:Yr,setdiff1dAsync:Cr,fill:Yn,linspace:Xn,ones:qn,range:Zn,scalar:G,tensor:Rn,tensor1d:Bn,tensor2d:Vn,tensor3d:Hn,tensor4d:Un,tensor5d:Wn,tensor6d:Gn,variable:Kn,zeros:Jn,onesLike:Qn,zerosLike:$n,transpose:Tu,softmax:yi,logSoftmax:bi,localResponseNormalization:Eu,norm:Du,gather:Tl,unsortedSegmentSum:El,basicLSTMCell:Ou,multiRNNCell:ku,movingAverage:Au,stridedSlice:ju,topk:Mu,scatterND:Nu,fft:Pu,ifft:Fu,rfft:Iu,irfft:Lu,sparseToDense:zu,gatherND:Bu,diag:Vu,dropout:Hu,hannWindow:qu,hammingWindow:Ju,frame:Yu,stft:Xu,inTopKAsync:Wu});function X(e,t){Array.isArray(e)||(e=[e]),e.forEach(function(e){e!=null&&T(e.dtype!==`complex64`,function(){return t+` does not support complex64 tensors.`})})}function kd(e,t,n,r){if(n===`linear`)return e.linear(t);if(n===`relu`)return e.relu(t);if(n===`elu`)return e.elu(t);if(n===`relu6`)return e.relu6(t);if(n===`prelu`)return e.prelu(t,r);throw Error(`Activation `+n+` has not been implemented for the CPU backend.`)}var Ad,jd=(o(Z,Ad=Si),Z.prototype.write=function(e,t,n){this.firstUse&&(this.firstUse=!1,d().get(`IS_NODE`)&&xn(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var r={};return this.data.set(r,{values:e,dtype:n}),r},Z.prototype.move=function(e,t,n,r){this.data.set(e,{values:t,dtype:r})},Z.prototype.numDataIds=function(){return this.data.numDataIds()},Z.prototype.read=function(e){return s(this,void 0,void 0,function(){return c(this,function(t){return[2,this.readSync(e)]})})},Z.prototype.readSync=function(e){var t=this.data.get(e),n=t.dtype,r=t.complexTensors;return n===`complex64`?Ui(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.data.get(e).values},Z.prototype.bufferSync=function(e){var t=this.readSync(e.dataId),n=t;if(e.dtype===`string`)try{n=t.map(function(e){return we(e)})}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return xr(e.shape,e.dtype,n)},Z.prototype.makeOutput=function(e,t,n){var r=this.write(e,t,n);return B.makeTensorFromDataId(r,t,n,this)},Z.prototype.disposeData=function(e){if(this.data.has(e)){var t=this.data.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.data.delete(e)}},Z.prototype.time=function(e){return s(this,void 0,void 0,function(){var t;return c(this,function(n){return t=xe(),e(),[2,{kernelMs:xe()-t}]})})},Z.prototype.memory=function(){return{unreliable:!0,reasons:[`The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.`]}},Z.prototype.complex=function(e,t){var n=this.makeOutput(null,e.shape,`complex64`);return this.data.get(n.dataId).complexTensors={real:B.keep(e.clone()),imag:B.keep(t.clone())},n},Z.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},Z.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},Z.prototype.slice=function(e,t,n){if(X(e,`slice`),pi(e.shape,t,n)){var r=mi(t,e.strides),i=k(n);return Rn(this.readSync(e.dataId).subarray(r,r+i),n,e.dtype)}for(var a=xr(n,e.dtype),o=this.bufferSync(e),s=0;s<a.size;++s){var c=a.indexToLoc(s).map(function(e,n){return e+t[n]});a.values[s]=o.get.apply(o,c)}return a.toTensor()},Z.prototype.stridedSlice=function(e,t,n,r){X(e,`stridedSlice`);var i=ui(t,n,r);if(i.some(function(e){return e===0}))return Rn([],i);for(var a=xr(i,e.dtype),o=this.bufferSync(e),s=0;s<a.size;s++){for(var c=a.indexToLoc(s),l=Array(c.length),u=0;u<l.length;u++)l[u]=c[u]*r[u]+t[u];a.set.apply(a,[o.get.apply(o,l)].concat(c))}return a.toTensor()},Z.prototype.diag=function(e){for(var t=this.readSync(e.dataId),n=xr([e.size,e.size],e.dtype),r=n.values,i=0;i<t.length;i++)r[i*e.size+i]=t[i];return n.toTensor()},Z.prototype.unstack=function(e,t){for(var n=e.shape[t],r=Array(e.rank-1),i=0,a=0;a<e.rank;a++)a!==t&&(r[i++]=e.shape[a]);var o=Array(e.rank).fill(0),s=e.shape.slice();s[t]=1;var c=Array(n);for(a=0;a<c.length;a++)c[o[t]=a]=this.slice(e,o,s).reshape(r);return c},Z.prototype.reverse=function(e,t){X(e,`reverse`);for(var n=xr(e.shape,e.dtype),r=this.bufferSync(e),i=function(i){var a=n.indexToLoc(i),o=a.slice();t.forEach(function(t){return o[t]=e.shape[t]-1-o[t]}),n.set.apply(n,[r.get.apply(r,o)].concat(a))},a=0;a<n.size;a++)i(a);return n.toTensor()},Z.prototype.concat=function(e,t){var n=this;if(e[0].dtype===`complex64`){var r=e.map(function(e){return In(e)}),i=e.map(function(e){return Ln(e)});return Fn(this.concat(r,t),this.concat(i,t))}var a=e.map(function(e){var n=k(e.shape.slice(t));return e.as2D(-1,n)}),o=Pn(a.map(function(e){return e.shape}),1),s=xr(o,e[0].dtype).values;if(a[0].shape[0]===1){var c=0;a.forEach(function(e){s.set(n.readSync(e.dataId),c),c+=e.size})}else{var l=0;a.forEach(function(e){for(var t=n.readSync(e.dataId),r=0,i=0;i<e.shape[0];++i)for(var a=i*o[1]+l,c=0;c<e.shape[1];++c)s[a+c]=t[r++];l+=e.shape[1]})}return Rn(s,Pn(e.map(function(e){return e.shape}),t),e[0].dtype)},Z.prototype.neg=function(e){return X(e,`neg`),this.multiply(G(-1),e)},Z.prototype.add=function(e,t){return e.dtype===`complex64`||t.dtype===`complex64`?this.broadcastedBinaryComplexOp(e.cast(`complex64`),t.cast(`complex64`),function(e,t,n,r){return{real:e+n,imag:t+r}}):this.broadcastedBinaryOp(e,t,tt(e.dtype,t.dtype),function(e,t){return e+t})},Z.prototype.addN=function(e){var t=this;X(e,`addN`);for(var n=e.map(function(e){return t.readSync(e.dataId)}),r=xr(e[0].shape,e[0].dtype),i=r.values,a=0;a<e.length;a++)for(var o=n[a],s=0;s<i.length;s++)i[s]+=o[s];return r.toTensor()},Z.prototype.softmax=function(e,t){var n=I([t],e.shape),r=this.max(e,n),i=On(r.shape,n),a=this.subtract(e,r.reshape(i)),o=this.exp(a),s=this.sum(o,n).reshape(i);return this.realDivide(o,s)},Z.prototype.subtract=function(e,t){return e.dtype===`complex64`||t.dtype===`complex64`?this.broadcastedBinaryComplexOp(e.cast(`complex64`),t.cast(`complex64`),function(e,t,n,r){return{real:e-n,imag:t-r}}):this.broadcastedBinaryOp(e,t,tt(e.dtype,t.dtype),function(e,t){return e-t})},Z.prototype.pow=function(e,t){return X([e,t],`pow`),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return e**+t})},Z.prototype.batchMatMul=function(e,t,n,r){X([e,t],`matMul`);for(var i=n?e.shape[1]:e.shape[2],a=n?e.shape[2]:e.shape[1],o=r?t.shape[1]:t.shape[2],s=e.shape[0],c=this.readSync(e.dataId),l=this.readSync(t.dataId),u=n?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=u[0],f=u[1],p=u[2],m=r?[1,t.strides[1],t.strides[0]]:[t.strides[1],1,t.strides[0]],h=m[0],g=m[1],_=m[2],v=a*o,y=xr([s,a,o],e.dtype),b=y.values,x=this.blockSize,S=0;S<s;S++)for(var C=0;C<a;C+=x)for(var w=0;w<o;w+=x)for(var T=0;T<i;T+=x)for(var E=Math.min(C+x,a),D=Math.min(w+x,o),O=Math.min(T+x,i),k=C;k<E;k++)for(var A=w;A<D;A++){for(var j=0,M=T;M<O;M++)j+=c[S*d+k*f+M*p]*l[M*h+A*g+S*_];b[S*v+(k*o+A)]+=j}return y.toTensor()},Z.prototype.fusedBatchMatMul=function(e){var t=e.a,n=e.b,r=e.transposeA,i=e.transposeB,a=e.bias,o=e.activation,s=e.preluActivationWeights,c=this.batchMatMul(t,n,r,i);return a&&(c=this.add(c,a)),o&&(c=kd(this,c,o,s)),c},Z.prototype.multiply=function(e,t){return e.dtype===`complex64`||t.dtype===`complex64`?this.broadcastedBinaryComplexOp(e.cast(`complex64`),t.cast(`complex64`),function(e,t,n,r){return{real:e*n-t*r,imag:e*r+t*n}}):this.broadcastedBinaryOp(e,t,tt(e.dtype,t.dtype),function(e,t){return e*t})},Z.prototype.realDivide=function(e,t){return X([e,t],`realDivide`),this.broadcastedBinaryOp(e,t,`float32`,function(e,t){return e/t})},Z.prototype.floorDiv=function(e,t){return X([e,t],`floorDiv`),this.broadcastedBinaryOp(e,t,`int32`,function(e,t){return Math.floor(e/t)})},Z.prototype.sum=function(e,t){X(e,`sum`),kn(`sum`,t,e.rank);for(var n=Dn(e.shape,t),r=n[0],i=n[1],a=Jn(r,tt(e.dtype,`int32`)),o=k(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=0,f=0;f<o;++f)d+=c[u+f];s[l]=d}return a},Z.prototype.prod=function(e,t){X(e,`sum`);for(var n=Dn(e.shape,t),r=n[0],i=n[1],a=Jn(r,tt(e.dtype,`int32`)),o=k(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=1,f=0;f<o;++f)d*=c[u+f];s[l]=d}return a},Z.prototype.unsortedSegmentSum=function(e,t,n){X(e,`unsortedSegmentSum`);for(var r=[],i=e.rank-t.rank,a=0;a<i;++a)t=t.expandDims(a+1);for(a=0;a<n;++a){var o=ul(G(a,`int32`),t).asType(`float32`).mul(e).sum(0);r.push(o)}return Kr(r)},Z.prototype.argMin=function(e,t){X(e,`argMin`);var n=[t];kn(`argMin`,n,e.rank);for(var r=Dn(e.shape,n),i=r[0],a=r[1],o=Jn(i,`int32`),s=k(a),c=this.readSync(o.dataId),l=this.readSync(e.dataId),u=0;u<c.length;++u){for(var d=u*s,f=l[d],p=0,m=0;m<s;++m){var h=l[d+m];h<f&&(f=h,p=m)}c[u]=p}return o},Z.prototype.argMax=function(e,t){X(e,`argMax`);var n=[t];kn(`argMax`,n,e.rank);for(var r=Dn(e.shape,n),i=r[0],a=r[1],o=Jn(i,`int32`),s=k(a),c=this.readSync(o.dataId),l=this.readSync(e.dataId),u=0;u<c.length;++u){for(var d=u*s,f=l[d],p=0,m=0;m<s;++m){var h=l[d+m];f<h&&(f=h,p=m)}c[u]=p}return o},Z.prototype.cumsum=function(e,t,n,r){if(X(e,`cumsum`),t!==e.rank-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=`+(e.rank-1)+` but got axis=`+t);for(var i=tt(e.dtype,`int32`),a=Jn(e.shape,i),o=this.readSync(a.dataId),s=this.readSync(e.dataId),c=e.shape[e.rank-1],l=r?function(e,t){return e+c-t-1}:function(e,t){return e+t},u=0;u<s.length;u+=c)for(var d=0;d<c;d++){var f=l(u,d);if(d===0)o[f]=n?0:s[f];else{var p=l(u,d-1);o[f]=n?s[p]+o[p]:s[f]+o[p]}}return a},Z.prototype.equal=function(e,t){return X([e,t],`equal`),this.broadcastedBinaryOp(e,t,`bool`,function(e,t){return+(e===t)})},Z.prototype.notEqual=function(e,t){return X([e,t],`notEqual`),this.broadcastedBinaryOp(e,t,`bool`,function(e,t){return e===t?0:1})},Z.prototype.less=function(e,t){return X([e,t],`less`),this.broadcastedBinaryOp(e,t,`bool`,function(e,t){return+(e<t)})},Z.prototype.lessEqual=function(e,t){return X([e,t],`lessEqual`),this.broadcastedBinaryOp(e,t,`bool`,function(e,t){return+(e<=t)})},Z.prototype.greater=function(e,t){return X([e,t],`greater`),this.broadcastedBinaryOp(e,t,`bool`,function(e,t){return+(t<e)})},Z.prototype.greaterEqual=function(e,t){return X([e,t],`greaterEqual`),this.broadcastedBinaryOp(e,t,`bool`,function(e,t){return+(t<=e)})},Z.prototype.logicalNot=function(e){X(e,`logicalNot`);for(var t=this.readSync(e.dataId),n=new Uint8Array(t.length),r=0;r<t.length;++r)n[r]=+!t[r];return this.makeOutput(n,e.shape,`bool`)},Z.prototype.logicalAnd=function(e,t){return X([e,t],`logicalAnd`),this.broadcastedBinaryOp(e,t,`bool`,function(e,t){return e&&t})},Z.prototype.logicalOr=function(e,t){return X([e,t],`logicalOr`),this.broadcastedBinaryOp(e,t,`bool`,function(e,t){return e||t})},Z.prototype.select=function(e,t,n){X([e,t,n],`select`);for(var r=this.readSync(e.dataId),i=this.readSync(t.dataId),a=this.readSync(n.dataId),o=Jn(t.shape,tt(t.dtype,n.dtype)),s=this.readSync(o.dataId),c=0,l=e.rank===0||1<e.rank||t.rank===1?1:k(t.shape.slice(1)),u=0;u<r.length;u++)for(var d=0;d<l;d++)r[u]===1?s[c++]=i[u]:s[c++]=a[u];return o},Z.prototype.where=function(e){X([e],`where`);var t=this.readSync(e.dataId);return ea(e.shape,t)},Z.prototype.topk=function(e,t,n){return X(e,`topk`),$i(this.readSync(e.dataId),e.shape,e.dtype,t)},Z.prototype.min=function(e,t){X(e,`min`),kn(`min`,t,e.rank);for(var n=Dn(e.shape,t),r=n[0],i=n[1],a=Jn(r,e.dtype),o=k(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=c[u],f=0;f<o;++f){var p=c[u+f];p<d&&(d=p)}s[l]=d}return a},Z.prototype.minimum=function(e,t){return X([e,t],`minimum`),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.min(e,t)})},Z.prototype.mod=function(e,t){return X([e,t],`mod`),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){var n=e%t;return e<0&&t<0||0<=e&&0<=t?n:(n+t)%t})},Z.prototype.max=function(e,t){X(e,`max`),kn(`max`,t,e.rank);for(var n=Dn(e.shape,t),r=n[0],i=n[1],a=Jn(r,e.dtype),o=k(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=c[u],f=0;f<o;++f){var p=c[u+f];d<p&&(d=p)}s[l]=d}return a},Z.prototype.maximum=function(e,t){return X([e,t],`maximum`),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.max(e,t)})},Z.prototype.all=function(e,t){X(e,`all`),kn(`all`,t,e.rank);for(var n=Dn(e.shape,t),r=n[0],i=n[1],a=Jn(r,e.dtype),o=k(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=c[u],f=0;f<o;++f){var p=c[u+f];d&&=p}s[l]=d}return a},Z.prototype.any=function(e,t){X(e,`any`),kn(`any`,t,e.rank);for(var n=Dn(e.shape,t),r=n[0],i=n[1],a=Jn(r,e.dtype),o=k(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=c[u],f=0;f<o;++f){var p=c[u+f];d||=p}s[l]=d}return a},Z.prototype.squaredDifference=function(e,t){return X([e,t],`squaredDifference`),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){var n=e-t;return n*n})},Z.prototype.ceil=function(e){X(e,`ceil`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.ceil(t[r]);return this.makeOutput(n,e.shape,`float32`)},Z.prototype.floor=function(e){X(e,`floor`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.floor(t[r]);return this.makeOutput(n,e.shape,`float32`)},Z.prototype.sign=function(e){X(e,`x`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)t[r]<0?n[r]=-1:0<t[r]?n[r]=1:n[r]=0;return this.makeOutput(n,e.shape,`float32`)},Z.prototype.isNaN=function(e){X(e,`x`);for(var t=this.readSync(e.dataId),n=new Uint8Array(t.length),r=0;r<t.length;++r)Number.isNaN(t[r])&&(n[r]=1);return this.makeOutput(n,e.shape,`bool`)},Z.prototype.isInf=function(e){X(e,`x`);for(var t=this.readSync(e.dataId),n=new Uint8Array(t.length),r=0;r<t.length;++r)Math.abs(t[r])===1/0&&(n[r]=1);return this.makeOutput(n,e.shape,`bool`)},Z.prototype.isFinite=function(e){X(e,`x`);for(var t=this.readSync(e.dataId),n=new Uint8Array(t.length),r=0;r<t.length;++r)Number.isFinite(t[r])&&(n[r]=1);return this.makeOutput(n,e.shape,`bool`)},Z.prototype.round=function(e){X(e,`round`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=Math.floor(t[r]);t[r]-i<.5?n[r]=Math.floor(t[r]):.5<t[r]-i?n[r]=Math.ceil(t[r]):n[r]=i%2==0?i:i+1}return this.makeOutput(n,e.shape,`float32`)},Z.prototype.exp=function(e){X(e,`exp`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.exp(t[r]);return this.makeOutput(n,e.shape,`float32`)},Z.prototype.expm1=function(e){X(e,`expm1`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.expm1(t[r]);return this.makeOutput(n,e.shape,`float32`)},Z.prototype.log=function(e){X(e,`log`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=t[r];n[r]=Math.log(i)}return this.makeOutput(n,e.shape,`float32`)},Z.prototype.log1p=function(e){X(e,`log1p`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=t[r];n[r]=Math.log1p(i)}return this.makeOutput(n,e.shape,`float32`)},Z.prototype.sqrt=function(e){X(e,`sqrt`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=t[r];n[r]=Math.sqrt(i)}return this.makeOutput(n,e.shape,`float32`)},Z.prototype.rsqrt=function(e){X(e,`rsqrt`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=t[r];n[r]=1/Math.sqrt(i)}return this.makeOutput(n,e.shape,`float32`)},Z.prototype.reciprocal=function(e){X(e,`reciprocal`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=1/t[r];return this.makeOutput(n,e.shape,`float32`)},Z.prototype.linear=function(e){return e},Z.prototype.relu=function(e){X(e,`relu`);for(var t=Jn(e.shape,e.dtype),n=this.readSync(t.dataId),r=this.readSync(e.dataId),i=0;i<r.length;++i)n[i]=Math.max(0,r[i]);return t},Z.prototype.relu6=function(e){X(e,`relu`);for(var t=Jn(e.shape,e.dtype),n=this.readSync(t.dataId),r=this.readSync(e.dataId),i=0;i<r.length;++i)n[i]=Math.min(Math.max(0,r[i]),6);return t},Z.prototype.prelu=function(e,t){return X([e,t],`prelu`),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return e<0?t*e:e})},Z.prototype.elu=function(e){X(e,`elu`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r){var i=n[r];t[r]=0<=i?i:Math.exp(i)-1}return this.makeOutput(t,e.shape,`float32`)},Z.prototype.eluDer=function(e,t){X([e,t],`eluDer`);for(var n=new Float32Array(t.size),r=this.readSync(t.dataId),i=this.readSync(e.dataId),a=0;a<r.length;++a){var o=r[a];n[a]=1<=o?i[a]:i[a]*(o+1)}return this.makeOutput(n,t.shape,`float32`)},Z.prototype.selu=function(e){X(e,`selu`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r){var i=n[r];t[r]=0<=i?1.0507009873554805*i:1.7580993408473768*(Math.exp(i)-1)}return this.makeOutput(t,e.shape,`float32`)},Z.prototype.clip=function(e,t,n){X(e,`clip`);for(var r=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var o=i[a];r[a]=n<o?n:o<t?t:o}return this.makeOutput(r,e.shape,`float32`)},Z.prototype.abs=function(e){for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.abs(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.complexAbs=function(e){for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<e.size;++r){var i=n[2*r],a=n[2*r+1];t[r]=Math.hypot(i,a)}return this.makeOutput(t,e.shape,`float32`)},Z.prototype.int=function(e){X(e,`int`);for(var t=new Int32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=n[r];return this.makeOutput(t,e.shape,`int32`)},Z.prototype.sigmoid=function(e){X(e,`sigmoid`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=1/(1+Math.exp(-n[r]));return this.makeOutput(t,e.shape,`float32`)},Z.prototype.softplus=function(e){X(e,`softplus`);for(var t=Math.log(1.1920928955078125e-7)+2,n=new Float32Array(e.size),r=this.readSync(e.dataId),i=0;i<r.length;++i){var a,o=r[i]>-t,s=r[i]<t,c=Math.exp(r[i]);a=s?c:o?r[i]:Math.log(1+c),n[i]=a}return this.makeOutput(n,e.shape,`float32`)},Z.prototype.sin=function(e){X(e,`sin`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.sin(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.cos=function(e){X(e,`cos`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.cos(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.tan=function(e){X(e,`tan`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.tan(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.asin=function(e){X(e,`asin`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.asin(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.acos=function(e){X(e,`acos`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.acos(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.atan=function(e){X(e,`atan`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.atan(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.atan2=function(e,t){return X([e,t],`atan2`),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.atan2(e,t)})},Z.prototype.sinh=function(e){X(e,`sinh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.sinh(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.cosh=function(e){X(e,`cosh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.cosh(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.tanh=function(e){X(e,`tanh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=M(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.asinh=function(e){X(e,`asinh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.asinh(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.acosh=function(e){X(e,`acosh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.acosh(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.atanh=function(e){X(e,`atanh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.atanh(n[r]);return this.makeOutput(t,e.shape,`float32`)},Z.prototype.erf=function(e){X(e,`erf`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r){var i=Math.sign(n[r]),a=Math.abs(n[r]),o=1/(1+.3275911*a);t[r]=i*(1-((((1.061405429*o-1.453152027)*o+1.421413741)*o-.284496736)*o+.254829592)*o*Math.exp(-a*a))}return this.makeOutput(t,e.shape,`float32`)},Z.prototype.step=function(e,t){t===void 0&&(t=0),X(e,`step`);for(var n=new Float32Array(e.size),r=this.readSync(e.dataId),i=0;i<r.length;++i){var a=r[i];isNaN(a)?n[i]=NaN:n[i]=0<a?1:t}return this.makeOutput(n,e.shape,`float32`)},Z.prototype.fusedConv2d=function(e){var t=e.input,n=e.filter,r=e.convInfo,i=e.bias,a=e.activation,o=e.preluActivationWeights,s=this.conv2d(t,n,r);return i&&(s=this.add(s,i)),a&&(s=kd(this,s,a,o)),s},Z.prototype.conv2d=function(e,t,n){X([e,t],`conv2d`);for(var r=n.filterHeight,i=n.filterWidth,a=n.dilationHeight,o=n.dilationWidth,s=n.padInfo.left,c=n.padInfo.top,l=n.dataFormat===`channelsLast`,u=xr(n.outShape,e.dtype),d=e.strides[0],f=l?e.strides[1]:e.strides[2],p=l?e.strides[2]:1,m=l?1:e.strides[1],h=u.strides[0],g=l?u.strides[1]:u.strides[2],_=l?u.strides[2]:1,v=l?1:u.strides[1],y=this.readSync(e.dataId),b=this.readSync(t.dataId),x=u.values,S=0;S<n.batchSize;++S)for(var C=S*d,w=S*h,T=0;T<n.outHeight;++T)for(var E=w+T*g,D=T*n.strideHeight-c,O=0;O<r;O++){var k=D+O*a;if(!(k<0||k>=n.inHeight))for(var A=O*t.strides[0],j=C+k*f,M=0;M<n.outWidth;++M)for(var N=E+M*_,P=M*n.strideWidth-s,F=0;F<i;F++){var ee=P+F*o;if(!(ee<0||ee>=n.inWidth))for(var I=j+ee*p,te=A+F*t.strides[1],ne=0;ne<n.inChannels;++ne){for(var re=y[I+ne*m],ie=0;ie<n.outChannels;++ie)x[N+ie*v]+=re*b[te+ie];te+=n.outChannels}}}return u.toTensor()},Z.prototype.conv3d=function(e,t,n){for(var r=n.filterDepth,i=n.filterHeight,a=n.filterWidth,o=n.dilationDepth,s=n.dilationHeight,c=n.dilationWidth,l=n.padInfo.front,u=n.padInfo.left,d=n.padInfo.top,f=xr(n.outShape,e.dtype),p=this.readSync(e.dataId),m=this.readSync(t.dataId),h=f.values,g=0;g<n.batchSize;++g)for(var _=g*e.strides[0],v=g*f.strides[0],y=0;y<n.outDepth;++y)for(var b=v+y*f.strides[1],x=y*n.strideDepth-l,S=0;S<r;S++){var C=x+S*o;if(!(C<0||C>=n.inDepth))for(var w=S*t.strides[0],T=_+C*e.strides[1],E=0;E<n.outHeight;++E)for(var D=b+E*f.strides[2],O=E*n.strideHeight-d,k=0;k<i;k++){var A=O+k*s;if(!(A<0||A>=n.inHeight))for(var j=w+k*t.strides[1],M=T+A*e.strides[2],N=0;N<n.outWidth;++N)for(var P=D+N*n.outChannels,F=N*n.strideWidth-u,ee=0;ee<a;ee++){var I=F+ee*c;if(!(I<0||I>=n.inWidth))for(var te=j+ee*t.strides[2],ne=M+I*n.inChannels,re=te,ie=0;ie<n.inChannels;++ie){for(var ae=p[ne+ie],oe=0;oe<n.outChannels;++oe)h[P+oe]+=ae*m[re+oe];re+=n.outChannels}}}}return f.toTensor()},Z.prototype.conv2dDerInput=function(e,t,n){X([e,t],`conv2dDerInput`);for(var r=xr(n.inShape,`float32`),i=r.values,a=this.readSync(e.dataId),o=this.readSync(t.dataId),s=t.strides,c=s[0],l=s[1],u=s[2],d=n.batchSize,f=n.filterHeight,p=n.filterWidth,m=n.inChannels,h=n.inHeight,g=n.inWidth,_=n.outChannels,v=n.outHeight,y=n.outWidth,b=n.strideHeight,x=n.strideWidth,S=n.dataFormat,C=f-1-n.padInfo.top,w=p-1-n.padInfo.left,T=S===`channelsLast`,E=r.strides[0],D=T?r.strides[1]:r.strides[2],O=T?r.strides[2]:1,k=T?1:r.strides[1],A=e.strides[0],j=T?e.strides[1]:e.strides[2],M=T?e.strides[2]:1,N=T?1:e.strides[1],P=0;P<d;++P)for(var F=0;F<m;++F)for(var ee=0;ee<h;++ee)for(var I=ee-C,te=Math.max(0,Math.ceil(I/b)),ne=Math.min(v,(f+I)/b),re=0;re<g;++re){for(var ie=re-w,ae=Math.max(0,Math.ceil(ie/x)),oe=Math.min(y,(p+ie)/x),se=0,ce=te;ce<ne;++ce)for(var le=ce*b-I,ue=ae;ue<oe;++ue)for(var de=A*P+j*ce+M*ue,fe=c*(f-1-le)+l*(p-1-(ue*x-ie))+u*F,pe=0;pe<_;++pe)se+=a[de+N*pe]*o[fe+pe];i[E*P+D*ee+O*re+k*F]=se}return r.toTensor()},Z.prototype.conv3dDerInput=function(e,t,n){for(var r=xr(n.inShape,`float32`),i=r.values,a=r.strides,o=a[0],s=a[1],c=a[2],l=a[3],u=this.readSync(e.dataId),d=e.strides,f=d[0],p=d[1],m=d[2],h=d[3],g=this.readSync(t.dataId),_=t.strides,v=_[0],y=_[1],b=_[2],x=_[3],S=n.batchSize,C=n.filterDepth,w=n.filterHeight,T=n.filterWidth,E=n.inChannels,D=n.inDepth,O=n.inHeight,k=n.inWidth,A=n.outChannels,j=n.outDepth,M=n.outHeight,N=n.outWidth,P=n.strideDepth,F=n.strideHeight,ee=n.strideWidth,I=C-1-n.padInfo.front,te=w-1-n.padInfo.top,ne=T-1-n.padInfo.left,re=0;re<S;++re)for(var ie=0;ie<E;++ie)for(var ae=0;ae<D;++ae)for(var oe=ae-I,se=Math.max(0,Math.ceil(oe/P)),ce=Math.min(j,(C+oe)/P),le=0;le<O;++le)for(var ue=le-te,de=Math.max(0,Math.ceil(ue/F)),fe=Math.min(M,(w+ue)/F),pe=0;pe<k;++pe){for(var me=pe-ne,he=Math.max(0,Math.ceil(me/ee)),ge=Math.min(N,(T+me)/ee),_e=0,ve=se;ve<ce;++ve)for(var ye=ve*P-oe,be=de;be<fe;++be)for(var xe=be*F-ue,Se=he;Se<ge;++Se)for(var Ce=f*re+p*ve+m*be+h*Se,we=v*(C-1-ye)+y*(w-1-xe)+b*(T-1-(Se*ee-me))+x*ie,Te=0;Te<A;++Te)_e+=u[Ce+Te]*g[we+Te];i[o*re+s*ae+c*le+l*pe+ie]=_e}return r.toTensor()},Z.prototype.conv2dDerFilter=function(e,t,n){X([e,t],`conv2dDerFilter`);for(var r=n.strideHeight,i=n.strideWidth,a=n.filterHeight,o=n.filterWidth,s=n.dataFormat===`channelsLast`,c=xr(n.filterShape,`float32`),l=n.padInfo.left,u=n.padInfo.top,d=this.bufferSync(e),f=this.bufferSync(t),p=0;p<a;++p)for(var m=Math.max(0,Math.ceil((u-p)/r)),h=Math.min(n.outHeight,(n.inHeight+u-p)/r),g=0;g<o;++g)for(var _=Math.max(0,Math.ceil((l-g)/i)),v=Math.min(n.outWidth,(n.inWidth+l-g)/i),y=0;y<n.inChannels;++y)for(var b=0;b<n.outChannels;++b){for(var x=0,S=0;S<n.batchSize;++S)for(var C=m;C<h;++C)for(var w=p+C*r-u,T=_;T<v;++T){var E=g+T*i-l;x+=s?d.get(S,w,E,y)*f.get(S,C,T,b):d.get(S,y,w,E)*f.get(S,b,C,T)}c.set(x,p,g,y,b)}return c.toTensor()},Z.prototype.conv3dDerFilter=function(e,t,n){for(var r=n.strideDepth,i=n.strideHeight,a=n.strideWidth,o=n.filterDepth,s=n.filterHeight,c=n.filterWidth,l=xr(n.filterShape,`float32`),u=l.values,d=l.strides,f=d[0],p=d[1],m=d[2],h=d[3],g=this.readSync(t.dataId),_=t.strides,v=_[0],y=_[1],b=_[2],x=_[3],S=this.readSync(e.dataId),C=e.strides,w=C[0],T=C[1],E=C[2],D=C[3],O=n.padInfo.front,k=n.padInfo.left,A=n.padInfo.top,j=0;j<o;++j)for(var M=Math.max(0,Math.ceil((O-j)/r)),N=Math.min(n.outDepth,(n.inDepth+O-j)/r),P=j*f,F=0;F<s;++F)for(var ee=Math.max(0,Math.ceil((A-F)/i)),I=Math.min(n.outHeight,(n.inHeight+A-F)/i),te=F*p+P,ne=0;ne<c;++ne)for(var re=Math.max(0,Math.ceil((k-ne)/a)),ie=Math.min(n.outWidth,(n.inWidth+k-ne)/a),ae=ne*m+te,oe=0;oe<n.inChannels;++oe)for(var se=oe*h+ae,ce=0;ce<n.outChannels;++ce){for(var le=0,ue=0;ue<n.batchSize;++ue)for(var de=ue*w,fe=ue*v,pe=M;pe<N;++pe)for(var me=(j+pe*r-O)*T+de,he=pe*y+fe,ge=ee;ge<I;++ge)for(var _e=(F+ge*i-A)*E+me,ve=ge*b+he,ye=re;ye<ie;++ye){var be=ye*x+ve;le+=S[(ne+ye*a-k)*D+_e+oe]*g[be+ce]}u[se+ce]=le}return l.toTensor()},Z.prototype.fusedDepthwiseConv2D=function(e){var t=e.input,n=e.filter,r=e.convInfo,i=e.bias,a=e.activation,o=e.preluActivationWeights,s=this.depthwiseConv2D(t,n,r);return i&&(s=this.add(s,i)),a&&(s=kd(this,s,a,o)),s},Z.prototype.depthwiseConv2D=function(e,t,n){X([e,t],`depthwiseConv2D`);for(var r=n.filterHeight,i=n.filterWidth,a=n.dilationHeight,o=n.dilationWidth,s=n.padInfo.left,c=n.padInfo.top,l=n.outChannels/n.inChannels,u=xr(n.outShape,e.dtype),d=this.readSync(e.dataId),f=this.readSync(t.dataId),p=u.values,m=0;m<n.batchSize;++m)for(var h=m*e.strides[0],g=m*u.strides[0],_=0;_<n.outHeight;++_)for(var v=g+_*u.strides[1],y=_*n.strideHeight-s,b=0;b<r;++b){var x=y+b*a;if(!(x<0||x>=n.inHeight))for(var S=b*t.strides[0],C=h+x*e.strides[1],w=0;w<n.outWidth;++w)for(var T=v+w*u.strides[2],E=w*n.strideWidth-c,D=0;D<i;++D){var O=E+D*o;if(!(O<0||O>=n.inWidth))for(var k=S+D*t.strides[1],A=C+O*n.inChannels,j=T,M=k,N=0;N<n.inChannels;++N){for(var P=d[A+N],F=0;F<l;++F)p[j+F]+=P*f[M+F];j+=l,M+=l}}}return u.toTensor()},Z.prototype.depthwiseConv2DDerInput=function(e,t,n){X([e,t],`depthwiseConv2DDerInput`);for(var r=xr(n.inShape,`float32`),i=r.values,a=r.strides,o=a[0],s=a[1],c=a[2],l=this.readSync(e.dataId),u=e.strides,d=u[0],f=u[1],p=u[2],m=this.readSync(t.dataId),h=t.strides,g=h[0],_=h[1],v=h[2],y=n.batchSize,b=n.filterHeight,x=n.filterWidth,S=n.inChannels,C=n.inHeight,w=n.inWidth,T=n.outChannels,E=n.outHeight,D=n.outWidth,O=n.strideHeight,k=n.strideWidth,A=b-1-n.padInfo.top,j=x-1-n.padInfo.left,M=T/S,N=0;N<y;++N)for(var P=0;P<S;++P)for(var F=0;F<C;++F)for(var ee=F-A,I=Math.max(0,Math.ceil(ee/O)),te=Math.min(E,(b+ee)/O),ne=0;ne<w;++ne){for(var re=ne-j,ie=Math.max(0,Math.ceil(re/k)),ae=Math.min(D,(x+re)/k),oe=0,se=I;se<te;++se)for(var ce=se*O-ee,le=ie;le<ae;++le)for(var ue=d*N+f*se+p*le,de=g*(b-1-ce)+_*(x-1-(le*k-re))+v*P,fe=0;fe<M;++fe)oe+=l[ue+(P*M+fe)]*m[de+fe];i[o*N+s*F+c*ne+P]=oe}return r.toTensor()},Z.prototype.depthwiseConv2DDerFilter=function(e,t,n){X([e,t],`depthwiseConv2DDerFilter`);for(var r=n.strideHeight,i=n.strideWidth,a=n.filterHeight,o=n.filterWidth,s=xr(n.filterShape,`float32`),c=n.padInfo.left,l=n.padInfo.top,u=n.outChannels/n.inChannels,d=this.bufferSync(e),f=this.bufferSync(t),p=0;p<a;++p)for(var m=Math.max(0,Math.ceil((l-p)/r)),h=Math.min(n.outHeight,(n.inHeight+l-p)/r),g=0;g<o;++g)for(var _=Math.max(0,Math.ceil((c-g)/i)),v=Math.min(n.outWidth,(n.inWidth+c-g)/i),y=0;y<n.outChannels;++y){for(var b=Math.trunc(y/u),x=y%u,S=0,C=0;C<n.batchSize;++C)for(var w=m;w<h;++w)for(var T=p+w*r-l,E=_;E<v;++E){var D=g+E*i-c;S+=d.get(C,T,D,b)*f.get(C,w,E,y)}s.set(S,p,g,b,x)}return s.toTensor()},Z.prototype.tile=function(e,t){return X(e,`tile`),Qi(this.bufferSync(e),t)},Z.prototype.pad=function(e,t,n){X(e,`pad`);var r=t.map(function(t,n){return t[0]+e.shape[n]+t[1]}),i=t.map(function(e){return e[0]}),a=this.bufferSync(e),o=xr(r,e.dtype);n!==0&&o.values.fill(n);for(var s=0;s<e.size;s++){var c=a.indexToLoc(s),l=c.map(function(e,t){return e+i[t]});o.set.apply(o,[a.get.apply(a,c)].concat(l))}return o.toTensor()},Z.prototype.transpose=function(e,t){X(e,`transpose`);for(var n=Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[t[r]];var i=this.readSync(e.dataId),a=xr(n,e.dtype),o=this.bufferSync(e);for(r=0;r<e.size;++r){for(var s=o.indexToLoc(r),c=Array(s.length),l=0;l<c.length;l++)c[l]=s[t[l]];var u=a.locToIndex(c);a.values[u]=i[r]}return a.toTensor()},Z.prototype.gather=function(e,t,n){X([e,t],`gather`);var r=e.shape.slice(),i=this.readSync(t.dataId);r[n]=i.length;for(var a=xr(r,e.dtype),o=this.bufferSync(e),s=0;s<a.size;++s){var c=a.indexToLoc(s),l=c.slice();l[n]=i[c[n]];var u=o.locToIndex(l);a.values[s]=o.values[u]}return a.toTensor()},Z.prototype.batchToSpaceND=function(e,t,n){X([e],`batchToSpaceND`);var r=t.reduce(function(e,t){return e*t}),i=Xr(e.shape,t,r),a=Zr(i.length,t.length),o=Qr(e.shape,t,r),s=$r(n,t.length),c=ei(o,n,t.length);return e.reshape(i).transpose(a).reshape(o).slice(s,c)},Z.prototype.spaceToBatchND=function(e,t,n){X([e],`spaceToBatchND`);var r=t.reduce(function(e,t){return e*t}),i=[[0,0]];i.push.apply(i,n);for(var a=1+t.length;a<e.shape.length;++a)i.push([0,0]);var o=e.pad(i),s=Xr(o.shape,t,r,!1),c=Zr(s.length,t.length,!1),l=Qr(o.shape,t,r,!1);return o.reshape(s).transpose(c).reshape(l)},Z.prototype.pool=function(e,t,n){X(e,`pool`);for(var r=t.strideHeight,i=t.strideWidth,a=t.dilationHeight,o=t.dilationWidth,s=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=t.padInfo.top,u=t.padInfo.left,d=n===`max`?-1/0:1/0,f=this.readSync(e.dataId),p=xr(t.outShape,e.dtype),m=p.values,h=t.outShape[1]*t.outShape[2]*t.outShape[3],g=t.outShape[2]*t.outShape[3],_=t.outShape[3],v=0;v<t.batchSize;++v)for(var y=v*h,b=v*e.strides[0],x=0;x<t.inChannels;++x)for(var S=0;S<t.outHeight;++S)for(var C=S*r-l,w=Math.max(0,C),T=Math.min(t.inHeight,s+C),E=y+S*g,D=0;D<t.outWidth;++D){for(var O=D*i-u,k=Math.max(0,O),A=Math.min(t.inWidth,c+O),j=d,M=0,N=0,P=w;P<T;P+=a){for(var F=b+P*e.strides[1],ee=k;ee<A;ee+=o){var I=f[F+ee*e.strides[2]+x];n===`max`&&j<I?j=I:n===`avg`&&(M+=I,N++)}if(isNaN(j))break}m[E+D*_+x]=n===`avg`?M/N:j}return p.toTensor()},Z.prototype.maxPool=function(e,t){return this.pool(e,t,`max`)},Z.prototype.maxPoolPositions=function(e,t){for(var n=xr(t.outShape,`int32`),r=t.strideHeight,i=t.strideWidth,a=t.dilationHeight,o=t.dilationWidth,s=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=t.padInfo.top,u=t.padInfo.left,d=this.bufferSync(e),f=0;f<t.batchSize;++f)for(var p=0;p<t.inChannels;++p)for(var m=0;m<t.outHeight;++m){for(var h=m*r-l,g=h;g<0;)g+=a;for(var _=Math.min(t.inHeight,s+h),v=0;v<t.outWidth;++v){for(var y=v*i-u,b=y;b<0;)b+=o;for(var x=Math.min(t.inWidth,c+y),S=-1/0,C=-1,w=g;w<_;w+=a)for(var T=w-h,E=b;E<x;E+=o){var D=E-y,O=d.get(f,w,E,p);S<O&&(S=O,C=T*c+D)}n.set(C,f,m,v,p)}}return n.toTensor()},Z.prototype.maxPoolBackprop=function(e,t,n,r){X([t,n],`maxPoolBackprop`);for(var i=this.maxPoolPositions(t,r),a=r.strideHeight,o=r.strideWidth,s=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterHeight,u=r.effectiveFilterWidth,d=u-1-r.padInfo.left,f=l-1-r.padInfo.top,p=xr(t.shape,`float32`),m=this.bufferSync(i),h=this.bufferSync(e),g=0;g<r.batchSize;++g)for(var _=0;_<r.inChannels;++_)for(var v=0;v<r.inHeight;++v)for(var y=0;y<r.inWidth;++y){for(var b=v-f,x=y-d,S=0,C=0;C<l;C+=s){var w=(b+C)/a;if(!(w<0||w>=r.outHeight||Math.floor(w)!==w))for(var T=0;T<u;T+=c){var E=(x+T)/o;if(!(E<0||E>=r.outWidth||Math.floor(E)!==E)){var D=+(l*u-1-m.get(g,w,E,_)===C*u+T);D!=0&&(S+=h.get(g,w,E,_)*D)}}}p.set(S,g,v,y,_)}return p.toTensor()},Z.prototype.avgPoolBackprop=function(e,t,n){X([e,t],`avgPoolBackprop`);for(var r=n.strideHeight,i=n.strideWidth,a=n.filterHeight,o=n.filterWidth,s=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterHeight,u=n.effectiveFilterWidth,d=u-1-n.padInfo.left,f=l-1-n.padInfo.top,p=xr(t.shape,`float32`),m=1/(a*o),h=this.bufferSync(e),g=0;g<n.batchSize;++g)for(var _=0;_<n.inChannels;++_)for(var v=0;v<n.inHeight;++v)for(var y=0;y<n.inWidth;++y){for(var b=v-f,x=y-d,S=0,C=0;C<l;C+=s){var w=(b+C)/r;if(!(w<0||w>=n.outHeight||Math.floor(w)!==w))for(var T=0;T<u;T+=c){var E=(x+T)/i;E<0||E>=n.outWidth||Math.floor(E)!==E||(S+=h.get(g,w,E,_))}}p.set(S*m,g,v,y,_)}return p.toTensor()},Z.prototype.pool3d=function(e,t,n){X(e,`pool3d`);for(var r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left,h=n===`max`?-1/0:1/0,g=this.readSync(e.dataId),_=xr(t.outShape,e.dtype),v=_.values,y=t.outShape[1]*t.outShape[2]*t.outShape[3]*t.outShape[4],b=t.outShape[2]*t.outShape[3]*t.outShape[4],x=t.outShape[3]*t.outShape[4],S=t.outShape[4],C=0;C<t.batchSize;++C)for(var w=C*y,T=C*e.strides[0],E=0;E<t.inChannels;++E)for(var D=0;D<t.outDepth;++D){for(var O=D*r-f,k=O;k<0;)k+=o;for(var A=Math.min(t.inDepth,l+O),j=w+D*b,M=0;M<t.outHeight;++M){for(var N=M*i-p,P=N;P<0;)P+=s;for(var F=Math.min(t.inHeight,u+N),ee=j+M*x,I=0;I<t.outWidth;++I){for(var te=I*a-m,ne=te;ne<0;)ne+=c;for(var re=Math.min(t.inWidth,d+te),ie=ee+I*S,ae=h,oe=0,se=0,ce=k;ce<A;ce+=o){for(var le=T+ce*e.strides[1],ue=P;ue<F;ue+=s){for(var de=le+ue*e.strides[2],fe=ne;fe<re;fe+=c){var pe=g[de+fe*e.strides[3]+E];if(n===`max`&&ae<pe?ae=pe:n===`avg`&&(oe+=pe,se++),isNaN(ae))break}if(isNaN(ae))break}if(isNaN(ae))break}v[ie+E]=n===`avg`?oe/se:ae}}}return _.toTensor()},Z.prototype.avgPool3d=function(e,t){return X(e,`avgPool3d`),this.pool3d(e,t,`avg`).toFloat()},Z.prototype.avgPool3dBackprop=function(e,t,n){X([e,t],`avgPool3dBackprop`);for(var r=n.strideDepth,i=n.strideHeight,a=n.strideWidth,o=n.filterDepth,s=n.filterHeight,c=n.filterWidth,l=n.dilationDepth,u=n.dilationHeight,d=n.dilationWidth,f=n.effectiveFilterDepth,p=n.effectiveFilterHeight,m=n.effectiveFilterWidth,h=f-1-n.padInfo.front,g=m-1-n.padInfo.left,_=p-1-n.padInfo.top,v=xr(t.shape,`float32`),y=1/(o*s*c),b=this.bufferSync(e),x=0;x<n.batchSize;++x)for(var S=0;S<n.inChannels;++S)for(var C=0;C<n.inDepth;++C)for(var w=0;w<n.inHeight;++w)for(var T=0;T<n.inWidth;++T){for(var E=C-h,D=w-_,O=T-g,k=0,A=0;A<f;A+=l){var j=(E+A)/r;if(!(j<0||j>=n.outDepth||Math.floor(j)!==j))for(var M=0;M<p;M+=u){var N=(D+M)/i;if(!(N<0||N>=n.outHeight||Math.floor(N)!==N))for(var P=0;P<m;P+=d){var F=(O+P)/a;F<0||F>=n.outWidth||Math.floor(F)!==F||(k+=b.get(x,j,N,F,S))}}}v.set(k*y,x,C,w,T,S)}return v.toTensor()},Z.prototype.maxPool3d=function(e,t){return X(e,`maxPool3d`),this.pool3d(e,t,`max`).toFloat()},Z.prototype.maxPool3dPositions=function(e,t){for(var n=xr(t.outShape,`int32`),r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left,h=this.bufferSync(e),g=0;g<t.batchSize;++g)for(var _=0;_<t.inChannels;++_)for(var v=0;v<t.outDepth;++v){for(var y=v*r-f,b=y;b<0;)b+=o;for(var x=Math.min(t.inDepth,l+y),S=0;S<t.outHeight;++S){for(var C=S*i-p,w=C;w<0;)w+=s;for(var T=Math.min(t.inHeight,u+C),E=0;E<t.outWidth;++E){for(var D=E*a-m,O=D;O<0;)O+=c;for(var k=Math.min(t.inWidth,d+D),A=-1/0,j=-1,M=b;M<x;M+=o)for(var N=M-y,P=w;P<T;P+=s)for(var F=P-C,ee=O;ee<k;ee+=c){var I=ee-D,te=h.get(g,M,P,ee,_);A<=te&&(A=te,j=N*u*d+F*u+I)}n.set(j,g,v,S,E,_)}}}return n.toTensor()},Z.prototype.maxPool3dBackprop=function(e,t,n,r){X([t,n],`maxPool3dBackprop`);for(var i=this.maxPool3dPositions(t,r),a=r.strideDepth,o=r.strideHeight,s=r.strideWidth,c=r.dilationDepth,l=r.dilationHeight,u=r.dilationWidth,d=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,m=d-1-r.padInfo.front,h=p-1-r.padInfo.left,g=f-1-r.padInfo.top,_=xr(t.shape,`float32`),v=this.bufferSync(i),y=this.bufferSync(e),b=0;b<r.batchSize;++b)for(var x=0;x<r.inChannels;++x)for(var S=0;S<r.inDepth;++S)for(var C=0;C<r.inHeight;++C)for(var w=0;w<r.inWidth;++w){for(var T=S-m,E=C-g,D=w-h,O=0,k=0;k<d;k+=c){var A=(T+k)/a;if(!(A<0||A>=r.outDepth||Math.floor(A)!==A))for(var j=0;j<f;j+=l){var M=(E+j)/o;if(!(M<0||M>=r.outHeight||Math.floor(M)!==M))for(var N=0;N<p;N+=u){var P=(D+N)/s;if(!(P<0||P>=r.outWidth||Math.floor(P)!==P)){var F=+(d*f*p-1-v.get(b,A,M,P,x)===k*f*p+j*p+N);F!=0&&(O+=y.get(b,A,M,P,x)*F)}}}}_.set(O,b,S,C,w,x)}return _.toTensor()},Z.prototype.cast=function(e,t){return zi(e,t,this)},Z.prototype.reshape=function(e,t){return Bi(e,t)},Z.prototype.avgPool=function(e,t){return X(e,`avgPool`),this.pool(e,t,`avg`).toFloat()},Z.prototype.resizeBilinear=function(e,t,n,r){X(e,`resizeBilinear`);for(var i=e.shape,a=i[0],o=i[1],s=i[2],c=i[3],l=this.readSync(e.dataId),u=new Float32Array(k([a,t,n,c])),d=[r&&1<t?o-1:o,r&&1<n?s-1:s],f=[r&&1<t?t-1:t,r&&1<n?n-1:n],p=0,m=d[0]/f[0],h=d[1]/f[1],g=0;g<a;g++)for(var _=0;_<t;_++)for(var v=m*_,y=Math.floor(v),b=v-y,x=Math.min(o-1,Math.ceil(v)),S=g*e.strides[0]+y*e.strides[1],C=g*e.strides[0]+x*e.strides[1],w=0;w<n;w++)for(var T=h*w,E=Math.floor(T),D=T-E,O=Math.min(s-1,Math.ceil(T)),A=S+E*e.strides[2],j=C+E*e.strides[2],M=S+O*e.strides[2],N=C+O*e.strides[2],P=0;P<c;P++){var F=l[A+P],ee=l[j+P],I=F+(l[M+P]-F)*D,te=I+(ee+(l[N+P]-ee)*D-I)*b;u[p++]=te}return Rn(u,[a,t,n,c])},Z.prototype.resizeBilinearBackprop=function(e,t,n){X([e,t],`resizeBilinearBackprop`);for(var r=t.shape,i=r[0],a=r[1],o=r[2],s=r[3],c=e.shape,l=c[1],u=c[2],d=new Float32Array(i*a*o*s),f=[n&&1<l?a-1:a,n&&1<u?o-1:o],p=[n&&1<l?l-1:l,n&&1<u?u-1:u],m=f[0]/p[0],h=f[1]/p[1],g=this.readSync(e.dataId),_=0,v=0;v<i;v++)for(var y=v*t.strides[0],b=0;b<l;b++)for(var x=b*m,S=Math.floor(x),C=Math.min(Math.ceil(x),a-1),w=y+S*t.strides[1],T=y+C*t.strides[1],E=x-S,D=1-E,O=0;O<u;O++)for(var k=O*h,A=Math.floor(k),j=Math.min(Math.ceil(k),o-1),M=k-A,N=1-M,P=w+A*t.strides[2],F=w+j*t.strides[2],ee=T+A*t.strides[2],I=T+j*t.strides[2],te=D*N,ne=D*M,re=E*N,ie=E*M,ae=0;ae<s;ae++){var oe=g[_++];d[P+ae]+=oe*te,d[F+ae]+=oe*ne,d[ee+ae]+=oe*re,d[I+ae]+=oe*ie}return Un(d,[i,o,a,s],t.dtype)},Z.prototype.resizeNearestNeighbor=function(e,t,n,r){X(e,`resizeNearestNeighbor`);for(var i=e.shape,a=i[0],o=i[1],s=i[2],c=i[3],l=this.readSync(e.dataId),u=new Float32Array(a*t*n*c),d=[r&&1<t?o-1:o,r&&1<n?s-1:s],f=[r&&1<t?t-1:t,r&&1<n?n-1:n],p=d[0]/f[0],m=d[1]/f[1],h=0,g=0;g<a;g++)for(var _=g*e.strides[0],v=0;v<t;v++)for(var y=p*v,b=_+Math.min(o-1,r?Math.round(y):Math.floor(y))*e.strides[1],x=0;x<n;x++)for(var S=m*x,C=b+Math.min(s-1,r?Math.round(S):Math.floor(S))*e.strides[2],w=0;w<c;w++){var T=l[C+w];u[h++]=T}return Rn(u,[a,t,n,c],e.dtype)},Z.prototype.resizeNearestNeighborBackprop=function(e,t,n){X([e,t],`resizeNearestNeighborBackprop`);for(var r=t.shape,i=r[0],a=r[1],o=r[2],s=r[3],c=e.shape,l=c[1],u=c[2],d=new Float32Array(i*a*o*s),f=this.readSync(e.dataId),p=[n&&1<l?a-1:a,n&&1<u?o-1:o],m=[n&&1<l?l-1:l,n&&1<u?u-1:u],h=p[0]/m[0],g=p[1]/m[1],_=1/h,v=1/g,y=2*Math.ceil(_)+2,b=2*Math.ceil(v)+2,x=0;x<i;x++)for(var S=x*t.strides[0],C=0;C<a;C++)for(var w=S+C*t.strides[1],T=Math.floor(C*_),E=Math.floor(T-y/2),D=0;D<o;D++)for(var O=w+D*t.strides[2],k=Math.floor(D*v),A=Math.floor(k-b/2),j=0;j<s;j++){for(var M=0,N=0;N<y;N++){var P=N+E;if(!(P<0||l<=P)){var F=S+P*e.strides[1],ee=P*h;if(C===Math.min(a-1,n?Math.round(ee):Math.floor(ee)))for(var I=0;I<b;I++){var te=I+A;if(!(te<0||u<=te)){var ne=F+te*e.strides[2],re=te*g;D===Math.min(o-1,n?Math.round(re):Math.floor(re))&&(M+=f[ne+j])}}}}d[O+j]=M}return Un(d,t.shape,t.dtype)},Z.prototype.batchNormalization=function(e,t,n,r,i,a){X([e,t,n,i,a],`batchNorm`);for(var o=this.readSync(e.dataId),s=this.readSync(t.dataId),c=this.readSync(n.dataId),l=i?this.readSync(i.dataId):new Float32Array([1]),u=a?this.readSync(a.dataId):new Float32Array([0]),d=new Float32Array(o.length),f=u.length,p=l.length,m=c.length,h=s.length,g=0,_=0,v=0,y=0,b=0;b<o.length;++b)d[b]=u[g++]+(o[b]-s[_++])*l[v++]/Math.sqrt(c[y++]+r),f<=g&&(g=0),h<=_&&(_=0),p<=v&&(v=0),m<=y&&(y=0);return Un(d,e.shape)},Z.prototype.localResponseNormalization4D=function(e,t,n,r,i){X(e,`localResponseNormalization4D`);var a=e.shape[3],o=a-1,s=this.readSync(e.dataId),c=e.size,l=new Float32Array(c);function u(e){for(var n=e%a,r=e-n+Math.max(0,n-t),i=e-n+Math.min(n+t,o),c=0;r<=i;r++){var l=s[r];c+=l*l}return c}for(var d=0;d<c;d++){var f=u(d),p=s[d]*(n+r*f)**+-i;l[d]=p}return Un(l,e.shape)},Z.prototype.LRNGrad=function(e,t,n,r,i,a,o){X(e,`LRNGrad`);for(var s=e.shape[3],c=this.readSync(e.dataId),l=this.readSync(t.dataId),u=this.readSync(n.dataId),d=new Float32Array(e.size),f=e.size,p=0;p<f;p++){for(var m=p%s,h=p-m+Math.max(0,m-r),g=p-m+Math.min(s,m+r+1),_=0,v=h;v<g;v++)_+=l[v]**2;for(_=a*_+i,v=h;v<g;v++){var y=-2*a*o*l[v]*u[p]/_;p===v&&(y+=_**+-o),y*=c[p],d[v]+=y}}return Un(d,e.shape)},Z.prototype.multinomial=function(e,t,n,r){X(e,`multinomial`);for(var i=t?e:yi(e),a=i.shape[0],o=i.shape[1],s=Jn([a,n],`int32`),c=this.readSync(s.dataId),l=this.readSync(i.dataId),u=0;u<a;++u){var d=u*o,f=new Float32Array(o-1);f[0]=l[d];for(var p=1;p<f.length;++p)f[p]=f[p-1]+l[d+p];for(var m=mr(r.toString()),h=u*n,g=0;g<n;++g){var _=m();c[h+g]=f.length;for(var v=0;v<f.length;v++)if(_<f[v]){c[h+g]=v;break}}}return s},Z.prototype.oneHot=function(e,t,n,r){X(e,`oneHot`);var i=new Float32Array(e.size*t);i.fill(r);for(var a=this.readSync(e.dataId),o=0;o<e.size;++o)0<=a[o]&&a[o]<t&&(i[o*t+a[o]]=n);return Vn(i,[e.size,t],`int32`)},Z.prototype.nonMaxSuppression=function(e,t,n,r,i){return X(e,`nonMaxSuppression`),Ki(this.readSync(e.dataId),this.readSync(t.dataId),n,r,i)},Z.prototype.fft=function(e){return this.fftBatch(e,!1)},Z.prototype.ifft=function(e){return this.fftBatch(e,!0)},Z.prototype.fftBatch=function(e,t){for(var n=e.shape[0],r=e.shape[1],i=xr(e.shape,`float32`),a=xr(e.shape,`float32`),o=In(e).as2D(n,r),s=Ln(e).as2D(n,r),c=0;c<n;c++)for(var l=o.slice([c,0],[1,r]),u=s.slice([c,0],[1,r]),d=Fn(l,u),f=this.readSync(this.fftImpl(d,t).dataId),p=0;p<r;p++){var m=Wi(f,p);i.values[c*r+p]=m.real,a.values[c*r+p]=m.imag}return Fn(i.toTensor(),a.toTensor()).as2D(n,r)},Z.prototype.fftImpl=function(e,t){var n=e.as1D(),r=n.size;if(this.isExponentOf2(r)){var i=this.fftRadix2(n,r,t).as2D(e.shape[0],e.shape[1]);return t&&(i=Fn(In(i).div(G(r)),Ln(i).div(G(r)))),i}var a=this.readSync(e.dataId),o=function(e){for(var t=new Float32Array(e.length/2),n=new Float32Array(e.length/2),r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}(this.fourierTransformByMatmul(a,r,t));return Fn(o.real,o.imag).as2D(e.shape[0],e.shape[1])},Z.prototype.isExponentOf2=function(e){return!(e&e-1)},Z.prototype.fftRadix2=function(e,t,n){if(t===1)return e;var r=this.readSync(e.dataId),i=t/2,a=function(e){for(var t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t),i=0;i<e.length;i+=4)n[Math.floor(i/4)]=e[i],r[Math.floor(i/4)]=e[i+1];return{real:n,imag:r}}(r),o=Fn(a.real,a.imag).as1D(),s=function(e){for(var t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t),i=2;i<e.length;i+=4)n[Math.floor(i/4)]=e[i],r[Math.floor(i/4)]=e[i+1];return{real:n,imag:r}}(r),c=Fn(s.real,s.imag).as1D();o=this.fftRadix2(o,i,n),c=this.fftRadix2(c,i,n);var l=function(e,t){for(var n=new Float32Array(e/2),r=new Float32Array(e/2),i=0;i<Math.ceil(e/2);i++){var a=(t?2:-2)*Math.PI*(i/e);n[i]=Math.cos(a),r[i]=Math.sin(a)}return{real:n,imag:r}}(t,n),u=Fn(l.real,l.imag).mul(c),d=o.add(u),f=o.sub(u);return Fn(In(d).concat(In(f)),Ln(d).concat(Ln(f))).as1D()},Z.prototype.fourierTransformByMatmul=function(e,t,n){for(var r=new Float32Array(2*t),i=0;i<t;i++){for(var a=0,o=0,s=0;s<t;s++){var c=(m=i*s,h=t,g=(n?2:-2)*Math.PI*(m/h),{real:Math.cos(g),imag:Math.sin(g)}),l=Wi(e,s);a+=l.real*c.real-l.imag*c.imag,o+=l.real*c.imag+l.imag*c.real}n&&(a/=t,o/=t),d=a,f=o,(u=r)[2*(p=i)]=d,u[2*p+1]=f}var u,d,f,p,m,h,g;return r},Z.prototype.depthToSpace=function(e,t,n){T(n===`NHWC`,function(){return`Only NHWC dataFormat supported on CPU for depthToSpace. Got `+n}),T(1<t,function(){return`blockSize should be > 1 for depthToSpace, but was: `+t});for(var r=e.shape[0],i=e.shape[1],a=e.shape[2],o=e.shape[3],s=i*t,c=a*t,l=o/(t*t),u=this.readSync(e.dataId),d=new Float32Array(r*s*c*l),f=0,p=0;p<r;++p)for(var m=0;m<s;++m)for(var h=Math.floor(m/t),g=m%t,_=0;_<c;++_)for(var v=Math.floor(_/t),y=(g*t+_%t)*l,b=0;b<l;++b){var x=b+y+o*(v+a*(h+i*p));d[f++]=u[x]}return Un(d,[r,s,c,l])},Z.prototype.broadcastedBinaryOp=function(e,t,n,r){var i=Ei(e.shape,t.shape),a=xr(i,n),o=this.readSync(e.dataId),s=this.readSync(t.dataId),c=wi(e.shape,i),l=wi(t.shape,i),u=a.values;if(c.length+l.length===0)for(var d=0;d<u.length;++d)u[d]=r(o[d%o.length],s[d%s.length]);else{var f=this.bufferSync(e),p=this.bufferSync(t),m=function(n){var i=a.indexToLoc(n),d=i.slice(-e.rank);c.forEach(function(e){return d[e]=0});var m=f.locToIndex(d),h=i.slice(-t.rank);l.forEach(function(e){return h[e]=0});var g=p.locToIndex(h);u[n]=r(o[m],s[g])};for(d=0;d<u.length;++d)m(d)}return a.toTensor()},Z.prototype.broadcastedBinaryComplexOp=function(e,t,n){var r=Ei(e.shape,t.shape),i=xr(r,`float32`),a=xr(r,`float32`),o=this.readSync(e.dataId),s=this.readSync(t.dataId),c=wi(e.shape,r),l=wi(t.shape,r),u=i.values,d=a.values;if(c.length+l.length===0)for(var f=0;f<u.length;f++){var p=f%o.length,m=f%s.length,h=n(o[2*p],o[2*p+1],s[2*m],s[2*m+1]);u[f]=h.real,d[f]=h.imag}else{var g=this.bufferSync(this.data.get(e.dataId).complexTensors.real),_=this.bufferSync(this.data.get(t.dataId).complexTensors.real),v=function(r){var a=i.indexToLoc(r),f=a.slice(-e.rank);c.forEach(function(e){return f[e]=0});var p=g.locToIndex(f),m=a.slice(-t.rank);l.forEach(function(e){return m[e]=0});var h=_.locToIndex(m),v=n(o[2*p],o[2*p+1],s[2*h],s[2*h+1]);u[r]=v.real,d[r]=v.imag};for(f=0;f<u.length;f++)v(f)}return this.complex(i.toTensor(),a.toTensor())},Z.prototype.split=function(e,t,n){return Zi(e,t,n)},Z.prototype.dispose=function(){},Z.prototype.floatPrecision=function(){return 32},Z.prototype.epsilon=function(){return 1e-7},Z.prototype.cropAndResize=function(e,t,n,r,i,a){for(var o=e.shape,s=o[0],c=o[1],l=o[2],u=o[3],d=t.shape[0],f=r[0],p=r[1],m=xr([d,f,p,u],`float32`),h=this.readSync(t.dataId),g=this.readSync(n.dataId),_=this.readSync(e.dataId),v=e.strides,y=m.strides,b=0;b<d;b++){var x=4*b,S=h[x],C=h[1+x],w=h[2+x],T=h[3+x],E=g[b];if(!(s<=E))for(var D=1<f?(w-S)*(c-1)/(f-1):0,O=1<p?(T-C)*(l-1)/(p-1):0,k=0;k<f;k++){var A=1<f?S*(c-1)+k*D:.5*(S+w)*(c-1);if(A<0||c-1<A)for(var j=0;j<p;j++)for(var M=0;M<u;M++){var N=M+j*y[2]+k*y[1]+b*y[0];m.values[N]=a}else if(i===`bilinear`){var P=Math.floor(A),F=Math.ceil(A),ee=A-P;for(j=0;j<p;j++)if((ce=1<p?C*(l-1)+j*O:.5*(C+T)*(l-1))<0||l-1<ce)for(M=0;M<u;M++)N=M+j*y[2]+k*y[1]+b*y[0],m.values[N]=a;else{var I=Math.floor(ce),te=Math.ceil(ce),ne=ce-I;for(M=0;M<u;M++){var re=_[N=M+I*v[2]+P*v[1]+E*v[0]],ie=_[N=M+te*v[2]+P*v[1]+E*v[0]],ae=_[N=M+I*v[2]+F*v[1]+E*v[0]],oe=re+(ie-re)*ne,se=ae+(_[N=M+te*v[2]+F*v[1]+E*v[0]]-ae)*ne;N=M+j*y[2]+k*y[1]+b*y[0],m.values[N]=oe+(se-oe)*ee}}}else for(j=0;j<p;++j){var ce;if((ce=1<p?C*(l-1)+j*O:.5*(C+T)*(l-1))<0||l-1<ce)for(M=0;M<u;M++)N=M+j*y[2]+k*y[1]+b*y[0],m.values[N]=a;else{var le=Math.round(ce),ue=Math.round(A);for(M=0;M<u;M++){var de=M+le*v[2]+ue*v[1]+E*v[0],fe=M+j*y[2]+k*y[1]+b*y[0];m.values[fe]=_[de]}}}}}return m.toTensor()},Z.prototype.sparseToDense=function(e,t,n,r){var i=oi(0,e,n),a=i.sliceRank,o=i.numUpdates,s=i.sliceSize,c=i.strides,l=i.outputSize;return this.scatter(e,t,n,l,s,o,a,c,r,!1)},Z.prototype.gatherND=function(e,t){var n=t.shape,r=n[n.length-1],i=ti(e,t),a=i[0],o=i[1],s=i[2],c=i[3];if(o===0)return Rn([],a,e.dtype);for(var l=new Ie([o,s],e.dtype),u=this.readSync(t.dataId),d=this.readSync(e.dataId),f=0;f<o;f++){for(var p=[],m=0,h=0;h<r;h++){var g=u[f*r+h];m+=g*c[h],p.push(g)}if(m<0||m>=e.size/s)throw Error(`Invalid indices: `+p+` does not index into `+e.shape);for(var _=0;_<s;_++)l.values[f*s+_]=d[m*s+_]}return l.toTensor().reshape(a)},Z.prototype.scatterND=function(e,t,n){var r=oi(0,e,n),i=r.sliceRank,a=r.numUpdates,o=r.sliceSize,s=r.strides,c=r.outputSize,l=G(0);return this.scatter(e,t,n,c,o,a,i,s,l,!0)},Z.prototype.fill=function(e,t,n){var r=re(n||=pe(t),k(e));return r.fill(t),B.makeTensor(r,e,n,this)},Z.prototype.onesLike=function(e){if(e.dtype===`string`)throw Error(`onesLike is not supported for string tensors`);return this.fill(e.shape,1,e.dtype)},Z.prototype.zerosLike=function(e){var t=re(e.dtype,k(e.shape));return this.makeOutput(t,e.shape,e.dtype)},Z.prototype.linspace=function(e,t,n){return Vi(e,t,n)},Z.prototype.scatter=function(e,t,n,r,i,a,o,s,c,l){var u=[r/i,i],d=this.readSync(e.dataId),f=this.readSync(t.dataId);if(r===0)return Rn([],n,t.dtype);var p=new Ie(u,t.dtype);p.values.fill(this.readSync(c.dataId)[0]);for(var m=0;m<a;m++){for(var h=[],g=0,_=0;_<o;_++){var v=d[m*o+_];h.push(v),g+=v*s[_]}if(g<0||r/i<=g)throw Error(`Invalid indices: `+h+` does not index into `+n);for(var y=0;y<i;y++)l?p.values[g*i+y]+=f[m*i+y]:p.values[g*i+y]=t.rank===0?f[0]:f[m*i+y]}return p.toTensor().reshape(n)},Z);function Z(){var e=Ad.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new xi(e,B),e}B.registerBackend(`cpu`,function(){return new jd},1);for(var Md=0,Nd=[{kernelName:`NonMaxSuppressionV5`,backendName:`cpu`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs,i=t,a=i.boxes,o=i.scores,s=r,c=s.maxOutputSize,l=s.iouThreshold,u=s.scoreThreshold,d=s.softNmsSigma,f=n;X(a,`NonMaxSuppressionWithScore`);var p=qi(f.data.get(a.dataId).values,f.data.get(o.dataId).values,c,l,u,d);return[p.selectedIndices,p.selectedScores]}},{kernelName:`Square`,backendName:`cpu`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t.x,i=n;X(r,`square`);for(var a=i.data.get(r.dataId).values,o=new Float32Array(a.length),s=0;s<a.length;++s){var c=a[s];o[s]=c*c}return{dataId:i.write(o,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:Vs,backendName:`cpu`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t,i=r.a,a=r.b,o=n;X([i,a],Vs);var s=o.data.get(i.dataId).values,c=o.data.get(a.dataId).values,l=function(e,t,n,r,i,a){var o=Ei(e,t),s=o.length,c=ge(o),l=ne(i,k(o)),u=e.length,d=t.length,f=ge(e),p=ge(t),m=wi(e,o),h=wi(t,o);if(m.length+h.length===0)for(var g=0;g<l.length;++g)l[g]=a(n[g%n.length],r[g%r.length]);else{var _=function(e){var t=Ee(e,s,c),i=t.slice(-u);m.forEach(function(e){return i[e]=0});var o=Te(i,u,f),g=t.slice(-d);h.forEach(function(e){return g[e]=0});var _=Te(g,d,p);l[e]=a(n[o],r[_])};for(g=0;g<l.length;++g)_(g)}return[l,o]}(i.shape,a.shape,s,c,i.dtype,function(e,t){var n=e-t;return n*n}),u=l[0],d=l[1];return{dataId:o.write(u,d,i.dtype),shape:d,dtype:i.dtype}}}];Md<Nd.length;Md++)v(Nd[Md]);for(var Pd,Fd=function(e){this.variableNames=[`A`];var t=oa(),n=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+`.0, `+n+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},Id=function(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;var t=oa(),n=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+`.0, `+n+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `},Ld=0,Rd=[{kernelName:`FromPixels`,backendName:`webgl`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs,i=t.pixels,a=r.numChannels,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,c=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],l=c[0],u=c[1],f=[u,l],p=[u,l,a];(s||o)&&(Pd??=document.createElement(`canvas`).getContext(`2d`),Pd.canvas.width=l,Pd.canvas.height=u,Pd.drawImage(i,0,0,l,u),i=Pd.canvas);var m=n.makeTensorInfo(f,`int32`);n.texData.get(m.dataId).usage=mt.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(m.dataId),i);var h=d().getBool(`WEBGL_PACK`)?new Id(p):new Fd(p),g=n.runWebGLProgram(h,[m],`int32`);return n.disposeData(m.dataId),g}},{kernelName:`NonMaxSuppressionV5`,backendName:`webgl`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs;xn(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);var i=t,a=i.boxes,o=i.scores,s=r,c=s.maxOutputSize,l=s.iouThreshold,u=s.scoreThreshold,d=s.softNmsSigma,f=n,p=qi(f.readSync(a.dataId),f.readSync(o.dataId),c,l,u,d);return[p.selectedIndices,p.selectedScores]}},{kernelName:`Square`,backendName:`webgl`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t.x,i=n,a=new _s(r.shape,`return x * x;`);return i.runWebGLProgram(a,[r],r.dtype)}},{kernelName:Vs,backendName:`webgl`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t,i=r.a,a=r.b,o=n,s=d().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ca(`return (a - b) * (a - b);`,i.shape,a.shape):new Sa(`return (a - b) * (a - b);`,i.shape,a.shape);return o.compileAndRun(s,[i,a])}}];Ld<Rd.length;Ld++)v(Rd[Ld]);for(var zd=0,Bd=[{kernelName:`Square`,gradFunc:function(e,t){var n=t[0];return{x:function(){return e.mul(n.toFloat().mul(2))}}}},{kernelName:Vs,gradFunc:function(e,t){var n=t[0],r=t[1],i=G(2);return{a:function(){return rl(e,rl(i,cl(n,r)))},b:function(){return rl(e,rl(i,cl(r,n)))}}}}];zd<Bd.length;zd++)y(Bd[zd]);var Vd=(Hd.prototype.fetch=function(e,t){return fetch(e,t)},Hd.prototype.now=function(){return performance.now()},Hd.prototype.encode=function(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Browser's encoder only supports utf-8, but got `+t);return this.textEncoder??=new TextEncoder,this.textEncoder.encode(e)},Hd.prototype.decode=function(e,t){return new TextDecoder(t).decode(e)},Hd);function Hd(){}d().get(`IS_BROWSER`)&&d().setPlatform(`browser`,new Vd);var Ud,Wd=(Gd.prototype.fetch=function(e,t){return d().global.fetch==null?(Ud??=r(),Ud(e,t)):d().global.fetch(e,t)},Gd.prototype.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6},Gd.prototype.encode=function(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Node built-in encoder only supports utf-8, but got `+t);return this.textEncoder.encode(e)},Gd.prototype.decode=function(e,t){return e.length===0?``:new this.util.TextDecoder(t).decode(e)},Gd);function Gd(){this.util=n(),this.textEncoder=new this.util.TextEncoder}d().get(`IS_NODE`)&&d().setPlatform(`node`,new Wd);var Kd={float32:4,int32:4,uint16:2,uint8:1,bool:1},qd=4;function Jd(e,t){for(var n={},r=0,i=function(t){var i=t.name,a=t.dtype,o=t.shape,s=k(o),c=void 0;if(`quantization`in t){var l=t.quantization;if(l.dtype!==`uint8`&&l.dtype!==`uint16`)throw Error(`Weight `+t.name+` has unknown quantization dtype `+l.dtype+`. Supported quantization dtypes are: 'uint8' and 'uint16'.`);var u=Kd[l.dtype],d=e.slice(r,r+s*u),f=l.dtype===`uint8`?new Uint8Array(d):new Uint16Array(d);if(a===`float32`)c=Float32Array.from(f,function(e){return e*l.scale+l.min});else{if(a!==`int32`)throw Error(`Unsupported dtype in weight '`+i+`': `+a);c=Int32Array.from(f,function(e){return Math.round(e*l.scale+l.min)})}r+=s*u}else if(a===`string`){var p=k(t.shape);c=[];for(var m=0;m<p;m++){var h=new Uint32Array(e.slice(r,r+qd))[0];r+=qd;var g=new Uint8Array(e.slice(r,r+h));c.push(g),r+=h}}else{var _=Kd[a];if(d=e.slice(r,r+s*_),a===`float32`)c=new Float32Array(d);else if(a===`int32`)c=new Int32Array(d);else{if(a!==`bool`)throw Error(`Unsupported dtype in weight '`+i+`': `+a);c=new Uint8Array(d)}r+=s*_}n[i]=Rn(c,o,a)},a=0,o=t;a<o.length;a++)i(o[a]);return n}var Yd=typeof Buffer<`u`&&(typeof Blob>`u`||typeof atob>`u`||typeof btoa>`u`);function Xd(e){return Yd?Buffer.byteLength(e):new Blob([e]).size}function Zd(e){var t=0;e.forEach(function(e){t+=e.byteLength});var n=new Uint8Array(t),r=0;return e.forEach(function(e){n.set(new Uint8Array(e),r),r+=e.byteLength}),n.buffer}function Qd(e){for(e=e.trim();e.endsWith(`/`);)e=e.slice(0,e.length-1);var t=e.split(`/`);return t[t.length-1]}function $d(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`Expected JSON model topology, received ArrayBuffer.`);return{dateSaved:new Date,modelTopologyType:`JSON`,modelTopologyBytes:e.modelTopology==null?0:Xd(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Xd(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}var ef=(af.getInstance=function(){return af.instance??=new af,af.instance},af.registerSaveRouter=function(e){af.getInstance().saveRouters.push(e)},af.registerLoadRouter=function(e){af.getInstance().loadRouters.push(e)},af.getSaveHandlers=function(e){return af.getHandlers(e,`save`)},af.getLoadHandlers=function(e,t){return af.getHandlers(e,`load`,t)},af.getHandlers=function(e,t,n){var r=[];return(t===`load`?af.getInstance().loadRouters:af.getInstance().saveRouters).forEach(function(t){var i=t(e,n);i!==null&&r.push(i)}),r},af),tf=`://`,nf=(rf.getInstance=function(){return rf.instance??=new rf,rf.instance},rf.registerManager=function(e,t){T(e!=null,function(){return`scheme must not be undefined or null.`}),e.endsWith(tf)&&(e=e.slice(0,e.indexOf(tf))),T(0<e.length,function(){return`scheme must not be an empty string.`});var n=rf.getInstance();T(n.managers[e]==null,function(){return`A model store manager is already registered for scheme '`+e+`'.`}),n.managers[e]=t},rf.getManager=function(e){var t=this.getInstance().managers[e];if(t==null)throw Error(`Cannot find model manager for scheme '`+e+`'`);return t},rf.getSchemes=function(){return Object.keys(this.getInstance().managers)},rf);function rf(){this.managers={}}function af(){this.saveRouters=[],this.loadRouters=[]}function of(e){if(e.indexOf(tf)===-1)throw Error(`The url string provided does not contain a scheme. Supported schemes are: `+nf.getSchemes().join(`,`));return{scheme:e.split(tf)[0],path:e.split(tf)[1]}}function sf(e,t,n){return n===void 0&&(n=!1),s(this,void 0,void 0,function(){var r,i,a,o,s,l,u,d,f;return c(this,function(c){switch(c.label){case 0:return T(e!==t,function(){return`Old path and new path are the same: '`+e+`'`}),T(0<(r=ef.getLoadHandlers(e)).length,function(){return`Copying failed because no load handler is found for source URL `+e+`.`}),T(r.length<2,function(){return`Copying failed because more than one (`+r.length+`) load handlers for source URL `+e+`.`}),i=r[0],T(0<(a=ef.getSaveHandlers(t)).length,function(){return`Copying failed because no save handler is found for destination URL `+t+`.`}),T(a.length<2,function(){return`Copying failed because more than one (`+r.length+`) save handlers for destination URL `+t+`.`}),o=a[0],s=of(e).scheme,l=of(e).path,u=s===of(e).scheme,[4,i.load()];case 1:return d=c.sent(),n&&u?[4,nf.getManager(s).removeModel(l)]:[3,3];case 2:c.sent(),c.label=3;case 3:return[4,o.save(d)];case 4:return f=c.sent(),!n||u?[3,6]:[4,nf.getManager(s).removeModel(l)];case 5:c.sent(),c.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var cf=`models_store`,lf=`model_info_store`;function uf(){if(!d().getBool(`IS_BROWSER`))throw Error(`Failed to obtain IndexedDB factory because the current environmentis not a web browser.`);var e=window||self,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw Error(`The current browser does not appear to support IndexedDB.`);return t}function df(e){var t=e.result;t.createObjectStore(cf,{keyPath:`modelPath`}),t.createObjectStore(lf,{keyPath:`modelPath`})}function ff(e){return d().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(pf.URL_SCHEME)?(t=e.slice(pf.URL_SCHEME.length),new pf(t)):null;var t}var pf=(mf.prototype.save=function(e){return s(this,void 0,void 0,function(){return c(this,function(t){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);return[2,this.databaseAction(this.modelPath,e)]})})},mf.prototype.load=function(){return s(this,void 0,void 0,function(){return c(this,function(e){return[2,this.databaseAction(this.modelPath)]})})},mf.prototype.databaseAction=function(e,t){var n=this;return new Promise(function(e,r){var i=n.indexedDB.open(`tensorflowjs`,1);i.onupgradeneeded=function(){return df(i)},i.onsuccess=function(){var a=i.result;if(t==null){var o=a.transaction(cf,`readonly`),s=o.objectStore(cf).get(n.modelPath);s.onsuccess=function(){if(s.result==null)return a.close(),r(Error(`Cannot find model with path '`+n.modelPath+`' in IndexedDB.`));e(s.result.modelArtifacts)},s.onerror=function(e){return a.close(),r(s.error)},o.oncomplete=function(){return a.close()}}else{var c,l=$d(t),u=a.transaction(lf,`readwrite`),d=u.objectStore(lf),f=d.put({modelPath:n.modelPath,modelArtifactsInfo:l});f.onsuccess=function(){var i=(c=a.transaction(cf,`readwrite`)).objectStore(cf).put({modelPath:n.modelPath,modelArtifacts:t,modelArtifactsInfo:l});i.onsuccess=function(){return e({modelArtifactsInfo:l})},i.onerror=function(e){var t=(d=u.objectStore(lf)).delete(n.modelPath);t.onsuccess=function(){return a.close(),r(i.error)},t.onerror=function(e){return a.close(),r(i.error)}}},f.onerror=function(e){return a.close(),r(f.error)},u.oncomplete=function(){c==null?a.close():c.oncomplete=function(){return a.close()}}}},i.onerror=function(e){return r(i.error)}})},mf.URL_SCHEME=`indexeddb://`,mf);function mf(e){if(this.indexedDB=uf(),e==null||!e)throw Error(`For IndexedDB, modelPath must not be null, undefined or empty.`);this.modelPath=e}ef.registerSaveRouter(ff),ef.registerLoadRouter(ff);var hf=(gf.prototype.listModels=function(){return s(this,void 0,void 0,function(){var e=this;return c(this,function(t){return[2,new Promise(function(t,n){var r=e.indexedDB.open(`tensorflowjs`,1);r.onupgradeneeded=function(){return df(r)},r.onsuccess=function(){var e=r.result,i=e.transaction(lf,`readonly`),a=i.objectStore(lf).getAll();a.onsuccess=function(){for(var e={},n=0,r=a.result;n<r.length;n++){var i=r[n];e[i.modelPath]=i.modelArtifactsInfo}t(e)},a.onerror=function(t){return e.close(),n(a.error)},i.oncomplete=function(){return e.close()}},r.onerror=function(e){return n(r.error)}})]})})},gf.prototype.removeModel=function(e){return s(this,void 0,void 0,function(){var t=this;return c(this,function(n){var r;return e=(r=e).startsWith(pf.URL_SCHEME)?r.slice(pf.URL_SCHEME.length):r,[2,new Promise(function(n,r){var i=t.indexedDB.open(`tensorflowjs`,1);i.onupgradeneeded=function(){return df(i)},i.onsuccess=function(){var t,a=i.result,o=a.transaction(lf,`readwrite`),s=o.objectStore(lf),c=s.get(e);c.onsuccess=function(){if(c.result==null)return a.close(),r(Error(`Cannot find model with path '`+e+`' in IndexedDB.`));function i(){var i=(t=a.transaction(cf,`readwrite`)).objectStore(cf).delete(e);i.onsuccess=function(){return n(c.result.modelArtifactsInfo)},i.onerror=function(e){return r(c.error)}}var o=s.delete(e);o.onsuccess=i,o.onerror=function(e){return i(),a.close(),r(c.error)}},c.onerror=function(e){return a.close(),r(c.error)},o.oncomplete=function(){t==null?a.close():t.oncomplete=function(){return a.close()}}},i.onerror=function(e){return r(i.error)}})]})})},gf);function gf(){this.indexedDB=uf()}if(d().getBool(`IS_BROWSER`))try{nf.registerManager(pf.URL_SCHEME,new hf)}catch{}var _f=`/`,vf=`tensorflowjs_models`,yf=`info`,bf=`model_topology`,xf=`weight_specs`,Sf=`weight_data`,Cf=`model_metadata`;function wf(e){return{info:[vf,e,yf].join(_f),topology:[vf,e,bf].join(_f),weightSpecs:[vf,e,xf].join(_f),weightData:[vf,e,Sf].join(_f),modelMetadata:[vf,e,Cf].join(_f)}}function Tf(e){var t=e.split(_f);if(t.length<3)throw Error(`Invalid key format: `+e);return t.slice(1,t.length-1).join(_f)}function Ef(e){return d().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Df.URL_SCHEME)?(t=e.slice(Df.URL_SCHEME.length),new Df(t)):null;var t}var Df=(Of.prototype.save=function(e){return s(this,void 0,void 0,function(){var t,n,r;return c(this,function(i){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=$d(e);try{return this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(e){if(Yd)return Buffer.from(e).toString(`base64`);for(var t=new Uint8Array(e),n=``,r=0,i=t.length;r<i;r++)n+=String.fromCharCode(t[r]);return btoa(n)}(e.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata})),[2,{modelArtifactsInfo:r}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),Error(`Failed to save model '`+this.modelPath+`' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=`+r.modelTopologyBytes+`, weightSpecsBytes=`+r.weightSpecsBytes+`, weightDataBytes=`+r.weightDataBytes+`.`)}})})},Of.prototype.load=function(){return s(this,void 0,void 0,function(){var e,t,n,r,i,a,o;return c(this,function(s){if((e=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw Error(`In local storage, there is no model with name '`+this.modelPath+`'`);if(e.modelTopologyType!==`JSON`)throw Error(`BrowserLocalStorage does not support loading non-JSON model topology yet.`);if(t={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw Error(`In local storage, the topology of model '`+this.modelPath+`' is missing.`);if(t.modelTopology=n,(r=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw Error(`In local storage, the weight specs of model '`+this.modelPath+`' are missing.`);if(t.weightSpecs=r,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),t.format=a.format,t.generatedBy=a.generatedBy,t.convertedBy=a.convertedBy,t.userDefinedMetadata=a.userDefinedMetadata),(o=this.LS.getItem(this.keys.weightData))==null)throw Error(`In local storage, the binary weight values of model '`+this.modelPath+`' are missing.`);return t.weightData=function(e){if(Yd){var t=Buffer.from(e,`base64`);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}for(var n=atob(e),r=new Uint8Array(n.length),i=0;i<n.length;++i)r.set([n.charCodeAt(i)],i);return r.buffer}(o),[2,t]})})},Of.URL_SCHEME=`localstorage://`,Of);function Of(e){if(!d().getBool(`IS_BROWSER`)||typeof window>`u`||window.localStorage===void 0)throw Error(`The current environment does not support local storage.`);if(this.LS=window.localStorage,e==null||!e)throw Error(`For local storage, modelPath must not be null, undefined or empty.`);this.modelPath=e,this.keys=wf(this.modelPath)}ef.registerSaveRouter(Ef),ef.registerLoadRouter(Ef);var kf=(Af.prototype.listModels=function(){return s(this,void 0,void 0,function(){var e,t,n,r,i,a;return c(this,function(o){for(e={},t=vf+_f,n=_f+yf,r=0;r<this.LS.length;++r)(i=this.LS.key(r)).startsWith(t)&&i.endsWith(n)&&(a=Tf(i),e[a]=JSON.parse(this.LS.getItem(i)));return[2,e]})})},Af.prototype.removeModel=function(e){return s(this,void 0,void 0,function(){var t,n;return c(this,function(r){var i;if(e=(i=e).startsWith(Df.URL_SCHEME)?i.slice(Df.URL_SCHEME.length):i,t=wf(e),this.LS.getItem(t.info)==null)throw Error(`Cannot find model at path '`+e+`'`);return n=JSON.parse(this.LS.getItem(t.info)),this.LS.removeItem(t.info),this.LS.removeItem(t.topology),this.LS.removeItem(t.weightSpecs),this.LS.removeItem(t.weightData),[2,n]})})},Af);function Af(){T(d().getBool(`IS_BROWSER`),function(){return`Current environment is not a web browser`}),T(typeof window>`u`||window.localStorage!==void 0,function(){return`Current browser does not appear to support localStorage`}),this.LS=window.localStorage}if(d().getBool(`IS_BROWSER`))try{nf.registerManager(Df.URL_SCHEME,new kf)}catch{}function jf(e){return new Promise(function(e){return setTimeout(e)}).then(e)}var Mf=(Ff.prototype.save=function(e){return s(this,void 0,void 0,function(){var t,n,r,i,a,o;return c(this,function(s){switch(s.label){case 0:if(typeof document>`u`)throw Error("Browser downloads are not supported in this environment since `document` is not present");if(t=window.URL.createObjectURL(new Blob([e.weightData],{type:`application/octet-stream`})),!(e.modelTopology instanceof ArrayBuffer))return[3,1];throw Error(`BrowserDownloads.save() does not support saving model topology in binary formats yet.`);case 1:return n=[{paths:[`./`+this.weightDataFileName],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:n},i=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:`application/json`})),(a=this.jsonAnchor==null?document.createElement(`a`):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,jf(function(){return a.dispatchEvent(new MouseEvent(`click`))})];case 2:return s.sent(),e.weightData==null?[3,4]:((o=this.weightDataAnchor==null?document.createElement(`a`):this.weightDataAnchor).download=this.weightDataFileName,o.href=t,[4,jf(function(){return o.dispatchEvent(new MouseEvent(`click`))})]);case 3:s.sent(),s.label=4;case 4:return[2,{modelArtifactsInfo:$d(e)}]}})})},Ff.URL_SCHEME=`downloads://`,Ff),Nf=(Pf.prototype.load=function(){return s(this,void 0,void 0,function(){var e,t,n=this;return c(this,function(r){return e=this.files[0],t=this.files.slice(1),[2,new Promise(function(r,i){var a=new FileReader;a.onload=function(a){var o=JSON.parse(a.target.result),s=o.modelTopology;if(s!=null){t.length===0&&r({modelTopology:s});var c=o.weightsManifest;if(c!=null){var l;try{l=n.checkManifestAndWeightFiles(c,t)}catch(e){i(e);return}var u=[],d=[],f=[];c.forEach(function(e){e.paths.forEach(function(e){d.push(e),f.push(null)}),u.push.apply(u,e.weights)}),c.forEach(function(e){e.paths.forEach(function(e){var t=new FileReader;t.onload=function(t){var n=t.target.result,i=d.indexOf(e);f[i]=n,f.indexOf(null)===-1&&r({modelTopology:s,weightSpecs:u,weightData:Zd(f),format:o.format,generatedBy:o.generatedBy,convertedBy:o.convertedBy,userDefinedMetadata:o.userDefinedMetadata})},t.onerror=function(t){return i(`Failed to weights data from file of path '`+e+`'.`)},t.readAsArrayBuffer(l[e])})})}else i(Error(`weightManifest field is missing from file `+e.name))}else i(Error(`modelTopology field is missing from file `+e.name))},a.onerror=function(t){return i(`Failed to read model topology and weights manifest JSON from file '`+e.name+`'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`)},a.readAsText(e)})]})})},Pf.prototype.checkManifestAndWeightFiles=function(e,t){for(var n=[],r=t.map(function(e){return Qd(e.name)}),i={},a=0,o=e;a<o.length;a++)o[a].paths.forEach(function(e){var a=Qd(e);if(n.indexOf(a)!==-1)throw Error(`Duplicate file basename found in weights manifest: '`+a+`'`);if(n.push(a),r.indexOf(a)===-1)throw Error(`Weight file with basename '`+a+`' is not provided.`);i[e]=t[r.indexOf(a)]});if(n.length!==t.length)throw Error(`Mismatch in the number of files in weights manifest (`+n.length+`) and the number of weight files provided (`+t.length+`).`);return i},Pf);function Pf(e){if(e==null||e.length<1)throw Error(`When calling browserFiles, at least 1 file is required, but received `+e);this.files=e}function Ff(e){if(!d().getBool(`IS_BROWSER`))throw Error(`browserDownloads() cannot proceed because the current environment is not a browser.`);e.startsWith(Ff.URL_SCHEME)&&(e=e.slice(Ff.URL_SCHEME.length)),e!=null&&e.length!==0||(e=`model`),this.modelTopologyFileName=e+`.json`,this.weightDataFileName=e+`.weights.bin`}function If(e,t,n,r){var i,a,o;T((o=e)!=null&&Array.isArray(o)&&0<o.length,function(){return`promises must be a none empty array`}),i=n??=0,a=r??=1,T(0<=i&&i<=1,function(){return`Progress fraction must be in range [0, 1], but got startFraction `+i}),T(0<=a&&a<=1,function(){return`Progress fraction must be in range [0, 1], but got endFraction `+a}),T(i<=a,function(){return`startFraction must be no more than endFraction, but got startFraction `+i+` and endFraction `+a});var s=0;return Promise.all(e.map(function(i){return i.then(function(i){return t(n+ ++s/e.length*(r-n)),i}),i}))}function Lf(e,t){return s(this,void 0,void 0,function(){var n,r,i,a,o,s,l,u,f;return c(this,function(c){switch(c.label){case 0:return t??={},n=t.fetchFunc==null?d().platform.fetch:t.fetchFunc,r=e.map(function(e){return n(e,t.requestInit,{isBinary:!0})}),i=0,a=.5,t.onProgress==null?[4,Promise.all(r)]:[3,2];case 1:return o=c.sent(),[3,4];case 2:return[4,If(r,t.onProgress,i,a)];case 3:o=c.sent(),c.label=4;case 4:return s=o.map(function(e){return e.arrayBuffer()}),l=.5,u=1,t.onProgress==null?[4,Promise.all(s)]:[3,6];case 5:return f=c.sent(),[3,8];case 6:return[4,If(s,t.onProgress,l,u)];case 7:f=c.sent(),c.label=8;case 8:return[2,f]}})})}function Rf(e){var t=this;return function(n,r,i){return r===void 0&&(r=``),s(t,void 0,void 0,function(){var t,a,o,s,l,u,d,f,p,m;return c(this,function(c){switch(c.label){case 0:if(t=n.map(function(){return!1}),a={},o=i==null?[]:i.map(function(){return!1}),s=[],n.forEach(function(e,n){var r=0;e.weights.forEach(function(e){function c(){t[n]=!0,a[n]??(a[n]=[]),a[n].push({manifestEntry:e,groupOffset:r,sizeBytes:l})}var l=Kd[`quantization`in e?e.quantization.dtype:e.dtype]*k(e.shape);i==null?c():i.forEach(function(t,n){t===e.name&&(c(),o[n]=!0)}),s.push(e.name),r+=l})}),!o.every(function(e){return e}))throw l=i.filter(function(e,t){return!o[t]}),Error(`Could not find weights in manifest with names: `+l.join(`, `)+`. 
Manifest JSON has weights with names: `+s.join(`, `)+`.`);return u=t.reduce(function(e,t,n){return t&&e.push(n),e},[]),d=[],u.forEach(function(e){n[e].paths.forEach(function(e){var t=r+(r.endsWith(`/`)?``:`/`)+e;d.push(t)})}),[4,e(d)];case 1:return f=c.sent(),p={},m=0,u.forEach(function(e){for(var t=n[e].paths.length,r=0,i=0;i<t;i++)r+=f[m+i].byteLength;for(var o=new ArrayBuffer(r),s=new Uint8Array(o),c=0,l=0;l<t;l++){var u=new Uint8Array(f[m+l]);s.set(u,c),c+=u.byteLength}a[e].forEach(function(e){var t=Jd(o.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(var n in t)p[n]=t[n]}),m+=t}),[2,p]}})})}}ef.registerSaveRouter(function(e){return d().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Mf.URL_SCHEME)?((t=e.slice(Mf.URL_SCHEME.length))===void 0&&(t=`model`),new Mf(t)):null;var t});var zf=(Bf.prototype.save=function(e){return s(this,void 0,void 0,function(){var t,n,r,i;return c(this,function(a){switch(a.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.`);return(t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:[`./model.weights.bin`],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata,weightsManifest:n},t.body.append(`model.json`,new Blob([JSON.stringify(r)],{type:`application/json`}),`model.json`),e.weightData!=null&&t.body.append(`model.weights.bin`,new Blob([e.weightData],{type:`application/octet-stream`}),`model.weights.bin`),[4,this.fetch(this.path,t)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:$d(e),responses:[i]}];throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status `+i.status+`.`)}})})},Bf.prototype.load=function(){return s(this,void 0,void 0,function(){var e,t,n,r,i,a,o,s,l,u,d,f;return c(this,function(c){switch(c.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(e=c.sent()).ok)throw Error(`Request to `+this.path+` failed with status code `+e.status+`. Please verify this URL points to the model JSON of the model to load.`);c.label=2;case 2:return c.trys.push([2,4,,5]),[4,e.json()];case 3:return t=c.sent(),[3,5];case 4:throw c.sent(),n=`Failed to parse model JSON of response from `+this.path+`.`,this.path.endsWith(`.pb`)?n+=` Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.`:n+=` Please make sure the server is serving valid JSON for this request.`,Error(n);case 5:if(r=t.modelTopology,i=t.weightsManifest,a=t.generatedBy,o=t.convertedBy,s=t.format,l=t.userDefinedMetadata,r==null&&i==null)throw Error(`The JSON from HTTP path `+this.path+` contains neither model topology or manifest for weights.`);return i==null?[3,7]:[4,this.loadWeights(i)];case 6:f=c.sent(),u=f[0],d=f[1],c.label=7;case 7:return[2,{modelTopology:r,weightSpecs:u,weightData:d,userDefinedMetadata:l,generatedBy:a,convertedBy:o,format:s}]}})})},Bf.prototype.loadWeights=function(e){return s(this,void 0,void 0,function(){var t,n,r,i,a,o,s,l,u,d,f;return c(this,function(c){switch(c.label){case 0:for(t=Array.isArray(this.path)?this.path[1]:this.path,m=(p=t).lastIndexOf(`/`),h=p.lastIndexOf(`?`),n=[p.substring(0,m)+`/`,m<h?p.substring(h):``],r=n[0],i=n[1],a=this.weightPathPrefix||r,o=[],s=0,l=e;s<l.length;s++)u=l[s],o.push.apply(o,u.weights);return d=[],e.forEach(function(e){e.paths.forEach(function(e){d.push(a+e+i)})}),[4,Lf(d,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=c.sent(),[2,[o,Zd(f)]]}var p,m,h})})},Bf.URL_SCHEME_REGEX=/^https?:\/\//,Bf);function Bf(e,t){if(this.DEFAULT_METHOD=`POST`,t??={},this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,t.fetchFunc==null?this.fetch=d().platform.fetch:(T(typeof t.fetchFunc==`function`,function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=t.fetchFunc),T(e!=null&&0<e.length,function(){return`URL path for http must not be null, undefined or empty.`}),Array.isArray(e)&&T(e.length===2,function(){return`URL paths for http must have a length of 2, (actual length is `+e.length+`).`}),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw Error(`requestInit is expected to have no pre-existing body, but has one.`);this.requestInit=t.requestInit||{}}function Vf(e){return e.match(zf.URL_SCHEME_REGEX)!=null}function Hf(e,t){return typeof fetch>`u`?null:(Array.isArray(e)?e.every(function(e){return Vf(e)}):Vf(e))?Uf(e,{onProgress:t}):null}function Uf(e,t){return new zf(e,t)}ef.registerSaveRouter(Hf),ef.registerLoadRouter(Hf);var Wf=(qf.prototype.load=function(){return s(this,void 0,void 0,function(){return c(this,function(e){return[2,this.modelArtifacts]})})},qf),Gf=(Kf.prototype.save=function(e){return s(this,void 0,void 0,function(){return c(this,function(t){return[2,this.saveHandler(e)]})})},Kf);function Kf(e){this.saveHandler=e}function qf(e){this.modelArtifacts=e}var Jf,Yf=Object.freeze({browserFiles:function(e){return new Nf(e)},browserHTTPRequest:function(e,t){return Uf(e,t)},concatenateArrayBuffers:Zd,decodeWeights:Jd,encodeWeights:function(e,t){return s(this,void 0,void 0,function(){var n,r,i,a,o,l=this;return c(this,function(u){switch(u.label){case 0:for(n=[],r=[],i=Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e),a=function(a){var o=i[a],u=Array.isArray(e)?e[a].tensor:e[o];if(u.dtype!==`float32`&&u.dtype!==`int32`&&u.dtype!==`bool`&&u.dtype!==`string`)throw Error(`Unsupported dtype in weight '`+o+`': `+u.dtype);var d={name:o,shape:u.shape,dtype:u.dtype};if(u.dtype===`string`){var f=new Promise(function(e){return s(l,void 0,void 0,function(){var t,n,r,i,a,o,s;return c(this,function(c){switch(c.label){case 0:return[4,u.bytes()];case 1:for(t=c.sent(),n=t.reduce(function(e,t){return e+t.length},0)+qd*t.length,r=new Uint8Array(n),a=i=0;a<t.length;a++)o=t[a],s=new Uint8Array(new Uint32Array([o.length]).buffer),r.set(s,i),i+=qd,r.set(o,i),i+=o.length;return e(r),[2]}})})});r.push(f)}else r.push(u.data());t!=null&&(d.group=t),n.push(d)},o=0;o<i.length;++o)a(o);return[4,Promise.all(r)];case 1:return[2,{data:function(e){if(e===null)throw Error(`Invalid input value: `+JSON.stringify(e));var t=0,n=[];e.forEach(function(e){if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: `+e.constructor.name)});var r=new Uint8Array(t),i=0;return n.forEach(function(e){r.set(new Uint8Array(e.buffer),i),i+=e.byteLength}),r.buffer}(u.sent()),specs:n}]}})})},fromMemory:function(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Wf(e):(console.warn(`Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.`),new Wf({modelTopology:e})):(console.warn(`Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.`),new Wf({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))},getLoadHandlers:function(e,t){return ef.getLoadHandlers(e,t)},getModelArtifactsInfoForJSON:$d,getSaveHandlers:function(e){return ef.getSaveHandlers(e)},http:Uf,isHTTPScheme:Vf,loadWeights:function(e,t,n,r){return t===void 0&&(t=``),s(this,void 0,void 0,function(){return c(this,function(i){return[2,Rf(function(e){return Lf(e,{requestInit:r})})(e,t,n)]})})},registerLoadRouter:function(e){return ef.registerLoadRouter(e)},registerSaveRouter:function(e){return ef.registerSaveRouter(e)},weightsLoaderFactory:Rf,withSaveHandler:function(e){return new Gf(e)},copyModel:function(e,t){return s(this,void 0,void 0,function(){return c(this,function(n){return[2,sf(e,t,!1)]})})},listModels:function(){return s(this,void 0,void 0,function(){var e,t,n,r,i,a,o;return c(this,function(s){switch(s.label){case 0:e=nf.getSchemes(),t={},n=0,r=e,s.label=1;case 1:return n<r.length?(i=r[n],[4,nf.getManager(i).listModels()]):[3,4];case 2:for(o in a=s.sent())t[i+tf+o]=a[o];s.label=3;case 3:return n++,[3,1];case 4:return[2,t]}})})},moveModel:function(e,t){return s(this,void 0,void 0,function(){return c(this,function(n){return[2,sf(e,t,!0)]})})},removeModel:function(e){return s(this,void 0,void 0,function(){var t;return c(this,function(n){return t=of(e),[2,nf.getManager(t.scheme).removeModel(t.path)]})})}}),Xf=W({confusionMatrix_:function(e,t,n){var r=U(e,`labels`,`confusionMatrix`),i=U(t,`predictions`,`confusionMatrix`);T(n==null||0<n&&Number.isInteger(n),function(){return`If provided, numClasses must be a positive integer, but got `+n}),T(r.rank===1,function(){return`Expected the rank of labels to be 1, but got `+r.rank}),T(i.rank===1,function(){return`Expected the rank of predictions to be 1, but got `+i.rank}),T(r.shape[0]===i.shape[0],function(){return`Mismatch in the number of examples: `+r.shape[0]+` vs. `+i.shape[0]+`. Labels and predictions should have the same number of elements.`}),T(0<n&&Number.isInteger(n),function(){return`numClasses is required to be a positive integer, but got `+n});var a=Nr(r.asType(`int32`),n),o=Nr(i.asType(`int32`),n);return a.transpose().matMul(o).asType(`int32`)}}),Zf=Object.freeze({confusionMatrix:Xf}),Qf=W({fromPixels_:function(e,t){if(t===void 0&&(t=3),4<t)throw Error(`Cannot construct Tensor with more than 4 channels from pixels.`);if(e==null)throw Error(`pixels passed to tf.browser.fromPixels() can not be null`);var n=!1,r=!1,i=!1,a=!1,o=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<`u`&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)i=!0;else if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)a=!0;else{if(e.getContext==null)throw Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was `+e.constructor.name);o=!0}if(i&&i&&e.readyState<2)throw Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(h(`FromPixels`,B.backendName)!=null)return B.runKernel(`FromPixels`,{pixels:e},{numChannels:t});var s,c,l=i?[e.videoWidth,e.videoHeight]:[e.width,e.height],u=l[0],d=l[1];if(o?s=e.getContext(`2d`).getImageData(0,0,u,d).data:r||n?s=e.data:(a||i)&&(Jf??=document.createElement(`canvas`).getContext(`2d`),Jf.canvas.width=u,Jf.canvas.height=d,Jf.drawImage(e,0,0,u,d),s=Jf.getImageData(0,0,u,d).data),t===4)c=new Int32Array(s);else{var f=u*d;c=new Int32Array(f*t);for(var p=0;p<f;p++)for(var m=0;m<t;++m)c[p*t+m]=s[4*p+m]}return Hn(c,[d,u,t],`int32`)}}),$f=Object.freeze({toPixels:function(e,t){return s(this,void 0,void 0,function(){var n,r,i,a,o,s,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;return c(this,function(c){switch(c.label){case 0:if(n=U(e,`img`,`toPixels`),e instanceof Be||(n=n.toInt()),n.rank!==2&&n.rank!==3)throw Error(`toPixels only supports rank 2 or 3 tensors, got rank `+n.rank+`.`);if(r=n.shape.slice(0,2),i=r[0],a=r[1],4<(o=n.rank===2?1:n.shape[2])||o===2)throw Error(`toPixels only supports depth of size 1, 3 or 4 but got `+o);return[4,n.data()];case 1:return s=c.sent(),l=n.min(),u=n.max(),[4,Promise.all([l.data(),u.data()])];case 2:if(d=c.sent(),f=d[0],p=d[1],m=f[0],h=p[0],l.dispose(),u.dispose(),n.dtype===`float32`){if(m<0||1<h)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [`+m+` - `+h+`].`)}else{if(n.dtype!==`int32`)throw Error(`Unsupported type for toPixels: `+n.dtype+`. Please use float32 or int32 tensors.`);if(m<0||255<h)throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [`+m+` - `+h+`].`)}for(g=n.dtype===`float32`?255:1,_=new Uint8ClampedArray(a*i*4),v=0;v<i*a;++v)S=x=b=y=void 0,o===1?(y=s[v]*g,b=s[v]*g,x=s[v]*g,S=255):o===3?(y=s[3*v]*g,b=s[3*v+1]*g,x=s[3*v+2]*g,S=255):o===4&&(y=s[4*v]*g,b=s[4*v+1]*g,x=s[4*v+2]*g,S=s[4*v+3]*g),_[0+(C=4*v)]=Math.round(y),_[1+C]=Math.round(b),_[2+C]=Math.round(x),_[3+C]=Math.round(S);return t!=null&&(t.width=a,t.height=i,w=t.getContext(`2d`),T=new ImageData(_,a,i),w.putImageData(T,0,0)),n!==e&&n.dispose(),[2,_]}})})},fromPixels:Qf}),ep=(rp.prototype.getClassName=function(){return this.constructor.className},rp.fromConfig=function(e,t){return new e(t)},rp),tp=(np.getMap=function(){return np.instance??=new np,np.instance},np.register=function(e){np.getMap().classNameMap[e.className]=[e,e.fromConfig]},np);function np(){this.classNameMap={}}function rp(){}function ip(e){T(e.className!=null,function(){return`Class being registered does not have the static className property defined.`}),T(typeof e.className==`string`,function(){return`className is required to be a string, but got type `+typeof e.className}),T(0<e.className.length,function(){return`Class being registered has an empty-string as its className, which is disallowed.`}),tp.register(e)}var ap=Object.freeze({Serializable:ep,SerializationMap:tp,registerClass:ip});function op(){return B.backend.floatPrecision()===32?.001:.1}function sp(e,t,n){var r=!0;if((se(e)||se(t))&&(r=!1),se(e)&&se(t)&&(r=!0),r){var i=e.constructor.name,a=t.constructor.name;if(i!==a)throw Error(`Arrays are of different type. Actual: `+i+`. Expected: `+a)}if(Array.isArray(e)&&Array.isArray(t)){var o=Sn(e),s=Sn(t);if(!A(o,s))throw Error(`Arrays have different shapes. Actual: [`+o+`]. Expected: [`+s+`]`)}var c=se(e)?e:O(e),l=se(t)?t:O(t);if(c.length!==l.length)throw Error(`Arrays have different lengths actual: `+c.length+` vs expected: `+l.length+`.
Actual:   `+c+`.
Expected: `+l+`.`);for(var u=0;u<l.length;++u){var d=c[u],f=l[u];if(!n(d,f))throw Error(`Arrays differ: actual[`+u+`] = `+d+`, expected[`+u+`] = `+f+`.
Actual:   `+c+`.
Expected: `+l+`.`)}}function cp(e,t,n){return!isFinite(e)&&!isFinite(t)||!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}var lp,up=Object.freeze({TEST_EPSILON_FLOAT16:.1,expectArraysClose:function(e,t,n){return n??=op(),sp(e,t,function(e,t){return cp(e,t,n)})},testEpsilon:op,expectPromiseToFail:function(e,t){e().then(function(){return t.fail()},function(){return t()})},expectArraysEqual:function(e,t){var n=typeof t==`string`||typeof t==`number`||typeof t==`boolean`?[t]:t;return ue(e)||ue(e[0])||ue(t)||ue(t[0])?sp(e,n,function(e,t){return e==t}):sp(e,t,function(e,t){return cp(e,t,0)})},expectNumbersClose:function(e,t,n){if(n??=op(),!cp(e,t,n))throw Error(`Numbers differ: actual === `+e+`, expected === `+t)},expectValuesInRange:function(e,t,n){for(var r=0;r<e.length;r++)if(e[r]<t||e[r]>n)throw Error(`Value out of range:`+e[r]+` low: `+t+`, high: `+n)},expectArrayBuffersEqual:function(e,t){expect(new Float32Array(e)).toEqual(new Float32Array(t))}}),dp=Object.freeze({gpgpu_util:Oo,webgl_util:gn,forceHalfFloat:function(){d().set(`WEBGL_FORCE_F16_TEXTURES`,!0)},MathBackendWebGL:zs,setWebGLContext:xt,GPGPUContext:ko}),fp=(o(pp,lp=ep),pp.prototype.minimize=function(e,t,n){t===void 0&&(t=!1);var r=this.computeGradients(e,n),i=r.value,a=r.grads;if(n!=null){var o=n.map(function(e){return{name:e.name,tensor:a[e.name]}});this.applyGradients(o)}else this.applyGradients(a);return yn(a),t?i:(i.dispose(),null)},Object.defineProperty(pp.prototype,"iterations",{get:function(){return this.iterations_??=0,this.iterations_},enumerable:!0,configurable:!0}),pp.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},pp.prototype.computeGradients=function(e,t){return gi(e,t)},pp.prototype.dispose=function(){this.iterations_!=null&&yn(this.iterations_)},pp.prototype.saveIterations=function(){return s(this,void 0,void 0,function(){return c(this,function(e){return this.iterations_??=0,[2,{name:`iter`,tensor:G(this.iterations_,`int32`)}]})})},pp.prototype.getWeights=function(){return s(this,void 0,void 0,function(){return c(this,function(e){throw Error(`getWeights() is not implemented for this optimizer yet.`)})})},pp.prototype.setWeights=function(e){return s(this,void 0,void 0,function(){return c(this,function(e){throw Error(`setWeights() is not implemented for this optimizer class `+this.getClassName())})})},pp.prototype.extractIterations=function(e){return s(this,void 0,void 0,function(){var t;return c(this,function(n){switch(n.label){case 0:return t=this,[4,e[0].tensor.data()];case 1:return t.iterations_=n.sent()[0],[2,e.slice(1)]}})})},pp);function pp(){return lp!==null&&lp.apply(this,arguments)||this}Object.defineProperty(fp,Symbol.hasInstance,{value:function(e){return e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null}});var mp,hp=(o(gp,mp=fp),gp.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(n,r){var i=B.registeredVariables[n];t.accumulatedGrads[r]??(t.accumulatedGrads[r]={originalName:n+`/accum_grad`,variable:H(function(){return $n(i).variable(!1)})}),t.accumulatedUpdates[r]??(t.accumulatedUpdates[r]={originalName:n+`/accum_var`,variable:H(function(){return $n(i).variable(!1)})});var a=Array.isArray(e)?e[r].tensor:e[n];if(a!=null){var o=t.accumulatedGrads[r].variable,s=t.accumulatedUpdates[r].variable;H(function(){var e=o.mul(t.rho).add(a.square().mul(1-t.rho)),n=s.add(t.epsilon).sqrt().div(o.add(t.epsilon).sqrt()).mul(a),r=s.mul(t.rho).add(n.square().mul(1-t.rho));o.assign(e),s.assign(r);var c=n.mul(-t.learningRate).add(i);i.assign(c)})}}),this.incrementIterations()},gp.prototype.dispose=function(){this.accumulatedUpdates!=null&&(yn(this.accumulatedGrads.map(function(e){return e.variable})),yn(this.accumulatedUpdates.map(function(e){return e.variable})))},gp.prototype.getWeights=function(){return s(this,void 0,void 0,function(){var e;return c(this,function(t){switch(t.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},gp.prototype.setWeights=function(e){return s(this,void 0,void 0,function(){var t;return c(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),t=e.length/2,this.accumulatedGrads=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},gp.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},gp.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},gp.className=`Adadelta`,gp);function gp(e,t,n){n===void 0&&(n=null);var r=mp.call(this)||this;return r.learningRate=e,r.rho=t,r.epsilon=n,r.accumulatedGrads=[],r.accumulatedUpdates=[],n??(r.epsilon=B.backend.epsilon()),r}ip(hp);var _p,vp=(o(yp,_p=fp),yp.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(n,r){var i=B.registeredVariables[n];t.accumulatedGrads[r]??(t.accumulatedGrads[r]={originalName:n+`/accumulator`,variable:H(function(){return Yn(i.shape,t.initialAccumulatorValue).variable(!1)})});var a=Array.isArray(e)?e[r].tensor:e[n];if(a!=null){var o=t.accumulatedGrads[r].variable;H(function(){var e=o.add(a.square());o.assign(e);var n=a.div(e.add(B.backend.epsilon()).sqrt()).mul(-t.learningRate).add(i);i.assign(n)})}}),this.incrementIterations()},yp.prototype.dispose=function(){this.accumulatedGrads!=null&&yn(this.accumulatedGrads.map(function(e){return e.variable}))},yp.prototype.getWeights=function(){return s(this,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},yp.prototype.setWeights=function(e){return s(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulatedGrads=e.map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},yp.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},yp.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},yp.className=`Adagrad`,yp);function yp(e,t){t===void 0&&(t=.1);var n=_p.call(this)||this;return n.learningRate=e,n.initialAccumulatorValue=t,n.accumulatedGrads=[],n}ip(vp);var bp,xp=(o(Sp,bp=fp),Sp.prototype.applyGradients=function(e){var t=this,n=Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e);H(function(){var r=cl(1,t.accBeta1),i=cl(1,t.accBeta2);n.forEach(function(n,a){var o=B.registeredVariables[n];t.accumulatedFirstMoment[a]??(t.accumulatedFirstMoment[a]={originalName:n+`/m`,variable:H(function(){return $n(o).variable(!1)})}),t.accumulatedSecondMoment[a]??(t.accumulatedSecondMoment[a]={originalName:n+`/v`,variable:H(function(){return $n(o).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[n];if(s!=null){var c=t.accumulatedFirstMoment[a].variable,l=t.accumulatedSecondMoment[a].variable,u=c.mul(t.beta1).add(s.mul(1-t.beta1)),d=l.mul(t.beta2).add(s.square().mul(1-t.beta2)),f=u.div(r),p=d.div(i);c.assign(u),l.assign(d);var m=f.div(p.sqrt().add(t.epsilon)).mul(-t.learningRate).add(o);o.assign(m)}}),t.accBeta1.assign(t.accBeta1.mul(t.beta1)),t.accBeta2.assign(t.accBeta2.mul(t.beta2))}),this.incrementIterations()},Sp.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&yn(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&yn(this.accumulatedSecondMoment.map(function(e){return e.variable}))},Sp.prototype.getWeights=function(){return s(this,void 0,void 0,function(){var e;return c(this,function(t){switch(t.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},Sp.prototype.setWeights=function(e){return s(this,void 0,void 0,function(){var t,n=this;return c(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),H(function(){n.accBeta1.assign(al(n.beta1,n.iterations_+1)),n.accBeta2.assign(al(n.beta2,n.iterations_+1))}),t=e.length/2,this.accumulatedFirstMoment=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},Sp.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},Sp.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},Sp.className=`Adam`,Sp);function Sp(e,t,n,r){r===void 0&&(r=null);var i=bp.call(this)||this;return i.learningRate=e,i.beta1=t,i.beta2=n,i.epsilon=r,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],H(function(){i.accBeta1=G(t).variable(),i.accBeta2=G(n).variable()}),r??(i.epsilon=B.backend.epsilon()),i}ip(xp);var Cp,wp=(o(Tp,Cp=fp),Tp.prototype.applyGradients=function(e){var t=this,n=Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e);H(function(){var r=cl(1,t.accBeta1),i=qc(-t.learningRate,t.iteration.mul(t.decay).add(1));n.forEach(function(n,a){var o=B.registeredVariables[n];t.accumulatedFirstMoment[a]??(t.accumulatedFirstMoment[a]={originalName:n+`/m`,variable:$n(o).variable(!1)}),t.accumulatedWeightedInfNorm[a]??(t.accumulatedWeightedInfNorm[a]={originalName:n+`/v`,variable:$n(o).variable(!1)});var s=Array.isArray(e)?e[a].tensor:e[n];if(s!=null){var c=t.accumulatedFirstMoment[a].variable,l=t.accumulatedWeightedInfNorm[a].variable,u=c.mul(t.beta1).add(s.mul(1-t.beta1)),d=l.mul(t.beta2),f=s.abs(),p=d.maximum(f);c.assign(u),l.assign(p);var m=i.div(r).mul(u.div(p.add(t.epsilon))).add(o);o.assign(m)}}),t.iteration.assign(t.iteration.add(1)),t.accBeta1.assign(t.accBeta1.mul(t.beta1))}),this.incrementIterations()},Tp.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&yn(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&yn(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},Tp.prototype.getWeights=function(){return s(this,void 0,void 0,function(){return c(this,function(e){throw Error(`getWeights() is not implemented for Adamax yet.`)})})},Tp.prototype.setWeights=function(e){return s(this,void 0,void 0,function(){return c(this,function(e){throw Error(`setWeights() is not implemented for Adamax yet.`)})})},Tp.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},Tp.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},Tp.className=`Adamax`,Tp);function Tp(e,t,n,r,i){r===void 0&&(r=null),i===void 0&&(i=0);var a=Cp.call(this)||this;return a.learningRate=e,a.beta1=t,a.beta2=n,a.epsilon=r,a.decay=i,a.accumulatedFirstMoment=[],a.accumulatedWeightedInfNorm=[],H(function(){a.iteration=G(0).variable(),a.accBeta1=G(t).variable()}),r??(a.epsilon=B.backend.epsilon()),a}ip(wp);var Ep,Dp=(o(Op,Ep=fp),Op.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(n,r){var i=Array.isArray(e)?e[r].tensor:e[n];if(i!=null){var a=B.registeredVariables[n];H(function(){var e=t.c.mul(i).add(a);a.assign(e)})}}),this.incrementIterations()},Op.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=bn(G(-e))},Op.prototype.dispose=function(){this.c.dispose()},Op.prototype.getWeights=function(){return s(this,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},Op.prototype.setWeights=function(e){return s(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=t.sent()).length!==0)throw Error(`SGD optimizer does not have settable weights.`);return[2]}})})},Op.prototype.getConfig=function(){return{learningRate:this.learningRate}},Op.fromConfig=function(e,t){return new e(t.learningRate)},Op.className=`SGD`,Op);function Op(e){var t=Ep.call(this)||this;return t.learningRate=e,t.setLearningRate(e),t}ip(Dp);var kp,Ap=(o(jp,kp=Dp),jp.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(n,r){var i=B.registeredVariables[n];t.accumulations[r]??(t.accumulations[r]={originalName:n+`/momentum`,variable:H(function(){return $n(i).variable(!1)})});var a=t.accumulations[r].variable,o=Array.isArray(e)?e[r].tensor:e[n];o!=null&&H(function(){var e,n=t.m.mul(a).add(o);e=t.useNesterov?t.c.mul(o.add(n.mul(t.m))).add(i):t.c.mul(n).add(i),a.assign(n),i.assign(e)})}),this.incrementIterations()},jp.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&yn(this.accumulations.map(function(e){return e.variable}))},jp.prototype.setMomentum=function(e){this.momentum=e},jp.prototype.getWeights=function(){return s(this,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},jp.prototype.setWeights=function(e){return s(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulations=e.map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},jp.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},jp.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},jp.className=`Momentum`,jp);function jp(e,t,n){n===void 0&&(n=!1);var r=kp.call(this,e)||this;return r.learningRate=e,r.momentum=t,r.useNesterov=n,r.accumulations=[],r.m=G(r.momentum),r}ip(Ap);var Mp,Np=(o(Pp,Mp=fp),Pp.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(n,r){var i=B.registeredVariables[n];t.accumulatedMeanSquares[r]??(t.accumulatedMeanSquares[r]={originalName:n+`/rms`,variable:H(function(){return $n(i).variable(!1)})}),t.accumulatedMoments[r]??(t.accumulatedMoments[r]={originalName:n+`/momentum`,variable:H(function(){return $n(i).variable(!1)})}),t.accumulatedMeanGrads[r]==null&&t.centered&&(t.accumulatedMeanGrads[r]={originalName:n+`/mg`,variable:H(function(){return $n(i).variable(!1)})});var a=Array.isArray(e)?e[r].tensor:e[n];if(a!=null){var o=t.accumulatedMeanSquares[r].variable,s=t.accumulatedMoments[r].variable;H(function(){var e=o.mul(t.decay).add(a.square().mul(1-t.decay));if(t.centered){var n=t.accumulatedMeanGrads[r].variable,c=n.mul(t.decay).add(a.mul(1-t.decay)),l=s.mul(t.momentum).add(a.mul(t.learningRate).div(e.sub(c.square().add(t.epsilon)).sqrt()));o.assign(e),n.assign(c),s.assign(l);var u=i.sub(l);i.assign(u)}else{var d=o.mul(t.decay).add(a.square().mul(1-t.decay));l=s.mul(t.momentum).add(a.mul(t.learningRate).div(d.add(t.epsilon).sqrt())),o.assign(d),s.assign(l),u=i.sub(l),i.assign(u)}})}}),this.incrementIterations()},Pp.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&yn(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&yn(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&yn(this.accumulatedMoments.map(function(e){return e.variable}))},Pp.prototype.getWeights=function(){return s(this,void 0,void 0,function(){var e;return c(this,function(t){switch(t.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},Pp.prototype.setWeights=function(e){return s(this,void 0,void 0,function(){var t;return c(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),t=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),[2]}})})},Pp.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},Pp.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},Pp.className=`RMSProp`,Pp);function Pp(e,t,n,r,i){t===void 0&&(t=.9),n===void 0&&(n=0),r===void 0&&(r=null),i===void 0&&(i=!1);var a=Mp.call(this)||this;if(a.learningRate=e,a.decay=t,a.momentum=n,a.epsilon=r,a.accumulatedMeanSquares=[],a.accumulatedMoments=[],a.accumulatedMeanGrads=[],a.centered=i,r??(a.epsilon=B.backend.epsilon()),e==null)throw Error(`learningRate for RMSPropOptimizer must be defined.`);return a}ip(Np);var Fp=(Rp.sgd=function(e){return new Dp(e)},Rp.momentum=function(e,t,n){return n===void 0&&(n=!1),new Ap(e,t,n)},Rp.rmsprop=function(e,t,n,r,i){return t===void 0&&(t=.9),n===void 0&&(n=0),r===void 0&&(r=null),i===void 0&&(i=!1),new Np(e,t,n,r,i)},Rp.adam=function(e,t,n,r){return e===void 0&&(e=.001),t===void 0&&(t=.9),n===void 0&&(n=.999),r===void 0&&(r=null),new xp(e,t,n,r)},Rp.adadelta=function(e,t,n){return e===void 0&&(e=.001),t===void 0&&(t=.95),n===void 0&&(n=null),new hp(e,t,n)},Rp.adamax=function(e,t,n,r,i){return e===void 0&&(e=.002),t===void 0&&(t=.9),n===void 0&&(n=.999),r===void 0&&(r=null),i===void 0&&(i=0),new wp(e,t,n,r,i)},Rp.adagrad=function(e,t){return t===void 0&&(t=.1),new vp(e,t)},Rp),Ip={sgd:Fp.sgd,momentum:Fp.momentum,adadelta:Fp.adadelta,adagrad:Fp.adagrad,rmsprop:Fp.rmsprop,adamax:Fp.adamax,adam:Fp.adam},Lp=typeof requestAnimationFrame<`u`?requestAnimationFrame:typeof setImmediate<`u`?setImmediate:function(e){return e()};function Rp(){}Be.prototype.squaredDifference=function(e){return Hs(this,e)},L=Od;var zp=Object.freeze({__proto__:null,AdadeltaOptimizer:hp,AdagradOptimizer:vp,AdamOptimizer:xp,AdamaxOptimizer:wp,DataStorage:xi,get ENV(){return f},Environment:l,KernelBackend:Si,MomentumOptimizer:Ap,Optimizer:fp,RMSPropOptimizer:Np,get Rank(){return Ve},get Reduction(){return Gu},SGDOptimizer:Dp,Tensor:Be,TensorBuffer:Ie,Variable:Qe,abs:Us,acos:Ws,acosh:Gs,add:Uc,addN:Wc,addStrict:Gc,all:cu,any:lu,argMax:uu,argMin:du,asin:Ks,asinh:qs,atan:Js,atan2:Kc,atanh:Ys,avgPool:Ql,avgPool3d:tu,backend:function(){return B.backend},backend_util:Hi,basicLSTMCell:Ou,batchNorm:Pc,batchNorm2d:Fc,batchNorm3d:Ic,batchNorm4d:Lc,batchNormalization:Nc,batchNormalization2d:Ac,batchNormalization3d:jc,batchNormalization4d:Mc,batchToSpaceND:wr,booleanMaskAsync:wl,broadcastTo:Tr,browser:$f,buffer:xr,cast:Er,ceil:Xs,clipByValue:Zs,clone:Dr,complex:Fn,concat:er,concat1d:tr,concat2d:nr,concat3d:rr,concat4d:ir,conv1d:Al,conv2d:jl,conv2dTranspose:zl,conv3d:Ml,conv3dTranspose:Bl,cos:Qs,cosh:$s,cumsum:Or,customGrad:_i,deprecationWarn:vn,depthToSpace:kr,depthwiseConv2d:Fl,diag:Vu,disableDeprecationWarnings:function(){d().set(`DEPRECATION_WARNINGS_ENABLED`,!1),console.warn(`TensorFlow.js deprecation warnings have been disabled.`)},dispose:yn,disposeVariables:function(){B.disposeVariables()},div:qc,divNoNan:Jc,divStrict:Yc,dot:Hl,dropout:Hu,elu:yu,enableDebugMode:function(){d().set(`DEBUG`,!0)},enableProdMode:function(){d().set(`PROD`,!0)},engine:function(){return B},env:d,equal:ul,equalStrict:dl,erf:ec,exp:tc,expandDims:Ar,expm1:nc,eye:jr,fft:Pu,fill:Yn,findBackend:function(e){return B.findBackend(e)},findBackendFactory:function(e){return B.findBackendFactory(e)},floor:rc,floorDiv:Xc,frame:Yu,fused:Dd,gather:Tl,gatherND:Bu,gather_util:ni,getBackend:function(){return B.backendName},getGradient:g,getKernel:h,getKernelsForBackend:_,grad:function(e){return T(me(e),function(){return`The f passed in grad(f) must be a function`}),function(t,n){var r=U(t,`x`,`tf.grad`,null),i=n==null?null:U(n,`dy`,`tf.grad`);return B.tidy(function(){var t=B.gradients(function(){return e(r)},[r],i),n=t.value,a=t.grads;return i!=null&&E(n.shape,i.shape,`The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)`),vi(a),a[0]})}},grads:function(e){return T(me(e),function(){return`The f passed in grads(f) must be a function`}),function(t,n){T(Array.isArray(t),function(){return"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"});var r=wn(t,`args`,`tf.grads`,null),i=n==null?null:U(n,`dy`,`tf.grads`);return B.tidy(function(){var t=B.gradients(function(){return e.apply(void 0,r)},r,i),n=t.value,a=t.grads;return i!=null&&E(n.shape,i.shape,`The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])`),vi(a),a})}},greater:fl,greaterEqual:pl,greaterEqualStrict:ml,greaterStrict:hl,hammingWindow:Ju,hannWindow:qu,ifft:Fu,imag:Ln,image:Cd,inTopKAsync:Wu,io:Yf,irfft:Lu,isFinite:hc,isInf:mc,isNaN:pc,keep:bn,leakyRelu:bu,less:gl,lessEqual:_l,lessEqualStrict:vl,lessStrict:yl,linalg:fd,linspace:Xn,localResponseNormalization:Eu,log:ic,log1p:ac,logSigmoid:oc,logSoftmax:bi,logSumExp:fu,logicalAnd:Rc,logicalNot:zc,logicalOr:Bc,logicalXor:Vc,losses:sd,matMul:Vl,math:Zf,max:pu,maxPool:Zl,maxPool3d:eu,maximum:Zc,maximumStrict:Qc,mean:mu,memory:function(){return B.memory()},min:hu,minimum:$c,minimumStrict:el,mod:tl,modStrict:nl,moments:gu,movingAverage:Au,mul:rl,mulStrict:il,multiRNNCell:ku,multinomial:Mr,neg:sc,nextFrame:function(){return new Promise(function(e){return Lp(function(){return e()})})},norm:Du,notEqual:bl,notEqualStrict:xl,oneHot:Nr,ones:qn,onesLike:Qn,op:W,outerProduct:Ul,pad:Pr,pad1d:Fr,pad2d:Ir,pad3d:Lr,pad4d:Rr,pool:$l,pow:al,powStrict:ol,prelu:xu,print:Sr,prod:vu,profile:function(e){return B.profile(e)},rand:zr,randomGamma:Vr,randomNormal:Br,randomUniform:Hr,range:Zn,ready:function(){return B.ready()},real:In,reciprocal:cc,registerBackend:function(e,t,n){return n===void 0&&(n=1),B.registerBackend(e,t,n)},registerGradient:y,registerKernel:v,relu:Su,relu6:Cu,removeBackend:function(e){B.removeBackend(e)},reshape:Ur,reverse:Wl,reverse1d:Gl,reverse2d:Kl,reverse3d:ql,reverse4d:Jl,rfft:Iu,round:lc,rsqrt:uc,scalar:G,scatterND:Nu,scatter_util:si,selu:wu,separableConv2d:Rl,serialization:ap,setBackend:function(e){return B.setBackend(e)},setPlatform:function(e,t){d().setPlatform(e,t)},setdiff1dAsync:Cr,sigmoid:dc,sign:fc,signal:Zu,sin:gc,sinh:_c,slice:nu,slice1d:ru,slice2d:iu,slice3d:au,slice4d:ou,slice_util:hi,softmax:yi,softplus:vc,spaceToBatchND:Wr,sparseToDense:zu,spectral:Ru,split:ar,sqrt:yc,square:Bs,squaredDifference:Hs,squaredDifferenceStrict:sl,squeeze:Gr,stack:Kr,step:bc,stft:Xu,stridedSlice:ju,sub:cl,subStrict:ll,sum:_u,sumOutType:nt,tan:xc,tanh:Sc,tensor:Rn,tensor1d:Bn,tensor2d:Vn,tensor3d:Hn,tensor4d:Un,tensor5d:Wn,tensor6d:Gn,tensor_util:st,test_util:up,tidy:H,tile:qr,time:function(e){return B.time(e)},topk:Mu,train:Ip,transpose:Tu,truncatedNormal:Jr,unregisterGradient:function(e){if(!m.has(e))throw Error(`The gradient '`+e+`' for backend is not registered`);m.delete(e)},unregisterKernel:function(e,t){var n=b(e,t);if(!p.has(n))throw Error(`The kernel '`+e+`' for backend '`+t+`' is not registered`);p.delete(n)},unsortedSegmentSum:El,unstack:Yr,util:De,valueAndGrad:function(e){return T(me(e),function(){return`The f passed in valueAndGrad(f) must be a function`}),function(t,n){T(t instanceof Be,function(){return`The x passed in valueAndGrad(f)(x) must be a tensor`}),T(n==null||n instanceof Be,function(){return`The dy passed in valueAndGrad(f)(x, dy) must be a tensor`});var r=B.gradients(function(){return e(t)},[t],n),i=r.grads,a=r.value;return vi(i),{grad:i[0],value:a}}},valueAndGrads:function(e){return T(me(e),function(){return`The f passed in valueAndGrads(f) must be a function`}),function(t,n){T(Array.isArray(t)&&t.every(function(e){return e instanceof Be}),function(){return`The args passed in valueAndGrads(f)(args) must be array of tensors`}),T(n==null||n instanceof Be,function(){return`The dy passed in valueAndGrads(f)(args, dy) must be a tensor`});var r=B.gradients(function(){return e.apply(void 0,t)},t,n);return n!=null&&E(r.value.shape,n.shape,`The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])`),vi(r.grads),r}},variable:Kn,variableGrads:gi,version_core:`1.7.0`,webgl:dp,where:Hc,whereAsync:kc,zeros:Jn,zerosLike:$n});function Bp(e,t,n){if(n===void 0&&(n=!1),e.beginPath(),t.slice(1).forEach(function(n,r){var i=n.x,a=n.y,o=t[r];e.moveTo(o.x,o.y),e.lineTo(i,a)}),n){var r=t[t.length-1],i=t[0];if(!r||!i)return;e.moveTo(r.x,r.y),e.lineTo(i.x,i.y)}e.stroke()}var Vp=function(e,t){return(Vp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function Hp(e,t){function n(){this.constructor=e}Vp(e,t),e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Up=function(){return(Up=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function Q(e,t,n,r){return new(n||=Promise)(function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,s)}c((r=r.apply(e,t||[])).next())})}function $(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=0<(i=o.trys).length&&i[i.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function Wp(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)r[i]=a[o];return r}var Gp=(Object.defineProperty(Kp.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(Kp.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Kp.prototype.reverse=function(){return new Kp(1/this.width,1/this.height)},Kp);function Kp(e,t){if(!im(e)||!im(t))throw Error(`Dimensions.constructor - expected width and height to be valid numbers, instead have `+JSON.stringify({width:e,height:t}));this._width=e,this._height=t}function qp(e,t){return e instanceof Be&&e.shape.length===t}function Jp(e){return qp(e,2)}function Yp(e){return qp(e,3)}function Xp(e){return qp(e,4)}function Zp(e){return e%1!=0}function Qp(e){return e%2==0}function $p(e,t){t===void 0&&(t=2);var n=10**t;return Math.floor(e*n)/n}function em(e){return e&&e.width&&e.height}function tm(e,t){var n=e.width,r=e.height,i=t/Math.max(r,n);return new Gp(Math.round(n*i),Math.round(r*i))}function nm(e){return e.reduce(function(e,t){return e.add(t)},new sm(0,0)).div(new sm(e.length,e.length))}function rm(e,t,n){return Array(e).fill(0).map(function(e,r){return t+r*n})}function im(e){return!!e&&e!==1/0&&e!==-1/0&&!isNaN(e)||e===0}function am(e){return im(e)&&0<=e&&e<=1}var om=Object.freeze({__proto__:null,isTensor:qp,isTensor1D:function(e){return qp(e,1)},isTensor2D:Jp,isTensor3D:Yp,isTensor4D:Xp,isFloat:Zp,isEven:Qp,round:$p,isDimensions:em,computeReshapedDimensions:tm,getCenterPoint:nm,range:rm,isValidNumber:im,isValidProbablitiy:am}),sm=(Object.defineProperty(cm.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(cm.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),cm.prototype.add=function(e){return new cm(this.x+e.x,this.y+e.y)},cm.prototype.sub=function(e){return new cm(this.x-e.x,this.y-e.y)},cm.prototype.mul=function(e){return new cm(this.x*e.x,this.y*e.y)},cm.prototype.div=function(e){return new cm(this.x/e.x,this.y/e.y)},cm.prototype.abs=function(){return new cm(Math.abs(this.x),Math.abs(this.y))},cm.prototype.magnitude=function(){return Math.sqrt(this.x**2+this.y**2)},cm.prototype.floor=function(){return new cm(Math.floor(this.x),Math.floor(this.y))},cm);function cm(e,t){this._x=e,this._y=t}var lm=(um.isRect=function(e){return!!e&&[e.x,e.y,e.width,e.height].every(im)},um.assertIsValidBox=function(e,t,n){if(n===void 0&&(n=!1),!um.isRect(e))throw Error(t+` - invalid box: `+JSON.stringify(e)+`, expected object with properties x, y, width, height`);if(!n&&(e.width<0||e.height<0))throw Error(t+` - width (`+e.width+`) and height (`+e.height+`) must be positive numbers`)},Object.defineProperty(um.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"topLeft",{get:function(){return new sm(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"topRight",{get:function(){return new sm(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"bottomLeft",{get:function(){return new sm(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(um.prototype,"bottomRight",{get:function(){return new sm(this.right,this.bottom)},enumerable:!0,configurable:!0}),um.prototype.round=function(){var e=[this.x,this.y,this.width,this.height].map(function(e){return Math.round(e)});return new um({x:e[0],y:e[1],width:e[2],height:e[3]})},um.prototype.floor=function(){var e=[this.x,this.y,this.width,this.height].map(function(e){return Math.floor(e)});return new um({x:e[0],y:e[1],width:e[2],height:e[3]})},um.prototype.toSquare=function(){var e=this.x,t=this.y,n=this.width,r=this.height,i=Math.abs(n-r);return n<r&&(e-=i/2,n+=i),r<n&&(t-=i/2,r+=i),new um({x:e,y:t,width:n,height:r})},um.prototype.rescale=function(e){var t=em(e)?e.width:e,n=em(e)?e.height:e;return new um({x:this.x*t,y:this.y*n,width:this.width*t,height:this.height*n})},um.prototype.pad=function(e,t){var n=[this.x-e/2,this.y-t/2,this.width+e,this.height+t];return new um({x:n[0],y:n[1],width:n[2],height:n[3]})},um.prototype.clipAtImageBorders=function(e,t){var n=this.x,r=this.y,i=this.right,a=this.bottom,o=Math.max(n,0),s=Math.max(r,0),c=i-o,l=a-s;return new um({x:o,y:s,width:Math.min(c,e-o),height:Math.min(l,t-s)}).floor()},um.prototype.shift=function(e,t){var n=this.width,r=this.height;return new um({x:this.x+e,y:this.y+t,width:n,height:r})},um.prototype.padAtBorders=function(e,t){var n=this.width+1,r=this.height+1,i=n,a=r,o=this.left,s=this.top,c=this.right,l=this.bottom;return t<c&&(i=-c+t+n,c=t),e<l&&(a=-l+e+r,l=e),o<1&&(a=2-o,o=1),s<1&&(a=2-s,s=1),{dy:1,edy:a,dx:1,edx:i,y:s,ey:l,x:o,ex:c,w:n,h:r}},um.prototype.calibrate=function(e){return new um({left:this.left+e.left*this.width,top:this.top+e.top*this.height,right:this.right+e.right*this.width,bottom:this.bottom+e.bottom*this.height}).toSquare().round()},um);function um(e,t){t===void 0&&(t=!0);var n=e||{},r=[n.left,n.top,n.right,n.bottom].every(im),i=[n.x,n.y,n.width,n.height].every(im);if(!i&&!r)throw Error(`Box.constructor - expected box to be IBoundingBox | IRect, instead have `+JSON.stringify(n));var a=i?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],o=a[0],s=a[1],c=a[2],l=a[3];um.assertIsValidBox({x:o,y:s,width:c,height:l},`Box.constructor`,t),this._x=o,this._y=s,this._width=c,this._height=l}var dm,fm=(Hp(pm,dm=lm),pm);function pm(e,t,n,r,i){return i===void 0&&(i=!1),dm.call(this,{left:e,top:t,right:n,bottom:r},i)||this}var mm=(Object.defineProperty(hm.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(hm.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(hm.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(hm.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(hm.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(hm.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(hm.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(hm.prototype,"relativeBox",{get:function(){return new lm(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),hm.prototype.forSize=function(e,t){return new hm(this.score,this.classScore,this.className,this.relativeBox,{width:e,height:t})},hm);function hm(e,t,n,r,i){this._imageDims=new Gp(i.width,i.height),this._score=e,this._classScore=t,this._className=n,this._box=new lm(r).rescale(this._imageDims)}var gm,_m=(Hp(vm,gm=mm),vm.prototype.forSize=function(e,t){var n=gm.prototype.forSize.call(this,e,t);return new vm(n.score,n.relativeBox,n.imageDims)},vm);function vm(e,t,n){return gm.call(this,e,e,``,t,n)||this}function ym(e,t,n){n===void 0&&(n=!0);var r=Math.max(0,Math.min(e.right,t.right)-Math.max(e.left,t.left))*Math.max(0,Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top));return n?r/(e.area+t.area-r):r/Math.min(e.area,t.area)}function bm(e){var t=e.map(function(e){return e.x}),n=e.map(function(e){return e.y});return new fm(t.reduce(function(e,t){return t<e?t:e},1/0),n.reduce(function(e,t){return t<e?t:e},1/0),t.reduce(function(e,t){return e<t?t:e},0),n.reduce(function(e,t){return e<t?t:e},0))}function xm(e,t,n,r){r===void 0&&(r=!0);for(var i=t.map(function(e,t){return{score:e,boxIndex:t}}).sort(function(e,t){return e.score-t.score}).map(function(e){return e.boxIndex}),a=[],o=function(){var t=i.pop();a.push(t);for(var o=i,s=[],c=0;c<o.length;c++){var l=o[c],u=e[t],d=e[l];s.push(ym(u,d,r))}i=i.filter(function(e,t){return s[t]<=n})};0<i.length;)o();return a}function Sm(e,t){return H(function(){var n=t[0],r=t[1],i=t[2];return cl(e,er([Yn(Wp(e.shape.slice(0,3),[1]),n),Yn(Wp(e.shape.slice(0,3),[1]),r),Yn(Wp(e.shape.slice(0,3),[1]),i)],3))})}function Cm(e,t){return t===void 0&&(t=!1),H(function(){var n=e.shape.slice(1),r=n[0],i=n[1];if(r===i)return e;function a(t){var n=e.shape.slice();return n[c]=t,Yn(n,0)}var o=Math.abs(r-i),s=Math.round(o*(t?.5:1)),c=i<r?2:1,l=a(s),u=o-l.shape[c];return er([t&&u?a(u):null,e,l].filter(function(e){return!!e}).map(function(e){return e.toFloat()}),c)})}function wm(e){return 1/(1+Math.exp(-e))}var Tm,Em=(Hp(Dm,Tm=lm),Dm);function Dm(e,t,n,r,i){return i===void 0&&(i=!1),Tm.call(this,{x:e,y:t,width:n,height:r},i)||this}var Om=(Object.defineProperty(km.prototype,"shift",{get:function(){return new sm(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(km.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(km.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(km.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(km.prototype,"relativePositions",{get:function(){var e=this;return this._positions.map(function(t){return t.sub(e._shift).div(new sm(e.imageWidth,e.imageHeight))})},enumerable:!0,configurable:!0}),km.prototype.forSize=function(e,t){return new this.constructor(this.relativePositions,{width:e,height:t})},km.prototype.shiftBy=function(e,t){return new this.constructor(this.relativePositions,this._imgDims,new sm(e,t))},km.prototype.shiftByPoint=function(e){return this.shiftBy(e.x,e.y)},km.prototype.align=function(e,t){if(t===void 0&&(t={}),e){var n=e instanceof _m?e.box.floor():new lm(e);return this.shiftBy(n.x,n.y).align(null,t)}var r=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},t),i=r.useDlibAlignment,a=r.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},km.prototype.alignDlib=function(){function e(e){return i.sub(e).magnitude()}var t=this.getRefPointsForAlignment(),n=t[0],r=t[1],i=t[2],a=(e(n)+e(r))/2,o=Math.floor(a/.45),s=nm(t),c=Math.floor(Math.max(0,s.x-.5*o)),l=Math.floor(Math.max(0,s.y-.43*o));return new Em(c,l,Math.min(o,this.imageWidth+c),Math.min(o,this.imageHeight+l))},km.prototype.alignMinBbox=function(e){var t=bm(this.positions);return t.pad(t.width*e,t.height*e)},km.prototype.getRefPointsForAlignment=function(){throw Error(`getRefPointsForAlignment not implemented by base class`)},km);function km(e,t,n){n===void 0&&(n=new sm(0,0));var r=t.width,i=t.height;this._imgDims=new Gp(r,i),this._shift=n,this._positions=e.map(function(e){return e.mul(new sm(r,i)).add(n)})}var Am,jm=(Hp(Mm,Am=Om),Mm.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],nm([e[3],e[4]])]},Mm);function Mm(){return Am!==null&&Am.apply(this,arguments)||this}var Nm,Pm=(Hp(Fm,Nm=Om),Fm.prototype.getJawOutline=function(){return this.positions.slice(0,17)},Fm.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},Fm.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},Fm.prototype.getNose=function(){return this.positions.slice(27,36)},Fm.prototype.getLeftEye=function(){return this.positions.slice(36,42)},Fm.prototype.getRightEye=function(){return this.positions.slice(42,48)},Fm.prototype.getMouth=function(){return this.positions.slice(48,68)},Fm.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(nm)},Fm);function Fm(){return Nm!==null&&Nm.apply(this,arguments)||this}var Im=(Object.defineProperty(Lm.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(Lm.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),Lm.prototype.toString=function(e){return e===void 0&&(e=!0),this.label+(e?` (`+$p(this.distance)+`)`:``)},Lm);function Lm(e,t){this._label=e,this._distance=t}var Rm,zm=(Hp(Bm,Rm=lm),Bm.assertIsValidLabeledBox=function(e,t){if(lm.assertIsValidBox(e,t),!im(e.label))throw Error(t+` - expected property label (`+e.label+`) to be a number`)},Object.defineProperty(Bm.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Bm);function Bm(e,t){var n=Rm.call(this,e)||this;return n._label=t,n}var Vm=(Object.defineProperty(Hm.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(Hm.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),Hm.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(e){return Array.from(e)})}},Hm.fromJSON=function(e){var t=e.descriptors.map(function(e){return new Float32Array(e)});return new Hm(e.label,t)},Hm);function Hm(e,t){if(typeof e!=`string`)throw Error(`LabeledFaceDescriptors - constructor expected label to be a string`);if(!Array.isArray(t)||t.some(function(e){return!(e instanceof Float32Array)}))throw Error(`LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array`);this._label=e,this._descriptors=t}var Um,Wm,Gm=(Hp(Km,Um=zm),Km.assertIsValidPredictedBox=function(e,t){if(zm.assertIsValidLabeledBox(e,t),!am(e.score)||!am(e.classScore))throw Error(t+` - expected properties score (`+e.score+`) and (`+e.classScore+`) to be a number between [0, 1]`)},Object.defineProperty(Km.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(Km.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Km);function Km(e,t,n,r){var i=Um.call(this,e,t)||this;return i._score=n,i._classScore=r,i}function qm(e){return e.detection instanceof _m}function Jm(e,t){return Object.assign({},e,{detection:t})}function Ym(){var e=window.fetch||function(){throw Error(`fetch - missing fetch implementation for browser environment`)};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement(`canvas`)},createImageElement:function(){return document.createElement(`img`)},fetch:e,readFile:function(){throw Error(`readFile - filesystem not available for browser environment`)}}}function Xm(e){var t=``;if(!e)try{e=n()}catch(e){t=e.toString()}return{readFile:e?function(t){return new Promise(function(n,r){e.readFile(t,function(e,t){return e?r(e):n(t)})})}:function(){throw Error(`readFile - failed to require fs in nodejs environment with error: `+t)}}}function Zm(){var e=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,n=global.fetch||function(){throw Error(`fetch - missing fetch implementation for nodejs environment`)},r=Xm();return Up({Canvas:e||function(){},CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){},Image:t||function(){},ImageData:global.ImageData||function(){},Video:global.HTMLVideoElement||function(){},createCanvasElement:function(){if(e)return new e;throw Error(`createCanvasElement - missing Canvas implementation for nodejs environment`)},createImageElement:function(){if(t)return new t;throw Error(`createImageElement - missing Image implementation for nodejs environment`)},fetch:n},r)}function Qm(){return typeof window==`object`&&typeof document<`u`&&typeof HTMLImageElement<`u`&&typeof HTMLCanvasElement<`u`&&typeof HTMLVideoElement<`u`&&typeof ImageData<`u`&&typeof CanvasRenderingContext2D<`u`}function $m(){return typeof global==`object`&&typeof e==`function`&&i!==void 0&&typeof process<`u`&&!!process.version}function eh(e){Wm=e}function th(){Qm()&&eh(Ym()),$m()&&eh(Zm())}var nh,rh,ih={getEnv:function(){if(!Wm)throw Error(`getEnv - environment is not defined, check isNodejs() and isBrowser()`);return Wm},setEnv:eh,initialize:th,createBrowserEnv:Ym,createFileSystem:Xm,createNodejsEnv:Zm,monkeyPatch:function(e){if(Wm||th(),!Wm)throw Error(`monkeyPatch - environment is not defined, check isNodejs() and isBrowser()`);var t=e.Canvas,n=t===void 0?Wm.Canvas:t,r=e.Image,i=r===void 0?Wm.Image:r;Wm.Canvas=n,Wm.Image=i,Wm.createCanvasElement=e.createCanvasElement||function(){return new n},Wm.createImageElement=e.createImageElement||function(){return new i},Wm.ImageData=e.ImageData||Wm.ImageData,Wm.Video=e.Video||Wm.Video,Wm.fetch=e.fetch||Wm.fetch,Wm.readFile=e.readFile||Wm.readFile},isBrowser:Qm,isNodejs:$m};function ah(e){return ih.isNodejs()||typeof e!=`string`?e:document.getElementById(e)}function oh(e){var t=ih.getEnv(),n=t.Canvas;if(e instanceof t.CanvasRenderingContext2D)return e;var r=ah(e);if(!(r instanceof n))throw Error(`resolveContext2d - expected canvas to be of instance of Canvas`);var i=r.getContext(`2d`);if(!i)throw Error(`resolveContext2d - canvas 2d context is null`);return i}th(),(rh=nh||={}).TOP_LEFT=`TOP_LEFT`,rh.TOP_RIGHT=`TOP_RIGHT`,rh.BOTTOM_LEFT=`BOTTOM_LEFT`,rh.BOTTOM_RIGHT=`BOTTOM_RIGHT`;var sh=function(e){e===void 0&&(e={});var t=e.anchorPosition,n=e.backgroundColor,r=e.fontColor,i=e.fontSize,a=e.fontStyle,o=e.padding;this.anchorPosition=t||nh.TOP_LEFT,this.backgroundColor=n||`rgba(0, 0, 0, 0.5)`,this.fontColor=r||`rgba(255, 255, 255, 1)`,this.fontSize=i||14,this.fontStyle=a||`Georgia`,this.padding=o||4},ch=(lh.prototype.measureWidth=function(e){var t=this.options.padding;return this.text.map(function(t){return e.measureText(t).width}).reduce(function(e,t){return e<t?t:e},0)+2*t},lh.prototype.measureHeight=function(){var e=this.options,t=e.fontSize,n=e.padding;return this.text.length*t+2*n},lh.prototype.getUpperLeft=function(e,t){var n=this.options.anchorPosition,r=n===nh.BOTTOM_RIGHT||n===nh.TOP_RIGHT,i=n===nh.BOTTOM_LEFT||n===nh.BOTTOM_RIGHT,a=this.measureWidth(e),o=this.measureHeight(),s=r?this.anchor.x-a:this.anchor.x,c=i?this.anchor.y-o:this.anchor.y;if(t){var l=t.width,u=t.height;return{x:Math.max(Math.min(s,l-a),0),y:Math.max(Math.min(c,u-o),0)}}return{x:s,y:c}},lh.prototype.draw=function(e){var t=ah(e),n=oh(t),r=this.options,i=r.backgroundColor,a=r.fontColor,o=r.fontSize,s=r.fontStyle,c=r.padding;n.font=o+`px `+s;var l=this.measureWidth(n),u=this.measureHeight();n.fillStyle=i;var d=this.getUpperLeft(n,t);n.fillRect(d.x,d.y,l,u),n.fillStyle=a,this.text.forEach(function(e,t){var r=c+d.x,i=c+d.y+(t+1)*o;n.fillText(e,r,i)})},lh);function lh(e,t,n){n===void 0&&(n={}),this.text=typeof e==`string`?[e]:e instanceof lh?e.text:e,this.anchor=t,this.options=new sh(n)}var uh=function(e){e===void 0&&(e={});var t=e.boxColor,n=e.lineWidth,r=e.label,i=e.drawLabelOptions;this.boxColor=t||`rgba(0, 0, 255, 1)`,this.lineWidth=n||2,this.label=r;var a={anchorPosition:nh.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new sh(Object.assign({},a,i))},dh=(fh.prototype.draw=function(e){var t=oh(e),n=this.options,r=n.boxColor,i=n.lineWidth,a=this.box,o=a.x,s=a.y,c=a.width,l=a.height;t.strokeStyle=r,t.lineWidth=i,t.strokeRect(o,s,c,l);var u=this.options.label;u&&new ch([u],{x:o-i/2,y:s},this.options.drawLabelOptions).draw(e)},fh);function fh(e,t){t===void 0&&(t={}),this.box=new lm(e),this.options=new uh(t)}function ph(e){var t=ih.getEnv(),n=t.Image,r=t.Video;return e instanceof n&&e.complete||e instanceof r&&3<=e.readyState}function mh(e){return new Promise(function(t,n){if(e instanceof ih.getEnv().Canvas||ph(e))return t();function r(e){e.currentTarget&&(e.currentTarget.removeEventListener(`load`,r),e.currentTarget.removeEventListener(`error`,i),t(e))}function i(e){e.currentTarget&&(e.currentTarget.removeEventListener(`load`,r),e.currentTarget.removeEventListener(`error`,i),n(e))}e.addEventListener(`load`,r),e.addEventListener(`error`,i)})}function hh(e){return new Promise(function(t,n){if(!(e instanceof Blob))return n(`bufferToImage - expected buf to be of type: Blob`);var r=new FileReader;r.onload=function(){if(typeof r.result!=`string`)return n(`bufferToImage - expected reader.result to be a string, in onload`);var e=ih.getEnv().createImageElement();e.onload=function(){return t(e)},e.onerror=n,e.src=r.result},r.onerror=n,r.readAsDataURL(e)})}function gh(e){var t=ih.getEnv(),n=t.Image,r=t.Video;return e instanceof n?new Gp(e.naturalWidth,e.naturalHeight):e instanceof r?new Gp(e.videoWidth,e.videoHeight):new Gp(e.width,e.height)}function _h(e){var t=e.width,n=e.height,r=(0,ih.getEnv().createCanvasElement)();return r.width=t,r.height=n,r}function vh(e,t){var n=ih.getEnv().ImageData;if(!(e instanceof n||ph(e)))throw Error(`createCanvasFromMedia - media has not finished loading yet`);var r=t||gh(e),i=r.width,a=r.height,o=_h({width:i,height:a});return e instanceof n?oh(o).putImageData(e,0,0):oh(o).drawImage(e,0,0,i,a),o}function yh(e,t){return Q(this,void 0,void 0,function(){var n,r,i,a,o,s;return $(this,function(c){switch(c.label){case 0:return n=t||ih.getEnv().createCanvasElement(),r=e.shape.slice(+!!Xp(e)),i=r[0],a=r[1],o=r[2],s=H(function(){return e.as3D(i,a,o).toInt()}),[4,$f.toPixels(s,n)];case 1:return c.sent(),s.dispose(),[2,n]}})})}function bh(e){var t=ih.getEnv(),n=t.Image,r=t.Canvas,i=t.Video;return e instanceof n||e instanceof r||e instanceof i}function xh(e,t,n){n===void 0&&(n=!1);var r=ih.getEnv(),i=r.Image,a=r.Canvas;if(!(e instanceof i||e instanceof a))throw Error(`imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement`);var o=gh(e),s=t/Math.max(o.height,o.width),c=s*o.width,l=s*o.height,u=_h({width:t,height:t}),d=e instanceof a?e:vh(e),f=Math.abs(c-l)/2,p=n&&c<l?f:0,m=n&&l<c?f:0;return oh(u).drawImage(d,p,m,c,l),u}var Sh=(Object.defineProperty(Ch.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(Ch.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(Ch.prototype,"isBatchInput",{get:function(){return 1<this.batchSize||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(Ch.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(Ch.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(Ch.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(Ch.prototype,"reshapedInputDimensions",{get:function(){var e=this;return rm(this.batchSize,0,1).map(function(t,n){return e.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),Ch.prototype.getInput=function(e){return this.canvases[e]||this.imageTensors[e]},Ch.prototype.getInputDimensions=function(e){return this._inputDimensions[e]},Ch.prototype.getInputHeight=function(e){return this._inputDimensions[e][0]},Ch.prototype.getInputWidth=function(e){return this._inputDimensions[e][1]},Ch.prototype.getReshapedInputDimensions=function(e){if(typeof this.inputSize!=`number`)throw Error(`getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet`);return tm({width:this.getInputWidth(e),height:this.getInputHeight(e)},this.inputSize)},Ch.prototype.toBatchTensor=function(e,t){var n=this;return t===void 0&&(t=!0),this._inputSize=e,H(function(){return Kr(rm(n.batchSize,0,1).map(function(r){var i=n.getInput(r);if(i instanceof Be){var a=Xp(i)?i:i.expandDims();return(a=Cm(a,t)).shape[1]===e&&a.shape[2]===e||(a=Cd.resizeBilinear(a,[e,e])),a.as3D(e,e,3)}if(i instanceof ih.getEnv().Canvas)return $f.fromPixels(xh(i,e,t));throw Error(`toBatchTensor - at batchIdx `+r+`, expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have `+i)}).map(function(e){return e.toFloat()})).as4D(n.batchSize,e,e,3)})},Ch);function Ch(e,t){var n=this;if(t===void 0&&(t=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(e))throw Error(`NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have `+e);this._treatAsBatchInput=t,this._batchSize=e.length,e.forEach(function(e,t){if(Yp(e))return n._imageTensors[t]=e,void(n._inputDimensions[t]=e.shape);if(Xp(e)){var r=e.shape[0];if(r!==1)throw Error(`NetInput - tf.Tensor4D with batchSize `+r+` passed, but not supported in input array`);n._imageTensors[t]=e,n._inputDimensions[t]=e.shape.slice(1);return}var i=e instanceof ih.getEnv().Canvas?e:vh(e);n._canvases[t]=i,n._inputDimensions[t]=[i.height,i.width,3]})}function wh(e){return Q(this,void 0,void 0,function(){var t,n,r;return $(this,function(i){switch(i.label){case 0:if(e instanceof Sh)return[2,e];if(!(t=Array.isArray(e)?e:[e]).length)throw Error(`toNetInput - empty array passed as input`);return n=function(t){return Array.isArray(e)?` at input index `+t+`:`:``},(r=t.map(ah)).forEach(function(e,r){if(!bh(e)&&!Yp(e)&&!Xp(e))throw typeof t[r]==`string`?Error(`toNetInput -`+n(r)+` string passed, but could not resolve HTMLElement for element id `+t[r]):Error(`toNetInput -`+n(r)+` expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id`);if(Xp(e)){var i=e.shape[0];if(i!==1)throw Error(`toNetInput -`+n(r)+` tf.Tensor4D with batchSize `+i+` passed, but not supported in input array`)}}),[4,Promise.all(r.map(function(e){return bh(e)&&mh(e)}))];case 1:return i.sent(),[2,new Sh(r,Array.isArray(e))]}})})}function Th(e,t){return Q(this,void 0,void 0,function(){var n,r,i,a,o,s;return $(this,function(c){switch(c.label){case 0:return n=ih.getEnv().Canvas,(r=e)instanceof n?[3,5]:[4,wh(e)];case 1:if(1<(i=c.sent()).batchSize)throw Error(`extractFaces - batchSize > 1 not supported`);return(a=i.getInput(0))instanceof n?(o=a,[3,4]):[3,2];case 2:return[4,yh(a)];case 3:o=c.sent(),c.label=4;case 4:r=o,c.label=5;case 5:return s=oh(r),[2,t.map(function(e){return e instanceof _m?e.forSize(r.width,r.height).box.floor():e}).map(function(e){return e.clipAtImageBorders(r.width,r.height)}).map(function(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=_h({width:r,height:i});return oh(a).putImageData(s.getImageData(t,n,r,i),0,0),a})]}})})}function Eh(e,t){return Q(this,void 0,void 0,function(){return $(this,function(n){if(!Yp(e)&&!Xp(e))throw Error(`extractFaceTensors - expected image tensor to be 3D or 4D`);if(Xp(e)&&1<e.shape[0])throw Error(`extractFaceTensors - batchSize > 1 not supported`);return[2,H(function(){var n=e.shape.slice(+!!Xp(e)),r=n[0],i=n[1],a=n[2];return t.map(function(e){return e instanceof _m?e.forSize(i,r).box:e}).map(function(e){return e.clipAtImageBorders(i,r)}).map(function(t){var n=t.x,o=t.y,s=t.width,c=t.height;return au(e.as3D(r,i,a),[o,n,0],[c,s,a])})})]})})}function Dh(e,t){return Q(this,void 0,void 0,function(){var n;return $(this,function(r){switch(r.label){case 0:return[4,(0,ih.getEnv().fetch)(e,t)];case 1:if(!((n=r.sent()).status<400))throw Error(`failed to fetch: (`+n.status+`) `+n.statusText+`, from url: `+n.url);return[2,n]}})})}function Oh(e){return Q(this,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,Dh(e)];case 1:return[2,t.sent().json()]}})})}function kh(e,t){var n=t+`-weights_manifest.json`;if(!e)return{modelBaseUri:``,manifestUri:n};if(e===`/`)return{modelBaseUri:`/`,manifestUri:`/`+n};var r=e.startsWith(`http://`)?`http://`:e.startsWith(`https://`)?`https://`:``,i=(e=e.replace(r,``)).split(`/`).filter(function(e){return e}),a=e.endsWith(`.json`)?i[i.length-1]:n,o=r+(e.endsWith(`.json`)?i.slice(0,i.length-1):i).join(`/`);return{modelBaseUri:o=e.startsWith(`/`)?`/`+o:o,manifestUri:o===`/`?`/`+a:o+`/`+a}}function Ah(e,t){return Q(this,void 0,void 0,function(){var n,r,i,a;return $(this,function(o){switch(o.label){case 0:return n=kh(e,t),r=n.manifestUri,i=n.modelBaseUri,[4,Oh(r)];case 1:return a=o.sent(),[2,Yf.loadWeights(a,i)]}})})}var jh=(Object.defineProperty(Mh.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(Mh.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(Mh.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),Mh.prototype.getParamFromPath=function(e){var t=this.traversePropertyPath(e);return t.obj[t.objProp]},Mh.prototype.reassignParamFromPath=function(e,t){var n=this.traversePropertyPath(e),r=n.obj,i=n.objProp;r[i].dispose(),r[i]=t},Mh.prototype.getParamList=function(){var e=this;return this._paramMappings.map(function(t){var n=t.paramPath;return{path:n,tensor:e.getParamFromPath(n)}})},Mh.prototype.getTrainableParams=function(){return this.getParamList().filter(function(e){return e.tensor instanceof Qe})},Mh.prototype.getFrozenParams=function(){return this.getParamList().filter(function(e){return!(e.tensor instanceof Qe)})},Mh.prototype.variable=function(){var e=this;this.getFrozenParams().forEach(function(t){var n=t.path,r=t.tensor;e.reassignParamFromPath(n,r.variable())})},Mh.prototype.freeze=function(){var e=this;this.getTrainableParams().forEach(function(t){var n=t.path,r=t.tensor,i=Rn(r.dataSync());r.dispose(),e.reassignParamFromPath(n,i)})},Mh.prototype.dispose=function(e){e===void 0&&(e=!0),this.getParamList().forEach(function(t){if(e&&t.tensor.isDisposed)throw Error(`param tensor has already been disposed for path `+t.path);t.tensor.dispose()}),this._params=void 0},Mh.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(e){var t=e.tensor;return Array.from(t.dataSync())}).reduce(function(e,t){return e.concat(t)}))},Mh.prototype.load=function(e){return Q(this,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return e instanceof Float32Array?(this.extractWeights(e),[2]):[4,this.loadFromUri(e)];case 1:return t.sent(),[2]}})})},Mh.prototype.loadFromUri=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:if(e&&typeof e!=`string`)throw Error(this._name+`.loadFromUri - expected model uri`);return[4,Ah(e,this.getDefaultModelName())];case 1:return t=n.sent(),this.loadFromWeightMap(t),[2]}})})},Mh.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){var t,n,r,i,a,o,s,c,l,u;return $(this,function(d){switch(d.label){case 0:if(e&&typeof e!=`string`)throw Error(this._name+`.loadFromDisk - expected model file path`);return t=ih.getEnv().readFile,n=kh(e,this.getDefaultModelName()),r=n.manifestUri,i=n.modelBaseUri,a=function(e){return Promise.all(e.map(function(e){return t(e).then(function(e){return e.buffer})}))},o=Yf.weightsLoaderFactory(a),l=(c=JSON).parse,[4,t(r)];case 1:return s=l.apply(c,[d.sent().toString()]),[4,o(s,i)];case 2:return u=d.sent(),this.loadFromWeightMap(u),[2]}})})},Mh.prototype.loadFromWeightMap=function(e){var t=this.extractParamsFromWeigthMap(e),n=t.paramMappings,r=t.params;this._paramMappings=n,this._params=r},Mh.prototype.extractWeights=function(e){var t=this.extractParams(e),n=t.paramMappings,r=t.params;this._paramMappings=n,this._params=r},Mh.prototype.traversePropertyPath=function(e){if(!this.params)throw Error(`traversePropertyPath - model has no loaded params`);var t=e.split(`/`).reduce(function(t,n){if(!t.nextObj.hasOwnProperty(n))throw Error(`traversePropertyPath - object does not have property `+n+`, for path `+e);return{obj:t.nextObj,objProp:n,nextObj:t.nextObj[n]}},{nextObj:this.params}),n=t.obj,r=t.objProp;if(!(n&&r&&n[r]instanceof Be))throw Error(`traversePropertyPath - parameter is not a tensor, for path `+e);return{obj:n,objProp:r}},Mh);function Mh(e){this._name=e,this._params=void 0,this._paramMappings=[]}function Nh(e,t,n){return H(function(){var r=Rl(e,t.depthwise_filter,t.pointwise_filter,n,`same`);return r=Uc(r,t.bias)})}function Ph(e,t,n){return n===void 0&&(n=!1),H(function(){var r=Su(n?Uc(jl(e,t.conv0.filters,[2,2],`same`),t.conv0.bias):Nh(e,t.conv0,[2,2])),i=Nh(r,t.conv1,[1,1]);return Su(Uc(r,Uc(i,Nh(Su(Uc(r,i)),t.conv2,[1,1]))))})}function Fh(e,t,n,r){return n===void 0&&(n=!1),r===void 0&&(r=!0),H(function(){var i=Su(n?Uc(jl(e,t.conv0.filters,r?[2,2]:[1,1],`same`),t.conv0.bias):Nh(e,t.conv0,r?[2,2]:[1,1])),a=Nh(i,t.conv1,[1,1]),o=Nh(Su(Uc(i,a)),t.conv2,[1,1]);return Su(Uc(i,Uc(a,Uc(o,Nh(Su(Uc(i,Uc(a,o))),t.conv3,[1,1])))))})}function Ih(e,t,n,r){return n===void 0&&(n=`same`),r===void 0&&(r=!1),H(function(){var i=Uc(jl(e,t.filters,[1,1],n),t.bias);return r?Su(i):i})}function Lh(e,t){Object.keys(e).forEach(function(n){t.some(function(e){return e.originalPath===n})||e[n].dispose()})}function Rh(e,t){return function(n,r,i,a){var o=Un(e(n*r*i*i),[i,i,n,r]),s=Bn(e(r));return t.push({paramPath:a+`/filters`},{paramPath:a+`/bias`}),{filters:o,bias:s}}}function zh(e,t){return function(n,r,i){var a=Vn(e(n*r),[n,r]),o=Bn(e(r));return t.push({paramPath:i+`/weights`},{paramPath:i+`/bias`}),{weights:a,bias:o}}}var Bh=function(e,t,n){this.depthwise_filter=e,this.pointwise_filter=t,this.bias=n};function Vh(e,t){return function(n,r,i){var a=Un(e(9*n),[3,3,n,1]),o=Un(e(n*r),[1,1,n,r]),s=Bn(e(r));return t.push({paramPath:i+`/depthwise_filter`},{paramPath:i+`/pointwise_filter`},{paramPath:i+`/bias`}),new Bh(a,o,s)}}function Hh(e){return function(t){return new Bh(e(t+`/depthwise_filter`,4),e(t+`/pointwise_filter`,4),e(t+`/bias`,1))}}function Uh(e,t){return function(n,r,i){var a=e[n];if(!qp(a,r))throw Error(`expected weightMap[`+n+`] to be a Tensor`+r+`D, instead have `+a);return t.push({originalPath:n,paramPath:i||n}),a}}function Wh(e){var t=e;return{extractWeights:function(e){var n=t.slice(0,e);return t=t.slice(e),n},getRemainingWeights:function(){return t}}}function Gh(e,t){var n=Rh(e,t),r=Vh(e,t);function i(e,t,i,a){return a===void 0&&(a=!1),{conv0:a?n(e,t,3,i+`/conv0`):r(e,t,i+`/conv0`),conv1:r(t,t,i+`/conv1`),conv2:r(t,t,i+`/conv2`)}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:function(e,t,n,a){a===void 0&&(a=!1);var o=i(e,t,n,a);return{conv0:o.conv0,conv1:o.conv1,conv2:o.conv2,conv3:r(t,t,n+`/conv3`)}}}}function Kh(e){return function(t){return{filters:e(t+`/filters`,4),bias:e(t+`/bias`,1)}}}function qh(e,t){var n=Uh(e,t),r=Kh(n),i=Hh(n);return{extractDenseBlock3Params:function(e,t){return t===void 0&&(t=!1),{conv0:t?r(e+`/conv0`):i(e+`/conv0`),conv1:i(e+`/conv1`),conv2:i(e+`/conv2`)}},extractDenseBlock4Params:function(e,t){return t===void 0&&(t=!1),{conv0:t?r(e+`/conv0`):i(e+`/conv0`),conv1:i(e+`/conv1`),conv2:i(e+`/conv2`),conv3:i(e+`/conv3`)}}}}var Jh,Yh=(Hp(Xh,Jh=jh),Xh.prototype.forwardInput=function(e){var t=this.params;if(!t)throw Error(`FaceFeatureExtractor - load model before inference`);return H(function(){var n=Fh(Sm(e.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(G(255)),t.dense0,!0);return n=Fh(n=Fh(n=Fh(n,t.dense1),t.dense2),t.dense3),n=Ql(n,[7,7],[2,2],`valid`)})},Xh.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,wh(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},Xh.prototype.getDefaultModelName=function(){return`face_feature_extractor_model`},Xh.prototype.extractParamsFromWeigthMap=function(e){return function(e){var t=[],n=qh(e,t).extractDenseBlock4Params,r={dense0:n(`dense0`,!0),dense1:n(`dense1`),dense2:n(`dense2`),dense3:n(`dense3`)};return Lh(e,t),{params:r,paramMappings:t}}(e)},Xh.prototype.extractParams=function(e){return function(e){var t=[],n=Wh(e),r=n.extractWeights,i=n.getRemainingWeights,a=Gh(r,t).extractDenseBlock4Params,o=a(3,32,`dense0`,!0),s=a(32,64,`dense1`),c=a(64,128,`dense2`),l=a(128,256,`dense3`);if(i().length!==0)throw Error(`weights remaing after extract: `+i().length);return{paramMappings:t,params:{dense0:o,dense1:s,dense2:c,dense3:l}}}(e)},Xh);function Xh(){return Jh.call(this,`FaceFeatureExtractor`)||this}function Zh(e,t){return H(function(){return Uc(Vl(e,t.weights),t.bias)})}function Qh(e){var t={},n={};return Object.keys(e).forEach(function(r){(r.startsWith(`fc`)?n:t)[r]=e[r]}),{featureExtractorMap:t,classifierMap:n}}var $h,eg=(Hp(tg,$h=jh),Object.defineProperty(tg.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),tg.prototype.runNet=function(e){var t=this,n=this.params;if(!n)throw Error(this._name+` - load model before inference`);return H(function(){var r=e instanceof Sh?t.faceFeatureExtractor.forwardInput(e):e;return Zh(r.as2D(r.shape[0],-1),n.fc)})},tg.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),$h.prototype.dispose.call(this,e)},tg.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),n=t.params,r=t.paramMappings;this._params=n,this._paramMappings=r},tg.prototype.extractClassifierParams=function(e){return function(e,t,n){var r=[],i=Wh(e),a=i.extractWeights,o=i.getRemainingWeights,s=zh(a,r)(t,n,`fc`);if(o().length!==0)throw Error(`weights remaing after extract: `+o().length);return{paramMappings:r,params:{fc:s}}}(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},tg.prototype.extractParamsFromWeigthMap=function(e){var t=Qh(e),n=t.featureExtractorMap,r=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(n),function(e){var t,n=[],r=Uh(e,n),i={fc:(t=`fc`,{weights:r(t+`/weights`,2),bias:r(t+`/bias`,1)})};return Lh(e,n),{params:i,paramMappings:n}}(r)},tg.prototype.extractParams=function(e){var t=this.getClassifierChannelsIn(),n=this.getClassifierChannelsOut(),r=n*t+n,i=e.slice(0,e.length-r),a=e.slice(e.length-r);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(a)},tg);function tg(e,t){var n=$h.call(this,e)||this;return n._faceFeatureExtractor=t,n}var ng=[`neutral`,`happy`,`sad`,`angry`,`fearful`,`disgusted`,`surprised`],rg=(ig.prototype.asSortedArray=function(){var e=this;return ng.map(function(t){return{expression:t,probability:e[t]}}).sort(function(e,t){return t.probability-e.probability})},ig);function ig(e){var t=this;if(e.length!==7)throw Error(`FaceExpressions.constructor - expected probabilities.length to be 7, have: `+e.length);ng.forEach(function(n,r){t[n]=e[r]})}var ag,og=(Hp(sg,ag=eg),sg.prototype.forwardInput=function(e){var t=this;return H(function(){return yi(t.runNet(e))})},sg.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,wh(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},sg.prototype.predictExpressions=function(e){return Q(this,void 0,void 0,function(){var t,n,r,i,a=this;return $(this,function(o){switch(o.label){case 0:return[4,wh(e)];case 1:return t=o.sent(),[4,this.forwardInput(t)];case 2:return n=o.sent(),[4,Promise.all(Yr(n).map(function(e){return Q(a,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return[4,e.data()];case 1:return t=n.sent(),e.dispose(),[2,t]}})})}))];case 3:return r=o.sent(),n.dispose(),i=r.map(function(e){return new rg(e)}),[2,t.isBatchInput?i:i[0]]}})})},sg.prototype.getDefaultModelName=function(){return`face_expression_model`},sg.prototype.getClassifierChannelsIn=function(){return 256},sg.prototype.getClassifierChannelsOut=function(){return 7},sg);function sg(e){return e===void 0&&(e=new Yh),ag.call(this,`FaceExpressionNet`,e)||this}function cg(e){return e.expressions instanceof rg}function lg(e,t){return Object.assign({},e,{expressions:t})}function ug(e){return qm(e)&&e.landmarks instanceof Om&&e.unshiftedLandmarks instanceof Om&&e.alignedRect instanceof _m}function dg(e,t){var n=e.detection.box,r=t.shiftBy(n.x,n.y),i=r.align(),a=e.detection.imageDims,o={landmarks:r,unshiftedLandmarks:t,alignedRect:new _m(e.detection.score,i.rescale(a.reverse()),a)};return Object.assign({},e,o)}var fg=function(e){e===void 0&&(e={});var t=e.drawLines,n=t===void 0||t,r=e.drawPoints,i=r===void 0||r,a=e.lineWidth,o=e.lineColor,s=e.pointSize,c=e.pointColor;this.drawLines=n,this.drawPoints=i,this.lineWidth=a||1,this.pointSize=s||2,this.lineColor=o||`rgba(0, 255, 255, 1)`,this.pointColor=c||`rgba(255, 0, 255, 1)`},pg=(mg.prototype.draw=function(e){var t=oh(e),n=this.options,r=n.drawLines,i=n.drawPoints,a=n.lineWidth,o=n.lineColor,s=n.pointSize,c=n.pointColor;r&&this.faceLandmarks instanceof Pm&&(t.strokeStyle=o,t.lineWidth=a,Bp(t,this.faceLandmarks.getJawOutline()),Bp(t,this.faceLandmarks.getLeftEyeBrow()),Bp(t,this.faceLandmarks.getRightEyeBrow()),Bp(t,this.faceLandmarks.getNose()),Bp(t,this.faceLandmarks.getLeftEye(),!0),Bp(t,this.faceLandmarks.getRightEye(),!0),Bp(t,this.faceLandmarks.getMouth(),!0)),i&&(t.strokeStyle=c,t.fillStyle=c,this.faceLandmarks.positions.forEach(function(e){t.beginPath(),t.arc(e.x,e.y,s,0,2*Math.PI),t.fill()}))},mg);function mg(e,t){t===void 0&&(t={}),this.faceLandmarks=e,this.options=new fg(t)}var hg=Object.freeze({__proto__:null,drawContour:Bp,drawDetections:function(e,t){(Array.isArray(t)?t:[t]).forEach(function(t){var n=t instanceof _m?t.score:qm(t)?t.detection.score:void 0;new dh(t instanceof _m?t.box:qm(t)?t.detection.box:new lm(t),{label:n?``+$p(n):void 0}).draw(e)})},drawFaceExpressions:function(e,t,n,r){n===void 0&&(n=.1),(Array.isArray(t)?t:[t]).forEach(function(t){var i=t instanceof rg?t:cg(t)?t.expressions:void 0;if(!i)throw Error(`drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof`);var a=i.asSortedArray().filter(function(e){return e.probability>n}),o=qm(t)?t.detection.box.bottomLeft:r||new sm(0,0);new ch(a.map(function(e){return e.expression+` (`+$p(e.probability)+`)`}),o).draw(e)})},DrawBoxOptions:uh,DrawBox:dh,DrawFaceLandmarksOptions:fg,DrawFaceLandmarks:pg,drawFaceLandmarks:function(e,t){(Array.isArray(t)?t:[t]).forEach(function(t){var n=t instanceof Om?t:ug(t)?t.landmarks:void 0;if(!n)throw Error(`drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof`);new pg(n).draw(e)})},get AnchorPosition(){return nh},DrawTextFieldOptions:sh,DrawTextField:ch});function gg(e,t){var n=[],r=Wh(e),i=r.extractWeights,a=r.getRemainingWeights,o=function(e,t){var n=Rh(e,t),r=Vh(e,t);return{extractConvParams:n,extractSeparableConvParams:r,extractReductionBlockParams:function(e,t,i){return{separable_conv0:r(e,t,i+`/separable_conv0`),separable_conv1:r(t,t,i+`/separable_conv1`),expansion_conv:n(e,t,1,i+`/expansion_conv`)}},extractMainBlockParams:function(e,t){return{separable_conv0:r(e,e,t+`/separable_conv0`),separable_conv1:r(e,e,t+`/separable_conv1`),separable_conv2:r(e,e,t+`/separable_conv2`)}}}}(i,n),s=o.extractConvParams,c=o.extractSeparableConvParams,l=o.extractReductionBlockParams,u=o.extractMainBlockParams,d={conv_in:s(3,32,3,`entry_flow/conv_in`),reduction_block_0:l(32,64,`entry_flow/reduction_block_0`),reduction_block_1:l(64,128,`entry_flow/reduction_block_1`)},f={};rm(t,0,1).forEach(function(e){f[`main_block_`+e]=u(128,`middle_flow/main_block_`+e)});var p={reduction_block:l(128,256,`exit_flow/reduction_block`),separable_conv:c(256,512,`exit_flow/separable_conv`)};if(a().length!==0)throw Error(`weights remaing after extract: `+a().length);return{paramMappings:n,params:{entry_flow:d,middle_flow:f,exit_flow:p}}}function _g(e,t){var n=[],r=function(e,t){var n=Uh(e,t),r=Kh(n),i=Hh(n);return{extractConvParams:r,extractSeparableConvParams:i,extractReductionBlockParams:function(e){return{separable_conv0:i(e+`/separable_conv0`),separable_conv1:i(e+`/separable_conv1`),expansion_conv:r(e+`/expansion_conv`)}},extractMainBlockParams:function(e){return{separable_conv0:i(e+`/separable_conv0`),separable_conv1:i(e+`/separable_conv1`),separable_conv2:i(e+`/separable_conv2`)}}}}(e,n),i=r.extractConvParams,a=r.extractSeparableConvParams,o=r.extractReductionBlockParams,s=r.extractMainBlockParams,c={conv_in:i(`entry_flow/conv_in`),reduction_block_0:o(`entry_flow/reduction_block_0`),reduction_block_1:o(`entry_flow/reduction_block_1`)},l={};rm(t,0,1).forEach(function(e){l[`main_block_`+e]=s(`middle_flow/main_block_`+e)});var u={reduction_block:o(`exit_flow/reduction_block`),separable_conv:a(`exit_flow/separable_conv`)};return Lh(e,n),{params:{entry_flow:c,middle_flow:l,exit_flow:u},paramMappings:n}}function vg(e,t,n){return Uc(jl(e,t.filters,n,`same`),t.bias)}function yg(e,t,n){n===void 0&&(n=!0);var r=n?Su(e):e;return r=Nh(r,t.separable_conv0,[1,1]),r=Nh(Su(r),t.separable_conv1,[1,1]),r=Zl(r,[3,3],[2,2],`same`),r=Uc(r,vg(e,t.expansion_conv,[2,2]))}var bg,xg,Sg=(Hp(Cg,bg=jh),Cg.prototype.forwardInput=function(e){var t=this,n=this.params;if(!n)throw Error(`TinyXception - load model before inference`);return H(function(){var r=Su(vg(Sm(e.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(G(256)),n.entry_flow.conv_in,[2,2]));return r=yg(r=yg(r,n.entry_flow.reduction_block_0,!1),n.entry_flow.reduction_block_1),rm(t._numMainBlocks,0,1).forEach(function(e){r=function(e,t){var n=Nh(Su(e),t.separable_conv0,[1,1]);return n=Nh(Su(n),t.separable_conv1,[1,1]),n=Nh(Su(n),t.separable_conv2,[1,1]),n=Uc(n,e)}(r,n.middle_flow[`main_block_`+e])}),r=yg(r,n.exit_flow.reduction_block),r=Su(Nh(r,n.exit_flow.separable_conv,[1,1]))})},Cg.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,wh(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},Cg.prototype.getDefaultModelName=function(){return`tiny_xception_model`},Cg.prototype.extractParamsFromWeigthMap=function(e){return _g(e,this._numMainBlocks)},Cg.prototype.extractParams=function(e){return gg(e,this._numMainBlocks)},Cg);function Cg(e){var t=bg.call(this,`TinyXception`)||this;return t._numMainBlocks=e,t}(xg=t.Gender||={}).FEMALE=`female`,xg.MALE=`male`;var wg,Tg=(Hp(Eg,wg=jh),Object.defineProperty(Eg.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),Eg.prototype.runNet=function(e){var t=this,n=this.params;if(!n)throw Error(this._name+` - load model before inference`);return H(function(){var r=e instanceof Sh?t.faceFeatureExtractor.forwardInput(e):e,i=Ql(r,[7,7],[2,2],`valid`).as2D(r.shape[0],-1);return{age:Zh(i,n.fc.age).as1D(),gender:Zh(i,n.fc.gender)}})},Eg.prototype.forwardInput=function(e){var t=this;return H(function(){var n=t.runNet(e),r=n.age,i=n.gender;return{age:r,gender:yi(i)}})},Eg.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,wh(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},Eg.prototype.predictAgeAndGender=function(e){return Q(this,void 0,void 0,function(){var n,r,i,a,o,s,c=this;return $(this,function(l){switch(l.label){case 0:return[4,wh(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return r=l.sent(),i=Yr(r.age),a=Yr(r.gender),o=i.map(function(e,t){return{ageTensor:e,genderTensor:a[t]}}),[4,Promise.all(o.map(function(e){var n=e.ageTensor,r=e.genderTensor;return Q(c,void 0,void 0,function(){var e,i,a,o,s;return $(this,function(c){switch(c.label){case 0:return[4,n.data()];case 1:return e=c.sent()[0],[4,r.data()];case 2:return i=c.sent()[0],o=(a=.5<i)?t.Gender.MALE:t.Gender.FEMALE,s=a?i:1-i,n.dispose(),r.dispose(),[2,{age:e,gender:o,genderProbability:s}]}})})}))];case 3:return s=l.sent(),r.age.dispose(),r.gender.dispose(),[2,n.isBatchInput?s:s[0]]}})})},Eg.prototype.getDefaultModelName=function(){return`age_gender_model`},Eg.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),wg.prototype.dispose.call(this,e)},Eg.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),n=t.params,r=t.paramMappings;this._params=n,this._paramMappings=r},Eg.prototype.extractClassifierParams=function(e){return function(e){var t=[],n=Wh(e),r=n.extractWeights,i=n.getRemainingWeights,a=zh(r,t),o=a(512,1,`fc/age`),s=a(512,2,`fc/gender`);if(i().length!==0)throw Error(`weights remaing after extract: `+i().length);return{paramMappings:t,params:{fc:{age:o,gender:s}}}}(e)},Eg.prototype.extractParamsFromWeigthMap=function(e){var t=Qh(e),n=t.featureExtractorMap,r=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(n),function(e){var t=[],n=Uh(e,t);function r(e){return{weights:n(e+`/weights`,2),bias:n(e+`/bias`,1)}}var i={fc:{age:r(`fc/age`),gender:r(`fc/gender`)}};return Lh(e,t),{params:i,paramMappings:t}}(r)},Eg.prototype.extractParams=function(e){var t=e.slice(0,e.length-1539),n=e.slice(e.length-1539);return this.faceFeatureExtractor.extractWeights(t),this.extractClassifierParams(n)},Eg);function Eg(e){e===void 0&&(e=new Sg(2));var t=wg.call(this,`AgeGenderNet`)||this;return t._faceFeatureExtractor=e,t}var Dg,Og=(Hp(kg,Dg=eg),kg.prototype.postProcess=function(e,t,n){var r=n.map(function(e){var n=e.width,r=e.height,i=t/Math.max(r,n);return{width:n*i,height:r*i}}),i=r.length;return H(function(){function n(e,t){return Kr([Yn([68],e),Yn([68],t)],1).as2D(1,136).as1D()}function a(e,t){var n=r[e],i=n.width,a=n.height;return t(i,a)?Math.abs(i-a)/2:0}return e.mul(Yn([i,136],t)).sub(Kr(Array.from(Array(i),function(e,t){return n(function(e){return a(e,function(e,t){return e<t})}(t),function(e){return a(e,function(e,t){return t<e})}(t))}))).div(Kr(Array.from(Array(i),function(e,t){return n(r[t].width,r[t].height)})))})},kg.prototype.forwardInput=function(e){var t=this;return H(function(){var n=t.runNet(e);return t.postProcess(n,e.inputSize,e.inputDimensions.map(function(e){return{height:e[0],width:e[1]}}))})},kg.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,wh(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},kg.prototype.detectLandmarks=function(e){return Q(this,void 0,void 0,function(){var t,n,r,i=this;return $(this,function(a){switch(a.label){case 0:return[4,wh(e)];case 1:return t=a.sent(),n=H(function(){return Yr(i.forwardInput(t))}),[4,Promise.all(n.map(function(e,n){return Q(i,void 0,void 0,function(){var r,i,a,o,s;return $(this,function(c){switch(c.label){case 0:return a=(i=Array).from,[4,e.data()];case 1:return r=a.apply(i,[c.sent()]),o=r.filter(function(e,t){return Qp(t)}),s=r.filter(function(e,t){return!Qp(t)}),[2,new Pm(Array(68).fill(0).map(function(e,t){return new sm(o[t],s[t])}),{height:t.getInputHeight(n),width:t.getInputWidth(n)})]}})})}))];case 2:return r=a.sent(),n.forEach(function(e){return e.dispose()}),[2,t.isBatchInput?r:r[0]]}})})},kg.prototype.getClassifierChannelsOut=function(){return 136},kg);function kg(){return Dg!==null&&Dg.apply(this,arguments)||this}var Ag,jg=(Hp(Mg,Ag=Og),Mg.prototype.getDefaultModelName=function(){return`face_landmark_68_model`},Mg.prototype.getClassifierChannelsIn=function(){return 256},Mg);function Mg(e){return e===void 0&&(e=new Yh),Ag.call(this,`FaceLandmark68Net`,e)||this}var Ng,Pg=(Hp(Fg,Ng=jh),Fg.prototype.forwardInput=function(e){var t=this.params;if(!t)throw Error(`TinyFaceFeatureExtractor - load model before inference`);return H(function(){var n=Ph(Sm(e.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(G(255)),t.dense0,!0);return n=Ph(n=Ph(n,t.dense1),t.dense2),n=Ql(n,[14,14],[2,2],`valid`)})},Fg.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,wh(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},Fg.prototype.getDefaultModelName=function(){return`face_feature_extractor_tiny_model`},Fg.prototype.extractParamsFromWeigthMap=function(e){return function(e){var t=[],n=qh(e,t).extractDenseBlock3Params,r={dense0:n(`dense0`,!0),dense1:n(`dense1`),dense2:n(`dense2`)};return Lh(e,t),{params:r,paramMappings:t}}(e)},Fg.prototype.extractParams=function(e){return function(e){var t=[],n=Wh(e),r=n.extractWeights,i=n.getRemainingWeights,a=Gh(r,t).extractDenseBlock3Params,o=a(3,32,`dense0`,!0),s=a(32,64,`dense1`),c=a(64,128,`dense2`);if(i().length!==0)throw Error(`weights remaing after extract: `+i().length);return{paramMappings:t,params:{dense0:o,dense1:s,dense2:c}}}(e)},Fg);function Fg(){return Ng.call(this,`TinyFaceFeatureExtractor`)||this}var Ig,Lg=(Hp(Rg,Ig=Og),Rg.prototype.getDefaultModelName=function(){return`face_landmark_68_tiny_model`},Rg.prototype.getClassifierChannelsIn=function(){return 128},Rg);function Rg(e){return e===void 0&&(e=new Pg),Ig.call(this,`FaceLandmark68TinyNet`,e)||this}var zg,Bg=(Hp(Vg,zg=jg),Vg);function Vg(){return zg!==null&&zg.apply(this,arguments)||this}function Hg(e,t,n,r,i){i===void 0&&(i=`same`);var a=t.conv,o=a.filters,s=a.bias,c=jl(e,o,n,i);return c=function(e,t){return Uc(rl(e,t.weights),t.biases)}(c=Uc(c,s),t.scale),r?Su(c):c}function Ug(e,t){return Hg(e,t,[1,1],!1)}function Wg(e,t){return Hg(e,t,[2,2],!0,`valid`)}function Gg(e,t){function n(n,r,i,a){var o=function(t,n,r){var i=e(t),a=i.length/(n*r*r);if(Zp(a))throw Error(`depth has to be an integer: `+a+`, weights.length: `+i.length+`, numFilters: `+n+`, filterSize: `+r);return H(function(){return Tu(Un(i,[n,a,r,r]),[2,3,1,0])})}(n,r,i),s=Bn(e(r));return t.push({paramPath:a+`/filters`},{paramPath:a+`/bias`}),{filters:o,bias:s}}function r(r,i,a,o){return{conv:n(r,i,a,o+`/conv`),scale:function(n,r){var i=Bn(e(n)),a=Bn(e(n));return t.push({paramPath:r+`/weights`},{paramPath:r+`/biases`}),{weights:i,biases:a}}(i,o+`/scale`)}}return{extractConvLayerParams:r,extractResidualLayerParams:function(e,t,n,i,a){return a===void 0&&(a=!1),{conv1:r((a?.5:1)*e,t,n,i+`/conv1`),conv2:r(e,t,n,i+`/conv2`)}}}}function Kg(e,t){var n=Uh(e,t);function r(e){return{conv:{filters:n(e+`/conv/filters`,4),bias:n(e+`/conv/bias`,1)},scale:function(e){return{weights:n(e+`/scale/weights`,1),biases:n(e+`/scale/biases`,1)}}(e)}}return{extractConvLayerParams:r,extractResidualLayerParams:function(e){return{conv1:r(e+`/conv1`),conv2:r(e+`/conv2`)}}}}function qg(e,t){var n=function(e,t){return Hg(e,t,[1,1],!0)}(e,t.conv1);return n=Ug(n,t.conv2),n=Uc(n,e),n=Su(n)}function Jg(e,t){var n=Wg(e,t.conv1);n=Ug(n,t.conv2);var r=Ql(e,2,2,`valid`),i=Jn(r.shape),a=r.shape[3]!==n.shape[3];if(r.shape[1]!==n.shape[1]||r.shape[2]!==n.shape[2]){var o=Wp(n.shape);o[1]=1;var s=Jn(o),c=Wp((n=er([n,s],1)).shape);c[2]=1;var l=Jn(c);n=er([n,l],2)}return r=a?er([r,i],3):r,n=Uc(r,n),n=Su(n)}var Yg,Xg=(Hp(Zg,Yg=jh),Zg.prototype.forwardInput=function(e){var t=this.params;if(!t)throw Error(`FaceRecognitionNet - load model before inference`);return H(function(){var n=Wg(Sm(e.toBatchTensor(150,!0).toFloat(),[122.782,117.001,104.298]).div(G(256)),t.conv32_down);return Vl((n=Jg(n=qg(n=qg(n=Jg(n=qg(n=qg(n=Jg(n=qg(n=qg(n=qg(n=Jg(n=qg(n=qg(n=qg(n=Zl(n,3,2,`valid`),t.conv32_1),t.conv32_2),t.conv32_3),t.conv64_down),t.conv64_1),t.conv64_2),t.conv64_3),t.conv128_down),t.conv128_1),t.conv128_2),t.conv256_down),t.conv256_1),t.conv256_2),t.conv256_down_out)).mean([1,2]),t.fc)})},Zg.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,wh(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},Zg.prototype.computeFaceDescriptor=function(e){return Q(this,void 0,void 0,function(){var t,n,r,i=this;return $(this,function(a){switch(a.label){case 0:return[4,wh(e)];case 1:return t=a.sent(),n=H(function(){return Yr(i.forwardInput(t))}),[4,Promise.all(n.map(function(e){return e.data()}))];case 2:return r=a.sent(),n.forEach(function(e){return e.dispose()}),[2,t.isBatchInput?r:r[0]]}})})},Zg.prototype.getDefaultModelName=function(){return`face_recognition_model`},Zg.prototype.extractParamsFromWeigthMap=function(e){return function(e){var t=[],n=Kg(e,t),r=n.extractConvLayerParams,i=n.extractResidualLayerParams,a=r(`conv32_down`),o=i(`conv32_1`),s=i(`conv32_2`),c=i(`conv32_3`),l=i(`conv64_down`),u=i(`conv64_1`),d=i(`conv64_2`),f=i(`conv64_3`),p=i(`conv128_down`),m=i(`conv128_1`),h=i(`conv128_2`),g=i(`conv256_down`),_=i(`conv256_1`),v=i(`conv256_2`),y=i(`conv256_down_out`),b=e.fc;if(t.push({originalPath:`fc`,paramPath:`fc`}),!Jp(b))throw Error(`expected weightMap[fc] to be a Tensor2D, instead have `+b);var x={conv32_down:a,conv32_1:o,conv32_2:s,conv32_3:c,conv64_down:l,conv64_1:u,conv64_2:d,conv64_3:f,conv128_down:p,conv128_1:m,conv128_2:h,conv256_down:g,conv256_1:_,conv256_2:v,conv256_down_out:y,fc:b};return Lh(e,t),{params:x,paramMappings:t}}(e)},Zg.prototype.extractParams=function(e){return function(e){var t=Wh(e),n=t.extractWeights,r=t.getRemainingWeights,i=[],a=Gg(n,i),o=a.extractConvLayerParams,s=a.extractResidualLayerParams,c=o(4704,32,7,`conv32_down`),l=s(9216,32,3,`conv32_1`),u=s(9216,32,3,`conv32_2`),d=s(9216,32,3,`conv32_3`),f=s(36864,64,3,`conv64_down`,!0),p=s(36864,64,3,`conv64_1`),m=s(36864,64,3,`conv64_2`),h=s(36864,64,3,`conv64_3`),g=s(147456,128,3,`conv128_down`,!0),_=s(147456,128,3,`conv128_1`),v=s(147456,128,3,`conv128_2`),y=s(589824,256,3,`conv256_down`,!0),b=s(589824,256,3,`conv256_1`),x=s(589824,256,3,`conv256_2`),S=s(589824,256,3,`conv256_down_out`),C=H(function(){return Tu(Vn(n(32768),[128,256]),[1,0])});if(i.push({paramPath:`fc`}),r().length!==0)throw Error(`weights remaing after extract: `+r().length);return{params:{conv32_down:c,conv32_1:l,conv32_2:u,conv32_3:d,conv64_down:f,conv64_1:p,conv64_2:m,conv64_3:h,conv128_down:g,conv128_1:_,conv128_2:v,conv256_down:y,conv256_1:b,conv256_2:x,conv256_down_out:S,fc:C},paramMappings:i}}(e)},Zg);function Zg(){return Yg.call(this,`FaceRecognitionNet`)||this}function Qg(e,t){return Object.assign({},e,{descriptor:t})}function $g(e,t){return Object.assign({},e,{age:t})}function e_(e,t,n){return Object.assign({},e,{gender:t,genderProbability:n})}var t_=(Object.defineProperty(n_.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(n_.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(n_.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(n_.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(n_.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),n_);function n_(e){var t=e===void 0?{}:e,n=t.minFaceSize,r=t.scaleFactor,i=t.maxNumScales,a=t.scoreThresholds,o=t.scaleSteps;if(this._name=`MtcnnOptions`,this._minFaceSize=n||20,this._scaleFactor=r||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=o,typeof this._minFaceSize!=`number`||this._minFaceSize<0)throw Error(this._name+` - expected minFaceSize to be a number > 0`);if(typeof this._scaleFactor!=`number`||this._scaleFactor<=0||1<=this._scaleFactor)throw Error(this._name+` - expected scaleFactor to be a number between 0 and 1`);if(typeof this._maxNumScales!=`number`||this._maxNumScales<0)throw Error(this._name+` - expected maxNumScales to be a number > 0`);if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(e){return typeof e!=`number`}))throw Error(this._name+` - expected scoreThresholds to be an array of numbers of length 3`);if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(e){return typeof e!=`number`})))throw Error(this._name+` - expected scaleSteps to be an array of numbers`)}function r_(e,t){function n(n,r,i,a,o){var s=Un(e(n*r*i*i),[i,i,n,r]),c=Bn(e(r));return t.push({paramPath:a+`/filters`},{paramPath:a+`/`+(o?`batch_norm_offset`:`bias`)}),{filters:s,bias:c}}function r(e,t,r,i){var a=n(e,t,r,i,!0);return{filters:a.filters,batch_norm_offset:a.bias}}function i(n,i,a){return{depthwise_conv:function(n,r){var i=Un(e(9*n),[3,3,n,1]),a=Bn(e(n)),o=Bn(e(n)),s=Bn(e(n)),c=Bn(e(n));return t.push({paramPath:r+`/filters`},{paramPath:r+`/batch_norm_scale`},{paramPath:r+`/batch_norm_offset`},{paramPath:r+`/batch_norm_mean`},{paramPath:r+`/batch_norm_variance`}),{filters:i,batch_norm_scale:a,batch_norm_offset:o,batch_norm_mean:s,batch_norm_variance:c}}(n,a+`/depthwise_conv`),pointwise_conv:r(n,i,1,a+`/pointwise_conv`)}}return{extractMobilenetV1Params:function(){return{conv_0:r(3,32,3,`mobilenetv1/conv_0`),conv_1:i(32,64,`mobilenetv1/conv_1`),conv_2:i(64,128,`mobilenetv1/conv_2`),conv_3:i(128,128,`mobilenetv1/conv_3`),conv_4:i(128,256,`mobilenetv1/conv_4`),conv_5:i(256,256,`mobilenetv1/conv_5`),conv_6:i(256,512,`mobilenetv1/conv_6`),conv_7:i(512,512,`mobilenetv1/conv_7`),conv_8:i(512,512,`mobilenetv1/conv_8`),conv_9:i(512,512,`mobilenetv1/conv_9`),conv_10:i(512,512,`mobilenetv1/conv_10`),conv_11:i(512,512,`mobilenetv1/conv_11`),conv_12:i(512,1024,`mobilenetv1/conv_12`),conv_13:i(1024,1024,`mobilenetv1/conv_13`)}},extractPredictionLayerParams:function(){return{conv_0:r(1024,256,1,`prediction_layer/conv_0`),conv_1:r(256,512,3,`prediction_layer/conv_1`),conv_2:r(512,128,1,`prediction_layer/conv_2`),conv_3:r(128,256,3,`prediction_layer/conv_3`),conv_4:r(256,128,1,`prediction_layer/conv_4`),conv_5:r(128,256,3,`prediction_layer/conv_5`),conv_6:r(256,64,1,`prediction_layer/conv_6`),conv_7:r(64,128,3,`prediction_layer/conv_7`),box_predictor_0:{box_encoding_predictor:n(512,12,1,`prediction_layer/box_predictor_0/box_encoding_predictor`),class_predictor:n(512,9,1,`prediction_layer/box_predictor_0/class_predictor`)},box_predictor_1:{box_encoding_predictor:n(1024,24,1,`prediction_layer/box_predictor_1/box_encoding_predictor`),class_predictor:n(1024,18,1,`prediction_layer/box_predictor_1/class_predictor`)},box_predictor_2:{box_encoding_predictor:n(512,24,1,`prediction_layer/box_predictor_2/box_encoding_predictor`),class_predictor:n(512,18,1,`prediction_layer/box_predictor_2/class_predictor`)},box_predictor_3:{box_encoding_predictor:n(256,24,1,`prediction_layer/box_predictor_3/box_encoding_predictor`),class_predictor:n(256,18,1,`prediction_layer/box_predictor_3/class_predictor`)},box_predictor_4:{box_encoding_predictor:n(256,24,1,`prediction_layer/box_predictor_4/box_encoding_predictor`),class_predictor:n(256,18,1,`prediction_layer/box_predictor_4/class_predictor`)},box_predictor_5:{box_encoding_predictor:n(128,24,1,`prediction_layer/box_predictor_5/box_encoding_predictor`),class_predictor:n(128,18,1,`prediction_layer/box_predictor_5/class_predictor`)}}}}}function i_(e){var t=[],n=function(e,t){var n=Uh(e,t);function r(e,t,r){return{filters:n(e+`/Conv2d_`+t+`_pointwise/weights`,4,r+`/filters`),batch_norm_offset:n(e+`/Conv2d_`+t+`_pointwise/convolution_bn_offset`,1,r+`/batch_norm_offset`)}}function i(e){var t=`mobilenetv1/conv_`+e,i=`MobilenetV1/Conv2d_`+e+`_depthwise`,a=t+`/depthwise_conv`,o=t+`/pointwise_conv`;return{depthwise_conv:{filters:n(i+`/depthwise_weights`,4,a+`/filters`),batch_norm_scale:n(i+`/BatchNorm/gamma`,1,a+`/batch_norm_scale`),batch_norm_offset:n(i+`/BatchNorm/beta`,1,a+`/batch_norm_offset`),batch_norm_mean:n(i+`/BatchNorm/moving_mean`,1,a+`/batch_norm_mean`),batch_norm_variance:n(i+`/BatchNorm/moving_variance`,1,a+`/batch_norm_variance`)},pointwise_conv:r(`MobilenetV1`,e,o)}}function a(e,t){return{filters:n(e+`/weights`,4,t+`/filters`),bias:n(e+`/biases`,1,t+`/bias`)}}function o(e){return{box_encoding_predictor:a(`Prediction/BoxPredictor_`+e+`/BoxEncodingPredictor`,`prediction_layer/box_predictor_`+e+`/box_encoding_predictor`),class_predictor:a(`Prediction/BoxPredictor_`+e+`/ClassPredictor`,`prediction_layer/box_predictor_`+e+`/class_predictor`)}}return{extractMobilenetV1Params:function(){return{conv_0:r(`MobilenetV1`,0,`mobilenetv1/conv_0`),conv_1:i(1),conv_2:i(2),conv_3:i(3),conv_4:i(4),conv_5:i(5),conv_6:i(6),conv_7:i(7),conv_8:i(8),conv_9:i(9),conv_10:i(10),conv_11:i(11),conv_12:i(12),conv_13:i(13)}},extractPredictionLayerParams:function(){return{conv_0:r(`Prediction`,0,`prediction_layer/conv_0`),conv_1:r(`Prediction`,1,`prediction_layer/conv_1`),conv_2:r(`Prediction`,2,`prediction_layer/conv_2`),conv_3:r(`Prediction`,3,`prediction_layer/conv_3`),conv_4:r(`Prediction`,4,`prediction_layer/conv_4`),conv_5:r(`Prediction`,5,`prediction_layer/conv_5`),conv_6:r(`Prediction`,6,`prediction_layer/conv_6`),conv_7:r(`Prediction`,7,`prediction_layer/conv_7`),box_predictor_0:o(0),box_predictor_1:o(1),box_predictor_2:o(2),box_predictor_3:o(3),box_predictor_4:o(4),box_predictor_5:o(5)}}}}(e,t),r=n.extractMobilenetV1Params,i=n.extractPredictionLayerParams,a=e[`Output/extra_dim`];if(t.push({originalPath:`Output/extra_dim`,paramPath:`output_layer/extra_dim`}),!Yp(a))throw Error(`expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have `+a);var o={mobilenetv1:r(),prediction_layer:i(),output_layer:{extra_dim:a}};return Lh(e,t),{params:o,paramMappings:t}}function a_(e,t,n){return H(function(){var r=jl(e,t.filters,n,`same`);return r=Uc(r,t.batch_norm_offset),Zs(r,0,6)})}var o_=.0010000000474974513;function s_(e,t){return H(function(){var n=null,r=a_(e,t.conv_0,[2,2]);if([t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13].forEach(function(e,t){var i=t+1,a=function(e){return[2,4,6,12].some(function(t){return t===e})?[2,2]:[1,1]}(i);r=a_(r=function(e,t,n){return H(function(){var r=Fl(e,t.filters,n,`same`);return r=Pc(r,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,o_),Zs(r,0,6)})}(r,e.depthwise_conv,a),e.pointwise_conv,[1,1]),i===11&&(n=r)}),n===null)throw Error(`mobileNetV1 - output of conv layer 11 is null`);return{out:r,conv11:n}})}function c_(e,t,n){var r=e.arraySync(),i=Math.min(r[t][0],r[t][2]),a=Math.min(r[t][1],r[t][3]),o=Math.max(r[t][0],r[t][2]),s=Math.max(r[t][1],r[t][3]),c=Math.min(r[n][0],r[n][2]),l=Math.min(r[n][1],r[n][3]),u=Math.max(r[n][0],r[n][2]),d=Math.max(r[n][1],r[n][3]),f=(o-i)*(s-a),p=(u-c)*(d-l);if(f<=0||p<=0)return 0;var m=Math.max(i,c),h=Math.max(a,l),g=Math.min(o,u),_=Math.min(s,d),v=Math.max(g-m,0)*Math.max(_-h,0);return v/(f+p-v)}function l_(e,t){var n=function(e){var t=Yr(Tu(e,[1,0])),n=[cl(t[2],t[0]),cl(t[3],t[1])];return{sizes:n,centers:[Uc(t[0],qc(n[0],G(2))),Uc(t[1],qc(n[1],G(2)))]}}(e),r=n.sizes,i=n.centers,a=Yr(Tu(t,[1,0])),o=qc(rl(tc(qc(a[2],G(5))),r[0]),G(2)),s=Uc(rl(qc(a[0],G(10)),r[0]),i[0]),c=qc(rl(tc(qc(a[3],G(5))),r[1]),G(2)),l=Uc(rl(qc(a[1],G(10)),r[1]),i[1]);return Tu(Kr([cl(s,o),cl(l,c),Uc(s,o),Uc(l,c)]),[1,0])}function u_(e,t){return H(function(){var n=e.shape[0];return{boxPredictionEncoding:Ur(Ih(e,t.box_encoding_predictor),[n,-1,1,4]),classPrediction:Ur(Ih(e,t.class_predictor),[n,-1,3])}})}var d_=(Object.defineProperty(f_.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(f_.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),f_);function f_(e){var t=e===void 0?{}:e,n=t.minConfidence,r=t.maxResults;if(this._name=`SsdMobilenetv1Options`,this._minConfidence=n||.5,this._maxResults=r||100,typeof this._minConfidence!=`number`||this._minConfidence<=0||1<=this._minConfidence)throw Error(this._name+` - expected minConfidence to be a number between 0 and 1`);if(typeof this._maxResults!=`number`)throw Error(this._name+` - expected maxResults to be a number`)}var p_,m_=(Hp(h_,p_=jh),h_.prototype.forwardInput=function(e){var t=this.params;if(!t)throw Error(`SsdMobilenetv1 - load model before inference`);return H(function(){var n=s_(cl(rl(e.toBatchTensor(512,!1).toFloat(),G(.007843137718737125)),G(1)),t.mobilenetv1),r=function(e,t,n){return H(function(){var r=a_(a_(e,n.conv_0,[1,1]),n.conv_1,[2,2]),i=a_(a_(r,n.conv_2,[1,1]),n.conv_3,[2,2]),a=a_(a_(i,n.conv_4,[1,1]),n.conv_5,[2,2]),o=a_(a_(a,n.conv_6,[1,1]),n.conv_7,[2,2]),s=u_(t,n.box_predictor_0),c=u_(e,n.box_predictor_1),l=u_(r,n.box_predictor_2),u=u_(i,n.box_predictor_3),d=u_(a,n.box_predictor_4),f=u_(o,n.box_predictor_5);return{boxPredictions:er([s.boxPredictionEncoding,c.boxPredictionEncoding,l.boxPredictionEncoding,u.boxPredictionEncoding,d.boxPredictionEncoding,f.boxPredictionEncoding],1),classPredictions:er([s.classPrediction,c.classPrediction,l.classPrediction,u.classPrediction,d.classPrediction,f.classPrediction],1)}})}(n.out,n.conv11,t.prediction_layer);return function(e,t,n){return H(function(){var r=e.shape[0],i=l_(Ur(qr(n.extra_dim,[r,1,1]),[-1,4]),Ur(e,[-1,4]));i=Ur(i,[r,i.shape[0]/r,4]);var a=nu(dc(nu(t,[0,0,1],[-1,-1,-1])),[0,0,0],[-1,-1,1]);return a=Ur(a,[r,a.shape[1]]),{boxes:Yr(i),scores:Yr(a)}})}(r.boxPredictions,r.classPredictions,t.output_layer)})},h_.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,wh(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},h_.prototype.locateFaces=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;return $(this,function(S){switch(S.label){case 0:return n=new d_(t),r=n.maxResults,i=n.minConfidence,[4,wh(e)];case 1:for(a=S.sent(),o=this.forwardInput(a),s=o.boxes,c=o.scores,l=s[0],u=c[0],d=1;d<s.length;d++)s[d].dispose(),c[d].dispose();return m=(p=Array).from,[4,u.data()];case 2:return f=m.apply(p,[S.sent()]),h=function(e,t,n,r,i){var a=e.shape[0],o=Math.min(n,a),s=t.map(function(e,t){return{score:e,boxIndex:t}}).filter(function(e){return e.score>i}).sort(function(e,t){return t.score-e.score}),c=[];return s.forEach(function(t){if(!(c.length>=o)){for(var n=t.score,a=c.length-1;0<=a;--a){var s=c_(e,t.boxIndex,c[a]);if(s!==0&&(t.score*=+(s<=r),t.score<=i))break}n===t.score&&c.push(t.boxIndex)}}),c}(l,f,r,.5,i),g=a.getReshapedInputDimensions(0),_=a.inputSize,v=_/g.width,y=_/g.height,b=l.arraySync(),x=h.map(function(e){var t=[Math.max(0,b[e][0]),Math.min(1,b[e][2])].map(function(e){return e*y}),n=t[0],r=t[1],i=[Math.max(0,b[e][1]),Math.min(1,b[e][3])].map(function(e){return e*v}),o=i[0],s=i[1];return new _m(f[e],new Em(o,n,s-o,r-n),{height:a.getInputHeight(0),width:a.getInputWidth(0)})}),l.dispose(),u.dispose(),[2,x]}})})},h_.prototype.getDefaultModelName=function(){return`ssd_mobilenetv1_model`},h_.prototype.extractParamsFromWeigthMap=function(e){return i_(e)},h_.prototype.extractParams=function(e){return function(e){var t=[],n=Wh(e),r=n.extractWeights,i=n.getRemainingWeights,a=r_(r,t),o=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,c=o(),l=s(),u={extra_dim:Hn(r(20472),[1,5118,4])};if(t.push({paramPath:`output_layer/extra_dim`}),i().length!==0)throw Error(`weights remaing after extract: `+i().length);return{params:{mobilenetv1:c,prediction_layer:l,output_layer:u},paramMappings:t}}(e)},h_);function h_(){return p_.call(this,`SsdMobilenetv1`)||this}function g_(e){var t=new m_;return t.extractWeights(e),t}var __,v_=(Hp(y_,__=m_),y_);function y_(){return __!==null&&__.apply(this,arguments)||this}var b_,x_=[new sm(.738768,.874946),new sm(2.42204,2.65704),new sm(4.30971,7.04493),new sm(10.246,4.59428),new sm(12.6868,11.8741)],S_=[new sm(1.603231,2.094468),new sm(6.041143,7.080126),new sm(2.882459,3.518061),new sm(4.266906,5.178857),new sm(9.041765,10.66308)],C_=[117.001,114.697,97.404],w_=function(e){return typeof e==`number`};function T_(e){if(!e)throw Error(`invalid config: `+e);if(typeof e.withSeparableConvs!=`boolean`)throw Error(`config.withSeparableConvs has to be a boolean, have: `+e.withSeparableConvs);if(!w_(e.iouThreshold)||e.iouThreshold<0||1<e.iouThreshold)throw Error(`config.iouThreshold has to be a number between [0, 1], have: `+e.iouThreshold);if(!Array.isArray(e.classes)||!e.classes.length||!e.classes.every(function(e){return typeof e==`string`}))throw Error(`config.classes has to be an array class names: string[], have: `+JSON.stringify(e.classes));if(!Array.isArray(e.anchors)||!e.anchors.length||!e.anchors.map(function(e){return e||{}}).every(function(e){return w_(e.x)&&w_(e.y)}))throw Error(`config.anchors has to be an array of { x: number, y: number }, have: `+JSON.stringify(e.anchors));if(e.meanRgb&&(!Array.isArray(e.meanRgb)||e.meanRgb.length!==3||!e.meanRgb.every(w_)))throw Error(`config.meanRgb has to be an array of shape [number, number, number], have: `+JSON.stringify(e.meanRgb))}function E_(e){return H(function(){var t=rl(e,G(.10000000149011612));return Uc(Su(cl(e,t)),t)})}function D_(e,t){return H(function(){var n=Pr(e,[[0,0],[1,1],[1,1],[0,0]]);return n=jl(n,t.conv.filters,[1,1],`valid`),n=cl(n,t.bn.sub),n=rl(n,t.bn.truediv),E_(n=Uc(n,t.conv.bias))})}function O_(e,t){return H(function(){var n=Pr(e,[[0,0],[1,1],[1,1],[0,0]]);return n=Rl(n,t.depthwise_filter,t.pointwise_filter,[1,1],`valid`),E_(n=Uc(n,t.bias))})}function k_(e,t){var n=Rh(e,t);return{extractConvParams:n,extractConvWithBatchNormParams:function(r,i,a){return{conv:n(r,i,3,a+`/conv`),bn:function(n,r){var i=Bn(e(n)),a=Bn(e(n));return t.push({paramPath:r+`/sub`},{paramPath:r+`/truediv`}),{sub:i,truediv:a}}(i,a+`/bn`)}},extractSeparableConvParams:Vh(e,t)}}function A_(e,t){var n=Uh(e,t);function r(e){return{filters:n(e+`/filters`,4),bias:n(e+`/bias`,1)}}return{extractConvParams:r,extractConvWithBatchNormParams:function(e){return{conv:r(e+`/conv`),bn:function(e){return{sub:n(e+`/sub`,1),truediv:n(e+`/truediv`,1)}}(e+`/bn`)}},extractSeparableConvParams:Hh(n)}}(b_=t.TinyYolov2SizeType||={})[b_.XS=224]=`XS`,b_[b_.SM=320]=`SM`,b_[b_.MD=416]=`MD`,b_[b_.LG=608]=`LG`;var j_=(Object.defineProperty(M_.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(M_.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),M_);function M_(e){var t=e===void 0?{}:e,n=t.inputSize,r=t.scoreThreshold;if(this._name=`TinyYolov2Options`,this._inputSize=n||416,this._scoreThreshold=r||.5,typeof this._inputSize!=`number`||this._inputSize%32!=0)throw Error(this._name+` - expected inputSize to be a number divisible by 32`);if(typeof this._scoreThreshold!=`number`||this._scoreThreshold<=0||1<=this._scoreThreshold)throw Error(this._name+` - expected scoreThreshold to be a number between 0 and 1`)}var N_,P_=(Hp(F_,N_=jh),Object.defineProperty(F_.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(F_.prototype,"withClassScores",{get:function(){return this.config.withClassScores||1<this.config.classes.length},enumerable:!0,configurable:!0}),Object.defineProperty(F_.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),F_.prototype.runTinyYolov2=function(e,t){var n=D_(e,t.conv0);return n=D_(n=Zl(n,[2,2],[2,2],`same`),t.conv1),n=D_(n=Zl(n,[2,2],[2,2],`same`),t.conv2),n=D_(n=Zl(n,[2,2],[2,2],`same`),t.conv3),n=D_(n=Zl(n,[2,2],[2,2],`same`),t.conv4),n=D_(n=Zl(n,[2,2],[2,2],`same`),t.conv5),Ih(n=D_(n=D_(n=Zl(n,[2,2],[1,1],`same`),t.conv6),t.conv7),t.conv8,`valid`,!1)},F_.prototype.runMobilenet=function(e,t){var n=this.config.isFirstLayerConv2d?E_(Ih(e,t.conv0,`valid`,!1)):O_(e,t.conv0);return n=O_(n=Zl(n,[2,2],[2,2],`same`),t.conv1),n=O_(n=Zl(n,[2,2],[2,2],`same`),t.conv2),n=O_(n=Zl(n,[2,2],[2,2],`same`),t.conv3),n=O_(n=Zl(n,[2,2],[2,2],`same`),t.conv4),n=O_(n=Zl(n,[2,2],[2,2],`same`),t.conv5),n=Zl(n,[2,2],[1,1],`same`),n=t.conv6?O_(n,t.conv6):n,Ih(n=t.conv7?O_(n,t.conv7):n,t.conv8,`valid`,!1)},F_.prototype.forwardInput=function(e,t){var n=this,r=this.params;if(!r)throw Error(`TinyYolov2 - load model before inference`);return H(function(){var i=e.toBatchTensor(t,!1).toFloat();return i=(i=n.config.meanRgb?Sm(i,n.config.meanRgb):i).div(G(256)),n.config.withSeparableConvs?n.runMobilenet(i,r):n.runTinyYolov2(i,r)})},F_.prototype.forward=function(e,t){return Q(this,void 0,void 0,function(){var n;return $(this,function(r){switch(r.label){case 0:return n=this.forwardInput,[4,wh(e)];case 1:return[4,n.apply(this,[r.sent(),t])];case 2:return[2,r.sent()]}})})},F_.prototype.detect=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var n,r,i,a,o,s,c,l,u,d,f,p,m=this;return $(this,function(h){switch(h.label){case 0:return n=new j_(t),r=n.inputSize,i=n.scoreThreshold,[4,wh(e)];case 1:return a=h.sent(),[4,this.forwardInput(a,r)];case 2:return o=h.sent(),s=H(function(){return Yr(o)[0].expandDims()}),c={width:a.getInputWidth(0),height:a.getInputHeight(0)},[4,this.extractBoxes(s,a.getReshapedInputDimensions(0),i)];case 3:return l=h.sent(),o.dispose(),s.dispose(),u=l.map(function(e){return e.box}),d=l.map(function(e){return e.score}),f=l.map(function(e){return e.classScore}),p=l.map(function(e){return m.config.classes[e.label]}),[2,xm(u.map(function(e){return e.rescale(r)}),d,this.config.iouThreshold,!0).map(function(e){return new mm(d[e],f[e],p[e],u[e],c)})]}})})},F_.prototype.getDefaultModelName=function(){return``},F_.prototype.extractParamsFromWeigthMap=function(e){return function(e,t){var n,r=[],i=A_(e,r),a=i.extractConvParams,o=i.extractConvWithBatchNormParams,s=i.extractSeparableConvParams;if(t.withSeparableConvs){var c=t.filterSizes&&t.filterSizes.length||9;n={conv0:t.isFirstLayerConv2d?a(`conv0`):s(`conv0`),conv1:s(`conv1`),conv2:s(`conv2`),conv3:s(`conv3`),conv4:s(`conv4`),conv5:s(`conv5`),conv6:7<c?s(`conv6`):void 0,conv7:8<c?s(`conv7`):void 0,conv8:a(`conv8`)}}else n={conv0:o(`conv0`),conv1:o(`conv1`),conv2:o(`conv2`),conv3:o(`conv3`),conv4:o(`conv4`),conv5:o(`conv5`),conv6:o(`conv6`),conv7:o(`conv7`),conv8:a(`conv8`)};return Lh(e,r),{params:n,paramMappings:r}}(e,this.config)},F_.prototype.extractParams=function(e){var t=this.config.filterSizes||F_.DEFAULT_FILTER_SIZES,n=t?t.length:void 0;if(n!==7&&n!==8&&n!==9)throw Error(`TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found `+n+` filterSizes in config`);return function(e,t,n,r){var i,a=Wh(e),o=a.extractWeights,s=a.getRemainingWeights,c=[],l=k_(o,c),u=l.extractConvParams,d=l.extractConvWithBatchNormParams,f=l.extractSeparableConvParams;if(t.withSeparableConvs){var p=r[0],m=r[1],h=r[2],g=r[3],_=r[4],v=r[5],y=r[6],b=r[7],x=r[8];i={conv0:t.isFirstLayerConv2d?u(p,m,3,`conv0`):f(p,m,`conv0`),conv1:f(m,h,`conv1`),conv2:f(h,g,`conv2`),conv3:f(g,_,`conv3`),conv4:f(_,v,`conv4`),conv5:f(v,y,`conv5`),conv6:b?f(y,b,`conv6`):void 0,conv7:x?f(b,x,`conv7`):void 0,conv8:u(x||b||y,5*n,1,`conv8`)}}else p=r[0],m=r[1],h=r[2],g=r[3],_=r[4],v=r[5],y=r[6],b=r[7],x=r[8],i={conv0:d(p,m,`conv0`),conv1:d(m,h,`conv1`),conv2:d(h,g,`conv2`),conv3:d(g,_,`conv3`),conv4:d(_,v,`conv4`),conv5:d(v,y,`conv5`),conv6:d(y,b,`conv6`),conv7:d(b,x,`conv7`),conv8:u(x,5*n,1,`conv8`)};if(s().length!==0)throw Error(`weights remaing after extract: `+s().length);return{params:i,paramMappings:c}}(e,this.config,this.boxEncodingSize,t)},F_.prototype.extractBoxes=function(e,t,n){return Q(this,void 0,void 0,function(){var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=this;return $(this,function(N){switch(N.label){case 0:return r=t.width,i=t.height,a=Math.max(r,i),o=a/r,s=a/i,c=e.shape[1],l=this.config.anchors.length,u=H(function(){var t=e.reshape([c,c,l,M.boxEncodingSize]);return[t.slice([0,0,0,0],[c,c,l,4]),t.slice([0,0,0,4],[c,c,l,1]),M.withClassScores?yi(t.slice([0,0,0,5],[c,c,l,M.config.classes.length]),3):G(0)]}),d=u[0],f=u[1],p=u[2],m=[],[4,f.array()];case 1:return h=N.sent(),[4,d.array()];case 2:g=N.sent(),_=0,N.label=3;case 3:if(!(_<c))return[3,12];v=0,N.label=4;case 4:if(!(v<c))return[3,11];y=0,N.label=5;case 5:return y<l?(b=wm(h[_][v][y][0]),!n||n<b?(x=(v+wm(g[_][v][y][0]))/c*o,S=(_+wm(g[_][v][y][1]))/c*s,C=Math.exp(g[_][v][y][2])*this.config.anchors[y].x/c*o,w=Math.exp(g[_][v][y][3])*this.config.anchors[y].y/c*s,T=x-C/2,E=S-w/2,D={row:_,col:v,anchor:y},this.withClassScores?[4,this.extractPredictedClass(p,D)]:[3,7]):[3,9]):[3,10];case 6:return j=N.sent(),[3,8];case 7:j={classScore:1,label:0},N.label=8;case 8:k=(O=j).classScore,A=O.label,m.push(Up({box:new fm(T,E,T+C,E+w),score:b,classScore:b*k,label:A},D)),N.label=9;case 9:return y++,[3,5];case 10:return v++,[3,4];case 11:return _++,[3,3];case 12:return d.dispose(),f.dispose(),p.dispose(),[2,m]}})})},F_.prototype.extractPredictedClass=function(e,t){return Q(this,void 0,void 0,function(){var n,r,i,a;return $(this,function(o){switch(o.label){case 0:return n=t.row,r=t.col,i=t.anchor,[4,e.array()];case 1:return a=o.sent(),[2,Array(this.config.classes.length).fill(0).map(function(e,t){return a[n][r][i][t]}).map(function(e,t){return{classScore:e,label:t}}).reduce(function(e,t){return e.classScore>t.classScore?e:t})]}})})},F_.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],F_);function F_(e){var t=N_.call(this,`TinyYolov2`)||this;return T_(e),t._config=e,t}var I_,L_=(Hp(R_,I_=P_),Object.defineProperty(R_.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(R_.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),R_.prototype.locateFaces=function(e,t){return Q(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.detect(e,t)];case 1:return[2,n.sent().map(function(e){return new _m(e.score,e.relativeBox,{width:e.imageWidth,height:e.imageHeight})})]}})})},R_.prototype.getDefaultModelName=function(){return this.withSeparableConvs?`tiny_yolov2_separable_conv_model`:`tiny_yolov2_model`},R_.prototype.extractParamsFromWeigthMap=function(e){return I_.prototype.extractParamsFromWeigthMap.call(this,e)},R_);function R_(e){e===void 0&&(e=!0);var t=Object.assign({},{withSeparableConvs:e,iouThreshold:.4,classes:[`face`]},e?{anchors:S_,meanRgb:C_}:{anchors:x_,withClassScores:!0});return I_.call(this,t)||this}var z_,B_=(Hp(V_,z_=j_),V_);function V_(){var e=z_!==null&&z_.apply(this,arguments)||this;return e._name=`TinyFaceDetectorOptions`,e}var H_=(U_.prototype.then=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=e,[4,this.run()];case 1:return[2,t.apply(void 0,[n.sent()])]}})})},U_.prototype.run=function(){return Q(this,void 0,void 0,function(){return $(this,function(e){throw Error(`ComposableTask - run is not implemented`)})})},U_);function U_(){}function W_(e,t,n,r,i){return i===void 0&&(i=function(e){return e.alignedRect}),Q(this,void 0,void 0,function(){var a,o,s,c,l;return $(this,function(u){switch(u.label){case 0:return a=e.map(function(e){return ug(e)?i(e):e.detection}),(s=r)?[3,5]:t instanceof Be?[4,Eh(t,a)]:[3,2];case 1:return c=u.sent(),[3,4];case 2:return[4,Th(t,a)];case 3:c=u.sent(),u.label=4;case 4:s=c,u.label=5;case 5:return[4,n(o=s)];case 6:return l=u.sent(),o.forEach(function(e){return e instanceof Be&&e.dispose()}),[2,l]}})})}function G_(e,t,n,r,i){return Q(this,void 0,void 0,function(){var a=this;return $(this,function(o){return[2,W_([e],t,function(e){return Q(a,void 0,void 0,function(){return $(this,function(t){return[2,n(e[0])]})})},r,i)]})})}var K_=2,q_=12;function J_(e){var t=Wh(e),n=t.extractWeights,r=t.getRemainingWeights,i=[],a=function(e,t){var n=Rh(e,t),r=zh(e,t);function i(n,r){var i=Bn(e(n));return t.push({paramPath:r}),i}function a(e,t,r){return r===void 0&&(r=!1),{conv1:n(e[0],e[1],3,t+`/conv1`),prelu1_alpha:i(e[1],t+`/prelu1_alpha`),conv2:n(e[1],e[2],3,t+`/conv2`),prelu2_alpha:i(e[2],t+`/prelu2_alpha`),conv3:n(e[2],e[3],r?2:3,t+`/conv3`),prelu3_alpha:i(e[3],t+`/prelu3_alpha`)}}return{extractPNetParams:function(){var e=a([3,10,16,32],`pnet`),t=n(32,2,1,`pnet/conv4_1`),r=n(32,4,1,`pnet/conv4_2`);return Up(Up({},e),{conv4_1:t,conv4_2:r})},extractRNetParams:function(){var e=a([3,28,48,64],`rnet`,!0),t=r(576,128,`rnet/fc1`),n=i(128,`rnet/prelu4_alpha`),o=r(128,2,`rnet/fc2_1`),s=r(128,4,`rnet/fc2_2`);return Up(Up({},e),{fc1:t,prelu4_alpha:n,fc2_1:o,fc2_2:s})},extractONetParams:function(){var e=a([3,32,64,64],`onet`),t=n(64,128,2,`onet/conv4`),o=i(128,`onet/prelu4_alpha`),s=r(1152,256,`onet/fc1`),c=i(256,`onet/prelu5_alpha`),l=r(256,2,`onet/fc2_1`),u=r(256,4,`onet/fc2_2`),d=r(256,10,`onet/fc2_3`);return Up(Up({},e),{conv4:t,prelu4_alpha:o,fc1:s,prelu5_alpha:c,fc2_1:l,fc2_2:u,fc2_3:d})}}}(n,i),o=a.extractPNetParams,s=a.extractRNetParams,c=a.extractONetParams,l=o(),u=s(),d=c();if(r().length!==0)throw Error(`weights remaing after extract: `+r().length);return{params:{pnet:l,rnet:u,onet:d},paramMappings:i}}function Y_(e){var t=[],n=function(e,t){var n=Uh(e,t);function r(e){return{filters:n(e+`/weights`,4,e+`/filters`),bias:n(e+`/bias`,1)}}function i(e){return{weights:n(e+`/weights`,2),bias:n(e+`/bias`,1)}}function a(e){return n(e,1)}function o(e){return{conv1:r(e+`/conv1`),prelu1_alpha:a(e+`/prelu1_alpha`),conv2:r(e+`/conv2`),prelu2_alpha:a(e+`/prelu2_alpha`),conv3:r(e+`/conv3`),prelu3_alpha:a(e+`/prelu3_alpha`)}}return{extractPNetParams:function(){var e=o(`pnet`),t=r(`pnet/conv4_1`),n=r(`pnet/conv4_2`);return Up(Up({},e),{conv4_1:t,conv4_2:n})},extractRNetParams:function(){var e=o(`rnet`),t=i(`rnet/fc1`),n=a(`rnet/prelu4_alpha`),r=i(`rnet/fc2_1`),s=i(`rnet/fc2_2`);return Up(Up({},e),{fc1:t,prelu4_alpha:n,fc2_1:r,fc2_2:s})},extractONetParams:function(){var e=o(`onet`),t=r(`onet/conv4`),n=a(`onet/prelu4_alpha`),s=i(`onet/fc1`),c=a(`onet/prelu5_alpha`),l=i(`onet/fc2_1`),u=i(`onet/fc2_2`),d=i(`onet/fc2_3`);return Up(Up({},e),{conv4:t,prelu4_alpha:n,fc1:s,prelu5_alpha:c,fc2_1:l,fc2_2:u,fc2_3:d})}}}(e,t),r=n.extractPNetParams,i=n.extractRNetParams,a=n.extractONetParams,o=r(),s=i(),c=a();return Lh(e,t),{params:{pnet:o,rnet:s,onet:c},paramMappings:t}}function X_(e,t){var n=t[0],r=t[1];return{height:Math.floor(n*e),width:Math.floor(r*e)}}var Z_,Q_=(Hp($_,Z_=lm),$_);function $_(e,t,n,r){return Z_.call(this,{left:e,top:t,right:n,bottom:r},!0)||this}function ev(e){return H(function(){return rl(cl(e,G(127.5)),G(.0078125))})}function tv(e,t){return H(function(){return Uc(Su(e),rl(t,sc(Su(sc(e)))))})}function nv(e,t,n){return n===void 0&&(n=!1),H(function(){var r=Ih(e,t.conv1,`valid`);return r=tv(r,t.prelu1_alpha),r=tv(r=Ih(r=Zl(r,n?[2,2]:[3,3],[2,2],`same`),t.conv2,`valid`),t.prelu2_alpha),r=tv(r=Ih(r=n?r:Zl(r,[3,3],[2,2],`valid`),t.conv3,`valid`),t.prelu3_alpha)})}function rv(e,t,n,r,i){i.stage1=[];var a=t.map(function(t){return H(function(){var n={scale:t},i=function(e,t){return H(function(){var n=X_(t,e.shape.slice(1)),r=n.height,i=n.width;return Tu(ev(Cd.resizeBilinear(e,[r,i])),[0,2,1,3])})}(e,t),a=Date.now(),o=function(e,t){return H(function(){var n=nv(e,t,!0),r=Ih(n,t.conv4_1,`valid`);return{prob:yi(cl(r,Ar(pu(r,3),3)),3),regions:Ih(n,t.conv4_2,`valid`)}})}(i,r),s=o.prob,c=o.regions;return n.pnet=Date.now()-a,{scoresTensor:Yr(Yr(s,3)[1])[0],regionsTensor:Yr(c)[0],scale:t,statsForScale:n}})}).map(function(e){var t=e.scoresTensor,r=e.regionsTensor,a=e.scale,o=e.statsForScale,s=function(e,t,n,r){for(var i=[],a=e.arraySync(),o=0;o<e.shape[0];o++)for(var s=0;s<e.shape[1];s++)a[o][s]>=r&&i.push(new sm(s,o));return i.map(function(e){var r=new fm(Math.round((e.y*K_+1)/n),Math.round((e.x*K_+1)/n),Math.round((e.y*K_+q_)/n),Math.round((e.x*K_+q_)/n)),i=a[e.y][e.x],o=t.arraySync();return{cell:r,score:i,region:new Q_(o[e.y][e.x][0],o[e.y][e.x][1],o[e.y][e.x][2],o[e.y][e.x][3])}})}(t,r,a,n);if(t.dispose(),r.dispose(),!s.length)return i.stage1.push(o),[];var c=Date.now(),l=xm(s.map(function(e){return e.cell}),s.map(function(e){return e.score}),.5);return o.nms=Date.now()-c,o.numBoxes=l.length,i.stage1.push(o),l.map(function(e){return s[e]})}).reduce(function(e,t){return e.concat(t)},[]),o=[],s=[];if(0<a.length){var c=Date.now(),l=xm(a.map(function(e){return e.cell}),a.map(function(e){return e.score}),.7);i.stage1_nms=Date.now()-c,s=l.map(function(e){return a[e].score}),o=l.map(function(e){return a[e]}).map(function(e){var t=e.cell,n=e.region;return new fm(t.left+n.left*t.width,t.top+n.top*t.height,t.right+n.right*t.width,t.bottom+n.bottom*t.height).toSquare().round()})}return{boxes:o,scores:s}}function iv(e,t,n){var r=n.width,i=n.height;return Q(this,void 0,void 0,function(){var n,a,o,s=this;return $(this,function(c){switch(c.label){case 0:return n=oh(e),[4,Promise.all(t.map(function(t){return Q(s,void 0,void 0,function(){var r,i,a,o,s,c,l,u;return $(this,function(d){return r=t.padAtBorders(e.height,e.width),i=r.y,a=r.ey,o=r.x,s=r.ex,c=o-1,l=i-1,u=n.getImageData(c,l,s-c,a-l),[2,ih.isNodejs()?vh(u):createImageBitmap(u)]})})}))];case 1:return a=c.sent(),o=[],a.forEach(function(e){var t=oh(_h({width:r,height:i}));t.drawImage(e,0,0,r,i);for(var n=t.getImageData(0,0,r,i).data,a=[],s=0;s<n.length;s+=4)a.push(n[s+2]),a.push(n[s+1]),a.push(n[s]);o.push(a)}),[2,o.map(function(e){return H(function(){return ev(Tu(Un(e,[1,r,i,3]),[0,2,1,3]).toFloat())})})]}})})}function av(e,t,n,r,i){return Q(this,void 0,void 0,function(){var a,o,s,c,l,u,d,f,p,m,h,g,_,v;return $(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,iv(e,t,{width:24,height:24})];case 1:return o=y.sent(),i.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=o.map(function(e){var t=function(e,t){return H(function(){var n=nv(e,t),r=tv(Zh(Ur(n,[n.shape[0],t.fc1.weights.shape[0]]),t.fc1),t.prelu4_alpha),i=Zh(r,t.fc2_1),a=yi(cl(i,Ar(pu(i,1),1)),1),o=Zh(r,t.fc2_2);return{scores:Yr(a,1)[1],regions:o}})}(e,r);return e.dispose(),t}),i.stage2_rnet=Date.now()-a,c=1<s.length?er(s.map(function(e){return e.scores})):s[0].scores,d=(u=Array).from,[4,c.data()];case 2:return l=d.apply(u,[y.sent()]),c.dispose(),f=l.map(function(e,t){return{score:e,idx:t}}).filter(function(e){return e.score>n}).map(function(e){return e.idx}),p=f.map(function(e){return t[e]}),m=f.map(function(e){return l[e]}),h=[],g=[],0<p.length&&(a=Date.now(),_=xm(p,m,.7),i.stage2_nms=Date.now()-a,v=_.map(function(e){var t=s[f[e]].regions.arraySync();return new Q_(t[0][0],t[0][1],t[0][2],t[0][3])}),g=_.map(function(e){return m[e]}),h=_.map(function(e,t){return p[e].calibrate(v[t])})),s.forEach(function(e){e.regions.dispose(),e.scores.dispose()}),[2,{boxes:h,scores:g}]}})})}function ov(e,t,n,r,i){return Q(this,void 0,void 0,function(){var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;return $(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,iv(e,t,{width:48,height:48})];case 1:return o=b.sent(),i.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=o.map(function(e){var t=function(e,t){return H(function(){var n=nv(e,t);n=tv(n=Ih(n=Zl(n,[2,2],[2,2],`same`),t.conv4,`valid`),t.prelu4_alpha);var r=tv(Zh(Ur(n,[n.shape[0],t.fc1.weights.shape[0]]),t.fc1),t.prelu5_alpha),i=Zh(r,t.fc2_1),a=yi(cl(i,Ar(pu(i,1),1)),1),o=Zh(r,t.fc2_2),s=Zh(r,t.fc2_3);return{scores:Yr(a,1)[1],regions:o,points:s}})}(e,r);return e.dispose(),t}),i.stage3_onet=Date.now()-a,c=1<s.length?er(s.map(function(e){return e.scores})):s[0].scores,d=(u=Array).from,[4,c.data()];case 2:return l=d.apply(u,[b.sent()]),c.dispose(),f=l.map(function(e,t){return{score:e,idx:t}}).filter(function(e){return e.score>n}).map(function(e){return e.idx}),p=f.map(function(e){var t=s[e].regions.arraySync();return new Q_(t[0][0],t[0][1],t[0][2],t[0][3])}),m=f.map(function(e,n){return t[e].calibrate(p[n])}),h=f.map(function(e){return l[e]}),g=[],_=[],v=[],0<m.length&&(a=Date.now(),y=xm(m,h,.7,!1),i.stage3_nms=Date.now()-a,g=y.map(function(e){return m[e]}),_=y.map(function(e){return h[e]}),v=y.map(function(e,t){return[,,,,,].fill(0).map(function(n,r){var i=s[e].points.arraySync();return new sm(i[0][r]*(g[t].width+1)+g[t].left,i[0][r+5]*(g[t].height+1)+g[t].top)})})),s.forEach(function(e){e.regions.dispose(),e.scores.dispose(),e.points.dispose()}),[2,{boxes:g,scores:_,points:v}]}})})}var sv,cv=(Hp(lv,sv=jh),lv.prototype.load=function(e){return Q(this,void 0,void 0,function(){return $(this,function(t){return console.warn(`mtcnn is deprecated and will be removed soon`),[2,sv.prototype.load.call(this,e)]})})},lv.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){return $(this,function(t){return console.warn(`mtcnn is deprecated and will be removed soon`),[2,sv.prototype.loadFromDisk.call(this,e)]})})},lv.prototype.forwardInput=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;return $(this,function(C){switch(C.label){case 0:if(!(n=this.params))throw Error(`Mtcnn - load model before inference`);if(!(r=e.canvases[0]))throw Error(`Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.`);return i={},a=Date.now(),o=H(function(){return function(e){return H(function(){return Kr(Yr(e,3).reverse(),3)})}(Ar($f.fromPixels(r)).toFloat())}),s=function(e){return o.dispose(),i.total=Date.now()-a,e},c=o.shape.slice(1),l=c[0],u=c[1],d=new t_(t),f=d.minFaceSize,p=d.scaleFactor,m=d.maxNumScales,h=d.scoreThresholds,g=d.scaleSteps,_=(g||function(e,t,n){for(var r=n[0],i=n[1],a=q_/e,o=[],s=Math.min(r,i)*a,c=0;12<=s;)o.push(a*t**+c),s*=t,c+=1;return o}(f,p,[l,u])).filter(function(e){var t=X_(e,[l,u]);return Math.min(t.width,t.height)>q_}).slice(0,m),i.scales=_,i.pyramid=_.map(function(e){return X_(e,[l,u])}),v=Date.now(),[4,rv(o,_,h[0],n.pnet,i)];case 1:return y=C.sent(),i.total_stage1=Date.now()-v,y.boxes.length?(i.stage2_numInputBoxes=y.boxes.length,v=Date.now(),[4,av(r,y.boxes,h[1],n.rnet,i)]):[2,s({results:[],stats:i})];case 2:return b=C.sent(),i.total_stage2=Date.now()-v,b.boxes.length?(i.stage3_numInputBoxes=b.boxes.length,v=Date.now(),[4,ov(r,b.boxes,h[2],n.onet,i)]):[2,s({results:[],stats:i})];case 3:return x=C.sent(),i.total_stage3=Date.now()-v,S=x.boxes.map(function(e,t){return dg(Jm({},new _m(x.scores[t],new Em(e.left/u,e.top/l,e.width/u,e.height/l),{height:l,width:u})),new jm(x.points[t].map(function(t){return t.sub(new sm(e.left,e.top)).div(new sm(e.width,e.height))}),{width:e.width,height:e.height}))}),[2,s({results:S,stats:i})]}})})},lv.prototype.forward=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var n;return $(this,function(r){switch(r.label){case 0:return n=this.forwardInput,[4,wh(e)];case 1:return[4,n.apply(this,[r.sent(),t])];case 2:return[2,r.sent().results]}})})},lv.prototype.forwardWithStats=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){var n;return $(this,function(r){switch(r.label){case 0:return n=this.forwardInput,[4,wh(e)];case 1:return[2,n.apply(this,[r.sent(),t])]}})})},lv.prototype.getDefaultModelName=function(){return`mtcnn_model`},lv.prototype.extractParamsFromWeigthMap=function(e){return Y_(e)},lv.prototype.extractParams=function(e){return J_(e)},lv);function lv(){return sv.call(this,`Mtcnn`)||this}var uv,dv=[new sm(1.603231,2.094468),new sm(6.041143,7.080126),new sm(2.882459,3.518061),new sm(4.266906,5.178857),new sm(9.041765,10.66308)],fv=[117.001,114.697,97.404],pv=(Hp(mv,uv=P_),Object.defineProperty(mv.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),mv.prototype.locateFaces=function(e,t){return Q(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.detect(e,t)];case 1:return[2,n.sent().map(function(e){return new _m(e.score,e.relativeBox,{width:e.imageWidth,height:e.imageHeight})})]}})})},mv.prototype.getDefaultModelName=function(){return`tiny_face_detector_model`},mv.prototype.extractParamsFromWeigthMap=function(e){return uv.prototype.extractParamsFromWeigthMap.call(this,e)},mv);function mv(){var e={withSeparableConvs:!0,iouThreshold:.4,classes:[`face`],anchors:dv,meanRgb:fv,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return uv.call(this,e)||this}function hv(e,t){return yv.ssdMobilenetv1.locateFaces(e,t)}function gv(e){return yv.faceLandmark68Net.detectLandmarks(e)}function _v(e){return yv.ssdMobilenetv1.load(e)}var vv,yv={ssdMobilenetv1:new m_,tinyFaceDetector:new pv,tinyYolov2:new L_,mtcnn:new cv,faceLandmark68Net:new jg,faceLandmark68TinyNet:new Lg,faceRecognitionNet:new Xg,faceExpressionNet:new og,ageGenderNet:new Tg},bv=_v,xv=hv,Sv=gv,Cv=(Hp(wv,vv=H_),wv);function wv(e,t,n){var r=vv.call(this)||this;return r.parentTask=e,r.input=t,r.extractedFaces=n,r}var Tv,Ev=(Hp(Dv,Tv=Cv),Dv.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,n=this;return $(this,function(r){switch(r.label){case 0:return[4,this.parentTask];case 1:return[4,W_(e=r.sent(),this.input,function(e){return Q(n,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return yv.faceExpressionNet.predictExpressions(e)}))];case 1:return[2,t.sent()]}})})},this.extractedFaces)];case 2:return t=r.sent(),[2,e.map(function(e,n){return lg(e,t[n])})]}})})},Dv.prototype.withAgeAndGender=function(){return new Vv(this,this.input)},Dv);function Dv(){return Tv!==null&&Tv.apply(this,arguments)||this}var Ov,kv=(Hp(Av,Ov=Cv),Av.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t;return $(this,function(n){switch(n.label){case 0:return[4,this.parentTask];case 1:return(e=n.sent())?[4,G_(e,this.input,function(e){return yv.faceExpressionNet.predictExpressions(e)},this.extractedFaces)]:[2];case 2:return t=n.sent(),[2,lg(e,t)]}})})},Av.prototype.withAgeAndGender=function(){return new Wv(this,this.input)},Av);function Av(){return Ov!==null&&Ov.apply(this,arguments)||this}var jv,Mv=(Hp(Nv,jv=Ev),Nv.prototype.withAgeAndGender=function(){return new qv(this,this.input)},Nv.prototype.withFaceDescriptors=function(){return new ny(this,this.input)},Nv);function Nv(){return jv!==null&&jv.apply(this,arguments)||this}var Pv,Fv=(Hp(Iv,Pv=kv),Iv.prototype.withAgeAndGender=function(){return new Xv(this,this.input)},Iv.prototype.withFaceDescriptor=function(){return new ay(this,this.input)},Iv);function Iv(){return Pv!==null&&Pv.apply(this,arguments)||this}var Lv,Rv=(Hp(zv,Lv=H_),zv);function zv(e,t,n){var r=Lv.call(this)||this;return r.parentTask=e,r.input=t,r.extractedFaces=n,r}var Bv,Vv=(Hp(Hv,Bv=Rv),Hv.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,n=this;return $(this,function(r){switch(r.label){case 0:return[4,this.parentTask];case 1:return[4,W_(e=r.sent(),this.input,function(e){return Q(n,void 0,void 0,function(){return $(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return yv.ageGenderNet.predictAgeAndGender(e)}))];case 1:return[2,t.sent()]}})})},this.extractedFaces)];case 2:return t=r.sent(),[2,e.map(function(e,n){var r=t[n],i=r.age;return $g(e_(e,r.gender,r.genderProbability),i)})]}})})},Hv.prototype.withFaceExpressions=function(){return new Ev(this,this.input)},Hv);function Hv(){return Bv!==null&&Bv.apply(this,arguments)||this}var Uv,Wv=(Hp(Gv,Uv=Rv),Gv.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,n,r,i;return $(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return(e=a.sent())?[4,G_(e,this.input,function(e){return yv.ageGenderNet.predictAgeAndGender(e)},this.extractedFaces)]:[2];case 2:return t=a.sent(),n=t.age,r=t.gender,i=t.genderProbability,[2,$g(e_(e,r,i),n)]}})})},Gv.prototype.withFaceExpressions=function(){return new kv(this,this.input)},Gv);function Gv(){return Uv!==null&&Uv.apply(this,arguments)||this}var Kv,qv=(Hp(Jv,Kv=Vv),Jv.prototype.withFaceExpressions=function(){return new Mv(this,this.input)},Jv.prototype.withFaceDescriptors=function(){return new ny(this,this.input)},Jv);function Jv(){return Kv!==null&&Kv.apply(this,arguments)||this}var Yv,Xv=(Hp(Zv,Yv=Wv),Zv.prototype.withFaceExpressions=function(){return new Fv(this,this.input)},Zv.prototype.withFaceDescriptor=function(){return new ay(this,this.input)},Zv);function Zv(){return Yv!==null&&Yv.apply(this,arguments)||this}var Qv,$v=(Hp(ey,Qv=H_),ey);function ey(e,t){var n=Qv.call(this)||this;return n.parentTask=e,n.input=t,n}var ty,ny=(Hp(ry,ty=$v),ry.prototype.run=function(){return Q(this,void 0,void 0,function(){var e;return $(this,function(t){switch(t.label){case 0:return[4,this.parentTask];case 1:return[4,W_(e=t.sent(),this.input,function(e){return Promise.all(e.map(function(e){return yv.faceRecognitionNet.computeFaceDescriptor(e)}))},null,function(e){return e.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return[2,t.sent().map(function(t,n){return Qg(e[n],t)})]}})})},ry.prototype.withFaceExpressions=function(){return new Mv(this,this.input)},ry.prototype.withAgeAndGender=function(){return new qv(this,this.input)},ry);function ry(){return ty!==null&&ty.apply(this,arguments)||this}var iy,ay=(Hp(oy,iy=$v),oy.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t;return $(this,function(n){switch(n.label){case 0:return[4,this.parentTask];case 1:return(e=n.sent())?[4,G_(e,this.input,function(e){return yv.faceRecognitionNet.computeFaceDescriptor(e)},null,function(e){return e.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return t=n.sent(),[2,Qg(e,t)]}})})},oy.prototype.withFaceExpressions=function(){return new Fv(this,this.input)},oy.prototype.withAgeAndGender=function(){return new Xv(this,this.input)},oy);function oy(){return iy!==null&&iy.apply(this,arguments)||this}var sy,cy=(Hp(ly,sy=H_),Object.defineProperty(ly.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?yv.faceLandmark68TinyNet:yv.faceLandmark68Net},enumerable:!0,configurable:!0}),ly);function ly(e,t,n){var r=sy.call(this)||this;return r.parentTask=e,r.input=t,r.useTinyLandmarkNet=n,r}var uy,dy=(Hp(fy,uy=cy),fy.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,n,r,i,a=this;return $(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),t=e.map(function(e){return e.detection}),this.input instanceof Be?[4,Eh(this.input,t)]:[3,3];case 2:return r=o.sent(),[3,5];case 3:return[4,Th(this.input,t)];case 4:r=o.sent(),o.label=5;case 5:return n=r,[4,Promise.all(n.map(function(e){return a.landmarkNet.detectLandmarks(e)}))];case 6:return i=o.sent(),n.forEach(function(e){return e instanceof Be&&e.dispose()}),[2,e.map(function(e,t){return dg(e,i[t])})]}})})},fy.prototype.withFaceExpressions=function(){return new Mv(this,this.input)},fy.prototype.withAgeAndGender=function(){return new qv(this,this.input)},fy.prototype.withFaceDescriptors=function(){return new ny(this,this.input)},fy);function fy(){return uy!==null&&uy.apply(this,arguments)||this}var py,my=(Hp(hy,py=cy),hy.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,n,r,i;return $(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return(e=a.sent())?(t=e.detection,this.input instanceof Be?[4,Eh(this.input,[t])]:[3,3]):[2];case 2:return r=a.sent(),[3,5];case 3:return[4,Th(this.input,[t])];case 4:r=a.sent(),a.label=5;case 5:return n=r,[4,this.landmarkNet.detectLandmarks(n[0])];case 6:return i=a.sent(),n.forEach(function(e){return e instanceof Be&&e.dispose()}),[2,dg(e,i)]}})})},hy.prototype.withFaceExpressions=function(){return new Fv(this,this.input)},hy.prototype.withAgeAndGender=function(){return new Xv(this,this.input)},hy.prototype.withFaceDescriptor=function(){return new ay(this,this.input)},hy);function hy(){return py!==null&&py.apply(this,arguments)||this}var gy,_y=(Hp(vy,gy=H_),vy);function vy(e,t){t===void 0&&(t=new d_);var n=gy.call(this)||this;return n.input=e,n.options=t,n}var yy,by=(Hp(xy,yy=_y),xy.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t,n,r;return $(this,function(i){switch(i.label){case 0:return t=(e=this).input,(n=e.options)instanceof t_?[4,yv.mtcnn.forward(t,n)]:[3,2];case 1:return[2,i.sent().map(function(e){return e.detection})];case 2:if(!(r=n instanceof B_?function(e){return yv.tinyFaceDetector.locateFaces(e,n)}:n instanceof d_?function(e){return yv.ssdMobilenetv1.locateFaces(e,n)}:n instanceof j_?function(e){return yv.tinyYolov2.locateFaces(e,n)}:null))throw Error(`detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options`);return[2,r(t)]}})})},xy.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(t){return Q(e,void 0,void 0,function(){var e;return $(this,function(n){switch(n.label){case 0:return[4,this.run()];case 1:return e=n.sent(),[2,t(e.map(function(e){return Jm({},e)}))]}})})})},xy.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new dy(this.runAndExtendWithFaceDetections(),this.input,e)},xy.prototype.withFaceExpressions=function(){return new Ev(this.runAndExtendWithFaceDetections(),this.input)},xy.prototype.withAgeAndGender=function(){return new Vv(this.runAndExtendWithFaceDetections(),this.input)},xy);function xy(){return yy!==null&&yy.apply(this,arguments)||this}var Sy,Cy=(Hp(wy,Sy=_y),wy.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,t;return $(this,function(n){switch(n.label){case 0:return[4,new by(this.input,this.options)];case 1:return e=n.sent(),t=e[0],e.forEach(function(e){e.score>t.score&&(t=e)}),[2,t]}})})},wy.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(t){return Q(e,void 0,void 0,function(){var e;return $(this,function(n){switch(n.label){case 0:return[4,this.run()];case 1:return e=n.sent(),[2,t(e?Jm({},e):void 0)]}})})})},wy.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new my(this.runAndExtendWithFaceDetection(),this.input,e)},wy.prototype.withFaceExpressions=function(){return new kv(this.runAndExtendWithFaceDetection(),this.input)},wy.prototype.withAgeAndGender=function(){return new Wv(this.runAndExtendWithFaceDetection(),this.input)},wy);function wy(){return Sy!==null&&Sy.apply(this,arguments)||this}function Ty(e,t){return t===void 0&&(t=new d_),new by(e,t)}function Ey(e,t){return Q(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return console.warn(`allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead`),[4,Ty(e,new d_(t?{minConfidence:t}:{})).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,n.sent()]}})})}var Dy=Ey;function Oy(e,t){if(e.length!==t.length)throw Error(`euclideanDistance: arr1.length !== arr2.length`);var n=Array.from(e),r=Array.from(t);return Math.sqrt(n.map(function(e,t){return e-r[t]}).reduce(function(e,t){return e+t**2},0))}var ky=(Object.defineProperty(Ay.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(Ay.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),Ay.prototype.computeMeanDistance=function(e,t){return t.map(function(t){return Oy(t,e)}).reduce(function(e,t){return e+t},0)/(t.length||1)},Ay.prototype.matchDescriptor=function(e){var t=this;return this.labeledDescriptors.map(function(n){var r=n.descriptors,i=n.label;return new Im(i,t.computeMeanDistance(e,r))}).reduce(function(e,t){return e.distance<t.distance?e:t})},Ay.prototype.findBestMatch=function(e){var t=this.matchDescriptor(e);return t.distance<this.distanceThreshold?t:new Im(`unknown`,t.distance)},Ay.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(e){return e.toJSON()})}},Ay.fromJSON=function(e){return new Ay(e.labeledDescriptors.map(function(e){return Vm.fromJSON(e)}),e.distanceThreshold)},Ay);function Ay(e,t){t===void 0&&(t=.6),this._distanceThreshold=t;var n=Array.isArray(e)?e:[e];if(!n.length)throw Error(`FaceRecognizer.constructor - expected atleast one input`);function r(){return`person `+i++}var i=1;this._labeledDescriptors=n.map(function(e){if(e instanceof Vm)return e;if(e instanceof Float32Array)return new Vm(r(),[e]);if(e.descriptor&&e.descriptor instanceof Float32Array)return new Vm(r(),[e.descriptor]);throw Error(`FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>`)})}t.AgeGenderNet=Tg,t.BoundingBox=fm,t.Box=lm,t.ComposableTask=H_,t.ComputeAllFaceDescriptorsTask=ny,t.ComputeFaceDescriptorsTaskBase=$v,t.ComputeSingleFaceDescriptorTask=ay,t.DetectAllFaceLandmarksTask=dy,t.DetectAllFacesTask=by,t.DetectFaceLandmarksTaskBase=cy,t.DetectFacesTaskBase=_y,t.DetectSingleFaceLandmarksTask=my,t.DetectSingleFaceTask=Cy,t.Dimensions=Gp,t.FACE_EXPRESSION_LABELS=ng,t.FaceDetection=_m,t.FaceDetectionNet=v_,t.FaceExpressionNet=og,t.FaceExpressions=rg,t.FaceLandmark68Net=jg,t.FaceLandmark68TinyNet=Lg,t.FaceLandmarkNet=Bg,t.FaceLandmarks=Om,t.FaceLandmarks5=jm,t.FaceLandmarks68=Pm,t.FaceMatch=Im,t.FaceMatcher=ky,t.FaceRecognitionNet=Xg,t.LabeledBox=zm,t.LabeledFaceDescriptors=Vm,t.Mtcnn=cv,t.MtcnnOptions=t_,t.NetInput=Sh,t.NeuralNetwork=jh,t.ObjectDetection=mm,t.Point=sm,t.PredictedBox=Gm,t.Rect=Em,t.SsdMobilenetv1=m_,t.SsdMobilenetv1Options=d_,t.TinyFaceDetector=pv,t.TinyFaceDetectorOptions=B_,t.TinyYolov2=L_,t.TinyYolov2Options=j_,t.allFaces=Dy,t.allFacesMtcnn=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return console.warn(`allFacesMtcnn is deprecated and will be removed soon, use the high level api instead`),[4,Ty(e,new t_(t)).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,n.sent()]}})})},t.allFacesSsdMobilenetv1=Ey,t.allFacesTinyYolov2=function(e,t){return t===void 0&&(t={}),Q(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return console.warn(`allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead`),[4,Ty(e,new j_(t)).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,n.sent()]}})})},t.awaitMediaLoaded=mh,t.bufferToImage=hh,t.computeFaceDescriptor=function(e){return yv.faceRecognitionNet.computeFaceDescriptor(e)},t.createCanvas=_h,t.createCanvasFromMedia=vh,t.createFaceDetectionNet=function(e){return g_(e)},t.createFaceRecognitionNet=function(e){var t=new Xg;return t.extractWeights(e),t},t.createMtcnn=function(e){var t=new cv;return t.extractWeights(e),t},t.createSsdMobilenetv1=g_,t.createTinyFaceDetector=function(e){var t=new pv;return t.extractWeights(e),t},t.createTinyYolov2=function(e,t){t===void 0&&(t=!0);var n=new L_(t);return n.extractWeights(e),n},t.detectAllFaces=Ty,t.detectFaceLandmarks=gv,t.detectFaceLandmarksTiny=function(e){return yv.faceLandmark68TinyNet.detectLandmarks(e)},t.detectLandmarks=Sv,t.detectSingleFace=function(e,t){return t===void 0&&(t=new d_),new Cy(e,t)},t.draw=hg,t.env=ih,t.euclideanDistance=Oy,t.extendWithAge=$g,t.extendWithFaceDescriptor=Qg,t.extendWithFaceDetection=Jm,t.extendWithFaceExpressions=lg,t.extendWithFaceLandmarks=dg,t.extendWithGender=e_,t.extractFaceTensors=Eh,t.extractFaces=Th,t.fetchImage=function(e){return Q(this,void 0,void 0,function(){var t,n;return $(this,function(r){switch(r.label){case 0:return[4,Dh(e)];case 1:return[4,(t=r.sent()).blob()];case 2:if(!(n=r.sent()).type.startsWith(`image/`))throw Error(`fetchImage - expected blob type to be of type image/*, instead have: `+n.type+`, for url: `+t.url);return[2,hh(n)]}})})},t.fetchJson=Oh,t.fetchNetWeights=function(e){return Q(this,void 0,void 0,function(){var t;return $(this,function(n){switch(n.label){case 0:return t=Float32Array.bind,[4,Dh(e)];case 1:return[4,n.sent().arrayBuffer()];case 2:return[2,new(t.apply(Float32Array,[void 0,n.sent()]))]}})})},t.fetchOrThrow=Dh,t.getContext2dOrThrow=oh,t.getMediaDimensions=gh,t.imageTensorToCanvas=yh,t.imageToSquare=xh,t.inverseSigmoid=function(e){return Math.log(e/(1-e))},t.iou=ym,t.isMediaElement=bh,t.isMediaLoaded=ph,t.isWithAge=function(e){return typeof e.age==`number`},t.isWithFaceDetection=qm,t.isWithFaceExpressions=cg,t.isWithFaceLandmarks=ug,t.isWithGender=function(e){return(e.gender===t.Gender.MALE||e.gender===t.Gender.FEMALE)&&am(e.genderProbability)},t.loadAgeGenderModel=function(e){return yv.ageGenderNet.load(e)},t.loadFaceDetectionModel=bv,t.loadFaceExpressionModel=function(e){return yv.faceExpressionNet.load(e)},t.loadFaceLandmarkModel=function(e){return yv.faceLandmark68Net.load(e)},t.loadFaceLandmarkTinyModel=function(e){return yv.faceLandmark68TinyNet.load(e)},t.loadFaceRecognitionModel=function(e){return yv.faceRecognitionNet.load(e)},t.loadMtcnnModel=function(e){return yv.mtcnn.load(e)},t.loadSsdMobilenetv1Model=_v,t.loadTinyFaceDetectorModel=function(e){return yv.tinyFaceDetector.load(e)},t.loadTinyYolov2Model=function(e){return yv.tinyYolov2.load(e)},t.loadWeightMap=Ah,t.locateFaces=xv,t.matchDimensions=function(e,t,n){n===void 0&&(n=!1);var r=n?gh(t):t,i=r.width,a=r.height;return{width:e.width=i,height:e.height=a}},t.minBbox=bm,t.mtcnn=function(e,t){return yv.mtcnn.forward(e,t)},t.nets=yv,t.nonMaxSuppression=xm,t.normalize=Sm,t.padToSquare=Cm,t.predictAgeAndGender=function(e){return yv.ageGenderNet.predictAgeAndGender(e)},t.recognizeFaceExpressions=function(e){return yv.faceExpressionNet.predictExpressions(e)},t.resizeResults=function e(t,n){var r=new Gp(n.width,n.height),i=r.width,a=r.height;if(i<=0||a<=0)throw Error(`resizeResults - invalid dimensions: `+JSON.stringify({width:i,height:a}));if(Array.isArray(t))return t.map(function(t){return e(t,{width:i,height:a})});if(ug(t)){var o=t.detection.forSize(i,a),s=t.unshiftedLandmarks.forSize(o.box.width,o.box.height);return dg(Jm(t,o),s)}return qm(t)?Jm(t,t.detection.forSize(i,a)):t instanceof Om||t instanceof _m?t.forSize(i,a):t},t.resolveInput=ah,t.shuffleArray=function(e){for(var t=e.slice(),n=t.length-1;0<n;n--){var r=Math.floor(Math.random()*(n+1)),i=t[n];t[n]=t[r],t[r]=i}return t},t.sigmoid=wm,t.ssdMobilenetv1=hv,t.tf=zp,t.tinyFaceDetector=function(e,t){return yv.tinyFaceDetector.locateFaces(e,t)},t.tinyYolov2=function(e,t){return yv.tinyYolov2.locateFaces(e,t)},t.toNetInput=wh,t.utils=om,t.validateConfig=T_,Object.defineProperty(t,"__esModule",{value:!0})})}));export{i as t};