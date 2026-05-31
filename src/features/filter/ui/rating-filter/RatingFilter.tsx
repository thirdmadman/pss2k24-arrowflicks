'use client';

import { Group, Stack, Text } from '@mantine/core';
import { useGetQuery } from '@/shared/lib';
import { InputNumber } from '@/shared/ui/input-number';
import classes from './styles.module.scss';

interface IRatingFilterProps {
  ratingFrom: string | undefined;
  ratingTo: string | undefined;
}

export function RatingFilter({ ratingFrom, ratingTo }: IRatingFilterProps) {
  const [setGetQueryRatingFrom] = useGetQuery('ratingFrom');
  const [setGetQueryRatingTo] = useGetQuery('ratingTo');

  return (
    <Stack gap="8px" justify="space-between" className={classes.rating}>
      <Text fw="bold" size="16px" lh="22px">
        Ratings
      </Text>
      <Group wrap="nowrap">
        <InputNumber
          min={1}
          max={10}
          value={ratingFrom ? parseInt(ratingFrom, 10) : undefined}
          placeholder="From"
          onChangeAction={(val) => setGetQueryRatingFrom(val.toString(), true)}
        />
        <InputNumber
          min={1}
          max={10}
          value={ratingTo ? parseInt(ratingTo, 10) : undefined}
          placeholder="To"
          onChangeAction={(val) => setGetQueryRatingTo(val.toString(), true)}
        />
      </Group>
    </Stack>
  );
}
