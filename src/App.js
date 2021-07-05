import React, {useState, useRef} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
function App() {
  const [todos,setTodos] = useState([])
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
    <TodoList todos = {todos}/>
    <input ref = {nameRef} type = "text"/>
    <button onClick= {handleAdd}>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 Left to do</div>
    </>
  );
}

export default App;
