import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import { Validation, validationFieldType} from 'core/validation';
import './signin.scss';

import { registerComponent }  from '../../core';
import Input from '../../components/input';
import Button from '../../components/button';
import ControledInput from '../../components/controledInput';

import { withRouter } from 'utils/withRouter';
import { withStore } from 'utils/withStore';
import { withIsLoading } from 'utils/withIsLoading';

registerComponent(Input);
registerComponent(ControledInput);

export class Signin extends Block<unknown> {

  constructor() {
    super();
    this.setProps({
			onInput: (e: InputEvent) => {
				console.log("input");
			},
			onFocus: (e: InputEvent) => console.log("focus"),
      onSubmit: (event: Event) => {
      	console.log("onSubmit");
				event.preventDefault();
				const form = document.querySelector('.form') as HTMLFormElement;
				const email = this.element?.querySelector('input[name="email"]') as HTMLInputElement;
      	const login = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
      	const password = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
      	const firstName = this.element?.querySelector('input[name="first_name"]') as HTMLInputElement;
      	const secondName = this.element?.querySelector('input[name="second_name"]') as HTMLInputElement;
      	const phone = this.element?.querySelector('input[name="phone"]') as HTMLInputElement;
      	const RepeatPassword = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

      	console.log(email.value, login.value, password.value, firstName.value, secondName.value, phone.value);

      }
    })
  }

  render() {
  	console.log("Signin.ts", this.props);
    return template;
  }
}

export default withRouter(withStore(withIsLoading(Signin)));
