(window.webpackJsonp=window.webpackJsonp||[]).push([[69,3,7,18],{439:function(t,e,n){"use strict";var r=n(12),o=n(8),l=n(94),c=n(20),d=n(13),f=n(51),h=n(341),m=n(72),v=n(7),_=n(60),x=n(73).f,k=n(41).f,y=n(19).f,$=n(441).trim,w="Number",N=o.Number,C=N.prototype,E=f(_(C))==w,I=function(t){var e,n,r,o,l,c,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=$(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(w,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var A,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(E?v((function(){C.valueOf.call(n)})):f(n)!=w)?h(new N(I(e)),n,S):I(e)},j=r?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;j.length>O;O++)d(N,A=j[O])&&!d(S,A)&&y(S,A,k(N,A));S.prototype=C,C.constructor=S,c(o,w,S)}},441:function(t,e,n){var r=n(26),o="["+n(442)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},442:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},443:function(t,e,n){"use strict";n.r(e);var r={name:"Blank",props:{text:{type:String,default:"Tidak ada kontent"}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block py-32 w-full text-center bg-white rounded shadow"},[n("p",{staticClass:"mb-2 text-2xl font-semibold text-gray-500"},[t._v(t._s(t.text))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},450:function(t,e,n){"use strict";n.r(e);n(439);var r={name:"Loading",props:{size:{type:Number,default:46},variant:{type:String,default:"bg-gray-900 bg-opacity-50"}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex absolute inset-0 flex-col justify-center items-center",class:t.variant},[n("svg-spinner",{staticClass:"block",attrs:{width:t.size+"px",height:t.size+"px"}}),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgSpinner:n(340).default})},484:function(t,e,n){"use strict";n.r(e);var r={name:"NotificationList",props:{notification:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1}},methods:{handleClick:function(t){var e=this;this.loading=!0,this.$axios.$get("account/notifications/read/"+t).then((function(data){switch(data.type){case"article":e.$router.push("/articles/"+data.slug);break;case"video":e.$router.push("/videos/"+data.slug);break;case"join.minitutor":e.$router.push("/join-minitutor");break;case"dashboard.minitutor":e.$router.push("/dashboard/minitutor/edit");break;case"feedback":e.$router.push("/dashboard/minitutor/feedback")}e.$store.commit("notification/read",t)})).catch((function(t){e.$toast.danger(e.$errorMessage(t)),e.loading=!1}))}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden relative bg-white rounded shadow hover:shadow-lg"},[n("div",{staticClass:"overflow-hidden relative p-3 rounded border-l-4 cursor-pointer",class:t.notification.read_at?"border-primary-600":"border-red-600",on:{click:function(e){return t.handleClick(t.notification.id)}}},[n("p",{staticClass:"font-semibold"},[t._v("\n      "+t._s(t.notification.data.message)+"\n    ")]),t._v(" "),n("p",{staticClass:"text-sm text-gray-700"},[t._v("\n      "+t._s(t._f("moment")(t.notification.created_at,"from","now"))+"\n    ")]),t._v(" "),t.notification.read_at?t._e():n("span",{staticClass:"text-2xs absolute top-0 right-0 px-1 font-bold text-red-700 bg-red-100 rounded"},[t._v("BARU")])]),t._v(" "),t.loading?n("block-loading"):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlockLoading:n(450).default})},505:function(t,e,n){"use strict";n.r(e);var r={name:"Notifications",middleware:"auth",data:function(){return{loading:!1}},head:{title:"Notifikasi"},methods:{readAll:function(){var t=this;this.loading=!0,this.$axios.$get("account/notifications/read").then((function(){t.$store.commit("notification/readAll"),t.loading=!1})).catch((function(e){t.$toast.danger(t.$errorMessage(e)),t.loading=!1}))},deleteAll:function(){var t=this;this.$toast.confirm.danger((function(){t.loading=!0,t.$axios.$delete("account/notifications").then((function(){t.$store.commit("notification/set",[]),t.loading=!1})).catch((function(e){t.$toast.danger(t.$errorMessage(e)),t.loading=!1}))}),null,{message:"Anda yakin ingin menghapus semua notifikasi?"})}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-3"},[n("div",{staticClass:"flex justify-between items-center mb-3"},[n("h3",{staticClass:"flex-1 text-lg font-bold leading-none uppercase"},[t._v("Notifikasi")]),t._v(" "),n("button",{staticClass:"bg-primary-600 disabled:opacity-60 flex justify-center items-center w-7 h-7 text-sm text-white rounded-full",attrs:{disabled:t.loading,type:"button"},on:{click:function(e){return e.preventDefault(),t.readAll.apply(null,arguments)}}},[t.loading?n("svg-spinner",{attrs:{width:"20px"}}):n("i",{staticClass:"ft ft-eye"})],1),t._v(" "),n("button",{staticClass:"disabled:opacity-60 flex justify-center items-center ml-2 w-7 h-7 text-sm text-white bg-red-600 rounded-full",attrs:{disabled:t.loading,type:"button"},on:{click:function(e){return e.preventDefault(),t.deleteAll.apply(null,arguments)}}},[t.loading?n("svg-spinner",{attrs:{width:"20px"}}):n("i",{staticClass:"ft ft-trash"})],1)]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 gap-3"},t._l(t.$store.getters.notifications,(function(t){return n("elements-notification-list",{key:t.id,attrs:{notification:t}})})),1),t._v(" "),t.$store.getters.notifications.length?t._e():n("block-blank",{attrs:{text:"Belum ada Notifikasi."}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgSpinner:n(340).default,ElementsNotificationList:n(484).default,BlockBlank:n(443).default})}}]);