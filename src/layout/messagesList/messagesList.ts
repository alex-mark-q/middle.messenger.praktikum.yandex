import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './messagesList.scss';

import { registerComponent }  from '../../core';
import Kebab from '../../components/kebab';
import Attach from '../../components/attach';

import Input from '../../components/input';
import Button from '../../components/button';

registerComponent(Kebab);
registerComponent(Attach);

registerComponent(Input);
registerComponent(Button);


export class MessagesList extends Block {

	constructor() {
    super();
  }

	render(): string {
    return template;
  }

}
