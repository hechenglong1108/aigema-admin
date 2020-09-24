<template>
  <div class="flex-h flex-hb tophead">
    <div class="isCollapse">
      <!-- <i :class="isCollapse ? 'el-icon-s-unfold': 'el-icon-s-fold'" @click="switchIsCollapse"></i> -->
    </div>
    <div>
      <i class="el-icon-switch-button exit-btn" @click="exitLogin"></i>
    </div>
  </div>
</template>

<script>
// 引入下载弹框
// 引入接口
import { userLogout } from '@/api/shop'
export default {
  name: 'topHead',
  computed: {
    // 获取店铺信息
    shopInfo() {
      return this.$store.getters.shopInfo
    },
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  },
  methods: {
    exitLogin() {
      this.$confirm('是否确认此操作?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          userLogout().then(res => {
              if (res.code == 200) {
                this.$message.success('操作成功')
                this.$router.push('/login')
              }
            })
        }).catch(() => { })
    }
  }
}
</script>
<style lang="less" scope="">
.exit-btn{
  cursor: pointer;
}
</style>