import { InputNumber } from '@/app/components/shared/InputNumber/InputNumber';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';

describe('InputNumber component', () => {
  it('should render without failing', () => {
    const { container } = render(<InputNumber value={12345678} placeholder="InputNumberPlaceholder" />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given number', () => {
    render(<InputNumber value={12345678} placeholder="InputNumberPlaceholder" />);
    expect(screen.getByDisplayValue(12345678)).not.toBeNull();
  });
});
