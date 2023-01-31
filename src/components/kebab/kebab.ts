import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './kebab.scss';
import actionChatModal from '../components/actionChatModal';
registerComponent(actionChatModal);

interface IKebabProps {
	onClick: () => void;
	events: Record<string, Record<string, (event: Event) => void> | undefined>;
}

export class Kebab extends Block<IKebabProps> {
	constructor(onClick:IKebabProps) {
		super(events: {click: onClick}});
		this.setProps({
      onClickPlus: () => {
      	event.preventDefault();
      	const myDropdownAdd = document.querySelector('.modal__plus');
				if(myDropdownAdd) {
        	myDropdownAdd.style.display = 'block';
        }
      },
			onClickMinus: () => {
      	event.preventDefault();
      	const myDropdownAdd = document.querySelector('.modal__minus');
				if(myDropdownAdd) {
        	myDropdownAdd.style.display = 'block';
        }
      }
		});
	}

	render(): string {
    return template;
  }
}
