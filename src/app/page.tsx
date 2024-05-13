import { Container, Group, Stack } from '@mantine/core';
import { Metadata } from 'next';
import { SearchBar } from './components/shared/SearchBar/SearchBar';
import { InputNumber } from './components/shared/InputNumber/InputNumber';
import { MultiSelectInput } from './components/shared/MultiSelectInput/MultiSelectInput';
import { TabButton } from './components/shared/TabButton/TabButton';
import { PaginationButton } from './components/shared/PaginationButton/PaginationButton';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    ratingFrom?: string;
    ratingTo?: string;
    page?: string;
    sortBy?: string;
    releaseYear?: string;
    genres?: string;
  };
}) {
  const query = searchParams?.query ?? '';
  const ratingFrom = searchParams?.ratingFrom ?? '';
  const genres = searchParams?.genres;
  return (
    <Container c="purple.5" px={0} size="1440">
      <div className="home-page">
        <h1>ArrowFlicks - Movies</h1>
        <Group>
          <SearchBar text={query} />
          <InputNumber value={parseInt(ratingFrom, 10)} placeholder="Rating from" />
          <MultiSelectInput
            value={genres}
            label={'Genres'}
            options={['Drama', 'Comedy', 'Animation', 'Thriller', 'Fantasy']}
            placeholder="Select genre"
          />
          <Stack>
            <TabButton text="Movies" isActive />
            <TabButton text="Rated Movies" />
          </Stack>
          <Group>
            <PaginationButton isChevron chevronDirection="left" isEnabled={false} />
            <PaginationButton text="1" isEnabled={false} />
            <PaginationButton text="2" isSelected />
            <PaginationButton text="3" />
            <PaginationButton isChevron chevronDirection="right" />
          </Group>
        </Group>
      </div>
    </Container>
  );
}
