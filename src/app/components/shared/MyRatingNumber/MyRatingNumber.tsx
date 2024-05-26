'use client';

import { getColor } from '@/theme/theme';
import { IconStar } from '../icons/IconStar';
import { Group, Text, UnstyledButton } from '@mantine/core';
import classes from '@/app/components/shared/MyRatingNumber/MyRatingNumber.module.css';

interface IRatingNumberProps {
  rating: number | undefined;
  onClickEvent?: () => void;
}

export function MyRatingNumber(props: IRatingNumberProps) {
  const { rating, onClickEvent } = props;
  if (!rating || rating === 0) {
    return <IconStar color={getColor('grey', 3)} />;
  }

  return (
    <UnstyledButton
      onClick={onClickEvent ? () => onClickEvent() : undefined}
      disabled={onClickEvent === undefined}
      classNames={{ root: classes.root }}
    >
      <Group wrap="nowrap" gap="4px">
        <IconStar color={getColor('purple', 5)}></IconStar>
        <Text size="16px" fw={700} c="black" pr="4px">
          {rating}
        </Text>
      </Group>
    </UnstyledButton>
  );
}
