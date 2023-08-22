import transport from "core/HTTPTransport";

class userController {
	search = async (login: string): Promise<unknown> => transport.post("/user/search/", {login})
}

const controllerUser = new userController();

export default controllerUser;
