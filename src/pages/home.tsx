import { PureComponent } from 'react';
import { observer } from 'mobx-react';

import { MainNav } from '../components/MainNav';
import { SessionBox } from '../components/SessionBox';
import { SwiperView } from '../components/SwiperView';
import { Grid, GridItem, Icon } from '@antmjs/vantui';

definePageConfig({
  navigationBarTitleText: '首页'
});

@observer
export default class HomePage extends PureComponent {
  render() {
    return (
      <SessionBox>
        <SwiperView />
        <p style={{ display: 'flex', justifyContent: 'space-around' }}>
          <span>
            <Icon name="certificate"></Icon>
            质量保证
          </span>
          <span>
            <Icon name="logistics"></Icon>
            快速核对需求
          </span>
          <span>
            <Icon name="exchange"></Icon>
            后期运维
          </span>
        </p>

        <Grid gutter={10}>
          <GridItem icon="goods-collect-o" text="新品推荐" />
          <GridItem icon="chart-trending-o" text="热销排行" />
          <GridItem icon="cash-o" text="本周特惠" />
          <GridItem icon="gift-o" text="会买专辑" />
        </Grid>

        <MainNav path="home" />
      </SessionBox>
    );
  }
}
