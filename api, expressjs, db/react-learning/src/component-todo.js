import React from 'react'

export default function Todo({todo, toggleTodo}) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div>
        <label>
            {/* checkbox based on complete flag from todo */}
            <input type="checkbox" checked = {todo.complete} 
            onChange={handleTodoClick} />
        {todo.name}
        </label>
        {/* prints out the todo */}
    </div>
  )
}
