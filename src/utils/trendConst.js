export const COLOR = [
  // N1 ~ N10
  '#1570FF',
  '#9DDEF4',
  '#C2A5F9',
  '#7BD45C',
  '#FECE00',
  '#F97600',
  '#389810',
  '#FBC5D7',
  '#936A00',
  '#7B7FD7',
  // N11 ~ N20
  '#73A9FF',
  '#C4EBF8',
  '#DAC9FB',
  '#B0E59D',
  '#FEE266',
  '#FBAD66',
  '#88C170',
  '#FDDCE7',
  '#BEA666',
  '#B0B2E7',
  // N21 ~ N30
  '#B9D4FF',
  '#E2F5FC',
  '#EDE4FD',
  '#D7F2CE',
  '#FFF0B3',
  '#FDD6B3',
  '#C3E0B7',
  '#FEEEF3',
  '#DFD2B3',
  '#D7D9F3',
  // N31 ~ N40
  '#115ACC',
  '#7EB2C3',
  '#9B84C7',
  '#62AA4A',
  '#CBA500',
  '#C75E00',
  '#2D7A0D',
  '#C99EAC',
  '#765500',
  '#6266AC',
  // N41 ~ N50
  '#E8F1FF',
  '#F5FCFE',
  '#F9F6FE',
  '#F2FBEF',
  '#FFFAE6',
  '#FEF1E6',
  '#EBF5E7',
  '#FFF9FB',
  '#F4F0E6',
  '#F2F2FB',
];

export const POSITION = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
  inside: 'inside',
  insideLeft: 'insideLeft',
  insideRight: 'insideRight',
  insideTop: 'insideTop',
  insideBottom: 'insideBottom',
  insideTopLeft: 'insideTopLeft',
  insideBottomLeft: 'insideBottomLeft',
  insideTopRight: 'insideTopRight',
  insideBottomRight: 'insideBottomRight',
};

export const UNIT = {
  unit: {
    ntd: 'NTD',
    percent: '%',
  },
  name: {
    default: '',
    amount: 'Amount',
    rate: 'Rate',
  },
};

export const ROTATE = {
  default: 60,
  no: 0,
  sm: 30,
  ssm: 15,
  medium: 45,
  vertical: 90,
};

export const XAXIS = {
  type: {
    rotate: 'Rotate',
    noRotate: 'NoRotate',
    hiddenOverlap: 'HiddenOverlap',
  },

  interval: {
    default: 0,
    hiddenOverlap: 'auto',
  },

  grid: {
    default: {
      left: '10%',
      bottom: '15%',
    },
    rotate: {
      left: '10%',
      bottom: '30%',
    },
  },

  formatType: {
    'YYYY/MM/DD': 'YYYY/MM/DD',
    'YYYY/MM': 'YYYY/MM',
    'YYYY-W[th]': 'YYYY-W[th]',
    'MM/DD': 'MM/DD',
  },
};

export const DATAFORMAT = {
  type: {
    noDecimal: 'no decimal point',
    twoDecimal: 'two decimal places',
  },
};

export const YAXIS = {
  type: {
    biaxial: 'biaxial',
    singleAxis: 'single',
  },
  name: {
    default: '',
    amount: 'Amount',
    amountNtd: 'Amount: NTD',
    amountNtdMillion: 'Amount: NTD(Million)',
    rate: 'Rate',
    kpi: 'KPI',
    qty: 'Qty',
    qtyPcs: 'Qty(PCS)',
    pcs: 'PCS',
  },
  formatterType: {
    default: 'value', // 1000 -> 1000
    kAmount: 'kAmount', // 1000 為  1 K
    percent: '%', // 10 -> 10%
  },
};

export const LABEL = {
  showLabel: {
    line: 'line',
    hidden: 'hidden',
    all: 'all',
    singleSereis: 'singleSeries', // 只秀單一 series 的 label
  },
  quantifierType: {
    percent: 'percent',
    none: 'none',
  },
};

export const DATAZOOM = {
  type: {
    all: 'all',
    partial: 'partial',
  },
};
