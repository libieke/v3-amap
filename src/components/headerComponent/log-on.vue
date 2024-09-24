
<template>
  <div class="log-on">
    <Badge count="5" dot class="gray9 pointer">
      <BellFilled />
    </Badge>
    <span class="border pointer gray9"> <UserOutlined/> 用户名称Admin</span>
    <span class="black">
      <a href="" class="flex-a">
         <HomeFilled class="m-r-5" />返回平台
      </a>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import { Badge } from 'ant-design-vue';
import { UserOutlined, BellFilled, HomeFilled } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    UserOutlined,
    Badge,
    BellFilled,
    HomeFilled
  },
  setup()  {

    return {
    };
  }
});
</script>
<style lang="scss" scoped>
.log-on{
  position: absolute;
  right: 0;
  top: 1px;

  .border{
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    padding: 0 10px;
    margin: 0 10px;
  }

  .black{
    display: inline-block;
    border-radius: 3px;
    background: rgba(41, 125, 224, 0.10);
    color: #297DE0;
    padding: 4px 10px 6px;
    font-size: 14px;
  }
}
</style>
