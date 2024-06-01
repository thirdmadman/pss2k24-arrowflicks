import { InputNumber } from '@/app/components/shared/InputNumber/InputNumber';
import { screen } from '@testing-library/react';
import { render } from '../../../../test-utils/render';

describe('InputNumber component', () => {
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
      <InputNumber value={12345678} placeholder="InputNumberPlaceholder" min={10} max={100000000} queryKey="queryKey" />
    );
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should contain given number', () => {
    render(
      <InputNumber value={12345678} placeholder="InputNumberPlaceholder" min={10} max={100000000} queryKey="queryKey" />
    );
    expect(screen.getByDisplayValue(12345678)).not.toBeNull();
  });
});
