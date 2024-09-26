import { UrlObject } from 'url';
import { UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { getColor } from '../../../configs';
import { IconChevronLeft, IconChevronRight } from '../../icons';
import classes from './PaginationButton.module.css';

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
    const chevronColor = isEnabled ? getColor('grey', 6) : getColor('grey', 3);
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
      scroll={false}
    >
      {chevron ? chevron : text}
    </UnstyledButton>
  );
}
