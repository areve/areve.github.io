webpackJsonp([11],{t1fo:function(t,e){},zknO:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Xoog"),s={name:"css-frameworks",components:{VueMarkdown:o.n(n).a},data:function(){return{}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h1",[this._v("CSS Frameworks")]),this._v(" "),e("vue-markdown",{staticClass:"markdown"},[this._v("\n\nSome notes after experimenting with some lightweight CSS frameworks with Vue. I briefly glanced at many more but I had a more significant play with the following. When I first started using Vue I spent some time looking through UI frameworks and found [Vuetify](https://vuetifyjs.com/) to be very good. Once you start using a Vue component library you become increasingly bound to it as your app grows. This is often not a bad thing, but for my personal website I wanted to keep style away from function as much as possible. Many CSS frameworks require javascript for the richer components, if there is an actively maintained Vue component library then this could be an option but for now I'm trying to avoid javascript in my chosen CSS framework altogether. Javascript in a CSS framework can improve the accessibiltiy level and keyboard only features of a website. Some CSS frameworks require class attributes on all elements for the HTML to look good, others require none. Here is a good article about [Separation Of Concerns in CSS and HTML](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/), either your CSS knows about your HTML or your HTML knows about your CSS or a bit of both. I'd rather my HTML know little about the CSS framework for this project - but I'm not making that an absolute rule.\n\n## No class attribute required\n\n### Picnic CSS\n\nWhen I first found [Picnic CSS](https://picnicss.com/) I was really pleased. Its great to be able to\njust write some HTML and it all look nice without having to add classes. The only thing I have against it is the lack of components.\n\n### BareCSS\n\nI didn't experiment with [BareCSS](http://barecss.com) but it is javascript free and styles html without the need for classes, and has a good set of components.\n\n### Pure.css\n\nI liked [Pure.css](https://purecss.io/), at the time I tried it I didn't want to add classes to all my buttons and tried skeleton.css and was much happier. I would use Pure.css again though.\n\n### skeleton.css\n\nWriting HTML with [skeleton.css](http://getskeleton.com/) installed is great and I would recommend this. If you want to use richer components like dropdowns though it does not help you.\n\n### Milligram and siimple\n\nI have not tried [Milligram](https://milligram.io/), or [siimple](https://siimple.juanes.xyz/) but they look like excellent frameworks in this category.\n\n## Class attribute required\n\n### UI-Kit\n\nI expermiented with [UI-Kit](https://getuikit.com/) v3, UI-kit needs javascript for some of its components. It may be better if there a set of vue components like there is for [vuikit](https://github.com/vuikit/vuikit) that uses uikit-v2.\n\n### Bulma\n\n[Bulma](https://bulma.io/) is a javascript free CSS framework with lots of components. I didn't like that the dropdown menu needed javascript to worki with click. Also I felt like I had to put more classes on tags than I wanted to. This is a very popular framework and for good reason.\n\n### Spectre.css\n\nI liked [Spectre.css](https://picturepan2.github.io/spectre/) it is very similar to bootstrap4 in many ways it requires no javascript has clean html and has an impressive list of components. The dropdown menu works by click. It uses sass and compiles quickly.\n\n## A little javascript needed\n\n### Kickstart\n\n[Kickstart CSS](http://getkickstart.com/) is interesting because its a SASS library as much as it is a CSS framework. I want to have a better look at this in the future. Most components do not need javascript.\n\n### Bootstrap4\n\nI'm currently using [Bootstrap4](https://getbootstrap.com/) and enjoying it. The HTML is quite nice, the components all have accessibiltiy and keyboard considerations dealt with which not many of the other CSS frameworks have. I currently have [bootstrap-vue](https://bootstrap-vue.js.org/) installed and use the vue components only when absolutely necessary. I didn't like Bootstrap3 because HTML became full of `"),e("div",[this._v("` tags, Bootstrap4 is better.\n\n### Foundation 6\n\nI've used [Foundation 6](https://foundation.zurb.com/sites.html) before and it is very clear about which components require javascript and which do not. Unfortunately too many do require it for my current requirements.\n\n## Vue component frameworks\n\n### Vuetify\n\n[Vuetify](https://vuetifyjs.com/en/) is not a CSS framework but does provide CSS too. It is a popular component library for Vue. It looks good and has many components. Once you start using a vue component library you become bound to it because your templates have lots of framework specific tags. I'd not used Stylus before using Vuetify, I really liked Stylus, but its lack of popularity against Sass makes me not want to use it. Sass will be around for a long time to come, I'm not so certain about Stylus.\n\n## Conclusion\n\nI don't have an absolute favorite, this site is using [Spectre.css](https://picturepan2.github.io/spectre/) at the time of writing this.\n\n    ")])])],1)},staticRenderFns:[]};var i=o("VU/8")(s,a,!1,function(t){o("t1fo")},null,null);e.default=i.exports}});
//# sourceMappingURL=11.e95a72b70a0615813786.js.map