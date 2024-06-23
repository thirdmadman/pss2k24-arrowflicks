export function generateSuspenseKeyBySearchParams(
  searchParams: { [key: string]: string | Array<string> | undefined } | undefined | null,
  toInclude: Array<string> | null = null
) {
  if (!searchParams) {
    return '';
  }

  if (typeof searchParams !== 'object' || Object.keys(searchParams).length === 0) {
    return '';
  }

  const filteredElements = Object.keys(searchParams)
    .map((key) => searchParams[key])
    .filter((el) => Boolean(el));

  if (!toInclude || toInclude.length === 0) {
    return filteredElements.filter((el) => Boolean(el)).join('_');
  }

  const filteredKeys = Object.keys(searchParams).filter((el) => toInclude.includes(String(el)));

  return filteredKeys.map((key) => searchParams[key]).join('_');
}
