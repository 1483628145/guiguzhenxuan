<template>
  <div class="logo">
    <img src="../../../public/logo.png" alt="" />
    <span>硅谷甄选平台</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  // background-color: pink;
  padding: 0 20px;
  img {
    width: 40px;
    height: 40px;
  }

  span {
    font-size: $base-logo-title-fontSize;
    color: white;
    margin-left: 20px;
  }
}
</style>
