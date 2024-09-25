'use client';

import { NumberInput } from '@mantine/core';
import classes from './InputNumber.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateGetQuery } from '@/shared/lib';

interface IInputNumberProps {
  value?: number;
  placeholder: string;
  min: number;
  max: number;
  queryKey: string;
}

export function InputNumber(props: IInputNumberProps) {
  const { value, placeholder, min, max, queryKey } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateQuery = (value: string, currentSearchParams: URLSearchParams, isReload = false) => {
    const newQuery = updateGetQuery(queryKey, value, currentSearchParams);
    if (isReload) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

  return (
    <NumberInput
      min={min}
      max={max}
      maw="150px"
      w="100%"
      data-test-id="InputNumberInput"
      value={value ?? ''}
      placeholder={placeholder}
      onChange={(val) => updateQuery(val.toString(), searchParams, true)}
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
