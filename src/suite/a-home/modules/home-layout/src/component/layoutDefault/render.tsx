import { BeanRenderBase, Local } from 'zova';
import type { ControllerLayoutDefault, TypeMenuItem } from './controller.js';
import EssentialLink from '../../component/essentialLink/index.vue';
import {
  QBtn,
  QDrawer,
  QHeader,
  QItemLabel,
  QLayout,
  QList,
  QPageContainer,
  QSeparator,
  QToolbar,
  QToolbarTitle,
} from 'quasar';
import { JSX } from 'vue/jsx-runtime';
import { ScopeModule } from '../../resource/this.js';

export interface RenderLayoutDefault extends ControllerLayoutDefault {}

@Local()
export class RenderLayoutDefault extends BeanRenderBase<ScopeModule> {
  _renderMenuItem(item: TypeMenuItem) {
    if (item.separator) {
      return <QSeparator spaced></QSeparator>;
    }
    if (item.folder) {
      return <QItemLabel header>{item.title}</QItemLabel>;
    }
    return (
      <EssentialLink
        key={item.title}
        title={item.title}
        caption={item.caption}
        icon={item.icon}
        href={item.href}
        to={item.to}
      />
    );
  }
  _renderMenu() {
    const domItems: JSX.Element[] = [];
    for (const item of this.menu) {
      domItems.push(this._renderMenuItem(item));
    }
    return <QList>{domItems}</QList>;
  }

  render() {
    return (
      <QLayout view="lHh Lpr lFf">
        <QHeader elevated>
          <QToolbar>
            <QBtn flat dense round icon="::menu" aria-label="Menu" onClick={() => this.toggleLeftDrawer()} />

            <QToolbarTitle> Quasar App </QToolbarTitle>

            <QBtn
              onClick={() => {
                this.$$userInfo.logout();
              }}
            >
              {this.scope.locale.LogOut()}
            </QBtn>
            <div>{this.$$userInfo.user?.username}</div>
          </QToolbar>
        </QHeader>

        <QDrawer v-model={this.leftDrawerOpen} show-if-above bordered>
          {this._renderMenu()}
        </QDrawer>

        <QPageContainer>
          <router-view />
        </QPageContainer>
      </QLayout>
    );
  }
}
