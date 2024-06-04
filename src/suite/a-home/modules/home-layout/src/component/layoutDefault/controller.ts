import { BeanControllerBase, Local, Use } from 'zova';
import * as ControllerEssentialLink from '../../component/essentialLink/controller.js';
import { type StoreUserInfo } from 'zova-module-home-user';
import { ScopeModule } from '../../resource/this.js';

export interface Props {}

export type Emits = {};

export interface Slots {}

export type TypeMenuItem = ControllerEssentialLink.Props & { folder?: boolean; separator?: boolean };

@Local()
export class ControllerLayoutDefault extends BeanControllerBase<ScopeModule, Props, Emits, Slots> {
  static $propsDefault = {};

  @Use('home-user.store.userInfo')
  $$userInfo: StoreUserInfo;

  leftDrawerOpen: boolean = false;
  menu: TypeMenuItem[];

  protected async __init__() {
    await this.loadMenu();
  }

  async loadMenu() {
    const res = await this.$api.get('/home/mock/getMenu');
    this.menu = res.data.data;
  }

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }
}
