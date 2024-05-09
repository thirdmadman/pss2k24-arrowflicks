import { getColor } from '@/theme/theme';
import { Button, TextInput } from '@mantine/core';
import { IconSearch } from '../IconSearch';

export function Search() {
  const mainColor = getColor('purple', 6);
  const grayColor = getColor('gray', 6);
  const icon = IconSearch(grayColor);
  const buttonSearch = (
    <Button fullWidth color={mainColor}>
      Search
    </Button>
  );

  return (
    <TextInput
      leftSectionPointerEvents="none"
      leftSection={icon}
      rightSectionWidth={88}
      rightSection={buttonSearch}
      label="Your email"
      placeholder="Your email"
    />
  );
}
