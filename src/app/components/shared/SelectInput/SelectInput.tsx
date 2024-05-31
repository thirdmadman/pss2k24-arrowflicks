'use client';

import { Center, Select } from '@mantine/core';
import classes from '@/app/components/shared/SelectInput/SelectInput.module.css';
import { useState } from 'react';
import { IconArrowDown } from '@/app/components/shared/icons/IconArrowDown';
import { getColor } from '@/theme/theme';
import { IconArrowUp } from '@/app/components/shared/icons/IconArrowUp';
import { updateGetQuery } from '@/lib/utils/updateGetQuery';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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

  const [selectedValue, setSelectedValue] = useState<string | null>(value ? value : defaultValue ?? null);
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

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
    <Select
      maw="316px"
      miw="300px"
      w="100%"
      label={label}
      placeholder={placeholder}
      data={options}
      value={selectedValue}
      onDropdownClose={() => setIsDropDownOpened(false)}
      onDropdownOpen={() => setIsDropDownOpened(true)}
      defaultValue={defaultValue}
      rightSection={icon}
      allowDeselect={allowDeselect}
      onChange={(res) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        setSelectedValue(res);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        res && updateQuery(res, searchParams, true);
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
