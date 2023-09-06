import { FC } from 'react';
import { StyledFilter, FilterButton } from '../styles/components/Filter.styled';

interface FilterProps {
  count: number;
  filterTodosHandler: (status: boolean | null) => void;
  activeFilter: boolean | null;
  clearTodosHandler: () => void;
}

const filterButtons = [
  { label: 'All', filterValue: null },
  { label: 'Active', filterValue: false },
  { label: 'Completed', filterValue: true },
];

export const Filter: FC<FilterProps> = ({
  count,
  filterTodosHandler,
  activeFilter,
  clearTodosHandler,
}): JSX.Element => {
  return (
    <StyledFilter>
      <p>Items left:{count}</p>
      <div>
        {filterButtons.map(({ label, filterValue }) => (
          <FilterButton
            key={label}
            $isActive={activeFilter === filterValue}
            onClick={() => filterTodosHandler(filterValue)}
          >
            {label}
          </FilterButton>
        ))}
      </div>
      <button onClick={clearTodosHandler}>Clear completed </button>
    </StyledFilter>
  );
};
