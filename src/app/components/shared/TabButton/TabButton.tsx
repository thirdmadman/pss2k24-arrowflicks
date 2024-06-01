'use client';

import { UnstyledButton } from '@mantine/core';
import classes from '@/app/components/shared/TabButton/TabButton.module.css';
import { UrlObject } from 'url';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ITabButtonProps {
  text: string;
  href: string | UrlObject;
}

export function TabButton(props: ITabButtonProps) {
  const pathname = usePathname();
  const { text, href } = props;
  const stringPathname = typeof href === 'object' ? href.pathname ?? '' : href;
  const isActive = stringPathname.length > 1 ? pathname.startsWith(stringPathname) : pathname === stringPathname;
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
