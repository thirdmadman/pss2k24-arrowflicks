import { UserRatingModal } from '@/app/components/shared/UserRatingModal/UserRatingModal';
import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';

describe('UserRatingModal component', () => {
  it('should render without failing', () => {
    const { container } = render(
      <UserRatingModal
        movieId={'500'}
        title={'movieName'}
        modalState={false}
        existingRating={undefined}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setModalState={() => {}}
        image={undefined}
        year={0}
        rating={undefined}
        reviewsCount={undefined}
        genres={undefined}
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', () => {
    render(
      <UserRatingModal
        movieId={'500'}
        title={'movieName'}
        modalState={true}
        existingRating={undefined}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setModalState={() => {}}
        image={undefined}
        year={0}
        rating={undefined}
        reviewsCount={undefined}
        genres={undefined}
      />
    );
    expect(screen.getByText('movieName')).not.toBeNull();
  });
});
