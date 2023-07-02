import controllerChat from '../controllers/chatControllers';
import { transformChat, apiHasError } from 'utils';

export default const chats = async(dispatch, state, action) => {
	// return controllerChat.getUserChat();

	const dataChat = await controllerChat.getUserChat();
	console.log("chat dataChat", dataChat);

	dispatch({ chats: dataChat });

}
