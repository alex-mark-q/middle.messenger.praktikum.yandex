import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './chat.scss';
import ChatControllers from 'controllers/chatControllers';
console.log(ChatControllers);

import { registerComponent }  from '../../core';
import Profile from '../../components/profile';
import Search from '../../components/search';
import Message from '../../components/message';
import MessagesList from '../../layout/messagesList';

registerComponent(Profile);
registerComponent(Search);
registerComponent(Message);
registerComponent(MessagesList);


interface MessengerProps {
	messageStore: Record<string, unknown>[];
}

export class Chat extends Block<MessengerProps> {

	constructor(messageStore:MessengerProps) {
		super(messageStore);
	}

	render(): string {
    return template;
  }

}
