<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue';

import { useUserStore } from '@/stores/modules/user/index';


const loginForm = ref({
  username: 'admin',
  password: '111111'
})

const userStore = useUserStore()

// 登陆按钮
const loginHandle = async () => {
  userStore.loginReq(loginForm.value)
  // 使用pinia发请求
  // let res = await reqLogin(loginForm.value)
  // 成功跳转到首页
  // console.log(res);
}
</script>

<template>
  <div class="container">
    <!-- layout布局 -->
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12">
        <!-- 表单 -->
        <el-form class="loginForm">
          <el-form-item>
            <h1>Hello</h1>
          </el-form-item>
          <el-form-item>
            <span>欢迎来到尚硅谷</span>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.username" placeholder="请输入账户名" :prefix-icon="User">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" show-password placeholder="请输入密码" :prefix-icon="Lock"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="loginBtn" type="primary" @click="loginHandle">登陆</el-button>
            <el-button class="loginBtn" type="primary">重置表单</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.container {
  background: url("../../assets/images/background.jpg") no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;

  .loginForm {
    margin-top: 200px;
    margin-left: 50px;
    width: 500px;
    padding: 30px;
    background: url('../../assets/images/login_form.png');

    h1 {
      font-size: 40px;
      color: white;
    }

    span {
      font-size: 16px;
    }

    .loginBtn {
      width: 100px;
    }
  }
}
</style>