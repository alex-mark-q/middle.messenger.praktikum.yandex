import Signin from "../pages/signin"
import Profile from "../pages/profile"

const SigninPage = new Signin();
const ProfilePage = new Profile();

// Страницы проекта
export enum Screens
{
	Signin = "signin",
	Profile = "profile",
	Main = "main"
}

const map = {
	[Screens.Signin]: SigninPage,
	[Screens.Profile]: ProfilePage,
}

export function getScreenComponent (screen: Screens) {
  return map[screen];
};
