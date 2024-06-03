import { IVideo } from '@/interfaces/IMovieVideoResponse';

export const extractYtTrailerKey = (videos: Array<IVideo>) => {
  const trailers = videos.filter((el) => el.type === 'Trailer');
  const teaser = videos.filter((el) => el.type === 'Teaser');
  const ytKey = trailers.length > 0 ? trailers[0].key : teaser.length > 0 ? teaser[0].key : null;
  return ytKey;
};
