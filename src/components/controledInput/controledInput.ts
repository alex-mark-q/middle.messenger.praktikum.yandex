import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';

interface ControledInputProps {
	onInput?: () => {};
	onBlur?: () => {};
	onFocus?: () => {};
  type?: 'text' | 'password' | 'email';
	name: string;
	id?: string;
	class?: string;
	label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
}

export class ControledInput extends Block {

  constructor({ onBlur, ...props }: ControledInputProps) {
    super({
    	...props,
    	onBlur: (e: FocusEvent) => {
    		const input = e.target as HTMLInputElement;
    		console.log(input.value);

    		// this.refs.errorRef.setProps({
    		// 	text: input.value
    		// })

    	}
  	})
  }

  render() {
    return template;
  }
}
