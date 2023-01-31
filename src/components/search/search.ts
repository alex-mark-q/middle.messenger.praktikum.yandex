import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './search.scss';

import { registerComponent }  from '../../core';
import Input from '../../components/input';

registerComponent(Input);

export class Search extends Block {

	render(): string {
		return template;
	}

}
