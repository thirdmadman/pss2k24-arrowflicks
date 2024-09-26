'use client';

import { NumberInput } from '@mantine/core';
import classes from './InputNumber.module.css';

interface IInputNumberProps {
  value?: number;
  placeholder: string;
  min: number;
  max: number;
  onChangeAction: (value: string | number) => void;
}

export function InputNumber(props: IInputNumberProps) {
  const { value, placeholder, min, max, onChangeAction } = props;

  return (
    <NumberInput
      min={min}
      max={max}
      maw="150px"
      w="100%"
      data-test-id="InputNumberInput"
      value={value ?? ''}
      placeholder={placeholder}
      onChange={onChangeAction}
      classNames={{
        root: classes.root,
        input: classes.input,
        control: classes.control,
        section: classes.section,
        controls: classes.controls,
      }}
    />
  );
}
