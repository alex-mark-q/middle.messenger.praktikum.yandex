
import { renderDOM, registerComponent, PathRouter }  from "./core";
import Main from "./pages/main";
import Chat from "./pages/chat";
import Profile from "./pages/profile"
import Signin from "./pages/signin"
import fourHundredFour from "./pages/404";
import fiveHundred from "./pages/500"

import "./vendor/index.scss";

import Button from "./components/button";
import Login from "./components/login";
import Input from "./components/input";
import ControledInput from "./components/controledInput";
import ErrorComponent from "./components/ErrorComponent";
import storeChatRoom  from "./store/chatRoom.json";
import store404  from "./store/404.json";
import store500  from "./store/500.json";

import { initRouter } from "./router"

registerComponent(Button);
registerComponent(Login);
registerComponent(Input);
registerComponent(ControledInput);
registerComponent(ErrorComponent);
registerComponent(Chat);
registerComponent(Profile);
registerComponent(Signin);
registerComponent(fiveHundred);


const MainPage = new Main();
const SigninPage = new Signin();
const ChatPage = new Chat(storeChatRoom);
const ProfilePage = new Profile();
const FourHundredFourPage = new fourHundredFour(store404);
const FiveHundredPage = new fiveHundred(store500);

const checkPage = () => {
  const pathname = window.location.pathname.slice(1);
  return pathname in pages ? pathname : "error404";
};

const routes = [
  { path: "/", view: MainPage, },
  { path: "/auth", view: SigninPage },
  { path: "/chat", view: ChatPage },
  { path: "/profile", view: ProfilePage },
  { path: "/error404", view: FourHundredFourPage },
  { path: "/error500", view: FiveHundredPage },
];


let resultPath = routes.map(( path ) => path["path"])

const pathname = window.location.pathname.slice(1)
let page: Nullable<Block<object>> = null;

switch (pathname) {
  case "":
    page = routes.find(({ path }) => path === "/");
    break;
  case "auth":
		page = routes.find(({ path }) => path === "/auth");
  	break;
  case "chat":
		page = routes.find(({ path }) => path === "/chat");
    break;
	case "profile":
		page = routes.find(({ path }) => path === "/profile");
    break;
	case "error500":
		page = routes.find(({ path }) => path === "/error500");
    break;
  default:
    page = routes.find(({ path }) => path === "/error404");
}

document.addEventListener("DOMContentLoaded", () => {
  // renderDOM(page.view); // метод перенесется в router.ts
  const router = new PathRouter();



  // Первое что делаем иницилизируем роутер
  initRouter(router);
});
