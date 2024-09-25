import { formatCost, formatDate, formatDuration, formatNumberOfReviews } from './textFormatUtils';

describe('textFormatUtils', () => {
  describe('formatCost()', () => {
    it('should return the formatted cost as a string with two decimal places', () => {
      const cost = 100;
      expect(formatCost(cost)).toBe('$100');
    });
  });

  describe('formatDate()', () => {
    it('should return the formatted date as a string in the format MM/DD/YYYY', () => {
      const timestamp = '2022-02-28T14:30:00.000Z';
      expect(formatDate(timestamp)).toBe('February 28, 2022');
    });
  });

  describe('formatDuration()', () => {
    it('should return the formatted duration as a string in the format HH:MM', () => {
      const durationInMinutes = 60;
      expect(formatDuration(durationInMinutes)).toBe('1h 0m');
    });
  });

  describe('formatNumberOfReviews()', () => {
    it('should return the formatted number of reviews as a string with K for thousands, M for millions, and B for billions', () => {
      const countOfReviews = 1000000;
      expect(formatNumberOfReviews(countOfReviews)).toBe('1M');
    });
  });
});
