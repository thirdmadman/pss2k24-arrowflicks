import { IUserMovieRating } from './IUserMovieRating';

export interface IUserData {
  userMoviesRating: Array<IUserMovieRating>;
  lastSearchQuery: string | null;
}
