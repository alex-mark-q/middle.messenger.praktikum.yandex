import { Store } from "core";
import { transformUser, apiHasError } from 'utils';
import controllerAuth from "../controllers/authControllers";
import { user } from "./user";
import { chats } from "./chat";
import { Screens } from 'utils';

export async function initApp(dispatch, callback) {
	//console.log("initApp");

	await new Promise(r => setTimeout(r, 400));

	let responseUser;
	try {
		responseUser =  await controllerAuth.user();
		//console.log("ошибка1 ", responseUser);

		// await Promise.all([
		// 	dispatch({ user: transformUser(responseUser) }),
		// 	dispatch({ chat: transformUser(chats) })
		// ]);

		if (responseUser) {
			new Promise(function(fulfilled, reject) {

				return [fulfilled(dispatch(chats))];

			})
			.then(() => setTimeout(() => dispatch({ user: transformUser(responseUser) }),50))
			.then(() => setTimeout(() => dispatch({ screen: Screens.Chat }), 0))

		}
	} catch(error) {
		console.log("ошибка2 ", apiHasError(error));
		dispatch({ screen: Screens.Main })
	} finally {
    dispatch({ appIsInited: true });
    // dispatch({ user: transformUser(responseUser) })
  }
}
