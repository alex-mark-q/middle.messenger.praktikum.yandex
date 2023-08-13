import Block from 'core/Block';
import template from 'bundle-text:./template.hbs';
import './message.scss';
import Handlebars from 'handlebars';
import Pro from "../../utils/promise";
import controllerMessage from "../../controllers/messageControllers";

Handlebars.registerHelper('theActiveChat', function (value: string) {

	// return Pro.map([searchId(), controllerMessage.connect()], function(pr, done) {
	// 	Promise.resolve(pr).then(function(v) {
	// 		done(v);
	// 	}, done)
	// }).then(function(vals) {
	// 	// console.log(vals);
	// 	return vals
	// });

	// function searchId() {
	// 	return String(value) === new Proxy(new URLSearchParams(window.location.search), {
	// 		get: (searchParams, name) => searchParams.get(String(name))
	// 	}).id;
	// }

	const searchId = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, name): ISearchProps => searchParams.get(String(name))
	});
	return String(value) === searchId.id;

})

interface MessageProps {
	messageStore:  Record<string, unknown>[];
}

export class Message extends Block<MessageProps> {
	constructor(messageStore:MessageProps) {
		super(messageStore);

		// this.setProps({
		// 	onClickEventListener: async () => {
		// 		console.log("message.ts click a");
		// 		await controllerMessage.connect();
		// 	}
		// })

	}


	render(): string {
		console.log("message.ts ", messageStore);
    return template;
  }
}
