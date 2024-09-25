export const formatCost = (cost: number) =>
  cost.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

export const formatDate = (timestamp: string) =>
  new Date(timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export const formatDuration = (durationInMinutes: number) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return `${hours}h ${minutes}m`;
};

export const formatNumberOfReviews = (countOfReviews: number) => {
  const rules = [
    { divider: 1000, string: 'K' },
    { divider: 1000000, string: 'M' },
  ];

  const rule = rules.find((el) => countOfReviews / el.divider > 0.1 && countOfReviews / el.divider < 1000);

  const countOfReviewsString = rule
    ? `${(Math.floor((countOfReviews / rule.divider) * 10) / 10).toString()}${rule.string}`
    : countOfReviews.toString();

  return countOfReviewsString;
};
