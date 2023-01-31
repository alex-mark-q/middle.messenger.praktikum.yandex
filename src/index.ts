require("babel-core/register");

import { renderDOM, registerComponent }  from './core';
import Main from './pages/main';
import Chat from './pages/chat';
import Profile from './pages/profile'
import Signin from './pages/signin'
import fourHundredFour from './pages/404';
import fiveHundred from './pages/500'

import './vendor/index.scss';

import Button from './components/button';
import Login from './components/login';
import Input from './components/input';
import ControledInput from './components/controledInput';
import ErrorComponent from './components/ErrorComponent';
import storeChatRoom  from './store/chatRoom.json';
import store404  from './store/404.json';
import store500  from './store/500.json';

registerComponent(Button);
registerComponent(Login);
registerComponent(Input);
registerComponent(ControledInput);
registerComponent(ErrorComponent);
registerComponent(Chat);
registerComponent(Profile);
registerComponent(Signin);
registerComponent(fiveHundred);


class App {
  main() {
		return new Main();
  }
  chat() {
  	return new Chat(storeChatRoom);
  }
  signin() {
  	return new Signin();
  }
  profile() {
  	return new Profile();
  }
  error404() {
  	return new fourHundredFour(store404);
  }
  error500() {
  	return new Page500(store500);
  }
}

const pages = new App();

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root && block) {
    root.appendChild(block.getContent());
  }
  return root;
}

const checkPage = () => {
  const pathname = window.location.pathname.slice(1);
  return pathname in pages ? pathname : 'error404';
};

document.addEventListener('DOMContentLoaded', () => {
  render('#app', pages[checkPage() as keyof typeof pages]());
});
