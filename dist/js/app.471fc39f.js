(function(e){function t(t){for(var a,s,c=t[0],o=t[1],l=t[2],f=0,p=[];f<c.length;f++)s=c[f],r[s]&&p.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/glassnews/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},"165a":function(e,t,n){},1688:function(e,t,n){},"3da3":function(e,t,n){},"4a3d":function(e,t,n){"use strict";var a=n("1688"),r=n.n(a);r.a},"4abb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"front-page"},[n("router-view")],1)},i=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("HOMEEEEE")])])}],o={name:"HelloWorld Home",props:{msg:String}},l=o,u=(n("4a3d"),n("2877")),f=Object(u["a"])(l,s,c,!1,null,"a0f90368",null);f.options.__file="Home.vue";var p=f.exports,d={components:{Home:p}},v=d,b=(n("034f"),Object(u["a"])(v,r,i,!1,null,null,null));b.options.__file="App.vue";var h=b.exports,_=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"category-nav"},[n("h1",[e._v("Glass News")]),n("NavBar",{staticClass:"navbar",on:{"nav-changed":e.fetchArticles}}),e.info?e._l(e.info,function(e){return n("Article",{staticClass:"article",attrs:{article:e}})}):n("div",[e._m(0)])],2)},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"glass"}},[a("img",{attrs:{src:n("a0eb"),alt:"glass"}}),a("div",{staticClass:"center-title"})])}],y={topnews:{label:"Top News",path:""},business:{label:"Business",path:"business"},popCulture:{label:"Pop Culture",path:"entertainment"},tech:{label:"Technology",path:"technology"},science:{label:"Science",path:"science"},sports:{label:"Sports",path:"sports"}},w=y,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-card animated rollIn delay 5s"},[n("a",{attrs:{href:e.article.url,target:"_blank"}},[n("img",{staticClass:"article-pic",attrs:{src:e.article.urlToImage}}),n("div",{staticClass:"article-content"},[n("h2",[e._v(e._s(e.article.title))]),n("h3",[e._v(e._s(e.article.source.name))])])])])},O=[],j={name:"Article",props:{article:{type:Object,required:!0}}},x=j,E=(n("c9da"),Object(u["a"])(x,C,O,!1,null,"822e8ce2",null));E.options.__file="Article.vue";var N=E.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-header"},[n("ul",e._l(e.articleCategories,function(t,a){return n("button",{staticClass:"animatedBorder",on:{click:function(t){e.handleClick(a)}}},[n("p",[e._v(e._s(t.label))])])}))])},$=[],S={name:"NavBar",data:function(){return{articleCategories:w}},methods:{handleClick:function(e){this.$emit("nav-changed",e)}}},k=S,A=(n("be46"),Object(u["a"])(k,T,$,!1,null,"bc8f92da",null));A.options.__file="NavBar.vue";var P=A.exports,B={name:"TopNews",components:{Article:N,NavBar:P},data:function(){return{info:null}},methods:{fetchArticles:function(e){var t=this,n=w[e].path;axios.get("https://newsapi.org/v2/top-headlines?country=us&category=".concat(n,"&apiKey=3bd915d84a3042d1be0b723b6ba01fa5")).then(function(e){return t.info=e.data.articles})}}},H=B,M=(n("ad48"),Object(u["a"])(H,m,g,!1,null,null,null));M.options.__file="TopNews.vue";var I=M.exports;a["a"].use(_["a"]),a["a"].config.productionTip=!1;var J=[{name:"Top News",path:"/",component:I}],q=new _["a"]({routes:J});new a["a"]({router:q,render:function(e){return e(h)}}).$mount("#app")},a0eb:function(e,t,n){e.exports=n.p+"img/glass1.682bf77f.jpg"},ad48:function(e,t,n){"use strict";var a=n("165a"),r=n.n(a);r.a},be46:function(e,t,n){"use strict";var a=n("3da3"),r=n.n(a);r.a},c21b:function(e,t,n){},c9da:function(e,t,n){"use strict";var a=n("4abb"),r=n.n(a);r.a}});
//# sourceMappingURL=app.471fc39f.js.map