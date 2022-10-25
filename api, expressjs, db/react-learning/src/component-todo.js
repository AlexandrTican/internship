import React from 'react'

export default function Todo({todo}) {
  return (
    <div>
        <label>
            {/* checkbox based on complete flag from todo */}
            <input type="checkbox" checked = {todo.complete} />
        {todo.name}
        </label>
        {/* prints out the todo */}
    </div>
  )
}
