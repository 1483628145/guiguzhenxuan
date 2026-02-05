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
</template>

<style scoped lang="scss"></style>