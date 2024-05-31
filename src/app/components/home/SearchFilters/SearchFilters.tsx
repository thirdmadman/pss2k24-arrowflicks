import { Flex, Group, Stack, Title, Text } from '@mantine/core';
import { InputNumber } from '../../shared/InputNumber/InputNumber';
import { MultiSelectInput } from '../../shared/MultiSelectInput/MultiSelectInput';
import { ResetFilters } from '../../shared/ResetFilters/ResetFilters';
import { SearchBar } from '../../shared/SearchBar/SearchBar';
import { SelectInput } from '../../shared/SelectInput/SelectInput';
import { sortByMap } from '@/lib/utils/sortByMap';

interface ISearchFiltersProps {
  query?: string;
  ratingFrom?: string;
  ratingTo?: string;
  sortBy?: string;
  releaseYear?: string;
  genres?: string;
}

export function SearchFilters(props: ISearchFiltersProps) {
  const { query, ratingFrom, ratingTo, sortBy, releaseYear, genres } = props;
  return (
    <Stack gap="40px">
      <Group justify="space-between" wrap="nowrap" gap="40px">
        <Title size="32px" lh="45px" c="black" order={1} fw="bold">
          Movies
        </Title>
        <SearchBar text={query} />
      </Group>
      <Flex rowGap="24px" columnGap="16px" wrap="wrap" align="flex-end">
        <MultiSelectInput
          queryKey="genres"
          value={genres}
          label={'Genres'}
          options={['Drama', 'Comedy', 'Animation', 'Thriller', 'Fantasy']}
          placeholder="Select genre"
        />
        <SelectInput
          placeholder="Select release year"
          queryKey="releaseYear"
          value={releaseYear}
          label={'Release year'}
          options={['1990', '2000', '2010', '2020']}
          allowDeselect
        />
        <Stack gap="8px" justify="space-between">
          <Text fw="bold" size="16px" lh="22px">
            Ratings
          </Text>
          <Group wrap="nowrap">
            <InputNumber
              min={0}
              max={10}
              value={ratingFrom ? parseInt(ratingFrom, 10) : undefined}
              placeholder="From"
              queryKey="ratingFrom"
            />
            <InputNumber
              min={0}
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
          defaultValueIndex={1}
          allowDeselect={false}
        />
        <ResetFilters />
      </Flex>
    </Stack>
  );
}
