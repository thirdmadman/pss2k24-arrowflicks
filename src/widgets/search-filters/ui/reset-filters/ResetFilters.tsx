import { Group, UnstyledButton, Text } from '@mantine/core';
import classes from './ResetFilters.module.css';
import Link from 'next/link';
import { getColor } from '@/shared/configs';
import { IconClose } from '@/shared/ui/icons';

export function ResetFilters() {
  return (
    <UnstyledButton component={Link} href="/" h="42px" style={{ display: 'flex' }} classNames={{ root: classes.text }}>
      <Group gap="4px">
        <Text size="14px" lh="20px">
          Reset filters
        </Text>
        <IconClose color={getColor('grey', 6)} />
      </Group>
    </UnstyledButton>
  );
}
