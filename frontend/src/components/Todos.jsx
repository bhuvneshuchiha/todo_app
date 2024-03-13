import axios from "axios";


export function Todos({ todos }) {

  function updateStatus(todo) {
    if (!todo.isCompleted) {
      axios.put("http://localhost:3000/update_todo", {
        title: todo.title,
        description: todo.description
      })
        .then((res) => {
          console.log(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }


  return <div>
    {todos.map((todo, index) => {
      return <div key={index}>
        <h2>{todo.title}</h2>
        <h2>{todo.description}</h2>
        <button onClick={() => updateStatus(todo)}>{todo.isCompleted ? "Done" : "Mark as done"}</button>
      </div>
    })}


  </div>



}
