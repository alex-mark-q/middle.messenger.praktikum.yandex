import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './attach.scss';

import { registerComponent }  from '../../core';
//registerComponent(imageURL);

interface Props {
  id: string;
	onClick: () => void;
	events: Record<string, Record<string, (event: Event) => void> | undefined>;
}

export class Attach extends Block<Props> {
	constructor({id, onClick}: Props) {
		super({id, events: {click: onClick}});
	}

	render(): string {
    return template;
  }
}
