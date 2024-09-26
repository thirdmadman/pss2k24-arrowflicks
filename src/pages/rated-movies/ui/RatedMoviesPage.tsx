import { Container } from '@mantine/core';
import { Metadata } from 'next';
import { PageLayout } from '@/shared/ui/page-layout';
import classes from './RatedMoviesPage.module.css';
import { RatedMoviesPageContent } from './RatedMoviesPageContent';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Rated movies',
  description: 'Page where are stored all your rated movies (only locally)',
};

export function RatedMoviesPage(props: { searchParams: { [key: string]: string } }) {
  const { searchParams } = props;

  return (
    <>
      <PageLayout>
        <Container w="100%" h="100%" size="1160px" c="black" bg="grey.2" className={classes.container}>
          <RatedMoviesPageContent searchParams={searchParams} />
        </Container>
      </PageLayout>
    </>
  );
}
