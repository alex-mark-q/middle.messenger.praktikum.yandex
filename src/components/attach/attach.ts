import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './attach.scss';

import { registerComponent }  from '../../core';


export class Attach extends Block {
	constructor(messageStore: MessageProps) {
    super(messageStore);
  }

	render(): string {
    return template;
  }
}
