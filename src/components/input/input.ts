import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface InputProps {
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

  constructor({ type, name, id, placeholder, value, error}: InputProps) {
    super({ type, name, id, placeholder, value, error})
  }

  render() {
    return template;
  }
}
