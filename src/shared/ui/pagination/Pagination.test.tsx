import { screen } from '@testing-library/react';
import { render } from '@/__tests__/test-utils/render';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  it('should render without failing', () => {
    const { container } = render(<Pagination totalItemsCount={0} currentPage={0} itemsPerPage={0} />);
    expect(container.firstElementChild).not.toBeNull();
  });

  it('should render 0 child elements when pagination is not able', () => {
    const { container } = render(<Pagination totalItemsCount={0} currentPage={0} itemsPerPage={0} />);
    expect(container.firstElementChild?.firstElementChild).toBeNull();
  });

  it('should contain correct number', () => {
    render(<Pagination totalItemsCount={100} currentPage={19} itemsPerPage={5} />);
    expect(screen.getByText('19')).not.toBeNull();
  });
});
