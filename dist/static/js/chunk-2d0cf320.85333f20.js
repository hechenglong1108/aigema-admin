(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf320"],{"634a":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("ktable",{ref:"tables",attrs:{tableConfig:e.tableData},scopedSlots:e._u([{key:"operation",fn:function(t){return[i("div",[10==t.rows.state?i("el-button",{attrs:{type:"text"},on:{click:function(i){return e.showdeliver(t.rows.bizId)}}},[e._v("发货")]):e._e(),i("el-button",{attrs:{type:"text"},on:{click:function(i){return e.goDetail(t.rows.bizId)}}},[e._v("详情")])],1)]}}])}),i("el-dialog",{attrs:{title:"发货",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{ref:"form",attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"物流公司"}},[i("el-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("el-form-item",{attrs:{label:"物流单号"}},[i("el-input",{model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.deliver}},[e._v("确 定")])],1)],1)],1)},a=[],n=i("e692"),o={data:function(){var e=this;return{dialogVisible:!1,name:"",number:"",id:"",tableData:{url:"/ana/admin/biz/page",toobar:[{label:"导出",icon:"el-icon-upload",handler:function(){e.add()}}],paging:!0,columns:[{prop:"bizNo",label:"订单编号",minWidth:80},{prop:"userName",label:"收件人",minWidth:50},{prop:"mobileNo",label:"联系方式",minWidth:120},{prop:"address",label:"地址",minWidth:200},{prop:"commodityName",label:"兑换商品",minWidth:100},{prop:"cardIdNumber",label:"消耗卡片",minWidth:80},{prop:"createdAt",label:"创建时间",minWidth:120},{prop:"state",label:"状态",minWidth:60,formatter:function(e){return 10==e.state?"未发货":"已发货"}},{prop:"fieldName1",label:"操作",minWidth:80,isElementui:!0,slotName:"operation"}],searchbar:[{text:"手机号码：",value:"mobileNo",placeholder:"请输入手机号码"}]}}},methods:{goDetail:function(e){this.$router.push("/order/detail?id="+e)},deliver:function(e){var t=this;Object(n["b"])({bizId:e}).then((function(){t.$message.success("发货成功"),t.$refs.tables.refresh()}))},showdeliver:function(e){var t=this;this.$confirm("确认发货吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deliver(e)}))}}},r=o,s=i("2877"),u=Object(s["a"])(r,l,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0cf320.85333f20.js.map