import { Group, Paper, Stack, Flex } from '@mantine/core';
import { Skeleton } from '@mantine/core';
import cardClasses from './MovieCard.module.css';

export function MovieCardSkeleton() {
  return (
    <Paper p="24px" className={cardClasses.card}>
      <Group className={cardClasses.cardBody}>
        <Skeleton width="120px" height="170px" style={{ minWidth: '120px', nimHeight: '170px' }} />
        <Flex direction="column" w="100%" justify="space-between" gap="8px" className={cardClasses.description}>
          <Stack gap="8px">
            <Group wrap="nowrap" justify="space-between">
              <Skeleton height={28} />
              <div style={{ alignSelf: 'flex-start' }}>
                <Skeleton width={28} height={28} />
              </div>
            </Group>
            <Skeleton height={20} />
            <Skeleton height={28} />
          </Stack>
          <Group gap="8px" wrap="nowrap">
            <Skeleton height={20} />
          </Group>
        </Flex>
      </Group>
    </Paper>
  );
}
