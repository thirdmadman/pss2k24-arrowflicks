'use client';

import { Center, MultiSelect } from '@mantine/core';
import { useState } from 'react';
import { getColor } from '../../configs';
import { IconArrowDown, IconArrowUp } from '../icons';
import classes from './MultiSelectInput.module.css';

interface IMultiSelectProps {
  label: string;
  placeholder: string;
  options: Array<string> | Array<{ value: string; label: string }>;
  onChangeAction: (selectedOptions: Array<string>) => void;
  values?: Array<string>;
  maxOptions?: number;
}

export function MultiSelectInput(props: IMultiSelectProps) {
  const { values, label, options, placeholder, maxOptions, onChangeAction } = props;

  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const isAnyOptionSelected = values && values.length > 0;
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
      label={label}
      placeholder={isAnyOptionSelected ? undefined : placeholder}
      data={options}
      value={values}
      onDropdownClose={() => setIsDropDownOpened(false)}
      onDropdownOpen={() => setIsDropDownOpened(true)}
      defaultValue={values}
      rightSection={icon}
      onChange={onChangeAction}
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
