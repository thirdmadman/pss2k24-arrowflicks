import { Container, Group, Stack, Title } from '@mantine/core';
import { Metadata } from 'next';
import { PageLayout } from '@/app/components/shared/PageLayout/PageLayout';
import { SearchFilters } from '@/app/components/home/SearchFilters/SearchFilters';
import { Suspense } from 'react';
import { MoviesPaginatedList } from '@/app/components/home/MoviesPaginatedList/MoviesPaginatedList';
import { generateSuspenseKeyBySearchParams } from '@/lib/utils/generateSuspenseKeyBySearchParams';
import { MoviesPaginatedListSkeleton } from '@/app/components/home/MoviesPaginatedList/MoviesPaginatedListSkeleton';
import { SuspenseAfterMounted } from '@/lib/utils/SuspenseAfterMounted';
import { MountedProvider } from '@/lib/utils/MountedProvider';
import classes from '@/app/HomePage.module.css';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export default function Home(props: { searchParams: { [key: string]: string } }) {
  const { searchParams } = props;

  return (
    <PageLayout>
      <Container w="100%" h="100%" size="1160px" c="black" bg="grey.2" className={classes.container}>
        <Stack h="100%" gap="40px">
          <Group justify="space-between" wrap="nowrap" gap="40px">
            <Title size="32px" lh="45px" c="black" order={1} fw="bold">
              Movies
            </Title>
          </Group>
          <Stack>
            <Suspense>
              <SearchFilters searchParams={searchParams} />
            </Suspense>
          </Stack>
          <MountedProvider>
            <SuspenseAfterMounted
              key={generateSuspenseKeyBySearchParams(searchParams)}
              fallback={<MoviesPaginatedListSkeleton />}
            >
              <MoviesPaginatedList searchParams={searchParams} />
            </SuspenseAfterMounted>
          </MountedProvider>
        </Stack>
      </Container>
    </PageLayout>
  );
}
