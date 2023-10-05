import logo from './logo.svg';
import todoStore from './todoStore';
import TodoCreator from './todoCreator';
import TodoList from './todoList';

function App() {
  return (
    <StoreContext.Provider value={todoStore}>
      <TodoCreator />
      <TodoList />
    </StoreContext.Provider>
  );
}

export default App;
