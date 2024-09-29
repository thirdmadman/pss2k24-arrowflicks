import { Group } from '@mantine/core';
import { calculatePagination } from '../../lib';
import { PaginationButton } from './pagination-button/PaginationButton';
import classes from './Pagination.module.css';

interface IPaginationProps {
  totalItemsCount: number;
  currentPage: number;
  itemsPerPage: number;
  searchParams?: { [key: string]: string };
}

export function Pagination({ totalItemsCount, currentPage, itemsPerPage, searchParams }: IPaginationProps) {
  const { paginationArray, paginationNextPage, paginationPreviousPage } = calculatePagination(
    currentPage,
    totalItemsCount,
    itemsPerPage
  );

  if (!totalItemsCount || totalItemsCount <= 0 || !itemsPerPage || itemsPerPage <= 0) {
    return <div></div>;
  }

  return (
    <Group className={classes.container}>
      <PaginationButton
        isEnabled={paginationPreviousPage !== null}
        isChevron
        chevronDirection="left"
        href={{
          query: { ...searchParams, page: paginationPreviousPage ?? 1 },
        }}
      />
      {paginationArray.map((el) => (
        <PaginationButton
          text={el.toString()}
          isSelected={currentPage === el}
          href={{
            query: { ...searchParams, page: el.toString() },
          }}
          key={el}
        />
      ))}
      <PaginationButton
        isEnabled={paginationNextPage !== null}
        isChevron
        chevronDirection="right"
        href={{
          query: { ...searchParams, page: paginationNextPage ?? 1 },
        }}
      />
    </Group>
  );
}