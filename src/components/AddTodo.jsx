import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function AddTodo() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const {addTodo} = useTodo()

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(!title && !description) return

    const todo = {
      title: title.trim(),
      description: description.trim(),
    }

    addTodo(todo)
    setDescription('')
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-4'>
      <input onChange={(e)=> setTitle(e.target.value)} value={title} className='w-full max-w-md px-4 py-2 rounded-xl border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow' type="text" placeholder='Write a todo title...'/>
      <input onChange={(e)=> setDescription(e.target.value)} value={description} className='w-full max-w-md px-4 py-2 rounded-xl border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow' type="text" placeholder='Write a todo description...'/>
      <button className='w-full max-w-md bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl transition duration-200 shadow' type='submit'>Add</button>
    </form>
  )
}

export default AddTodo