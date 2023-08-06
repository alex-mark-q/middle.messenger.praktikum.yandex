import controllerChat from '../controllers/chatControllers';
import { transformChat, apiHasError } from 'utils';

export const chats = async(dispatch, state, action) => {
	const dataChat = await controllerChat.getUserChat();
	console.log("chat.ts dataChat", dataChat);

	dispatch({ chats: dataChat });

}
