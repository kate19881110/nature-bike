import React, { useEffect, useState, useRef } from "react";
import * as echarts from "echarts";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";

function BarLineMixTrend({
  title, // 圖表標題
  triggerType, // 提示框
  color, // 顏色: trend 圖資料的顏色
  xAxisStyle, // x 軸樣式，進行版面排版
  xAxisType, // x 軸資料類型，決定資料量很多時重疊樣式設定
  xAxisData, // ! x 軸資料，是必填欄位
  yAxisType, // y軸的類型：決定單軸還是雙軸
  yAxisData,
  yAxisUnit, // label formatter
  trendName, // 圖表名稱
  seriesType,
  data, // ! Trend 圖資料，為必填欄位
  nameList,
  dataList,
}) {
  const initChartId = useRef(1);

  const handleSeries = () => {
    const seriesList = [];
    if (seriesType === "pie") {
      const pieDataList = [];
      dataList.map((item, index) => {
        pieDataList.push({
          value: item,
          name: nameList[index],
        });
      });

      seriesList.push({
        type: seriesType,
        radius: ["20%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: pieDataList,
      });
    } else {
      trendName.map((item, index) => {
        seriesList.push({
          name: item,
          type: seriesType,
          data: data[index],
        });
      });
    }

    return seriesList;
  };

  const createChart = () => {
    const countRef = initChartId.current;
    const myChart = echarts.init(countRef);

    const options = {
      title: {
        text: title,
      },
      tooltip: {
        trigger: triggerType,
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      color,
      grid: xAxisStyle,
      xAxis: {
        type: xAxisType,
        data: xAxisData,
      },
      yAxis: {
        type: yAxisType,
        data: yAxisData,
        axisLabel: {
          formatter: yAxisUnit,
        },
      },
      series: handleSeries(),
    };
    myChart.clear();
    myChart.setOption(options);
  };

  useEffect(() => {
    createChart();
  }, []);

  return <div ref={initChartId} style={{ width: "500px", height: "500px" }} />;
}
export default BarLineMixTrend;
