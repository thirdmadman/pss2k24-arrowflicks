import { UnstyledButton } from '@mantine/core';
import classes from '@/app/components/shared/TabButton/TabButton.module.css';
import { UrlObject } from 'url';
import Link from 'next/link';

interface ITabButtonProps {
  text: string;
  href: string | UrlObject;
  isActive?: boolean;
}

export function TabButton(props: ITabButtonProps) {
  const { text, isActive, href } = props;
  return (
    <UnstyledButton
      component={Link}
      classNames={{
        root: `${classes.root} ${isActive ? classes.active : ''}`,
      }}
      href={href}
    >
      {text}
    </UnstyledButton>
  );
}
