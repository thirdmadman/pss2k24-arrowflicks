'use client';

import { Center, MultiSelect } from '@mantine/core';
import classes from '@/app/components/shared/MultiSelectInput/MultiSelectInput.module.css';
import { useState } from 'react';
import { IconArrowDown } from '@/app/components/shared/icons/IconArrowDown';
import { getColor } from '@/theme/theme';
import { IconArrowUp } from '@/app/components/shared/icons/IconArrowUp';

interface IMultiSelectProps {
  label: string;
  placeholder: string;
  options: Array<string>;
  value?: string;
  onChange?: (selected: Array<string>) => void;
  maxOptions?: number;
}

export function MultiSelectInput({ value, label, options, placeholder, onChange, maxOptions }: IMultiSelectProps) {
  const values = value?.split(';');
  const [selectedValues, setSelectedValues] = useState<Array<string>>([]);
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const isAnyOptionSelected = selectedValues.length > 0;
  const colorGrey = getColor('grey', 5);
  const colorPurple = getColor('purple', 5);

  const arrowIcon = isDropDownOpened ? <IconArrowUp color={colorPurple} /> : <IconArrowDown color={colorGrey} />;

  const icon = (
    <Center w={'24px'} h={'24px'}>
      {arrowIcon}
    </Center>
  );

  return (
    <MultiSelect
      maw="316px"
      miw="300px"
      w="100%"
      label={label}
      placeholder={isAnyOptionSelected ? undefined : placeholder}
      data={options}
      value={selectedValues}
      onDropdownClose={() => setIsDropDownOpened(false)}
      onDropdownOpen={() => setIsDropDownOpened(true)}
      defaultValue={values}
      rightSection={icon}
      onChange={(res) => {
        setSelectedValues(res);
        if (onChange) {
          onChange(res);
        }
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
