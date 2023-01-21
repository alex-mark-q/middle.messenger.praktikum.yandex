import HTTPTransport from 'core/HTTPTransport';

console.log(HTTPTransport);

class chatController {

	addUserToChat(id: number, userId: number) {
		HTTPTransport.put(id, [userId]);
	}

}

const controllerChat = new chatController();

export default controllerChat;
