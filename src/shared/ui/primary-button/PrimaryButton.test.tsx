import { PrimaryButton } from '@/shared/ui/primary-button';
import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';

describe('PrimaryButton component', () => {
  it('should render without failing', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { container } = render(<PrimaryButton text={''} size={'small'} onClickEvent={() => {}} />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain text', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<PrimaryButton text={'PrimaryButtonText'} size={'small'} onClickEvent={() => {}} />);
    expect(screen.getByText('PrimaryButtonText')).not.toBeNull();
  });
});
