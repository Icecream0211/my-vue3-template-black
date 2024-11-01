<template>
    <div>@符号测试</div>
    <!-- svg:图标外层容器节点，内部需要与use标签结合使用-->
    <svg style="width: 30px; height: 40px">
        <!-- xlink:href 执行用哪一个图标，属性值务必#icon-图标名称 -->
        <!-- use标签可以设置颜色，也可以调整大小 -->
        <use xlink:href="#icon-message" fill="red"></use>
    </svg>

    <hr>
    </hr>
    <p>
        使用封装后的 SvgIcon 组件
    </p>
    <SvgIcon name="message" />

</template>
<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'


</script>
<style scoped lang="scss"></style>
