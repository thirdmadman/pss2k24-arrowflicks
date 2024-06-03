import { IMovieVideoResponse } from '@/interfaces/IMovieVideoResponse';
import { extractYtTrailerKey } from '@/lib/utils/extractYtTrailerKey';

describe('extractYtTrailerKey', () => {
  it('should return an array of videos', () => {
    const response: IMovieVideoResponse = {
      id: 1,
      results: [
        {
          iso_639_1: 'en',
          iso_3166_1: 'US',
          name: 'Trailer',
          key: 'trailer',
          site: 'YouTube',
          size: 480,
          type: 'Trailer',
          official: true,
          published_at: '2020-01-01T00:00:00.000Z',
          id: 'trailer',
        },
        {
          iso_639_1: 'en',
          iso_3166_1: 'US',
          name: 'Teaser',
          key: 'teaser',
          site: 'YouTube',
          size: 480,
          type: 'Teaser',
          official: true,
          published_at: '2020-01-01T00:00:00.000Z',
          id: 'teaser',
        },
      ],
    };
    const ytKey = extractYtTrailerKey(response.results);

    expect(ytKey).to.toEqual('trailer');
  });

  it('should return the trailer key', () => {
    const response: IMovieVideoResponse = {
      id: 1,
      results: [
        {
          iso_639_1: 'en',
          iso_3166_1: 'US',
          name: 'Trailer',
          key: 'trailer',
          site: 'YouTube',
          size: 480,
          type: 'Trailer',
          official: true,
          published_at: '2020-01-01T00:00:00.000Z',
          id: 'trailer',
        },
      ],
    };

    const ytKey = extractYtTrailerKey(response.results);

    expect(ytKey).toEqual('trailer');
  });

  it('should return null', () => {
    const response: IMovieVideoResponse = {
      id: 1,
      results: [],
    };

    const ytKey = extractYtTrailerKey(response.results);

    expect(ytKey).toEqual(null);
  });
});
