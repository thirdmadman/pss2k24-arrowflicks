import { IMovieDiscoverResponse } from '@/types/interfaces/IMovieDiscoverResponse';
import { moviesDiscoverResponseMock } from '../../../__tests__/mocks/moviesDiscoverResponseMock';

export async function getMovieDiscoveryPaginatedList(
  filters: {
    ratingFrom?: string;
    ratingTo?: string;
    sortBy?: string;
    releaseYear?: string;
    genres?: string;
  },
  pagination: { page?: string }
) {
  if (process.env.IS_FAKE_API) {
    return moviesDiscoverResponseMock;
  }
  const { ratingFrom, ratingTo, sortBy, releaseYear, genres } = filters;
  const { page } = pagination;

  const paramPage = page ? `&page=${page}` : '';
  const paramWithGenres = genres ? `&with_genres=${genres.replaceAll(';', '|')}` : '';
  const paramYear = releaseYear ? `&year=${releaseYear}` : '';
  const paramSortBy = sortBy ? `&sort_by=${sortBy}` : '';
  const paramRatingFrom = ratingFrom ? `&vote_average.gte=${ratingFrom}` : '';
  const paramRatingTo = ratingTo ? `&vote_average.lte=${ratingTo}` : '';

  const resultUrl = `${process.env.TMDB_API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US${paramPage}${paramSortBy}${paramYear}${paramWithGenres}${paramRatingFrom}${paramRatingTo}`;

  let response = null;

  try {
    response = await fetch(resultUrl, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      },
      next: { revalidate: 60 * 60 * 24 },
    });
  } catch (e) {
    console.error(e);
    return null;
  }

  let result: null | IMovieDiscoverResponse = null;

  try {
    result = (await response.json()) as IMovieDiscoverResponse;
  } catch (e) {
    console.error(e);
    return null;
  }

  return result;
}
