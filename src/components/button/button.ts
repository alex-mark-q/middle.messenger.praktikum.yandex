import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface IButtonProps {
	id?: string;
	class: string;
	label: string;
	onClick: () => void;
	events: Record<string, Record<string, (event: Event) => void> | undefined>;
}

export class Button extends Block {

	constructor({onClick, ...props}: IButtonProps) {
		super({...props, events: {click: onClick}});
	}

	render() {
		return template;
	}
}
