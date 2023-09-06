import styled from 'styled-components';

export const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${({ theme }) => theme.todoBackground};
  position: relative;
  input {
    border: none;
    font-size: 22px;
    padding: 20px 30px;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: -1;
    background-color: ${({ theme }) => theme.todoBackground};
    border-radius: 3px;
  }

  &::before {
    top: 10px;
    left: 10px;
  }

  &::after {
    top: 5px;
    left: 5px;
  }
`;
