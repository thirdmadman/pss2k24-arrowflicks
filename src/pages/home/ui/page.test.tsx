import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { HomePage } from './HomePage';

describe('HomePage page', () => {
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

    vi.mock('@/features/filter', () => ({
      SearchFilters: () => <div>SearchFilters</div>,
    }));

    vi.mock('@/widgets/movies-paginated-list', () => ({
      MoviesPaginatedList: () => <div>MoviesPaginatedList</div>,
      MoviesPaginatedListSkeleton: () => <div>MoviesPaginatedListSkeleton</div>,
    }));
  });

  it('should render without failing', async () => {
    const { container } = render(await HomePage({ searchParams: new Promise((resolve) => resolve({})) }));
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', async () => {
    render(await HomePage({ searchParams: new Promise((resolve) => resolve({})) }));
    expect(screen.getByText('ArrowFlicks')).not.toBeNull();
    expect(screen.findAllByTitle('Movies')).not.toBeNull();
  });
});
