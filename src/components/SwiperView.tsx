import { View } from '@tarojs/components';
import { Swiper, SwiperItem, Image } from '@antmjs/vantui';
import { FC, useState } from 'react';

export interface SwiperViewProps {}

export const SwiperView: FC<SwiperViewProps> = () => {
  const [initPage1, setInitPage1] = useState(0);
  const onChange = e => {};
  const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg'
  ];

  return (
    <View>
      <Swiper
        height={200}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
        onChange={onChange}
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#home#${index}`}>
            <Image src={item} fit="cover" width="100%" height="200px" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};
