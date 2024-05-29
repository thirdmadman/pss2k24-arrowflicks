import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { MultiSelectInput } from '@/app/components/shared/MultiSelectInput/MultiSelectInput';

describe('MultiSelectInput component', () => {
  it('should render without failing', () => {
    const { container } = render(
      <MultiSelectInput
        label={'MultiSelectInputLabel'}
        placeholder={'MultiSelectInputPlaceholder'}
        options={['1', '2']}
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given label', () => {
    render(
      <MultiSelectInput
        label={'MultiSelectInputLabel'}
        placeholder={'MultiSelectInputPlaceholder'}
        options={['1', '12345678']}
      />
    );
    expect(screen.getByText('MultiSelectInputLabel')).not.toBeNull();
  });

  it('should contain given values in option', () => {
    render(
      <MultiSelectInput
        label={'MultiSelectInputLabel'}
        placeholder={'MultiSelectInputPlaceholder'}
        options={['1', '12345678']}
      />
    );
    expect(screen.getByText('12345678')).not.toBeNull();
  });
});
