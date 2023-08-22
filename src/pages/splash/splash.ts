import { Block, Store } from "core";
import { registerComponent }  from "../../core";
import template from "bundle-text:./template.hbs";
import Layout from "components/layout";
import { initApp } from "../../services/initApp";
import { withStore, withUser } from 'utils';

// console.log("Store ", new Store);

registerComponent(Layout);

type SplashPageProps = {};

export class SplashPage extends Block<SplashPageProps> {
  static componentName = 'SplashPage';

	constructor(props) {
		super(props);
	}

	// sideEffects() {
	// 	console.log("init myMethod");
	// }
  
  render() {
  	return template;
  }
}

export default withStore(withUser(SplashPage));
