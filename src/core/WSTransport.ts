import EventBus from "./EventBus"

export enum WSTransportEvents {
  Connected = "connected",
  Error = "error",
  Message = "message",
  Close = "close",
}

export class WSTransport extends EventBus {
	static WS_URL = 'wss://ya-praktikum.tech/ws/chats';

	private socket: WebSocket | null;
	private pingInterval: number = 0;

	constructor(endpoint: string) {
		super();
		this.url = `${WSTransport.WS_URL}${endpoint}`;
	}
	public connect() {
		this.socket = new WebSocket(this.url);
		this.subscribe(this.socket);
		this.setupPing();
	}

	public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket.send(JSON.stringify(data));
  }

	private setupPing() {
    this.pingInterval = window.setInterval(() => {
      this.send({type: 'ping'});
    }, 5000);

  }

	public subscribe(socket: WebSocket) {
		socket.addEventListener("open", (event) => {});
		socket.addEventListener("close", (event) => {});
		socket.addEventListener("error", (event) => {});
		socket.addEventListener("message", (event) => {});
	}
}
