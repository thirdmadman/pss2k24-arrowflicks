import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { PaginationButton } from '@/widgets/pagination/ui/pagination-button/PaginationButton';

describe('PaginationButton component', () => {
  it('should render without failing', () => {
    const { container } = render(<PaginationButton href={''} />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given text', () => {
    render(<PaginationButton href={''} text="PaginationButtonText" />);
    expect(screen.getByText('PaginationButtonText')).not.toBeNull();
  });
});
