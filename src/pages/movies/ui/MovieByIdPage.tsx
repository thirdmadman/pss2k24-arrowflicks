import { Metadata } from 'next';
import { getMoveDetails } from '@/lib/api/getMoveDetails';
import { PageLayout } from '@/shared/ui/page-layout';
import { MovieByIdPageContent } from './MovieByIdPageContent';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const movieId = params.id;
  const movieData = await getMoveDetails(movieId);
  return {
    title: `ArrowFlicks - ${movieData ? movieData.title : movieId}`,
    description: `Page with full information about movie ${movieData ? movieData.title : movieId}. Overview: ${movieData ? movieData.title : 'not available'}`,
  };
}

export function MovieByIdPage({ params }: { params: { id: string } }) {
  const movieId = params.id;

  return (
    <PageLayout>
      <MovieByIdPageContent movieId={movieId} />
    </PageLayout>
  );
}
