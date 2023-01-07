import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface IButtonProps {
	label: string;
	onClick: () => void;
}

export class Button extends Block {

	constructor({label, onClick}: IButtonProps) {
		super({label, events: {click: onClick}});
	}

	render() {
		return template;
	}
}
