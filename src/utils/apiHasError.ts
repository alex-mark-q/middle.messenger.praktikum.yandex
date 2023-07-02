
export type APIError = {
  reason: string;
};

export function hasError(response: any): response is APIError {

	if(response !== "OK") {
		console.log("apiHasError.ts response", typeof response, response);
		const getReason = JSON.parse(response);
		console.log(getReason);

	  return getReason && getReason.reason;

	}


}
