<template>
  <div class="layout">
    <BaseHeader />
    <div style="min-height: calc(100vh - 380px)">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import  BaseHeader  from '@/components/headerComponent/index.vue';
</script>
