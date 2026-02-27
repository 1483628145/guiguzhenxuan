<template>
  <div>
    <!-- 左侧菜单- 静态 -->

    <template v-for="item in userStore.menuRouters" :key="item.path">
      <el-menu-item index="1" v-if="item.children">
        <template #title>
          {{ item.meta?.title }}
        </template>
      </el-menu-item>
    </template>

    <!-- 左侧菜单 - 动态生成 -->
  </div>
</template>

<script setup lang="ts">
// 拿到路由表信息
import { useUserStore } from '@/stores/modules/user'

const userStore = useUserStore()

console.log(userStore.menuRouters)
</script>

<style scoped lang="scss"></style>
