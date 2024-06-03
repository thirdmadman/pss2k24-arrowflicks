import { Container, Group, Stack, Title } from '@mantine/core';
import { Metadata } from 'next';
import { PageLayout } from '@/app/components/shared/PageLayout/PageLayout';
import { SearchBar } from '../components/shared/SearchBar/SearchBar';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Rated movies',
  description: 'Page where are stored all your rated movies (only locally)',
};

export default function Home(props: { searchParams: { [key: string]: string } }) {
  const { searchParams } = props;
  return (
    <>
      <PageLayout>
        <Container w="100%" size="1160px" c="black" py="40px" px="90px" bg="grey.2">
          <Stack gap="40px">
            <Group justify="space-between" gap="40px">
              <Title size="32px" lh="45px" c="black" order={1} fw="bold">
                Rated movies
              </Title>
              <SearchBar searchParams={searchParams} />
            </Group>
            <Group>List of rated movies</Group>
          </Stack>
        </Container>
      </PageLayout>
    </>
  );
}
