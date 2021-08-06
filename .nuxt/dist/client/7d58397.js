(window.webpackJsonp=window.webpackJsonp||[]).push([[70,23,25],{440:function(t,e,r){"use strict";r.r(e);var n={name:"Button",props:{tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},light:{type:Boolean,default:!1}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tag,t._b({tag:"component",staticClass:"disabled:opacity-70 inline-flex justify-center items-center py-0 px-4 h-10 text-sm font-medium leading-none text-center rounded cursor-pointer select-none",class:t.light?"hover:bg-gray-200 bg-gray-100":"hover:bg-primary-700 bg-primary-600 text-white",attrs:{disabled:t.loading},on:{click:function(e){return t.$emit("click")}}},"component",t.$attrs,!1),[t.loading?r("svg-spinner",{staticClass:"w-6 h-6",attrs:{light:""}}):t._t("default",(function(){return[t._v("Button")]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgSpinner:r(340).default})},444:function(t,e,r){"use strict";r.r(e);var n={name:"Input",props:{password:{type:Boolean,default:!1},minimal:{type:Boolean,default:!1},value:{type:String,default:""},error:{type:String,default:""}},data:function(){return{showPassword:!1}},computed:{type:function(){return this.showPassword&&this.password?"text":this.password?"password":"text"}},methods:{onChange:function(t){this.$emit("input",t.target.value)}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative pb-3"},[r("input",t._b({staticClass:"block flex-1 w-full border-gray-300",class:{"border-red-600":t.error,"shadow rounded":!t.minimal,"text-sm rounded":t.minimal},attrs:{type:t.type},domProps:{value:t.value},on:{change:t.onChange}},"input",t.$attrs,!1)),t._v(" "),t.password?r("button",{staticClass:"flex absolute top-0 right-0 justify-center items-center w-10 h-10 cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.showPassword=!t.showPassword}}},[r("i",{staticClass:"ft",class:t.showPassword?"ft-eye-off":"ft-eye"})]):t._e(),t._v(" "),t.error?r("span",{staticClass:"block text-xs text-red-900"},[t._v(t._s(t.error))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},521:function(t,e,r){"use strict";r.r(e);r(30),r(16),r(25),r(39),r(18),r(40);var n=r(10),o=r(3);r(15);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={email:"",message:""},m={name:"ForgetPasswordPage",layout:"auth",middleware:"guest",data:function(){return{form:{email:""},errors:d,success:"",loading:!1}},head:{title:"Lupa Password"},methods:{submit:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.errors=d,e.prev=2,e.next=5,t.$store.dispatch("auth/forgetPassword",data);case 5:t.success="Kami telah mengirim Email yang berisi tautan untuk mereset Password Anda!",e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),data=t.$errorResponse(e.t0),t.errors=c(c(c({},t.errors),data.errors),{},{message:data.message});case 12:t.loading=!1;case 13:case"end":return e.stop()}}),e,null,[[2,8]])})))()}}},f=r(4),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(t.form)}}},[r("h1",{staticClass:"mt-14 mb-8 text-4xl font-light text-center text-gray-700"},[t._v("\n    Lupa Password\n  ")]),t._v(" "),t.errors.message?r("div",{staticClass:"flex relative items-center p-4 mb-5 bg-red-50 rounded border-l-4 border-red-500 shadow-sm"},[r("div",{staticClass:"flex-grow text-red-700"},[t._v(t._s(t.errors.message))])]):t._e(),t._v(" "),t.success?r("div",{staticClass:"bg-primary-50 border-primary-500 flex relative items-center p-4 mb-5 rounded border-l-4 shadow-sm"},[r("div",{staticClass:"text-primary-700 flex-grow"},[t._v(t._s(t.success))])]):t._e(),t._v(" "),r("form-input",{attrs:{placeholder:"Email",name:"email",error:t.errors.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("div",{staticClass:"py-3 text-center"},[r("form-button",{staticClass:"block w-6/12 uppercase",attrs:{loading:t.loading}},[t._v("\n      Kirim\n    ")])],1),t._v(" "),r("div",{staticClass:"text-center"},[r("nuxt-link",{staticClass:"hover:text-primary-700 text-primary-600 font-semibold",attrs:{to:"/login"}},[t._v("Masuk")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormInput:r(444).default,FormButton:r(440).default})}}]);