<template>
  <div class="wrapper">
    <h5 class="title">订单详情</h5>

    <div class="item">
      <span>订单号：{{info.bizNo}}</span>
    </div>
    <div class="item">
      <span>收货人：{{info.userName}}</span>
    </div>
    <div class="item">
      <span>收货人电话：{{info.mobileNo}}</span>
    </div>
    <div class="item">
      <span>收货人地址：{{info.address}}</span>
    </div>
    <div class="item">
      <span>商品名称：{{info.commodityName}}</span>
    </div>
    <div class="item">
      <span>实际消耗卡片：{{info.cardIdNumber}}</span>
    </div>
    <div class="item">
      <span>兑换时间：{{info.createdAt}}</span>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import {getOrderDetail} from '@/api/shop'
export default {
  components:{},
  props:{},
  data(){
    return {
      id:'',
      info:{}
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
    this.id = this.$route.query.id
    getOrderDetail({bizId: this.id}).then(res => {
      this.info = res.data
    })
  }
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