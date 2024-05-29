import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { SearchBar } from '@/app/components/shared/SearchBar/SearchBar';

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
    const { container } = render(<SearchBar text={''} />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain correct value', () => {
    render(<SearchBar text={'SearchBarValue'} />);
    expect(screen.getByDisplayValue('SearchBarValue')).not.toBeNull();
  });
});
