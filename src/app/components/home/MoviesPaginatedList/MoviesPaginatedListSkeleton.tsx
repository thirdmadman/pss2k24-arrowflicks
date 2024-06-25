import { Flex, Skeleton, Stack } from '@mantine/core';
import { MovieCardSkeleton } from '@/app/components/shared/MovieCard/MovieCardSkeleton';

const array = new Array(20).fill(1).map((el, i) => i + 1);

export function MoviesPaginatedListSkeleton() {
  return (
    <Stack>
      <Flex direction="row" justify="space-between" align="flex-start" wrap="wrap" gap="16px">
        {array.map((el) => (
          <MovieCardSkeleton key={el} />
        ))}
      </Flex>

      <Skeleton height={30} maw={300} />
    </Stack>
  );
}
