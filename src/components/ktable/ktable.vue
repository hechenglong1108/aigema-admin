<template>
  <div>
    <!-- 搜索框 -->
    <ul class="searchbar" id="searchbarbox" v-if="searchbar && searchbar.length != 0">
      <li class="searchbar-item" v-for="(item,index) in searchbar" :key="index">
        <span class="searchbar-lable">{{item.text}}</span>

        <el-date-picker
          v-if="item.timeSlot"
          class="date_picker"
          v-model="item.inputValue1"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          size="small"
          style="line-height:20px"
          end-placeholder="结束日期"
        ></el-date-picker>

        <el-select v-else-if="item.isselect" v-model="item.inputValue" filterable clearable size="small">
          <template v-for="(select,index) in item.data">
            <el-option
              v-if="select.names"
              :key="'a'+index"
              :label="select.name"
              :value="select.id"
              v-html="select.names"
            ></el-option>
            <el-option v-else :label="select.text" :key="'a'+index" :value="select.val"></el-option>
          </template>
        </el-select>
        <el-input
          v-else
          class="custom-input"
          v-model="item.inputValue"
          clearable
          size="small"
          show-word-limit
          :maxlength="item.maxlength && item.maxlength"
          :placeholder="item.placeholder ? item.placeholder : '请输入'"
        ></el-input>
      </li>
      <li class="searchbar-item">
        <el-button type="primary" @click="goSearch" size="mini" v-if="!tableConfig.isSerch">搜索</el-button>
        <el-button
          v-for="(item,index) in buttons"
          type="primary"
          size="mini"
          @click="item.hander"
          :key="index"
        >{{item.text}}</el-button>
      </li>
    </ul>

    <div class="footToobar" ref="footToobar" v-if="!!title || toobar.length > 0">
      <div>
        <span
          v-for="(toobars,index) in toobar"
          :key="'toobar'+index"
          :class="toobars.class+' btn-box'"
          style="margin-right:10px"
        >
          <el-button type="primary" size="mini" :icon="toobars.icon" @click="toobars.handler">{{toobars.label}}</el-button>
        </span>
      </div>
    </div>

    <!--表格栏-->

    <el-table
      :data="records"
      :highlight-current-row="highlightCurrentRow"
      @select="selectionChange"
      @select-all="selectionChange"
      v-loading="loading"
      :size="size"
      :align="align"
      ref="multipleTable"
      style="width:100%;"
      :header-row-class-name="tableConfig.headerClass"
      :stripe="tableConfig.isStripe"
      :header-cell-style="{background:'#f2f2f2',color:'#606266'}"
    >
      <el-table-column v-if="selection" type="selection" header-align="center" align="center" label="#" width="40"></el-table-column>
      <template v-for="column in columns">
        <el-table-column
          v-if="column.isHtml"
          :header-align="!column.headerAlign ? 'center' : column.headerAlign"
          :align="!column.align ? 'center' : column.align"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :formatter="column.formatter"
          :key="column.prop"
          :show-overflow-tooltip="true"
          :sortable="!column.sortable ? false : column.sortable"
        >
          <template slot-scope="scope">
            <span
              style="margin-right: 10px"
              v-html="column.formatter(scope.row)"
              v-if="typeof column.formatter(scope.row) == 'string'"
            ></span>

            <span
              v-else
              style="margin-right: 10px"
              v-for="(formatters,index) in column.formatter(scope.row)"
              v-html="formatters.html"
              @click="formatters.hander(scope.$index, scope.row)"
              :key="index"
            ></span>
          </template>
        </el-table-column>

        <!-- 支持渲染elementui的代码插入 -->
        <el-table-column
          v-else-if="column.isElementui"
          :header-align="!column.headerAlign ? 'center' : column.headerAlign"
          :align="!column.align ? 'center' : column.align"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :formatter="column.formatter"
          :show-overflow-tooltip="true"
          :key="column.prop"
        >
          <template slot-scope="scope">
            <slot :name="column.slotName" :datas="records" :rows="scope.row" :indexs="scope.$index"></slot>
          </template>
        </el-table-column>

        <!-- 下拉按钮 -->
        <el-table-column
          v-else-if="column.dropdownBtn"
          :header-align="!column.headerAlign ? 'center' : column.headerAlign"
          :align="!column.align ? 'center' : column.align"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :formatter="column.formatter"
          :show-overflow-tooltip="true"
          :key="column.prop"
        >
          <template slot-scope="scope">
            <el-dropdown>
              <el-button type="primary" class="dropdownBtnBoxs">
                {{column.label}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <div
                  v-for="(formatters,index) in column.formatter(scope.row)"
                  :key="'formatters'+index"
                  @click="formatters.hander(scope.$index, scope.row)"
                >
                  <el-dropdown-item>
                    <span :class="formatters.class">
                      <el-button class="dropdownBtns" type="text" v-html="formatters.html"></el-button>
                    </span>
                  </el-dropdown-item>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>

        <!--可编辑表格，并支持绑定市区焦点事件-->
        <el-table-column
          v-else-if="column.isEdit"
          :header-align="!column.headerAlign ? 'center' : column.headerAlign"
          :align="!column.align ? 'center' : column.align"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :key="column.prop"
          :show-overflow-tooltip="true"
          :type="column.type"
        >
          <template slot-scope="scope">
            <template v-if="column.disabled && column.disabled(scope.row[column.prop],scope.row)">
              <el-input
                :disabled="true"
                size="mini"
                style="width:100px"
                v-model="scope.row[column.prop]"
                @blur="column.blur(scope.row[column.prop],scope.row)"
              ></el-input>
            </template>
            <template v-else>
              <el-input
                v-model="scope.row[column.prop]"
                :style="'width:'+(column.inputWidth ? column.inputWidth: 60)+'px'"
                size="mini"
                @blur="column.blur(scope.row[column.prop],scope.row)"
              ></el-input>
            </template>
          </template>
        </el-table-column>
        <!--可编辑表格数字-->
        <el-table-column
          v-else-if="column.isEditNumber"
          :header-align="!column.headerAlign ? 'center' : column.headerAlign"
          :align="!column.align ? 'center' : column.align"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :key="column.prop"
          :type="column.type"
          :show-overflow-tooltip="true"
          :formatter="column.formatter"
        >
          <template slot-scope="scope">
            <el-input
              v-model="scope.row[column.prop]"
              type="number"
              :min="0"
              @blur="blurNmber"
              :placeholder="!column.placeholder ? '未设置' : column.placeholder"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :header-align="!column.headerAlign ? 'center' : column.headerAlign"
          :align="!column.align ? 'center' : column.align"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :key="column.prop"
          :type="column.type"
          :show-overflow-tooltip="true"
          :formatter="column.formatter"
          :sortable="!column.sortable ? false : column.sortable"
        >
          <!--:sortable="column.sortable==null?true:column.sortable"-->
        </el-table-column>
      </template>
    </el-table>
    <!--分页栏-->
    <div class="toolbar" style="padding:10px;" v-if="this.tableConfig.paging">
      <el-pagination
        layout="total, prev, pager, next, jumper"
        @current-change="refreshPageRequest"
        :current-page="current"
        :page-size="pagesize"
        :total="total"
        style="float:right;"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'
export default {
  name: 'Ktable',
  components: {},
  props: {
    tableConfig: Object, // 表格分页数据
    isDatas: {
      type: Boolean,
      default: false
    },
    datas: {},
    inputNumber: Array
  },
  data() {
    return {
      maxHeight: 520, // 表格最大高度
      border: false, // 是否显示边框
      stripe: true, /// / 是否显示斑马线
      highlightCurrentRow: false, // 是否高亮当前行
      showOverflowTooltip: true, // 是否单行显示
      size: 'min', // 尺寸样式
      align: 'left', // 文本对齐方式
      records: [], // 接口返回数据
      total: 0, // 数据总条数
      pageNum: 0, // 总共页数
      loading: true, // 加载标识
      selections: [], // 列表选中列
      selection: '',
      current: 1, // 当前也
      pagesize: 20, // 分页大小
      toobar: [], // 操作按钮
      buttons: [],
      columns: [], // 表头
      searchbar: [], // 搜索
      title: '',
      isExport: false,
      exportclass: '',
      selectionsList: [],
      isFirst: false,
      cityList: [],
      city: [],
      defaultParams: {
        label: 'name',
        value: 'id',
        children: 'child'
      }
    }
  },
  methods: {
    listExport() {
      var data = {}
      this.searchbar.forEach(item => {
        if (item.timeSlot) {
          if (!item.inputValue1) {
            data[item.value] = item.inputValue1[0] + '～' + item.inputValue1[1]
          }
        } else if (item.isCity) {
          if (this.city.length > 0) {
            data[item.value.province] = this.city[0]
            data[item.value.city] = this.city[1]
            data[item.value.area] = this.city[2]
          }
        } else {
          if (item.inputValue) {
            data[item.value] = item.inputValue
          }
        }
      })
      getList({ url: this.tableConfig.listExportUrl, data: data })
        .then(res => {
          if (res.code !== 2000) {
            this.$message.error(res.message)
          }
        })
    },

    // 失去焦点获取data
    blurNmber() {
      this.$emit('update:inputNumber', this.records)
    },
    // 获取地区数据
    getCity(_obj) {
      getList({ url: _obj.url, data: _obj.data }).then(res => {
        if (res.code * 1 == 2000) {
          this.cityList = res.data[_obj.dataName]
        }
      })
    },
    // 修改数据
    updateRecords(_index, _filed, _val) {
      this.records[_index][_filed] = _val
    },

    // 选中行发生改变
    selectionChange(selection) {
      this.selectionsList = selection
      var _isAll = false

      if (this.selectionsList.length == this.records.length) {
        _isAll = true
      } else {
        _isAll = false
      }
      this.$emit('selections', { selections: selection, isAll: _isAll })
    },
    // 全选
    allElection(_allElementsCheck) {
      if (_allElementsCheck) {
        this.records.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row, true)
        })
        this.selectionsList = this.records
        this.$emit('selections', {
          selections: this.selectionsList,
          isAll: true
        })
      } else {
        this.records.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row, false)
        })
        this.selectionsList = []
        this.$emit('selections', { selections: [], isAll: false })
      }
    },
    // _type:1---->第一页刷新
    refresh(_type) {
      if (_type == 1) {
        this.current = 1
      }
      this.search()
      this.$emit('selections', { selections: [], isAll: false })
    },
    isInteger(obj) {
      return obj % 1 === 0
    },
    // 换页刷新
    refreshPageRequest: function(pageNum) {
      this.current = pageNum
      this.search()
    },

    // 搜索栏动态获取的数据
    getSearch(_obj, _index) {
      let newList = []
      // var dataName = _obj.dataName ? _obj.dataName : "datalist";
      var _Promise = null
      if (_obj.type.toUpperCase() == 'GET') {
        _Promise = new Promise(resolve => {
          getList({ url: _obj.url, data: _obj.data })
            .then(res => {
              if (res.code * 1 == 200) {
                if (_obj.dataName) {
                  resolve(res.data[_obj.dataName])
                } else {
                  resolve(res.data)
                }
              }
            })
        })
      } else {
        _Promise = new Promise(resolve => {
          getList({ url: _obj.url, data: _obj.data })
            .then(res => {
              if (res.code * 1 == 200) {
                if (_obj.dataName) {
                  resolve(res.data[_obj.dataName])
                } else {
                  resolve(res.data)
                }
              }
            })
        })
      }
      _Promise.then(_list => {
        _list.forEach(item => {
          var obj = {}
          obj.text = item[_obj.text]
          obj.val = item[_obj.val]
          newList.push(obj)
        })
        this.$set(this.searchbar[_index], 'data', newList)
        // this.searchbar[_index].data = newList;
      })
    },
    // 重置
    resize() {
      this.searchbar.forEach(item => {
        item.inputValue = ''
        if (item.timeSlot) {
          item.inputValue1 = ''
          // item.inputValue2 = "";
        }
      })
    },
    goSearch() {
      this.current = 1
      this.search()
    },
    // 查询
    search() {
      this.loading = true
      var data = {}
      this.searchbar.forEach(item => {
        if (item.timeSlot) {
          if (item.inputValue1 && item.inputValue1.length) {
            data[item.value[0]] = item.inputValue1[0]
            data[item.value[1]] = item.inputValue1[1]
          }
        } else {
          if (item.inputValue !== undefined) {
            data[item.value] = item.inputValue
          }
        }
      })

      let _url = this.tableConfig.url
      if (!_url) {
        return
      }
      if (this.tableConfig.paging) {
        data.current = this.current
        data.size = this.pagesize
      }
      let _includeData = this.tableConfig.includeData
      getList({ url: _url, data: data }).then(res => {
        if (res.code * 1 == 200) {
          if (this.isDatas) {
            this.$emit('update:datas', res.data)
          }
          if (!_includeData) {
            this.records = res.rows
          } else {
            this.records = res.rows
          }

          this.loading = false
          this.total = res.total * 1

          let _pageNum = res.total / this.pagesize

          if (this.isInteger(_pageNum)) {
            this.pageNum = _pageNum
          } else {
            this.pageNum = parseInt(_pageNum) + 1
          }
        } else {
          if (this.isDatas) {
            this.$emit('update:datas', res)
            this.records = []
          }
          this.loading = false
          //                        this.$message.error(res.message ? res.message : '系统错误' )
        }
      })
    }
  },

  mounted() {
    if (!this.inputNumber) {
      this.refreshPageRequest(1)
    } else {
      this.records = this.inputNumber
      this.loading = false
    }
    this.tableConfig.paging = this.tableConfig.paging
      ? this.tableConfig.paging
      : false
    this.tableConfig.headerClass = !this.tableConfig.headerClass
      ? ''
      : this.tableConfig.headerClass
    // this.tableConfig.isBorder = !this.tableConfig.isBorder ? false : true;
    this.tableConfig.isStripe = !!this.tableConfig.isStripe
    this.toobar = this.tableConfig.toobar ? this.tableConfig.toobar : []
    this.buttons = this.tableConfig.buttons ? this.tableConfig.buttons : []
    this.isExport = this.tableConfig.isExport
      ? this.tableConfig.isExport
      : false

    this.exportclass = this.tableConfig.exportclass
      ? this.tableConfig.exportclass
      : ''

    this.selection = !this.tableConfig.selection
      ? this.tableConfig.selection
      : true

    this.columns = this.tableConfig.columns
    this.title = this.tableConfig.title
    this.searchbar = this.tableConfig.searchbar
      ? this.tableConfig.searchbar
      : []
    this.searchbar.forEach((item, index) => {
      if (item.ajax) {
        this.getSearch(item.ajax, index)
      }
      if (item.isCity) {
        this.defaultParams = item.defaultParams
        this.defaultParams.checkStrictly = true
        this.getCity(item.cityAjax, index)
      }
    })
  }
}
</script>

<style scoped>
#searchbarbox {
  display: flex;
  justify-content: flex-start;
}
.custom-input {
  width: 180px;
}
.footToobar {
  margin-bottom: 20px;
}
.searchbar {
  background-color: rgb(249, 250, 252);
  margin-bottom: 25px;
  padding-top: 10px;
  border-radius: 5px;
  flex-wrap: wrap;
  display: flex;
  padding-left: 20px;
}
.searchbar-item {
  padding-right: 20px;
  padding-bottom: 20px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
}
.searchbar-lable {
  margin-right: 5px;
}

.searchbar-btn {
  text-align: left;
  padding-left: 10px;
}
.g-form-box {
  overflow: hidden;
}
.el-form-item {
  float: left;
  margin-bottom: 10px;
  line-height: 40px;
}
.btn-box {
  margin-right: 15px;
}
.ktable_search {
  padding: 0 10px;
}
</style>