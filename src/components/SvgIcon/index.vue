<template>
  <svg :style="(width, height)">
    <!-- xlink:href 执行用哪一个图标，属性值务必#icon-图标名称 -->
    <!-- use标签可以设置颜色，也可以调整大小 -->
    <use :xlink:href="prefix + name" fill="red"></use>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
});
</script>
<style scoped lang="scss"></style>
