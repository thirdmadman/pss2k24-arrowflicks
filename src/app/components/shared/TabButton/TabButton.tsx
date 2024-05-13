import { UnstyledButton } from '@mantine/core';
import classes from './TabButton.module.css';

interface ITabButtonProps {
  text: string;
  onClickEvent?: () => void;
  isActive?: boolean;
}

export function TabButton(props: ITabButtonProps) {
  const { text, onClickEvent, isActive } = props;
  return (
    <UnstyledButton
      classNames={{
        root: `${classes.root} ${isActive ? classes.active : ''}`,
      }}
      onClick={onClickEvent ? () => onClickEvent() : undefined}
    >
      {text}
    </UnstyledButton>
  );
}
