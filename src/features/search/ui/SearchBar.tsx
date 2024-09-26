'use client';

import { TextInput } from '@mantine/core';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { getColor } from '@/shared/configs';
import { updateGetQuery } from '@/shared/lib';
import { IconSearch } from '@/shared/ui/icons/IconSearch';
import { PrimaryButton } from '@/shared/ui/primary-button';
import classes from './SearchBar.module.css';

interface ISearchBarProps {
  query?: string;
}

export function SearchBar({ searchParams, isInstant = false }: { searchParams: ISearchBarProps; isInstant?: boolean }) {
  const { query } = searchParams;
  const urlSearchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearch = (searchQuery: string, currentSearchParams: URLSearchParams | null, isReload = false) => {
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
        isInstant && updateSearch(e.currentTarget.value, urlSearchParams, false);
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
