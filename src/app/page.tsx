import { Container } from '@mantine/core';
import { Metadata } from 'next';
import { SearchBar } from './components/shared/icons/home/SearchBar';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;
  console.error(currentPage);
  return (
    <Container c="purple.5" px={0} size="1440">
      <div className="home-page">
        <h1>ArrowFlicks - Movies</h1>
        <SearchBar text={query} />
      </div>
    </Container>
  );
}
