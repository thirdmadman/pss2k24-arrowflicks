import { Container } from '@mantine/core';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export default function Home() {
  return (
    <Container c="purple.5" px={0} size="1440">
      <div className="home-page">
        <h1>ArrowFlicks - Movies</h1>
      </div>
    </Container>
  );
}
