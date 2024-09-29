'use client';

import { useGetQuery } from '@/shared/lib';
import { MultiSelectInput } from '@/shared/ui/multi-select-input';

interface IGenresSelectProps {
  genres: string | undefined;
  genresMap: Array<{ value: string; label: string }>;
}

export function GenresSelect({ genres, genresMap }: IGenresSelectProps) {
  const values = genres && genres.length > 0 ? genres.split(';') : [];
  const [setGetQuery] = useGetQuery('ratingTo');

  return (
    <MultiSelectInput
      values={values}
      label={'Genres'}
      options={genresMap}
      placeholder="Select genre"
      onChangeAction={(selectedOptions) => setGetQuery(selectedOptions.join(';'), true)}
    />
  );
}
