import Block from 'core/Block';
import { registerComponent }  from '../../core';
import { Validation, validationFieldType} from 'core/validation';
import Close from '../../components/close';
import controllerChat from '../../controllers/chatControllers';
import controllerUser from '../../controllers/userControllers';

import { withStore, withRouter, withIsLoading, withUser } from 'utils';

import template from 'bundle-text:./template.hbs';
import './reducer.scss';

interface IActionProps {
	id: string;
	type?: string;
	action?: (event: Event) => void;
}

registerComponent(Close);

export class actionChatModal extends Block<IActionProps> {
  constructor({props, type, action}: IActionProps) {
    super({ ...props, type, events: {click: action}});

    this.setProps({
			onSubmitRemoveModal: () => {

				const modalIds = {
					modalPlusUser: document.getElementById('modalPlusUser'),
					modalMinusUser: document.getElementById('modalMinusUser'),
					modalAddChat: document.getElementById('modalAddChat'),
					modalDelChat: document.getElementById('modalDelChat')
				};

				Object.values(modalIds).forEach((myDropdown) => {

					if (myDropdown && myDropdown.classList.contains("show")) {
						myDropdown.classList.remove("show");
					}
				});
			},

			onSubmitAddChat: async(event:Event) => {
				event.preventDefault();
				const title = this.element?.querySelector('input[name="title"]').value;
				await controllerChat.addUserToChat(title);
			},
			onSubmitDelChat: async(event:Event) => {
				event.preventDefault();
				const chatId = Number(this.element?.querySelector('input[name="chatId"]').value);
				await controllerChat.delUserToChat(chatId);
			}
    })
  }

	async submitAddUser() {
		const userData = {
			usersId: [].concat(this.element?.querySelector('input[name="login"]').value as HTMLInputElement),
			chatId: Number(new URLSearchParams(window.location.search).get("id"))
		}
		console.log("searchUser props", this.props);
	}

  render(): string {
  	// console.log("searchUser props 2", this.props);
    switch (this.props.type) {
  	  case 'buttonAddUser':
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
    	case 'buttonDelUser':

      	return `
					<div  id="{{id}}" class="kebab__modal-minus">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					      <circle cx="11" cy="11" r="10.25" stroke="var(--link-color)" stroke-width="1.5"></circle>
					      <line x1="7.11077" y1="7.11103" x2="14.8889" y2="14.8892" stroke="#3369F3" stroke-width="1.5"></line>
					      <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"></line>
					  </svg>
						Удалить пользователя
					</div>`;
			case "modalPlusUser" :
				return `
					<div id="modalPlusUser" class="dialog" role="dialog">
						<div class="dialog__body">
							<div id="modalForm">
								{{{ Close onClick=onSubmitRemoveModal }}}
							  <div>
									<label class="text-field__label">
									<span>Добавить пользователя</span>
										{{{ Input name="login" type="text" class="form__text-input" id="login_field" placeholder="Логин пользователя" }}}
									</label>
								</div>
								{{{
						      	Button
						      	id="ActionModalPlusUser"
						      	class="button"
						      	label="Добавить"
						      	onClick=onSubmitAddUser
					    	}}}
							</div>
						</div>
					</div>
				`;
			case "modalMinusUser" :
				return `
					<div id="modalMinusUser" class="dialog" role="dialog">
						<div class="dialog__body">
							<div id="modalForm">
								{{{ Close onClick=onSubmitRemoveModal }}}
							  <div>
									<label class="text-field__label">
									<span>Удалить пользователя</span>
										{{{ Input name="login" type="text" class="form__text-input" placeholder="логин" }}}
									</label>
								</div>
								{{{
						      	Button
						      	id="ActionModalPlusUser"
						      	class="button"
						      	label="Удалить"
						      	onClick=onSubmit
					    	}}}
							</div>
						</div>
					</div>
				`;
			case "modalAddChat":
				return `
					<div id="modalAddChat" class="dialog" role="dialog">
						<div class="dialog__body">
							<div id="modalForm">
								{{{ Close onClick=onSubmitRemoveModal }}}
							  <div>
									<label class="text-field__label">
									<span>Добавить чат</span>
										{{{ Input name="title" type="text" class="form__text-input" placeholder="Введите название чата" }}}
									</label>
								</div>
								{{{
						      	Button
						      	id="ActionModalAddChat"
						      	class="button"
						      	label="Добавить чат"
						      	onClick=onSubmitAddChat
					    	}}}
							</div>
						</div>
					</div>
				`;
			case "modalDelChat":
				return `
					<div id="modalDelChat" class="dialog" role="dialog">
						<div class="dialog__body">
							<div id="modalForm">
								{{{ Close onClick=onSubmitRemoveModal }}}
							  <div>
									<label class="text-field__label">
									<span>Удалить чат</span>
										{{{ Input name="chatId" type="text" class="form__text-input" placeholder="Введите ID чата" }}}
									</label>
								</div>
								{{{
						      	Button
						      	id="ActionModalDelChat"
						      	class="button"
						      	label="Удалить чат"
						      	onClick=onSubmitDelChat
					    	}}}
							</div>
						</div>
					</div>
				`;
      default:
        return '<div>default</div>';
    }

  }
}

export default withStore(withUser(actionChatModal));
