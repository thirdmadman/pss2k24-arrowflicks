import { IMovieDetailsResponse } from '@/interfaces/IMovieDetailsResponse';
import { getMovieDetailsResponseMock } from '../../../__tests__/mocks/getMovieDetailsResponseMock';

export async function getMoveDetails(moveId: string) {
  if (process.env.IS_FAKE_API) {
    return getMovieDetailsResponseMock;
  }

  const resultUrl = `https://api.themoviedb.org/3/movie/${moveId}?language=en-US`;
  const response = await fetch(resultUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
    next: { revalidate: 60 * 60 * 24 },
  });
  const result = (await response.json()) as IMovieDetailsResponse;

  return result;
}
