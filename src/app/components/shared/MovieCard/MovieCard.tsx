import { Group, Paper, Stack, Title, Text, Flex } from '@mantine/core';
import Image from 'next/image';
import { MyRatingNumber } from '@/app/components/shared/MyRatingNumber/MyRatingNumber';
import { RatingNumber } from '@/app/components/shared/RatingNumber/RatingNumber';
import Link from 'next/link';
import classes from '@/app/components/shared/MovieCard/Link.module.css';

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
    <Paper p="24px" radius="12px" maw={482} w="100%">
      <Group wrap="nowrap" align="flex-start">
        <Image
          src={src ?? 'images/no-poster-placeholder.svg'}
          alt={alt}
          width={120}
          height={170}
          style={{
            objectFit: src ? 'contain' : 'none',
          }}
          data-test-id="MovieCardImage"
        ></Image>
        <Flex direction="column" w="100%" justify="space-between" mih={170} gap="8px">
          <Stack gap="8px">
            <Group wrap="nowrap" justify="space-between">
              <Link href={`/movies/${movieId}`} className={classes.link}>
                <Title c="purple.5" order={3}>
                  {title.length > 50 ? `${title.slice(0, 50)}...` : title}
                </Title>
              </Link>

              <div style={{ alignSelf: 'flex-start' }}>
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
              </div>
            </Group>
            {year && (
              <Text c="grey.6" size="16px">
                {year}
              </Text>
            )}
            <RatingNumber rating={rating} countOfReviews={reviewsCount} />
          </Stack>
          <Group gap="8px" wrap="nowrap">
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
