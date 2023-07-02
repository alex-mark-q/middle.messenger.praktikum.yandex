import { Store, Block } from 'core';
import template from 'bundle-text:./template.hbs';
import './chat.scss';
import messages from './pages/404';
import Handlebars from 'handlebars';
import controllerChat from '../../controllers/chatControllers';
import { chats } from '../../services/auth';

import { registerComponent }  from '../../core';
import ProfileLink from '../../components/ProfileLink';
import Search from '../../components/search';
import Message from '../../components/message';
import MessagesList from '../../layout/messagesList';
import { withStore, withRouter, withIsLoading } from 'utils';
import actionChatModal from '../../components/actionChatModal';


registerComponent(ProfileLink);
registerComponent(Search);
registerComponent(Message);
registerComponent(MessagesList);
registerComponent(actionChatModal);

Handlebars.registerHelper('chatPayload', function () {

	let userChat = this.props.store.getState().chats;
	console.log("chat", userChat);
	return userChat;
})

interface MessengerProps {
	store: Store<AppState>;
	fullScreen?: boolean;
	messageStore: Record<string, unknown>[];
}

export class Chat extends Block {

	constructor(props) {
		super(props);
		async function Chats() {
			const dataChat = await chats();
			console.log("chat dataChat", dataChat);
			return dataChat;
		}


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
	    },
	    // chats: this.props.store.dispatch(chats)
	    chats: Chats().then(function(result) {
	    	console.log("result Promise", result);
	    	return result;
	    })


		})

	}

	// init() {

	// 	this.props.getChats();

	// 	async function main() {
	// 		await getChats();
	// 	}

	// 	main();
	// 	.then(function fulfilled(v){
	// 		console.log("chats", v);
	// 	},
	// 	function rejected(reason){
	// 	 // Ой, что-то пошло не так
	// 	})

	// 	let chats = async => {
	// 		// const await getChats = getChats();
	// 		this.setProps({
	// 			chats: new Promise( function(resolve,reject) {
	// 				return getChats();
	// 			})
	// 		});
	// 	};
	// 	// console.log("chats", chats);

	// 	chats();
	// }


	render(): string {
		console.log("Chat.ts this.props", this, window.store);

		// const chats = async function(){
		// 	return await this.props?.chats;
		// };
		// console.log("Chat.ts this.props chats", chats);
		// chats().then(function(result) {
		//   console.log("result ",result) // "Some User token"
		// })

    return template;
  }

}

export default withRouter(withStore(Chat));
