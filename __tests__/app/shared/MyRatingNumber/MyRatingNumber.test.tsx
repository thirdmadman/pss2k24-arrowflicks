import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { MyRatingNumber } from '@/app/components/shared/MyRatingNumber/MyRatingNumber';

describe('MyRatingNumber component', () => {
  it('should render without failing', () => {
    const { container } = render(<MyRatingNumber rating={1} />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given label', () => {
    render(<MyRatingNumber rating={1} />);
    expect(screen.getByText('1')).not.toBeNull();
  });
});
