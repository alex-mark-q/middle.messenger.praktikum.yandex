import { Store } from 'core';
import controllerAuth from "../controllers/authControllers";
import controllerChat from "../controllers/chatControllers";
import { transformChat, transformUser, apiHasError } from "utils";
import { user } from "./user";
import { chats } from "./chat";


export const login = async(dispatch, state, action) => {
	let dataResponse;
	try {
		dataResponse = await controllerAuth.auth(action);
	} catch (error) {
		console.log("ошибка ", apiHasError(error));
	}

	const getUser = new Store().getState().user;
	if(!getUser) {
		new Promise(function(resolve, reject) {

			resolve(dispatch(user));

		}).then(() => setTimeout(() => window.router.go('#chat'), 50));

		dispatch(chats);
	}


};
