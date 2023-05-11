import { observer } from 'mobx-react';
import { PureComponent } from 'react';

import { images } from '../api/home';
import { HomeGridLayout } from '../components/GridView';
import { MainNav } from '../components/MainNav';
import { SwiperView } from '../components/SwiperView';

definePageConfig({
  navigationBarTitleText: '首页'
});

@observer
export default class HomePage extends PureComponent {
  render() {
    return (
      <>
        <SwiperView images={images} />

        <HomeGridLayout />

        <MainNav path='home' />
      </>
    );
  }
}
