<template>
  <div class="wrapper">
    <ktable :tableConfig="tableData" ref="tables" >
      <template slot="name" slot-scope="vals">
        <div>
          <img style="width:60px" :src="baseUrl + 'ana/admin/image/view?imageId=' +vals.rows.imgId" alt />
        </div>
      </template>

      <template slot="operation" slot-scope="vals">
        <div>
          <el-button v-if="vals.rows.status == 0" type="text" @click="offShelf(1, vals.rows.bannerId)">启用</el-button>
           <el-button v-else type="text" @click="offShelf(0, vals.rows.bannerId)">停用</el-button>
          <el-button type="text" @click="edit(vals.rows.bannerId)">修改</el-button>
           <el-button type="text" @click="deleteBanner(vals.rows.bannerId)">删除</el-button>
        </div>
      </template>
    </ktable>
  </div>
</template>

<script type="text/ecmascript-6">
import {editBannerStatus, deletebanner} from '@/api/shop'
export default {
  data() {
    let _inThis = this
    return {
      tableData: {
        url: '/ana/admin/banner/page',
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
            prop: 'sort',
            label: '排序',
            minWidth: 200
          },
          {
            prop: 'fieldName',
            label: 'banner',
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
        ]
      }
    }
  },
  methods: {
    add() {
      this.$router.push('/banner/add')
    },
    // 
    edit(id) {
      this.$router.push('/banner/add?id=' + id)
    },
    // 下架 state:0:下架1：上架
    offShelf(state,id) {
      let str = state == 0 ? '确认停用吗？' : '确认启用吗？'
      this.$confirm(str, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          editBannerStatus({
            bannerId: id,
            status: state
          }).then(() => {
            this.$message.success('操作成功')
            this.$refs.tables.refresh()
          })
        })
    },
    // 删除
    deleteBanner(id) {
      this.$confirm('确定删除吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deletebanner({
            bannerId: id,
          }).then(() => {
            this.$message.success('操作成功')
            this.$refs.tables.refresh()
          })
        })
    }
  }
}
</script>
