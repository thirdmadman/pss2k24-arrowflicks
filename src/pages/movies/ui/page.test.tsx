/* eslint-disable @typescript-eslint/await-thenable */

import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { MovieByIdPage } from './MovieByIdPage';

const mocks = vi.hoisted(() => {
  return {
    MovieByIdPageContent: vi.fn(() => <div>MovieByIdPageContent</div>),
  };
});

describe('MovieByIdPage page', () => {
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

    vi.mock('./MovieByIdPageContent', () => ({
      MovieByIdPageContent: mocks.MovieByIdPageContent,
    }));
  });

  it('should render without failing', async () => {
    const { container } = render(await MovieByIdPage({ params: { id: '0' } }));
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', async () => {
    render(await MovieByIdPage({ params: { id: '0' } }));
    expect(screen.getByText('ArrowFlicks')).not.toBeNull();
    expect(screen.findAllByTitle('Movies')).not.toBeNull();

    expect(mocks.MovieByIdPageContent).toBeCalledWith({ movieId: '0' }, {});
  });
});
