import { BreadcrumbsNavigation } from '@/app/components/shared/BreadcrumbsNavigation/BreadcrumbsNavigation';
import { MovieCardDescription } from '@/app/components/shared/MovieCardFull/MovieCardDescription';
import { MovieCardFull } from '@/app/components/shared/MovieCardFull/MovieCardFull';
import { PageLayout } from '@/app/components/shared/PageLayout/PageLayout';
import { IMAGES_POSTERS_BASE } from '@/constants';
import { IVideo } from '@/interfaces/IMovieVideoResponse';
import { getMoveDetails } from '@/lib/utils/getMoveDetails';
import { getMoveVideos } from '@/lib/utils/getMoveVideos';
import { Container, Stack } from '@mantine/core';

const extractYtTrailerKey = (videos: Array<IVideo>) => {
  const trailers = videos.filter((el) => el.type === 'Trailer');
  const teaser = videos.filter((el) => el.type === 'Teaser');
  const ytKey = trailers.length > 0 ? trailers[0].key : teaser.length > 0 ? teaser[0].key : null;
  return ytKey;
};

const formatCost = (cost: number) =>
  cost.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

const formatDate = (timestamp: string) =>
  new Date(timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

const formatDuration = (durationInMinutes: number) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return `${hours}h ${minutes}m`;
};

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movieId = params.id;
  const movieData = await getMoveDetails(movieId);
  const moveVideos = await getMoveVideos(movieId);
  const ytKey = extractYtTrailerKey(moveVideos.results);

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
            duration={formatDuration(movieData.runtime)}
            premiere={formatDate(movieData.release_date)}
            budget={formatCost(movieData.budget)}
            grossWorldwide={formatCost(movieData.revenue)}
            genres={movieData.genres.map((el) => el.name)}
          />
          <MovieCardDescription
            trailerLink={ytKey ? `https://www.youtube.com/embed/${ytKey}` : null}
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
