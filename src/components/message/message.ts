import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './message.scss';

interface MessageProps {
	messageStore:  Record<string, unknown>[];
}

export class Message extends Block<MessageProps> {
	constructor(messageStore:MessengerProps) {
		console.log(messageStore);
		super(messageStore);
	}

	render(): string {
    return template;
  }
}
