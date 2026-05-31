import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { MovieCard } from './MovieCard';

describe('MovieCard component', () => {
  it('should render without failing', () => {
    const { container } = render(
      <MovieCard
        movieId={''}
        image={{
          src: undefined,
          alt: '',
        }}
        title={'MovieCardTitle'}
        year={1901}
        rating={9.8}
        reviewsCount={1000}
        genres={['genre1', 'genre2']}
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain reviews number and rating', () => {
    render(
      <MovieCard
        movieId={''}
        image={{
          src: undefined,
          alt: '',
        }}
        title={'MovieCardTitle'}
        year={1901}
        rating={9.8}
        reviewsCount={1000}
        genres={['genre1', 'genre2']}
      />
    );

    expect(screen.getByText('MovieCardTitle')).not.toBeNull();
    expect(screen.getByText('1901')).not.toBeNull();
    expect(screen.getByText('(1K)')).not.toBeNull();
    expect(screen.getByText('9.8')).not.toBeNull();
    expect(screen.getByText('genre1, genre2')).not.toBeNull();
  });
});
