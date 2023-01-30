import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import { Validation, validationFieldType} from 'core/validation';
import './signin.scss';

import { registerComponent }  from '../../core';
import Input from '../../components/input';
import Button from '../../components/button';
import ControledInput from '../../components/controledInput';

registerComponent(Input);
registerComponent(ControledInput);

export class Signin extends Block<unknown> {

  constructor() {
    super();
    this.setProps({
			onInput: (e: InputEvent) => {
				console.log("input", this.refs);
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

      	console.log(email, login, password, firstName, secondName, phone);

      	// const errorMessage = new Validation().validate([

      	// 	{type: validationFieldType.Login, value: login?.value},
      	// 	{type: validationFieldType.Password, value: password?.value},
      	// 	{type: validationFieldType.FirstName, value: firstName?.value},
      	// 	{type: validationFieldType.SecondName, value: secondName?.value},

      	// 	{type: validationFieldType.Email, value: email.value},

      	// 	{type: validationFieldType.Phone, value: phone?.value},
      	// 	{type: validationFieldType.RepeatPassword, value: RepeatPassword?.value}
      	// ]);

				// if(errorMessage) {
        //   const formData = new FormData(form);
        //   const data = Object.fromEntries(formData.entries());
        //   console.log(data);
				// }

      }
    })
  }

  render() {
    return template;
  }
}
