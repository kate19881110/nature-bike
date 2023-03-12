# 社團後台系統
社團辦活動除了可以讓人拉近距離，更需要經營，讓社團初宗延續下去．
本人在自家公司擔任腳踏車社社長，知道籌劃一場活動，所需要的流程、工作。
理解舉辦方身兼多職，把繁雜的工作數位化，讓科技使人便利，紀錄大家歡聚每一刻


# 專案架構
1. 前端框架: React 16.0
2. 設計套件: Ant Design
3. Echart
4. json server

# React 運用
1. useState
2. 

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

# 角色權限設定
![image](https://github.com/kate19881110/nature-bike/blob/develop/%E6%AC%8A%E9%99%90%E8%A8%AD%E5%AE%9A.png)
# 登入流程
![image](https://github.com/kate19881110/nature-bike/blob/develop/%E7%99%BB%E5%85%A5%E6%B5%81%E7%A8%8B.png)

# 社費費用審查流程
![image](https://github.com/kate19881110/nature-bike/blob/develop/%E7%A4%BE%E8%B2%BB%E5%AF%A9%E6%9F%A5%E6%B5%81%E7%A8%8B.png)

# 安裝紀錄
1. eslint
2. webpack
3. json server
4. Ant Design UI
5. react router
6. react scroll
7. reat dom

# 套件運用
1. jsSHA 
   JS + TS 完整SHA系列加密算法的加密庫
2. 地圖套件 Leaflet MapBox
3. Echarts
4. html2canvas
5. EmailJS

# 啟動專案
npm start

# 啟動 json server
port 3000
路徑: src\api\db
json-server --watch db.json
