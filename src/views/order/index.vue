<template>
  <div class="wrapper">
    <ktable :tableConfig="tableData" ref="tables" >
       <template slot="operation" slot-scope="vals">
        <div>
          <el-button type="text" v-if="vals.rows.state == 10" @click="showdeliver(vals.rows.bizId)">发货</el-button>
          <el-button type="text" v-if="vals.rows.state == 20" @click="editDeliver(vals.rows)">修改物流信息</el-button>
          <el-button type="text" @click="goDetail(vals.rows.bizId)">详情</el-button>
        </div>
      </template>
    </ktable>

    <el-dialog
        title="发货"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <el-form ref="form"  label-width="80px">
        <el-form-item label="物流公司">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="物流单号">
          <el-input v-model="number"></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deliver">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import { deliver, editlogistics } from './../../api/shop'
export default {
  data() {
    var that = this
    return {
      dialogVisible: false,
      name:"",
      number:'',
      id:'',
      isEdit: false,
      tableData: {
        url: '/ana/admin/biz/page',
        toobar: [
          {
            label:"导出",
            icon:'el-icon-upload',
            handler: function () {
                window.open(that.baseUrl+'/ana/admin/customer/export')
            }
          }
        ],
        paging: true,
        columns: [
           {
            prop: 'bizNo',
            label: '订单编号',
            minWidth: 180
          },
          {
            prop: 'addrUserName',
            label: '收件人',
            minWidth: 100
          },
          {
            prop: 'userName',
            label: '昵称',
            minWidth: 100
          },
          {
            prop: 'addrMobileNo',
            label: '联系方式',
            minWidth: 150
          },
          {
            prop: 'address',
            label: '地址',
            minWidth: 200
          },
          {
            prop: 'commodityName',
            label: '兑换商品',
            minWidth: 100
          },
          {
            prop: 'commodityNumber',
            label: '兑换商品数量',
            minWidth: 100
          },
          {
            prop: 'useFraction',
            label: '消耗嘟点',
            minWidth: 80
          },
          {
            prop: 'createdAt',
            label: '创建时间',
            minWidth: 120
          },
          {
            prop: 'state',
            label: '状态',
            minWidth: 60,
            formatter: function(row) {
              return row.state == 10 ? '未发货' : '已发货'
            }
          },
          {
            prop: 'fieldName1',
            label: '操作',
            minWidth: 160,
            isElementui: true,
            slotName: 'operation'
          }
        ],
        searchbar: [

          {
            text: '手机号码：',
            value: 'mobileNo',
            placeholder: '请输入手机号码'
          },
          {
            text: '昵称：',
            value: 'userName',
            placeholder: '请输入昵称'
          }
        ]
      }
    }
  },
  methods: {
    goDetail(id) {
      this.$router.push('/order/detail?id=' + id)
    },
    // 修改物流信息
    editDeliver(row) {
      this.dialogVisible = true
      this.id = row.bizId
      this.name = row.logisticsName
      this.number = row.logisticsNo
      this.isEdit = true
    },
    deliver(){
      let data = {
        logisticsName: this.name,
        logisticsNo: this.number,
        bizId: this.id
      }
      if (this.isEdit) {
        editlogistics(data).then(() => {
          this.dialogVisible = false
          this.$message.success('操作成功')
          this.$refs.tables.refresh()
        })
      } else {
        deliver(data).then(() => {
            this.dialogVisible = false
            this.$message.success('发货成功')
            this.$refs.tables.refresh()
        })
      }
      
    },
    showdeliver(id) {
      this.dialogVisible = true
      this.isEdit = false
      this.id = id
      this.name = ''
      this.number = ''
    }
  }
}
</script>
