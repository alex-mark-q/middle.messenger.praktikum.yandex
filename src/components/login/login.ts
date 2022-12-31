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
    return `
    	<body  class="page">
			  <main class="page__center">
			    <div class="page__form">
			      <section class="login">
						  <form action="" class="form">
						    <div class="form-login__content">

						      <label for="input-username" class="form__label form__label--offset">Логин</label>
						      {{{ Input name="login" type="text" id="input-username" class="form__text-input" placeholder="ivanivanov" }}}

						      <label for="password-input" class="form__label form__label--offset">Пароль</label>
						      {{{ Input name="password" type="password" id="password-input" class="form__text-input" }}}

						    </div>
						    <footer class="form-login__footer">
						    	{{{Button class="button" label="Авторизоваться"}}}
						      <div class="form__links">
						        <a href="#" class="form__link">Нет аккаунта?</a>
						      </div>
						    </footer>

						  </form>
						</section>
			    </div>
			  </main>
			</body>
    `;
  }
}
