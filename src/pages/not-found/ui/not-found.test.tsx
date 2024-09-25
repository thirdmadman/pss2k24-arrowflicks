import { render } from '@/__tests__/test-utils/render';
import { NotFoundPage } from './NotFoundPage';
import { screen } from '@testing-library/react';

describe('Not found page', () => {
  beforeAll(() => {
    vi.mock('next/image', () => ({
      default: () => <div>img</div>,
    }));

    beforeAll(() => {
      vi.mock('next/font/google', () => ({
        Poppins: () => '',
      }));
    });

    vi.mock('next/navigation', async () => {
      const actual = await vi.importActual('next/navigation');
      return {
        ...actual,
        useRouter() {
          return {
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
          };
        },
        usePathname: () => '',
        useSearchParams() {
          return {
            get(value: string) {
              return value;
            },
          };
        },
      };
    });

    vi.mock('@mantine/core', async () => {
      const actual = await vi.importActual('@mantine/core');
      return {
        ...actual,
        Button: () => <button>Button</button>,
      };
    });
  });

  it('should render without failing', () => {
    const { container } = render(<NotFoundPage />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('ArrowFlicks')).not.toBeNull();
    expect(screen.findAllByTitle('Not Found')).not.toBeNull();
    expect(screen.findAllByTitle('We can’t find the page you are looking for')).not.toBeNull();
  });
});
