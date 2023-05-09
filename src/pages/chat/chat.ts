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
import Input from '../'

registerComponent(ProfileLink);
registerComponent(Search);
registerComponent(Message);
registerComponent(MessagesList);
registerComponent(actionChatModal);


interface MessengerProps {
	fullScreen?: boolean;
	messageStore: Record<string, unknown>[];
}

export class Chat extends Block<MessengerProps> {

	constructor(messageStore:MessengerProps) {
		super(messageStore);
		this.setProps({
			onSubmitAddUser:(event:Event) => {
				console.log("click buttonAddUser");
				event.preventDefault();
				const myDropdown = document.getElementById('modalPlusUser');
        if (myDropdown && myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
				events: {
					click: () => {
						controllerChat.addUserToChat();
					}
				}
    	},

	    onSubmitDelUser:(event:Event) => {
				event.preventDefault();
				const myDropdown = document.getElementById('modalMinusUser');
        if (myDropdown && myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
				events: {
					click: () => {
						controllerChat.delUserToChat();
					}
				}
	    }
		})
	}

	render(): string {
    return template;
  }

}
