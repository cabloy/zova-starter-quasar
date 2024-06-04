import { BeanBase, Store } from 'zova';
import { ScopeModule } from '../resource/this.js';

export interface User {
  username?: string;
  password?: string;
}

export interface UserInfoData {
  user?: User;
  jwt?: string;
}

@Store()
export class StoreUserInfo extends BeanBase<ScopeModule> {
  private _user?: User | undefined;
  public get user(): User | undefined {
    return this._user;
  }
  public set user(value: User | undefined) {
    this._user = value;
  }
  private _jwt?: string | undefined;
  public get jwt(): string | undefined {
    return this._jwt;
  }
  public set jwt(value: string | undefined) {
    this._jwt = value;
  }

  protected async __init__() {
    const res = localStorage.getItem('userInfo');
    if (!res) return;
    const data = JSON.parse(res) as UserInfoData;
    this.user = data.user;
    this.jwt = data.jwt;
  }

  setUserInfo(data: UserInfoData) {
    this.user = data.user;
    this.jwt = data.jwt;
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

  logout() {
    this.setUserInfo({});
    this.$router.replace('/home/user/login');
  }
}
