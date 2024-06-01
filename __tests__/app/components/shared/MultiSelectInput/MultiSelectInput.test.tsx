import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';
import { MultiSelectInput } from '@/app/components/shared/MultiSelectInput/MultiSelectInput';

describe('MultiSelectInput component', () => {
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
      <MultiSelectInput
        label={'MultiSelectInputLabel'}
        placeholder={'MultiSelectInputPlaceholder'}
        options={['1', '2']}
        queryKey="queryKey"
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
        queryKey="queryKey"
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
        queryKey="queryKey"
      />
    );
    expect(screen.getByText('12345678')).not.toBeNull();
  });
});
