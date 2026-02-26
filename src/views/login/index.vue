<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/modules/user/index'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
// 获取当前时间
import { time } from '@/utils/time'

// 表单数据
const loginForm = ref({
  username: 'admin',
  password: '111111',
})

// user仓库
const userStore = useUserStore()

// 路由
let $router = useRouter()

// 登陆按钮是否正在加载
const loading = ref(false)

// 登陆按钮
const loginHandle = async () => {
  // 点击登陆时候出现加载状态
  loading.value = true
  try {
    // 成功后关闭加载状态
    loading.value = false
    // 请求成功 此时登陆成功
    await userStore.loginReq(loginForm.value)
    // 登陆成功跳转到主页
    $router.push('/')
    // 提示成功
    ElNotification({
      title: '登陆成功',
      message: `欢迎回来, ${time()}`,
      type: 'success',
    })
  } catch (error) {
    // 失败也关闭加载状态
    loading.value = false
    // 请求失败
    // 登陆失败提示失败信息
    ElNotification({
      title: '登陆失败',
      // 使用断言将类型配置位Error类型即可
      message: (error as Error).message,
      type: 'error',
    })
  }
}
</script>

<template>
  <div class="container">
    <!-- layout布局 -->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 表单 -->
        <el-form class="loginForm">
          <el-form-item>
            <h1>Hello</h1>
          </el-form-item>
          <el-form-item>
            <span>欢迎来到尚硅谷</span>
          </el-form-item>
          <el-form-item>
            <!-- 登陆用户名 -->
            <el-input
              v-model="loginForm.username"
              placeholder="请输入账户名"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <!-- 登陆密码 -->
            <el-input
              v-model="loginForm.password"
              show-password
              placeholder="请输入密码"
              :prefix-icon="Lock"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="loginBtn"
              type="primary"
              @click="loginHandle"
            >
              登陆
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.container {
  background: url('../../assets/images/background.jpg') no-repeat;
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
      width: 100%;
    }
  }
}
</style>
