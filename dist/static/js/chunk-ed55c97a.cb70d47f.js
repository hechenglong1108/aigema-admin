(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed55c97a"],{aa61:function(t,e,a){},db72:function(t,e,a){"use strict";var i=a("aa61"),n=a.n(i);n.a},e382:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("ktable",{ref:"tables",attrs:{tableConfig:t.tableData},scopedSlots:t._u([{key:"name",fn:function(t){return[a("div",[a("img",{staticStyle:{width:"60px"},attrs:{src:t.rows.wxImageUrl,alt:""}})])]}},{key:"number",fn:function(e){return[a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.goDetail(e.rows.userId,e.rows.wxName,e.rows.wxImageUrl)}}},[t._v(t._s(e.rows.cardNumber))])],1)]}},{key:"operation",fn:function(e){return[a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.operationNum(e.rows.userId)}}},[t._v("发放嘟点")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.goDetail(e.rows.userId)}}},[t._v("嘟点明细")])],1)]}}])}),a("el-dialog",{staticClass:"dialog",attrs:{title:"发放嘟点",visible:t.dialogVisible,width:"100%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"嘟点"}},[a("el-input-number",{attrs:{min:1,max:1e6,label:""},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),a("el-form-item",{attrs:{label:""}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.rewardFaction}},[t._v("确 定")])],1)],1)],1)},n=[],o=a("e692"),l={data:function(){var t=this;return{dialogVisible:!1,num:"",userId:"",tableData:{url:"/ana/admin/customer/page",toobar:[{label:"导出",icon:"el-icon-upload",handler:function(){window.open(t.baseUrl+"/ana/admin/user/export")}}],paging:!0,columns:[{prop:"wxImageUrl",label:"用户头像",minWidth:160,isElementui:!0,slotName:"name"},{prop:"wxName",label:"昵称",minWidth:200},{prop:"mobileNo",label:"手机号码",minWidth:200},{prop:"sex",label:"性别",minWidth:160},{prop:"totalFraction",label:"剩余嘟点总数",minWidth:120},{prop:"createdAt",label:"注册时间",minWidth:160},{prop:"operation",label:"操作",minWidth:200,isElementui:!0,slotName:"operation"}],searchbar:[{text:"手机号码：",value:"mobileNo",placeholder:"请输入手机号码"},{text:"昵称：",value:"wxName",placeholder:"请输入昵称"}]}}},methods:{rewardFaction:function(){var t=this;Object(o["r"])({userId:this.userId,faction:this.num}).then((function(){t.$message.success("发放成功"),t.dialogVisible=!1,t.$refs.tables.refresh()}))},operationNum:function(t){this.userId=t,this.dialogVisible=!0},goDetail:function(t){this.$router.push("/user/detail?userId="+t)},selection:function(){},getSearch:function(){console.log(this.$refs.tables.getSearchData())}}},r=l,s=(a("db72"),a("2877")),u=Object(s["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-ed55c97a.cb70d47f.js.map