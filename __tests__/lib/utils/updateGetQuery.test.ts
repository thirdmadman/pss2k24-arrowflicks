import { updateGetQuery } from '@/lib/utils/updateGetQuery';
import { URLSearchParams } from 'url';

describe('updateGetQuery', () => {
  it('should return a query string with the updated key-value pair', () => {
    const currentSearchParams = new URLSearchParams();
    const searchQuery = 'searchQuery';
    const key = 'key';
    const query = updateGetQuery(key, searchQuery, currentSearchParams);
    expect(query).toEqual(`?${encodeURIComponent(key)}=${encodeURIComponent(searchQuery)}`);
  });

  it('should return empty string if passed searchParams empty and value empty', () => {
    const currentSearchParams = new URLSearchParams();
    const searchQuery = '';
    const key = 'key';
    const query = updateGetQuery(key, searchQuery, currentSearchParams);
    expect(query).toEqual('');
  });

  it('should return the original query string if the key is not changed', () => {
    const currentSearchParams = new URLSearchParams();
    const searchQuery = 'searchQuery';
    const key = 'key';
    const query = updateGetQuery(key, searchQuery, currentSearchParams);
    expect(query).toEqual(`?${encodeURIComponent(key)}=${encodeURIComponent(searchQuery)}`);
  });
});
