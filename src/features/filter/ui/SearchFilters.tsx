import { Flex } from '@mantine/core';
import { getGenresFetchMap } from '@/lib/api/getGenresFetchMap';
import { GenresSelect } from './genres-select';
import { RatingFilter } from './rating-filter';
import { ReleaseYearSelect } from './release-year-select';
import { ResetFilters } from './reset-filters';
import classes from './SearchFilters.module.css';
import { SortBySelect } from './sort-by-select/SortBySelect';

interface ISearchFiltersProps {
  ratingFrom?: string;
  ratingTo?: string;
  sortBy?: string;
  releaseYear?: string;
  genres?: string;
}

export async function SearchFilters(props: { searchParams: ISearchFiltersProps }) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const searchParams = props?.searchParams || {};
  const { ratingFrom, ratingTo, sortBy, releaseYear, genres } = searchParams;

  const genresMap = await getGenresFetchMap();

  return (
    <Flex className={classes.container}>
      {genresMap && <GenresSelect genres={genres} genresMap={genresMap} />}
      <ReleaseYearSelect releaseYear={releaseYear} />
      <RatingFilter ratingFrom={ratingFrom} ratingTo={ratingTo} />
      <SortBySelect sortBy={sortBy} />
      <ResetFilters />
    </Flex>
  );
}
