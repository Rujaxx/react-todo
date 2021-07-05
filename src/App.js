import React, {useState, useRef, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";

const LOCALSTORAGE_KEY = "asdasde"
function App() {
  const [todos,setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(todos))
  }, [todos])

  function toggleTodo (id){
   const newTodos = [...todos]
   const todo = newTodos.find(todo => todo.id === id)
   todo.complete = !todo.complete
   setTodos(newTodos)
  }

  function handleAdd (e) {
    const name = nameRef.current.value
    if(name === ""){
      return alert("enter task please")
    }
    else{
      setTodos (prevTodos => {
       return [...prevTodos,{id: uuidv4(), name:name , complete : false }]
      })
    }
  }
  const nameRef = useRef(); 
  return (
    <>
    <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
    <input ref = {nameRef} type = "text"/>
    <button onClick= {handleAdd}>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 Left to do</div>
    </>
  );
}

export default App;
