import { getGenresFetchMapMock } from '../../../__tests__/mocks/getGenresFetchMapMock';

interface IGenresResponse {
  genres: Array<{ id: number; name: string }>;
}

export async function getGenresFetchMap() {
  if (process.env.IS_FAKE_API) {
    return getGenresFetchMapMock;
  }

  const resultUrl = `${process.env.TMDB_API_URL}/genre/movie/list?language=en`;

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

  let result: null | IGenresResponse = null;

  try {
    result = (await response.json()) as IGenresResponse;
  } catch (e) {
    console.error(e);
    return null;
  }

  return result.genres.map((el) => ({ value: el.id.toString(), label: el.name }));
}
