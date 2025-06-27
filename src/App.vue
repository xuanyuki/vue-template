<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView />
    <div class="" />
  </ElConfigProvider>
</template>

<script setup>
  import zhCn from 'element-plus/es/locale/lang/zh-cn'
  import { ElConfigProvider } from 'element-plus'
</script>
