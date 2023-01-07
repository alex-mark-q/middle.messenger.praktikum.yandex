import Block from 'core/Block';
import Button from '../button';
import template from 'bundle-text:./template.hbs';

export class Login extends Block {
  constructor() {
    super()

    this.setProps({
      onButtonSubmit: (e: InputEvent) => this.eventBus.emit(Block.EVENTS.FORM_SUBMIT)
    })

  }

  protected render(): string {
    return template;
  }
}
