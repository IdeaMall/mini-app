import { Authing } from '@authing/miniapp-taro';
import { User } from '@ideamall/data-service';
import { clearStorageSync, getStorageSync, setStorageSync } from '@tarojs/taro';
import { observable } from 'mobx';
import { toggle } from 'mobx-restful';

import { TableModel } from './Base';
import { HTTPClient } from './service';

const authing = new Authing({
  host: 'https://ideamall-test.authing.cn',
  userPoolId: '5b34407af5bca40001c11e06',
  appId: '63e3b2a04bc21d57a5f3edc1'
});

export class UserModel extends TableModel<User> {
  baseURI = 'user';

  @observable
  session?: User = getStorageSync('session');

  client = new HTTPClient({
    baseURI:
      process.env.NODE_ENV === 'production'
        ? 'https://idea-mall.onrender.com'
        : 'http://localhost:8080',
    responseType: 'json'
  });

  saveSession(user: User) {
    this.client.token = user.token!;

    setStorageSync('session', user);

    return (this.session = user);
  }

  signOut() {
    this.client.token = '';
    this.session = undefined;

    clearStorageSync();
  }

  @toggle('uploading')
  async signInAuthing(token: string) {
    const { body } = await this.client.post<User>(
      `${this.baseURI}/session/authing`,
      {},
      { Authorization: `Bearer ${token}` }
    );
    return this.saveSession(body!);
  }

  @toggle('uploading')
  async sendSMSCode(phoneNumber: string) {
    const [error, data] = await authing.sendSms({
      channel: 'CHANNEL_LOGIN',
      phoneNumber
    });

    if (error) {
      console.error(error);
      throw new URIError(error.message);
    }
    return data.message;
  }

  @toggle('uploading')
  async signInWithSMS(phone: string, passCode: string) {
    const [error, data] = await authing.loginByPassCode({
      passCodePayload: { phone, passCode }
    });
    if (error) throw new URIError(error.message);

    return this.signInAuthing(data.id_token);
  }
}

export default new UserModel();
