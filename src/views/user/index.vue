<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: hcl
 * @Date: 2020-09-20 16:06:55
 * @LastEditors: hcl
 * @LastEditTime: 2020-09-28 15:36:16
-->
<template>
  <div class="wrapper">
    <ktable :tableConfig="tableData" ref="tables" >
      <template slot="name" slot-scope="vals">
        <div>
          <img style="width:60px" :src="vals.rows.wxImageUrl" alt />
        </div>
      </template>
      <template slot="number" slot-scope="vals">
        <div>
          <el-button type="text" @click="goDetail(vals.rows.userId,vals.rows.wxName,vals.rows.wxImageUrl)">{{vals.rows.cardNumber}}</el-button>
        </div>
      </template>
      <template slot="operation" slot-scope="vals">
        <div>
          <el-button type="text" @click="operationNum(vals.rows.userId)">发放嘟点</el-button>
        </div>
      </template>
    </ktable>

    <el-dialog
      title="发放嘟点"
      :visible.sync="dialogVisible"
      class="dialog"
      width="100%">
      <el-form ref="form"  label-width="80px">
        <el-form-item label="嘟点">
            <el-input-number v-model="num" :min="1" :max="1000000" label=""></el-input-number>
        </el-form-item>
        <el-form-item label="">
             
        </el-form-item>
      </el-form> 
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="rewardFaction">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import {rewardFaction} from '@/api/shop'
export default {
  data() {
    return {
      dialogVisible: false,
      num: '',
      userId: '',
      tableData: {
        url: '/ana/admin/customer/page',
        toobar: [
          
        ],
        paging: true,
        columns: [
          {
            prop: 'wxImageUrl',
            label: '用户头像',
            minWidth: 160,
            isElementui: true,
            slotName: 'name'
          },
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
            prop: 'sex',
            label: '性别',
            minWidth: 160
          },
          {
            prop: 'totalFraction',
            label: '剩余嘟点总数',
            minWidth: 120
          },
          //  {
          //   prop: 'cardNumber',
          //   label: '卡片张数',
          //   minWidth: 160,
          //   isElementui: true,
          //   slotName: 'number'
          // },
          {
            prop: 'createdAt',
            label: '注册时间',
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
    rewardFaction() {
      rewardFaction({userId: this.userId, faction: this.num}).then(() => {
        this.$message.success('发放成功')
        this.dialogVisible = false
        this.$refs.tables.refresh()
      })
    },
    operationNum(userId) {
      this.userId = userId
      this.dialogVisible = true
    },
    goDetail(userId, name, url) {
      this.$router.push('/user/detail?userId=' + userId + '&name=' + name + '&url=' + url)
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
  .dialog{
    width: 400px;
  }
</style>
