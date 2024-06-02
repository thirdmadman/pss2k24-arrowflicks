import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';
import { MoviesPaginatedList } from '@/app/components/shared/MoviesPaginatedList/MoviesPaginatedList';
import { getGenresFetchMapMock } from '../../../../mocks/getGenresFetchMapMock';
import { moviesDiscoverResponseMock } from '../../../../mocks/moviesDiscoverResponseMock';

describe('MoviesPaginatedList component', () => {
  beforeAll(() => {
    vi.mock('@/lib/utils/getGenresFetchMap', () => ({
      getGenresFetchMap: () => getGenresFetchMapMock,
    }));

    vi.mock('@/lib/utils/getMovieDiscoveryPaginatedList', () => ({
      getMovieDiscoveryPaginatedList: () => moviesDiscoverResponseMock,
    }));

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
  });

  it('should render without failing', async () => {
    const component = await MoviesPaginatedList({});
    const { container } = render(component);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given all labels', async () => {
    const component = await MoviesPaginatedList({});
    render(component);
    const cards = moviesDiscoverResponseMock.results.map((el) => el.title);
    cards.forEach((el) => {
      expect(screen.getByText(el)).not.toBeNull();
    });
  });
});
