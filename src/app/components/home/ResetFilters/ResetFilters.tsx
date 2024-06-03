import { Group, UnstyledButton, Text } from '@mantine/core';
import classes from '@/app/components/home/ResetFilters/ResetFilters.module.css';
import Link from 'next/link';
import { getColor } from '@/theme/theme';
import { IconClose } from '@/app/components/shared/icons/IconClose';

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
