# 山海戀Bike租車後台系統
* 典型的後台系統，主題關於會員租腳踏車資料、購買周邊產品銷售狀況。
* 根據數據推出行銷方案

# 專案架構
1. 前端框架: React 16.0
2. 設計套件: Ant Design
3. Echart
4. json server
5. 測試框架

# 啟動專案
port 3001
npm start

# 啟動 json server
port 3000
路徑: src\api\mock
json-server --watch db.json

# 目錄架構
```
.
├── .browserslistrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── LICENSE
├── README.md
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── components // 全區共用元件放這
│   ├── containers // 頁面放這邊
│   ├── hooks // 客製化 hooks 
│   ├── api // 取得 TDX 資料
│   ├── index.js // 程式進入點
│   ├── locales // 多國語言
│   ├── static
│   │   ├── icons // icon
│   │   └── images // 普通圖片
│   ├── store // context
│   ├── theme // ant theme
│   └── utils
└── webpack.config.js

```


# 安裝套件
1. jsSHA 
   JS + TS 完整SHA系列加密算法的加密庫
2. 地圖套件 Leaflet MapBox
3. Echarts
4. react router
5. react scroll

