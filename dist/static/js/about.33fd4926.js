(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d03":function(t,s,a){},"1f8b":function(t,s,a){"use strict";var e=a("0d03"),n=a.n(e);n.a},b0c0:function(t,s,a){var e=a("83ab"),n=a("9bf2").f,i=Function.prototype,l=i.toString,o=/^\s*function ([^ (]*)/,r="name";e&&!(r in i)&&n(i,r,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})},dd7b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login"},[a("div",{staticClass:"contain"},[t._m(0),a("div",{staticClass:"form"},[a("h5",[t._v("Hello!欢迎登录")]),a("el-form",{ref:"form",attrs:{"label-width":"0"}},[a("el-form-item",{staticClass:"form-item",attrs:{label:""}},[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}})],1),a("el-form-item",{staticClass:"form-item",attrs:{label:""}},[a("el-input",{attrs:{"show-password":"",placeholder:"请输入密码"},model:{value:t.pass,callback:function(s){t.pass=s},expression:"pass"}})],1),a("el-form-item",{staticClass:"form-item",attrs:{label:""}},[a("el-button",{staticClass:"login-btn",attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")])],1)],1)],1)])])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:"/static/img/agm2.png",alt:""}})])}],i=(a("b0c0"),a("e692")),l={data:function(){return{name:"",pass:""}},methods:{login:function(){var t=this;if(this.name)if(this.pass){var s={account:this.name,password:this.pass};Object(i["f"])(s).then((function(){t.$message.success("登录成功"),t.$router.push("/")}))}else this.$message.info("请输入密码");else this.$message.info("请输入账号")}}},o=l,r=(a("1f8b"),a("2877")),c=Object(r["a"])(o,e,n,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=about.33fd4926.js.map