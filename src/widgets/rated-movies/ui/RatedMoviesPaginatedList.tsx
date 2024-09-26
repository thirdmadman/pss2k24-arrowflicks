'use client';

import { Flex, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import DataLocalStorageProvider from '@/lib/services/DataLocalStorageProvider';
import { IUserMovieRating } from '@/types/interfaces/IUserMovieRating';
import { MovieCard } from '@/entities/movie-card';
import { MovieNotFound } from '@/shared/ui/movie-not-found';
import { Pagination } from '@/shared/ui/pagination/Pagination';

export function RatedMoviesPaginatedList({ searchParams }: { searchParams: { [key: string]: string } }) {
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const isQuery = searchParams?.query?.length > 0;
  const query = isQuery ? searchParams.query : '';

  const [userRatingArray, setUserRatingArray] = useState<Array<IUserMovieRating> | null>(null);

  useEffect(() => {
    const { userData } = DataLocalStorageProvider.getData();
    const moviesRating = userData.userMoviesRating;
    setUserRatingArray(moviesRating);
  }, [page, query]);

  const filteredArray = userRatingArray?.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()));
  const paginatedArray = isQuery ? filteredArray : filteredArray?.slice((page - 1) * 8, page * 8);
  const isPaginatedArrayEmpty = !paginatedArray || paginatedArray.length < 1;

  if (isPaginatedArrayEmpty) {
    return <MovieNotFound />;
  }

  return (
    <Stack h="100%">
      <Flex direction="row" justify="space-between" align="flex-start" wrap="wrap" gap="16px">
        {paginatedArray.map((el) => (
          <MovieCard
            movieId={el.movieId}
            image={{
              src: el.image,
              alt: el.title,
            }}
            title={el.title}
            year={el.year}
            rating={el.rating}
            reviewsCount={el.reviewsCount}
            genres={el.genres?.split(';')}
            key={el.movieId}
          ></MovieCard>
        ))}
      </Flex>

      {!isQuery && (
        <Pagination
          searchParams={searchParams}
          totalItemsCount={userRatingArray?.length ?? 0}
          currentPage={page}
          itemsPerPage={8}
        />
      )}
    </Stack>
  );
}
