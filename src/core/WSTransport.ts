import EventBus from "./EventBus"

export enum WSTransportEvents {
  Connected = "connected",
  Error = "error",
  Message = "message",
  Close = "close",
}

export class WSTransport extends EventBus {
	static WS_URL = 'wss://ya-praktikum.tech/ws/chats';
  protected url: string;
	private socket: WebSocket | null;

	constructor(endpoint: string) {
		super();
		this.url = `${WSTransport.WS_URL}${endpoint}`;
	}
	public connect() {
		this.socket = new WebSocket(this.url);
	}
	public subscribe(socket: WebSocket) {
		this.socket.addEventListener("open", ()=> {
			this.emit(WSTransportEvents.Connected);
		});
	}
}
