import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import { registerComponent }  from '../../core';


import Disconnect  from '../../components/disconnect';
registerComponent(Disconnect);

interface IProps {
	fHStore: Record<string, unknown>[];
}

export class fiveHundred extends Block<IProps> {

	constructor(fHStore:IProps) {
		super(fHStore);
	}

  render() {
    return template;
  }
}
