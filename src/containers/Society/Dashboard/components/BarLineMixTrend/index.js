import React, { useEffect } from "react";
import * as echarts from "echarts";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import { LegendComponent, GridComponent } from "echarts/components";
import {
  YAXIS,
} from "../../../../../utils/trendConst";

function BarLineMixTrend({
  title, // 圖表標題
  color, // 顏色: trend 圖資料的顏色
  xAxisStyle, // x 軸樣式，進行版面排版
  xAxisType, // x 軸資料類型，決定資料量很多時重疊樣式設定
  xAxisData, // ! x 軸資料，是必填欄位
  yAxisType, // y軸的類型：決定單軸還是雙軸
  yAxisData,
  yAxisStyle, // y 軸的樣式，包含單位名稱
  trendName, // 圖表名稱
  seriesType,
  data, // ! Trend 圖資料，為必填欄位
}) {
  const formatYAxis = () => {
    const formatAxisLabel = (type, value) => {
      switch (type) {
        case YAXIS.formatterType.percent: {
          return `${value}%`;
        }
        case YAXIS.formatterType.kAmount: {
          return value === 0 ? 0 : `${(value / 1000).toLocaleString()} K`;
        }
        default: {
          return value.toLocaleString();
        }
      }
    };
    if (yAxisType === YAXIS.type.biaxial) {
      return [
        {
          name: yAxisStyle.name.left,
          type: "value",
          axisLabel: {
            formatter: (value) =>
              formatAxisLabel(yAxisStyle.formatterType.left, value),
          },
        },
        {
          name: yAxisStyle.name.right,
          type: "value",
          axisLabel: {
            formatter: (value) =>
              formatAxisLabel(yAxisStyle.formatterType.right, value),
          },
        },
      ];
    }
    return [
      {
        name: yAxisStyle.name.left,
        type: "value",
        axisLabel: {
          formatter: (value) =>
            formatAxisLabel(yAxisStyle.formatterType.left, value),
        },
      },
    ];
  };

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

  const initChart = () => {
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
      },
      series: handleSeries(),
    };
    const element = document.getElementById("main");
    const myChart = echarts.init(element);
    myChart.setOption(options);
  };

  useEffect(() => {
    initChart();
  }, []);

  return <div id="main" style={{ width: '100%', height: '100%' }} />;
}
export default BarLineMixTrend;
