import { ResetFilters } from '@/widgets/search-filters/ui/reset-filters/ResetFilters';
import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';

describe('ResetFilters component', () => {
  it('should render without failing', () => {
    const { container } = render(<ResetFilters />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', () => {
    render(<ResetFilters />);
    expect(screen.getByText('Reset filters')).not.toBeNull();
  });
});
