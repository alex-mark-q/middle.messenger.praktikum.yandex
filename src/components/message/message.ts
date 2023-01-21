import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './message.scss';

interface MessageProps {
	messageStore:  Record<string, unknown>[];
}

export class Message extends Block<MessageProps> {
	constructor() {
		super();
	}

	render(): string {
    return template;
  }
}
