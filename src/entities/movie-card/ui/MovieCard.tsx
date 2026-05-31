import { Group, Paper, Stack, Title, Text, Flex } from '@mantine/core';
import Link from 'next/link';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { MyRatingNumber } from '@/features/rate-movie'; //TODO: FIX THIS
import { RatingNumber } from '@/shared/ui/rating-number/RatingNumber';
import classes from './Link.module.css';
import cardClasses from './MovieCard.module.css';
import { MovieCardImage } from './MovieCardImage';

interface IMovieCardProps {
  movieId: string;
  image: {
    src: string | undefined;
    alt: string;
  };
  title: string;
  year: number;
  rating: number | undefined;
  reviewsCount: number | undefined;
  genres: Array<string> | undefined;
}

export function MovieCard(props: IMovieCardProps) {
  const { image, title, year, genres, movieId, rating, reviewsCount } = props;
  const { src, alt } = image;

  return (
    <Paper bg="white" className={cardClasses.card}>
      <Group className={cardClasses.cardBody}>
        <MovieCardImage
          src={src ?? 'images/no-poster-placeholder.svg'}
          alt={alt}
          width={120}
          height={170}
          style={{
            objectFit: src ? 'contain' : 'none',
          }}
          data-test-id="MovieCardImage"
        ></MovieCardImage>
        <Flex direction="column" w="100%" justify="space-between" gap="8px" className={cardClasses.description}>
          <Stack gap="8px">
            <Group wrap="nowrap" justify="space-between" align="flex-start">
              <Link href={`/movies/${movieId}`} className={classes.link}>
                <Title c="purple.5" order={3} size="20px" lh="24px">
                  {title.length > 50 ? `${title.slice(0, 50)}...` : title}
                </Title>
              </Link>
              <MyRatingNumber
                data-test-id="MyRatingNumber"
                movieId={movieId}
                title={title}
                image={{
                  src: image.src,
                  alt: image.alt,
                }}
                year={year}
                rating={rating}
                reviewsCount={reviewsCount}
                genres={genres}
              />
            </Group>
            {year && (
              <Text c="grey.6" size="16px">
                {year}
              </Text>
            )}
            <RatingNumber rating={rating} countOfReviews={reviewsCount} />
          </Stack>
          <Group gap="8px" wrap="nowrap" align="flex-start">
            <Text c="grey.6" size="16px">
              Genres
            </Text>
            <Text c="black" size="16px">
              {(genres?.join(', ').length ?? 0) > 30 ? `${genres?.join(', ').slice(0, 30)}...` : genres?.join(', ')}
            </Text>
          </Group>
        </Flex>
      </Group>
    </Paper>
  );
}
