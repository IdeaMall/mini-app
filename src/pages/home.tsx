import { observer } from 'mobx-react';
import { PureComponent } from 'react';

import { descriptionItems, homeItems, images } from '../api/home';
import { DescriptionView, GridView } from '../components/GridView';
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

        <DescriptionView items={descriptionItems} />
        <GridView items={homeItems} />

        <MainNav path='home' />
      </>
    );
  }
}
