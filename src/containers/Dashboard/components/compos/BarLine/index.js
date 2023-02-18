import React, { useEffect } from "react";
import * as echarts from 'echarts';
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import { LegendComponent, GridComponent } from "echarts/components";

function BarLine() {
  const initChart = () => {
    echarts.use([LegendComponent]);
    echarts.use([GridComponent]);
    const element = document.getElementById("main");
    const myChart = echarts.init(element);
    const options = {
      title: {
        text: `ECharts 圖`,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: "bar",
          data: [120, 200, 150, 80, 70, 110, 130],
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        },
      ],
    };
    myChart.setOption(options);
  };

  useEffect(() => {
    initChart();
  }, []);

  return <div id="main" style={{ width: 500, height: 500 }} />;
}
export default BarLine;
