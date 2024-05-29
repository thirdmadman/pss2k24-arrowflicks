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
import { MovieCardFull } from './components/shared/MovieCardFull/MovieCardFull';
import { MovieCardDescription } from './components/shared/MovieCardFull/MovieCardDescription';
import { BreadcrumbsNavigation } from './components/shared/BreadcrumbsNavigation/BreadcrumbsNavigation';
import { Logo } from './components/shared/Logo/Logo';
import { PageLayout } from './components/shared/PageLayout/PageLayout';

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
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const genres = searchParams?.genres;
  return (
    <Container px={0} size="1440" c="black">
      <Title c="purple.5" order={1}>
        ArrowFlicks - Movies
      </Title>
      <PageLayout>
        <Stack bg="grey.2" py="40px" px="90px">
          <SearchBar text={query} />
          <InputNumber value={parseInt(ratingFrom, 10)} placeholder="Rating from" />
          <MultiSelectInput
            value={genres}
            label={'Genres'}
            options={['Drama', 'Comedy', 'Animation', 'Thriller', 'Fantasy']}
            placeholder="Select genre"
          />
          <Stack>
            <TabButton href="/" text="Movies" />
            <TabButton href="/rated" text="Rated Movies" />
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
          <MovieCardFull
            image={{ src: undefined, alt: 'image' }}
            title="The Green Mile"
            year={1999}
            rating={9.3}
            userRating={1}
            reviewsCount={2900000}
            duration={'3h 09m'}
            premiere={'December 6, 1999'}
            budget={'$125,000,000'}
            grossWorldwide={'$760,006,945'}
            genres={['Drama', 'Crime', 'Fantasy']}
          />
          <MovieCardDescription
            trailerLink={'https://www.youtube.com/embed/U2Qp5pL3ovA?si=-ulcCqiz7otX3Hww'}
            description={
              'Dan Browns controversial best-selling novel about a powerful secret thats been kept under wraps for thousands of years comes to the screen in this suspense thriller from Director Ron Howard.'
            }
            productionList={[
              { name: 'Castle Rock Entertainment', imageLink: undefined },
              { name: 'Darkwoods Productions', imageLink: undefined },
              { name: 'Warner Bros. Pictures', imageLink: undefined },
            ]}
          ></MovieCardDescription>
          <BreadcrumbsNavigation
            items={[
              { title: 'Movies', href: '#' },
              { title: 'Green mile', href: '#' },
            ]}
          />
          <Logo />
        </Stack>
      </PageLayout>
    </Container>
  );
}
