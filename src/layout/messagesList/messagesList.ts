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
  	//console.log("messageStore___", messageStore);
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
      },
      onSendMessage: (event: Event) => {
      	event.preventDefault();
      	const form = document.getElementById('sendMessage') as HTMLFormElement;
        const input = form.elements.namedItem('message') as HTMLInputElement;
        if(input.value) {
        	const message = input.value;
        	console.log(input.value);
        	const chat = document.querySelector('.chat-body__history') as HTMLElement;
        	const div = document.createElement('div');
        	const date = new Date();
          const time = `${date.getHours()}:${date.getMinutes()}`;
          div.classList.add('chat-body__message');
          div.classList.add('chat-body__message_my');
          div.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
            </div>
            <span>
                ${time}
            </span>
        	`;
          chat.appendChild(div);
        	input.value = '';
        }
      }

    });
  }

	render(): string {
    return template;
  }

}
