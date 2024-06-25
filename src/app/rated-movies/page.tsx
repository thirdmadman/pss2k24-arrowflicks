import { Container } from '@mantine/core';
import { Metadata } from 'next';
import { PageLayout } from '@/app/components/shared/PageLayout/PageLayout';

import { RatedMoviesPageContent } from '@/app/rated-movies/RatedMoviesPageContent';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Rated movies',
  description: 'Page where are stored all your rated movies (only locally)',
};

export default function RatedMoviesPage(props: { searchParams: { [key: string]: string } }) {
  const { searchParams } = props;

  return (
    <>
      <PageLayout>
        <Container w="100%" h="100%" size="1160px" c="black" py="40px" px="90px" bg="grey.2">
          <RatedMoviesPageContent searchParams={searchParams} />
        </Container>
      </PageLayout>
    </>
  );
}
