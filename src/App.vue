<script setup lang="ts">
import HelloDemo from '@/views/HelloDemo.vue'

// 测试环境变量是否能拿到
console.log(import.meta.env.VITE_SERVER);
</script>

<template>
  <div>Hello Vue3</div>
  <el-button type="primary">
    全局按钮
  </el-button>
  <HelloDemo>1</HelloDemo>
</template>

<style scoped lang="scss"></style>