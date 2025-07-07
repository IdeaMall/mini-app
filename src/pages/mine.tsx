import { Button } from '@antmjs/vantui';
import { Button as TButton } from '@tarojs/components';
import { observer } from 'mobx-react';

import { MainNav } from '../components/MainNav';
import userStore from '../store/User';

definePageConfig({
  navigationBarTitleText: '个人中心'
});

export default observer(() => {
  const { session } = userStore;

  return (
    <>
      <div className='flex items-center justify-around p-6 bg-red-50'>
        <Button
          type='warning'
          onClick={() => userStore.signInWithWechat().then(console.info)}
        >
          登录
        </Button>
        <TButton
          className='text-3xl w-max p-6 bg-red-500 text-white rounded-2xl'
          openType='getPhoneNumber'
          onGetPhoneNumber={({ detail }) =>
            userStore.updatePhone(detail).then(console.info)
          }
        >
          同步手机号
        </TButton>
      </div>

      <ul className='p-6'>
        <li>昵称：{session?.nickName as string}</li>
        <li>性别：{session?.gender as string}</li>
        <li>手机：{session?.mobilePhone as string}</li>
        <li>微信 OpenID：{session?.wechatId as string}</li>
      </ul>

      <MainNav path='mine' />
    </>
  );
});
