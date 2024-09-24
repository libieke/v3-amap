<template>
  <div class="banner-wrap">
    <div class="banner">
      <dl class="banner-list h-100p">
        <dt>
          <h3 class="font-24 m-b-20">应用实时观察台</h3>
          <Select
              ref="select"
              v-model:value="value1"
              style="width: 70px"
              @focus="focus"
              @change="handleChange"
          >
            <SelectOption value="jack">当日</SelectOption>
            <SelectOption value="lucy">昨日</SelectOption>
            <SelectOption value="disabled">前日</SelectOption>
          </Select>
        </dt>
        <dd>
          <h3 class="font-36">29785</h3>
          <p class="font-18">总访问量</p>
          <small class="tag">较昨日上升 987</small>
        </dd>
        <dd>
          <h3 class="font-36">12</h3>
          <p class="font-18">总上架数</p>
          <small class="tag">较上月上升 22</small>
        </dd>
        <dd>
          <h3 class="font-36">678</h3>
          <p class="font-18">总活跃用户</p>
          <small class="tag">较昨日上升 987</small>
        </dd>

        <dd>
          <h3 class="font-36">16</h3>
          <p class="font-18">总实名注册人数</p>
          <small class="tag">较昨日上升 987</small>
        </dd>
      </dl>
    </div>
  </div>

</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { Select, SelectOption } from "ant-design-vue";
  const value1 = ref('jack');
  const focus = () => {
    console.log('focus');
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
</script>

<style scoped lang="scss">
.banner-wrap{
  padding: 20px;
  .banner {
    height: 166px;
    background: linear-gradient(90deg, #0B53DB 0%, #1A64EF 100%);
    border-radius: 8px;
  }
  .banner-list{
    display: flex;
    justify-content: space-between;
    color: white;
    dt{
      width: 16%;
      background: linear-gradient(270deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%);

      :deep(.ant-select){
        .ant-select-selector{
          background: transparent;
          color: white;
          border-radius:16px;
        }
        .ant-select-arrow{
          color: white;
        }
      }
    }
    dd{
      width: 21%;
      &:before{
        display: block;
        content: '';
        width: 1px;
        height: 70px;
        background: rgba(255, 255, 255, 0.20);
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -35px;
      }
    }
    dt,dd{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      flex-direction: column;
      position: relative;
    }
    .tag{
      position: relative;
      border-radius: 4px;
      background: #00B595;
      display: flex;
      padding: 8px;
      margin-top: 10px;

      &:before{
        display: block;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: -6px;
        left: 50%;
        transform: translateX(-50%);
        border-top: none;
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
        border-bottom: 6px solid #00B595;
      }
    }
  }
}

</style>
