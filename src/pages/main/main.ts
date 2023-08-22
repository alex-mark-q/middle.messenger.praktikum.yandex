
import { Store, Block } from 'core';
import template from 'bundle-text:./template.hbs';
import { registerComponent }  from "core";
import { withStore, withRouter, withIsLoading } from 'utils';
import Validation, { validationFieldType} from 'core/validation';
import { login as loginAuth } from '../../services/auth';

// import Login from "../../components/login";
import Button from "../../components/button";

// registerComponent(Login);
registerComponent(Button);

type LoginPageProps = {
  store: Store<AppState>;
};

export class Main extends Block {

  constructor(props) {
    super(props);

    this.setProps({
      loginValue: "",
      passwordValue: "",
      errors: {
        login: "",
        password: "",
      },
			onInput: (e: InputEvent) => {
				// console.log("input");
			},
			onFocus: (e: InputEvent) => {
				// console.log("focus"),
			},
      onSubmit: (e: InputEvent) => {
				event.preventDefault();
      	const login = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
      	const password = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

      	const errorMessage = new Validation().validate([
      		{type: validationFieldType.Login, value: login?.value},
      		{type: validationFieldType.Password, value: password?.value}
      	]);
				//debugger;

				const loginData = {
          login: login?.value,
          password: password?.value,
        };

        const nextState = {
        	errors: {
            login: '',
            password: '',
          },
          values: { ...loginData },
        }

      	// this.eventBus.emit(Block.EVENTS.FORM_SUBMIT)

      	this.setState(nextState);

      	// console.log("loginData", loginAuth, loginData);

      	// controllerAuth.auth(loginData);
      	console.log("main.ts this.props", this.props);
      	this.props.store.dispatch(loginAuth, loginData);

      },
			formError: () => this.props.store.getState().loginFormError

    })

  }

  render() {
		// console.log("Main.ts ", this, window.store);
    return template;
  }
}

// export default Main;

export default withRouter(withStore(Main));
