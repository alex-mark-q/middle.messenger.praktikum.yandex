import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';
import './input.scss';

interface InputProps {
	onInput?: () => void;
	onBlur?: () => void;
	onFocus?: () => void;
  type?: string;
	name: string;
	label?: string;
  placeholder?: string;
}

export class Input extends Block {

  constructor({ onInput, onBlur, onFocus, ...props }: InputProps) {
    super({ ...props, events: { input:onInput, blur:onBlur, focus:onFocus} })
  }

  render() {
    return template;
  }
}
