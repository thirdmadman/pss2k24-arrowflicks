export const setQueryParam = (currentParams: URLSearchParams, paramName: string, value: string | undefined) => {
  if (value) {
    currentParams.set(paramName, value);
  } else if (currentParams.has(paramName)) {
    currentParams.delete(paramName);
  } else return;
};
