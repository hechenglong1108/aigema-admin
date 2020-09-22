<template>
  <div class="wrapper">
    <ktable :tableConfig="tableData" ref="tables" @selections="selection">
      <template slot="name" slot-scope="vals">
        <div>
          <img :src="vals.rows.img" alt />
        </div>
      </template>
      <template slot="number" slot-scope="vals">
        <div>
          <el-button type="text" @click="goDetail(vals.rows)">{{vals.rows.number}}</el-button>
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
            prop: 'fieldName',
            label: '用户头像',
            minWidth: 160,
            isElementui: true,
            slotName: 'name'
          },
          {
            prop: 'alarmField',
            label: '昵称',
            minWidth: 200
          },
          {
            prop: 'appName',
            label: '姓名',
            minWidth: 200
          },
          {
            prop: 'interfaceType',
            label: '性别',
            minWidth: 160,
            formatter: function(row) {
              return row.alarmFieldType === 0 ? '男' : '女'
            }
          },
           {
            prop: 'interfaceType',
            label: '卡片张数',
            minWidth: 160,
            slotName: 'number'
          },
          {
            prop: 'createdAt',
            label: '注册时间',
            minWidth: 160
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
      this.$router.push('/user/detail')
    },
    selection() {

    },
    getSearch() {
      console.log(this.$refs.tables.getSearchData())
    }
  }
}
</script>
