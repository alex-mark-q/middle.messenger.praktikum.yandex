require("babel-core/register");

import { renderDOM, registerComponent }  from './core';
import Login from './views/login';

//import './vendor/index.css';

import Button from './components/button';

registerComponent(Button);

const App = () => {
	const path = window.location.pathname
	switch (path) {
    case '/':
      return new Login();
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
