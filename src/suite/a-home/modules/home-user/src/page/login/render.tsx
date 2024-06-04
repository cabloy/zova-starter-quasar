import { BeanRenderBase, Local } from 'zova';
import type { ControllerPageLogin } from './controller.js';
import { ScopeModule } from '../../resource/this.js';
import { QBtn, QForm, QInput, QPage } from 'quasar';
import { withModifiers } from 'vue';

export interface RenderPageLogin extends ControllerPageLogin {}

@Local()
export class RenderPageLogin extends BeanRenderBase<ScopeModule> {
  render() {
    return (
      <QPage>
        <div>
          <QForm>
            <QInput v-model={this.user.username} label={this.scope.locale.YourUsername()}></QInput>
            <QInput v-model={this.user.password} label={this.scope.locale.YourPassword()}></QInput>
            <QBtn
              type="submit"
              label={this.scope.locale.Login()}
              onClick={withModifiers(() => {
                this.login();
              }, ['prevent'])}
            ></QBtn>
          </QForm>
        </div>
      </QPage>
    );
  }
}
