import EventBus from './EventBus';

export class Store extends EventBus
{
	// оператор as используется в качестве утверждения типа. В качестве примера
	// document.getElementById("main_canvas") as HTMLCanvasElement;
	private state: State = {} as State;

	// передадим в конструктор объект defaultState с которым будем работать
	constructor(defaultState: State) {
		super();
		this.state = defaultState;
	}
	// определим методы для работы с объектом State
	public getState()
	{
		return this.state
	}
	// передаем новое состояние через объект nextState
	public setState(nextState)
	{
		const prevState = this.state;
		this.state = {this.state, nextState};
		emit("change state", this.state);
	}

	public dispatch(nextStateOrAction)
	{
		setState(nextStateOrAction);
	}

}
