import { Flex, Group, Stack, Title, Text } from '@mantine/core';
import { InputNumber } from '../../shared/InputNumber/InputNumber';
import { MultiSelectInput } from '../../shared/MultiSelectInput/MultiSelectInput';
import { ResetFilters } from '../../shared/ResetFilters/ResetFilters';
import { SearchBar } from '../../shared/SearchBar/SearchBar';

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
        <MultiSelectInput
          queryKey="releaseYear"
          value={releaseYear}
          label={'Release year'}
          options={['1990', '2000', '2010', '2020']}
          placeholder="Select release year"
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
            />
            <InputNumber min={0} max={10} value={ratingTo ? parseInt(ratingTo, 10) : undefined} placeholder="To" />
          </Group>
        </Stack>
        <MultiSelectInput
          queryKey="sortBy"
          maxOptions={1}
          value={sortBy ?? 'Most popular'}
          label={'Sort by'}
          options={['Most popular', 'Less popular', 'Most Rating', 'Less Rating']}
          placeholder="Sort by"
        />
        <ResetFilters />
      </Flex>
    </Stack>
  );
}
