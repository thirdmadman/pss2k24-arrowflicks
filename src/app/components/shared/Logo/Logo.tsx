import { Group, Text } from '@mantine/core';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
});

export function Logo() {
  return (
    <Group gap="12px" h="36px" wrap="nowrap" style={{ overflow: 'hidden' }}>
      <Image src="/images/arrow-flicks-logo.svg" width={32} height={32} alt="Logo"></Image>
      <Text className={poppins.className} size="24px" c="purple.5">
        ArrowFlicks
      </Text>
    </Group>
  );
}
