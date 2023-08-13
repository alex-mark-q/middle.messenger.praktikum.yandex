import transport from "core/HTTPTransport";
import controllerMessage from "./messageControllers";
import Pro from "../utils/promise";
import { Store } from 'core';

type userChatPayload = {
	offset?: integer
	limit?: string
	title?: string
}


class chatController {

	getUserChat = async (body?: userChatPayload): Promise<unknown> => {

		return Pro.map([await transport.get("/chats", body)], function(pr, done) {
			Promise.resolve(pr).then(function(v) {
				done(v);
			}, done)
		}).then(function(vals) {

			console.log(vals);

			vals[0].map(async (chat) => {
					const tokenId = await chatController.getTokenChat(chat.id);
					return controllerMessage.connect(chat.id, tokenId);
				}
			);
			return vals;

		});

		// await Promise.all([
		// 	transport.get("/chats", body),
		// 	controllerMessage
		// ])


	}

	addUserToChat = (users: number[], id: number): Promise<unknown> => {
		console.log("body", users, id);
		return transport.put("/chats/users", {users, chatId: id});
	}

	delUserToChat = (id: number): Promise<unknown> => {
		return transport.delete("/chats", {chatId: id});
	}

	static getTokenChat = async (id: number): Promise<unknown> => {
		return transport.post(`/chats/token/${id}`);
	}

}

const controllerChat = new chatController();

export default controllerChat;
