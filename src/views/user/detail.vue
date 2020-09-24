<template>
  <div class="wrapper">
    <h5 class="title">卡片信息</h5>
    <div class="info">
      <div>
        <img src="" alt="">
      </div>
      <span>你要</span>
    </div>

    <ktable :tableConfig="tableData" ref="tables" >
      
    </ktable>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components:{},
  props:{},
  data(){
    return {
      userId: '',
      tableData: {
        url: '/ana/admin/customer/card/page',
        paging: true,
        columns: [
          {
            prop: 'cardName',
            label: '卡片内容',
            minWidth: 200
          },
          {
            prop: 'cardFraction',
            label: '分值',
            minWidth: 200
          },
           {
            prop: 'state',
            label: '状态',
            minWidth: 200,
            formatter:function (row,column,cellValue) {
              return cellValue == 1  ? "未使用" : '已使用'
           }
          },
          {
            prop: 'createdAt',
            label: '获得时间',
            minWidth: 200
          }
        ]
      }
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
    this.userId = this.$router.query.userId
    this.tableData.url = '/ana/admin/customer/card/page?userId=' + this.userId
  }
}
</script>
<style  scoped>
.title{
  line-height: 40px;
  background: #ddd;
  padding-left: 20px;
}
.info{
  display: flex;
  align-items: center;
}
</style>