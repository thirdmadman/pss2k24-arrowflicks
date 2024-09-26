'use client';

import { Group, Stack, Text } from '@mantine/core';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateGetQuery } from '@/shared/lib';
import { InputNumber } from '@/shared/ui/input-number';
import classes from './styles.module.scss';

interface IRatingFilterProps {
  ratingFrom: string | undefined;
  ratingTo: string | undefined;
}

export function RatingFilter({ ratingFrom, ratingTo }: IRatingFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateQuery = (
    value: string,
    currentSearchParams: URLSearchParams | null,
    queryKey: string,
    isReload = false
  ) => {
    const newQuery = updateGetQuery(queryKey, value, currentSearchParams);
    if (isReload) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

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
          onChangeAction={(val) => updateQuery(val.toString(), searchParams, 'ratingFrom', true)}
        />
        <InputNumber
          min={1}
          max={10}
          value={ratingTo ? parseInt(ratingTo, 10) : undefined}
          placeholder="To"
          onChangeAction={(val) => updateQuery(val.toString(), searchParams, 'ratingTo', true)}
        />
      </Group>
    </Stack>
  );
}
