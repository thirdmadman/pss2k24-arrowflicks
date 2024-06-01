import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';
import { MyRatingNumber } from '@/app/components/shared/MyRatingNumber/MyRatingNumber';
import { LOCAL_STORAGE_ITEM_NAME } from '@/constants';

describe('MyRatingNumber component', () => {
  it('should render without failing', () => {
    const { container } = render(<MyRatingNumber movieId="" movieName="" />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given label', () => {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAME,
      JSON.stringify({
        isExists: true,
        userData: {
          userMoviesRating: [{ movieId: '501', movieName: 'The Green Mile', rating: 5 }],
          lastSearchQuery: null,
        },
        version: '0.1',
      })
    );
    render(<MyRatingNumber movieId="501" movieName="The Green Mile" />);
    expect(screen.getByText('5')).not.toBeNull();
  });
});
