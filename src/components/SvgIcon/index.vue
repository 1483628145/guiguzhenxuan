<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  name: string
  prefix?: string
  size?: number | string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  size: 16,
  color: 'currentColor',
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const sizePx = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size
)
</script>

<template>
  <svg
    class="svg-icon"
    :style="{ width: sizePx, height: sizePx, color: props.color }"
    aria-hidden="true"
  >
    <use :href="symbolId" />
  </svg>
</template>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
