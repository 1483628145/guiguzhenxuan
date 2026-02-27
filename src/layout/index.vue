<template>
  <div class="container">
    <!-- 左侧导航 -->
    <div class="layout-slider">1</div>
    <!-- 顶部导航 -->
    <div class="layout-topnav">2</div>
    <!-- 内容区 -->
    <div class="layout-content">3</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background-color: pink;

  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
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
