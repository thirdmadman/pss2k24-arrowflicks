import { screen } from '@testing-library/react';
import { SearchBar } from '@/app/components/shared/SearchBar/SearchBar';
import { render } from '../../../../test-utils/render';

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
