<template>
  <div class="wrapper">
    <h5 class="title">订单详情</h5>

    <div class="item">
      <span>订单号：</span>
    </div>
    <div class="item">
      <span>收货人：</span>
    </div>
    <div class="item">
      <span>收货人电话：</span>
    </div>
    <div class="item">
      <span>收货人地址：</span>
    </div>
    <div class="item">
      <span>商品名称：</span>
    </div>
    <div class="item">
      <span>实际消耗卡片：</span>
    </div>
    <div class="item">
      <span>兑换时间：</span>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.title{
  line-height: 40px;
  background: #ddd;
  padding-left: 20px;
}
.item{
  margin-left: 20px;
  margin-top: 8px;
}
</style>