webpackJsonp([10],{"4AKn":function(t,a,e){"use strict";var r=e("Zrlr"),n=e.n(r),i=e("wxAW"),s=e.n(i),h=e("kQ6u");function o(t,a,e,r,n){for(var i=0,s=0;s<e;++s){if(i>s)for(var h=0;h<n;++h){var o=a+i*r+h,c=a+s*r+h,v=t[o];t[o]=t[c],t[c]=v}for(var f=e;i&(f>>=1);)i&=~f;i|=f}}function c(t,a,e,r,n){for(var i=a+e*r/2,s=0;s<e/2;++s)for(var h=0;h<n;++h){var o=a+s*r+h,c=i+s*r+h,v=t[o];t[o]=t[c],t[c]=v}}function v(t,a,e,r,n,i,s){return u(t,a,e,r,n,i,!0,s)}function f(t,a,e,r,n,i,s){return u(t,a,e,r,n,i,!1,s)}function u(t,a,e,r,n,i,s,h){for(var v=Math.PI,f=0;f<r;++f){s&&(c(t,f*i,e,n,h),c(a,f*i,e,n,h)),o(t,f*i,e,n,h),o(a,f*i,e,n,h);for(var u=s?v:-v,l=1;l<e;l+=l)for(var g=u/l,m=Math.sin(g/2),d=1,w=0,_=-2*m*m,p=Math.sin(g),y=0;y<l;++y){for(var k=y;k<e;k+=2*l)for(var I=k+l,F=0;F<h;++F){var M=f*i+k*n+F,A=f*i+I*n+F,B=t[A],C=a[A],b=B*d-C*w,E=B*w+C*d;t[A]=t[M]-b,a[A]=a[M]-E,t[M]+=b,a[M]+=E}var P=_*w+p*d;d+=_*d-p*w,w+=P}s||(c(t,f*i,e,n,h),c(a,f*i,e,n,h))}}var l=function(){function t(a,e,r,i,s,o){n()(this,t),this.channels=a,this.width=i,this.height=s,this.real=e||new Array(i*s*4),this.imag=r||new Array(i*s*4),this.buffer=o||new h.a(this.width,this.height)}return s()(t,[{key:"clone",value:function(){for(var a=new Array(this.real.length),e=0;e<this.real.length;e++)a[e]=this.real[e];for(var r=new Array(this.imag.length),n=0;n<this.imag.length;n++)r[n]=this.imag[n];return new t(this.channels,a,r,this.width,this.height)}},{key:"toBuffer",value:function(t){for(var a=new h.a(this.width,this.height),e=this.real,r=a.uint8,n=this.width*this.height,i=0;i<n;++i){for(var s=0;s<this.channels;++s){var o=4*i+s,c=e[o];c=c<0?0:c>1?1:c,t&&(c=Math.pow(c,1/t)),r[o]=255*c}r[4*i+3]=255}return a}},{key:"toMaginitude",value:function(){for(var t=this.clone(),a=t.real,e=t.imag,r=t.width*t.height,n=0;n<r;++n)for(var i=0;i<this.channels;++i){var s=4*n+i,h=a[s],o=e[s];a[s]=Math.sqrt(h*h+o*o)/r,e[s]=0}return t}},{key:"toPhase",value:function(){for(var t=this.clone(),a=t.real,e=t.imag,r=t.width*t.height,n=Math.PI,i=0;i<r;++i)for(var s=0;s<this.channels;++s){var h=4*i+s,o=a[h],c=e[h];a[h]=Math.atan2(c,o)/n/2+.5,e[h]=0}return t}},{key:"ifft",value:function(){var t=this.clone(),a=t.width,e=t.height,r=t.real,n=t.imag;v(r,n,a,e,4,4*a,this.channels),v(r,n,e,a,4*a,4,this.channels);for(var i=a*e,s=0;s<i;++s)for(var h=0;h<this.channels;++h){var o=4*s+h;r[o]=r[o]/i,n[o]=0}return t}},{key:"fft",value:function(){var t=this.clone(),a=t.width,e=t.height,r=t.real,n=t.imag;return f(r,n,a,e,4,4*a,this.channels),f(r,n,e,a,4*a,4,this.channels),t}},{key:"autoContrast",value:function(){for(var t=this.clone(),a=t.real,e=t.width*t.height,r=[1,1,1,1],n=[0,0,0,0],i=0;i<e;++i)for(var s=0;s<this.channels;++s){var h=a[4*i+s];r[s]=Math.min(h,r[s]),n[s]=Math.max(h,n[s])}for(var o=0;o<e;++o)for(var c=0;c<this.channels;++c){var v=4*o+c;a[v]=(a[v]-r[c])/(n[c]-r[c])}return t}}],[{key:"createFromImageBuffer",value:function(a){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=a.width*a.height,n=new Array(a.width*a.height*4),i=new Array(a.width*a.height*4),s=a.uint8,h=0;h<r;++h)for(var o=0;o<e;++o){var c=4*h+o;n[c]=s[c]/255,i[c]=0}return new t(e,n,i,a.width,a.height,a)}},{key:"createFromImage",value:function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=h.a.createFromImage(a);return t.createFromImageBuffer(r,e)}}]),t}();a.a=l},ITvZ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("4AKn"),n=(e("eiJk"),{name:"Fft",data:function(){return{}},mounted:function(){},methods:{selectImage:function(t){this.start(t.target)},start:function(t){var a=document.getElementById("mag-canvas"),e=document.getElementById("phase-canvas"),n=document.getElementById("output-canvas"),i=r.a.createFromImage(t).fft(),s=i.toMaginitude().autoContrast().toBuffer(6),h=i.toPhase().toBuffer(),o=i.ifft().toBuffer();s.toCanvas(a),h.toCanvas(e),o.toCanvas(n)}}}),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section-fft"},[e("h1",[t._v("FFT")]),t._v(" "),e("p",[t._v("Experiments with Fast Fourier Transformations in javascript. Click an image at the top to show an FFT magnitude and phase image.")]),t._v(" "),e("img",{attrs:{src:"/static/sample-images/lena.png"},on:{click:t.selectImage}}),t._v(" "),e("img",{attrs:{src:"/static/sample-images/clown.jpg"},on:{click:t.selectImage}}),t._v(" "),e("img",{attrs:{src:"/static/sample-images/sine4.png"},on:{click:t.selectImage}}),t._v(" "),e("img",{attrs:{src:"/static/sample-images/twigs.jpg"},on:{click:t.selectImage}}),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[t._v("\n      Magnitude"),e("br"),t._v(" "),e("canvas",{attrs:{id:"mag-canvas",width:"100",height:"100"}})]),t._v(" "),e("div",[t._v("\n      Phase"),e("br"),t._v(" "),e("canvas",{attrs:{id:"phase-canvas",width:"100",height:"100"}})]),t._v(" "),e("div",[t._v("\n      Inverse FFT"),e("br"),t._v(" "),e("canvas",{attrs:{id:"output-canvas",width:"100",height:"100"}})])])}]};var s=e("VU/8")(n,i,!1,function(t){e("rMV5")},"data-v-3660f5c9",null);a.default=s.exports},rMV5:function(t,a){}});
//# sourceMappingURL=10.13efcebb2c6dd64a6e2d.js.map