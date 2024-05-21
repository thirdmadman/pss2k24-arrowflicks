import { UnstyledButton } from '@mantine/core';
import classes from '@/app/components/shared/PaginationButton/PaginationButton.module.css';
import { IconChevronLeft } from '@/app/components/shared//icons/IconChevronLeft';
import { IconChevronRight } from '@/app/components/shared//icons/IconChevronRight';
import { getColor } from '@/theme/theme';
import Link from 'next/link';
import { UrlObject } from 'url';

interface IPaginationButtonProps {
  text?: string;
  href: string | UrlObject;
  isEnabled?: boolean;
  isSelected?: boolean;
  isChevron?: boolean;
  chevronDirection?: 'left' | 'right';
}

export function PaginationButton(props: IPaginationButtonProps) {
  const { text, isEnabled = true, isSelected, isChevron, chevronDirection, href } = props;
  let chevron = undefined;
  if (isChevron && chevronDirection) {
    const chevronColor = isEnabled ? getColor('gray', 6) : getColor('gray', 3);
    chevron = <IconChevronRight color={chevronColor} />;
    if (chevronDirection === 'left') {
      chevron = <IconChevronLeft color={chevronColor} />;
    }
  }
  return (
    <UnstyledButton
      component={Link}
      classNames={{
        root: `${classes.root} ${isEnabled ? '' : classes.disabled} ${isSelected ? classes.selected : ''} ${chevron ? classes.chevron : ''}`,
      }}
      data-disabled={!isEnabled}
      href={href}
    >
      {chevron ? chevron : text}
    </UnstyledButton>
  );
}
