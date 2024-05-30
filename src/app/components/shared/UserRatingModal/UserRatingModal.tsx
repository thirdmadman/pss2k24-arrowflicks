'use client';

import { Modal, Stack, Text, Group, Rating, UnstyledButton } from '@mantine/core';
import { IconClose } from '../icons/IconClose';
import { getColor } from '@/theme/theme';
import classes from '@/app/components/shared/UserRatingModal/UserRatingModal.module.css';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { useState } from 'react';
import { saveUserRatingToLocalStorage } from '@/lib/utils/saveUserRatingToLocalStorage';
import { IconStar } from '../icons/IconStar';
import { removeUserRatingFromLocalStorage } from '@/lib/utils/removeUserRatingFromLocalStorage';

interface IUserRatingModalProps {
  movieId: string;
  movieName: string;
  modalState: boolean;
  existingRating: number | undefined;
  setModalState: (sate: boolean) => void;
}

export function UserRatingModal(props: IUserRatingModalProps) {
  const { movieId, movieName, modalState, setModalState, existingRating } = props;
  const [rating, setRating] = useState(existingRating ?? 0);
  const buttonColor = getColor('grey', 5);

  const grayStarColor = getColor('grey', 3);
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
      classNames={{ header: classes.header }}
    >
      <Stack gap="16px" pt="16px">
        <Text size="16px" lh="22px" c="black" fw="bold">
          {movieName}
        </Text>
        <Rating
          count={10}
          value={rating}
          onChange={setRating}
          emptySymbol={<IconStar color={grayStarColor} />}
          fullSymbol={<IconStar color={purpleStarColor} />}
        />
        <Group>
          <PrimaryButton
            text="Save"
            size="medium"
            onClickEvent={() => {
              setModalState(false);
              saveUserRatingToLocalStorage({ movieId, movieName, rating });
            }}
          />
          <UnstyledButton
            c={purpleStarColor}
            size="14px"
            lh="20px"
            fw={600}
            onClick={() => {
              setModalState(false);
              removeUserRatingFromLocalStorage({ movieId, movieName, rating });
            }}
          >
            Remove rating
          </UnstyledButton>
        </Group>
      </Stack>
    </Modal>
  );
}
