export const formatCost = (cost: number) =>
  cost.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

export const formatDate = (timestamp: string) =>
  new Date(timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export const formatDuration = (durationInMinutes: number) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return `${hours}h ${minutes}m`;
};
