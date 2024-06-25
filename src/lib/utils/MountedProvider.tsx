'use client';

import React from 'react';

const MountedContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(
  undefined
);

export function MountedProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  return <MountedContext.Provider value={[mounted, setMounted]}>{children}</MountedContext.Provider>;
}

export function useMounted() {
  const context = React.useContext(MountedContext);
  if (context === undefined) {
    throw new Error('useMounted must be used within a MountedProvider');
  }
  return context;
}
