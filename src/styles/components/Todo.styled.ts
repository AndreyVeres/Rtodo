import styled from 'styled-components';

export const StyledTodo = styled.li<{ $status: boolean }>`
  background-color: ${({ theme }) => theme.todoBackground};
  border-top: 1px solid #efefef;
  padding: 5px 7px;
  display: flex;
  gap: 20px;
  font-size: 20px;
  p {
    text-decoration: ${({ $status }) => ($status ? 'line-through' : '')};
  }

  label {
    position: relative;
    cursor: pointer;
    padding: 0 10px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 1px solid #edf1f3;
  }

  span::after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid green;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }
`;
