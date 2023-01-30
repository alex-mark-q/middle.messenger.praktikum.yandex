import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './kebab.scss';

export class Kebab extends Block {
	constructor() {
		super();
	}

	render(): string {
    return template;
  }
}
