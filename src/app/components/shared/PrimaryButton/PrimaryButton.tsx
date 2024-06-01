'use client';

import { UnstyledButton } from '@mantine/core';
import classes from '@/app/components/shared/PrimaryButton/PrimaryButton.module.css';

interface IPrimaryButtonProps {
  text: string;
  size: 'small' | 'medium';
  onClickEvent: () => void;
}

export function PrimaryButton(props: IPrimaryButtonProps) {
  const { text, size, onClickEvent } = props;
  return (
    <UnstyledButton
      classNames={{
        root: `${classes.root} ${size === 'small' ? classes.small : classes.medium}`,
      }}
      onClick={() => onClickEvent()}
    >
      {text}
    </UnstyledButton>
  );
}
