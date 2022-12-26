import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

export class Login extends Block {

  constructor() {
    super()

    this.setProps({
      onButtonClick: () => console.log('button is clicked')
    })
  }

  protected render(): string {
    return template;
  }
}
