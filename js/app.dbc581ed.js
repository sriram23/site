(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],f=0,d=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1552:function(t,e,s){},1771:function(t,e,s){var a={"./logo.png":"cf05","./master-image.png":"5600","./master.png":"d9f4","./squash.png":"7883","./ugam.png":"489a"};function n(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="1771"},"2a6a":function(t,e,s){"use strict";var a=s("e54e"),n=s.n(a);n.a},"2ab0":function(t,e,s){"use strict";var a=s("1552"),n=s.n(a);n.a},3964:function(t,e,s){"use strict";var a=s("725d"),n=s.n(a);n.a},4085:function(t,e,s){"use strict";var a=s("932e"),n=s.n(a);n.a},4104:function(t,e,s){"use strict";var a=s("b943"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="4678"},"489a":function(t,e,s){t.exports=s.p+"img/ugam.f9798c57.png"},"4c4d":function(t,e,s){},5475:function(t,e,s){"use strict";var a=s("c74e"),n=s.n(a);n.a},5600:function(t,e,s){t.exports=s.p+"img/master-image.6c195801.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("a65d"),o=s.n(n),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header")],1)},i=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("span",{staticClass:"site-title"},[t._v("Sriram")]),s("div",{staticClass:"nav-container hide-sm"},[s("router-link",{staticClass:"nav-option",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"nav-option",attrs:{to:"/blog"}},[t._v("Blog")])],1),s("div",{staticClass:"hamburger show-sm",on:{click:t.toggle}},[t.isMenuVisible?t._e():s("i",{staticClass:"fa fa-bars fa-3x"}),t.isMenuVisible?s("i",{staticClass:"fa fa-close fa-3x"}):t._e(),t.isMenuVisible?s("div",{staticClass:"list"},[s("li",{staticClass:"item"},[s("router-link",{staticClass:"router-link",attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"item"},[s("router-link",{staticClass:"router-link",attrs:{to:"/blog"}},[t._v("Blog")])],1)]):t._e()])]),s("div",[s("router-view")],1)])},l=[],u={name:"Header",data:function(){return{isMenuVisible:!1}},methods:{toggle:function(){this.isMenuVisible=!this.isMenuVisible},navigateTo:function(t){this.$router.push(t)}}},f=u,d=(s("4085"),s("2877")),m=Object(d["a"])(f,c,l,!1,null,"619109be",null),b=m.exports,p={name:"App",components:{Header:b}},g=p,j=(s("74c0"),Object(d["a"])(g,r,i,!1,null,"4b093398",null)),v=j.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog-container"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!1,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),t._l(t.currentBlog,(function(e){return s("div",{key:e._id,staticClass:"blog-card"},[s("BlogCard",{attrs:{title:e.title,author:e.author,desc:e.content,date:t.convertTime(e.createdAt)},on:{cardClicked:function(s){return t.navigateTo(e)}}})],1)})),s("div",{staticClass:"load-more",on:{click:t.loadMore}},[t._v("Load More")])],2)},_=[],k=s("2909"),y=(s("96cf"),s("1da1")),C=s("5530"),w=s("c1df"),O=s.n(w),x=s("9062"),B=s.n(x),P=(s("e40d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog-card-container",on:{click:t.cardClicked}},[s("div",{staticClass:"profile-img-container"},[t.image?s("img",{staticClass:"img-circle",attrs:{src:"@/assets/blog/"+t.image}}):s("div",{staticClass:"thumbnail-circle"},[s("span",[t._v(t._s(t.author.slice(0,2)))])])]),s("div",[s("div",{staticClass:"blog-title"},[s("b",[t._v(t._s(t.title))]),t._v(" by "),s("i",[t._v(t._s(t.author))])]),s("span",{staticClass:"time-stamp"},[t._v("Published: "+t._s(t.date))]),s("div",{staticClass:"html-content",domProps:{innerHTML:t._s(t.desc.slice(0,200)+"...")}})])])}),z=[],S={name:"BlogCard",props:{title:String,desc:String,image:String,author:String,date:String},methods:{cardClicked:function(){this.$emit("cardClicked")}}},M=S,$=(s("e134"),Object(d["a"])(M,P,z,!1,null,"fc8a1f70",null)),D=$.exports,E=s("2f62"),A={name:"Blog",components:{BlogCard:D,Loading:B.a},data:function(){return{isLoading:!0,skip:1,limit:5,currentBlog:[]}},computed:Object(C["a"])({},Object(E["c"])(["blogs"])),methods:Object(C["a"])(Object(C["a"])({},Object(E["b"])(["fetchBlog"])),{},{renderBlogs:function(t){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.isLoading=!0,s.next=3,e.fetchBlog(t);case 3:e.currentBlog=e.blogs,e.isLoading=!1;case 5:case"end":return s.stop()}}),s)})))()},convertTime:function(t){var e=O()(t).fromNow();return e},loadMore:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,++t.skip,e.next=4,t.fetchBlog({skip:t.skip-1,limit:t.skip*t.limit});case 4:(s=t.currentBlog).push.apply(s,Object(k["a"])(t.blogs)),t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}}),mounted:function(){this.renderBlogs({skip:this.skip-1,limit:this.skip*this.limit})}},T=A,L=(s("3964"),Object(d["a"])(T,h,_,!1,null,"19af4f26",null)),H=L.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.blogs,(function(e){return s("div",{key:e._id},[t.params.id===e._id&&t.params.title===e.title?s("div",[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"blog-content"},[s("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.title))]),s("hr"),s("br"),s("div",{domProps:{innerHTML:t._s(e.content)}})]),s("div",{staticClass:"footer"},[t._v("Written by "),s("b",[t._v(t._s(e.author))]),t._v(" on "),s("i",[t._v(t._s(t.convertTime(e.createdAt)))])])]):t._e()])})),0)},q=[],R={name:"BlogView",data:function(){return{params:{}}},computed:Object(C["a"])({},Object(E["c"])(["blogs"])),methods:{convertTime:function(t){var e=O()(t).fromNow();return e}},mounted:function(){this.params=this.$route.params}},V=R,U=(s("2a6a"),Object(d["a"])(V,N,q,!1,null,"308da50a",null)),I=U.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.blogData.author,expression:"blogData.author"}],staticClass:"input",attrs:{required:"",type:"text",placeholder:"Your Name"},domProps:{value:t.blogData.author},on:{input:function(e){e.target.composing||t.$set(t.blogData,"author",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.blogData.title,expression:"blogData.title"}],staticClass:"input",attrs:{required:"",type:"text",placeholder:"Title"},domProps:{value:t.blogData.title},on:{input:function(e){e.target.composing||t.$set(t.blogData,"title",e.target.value)}}}),s("div",{domProps:{innerHTML:t._s(t.blogData.content)}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blogData.content,expression:"blogData.content"}],staticClass:"input",attrs:{required:"",placeholder:"Your blog goes here",cols:"30",rows:"10"},domProps:{value:t.blogData.content},on:{input:function(e){e.target.composing||t.$set(t.blogData,"content",e.target.value)}}}),s("button",{staticClass:"input submit-button",on:{click:function(e){return e.preventDefault(),t.submitBlog(e)}}},[t._v("Submit")])])])},F=[],W=(s("ac1f"),s("5319"),{data:function(){return{blogData:{}}},methods:Object(C["a"])(Object(C["a"])({},Object(E["b"])(["postBlog"])),{},{submitBlog:function(){var t=this;this.postBlog(this.blogData).then((function(e){200===e.status&&(t.$toasted.success("Blog Upload successful").goAway(3e3),t.$router.replace("/blog"))})).catch((function(e){e?t.$toasted.error("Something went wrong: ".concat(e.response.status)).goAway(3e3):t.$toasted.error("Please check your internet connection").goAway(3e3)}))}})}),Y=W,G=(s("6db7"),Object(d["a"])(Y,J,F,!1,null,"b1ec0004",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("MasterImage"),s("Profession"),s("router-view")],1)},X=[],Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"master-container"},[s("div",{staticClass:"master-image-container"}),s("div",{staticClass:"master-content-container"},[s("div",{staticClass:"sub-title"},[t._v("Hello World!")]),s("div",{staticClass:"title"},[t._v("I'm Sriram")]),s("div",{staticClass:"description"},[t._v("A passionate Software Engineer from Coimbatore")])])])}],et=(s("4104"),{}),st=Object(d["a"])(et,Z,tt,!1,null,"0de2050d",null),at=st.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profession"},[s("div",{staticClass:"profession-title"},[t._v("Professional Experience")]),t._l(t.Professions,(function(t){return s("div",{key:t},[s("ProfessionCard",{staticClass:"profession-card",attrs:{source:t.source,designation:t.designation,company:t.company,time:t.time}})],1)}))],2)},ot=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"company-container"},[a("div",{staticClass:"company-logo"},[a("img",{staticClass:"company-logo-image",attrs:{src:s("1771")("./"+t.source),alt:"Squash Apps"}})]),a("div",{staticClass:"company-content"},[a("div",{staticClass:"designation"},[t._v(t._s(t.designation))]),a("div",{staticClass:"company"},[t._v(t._s(t.company))]),a("div",{staticClass:"time"},[t._v(t._s(t.time))])])])])},it=[],ct={name:"ProfessionCard",props:{source:String,designation:String,company:String,time:String},methods:{getImage:function(t){return"../assets/".concat(t)}}},lt=ct,ut=(s("6b2f"),Object(d["a"])(lt,rt,it,!1,null,"ae009234",null)),ft=ut.exports,dt={professions:[{source:"squash.png",designation:"Jr. Software Engineer",company:"Squash Apps",time:"Nov, 2019 - Till date"},{source:"ugam.png",designation:"Analyst - Research operations",company:"Ugam - A Merkle company",time:"Aug, 2019 - Oct, 2019"},{source:"ugam.png",designation:"Associate Analyst - Research operations",company:"Ugam - A Merkle company",time:"Aug, 2018 - Aug, 2019"}]},mt=dt,bt={name:"Profession",data:function(){return{Professions:""}},components:{ProfessionCard:ft},created:function(){this.Professions=mt.professions}},pt=bt,gt=(s("2ab0"),Object(d["a"])(pt,nt,ot,!1,null,"6fefcbc6",null)),jt=gt.exports,vt={name:"Home",components:{MasterImage:at,Profession:jt}},ht=vt,_t=(s("5475"),Object(d["a"])(ht,Q,X,!1,null,"0baf93b5",null)),kt=_t.exports,yt=s("8c4f");a["a"].use(yt["a"]);var Ct=new yt["a"]({routes:[{path:"/",name:"Home",component:kt},{path:"/blog",name:"Blog",component:H},{path:"/blog/:id/:title",name:"BlogView",component:I},{path:"/blog/create",name:"CreateBlog",component:K}]}),wt=Ct,Ot={blogs:[]},xt={newBlog:function(t,e){t.blogs.unshift(e)},fetchBlog:function(t,e){t.blogs=e.data}},Bt=(s("99af"),s("bc3a")),Pt=s.n(Bt),zt={postBlog:function(t,e){var s=t.commit,a=Pt.a.post("https://blooming-sea-36559.herokuapp.com/create",e);return s("newBlog",e),a},fetchBlog:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,s){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,Pt.a.get("https://blooming-sea-36559.herokuapp.com/fetch-blog/".concat(s.skip,"/").concat(s.limit));case 3:n=t.sent,a("fetchBlog",n);case 5:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}()};a["a"].use(E["a"]);var St=new E["a"].Store({state:Ot,mutations:xt,actions:zt}),Mt=St;a["a"].use(o.a),a["a"].config.productionTip=!1,new a["a"]({router:wt,store:Mt,render:function(t){return t(v)}}).$mount("#app")},"6b2f":function(t,e,s){"use strict";var a=s("4c4d"),n=s.n(a);n.a},"6db7":function(t,e,s){"use strict";var a=s("aa3b"),n=s.n(a);n.a},"725d":function(t,e,s){},"748a":function(t,e,s){},"74c0":function(t,e,s){"use strict";var a=s("748a"),n=s.n(a);n.a},7883:function(t,e,s){t.exports=s.p+"img/squash.b1fa42c1.png"},"8e78":function(t,e,s){},"932e":function(t,e,s){},aa3b:function(t,e,s){},b943:function(t,e,s){},c74e:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},d9f4:function(t,e,s){t.exports=s.p+"img/master.aa3422da.png"},e134:function(t,e,s){"use strict";var a=s("8e78"),n=s.n(a);n.a},e54e:function(t,e,s){}});
//# sourceMappingURL=app.dbc581ed.js.map