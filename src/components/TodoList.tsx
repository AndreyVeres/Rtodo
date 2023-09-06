import useLocalStorage from '../hooks/useLocalStorage';
import { useInput } from '../hooks/useInput';
import { Todo } from './Todo';
import { Filter } from './Filter';
import { useMemo, useState } from 'react';
import { TodoInterface } from '../models/todo';
import { StyledTodoList } from '../styles/components/TodoList.styled';

export const TodoList = () => {
  const [todos, setTodos] = useLocalStorage<TodoInterface[]>('todos', []);
  const [filter, setFilter] = useState<boolean | null>(null);
  const filteredTodos = useMemo(() => {
    if (filter === null) {
      return todos;
    }
    return todos.filter((t) => t.status === filter);
  }, [filter, todos]);
  const { setValue: setInputValue, ...todoInput } = useInput('');

  const createTodoHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const todo: TodoInterface = {
      id: Date.now(),
      status: false,
      title: todoInput.value,
    };
    setTodos([...todos, todo]);
    setInputValue('');
  };

  const changeStatusHandler = (id: number) => {
    const copyTodos = [...todos];
    const todo = todos.findIndex((t) => t.id === id);
    todos[todo].status = !todos[todo].status;
    setTodos(copyTodos);
  };

  const filterTodosHandler = (status: boolean | null) => {
    setFilter(status);
  };

  const clearTodosHandler = () => {
    const activeTodos = todos.filter((t) => t.status === false);
    setTodos(activeTodos);
  };
  return (
    <StyledTodoList>
      <input
        {...todoInput}
        type='text'
        placeholder='what need to be done ?'
        onKeyDown={(e) => createTodoHandler(e)}
      />
      <ul>
        {filteredTodos
          .sort((a, b) => b.id - a.id)
          .map((todo) => (
            <Todo {...todo} key={todo.id} statusHandler={changeStatusHandler} />
          ))}
      </ul>
      <Filter
        count={filteredTodos.length}
        filterTodosHandler={filterTodosHandler}
        clearTodosHandler={clearTodosHandler}
        activeFilter={filter}
      />
    </StyledTodoList>
  );
};
