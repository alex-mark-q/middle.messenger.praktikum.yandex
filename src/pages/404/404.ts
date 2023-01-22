import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import { registerComponent }  from '../../core';


import Disconnect  from '../../components/disconnect';
registerComponent(Disconnect);


interface IProps {
	fHfStore: Record<string, unknown>[];
}

export class fourHundredFour extends Block<IProps> {

	constructor(fHfStore:IProps) {
		super(fHfStore);
	}

  render() {
    return template;
  }
}
