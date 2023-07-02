import transport from "core/HTTPTransport";

type getUserChatPayload = {
	offset?: integer
	limit?: string
	title?: string
}

class chatController {

	getUserChat = (body?: getUserChatPayload): Promise<unknown> => transport.get("/chats", body);

	// getUserChat(body?: getUserChatPayload): Promise<unknown> {
	// 	return transport.get("/chats");
	// }
	addUserToChat(id: number, userId: number): Promise<unknown> {
		return transport.put("/users", {id, userId});
	}
	delUserToChat(id: number, userId: number): Promise<unknown> {
		return transport.delete("/users", {id, userId});
	}

}

const controllerChat = new chatController();

export default controllerChat;
