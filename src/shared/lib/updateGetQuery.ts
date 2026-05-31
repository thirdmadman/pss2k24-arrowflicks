import { setQueryParam } from './setQueryParam';

export const updateGetQuery = (
  key: string,
  searchQuery: string | undefined,
  currentSearchParams: URLSearchParams | null
) => {
  const current = new URLSearchParams(Array.from(currentSearchParams?.entries() ?? []));
  setQueryParam(current, key, searchQuery);
  const search = current.toString();
  const query = search ? `?${search}` : '';
  return query;
};
