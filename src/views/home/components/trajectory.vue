<template>
  <div class="trajectory-wrap">
    <div class="trajectory-title flex-s">
      <span class="title">
        <span class="font-18 bold">即将上架</span>
      </span>

    </div>
    <div class="trajectory-box">
      <Timeline>
        <TimelineItem color="green" v-for="(i,k) in list" :key="k">
          <h3 class="font-16 normal margin-bottom-5">
            <span class="green margin-right-5">上架时间</span>
            <span>2023-05-12 12:00:00</span>
          </h3>
          <div class="bf flex-s">
            <div class="icon">
              <img :src="i.icon" alt="">
            </div>
            <div class="icon-r">
                <div class="flex-s flex-a margin-bottom-10">
                  <img class="icon" src="https://test.elongcom.com/dongtai-one-phone/temporary/1.png" alt="">
                  <div class="title">
                    <p class="font-16 nowrap">东台两制</p>
                    <p class="gray9 nowrap">农资 |  农药零差</p>
                  </div>
                  <div class="btn">
                    <Button type="primary" :disabled="i.ti">
                      <span v-if="i.ti">已提醒</span>
                      <span v-else>提醒我</span>
                    </Button>
                  </div>
                </div>
                <p class="text-line3 gray6">
                  "东台两制"小程序是为推进东台市化肥农药实名制购买定额制使用试点而专门打造的农资购买平台。该小程序专为广大农业从业者定制
                </p>
            </div>
          </div>
        </TimelineItem>
      </Timeline>

    </div>
  </div>

</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Timeline, TimelineItem, Button } from 'ant-design-vue';
import {demoApi} from "@/api/home";
interface listItem {
  icon: string;
  ti: boolean;
}
const list = ref<listItem[]>([
  { icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/q1.png', ti:false},
  { icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/q2.png', ti:true},
  { icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/q3.png', ti:true},
  { icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/q3.png', ti:true},
  { icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/q2.png', ti:true},
]);
const getList = async () => {
  const data = await demoApi({
    itemId: '0hsr1-n8sgf0-00emb',
    current: 1,
    size: 8
  });
  console.log(data);
};
const init = () => {
  // getList();
};
onMounted(init);
</script>


<style scoped lang="scss">
.trajectory-wrap{
  border: 1px solid #dddddd;
  width: 420px;
  border-radius: 8px;
  box-shadow: 0 6px 8px 0 rgba(178, 179, 182, 0.25);

  .trajectory-title{
    background: linear-gradient(90deg, #D7F6E0 0%, rgba(215, 246, 224, 0.00) 100%);
    padding: 12px 12px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    .title{
      color: #111;
      display: inline-block;
      padding: 0 8px;
      position: relative;


      &:after{
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        height: 10px;
        background: #96E2AB;
        left: 0;
        bottom: 0;
        z-index: 1;
      }

      .font-18{
        position: relative;
        z-index: 2;
        color: #119D30;
      }
    }
  }

  .trajectory-box{
    padding: 20px 20px 0;

    .bf{
      padding: 8px;
      border-radius: 4px;
      background: #F5F5F5;
      height: 156px;

      .icon{
        width: 100px;
        height: 140px;
        img{
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }
      }

      .icon-r{
        width: calc(100% - 115px);

        .icon{
          display: block;
          width: 42px;
          height: 42px;
          border: 0;
        }
        .title{
          width: 92px;
        }
      }
    }
  }
}

</style>
