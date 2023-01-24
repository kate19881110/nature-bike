const menus = {
  list: [
    {
      key: 'home',
      name: '首頁',
      icon: 'home',
      url: '/home',
    },
    {
      key: 'user',
      name: '個人資訊',
      icon: 'user',
      url: '/user',
    },
    {
      key: 'crm',
      name: '顧客管理',
      icon: 'user',
      child: [
        {
          name: 'Dashboard',
          key: 'dashboard',
          url: '/dashboard',
        },
        {
          name: 'Customer',
          key: 'customer',
          url: '/customer',
        },
      ],
    },
    {
      key: 'bike',
      name: '腳踏車出租',
      icon: 'user',
      child: [
        {
          name: '出租據點',
          key: 'map',
          url: '/map',
        },
        {
          name: '景點介紹',
          key: 'site',
          url: '/site',
        },
      ],
    },
    {
      key: 'goods',
      name: '商品庫存',
      icon: 'user',
      child: [
        {
          name: '衣服',
          key: 'clothing',
          url: '/clothing',
        },
        {
          name: '鞋子',
          key: 'shoes',
          url: '/shoes',
        },
        {
          name: '帽子',
          key: 'hat',
          url: '/hat',
        },
      ],
    },
    {
      key: 'market',
      name: '行銷方案',
      icon: 'user',
      child: [
        {
          name: '檔期活動',
          key: 'activity',
          url: '/activity',
        },
        {
          name: '異業合作',
          key: 'b2c',
          url: '/b2c',
        },
      ],
    },
    {
      key: 'report',
      name: '銷售報表',
      icon: 'user',
      child: [
        {
          name: '營收報表',
          key: 'product',
          url: '/product',
        },
        {
          name: '成本控管',
          key: 'cost',
          url: '/cost',
        },
      ],
    },
  ],
};

export default menus;
