<template>
  <div class="dashboard">
    <div class="error-tips" v-if="isError">
      <div v-if="isError && !isChorme" class="friendTips flex-h flex-vc" ref="friendTips">
        <span class="flex1 flex-h flex-hc flex-vc">
          友情提示：您的浏览器不是推荐版本，访问时可能达不到预期效果(最佳为
          <a target="_blank" href="https://www.google.cn/chrome/">谷歌Google Chrome浏览器</a>，建议更换)
        </span>
        <span class="closeTips" @click="setTipsCookie">x</span>
      </div>
      <div v-show="isError && isOffline" class="offline-tips">
        <span class="closeTips" @click="closeOffline">×</span>
      </div>
    </div>

    <el-container>
      <el-aside :width="!isCollapse ? '150px' : '64px'">
        <LeftNav :class="{'error-leftNav': isError}"></LeftNav>
      </el-aside>
      <el-container :class="{'error-container': isError}">
        <el-header :style="!isCollapse ? 'left: 150px' : 'left: 64px'">
          <TopHead></TopHead>
        </el-header>
        <el-main :style="isError ? 'min-height: calc(100vh - 120px)' : 'min-height: calc(100vh - 60px)'">
          <div class="main-info">
            <slot name="mainView"></slot>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// // 左侧导航组件
import LeftNav from './leftNav/index'
// 头部组件
import TopHead from './topHead/index'

// 引入cookies
import cookies from 'js-cookie'

export default {
  name: 'dashBoard',
  data() {
    return {
      isShowHelp: 0, // 帮助中心是否显示
      subList: [], // 当前子路由集合
      isError: false,
      isChorme: true, // 是否是谷歌浏览器
      cookieTips: '',
      isOffline: false, // 是否断网了
      navData: this.$router.options.routes // 获取路由数据
    }
  },

  computed: {
    isCollapse() {
        return this.$store.getters.isCollapse
    }
  },

  watch: {

  },

  created() {
    this.getTipsCookie()
    window.addEventListener('online', () => {
      this.isError = false
      this.isOffline = false
    })
    window.addEventListener('offline', () => {
      this.isError = true
      this.isOffline = true
    })
  },

  mounted() {
    this.isChrome()
  },

  methods: {
    // 判断是够是谷歌，是就隐藏提示横条
    isChrome() {
      if (navigator.userAgent.indexOf('Chrome') === -1) {
        this.isError = true
        this.isChorme = false
      }
    },

    // 点击关闭设置 cookie
    setTipsCookie() {
      this.isError = false
      this.isChorme = true
    },

    // 关闭断网提示
    closeOffline() {
      this.isError = this.cookieTips !== ''
      this.isOffline = false
    },

    // 获取 cookie
    getTipsCookie() {
      if (navigator.userAgent.indexOf('Chrome') === -1) {
        let getCookie = cookies.get('topTips')
        if (getCookie === 'topTips') {
          this.cookieTips = 'topTips'
        } else {
          localStorage.setItem('topTips', '')
          this.cookieTips = ''
        }
      }
    }
  },
  components: {
    TopHead,
    LeftNav
  }
}
</script>

<style lang="less" scoped>
.error-tips {
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 199;
  .friendTips {
    background: url('/static/img/tipsbgc.jpg') center center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    font-size: 16px;
    color: #fff;
    a {
      color: #fff;
    }
  }
  .offline-tips {
    background: url('/static/img/offline-bg.png') center center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .closeTips {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 22px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    margin-right: 50px;
    cursor: pointer;
  }
  .closeTips:hover {
    background-color: rgba(150, 150, 150, 0.5);
  }
}
.error-leftNav {
  top: 60px !important;
}
.error-container {
  position: absolute;
  top: 60px !important;
  left: 110px;
  width: calc(100% - 110px);
}
.error-subRoute {
  margin-top: 61px;
}
// 修改默认样式
.aside-content .el-menu-item {
  text-align: left;
  padding: 0 15px !important;
  background-color: #001529 !important;
  &.is-active {
    background-color: #1890ff !important;
  }
}
.sub-card {
  .active {
    color: #333 !important;
    font-weight: 700;
  }
  .el-card__body {
    text-align: left;
    padding: 0;
  }
}
.main-info {
  // 滚动条
  .el-table__body-wrapper::-webkit-scrollbar {
    width: 6px; // 横向滚动条
    height: 8px; // 纵向滚动条 必写
    // cursor: pointer;
  }
  .el-table__body-wrapper::-moz-scrollbar {
    width: 6px; // 横向滚动条
    height: 8px; // 纵向滚动条 必写
    // cursor: pointer;
  }
  .el-table--scrollable-x .el-table__body-wrapper {
    cursor: context-menu;
  }
  // 滚动条的滑块
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
  }
  .el-table__body-wrapper::-moz-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
  }
  .el-table__fixed-right {
    bottom: 8px;
    height: auto !important;
  }
  .el-table__fixed::before,
  .el-table__fixed-right::before {
    height: 0;
    background-color: #fff;
  }
  // 范围选择器中间的文字样式重置
  .el-date-editor .el-range-separator {
    width: 24px !important;
  }
  // number类型输入框input[type="number"]
  .el-input__inner[type='number']::-webkit-outer-spin-button,
  .el-input__inner[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
    border: 0;
  }
  // 重置富文本字数显示位置
  .el-textarea .el-input__count {
    bottom: -32px;
    background: transparent;
  }
}
</style>