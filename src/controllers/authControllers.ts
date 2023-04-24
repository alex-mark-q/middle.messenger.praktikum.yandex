import transport from 'core/HTTPTransport';

type LoginRequestData = {
	login: string;
	password: string;
}

class authControllers
{
	auth (data: LoginRequestData) {
		transport.post('/auth/signin', data)
	}
}

const controllerAuth = new authControllers();

export default controllerAuth;
