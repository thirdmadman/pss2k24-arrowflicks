import { IMovieVideoResponse } from '@/interfaces/IMovieVideoResponse';
import { getMoveVideosResponseMock } from '../../../__tests__/mocks/getMoveVideosResponseMock';

export async function getMoveVideos(moveId: string) {
  if (process.env.IS_FAKE_API) {
    return getMoveVideosResponseMock;
  }

  const resultUrl = `https://api.themoviedb.org/3/movie/${moveId}/videos?language=en-US`;
  const response = await fetch(resultUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
    next: { revalidate: 60 * 60 * 24 },
  });
  const result = (await response.json()) as IMovieVideoResponse;

  return result;
}
