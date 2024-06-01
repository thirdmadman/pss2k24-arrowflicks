'use client';

import { Center, MultiSelect } from '@mantine/core';
import classes from '@/app/components/shared/MultiSelectInput/MultiSelectInput.module.css';
import { useState } from 'react';
import { IconArrowDown } from '@/app/components/shared/icons/IconArrowDown';
import { getColor } from '@/theme/theme';
import { IconArrowUp } from '@/app/components/shared/icons/IconArrowUp';
import { updateGetQuery } from '@/lib/utils/updateGetQuery';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface IMultiSelectProps {
  label: string;
  placeholder: string;
  options: Array<string> | Array<{ value: string; label: string }>;
  queryKey: string;
  value?: string;
  maxOptions?: number;
}

export function MultiSelectInput(props: IMultiSelectProps) {
  const { value, label, options, placeholder, maxOptions, queryKey } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const values = value && value.length > 0 ? value.split(';') : [];
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const isAnyOptionSelected = values.length > 0;
  const colorGrey = getColor('grey', 5);
  const colorPurple = getColor('purple', 5);

  const arrowIcon = isDropDownOpened ? <IconArrowUp color={colorPurple} /> : <IconArrowDown color={colorGrey} />;

  const icon = (
    <Center w={'24px'} h={'24px'}>
      {arrowIcon}
    </Center>
  );

  const updateQuery = (value: string, currentSearchParams: URLSearchParams, isReload = false) => {
    const newQuery = updateGetQuery(queryKey, value, currentSearchParams);
    if (isReload) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

  return (
    <MultiSelect
      maw="316px"
      miw="300px"
      w="100%"
      label={label}
      placeholder={isAnyOptionSelected ? undefined : placeholder}
      data={options}
      value={values}
      onDropdownClose={() => setIsDropDownOpened(false)}
      onDropdownOpen={() => setIsDropDownOpened(true)}
      defaultValue={values}
      rightSection={icon}
      onChange={(res) => {
        updateQuery(res.join(';'), searchParams, true);
      }}
      classNames={{
        root: classes.root,
        label: classes.label,
        input: classes.input,
        option: classes.option,
        pill: classes.pill,
        pillsList: classes.pillsList,
        inputField: isAnyOptionSelected ? classes.inputFieldDisabled : undefined,
        section: classes.section,
      }}
      withCheckIcon={false}
      maxValues={maxOptions ?? undefined}
    />
  );
}
