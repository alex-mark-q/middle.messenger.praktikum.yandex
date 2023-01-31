import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import { registerComponent }  from '../../core';
import ProfileUser from '../../layout/profile';
registerComponent(ProfileUser);


export class Profile extends Block {

  constructor() {
    super()
  }

  render() {
    return template;
  }
}
