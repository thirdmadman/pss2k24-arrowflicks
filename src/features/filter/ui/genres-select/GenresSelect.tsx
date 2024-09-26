'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateGetQuery } from '@/shared/lib';
import { MultiSelectInput } from '@/shared/ui/multi-select-input';

interface IGenresSelectProps {
  genres: string | undefined;
  genresMap: Array<{ value: string; label: string }>;
}

export function GenresSelect({ genres, genresMap }: IGenresSelectProps) {
  const values = genres && genres.length > 0 ? genres.split(';') : [];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const queryKey = 'genres';

  const updateQuery = (value: string, currentSearchParams: URLSearchParams | null, isReload = false) => {
    const newQuery = updateGetQuery(queryKey, value, currentSearchParams);
    if (isReload) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

  return (
    <MultiSelectInput
      values={values}
      label={'Genres'}
      options={genresMap}
      placeholder="Select genre"
      onChangeAction={(selectedOptions) => updateQuery(selectedOptions.join(';'), searchParams, true)}
    />
  );
}
