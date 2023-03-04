import { View } from '@tarojs/components';
import { Swiper, SwiperItem, Image } from '@antmjs/vantui';
import { FC, useState } from 'react';
import { images } from '../api/home';

export interface SwiperViewProps {}

export const SwiperView: FC<SwiperViewProps> = () => {
  const [initPage1, setInitPage1] = useState(0);
  const onChange = e => {};

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
