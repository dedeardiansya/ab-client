(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{485:function(t,e,n){"use strict";n.r(e);var l={name:"Sidebar",computed:{auth:function(){return this.$store.getters.auth},urls:function(){return[{text:"Edit informasi",to:"/dashboard/minitutor",icon:"info"},{text:"Artikel",to:"/dashboard/minitutor/articles",icon:"book"},{text:"Video",to:"/dashboard/minitutor/videos",icon:"film"},{text:"Komentar",to:"/dashboard/minitutor/comments",icon:"message-circle"},{text:"Feedback konstruktif",to:"/dashboard/minitutor/feedback",icon:"star"}]}},methods:{onclick:function(){this.$sidebar.display(!1)}}},o=n(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar flex overflow-y-auto flex-col flex-1 p-3"},[n("div",{staticClass:"flex flex-col w-full bg-opacity-25 rounded-lg border"},[n("div",{staticClass:"flex items-center p-3 w-full"},[n("div",{staticClass:"pr-2"},[n("figure",{staticClass:"block p-1 m-auto w-12 h-12 rounded-full border"},[n("v-img",{staticClass:"block w-full h-full rounded-full",attrs:{src:t.auth.avatar,"src-placeholder":t.$images.avatar}})],1)]),t._v(" "),n("div",{staticClass:"flex-1"},[n("h3",{staticClass:"capitalized truncate mb-1 font-semibold leading-none"},[t._v(t._s(t.auth.name))]),t._v(" "),n("p",{staticClass:"truncate text-sm leading-none text-gray-400"},[t._v("@"+t._s(t.auth.username))])])]),t._v(" "),n("div",{staticClass:"text-primary-600 py-2 px-3 text-xs font-bold leading-none text-center border-t"},[t._v("\n      "+t._s(t.auth.points)+" POINT\n    ")])]),t._v(" "),n("div",{staticClass:"flex-1 py-3"},t._l(t.urls,(function(e,i){return n("nuxt-link",{key:i,staticClass:"flex items-center py-3 px-3 mb-1 w-full text-sm font-semibold leading-none text-gray-600 rounded-lg hover:bg-gray-100",attrs:{to:e.to,"exact-active-class":i?"":"bg-gray-100","active-class":i?"bg-gray-100":""},nativeOn:{click:function(e){return t.onclick.apply(null,arguments)}}},[n("span",{staticClass:"mr-3 opacity-60"},[n("i",{class:"ft ft-"+e.icon})]),t._v(" "),n("span",[t._v(t._s(e.text))])])})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);