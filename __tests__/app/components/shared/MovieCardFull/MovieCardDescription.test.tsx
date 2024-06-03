import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';
import { MovieCardDescription } from '@/app/components/movie-id/MovieCardDescription/MovieCardDescription';

describe('MovieCardDescription component', () => {
  it('should render without failing', () => {
    const { container } = render(
      <MovieCardDescription
        trailerLink={'https://www.youtube.com/embed/U2Qp5pL3ovA?si=-ulcCqiz7otX3Hww'}
        description={
          'Dan Browns controversial best-selling novel about a powerful secret thats been kept under wraps for thousands of years comes to the screen in this suspense thriller from Director Ron Howard.'
        }
        productionList={[
          { name: 'Castle Rock Entertainment', imageLink: undefined },
          { name: 'Darkwoods Productions', imageLink: undefined },
          { name: 'Warner Bros. Pictures', imageLink: undefined },
        ]}
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain all fields', () => {
    render(
      <MovieCardDescription
        trailerLink={'https://www.youtube.com/embed/U2Qp5pL3ovA?si=-ulcCqiz7otX3Hww'}
        description={
          'Dan Browns controversial best-selling novel about a powerful secret thats been kept under wraps for thousands of years comes to the screen in this suspense thriller from Director Ron Howard.'
        }
        productionList={[
          { name: 'Castle Rock Entertainment', imageLink: undefined },
          { name: 'Darkwoods Productions', imageLink: undefined },
          { name: 'Warner Bros. Pictures', imageLink: undefined },
        ]}
      />
    );

    expect(
      screen.getByText(
        'Dan Browns controversial best-selling novel about a powerful secret thats been kept under wraps for thousands of years comes to the screen in this suspense thriller from Director Ron Howard.'
      )
    ).not.toBeNull();
    expect(screen.getByText('Castle Rock Entertainment')).not.toBeNull();
    expect(screen.getByText('Darkwoods Productions')).not.toBeNull();
    expect(screen.getByText('Warner Bros. Pictures')).not.toBeNull();
  });
});
