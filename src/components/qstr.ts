export const getQueryParam = (key: string): string | null => {
  return localStorage.getItem(`queryParam_${key}`) ?? null;
}

export const hasQueryParam = (key: string, value?: string): boolean => {
  const param = getQueryParam(key);
  if (!param) return false;
  return value === undefined ? true : param === value;
}

export const clearQueryParam = (key: string): void => {
  localStorage.removeItem(`queryParam_${key}`);
}

// Once the document has loaded, store the query parameters in localStorage
// and remove them from the URL.

export const storeQueryParams = (): void => {
  if (!window?.location?.search) return;

  // Store each query parameter in localStorage
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    localStorage.setItem(`queryParam_${key}`, value);
  });

  // Remove query parameters from the URL without reloading the page
  const newUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
};
