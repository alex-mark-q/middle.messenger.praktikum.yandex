import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './message.scss';
import Handlebars from 'handlebars';

Handlebars.registerHelper('theActiveChat', function (value: string) {
	const searchId = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, name): ISearchProps => searchParams.get(String(name))
	});
	return String(value) === searchId.id;
})

interface MessageProps {
	messageStore:  Record<string, unknown>[];
}

export class Message extends Block<MessageProps> {
	constructor(messageStore:MessageProps) {
		console.log(messageStore, "messageStore");
		super(messageStore);
	}

	render(): string {
    return template;
  }
}
