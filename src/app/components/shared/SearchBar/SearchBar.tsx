'use client';

import { getColor } from '@/theme/theme';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@/app/components/shared/icons/IconSearch';
import classes from '@/app/components/shared/SearchBar/SearchBar.module.css';
import { PrimaryButton } from '@/app/components/shared/PrimaryButton/PrimaryButton';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateGetQuery } from '@/lib/utils/updateGetQuery';

interface ISearchBarProps {
  query?: string;
}

export function SearchBar({ searchParams }: { searchParams: ISearchBarProps }) {
  const { query } = searchParams;
  const urlSearchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearch = (searchQuery: string, currentSearchParams: URLSearchParams, isReload = false) => {
    const newQuery = updateGetQuery('query', searchQuery, currentSearchParams);
    if (isReload) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

  const greyColor = getColor('grey', 6);
  const icon = (
    <div style={{ marginRight: 8 }}>
      <IconSearch color={greyColor} />
    </div>
  );
  return (
    <TextInput
      miw="300px"
      maw="490px"
      w="100%"
      leftSectionPointerEvents="none"
      leftSection={icon}
      rightSectionWidth={88}
      rightSection={
        <PrimaryButton
          text="Search"
          size="small"
          onClickEvent={() => updateSearch(searchQuery, urlSearchParams, true)}
        />
      }
      defaultValue={query}
      onChange={(e) => {
        setSearchQuery(e.currentTarget.value);
      }}
      aria-label="Search movie title"
      placeholder="Search movie title"
      classNames={{
        root: classes.root,
        wrapper: classes.wrapper,
        input: classes.input,
        section: classes.section,
      }}
    />
  );
}
