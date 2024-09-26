'use client';

import { Center, Select } from '@mantine/core';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { getColor } from '../../configs';
import { updateGetQuery } from '../../lib';
import { IconArrowDown, IconArrowUp } from '../icons';
import classes from './SelectInput.module.css';

interface ISelectInputProps {
  label: string;
  options: Array<string> | Array<{ value: string; label: string }>;
  queryKey: string;
  value?: string;
  defaultValueIndex?: number;
  allowDeselect: boolean;
  placeholder: string;
}

export function SelectInput(props: ISelectInputProps) {
  const { value, label, options, queryKey, defaultValueIndex, allowDeselect, placeholder } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  let defaultValue: undefined | string = undefined;
  if (defaultValueIndex !== undefined) {
    const val = options[defaultValueIndex];
    if (typeof val === 'string') {
      defaultValue = val;
    } else {
      defaultValue = val.value;
    }
  }

  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const colorGrey = getColor('grey', 5);
  const colorPurple = getColor('purple', 5);

  const arrowIcon = isDropDownOpened ? <IconArrowUp color={colorPurple} /> : <IconArrowDown color={colorGrey} />;

  const icon = (
    <Center w={'24px'} h={'24px'}>
      {arrowIcon}
    </Center>
  );

  const updateQuery = (value: string | undefined, currentSearchParams: URLSearchParams | null, isReload = false) => {
    const newQuery = updateGetQuery(queryKey, value, currentSearchParams);
    if (isReload) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={options}
      value={(value ? value : defaultValue) ?? null}
      onDropdownClose={() => setIsDropDownOpened(false)}
      onDropdownOpen={() => setIsDropDownOpened(true)}
      defaultValue={defaultValue}
      rightSection={icon}
      allowDeselect={allowDeselect}
      onChange={(res) => {
        updateQuery(res ?? undefined, searchParams, true);
      }}
      classNames={{
        root: classes.root,
        label: classes.label,
        input: classes.input,
        option: classes.option,
        section: classes.section,
      }}
      withCheckIcon={false}
    />
  );
}
