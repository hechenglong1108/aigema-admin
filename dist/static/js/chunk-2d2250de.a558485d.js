(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2250de"],{e382:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("ktable",{ref:"tables",attrs:{tableConfig:e.tableData},scopedSlots:e._u([{key:"name",fn:function(e){return[a("div",[a("img",{staticStyle:{width:"60px"},attrs:{src:e.rows.wxImageUrl,alt:""}})])]}},{key:"number",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.goDetail(t.rows.userId,t.rows.wxName,t.rows.wxImageUrl)}}},[e._v(e._s(t.rows.cardNumber))])],1)]}}])})],1)},n=[],l={data:function(){return{tableData:{url:"/ana/admin/customer/page",toobar:[],paging:!0,columns:[{prop:"wxImageUrl",label:"用户头像",minWidth:160,isElementui:!0,slotName:"name"},{prop:"wxName",label:"昵称",minWidth:200},{prop:"userName",label:"姓名",minWidth:200},{prop:"sex",label:"性别",minWidth:160},{prop:"cardNumber",label:"卡片张数",minWidth:160,isElementui:!0,slotName:"number"},{prop:"createdAt",label:"注册时间",minWidth:160}],searchbar:[{text:"手机号码：",value:"mobileNo",placeholder:"请输入手机号码"}]}}},methods:{goDetail:function(e,t,a){this.$router.push("/user/detail?userId="+e+"&name="+t+"&url="+a)},selection:function(){},getSearch:function(){console.log(this.$refs.tables.getSearchData())}}},i=l,o=a("2877"),s=Object(o["a"])(i,r,n,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d2250de.a558485d.js.map