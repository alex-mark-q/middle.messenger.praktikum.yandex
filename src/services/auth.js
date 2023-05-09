import controllerAuth from '../controllers/authControllers';

export const login = async(action) => {

	const response = await controllerAuth.auth(action);

	window.router.go('/chat');

};
