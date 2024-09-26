'use client';

import { UrlObject } from 'url';
import { UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './TabButton.module.css';

interface ITabButtonProps {
  text: string;
  href: string | UrlObject;
}

export function TabButton(props: ITabButtonProps) {
  const pathname = usePathname();
  const { text, href } = props;
  const stringPathname = typeof href === 'object' ? href.pathname ?? '' : href;
  const isActive =
    pathname && stringPathname.length > 1 ? pathname.startsWith(stringPathname) : pathname === stringPathname;
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
