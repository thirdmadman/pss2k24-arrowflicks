'use client';

import { getColor } from '@/theme/theme';
import { IconStar } from '@/app/components/shared/icons/IconStar';
import { Group, Text, UnstyledButton } from '@mantine/core';
import classes from '@/app/components/shared/MyRatingNumber/MyRatingNumber.module.css';
import DataLocalStorageProvider from '@/lib/services/DataLocalStorageProvider';
import { IUserMovieRating } from '@/interfaces/IUserMovieRating';
import { UserRatingModal } from '@/app/components/shared/UserRatingModal/UserRatingModal';
import { useEffect, useState } from 'react';

interface IRatingNumberProps {
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

export function MyRatingNumber(props: IRatingNumberProps) {
  const { movieId, title, image, year, rating, reviewsCount, genres } = props;
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [userRating, setUserRating] = useState<IUserMovieRating | null>(null);

  let starIcon = <IconStar color={getColor('purple', 5)}></IconStar>;
  useEffect(() => {
    const { userData } = DataLocalStorageProvider.getData();
    const moviesRating = userData.userMoviesRating;
    if (Boolean(moviesRating) && moviesRating.length >= 0) {
      setUserRating(moviesRating.find((el) => el.movieId === movieId) ?? null);
    }
  }, [isModalOpened, movieId]);

  if (userRating === null) {
    starIcon = <IconStar color={getColor('grey', 3)} />;
  }

  return (
    <>
      <UnstyledButton onClick={() => setIsModalOpened(true)} classNames={{ root: classes.root }}>
        <Group wrap="nowrap" gap="4px">
          {starIcon}
          <Text size="16px" fw={700} c="black" pr="4px">
            {userRating?.myRating}
          </Text>
        </Group>
      </UnstyledButton>
      {isModalOpened && (
        <UserRatingModal
          existingRating={userRating?.myRating}
          movieId={movieId}
          title={title}
          modalState={isModalOpened}
          setModalState={setIsModalOpened}
          image={image.src}
          year={year}
          rating={rating}
          reviewsCount={reviewsCount}
          genres={genres?.join(';')}
        />
      )}
    </>
  );
}
