import { Center, Stack, VisuallyHidden, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from '@/app/components/shared/PrimaryButton/PrimaryButton.module.css';
import { Logo } from './components/shared/Logo/Logo';

export default function NotFound() {
  return (
    <Center h="100%" bg="grey.1">
      <Stack align="center" gap="48px" px="40px">
        <div style={{ position: 'absolute', left: '24px', top: '24px' }}>
          <Logo />
        </div>
        <Image
          src="/images/artwork/artwork-404-not-found.svg"
          alt="artwork-404-not-found"
          width={656}
          height={196}
          style={{
            maxWidth: '656px',
            width: '100%',
          }}
        />
        <VisuallyHidden>
          <h2>Not Found</h2>
        </VisuallyHidden>
        <Stack gap="16px" align="center">
          <Text size="20px" lh="25px" fw="600" ta="center">
            We can’t find the page you are looking for
          </Text>
          <Link href="/" className={`${classes.root} ${classes.medium}`} style={{ textDecoration: 'none' }}>
            Go Home
          </Link>
        </Stack>
      </Stack>
    </Center>
  );
}
