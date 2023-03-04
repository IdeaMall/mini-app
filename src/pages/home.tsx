import { PureComponent } from 'react';
import { observer } from 'mobx-react';

import { MainNav } from '../components/MainNav';
import { SessionBox } from '../components/SessionBox';
import { SwiperView } from '../components/SwiperView';
import { HomeGridLayout } from '../components/GridView';

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

        <MainNav path="home" />
      </SessionBox>
    );
  }
}
