import HTTPTransport from 'core/HTTPTransport';

console.log(HTTPTransport);

class chatController {

	addUserToChat(id: number, userId: number): Promise<unknown> {
		HTTPTransport.put('/users', {id, userId});
	}
	delUserToChat(id: number, userId: number): Promise<unknown> {
		HTTPTransport.delete('/users', {id, userId});
	}

}

const controllerChat = new chatController();

export default controllerChat;
