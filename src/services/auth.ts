import controllerAuth from '../controllers/authControllers';
import controllerChat from '../controllers/chatControllers';
import { transformChat, transformUser, apiHasError } from 'utils';

export const login = async(dispatch, state, action) => {

	const dataResponse = await controllerAuth.auth(action);
	console.log("auth.ts response", dataResponse);

	const responseUser = await controllerAuth.user();
	console.log("responseUser Data", responseUser);

	if(apiHasError(dataResponse)) {
		console.log("ошибка ");
		dispatch({ isLoading: false, loginFormError: dataResponse.response });
		return;
	}

	dispatch({ user: transformUser(responseUser) });

	window.router.go('#chat');

	// const dataChat = await controllerChat.getUserChat();
	// console.log("chat dataChat", dataChat);

	// dispatch({ chats: dataChat });

	// try {
	// 	window.router.go('/chat');
	// 	dispatch({ user: responseUser});
	// } catch (error) {
	// 	console.log("error", error);
	// }
	// if(responseUser) {

	// }



};
