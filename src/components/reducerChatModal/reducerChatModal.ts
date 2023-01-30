import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './reducer.scss';
import { registerComponent }  from '../../core';
import buttonToogle from '../buttonToogle';
import controllerChat from '../../controllers/chatControllers';
interface Props {
  id?: string;
}


registerComponent(buttonToogle);


export class reducerChatModal extends Block<Props> {
  constructor({id}: Props) {
    super({id});

		window.addEventListener('click', (event) => {

      if (event.target instanceof Element && !event.target.closest('.kebab__element')) {
        const myDropdown = document.getElementById('modalShowUser');
        if (myDropdown && myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
			if (event.target instanceof Element && !event.target.closest('.kebab__element-reset')) {
        const myDropdown = document.getElementById('modalShowOther');
        if (myDropdown && myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
			if (event.target instanceof Element && !event.target.closest('.kebab__modal-plus')) {
				console.log('кликы');
        const myDropdown = document.getElementById('modalAddUser');
        if (myDropdown && myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }

    });

    this.setProps({
			buttonAddUser:(event:Event) => {
				console.log("click buttonAddUser");
				event.preventDefault();
				events: {
					click: () => {
						controllerChat.addUserToChat();
					}
				}
    	},

	    buttonDelUser:(event:Event) => {
				event.preventDefault();
	    },
			onClick: (event: Event) => {
        event.preventDefault();
        const myDropdownShow = document.getElementById('modalShowUser');
        const myDropdownAdd = document.querySelector('.modal__plus');
        if (myDropdownShow) {
          myDropdownShow.classList.toggle('show');
        }
        if(myDropdownAdd) {
        	myDropdownAdd.style.display = 'block';
        }
      }

    });
    console.log(this.props);
  }

  render(): string {
    return template;
  }
}
