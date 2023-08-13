class customPromise {
	async map(vals,cb) {
		return Promise.all(
			vals.map(function(val) {
				return new Promise(function(resolve) {
					cb(val,resolve);
				});
			})
		)
	}
}

const Pro = new customPromise();

export default Pro;
