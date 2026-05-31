import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { BreadcrumbsNavigation } from './BreadcrumbsNavigation';

describe('BreadcrumbsNavigation component', () => {
  beforeAll(() => {
    vi.mock('next/font/google', () => ({
      Poppins: () => '',
    }));
  });

  it('should render without failing', () => {
    const { container } = render(<BreadcrumbsNavigation items={[{ title: '', href: '' }]} />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain 2 tabs', () => {
    render(
      <BreadcrumbsNavigation
        items={[
          { title: 'Title1', href: '' },
          { title: 'Title2', href: '' },
        ]}
      />
    );
    expect(screen.getByText('Title1')).not.toBeNull();
    expect(screen.getByText('Title2')).not.toBeNull();
  });
});
