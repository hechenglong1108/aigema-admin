<template>
  <div class="wrapper">
    <ktable :tableConfig="tableData" ref="tables" @selections="selection">
       <template slot="operation" slot-scope="vals">
        <div>
          <el-button type="text" @click="edit(vals.rows)">发货</el-button>
           <el-button type="text" @click="goDetail(vals.rows)">详情</el-button>

        </div>
      </template>
    </ktable>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tableData: {
        url: '/coupon-center/activity/list?activityType=1',
        toobar: [
          
        ],
        paging: true,
        columns: [
           {
            prop: 'alarmField',
            label: '订单编号',
            minWidth: 200
          },
          {
            prop: 'alarmField',
            label: '收件人',
            minWidth: 200
          },
          {
            prop: 'alarmField',
            label: '联系方式',
            minWidth: 200
          },
          {
            prop: 'alarmField',
            label: '地址',
            minWidth: 200
          },
          {
            prop: 'alarmField',
            label: '兑换商品',
            minWidth: 200
          },
         
          {
            prop: 'alarmField',
            label: '消耗卡片',
            minWidth: 200
          },
          {
            prop: 'appName',
            label: '创建时间',
            minWidth: 200
          },
          {
            prop: 'interfaceType',
            label: '状态',
            minWidth: 160,
            formatter: function(row) {
              return row.alarmFieldType === 0 ? '男' : '女'
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
            value: 'createdUser',
            placeholder: '请输入手机号码'
          }
        ]
      }
    }
  },
  methods: {
    goDetail() {
      this.$router.push('/order/detail')
    }
  }
}
</script>
