export interface IUserMovieRating {
  movieId: string;
  image: string | undefined;
  title: string;
  myRating: number;
  year: number;
  rating: number | undefined;
  reviewsCount: number | undefined;
  genres: string | undefined;
}
