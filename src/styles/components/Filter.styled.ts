import styled from 'styled-components';

export const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 4px 7px;
  border-radius: 3px;
  border: 1px solid transparent;
  ${({ $isActive }) => $isActive && 'border-color: #e9d9d8;'}
`;

export const StyledFilter = styled.div`
  display: flex;
  padding: 5px 8px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #efefef;
  gap: 20px;
  font-size: 14px;
  div {
    display: flex;
    gap: 5px;
  }

  @media (max-width: 500px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
  }
`;
