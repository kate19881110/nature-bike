// 數字為千分位
export function getThousand(value) {
  return `${String(value).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function getPercent(value) {
  return `${String(value)}`
}
