import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { MovieFullCard } from './MovieFullCard';

describe('MovieFullCard component', () => {
  it('should render without failing', () => {
    const { container } = render(
      <MovieFullCard
        movieId="501"
        image={{ src: undefined, alt: 'image' }}
        title="The Green Mile"
        year={1999}
        rating={9.3}
        reviewsCount={2900000}
        duration={'3h 09m'}
        premiere={'December 6, 1999'}
        budget={'$125,000,000'}
        grossWorldwide={'$760,006,945'}
        genres={['Drama', 'Crime', 'Fantasy']}
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain all fields', () => {
    render(
      <MovieFullCard
        movieId="501"
        image={{ src: undefined, alt: 'image' }}
        title="The Green Mile"
        year={1999}
        rating={9.3}
        reviewsCount={2900000}
        duration={'3h 09m'}
        premiere={'December 6, 1999'}
        budget={'$125,000,000'}
        grossWorldwide={'$760,006,945'}
        genres={['Drama', 'Crime', 'Fantasy']}
      />
    );

    expect(screen.getByText('The Green Mile')).not.toBeNull();
    expect(screen.getByText('9.3')).not.toBeNull();
    expect(screen.getByText('1999')).not.toBeNull();
    expect(screen.getByText('(2.9M)')).not.toBeNull();
    expect(screen.getByText('Drama, Crime, Fantasy')).not.toBeNull();
    expect(screen.getByText('3h 09m')).not.toBeNull();
    expect(screen.getByText('December 6, 1999')).not.toBeNull();
    expect(screen.getByText('$125,000,000')).not.toBeNull();
    expect(screen.getByText('$760,006,945')).not.toBeNull();
  });
});
