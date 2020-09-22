<template>
  <div class="wrapper">
    <h5 class="title">卡片信息</h5>
    <div class="info">
      <div>
        <img src="" alt="">
      </div>
      <span>你要</span>
    </div>

    <el-table
      :data="list"
      border
      style="width:360px"
    >
      <el-table-column
        prop="date"
        label="卡片内容"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="获得时间"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components:{},
  props:{},
  data(){
    return {
      list: []
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style  scoped>
.title{
  line-height: 40px;
  background: #ddd;
  padding-left: 20px;
}
.info{
  display: flex;
  align-items: center;
}
</style>