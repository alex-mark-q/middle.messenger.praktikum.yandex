import { WSTransport } from "core";
import { Store } from 'core';
import controllerChat from './chatControllers';

class messageControllers {
	public async connect(id: number, tokenId: string) {

		const userId = window.store.getState().user?.id; // .user.data.id;
		// console.log("chatId getState", userId, id, tokenId);

		if(userId && id && tokenId) {
			const wsTransport = new WSTransport(`/${userId}/${id}/${tokenId.token}`);

			await wsTransport.connect();
		}


	}
}

const controllerMessage = new messageControllers();

export default controllerMessage;
