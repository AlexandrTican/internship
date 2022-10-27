import React from 'react'
import Todo from './component-todo'

export default function ToDoList({todos, toggleTodo}) {
  return (
   todos.map(todo => {
    // we loop over it inside of an array
    // for each todo we return a todo element
    // todo component , we pass our todo
    // inside the todo
    return <Todo key ={todo.id} toggleTodo = {toggleTodo} todo = {todo} />
    // in order to avoid refreshing at each element
    // we set a key, which is the name of the current todo element
   })
  )
}
