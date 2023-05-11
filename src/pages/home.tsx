import { observer } from 'mobx-react';
import { PureComponent } from 'react';

import { HomeGridLayout } from '../components/GridView';
import { MainNav } from '../components/MainNav';
import { SessionBox } from '../components/SessionBox';
import { SwiperView } from '../components/SwiperView';

definePageConfig({
  navigationBarTitleText: '首页'
});

@observer
export default class HomePage extends PureComponent {
  render() {
    return (
      <SessionBox>
        <SwiperView />

        <HomeGridLayout />

        <MainNav path='home' />
      </SessionBox>
    );
  }
}
