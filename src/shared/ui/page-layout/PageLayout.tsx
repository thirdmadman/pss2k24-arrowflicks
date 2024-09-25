'use client';

import { Burger, Flex, Stack } from '@mantine/core';
import { TabButton } from '@/shared/ui/tab-button/TabButton';
import { Logo } from '@/shared/ui/logo';
import classes from './PageLayout.module.css';
import { useState } from 'react';

const navigationMenu = [
  { name: 'Movies', link: '/' },
  { name: 'Rated movies', link: '/rated-movies' },
];

interface IPageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout(props: IPageLayoutProps) {
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);

  return (
    <Flex wrap="nowrap" gap={0} mih="100%" className={classes.container}>
      <Flex className={`${classes.sidebar} ${isNavigationExpanded && classes.sidebarExpanded}`}>
        <Burger
          opened={isNavigationExpanded}
          onClick={() => setIsNavigationExpanded(!isNavigationExpanded)}
          aria-label="Toggle navigation"
          color={isNavigationExpanded ? 'gray.6' : 'purple.5'}
          className={classes.burger}
        />
        <div className={`${classes.logo} ${!isNavigationExpanded && classes.logoHidden}`}>
          <Logo />
        </div>

        <Stack
          className={`${classes.navigationContainer} ${isNavigationExpanded && classes.navigationContainerVisible}`}
        >
          {navigationMenu.map((el) => (
            <TabButton text={el.name} href={el.link} key={el.name}></TabButton>
          ))}
        </Stack>
      </Flex>
      <Flex direction="column" bg="grey.2" w="100%">
        {props.children}
      </Flex>
    </Flex>
  );
}
