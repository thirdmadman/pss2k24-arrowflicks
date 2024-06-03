export interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: 'Trailer' | 'Featurette' | 'Teaser';
  official: boolean;
  published_at: string;
  id: string;
}

export interface IMovieVideoResponse {
  id: number;
  results: Array<IVideo>;
}
