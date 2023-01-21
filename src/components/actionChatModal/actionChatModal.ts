import Block from 'core/Block';
import { Validation, validationFieldType} from 'core/validation';
import template from 'bundle-text:./template.hbs';
import './reducer.scss';

interface Props {

}

export class actionChatModal extends Block<Props> {
  constructor() {
    super({...props});
  }

  render(): string {
    switch (this.props.type) {
  	  case 'addUser':
      // language=hbs
	      return `
	        <div class="kebab__modal-plus" id="modalAddUser">
						<img src="../components/kebab/images/plus.png" alt="avatar" />
						Добавить пользователя
					</div>`;
    	case 'delUser':
      // language=hbs
      	return `
					<div class="kebab__modal-minus"  id="modalDelUser">
						<img src="../components/kebab/images/minus.png" alt="avatar" />
						Удалить пользователя
					</div>`
      default:
        return '<div>default</div>';
    }
  }
}
