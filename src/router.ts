import { renderDOM }  from "./core";
import { getScreenComponent } from './utils';

const routes = [
  {
    path: "/login",
    block: "login",
    shouldAuthorized: false,
  },
  {
    path: '/chat',
    block: "chat",
    shouldAuthorized: true,
  }
];

export function initRouter(router, store)
{
	console.log("init initRouter", router, store);
	routes.forEach(route => {
		console.log("route forEach", route);
		router.use(route.path, () => {

      const isAuthorized = Boolean(store.getState().user);
      const currentScreen = Boolean(store.getState().screen);
      console.log("isAuthorized", isAuthorized, currentScreen);
      console.log("init isAuthorized and currentScreen ", isAuthorized, currentScreen);

      if (isAuthorized || !route.shouldAuthorized) {
        store.dispatch({ screen: route.block });
        return;
      }

      if (!currentScreen) {
        store.dispatch({  });
      }

    });
	})

  /**
   * Глобальный слушатель изменений в сторе
   * для переключения активного экрана
   */
	router.start();
  store.on('changed', (prevState, nextState) => {
  	console.log("store changed ",router);
  	router.start();
    // if (!prevState.appIsInited && nextState.appIsInited) {
    // 	console.log("router ",router);
    //   router.start();
    // }

    // if (prevState.screen !== nextState.screen) {
    //   const Page = getScreenComponent(nextState.screen);
    //   renderDOM(new Page({}));
    //   document.title = `App / ${Page.componentName}`;
    // }
  });

	// const Page = getScreenComponent("signin");
	// передадим название компонента для рендера
	renderDOM(new getScreenComponent("main"));

}
