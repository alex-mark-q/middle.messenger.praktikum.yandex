import Signin from "../pages/signin"
import Profile from "../pages/profile"
import Main from "../pages/main"

const SigninPage = new Signin();
const ProfilePage = new Profile();
const MainPage = new Main();

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
	[Screens.Main]: MainPage,
}

export function getScreenComponent (screen: Screens) {
  return map[screen];
};
