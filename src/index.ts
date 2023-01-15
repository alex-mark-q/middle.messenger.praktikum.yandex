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


const App = () => {
	const path = window.location.pathname
	switch (path) {
    case '/':
      return new Main();
      break;
    case '/chat':
    	return new Chat(store);
    	break;
    case '/400':
      return Page400;
      break;
    case '/500':
      return Page500;
      break;
    default:
      return Page400;
  }
}

document.addEventListener("DOMContentLoaded", () => {
	// DEV: Расскоментировать нужно страницу для отображения

	//const App = new LoginPage();
	// const App = new OnboardingPage({
	//   links: [
	//     {to: '#signup', text: 'signup'},
	//     {to: '#login', text: 'login'},
	//   ]
	// });

	//console.log(App());

	renderDOM(App());
});
