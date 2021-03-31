<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: hcl
 * @Date: 2020-09-20 16:06:55
 * @LastEditors: hcl
 * @LastEditTime: 2021-03-31 13:35:30
-->
<template>
  <div class="wrapper">
    <ktable :tableConfig="tableData" ref="tables" >
      <template slot="name" slot-scope="vals">
        <div>
          <img style="width:60px" :src="vals.rows.wxImageUrl" alt />
        </div>
      </template>
      <template slot="operation" slot-scope="vals">
        <div v-if="vals.rows.awardType == 2">
          <el-button type="text" @click="operationNum(vals.rows.id)">完成兑奖</el-button>
        </div>
      </template>
    </ktable>
  </div>
</template>

<script type="text/ecmascript-6">
import {editState} from '@/api/shop'
export default {
  data() {
    return {
      dialogVisible: false,
      num: '',
      userId: '',
      tableData: {
        url: '/ana/admin/award/log/page',
        toobar: [
          
        ],
        paging: true,
        columns: [
          {
            prop: 'wxName',
            label: '昵称',
            minWidth: 200
          },
           {
            prop: 'mobileNo',
            label: '手机号码',
            minWidth: 200
          },
          {
            prop: 'createdAt',
            label: '抽奖时间',
            minWidth: 160
          },
           {
            prop: 'desc',
            label: '获得奖品',
            minWidth: 160
          },
          {
            prop: 'operation',
            label: '操作',
            minWidth: 100,
            isElementui: true,
            slotName: 'operation'
          }
        ],
        searchbar: [
          {
            text: '手机号码：',
            value: 'mobileNo',
            placeholder: '请输入手机号码'
          }
        ]
      }
    }
  },
  methods: { 
    operationNum(id) {
      this.$confirm('确定完成兑奖操作', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          editState({
            id: id
          }).then(() => {
            this.$message.success('操作成功')
            this.$refs.tables.refresh()
          })
        })
    },
   
    selection() {

    },
    getSearch() {
      console.log(this.$refs.tables.getSearchData())
    }
  }
}
</script>
<style scope>
  .dialog-footer{
    text-align: center  !important;
    width: 100%;
    display: block;
  }
</style>
