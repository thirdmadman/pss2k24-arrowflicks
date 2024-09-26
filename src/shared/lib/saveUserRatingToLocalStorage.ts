import DataLocalStorageProvider from '@/lib/services/DataLocalStorageProvider';
import { IUserMovieRating } from '@/types/interfaces/IUserMovieRating';

export const saveUserRatingToLocalStorage = (data: IUserMovieRating) => {
  if (!data.movieId || !data.title || !data.myRating) {
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
    moviesRating.push(data);
    const newUserData = { ...userData, userMoviesRating: moviesRating };
    const newLocalStorageData = { ...localStorageData, userData: newUserData };
    DataLocalStorageProvider.setData(newLocalStorageData);
    return;
  }

  const newMoviesRating = [...moviesRating];
  newMoviesRating[userRatingDataIndex].myRating = data.myRating;
  const newUserData = { ...userData, userMoviesRating: newMoviesRating };
  const newLocalStorageData = { ...localStorageData, userData: newUserData };
  DataLocalStorageProvider.setData(newLocalStorageData);
};
