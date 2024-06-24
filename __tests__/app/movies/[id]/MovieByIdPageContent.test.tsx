/* eslint-disable max-lines-per-function */
import { MovieByIdPageContent } from '@/app/movies/[id]/MovieByIdPageContent';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { getMovieDetailsResponseMock } from '../../../mocks/getMovieDetailsResponseMock';
import { getMoveVideosResponseMock } from '../../../mocks/getMoveVideosResponseMock';

const mocks = vi.hoisted(() => {
  return {
    BreadcrumbsNavigation: vi.fn(() => <div>BreadcrumbsNavigation</div>),
    MovieCardFull: vi.fn(() => <div>MovieCardFull</div>),
    MovieCardDescription: vi.fn(() => <div>MovieCardDescription</div>),
    getMoveDetails: vi.fn(() => getMovieDetailsResponseMock),
  };
});

describe('MovieByIdPageContent', () => {
  beforeAll(() => {
    vi.mock('next/image', () => ({
      default: () => <div>img</div>,
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

    vi.mock('@mantine/core', async () => {
      const actual = await vi.importActual('@mantine/core');
      return {
        ...actual,
        Button: () => <button>Button</button>,
      };
    });

    vi.mock('@/lib/api/getMoveDetails', () => ({
      getMoveDetails: mocks.getMoveDetails,
    }));

    vi.mock('@/lib/api/getMoveVideos', () => ({
      getMoveVideos: () => getMoveVideosResponseMock,
    }));

    vi.mock('@/app/components/shared/BreadcrumbsNavigation/BreadcrumbsNavigation.tsx', () => ({
      BreadcrumbsNavigation: mocks.BreadcrumbsNavigation,
    }));

    vi.mock('@/app/components/movie-id/MovieCardFull/MovieCardFull', () => ({
      MovieCardFull: mocks.MovieCardFull,
    }));

    vi.mock('@/app/components/movie-id/MovieCardDescription/MovieCardDescription', () => ({
      MovieCardDescription: mocks.MovieCardDescription,
    }));
  });

  it('should render without failing', async () => {
    const { container } = render(await MovieByIdPageContent({ movieId: '0' }));
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain title', async () => {
    render(await MovieByIdPageContent({ movieId: '0' }));

    expect(mocks.BreadcrumbsNavigation).toBeCalledWith(
      {
        items: [
          {
            href: '/',
            title: 'Movies',
          },
          {
            href: '/movies/0',
            title: 'Kingdom of the Planet of the Apes',
          },
        ],
      },
      {}
    );

    expect(mocks.MovieCardFull).toBeCalledWith(
      {
        budget: '$160,000,000',
        duration: '2h 25m',
        genres: ['Science Fiction', 'Adventure', 'Action'],
        grossWorldwide: '$308,839,901',
        image: {
          alt: 'Kingdom of the Planet of the Apes',
          src: 'https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
        },
        movieId: '0',
        premiere: 'May 8, 2024',
        rating: 6.943,
        reviewsCount: 743,
        title: 'Kingdom of the Planet of the Apes',
        year: 2024,
      },
      {}
    );

    expect(mocks.MovieCardDescription).toBeCalledWith(
      {
        description:
          // eslint-disable-next-line prettier/prettier
          'Several generations in the future following Caesar\'s reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.',
        productionList: [
          {
            imageLink: 'https://image.tmdb.org/t/p/original/h0rjX5vjW5r8yEnUBStFarjcLT4.png',
            name: '20th Century Studios',
          },
          {
            imageLink: undefined,
            name: 'Oddball Entertainment',
          },
          {
            imageLink: undefined,
            name: 'Jason T. Reed Productions',
          },
        ],
        trailerLink: 'https://www.youtube.com/embed/Kdr5oedn7q8',
      },
      {}
    );
  });

  it('should render error', async () => {
    mocks.getMoveDetails.mockReturnValueOnce(null as unknown as typeof getMovieDetailsResponseMock);
    render(await MovieByIdPageContent({ movieId: '0' }));
    expect(screen.getByText('Server Error, Please try again Later')).not.toBeNull();
  });
});
