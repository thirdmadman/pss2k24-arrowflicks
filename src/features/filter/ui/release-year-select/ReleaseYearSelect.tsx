'use client';

import { useGetQuery } from '@/shared/lib';
import { SelectInput } from '@/shared/ui/select-input';

interface IReleaseYearSelectProps {
  releaseYear: string | undefined;
}

export function ReleaseYearSelect({ releaseYear }: IReleaseYearSelectProps) {
  const [setGetQuery] = useGetQuery('releaseYear');

  const currentYear = new Date().getFullYear();
  const minYear = 1895;
  const yearsArray = new Array(currentYear - minYear).fill(1).map((el, i) => String(currentYear - i));

  return (
    <SelectInput
      placeholder="Select release year"
      value={releaseYear}
      label={'Release year'}
      onChangeAction={(res) => {
        setGetQuery(res ?? undefined, true);
      }}
      options={yearsArray}
      allowDeselect
    />
  );
}
