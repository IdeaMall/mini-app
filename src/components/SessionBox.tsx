import { Button, Dialog } from '@antmjs/vantui';
import { Input } from '@tarojs/components';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { MouseEvent, PropsWithChildren, PureComponent } from 'react';
import { sleep } from 'web-utility';

import userStore from '../store/User';

export type SessionBoxProps = PropsWithChildren<{
  autoCover?: boolean;
}>;

@observer
export class SessionBox extends PureComponent<SessionBoxProps> {
  @observable
  showDialog = false;

  @observable
  mobilePhone = '';

  @observable
  code = '';

  @observable
  interval = 0;

  checkSession = (event: MouseEvent<HTMLElement>) => {
    if (userStore.session) return;

    event.stopPropagation();

    this.showDialog = true;
  };

  sendSMS = async () => {
    userStore.sendSMSCode(this.mobilePhone);

    this.interval = 60;

    do {
      await sleep(1);
    } while (--this.interval < 1);
  };

  signIn = async () => {
    await userStore.signInWithSMS(this.mobilePhone, this.code);

    this.interval = 0;
    this.showDialog = false;
  };

  renderDialog() {
    const { mobilePhone, code, interval } = this;

    return (
      <Dialog show showConfirmButton={false} closeOnClickOverlay={false}>
        <div className='p-3'>
          <Input
            className='p-3'
            placeholder='手机号'
            onInput={({ detail }) => (this.mobilePhone = detail.value)}
          />
          <div className='d-flex'>
            <div className='me-auto'>
              <Input
                className='p-3'
                placeholder='验证码'
                onInput={({ detail }) => (this.code = detail.value)}
              />
            </div>
            <div>
              <Button
                className='text-nowrap'
                type='primary'
                disabled={!mobilePhone || !!interval}
                onClick={this.sendSMS}
              >
                {interval ? `${interval}s` : '发送验证码'}
              </Button>
            </div>
          </div>
          <Button
            className='mt-3'
            block
            type='primary'
            formType='submit'
            disabled={!mobilePhone || !code}
            onClick={this.signIn}
          >
            登录
          </Button>
        </div>
      </Dialog>
    );
  }

  render() {
    const { autoCover, children } = this.props,
      { showDialog } = this,
      { session } = userStore;

    return (
      <div className='position-relative'>
        {(!autoCover || session) && children}

        {!autoCover && !session && !showDialog && (
          <div
            className='position-absolute left-0 top-0 w-100 h-100'
            style={{ zIndex: 1000 }}
            onClick={this.checkSession}
          />
        )}
        {(autoCover ? !session : showDialog) && this.renderDialog()}
      </div>
    );
  }
}
