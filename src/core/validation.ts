
export enum validationFieldType {
	Login: string;
	Password: string;
}

type validationField = {
	value: string
	type: validationFieldType
}

type Validator = (val: string) => string | void
type MakeValidator = (msg?: string) => Validator

// Сообщения при возникновении ошибки
const message = {
	login: "Логин должен состояить из латинских букв и цифр, также допустимы символы _ и -",
	password: "Пароль должен содержать одну заглавную букву или цифру"
}

// Правила:
const expressions = {
	LOGIN: /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/, // /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/
	PASSWORD: /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,40}$/,
	//FULL_NAME:
}
// Проверка первого и второго поля
function validateField (val: string, exp: RegExp) {
	return exp.test(val);
}

class Validation<MakeValidator> {
	validate(rules: validationField): string  {
		let errorMessage = '';
		for(let i = 0; i < rules.length; i++) {
			const { type, value } = rules[i];
			if(type === validationFieldType.Login) {
				// console.log(validateField(value, expressions.LOGIN));
				if(!validateField(value, expressions.LOGIN)) {
					errorMessage = message.login;
					break;
				}
			} else if(type === validationFieldType.Password) {
				if(!validateField(value, expressions.PASSWORD)) {
					errorMessage = message.password;
					break;
				}
			}
		}
		return errorMessage;
	}
}

export default Validation;
