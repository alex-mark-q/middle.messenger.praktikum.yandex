import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './field.scss';

import { registerComponent }  from '../../core';
import Input from '../input';

interface IPropsField {
	type: string;
  name: string;
  text: string;
  placeholder: string;
  textError?: string;
  onBlur?: Record<string, (event: Event) => void>;
  onFocus?: Record<string, (event: Event) => void>;
}

export class Field extends Block<IPropsField> {

	constructor({type, name, text, onBlur, onFocus, placeholder, textError}: IPropsField) {
    super({type, name, text, onBlur, onFocus, placeholder, textError});
  }

	render(): string {
		return template;
	}

}
