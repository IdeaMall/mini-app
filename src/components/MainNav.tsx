import { Tabbar, TabbarItem } from '@antmjs/vantui';
import { redirectTo } from '@tarojs/taro';
import { observer } from 'mobx-react';
import { FC } from 'react';

import { i18n } from '../store/Translation';

export interface MainNavProps {
  path: string;
}

const { t } = i18n;

export const MainNav: FC<MainNavProps> = observer(({ path }) => (
  <Tabbar
    border
    fixed
    safeAreaInsetBottom
    active={path}
    onChange={({ detail }) => redirectTo({ url: `/pages/${detail}` })}
  >
    <TabbarItem icon='wap-home-o' name='home'>
      {t('home')}
    </TabbarItem>
    <TabbarItem icon='apps-o' name='component'>
      {t('category')}
    </TabbarItem>
    <TabbarItem icon='envelop-o' name='message'>
      {t('message')}
    </TabbarItem>
    <TabbarItem icon='shopping-cart-o' name='shopping-cart'>
      {t('cart')}
    </TabbarItem>
    <TabbarItem icon='user-circle-o' name='mine'>
      {t('mine')}
    </TabbarItem>
  </Tabbar>
));
