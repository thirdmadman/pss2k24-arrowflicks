'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateGetQuery } from '@/shared/lib';
import { SelectInput } from '@/shared/ui/select-input';

interface IReleaseYearSelectProps {
  releaseYear: string | undefined;
}

export function ReleaseYearSelect({ releaseYear }: IReleaseYearSelectProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const queryKey = 'releaseYear';

  const currentYear = new Date().getFullYear();
  const minYear = 1895;
  const yearsArray = new Array(currentYear - minYear).fill(1).map((el, i) => String(currentYear - i));

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
      placeholder="Select release year"
      value={releaseYear}
      label={'Release year'}
      onChangeAction={(res) => {
        updateQuery(res ?? undefined, searchParams, true);
      }}
      options={yearsArray}
      allowDeselect
    />
  );
}
