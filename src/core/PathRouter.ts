
export class PathRouter {

	private routes: Record<string, Function> = {};

	use(hash: string, callback: Function) {
		this.routes[hash] = callback;
    return this;
	}
}
