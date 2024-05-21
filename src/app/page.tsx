import { Container, Group, Stack, Title } from '@mantine/core';
import { Metadata } from 'next';
import { SearchBar } from '@/app/components/shared/SearchBar/SearchBar';
import { InputNumber } from '@/app/components/shared/InputNumber/InputNumber';
import { MultiSelectInput } from '@/app/components/shared/MultiSelectInput/MultiSelectInput';
import { TabButton } from '@/app/components/shared/TabButton/TabButton';
import { Pagination } from '@/app/components/shared/Pagination/Pagination';
import { RatingNumber } from '@/app/components/shared/RatingNumber/RatingNumber';
import { MyRatingNumber } from '@/app/components/shared/MyRatingNumber/MyRatingNumber';
import { MovieCard } from '@/app/components/shared/MovieCard/MovieCard';

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
  path: string;
}) {
  const query = searchParams?.query ?? '';
  const ratingFrom = searchParams?.ratingFrom ?? '';
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const genres = searchParams?.genres;
  return (
    <Container px={0} size="1440">
      <Title c="purple.5" order={1}>
        ArrowFlicks - Movies
      </Title>
      <div className="home-page">
        <Group bg="gray.2">
          <SearchBar text={query} />
          <InputNumber value={parseInt(ratingFrom, 10)} placeholder="Rating from" />
          <MultiSelectInput
            value={genres}
            label={'Genres'}
            options={['Drama', 'Comedy', 'Animation', 'Thriller', 'Fantasy']}
            placeholder="Select genre"
          />
          <Stack>
            <TabButton href="#" text="Movies" isActive />
            <TabButton href="#" text="Rated Movies" />
          </Stack>
          <Pagination searchParams={searchParams} totalItemsCount={100} currentPage={page} itemsPerPage={10} />
          <Group>
            <RatingNumber rating={5} countOfReviews={1000000} />
            <RatingNumber rating={5} countOfReviews={100000} />
            <RatingNumber rating={5} countOfReviews={10000000} />
            <RatingNumber rating={5} countOfReviews={999999} />
            <RatingNumber rating={undefined} countOfReviews={0} />
          </Group>
          <Group>
            <MyRatingNumber rating={5} />
            <MyRatingNumber rating={0} />
          </Group>
          <MovieCard
            image={{ src: undefined, alt: 'image' }}
            title="Film title"
            year={1999}
            rating={8.25}
            userRating={1}
            reviewsCount={100567}
            genres={['Comedy', 'Horror', 'Drama']}
          />
        </Group>
      </div>
    </Container>
  );
}
