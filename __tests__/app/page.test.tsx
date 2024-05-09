import Home from '@/app/page';
import { screen } from '@testing-library/react';
import { render } from '../test-utils/render';

describe('Home page', () => {
  beforeAll(() => {
    vi.mock('next/image', () => ({
      default: () => <div>img</div>,
    }));

    vi.mock('@mantine/core', async () => {
      const actual = await vi.importActual('@mantine/core');
      return {
        ...actual,
        Button: () => <button>Button</button>,
      };
    });
  });

  it('should render without failing', () => {
    const { container } = render(Home());
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', () => {
    render(Home());
    expect(screen.getByText('ArrowFlicks - Movies')).not.toBeNull();
  });
});
