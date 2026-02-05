<script setup lang="ts">
import HelloDemo from '@/views/HelloDemo.vue'

</script>

<template>
  <div>Hello Vue3</div>
  <el-button type="primary">
    全局按钮
  </el-button>
  <HelloDemo>1</HelloDemo>
  <SvgIcon name="home" size="20" />

  <div class="text">
    测试全局变量
  </div>
</template>

<style scoped lang="scss">
.text {
  width: 100px;
  height: 100px;
  background-color: $base-menu-background;
  color: red;

  &:hover {
    background-color: blue;
  }
}
</style>