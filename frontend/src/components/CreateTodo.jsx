import { useEffect, useState } from "react"
import axios from "axios";
export function CreateTodos({ todos, setTodos }) {

  //const [todos, setTodos] = useState([{
  //  title: "",
  //  description: "",
  //  isCompleted: false
  // }]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");



  function addTodo() {

    axios.post("http://localhost:3000/", {
      title: title,
      description: description,
    })
      .then((res) => {
        const json = res.data.msg;
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      })

    setTodos([...todos, {
      title: title,
      description: description,
      isCompleted: false
    }])
  }





  return <div>
    <input type="text" placeholder="Title" onChange={(e) => {
      setTitle(e.target.value);
    }} /><br />
    <input type="text" placeholder="Description" onChange={(e) => {
      setDescription(e.target.value);
    }} /><br />
    <button onClick={addTodo}>Add Todo</button>

  </div>

}
