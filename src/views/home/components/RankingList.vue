<template>
  <div class="Rank-wrap">
    <div class="Rank-title flex-s">
      <div class="relative">
        <span class="title m-r-10">
           <span class="font-18 bold">排行榜</span>
        </span>
        <span class="gray9">数据统计11:28 15:00~至今</span>
      </div>
      <p class="gray9">共计 <b class="blue font-18">6</b> 个小程序 </p>

    </div>
    <div class="Rank-box">
      <Table
          :columns="config.columns"
          :row-key="record => record.key"
          :data-source="config.list"
          :pagination="config.page"
          :loading="config.loading"
      >
        <template #bodyCell="{ column, record, index }">
          <template v-if="column.title === '排名'">
            <b :class="filters(index)">{{index+1}}</b>
          </template>
          <template v-else-if="column.dataIndex === 'name'">
            <div class="flex-s flex-a customized">
              <div class="flex-s code-left">
                <div class="icon">
                  <img :src="record.icon" alt="">
                </div>
                <div class="text-left p-t-5">
                  <p class="nowrap font-16 m-b-2">{{record.name}}</p>
                  <p class="nowrap gray9" :title="record.des">{{record.des}}</p>
                </div>
              </div>
              <div class="code">
                <div class="con">
                  <img class="w-100p" src="/src/assets/images/temporary/tem1.png" alt="">
                </div>
                <QrcodeOutlined class="m-r-5" />
                <span>查看二维码</span>
              </div>
            </div>
          </template>
        </template>
      </Table>
    </div>
  </div>

</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { Table } from 'ant-design-vue';
import { QrcodeOutlined } from '@ant-design/icons-vue';
const columns = [
  {
    title: '排名',
    align: 'center',
    class: 'nowrap',
    width: 70
  },
  {
    title: '应用',
    dataIndex: 'name',
    width: '60%'
  },
  {
    title: '注册用户',
    dataIndex: 'age',
    align: 'center',
    class: 'nowrap',
    customRender: ({ text })=>{
      return  text+'人';
    }
  },
  {
    title: '月活跃用户',
    dataIndex: 'address',
    align: 'center',
    class: 'nowrap',
    customRender: ({ text })=>{
      return  text+'人';
    }
  },
  {
    title: '总访问量',
    dataIndex: 'time',
    align: 'center',
    class: 'nowrap',
    customRender: ({ text })=>{
      return  text+'人';
    }
  },
];
const config = reactive({
  columns:columns,
  list: [],
  loading: false,
  page: {
    hideOnSinglePage:true,
    total: 0,
    current: 1
  }
});


const dataSource = [
  {
    key: '1',
    name: '东农两制',
    age: 2978,
    address: 2978,
    time: 28,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/1.png',
    des: '小程序为种植大户提供在线购买农资、农资送货上门以及我的额度查询等功能，实现便捷高效的农资采购体验。'
  },
  {
    key: '2',
    name: '东农两制（销售员端）',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/2.png',
    des: '小程序专为农资店铺销售员打造，实现店铺订单的高效管理，同时为销售员提供便捷的代客户购买农资服务。'
  },

  {
    key: '3',
    name: '畜禽粪肥利用（种植户端）',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/6.png',
    des: '小程序为种植大户提供快速找到粪肥经纪人，轻松搜寻所需有机肥等服务。'
  },
  {
    key: '4',
    name: '畜禽粪肥利用（养殖户端）',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/5.png',
    des: '小程序为养殖户提供畜牧废弃物管理方案，涵盖养殖场管理、粪池预警、找粪肥经纪人、粪肥处理记录等功能。'
  },
  {
    key: '5',
    name: '畜禽粪肥利用（经纪人端）',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/3.png',
    des: '小程序协助畜牧废弃物经纪人进行畜牧粪肥的回收和处理，涵盖找养殖户、找种植户、畜牧粪肥供需对接、工作记录等功能。'
  },
  {
    key: '6',
    name: '畜禽粪肥利用（管理端）',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/4.png',
    des: '小程序为畜牧粪肥监管人员提供预警消息提醒及处理功能，包括养殖场粪池预警及车辆闯入预警，确保养殖场粪便废弃物的及时处理。'
  },
  {
    key: '7',
    name: '乡村治理积分制（村民端）',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/9.png',
    des: '便捷查询积分规则和获取情况，同时提供清单办事流程，让村民更了解治理积分系统，助力村庄共建。'
  },
  {
    key: '8',
    name: '乡村治理积分制（村管理端）',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/7.png',
    des: '村管理员可以查看乡村家庭户和党员积分公示、积分兑换情况，以便有效管理乡村积分体系。'
  },
  {
    key: '9',
    name: '乡村治理积分制（镇管理端）',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/8.png',
    des: '小程序为乡村镇管理员提供各村积分、清单的公示情况。'
  },
  {
    key: '10',
    name: '农田基础设施管护',
    age: 2978,
    address: 2978,
    time: 78,
    icon: 'https://test.elongcom.com/dongtai-one-phone/temporary/10.png',
    des: '小程序为高标准农田建设的管护人员提供基础设施管护功能，能实时查看设施基本信息及管护状态。'
  }
];
const init = () => {
  config.list = dataSource;
};

const filters = (data:number):string => {
  if(data===0){
    return 'red';
  }else if (data===1){
    return 'orange';
  }else if (data===2){
    return 'yellow';
  }else {
    return '';
  }
};
onMounted(init);
</script>


<style scoped lang="scss">
.Rank-wrap{
  border: 1px solid #dddddd;
  width: calc(100% - 440px);
  border-radius: 8px;
  box-shadow: 0 6px 8px 0 rgba(178, 179, 182, 0.25);

  .Rank-title{
    border-bottom: 1px solid #EBDAC2;
    background: linear-gradient(90deg, #FEFAF4 0%, #FFF 100%);
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
        background: #FBD6A3;
        left: 0;
        bottom: 0;
        z-index: 1;
      }

      .font-18{
        position: relative;
        z-index: 2;
      }
    }
  }

  .code-left{
    padding: 3px 0;
    width: calc(100% - 130px);

    .icon{
      width: 60px;
      height: 60px;
      border-radius: 3px;
      img{
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
    .text-left{
      width: calc(100% - 70px);
    }
  }
  .code{
    position: relative;
    display: inline-block;
    padding: 8px 10px;
    background: rgba(53, 113, 235, 0.1);
    height: 40px;
    color: #3571EB;
    border-radius: 5px;
    .con{
      display: none;
      position: absolute;
      width: 150px;
      height: 150px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      bottom: 40px;
      left: -20px;
      background: white;
      padding: 10px;
    }

    &:hover{
      .con{
        display: block;
      }
    }
  }

  :deep(.ant-table){
    .ant-table-tbody{
      >tr:last-child{
        .ant-table-cell{
          border-bottom: none;
        }
      }
    }
  }


  .customized{
    max-width: 430px;
  }
  @media screen and (min-width: 1280px) {
    .customized{
      max-width: calc((100vw - 460px) / 1.8);
    }
  }


}

</style>
