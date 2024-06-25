import { getMoveDetails } from '@/lib/api/getMoveDetails';
import { Metadata } from 'next';
import { MovieByIdPageContent } from '@/app/movies/[id]/MovieByIdPageContent';
import { PageLayout } from '@/app/components/shared/PageLayout/PageLayout';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const movieId = params.id;
  const movieData = await getMoveDetails(movieId);
  return {
    title: `ArrowFlicks - ${movieData ? movieData.title : movieId}`,
    description: `Page with full information about movie ${movieData ? movieData.title : movieId}. Overview: ${movieData ? movieData.title : 'not available'}`,
  };
}

export default function MovieByIdPage({ params }: { params: { id: string } }) {
  const movieId = params.id;

  return (
    <PageLayout>
      <MovieByIdPageContent movieId={movieId} />
    </PageLayout>
  );
}
