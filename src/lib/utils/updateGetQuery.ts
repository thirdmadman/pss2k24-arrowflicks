import { setQueryParam } from '@/lib/utils/setQueryParam';

export const updateGetQuery = (key: string, searchQuery: string, currentSearchParams: URLSearchParams) => {
  const current = new URLSearchParams(Array.from(currentSearchParams.entries()));
  setQueryParam(current, key, searchQuery);
  const search = current.toString();
  const query = search ? `?${search}` : '';
  return query;
};
