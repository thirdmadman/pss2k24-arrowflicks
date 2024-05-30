'use client';

import { getColor } from '@/theme/theme';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@/app/components/shared/icons/IconSearch';
import classes from '@/app/components/shared/SearchBar/SearchBar.module.css';
import { PrimaryButton } from '@/app/components/shared/PrimaryButton/PrimaryButton';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { setQueryParam } from '@/utils/setQueryParam';

interface ISearchBarProps {
  text: string;
}

export function SearchBar(props: ISearchBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearch = (searchQuery: string, isReload = false) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    setQueryParam(current, 'query', searchQuery);
    const search = current.toString();
    const query = search ? `?${search}` : '';
    if (isReload) {
      router.push(`${pathname}${query}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${query}`, { scroll: false });
  };

  const { text } = props;

  const greyColor = getColor('grey', 6);
  const icon = (
    <div style={{ marginRight: 8 }}>
      <IconSearch color={greyColor} />
    </div>
  );
  return (
    <TextInput
      miw="300px"
      w="100%"
      leftSectionPointerEvents="none"
      leftSection={icon}
      rightSectionWidth={88}
      rightSection={<PrimaryButton text="Search" size="small" onClickEvent={() => updateSearch(searchQuery, true)} />}
      defaultValue={text}
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
