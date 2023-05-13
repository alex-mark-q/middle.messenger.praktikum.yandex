
export class PathRouter {

	private routes: Record<string, Function> = {};

	use(hash: string, callback: Function) {
		this.routes[hash] = callback;
		// console.log(
		// 	"PathRouter return",
		// 	"background: #222; color: #bada55",
		// 	this
    // );
    return this;
	}
}
