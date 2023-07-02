const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

enum rejectMessage {
  EmptyMethod = 'не передан метод',
  EmptyUrl = 'не передан метод',
  IsObject = 'поле data должно быть объектом',
  RejectRequest = 'запрос отменен',
  RejectError = 'запрос упал с ошибкой',
  RejectTimeout = 'запрос превысил таймаут'
}

type Data<T> = { [x: string]: T; };

type Options = {
  data?: Data<unknown>;
  method?: string;
  headers?: Data<string>;
  timeout?: number;
}

function queryStringify(data: Data<unknown>) {
  if (typeof data !== 'object') {
		throw new Error('Data must be object');
	}

	// Здесь достаточно и [object Object] для объекта
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

function onload(xhr: XMLHttpRequest, resolve: (value: (XMLHttpRequest | PromiseLike<XMLHttpRequest>)) => void, reject: (value: unknown) => void) {
  return function () {
    const startObject = xhr.responseText.trim().startsWith('{');
    const startArray = xhr.responseText.trim().startsWith('[');

    const endObject = xhr.responseText.trim().endsWith('}');
    const endArray = xhr.responseText.trim().endsWith(']');

    const isStartBracket = startObject || startArray;
    const isEndBracket = endObject || endArray;

    const isJson = isStartBracket && isEndBracket;
    const badResponse = !xhr.status.toString().startsWith('2');

    const done = badResponse ? reject : resolve;

    done(isJson ? JSON.parse(xhr.responseText) : xhr.responseText);
    xhr.abort();
  };
}

let headers = { 'Content-Type': 'application/json' };
class HTTPTransport {

	get (url, data = {}) {
		console.log("Get Data", url, data);
		return this.request(url, {data, method: METHODS.GET});
	};

	post (url, data = {}) {
		console.log("Post Data", url, data);
		return this.request(url, {data, method: METHODS.POST, headers});
	};

	put (url, data = {}) {
		return this.request(url, {data, method: METHODS.PUT}, data?.timeout);
	};

	del (url, data = {}) {
		return this.request(url, {data, method: METHODS.DELETE}, data?.timeout);
	};

	request (url: string | URL, options: Options, timeout = 5000) {
		console.log("Get Request", url, options);

		const {headers = {}, method, data} = options;


		const promise = new Promise(function(resolve, reject) {
			if (!method) {
				reject(rejectMessage.EmptyMethod);
				return;
			}
			if (!url) {
        reject(rejectMessage.EmptyUrl);
        return;
      }

	    const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.GET;
			if(isGet) {
				console.log("isGet " , `${process.env.API_ENDPOINT}${url}${queryStringify(data)}`);
			}

	    xhr.open(
				method, (isGet ? `${process.env.API_ENDPOINT}${url}${queryStringify(data)}` : `${process.env.API_ENDPOINT}${url}`),
			);

			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});

	    xhr.onload = onload(xhr, resolve, reject);

	    xhr.withCredentials = true;
	    xhr.onabort = reject; //(throw new Error(rejectMessage.RejectRequest));
	    xhr.onerror = reject; //(rejectMessage.RejectError);

	    xhr.timeout = timeout;
	    xhr.ontimeout = reject; //(rejectMessage.RejectTimeout);

		  if (isGet) {
		  	console.log("options request ", method, data);
			  xhr.send();
			} else {
				// @ts-ignore
				xhr.send(JSON.stringify(data));
			}
	  });
	  return promise;
	};
}

const transport = new HTTPTransport();

export default transport;
