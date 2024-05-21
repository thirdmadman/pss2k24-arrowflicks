import { Group, Paper, Stack, Title, Text, Flex } from '@mantine/core';
import Image from 'next/image';
import { MyRatingNumber } from '../MyRatingNumber/MyRatingNumber';
import { RatingNumber } from '../RatingNumber/RatingNumber';

interface IMovieCardProps {
  image: {
    src: string | undefined;
    alt: string;
  };
  title: string | undefined;
  year: number | undefined;
  rating: number | undefined;
  userRating: number | undefined;
  reviewsCount: number | undefined;
  genres: Array<string> | undefined;
}

export function MovieCard(props: IMovieCardProps) {
  const { image, title, year, genres } = props;
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
        ></Image>
        <Flex direction="column" w="100%" justify="space-between" mih={170} gap="8px">
          <Stack gap="8px">
            <Group wrap="nowrap" justify="space-between">
              <Title c="purple.5" order={3}>
                {title}
              </Title>
              <div style={{ alignSelf: 'flex-start' }}>
                <MyRatingNumber rating={1} />
              </div>
            </Group>
            {year && (
              <Text c="gray.6" size="16px">
                {year}
              </Text>
            )}
            <RatingNumber rating={1} countOfReviews={1} />
          </Stack>
          <Group gap="8px">
            <Text c="gray.6" size="16px">
              Genres
            </Text>
            <Text c="black" size="16px">
              {genres?.join(', ')}
            </Text>
          </Group>
        </Flex>
      </Group>
    </Paper>
  );
}
