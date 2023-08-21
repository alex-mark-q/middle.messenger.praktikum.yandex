import { WSTransport } from "core";
import { Store } from 'core';
import controllerChat from './chatControllers';

class messageControllers {
	private socket = new Map();
	public async connect(id: number, tokenId: string) {

		const userId = window.store.getState().user?.id;

		if(userId && id && tokenId) {
			const wsTransport = new WSTransport(`/${userId}/${id}/${tokenId.token}`);

			this.socket.set(id, wsTransport);

			await wsTransport.connect();
		}


	}

	sendMessage(id: number, message: string) {
		console.log("socket send message", this.socket);
		const socket = this.socket.get(id);
		console.log("socket send message", socket);


    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      type: 'message',
      content: message,
    });
	}



}

const controllerMessage = new messageControllers();

export default controllerMessage;
