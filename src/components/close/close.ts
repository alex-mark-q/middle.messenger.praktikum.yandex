import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface ICloseProps {
	id?: string;
	class: string;
	label: string;
	onClick: () => void;
	events: Record<string, Record<string, (event: Event) => void> | undefined>;
}

export class Close extends Block {

	constructor({onClick, ...props}: ICloseProps) {
		super({...props, events: {click: onClick}});
	}

	render() {
		return template;
	}
}
