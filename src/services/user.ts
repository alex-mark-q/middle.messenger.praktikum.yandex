import controllerAuth from '../controllers/authControllers';
import controllerUser from '../controllers/userControllers';
import controllerChat from '../controllers/chatControllers';

import { transformUser } from 'utils';
import { Store } from 'core'

export const user = async(dispatch, state, action) => {
	const responseUser = await controllerAuth.user();
	console.log("responseUser Data", responseUser);

	dispatch({ user: transformUser(responseUser) });
}


export const addUserToChat = async(dispatch, state, action) => {

	const responseUser = await controllerUser.search(action);
	console.log("responseUser Data", responseUser);

	async function userToChat() {
		const userId = window.store.state.searchUser;
		const chatId = Number(new URLSearchParams(window.location.search).get("id"));
		await controllerChat.addUserToChat([userId[0].id], chatId);
	}

	new Promise(function(fulfilled, reject) {

		return [fulfilled(dispatch({ searchUser: responseUser })), fulfilled(userToChat())];

	}).then(() => {
		console.log("OKKKKKKK");
	})

}
