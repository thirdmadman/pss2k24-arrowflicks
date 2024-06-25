/* eslint-disable jsx-a11y/alt-text */
'use client';

import classes from '@/app/components/shared/MovieCard/MovieCardImage.module.css';

import { Skeleton } from '@mantine/core';
import Image from 'next/image';
import { ComponentProps, useEffect, useState } from 'react';

export function MovieCardImage({ ...imageProps }: ComponentProps<typeof Image>) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className={classes.container} style={{ width: imageProps.width, height: imageProps.height }}>
      <Skeleton
        width={imageProps.width}
        height={imageProps.height}
        className={`${classes.skeleton} ${isLoading ? '' : classes.skeletonHidden} ${isLoading ? classes.visible : classes.opacity}`}
      />
      <Image
        {...imageProps}
        onLoad={() => setIsLoading(false)}
        className={`${classes.image} ${isLoading ? classes.opacity : classes.visible}`}
      />
    </div>
  );
}
