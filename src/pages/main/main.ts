import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import { registerComponent }  from "../../core";

import Login from "../../components/login";
import Button from "../../components/button";
registerComponent(Login);
registerComponent(Button);

export class Main extends Block {

  constructor() {
    super();

    this.setProps({
      onButtonClick: () => console.log('button is clicked')
    });

  }

  render() {
    return template;
  }
}
