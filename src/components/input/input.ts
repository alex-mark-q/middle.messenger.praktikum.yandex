import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface InputProps {
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

export class Input extends Block {

  constructor({ onInput, onBlur, onFocus, ...props }: InputProps) {
    super({ ...props, events: { input:onInput, blur:onBlur, focus:onFocus} })
  }

  render() {
    return template;
  }
}
