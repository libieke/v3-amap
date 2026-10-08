<template>
  <div class="header flex-a min-content">
    <div class="relative w-100p">
      <router-link to="/" class="logo">
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
  min-height: 60px;
  padding: 10px 20px;
  box-shadow: 0 6px 8px 0 rgba(178, 179, 182, 0.25);

  .relative{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .logo{
      position: absolute;
      left: 0;
      top: 4px;
    }
  }

  .InputSearch{
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    order: 2;
  }
}

@media screen and (min-width: 768px) {
  .header{
    .relative{
      justify-content: flex-end;
      gap: 0;

      .logo{
        position: absolute;
        left: 0;
        top: 4px;
      }
    }

    .InputSearch{
      width: 400px;
      margin: 0 auto;
      order: 0;
    }
  }
}
</style>