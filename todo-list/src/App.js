import todoStore from './todoStore';
import TodoCreator from './todoCreator';
import TodoList from './todoList';
import StoreContext from './storeContext';

function App() {
  return (
    <StoreContext.Provider value={todoStore}>
      <TodoCreator />
      <TodoList />
    </StoreContext.Provider>
  );
}

export default App;
