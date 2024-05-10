import { getColor } from '@/theme/theme';
import { TextInput } from '@mantine/core';
import { IconSearch } from '../IconSearch';
import classes from './SearchBar.module.css';
import { PrimaryButton } from '../../button/PrimaryButton';

interface ISearchBarProps {
  text: string;
}

export function SearchBar(props: ISearchBarProps) {
  const { text } = props;

  const grayColor = getColor('gray', 6);
  const icon = (
    <div style={{ marginRight: 8 }}>
      <IconSearch color={grayColor} />
    </div>
  );
  return (
    <TextInput
      leftSectionPointerEvents="none"
      leftSection={icon}
      rightSectionWidth={88}
      rightSection={<PrimaryButton text="Search" size="small" />}
      defaultValue={text}
      aria-label="Search movie title"
      placeholder="Search movie title"
      classNames={{
        root: classes.root,
        wrapper: classes.wrapper,
        input: classes.input,
        section: classes.section,
      }}
    />
  );
}
