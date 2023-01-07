import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';

interface ErrorProps {
	text?: string;
}

export class ErrorComponent extends Block<ErrorProps> {

  protected render():string {
    return template;
  }
}
