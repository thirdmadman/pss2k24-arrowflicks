export const mapGenresIdToLabels = (genresMap: Array<{ value: string; label: string }>, array: Array<number>) => {
  const result = array.map((el) => genresMap.find((genreEl) => genreEl.value === el.toString())?.label ?? '');
  return result;
};
