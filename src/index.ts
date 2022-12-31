require("babel-core/register");

import { renderDOM, registerComponent }  from './core';
import Main from './pages/main';

import './vendor/index.scss';

import Button from './components/button';
import Login from './components/login';
import Input from './components/input';

registerComponent(Button);
registerComponent(Login);
registerComponent(Input);


const App = () => {
	const path = window.location.pathname
	switch (path) {
    case '/':
      return new Main();
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
