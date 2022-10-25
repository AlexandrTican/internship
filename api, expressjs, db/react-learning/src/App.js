// useState hook for using states
// useRef allows you to reference html, 
// in this case input
// useEffect which takes another function as first parameter
// every single time it will call a function
// when it will run - based on array of dependencies
import React, { useState ,useRef,useEffect} from 'react';
import ToDoList from './ToDoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // default state : on start, empty array! (becasue we have no ToDos)
//  const [todos, setTodos] =  useState([{id:1, name:'Todo',complete:false}])
const [todos, setTodos] =  useState([])
const todoNameRef = useRef()
// takes event property()?
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
},[todos]) 
// array of dependencies
function handleAddTodo(e) {
  // value of current input is assigned to name
  const name =  todoNameRef.current.value
//  if empty todo - return
  if(name === '') return
//  for testing purposes
  console.log(name)
  // function that gives us previous todos 
  // which allows us to change ( add more todos)
  // we add a new todo to that list
  setTodos(prevTodos => {
    return[...prevTodos, {id: uuidv4(), name:name, 
      complete:false}]
  })
  // after we press button, it cleans input field
  todoNameRef.current.value = null
}
  return (
    // fragment = empty element, you return only this empty element
    // that can have multiple things in it
    < >
    {/* its a prop  - todos, we passed the todos from above*/}
    <ToDoList todos = {todos}/>
    <input ref ={todoNameRef} type = "text" />
    <button onClick={handleAddTodo}>Add To-Do</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  )
//  react is managing states, so we need to store all our elements inside a state
// so we can render our todos
}
  
export default App;
