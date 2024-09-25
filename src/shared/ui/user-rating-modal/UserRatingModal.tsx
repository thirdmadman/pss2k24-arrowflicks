'use client';

import { Modal, Stack, Text, Group, Rating, UnstyledButton } from '@mantine/core';
import { IconClose } from '@/shared/ui/icons';
import { getColor } from '@/shared/configs';
import classes from './UserRatingModal.module.css';
import { PrimaryButton } from '@/shared/ui/primary-button/PrimaryButton';
import { useState } from 'react';
import { saveUserRatingToLocalStorage } from '@/shared/lib';
import { IconStar } from '@/shared/ui/icons';
import { removeUserRatingFromLocalStorage } from '@/shared/lib';

interface IUserRatingModalProps {
  movieId: string;
  image: string | undefined;
  title: string;
  year: number;
  rating: number | undefined;
  reviewsCount: number | undefined;
  genres: string | undefined;
  modalState: boolean;
  existingRating: number | undefined;
  setModalState: (sate: boolean) => void;
}

export function UserRatingModal(props: IUserRatingModalProps) {
  const { movieId, image, title, year, rating, reviewsCount, genres, modalState, setModalState, existingRating } =
    props;
  const [myRating, setMyRating] = useState(existingRating ?? 0);
  const buttonColor = getColor('grey', 5);

  const greyStarColor = getColor('grey', 3);
  const purpleStarColor = getColor('purple', 5);

  return (
    <Modal
      maw="380px"
      w="100%"
      size="auto"
      radius="8px"
      opened={modalState}
      onClose={() => setModalState(false)}
      title="Your rating"
      centered
      closeButtonProps={{
        icon: <IconClose color={buttonColor} />,
      }}
      classNames={{ header: classes.header, inner: classes.inner }}
    >
      <Stack gap="16px" pt="16px">
        <Text size="16px" lh="22px" c="black" fw="bold">
          {title}
        </Text>
        <Rating
          count={10}
          value={myRating}
          onChange={setMyRating}
          emptySymbol={<IconStar color={greyStarColor} />}
          fullSymbol={<IconStar color={purpleStarColor} />}
        />
        <Group>
          <PrimaryButton
            text="Save"
            size="medium"
            onClickEvent={() => {
              setModalState(false);
              saveUserRatingToLocalStorage({ movieId, title, myRating, image, year, rating, reviewsCount, genres });
            }}
          />
          <UnstyledButton
            c={purpleStarColor}
            size="14px"
            lh="20px"
            fw={600}
            onClick={() => {
              setModalState(false);
              removeUserRatingFromLocalStorage({ movieId, title });
            }}
          >
            Remove rating
          </UnstyledButton>
        </Group>
      </Stack>
    </Modal>
  );
}
