import { UnstyledButton } from '@mantine/core';
import classes from './PaginationButton.module.css';
import { IconChevronLeft } from '../icons/IconChevronLeft';
import { IconChevronRight } from '../icons/IconChevronRight';
import { getColor } from '@/theme/theme';

interface IPaginationButtonProps {
  text?: string;
  onClickEvent?: () => void;
  isEnabled?: boolean;
  isSelected?: boolean;
  isChevron?: boolean;
  chevronDirection?: 'left' | 'right';
}

export function PaginationButton(props: IPaginationButtonProps) {
  const { text, onClickEvent, isEnabled = true, isSelected, isChevron, chevronDirection } = props;
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
      classNames={{
        root: `${classes.root} ${isEnabled ? '' : classes.disabled} ${isSelected ? classes.selected : ''} ${chevron ? classes.chevron : ''}`,
      }}
      onClick={onClickEvent ? () => onClickEvent() : undefined}
      disabled={!isEnabled}
    >
      {chevron ? chevron : text}
    </UnstyledButton>
  );
}
