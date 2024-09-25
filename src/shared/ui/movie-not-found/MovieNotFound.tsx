import { Flex, Title } from '@mantine/core';
import Image from 'next/image';

export function MovieNotFound() {
  return (
    <Flex h="100%" align="center" justify="center" direction="column" gap="16px">
      <Image
        alt="We don't have such movies, look for another one"
        src="/images/artwork/artwork-1.svg"
        width={310}
        height={252}
      />
      <Title order={3} size="20px" fw="semibold">
        We don&apos;t have such movies, look for another one
      </Title>
    </Flex>
  );
}
