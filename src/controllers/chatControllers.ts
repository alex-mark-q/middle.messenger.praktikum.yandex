import transport from "core/HTTPTransport";

type userChatPayload = {
	offset?: integer
	limit?: string
	title?: string
}


class chatController {

	getUserChat = (body?: userChatPayload): Promise<unknown> => transport.get("/chats", body);

	addUserToChat = (users: number[], id: number): Promise<unknown> => {
		console.log("body", users, id);
		return transport.put("/chats/users", {users, chatId: id});
	}

	delUserToChat = (id: number): Promise<unknown> => {
		return transport.delete("/chats", {chatId: id});
	}

}

const controllerChat = new chatController();

export default controllerChat;
