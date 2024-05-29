import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { MovieCard } from '@/app/components/shared/MovieCard/MovieCard';

describe('MovieCard component', () => {
  it('should render without failing', () => {
    const { container } = render(
      <MovieCard
        image={{
          src: undefined,
          alt: '',
        }}
        title={undefined}
        year={undefined}
        rating={undefined}
        userRating={undefined}
        reviewsCount={undefined}
        genres={undefined}
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain reviews number and rating', () => {
    render(
      <MovieCard
        image={{
          src: undefined,
          alt: '',
        }}
        title={'MovieCardTitle'}
        year={1901}
        rating={9.8}
        userRating={9}
        reviewsCount={1000}
        genres={['genre1', 'genre2']}
      />
    );

    expect(screen.getByText('MovieCardTitle')).not.toBeNull();
    expect(screen.getByText('9')).not.toBeNull();
    expect(screen.getByText('1901')).not.toBeNull();
    expect(screen.getByText('(1K)')).not.toBeNull();
    expect(screen.getByText('9.8')).not.toBeNull();
    expect(screen.getByText('genre1, genre2')).not.toBeNull();
  });
});
