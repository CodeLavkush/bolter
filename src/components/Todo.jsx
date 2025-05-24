import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function Todo({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setdescription] = useState(todo.description);

  const { deleteTodo, updateTodo, toggleComplete } = useTodo();

  const handleUpdate = () => {
    updateTodo(todo._id, { ...todo, title: title, description: description });
    setIsEditable(false);
  };

  const handleDelete = () => {
    deleteTodo(todo._id);
  };

  const handleToggle = ()=>{
    toggleComplete(todo._id)
  }


  return (
    <div className={`max-w-xl w-full p-4 rounded-xl shadow-md text-white flex flex-col gap-3 ${todo.isComplete ? 'bg-green-600' : 'bg-gray-700'}`}>
      <div className='w-full'>
        <input className='' type="checkbox" value={todo.isComplete} onChange={handleToggle}/>
      </div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className={`w-full max-w-md px-4 py-2 rounded-lg placeholder-gray-500 transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${
          isEditable
            ? 'text-black bg-white border-1 border-white'
            : 'text-white border-none bg-gray-700'
        }`}
        type="text"
        value={title}
        disabled={!isEditable}
      />
      <input
        onChange={(e) => setdescription(e.target.value)}
        className={`w-full max-w-md px-4 py-2 rounded-lg text-black placeholder-gray-500 transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${
          isEditable
            ? 'text-black bg-white border-1 border-white'
            : 'text-white border-none bg-gray-700'
        }`}
        type="text"
        value={description}
        disabled={!isEditable}
      />
      <div className="flex justify-end gap-2 mt-auto">
        {isEditable ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        ) : ( !todo.isComplete ? (
          <button
            onClick={() => setIsEditable(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        ) : null
        )}
        <button
          className="px-4 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
