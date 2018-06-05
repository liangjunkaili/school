<template>
    <div>
        <Menu/>
        <div  class="Mychart">
            <div id="myChart" style="width: 50%;height:200px;float:left;"></div>
            <div id="pie" style="width: 50%;height:200px;float:right;"></div>
            <div id="line" style="width: 50%;height:200px;"></div>
        </div>
    </div>
</template>
<script>
import Menu from '@/pages/menu'
export default {
    mounted(){
        this.drawLine();
    },
    methods:{
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            let pie = this.$echarts.init(document.getElementById('pie'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
            pie.setOption({
                series: {
                    type: 'pie',
                    data: [
                        {name: 'A', value: 1212},
                        {name: 'B', value: 2323},
                        {name: 'C', value: 1919}
                    ]
                }
            });
            this.$echarts.init(document.getElementById('line')).setOption({
                title: {text: 'Line Chart'},
                tooltip: {},
                toolbox: {
                    feature: {
                        dataView: {},
                        saveAsImage: {
                            pixelRatio: 2
                        },
                        restore: {}
                    }
                },
                xAxis: {},
                yAxis: {},
                series: [{
                    type: 'line',
                    smooth: true,
                    data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
                }]
            });
        }
    },
    components:{
        Menu
    }
}
</script>
<style>
.Mychart{
    float: right;
    width: 80%;
}
</style>
