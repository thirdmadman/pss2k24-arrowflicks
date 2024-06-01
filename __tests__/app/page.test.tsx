import Home from '@/app/page';
import { screen } from '@testing-library/react';
import { render } from '../test-utils/render';

describe('Home page', () => {
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

    vi.mock('@/app/components/home/SearchFilters/SearchFilters.tsx', () => ({
      SearchFilters: () => <div>SearchFilters</div>,
    }));

    vi.mock('@/app/components/shared/MoviesPaginatedList/MoviesPaginatedList', () => ({
      MoviesPaginatedList: () => <div>MoviesPaginatedList</div>,
    }));
  });

  it('should render without failing', () => {
    const { container } = render(Home({ searchParams: {} }));
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', () => {
    render(Home({ searchParams: {} }));
    expect(screen.getByText('ArrowFlicks')).not.toBeNull();
    expect(screen.findAllByTitle('Movies')).not.toBeNull();
  });
});
