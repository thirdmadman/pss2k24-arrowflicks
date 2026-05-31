import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { SelectInput } from './SelectInput';

describe('SelectInput component', () => {
  beforeAll(() => {
    vi.mock('next/navigation', async () => {
      const actual = await vi.importActual('next/navigation');
      return {
        ...actual,
        useRouter() {
          return {
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
          };
        },
        usePathname: () => '',
        useSearchParams() {
          return {
            get(value: string) {
              return value;
            },
          };
        },
      };
    });
  });

  it('should render without failing', () => {
    const { container } = render(
      <SelectInput
        label={'MultiSelectInputLabel'}
        placeholder={'MultiSelectInputPlaceholder'}
        options={['1', '2']}
        queryKey="queryKey"
        allowDeselect
      />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given label', () => {
    render(
      <SelectInput
        label={'MultiSelectInputLabel'}
        placeholder={'MultiSelectInputPlaceholder'}
        options={['1', '12345678']}
        queryKey="queryKey"
        allowDeselect
      />
    );
    expect(screen.getByText('MultiSelectInputLabel')).not.toBeNull();
  });

  it('should contain given values in option', () => {
    render(
      <SelectInput
        label={'MultiSelectInputLabel'}
        placeholder={'MultiSelectInputPlaceholder'}
        options={['1', '12345678']}
        queryKey="queryKey"
        allowDeselect
      />
    );
    expect(screen.getByText('12345678')).not.toBeNull();
  });
});
