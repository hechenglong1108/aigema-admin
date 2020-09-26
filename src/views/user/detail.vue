<template>
  <div class="wrapper">
    <h5 class="title">卡片信息</h5>
    <div class="info">
      <div>
        <img :src="url" alt="">
      </div>
      <span>{{name}}</span>
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
      name: '',
      url: '',
      tableData: {
        url: '',
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
    this.userId = this.$route.query.userId
    this.name = this.$route.query.name
    this.url = this.$route.query.url
    this.tableData.url = '/ana/admin/customer/card/page?userId=' + this.userId
    this.$refs.tables.refresh()
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
  margin-bottom: 30px;
  margin-top: 30px;
}
.info div{
  margin-right: 20px;
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;
}
.info div img{
  width: 100%;
}
</style>