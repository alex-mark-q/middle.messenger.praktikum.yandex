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

class HTTPTransport {

	get = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.GET}, options?.timeout);
	};

	post = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.POST}, options?.timeout);
	};

	put = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.PUT}, options?.timeout);
	};

	delete = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.DELETE}, options?.timeout);
	};

	request = (url: string | URL, options: Options, timeout = 5000) => {
		const {headers = {}, method, data} = options;

		return new Promise(function(resolve, reject) {
			if (!method) {
				reject(rejectMessage.EmptyMethod);
				return;
			}
			if (!this.url) {
        reject(rejectMessage.EmptyUrl);
        return;
      }

	    const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.GET;

	    xhr.open(
				method,
				isGet && !!data ? `${process.env.API_ENDPOINT}${queryStringify(data)}` : process.env.API_ENDPOINT,
			);

			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});

	    xhr.onload = function() {
		    resolve(xhr);
	    };

	    xhr.onabort = reject(rejectMessage.RejectRequest);
	    xhr.onerror = reject(rejectMessage.RejectError);

	    xhr.timeout = timeout;
	    xhr.ontimeout = reject(rejectMessage.RejectTimeout);

		  if (isGet || !data) {
			  xhr.send();
			} else {
				// @ts-ignore
				xhr.send(data);
			}
	  });
	};
}

const transport = new HTTPTransport();

export default transport;
