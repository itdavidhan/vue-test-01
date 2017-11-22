<template>
  <div id="chart-cont" class="chart">
  </div>
</template>

<script>

import echarts from 'echarts'

export default {
  name: 'chart',
  data() {
    return {
      barOption: {
        color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '10%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis : [
                {
                    name: '书籍名称',
                    nameLocation: 'center',
                    nameGap: '30',
                    type : 'category',
                    data : ['白夜行', '嫌疑人x的献身', '恶意', '秘密', '变身'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name: '推荐指数',
                    nameLocation: 'center',
                    nameGap: '30'
                }
            ],
            series : [
                {
                    name:'推荐指数',
                    type:'bar',
                    barWidth: '60%',
                    data:[100, 100, 99, 90, 60]
                }
            ]
      }
    }
  },
  mounted() {
    var bar = echarts.init(document.querySelector('#chart-cont'));
    bar.setOption(this.barOption);
  }
}
</script>

<style>
.chart {
     width: 100%;
     height: 300px;
 }
</style>