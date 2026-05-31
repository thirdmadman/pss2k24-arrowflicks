'use client';

import { TextInput } from '@mantine/core';
import { useState } from 'react';
import { getColor } from '@/shared/configs';
import { useGetQuery } from '@/shared/lib';
import { IconSearch } from '@/shared/ui/icons/IconSearch';
import { PrimaryButton } from '@/shared/ui/primary-button';
import classes from './SearchBar.module.css';

interface ISearchBarProps {
  query?: string;
}

export function SearchBar({ searchParams, isInstant = false }: { searchParams: ISearchBarProps; isInstant?: boolean }) {
  const { query } = searchParams;
  const [searchQuery, setSearchQuery] = useState('');
  const [setGetQuery] = useGetQuery('query');

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
      rightSection={<PrimaryButton text="Search" size="small" onClickEvent={() => setGetQuery(searchQuery, true)} />}
      defaultValue={query}
      onChange={(e) => {
        isInstant && setGetQuery(e.currentTarget.value, false);
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
