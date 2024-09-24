<template>
  <div class="echarts-wrap">
    <div class="title flex-s flex-a">
      <b class="font-16">近30天应用日活变化趋势</b>
      <div class="flex-a">
        <span class="margin-right-10">应用名称</span>
        <Select
            ref="select"
            v-model:value="value1"
            style="width: 180px"
            @change="handleChange"
        >
          <SelectOption value="jack">东台两制</SelectOption>
          <SelectOption value="lucy">东台两制2</SelectOption>
          <SelectOption value="disabled">东台两制3</SelectOption>
        </Select>
      </div>
    </div>
    <div class="echarts" ref="indexChart">

    </div>
  </div>

</template>
<script setup lang="ts">
interface DataType {
  title: string;
  value: string
}
import * as echarts from 'echarts';
import { Select, SelectOption } from "ant-design-vue";
import { ref, onMounted } from 'vue';
import { demoApi } from "@/api/home";
const value1 = ref('jack');
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const indexChart= ref<any>(null);

const getList = ( ) => {
  demoApi({
    itemId: '0hsr1-n8sgf0-00emb',
    current: 1,
    size: 8
  }).then(({ data, success }) => {
    if(success && data.length) {
      initEcharts(data);
    }
  });
};
const list:DataType[] = [
  {
    title: "2024-01-01",
    value: "140",
  },
  {
    title: "2024-01-02",
    value: "150",
  },
  {
    title: "2024-01-03",
    value: "122",
  },
  {
    title: "2024-01-04",
    value: "171",
  },
  {
    title: "2024-01-05",
    value: "160",
  },
  {
    title: "2024-01-06",
    value: "261",
  },
  {
    title: "2024-01-07",
    value: "255",
  },
];

const initData = (list:DataType[]) => {
  const xAxisData = list.map((item) => item.title);
  const yAxisData = list.map((item) => item.value);
  return {
    title: {
      text: "人数",
      left: 10,
      top: 0,
      textStyle: {
        color: "#666",
        fontWeight: 400,
        fontFamily: "Microsoft YaHei",
        fontSize: 12,
        lineHeight: 12,
      },
    },
    backgroundColor: "transparent",
    legend: {
      show: false,
      icon: "rect",
      itemWidth: 14,
      itemHeight: 10,
      itemGap: 36,
      textStyle: {
        fontSize: 12,
        color: "#14AF36",
      },
      padding: [10, 5, 5, 5],
      data: [
        {
          name: "已完成",
          icon: "rect",
          textStyle: {
            fontSize: 12,
            color: "#14AF36",
          },
        },
        {
          name: "未完成",
          icon: "rect",
          textStyle: {
            fontSize: 12,
            color: "#6388B0",
          },
        },
      ],
      selectedMode: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff",
        },
      },
      textStyle: {
        color: "#fff",
      },
      backgroundColor: "rgba(0, 0, 0, 0.95)", //设置背景颜色
      formatter: "{b}：{c}",
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 20,
      top: 40,
      containLabel: true,
    },
    xAxis: {
      inverse: false,
      type: "category",
      data: xAxisData,
      axisPointer: {
        type: "shadow",
      },
      axisLabel: {
        color: "#999",
        fontSize: 12,
        interval: 0,
        rotate: 0,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#E7E7E7",
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      name: "",
      nameTextStyle: {
        color: "#fff",
        fontSize: 14,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "rgba(45, 67, 119, 0.8)",
        },
      },
      min: 0,
      axisLabel: {
        show: true,
        color: "#7591B2",
        fontSize: 12,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: "#E7E7E7",
          type: "dashed",
        },
      },
    },
    series: [
      {
        data: yAxisData,
        name: "",
        type: "line",
        barWidth: "20px",
        itemStyle: {
          color: "#14AF36",
          borderRadius: [2, 2, 0, 0],
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(20, 175, 54, .4)',
            },
            {
              offset: 0.5,
              color: 'rgba(20, 175, 54, .2)',
            },
            {
              offset: 1,
              color: "transparent",
            },
          ]),
        },
        label: {
          show: false,
          position: "top",
          fontSize: 12,
          color: "#7591B2",
          offset: [0, -5],
          formatter: "{c}",
        },
      },
    ],
  };
};


const initEcharts =  async (data) =>{
  const barChart = echarts.init(indexChart.value);
  barChart.setOption(initData(data));
  window.addEventListener('resize', () => {
    barChart.resize();
  });
};

const init = () => {
   // getList();
  initEcharts(list);
};
onMounted(init);
</script>


<style scoped lang="scss">
.echarts-wrap{
  border: 1px solid #dddddd;
  width: calc(50% - 10px);
  border-radius: 8px;
  box-shadow: 0 6px 8px 0 rgba(178, 179, 182, 0.25);
  height: 360px;
  .title{
    padding: 15px 20px;
  }

  .echarts{
    height: 290px;
  }
}

</style>
