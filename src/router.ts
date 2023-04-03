import { renderDOM }  from "./core";
import { getScreenComponent } from './utils';

const routes = [
  {
    path: "*",
    block: "login",
    shouldAuthorized: false,
  }
];

export function initRouter(router)
{
	// routes.use(route.path, () => {
	// 	if(true)
	// 	{
	// 		return;
	// 	}
	// })

	// const Page = getScreenComponent("signin");
	// передадим название компонента для рендера
	renderDOM(new getScreenComponent("signin"));

}
