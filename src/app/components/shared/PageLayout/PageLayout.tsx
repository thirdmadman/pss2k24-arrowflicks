import { Flex, Stack } from '@mantine/core';
import { TabButton } from '@/app/components/shared/TabButton/TabButton';
import { Logo } from '@/app/components/shared/Logo/Logo';

const navigationMenu = [
  { name: 'Movies', link: '/' },
  { name: 'Rated movies', link: '/rated-movies' },
];

interface IPageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout(props: IPageLayoutProps) {
  return (
    <Flex wrap="nowrap" gap={0} mih="100%">
      <Flex direction="column" bg="purple.1" maw="280px" p="24px" gap="60px" w="100%">
        <Logo />
        <Stack>
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
