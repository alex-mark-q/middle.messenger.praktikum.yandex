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

    		// this.refs.error.setProps({
    		// 	text: ''
    		// }) // --> почему не получается через setProps?

				const login = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
      	const password = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

    		const errorMessage = new Validation().validate([
    			{type: validationFieldType.Login, value: login?.value},
      		{type: validationFieldType.Password, value: password?.value}
      	]);
    		this.refs.error.innerHTML = errorMessage;

    	}
  	})

  }

  render() {
    return template;
  }
}
