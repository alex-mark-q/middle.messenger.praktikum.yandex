
export enum validationFieldType {
	Login: string;
	Password: string;
	FirstName: string;
	SecondName: string;
	Email: string;
	RepeatPassword: string;
	Phone: string;
}

type validationField = {
	value: string
	type: validationFieldType
}

type Validator = (val: string) => string | void
type MakeValidator = (msg?: string) => Validator

// Сообщения при возникновении ошибки
const message = {
	login: "Логин должен состояить из латинских букв и цифр, также допустимы символы _ и -.",
	password: "Пароль должен содержать одну заглавную букву или цифру.",
	fullName: "Допустимы символы латиницы и кириллицы, а также дефис.",
	phone: "Телефон включает от 10 до 15 символов, состоит из цифр, начинается с плюса.",
	email: "Включает цифры и спецсимволы вроде дефиса, должна быть «собака» (@) и точка после неё, перед точкой должны быть буквы"
}

// Правила:
const expressions = {
	LOGIN: /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/, // /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/
	PASSWORD: /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,40}$/,
	FULL_NAME: /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z]+$/,
	EMAIL: /.+@.+\..+/i,
	PHONE: /^[+]?[0-9]{10,15}$/
}

function validateField (val: string, exp: RegExp) {
	return exp.test(val);
}

class Validation<MakeValidator> {
	validate(rules: validationField): string  {
		let errorMessage = '';
		console.log(rules, "value");
		for(let i = 0; i < rules.length; i++) {
			const { type, value } = rules[i];
			if(type && value) {
				if(type === validationFieldType.Login) {
					console.log("validateField ");
					if(!validateField(value, expressions.LOGIN)) {
						errorMessage = message.login;
						break;
					}
				} else if(type === validationFieldType.Password) {
					if(!validateField(value, expressions.PASSWORD)) {
						errorMessage = message.password;
						break;
					}
				} else if(type === validationFieldType.FirstName) {
					if(!validateField(value, expressions.FULL_NAME)) {
						errorMessage = message.fullName;
						break;
					}
				} else if(type === validationFieldType.SecondName) {
					if(!validateField(value, expressions.FULL_NAME)) {
						errorMessage = message.fullName;
						break;
					}
				} else if(type === validationFieldType.Email) {
					if(!validateField(value, expressions.EMAIL)) {
						errorMessage = message.email;
						break;
					}
				} else if(type === validationFieldType.RepeatPassword) {
					if(!validateField(value, expressions.PASSWORD)) {
						errorMessage = message.password;
						break;
					}
				} else if(type === validationFieldType.Phone) {
					if(!validateField(value, expressions.PHONE)) {
						errorMessage = message.phone;
						break;
					}
				}
			}
		}
		return errorMessage;
	}
}

export default Validation;
