import { useEffect, useState } from 'react';
import todoService from './API/api';
import { TodoProvider } from './context/TodoContext';
import { AddTodo, Todo } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    todoService
    .createTodo(todo)
    .then((res) => setTodos((todos) => [...todos, res.data]));
  };

  const updateTodo = (id, newTodo) => {
    todoService
      .updateTodo(id, newTodo)
      .then((res) =>
        setTodos((prevTodos) =>
          prevTodos.map((todoObj) => (todoObj._id === id ? res.data : todoObj))
        )
      );
  };

  const deleteTodo = (id) => {
    todoService
      .deleteTodo(id)
      .then((res) => setTodos((prevTodos) => prevTodos.filter((todoObj) => todoObj._id !== id)));
  };

  const toggleComplete = (id) => {
    todoService
      .toggleTodo(id)
      .then((res) =>
        setTodos((prevTodos) =>
          prevTodos.map((todoObj) => (todoObj._id === id ? {...todoObj, isComplete: res.data.isComplete} : todoObj))
        )
      )
  };

  useEffect(() => {
    todoService.getAllTodos().then((todos) => setTodos(todos.data));
  }, []);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen w-full bg-gray-800 flex flex-col text-white px-4 py-10 items-center gap-8">
        <div className="w-full max-w-xl flex justify-center">
          <AddTodo />
        </div>
        <div className="w-full max-w-xl flex flex-col items-center gap-4">
          {todos
            ? todos.map((todo) => (
                <div key={todo._id} className="w-full">
                  <Todo todo={todo} />
                </div>
              ))
            : ''}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
