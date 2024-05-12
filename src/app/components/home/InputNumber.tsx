import { NumberInput } from '@mantine/core';
import classes from './InputNumber.module.css';

export function InputNumber({ value, placeholder }: { value: number; placeholder: string }) {
  return (
    <NumberInput
      defaultValue={value}
      placeholder={placeholder}
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
