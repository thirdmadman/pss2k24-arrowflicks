'use client';

import { sortByMap } from '@/shared/configs';
import { useGetQuery } from '@/shared/lib';
import { SelectInput } from '@/shared/ui/select-input';

interface ISortBySelectProps {
  sortBy?: string;
}

export function SortBySelect({ sortBy }: ISortBySelectProps) {
  const [setGetQuery] = useGetQuery('sortBy');

  return (
    <SelectInput
      placeholder="Select sort by"
      value={sortBy ?? 'Most popular'}
      label={'Sort by'}
      onChangeAction={(res) => {
        setGetQuery(res ?? undefined, true);
      }}
      options={sortByMap}
      defaultValueIndex={0}
      allowDeselect={false}
    />
  );
}
