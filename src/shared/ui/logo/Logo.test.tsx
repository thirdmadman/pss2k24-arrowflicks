import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { Logo } from '../logo';

describe('Logo component', () => {
  beforeAll(() => {
    vi.mock('next/font/google', () => ({
      Poppins: () => '',
    }));
  });

  it('should render without failing', () => {
    const { container } = render(<Logo />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', () => {
    render(<Logo />);
    expect(screen.getByText('ArrowFlicks')).not.toBeNull();
  });
});
