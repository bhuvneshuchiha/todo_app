import { useEffect, useState } from 'react'
import './App.css'
import { Todos } from "./components/Todos"
import { CreateTodos } from './components/CreateTodo';
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);


  function showTodos() {

    axios.get("http://localhost:3000/todos", {})
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <CreateTodos setTodos={setTodos} todos={todos} />
      <Todos todos={todos} />
      <button onClick={showTodos}>Show all todos</button>


    </div>
  )
}


export default App
