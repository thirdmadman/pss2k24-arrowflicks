import { UnstyledButton } from '@mantine/core';
import classes from './TabButton.module.css';
import { UrlObject } from 'url';
import Link from 'next/link';

interface ITabButtonProps {
  text: string;
  href: string | UrlObject;
  onClickEvent?: () => void;
  isActive?: boolean;
}

export function TabButton(props: ITabButtonProps) {
  const { text, onClickEvent, isActive, href } = props;
  return (
    <UnstyledButton
      component={Link}
      classNames={{
        root: `${classes.root} ${isActive ? classes.active : ''}`,
      }}
      onClick={onClickEvent ? () => onClickEvent() : undefined}
      href={href}
    >
      {text}
    </UnstyledButton>
  );
}
