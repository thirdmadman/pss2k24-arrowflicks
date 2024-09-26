import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { ResetFilters } from './ResetFilters';

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
