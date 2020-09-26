<template>
  <div class="wrapper">
    <ktable :tableConfig="tableData" ref="tables" >
      <template slot="name" slot-scope="vals">
        <div>
          <img style="width:60px" :src="baseUrl + '/ana/admin/image/view?imageId=' +vals.rows.shrinkImageId" alt />
        </div>
      </template>

      <template slot="operation" slot-scope="vals">
        <div>
          <el-button type="text" @click="edit(vals.rows.commodityId)">修改</el-button>
           <el-button v-if="vals.rows.state == 1" type="text" @click="offShelf(0,vals.rows.commodityId)">下架</el-button>
           <el-button v-if="vals.rows.state == 0" type="text" @click="offShelf(1,vals.rows.commodityId)">上架</el-button>
        </div>
      </template>
    </ktable>
  </div>
</template>

<script type="text/ecmascript-6">
import {offShelf} from '@/api/shop'
export default {
  data() {
    let _inThis = this
    return {
      tableData: {
        url: '/ana/admin/commodity/page',
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
            prop: 'commodityId',
            label: '编号',
            minWidth: 200
          },
          {
            prop: 'commodityName',
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
            value: 'commodityName',
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
    edit(id) {
      this.$router.push('/goods/add?id=' + id)
    },
    // 下架 state:0:下架1：上架
    offShelf(state,id) {
      let str = state == 0 ? '确认下架此商品吗？' : '确认上架此商品吗？'
      this.$confirm(str, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          offShelf({
            commodityId: id,
            state
          }).then(() => {
            this.$message.success('操作成功')
            this.$refs.tables.refresh()
          })
        })
    },
    getSearch() {
      console.log(this.$refs.tables.getSearchData())
    }
  }
}
</script>
