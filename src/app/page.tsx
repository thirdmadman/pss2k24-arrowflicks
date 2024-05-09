import { getColor } from '@/theme/theme';
import { Button, Container, TextInput } from '@mantine/core';
import { Metadata } from 'next';
import { IconSearch } from './components/shared/icons/IconSearch';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export default function Home() {
  const mainColor = getColor('purple', 6);
  const grayColor = getColor('gray', 6);
  const icon = IconSearch(grayColor);
  const buttonSearch = (
    <Button fullWidth color={mainColor}>
      Search
    </Button>
  );
  return (
    <Container c="purple.5" px={0} size="1440">
      <div className="home-page">
        <h1>ArrowFlicks - Movies</h1>
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={icon}
          rightSectionWidth={88}
          rightSection={buttonSearch}
          label="Your email"
          placeholder="Your email"
        />
      </div>
    </Container>
  );
}
