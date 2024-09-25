import { Flex, Group, Stack, Text } from '@mantine/core';
import { sortByMap } from '@/shared/configs';
import { getGenresFetchMap } from '@/lib/api/getGenresFetchMap';
import classes from './SearchFilters.module.css';
import { MultiSelectInput } from '@/shared/ui/multi-select-input';
import { SelectInput } from '@/shared/ui/select-input';
import { InputNumber } from '@/shared/ui/input-number';
import { ResetFilters } from './reset-filters';

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

  const currentYear = new Date().getFullYear();
  const minYear = 1895;
  const yearsArray = new Array(currentYear - minYear).fill(1).map((el, i) => String(currentYear - i));

  const genresMap = await getGenresFetchMap();

  return (
    <Flex className={classes.container}>
      {genresMap && (
        <MultiSelectInput
          queryKey="genres"
          value={genres}
          label={'Genres'}
          options={genresMap}
          placeholder="Select genre"
        />
      )}
      <SelectInput
        placeholder="Select release year"
        queryKey="releaseYear"
        value={releaseYear}
        label={'Release year'}
        options={yearsArray}
        allowDeselect
      />
      <Stack gap="8px" justify="space-between" className={classes.rating}>
        <Text fw="bold" size="16px" lh="22px">
          Ratings
        </Text>
        <Group wrap="nowrap">
          <InputNumber
            min={1}
            max={10}
            value={ratingFrom ? parseInt(ratingFrom, 10) : undefined}
            placeholder="From"
            queryKey="ratingFrom"
          />
          <InputNumber
            min={1}
            max={10}
            value={ratingTo ? parseInt(ratingTo, 10) : undefined}
            placeholder="To"
            queryKey="ratingTo"
          />
        </Group>
      </Stack>
      <SelectInput
        placeholder="Select sort by"
        queryKey="sortBy"
        value={sortBy ?? 'Most popular'}
        label={'Sort by'}
        options={sortByMap}
        defaultValueIndex={0}
        allowDeselect={false}
      />
      <ResetFilters />
    </Flex>
  );
}
