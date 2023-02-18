import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function LineBarChart() {
  const chartRef = useRef(null);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Expenses', 'Income'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'value',
      },
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    series: [
      {
        name: 'Income',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 302, 341, 374, 390, 450, 420],
      },
      {
        name: 'Expenses',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'left',
        },
        emphasis: {
          focus: 'series',
        },
        data: [-120, -132, -101, -134, -190, -230, -210],
      },
    ],
  };

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(option);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>男女年齡分布</h2>
      <div ref={chartRef} style={{ height: '400px' }} />
      <div>
        <p>男</p>
        <p>女</p>
      </div>
    </div>
  );
}

export default LineBarChart;
