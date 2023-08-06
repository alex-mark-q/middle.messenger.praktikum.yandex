
export type APIError = {
  reason: string;
};

export function hasError(errorResponse: any): errorResponse is APIError {
  console.log("apiHasError.ts errorResponse", errorResponse);

  return errorResponse && errorResponse.reason;
}
