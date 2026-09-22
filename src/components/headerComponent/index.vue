<template>
  <div class="header flex-a min-content">
    <div class="relative w-100p">
      <router-link to="/" class="logo">
        <!-- <img src="/src/assets/images/home/logo.png" alt=""> -->
      </router-link>
      <div class="InputSearch">
        <InputSearch
            v-model:value="value"
            placeholder="搜索应用名称"
            enter-button="查询"
            size="mini"
            @search="onSearch"
        />
      </div>
      <LogOn />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import { InputSearch } from 'ant-design-vue';
import LogOn from './log-on.vue';
export default defineComponent({
  components: {
    InputSearch,
    LogOn
  },
  setup()  {
    const value = ref<string>('');
    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    return {
      onSearch,
      value
    };
  }
});
</script>
<style lang="scss" scoped>
.header{
  background: #fff;
  height: 60px;
  padding: 10px 20px;
  box-shadow: 0 6px 8px 0 rgba(178, 179, 182, 0.25);

  .relative{
    position: relative;

    .logo{
      position: absolute;
      left: 0;
      top: 4px;
    }
  }

  .InputSearch{
    width: 400px;
    margin: 0 auto;
  }
}
</style>
