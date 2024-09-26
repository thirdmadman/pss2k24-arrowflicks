import { screen } from '@testing-library/react';
import { getGenresFetchMapMock } from '@/__tests__/mocks/getGenresFetchMapMock';
import { render } from '@/__tests__/test-utils/render';
import { SearchFilters } from './SearchFilters';

describe('SearchFilters component', () => {
  beforeAll(() => {
    vi.mock('@/lib/api/getGenresFetchMap', () => ({
      getGenresFetchMap: () => getGenresFetchMapMock,
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
    const component = await SearchFilters({ searchParams: {} });
    const { container } = render(component);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain all titles', async () => {
    const component = await SearchFilters({ searchParams: {} });
    render(component);
    expect(screen.getAllByText('Genres')).not.toBeNull();
    expect(screen.getAllByText('Release year')).not.toBeNull();
    expect(screen.getAllByText('Ratings')).not.toBeNull();
    expect(screen.getAllByText('Sort by')).not.toBeNull();
    expect(screen.getAllByText('Reset filters')).not.toBeNull();
  });
});
