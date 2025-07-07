import { Coupon, CouponGenderEnum } from '@ideamall/ideashop-server';
import { getUserProfile, login } from '@tarojs/taro';
import { clear } from 'idb-keyval';
import { HTTPClient, Middleware } from 'koajax';
import { observable } from 'mobx';
import { persist, restore, toggle } from 'mobx-restful';
import { StrapiPopulateQuery } from 'mobx-strapi';

import { API_HOST, Base, TableModel } from './Base';
import { baseRequest } from './service';

export type User = Base & Required<Coupon>['issuer'] & { token?: string };

const GenderValue = ['other', 'male', 'female'];

export class UserModel extends TableModel<User> {
  baseURI = '';
  populate: StrapiPopulateQuery<User> = {
    contacts: { populate: '*' }
  };

  @persist()
  @observable
  accessor session: User | undefined;

  restored = restore(this, 'User');

  sessionWare: Middleware = async ({ request }, next) => {
    await this.restored;

    request.headers = {
      ...request.headers,
      'Strapi-Response-Format': 'v4'
    };

    const { token } = this.session || {};

    if (token)
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${token}`
      };

    return next();
  };

  client = new HTTPClient({
    baseRequest,
    baseURI: `${API_HOST}/api/`,
    responseType: 'json'
  }).use(this.sessionWare);

  @toggle('uploading')
  async signIn() {
    const { code, errMsg } = await login();

    if (!code) throw new Error(errMsg);

    const { body } = await this.client.post<User>('session/WeChat', { code });

    return (this.session = body);
  }

  @toggle('uploading')
  async signInWithWechat() {
    const { userInfo } = await getUserProfile({
      desc: '用于完善用户资料'
    });
    const { nickName, avatarUrl: avatar } = userInfo;
    const gender = GenderValue[userInfo.gender || 0] as CouponGenderEnum;

    await this.signIn();

    return this.updateSession({ nickName, gender, avatar });
  }

  async signOut() {
    await clear();

    this.session = undefined;
  }

  @toggle('uploading')
  async updateSession(data: Partial<User>) {
    const { body } = await this.client.put<User>('session', data);

    return Object.assign(this.session!, body);
  }

  @toggle('downloading')
  async getSession() {
    const { body } = await this.client.get<User>('users/me?populate=*');

    return Object.assign(this.session!, body);
  }

  @toggle('uploading')
  async updatePhone({ encryptedData, iv }) {
    const { body } = await this.client.put<User>('session/WeChat', {
      encryptedData,
      iv
    });

    return Object.assign(this.session!, body);
  }
}

export default new UserModel();
