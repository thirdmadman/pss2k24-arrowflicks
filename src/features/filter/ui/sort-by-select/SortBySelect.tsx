'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { sortByMap } from '@/shared/configs';
import { updateGetQuery } from '@/shared/lib';
import { SelectInput } from '@/shared/ui/select-input';

interface ISortBySelectProps {
  sortBy?: string;
}

export function SortBySelect({ sortBy }: ISortBySelectProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const queryKey = 'sortBy';

  const updateQuery = (value: string | undefined, currentSearchParams: URLSearchParams | null, isReload = false) => {
    const newQuery = updateGetQuery(queryKey, value, currentSearchParams);
    if (isReload) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

  return (
    <SelectInput
      placeholder="Select sort by"
      value={sortBy ?? 'Most popular'}
      label={'Sort by'}
      onChangeAction={(res) => {
        updateQuery(res ?? undefined, searchParams, true);
      }}
      options={sortByMap}
      defaultValueIndex={0}
      allowDeselect={false}
    />
  );
}
