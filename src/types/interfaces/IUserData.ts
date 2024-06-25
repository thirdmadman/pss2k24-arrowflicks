import { IUserMovieRating } from '@/types/interfaces/IUserMovieRating';

export interface IUserData {
  userMoviesRating: Array<IUserMovieRating>;
  lastSearchQuery: string | null;
}
