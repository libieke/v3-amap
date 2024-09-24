<template>
  <div class="p-b-40 min-content">
    <Banner/>
    <div class="flex-s p-l-20 p-r-20 margin-bottom-20">
      <RankingList/>
      <Trajectory/>
    </div>
    <div class="flex-s p-l-20 p-r-20">
      <Echarts/>
      <Echarts2/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Banner from './components/banner.vue';
import RankingList from './components/RankingList.vue';
import Trajectory from './components/trajectory.vue';
import Echarts from './components/echarts.vue';
import Echarts2 from './components/echarts2.vue';
</script>
