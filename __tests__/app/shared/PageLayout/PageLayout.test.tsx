import { PageLayout } from '@/app/components/shared/PageLayout/PageLayout';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';

describe('PageLayout component', () => {
  beforeAll(() => {
    vi.mock('next/font/google', () => ({
      Poppins: () => '',
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

  it('should render without failing', () => {
    const { container } = render(<PageLayout>text</PageLayout>);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain text', () => {
    render(<PageLayout>Some cool text</PageLayout>);
    expect(screen.getByText('Some cool text')).not.toBeNull();
  });
});
