import Block from 'core/Block';
import { Validation, validationFieldType} from 'core/validation';
import template from 'bundle-text:./template.hbs';
import './reducer.scss';

interface IActionProps {
	id: string;
	type?: string;
	action?: (event: Event) => void;
}

export class actionChatModal extends Block<IActionProps> {
  constructor({id, type, action}: IActionProps) {
    super({id, type, events: {click: action}});

		window.addEventListener('click', (event) => {
			console.log("window");
      if (event.target instanceof Element && !event.target.closest('.kebab__element')) {
        const myDropdown = document.getElementById('modalShowUser');
        if (myDropdown && myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
			// if (event.target instanceof Element && !event.target.closest('.kebab__modal-plus')) {
			// 	console.log('кликы');
      //   const myDropdown = document.getElementById('modalAddUser');
      //   if (myDropdown && myDropdown.classList.contains('show')) {
      //     myDropdown.classList.remove('show');
      //   }
      // }

    });
  }

  render(): string {
    switch (this.props.type) {
  	  case 'addUser':
	      return `
      			<div  id="{{id}}" class="kebab__modal-plus">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						      <circle cx="11" cy="11" r="10.25" stroke="var(--link-color)" stroke-width="1.5"></circle>
						      <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#3369F3" stroke-width="1.5"></line>
						      <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#3369F3" stroke-width="1.5"></line>
						  </svg>
							Добавить пользователя
						</div>
	        `;
    	case 'delUser':

      	return `
					<div  id="{{id}}" class="kebab__modal-minus">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					      <circle cx="11" cy="11" r="10.25" stroke="var(--link-color)" stroke-width="1.5"></circle>
					      <line x1="7.11077" y1="7.11103" x2="14.8889" y2="14.8892" stroke="#3369F3" stroke-width="1.5"></line>
					      <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"></line>
					  </svg>
						Удалить пользователя
					</div>`;
      default:
        return '<div>default</div>';
    }

  }
}
