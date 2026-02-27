<template>
  <div class="container">
    <!-- 左侧导航 -->
    <div class="layout-slider">
      <logo></logo>
      <el-scrollbar class="scrollbar">
        <!-- 左侧菜单- 静态 -->
        <el-menu
          class="el-menu-vertical-demo"
          background-color="$base-menu-background"
          text-color="#fff"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <el-sub-menu index="3">
            <template #title>权限管理</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="4">商品管理</el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-topnav">2</div>
    <!-- 内容区 -->
    <div class="layout-content">3</div>
  </div>
</template>

<script setup lang="ts">
import logo from './components/logo.vue'
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  // background-color: pink;

  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    color: white;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
    }
  }

  .layout-topnav {
    height: $base-tabbar-height;
    width: calc(100% - $base-menu-width);
    position: fixed;
    top: 0px;
    left: calc($base-menu-width);
    background-color: red;
  }

  .layout-content {
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    position: fixed;
    top: calc($base-tabbar-height);
    left: calc($base-menu-width);
    background-color: blue;
    padding: 20px;
    overflow: auto;
  }
}
</style>
