<template>
  <div>@符号测试</div>
  <!-- svg:图标外层容器节点，内部需要与use标签结合使用-->
  <svg style="width: 30px; height: 40px">
    <!-- xlink:href 执行用哪一个图标，属性值务必#icon-图标名称 -->
    <!-- use标签可以设置颜色，也可以调整大小 -->
    <use xlink:href="#icon-message" fill="red"></use>
  </svg>

  <hr />
  <p>使用封装后的 SvgIcon 组件</p>
  <SvgIcon name="message" />
  <SvgIcon name="vue" />
  <hr />
  <div class="card">
    <h1>全局样式测试</h1>
  </div>

  <hr>

  <div>
    <h1>router测试</h1>
    <router-view></router-view>
  </div>

</template>
<script setup lang="ts">
//封装全局组件注册后，不需要单独引入
//import SvgIcon from '@/components/SvgIcon/index.vue';
import { onMounted } from 'vue';
import { login } from '@/api/user';

onMounted(() => {
  login({ username: 'admin', password: '123456' });
});
</script>
<style scoped lang="scss">
.card {
  color: red;
}
</style>
