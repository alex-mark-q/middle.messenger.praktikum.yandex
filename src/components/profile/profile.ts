import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './profile.scss';


export class Profile extends Block {

	render(): string {
		return template;
	}

}
