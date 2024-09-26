import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { LOCAL_STORAGE_CONFIGS_VERSION, LOCAL_STORAGE_ITEM_NAME } from '@/shared/configs';
import { MyRatingNumber } from './MyRatingNumber';

describe('MyRatingNumber component', () => {
  it('should render without failing', () => {
    const { container } = render(
      <MyRatingNumber
        movieId=""
        title=""
        image={{
          src: undefined,
          alt: '',
        }}
        year={0}
        rating={undefined}
        reviewsCount={undefined}
        genres={undefined}
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given label', () => {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAME,
      JSON.stringify({
        isExists: true,
        userData: {
          userMoviesRating: [{ movieId: '501', movieName: 'The Green Mile', myRating: 5 }],
          lastSearchQuery: null,
        },
        version: LOCAL_STORAGE_CONFIGS_VERSION,
      })
    );
    render(
      <MyRatingNumber
        movieId="501"
        title="The Green Mile"
        image={{
          src: undefined,
          alt: '',
        }}
        year={0}
        rating={undefined}
        reviewsCount={undefined}
        genres={undefined}
      />
    );
    expect(screen.getByText('5')).not.toBeNull();
  });
});
