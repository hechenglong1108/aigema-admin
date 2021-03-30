<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: hcl
 * @Date: 2020-05-12 19:46:58
 * @LastEditors: hcl
 * @LastEditTime: 2020-12-09 20:11:30
-->
<template>
  <div class="aside-content">
    <div ref="wrapper" class="aside-menu">
      <div class="aside-logo">
        <img class="logo-img" src="/static/img/logo.png" alt />
      </div>
      <el-menu
        :default-active="activeRoute"
        class="el-menu-vertical-demo"
        text-color="#fff"
        active-text-color="#fff"
        background-color="#011429"
        :router="true"
      >
      <el-menu-item index="/banner">
          <!-- <i class="iconfont iconfont-right el-icon-picture"></i> -->
          <span>banner管理</span>
        </el-menu-item>
        <el-menu-item index="/user">
          <!-- <i class="iconfont iconfont-right el-icon-user-solid"></i> -->
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/goods">
          <!-- <i class="iconfont iconfont-right el-icon-goods"></i> -->
          <span>商品管理</span>
        </el-menu-item>
        <el-menu-item index="/order">
          <!-- <i class="iconfont iconfont-right el-icon-s-order"></i> -->
          <span>订单管理</span>
        </el-menu-item>
        <el-menu-item index="/luckDraw">
          <!-- <i class="iconfont iconfont-right el-icon-s-order"></i> -->
          <span>抽奖记录</span>
        </el-menu-item>
        <el-menu-item index="/prize">
          <!-- <i class="iconfont iconfont-right el-icon-s-order"></i> -->
          <span>奖品管理</span>
        </el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
// 引入滚动条插件
import PerfectScrollbar from 'perfect-scrollbar'
export default {
  name: 'leftNav',
  data() {
    return {
      activeRoute: ''
    }
  },
  watch: {
    // 监听路由 获取当前路由
    '$route': {
      handler() {
        this.activeRoute = (this.$route.meta && this.$route.meta.active) || this.$route.path
      },
      immediate: true
    }
  },

  mounted() {
    // 初始化滚动条
    let wrapper = this.$refs.wrapper
    new PerfectScrollbar(wrapper, {
      wheelPropagation: false
    })
  }
}
</script>
<style lang="less" scope>
.iconfont-right {
  margin-right: 5px;
}
</style>