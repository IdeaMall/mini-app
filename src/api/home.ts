export const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg'
];

export type IconText = Record<'icon' | 'text', string>;

export const descriptionItems: IconText[] = [
  {
    icon: 'certificate',
    text: '官方商城'
  },
  {
    icon: 'certificate',
    text: '正品保障'
  },
  {
    icon: 'certificate',
    text: '售后无忧'
  }
];

export const homeItems: IconText[] = [
  {
    icon: 'goods-collect-o',
    text: '新品推荐'
  },
  {
    icon: 'chart-trending-o',
    text: '热销排行'
  },
  {
    icon: 'cash-o',
    text: '本周特惠'
  },
  {
    icon: 'gift-o',
    text: '会买专辑'
  }
];
