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
    </ktable>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
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
            prop: 'userName',
            label: '姓名',
            minWidth: 200
          },
          {
            prop: 'sex',
            label: '性别',
            minWidth: 160
          },
           {
            prop: 'cardNumber',
            label: '卡片张数',
            minWidth: 160,
            isElementui: true,
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
            value: 'mobileNo',
            placeholder: '请输入手机号码'
          }
        ]
      }
    }
  },
  methods: {
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
