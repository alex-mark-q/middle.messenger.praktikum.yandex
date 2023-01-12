import Block from 'core/Block';
import { Validation, validationFieldType} from 'core/validation';
import Button from '../button';
import template from 'bundle-text:./template.hbs';
import ControledInput from 'components/controledInput';

// TODO: не забыть включить стили в компонент

export class Login extends Block {
  constructor() {
    super()

    this.setProps({
			values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
			onInput: (e: InputEvent) => {
				console.log("input", this.refs);
				//this.refs.loginInputRef.refs.errorRef.setProps({text: ""})
			},
			onFocus: (e: InputEvent) => console.log("focus"),
      onSubmit: (e: InputEvent) => {

      	const login = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
      	const password = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
      	console.log(login, "login");
      	const errorMessage = new Validation().validate([
      		{type: validationFieldType.Login, value: login.value},
      		{type: validationFieldType.Password, value: password.value}
      	]);
				//debugger;
				console.log('action/login', login, password);

      	this.eventBus.emit(Block.EVENTS.FORM_SUBMIT)
      }
    })

  }

  render(): string {
    return template;
  }
}
