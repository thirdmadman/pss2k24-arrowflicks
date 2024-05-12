import { Container, Group } from '@mantine/core';
import { Metadata } from 'next';
import { SearchBar } from './components/home/SearchBar';
import { InputNumber } from './components/home/InputNumber';
import { MultiSelectInput } from './components/home/MultiSelectInput';

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
        </Group>
      </div>
    </Container>
  );
}
