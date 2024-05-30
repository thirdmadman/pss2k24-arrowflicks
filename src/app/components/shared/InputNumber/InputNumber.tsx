import { NumberInput } from '@mantine/core';
import classes from '@/app/components/shared/InputNumber/InputNumber.module.css';

interface IInputNumberProps {
  value: number | undefined;
  placeholder: string;
  min: number;
  max: number;
}

export function InputNumber(props: IInputNumberProps) {
  const { value, placeholder, min, max } = props;
  return (
    <NumberInput
      min={min}
      max={max}
      maw="150px"
      w="100%"
      data-test-id="InputNumberInput"
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
