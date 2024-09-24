<template>
  <ConfigProvider>
    <template #renderEmpty>
      <Empty description="暂无数据"/>
    </template>
    <RouterView></RouterView>
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Empty, ConfigProvider } from "ant-design-vue";
export default defineComponent({
  components: { Empty, ConfigProvider },
  name: 'App'
});
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
