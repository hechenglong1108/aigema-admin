<template>
  <div class="wrapper">
    <ktable :tableConfig="tableData" ref="tables" @selections="selection">
      <template slot="name" slot-scope="vals">
        <div>
          <img :src="vals.rows.img" alt />
        </div>
      </template>

      <template slot="operation" slot-scope="vals">
        <div>
          <el-button type="text" @click="edit(vals.rows)">修改</el-button>
           <el-button type="text" @click="offShelf(vals.rows)">下架</el-button>

        </div>
      </template>
    </ktable>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    let _inThis = this
    return {
      tableData: {
        url: '/coupon-center/activity/list?activityType=1',
        toobar: [
           {
                        label:"新增",
                        icon:'el-icon-plus',
                        handler: function () {
                            _inThis.add()
                        }
                    }
        ],
        paging: true,
        columns: [
          {
            prop: 'alarmField',
            label: '编号',
            minWidth: 200
          },
          {
            prop: 'alarmField',
            label: '商品名称',
            minWidth: 200
          },
          {
            prop: 'fieldName',
            label: '缩率图',
            minWidth: 160,
            isElementui: true,
            slotName: 'name'
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
            text: '商品名称：',
            value: 'createdUser',
            placeholder: '请输入商品名称'
          }
        ]
      }
    }
  },
  methods: {
    add() {
      this.$router.push('/goods/add')
    },
    // 
    edit() {

    },
    // 
    offShelf() {

    },
    getSearch() {
      console.log(this.$refs.tables.getSearchData())
    }
  }
}
</script>
