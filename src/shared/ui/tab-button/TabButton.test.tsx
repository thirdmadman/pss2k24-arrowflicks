import { TabButton } from '@/shared/ui/tab-button/TabButton';
import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';

describe('TabButton component', () => {
  beforeAll(() => {
    vi.mock('next/font/google', () => ({
      Poppins: () => '',
    }));
  });

  it('should render without failing', () => {
    const { container } = render(<TabButton text="" href="" />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', () => {
    render(<TabButton text="TabButtonText" href="" />);
    expect(screen.getByText('TabButtonText')).not.toBeNull();
  });
});
