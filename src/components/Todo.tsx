import { FC } from 'react';
import { TodoInterface } from '../models/todo';
import { StyledTodo } from '../styles/components/Todo.styled';

interface TodoProps extends TodoInterface {
  statusHandler: (id: number) => void;
}

export const Todo: FC<TodoProps> = ({
  title,
  status,
  id,
  statusHandler,
}): JSX.Element => {
  return (
    <StyledTodo $status={status}>
      <label>
        <input
          onInput={() => statusHandler(id)}
          type='checkbox'
          defaultChecked={status}
        />
        <span></span>
      </label>
      <p>{title}</p>
    </StyledTodo>
  );
};
