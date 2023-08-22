
import { Validation, validationFieldType} from "core/validation";

import template from "bundle-text:./template.hbs";
import ControledInput from "components/controledInput";
import "./login.scss";
import controllerAuth from "../../controllers/authControllers";
import { login } from "../../services/auth";
import { CoreRouter, Store, Block } from 'core';

import { withStore, withRouter, withIsLoading } from 'utils';

type LoginPageProps = {
  store: Store<AppState>;
};

export class Login extends Block<LoginPageProps> {
  constructor(props: LoginPageProps) {
    super(props);

    this.setProps({
      loginValue: "",
      passwordValue: "",
      errors: {
        login: "",
        password: "",
      },
			onInput: (e: InputEvent) => {
				console.log("input");
			},
			onFocus: (e: InputEvent) => console.log("focus"),
      onSubmit: (e: InputEvent) => {
				event.preventDefault();
      	const login = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
      	const password = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

      	const errorMessage = new Validation().validate([
      		{type: validationFieldType.Login, value: login?.value},
      		{type: validationFieldType.Password, value: password?.value}
      	]);
				//debugger;

				if(errorMessage) {
					this.setProps({
						loginValue: login.value,
						passwordValue: password.value,
					})
				}

				const loginData = {
          login: login.value,
          password: password.value,
        };

      	// this.eventBus.emit(Block.EVENTS.FORM_SUBMIT)

      	console.log("loginData", login.value, password.value);
      	console.log("this.props", this.props);
      	console.log("errorMessage", errorMessage);

      	// controllerAuth.auth(loginData);

      	this.props.store.dispatch(login, loginData);

      },
			formError: () => this.props.store.getState().loginFormError

    })

  }

  render(): string {
		console.log("login.ts", this.props);
    return template;
  }
}


export default withRouter(withStore(Login));
