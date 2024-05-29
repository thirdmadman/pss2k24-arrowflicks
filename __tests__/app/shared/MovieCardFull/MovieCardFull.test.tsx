import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { MovieCardFull } from '@/app/components/shared/MovieCardFull/MovieCardFull';

describe('MovieCardFull component', () => {
  it('should render without failing', () => {
    const { container } = render(
      <MovieCardFull
        image={{
          src: undefined,
          alt: '',
        }}
        title={undefined}
        year={undefined}
        rating={undefined}
        userRating={undefined}
        reviewsCount={undefined}
        duration={''}
        premiere={''}
        budget={''}
        grossWorldwide={''}
        genres={undefined}
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain all fields', () => {
    render(
      <MovieCardFull
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
        duration={'10h'}
        premiere={'1998 20 April'}
        budget={'$1000000'}
        grossWorldwide={'$987654321'}
      />
    );

    expect(screen.getByText('MovieCardTitle')).not.toBeNull();
    expect(screen.getByText('9')).not.toBeNull();
    expect(screen.getByText('1901')).not.toBeNull();
    expect(screen.getByText('(1K)')).not.toBeNull();
    expect(screen.getByText('9.8')).not.toBeNull();
    expect(screen.getByText('genre1, genre2')).not.toBeNull();
    expect(screen.getByText('10h')).not.toBeNull();
    expect(screen.getByText('1998 20 April')).not.toBeNull();
    expect(screen.getByText('$1000000')).not.toBeNull();
    expect(screen.getByText('$987654321')).not.toBeNull();
  });
});
