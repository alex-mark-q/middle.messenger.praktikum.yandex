import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './avatar.scss';


export class Avatar extends Block {

	render(): string {
		return template;
	}

}
