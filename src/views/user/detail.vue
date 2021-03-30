<template>
  <div class="wrapper">
    <h5 class="title">嘟点明细</h5>
    <!-- <div class="info">
      <div>
        <img :src="url" alt="">
      </div>
      <span>{{name}}</span>
    </div> -->

    <ktable :tableConfig="tableData" ref="tables" >
      <template slot="operation" slot-scope="vals">
        <div v-if="vals.rows.cardId == 12">
          <el-button type="text" @click="withdraw(vals.rows.cid)">撤回</el-button>
        </div>
      </template>
      
    </ktable>
  </div>
</template>

<script type="text/ecmascript-6">
import {withdraw} from '@/api/shop'
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
          },
          {
            prop: 'operation',
            label: '操作',
            minWidth: 80,
            isElementui: true,
            slotName: 'operation'
          }
        ]
      }
    }
  },
  watch:{},
  computed:{},
  methods:{
    withdraw(id) {
      this.$confirm('是否确认撤回？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        withdraw({cid: id}).then(() => {
        this.$message.success('操作成功')
        this.$refs.tables.refresh()
        })
      }).catch(() => {})
      
    }
  },
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