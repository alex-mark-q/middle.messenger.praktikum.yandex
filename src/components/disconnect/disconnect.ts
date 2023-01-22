import Block from '../../core/Block';
import template from 'bundle-text:./template.hbs';
import './disconnect.scss';

interface IDisconnectProps {
	fHfStore: Record<string, unknown>[];
}

export class Disconnect extends Block<IDisconnectProps> {

	constructor(fHfStore:IDisconnectProps) {
		console.log(fHfStore, "fHfStore");
		super(fHfStore);
	}

	render() {
		return template;
	}
}
