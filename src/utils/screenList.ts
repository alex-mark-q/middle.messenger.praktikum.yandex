import Signin from "../pages/signin"

const SigninPage = new Signin();

export enum Screens
{
	Signin = "signin"
}

const map = {
	[Screens.Signin]: SigninPage,
}

export function getScreenComponent (screen: Screens) {
  return map[screen];
};
