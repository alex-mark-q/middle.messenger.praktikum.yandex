

import { renderDOM, registerComponent, PathRouter, Store }  from "core";
import { initApp } from './services/initApp';
// import Main from "./pages/main";
// import Chat from "./pages/chat";
// import Profile from "./pages/profile"
// import Signin from "./pages/signin"
// import fourHundredFour from "./pages/404";
// import fiveHundred from "./pages/500"

import "./vendor/index.scss";

import Button from "./components/button";

import Input from "./components/input";
import ControledInput from "./components/controledInput";
import ErrorComponent from "./components/ErrorComponent";
// import storeChatRoom  from "./store/chatRoom.json";
// import store404  from "./store/404.json";
// import store500  from "./store/500.json";

import { initRouter } from "./router";
import { defaultState } from './store';

registerComponent(Button);

registerComponent(Input);
registerComponent(ControledInput);
registerComponent(ErrorComponent);
// registerComponent(Chat);
// registerComponent(Profile);
// registerComponent(Signin);
// registerComponent(fiveHundred);


// const MainPage = new Main();
// const SigninPage = new Signin();
// const ChatPage = new Chat(storeChatRoom);
// const ProfilePage = new Profile();
// const FourHundredFourPage = new fourHundredFour(store404);
// const FiveHundredPage = new fiveHundred(store500);

// const checkPage = () => {
//   const pathname = window.location.pathname.slice(1);
//   return pathname in pages ? pathname : "error404";
// };

// const routes = [
//   { path: "/", view: Main, },
//   { path: "/auth", view: SigninPage },
//   { path: "/chat", view: ChatPage },
//   { path: "/profile", view: ProfilePage },
//   { path: "/error404", view: FourHundredFourPage },
//   { path: "/error500", view: FiveHundredPage },
// ];


// let resultPath = routes.map(( path ) => path["path"]);

// const pathname = window.location.pathname.slice(1);
// let page: Nullable<Block<object>> = null;

// switch (pathname) {
//   case "":
//     page = routes.find(({ path }) => path === "/");
//     break;
//   case "auth":
// 		page = routes.find(({ path }) => path === "/auth");
//   	break;
//   case "chat":
// 		page = routes.find(({ path }) => path === "/chat");
//     break;
// 	case "profile":
// 		page = routes.find(({ path }) => path === "/profile");
//     break;
// 	case "error500":
// 		page = routes.find(({ path }) => path === "/error500");
//     break;
//   default:
//     page = routes.find(({ path }) => path === "/error404");
// }

declare global {
  interface Window {
    store: Store<AppState>;
    router: CoreRouter;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store(defaultState);
  const router = new PathRouter();

  /**
   * Помещаем роутер и стор в глобальную область для доступа в хоках with*
   * @warning Не использовать такой способ на реальный проектах
   */
  window.router = router;
  window.store = store;


  store.on('changed', (prevState, nextState) => {
    if (process.env.DEBUG) {
      console.log(
        '%cstore updated',
        'background: #222; color: #bada55',
        nextState,
      );
    }
  });

  /**
   * Инициализируем роутер
   */

  initRouter(router, store);

  /**
   * Загружаем данные для приложения
   */
  store.dispatch(initApp);
});
