import { renderDOM }  from "./core";
import { getScreenComponent } from './utils';

const routes = [
  {
    path: "*",
    block: "login",
    shouldAuthorized: false,
  },
  {
    path: '/profile',
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
			// для каждого роутера мы определяем логику действия
			const isAuthorized = Boolean(store.getState().user);
			const currentScreen = Boolean(store.getState().screen);

			console.log("isAuthorized", isAuthorized);
			console.log("currentScreen", currentScreen);

			// если пользователь автороизован(или нет) и роут требует авторизации
			if(isAuthorized || !route.shouldAuthorized)
			{
				store.dispatch({ screen: route.block });
				return;
			}
			// условие срабатывает при первом рендере, передаем Signin или Profile
			if (!currentScreen) {
        store.dispatch({ screen: Screens.Main });
      }

		})
	})


	// const Page = getScreenComponent("signin");
	// передадим название компонента для рендера
	renderDOM(new getScreenComponent("main"));

}
