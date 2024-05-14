import { getColor } from '@/theme/theme';
import { IconStar } from '../icons/IconStar';
import { Group, Text } from '@mantine/core';

interface IRatingNumberProps {
  rating: number | undefined;
  countOfReviews: number | undefined;
}

export function RatingNumber(props: IRatingNumberProps) {
  const { rating, countOfReviews } = props;
  if (!rating || rating === 0 || !countOfReviews || countOfReviews === 0) {
    return <IconStar color={getColor('gray', 3)} />;
  }

  const rules = [
    { divider: 1000, string: 'K' },
    { divider: 1000000, string: 'M' },
  ];

  const rule = rules.find((el) => countOfReviews / el.divider > 0.1 && countOfReviews / el.divider < 1000);

  const countOfReviewsString = rule
    ? `${Math.floor(countOfReviews / rule.divider).toString()}${rule.string}`
    : countOfReviews.toString();

  return (
    <Group gap="4px">
      <IconStar color="#FAB005"></IconStar>
      <Text size="16px" c="black" pr="4px">
        {rating}
      </Text>
      <Text size="16px" c="gray.6">
        ({countOfReviewsString})
      </Text>
    </Group>
  );
}
