import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './reducer.scss';
import { registerComponent }  from '../../core';
import buttonToogle from '../buttonToogle';
import controllerChat from '../../controllers/chatControllers';

import actionChatModal from '../actionChatModal';
registerComponent(actionChatModal);

interface Props {
  id?: string;
}


registerComponent(buttonToogle);


export class reducerChatModal extends Block<Props> {
  constructor({id}: Props) {
    super({id});

    this.setProps({
	    onClick: (event: Event) => {
				event.preventDefault();
        const myDropdownShow = document.querySelector('.kebab__modal');

        if (myDropdownShow) {
          myDropdownShow.classList.toggle('show');
        }
	    },
			onActionPlusUser: (event: Event) => {
        event.preventDefault();
        const myModalPlusUser = document.getElementById('modalPlusUser');

        if (myModalPlusUser) {
          myModalPlusUser.classList.toggle('show');
        }
      },
      onActionMinusUser: (event: Event) => {
      	event.preventDefault();
      	const myModalMinusUser = document.getElementById('modalMinusUser');
        if(myModalMinusUser) {
        	myModalMinusUser.classList.toggle('show');
        }
      }

    });
    console.log(this.props);
  }

  render(): string {
    return template;
  }
}
