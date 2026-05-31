'use client';
import { Flex, Group, Stack, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import DataLocalStorageProvider from '@/lib/services/DataLocalStorageProvider';
import { RatedMoviesPaginatedList } from '@/widgets/rated-movies';
import { SearchBar } from '@/features/search';
import classes from '@/shared/ui/primary-button/PrimaryButton.module.css'; // TODO: FIX THIS

export function RatedMoviesPageContent(props: { searchParams: { [key: string]: string } }) {
  const { searchParams } = props;
  const [isUserData, setIsUserData] = useState(true);

  useEffect(() => {
    const { userData } = DataLocalStorageProvider.getData();
    const moviesRating = userData.userMoviesRating;
    setIsUserData(Boolean(moviesRating) && moviesRating.length > 0);
  }, []);

  if (!isUserData) {
    return (
      <Flex h="100%" direction="column" align="center" justify="center" gap="16px">
        <Image alt="You haven't rated any films yet" src="/images/artwork/artwork-2.svg" width={400} height={300} />
        <Title order={3} size="20px" fw="semibold">
          You haven&apos;t rated any films yet
        </Title>
        <Link href="/" className={`${classes.root} ${classes.medium}`} style={{ textDecoration: 'none' }}>
          Find movies
        </Link>
      </Flex>
    );
  }

  return (
    <Stack gap="40px" h="100%">
      <Group justify="space-between" gap="40px">
        <Title size="32px" lh="45px" c="black" order={1} fw="bold">
          Rated movies
        </Title>
        <Suspense>
          <SearchBar searchParams={searchParams} isInstant />
        </Suspense>
      </Group>
      <Suspense>
        <RatedMoviesPaginatedList searchParams={searchParams} />
      </Suspense>
    </Stack>
  );
}
