import { useContext, createContext } from 'react';

export const TodoContext = createContext({
  todos: [
    {
      _id: 1,
      title: '',
      description: '',
      isComplete: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, newTodo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export function useTodo(){
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
