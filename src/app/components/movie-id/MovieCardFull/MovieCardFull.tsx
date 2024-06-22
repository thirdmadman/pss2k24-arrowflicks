import { Group, Paper, Stack, Title, Text, Flex } from '@mantine/core';
import Image from 'next/image';
import { MyRatingNumber } from '@/app/components/shared/MyRatingNumber/MyRatingNumber';
import { RatingNumber } from '@/app/components/shared/RatingNumber/RatingNumber';

interface IMovieCardFullProps {
  movieId: string;
  image: {
    src: string | undefined;
    alt: string;
  };
  title: string;
  year: number;
  rating: number | undefined;
  reviewsCount: number | undefined;
  duration: string;
  premiere: string;
  budget: string;
  grossWorldwide: string;
  genres: Array<string> | undefined;
}

export function MovieCardFull(props: IMovieCardFullProps) {
  const { image, title, year, genres, duration, premiere, budget, grossWorldwide, movieId, rating, reviewsCount } =
    props;
  const { src, alt } = image;

  return (
    <Paper p="24px" radius="12px" maw={800} w="100%">
      <Group wrap="nowrap" align="flex-start">
        <Image
          src={src ?? '/images/no-poster-placeholder.svg'}
          alt={alt}
          width={250}
          height={350}
          style={{
            objectFit: src ? 'contain' : 'none',
          }}
        ></Image>
        <Flex direction="column" w="100%" justify="space-between" mih={350} gap="8px">
          <Stack gap="8px">
            <Group wrap="nowrap" justify="space-between" align="flex-start">
              <Title size="20px" lh="24px" c="purple.5" order={3}>
                {title}
              </Title>
              <MyRatingNumber
                movieId={movieId}
                image={{
                  src: src,
                  alt: title,
                }}
                title={title}
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
          <Stack gap="12px">
            <Group gap="8px">
              <Text c="grey.6" size="16px" w="140px" lh="20px">
                Duration
              </Text>
              <Text c="black" size="16px">
                {duration}
              </Text>
            </Group>
            <Group gap="8px">
              <Text c="grey.6" size="16px" w="140px" lh="20px">
                Premiere
              </Text>
              <Text c="black" size="16px">
                {premiere}
              </Text>
            </Group>
            <Group gap="8px">
              <Text c="grey.6" size="16px" w="140px" lh="20px">
                Budget
              </Text>
              <Text c="black" size="16px">
                {budget}
              </Text>
            </Group>
            <Group gap="8px">
              <Text c="grey.6" size="16px" w="140px" lh="20px">
                Gross worldwide
              </Text>
              <Text c="black" size="16px">
                {grossWorldwide}
              </Text>
            </Group>
            <Group gap="8px">
              <Text c="grey.6" size="16px" w="140px" lh="20px">
                Genres
              </Text>
              <Text c="black" size="16px">
                {genres?.join(', ')}
              </Text>
            </Group>
          </Stack>
        </Flex>
      </Group>
    </Paper>
  );
}
