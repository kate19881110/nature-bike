import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import moment from 'moment';
import {
  XAXIS,
  ROTATE,
  LABEL,
  COLOR,
  YAXIS,
  DATAZOOM,
  DATAFORMAT,
} from '@/utils/trendConst';

function BarLineMixTrend({
  echartStyle, // echart 樣式設定

  title, // 標題: 下載的圖片吃的檔名是以 title 作為命名
  color, // 顏色: trend 圖資料的顏色，預設為 globalColor

  isLegenedLineBreak, // 圖例能否換行，目前只支援換兩行並做分頁
  legendSliceNumber, // 上下兩行換行數量

  xAxisData, // ! x 軸資料，是必填欄位
  xAxisType, // x 軸資料類型，決定資料量很多時重疊樣式設定
  xAxisStyle, // x 軸樣式，進行版面排版
  xAxisFormatType, // 將 x 軸資料的 rawData 進行轉換，目前只有處理到 array 的轉換，如果資料格式是 object 請在外層先組好
  isClickXAxis, // x 軸是否能夠點擊，若可以點擊則會跳出彈窗，秀出 x 軸維度的資料

  yAxisType, // y軸的類型：決定單軸還是雙軸
  yAxisStyle, // y 軸的樣式，包含單位名稱, 單位format後的長相

  dataZoomType, // dataZoom 的類別：一次看全部，還是一次只能看部分
  dataZoomValueSpan, // 搭配 dataZoomType partial: 一次最多或最少可閱讀幾筆資料

  data, // ! Trend 圖資料，為必填欄位
  lineList, // line 的項目，放在這個陣列裡面的內容，如果有符合都會將資料畫成線圖
  lineStyle, // line 的樣式，放在這個物件裡面的陣列內容，如果所屬的資料屬性有命中相對應的陣列內容，就會畫出符合的線條類別
  dataFormatType, // 小數點客製化
  showLabel, // label 呈現內容的客製化
  showLabelStyle, // label 是否只要指定的單條線 ＆ label 是否只要標注特地的點
  labelQuantifierType, //  label 單位的客製化
  labelLayoutStyle, // label 拖曳的設定客製化

  isStack, // 圖型是否為堆疊圖
  isLoading, // 圖型是否正在載入

  openModal, // 打開彈窗，此 api 需搭配 useModal & isClickXAxis
}) {
  const [xAxisOption, setXAxisOption] = useState({});

  const formatQuantifier = (lineType) => {
    switch (labelQuantifierType) {
      case LABEL.quantifierType.percent: {
        return '%';
      }
      case LABEL.quantifierType.none: {
        return '';
      }
      default: {
        return lineType ? '%' : '';
      }
    }
  };

  const formatLegend = () => {
    const legendList = Object.keys(data);
    if (isLegenedLineBreak) {
      return [
        {
          orient: 'horizontal',
          data: legendList.slice(0, legendSliceNumber),
          bottom: '3%',
          type: 'scroll',
        },
        {
          orient: 'horizontal',
          data: legendList.slice(legendSliceNumber),
          bottom: '0%',
          type: 'scroll',
        },
      ];
    }
    return {
      data: legendList,
      bottom: '0', // 設為負數會下移，被容器遮蓋
      type: 'scroll',
    };
  };

  const formatXaxisLabel = (value) => {
    switch (xAxisFormatType) {
      case XAXIS.formatType['YYYY-W[th]']: {
        return moment(value).format('YYYY-W[th]');
      }
      case XAXIS.formatType['MM/DD']: {
        return moment(value).format('MM/DD');
      }
      case XAXIS.formatType['YYYY/MM/DD']: {
        return moment(value).format('YYYY/MM/DD');
      }
      case XAXIS.formatType['YYYY/MM']: {
        return moment(value).format('YYYY/MM');
      }
      default:
        return value;
    }
  };

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
          type: 'value',
          axisLabel: {
            formatter: (value) => formatAxisLabel(yAxisStyle.formatterType.left, value),
          },
        },
        {
          name: yAxisStyle.name.right,
          type: 'value',
          axisLabel: {
            formatter: (value) => formatAxisLabel(yAxisStyle.formatterType.right, value),
          },
        },
      ];
    }
    return [
      {
        name: yAxisStyle.name.left,
        type: 'value',
        axisLabel: {
          formatter: (value) => formatAxisLabel(yAxisStyle.formatterType.left, value),
        },
      },
    ];
  };

  const handleSeries = (legendData) => {
    const seriesList = [];
    for (const name of legendData) {
      const isLine = lineList.some((element) => name.includes(element)); // TODO 改成正則 (P3)

      const formatShowLabel = () => {
        switch (showLabel) {
          case LABEL.showLabel.all:
            return true;
          case LABEL.showLabel.hidden:
            return false;
          case LABEL.showLabel.singleSereis: {
            const firstElement = showLabelStyle.seriesList[0];
            return name === firstElement;
          }
          default: {
            return isLine;
          }
        }
      };

      const formatLabelPosition = (params) => {
        switch (showLabel) {
          case LABEL.showLabel.all: {
            return {
              align: 'center',
              verticalAlign: isLine ? 'bottom' : 'center',
              x: params.rect.width / 2 + params.rect.x,
              y: params.rect.y + params.rect.height / 2,
            };
          }
          default:
            return {
              x: params.rect.x,
              y: params.rect.y,
              align: 'center',
              verticalAlign: 'bottom',
            };
        }
      };

      const formatYaxisIndex = () => {
        if (yAxisType === YAXIS.type.singleAxis) {
          return 0;
        }
        return isLine ? 1 : 0;
      };

      const formatData = () => {
        switch (dataFormatType) {
          case DATAFORMAT.type.noDecimal: {
            // 需要去除小數點（進位方式：四捨五入)
            return data[`${name}`].map((item) => _.round(item));
          }
          case DATAFORMAT.type.twoDecimal: {
            // 需要保留小數點後兩位（進位方式：四捨五入)
            return data[`${name}`].map((item) => formatRound(item, 2));
          }
          default:
            // isLine 保留小數點後兩位，其餘去除小數點
            return data[`${name}`].map((item) => (isLine ? formatRound(item, 2) : Math.round(item)));
        }
      };

      seriesList.push({
        name,
        label: {
          show: formatShowLabel(),
          formatter: (e) => {
            if (typeof e.value === 'number') {
              return `${e.value.toLocaleString()}${formatQuantifier(isLine)}`;
            }
            // 針對單一線或柱狀圖只秀特定的 label，要跟後端談格式，如果要指定秀特定欄位，直接全回 raw Data
            if (
              showLabelStyle.hasFilter
              && name === showLabelStyle.seriesList[0]
            ) {
              const isColumnsFocus = showLabelStyle.dataList[0].filter(
                (col) => e.name === `[${col.name}]`,
              )[0]?.focus;
              return showLabel && isColumnsFocus
                ? `${e.value}${formatQuantifier(isLine)}`
                : '';
            }
            return `${Number(e.value).toLocaleString()}${formatQuantifier(
              isLine,
            )}`;
          },
        },
        labelLayout(params) {
          return {
            x: formatLabelPosition(params).x,
            y: formatLabelPosition(params).y,
            align: formatLabelPosition(params).align, // 'left', 'center', 'right'
            verticalAlign: formatLabelPosition(params).verticalAlign, // 'top', 'middle', 'bottom'.
            rotate: ROTATE.no,
            fontSize: labelLayoutStyle.fontSize,
            draggable: labelLayoutStyle.draggable,
          };
        },
        lineStyle: {
          type: formatLineStyle(name),
        },
        stack: !isLine && isStack,
        type: isLine ? 'line' : 'bar',
        yAxisIndex: formatYaxisIndex(),
        data: formatData(),
      });
    }

    return seriesList;
  };

  const options = {
    backgroundColor: '#fff', // canvas background Color
    color,
    grid: xAxisStyle.grid,
    title: {
      text: title,
    },
    legend: formatLegend(),
    xAxis: {
      type: 'category',
      data: xAxisData,
      triggerEvent: isClickXAxis,
      axisLabel: {
        // 刻度配置
        interval: xAxisOption.interval,
        color: isClickXAxis ? '#00B7FF' : 'rgba(0, 0, 0, 0.6)',
        rotate: xAxisOption.rotate, // TODO 加上 ellipsis 要設定寬度，寬度版型要研究怎麼最不容易破版 (P1)
        formatter: (value) => formatXaxisLabel(value),
      },
    },
    yAxis: formatYAxis(),
    series: handleSeries(Object.keys(data)),
    tooltip: {
      show: true,
      formatter: (params) => `<div>${params.title}</div>`,
    },
  };

  return <ReactECharts option={options} />;
}

export default BarLineMixTrend;
