require("babel-core/register");

import { renderDOM, registerComponent }  from './core';
import Main from './pages/main';
import Chat from './pages/chat';

import './vendor/index.scss';

import Button from './components/button';
import Login from './components/login';
import Input from './components/input';
import ControledInput from './components/controledInput';
import ErrorComponent from './components/ErrorComponent';
import store  from './store/index.json';

registerComponent(Button);
registerComponent(Login);
registerComponent(Input);
registerComponent(ControledInput);
registerComponent(ErrorComponent);
registerComponent(Chat);


class App {
  main() {
		return new Main();
  }
  chat() {
  	return new Chat(store);
  }
  error404() {
  	return Page400;
  }
  error500() {
  	return Page500;
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
