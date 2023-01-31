import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';

export class Main extends Block {

  constructor() {
    super()

    this.setProps({
      onButtonClick: () => console.log('button is clicked')
    })
  }

  render() {
    return template;
  }
}
