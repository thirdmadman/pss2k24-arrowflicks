'use client';

import React, { ReactNode, Suspense, useEffect } from 'react';
import { useMounted } from '@/lib/utils/MountedProvider';

export function SuspenseAfterMounted({
  children,
  key,
  fallback,
}: {
  children: ReactNode;
  key: string;
  fallback: ReactNode;
}) {
  const [mounted, setMounted] = useMounted();

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return children;
  }

  return (
    <Suspense key={key} fallback={fallback}>
      {children}
    </Suspense>
  );
}
