import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './profile.scss';


export class ProfileLink extends Block {

	render(): string {
		return template;
	}

}
