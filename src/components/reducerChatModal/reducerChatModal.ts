import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './reducer.scss';

interface Props {
  id?: string;
}
import { registerComponent }  from '../../core';
import buttonToogle from '../buttonToogle';
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

    });

    this.setProps({
			buttonAddUser:(event:Event) => {
				event.preventDefault();
    	},

	    buttonDelUser:(event:Event) => {
				event.preventDefault();
	    },
			onClick: (event: Event) => {
        event.preventDefault();
        const myDropdown = document.getElementById('modalShowUser');
        if (myDropdown) {
          myDropdown.classList.toggle('show');
        }
      }

    });
    console.log(this.props);
  }

  render(): string {
    return template;
  }
}
