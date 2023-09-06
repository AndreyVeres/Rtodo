import { TodoList } from './components/TodoList';
import { StyledMain, StyledTitle } from './styles/components/App.styled';

export const App = () => {
  return (
    <>
      <StyledMain>
        <StyledTitle>TODOS</StyledTitle>
        <TodoList />
      </StyledMain>
    </>
  );
};
