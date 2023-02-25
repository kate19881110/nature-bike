import React, { useEffect, useState, useRef } from "react";
import * as echarts from "echarts";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import { LegendComponent, GridComponent } from "echarts/components";
import {
  YAXIS,
} from "../../utils/trendConst";

function BarLineMixTrend({
  title, // 圖表標題
  color, // 顏色: trend 圖資料的顏色
  xAxisStyle, // x 軸樣式，進行版面排版
  xAxisType, // x 軸資料類型，決定資料量很多時重疊樣式設定
  xAxisData, // ! x 軸資料，是必填欄位
  yAxisType, // y軸的類型：決定單軸還是雙軸
  yAxisData,
  yAxisUnit, // label formatter
  yAxisStyle, // y 軸的樣式，包含單位名稱
  trendName, // 圖表名稱
  seriesType,
  data, // ! Trend 圖資料，為必填欄位
}) {
  const initChartId = useRef(1);

  const handleSeries = () => {
    const seriesList = [];

    trendName.map((item, index) => {
      seriesList.push({
        name: item,
        type: seriesType,
        data: data[index],
      });
    });
    return seriesList
  };

  const createChart = () => {
    const countRef = initChartId.current;
    const myChart = echarts.init(countRef);

    const options = {
      title: {
        text: title,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      color,
      grid: xAxisStyle,
      xAxis: {
        type: xAxisType,
        data: xAxisData
      },
      yAxis: {
        type: yAxisType,
        data: yAxisData,
        axisLabel: {
          formatter: yAxisUnit
        }
      },
      series: handleSeries(),
    };
    myChart.clear();
    myChart.setOption(options);
  };

  useEffect(() => {
    createChart();
  }, []);

  return <div ref={initChartId} style={{ width: '700px', height: '400px' }} />;
}
export default BarLineMixTrend;
