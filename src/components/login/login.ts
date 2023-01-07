import Block from 'core/Block';
import Button from '../button';
import template from 'bundle-text:./template.hbs';

// TODO: не забыть включить стили в компонент

export class Login extends Block {
  constructor() {
    super()

    this.setProps({
			values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
			onInput: (e: InputEvent) => console.log("input"),
			onBlur: (e: InputEvent) => console.log("blur"),
			onFocus: (e: InputEvent) => console.log("focus"),
      onSubmit: (e: InputEvent) => {

      	const login: Nullable<HTMLInputElement> = document.document.getElementsByName(
				  "text"
				) as HTMLDivElement;
				const password: Nullable<HTMLInputElement> = document.document.getElementsByName(
				  "input"
				) as HTMLInputElement;

				if (!login || !password) {
				  throw new Error("нет полей");
				}
				//debugger;
				console.log('action/login', login, password);

      	this.eventBus.emit(Block.EVENTS.FORM_SUBMIT)
      }
    })

  }

  render(): string {
    return template;
  }
}
