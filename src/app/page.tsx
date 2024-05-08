import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ArrowFlicks - Movies',
  description: 'ArrowFlicks - Movies',
};

export default function Home() {
  return (
    <div className="home-page">
      <h1>ArrowFlicks - Movies</h1>
    </div>
  );
}
