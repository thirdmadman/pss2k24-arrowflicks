import { Center, Container, Stack } from '@mantine/core';
import { getMoveDetails } from '@/lib/api/getMoveDetails';
import { getMoveVideos } from '@/lib/api/getMoveVideos';
import { MovieFullCard } from '@/entities/movie-full-card';
import { MovieFullCardDescription } from '@/entities/movie-full-card-description';
import { IMAGES_POSTERS_BASE } from '@/shared/configs';
import { extractYtTrailerKey, formatDate, formatDuration } from '@/shared/lib';
import { formatCost } from '@/shared/lib/textFormatUtils';
import { BreadcrumbsNavigation } from '@/shared/ui/breadcrumbs-navigation';
import classes from './MovieByIdPage.module.css';
export async function MovieByIdPageContent({ movieId }: { movieId: string }) {
  const movieData = await getMoveDetails(movieId);

  if (!movieData) {
    return (
      <Container w="100%" size="980px" c="black" py="40px" px="90px" bg="grey.2">
        <Center>Server Error, Please try again Later</Center>
      </Container>
    );
  }

  const moveVideos = await getMoveVideos(movieId);
  const ytKey = moveVideos && extractYtTrailerKey(moveVideos.results);
  const movieTitle = movieData.title;
  return (
    <Container w="100%" size="980px" c="black" bg="grey.2" className={classes.container}>
      <Stack gap="20px">
        <BreadcrumbsNavigation
          items={[
            { title: 'Movies', href: '/' },
            { title: movieTitle, href: `/movies/${movieId}` },
          ]}
        />

        <MovieFullCard
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
        <MovieFullCardDescription
          trailerLink={ytKey ? `https://www.youtube.com/embed/${ytKey}` : null}
          description={movieData.overview}
          productionList={movieData.production_companies.map((el) => ({
            name: el.name,
            imageLink: el.logo_path ? `${IMAGES_POSTERS_BASE}/original${el.logo_path}` : undefined,
          }))}
        />
      </Stack>
    </Container>
  );
}
