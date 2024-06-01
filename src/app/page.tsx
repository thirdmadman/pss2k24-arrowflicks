import { Container, Group, Stack, Title } from '@mantine/core';
import { Metadata } from 'next';
import { PageLayout } from './components/shared/PageLayout/PageLayout';
import { SearchFilters } from './components/home/SearchFilters/SearchFilters';
import { Suspense } from 'react';
import { SearchBar } from './components/shared/SearchBar/SearchBar';
import { MoviesPaginatedList } from './components/shared/MoviesPaginatedList/MoviesPaginatedList';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export default function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <>
      <PageLayout>
        <Container w="100%" size="1160px" c="black" py="40px" px="90px" bg="grey.2">
          <Stack gap="40px">
            <Group justify="space-between" wrap="nowrap" gap="40px">
              <Title size="32px" lh="45px" c="black" order={1} fw="bold">
                Movies
              </Title>
              <SearchBar searchParams={searchParams} />
            </Group>
            <Stack>
              <SearchFilters searchParams={searchParams} />
            </Stack>

            <Suspense>
              <MoviesPaginatedList searchParams={searchParams} />
            </Suspense>
          </Stack>
        </Container>
      </PageLayout>
    </>
  );
}
