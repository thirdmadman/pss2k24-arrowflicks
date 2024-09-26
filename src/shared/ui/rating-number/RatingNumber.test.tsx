import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { RatingNumber } from './RatingNumber';

describe('RatingNumber component', () => {
  it('should render without failing', () => {
    const { container } = render(<RatingNumber rating={9.8} countOfReviews={1000} />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain reviews number and rating', () => {
    render(<RatingNumber rating={9.8} countOfReviews={10} />);
    expect(screen.getByText('(10)')).not.toBeNull();
    expect(screen.getByText('9.8')).not.toBeNull();
  });

  it('should contain reviews number in K and rating', () => {
    render(<RatingNumber rating={9.8} countOfReviews={1000} />);
    expect(screen.getByText('(1K)')).not.toBeNull();
    expect(screen.getByText('9.8')).not.toBeNull();
  });

  it('should contain reviews number in M and rating', () => {
    render(<RatingNumber rating={9.8} countOfReviews={1000000} />);
    expect(screen.getByText('(1M)')).not.toBeNull();
    expect(screen.getByText('9.8')).not.toBeNull();
  });
});
