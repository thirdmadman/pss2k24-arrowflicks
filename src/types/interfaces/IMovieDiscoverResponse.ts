import { IMovie } from './IMovie';

export interface IMovieDiscoverResponse {
  page: number;
  results: Array<IMovie>;
  total_pages: number;
  total_results: number;
}
