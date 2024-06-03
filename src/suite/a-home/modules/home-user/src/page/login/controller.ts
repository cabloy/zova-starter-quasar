import { BeanControllerPageBase, Local, zz } from 'zova';
import { ScopeModule } from '../../resource/this.js';

export const ParamsSchema = zz.object({});
export type ParamsInput = zz.input<typeof ParamsSchema>;
export type ParamsOutput = zz.output<typeof ParamsSchema>;

export const QuerySchema = zz.object({});
export type QueryInput = zz.input<typeof QuerySchema>;
export type QueryOutput = zz.output<typeof QuerySchema>;

export interface User {
  username?: string;
  password?: string;
}

@Local()
export class ControllerPageLogin extends BeanControllerPageBase<ScopeModule, QueryOutput, ParamsOutput> {
  user: User = {
    username: '',
    password: '',
  };

  async login() {}
}
