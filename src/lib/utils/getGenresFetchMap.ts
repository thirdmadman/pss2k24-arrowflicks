interface IGenresResponse {
  genres: Array<{ id: number; name: string }>;
}

export async function getGenresFetchMap() {
  const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
    next: { revalidate: 60 * 60 * 24 },
  });
  const result = (await response.json()) as IGenresResponse;
  return result.genres.map((el) => ({ value: el.id, label: el.name }));
}
