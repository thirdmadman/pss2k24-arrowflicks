import { Container, Group, Stack, Title } from '@mantine/core';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { MountedProvider } from '@/lib/utils/MountedProvider';
import { SuspenseAfterMounted } from '@/lib/utils/SuspenseAfterMounted';
import { MoviesPaginatedList } from '@/widgets/movies-paginated-list';
import { MoviesPaginatedListSkeleton } from '@/widgets/movies-paginated-list';
import { SearchFilters } from '@/features/filter';
import { generateSuspenseKeyBySearchParams } from '@/shared/lib/';
import { PageLayout } from '@/shared/ui/page-layout';
import classes from './HomePage.module.css';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export function HomePage(props: { searchParams: { [key: string]: string } }) {
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
