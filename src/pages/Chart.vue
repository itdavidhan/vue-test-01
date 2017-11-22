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
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
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
     height: 200px;
     /*padding: 20px;*/
 }
</style>