(window.webpackJsonp=window.webpackJsonp||[]).push([[54,3],{443:function(t,e,r){"use strict";r.r(e);var n={name:"Blank",props:{text:{type:String,default:"Tidak ada kontent"}}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"block py-32 w-full text-center bg-white rounded shadow"},[r("p",{staticClass:"mb-2 text-2xl font-semibold text-gray-500"},[t._v(t._s(t.text))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},517:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(15),{name:"MinitutorFeedback",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.error,n=t.$axios,e.prev=1,e.next=4,n.$get("/minitutor/feedback");case 4:return l=e.sent,e.abrupt("return",{feedback:l});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}),o=r(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-3"},[t._l(t.feedback,(function(e){return r("div",{key:e.id,staticClass:"flex p-3 mb-3 bg-white rounded shadow"},[r("div",{staticClass:"w-14"},[r("nuxt-link",{staticClass:"block p-1 bg-white rounded-full border hover:bg-gray-200",attrs:{to:"/users/"+e.user.username}},[r("v-img",{staticClass:"block w-full rounded-full",attrs:{src:e.user.avatar||t.$images.avatar,"src-placeholder":t.$images.avatar,alt:e.user.username}})],1)],1),t._v(" "),r("div",{staticClass:"flex-1 pl-3"},[r("div",{staticClass:"flex items-center mb-3"},[r("nuxt-link",{staticClass:"hover:text-primary-700 text-primary-600 block text-lg font-semibold leading-none capitalize",attrs:{to:"/users/"+e.user.username}},[t._v(t._s(e.user.name))]),t._v(" "),r("span",{staticClass:"block pl-2 text-xs leading-none"},[t._v(t._s(t._f("moment")(e.created_at,"from","now")))])],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("client-only",[r("star-rating",{staticClass:"h-3 text-sm leading-none",attrs:{rating:Number(e.rating),"read-only":!0,increment:.01,"star-size":16,"text-class":"mr-1 text-sm h-3 leading-none"}})],1)],1),t._v(" "),r("p",{staticClass:"mb-3 text-gray-700"},[t._v(t._s(e.message))]),t._v(" "),r("nuxt-link",{staticClass:"hover:bg-primary-600 bg-primary-100 text-primary-600 inline-flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none rounded hover:text-white",attrs:{to:"/"+e.post.type+"s/"+e.post.slug}},[t._v("Lihat Postingan")])],1)])})),t._v(" "),t.feedback.length?t._e():r("block-blank",{attrs:{text:"Belum ada Feedback Konstruktif."}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlockBlank:r(443).default})}}]);