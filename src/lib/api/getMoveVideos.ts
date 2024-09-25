import { IMovieVideoResponse } from '@/types/interfaces/IMovieVideoResponse';
import { getMoveVideosResponseMock } from '../../__tests__/mocks/getMoveVideosResponseMock';

export async function getMoveVideos(moveId: string) {
  if (process.env.IS_FAKE_API) {
    return getMoveVideosResponseMock;
  }

  const resultUrl = `${process.env.TMDB_API_URL}/movie/${moveId}/videos?language=en-US`;

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

  let result: null | IMovieVideoResponse = null;

  try {
    result = (await response.json()) as IMovieVideoResponse;
  } catch (e) {
    console.error(e);
    return null;
  }

  return result;
}
