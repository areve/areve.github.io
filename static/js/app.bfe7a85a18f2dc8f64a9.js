webpackJsonp([22],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),r=e("/ocq"),a=e("AYPi"),i=e.n(a),u=e("I0MY"),l=e.n(u),s=[{path:"/",name:"Home",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"lO7g"))}},{path:"/projects",name:"Projects",component:function(){return e.e(15).then(e.bind(null,"uwSr"))}},{path:"/notepad",name:"Notepad",component:function(){return e.e(18).then(e.bind(null,"qt+6"))}},{path:"/notepad/pi-zero",name:"pi-zero",title:"Pi Zero W",component:function(){return Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"NXgt"))}},{path:"/notepad/css-frameworks",name:"CssFrameworks",title:"CSS Frameworks",component:function(){return Promise.all([e.e(0),e.e(20)]).then(e.bind(null,"zknO"))}},{path:"/notepad/quantum-particles",name:"QuantumParticles",title:"Quantum Particles",component:function(){return e.e(17).then(e.bind(null,"pBDo"))}},{path:"/projects/chess",name:"Chess",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"LiR8"))}},{path:"/projects/n-queens",name:"n-Queens",component:function(){return e.e(7).then(e.bind(null,"nxFX"))}},{path:"/projects/json-me",name:"json-me",component:function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"n1vj"))}},{path:"/projects/tic-tac-toe",name:"TicTacToe",title:"tic-tac-toe",component:function(){return e.e(14).then(e.bind(null,"4zzF"))}},{path:"/projects/sierpinski",name:"Sierpinski",component:function(){return Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"Ke8R"))}},{path:"/projects/mandelbrot",name:"Mandelbrot",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"7xuQ"))}},{path:"/projects/fft",name:"Fft",title:"FFT",component:function(){return Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"ITvZ"))}},{path:"/projects/histogram",name:"Histogram",component:function(){return Promise.all([e.e(0),e.e(11)]).then(e.bind(null,"y0UR"))}},{path:"/projects/oldskool-fire",name:"OldskoolFire",title:"Oldskool Fire",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"+A1j"))}},{path:"/projects/line-town",name:"LineTown",title:"Line Town",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"nhTf"))}},{path:"/projects/gravity",name:"Gravity",title:"Gravity",component:function(){return e.e(16).then(e.bind(null,"4w5d"))}},{path:"/notepad/other-projects",name:"OtherProjects",title:"Other Projects",component:function(){return e.e(19).then(e.bind(null,"tYU1"))}},{path:"/projects/headless-wordpress",name:"HeadlessWordPress",title:"Headless WordPress",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"dRnh"))}},{path:"/projects/colours",name:"Colours",title:"Colours",component:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"aaka"))}}],c={name:"App",data:function(){return{sidebarOpen:!1}},computed:{projectRoutes:function(){return s.filter(function(t){return t.path.startsWith("/projects/")})},notepadRoutes:function(){return s.filter(function(t){return t.path.startsWith("/notepad/")})}},methods:{unfocus:function(t){t.target.blur()},closeSidebar:function(){this.sidebarOpen=!1}}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"site-nav"},[e("router-link",{staticClass:"button",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("ul",[e("li",{staticClass:"dropdown"},[e("button",{attrs:{type:"button"}},[t._v("Projects")]),t._v(" "),e("ul",t._l(t.projectRoutes,function(n){return e("li",{key:n.path},[e("router-link",{attrs:{to:n.path},nativeOn:{click:function(n){return t.unfocus(n)}}},[t._v(t._s(n.title||n.name))])],1)}))]),t._v(" "),e("li",{staticClass:"dropdown"},[e("button",{attrs:{type:"button"}},[t._v("Notepad")]),t._v(" "),e("ul",t._l(t.notepadRoutes,function(n){return e("li",{key:n.path},[e("router-link",{attrs:{to:n.path},nativeOn:{click:function(n){return t.unfocus(n)}}},[t._v(t._s(n.title||n.name))])],1)}))])])],1),t._v(" "),e("main",[e("router-view")],1)])},staticRenderFns:[]};var m=e("VU/8")(c,p,!1,function(t){e("e9F0")},null,null).exports;l.a.registerCustomEvent("doubletap",{type:"tap",taps:2}),o.a.use(l.a),o.a.config.productionTip=!1,o.a.use(r.a);var d=new r.a({routes:s});o.a.use(i.a,{id:"UA-127468929-1",router:d}),new o.a({el:"#app",router:d,components:{App:m},template:"<App/>"})},e9F0:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.bfe7a85a18f2dc8f64a9.js.map