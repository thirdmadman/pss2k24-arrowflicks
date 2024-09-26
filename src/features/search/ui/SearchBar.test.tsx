import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { SearchBar } from './SearchBar';

describe('SearchBar component', () => {
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

  it('should render without failing', () => {
    const { container } = render(<SearchBar searchParams={{ query: '' }} />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain correct value', () => {
    render(<SearchBar searchParams={{ query: 'SearchBarValue' }} />);
    expect(screen.getByDisplayValue('SearchBarValue')).not.toBeNull();
  });
});
