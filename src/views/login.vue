<template>
  <div class="login">

    <div class="contain">
      <div class="logo">
        <img src="/static/img/agm2.png" alt="">
      </div>
      <div class="form">
        <h5>Hello!欢迎登录</h5>
        <el-form ref="form"  label-width="0">
          <el-form-item class="form-item" label="">
            <el-input v-model="name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="">
            <el-input v-model="pass" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="">
              <el-button type="primary" class="login-btn" @click="login">登录</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
    
  </div>
</template>
<script>
import {login} from '@/api/shop'
export default {
  data() {
    return {
      name: '',
      pass: ''
    }
  },
  methods:{
    
    login() {
      let _data = {
        account: this.name,
        password: this.pass
      }
      login(_data).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scope>
.login{
  width: 100%;
  height: 100vh;
  background: url('/static/img/bg.png') no-repeat;
  background-size: 100%;
  background-size: cover;
  overflow: hidden;
}
.logo{
  width: 200px;
  margin-top: 30px;
  margin-left: 30px;
}
.form{
  width: 300px;
  height: 360px;
  box-shadow: #ddd 0px 0px 30px 5px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  overflow: hidden;
  h5{
    text-align: center;
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  .form-item{
    width: 240px;
    margin: 15px auto;
    .login-btn{
      width:240px;
      margin-top: 50px;
    }
  }
}

</style>
