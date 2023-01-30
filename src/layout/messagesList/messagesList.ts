import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './messagesList.scss';

import { registerComponent }  from '../../core';
import reducerChatModal from '../../components/reducerChatModal';
import Attach from '../../components/attach';

import Input from '../../components/input';
import Button from '../../components/button';

registerComponent(reducerChatModal);
registerComponent(Attach);

interface IMessageProps {
  id?: string;
	getChat?: (event: Event) => void;
  onSendMessage?: (event: Event) => void;
	messageStore: Record<string, unknown>[];
}
interface ISearchProps {
	searchParams: string;
	name: string | null;
}

export class MessagesList extends Block<IMessageProps> {

  constructor({ messageStore }: IMessageProps) {
  	console.log("messageStore___", messageStore);
    super({ messageStore });
    this.setProps({
    	getChat: () => {
    		const searchId = new Proxy(new URLSearchParams(window.location.search), {
				  get: (searchParams, name): ISearchProps => searchParams.get(String(name))
				});
				return !!searchId.id;
    	},
			onClick: (event: Event) => {
				console.log('click');
        event.preventDefault();
        const myDropdown = document.getElementById('modalShowOther');
        if (myDropdown) {
          myDropdown.classList.toggle('show');
        }
      }

    });
  }

	render(): string {
    return template;
  }

}
