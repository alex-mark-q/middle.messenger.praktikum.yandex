import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface ButtonProps {
	label: string;
	onClick: () => void;
}

export class Button extends Block {

	constructor({label, onClick}: ButtonProps) {
		super({label, events: {click: onClick}});
	}

	render() {
		return template;
	}
}
