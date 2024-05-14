'use client';

import { getColor } from '@/theme/theme';
import { IconStar } from '../icons/IconStar';
import { Group, Text } from '@mantine/core';

interface IRatingNumberProps {
  rating: number | undefined;
  onClickEvent?: () => void;
}

export function MyRatingNumber(props: IRatingNumberProps) {
  const { rating, onClickEvent } = props;
  if (!rating || rating === 0) {
    return <IconStar color={getColor('gray', 3)} />;
  }

  return (
    <Group gap="4px" onClick={onClickEvent ? () => onClickEvent() : undefined}>
      <IconStar color={getColor('purple', 5)}></IconStar>
      <Text size="16px" fw={700} c="black" pr="4px">
        {rating}
      </Text>
    </Group>
  );
}
