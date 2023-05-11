import { Tabbar, TabbarItem } from '@antmjs/vantui';
import { redirectTo } from '@tarojs/taro';
import { FC } from 'react';

export interface MainNavProps {
  path: string;
}

export const MainNav: FC<MainNavProps> = ({ path }) => (
  <Tabbar
    border
    fixed
    safeAreaInsetBottom
    active={path}
    onChange={({ detail }) => redirectTo({ url: `/pages/${detail}` })}
  >
    <TabbarItem icon='wap-home-o' name='home'>
      首页
    </TabbarItem>
    <TabbarItem icon='apps-o' name='component'>
      分类
    </TabbarItem>
    <TabbarItem icon='envelop-o' name='message'>
      消息
    </TabbarItem>
    <TabbarItem icon='shopping-cart-o' name='shopping-cart'>
      购物车
    </TabbarItem>
    <TabbarItem icon='user-circle-o' name='mine'>
      我的
    </TabbarItem>
  </Tabbar>
);
