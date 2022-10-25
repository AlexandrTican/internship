// useState hook for using states
import React, { useState } from 'react';
import ToDoList from './ToDoList'

function App() {
  // default state : on start, empty array! (becasue we have no ToDos)
 const [todos, setTodos] =  useState([])
  return (
    // fragment = empty element, you return only this empty element
    // that can have multiple things in it
    <>
    <ToDoList />
    <input type = "text" />
    <button>Add To-Do</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
//  react is managing states, so we need to store all our elements inside a state
// so we can render our todos
}
  
export default App;
