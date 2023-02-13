import { Button, Dialog } from '@antmjs/vantui';
import { Input } from '@tarojs/components';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { PropsWithChildren, PureComponent } from 'react';

import userStore from '../store/User';

export type SessionBoxProps = PropsWithChildren<{}>;

@observer
export class SessionBox extends PureComponent<SessionBoxProps> {
  @observable
  mobilePhone = '';

  @observable
  code = '';

  sendSMS = () => userStore.sendSMSCode(this.mobilePhone);

  signIn = () => userStore.signInWithSMS(this.mobilePhone, this.code);

  renderDialog() {
    return (
      <Dialog show>
        <div className="p-3">
          <Input
            className="p-3"
            placeholder="手机号"
            onInput={({ detail }) => (this.mobilePhone = detail.value)}
          />
          <div className="d-flex">
            <div className="me-auto">
              <Input
                className="p-3"
                placeholder="验证码"
                onInput={({ detail }) => (this.code = detail.value)}
              />
            </div>
            <div>
              <Button
                className="text-nowrap"
                type="primary"
                onClick={this.sendSMS}
              >
                发送验证码
              </Button>
            </div>
          </div>
          <Button type="primary" formType="submit" onClick={this.signIn}>
            登录
          </Button>
        </div>
      </Dialog>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <>
        {children}

        {this.renderDialog()}
      </>
    );
  }
}
