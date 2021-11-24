import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


import './App.scss';
import useTodos from './hooks/useTodos';

function App() {

  const {todos, createTodo, completeTodo, deleteTodo} = useTodos(); 
  
  return (
    <div className="App">
     <Header />
     <TodoForm onSubmit={createTodo}/>
     <TodoList todos={todos} onComplete={completeTodo} onDelete={deleteTodo}/>
    </div>
  );
}

export default App;
