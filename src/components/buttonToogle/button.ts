import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface IButtonProps {
	label: string;
	onClick: () => void;
	events: Record<string, Record<string, (event: Event) => void> | undefined>;
}

export class buttonToogle extends Block<IButtonProps> {

	constructor({label, onClick}: IButtonProps) {
		super({label, events: {click: onClick}});
	}

	render() {
		return template;
	}
}
