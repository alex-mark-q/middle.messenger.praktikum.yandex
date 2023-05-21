import { renderDOM }  from "./core";
import { getScreenComponent, Screens } from './utils';

console.log("router ",Screens);

const routes = [
  {
    path: "/",
    block: Screens.Main,
    shouldAuthorized: false,
  },
	{
    path: "/profile",
    block: Screens.Profile,
    shouldAuthorized: false,
  },
  {
    path: '/chat',
    block: "chat",
    shouldAuthorized: true,
  },
	{
    path: '*',
    block: "login",
    shouldAuthorized: false,
  },
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

      // if (isAuthorized || !route.shouldAuthorized) {
      //   store.dispatch({ screen: route.block });
      //   return;
      // }
      store.dispatch({ screen: Screens.Main });
      // if (!currentScreen) {

      // }

    });
	})

  /**
   * Глобальный слушатель изменений в сторе
   * для переключения активного экрана
   */
	// router.start();
  store.on('changed', (prevState, nextState) => {
  	console.log("store changed ", nextState);
  	router.start();
    // if (!prevState.appIsInited && nextState.appIsInited) {
    // 	console.log("router ",router);
    //   router.start();
    // }

  	console.log("getScreenComponent",getScreenComponent);
		const Page = getScreenComponent(nextState?.screen);
		// console.log("Page", Page);
		// передадим название компонента для рендера
		if(Page){
			renderDOM(new Page({}));
		}

  });

	// const Page = getScreenComponent("signin");
	// передадим название компонента для рендера
	// renderDOM(new getScreenComponent("main"));

}
