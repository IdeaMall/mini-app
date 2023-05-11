import { Image, Swiper, SwiperItem } from '@antmjs/vantui';
import { SwiperProps } from '@antmjs/vantui/types/swiper';
import { View } from '@tarojs/components';
import { FC } from 'react';

type PartialSwiperProps = 'height' | 'autoPlay' | 'initPage';

export type SwiperViewProps = Omit<SwiperProps, PartialSwiperProps> &
  Partial<Pick<SwiperProps, PartialSwiperProps>> &
  Record<'images', string[]>;

export const SwiperView: FC<SwiperViewProps> = ({
  images,
  height = 200,
  autoPlay = 3000,
  initPage = 0,
  ...props
}) => (
  <View>
    <Swiper
      paginationColor='#426543'
      paginationVisible
      height={height}
      autoPlay={autoPlay}
      initPage={initPage}
      {...props}
    >
      {images.map((item, index) => (
        <SwiperItem key={`swiper#home#${index}`}>
          <Image src={item} fit='cover' width='100%' height='200px' />
        </SwiperItem>
      ))}
    </Swiper>
  </View>
);
