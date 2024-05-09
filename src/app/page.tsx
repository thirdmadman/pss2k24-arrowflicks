import { Container } from '@mantine/core';
import { Metadata } from 'next';
import { Search } from './components/shared/icons/home/Search';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export default function Home() {
  return (
    <Container c="purple.5" px={0} size="1440">
      <div className="home-page">
        <h1>ArrowFlicks - Movies</h1>
        <Search />
      </div>
    </Container>
  );
}
