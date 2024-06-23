import { Group, Paper, Stack, Flex } from '@mantine/core';
import { Skeleton } from '@mantine/core';

export function MovieCardSkeleton() {
  return (
    <Paper p="24px" radius="12px" maw={482} w="100%">
      <Group wrap="nowrap" align="flex-start">
        <Skeleton style={{ width: '120px', height: '170px' }} />
        <Flex direction="column" w="100%" justify="space-between" mih={170} gap="8px">
          <Stack gap="8px">
            <Group wrap="nowrap" justify="space-between">
              <Skeleton height={16} />
              <div style={{ alignSelf: 'flex-start' }}>
                <Skeleton height={16} />
              </div>
            </Group>
            <Skeleton height={16} />
            <Skeleton height={16} />
          </Stack>
          <Group gap="8px" wrap="nowrap">
            <Skeleton height={16} />
          </Group>
        </Flex>
      </Group>
    </Paper>
  );
}
