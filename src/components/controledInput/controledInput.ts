import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import Validation, { validationFieldType} from 'core/validation';

interface ControledInputProps {
	onInput?: () => {};
	onFocus?: () => {};
  type?: string;
	name: string;
	id?: string;
	class?: string;
	label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
}

export class ControledInput extends Block {

  constructor({ ...props}:ControledInputProps) {
    super({
    	...props,
    	onBlur: (e: FocusEvent) => {
    		const input = e.target as HTMLInputElement;
    		console.log(this.refs);
				const login = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
      	const password = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
      	const firstName = this.element?.querySelector('input[name="first_name"]') as HTMLInputElement;
      	const email = this.element?.querySelector('input[name="email"]') as HTMLInputElement;
      	const secondName = this.element?.querySelector('input[name="second_name"]') as HTMLInputElement;
      	const phone = this.element?.querySelector('input[name="phone"]') as HTMLInputElement;
      	const RepeatPassword = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

    		const errorMessage = new Validation().validate([
    			{type: validationFieldType.Login, value: login?.value},
      		{type: validationFieldType.Password, value: password?.value},
      		{type: validationFieldType.FirstName, value: firstName?.value},
      		{type: validationFieldType.SecondName, value: secondName?.value},
      		{type: validationFieldType.Email, value: email?.value},
					{type: validationFieldType.Phone, value: phone?.value},
					{type: validationFieldType.RepeatPassword, value: RepeatPassword?.value}
      	]);
    		this.refs.error.innerHTML = errorMessage;

    	}
  	})

  }

  render() {
    return template;
  }
}
