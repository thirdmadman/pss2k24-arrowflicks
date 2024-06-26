import { getColor } from '@/theme/theme';
import { IconStar } from '@/app/components/shared/icons/IconStar';
import { Group, Text } from '@mantine/core';
import { formatNumberOfReviews } from '@/lib/utils/textFromatUtils';

interface IRatingNumberProps {
  rating: number | undefined;
  countOfReviews: number | undefined;
}

export function RatingNumber(props: IRatingNumberProps) {
  const { rating, countOfReviews } = props;
  if (!rating || rating === 0 || !countOfReviews || countOfReviews === 0) {
    return <IconStar color={getColor('grey', 3)} />;
  }

  return (
    <Group gap="6px">
      <IconStar color="#FAB005"></IconStar>
      <Text size="16px" c="black" pr="4px" fw="bold">
        {rating}
      </Text>
      <Text size="16px" c="grey.6">
        ({formatNumberOfReviews(countOfReviews)})
      </Text>
    </Group>
  );
}
