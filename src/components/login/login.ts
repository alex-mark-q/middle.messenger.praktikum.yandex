import Block from 'core/Block';
import { Validation, validationFieldType} from 'core/validation';
import Button from 'components/button';
import template from 'bundle-text:./template.hbs';
import ControledInput from 'components/controledInput';
import './login.scss';
import controllerAuth from '../../controllers/authControllers';

export class Login extends Block {
  constructor() {
    super()

    this.setProps({
      loginValue: '',
      passwordValue: '',
      errors: {
        login: '',
        password: '',
      },
			onInput: (e: InputEvent) => {
				console.log("input");
				//this.refs.loginInputRef.refs.errorRef.setProps({text: ""})
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

      	controllerAuth.auth(loginData);

      }
    })

  }

  render(): string {
    return template;
  }
}
