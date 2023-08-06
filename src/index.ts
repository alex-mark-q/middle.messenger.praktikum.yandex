import "./vendor/index.scss";

import { renderDOM, registerComponent, HashRouter, Store }  from "core";
import { initApp } from './services/initApp';

import Button from "./components/button";
import Input from "./components/input";
import ControledInput from "./components/controledInput";
import ErrorComponent from "./components/ErrorComponent";
import SplashScreen from 'pages/splash';


import { initRouter } from "./router";
import { defaultState } from './store';

registerComponent(Button);
registerComponent(Input);
registerComponent(ControledInput);
registerComponent(ErrorComponent);


declare global {
  interface Window {
    store: Store<AppState>;
    router: HashRouter;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store(defaultState);
  const router = new HashRouter();

  /**
   * Помещаем роутер и стор в глобальную область для доступа в хоках with*
   * @warning Не использовать такой способ на реальный проектах
   */

  window.router = router;
  window.store = store;


  // store.dispatch(initApp(() => setTimeout(renderDOM(new SplashScreen({})),1000)));

  renderDOM(new SplashScreen({}));

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
