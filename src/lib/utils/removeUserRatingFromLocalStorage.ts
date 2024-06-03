import { IUserMovieRating } from '@/interfaces/IUserMovieRating';
import DataLocalStorageProvider from '@/lib/services/DataLocalStorageProvider';

export const removeUserRatingFromLocalStorage = (data: IUserMovieRating) => {
  if (!data.movieId || !data.movieName || !data.rating) {
    return;
  }

  const localStorageData = DataLocalStorageProvider.getData();
  const { userData } = localStorageData;
  const moviesRating = userData.userMoviesRating;

  let userRatingDataIndex = -1;

  if (moviesRating.length > 0) {
    userRatingDataIndex = moviesRating.findIndex((el) => el.movieId === data.movieId);
  }

  if (userRatingDataIndex < 0) {
    return;
  }

  const newMoviesRating = [...moviesRating].filter((el, i) => i !== userRatingDataIndex);
  const newUserData = { ...userData, userMoviesRating: newMoviesRating };
  const newLocalStorageData = { ...localStorageData, userData: newUserData };
  DataLocalStorageProvider.setData(newLocalStorageData);
};
