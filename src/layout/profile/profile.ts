import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './profile.scss';

import { registerComponent }  from '../../core';
import Avatar from '../../components/avatar';
import Field from '../../components/field';

registerComponent(Avatar);
registerComponent(Field);

interface IProfileProps {

}

export class ProfileUser extends Block<IProfileProps> {
  constructor({}) {
	  super({});
	}
	render(): string {
    return template;
  }
}
