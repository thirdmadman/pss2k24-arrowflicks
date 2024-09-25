import { Breadcrumbs } from '@mantine/core';
import Link from 'next/link';
import classes from './BreadcrumbsNavigation.module.css';

interface IBreadcrumbLink {
  title: string;
  href: string;
}

interface IBreadcrumbsNavigationProps {
  items: Array<IBreadcrumbLink>;
}

export function BreadcrumbsNavigation(props: IBreadcrumbsNavigationProps) {
  return (
    <Breadcrumbs classNames={{ breadcrumb: classes.breadcrumb }}>
      {props.items.map((item) => (
        <Link href={item.href} key={item.title}>
          {item.title}
        </Link>
      ))}
    </Breadcrumbs>
  );
}
