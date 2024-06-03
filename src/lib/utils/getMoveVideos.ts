import { IMovieVideoResponse } from '@/interfaces/IMovieVideoResponse';

export async function getMoveVideos(moveId: string) {
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
