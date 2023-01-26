import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './chat.scss';
import ChatControllers from 'controllers/chatControllers';
import messages from './pages/404';

import { registerComponent }  from '../../core';
import ProfileLink from '../../components/ProfileLink';
import Search from '../../components/search';
import Message from '../../components/message';
import MessagesList from '../../layout/messagesList';
import actionChatModal from '../../components/actionChatModal';

registerComponent(ProfileLink);
registerComponent(Search);
registerComponent(Message);
registerComponent(MessagesList);
registerComponent(actionChatModal);


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
