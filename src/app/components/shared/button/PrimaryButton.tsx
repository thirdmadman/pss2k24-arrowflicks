import { UnstyledButton } from '@mantine/core';
import classes from './PrimaryButton.module.css';

interface IPrimaryButtonProps {
  text: string;
  size: 'small' | 'medium';
}

export function PrimaryButton(props: IPrimaryButtonProps) {
  const { text, size } = props;
  return (
    <UnstyledButton
      classNames={{
        root: `${classes.root} ${size === 'small' ? classes.small : classes.medium}`,
      }}
    >
      {text}
    </UnstyledButton>
  );
}
