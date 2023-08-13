import { Store, Block } from 'core';
import template from 'bundle-text:./template.hbs';
import './chat.scss';
import messages from './pages/404';
import Handlebars from 'handlebars';

import controllerUser from '../../controllers/userControllers';


import { registerComponent }  from '../../core';
import ProfileLink from '../../components/ProfileLink';
import Search from '../../components/search';
import Message from '../../components/message';
import MessagesList from '../../layout/messagesList';
import { withStore, withRouter, withIsLoading, withChat, withUser } from 'utils';
import actionChatModal from '../../components/actionChatModal';
import { addUserToChat } from "../../services/user";


registerComponent(ProfileLink);
registerComponent(Search);
registerComponent(Message);
registerComponent(MessagesList);
registerComponent(actionChatModal);

interface MessengerProps {
	store: Store<AppState>;
	fullScreen?: boolean;
	messageStore: Record<string, unknown>[];
}

export class Chat extends Block {

	constructor(props) {
		super(props);


		this.setProps({
			onSubmitCloseModal:() => {
				const page = document.getElementsByClassName("page__chat");
				const modal = document.getElementById("modalDelChat");

				page.addEventListener("click", (event) => {
					if(!event.target.closest("#modalDelChat").length) {
						console.log("onSubmitHideModal", this);
						this.onSubmitHideModal(modal);
					}
			  });

			},
	    onModalAddChat: (event:Event) => {
				event.preventDefault();
				const myModalAddChat = document.getElementById('modalAddChat');
				this.onSubmitShowModal(myModalAddChat);
	    },
	    onModalDelChat: () => {
				const myModalDelChat = document.getElementById('modalDelChat');
				this.onSubmitShowModal(myModalDelChat);
	    },
			onSubmitAddUser: async() => {
				const userLogin = document.getElementById("login_field").value;
				const chatId = Number(new URLSearchParams(window.location.search).get("id"));
				if(userLogin && chatId) {
					console.log("addUserToChat props", userLogin);

					const foo = async() => {
						await this.props.store.dispatch(addUserToChat, userLogin);
					}


					new Promise(function(fulfilled, reject) {

						return fulfilled(foo());

					});
				}
			},

		})

	}

	onSubmitShowModal (element) {
		if (element) {
			element.classList.toggle('show');
		}
	}
	onSubmitHideModal (element) {
		if (element) {
			element.classList.remove('show');
		}
	}




	render(): string {
		const chats = this.props.store.getState().chats[0];
		const user = this.props.store.getState().user;

		console.log("Chat.ts this.props", this, chats, user);

		if(chats) {
			Handlebars.registerHelper('chatPayload', function (ignore, opt) {
				// console.log("chat registerHelper ", chats);
				var results = '';
				chats.forEach((item) => {
					results += opt.fn(item);
				});

				return results;
			})
		}

    return template;
  }

}

export default withRouter(withStore(withUser(withChat(Chat))));
