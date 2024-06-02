import { IMovieDetailsResponse } from '@/interfaces/IMovieDetailsResponse';

export async function getMoveDetails(moveId: string) {
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
