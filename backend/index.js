const express = require("express");
const app = express();
const cors = require("cors");
const { todoSchema } = require("./types");
const { todos } = require("./db");

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {

  const payload = req.body;
  const parsedPayload = todoSchema.safeParse(payload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Wrong inputs recieved"
    })
    return;
  } else {
    const createTodo = await todos.create({
      title: payload.title,
      description: payload.description
    })
    if (!createTodo) {
      res.status(411).json({
        msg: "Could not create todo"
      })
      return;
    } else {
      res.status(200).json({
        msg: "Todo has been created successfully"
      })
    }
  }
});


app.get("/todos", async (req, res) => {

  const getTodos = await todos.find({});
  if (!getTodos) {
    res.status(411).json({
      msg: "Could not retrieve todos"
    })
    return;
  } else {
    res.status(200).json({
      todos: getTodos
    })
  }

});


app.delete("/delete_todo", async (req, res) => {

  const title = req.title;
  const deleteTodo = await todos.deleteOne({
    title: title
  })
  if (!deleteTodo) {
    res.status(411).json({
      msg: "Todo was not deleted"
    })
    return;
  } else {
    res.status(200).json({
      msg: "Todo has been successfully deleted"
    })
  }
});


app.put("/update_todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const updateTodo = await todos.updateOne({
    title: title,
    description: description
  }, {
    isCompleted: true
  })

  if (!updateTodo) {
    res.status(411).json({
      msg: "Todo has not been updated"
    })
    return;
  } else { res.status(200).json({ msg: "Todo has been updated" }) }
})


app.listen(3000);
