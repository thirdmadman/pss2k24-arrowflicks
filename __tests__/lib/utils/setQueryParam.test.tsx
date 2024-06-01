import { setQueryParam } from '@/lib/utils/setQueryParam';
import { expect } from 'vitest';

describe('setQueryParam', () => {
  it('should set a query param', () => {
    const currentParams = new URLSearchParams();
    const value = 'some-value';
    const paramName = 'param-name';
    setQueryParam(currentParams, paramName, value);
    expect(currentParams.has(paramName)).toBeTruthy();
    expect(currentParams.get(paramName)).toEqual(value);
  });

  it('should delete a query param', () => {
    const currentParams = new URLSearchParams();
    const value = 'some-value';
    const paramName = 'param-name';
    setQueryParam(currentParams, paramName, value);
    expect(currentParams.has(paramName)).toBeTruthy();
    setQueryParam(currentParams, paramName, undefined);
    expect(currentParams.has(paramName)).toBeFalsy();
  });

  it('should do nothing when the value is undefined', () => {
    const currentParams = new URLSearchParams();
    const value = 'some-value';
    const paramName = 'param-name';
    setQueryParam(currentParams, paramName, value);
    expect(currentParams.has(paramName)).toBeTruthy();
    setQueryParam(currentParams, paramName, undefined);
    expect(currentParams.has(paramName)).toBeFalsy();
  });
});
