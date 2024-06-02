import { BreadcrumbsNavigation } from '@/app/components/shared/BreadcrumbsNavigation/BreadcrumbsNavigation';
import { MovieCardDescription } from '@/app/components/shared/MovieCardFull/MovieCardDescription';
import { MovieCardFull } from '@/app/components/shared/MovieCardFull/MovieCardFull';
import { PageLayout } from '@/app/components/shared/PageLayout/PageLayout';
import { IMAGES_POSTERS_BASE } from '@/constants';
import { getMoveDetails } from '@/lib/utils/getMoveDetails';
import { Container, Stack } from '@mantine/core';

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movieId = params.id;
  const movieData = await getMoveDetails(movieId);
  const movieTitle = movieData.title;
  return (
    <PageLayout>
      <Container w="100%" size="980px" c="black" py="40px" px="90px" bg="grey.2">
        <Stack gap="20px">
          <BreadcrumbsNavigation
            items={[
              { title: 'Movies', href: '/' },
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              { title: movieTitle, href: `/movies/${params.id}` },
            ]}
          />

          <MovieCardFull
            movieId={movieId}
            image={{
              src: movieData.poster_path ? `${IMAGES_POSTERS_BASE}/original${movieData.poster_path}` : undefined,
              alt: movieTitle,
            }}
            title={movieTitle}
            year={parseInt(movieData.release_date, 10)}
            rating={movieData.vote_average}
            reviewsCount={movieData.vote_count}
            duration={movieData.runtime.toString()}
            premiere={movieData.release_date}
            budget={movieData.budget.toString()}
            grossWorldwide={movieData.revenue.toString()}
            genres={movieData.genres.map((el) => el.name)}
          />
          <MovieCardDescription
            trailerLink={''}
            description={movieData.overview}
            productionList={movieData.production_companies.map((el) => ({
              name: el.name,
              imageLink: el.logo_path ? `${IMAGES_POSTERS_BASE}/original${el.logo_path}` : undefined,
            }))}
          />
        </Stack>
      </Container>
    </PageLayout>
  );
}
