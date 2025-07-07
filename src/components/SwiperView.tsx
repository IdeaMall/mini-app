import { Image, Swiper, SwiperItem } from '@antmjs/vantui';
import { SwiperProps } from '@antmjs/vantui/types/swiper';
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
  <Swiper
    paginationColor='#426543'
    paginationVisible
    {...{ height, autoPlay, initPage }}
    {...props}
  >
    {images.map(item => (
      <SwiperItem key={item}>
        <Image className='w-full h-full' fit='cover' src={item} />
      </SwiperItem>
    ))}
  </Swiper>
);
