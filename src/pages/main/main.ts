console.log("main return");
import { CoreRouter, Store, Block } from 'core';
import template from 'bundle-text:./template.hbs';
import { registerComponent }  from "core";
import { withStore, withRouter, withIsLoading } from 'utils';

// debugger;

import Login from "../../components/login";
import Button from "../../components/button";

registerComponent(Login);
registerComponent(Button);

type LoginPageProps = {
  store: Store<AppState>;
};

export class Main extends Block {

  constructor(props) {
    super(props);

    this.setProps({
      onButtonClick: () => console.log('button is clicked')
    });

  }

  render() {
		console.log("Onboarding.ts ", this.props);
    return template;
  }
}

// export default Main;

console.log("Onboarding.ts ", withRouter);

export default withRouter(withStore(withIsLoading(Main)));
