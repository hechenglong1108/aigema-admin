<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: hcl
 * @Date: 2020-09-20 16:06:55
 * @LastEditors: hcl
 * @LastEditTime: 2021-03-31 21:33:50
-->
<template>
  <div class="wrapper">
    <h5>奖品设置</h5>
    <el-table
    :data="tableData"
    :border="true"
    style="width: 540px">
    <el-table-column
      prop="date"
      label="奖品类型"
      width="180">
      <template slot-scope="scope">
         <el-select v-model="scope.row.awardType" placeholder="请选择">
          <el-option label="兑换奖励" :value="2">
          </el-option>
          <el-option label="嘟点奖励" :value="1">
          </el-option>
          <el-option label="谢谢惠顾" :value="0">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="奖品名称"
      width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.context" size="mini" placeholder="请输入奖品名称"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="中奖概率"
      width="180">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.probability" size="mini" :min="0" :max="1" step="0.01" label="请输入中奖概率" :precision="4"></el-input-number>
      </template>
    </el-table-column>
  </el-table>

    <el-button style="margin-top: 30px" @click="save" type="primary">保存</el-button>

  </div>
</template>

<script type="text/ecmascript-6">
import {getPrize, editPrize} from '@/api/shop'
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: { 
    getData() {
      getPrize().then(res => {
        this.tableData = res.rows
      })
    },
    // 保存奖品
    save() {
      let awardLevelBOList = this.tableData.map(ele => {
        return {
          level: ele.level,
          context: ele.context,
          fraction: ele.fraction,
          probability: ele.probability,
          awardType: ele.awardType
        }
      })
      let data = {
        awardLevelBOList
      }
      editPrize(data).then(() => {
        this.$message.success('操作成功')
      })
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
