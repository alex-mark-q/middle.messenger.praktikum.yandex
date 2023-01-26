import Block from 'core/Block';
import { Validation, validationFieldType} from 'core/validation';
import template from 'bundle-text:./template.hbs';
import './reducer.scss';

interface IActionProps {
	type: string;
	action: (event: Event) => void;
}

export class actionChatModal extends Block<IActionProps> {
  constructor({type, action}: IActionProps) {
    super({type, events: {click: action}});
  }

  render(): string {
    switch (this.props.type) {
  	  case 'addUser':

	      return `
	        <div class="modal__plus"  id="modalAddUser">
						<img src="../components/kebab/images/plus.png" alt="avatar" />
						Добавить пользователя
					</div>`;
    	case 'delUser':

      	return `
					<div class="modal__minus"  id="modalDelUser">
						<img src="../components/kebab/images/minus.png" alt="avatar" />
						Удалить пользователя
					</div>`
      default:
        return '<div>default</div>';
    }

  }
}
