import { Center, Flex, Stack } from '@mantine/core';
import { MovieCard } from '@/app/components/shared/MovieCard/MovieCard';
import { getMovieDiscoveryPaginatedList } from '@/lib/api/getMovieDiscoveryPaginatedList';
import { IMAGES_POSTERS_BASE } from '@/constants';
import { Pagination } from '@/app/components/shared/Pagination/Pagination';
import { getGenresFetchMap } from '@/lib/api/getGenresFetchMap';
import { mapGenresIdToLabels } from '@/lib/utils/mapGenresIdToLabels';

export async function MoviesPaginatedList(props: {
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
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const searchParams = props?.searchParams;

  const ratingFrom = searchParams?.ratingFrom ?? '';
  const ratingTo = searchParams?.ratingTo ?? '';
  const sortBy = searchParams?.sortBy ?? '';
  const releaseYear = searchParams?.releaseYear ?? '';
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const genres = searchParams?.genres;

  const moviesList = await getMovieDiscoveryPaginatedList(
    { ratingFrom, ratingTo, sortBy, releaseYear, genres },
    { page: page.toString() }
  );

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const isMoviesList = moviesList && moviesList.results?.length > 0;
  if (!isMoviesList) {
    return <Center>Server error, please come later</Center>;
  }

  const genresMap = await getGenresFetchMap();

  return (
    <Stack>
      <Flex direction="row" justify="space-between" align="flex-start" wrap="wrap" gap="16px">
        {moviesList.results.map((el) => (
          <MovieCard
            movieId={el.id.toString()}
            image={{
              src: el.poster_path ? `${IMAGES_POSTERS_BASE}/w500${el.poster_path}` : undefined,
              alt: el.title,
            }}
            title={el.title}
            year={parseInt(el.release_date.split('-')[0], 10)}
            rating={el.vote_average}
            reviewsCount={el.vote_count}
            genres={genresMap ? mapGenresIdToLabels(genresMap, el.genre_ids) : undefined}
            key={el.id}
          />
        ))}
      </Flex>

      <Pagination
        searchParams={searchParams}
        totalItemsCount={moviesList.total_results}
        currentPage={page}
        itemsPerPage={20}
      />
    </Stack>
  );
}
