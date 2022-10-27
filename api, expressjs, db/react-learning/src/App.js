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
// another use effect to load the useEffect

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos])  
}, [])
function toggleTodo(id) {
  // we create a copy, which we modify - rule for react
  // better to copy
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id )
  todo.complete = !todo.complete
  setTodos(newTodos)
}

// stores to local storage
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
},[todos]) 
// array of dependencies
function handleAddTodo(e) {
  // value of current input is assigned to name
  const name =  todoNameRef.current.value
//  if empty todo - return
  if(name === '') return
//  for testing purpos  es
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
// function for removing completed tasks ( todos)
function handleClearTodos() {
  // declared newtodos, in it we assign values from todo which are
  // filtered - complete ones are removed( checkmarked)
  const newTodos = todos.filter(todo => !todo.complete)
  // we set the list of todos as in the variable above!
  setTodos(newTodos)
}

  return (
    // fragment = empty element, you return only this empty element
    // that can have multiple things in it
    < >
    {/* its a prop  - todos, we passed the todos from above*/}
    <ToDoList todos = {todos} toggleTodo = {toggleTodo}/>
    <input ref ={todoNameRef} type = "text" />
    <button onClick={handleAddTodo}>Add To-Do</button>
    <button onclick = {handleClearTodos}>Clear Completed Todos</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
//  react is managing states, so we need to store all our elements inside a state
// so we can render our todos
}
  
export default App;
