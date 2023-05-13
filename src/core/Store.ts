import EventBus from './EventBus';

export class Store extends EventBus
{
	// оператор as используется в качестве утверждения типа. В качестве примера
	// document.getElementById("main_canvas") as HTMLCanvasElement;
	private state: State = {} as State;

	// передадим в конструктор объект defaultState с которым будем работать
	constructor(defaultState: State)
	{
		super();
		this.state = defaultState;
		this.setState(defaultState);
	}
	// определим методы для работы с объектом State
	public getState()
	{
		return this.state
	}
	// передаем новое состояние через объект nextState
	public setState(nextState)
	{
		console.log("current and next state ",this.state, nextState);
		const prevState = this.state;
		this.state = {...this.state, ...nextState};
		this.emit("change", prevState, nextState);
	}

	public dispatch(nextStateOrAction, payload)
	{

		if(typeof nextStateOrAction === "function") {
			nextStateOrAction(this.dispatch.bind(this), this.state, payload);
		} else {
			this.setState({...nextStateOrAction});
		}

	}

}
